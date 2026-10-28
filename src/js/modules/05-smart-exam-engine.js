(function initSmartExamSystem() {
  // ---------------- CÔNG CỤ TOÁN HỌC & RENDER KATEX ----------------
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
  const lcm = (a, b) => (!a || !b) ? 0 : Math.abs((a / gcd(a, b)) * b);
  const eulerPhi = n => { let c = 0; for (let k = 1; k <= n; k++) if (gcd(k, n) === 1) c++; return c; };
  const getDivisors = n => { const d = []; for (let i = 1; i <= n; i++) if (n % i === 0) d.push(i); return d; };
  const randChoice = arr => arr[Math.floor(Math.random() * arr.length)];
  const shuffleArr = arr => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  function renderMathInContainer(el) {
  if (!el) return;
  // 1. Tự động gọi KaTeX (đang nhúng sẵn trong file HTML)
  if (typeof window.renderMathInElement === "function") {
    try {
      window.renderMathInElement(el, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "\\[", right: "\\]", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false }
        ],
        throwOnError: false
      });
    } catch (_) {}
  }
  // 2. Tự động gọi MathJax (nếu có sử dụng MathJax)
  if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
    window.MathJax.typesetPromise([el]).catch(() => {});
  }
}

  /* @input: js/data/exam-bank.js */

  // ====================================================================
  // 3. QUÉT SẠCH CÁC THẺ TRONG DOM ĐỂ MỞ RỘNG KHO CÂU HỎI (CLEAN LATEX)
  // ====================================================================
  function extractCleanMathText(node) {
    if (!node) return "";
    const clone = node.cloneNode(true);
    // Thay thế mỗi thẻ .katex bằng công thức LaTeX gốc nằm trong <annotation> để không bị lặp chữ
    clone.querySelectorAll(".katex-display, .katex").forEach(kEl => {
      const ann = kEl.querySelector('annotation[encoding="application/x-tex"]');
      if (ann) {
        const isDisp = kEl.classList.contains("katex-display");
        kEl.replaceWith(document.createTextNode(isDisp ? ` $$${ann.textContent.trim()}$$ ` : ` $${ann.textContent.trim()}$ `));
      }
    });
    clone.querySelectorAll("button, input, select, form, .bm-star-btn").forEach(el => el.remove());
    return clone.textContent.replace(/\s+/g, " ").trim();
  }

  function harvestDomQuestions() {
    const harvested = [];
    const cards = [];
    document.querySelectorAll("main.content .math-card.def:not(.cyclic-calculator), main.content .math-card.thm").forEach(card => {
      const chWrap = card.closest(".chapter-content[id^='tab-c']");
      if (!chWrap || chWrap.id === "tab-compare") return;
      const chNum = parseInt(chWrap.id.replace(/^tab-ch?/, ""), 10);
      if (!Number.isFinite(chNum)) return;
      const label = card.querySelector(".card-header .label")?.textContent.trim() || "";
      const tag = card.querySelector(".card-header .tag")?.textContent.trim() || "";
      const bodyEl = card.querySelector(".card-body");
      const cleanBody = extractCleanMathText(bodyEl);
      if (tag && cleanBody.length > 35) {
        cards.push({
          ch: chNum,
          kind: card.classList.contains("def") ? "Định nghĩa" : "Định lý",
          label,
          tag,
          snippet: cleanBody.length > 210 ? cleanBody.slice(0, 205) + "…" : cleanBody,
          cardId: card.id
        });
      }
    });

    cards.forEach((c, idx) => {
      const otherTags = cards.filter(x => x.tag !== c.tag).map(x => `${x.kind}: ${x.tag}`);
      if (otherTags.length < 3) return;
      const wrongs = shuffleArr(otherTags).slice(0, 3);
      const correct = `${c.kind}: ${c.tag}`;
      const opts = shuffleArr([correct, ...wrongs]);
      harvested.push({
        ch: c.ch,
        level: c.kind === "Định nghĩa" ? "recognition" : "understanding",
        q: `Trong ${CHAPTER_META[c.ch]?.name || "Giáo trình"}, phát biểu sau đây là nội dung cốt lõi của khái niệm hoặc định lý nào?<br><blockquote style="margin:10px 0 0;padding:10px 14px;border-left:3.5px solid var(--brand);background:var(--eq-bg);border-radius:8px;font-size:0.96rem;">"${c.snippet}"</blockquote>`,
        opts,
        ans: opts.indexOf(correct),
        exp: `Đây chính là nội dung của <b>${c.label} — ${c.tag}</b> thuộc ${CHAPTER_META[c.ch]?.name}.`,
        sourceCardId: c.cardId
      });
    });
    return harvested;
  }

  // ====================================================================
  // 4. KHỞI TẠO GIAO DIỆN & ĐIỀU KHIỂN PHÒNG THI TRONG #practiceReviewView
  // ====================================================================
  const HISTORY_KEY = "ctds_smart_exam_history_v2";
  let currentExam = null;
  let timerInterval = null;

  function setupSmartReviewUI() {
    const reviewView = document.getElementById("practiceReviewView");
    if (!reviewView) return;

    // Vá lỗi đồng bộ hiển thị khi bấm chuyển giữa 2 Sub-tabs ở #part-5
    const workspaceContainer = document.querySelector(".container");
    const syncReviewLayout = () => {
      const isPart5 = document.getElementById("part-5")?.classList.contains("active");
      const isReview = !reviewView.hidden;
      if (workspaceContainer) {
        workspaceContainer.classList.toggle("is-review-mode", Boolean(isPart5 && isReview));
      }
    };
    document.querySelectorAll(".practice-segment-btn, .part-tab").forEach(btn => {
      btn.addEventListener("click", () => setTimeout(syncReviewLayout, 10));
    });

    reviewView.innerHTML = `
      <div class="smart-exam-hero">
        <div>
          <h2>Hệ Thống Soạn Đề &amp; Tự Luyện</h2>
        </div>
        <div class="smart-exam-stats-Row">
          <div class="smart-stat-pill"><strong id="seStatBank">100+</strong><span>Biến thể câu hỏi</span></div>
          <div class="smart-stat-pill"><strong id="seStatDone">0</strong><span>Đề đã hoàn thành</span></div>
          <div class="smart-stat-pill"><strong id="seStatBest">—</strong><span>Điểm cao nhất</span></div>
        </div>
      </div>

      <!-- KHỐI CẤU HÌNH ĐỀ THÔNG MINH -->
      <section class="smart-builder-card" id="smartBuilderCard">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:10px;">
          <strong style="font-size:15px; color:var(--brand); font-family:var(--font-ui);">⚡ 1. Chọn Mẫu Đề:</strong>
          <div style="display:flex; gap:8px;">
            <button type="button" class="scratch-sym-btn" id="seCheckAllCh">✔ Chọn tất cả chương</button>
            <button type="button" class="scratch-sym-btn" id="seUncheckAllCh">✗ Bỏ chọn</button>
          </div>
        </div>
        <div class="smart-preset-bar" id="sePresetBar">
          <button type="button" class="smart-preset-btn active" data-preset="all">Toàn bộ Giáo trình (Ch.0–9)</button>
          <button type="button" class="smart-preset-btn" data-preset="midterm">Lý thuyết Nhóm (Ch.0–5)</button>
          <button type="button" class="smart-preset-btn" data-preset="final">Vành &amp; Trường (Ch.6–9)</button>
          <button type="button" class="smart-preset-btn" data-preset="traps">Bẫy &amp; Vận dụng cao</button>
          <button type="button" class="smart-preset-btn" data-preset="quick10">⚡ Phản xạ nhanh (10 câu - 10 phút)</button>
        </div>

        <div class="smart-config-grid">
          <div>
            <label class="group-title" style="display:block; font-size:12.5px; font-weight:800; text-transform:uppercase; color:var(--mute);">📚 2. Phạm vi ôn tập:</label>
            <div class="smart-chapter-grid" id="seChapterGrid">
              ${CHAPTER_META.map(c => `
                <label class="smart-ch-chip checked">
                  <input type="checkbox" name="seChapter" value="${c.ch}" checked>
                  <span>${c.name}</span>
                </label>
              `).join("")}
            </div>
          </div>

          <div class="smart-options-col">
            <div class="smart-control-group">
              <label class="group-title">🧠 3. Mức độ (Bloom Taxonomy):</label>
              <div class="smart-level-pills" id="seLevelPills">
                <label class="smart-level-pill checked"><input type="checkbox" name="seLevel" value="recognition" checked> 🟢 Nhận biết</label>
                <label class="smart-level-pill checked"><input type="checkbox" name="seLevel" value="understanding" checked> 🟡 Hiểu &amp; Bẫy</label>
                <label class="smart-level-pill checked"><input type="checkbox" name="seLevel" value="application" checked> 🔴 Vận dụng</label>
              </div>
            </div>

            <div class="smart-select-row">
              <div class="smart-select-box">
                <span>Số lượng câu</span>
                <select id="seQuestionCount">
                  <option value="10">10 câu</option>
                  <option value="15">15 câu</option>
                  <option value="20" selected>20 câu</option>
                  <option value="25">25 câu</option>
                </select>
              </div>
              <div class="smart-select-box">
                <span>Chế độ làm bài</span>
                <select id="seExamMode">
                  <option value="practice" selected>💡 Luyện tập (Chấm &amp; giải ngay)</option>
                  <option value="exam">📝 Kiểm tra (Nộp bài mới chấm)</option>
                </select>
              </div>
              <div class="smart-select-box">
                <span>Thời gian</span>
                <select id="seTimeLimit">
                  <option value="0">∞ Không giới hạn</option>
                  <option value="10">⏱️ 10 phút</option>
                  <option value="20" selected>⏱️ 20 phút</option>
                  <option value="30">⏱️ 30 phút</option>
                  <option value="45">⏱️ 45 phút</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="smart-builder-footer">
          <div id="sePoolStatus" style="font-size:13px; color:var(--mute); font-weight:600;">
            ✨ Hệ thống kết hợp câu hỏi lý thuyết và sinh tự động biến số toán học mới.
          </div>
          <button type="button" class="smart-generate-btn" id="seGenerateBtn">
            🚀 Tạo Đề
          </button>
        </div>
      </section>

      <!-- KHU VỰC TỔNG KẾT KẾT QUẢ (ẨN KHI CHƯA NỘP BÀI) -->
      <div id="seResultContainer" hidden></div>

      <!-- KHÔNG GIAN LÀM BÀI 2 CỘT -->
      <section class="smart-exam-workspace" id="seWorkspace" hidden>
        <div class="smart-question-card" id="seQuestionCard"></div>
        <aside class="smart-palette-sidebar" id="sePaletteSidebar"></aside>
      </section>

      <!-- LỊCH SỬ CÁC ĐỀ ĐÃ LÀM -->
      <section class="smart-builder-card" id="seHistoryCard" style="margin-top:22px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <strong style="font-size:14.5px; color:var(--brand); font-family:var(--font-ui);">📊 Lịch sử các đề đã luyện tập gần đây</strong>
          <button type="button" class="scratch-sym-btn" id="seClearHistoryBtn" style="color:var(--warn-color);">🗑️ Xóa lịch sử</button>
        </div>
        <div id="seHistoryList" style="font-size:13.5px; color:var(--mute);"></div>
      </section>
    `;

    // Đồng bộ hiệu ứng chọn Checkbox Chương & Mức độ
    reviewView.querySelectorAll(".smart-ch-chip input, .smart-level-pill input").forEach(inp => {
      inp.addEventListener("change", () => {
        inp.closest("label").classList.toggle("checked", inp.checked);
      });
    });

    document.getElementById("seCheckAllCh").addEventListener("click", () => {
      reviewView.querySelectorAll('input[name="seChapter"]').forEach(cb => {
        cb.checked = true;
        cb.closest("label").classList.add("checked");
      });
    });
    document.getElementById("seUncheckAllCh").addEventListener("click", () => {
      reviewView.querySelectorAll('input[name="seChapter"]').forEach(cb => {
        cb.checked = false;
        cb.closest("label").classList.remove("checked");
      });
    });

    // Xử lý 5 nút Mẫu Đề Cài Sẵn (Presets)
    reviewView.querySelectorAll("#sePresetBar .smart-preset-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        reviewView.querySelectorAll("#sePresetBar .smart-preset-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const preset = btn.dataset.preset;
        const chBoxes = [...reviewView.querySelectorAll('input[name="seChapter"]')];
        const lvBoxes = [...reviewView.querySelectorAll('input[name="seLevel"]')];

        const setCh = allowed => chBoxes.forEach(cb => {
          cb.checked = allowed.includes(+cb.value);
          cb.closest("label").classList.toggle("checked", cb.checked);
        });
        const setLv = allowed => lvBoxes.forEach(cb => {
          cb.checked = allowed.includes(cb.value);
          cb.closest("label").classList.toggle("checked", cb.checked);
        });

        if (preset === "all") {
          setCh([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
          setLv(["recognition", "understanding", "application"]);
          document.getElementById("seQuestionCount").value = "20";
          document.getElementById("seTimeLimit").value = "20";
        } else if (preset === "midterm") {
          setCh([0, 1, 2, 3, 4, 5]);
          setLv(["recognition", "understanding", "application"]);
          document.getElementById("seQuestionCount").value = "20";
          document.getElementById("seTimeLimit").value = "20";
        } else if (preset === "final") {
          setCh([6, 7, 8, 9]);
          setLv(["recognition", "understanding", "application"]);
          document.getElementById("seQuestionCount").value = "15";
          document.getElementById("seTimeLimit").value = "20";
        } else if (preset === "traps") {
          setCh([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
          setLv(["understanding", "application"]);
          document.getElementById("seQuestionCount").value = "15";
          document.getElementById("seExamMode").value = "practice";
        } else if (preset === "quick10") {
          setCh([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
          setLv(["recognition", "understanding", "application"]);
          document.getElementById("seQuestionCount").value = "10";
          document.getElementById("seTimeLimit").value = "10";
        }
      });
    });

    document.getElementById("seGenerateBtn").addEventListener("click", generateSmartExam);
    document.getElementById("seClearHistoryBtn").addEventListener("click", () => {
      localStorage.removeItem(HISTORY_KEY);
      renderHistory();
    });

    renderHistory();
    // Tự động khởi tạo sẵn 1 đề thông minh 20 câu ngay lần đầu để màn hình luôn đầy đặn, trực quan
    generateSmartExam();
  }

  // ====================================================================
  // 5. THUẬT TOÁN TỔNG HỢP & PHÂN BỔ CÂU HỎI THÔNG MINH
  // ====================================================================
  function generateSmartExam() {
    const reviewView = document.getElementById("practiceReviewView");
    const selectedChapters = [...reviewView.querySelectorAll('input[name="seChapter"]:checked')].map(cb => +cb.value);
    const selectedLevels = [...reviewView.querySelectorAll('input[name="seLevel"]:checked')].map(cb => cb.value);

    if (!selectedChapters.length) {
      alert("Vui lòng chọn ít nhất 1 chương để tạo đề!");
      return;
    }
    if (!selectedLevels.length) {
      alert("Vui lòng chọn ít nhất 1 mức độ nhận thức!");
      return;
    }

    const count = parseInt(document.getElementById("seQuestionCount").value, 10) || 20;
    const mode = document.getElementById("seExamMode").value;
    const mins = parseInt(document.getElementById("seTimeLimit").value, 10) || 0;

    // 1. Sinh 25 câu hỏi động mới tinh từ các hàm thuật toán
    const dynamicPool = [];
    for (let round = 0; round < 3; round++) {
      DYNAMIC_GENERATORS.forEach(genFn => {
        try {
          const item = genFn();
          if (selectedChapters.includes(item.ch) && selectedLevels.includes(item.level)) {
            dynamicPool.push(item);
          }
        } catch (_) {}
      });
    }

    // 2. Lọc câu hỏi lý thuyết & bẫy phản ví dụ tinh tuyển (đồng bộ explanations khi đảo đáp án)
const curatedPool = CURATED_BANK.filter(item =>
  selectedChapters.includes(item.ch) && selectedLevels.includes(item.level)
).map(item => {
  const indexedOpts = item.opts.map((optText, origIdx) => {
    const origLetter = String.fromCharCode(65 + origIdx);
    return {
      text: optText,
      isCorrect: origIdx === item.ans,
      specificExp: item.explanations?.[origLetter] || null
    };
  });

  const shuffled = shuffleArr(indexedOpts);
  const newOpts = [];
  const newExplanations = {};
  let newAns = 0;

  shuffled.forEach((entry, newIdx) => {
    const newLetter = String.fromCharCode(65 + newIdx);
    newOpts.push(entry.text);
    if (entry.isCorrect) newAns = newIdx;
    if (entry.specificExp) newExplanations[newLetter] = entry.specificExp;
  });

  return {
    ...item,
    opts: newOpts,
    ans: newAns,
    explanations: Object.keys(newExplanations).length ? newExplanations : item.explanations
  };
});

    // 3. Quét thêm câu hỏi nhận diện Định nghĩa/Định lý sạch từ DOM
    const domPool = harvestDomQuestions().filter(item =>
      selectedChapters.includes(item.ch) && selectedLevels.includes(item.level)
    );

    // Kết hợp ưu tiên: Sinh động + Lý thuyết tinh tuyển trước, DOM bổ sung sau
    const primaryPool = shuffleArr([...dynamicPool, ...curatedPool]);
    const secondaryPool = shuffleArr(domPool);
    const combined = [];
    const seenStems = new Set();

    for (const item of [...primaryPool, ...secondaryPool]) {
      if (!seenStems.has(item.q)) {
        seenStems.add(item.q);
        combined.push(item);
      }
      if (combined.length >= count) break;
    }

    // Nếu người dùng lọc quá hẹp mà vẫn thiếu câu, sinh thêm biến số động trong chương đã chọn
    let safety = 0;
    while (combined.length < count && safety < 40) {
      safety++;
      const genFn = randChoice(DYNAMIC_GENERATORS);
      const item = genFn();
      if (selectedChapters.includes(item.ch)) {
        combined.push(item);
      }
    }

    const finalQuestions = combined.slice(0, count);
    const code = "CTDS-" + Math.random().toString(36).substring(2, 6).toUpperCase();

    if (timerInterval) clearInterval(timerInterval);
    currentExam = {
      code,
      mode,
      totalSeconds: mins * 60,
      remainingSeconds: mins * 60,
      questions: finalQuestions,
      answers: new Array(finalQuestions.length).fill(null),
      flagged: new Set(),
      idx: 0,
      submitted: false,
      createdAt: new Date().toLocaleString("vi-VN")
    };
    window.getCurrentSmartExam = () => currentExam;

    document.getElementById("seResultContainer").hidden = true;
    document.getElementById("seWorkspace").hidden = false;

    if (mins > 0) {
      timerInterval = setInterval(() => {
        if (!currentExam || currentExam.submitted) {
          clearInterval(timerInterval);
          return;
        }
        currentExam.remainingSeconds--;
        updateTimerDisplay();
        if (currentExam.remainingSeconds <= 0) {
          clearInterval(timerInterval);
          submitSmartExam(true);
        }
      }, 1000);
    }

    renderActiveExam();
  }

  function formatTime(sec) {
    if (sec <= 0) return "00:00";
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function updateTimerDisplay() {
    const el = document.getElementById("seTimerDigits");
    const box = document.getElementById("seTimerBox");
    if (!el || !currentExam) return;
    if (currentExam.totalSeconds === 0) {
      el.textContent = "∞ Tự do";
      return;
    }
    el.textContent = formatTime(currentExam.remainingSeconds);
    if (box) {
      box.classList.toggle("urgent", currentExam.remainingSeconds > 0 && currentExam.remainingSeconds <= 60);
    }
  }

function checkAnswer(qItem, chosenIdx) {
  if (!qItem) return "";
  const correctLetter = String.fromCharCode(65 + qItem.ans);
  const correctExp = qItem.explanations?.[correctLetter] || qItem.exp || "";

  // Trường hợp đã nộp bài nhưng câu này người dùng bỏ trống
  if (chosenIdx === null || chosenIdx === undefined) {
    return `
      <div class="smart-explain-box" id="seExplainBox">
        <div style="font-weight:800; margin-bottom:6px; color:#dc2626;">
          ⚠️ Bạn chưa chọn đáp án (Đáp án đúng là ${correctLetter}). Giải thích chi tiết:
        </div>
        <div style="line-height:1.65;">${correctExp}</div>
      </div>
    `;
  }

  const chosenLetter = String.fromCharCode(65 + chosenIdx);
  const chosenExp = qItem.explanations?.[chosenLetter];

  // TRƯỜNG HỢP 1: CHỌN ĐÚNG
  if (chosenIdx === qItem.ans) {
    return `
      <div class="smart-explain-box" id="seExplainBox">
        <div style="font-weight:800; margin-bottom:6px; color:#059669;">
          ✅ Chính xác! (Đáp án ${correctLetter}). Lời giải chi tiết:
        </div>
        <div style="line-height:1.65;">${correctExp}</div>
      </div>
    `;
  }

  // TRƯỜNG HỢP 2: CHỌN SAI -> Hiện rõ [Phần 1] và [Phần 2]
  const wrongReason = chosenExp
    ? chosenExp.replace(/^sai\s+vì\s*:?\s*/i, "")
    : `Phương án ${chosenLetter} không thỏa mãn các tiên đề hoặc tính chất của cấu trúc đang xét.`;

  return `
    <div class="smart-explain-box" id="seExplainBox">
      <div style="padding-bottom:10px; margin-bottom:10px; border-bottom:1px dashed var(--line);">
        <div style="font-weight:800; margin-bottom:4px; color:#dc2626;">
          ❌ Bạn đã chọn ${chosenLetter}:
        </div>
        <div style="line-height:1.65;">
          <b>Sai vì:</b> ${wrongReason}
        </div>
      </div>
      <div>
        <div style="font-weight:800; margin-bottom:4px; color:#059669;">
          ✅ Lời giải đáp án đúng (${correctLetter}):
        </div>
        <div style="line-height:1.65;">
          ${correctExp}
        </div>
      </div>
    </div>
  `;
}

function selectOption(optIdx) {
  if (!currentExam || currentExam.submitted) return;
  const parsed = parseInt(optIdx, 10);
  if (!Number.isFinite(parsed)) return;
  currentExam.answers[currentExam.idx] = parsed;
  renderActiveExam();
}

  function renderActiveExam() {
    if (!currentExam) return;
    const { questions, answers, flagged, idx, mode, submitted } = currentExam;
    const qItem = questions[idx];
    const chosen = answers[idx];
    const chMeta = CHAPTER_META[qItem.ch] || CHAPTER_META[0];
    const showImmediate = (mode === "practice" && chosen !== null) || submitted;

    const lvLabels = {
      recognition: "🟢 Nhận biết",
      understanding: "🟡 Hiểu & Phân biệt",
      application: "🔴 Vận dụng & Tính toán"
    };

    const qCard = document.getElementById("seQuestionCard");
    qCard.innerHTML = `
      <div class="smart-q-top">
        <div class="smart-q-badges">
          <span style="font-weight:800; font-size:14px; color:var(--brand);">Câu ${idx + 1} / ${questions.length}</span>
          <span class="smart-q-badge ch">${chMeta.name}</span>
          <span class="smart-q-badge lv-${qItem.level}">${lvLabels[qItem.level] || "Cơ bản"}</span>
          ${qItem.isDynamic ? '<span class="smart-q-badge kind-dynamic">🎲 Sinh biến số động</span>' : ""}
        </div>
        <button type="button" class="smart-flag-btn ${flagged.has(idx) ? "flagged" : ""}" id="seFlagBtn">
          ${flagged.has(idx) ? "⚑ Đã đánh dấu xem lại" : "☆ Đánh dấu xem lại"}
        </button>
      </div>

      <div class="smart-q-stem" id="seQuestionStem">${qItem.q}</div>

      <div class="smart-options-list" id="seOptionsList">
        ${qItem.opts.map((optText, optIdx) => {
          let cls = "smart-opt-item";
          if (showImmediate) {
            if (optIdx === qItem.ans) cls += " is-correct";
            else if (optIdx === chosen) cls += " is-wrong";
          } else if (chosen === optIdx) {
            cls += " selected";
          }
          return `
            <button type="button" class="${cls}" data-opt="${optIdx}" ${submitted ? "disabled" : ""}>
              <span class="smart-opt-letter">${String.fromCharCode(65 + optIdx)}</span>
              <span class="smart-opt-content">${optText}</span>
            </button>
          `;
        }).join("")}
      </div>

      ${showImmediate ? checkAnswer(qItem, chosen) : ""}

      <div class="smart-q-footer">
        <div style="display:flex; gap:8px;">
          <button type="button" class="lab-btn" id="sePrevBtn" ${idx === 0 ? "disabled" : ""}>← Câu trước</button>
          <button type="button" class="lab-btn primary" id="seNextBtn" ${idx === questions.length - 1 ? "disabled" : ""}>Câu tiếp theo →</button>
        </div>
        <button type="button" class="lab-btn" id="seOpenSourceBtn" title="Nhảy tới chương lý thuyết tương ứng trong Giáo trình">
          📖 Tra cứu lý thuyết ${chMeta.name.split("·")[0].trim()}
        </button>
      </div>
    `;

    // Render cột phải: Bảng điều hướng 20 câu ghim cố định (Sticky Sidebar)
    const answeredCount = answers.filter(a => a !== null).length;
    const pctDone = Math.round((answeredCount / questions.length) * 100);
    const palSidebar = document.getElementById("sePaletteSidebar");

    palSidebar.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <strong style="font-size:14px; color:var(--ink);">Mã đề: <code>${currentExam.code}</code></strong>
        <span style="font-size:12px; font-weight:700; color:var(--brand);">${mode === "practice" ? "Chế độ Luyện tập" : "Chế độ Kiểm tra"}</span>
      </div>

      <div class="smart-timer-box" id="seTimerBox">
        <span style="font-size:12.5px; font-weight:700; color:var(--mute);">⏱️ Thời gian còn lại:</span>
        <span class="smart-timer-digits" id="seTimerDigits">${currentExam.totalSeconds ? formatTime(currentExam.remainingSeconds) : "∞ Tự do"}</span>
      </div>

      <div style="display:flex; justify-content:space-between; font-size:12.5px; font-weight:700; margin-bottom:6px;">
        <span>Tiến độ hoàn thành</span>
        <span>${answeredCount} / ${questions.length} câu (${pctDone}%)</span>
      </div>
      <div style="height:8px; border-radius:999px; background:var(--eq-bg); overflow:hidden; margin-bottom:14px; border:1px solid var(--line);">
        <div style="height:100%; width:${pctDone}%; background:linear-gradient(90deg, var(--brand), #10b981); transition:width 0.25s ease;"></div>
      </div>

      <div class="smart-palette-grid" id="sePaletteGrid">
        ${questions.map((q, i) => {
          let cls = "smart-pal-btn";
          if (i === idx) cls += " current";
          if (flagged.has(i)) cls += " flagged";
          if (submitted) {
            cls += answers[i] === q.ans ? " graded-ok" : " graded-bad";
          } else if (answers[i] !== null) {
            cls += " answered";
          }
          return `<button type="button" class="${cls}" data-qidx="${i}">${i + 1}</button>`;
        }).join("")}
      </div>

      <div class="smart-legend-grid">
        <div class="smart-legend-item"><span class="smart-legend-dot" style="background:var(--brand);"></span> Đã trả lời</div>
        <div class="smart-legend-item"><span class="smart-legend-dot" style="background:var(--eq-bg);border:1.5px solid var(--line);"></span> Chưa làm</div>
        <div class="smart-legend-item"><span class="smart-legend-dot" style="background:#f59e0b;"></span> Đánh dấu cờ (⚑)</div>
        <div class="smart-legend-item"><span class="smart-legend-dot" style="border:2px solid var(--brand);"></span> Câu đang mở</div>
      </div>

      ${!submitted ? `
        <button type="button" class="smart-generate-btn" id="seSubmitExamBtn" style="width:100%; justify-content:center; background:linear-gradient(135deg, #059669, #10b981);">
          ✅ Nộp Bài &amp; Chấm Điểm
        </button>
      ` : `
        <button type="button" class="smart-generate-btn" id="seNewExamBtn" style="width:100%; justify-content:center;">
          🔄 Tạo Đề Mới Khác
        </button>
      `}
    `;

    // Render công thức toán học KaTeX cho câu hỏi và 4 đáp án
    renderMathInContainer(qCard);

    // Gắn sự kiện tương tác
    qCard.querySelectorAll(".smart-opt-item").forEach(btn => {
  btn.addEventListener("click", () => selectOption(btn.dataset.opt));
});

    document.getElementById("seFlagBtn")?.addEventListener("click", () => {
      if (flagged.has(idx)) flagged.delete(idx);
      else flagged.add(idx);
      renderActiveExam();
    });

    document.getElementById("sePrevBtn")?.addEventListener("click", () => {
      if (currentExam.idx > 0) {
        currentExam.idx--;
        renderActiveExam();
      }
    });
    document.getElementById("seNextBtn")?.addEventListener("click", () => {
      if (currentExam.idx < questions.length - 1) {
        currentExam.idx++;
        renderActiveExam();
      }
    });

    document.getElementById("seOpenSourceBtn")?.addEventListener("click", () => {
      if (typeof window.switchPart === "function") {
        window.switchPart(chMeta.part, true);
        if (typeof window.switchChapter === "function") {
          window.switchChapter(chMeta.part, chMeta.tabId, true);
        }
      }
    });

    palSidebar.querySelectorAll(".smart-pal-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        currentExam.idx = parseInt(btn.dataset.qidx, 10);
        renderActiveExam();
      });
    });

    document.getElementById("seSubmitExamBtn")?.addEventListener("click", () => submitSmartExam(false));
    document.getElementById("seNewExamBtn")?.addEventListener("click", generateSmartExam);
  }

  function submitSmartExam(autoByTimer = false) {
    if (!currentExam || currentExam.submitted) return;
    const unanswered = currentExam.answers.filter(a => a === null).length;
    if (!autoByTimer && unanswered > 0) {
      if (!confirm(`Bạn còn ${unanswered} câu chưa chọn đáp án. Bạn có chắc chắn muốn nộp bài ngay không?`)) {
        return;
      }
    }
    if (timerInterval) clearInterval(timerInterval);
    currentExam.submitted = true;

    const total = currentExam.questions.length;
    let correct = 0;
    currentExam.questions.forEach((q, i) => {
      if (currentExam.answers[i] === q.ans) correct++;
    });
    const score10 = ((correct / total) * 10).toFixed(1);
    const pct = Math.round((correct / total) * 100);

    // Lưu lịch sử vào localStorage
    let history = [];
    try { history = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]"); } catch (_) {}
    history.unshift({
      code: currentExam.code,
      correct,
      total,
      score10,
      pct,
      date: currentExam.createdAt
    });
    try { localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 10))); } catch (_) {}

    const resBox = document.getElementById("seResultContainer");
    resBox.hidden = false;
    resBox.innerHTML = `
      <div class="smart-result-banner">
        <div class="smart-score-circle" style="--pct:${pct}%">
          <div class="smart-score-inner">
            <strong>${score10}</strong>
            <span style="font-size:11px; color:var(--mute);">Thang 10</span>
          </div>
        </div>
        <div>
          <h3 style="margin:0 0 6px; font-size:1.3rem; color:var(--brand);">
            🎉 Kết quả Đề ${currentExam.code}: Đúng ${correct} / ${total} câu (${pct}%)
          </h3>
          <p style="margin:0; font-size:0.95rem; color:var(--ink-soft); line-height:1.6;">
            ${pct >= 80
              ? "🌟 Xuất sắc! Bạn nắm rất vững các cấu trúc đại số và tránh được hầu hết các bẫy phản ví dụ."
              : (pct >= 55
                ? "👍 Khá tốt! Hãy bấm vào các ô màu đỏ trên bảng câu hỏi bên phải để xem lại lời giải chi tiết."
                : "💡 Bạn nên ôn lại các định nghĩa cốt lõi và bấm nút 'Tra cứu lý thuyết' ở từng câu sai để củng cố gốc.")}
          </p>
        </div>
        <div>
          <button type="button" class="smart-generate-btn" id="seRetryBannerBtn">🔄 Tạo Đề Mới</button>
        </div>
      </div>
    `;
    document.getElementById("seRetryBannerBtn")?.addEventListener("click", generateSmartExam);

    renderActiveExam();
    renderHistory();
    resBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function renderHistory() {
    const listEl = document.getElementById("seHistoryList");
    if (!listEl) return;
    let history = [];
    try { history = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]"); } catch (_) {}

    const doneEl = document.getElementById("seStatDone");
    const bestEl = document.getElementById("seStatBest");
    if (doneEl) doneEl.textContent = history.length;
    if (bestEl) {
      const maxScore = history.reduce((m, h) => Math.max(m, parseFloat(h.score10 || 0)), 0);
      bestEl.textContent = history.length ? `${maxScore.toFixed(1)}/10` : "—";
    }

    if (!history.length) {
      listEl.innerHTML = "Chưa có đề nào được nộp. Hãy hoàn thành một đề và bấm <b>Nộp bài</b> để theo dõi tiến bộ của bạn!";
      return;
    }

    listEl.innerHTML = `
      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(240px, 1fr)); gap:10px;">
        ${history.map(h => `
          <div style="padding:10px 14px; border-radius:12px; border:1px solid var(--line); background:var(--eq-bg); display:flex; justify-content:space-between; align-items:center;">
            <div>
              <strong style="color:var(--ink); display:block;">Mã đề ${h.code}</strong>
              <span style="font-size:11.5px; color:var(--mute);">${h.date}</span>
            </div>
            <div style="text-align:right;">
              <strong style="font-size:1.1rem; color:${h.pct >= 70 ? "#059669" : "#d97706"};">${h.score10} đ</strong>
              <span style="display:block; font-size:11.5px; color:var(--mute);">${h.correct}/${h.total} câu (${h.pct}%)</span>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupSmartReviewUI);
  } else {
    setupSmartReviewUI();
  }
})();
