// ========================================================
// Phòng LAB: BẢNG CAYLEY MÀU + THẺ GHI NHỚ
// ========================================================
(function initAlgebraLab() {
  const modal = document.getElementById("labModal");
  if (!modal) return;
  const dialog = modal.querySelector(".lab-dialog");
  const closeBtn = document.getElementById("labClose");
  const tabs = modal.querySelectorAll("[data-lab-tab]");
  let lastFocus = null;
  let activeTab = "cayley";

  function setTab(name) {
    activeTab = name;
    tabs.forEach(t => t.setAttribute("aria-selected", String(t.dataset.labTab === name)));
    document.getElementById("labPaneCayley").hidden = name !== "cayley";
    document.getElementById("labPaneFlash").hidden = name !== "flash";
    if (name === "flash") flash.ensure();
    if (name === "cayley" && !cayley.built) cayley.build();
  }

  function openLab(name) {
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    setTab(name || activeTab);
    closeBtn.focus();
  }
  function closeLab() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.querySelectorAll("[data-lab-open]").forEach(b => {
    b.addEventListener("click", () => openLab(b.dataset.labOpen));
  });
  tabs.forEach(t => t.addEventListener("click", () => setTab(t.dataset.labTab)));
  closeBtn.addEventListener("click", closeLab);
  modal.addEventListener("click", e => { if (e.target === modal) closeLab(); });

  modal.addEventListener("keydown", e => {
    if (e.key === "Escape") { e.preventDefault(); closeLab(); return; }
    if (e.key === "Tab") {
      const f = [...dialog.querySelectorAll("button, select, input, [tabindex]:not([tabindex='-1'])")]
        .filter(el => !el.disabled && el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      return;
    }
    if (activeTab !== "flash") return;
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "select") return;
    if (e.key === "ArrowRight") { e.preventDefault(); flash.step(1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); flash.step(-1); }
    else if (e.key === " " && tag !== "button") { e.preventDefault(); flash.flip(); }
    else if (e.key.toLowerCase() === "k") { e.preventDefault(); flash.toggleKnown(); }
  });

  // ---------------- Bảng Cayley màu ----------------
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
  const S3 = [
    { name: "e", p: [0, 1, 2] }, { name: "(12)", p: [1, 0, 2] }, { name: "(13)", p: [2, 1, 0] },
    { name: "(23)", p: [0, 2, 1] }, { name: "(123)", p: [1, 2, 0] }, { name: "(132)", p: [2, 0, 1] }
  ];

  function makeStructure(kind, n) {
    if (kind === "sym") {
      const key = p => p.join("");
      const idx = new Map(S3.map((s, i) => [key(s.p), i]));
      return {
        labels: S3.map(s => s.name), sym: "∘", title: "S₃",
        op: (i, j) => idx.get(key([0, 1, 2].map(x => S3[i].p[S3[j].p[x]])))
      };
    }
    if (kind === "units") {
      const vals = [];
      for (let k = 1; k < n; k++) if (gcd(k, n) === 1) vals.push(k);
      if (n === 1 || !vals.length) vals.push(0);
      const pos = new Map(vals.map((v, i) => [v, i]));
      return {
        labels: vals.map(String), vals, sym: "·", title: `U(${n})`, n,
        op: (i, j) => { const r = (vals[i] * vals[j]) % n; return pos.has(r) ? pos.get(r) : -1; }
      };
    }
    const vals = Array.from({ length: n }, (_, k) => k);
    return {
      labels: vals.map(String), vals, n, ring: kind === "mul",
      sym: kind === "add" ? "+" : "·", title: kind === "add" ? `(ℤ${sub(n)}, +)` : `(ℤ${sub(n)}, ·)`,
      op: kind === "add" ? (i, j) => (i + j) % n : (i, j) => (i * j) % n
    };
  }
  function sub(n) { return String(n).replace(/\d/g, d => "₀₁₂₃₄₅₆₇₈₉"[d]); }

  function analyse(S) {
    const m = S.labels.length;
    const T = [];
    let closed = true;
    for (let i = 0; i < m; i++) { T.push([]); for (let j = 0; j < m; j++) { const r = S.op(i, j); if (r < 0) closed = false; T[i].push(r); } }
    let assoc = closed;
    for (let a = 0; a < m && assoc; a++) for (let b = 0; b < m && assoc; b++) for (let c = 0; c < m; c++) {
      if (T[T[a][b]][c] !== T[a][T[b][c]]) { assoc = false; break; }
    }
    let e = -1;
    if (closed) for (let i = 0; i < m; i++) { let ok = true; for (let j = 0; j < m; j++) if (T[i][j] !== j || T[j][i] !== j) { ok = false; break; } if (ok) { e = i; break; } }
    const inv = new Array(m).fill(-1);
    if (e >= 0) for (let i = 0; i < m; i++) for (let j = 0; j < m; j++) if (T[i][j] === e && T[j][i] === e) { inv[i] = j; break; }
    const allInv = e >= 0 && inv.every(x => x >= 0);
    let comm = closed;
    for (let i = 0; i < m && comm; i++) for (let j = i + 1; j < m; j++) if (T[i][j] !== T[j][i]) { comm = false; break; }
    return { T, m, closed, assoc, e, inv, allInv, comm, group: closed && assoc && e >= 0 && allInv };
  }

  function powers(A, a) {
    const seq = [a]; let cur = a;
    for (let k = 0; k < A.m + 1; k++) { cur = A.T[cur][a]; if (seq.includes(cur)) break; seq.push(cur); }
    return seq;
  }
  const color = (i, m) => `hsl(${Math.round(i * 360 / m)} 72% 82%)`;

  const cayley = {
    built: false, S: null, A: null, selected: -1,
    build() {
      const kind = document.getElementById("labStruct").value;
      const nInput = document.getElementById("labN");
      let n = parseInt(nInput.value, 10);
      if (!Number.isFinite(n)) n = 8;
      n = Math.min(24, Math.max(2, n));
      nInput.value = n;
      nInput.disabled = kind === "sym";
      this.S = makeStructure(kind, n);
      this.A = analyse(this.S);
      this.selected = -1;
      this.built = true;
      this.renderTable(); this.renderAnalysis(); this.renderDetail();
    },
    renderTable() {
      const { S, A } = this;
      const L = S.labels;
      let h = `<thead><tr><th scope="col">${S.sym}</th>${L.map(l => `<th scope="col">${l}</th>`).join("")}</tr></thead><tbody>`;
      for (let i = 0; i < A.m; i++) {
        h += `<tr><th scope="row">${L[i]}</th>`;
        for (let j = 0; j < A.m; j++) {
          const r = A.T[i][j];
          h += r < 0
            ? `<td data-i="${i}" data-j="${j}" style="background:var(--warn-bg);color:var(--warn-color)">∉</td>`
            : `<td data-i="${i}" data-j="${j}" data-r="${r}" style="background:${color(r, A.m)}">${L[r]}</td>`;
        }
        h += "</tr>";
      }
      const table = document.getElementById("labTable");
      table.innerHTML = h + "</tbody>";
      table.classList.remove("dim");
    },
    renderAnalysis() {
      const { S, A } = this;
      const badge = (ok, t) => `<span class="lab-badge ${ok ? "ok" : "no"}">${ok ? "✓" : "✗"} ${t}</span>`;
      document.getElementById("labBadges").innerHTML =
        badge(A.closed, "Đóng") + badge(A.assoc, "Kết hợp") + badge(A.e >= 0, "Có đơn vị") +
        badge(A.allInv, "Mọi phần tử khả nghịch") + badge(A.comm, "Giao hoán");
      let v;
      if (A.group) {
        const gens = [];
        for (let a = 0; a < A.m; a++) if (powers(A, a).length === A.m) gens.push(S.labels[a]);
        v = `<b>${S.title}</b> là một <b>nhóm${A.comm ? " Abel" : " không giao hoán"}</b> cấp <b>${A.m}</b>, đơn vị <code>${S.labels[A.e]}</code>. `;
        v += gens.length ? `Nhóm <b>cyclic</b> với ${gens.length} phần tử sinh: <code>${gens.join(", ")}</code>.`
                         : `Nhóm <b>không cyclic</b> — không phần tử nào có cấp ${A.m}.`;
        const divs = []; for (let d = 1; d <= A.m; d++) if (A.m % d === 0) divs.push(d);
        v += ` Theo Lagrange, cấp mỗi phần tử chia hết ${A.m}: chỉ có thể là ${divs.join(", ")}.`;
      } else {
        const bad = A.e >= 0 ? A.inv.map((x, i) => x < 0 ? S.labels[i] : null).filter(Boolean) : [];
        v = `<b>${S.title}</b> <b>không phải nhóm</b>. `;
        if (!A.closed) v += "Phép toán không đóng trên tập này. ";
        else if (A.e < 0) v += "Không có phần tử đơn vị. ";
        else if (bad.length) v += `Các phần tử không khả nghịch: <code>${bad.join(", ")}</code>. `;
        if (S.ring) {
          const n = S.n, units = [], zd = [], idem = [], nil = [];
          for (let a = 0; a < n; a++) {
            if (gcd(a, n) === 1) units.push(a);
            else if (a !== 0) zd.push(a);
            if ((a * a) % n === a) idem.push(a);
            let p = a, k = 0; while (p !== 0 && k < n) { p = (p * a) % n; k++; } if (p === 0) nil.push(a);
          }
          v += `<br>Trong vành ℤ${sub(n)}: khả nghịch <code>${units.join(", ") || "—"}</code>; ước của không <code>${zd.join(", ") || "—"}</code>; lũy đẳng <code>${idem.join(", ")}</code>; lũy linh <code>${nil.join(", ")}</code>. `;
          v += zd.length ? `Vì có ước của không nên ℤ${sub(n)} <b>không</b> là miền nguyên.` : `Không có ước của không: ℤ${sub(n)} là <b>trường</b> (n nguyên tố).`;
        }
      }
      document.getElementById("labVerdict").innerHTML = v;
      const box = document.getElementById("labElements");
      box.innerHTML = S.labels.map((l, i) => {
        const ord = A.group ? powers(A, i).length : null;
        return `<button type="button" class="lab-chip" data-el="${i}" aria-pressed="false" style="background:${color(i, A.m)}">${l}${ord ? `<small>cấp ${ord}</small>` : ""}</button>`;
      }).join("");
    },
    renderDetail() {
      const { S, A, selected: a } = this;
      const el = document.getElementById("labDetail");
      const table = document.getElementById("labTable");
      table.classList.toggle("dim", a >= 0);
      table.querySelectorAll("td").forEach(td => td.classList.toggle("on", a >= 0 && +td.dataset.r === a));
      document.querySelectorAll("#labElements .lab-chip").forEach(c => c.setAttribute("aria-pressed", String(+c.dataset.el === a)));
      if (a < 0) { el.innerHTML = "Chọn một phần tử để xem cấp, nghịch đảo và nhóm con cyclic mà nó sinh ra."; return; }
      const L = S.labels, seq = powers(A, a), name = L[a];
      const exp = S.sym === "+" ? k => `${k}·${name}` : k => `${name}<sup>${k}</sup>`;
      let h = `<b>Phần tử <code>${name}</code></b> xuất hiện ${A.T.flat().filter(r => r === a).length} lần trong bảng (đã làm nổi).<ul>`;
      h += `<li>Lũy thừa: ${seq.map((r, k) => `${exp(k + 1)} = <code>${L[r]}</code>`).join(", ")}</li>`;
      if (A.group) {
        h += `<li>Cấp: <b>|${name}| = ${seq.length}</b>${seq.length === A.m ? " — đây là phần tử sinh của cả nhóm!" : ""}</li>`;
        h += `<li>Nghịch đảo: <code>${L[A.inv[a]]}</code></li>`;
        h += `<li>Nhóm con cyclic ⟨${name}⟩ = {<code>${[...new Set(seq)].sort((x, y) => x - y).map(r => L[r]).join(", ")}</code>}, chỉ số [G : ⟨${name}⟩] = ${A.m / seq.length}</li>`;
      } else if (A.e >= 0) {
        h += `<li>${A.inv[a] >= 0 ? `Khả nghịch, nghịch đảo <code>${L[A.inv[a]]}</code>` : "Không khả nghịch"}</li>`;
      }
      el.innerHTML = h + "</ul>";
    }
  };

  document.getElementById("labCayleyForm").addEventListener("submit", e => { e.preventDefault(); cayley.build(); });
  document.getElementById("labStruct").addEventListener("change", () => cayley.build());
  document.getElementById("labElements").addEventListener("click", e => {
    const chip = e.target.closest(".lab-chip"); if (!chip) return;
    const i = +chip.dataset.el;
    cayley.selected = cayley.selected === i ? -1 : i;
    cayley.renderDetail();
  });
  const labTable = document.getElementById("labTable");
  const readout = document.getElementById("labReadout");
  labTable.addEventListener("mouseover", e => {
    const td = e.target.closest("td"); if (!td || !cayley.S) return;
    labTable.querySelectorAll("td.rc").forEach(x => x.classList.remove("rc"));
    td.classList.add("rc");
    const L = cayley.S.labels, i = +td.dataset.i, j = +td.dataset.j, r = cayley.A.T[i][j];
    readout.textContent = `${L[i]} ${cayley.S.sym} ${L[j]} = ${r < 0 ? "∉ tập (không đóng)" : L[r]}`
      + (cayley.A.e >= 0 && r === cayley.A.e ? "  ← ra đơn vị: hai phần tử nghịch đảo của nhau" : "");
  });
  labTable.addEventListener("mouseleave", () => labTable.querySelectorAll("td.rc").forEach(x => x.classList.remove("rc")));

  // ---------------- Thẻ ghi nhớ ----------------
  const KNOWN_KEY = "ctds_flash_known";
  const flash = {
    cards: [], view: [], idx: 0, filter: "all", known: new Set(),
    ensure() {
      if (!this.cards.length) {
        try { this.known = new Set(JSON.parse(localStorage.getItem(KNOWN_KEY) || "[]")); } catch (_) { this.known = new Set(); }
        document.querySelectorAll("main.content .math-card.def:not(.cyclic-calculator), main.content .math-card.thm").forEach(card => {
          const label = card.querySelector(".card-header .label")?.textContent.trim() || "";
          const tag = card.querySelector(".card-header .tag")?.textContent.trim() || "";
          const body = card.querySelector(".card-body");
          if (!body || !(label || tag)) return;
          this.cards.push({ el: card, kind: card.classList.contains("thm") ? "thm" : "def", label, title: tag || label, key: label + "|" + tag, body });
        });
        this.applyFilter();
      }
      this.render();
    },
    applyFilter() {
      this.view = this.cards.filter(c =>
        this.filter === "all" || (this.filter === "todo" ? !this.known.has(c.key) : c.kind === this.filter));
      this.idx = Math.min(this.idx, Math.max(0, this.view.length - 1));
    },
    render() {
      const card = document.getElementById("flashCard");
      const front = document.getElementById("flashFront");
      const back = document.getElementById("flashBack");
      card.classList.remove("flipped");
      const total = this.cards.length;
      const knownCount = this.cards.filter(c => this.known.has(c.key)).length;
      document.getElementById("flashProgressText").textContent = `Đã thuộc ${knownCount}/${total}`;
      document.getElementById("flashBar").style.width = total ? `${(knownCount / total) * 100}%` : "0";
      const c = this.view[this.idx];
      document.getElementById("flashCount").textContent = this.view.length ? `${this.idx + 1} / ${this.view.length}` : "0 / 0";
      if (!c) {
        front.innerHTML = `<div class="flash-kind">Hoàn thành</div><div class="flash-title">🎉 Không còn thẻ nào trong bộ lọc này</div>`;
        back.innerHTML = "";
        card.classList.remove("known");
        return;
      }
      front.innerHTML = `<div class="flash-kind"></div><div class="flash-title"></div><div class="flash-hint">Bấm để lật thẻ · nhớ lại phát biểu trước khi xem</div>`;
      front.querySelector(".flash-kind").textContent = c.label;
      front.querySelector(".flash-title").textContent = c.title;
      const clone = c.body.cloneNode(true);
      clone.querySelectorAll("[id]").forEach(n => n.removeAttribute("id"));
      clone.querySelectorAll("button, input, select, form").forEach(n => n.remove());
      back.innerHTML = `<div class="flash-back-title"></div>`;
      back.firstChild.textContent = `${c.label} — ${c.title}`;
      back.appendChild(clone);
      back.scrollTop = 0;
      card.classList.toggle("known", this.known.has(c.key));
      document.getElementById("flashKnown").setAttribute("aria-pressed", String(this.known.has(c.key)));
    },
    flip() { if (this.view.length) document.getElementById("flashCard").classList.toggle("flipped"); },
    step(d) { if (!this.view.length) return; this.idx = (this.idx + d + this.view.length) % this.view.length; this.render(); },
    toggleKnown() {
      const c = this.view[this.idx]; if (!c) return;
      if (this.known.has(c.key)) this.known.delete(c.key); else this.known.add(c.key);
      try { localStorage.setItem(KNOWN_KEY, JSON.stringify([...this.known])); } catch (_) {}
      if (this.filter === "todo") this.applyFilter();
      this.render();
    },
    shuffle() {
      for (let i = this.view.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [this.view[i], this.view[j]] = [this.view[j], this.view[i]]; }
      this.idx = 0; this.render();
    },
    gotoSource() {
      const c = this.view[this.idx]; if (!c) return;
      const chapter = c.el.closest(".chapter-content"), part = c.el.closest(".part-panel");
      closeLab();
      if (typeof setAppMode === "function") setAppMode("study");
      if (part && window.switchPart) window.switchPart(part.id, false);
      if (part && chapter && window.switchChapter) window.switchChapter(part.id, chapter.id, false);
      setTimeout(() => {
        c.el.scrollIntoView({ behavior: "smooth", block: "center" });
        c.el.style.outline = "3px solid var(--gold, #e3b341)";
        c.el.style.outlineOffset = "5px";
        setTimeout(() => { c.el.style.outline = ""; }, 2500);
      }, 150);
    }
  };

  document.getElementById("flashCard").addEventListener("click", () => flash.flip());
  document.getElementById("flashPrev").addEventListener("click", () => flash.step(-1));
  document.getElementById("flashNext").addEventListener("click", () => flash.step(1));
  document.getElementById("flashKnown").addEventListener("click", () => flash.toggleKnown());
  document.getElementById("flashShuffle").addEventListener("click", () => flash.shuffle());

const btnResetAll = document.getElementById("flashReset");
if (btnResetAll) {
  btnResetAll.addEventListener("click", function() {
    // 1. Kiểm tra xem có thẻ nào đã thuộc chưa
    const hasKnown = (typeof known !== "undefined" && known.size > 0) ||
                     (typeof flash !== "undefined" && flash.known && flash.known.size > 0) ||
                     localStorage.getItem("ctds_flash_known");

    if (!hasKnown) {
      alert("Tất cả thẻ hiện đang ở trạng thái chưa thuộc!");
      return;
    }

    // 2. Hộp thoại xác nhận
    if (!confirm("Bạn có chắc chắn muốn đặt lại toàn bộ thẻ về trạng thái chưa thuộc để học lại từ đầu?")) {
      return;
    }

    // 3. XÓA TẬN GỐC BIẾN BỘ NHỚ TRONG RAM (Nguyên nhân gây lỗi nhảy lại 18/52)
    if (typeof known !== "undefined" && known instanceof Set) {
      known.clear();
    }
    if (typeof flash !== "undefined" && flash.known instanceof Set) {
      flash.known.clear();
    }
    if (typeof knownCards !== "undefined") {
      if (knownCards instanceof Set) knownCards.clear();
      else if (Array.isArray(knownCards)) knownCards.length = 0;
    }

    // 4. XÓA / ĐỒNG BỘ DỮ LIỆU TRONG LOCALSTORAGE
    // Ghi mảng rỗng vào đúng các key lưu trữ của LAB
    localStorage.setItem("ctds_flash_known", JSON.stringify([]));
    localStorage.removeItem("ctds_flash_known");

    // 5. CẬP NHẬT TRẠNG THÁI NÚT VÀ THANH TIẾN ĐỘ
    const btnKnownEl = document.getElementById("flashKnown");
    if (btnKnownEl) {
      btnKnownEl.setAttribute("aria-pressed", "false");
      btnKnownEl.classList.remove("active");
    }

    // 6. GỌI CÁC HÀM CẬP NHẬT GIAO DIỆN CHÍNH GỐC CỦA TRANG
    if (typeof updateProgress === "function") updateProgress();
    if (typeof saveKnown === "function") saveKnown();
    if (typeof renderCard === "function") renderCard();
    if (typeof renderCurrentCard === "function") renderCurrentCard();
    if (typeof updateUI === "function") updateUI();
    if (typeof flash !== "undefined") {
      if (typeof flash.save === "function") flash.save();
      if (typeof flash.render === "function") flash.render();
      if (typeof flash.updateProgress === "function") flash.updateProgress();
    }

    // Cập nhật cưỡng bức thanh tiến độ nếu hàm ngoài chưa bắt kịp
    const pText = document.getElementById("flashProgressText");
    const pBar = document.getElementById("flashBar");
    const totalCount = document.getElementById("flashCount")?.textContent.split("/")[1]?.trim() || "52";
    if (pText) pText.textContent = `Đã thuộc 0/${totalCount}`;
    if (pBar) pBar.style.width = "0%";
  });
}
  document.getElementById("flashGoto").addEventListener("click", () => flash.gotoSource());
  modal.querySelectorAll("[data-flash-filter]").forEach(b => b.addEventListener("click", () => {
    flash.filter = b.dataset.flashFilter;
    modal.querySelectorAll("[data-flash-filter]").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
    flash.idx = 0; flash.applyFilter(); flash.render();
  }));


  setStat("statDefs", document.querySelectorAll("main.content .math-card.def:not(.cyclic-calculator)").length);
  setStat("statThms", document.querySelectorAll("main.content .math-card.thm").length);
  setStat("statEx", document.querySelectorAll("#part-5 .ex-study-card").length);
})();
