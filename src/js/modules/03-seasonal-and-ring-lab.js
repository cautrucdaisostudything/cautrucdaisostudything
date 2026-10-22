(function initCTDSGroup1And2Upgrades() {
  function runUpgrades() {
    // ====================================================================
    // 1. DỌN SẠCH CÁC CHUỖI "" BỊ SÓT TRONG CHƯƠNG 8 & TOÀN TRANG
    // ====================================================================
    const contentRoot = document.querySelector("main.content");
    if (contentRoot) {
      const walker = document.createTreeWalker(contentRoot, NodeFilter.SHOW_TEXT, null);
      const citeRegex = /\s*\[cite:\s*[\d,\s]+\]/gi;
      const nodesToClean = [];
      let currentNode;
      while ((currentNode = walker.nextNode())) {
        if (citeRegex.test(currentNode.nodeValue)) {
          nodesToClean.push(currentNode);
        }
      }
      nodesToClean.forEach(node => {
        node.nodeValue = node.nodeValue.replace(citeRegex, "");
      });
    }

    // ====================================================================
    // 2. THANH TIẾN ĐỘ ĐỌC BÀI (SEASONAL READING PROGRESS BAR)
    // ====================================================================
    const readingBar = document.getElementById("seasonalReadingBar");
    function updateReadingProgress() {
      if (!readingBar) return;
      const docEl = document.documentElement;
      const scrollTop = window.pageYOffset || docEl.scrollTop || 0;
      const scrollHeight = Math.max(1, docEl.scrollHeight - docEl.clientHeight);
      const pct = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
      readingBar.style.width = pct.toFixed(1) + "%";
    }
    window.addEventListener("scroll", updateReadingProgress, { passive: true });
    window.addEventListener("resize", updateReadingProgress, { passive: true });
    updateReadingProgress();

    // ====================================================================
    // 3. CLICK COPY LATEX THỰC TẾ CHO MỌI KHUNG CÔNG THỨC (.math-display)
    // ====================================================================
    document.querySelectorAll(".math-display").forEach(mathBox => {
      mathBox.setAttribute("title", "Bấm để sao chép công thức LaTeX");
      mathBox.addEventListener("click", function(e) {
        if (window.getSelection && window.getSelection().toString().trim().length > 0) return;
        const ann = this.querySelector('annotation[encoding="application/x-tex"]');
        let latexStr = ann ? ann.textContent.trim() : this.textContent.trim();
        if (!latexStr) return;
        const notifyCopied = () => {
          this.classList.add("is-copied");
          clearTimeout(this._copyTimer);
          this._copyTimer = setTimeout(() => this.classList.remove("is-copied"), 1800);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(latexStr).then(notifyCopied).catch(() => {});
        } else {
          const ta = document.createElement("textarea");
          ta.value = latexStr;
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand("copy"); notifyCopied(); } catch (_) {}
          ta.remove();
        }
      });
    });

    // ====================================================================
    // 4. HỆ THỐNG HẠT THIÊN NHIÊN 4 MÙA (SAKURA, NẮNG HẠ, LÁ PHONG, TUYẾT)
    // ====================================================================
    const canvas = document.getElementById("seasonalParticlesCanvas");
    const themeBtn = document.getElementById("btnTheme");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let particlesEnabled = true;
    try {
      const savedFx = localStorage.getItem("ctds_particles_fx");
      if (savedFx === "off") particlesEnabled = false;
    } catch (_) {}

    // Thêm nút Bật/Tắt hiệu ứng cạnh nút Giao diện
    let fxBtn = document.getElementById("btnParticlesToggle");
    if (!fxBtn && themeBtn && themeBtn.parentNode) {
      fxBtn = document.createElement("button");
      fxBtn.type = "button";
      fxBtn.id = "btnParticlesToggle";
      fxBtn.className = "btn";
      fxBtn.title = "Bật/Tắt hiệu ứng cánh hoa, lá phong, tuyết rơi theo mùa";
      themeBtn.after(fxBtn);
    }

    function syncFxBtnUI() {
      if (!fxBtn) return;
      fxBtn.setAttribute("aria-pressed", String(particlesEnabled));
      fxBtn.innerHTML = particlesEnabled ? "✨ Hiệu ứng: Bật" : "✨ Hiệu ứng: Tắt";
      canvas.style.display = particlesEnabled ? "block" : "none";
    }
    syncFxBtnUI();

    if (fxBtn) {
      fxBtn.addEventListener("click", () => {
        particlesEnabled = !particlesEnabled;
        canvas.classList.remove("auto-hide-study");
        try { localStorage.setItem("ctds_particles_fx", particlesEnabled ? "on" : "off"); } catch (_) {}
        syncFxBtnUI();
      });
    }

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    window.addEventListener("resize", () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }, { passive: true });

    const PARTICLE_COUNT = 26;
    const particles = [];

    function getSeason() {
      return document.documentElement.getAttribute("data-theme") || "study";
    }

    function createParticle(randomY = false) {
      const season = getSeason();
      const fromSide = Math.random() < 0.5 ? Math.random() * (W * 0.22) : W - Math.random() * (W * 0.22);
      const x = Math.random() < 0.72 ? fromSide : Math.random() * W;
      const y = randomY ? Math.random() * H : -20;
      return {
        x,
        y: season === "summer" && !randomY ? H + 15 : y,
        r: 4.5 + Math.random() * 5.5,
        vy: 0.45 + Math.random() * 0.75,
        vx: -0.35 + Math.random() * 0.7,
        angle: Math.random() * Math.PI * 2,
        spin: (-0.02 + Math.random() * 0.04),
        drift: Math.random() * Math.PI * 2,
        alpha: 0.45 + Math.random() * 0.4,
        variant: Math.floor(Math.random() * 3)
      };
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle(true));
    }

    function drawSakuraPetal(p) {
      const colors = ["#f472b6", "#f9a8d4", "#fbcfe8"];
      ctx.fillStyle = colors[p.variant];
      ctx.beginPath();
      ctx.moveTo(0, -p.r);
      ctx.bezierCurveTo(p.r * 0.9, -p.r * 0.8, p.r * 0.9, p.r * 0.7, 0, p.r);
      ctx.bezierCurveTo(-p.r * 0.9, p.r * 0.7, -p.r * 0.9, -p.r * 0.8, 0, -p.r);
      ctx.fill();
    }

    function drawSummerOrb(p) {
      const colors = ["rgba(250, 204, 21, 0.75)", "rgba(56, 189, 248, 0.65)", "rgba(45, 212, 191, 0.65)"];
      ctx.fillStyle = colors[p.variant];
      ctx.beginPath();
      ctx.arc(0, 0, p.r * 0.65, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    function drawAutumnLeaf(p) {
      const colors = ["#dc2626", "#ea580c", "#f59e0b"];
      ctx.fillStyle = colors[p.variant];
      const s = p.r * 0.12;
      ctx.beginPath();
      ctx.moveTo(0, -10 * s);
      ctx.lineTo(3 * s, -3 * s);
      ctx.lineTo(10 * s, -6 * s);
      ctx.lineTo(5 * s, 0);
      ctx.lineTo(10 * s, 5 * s);
      ctx.lineTo(3 * s, 4 * s);
      ctx.lineTo(0, 10 * s);
      ctx.lineTo(-3 * s, 4 * s);
      ctx.lineTo(-10 * s, 5 * s);
      ctx.lineTo(-5 * s, 0);
      ctx.lineTo(-10 * s, -6 * s);
      ctx.lineTo(-3 * s, -3 * s);
      ctx.closePath();
      ctx.fill();
    }

    function drawWinterSnowflake(p) {
      const colors = ["#e0f2fe", "#7dd3fc", "#c4b5fd"];
      ctx.strokeStyle = colors[p.variant];
      ctx.lineWidth = 1.4;
      const rad = p.r * 0.85;
      for (let k = 0; k < 3; k++) {
        ctx.save();
        ctx.rotate((k * Math.PI) / 3);
        ctx.beginPath();
        ctx.moveTo(0, -rad);
        ctx.lineTo(0, rad);
        ctx.stroke();
        ctx.restore();
      }
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function animateParticles() {
      requestAnimationFrame(animateParticles);
      if (!particlesEnabled || reducedMotion.matches) return;
      if (document.body.getAttribute("data-app-mode") === "slides") return;
      const season = getSeason();
      if (season === "study" && canvas.classList.contains("auto-hide-study")) {
        ctx.clearRect(0, 0, W, H);
        return;
      }

      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.drift += 0.018;
        p.angle += p.spin;

        if (season === "summer") {
          p.y -= p.vy * 0.7;
          p.x += Math.sin(p.drift) * 0.45;
          if (p.y < -20) Object.assign(p, createParticle(false));
        } else {
          p.y += p.vy;
          p.x += p.vx + Math.sin(p.drift) * 0.55;
          if (p.y > H + 20 || p.x < -30 || p.x > W + 30) {
            Object.assign(p, createParticle(false));
          }
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        if (season === "spring" || season === "study") drawSakuraPetal(p);
        else if (season === "summer") drawSummerOrb(p);
        else if (season === "autumn") drawAutumnLeaf(p);
        else if (season === "winter") drawWinterSnowflake(p);

        ctx.restore();
      }
    }
    requestAnimationFrame(animateParticles);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runUpgrades);
  } else {
    runUpgrades();
  }
})();

(function initCTDSGroup3And4Upgrades() {
  function setupLabAndGlossary() {
    const labModal = document.getElementById("labModal");
    const labTabsBar = labModal?.querySelector(".lab-tabs");
    const labBody = labModal?.querySelector(".lab-body");

    // ====================================================================
    // 1. NÂNG CẤP PHÒNG LAB: THÊM TAB "PHÂN TÍCH VÀNH ℤₙ" & "ĐẤU TRƯỜNG BẮT BẪY"
    // ====================================================================
    if (labTabsBar && labBody && !document.getElementById("labTabRing")) {
      // Thêm 2 nút Tab mới vào thanh tiêu đề Phòng LAB
      const btnRing = document.createElement("button");
      btnRing.className = "lab-tab";
      btnRing.setAttribute("role", "tab");
      btnRing.id = "labTabRing";
      btnRing.setAttribute("aria-controls", "labPaneRing");
      btnRing.setAttribute("aria-selected", "false");
      btnRing.dataset.labTab = "ring";
      btnRing.innerHTML = "🔬 Phân tích Vành ℤₙ &amp; Iđêan";

      const btnQuiz = document.createElement("button");
      btnQuiz.className = "lab-tab";
      btnQuiz.setAttribute("role", "tab");
      btnQuiz.id = "labTabQuiz";
      btnQuiz.setAttribute("aria-controls", "labPaneQuiz");
      btnQuiz.setAttribute("aria-selected", "false");
      btnQuiz.dataset.labTab = "quiz";
      btnQuiz.innerHTML = "🎯 Trắc nghiệm bẫy";

      labTabsBar.appendChild(btnRing);
      labTabsBar.appendChild(btnQuiz);

      // Tạo Pane 3: Máy Phân Tích Vành Z/nZ & Iđêan (Chương 6, 7, 8)
      const paneRing = document.createElement("section");
      paneRing.className = "lab-pane";
      paneRing.id = "labPaneRing";
      paneRing.setAttribute("role", "tabpanel");
      paneRing.setAttribute("aria-labelledby", "labTabRing");
      paneRing.hidden = true;
      paneRing.innerHTML = `
        <p class="lab-intro">
          Khảo sát toàn diện cấu trúc vành đồng dư <b>(ℤ/nℤ, +, ·)</b> theo Chương 6–8: tự động tìm nhóm khả nghịch <b>U(ℤ/nℤ)</b>, các <b>ước của không</b>, <b>phần tử lũy linh</b> (aᵐ = 0), <b>phần tử lũy đẳng</b> (e² = e) và phân loại toàn bộ các <b>iđêan nguyên tố / cực đại</b>.
        </p>
        <div class="lab-controls" style="justify-content: space-between;">
          <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
            <label>Chọn môđun n (2–36)
              <input id="ringLabN" type="number" min="2" max="36" value="12" inputmode="numeric" style="width:78px;">
            </label>
            <button type="button" class="lab-btn primary" id="ringLabBuildBtn">Phân tích Vành</button>
          </div>
          <div class="lab-ring-Presets">
            <button type="button" class="lab-preset-chip" data-n="6">ℤ/6ℤ (Hợp số)</button>
            <button type="button" class="lab-preset-chip" data-n="7">ℤ/7ℤ (Trường 𝔽₇)</button>
            <button type="button" class="lab-preset-chip" data-n="8">ℤ/8ℤ (Lũy linh)</button>
            <button type="button" class="lab-preset-chip active" data-n="12">ℤ/12ℤ (Chuẩn)</button>
            <button type="button" class="lab-preset-chip" data-n="18">ℤ/18ℤ</button>
          </div>
        </div>
        <div class="lab-verdict" id="ringLabVerdict"></div>
        <div class="ring-cards-grid" id="ringLabCards"></div>
      `;

      // Tạo Pane 4: Trắc nghiệm bẫy & Phản Ví Dụ Đại Số
      const paneQuiz = document.createElement("section");
      paneQuiz.className = "lab-pane";
      paneQuiz.id = "labPaneQuiz";
      paneQuiz.setAttribute("role", "tabpanel");
      paneQuiz.setAttribute("aria-labelledby", "labTabQuiz");
      paneQuiz.hidden = true;
      paneQuiz.innerHTML = `
        <div class="quiz-header-bar">
          <div>
            <strong style="color:var(--brand); font-size:15px;">🎯 Trắc nghiệm bẫy &amp; Phản Ví Dụ Đại Số</strong>
            <div style="font-size:12.5px; color:var(--mute); margin-top:2px;">Luyện phản xạ phát hiện mệnh đề đảo sai, tính xác định tốt và phản ví dụ kinh điển.</div>
          </div>
          <div style="display:flex; align-items:center; gap:10px;">
            <span class="glossary-count-badge" id="quizScoreBadge">Điểm: 0 / 12</span>
            <button type="button" class="lab-btn" id="quizRestartBtn">🔄 Làm lại</button>
          </div>
        </div>
        <div class="quiz-question-box">
          <span class="quiz-question-tag" id="quizTopicTag">Chương 0</span>
          <p class="quiz-question-text" id="quizQuestionText"></p>
          <div class="quiz-options-grid" id="quizOptionsGrid"></div>
          <div class="quiz-explanation" id="quizExplanationBox"></div>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <button type="button" class="lab-btn" id="quizPrevBtn">← Câu trước</button>
          <span id="quizProgressLabel" style="font-size:13px; font-weight:700; color:var(--mute);">Câu 1 / 12</span>
          <button type="button" class="lab-btn primary" id="quizNextBtn">Câu tiếp theo →</button>
        </div>
      `;

      labBody.appendChild(paneRing);
      labBody.appendChild(paneQuiz);

      // Đồng bộ cơ chế chuyển đổi giữa cả 4 Tab trong Phòng LAB
      const allLabTabs = labTabsBar.querySelectorAll("[data-lab-tab]");
      const allPanes = {
        cayley: document.getElementById("labPaneCayley"),
        flash: document.getElementById("labPaneFlash"),
        ring: paneRing,
        quiz: paneQuiz
      };

      allLabTabs.forEach(tabBtn => {
        tabBtn.addEventListener("click", () => {
          const target = tabBtn.dataset.labTab;
          allLabTabs.forEach(t => t.setAttribute("aria-selected", String(t.dataset.labTab === target)));
          Object.keys(allPanes).forEach(k => {
            if (allPanes[k]) allPanes[k].hidden = (k !== target);
          });
          if (target === "ring") renderRingAnalyzer();
          if (target === "quiz") renderQuizQuestion();
        });
      });

      // Logic Máy Phân Tích Vành Z/nZ
      const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
      const isPrime = num => {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
        return true;
      };

      function renderRingAnalyzer() {
        const input = document.getElementById("ringLabN");
        let n = parseInt(input.value, 10);
        if (!Number.isFinite(n)) n = 12;
        n = Math.min(36, Math.max(2, n));
        input.value = n;

        document.querySelectorAll(".lab-preset-chip").forEach(c => {
          c.classList.toggle("active", parseInt(c.dataset.n, 10) === n);
        });

        const units = [];
        const zeroDivs = [];
        const nilpotents = [];
        const idempotents = [];

        for (let a = 0; a < n; a++) {
          // Lũy đẳng: a^2 = a (mod n)
          if ((a * a) % n === a) {
            idempotents.push(a);
          }
          // Lũy linh: tồn tại m >= 1 sao cho a^m = 0 (mod n)
          let p = a % n, m = 1, isNil = (p === 0);
          while (!isNil && m <= n) {
            p = (p * a) % n;
            m++;
            if (p === 0) isNil = true;
          }
          if (isNil) nilpotents.push({ a, m });

          if (a === 0) continue;
          if (gcd(a, n) === 1) {
            let inv = 1;
            for (let x = 1; x < n; x++) if ((a * x) % n === 1) { inv = x; break; }
            units.push({ a, inv });
          } else {
            let partner = 1;
            for (let b = 1; b < n; b++) if ((a * b) % n === 0) { partner = b; break; }
            zeroDivs.push({ a, b: partner });
          }
        }

        // Các iđêan của Z/nZ ứng với các ước dương d | n
        const ideals = [];
        for (let d = 1; d <= n; d++) {
          if (n % d === 0) {
            const elems = [];
            for (let k = 0; k < n / d; k++) elems.push(k * d);
            const isMax = isPrime(d);
            ideals.push({ d, size: n / d, elems, isMax });
          }
        }

        const primeFlag = isPrime(n);
        const verdictEl = document.getElementById("ringLabVerdict");
        verdictEl.innerHTML = primeFlag
          ? `🌟 <b>ℤ/${n}ℤ là một TRƯỜNG HỮU HẠN (𝔽<sub>${n}</sub>)</b> có đặc số <code>char = ${n}</code>: Vì <b>${n} là số nguyên tố</b>, mọi phần tử khác [0] đều khả nghịch (|U(ℤ/${n}ℤ)| = ${n - 1}), không có ước của không, và chỉ có đúng 2 iđêan tầm thường là {[0]} và ℤ/${n}ℤ.`
          : `⚖️ <b>ℤ/${n}ℤ là VÀNH GIAO HOÁN CÓ ĐƠN VỊ [1] nhưng KHÔNG LÀ MIỀN NGUYÊN</b> (đặc số <code>char = ${n}</code>): Vì <b>${n} là hợp số</b>, vành được phân hoạch thành <b>${units.length} phần tử khả nghịch</b>, <b>${zeroDivs.length} ước của không</b> và phần tử không [0].`;

        const cardsEl = document.getElementById("ringLabCards");
        cardsEl.innerHTML = `
          <div class="ring-stat-box">
            <h4 style="color:var(--def-color);"><span>🛡️ Nhóm đơn vị U(ℤ/${n}ℤ)</span> <span>φ(${n}) = ${units.length}</span></h4>
            <div class="ring-pill-list">
              ${units.map(u => `<span class="ring-pill">[${u.a}] <small>⁻¹=[${u.inv}]</small></span>`).join("")}
            </div>
          </div>
          <div class="ring-stat-box">
            <h4 style="color:var(--warn-color);"><span>⚠️ Ước của không</span> <span>${zeroDivs.length} phần tử</span></h4>
            <div class="ring-pill-list">
              ${zeroDivs.length ? zeroDivs.map(z => `<span class="ring-pill">[${z.a}] <small>·[${z.b}]=[0]</small></span>`).join("") : `<span style="font-size:12.5px; color:var(--ex-color); font-weight:700;">✔ Không có ước của 0 (Miền nguyên)</span>`}
            </div>
          </div>
          <div class="ring-stat-box">
            <h4 style="color:var(--thm-color);"><span>🌀 Lũy linh (aᵐ=0) &amp; Lũy đẳng (e²=e)</span></h4>
            <div style="font-size:12px; color:var(--ink-soft); margin-bottom:6px;"><b>Lũy linh (${nilpotents.length}):</b></div>
            <div class="ring-pill-list" style="margin-bottom:8px;">
              ${nilpotents.map(nl => `<span class="ring-pill">[${nl.a}] <small>m=${nl.m}</small></span>`).join("")}
            </div>
            <div style="font-size:12px; color:var(--ink-soft); margin-bottom:6px;"><b>Lũy đẳng (${idempotents.length}):</b></div>
            <div class="ring-pill-list">
              ${idempotents.map(id => `<span class="ring-pill">[${id}] <small>[${id}]²=[${id}]</small></span>`).join("")}
            </div>
          </div>
          <div class="ring-stat-box">
            <h4 style="color:var(--ex-color);"><span>🧭 Các Iđêan chính ⟨[d]⟩</span> <span>${ideals.length} iđêan</span></h4>
            <div style="display:flex; flex-direction:column; gap:6px; font-size:12.5px;">
              ${ideals.map(id => `
                <div style="padding:5px 8px; border-radius:7px; background:var(--eq-bg); border-left:3px solid ${id.isMax ? 'var(--ex-color)' : 'var(--def-accent)'};">
                  <b>⟨[${id.d % n}]⟩</b> (cấp ${id.size}): {${id.elems.slice(0, 6).map(x => `[${x}]`).join(", ")}${id.elems.length > 6 ? ", …" : ""}}
                  ${id.isMax ? `<span style="float:right; font-size:11px; font-weight:800; color:var(--ex-color);">★ Cực đại &amp; Nguyên tố</span>` : ""}
                </div>
              `).join("")}
            </div>
          </div>
        `;
      }

      document.getElementById("ringLabBuildBtn")?.addEventListener("click", renderRingAnalyzer);
      document.getElementById("ringLabN")?.addEventListener("change", renderRingAnalyzer);
      paneRing.querySelectorAll(".lab-preset-chip").forEach(chip => {
        chip.addEventListener("click", () => {
          document.getElementById("ringLabN").value = chip.dataset.n;
          renderRingAnalyzer();
        });
      });

      // Logic Trắc nghiệm bẫy (12 câu hỏi cốt lõi)
      const QUIZ_DATA = [
        {
          tag: "Chương 0 · Tính xác định tốt",
          q: "Xét công thức ánh xạ T : ℤ/3ℤ → ℤ/2ℤ cho bởi T([a]₃) = [a]₂. Khẳng định nào sau đây là ĐÚNG?",
          opts: [
            "T là một toàn cấu nhóm vì 2 là ước của 6.",
            "T KHÔNG xác định tốt vì [1]₃ = [4]₃ nhưng [1]₂ ≠ [4]₂.",
            "T xác định tốt và có hạt nhân là 3ℤ.",
            "T là một đơn ánh."
          ],
          ans: 1,
          exp: "Theo Phản ví dụ 0.16 Giáo trình: Trong ℤ/3ℤ ta có [1]₃ = [4]₃, nhưng ở đối miền ℤ/2ℤ thì [1]₂ ≠ [4]₂ = [0]₂. Cùng một lớp đầu vào cho hai đầu ra khác nhau nên T không phải là ánh xạ (không xác định tốt)!"
        },
        {
          tag: "Chương 1 · Tích các hoán vị",
          q: "Trong nhóm đối xứng S₃, theo quy ước đọc hợp thành từ phải sang trái của giáo trình, tích (1 2)(1 2 3) bằng chu trình nào?",
          opts: [
            "(1 3)",
            "(2 3)",
            "(1 3 2)",
            "id (hoán vị đồng nhất)"
          ],
          ans: 1,
          exp: "Thực hiện (1 2 3) trước rồi đến (1 2): 1 ↦ 2 ↦ 1 (giữ nguyên 1); 2 ↦ 3 ↦ 3; 3 ↦ 1 ↦ 2. Vậy (1 2)(1 2 3) = (2 3) (trong khi (1 2 3)(1 2) = (1 3) ≠ (2 3))."
        },
        {
          tag: "Chương 2 · Tiêu chuẩn nhóm con",
          q: "Tại sao tập số tự nhiên ℕ = {0, 1, 2, ...} chứa phần tử đơn vị 0 và đóng với phép cộng nhưng KHÔNG là nhóm con của (ℤ, +)?",
          opts: [
            "Vì phép cộng trên ℕ không có tính kết hợp.",
            "Vì ℕ là tập vô hạn nên chỉ đóng với phép cộng là chưa đủ bảo đảm có phần tử đối (-a).",
            "Vì ℕ không giao hoán.",
            "Vì 0 không phải là đơn vị của ℤ."
          ],
          ans: 1,
          exp: "Tiêu chuẩn 'chỉ cần tính đóng xy ∈ H' chỉ đúng cho tập con HỮU HẠN (Định lý 2.3). Với tập vô hạn như ℕ ⊂ ℤ, phần tử 1 ∈ ℕ không có số đối -1 trong ℕ."
        },
        {
          tag: "Chương 2 · Bẫy Giao hoán vs. Cyclic",
          q: "Nhóm nhân các phần tử khả nghịch U(8) = {[1], [3], [5], [7]} có cấp 4. Phát biểu nào sau đây là ĐÚNG?",
          opts: [
            "U(8) là nhóm cyclic sinh bởi [3].",
            "U(8) là nhóm giao hoán (Abel) nhưng KHÔNG cyclic vì mọi phần tử đều thỏa x² = [1].",
            "U(8) không giao hoán.",
            "U(8) đẳng cấu với ℤ/4ℤ."
          ],
          ans: 1,
          exp: "Trong U(8): [3]² = [9] = [1], [5]² = [25] = [1], [7]² = [49] = [1]. Mọi phần tử khác đơn vị chỉ có cấp 2 (không có phần tử cấp 4), nên U(8) ≅ V₄ là nhóm Abel nhưng không cyclic!"
        },
        {
          tag: "Chương 3 · Chiều đảo Định lý Lagrange",
          q: "Nhóm thay phiên A₄ có cấp |A₄| = 12 và 6 là một ước của 12. Khẳng định nào sau đây là ĐÚNG?",
          opts: [
            "A₄ có duy nhất một nhóm con cấp 6.",
            "A₄ có đúng 2 nhóm con cấp 6.",
            "A₄ KHÔNG có bất kỳ nhóm con nào có cấp bằng 6 (bác bỏ chiều đảo định lý Lagrange).",
            "Mọi nhóm cấp 12 đều có nhóm con cấp 6."
          ],
          ans: 2,
          exp: "A₄ chứa tới 8 chu trình độ dài 3 (cấp 3). Nếu có nhóm con H cấp 6 (chỉ số 2) thì H phải chứa cả 8 phần tử này cùng đơn vị, dẫn tới |H| ≥ 9 > 6 (vô lý)!"
        },
        {
          tag: "Chương 4 · Nhóm con chuẩn tắc",
          q: "Cho H là một nhóm con của nhóm G. Trong trường hợp nào sau đây ta CHẮC CHẮN kết luận được H ⊴ G mà không cần tính liên hợp?",
          opts: [
            "Khi |H| = 2.",
            "Khi chỉ số [G : H] = 2 (hoặc khi G là nhóm Abel).",
            "Khi H là nhóm cyclic.",
            "Khi K ⊴ H và H ⊴ G."
          ],
          ans: 1,
          exp: "Khi [G : H] = 2, tập thương chỉ có 2 lớp kề là H và phần bù G \\ H, buộc lớp trái và lớp phải tại mọi phần tử g ∉ H phải trùng nhau: gH = G \\ H = Hg ⇒ H ⊴ G."
        },
        {
          tag: "Chương 4 · Định lý nhóm thương theo Tâm",
          q: "Cho Z(G) là tâm của nhóm G. Nếu nhóm thương G/Z(G) là một nhóm cyclic thì điều gì xảy ra?",
          opts: [
            "G bắt buộc phải là một nhóm cyclic.",
            "G bắt buộc phải là một nhóm giao hoán (Abel), từ đó thực chất Z(G) = G.",
            "G là nhóm không giao hoán.",
            "|G| là số nguyên tố."
          ],
          ans: 1,
          exp: "Theo Bài tập 4.22 Giáo trình: Nếu G/Z(G) = ⟨gZ(G)⟩ cyclic, mọi x, y ∈ G đều viết dưới dạng x = gᵐz₁, y = gⁿz₂ (với z₁, z₂ ∈ Z(G)), suy ra xy = gᵐ⁺ⁿz₁z₂ = yx ⇒ G là nhóm Abel!"
        },
        {
          tag: "Chương 5 · Bất biến đẳng cấu",
          q: "Vì sao hai nhóm ℤ/6ℤ và S₃ có cùng cấp bằng 6 nhưng KHÔNG đẳng cấu với nhau (ℤ/6ℤ ≇ S₃)?",
          opts: [
            "Vì S₃ không có phần tử đơn vị.",
            "Vì ℤ/6ℤ là nhóm giao hoán (Abel) và cyclic, còn S₃ là nhóm không giao hoán.",
            "Vì S₃ có phần tử cấp 6 còn ℤ/6ℤ thì không.",
            "Vì định lý Lagrange không áp dụng được cho S₃."
          ],
          ans: 1,
          exp: "Tính giao hoán và tính cyclic là các bất biến đại số qua đẳng cấu. ℤ/6ℤ giao hoán hoàn toàn trong khi trong S₃ ta có (12)(13) ≠ (13)(12)."
        },
        {
          tag: "Chương 6 · Vành con & Đơn vị riêng",
          q: "Trong vành ma trận M₂(ℝ) (có đơn vị là I₂), xét vành con S = {diag(a, 0) | a ∈ ℝ}. Khẳng định nào sau đây ĐÚNG?",
          opts: [
            "S không có phần tử đơn vị.",
            "S có phần tử đơn vị riêng là E₁₁ = diag(1, 0) ≠ I₂.",
            "S có cùng đơn vị I₂ với M₂(ℝ).",
            "S không phải là vành con của M₂(ℝ)."
          ],
          ans: 1,
          exp: "Theo Bài tập 6.8 Giáo trình: Khác với nhóm con, một vành con có thể có phần tử đơn vị riêng khác đơn vị vành mẹ. Ở đây diag(a,0)·diag(1,0) = diag(a,0) nên 1_S = E₁₁ ≠ I₂."
        },
        {
          tag: "Chương 7 · Iđêan nguyên tố vs. Iđêan cực đại",
          q: "Trong vành số nguyên ℤ, xét iđêan không I = (0) = {0}. Phát biểu nào sau đây là ĐÚNG?",
          opts: [
            "(0) vừa là iđêan nguyên tố vừa là iđêan cực đại.",
            "(0) là iđêan nguyên tố (vì ℤ/(0) ≅ ℤ là miền nguyên) nhưng KHÔNG là iđêan cực đại (vì (0) ⊊ 2ℤ ⊊ ℤ).",
            "(0) là iđêan cực đại nhưng không nguyên tố.",
            "(0) không phải là iđêan của ℤ."
          ],
          ans: 1,
          exp: "Mọi iđêan cực đại đều nguyên tố, nhưng chiều ngược lại SAI! Trong ℤ, (0) nguyên tố vì thương ℤ/(0) ≅ ℤ là miền nguyên, nhưng ℤ không phải là trường nên (0) không cực đại."
        },
        {
          tag: "Chương 8 · Đặc số của Miền nguyên",
          q: "Nếu R là một miền nguyên (hoặc một trường), đặc số char(R) của nó chỉ có thể nhận giá trị nào?",
          opts: [
            "Bất kỳ số nguyên dương n ≥ 2 nào.",
            "Chỉ có thể bằng 0 hoặc bằng một số nguyên tố p.",
            "Luôn luôn bằng 0.",
            "Bằng cấp của nhóm đơn vị |U(R)|."
          ],
          ans: 1,
          exp: "Theo Định lý 8.8 (Bài tập 8.24): Nếu char(R) = n = ab là hợp số (1 < a,b < n) thì (a·1_R)(b·1_R) = n·1_R = 0_R, mâu thuẫn với tính không có ước của 0 trong miền nguyên!"
        },
        {
          tag: "Chương 9 · Điều kiện dựng Trường các thương Frac(R)",
          q: "Tại sao phép dựng trường các thương Frac(R) qua quan hệ (a, b) ~ (c, d) ⇔ ad = bc lại THẤT BẠI trên vành ℤ/6ℤ?",
          opts: [
            "Vì phép nhân trên ℤ/6ℤ không giao hoán.",
            "Vì ℤ/6ℤ có ước của không ([2][3] = [0]) làm gãy tính bắc cầu của quan hệ tương đương ~.",
            "Vì ℤ/6ℤ không có phần tử đơn vị.",
            "Vì ℤ/6ℤ có vô hạn phần tử."
          ],
          ans: 1,
          exp: "Theo Bài tập 9.5 Giáo trình: Trong ℤ/6ℤ, ([0],[2]) ~ ([0],[3]) và ([0],[3]) ~ ([2],[3]) nhưng ([0],[2]) ≁ ([2],[3]) vì [0][3] = [0] ≠ [4] = [2][2]. Giả thiết Miền nguyên là bắt buộc để giản ước khi chứng minh bắc cầu!"
        }
      ];

      let quizIdx = 0;
      const userAnswers = new Array(QUIZ_DATA.length).fill(null);

      function renderQuizQuestion() {
        const item = QUIZ_DATA[quizIdx];
        document.getElementById("quizTopicTag").textContent = item.tag;
        document.getElementById("quizQuestionText").textContent = `Câu ${quizIdx + 1}. ${item.q}`;
        document.getElementById("quizProgressLabel").textContent = `Câu ${quizIdx + 1} / ${QUIZ_DATA.length}`;

        const score = userAnswers.reduce((acc, ans, i) => acc + (ans === QUIZ_DATA[i].ans ? 1 : 0), 0);
        document.getElementById("quizScoreBadge").textContent = `Điểm: ${score} / ${QUIZ_DATA.length}`;

        const grid = document.getElementById("quizOptionsGrid");
        const expBox = document.getElementById("quizExplanationBox");
        const chosen = userAnswers[quizIdx];

        grid.innerHTML = item.opts.map((optText, optIdx) => {
          let cls = "quiz-opt-btn";
          if (chosen !== null) {
            if (optIdx === item.ans) cls += " correct";
            else if (optIdx === chosen) cls += " wrong";
          }
          return `<button type="button" class="${cls}" data-opt="${optIdx}" ${chosen !== null ? "disabled" : ""}>
            <b>${String.fromCharCode(65 + optIdx)}.</b> ${optText}
          </button>`;
        }).join("");

        if (chosen !== null) {
          expBox.style.display = "block";
          expBox.innerHTML = `<b>${chosen === item.ans ? "✅ Chính xác!" : "❌ Chưa đúng!"} Giải thích:</b> ${item.exp}`;
        } else {
          expBox.style.display = "none";
        }

        grid.querySelectorAll(".quiz-opt-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            userAnswers[quizIdx] = parseInt(btn.dataset.opt, 10);
            renderQuizQuestion();
          });
        });
      }

      document.getElementById("quizPrevBtn")?.addEventListener("click", () => {
        quizIdx = (quizIdx - 1 + QUIZ_DATA.length) % QUIZ_DATA.length;
        renderQuizQuestion();
      });
      document.getElementById("quizNextBtn")?.addEventListener("click", () => {
        quizIdx = (quizIdx + 1) % QUIZ_DATA.length;
        renderQuizQuestion();
      });
      document.getElementById("quizRestartBtn")?.addEventListener("click", () => {
        userAnswers.fill(null);
        quizIdx = 0;
        renderQuizQuestion();
      });

      renderRingAnalyzer();
      renderQuizQuestion();
    }

    // ====================================================================
    // 2. NHÓM 4: BỔ SUNG TỪ ĐIỂN THUẬT NGỮ ANH-VIỆT (TR.199-205) & LIVE FILTER
    // ====================================================================
    const tabCompare = document.getElementById("tab-compare");
    if (tabCompare && !document.getElementById("glossarySearchInput")) {
      const headings = tabCompare.querySelectorAll("h3.subsection-title");
      let glossaryHeading = null;
      headings.forEach(h => {
        if (h.textContent.includes("Bảng Tra Cứu Ký Hiệu") || h.textContent.includes("Bilingual Glossary")) {
          glossaryHeading = h;
        }
      });

      if (glossaryHeading) {
        const tableWrapper = glossaryHeading.nextElementSibling?.nextElementSibling;
        const tbody = tableWrapper?.querySelector("tbody");

        if (tbody) {
          // Bổ sung các thuật ngữ quan trọng từ trang 199–205 Giáo trình TS. Huỳnh Việt Khánh
          const extraTerms = [
            ["$f(A),\\; f^{-1}(B)$", "Ảnh / Nghịch ảnh của tập con", "Image / Pre-image (Inverse image)", "Nghịch ảnh $f^{-1}(B)$ luôn xác định với mọi ánh xạ, không đòi hỏi $f$ có hàm ngược."],
            ["$\\sim,\\; X/{\\sim}$", "Quan hệ tương đương & Tập thương", "Equivalence relation & Quotient set", "Phân hoạch tập $X$ thành các lớp tương đương $[x]$ đôi một rời nhau."],
            ["$\\text{Well-defined}$", "Xác định tốt", "Well-definedness", "Kết quả của công thức trên tập thương độc lập với cách chọn phần tử đại diện."],
            ["$(G, *)$", "Nửa nhóm / Vị nhóm", "Semigroup / Monoid", "Nửa nhóm: phép toán kết hợp. Vị nhóm (monoit): nửa nhóm có thêm phần tử đơn vị."],
            ["$Z(G)$", "Tâm của nhóm", "Center of a group", "$Z(G) = \\{z \\in G \\mid zg = gz, \\forall g \\in G\\} \\trianglelefteq G$. Nếu $G/Z(G)$ cyclic thì $G$ Abel."],
            ["$\\pi_N,\\; \\pi_I$", "Phép chiếu chính tắc", "Canonical projection / Quotient map", "Toàn cấu tự nhiên $g \\mapsto gN$ (hoặc $r \\mapsto r+I$) có hạt nhân đúng bằng $N$ (hoặc $I$)."],
            ["$U(R) = R^\\times$", "Phần tử khả nghịch (Đơn vị)", "Unit / Invertible element", "Phần tử $u \\in R$ có nghịch đảo nhân $uv = vu = 1_R$. Khác với phần tử đơn vị $1_R$ (unity)."],
            ["$ab = 0$", "Ước của không trái / phải", "Left / Right zero divisor", "Với $a, b, c \\neq 0$: $ab = 0$ thì $a$ là ước của không trái; $ca = 0$ thì $a$ là ước của không phải."],
            ["$e^2 = e,\\; a^m = 0$", "Phần tử lũy đẳng / Phần tử lũy linh", "Idempotent / Nilpotent element", "Lũy đẳng: $e^2 = e$ (tạo ước của 0: $e(1-e)=0$). Lũy linh: $a^m = 0$ với $m \\ge 1$."],
            ["$\\text{Division Ring}$", "Vành chia (Thể)", "Division ring / Skew field", "Vành có $1_R \\neq 0_R$ mà mọi phần tử khác $0$ đều khả nghịch (không đòi hỏi giao hoán, VD: $\\mathbb{H}$)."],
            ["$P \\subsetneq R,\\; M \\subsetneq R$", "Iđêan nguyên tố / Iđêan cực đại", "Prime ideal / Maximal ideal", "Trên vành giao hoán có 1: $P$ nguyên tố $\\iff R/P$ miền nguyên; $M$ cực đại $\\iff R/M$ là trường."],
            ["$f(1_R) = 1_S$", "Đồng cấu vành bảo toàn đơn vị", "Unital ring homomorphism", "Đồng cấu vành tổng quát không mặc định giữ đơn vị; cần nêu rõ khi $f(1_R) = 1_S$."],
            ["$P_K$", "Trường con nguyên tố", "Prime subfield", "Giao của mọi trường con trong $K$: đẳng cấu với $\\mathbb{Q}$ ($\\operatorname{char}=0$) hoặc $\\mathbb{F}_p$ ($\\operatorname{char}=p$)."],
            ["$\\iota_R : R \\hookrightarrow \\operatorname{Frac}(R)$", "Phép nhúng chính tắc & Tính chất phổ dụng", "Canonical embedding & Universal property", "Đơn cấu bảo toàn đơn vị $a \\mapsto a/1_R$ nhúng miền nguyên $R$ vào trường nhỏ nhất $\\operatorname{Frac}(R)$."]
          ];

          extraTerms.forEach(([sym, vi, en, desc]) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
              <td style="text-align: center; font-weight: bold; color: var(--thm-color);">${sym}</td>
              <td><b>${vi}</b></td>
              <td>${en}</td>
              <td>${desc}</td>
            `;
            tbody.appendChild(tr);
          });

          if (window.renderMathInElement) {
            renderMathInElement(tbody, {
              delimiters: [{left: "$$", right: "$$", display: true}, {left: "$", right: "$", display: false}],
              throwOnError: false
            });
          }

          // Chèn thanh tìm kiếm lọc tức thì ngay phía trên bảng Thuật ngữ
          const filterBar = document.createElement("div");
          filterBar.className = "glossary-filter-bar";
          const allRows = Array.from(tbody.querySelectorAll("tr"));
          filterBar.innerHTML = `
            <span>🔎 <b>Tra cứu thuật ngữ Anh–Việt &amp; Ký hiệu:</b></span>
            <input type="search" id="glossarySearchInput" placeholder="Gõ thuật ngữ tiếng Việt, tiếng Anh (vd: monoid, nilpotent, ideal, well-defined)..." autocomplete="off">
            <span class="glossary-count-badge" id="glossaryCountBadge">Hiển thị ${allRows.length} / ${allRows.length} mục</span>
          `;
          tableWrapper.parentNode.insertBefore(filterBar, tableWrapper);

          const searchInp = document.getElementById("glossarySearchInput");
          const badge = document.getElementById("glossaryCountBadge");
          searchInp.addEventListener("input", function() {
            const q = this.value.trim().toLowerCase();
            let visible = 0;
            allRows.forEach(row => {
              const match = !q || row.textContent.toLowerCase().includes(q);
              row.style.display = match ? "" : "none";
              if (match) visible++;
            });
            badge.textContent = `Hiển thị ${visible} / ${allRows.length} mục`;
          });
        }
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupLabAndGlossary);
  } else {
    setupLabAndGlossary();
  }
})();
