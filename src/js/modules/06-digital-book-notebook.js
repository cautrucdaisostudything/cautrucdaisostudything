/* ==========================================================================
   FILE: src/js/modules/06-digital-book-notebook.js
   TÍNH NĂNG:
   1. Cài đặt đọc Digital Book (Cỡ chữ, Giãn dòng, Sáng/Tối/Đọc tập trung)
   2. Tự động lưu vị trí đọc, Lịch sử đọc gần đây & Deep-link URL Hash
   3. Trang chủ Đọc sách (Reading Hub: Tiếp tục đọc, Thư viện chương, Đánh dấu)
   4. Sổ tay cá nhân bên phải (CRUD ghi chú, Đánh dấu ĐN/ĐL/VD, Tìm kiếm, JSON Backup)
   5. [MỚI - Ý TƯỞNG 2] Bôi đen văn bản để Highlight (3 màu) & Trích dẫn nhanh vào Sổ tay (Bảo toàn LaTeX)
   6. [MỚI - Ý TƯỞNG 3] Xuất Sổ tay Cá nhân & Đề thi Smart Exam ra tệp .tex chuẩn LaTeX (TeXstudio / Overleaf)
   ========================================================================== */
(function initDigitalBookUpgrade() {
  "use strict";
  const STORAGE_KEYS = {
    SETTINGS: "ctds_db_reader_settings_v1",
    PROGRESS: "ctds_db_reading_progress_v1",
    HISTORY: "ctds_db_reading_history_v1",
    NOTES: "ctds_db_personal_notes_v1",
    HIGHLIGHTS: "ctds_db_highlights_v1",
    LEGACY_BM: "ctds_bookmarks_v1"
  };
  // ---------------- TIỆN ÍCH AN TOÀN DỮ LIỆU & DEBOUNCE ----------------
  function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }
  function safeStorageRead(key, fallback) {
    try {
      const raw = window.localStorage.getItem(key);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return parsed !== null && parsed !== undefined ? parsed : fallback;
    } catch (_) {
      return fallback;
    }
  }
  function safeStorageWrite(key, data) {
    try {
      const serialized = JSON.stringify(data);
      window.localStorage.setItem(key, serialized);
      const verify = window.localStorage.getItem(key);
      return verify === serialized;
    } catch (_) {
      return false;
    }
  }
  function renderMathSafely(el) {
    if (!el || typeof window.renderMathInElement !== "function") return;
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
  function downloadTextFile(content, filename, mimeType = "text/plain;charset=utf-8") {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }
  // ---------------- 1. TRẠNG THÁI CÀI ĐẶT ĐỌC & KHỞI TẠO ----------------
  const defaultSettings = {
    fontSize: 18,
    lineHeight: 1.85,
    colorMode: "light",
    focusMode: false,
    drawerOpen: false,
    hubCollapsed: false
  };
  let settings = Object.assign({}, defaultSettings, safeStorageRead(STORAGE_KEYS.SETTINGS, {}));
  settings.fontSize = Math.min(22, Math.max(15, Number(settings.fontSize) || 18));
  settings.lineHeight = Math.min(2.15, Math.max(1.6, Number(settings.lineHeight) || 1.85));
  if (settings.colorMode !== "dark") settings.colorMode = "light";
  let notesData = safeStorageRead(STORAGE_KEYS.NOTES, []);
  if (!Array.isArray(notesData)) notesData = [];
  let highlightsData = safeStorageRead(STORAGE_KEYS.HIGHLIGHTS, []);
  if (!Array.isArray(highlightsData)) highlightsData = [];
  let readingHistory = safeStorageRead(STORAGE_KEYS.HISTORY, []);
  if (!Array.isArray(readingHistory)) readingHistory = [];
  let lastProgress = safeStorageRead(STORAGE_KEYS.PROGRESS, {
    partId: "part-0",
    chapterId: "tab-c0",
    sectionId: "",
    title: "Chương 0: Công cụ Logic, Tập hợp & Ánh xạ",
    timestamp: Date.now()
  });
  let activeContext = {
    partId: "part-0",
    chapterId: "tab-c0",
    sectionId: "",
    blockId: "",
    blockType: "note",
    blockLabel: "Ghi chú chung chương hiện tại"
  };
  let editingNoteId = null;
  let activeNbFilter = "all";
  // ---------------- 2. ĐỒNG BỘ ID ỔN ĐỊNH CHO CÁC KHỐI KIẾN THỨC ----------------
  function ensureStableIds() {
    document.querySelectorAll(".part-panel .chapter-content").forEach(ch => {
      const chId = ch.id || "ch";
      ch.querySelectorAll("h3.subsection-title").forEach((h3, idx) => {
        if (!h3.id) h3.id = `${chId}-sec-${idx + 1}`;
      });
      ch.querySelectorAll(".math-card, details.ex-card, details.proof-block, .ex-study-card").forEach((block, idx) => {
        if (!block.id) {
          const kind = block.classList.contains("def")
            ? "def"
            : block.classList.contains("thm")
            ? "thm"
            : block.tagName.toLowerCase() === "details"
            ? "ex"
            : "card";
          block.id = `${chId}-${kind}-${idx + 1}`;
        }
      });
    });
  }
  // ---------------- 3. ÁP DỤNG CÀI ĐẶT ĐỌC LÊN DOM ----------------
  function applyReaderSettings() {
    const root = document.documentElement;
    root.style.setProperty("--db-reading-fs", `${settings.fontSize}px`);
    root.style.setProperty("--fs", `${settings.fontSize}px`);
    root.style.setProperty("--db-reading-lh", String(settings.lineHeight));
    root.setAttribute("data-book-mode", settings.colorMode);
    document.body.classList.toggle("db-focus-mode", Boolean(settings.focusMode));
    document.body.classList.toggle("db-drawer-open", Boolean(settings.drawerOpen));
    const drawer = document.getElementById("dbNotebookDrawer");
    if (drawer) drawer.hidden = !settings.drawerOpen;
    const btnDrawer = document.getElementById("dbBtnToggleDrawer");
    if (btnDrawer) {
      btnDrawer.setAttribute("aria-pressed", String(Boolean(settings.drawerOpen)));
      btnDrawer.classList.toggle("is-active", Boolean(settings.drawerOpen));
    }
    const btnFocus = document.getElementById("dbBtnFocusMode");
    if (btnFocus) {
      btnFocus.setAttribute("aria-pressed", String(Boolean(settings.focusMode)));
      btnFocus.classList.toggle("is-active", Boolean(settings.focusMode));
    }
    const btnColor = document.getElementById("dbBtnColorMode");
    if (btnColor) {
      const isDark = settings.colorMode === "dark";
      btnColor.setAttribute("aria-pressed", String(isDark));
      btnColor.innerHTML = isDark
        ? '🌙 <span class="db-btn-label">Tối</span>'
        : '☀️ <span class="db-btn-label">Sáng</span>';
    }
    const fsReadout = document.getElementById("dbFsReadout");
    if (fsReadout) fsReadout.textContent = `${settings.fontSize}px`;
    const lhReadout = document.getElementById("dbLhReadout");
    if (lhReadout) lhReadout.textContent = settings.lineHeight.toFixed(2);
  }
  function saveReaderSettings() {
    safeStorageWrite(STORAGE_KEYS.SETTINGS, settings);
  }
  // ---------------- 4. THANH CÔNG CỤ ĐỌC SÁCH GỌN TRÊN TOPBAR ----------------
  function injectReaderToolbar() {
    const actionsEl = document.querySelector(".topbar .actions");
    if (!actionsEl || document.getElementById("dbToolbarGroup")) return;
    const group = document.createElement("div");
    group.className = "db-toolbar-group";
    group.id = "dbToolbarGroup";
    group.setAttribute("role", "toolbar");
    group.setAttribute("aria-label", "Công cụ đọc sách Digital Book");
    group.innerHTML = `
      <button type="button" class="db-tool-btn" id="dbBtnTypo" aria-expanded="false" aria-controls="dbTypoPopover" title="Điều chỉnh cỡ chữ và giãn dòng">
        Aa <span class="db-btn-label">Cỡ chữ</span>
      </button>
      <div class="db-tool-sep" aria-hidden="true"></div>
      <button type="button" class="db-tool-btn" id="dbBtnColorMode" aria-pressed="false" title="Chuyển chế độ Sáng / Tối">
        ☀️ <span class="db-btn-label">Sáng</span>
      </button>
      <button type="button" class="db-tool-btn" id="dbBtnFocusMode" aria-pressed="false" title="Chế độ đọc tập trung (ẩn banner và mục lục)">
        🎯 <span class="db-btn-label">Tập trung</span>
      </button>
      <div class="db-tool-sep" aria-hidden="true"></div>
      <button type="button" class="db-tool-btn" id="dbBtnToggleDrawer" aria-pressed="false" aria-controls="dbNotebookDrawer" title="Mở/Đóng Sổ tay cá nhân và Dấu trang">
        📓 <span class="db-btn-label">Sổ tay</span>
        <span class="db-badge-count" id="dbTotalNotesBadge">0</span>
      </button>
    `;
    actionsEl.prepend(group);
    const popover = document.createElement("div");
    popover.className = "db-typo-popover";
    popover.id = "dbTypoPopover";
    popover.hidden = true;
    popover.innerHTML = `
      <div class="db-typo-row">
        <span class="db-typo-label">Cỡ chữ đọc</span>
        <div class="db-typo-controls">
          <button type="button" class="db-step-btn" id="dbFsDec" aria-label="Giảm cỡ chữ">A−</button>
          <strong id="dbFsReadout" style="min-width:42px; text-align:center; font-size:13px;">18px</strong>
          <button type="button" class="db-step-btn" id="dbFsInc" aria-label="Tăng cỡ chữ">A+</button>
        </div>
      </div>
      <div class="db-typo-row">
        <span class="db-typo-label">Giãn dòng</span>
        <div class="db-typo-controls">
          <button type="button" class="db-step-btn" id="dbLhDec" aria-label="Giảm giãn dòng">−</button>
          <strong id="dbLhReadout" style="min-width:42px; text-align:center; font-size:13px;">1.85</strong>
          <button type="button" class="db-step-btn" id="dbLhInc" aria-label="Tăng giãn dòng">+</button>
        </div>
      </div>
      <div class="db-typo-row" style="margin-top:8px; padding-top:8px; border-top:1px solid var(--line);">
        <button type="button" class="db-step-btn" id="dbTypoReset" style="width:100%;">Đặt lại mặc định (18px · 1.85)</button>
      </div>
    `;
    document.querySelector(".topbar")?.appendChild(popover);
    const btnTypo = document.getElementById("dbBtnTypo");
    btnTypo?.addEventListener("click", (e) => {
      e.stopPropagation();
      const willOpen = popover.hidden;
      popover.hidden = !willOpen;
      btnTypo.setAttribute("aria-expanded", String(willOpen));
    });
    document.addEventListener("click", (e) => {
      if (!popover.hidden && !popover.contains(e.target) && e.target !== btnTypo) {
        popover.hidden = true;
        btnTypo?.setAttribute("aria-expanded", "false");
      }
    });
    document.getElementById("dbFsDec")?.addEventListener("click", () => {
      settings.fontSize = Math.max(15, settings.fontSize - 1);
      applyReaderSettings();
      saveReaderSettings();
    });
    document.getElementById("dbFsInc")?.addEventListener("click", () => {
      settings.fontSize = Math.min(22, settings.fontSize + 1);
      applyReaderSettings();
      saveReaderSettings();
    });
    document.getElementById("dbLhDec")?.addEventListener("click", () => {
      settings.lineHeight = Math.max(1.6, Number((settings.lineHeight - 0.05).toFixed(2)));
      applyReaderSettings();
      saveReaderSettings();
    });
    document.getElementById("dbLhInc")?.addEventListener("click", () => {
      settings.lineHeight = Math.min(2.15, Number((settings.lineHeight + 0.05).toFixed(2)));
      applyReaderSettings();
      saveReaderSettings();
    });
    document.getElementById("dbTypoReset")?.addEventListener("click", () => {
      settings.fontSize = 18;
      settings.lineHeight = 1.85;
      applyReaderSettings();
      saveReaderSettings();
    });
    document.getElementById("dbBtnColorMode")?.addEventListener("click", () => {
      settings.colorMode = settings.colorMode === "dark" ? "light" : "dark";
      applyReaderSettings();
      saveReaderSettings();
    });
    document.getElementById("dbBtnFocusMode")?.addEventListener("click", () => {
      settings.focusMode = !settings.focusMode;
      applyReaderSettings();
      saveReaderSettings();
    });
    document.getElementById("dbBtnToggleDrawer")?.addEventListener("click", () => {
      settings.drawerOpen = !settings.drawerOpen;
      applyReaderSettings();
      saveReaderSettings();
      if (settings.drawerOpen) renderNotebookList();
    });
  }
  // ---------------- 5. TRANG CHỦ DIGITAL BOOK (READING HUB DASHBOARD) ----------------
  function injectReadingHub() {
    const studyWorkspace = document.getElementById("studyWorkspace");
    const container = studyWorkspace?.querySelector(".container");
    if (!studyWorkspace || !container || document.getElementById("dbHomeDashboard")) return;
    const hub = document.createElement("section");
    hub.className = "db-home-hub";
    hub.id = "dbHomeDashboard";
    hub.setAttribute("aria-label", "Bảng điều khiển Đọc sách & Sổ tay cá nhân");
    hub.innerHTML = `
      <div class="db-hub-shell ${settings.hubCollapsed ? "is-collapsed" : ""}" id="dbHubShell">
        <div class="db-hub-header">
          <div class="db-hub-title-group">
            <span>📚</span>
            <div>
              <h2 class="db-hub-title">Không gian Đọc Học thuật &amp; Sổ tay Cá nhân</h2>
              <span class="db-hub-subtitle">Bôi đen văn bản để Tô sáng / Trích dẫn nhanh · Xuất Sổ tay &amp; Đề thi chuẩn LaTeX (.tex)</span>
            </div>
          </div>
          <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
            <button type="button" class="db-tex-export-btn" id="dbHubExportTexBtn" title="Xuất toàn bộ Sổ tay & Đề cương ra file .tex cho TeXstudio / Overleaf">📄 Xuất Sổ tay (.tex)</button>
            <button type="button" class="db-step-btn" id="dbHubOpenNotesBtn">📓 Mở Sổ tay</button>
            <button type="button" class="db-step-btn" id="dbHubCollapseBtn" aria-expanded="${!settings.hubCollapsed}">
              ${settings.hubCollapsed ? "▼ Mở rộng Bảng đọc sách" : "▲ Thu gọn"}
            </button>
          </div>
        </div>
        <div class="db-hub-grid">
          <div class="db-hub-card">
            <div>
              <h4>📖 Tiếp tục đọc</h4>
              <div class="db-continue-title" id="dbContinueTitle">Chương 0</div>
              <div class="db-continue-meta" id="dbContinueMeta">Vị trí gần nhất của bạn</div>
            </div>
            <button type="button" class="db-primary-btn" id="dbContinueBtn">Đọc tiếp từ vị trí này →</button>
          </div>
          <div class="db-hub-card">
            <h4>🗂️ Thư viện chương</h4>
            <div class="db-chapter-chips" id="dbChapterChips"></div>
          </div>
          <div class="db-hub-card">
            <h4>🔖 Đã đánh dấu &amp; Ghi chú (<span id="dbHubNotesCount">0</span>)</h4>
            <ul class="db-mini-list" id="dbHubBookmarksList"></ul>
          </div>
          <div class="db-hub-card">
            <h4>🕒 Lịch sử đọc gần đây</h4>
            <ul class="db-mini-list" id="dbHubHistoryList"></ul>
          </div>
        </div>
      </div>
    `;
    studyWorkspace.insertBefore(hub, container);
    document.getElementById("dbHubCollapseBtn")?.addEventListener("click", function () {
      const shell = document.getElementById("dbHubShell");
      if (!shell) return;
      settings.hubCollapsed = !settings.hubCollapsed;
      shell.classList.toggle("is-collapsed", settings.hubCollapsed);
      this.setAttribute("aria-expanded", String(!settings.hubCollapsed));
      this.textContent = settings.hubCollapsed ? "▼ Mở rộng Bảng đọc sách" : "▲ Thu gọn";
      saveReaderSettings();
    });
    document.getElementById("dbHubOpenNotesBtn")?.addEventListener("click", () => {
      settings.drawerOpen = true;
      applyReaderSettings();
      saveReaderSettings();
      renderNotebookList();
    });
    document.getElementById("dbHubExportTexBtn")?.addEventListener("click", () => {
      exportNotebookToLatex();
    });
    document.getElementById("dbContinueBtn")?.addEventListener("click", () => {
      navigateToLocation(lastProgress.partId, lastProgress.chapterId, lastProgress.sectionId);
    });
  }
  function updateReadingHubUI() {
    const titleEl = document.getElementById("dbContinueTitle");
    const metaEl = document.getElementById("dbContinueMeta");
    if (titleEl && lastProgress) {
      titleEl.textContent = lastProgress.title || "Chương 0: Công cụ";
    }
    if (metaEl && lastProgress) {
      const timeStr = lastProgress.timestamp
        ? new Date(lastProgress.timestamp).toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })
        : "";
      metaEl.textContent = lastProgress.sectionTitle
        ? `Mục: ${lastProgress.sectionTitle} ${timeStr ? "· " + timeStr : ""}`
        : `Đã lưu tự động ${timeStr ? "lúc " + timeStr : ""}`;
    }
    const chipsContainer = document.getElementById("dbChapterChips");
    if (chipsContainer) {
      const allCh = [
        { part: "part-0", ch: "tab-c0", label: "Ch.0 · Công cụ" },
        { part: "part-1", ch: "tab-c1", label: "Ch.1 · Nhóm" },
        { part: "part-1", ch: "tab-c2", label: "Ch.2 · Nhóm con" },
        { part: "part-1", ch: "tab-c3", label: "Ch.3 · Lagrange" },
        { part: "part-1", ch: "tab-c4", label: "Ch.4 · Nhóm thương" },
        { part: "part-1", ch: "tab-c5", label: "Ch.5 · Đồng cấu" },
        { part: "part-2", ch: "tab-c6", label: "Ch.6 · Vành" },
        { part: "part-2", ch: "tab-c7", label: "Ch.7 · Iđêan" },
        { part: "part-2", ch: "tab-c8", label: "Ch.8 · Miền nguyên" },
        { part: "part-3", ch: "tab-c9", label: "Ch.9 · Trường" },
        { part: "part-4", ch: "tab-compare", label: "Đối chiếu" }
      ];
      chipsContainer.replaceChildren();
      allCh.forEach(item => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "db-ch-chip" + (lastProgress?.chapterId === item.ch ? " is-current" : "");
        btn.textContent = item.label;
        btn.addEventListener("click", () => navigateToLocation(item.part, item.ch, ""));
        chipsContainer.appendChild(btn);
      });
    }
    const bmList = document.getElementById("dbHubBookmarksList");
    const countEl = document.getElementById("dbHubNotesCount");
    const totalBadge = document.getElementById("dbTotalNotesBadge");
    if (countEl) countEl.textContent = String(notesData.length);
    if (totalBadge) totalBadge.textContent = String(notesData.length);
    if (bmList) {
      bmList.replaceChildren();
      if (notesData.length === 0) {
        const empty = document.createElement("li");
        empty.style.fontSize = "12px";
        empty.style.color = "var(--mute)";
        empty.textContent = "Chưa có mục đánh dấu. Bôi đen văn bản bất kỳ hoặc bấm '📝 Ghi chú' để lưu.";
        bmList.appendChild(empty);
      } else {
        notesData.slice(0, 4).forEach(n => {
          const li = document.createElement("li");
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "db-mini-item";
          btn.style.width = "100%";
          const span = document.createElement("span");
          const icon = n.type === "bookmark" ? "🔖" : (n.blockType === "highlight" ? "🖍️" : "📝");
          span.textContent = `${icon} ${n.title}`;
          btn.appendChild(span);
          btn.addEventListener("click", () => navigateToLocation(n.partId, n.chapterId, n.blockId || n.sectionId));
          li.appendChild(btn);
          bmList.appendChild(li);
        });
      }
    }
    const histList = document.getElementById("dbHubHistoryList");
    if (histList) {
      histList.replaceChildren();
      if (readingHistory.length === 0) {
        const empty = document.createElement("li");
        empty.style.fontSize = "12px";
        empty.style.color = "var(--mute)";
        empty.textContent = "Lịch sử đọc sẽ tự động ghi nhận khi bạn chuyển chương/mục.";
        histList.appendChild(empty);
      } else {
        readingHistory.slice(0, 4).forEach(h => {
          const li = document.createElement("li");
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "db-mini-item";
          btn.style.width = "100%";
          const span = document.createElement("span");
          span.textContent = h.sectionTitle ? `${h.chapterShort} · ${h.sectionTitle}` : h.title;
          btn.appendChild(span);
          btn.addEventListener("click", () => navigateToLocation(h.partId, h.chapterId, h.sectionId));
          li.appendChild(btn);
          histList.appendChild(li);
        });
      }
    }
  }
  // ---------------- 6. BẢNG SỔ TAY CÁ NHÂN BÊN PHẢI (RIGHT DRAWER) ----------------
  function injectNotebookDrawer() {
    const container = document.querySelector("#studyWorkspace > .container");
    if (!container || document.getElementById("dbNotebookDrawer")) return;
    const aside = document.createElement("aside");
    aside.className = "db-notebook-drawer";
    aside.id = "dbNotebookDrawer";
    aside.setAttribute("aria-label", "Sổ tay cá nhân");
    aside.hidden = !settings.drawerOpen;
    aside.innerHTML = `
      <div class="db-nb-header">
        <h3>📓 Sổ tay cá nhân</h3>
        <button type="button" class="db-nb-close" id="dbNbCloseBtn" aria-label="Đóng Sổ tay">×</button>
      </div>
      <div class="db-nb-controls">
        <input type="search" class="db-nb-search" id="dbNbSearch" placeholder="Tìm trong ghi chú, highlight &amp; đánh dấu..." aria-label="Tìm kiếm ghi chú">
        <div class="db-nb-tabs" role="tablist" aria-label="Lọc sổ tay">
          <button type="button" class="db-nb-tab is-active" data-nb-filter="all">Tất cả</button>
          <button type="button" class="db-nb-tab" data-nb-filter="note">📝 Ghi chú</button>
          <button type="button" class="db-nb-tab" data-nb-filter="highlight">🖍️ Tô sáng</button>
          <button type="button" class="db-nb-tab" data-nb-filter="def">ĐN</button>
          <button type="button" class="db-nb-tab" data-nb-filter="thm">ĐL</button>
          <button type="button" class="db-nb-tab" data-nb-filter="ex">VD/BT</button>
        </div>
      </div>
      <div class="db-nb-composer">
        <div class="db-nb-context-badge">
          <span id="dbNbContextLabel">📍 Đang gắn với: Chương 0</span>
          <button type="button" class="db-note-act-btn" id="dbNbResetContextBtn" title="Chuyển về ghi chú chung của chương hiện tại">Mặc định</button>
        </div>
        <input type="text" class="db-nb-input-title" id="dbNbTitleInput" placeholder="Tiêu đề ghi chú (tùy chọn)..." maxlength="140">
        <textarea class="db-nb-textarea" id="dbNbBodyInput" placeholder="Nhập ghi chú cá nhân hoặc bôi đen văn bản trên trang để trích dẫn nhanh (hỗ trợ $...$)..."></textarea>
        <div class="db-nb-composer-actions">
          <span class="db-nb-status" id="dbNbStatusMsg" aria-live="polite">Sẵn sàng lưu</span>
          <div style="display:flex; gap:6px;">
            <button type="button" class="db-note-act-btn" id="dbNbCancelEditBtn" hidden>Hủy sửa</button>
            <button type="button" class="db-primary-btn" id="dbNbSaveBtn">Lưu ghi chú</button>
          </div>
        </div>
      </div>
      <div class="db-nb-list" id="dbNbList" role="region" aria-live="polite"></div>
      <div class="db-nb-footer">
        <button type="button" class="db-tex-export-btn" id="dbNbExportTexBtn" title="Xuất toàn bộ Sổ tay & Đề cương ra tệp .tex chuẩn LaTeX (TeXstudio / Overleaf)">📄 Xuất .tex (LaTeX)</button>
        <div style="display:flex; gap:5px;">
          <button type="button" class="db-note-act-btn" id="dbNbExportJsonBtn" title="Xuất toàn bộ Sổ tay ra file JSON">📤 JSON</button>
          <button type="button" class="db-note-act-btn" id="dbNbImportJsonBtn" title="Nhập bản sao lưu JSON">📥 Nhập</button>
        </div>
        <input type="file" id="dbNbImportFileInput" accept=".json,application/json" hidden>
      </div>
    `;
    container.appendChild(aside);
    document.getElementById("dbNbCloseBtn")?.addEventListener("click", () => {
      settings.drawerOpen = false;
      applyReaderSettings();
      saveReaderSettings();
    });
    const searchInput = document.getElementById("dbNbSearch");
    searchInput?.addEventListener("input", debounce(() => {
      renderNotebookList();
    }, 200));
    aside.querySelectorAll("[data-nb-filter]").forEach(btn => {
      btn.addEventListener("click", () => {
        activeNbFilter = btn.getAttribute("data-nb-filter") || "all";
        aside.querySelectorAll("[data-nb-filter]").forEach(b => b.classList.toggle("is-active", b === btn));
        renderNotebookList();
      });
    });
    document.getElementById("dbNbResetContextBtn")?.addEventListener("click", () => {
      editingNoteId = null;
      syncCurrentChapterContext();
      const cancelBtn = document.getElementById("dbNbCancelEditBtn");
      if (cancelBtn) cancelBtn.hidden = true;
      document.getElementById("dbNbSaveBtn").textContent = "Lưu ghi chú";
    });
    document.getElementById("dbNbCancelEditBtn")?.addEventListener("click", () => {
      editingNoteId = null;
      document.getElementById("dbNbTitleInput").value = "";
      document.getElementById("dbNbBodyInput").value = "";
      document.getElementById("dbNbCancelEditBtn").hidden = true;
      document.getElementById("dbNbSaveBtn").textContent = "Lưu ghi chú";
      setNbStatus("Đã hủy chỉnh sửa", "");
    });
    document.getElementById("dbNbSaveBtn")?.addEventListener("click", () => {
      saveNoteFromComposer();
    });
    document.getElementById("dbNbExportTexBtn")?.addEventListener("click", exportNotebookToLatex);
    document.getElementById("dbNbExportJsonBtn")?.addEventListener("click", exportNotebookJSON);
    const fileInp = document.getElementById("dbNbImportFileInput");
    document.getElementById("dbNbImportJsonBtn")?.addEventListener("click", () => fileInp?.click());
    fileInp?.addEventListener("change", handleImportNotebookJSON);
  }
  function setNbStatus(msg, tone) {
    const el = document.getElementById("dbNbStatusMsg");
    if (!el) return;
    el.textContent = msg;
    el.className = "db-nb-status" + (tone ? ` is-${tone}` : "");
  }
  function syncCurrentChapterContext() {
    const activePart = document.querySelector(".part-panel.active");
    const activeCh = activePart?.querySelector(".chapter-content.active");
    const chTitle = activeCh?.querySelector("h2.section-title")?.textContent.trim() || "Chương hiện tại";
    activeContext = {
      partId: activePart?.id || "part-0",
      chapterId: activeCh?.id || "tab-c0",
      sectionId: "",
      blockId: "",
      blockType: "note",
      blockLabel: chTitle.slice(0, 48)
    };
    const labelEl = document.getElementById("dbNbContextLabel");
    if (labelEl) labelEl.textContent = `📍 Gắn với: ${activeContext.blockLabel}`;
  }
  function saveNoteFromComposer() {
    const titleInp = document.getElementById("dbNbTitleInput");
    const bodyInp = document.getElementById("dbNbBodyInput");
    const rawTitle = (titleInp?.value || "").trim();
    const rawBody = (bodyInp?.value || "").trim();
    if (!rawBody) {
      setNbStatus("⚠️ Vui lòng nhập nội dung ghi chú!", "error");
      bodyInp?.focus();
      return;
    }
    const now = Date.now();
    const prevSnapshot = notesData.slice();
    if (editingNoteId) {
      const idx = notesData.findIndex(n => n.id === editingNoteId);
      if (idx !== -1) {
        notesData[idx] = Object.assign({}, notesData[idx], {
          title: rawTitle || notesData[idx].title || activeContext.blockLabel,
          content: rawBody,
          updatedAt: now
        });
      }
    } else {
      const newNote = {
        id: "db-note-" + now + "-" + Math.random().toString(36).slice(2, 6),
        type: "note",
        blockType: activeContext.blockType || "note",
        partId: activeContext.partId,
        chapterId: activeContext.chapterId,
        sectionId: activeContext.sectionId,
        blockId: activeContext.blockId,
        title: rawTitle || activeContext.blockLabel || "Ghi chú cá nhân",
        content: rawBody,
        createdAt: now,
        updatedAt: now
      };
      notesData.unshift(newNote);
    }
    const ok = safeStorageWrite(STORAGE_KEYS.NOTES, notesData);
    if (!ok) {
      notesData = prevSnapshot;
      setNbStatus("❌ Lưu thất bại (Bộ nhớ trình duyệt đã đầy)!", "error");
      return;
    }
    editingNoteId = null;
    if (titleInp) titleInp.value = "";
    if (bodyInp) bodyInp.value = "";
    const cancelBtn = document.getElementById("dbNbCancelEditBtn");
    if (cancelBtn) cancelBtn.hidden = true;
    document.getElementById("dbNbSaveBtn").textContent = "Lưu ghi chú";
    setNbStatus("✓ Đã lưu vào Sổ tay", "saved");
    refreshCardNoteButtons();
    renderNotebookList();
    updateReadingHubUI();
  }
  // ---------------- 7. ĐỒNG BỘ ĐÁNH DẤU (BOOKMARKS) & NÚT GHI NHANH TRÊN THẺ ----------------
  function syncLegacyBookmarksIntoNotebook() {
    const legacyIds = safeStorageRead(STORAGE_KEYS.LEGACY_BM, []);
    if (!Array.isArray(legacyIds)) return;
    let changed = false;
    legacyIds.forEach(cardId => {
      const exists = notesData.some(n => n.type === "bookmark" && n.blockId === cardId);
      if (!exists) {
        const el = document.getElementById(cardId);
        if (!el) return;
        const info = extractBlockMetadata(el);
        notesData.push({
          id: "db-bm-" + cardId,
          type: "bookmark",
          blockType: info.blockType,
          partId: info.partId,
          chapterId: info.chapterId,
          sectionId: info.sectionId,
          blockId: cardId,
          title: info.title,
          content: info.snippet,
          createdAt: Date.now(),
          updatedAt: Date.now()
        });
        changed = true;
      }
    });
    if (changed) {
      safeStorageWrite(STORAGE_KEYS.NOTES, notesData);
    }
  }
  function extractBlockMetadata(el) {
    if (!el) {
      return {
        partId: "part-0",
        chapterId: "tab-c0",
        sectionId: "",
        blockType: "note",
        title: "Giáo trình Cấu trúc Đại số",
        snippet: ""
      };
    }
    const part = el.closest(".part-panel");
    const chapter = el.closest(".chapter-content");
    let prevSec = el.previousElementSibling;
    while (prevSec && !prevSec.matches("h3.subsection-title")) {
      prevSec = prevSec.previousElementSibling;
    }
    let blockType = "note";
    if (el.classList.contains("def")) blockType = "def";
    else if (el.classList.contains("thm") || el.classList.contains("cor")) blockType = "thm";
    else if (el.tagName.toLowerCase() === "details" || el.classList.contains("ex-study-card")) blockType = "ex";
    const label = el.querySelector(".card-header .label")?.textContent.trim()
      || el.querySelector(".ex-title-label")?.textContent.trim()
      || el.querySelector("summary")?.textContent.trim()
      || prevSec?.textContent.trim()
      || "Khối kiến thức";
    const tag = el.querySelector(".card-header .tag")?.textContent.trim() || "";
    const title = tag ? `${label} — ${tag}` : label;
    const bodyNode = el.querySelector(".card-body")
      || el.querySelector(".ex-problem-statement")
      || el.querySelector(".ex-content")
      || el;
    const clone = bodyNode.cloneNode(true);
    clone.querySelectorAll(".katex, .katex-display").forEach(k => {
      const ann = k.querySelector('annotation[encoding="application/x-tex"]');
      if (ann) k.replaceWith(document.createTextNode(` $${ann.textContent.trim()}$ `));
    });
    clone.querySelectorAll("button, .inner-tabs-nav, .inner-tab-pane").forEach(b => b.remove());
    const snippet = clone.textContent.replace(/\s+/g, " ").trim().slice(0, 240);
    return {
      partId: part?.id || "part-0",
      chapterId: chapter?.id || "tab-c0",
      sectionId: prevSec?.id || "",
      blockType,
      title,
      snippet
    };
  }
  function decorateKnowledgeBlocks() {
    const blocks = document.querySelectorAll(
      "main.content .math-card.def:not(.cyclic-calculator), main.content .math-card.thm, main.content details.ex-card, #part-5 .ex-study-card"
    );
    blocks.forEach(block => {
      const header = block.querySelector(".card-header")
        || block.querySelector(".ex-header-bar")
        || block.querySelector("summary");
      if (!header || header.querySelector(".db-card-note-btn")) return;
      const noteBtn = document.createElement("button");
      noteBtn.type = "button";
      noteBtn.className = "db-card-note-btn";
      noteBtn.dataset.forBlock = block.id;
      noteBtn.textContent = "📝 Ghi chú";
      noteBtn.title = "Tạo ghi chú cá nhân gắn với mục kiến thức này";
      noteBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const meta = extractBlockMetadata(block);
        activeContext = {
          partId: meta.partId,
          chapterId: meta.chapterId,
          sectionId: meta.sectionId,
          blockId: block.id,
          blockType: meta.blockType,
          blockLabel: meta.title
        };
        const labelEl = document.getElementById("dbNbContextLabel");
        if (labelEl) labelEl.textContent = `📍 Gắn với: ${meta.title.slice(0, 42)}`;
        settings.drawerOpen = true;
        applyReaderSettings();
        saveReaderSettings();
        renderNotebookList();
        const titleInp = document.getElementById("dbNbTitleInput");
        const bodyInp = document.getElementById("dbNbBodyInput");
        if (titleInp && !titleInp.value) titleInp.value = meta.title;
        bodyInp?.focus();
      });
      header.appendChild(noteBtn);
      const starBtn = header.querySelector(".bm-star-btn");
      if (starBtn && !starBtn.dataset.dbBound) {
        starBtn.dataset.dbBound = "1";
        starBtn.addEventListener("click", () => {
          setTimeout(() => {
            const isMarked = starBtn.classList.contains("is-bookmarked");
            if (isMarked) {
              syncLegacyBookmarksIntoNotebook();
            } else {
              notesData = notesData.filter(n => !(n.type === "bookmark" && n.blockId === block.id));
              safeStorageWrite(STORAGE_KEYS.NOTES, notesData);
            }
            renderNotebookList();
            updateReadingHubUI();
          }, 30);
        });
      }
    });
    refreshCardNoteButtons();
  }
  function refreshCardNoteButtons() {
    const notedBlocks = new Set(notesData.filter(n => n.blockId).map(n => n.blockId));
    document.querySelectorAll(".db-card-note-btn").forEach(btn => {
      const bid = btn.dataset.forBlock;
      const has = notedBlocks.has(bid);
      btn.classList.toggle("has-note", has);
      btn.textContent = has ? "📝 Đã có ghi chú" : "📝 Ghi chú";
    });
  }
  // ---------------- 8. RENDER DANH SÁCH GHI CHÚ TRONG SỔ TAY (CHỐNG XSS) ----------------
  function renderNotebookList() {
    const listEl = document.getElementById("dbNbList");
    if (!listEl) return;
    const query = (document.getElementById("dbNbSearch")?.value || "").trim().toLowerCase();
    const filtered = notesData.filter(item => {
      if (activeNbFilter === "note" && item.type !== "note") return false;
      if (activeNbFilter === "highlight" && item.blockType !== "highlight" && item.type !== "highlight") return false;
      if (activeNbFilter === "def" && item.blockType !== "def") return false;
      if (activeNbFilter === "thm" && item.blockType !== "thm") return false;
      if (activeNbFilter === "ex" && item.blockType !== "ex") return false;
      if (!query) return true;
      return (
        (item.title || "").toLowerCase().includes(query) ||
        (item.content || "").toLowerCase().includes(query)
      );
    });
    listEl.replaceChildren();
    if (filtered.length === 0) {
      const empty = document.createElement("div");
      empty.style.textAlign = "center";
      empty.style.padding = "28px 12px";
      empty.style.color = "var(--mute)";
      empty.style.fontSize = "13px";
      empty.textContent = query
        ? "Không tìm thấy ghi chú nào khớp từ khóa."
        : "Chưa có mục nào trong phân loại này. Bạn có thể bôi đen văn bản bất kỳ trên trang đọc để Tô sáng / Trích dẫn nhanh!";
      listEl.appendChild(empty);
      return;
    }
    const typeLabels = {
      def: "Định nghĩa",
      thm: "Định lý",
      ex: "Ví dụ / BT",
      highlight: "Đoạn tô sáng",
      note: "Ghi chú"
    };
    filtered.forEach(item => {
      const card = document.createElement("article");
      card.className = "db-note-item";
      card.dataset.kind = item.blockType || "note";
      const metaRow = document.createElement("div");
      metaRow.className = "db-note-meta";
      const badge = document.createElement("span");
      badge.className = "db-note-tag";
      const icon = item.type === "bookmark" ? "🔖 " : (item.blockType === "highlight" ? "🖍️ " : "📝 ");
      badge.textContent = `${icon}${typeLabels[item.blockType] || "Ghi chú"}`;
      const dateSpan = document.createElement("span");
      dateSpan.textContent = item.updatedAt
        ? new Date(item.updatedAt).toLocaleDateString("vi-VN")
        : "";
      metaRow.append(badge, dateSpan);
      const titleH4 = document.createElement("h4");
      titleH4.className = "db-note-title";
      titleH4.textContent = item.title || "Ghi chú";
      const bodyDiv = document.createElement("div");
      bodyDiv.className = "db-note-body";
      bodyDiv.textContent = item.content || "";
      renderMathSafely(bodyDiv);
      const actionsRow = document.createElement("div");
      actionsRow.className = "db-note-actions";
      const gotoBtn = document.createElement("button");
      gotoBtn.type = "button";
      gotoBtn.className = "db-note-act-btn";
      gotoBtn.textContent = "↗ Đi tới gốc";
      gotoBtn.addEventListener("click", () => {
        navigateToLocation(item.partId, item.chapterId, item.blockId || item.sectionId);
      });
      actionsRow.appendChild(gotoBtn);
      if (item.type === "note" || item.type === "highlight") {
        const editBtn = document.createElement("button");
        editBtn.type = "button";
        editBtn.className = "db-note-act-btn";
        editBtn.textContent = "Sửa / Ghi thêm";
        editBtn.addEventListener("click", () => {
          editingNoteId = item.id;
          document.getElementById("dbNbTitleInput").value = item.title || "";
          document.getElementById("dbNbBodyInput").value = item.content || "";
          document.getElementById("dbNbCancelEditBtn").hidden = false;
          document.getElementById("dbNbSaveBtn").textContent = "Cập nhật";
          document.getElementById("dbNbBodyInput")?.focus();
        });
        actionsRow.appendChild(editBtn);
      }
      const delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "db-note-act-btn is-danger";
      delBtn.textContent = "Xóa";
      delBtn.addEventListener("click", () => {
        const prev = notesData.slice();
        notesData = notesData.filter(n => n.id !== item.id);
        if (!safeStorageWrite(STORAGE_KEYS.NOTES, notesData)) {
          notesData = prev;
          setNbStatus("❌ Không thể xóa do lỗi lưu trữ!", "error");
          return;
        }
        // Nếu là highlight trên DOM, gỡ thẻ <mark> tương ứng
        if (item.hlId) {
          removeDomHighlightById(item.hlId);
        }
        if (item.type === "bookmark" && item.blockId) {
          const legacy = safeStorageRead(STORAGE_KEYS.LEGACY_BM, []).filter(id => id !== item.blockId);
          safeStorageWrite(STORAGE_KEYS.LEGACY_BM, legacy);
          const cardEl = document.getElementById(item.blockId);
          const star = cardEl?.querySelector(".bm-star-btn");
          if (star) {
            star.classList.remove("is-bookmarked");
            star.innerHTML = "☆ Lưu ôn thi";
          }
        }
        refreshCardNoteButtons();
        renderNotebookList();
        updateReadingHubUI();
      });
      actionsRow.appendChild(delBtn);
      card.append(metaRow, titleH4, bodyDiv, actionsRow);
      listEl.appendChild(card);
    });
  }
  // ---------------- 9. [Ý TƯỞNG 2] POPOVER BÔI ĐEN TÔ SÁNG & TRÍCH DẪN NHANH ----------------
  let currentSelectionInfo = null;
  function extractFragmentWithLatex(fragment) {
    if (!fragment) return "";
    const wrapper = document.createElement("div");
    wrapper.appendChild(fragment.cloneNode(true));
    wrapper.querySelectorAll(".katex-display, .katex").forEach(kEl => {
      const ann = kEl.querySelector('annotation[encoding="application/x-tex"]');
      if (ann) {
        const isDisp = kEl.classList.contains("katex-display");
        const tex = ann.textContent.trim();
        kEl.replaceWith(document.createTextNode(isDisp ? ` $$${tex}$$ ` : ` $${tex}$ `));
      }
    });
    wrapper.querySelectorAll("button, .db-card-note-btn, .bm-star-btn").forEach(el => el.remove());
    return wrapper.textContent.replace(/\s+/g, " ").trim();
  }
  function applySafeRangeHighlight(range, color, hlId) {
    try {
      const startContainer = range.startContainer;
      const endContainer = range.endContainer;
      // Không bọc trực tiếp nếu điểm đầu/cuối nằm sâu bên trong cây DOM của .katex
      const inKatex = (node) => {
        const el = node.nodeType === 1 ? node : node.parentElement;
        return Boolean(el && el.closest(".katex, .katex-display"));
      };
      if (!inKatex(startContainer) && !inKatex(endContainer) && startContainer === endContainer && startContainer.nodeType === 3) {
        const mark = document.createElement("mark");
        mark.className = "db-user-highlight";
        mark.dataset.hlColor = color;
        mark.dataset.hlId = hlId;
        mark.title = "Bấm để xem trong Sổ tay cá nhân";
        range.surroundContents(mark);
        mark.addEventListener("click", (e) => {
          e.stopPropagation();
          settings.drawerOpen = true;
          applyReaderSettings();
          saveReaderSettings();
          activeNbFilter = "highlight";
          document.querySelectorAll("[data-nb-filter]").forEach(b => {
            b.classList.toggle("is-active", b.getAttribute("data-nb-filter") === "highlight");
          });
          renderNotebookList();
        });
        return true;
      }
    } catch (_) {}
    return false;
  }
  function removeDomHighlightById(hlId) {
    document.querySelectorAll(`mark.db-user-highlight[data-hl-id="${hlId}"]`).forEach(mark => {
      const parent = mark.parentNode;
      if (!parent) return;
      while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
      parent.removeChild(mark);
      parent.normalize();
    });
    highlightsData = highlightsData.filter(h => h.hlId !== hlId);
    safeStorageWrite(STORAGE_KEYS.HIGHLIGHTS, highlightsData);
  }
  function restorePersistedHighlights() {
    if (!Array.isArray(highlightsData) || !highlightsData.length) return;
    highlightsData.forEach(h => {
      if (!h.blockId || !h.rawText || h.rawText.length < 6) return;
      const block = document.getElementById(h.blockId);
      if (!block) return;
      const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT, null);
      let node;
      while ((node = walker.nextNode())) {
        if (node.parentElement?.closest(".katex, .katex-display, mark.db-user-highlight, button")) continue;
        const idx = node.nodeValue.indexOf(h.rawText);
        if (idx !== -1) {
          try {
            const rng = document.createRange();
            rng.setStart(node, idx);
            rng.setEnd(node, idx + h.rawText.length);
            applySafeRangeHighlight(rng, h.color || "yellow", h.hlId);
            break;
          } catch (_) {}
        }
      }
    });
  }
  function setupSelectionPopover() {
    if (document.getElementById("dbSelectionPopover")) return;
    const pop = document.createElement("div");
    pop.className = "db-selection-popover";
    pop.id = "dbSelectionPopover";
    pop.hidden = true;
    pop.setAttribute("role", "toolbar");
    pop.setAttribute("aria-label", "Công cụ tô sáng và trích dẫn nhanh");
    pop.innerHTML = `
      <button type="button" class="db-sel-btn" data-hl-tone="yellow" title="Tô sáng màu vàng & Lưu vào Sổ tay">
        <span class="db-sel-dot yellow"></span> Tô vàng
      </button>
      <button type="button" class="db-sel-btn" data-hl-tone="green" title="Tô sáng màu xanh lá & Lưu vào Sổ tay">
        <span class="db-sel-dot green"></span> Xanh
      </button>
      <button type="button" class="db-sel-btn" data-hl-tone="blue" title="Tô sáng màu xanh dương & Lưu vào Sổ tay">
        <span class="db-sel-dot blue"></span> Lam
      </button>
      <span style="color:rgba(255,255,255,0.25);">|</span>
      <button type="button" class="db-sel-btn" id="dbSelQuoteBtn" title="Trích dẫn đoạn bôi đen (kèm LaTeX) vào khung soạn Sổ tay">
        📝 Trích vào Sổ tay
      </button>
      <button type="button" class="db-sel-btn" id="dbSelCopyLatexBtn" title="Chép đoạn văn bản kèm mã LaTeX">$ Chép LaTeX</button>
    `;
    document.body.appendChild(pop);
    function hidePopover() {
      pop.hidden = true;
      currentSelectionInfo = null;
    }
    document.addEventListener("mouseup", (e) => {
      if (pop.contains(e.target)) return;
      setTimeout(() => {
        const sel = window.getSelection();
        if (!sel || sel.isCollapsed || sel.rangeCount === 0) {
          hidePopover();
          return;
        }
        const range = sel.getRangeAt(0);
        const common = range.commonAncestorContainer;
        const hostEl = common.nodeType === 1 ? common : common.parentElement;
        const contentMain = document.querySelector("#studyWorkspace main.content");
        if (!hostEl || !contentMain || !contentMain.contains(hostEl)) {
          hidePopover();
          return;
        }
        // Không hiện popover nếu đang bôi đen trong ô input/textarea
        if (hostEl.closest("textarea, input, .db-notebook-drawer")) {
          hidePopover();
          return;
        }
        const rawPlain = sel.toString().trim();
        if (rawPlain.length < 5) {
          hidePopover();
          return;
        }
        const latexQuote = extractFragmentWithLatex(range.cloneContents()) || rawPlain;
        const blockEl = hostEl.closest(".math-card, details.ex-card, details.proof-block, .ex-study-card, .chapter-content");
        const meta = extractBlockMetadata(blockEl);
        const rect = range.getBoundingClientRect();
        currentSelectionInfo = {
          range: range.cloneRange(),
          rawPlain,
          latexQuote,
          blockId: blockEl?.id || "",
          meta
        };
        const top = Math.max(52, rect.top - 6);
        const left = Math.min(window.innerWidth - 180, Math.max(180, rect.left + rect.width / 2));
        pop.style.top = `${top}px`;
        pop.style.left = `${left}px`;
        pop.hidden = false;
      }, 20);
    });
    // Xử lý 3 nút Tô sáng (Vàng / Xanh / Lam)
    pop.querySelectorAll("[data-hl-tone]").forEach(btn => {
      btn.addEventListener("mousedown", (e) => e.preventDefault());
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!currentSelectionInfo) return;
        const color = btn.getAttribute("data-hl-tone") || "yellow";
        const { range, rawPlain, latexQuote, blockId, meta } = currentSelectionInfo;
        const hlId = "db-hl-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6);
        applySafeRangeHighlight(range, color, hlId);
        if (blockId && rawPlain.length < 300) {
          highlightsData.push({
            hlId,
            blockId,
            rawText: rawPlain,
            color,
            createdAt: Date.now()
          });
          safeStorageWrite(STORAGE_KEYS.HIGHLIGHTS, highlightsData);
        }
        const newHlNote = {
          id: hlId,
          hlId,
          hlColor: color,
          type: "highlight",
          blockType: "highlight",
          partId: meta.partId,
          chapterId: meta.chapterId,
          sectionId: meta.sectionId,
          blockId: blockId,
          title: `Trích dẫn: ${meta.title.slice(0, 65)}`,
          content: `“${latexQuote}”`,
          createdAt: Date.now(),
          updatedAt: Date.now()
        };
        notesData.unshift(newHlNote);
        safeStorageWrite(STORAGE_KEYS.NOTES, notesData);
        refreshCardNoteButtons();
        renderNotebookList();
        updateReadingHubUI();
        window.getSelection()?.removeAllRanges();
        hidePopover();
      });
    });
    // Nút "📝 Trích vào Sổ tay": mở ngăn kéo Sổ tay và điền sẵn đoạn trích có công thức LaTeX
    const quoteBtn = document.getElementById("dbSelQuoteBtn");
    quoteBtn?.addEventListener("mousedown", (e) => e.preventDefault());
    quoteBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!currentSelectionInfo) return;
      const { latexQuote, blockId, meta } = currentSelectionInfo;
      activeContext = {
        partId: meta.partId,
        chapterId: meta.chapterId,
        sectionId: meta.sectionId,
        blockId: blockId,
        blockType: meta.blockType === "note" ? "highlight" : meta.blockType,
        blockLabel: meta.title
      };
      const labelEl = document.getElementById("dbNbContextLabel");
      if (labelEl) labelEl.textContent = `📍 Gắn với: ${meta.title.slice(0, 42)}`;
      settings.drawerOpen = true;
      applyReaderSettings();
      saveReaderSettings();
      renderNotebookList();
      const titleInp = document.getElementById("dbNbTitleInput");
      const bodyInp = document.getElementById("dbNbBodyInput");
      if (titleInp) titleInp.value = `Ghi chú: ${meta.title.slice(0, 75)}`;
      if (bodyInp) {
        const prefix = bodyInp.value.trim() ? bodyInp.value.trim() + "\n\n" : "";
        bodyInp.value = `${prefix}❝ ${latexQuote} ❞\n→ Nhận xét: `;
        bodyInp.focus();
        bodyInp.selectionStart = bodyInp.selectionEnd = bodyInp.value.length;
      }
      setNbStatus("✨ Đã chèn đoạn trích (bảo toàn LaTeX) vào khung soạn!", "saved");
      window.getSelection()?.removeAllRanges();
      hidePopover();
    });
    // Nút "$ Chép LaTeX"
    const copyLatexBtn = document.getElementById("dbSelCopyLatexBtn");
    copyLatexBtn?.addEventListener("mousedown", (e) => e.preventDefault());
    copyLatexBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!currentSelectionInfo) return;
      const textToCopy = currentSelectionInfo.latexQuote;
      navigator.clipboard?.writeText(textToCopy).then(() => {
        const old = copyLatexBtn.textContent;
        copyLatexBtn.textContent = "✓ Đã chép!";
        setTimeout(() => {
          copyLatexBtn.textContent = old;
          hidePopover();
        }, 900);
      });
    });
    window.addEventListener("scroll", () => {
      if (!pop.hidden) hidePopover();
    }, { passive: true });
  }
  // ---------------- 10. [Ý TƯỞNG 3] BỘ CHUYỂN ĐỔI & XUẤT FILE .TEX CHUẨN LATEX ----------------
  function escapeLatexOutsideMath(str) {
    if (!str) return "";
    // Tách chuỗi theo các cặp công thức $$...$$ hoặc $...$ để không làm hỏng ký hiệu toán bên trong
    const tokens = String(str).split(/(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$)/g);
    return tokens.map((tok, i) => {
      if (i % 2 === 1) return tok; // Giữ nguyên khối toán $...$ hoặc $$...$$
      return tok
        .replace(/\\/g, "\\textbackslash{}")
        .replace(/([%&_{}#])/g, "\\$1")
        .replace(/~/g, "\\textasciitilde{}")
        .replace(/\^/g, "\\textasciicircum{}")
        .replace(/❝|“/g, "``")
        .replace(/❞|”/g, "''")
        .replace(/→/g, "$\\rightarrow$")
        .replace(/⇒/g, "$\\Rightarrow$")
        .replace(/⇔/g, "$\\Leftrightarrow$")
        .replace(/∀/g, "$\\forall$")
        .replace(/∃/g, "$\\exists$")
        .replace(/∈/g, "$\\in$")
        .replace(/∉/g, "$\\notin$")
        .replace(/⊆/g, "$\\subseteq$")
        .replace(/≤/g, "$\\le$")
        .replace(/⊴/g, "$\\trianglelefteq$")
        .replace(/≅/g, "$\\cong$")
        .replace(/≠/g, "$\\neq$")
        .replace(/ℤ/g, "$\\mathbb{Z}$")
        .replace(/ℚ/g, "$\\mathbb{Q}$")
        .replace(/ℝ/g, "$\\mathbb{R}$")
        .replace(/ℂ/g, "$\\mathbb{C}$")
        .replace(/ℕ/g, "$\\mathbb{N}$")
        .replace(/𝔽/g, "$\\mathbb{F}$")
        .replace(/∎/g, "$\\blacksquare$");
    }).join("");
  }
  function htmlStringToCleanLatex(htmlStr) {
    if (!htmlStr) return "";
    const temp = document.createElement("div");
    temp.innerHTML = htmlStr;
    // 1. Khôi phục công thức từ thẻ .katex nếu đã render
    temp.querySelectorAll(".katex-display, .katex").forEach(kEl => {
      const ann = kEl.querySelector('annotation[encoding="application/x-tex"]');
      if (ann) {
        const isDisp = kEl.classList.contains("katex-display");
        kEl.replaceWith(document.createTextNode(isDisp ? `\n$$${ann.textContent.trim()}$$\n` : `$${ann.textContent.trim()}$`));
      }
    });
    // 2. Xóa các nút điều khiển không thuộc nội dung toán
    temp.querySelectorAll("button, input, select, .inner-tabs-nav, .db-card-note-btn, .bm-star-btn").forEach(el => el.remove());
    // 3. Chuyển các thẻ định dạng HTML sang lệnh LaTeX
    temp.querySelectorAll("b, strong").forEach(el => {
      el.replaceWith(document.createTextNode(`BOLDSTART${el.textContent.trim()}BOLDEND`));
    });
    temp.querySelectorAll("i, em").forEach(el => {
      el.replaceWith(document.createTextNode(`ITALICSTART${el.textContent.trim()}ITALICEND`));
    });
    temp.querySelectorAll("li").forEach(li => {
      li.replaceWith(document.createTextNode(`\nITEMBULLET ${li.textContent.trim()}\n`));
    });
    temp.querySelectorAll("br").forEach(br => {
      br.replaceWith(document.createTextNode("\n"));
    });
    temp.querySelectorAll("p, div, details").forEach(p => {
      p.append(document.createTextNode("\n"));
    });
    let raw = temp.textContent.replace(/\n{3,}/g, "\n\n").trim();
    let escaped = escapeLatexOutsideMath(raw);
    escaped = escaped
      .replace(/BOLDSTART([\s\S]*?)BOLDEND/g, "\\textbf{$1}")
      .replace(/ITALICSTART([\s\S]*?)ITALICEND/g, "\\textit{$1}")
      .replace(/ITEMBULLET\s+/g, "\\noindent $\\bullet$ ")
      .replace(/\$\$([\s\S]*?)\$\$/g, "\n\\[\n$1\n\\]\n");
    return escaped;
  }
  // 10A. Xuất Sổ tay Cá nhân & Đề cương Ôn tập ra file .tex chuẩn TeXstudio / Overleaf
  function exportNotebookToLatex() {
    const dateStr = new Date().toLocaleDateString("vi-VN");
    let tex = `% ======================================================================
% SỔ TAY HỌC THUẬT & ĐỀ CƯƠNG ÔN TẬP CẤU TRÚC ĐẠI SỐ
% Biên dịch trực tiếp bằng pdflatex hoặc xelatex trên TeXstudio / Overleaf
% Ngày xuất: ${dateStr}
% ======================================================================
\\documentclass[12pt,a4paper]{article}
\\usepackage[utf8]{vietnam}
\\usepackage{amsmath,amssymb,amsfonts,amsthm}
\\usepackage[margin=2cm]{geometry}
\\usepackage{enumitem}
\\usepackage[most]{tcolorbox}
\\usepackage{hyperref}
\\hypersetup{
  colorlinks=true,
  linkcolor=blue!70!black,
  urlcolor=blue!70!black
}
\\setlength{\\parindent}{0pt}
\\setlength{\\parskip}{6pt}
% Định nghĩa các môi trường học thuật chuẩn
\\newtcolorbox{dinhnghia}[1][]{
  colback=blue!4!white, colframe=blue!55!black,
  fonttitle=\\bfseries, title={#1}, arc=2mm, boxrule=0.8pt
}
\\newtcolorbox{dinhly}[1][]{
  colback=green!4!white, colframe=green!45!black,
  fonttitle=\\bfseries, title={#1}, arc=2mm, boxrule=0.8pt
}
\\newtcolorbox{ghichu}[1][]{
  colback=yellow!8!white, colframe=orange!65!black,
  fonttitle=\\bfseries, title={#1}, arc=2mm, boxrule=0.8pt
}
\\title{\\textbf{SỔ TAY HỌC THUẬT \\& ĐỀ CƯƠNG CÁ NHÂN}\\\\[4pt]
\\large Học phần: Cấu trúc Đại số (Theo giáo trình TS. Huỳnh Việt Khánh)}
\\author{Trích xuất từ Hệ thống Digital Book}
\\date{Ngày xuất: ${dateStr}}
\\begin{document}
\\maketitle
\\tableofcontents
\\vspace{1em}
\\hrule
\\vspace{1.2em}
`;
    // Phần 1: Ghi chú cá nhân & Các đoạn Tô sáng (Highlights)
    const personalNotes = notesData.filter(n => n.type === "note" || n.type === "highlight");
    tex += `\\section{Ghi chú Cá nhân \\& Đoạn Trích Dẫn Quan Trọng (${personalNotes.length} mục)}\n\n`;
    if (personalNotes.length === 0) {
      tex += `\\textit{Chưa có ghi chú cá nhân nào được tạo.}\n\n`;
    } else {
      personalNotes.forEach((n, idx) => {
        const cleanTitle = escapeLatexOutsideMath(n.title || `Ghi chú ${idx + 1}`);
        const cleanBody = escapeLatexOutsideMath(n.content || "").replace(/\n/g, "\\\\\n");
        const kindLabel = n.blockType === "highlight" ? "Trích dẫn tô sáng" : "Ghi chú cá nhân";
        tex += `\\begin{ghichu}[${idx + 1}. ${kindLabel}: ${cleanTitle}]\n${cleanBody}\n\\end{ghichu}\n\n`;
      });
    }
    // Phần 2: Các Định nghĩa, Định lý & Bài tập đã đánh dấu
    const bookmarkedItems = notesData.filter(n => n.type === "bookmark");
    tex += `\\section{Các Định nghĩa, Định lý \\& Ví dụ Đã Đánh Dấu (${bookmarkedItems.length} mục)}\n\n`;
    if (bookmarkedItems.length === 0) {
      tex += `\\textit{Chưa có khối kiến thức nào được đánh dấu.}\n\n`;
    } else {
      bookmarkedItems.forEach((bm, idx) => {
        const domEl = bm.blockId ? document.getElementById(bm.blockId) : null;
        const envName = bm.blockType === "thm" ? "dinhly" : "dinhnghia";
        const cleanTitle = escapeLatexOutsideMath(bm.title || `Mục ${idx + 1}`);
        let bodyTex = "";
        if (domEl) {
          const bodyNode = domEl.querySelector(".card-body")
            || domEl.querySelector(".ex-problem-statement")
            || domEl.querySelector(".ex-content")
            || domEl;
          bodyTex = htmlStringToCleanLatex(bodyNode.innerHTML);
        } else {
          bodyTex = escapeLatexOutsideMath(bm.content || "");
        }
        tex += `\\begin{${envName}}[${idx + 1}. ${cleanTitle}]\n${bodyTex}\n\\end{${envName}}\n\n`;
      });
    }
    // Phần 3: Vở nháp LaTeX ở các Bài tập tự luyện (#part-5)
    const scratchItems = [];
    document.querySelectorAll("#part-5 .ex-study-card").forEach(card => {
      const note = safeStorageRead("ctds_scratch_" + card.id, null) || window.localStorage.getItem("ctds_scratch_" + card.id);
      if (note && String(note).trim()) {
        const title = card.querySelector(".ex-title-label")?.textContent.trim() || card.id;
        const probHTML = card.querySelector(".ex-problem-statement")?.innerHTML || "";
        scratchItems.push({ title, probHTML, note: String(note).trim() });
      }
    });
    if (scratchItems.length > 0) {
      tex += `\\section{Bài Giải Nháp Tự Luyện Trên Hệ Thống (${scratchItems.length} bài)}\n\n`;
      scratchItems.forEach((sc, idx) => {
        const cleanTitle = escapeLatexOutsideMath(sc.title);
        const probTex = htmlStringToCleanLatex(sc.probHTML);
        const userTex = escapeLatexOutsideMath(sc.note);
        tex += `\\subsection*{Bài ${idx + 1}: ${cleanTitle}}\n`;
        tex += `\\textbf{Đề bài:} ${probTex}\n\n`;
        tex += `\\begin{ghichu}[Lời giải tự trình bày]\n${userTex}\n\\end{ghichu}\n\n`;
      });
    }
    tex += `\\end{document}\n`;
    downloadTextFile(tex, `So-Tay-Cau-Truc-Dai-So-${new Date().toISOString().slice(0, 10)}.tex`, "application/x-tex;charset=utf-8");
    setNbStatus("✓ Đã tải tệp .tex chuẩn LaTeX!", "saved");
  }
  // 10B. Xuất Đề Thi Trắc Nghiệm Thông Minh (Smart Exam) ra file .tex chuẩn TeXstudio / Overleaf
  function exportSmartExamToLatex() {
    const exam = typeof window.getCurrentSmartExam === "function" ? window.getCurrentSmartExam() : null;
    if (!exam || !Array.isArray(exam.questions) || !exam.questions.length) {
      alert("Chưa có đề thi nào đang mở. Vui lòng bấm '🚀 Tạo Đề' trước khi xuất LaTeX!");
      return;
    }
    const code = exam.code || "CTDS-01";
    const totalQ = exam.questions.length;
    const mins = exam.totalSeconds ? Math.round(exam.totalSeconds / 60) : 20;
    const dateStr = new Date().toLocaleDateString("vi-VN");
    let tex = `% ======================================================================
% ĐỀ THI TRẮC NGHIỆM & ĐÁP ÁN CHI TIẾT - HỌC PHẦN: CẤU TRÚC ĐẠI SỐ
% Mã đề: ${code} | Số câu: ${totalQ} câu | Thời gian: ${mins} phút
% Biên dịch trực tiếp bằng pdflatex hoặc xelatex trên TeXstudio / Overleaf
% ======================================================================
\\documentclass[12pt,a4paper]{article}
\\usepackage[utf8]{vietnam}
\\usepackage{amsmath,amssymb,amsfonts,amsthm}
\\usepackage[margin=1.8cm]{geometry}
\\usepackage{enumitem}
\\usepackage{array,booktabs}
\\usepackage[most]{tcolorbox}
\\usepackage{hyperref}
\\setlength{\\parindent}{0pt}
\\setlength{\\parskip}{5pt}
\\begin{document}
% KHUNG TIÊU ĐỀ ĐỀ THI CHUẨN ĐẠI HỌC
\\begin{center}
  \\textbf{\\Large ĐỀ KIỂM TRA TRẮC NGHIỆM: CẤU TRÚC ĐẠI SỐ}\\\\[4pt]
  \\textbf{Mã đề: ${code}} \\quad $\\bullet$ \\quad \\textbf{Số lượng: ${totalQ} câu} \\quad $\\bullet$ \\quad \\textbf{Thời gian: ${mins} phút}\\\\[6pt]
  \\textit{(Biên soạn tự động từ Ngân hàng câu hỏi Giáo trình TS. Huỳnh Việt Khánh — Ngày: ${dateStr})}
\\end{center}
\\vspace{4pt}
\\noindent\\fbox{\\parbox{\\dimexpr\\linewidth-2\\fboxsep-2\\fboxrule\\relax}{
  \\textbf{Họ và tên sinh viên:} \\dotfill \\textbf{MSSV:} \\dotfill \\textbf{Điểm:} \\dots\\dots / 10
}}
\\vspace{10pt}
\\section*{PHẦN I. NỘI DUNG ĐỀ THI}
`;
    exam.questions.forEach((qItem, idx) => {
      const stemTex = htmlStringToCleanLatex(qItem.q);
      tex += `\\vspace{6pt}\n\\noindent\\textbf{Câu ${idx + 1}.} ${stemTex}\n`;
      tex += `\\begin{itemize}[leftmargin=1.8em, label={}, itemsep=3pt, topsep=4pt]\n`;
      (qItem.opts || []).forEach((optStr, optIdx) => {
        const letter = String.fromCharCode(65 + optIdx);
        const optTex = htmlStringToCleanLatex(optStr);
        tex += `  \\item \\textbf{${letter}.} ${optTex}\n`;
      });
      tex += `\\end{itemize}\n`;
    });
    // PHẦN II: BẢNG ĐÁP ÁN & LỜI GIẢI CHI TIẾT (SANG TRANG MỚI)
    tex += `\n\\newpage\n\\section*{PHẦN II. BẢNG ĐÁP ÁN \\& HƯỚNG DẪN GIẢI CHI TIẾT (MÃ ĐỀ ${code})}\n\n`;
    // Bảng đáp án nhanh
    tex += `\\subsection*{1. Bảng đáp án nhanh}\n`;
    const cols = 5;
    tex += `\\begin{center}\n\\renewcommand{\\arraystretch}{1.35}\n\\begin{tabular}{|*{${cols}}{c|}}\n\\hline\n`;
    for (let i = 0; i < totalQ; i++) {
      const correctLetter = String.fromCharCode(65 + (exam.questions[i].ans || 0));
      const userChosen = exam.answers && exam.answers[i] !== null && exam.answers[i] !== undefined
        ? String.fromCharCode(65 + exam.answers[i])
        : null;
      const cellStr = userChosen
        ? `\\textbf{Câu ${i + 1}:} \\textbf{${correctLetter}} (Chọn: ${userChosen})`
        : `\\textbf{Câu ${i + 1}:} \\textbf{${correctLetter}}`;
      tex += cellStr;
      if ((i + 1) % cols === 0 || i === totalQ - 1) {
        const rem = cols - ((i % cols) + 1);
        if (i === totalQ - 1 && rem > 0 && (i + 1) % cols !== 0) {
          tex += " & ".repeat(rem);
        }
        tex += ` \\\\ \\hline\n`;
      } else {
        tex += ` & `;
      }
    }
    tex += `\\end{tabular}\n\\end{center}\n\\vspace{8pt}\n\n`;
    // Lời giải chi tiết từng câu
    tex += `\\subsection*{2. Phân tích \\& Lời giải chi tiết từng câu}\n\n`;
    exam.questions.forEach((qItem, idx) => {
      const correctLetter = String.fromCharCode(65 + (qItem.ans || 0));
      const rawExp = qItem.explanations?.[correctLetter] || qItem.exp || "Áp dụng định nghĩa và định lý tương ứng trong giáo trình.";
      const expTex = htmlStringToCleanLatex(rawExp);
      tex += `\\noindent\\textbf{Câu ${idx + 1} (Đáp án đúng: ${correctLetter}).} ${expTex}\n\\vspace{6pt}\n\n`;
    });
    tex += `\\end{document}\n`;
    downloadTextFile(tex, `De-Thi-Cau-Truc-Dai-So-${code}.tex`, "application/x-tex;charset=utf-8");
  }
  function injectLatexButtonsIntoLabAndExam() {
    // 1. Thêm nút Xuất .tex vào Sổ tay Ôn thi trong Phòng LAB (#labPaneNotebook)
    const nbExportMdBtn = document.getElementById("nbExportMdBtn");
    if (nbExportMdBtn && !document.getElementById("nbExportTexLabBtn")) {
      const btnTex = document.createElement("button");
      btnTex.type = "button";
      btnTex.className = "lab-btn primary";
      btnTex.id = "nbExportTexLabBtn";
      btnTex.innerHTML = "📄 Xuất Đề Cương (.tex LaTeX)";
      btnTex.addEventListener("click", exportNotebookToLatex);
      nbExportMdBtn.before(btnTex);
    }
    // 2. Thêm nút Xuất Đề Thi (.tex) vào Phòng thi thông minh (#smartBuilderCard)
    const seGenBtn = document.getElementById("seGenerateBtn");
    if (seGenBtn && !document.getElementById("seExportTexBtn")) {
      const btnExamTex = document.createElement("button");
      btnExamTex.type = "button";
      btnExamTex.className = "lab-btn";
      btnExamTex.id = "seExportTexBtn";
      btnExamTex.style.borderColor = "var(--thm-color)";
      btnExamTex.style.color = "var(--thm-color)";
      btnExamTex.style.fontWeight = "800";
      btnExamTex.innerHTML = "📄 Xuất Đề & Đáp Án (.tex LaTeX)";
      btnExamTex.title = "Tải file mã nguồn .tex của đề thi hiện tại để biên dịch trên TeXstudio / Overleaf";
      btnExamTex.addEventListener("click", exportSmartExamToLatex);
      const footerWrap = seGenBtn.parentElement;
      if (footerWrap) {
        const btnGroup = document.createElement("div");
        btnGroup.style.display = "flex";
        btnGroup.style.gap = "10px";
        btnGroup.style.flexWrap = "wrap";
        btnGroup.style.alignItems = "center";
        seGenBtn.replaceWith(btnGroup);
        btnGroup.append(btnExamTex, seGenBtn);
      }
    }
  }
  // ---------------- 11. XUẤT VÀ NHẬP BẢN SAO LƯU JSON AN TOÀN ----------------
  function exportNotebookJSON() {
    const payload = {
      schemaVersion: 2,
      exportedAt: new Date().toISOString(),
      course: "Digital Book Academic Platform",
      settings,
      lastProgress,
      readingHistory,
      highlights: highlightsData,
      notes: notesData
    };
    downloadTextFile(
      JSON.stringify(payload, null, 2),
      `So-Tay-Hoc-Thuat-Backup-${new Date().toISOString().slice(0, 10)}.json`,
      "application/json;charset=utf-8"
    );
    setNbStatus("✓ Đã xuất file sao lưu JSON", "saved");
  }
  function handleImportNotebookJSON(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (ev) {
      try {
        const parsed = JSON.parse(String(ev.target?.result || "{}"));
        if (!parsed || typeof parsed !== "object" || !Array.isArray(parsed.notes)) {
          setNbStatus("❌ File JSON không đúng cấu trúc Sổ tay!", "error");
          return;
        }
        const sanitizedNotes = parsed.notes
          .filter(n => n && typeof n === "object" && typeof n.content === "string")
          .map(n => ({
            id: String(n.id || "db-imp-" + Date.now() + Math.random().toString(36).slice(2, 5)),
            hlId: n.hlId ? String(n.hlId) : undefined,
            hlColor: n.hlColor ? String(n.hlColor) : undefined,
            type: ["bookmark", "highlight", "note"].includes(n.type) ? n.type : "note",
            blockType: ["def", "thm", "ex", "highlight", "note"].includes(n.blockType) ? n.blockType : "note",
            partId: String(n.partId || "part-0"),
            chapterId: String(n.chapterId || "tab-c0"),
            sectionId: String(n.sectionId || ""),
            blockId: String(n.blockId || ""),
            title: String(n.title || "Ghi chú đã nhập").slice(0, 160),
            content: String(n.content || "").slice(0, 8000),
            createdAt: Number(n.createdAt) || Date.now(),
            updatedAt: Number(n.updatedAt) || Date.now()
          }));
        const mergedMap = new Map();
        [...sanitizedNotes, ...notesData].forEach(item => mergedMap.set(item.id, item));
        const mergedList = Array.from(mergedMap.values());
        if (!safeStorageWrite(STORAGE_KEYS.NOTES, mergedList)) {
          setNbStatus("❌ Lưu thất bại: Dữ liệu nhập vượt quá bộ nhớ trình duyệt!", "error");
          return;
        }
        notesData = mergedList;
        refreshCardNoteButtons();
        renderNotebookList();
        updateReadingHubUI();
        setNbStatus(`✓ Đã khôi phục ${sanitizedNotes.length} mục thành công!`, "saved");
      } catch (_) {
        setNbStatus("❌ Lỗi đọc file: Dữ liệu JSON bị hỏng!", "error");
      } finally {
        e.target.value = "";
      }
    };
    reader.readAsText(file, "utf-8");
  }
  // ---------------- 12. ĐIỀU HƯỚNG SÂU (DEEP-LINK) & TỰ ĐỘNG LƯU VỊ TRÍ ĐỌC ----------------
  function navigateToLocation(partId, chapterId, targetElementId, updateHash = true) {
    if (typeof window.switchPart === "function" && partId) {
      window.switchPart(partId, false);
    }
    if (typeof window.switchChapter === "function" && partId && chapterId) {
      window.switchChapter(partId, chapterId, false);
    }
    setTimeout(() => {
      if (targetElementId) {
        const targetEl = document.getElementById(targetElementId);
        if (targetEl) {
          const parentDetails = targetEl.closest("details");
          if (parentDetails) parentDetails.open = true;
          if (targetEl.tagName?.toLowerCase() === "details") targetEl.open = true;
          targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
          targetEl.classList.remove("db-target-flash");
          void targetEl.offsetWidth;
          targetEl.classList.add("db-target-flash");
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      if (updateHash && partId && chapterId) {
        const hashStr = targetElementId
          ? `#${partId}/${chapterId}/${targetElementId}`
          : `#${partId}/${chapterId}`;
        if (history.replaceState) {
          history.replaceState(null, "", hashStr);
        }
      }
      recordReadingPosition(partId, chapterId, targetElementId);
    }, 120);
  }
  function recordReadingPosition(partId, chapterId, sectionId) {
    const activePart = document.getElementById(partId) || document.querySelector(".part-panel.active");
    const activeCh = document.getElementById(chapterId) || activePart?.querySelector(".chapter-content.active");
    if (!activePart || !activeCh) return;
    const fullTitle = activeCh.querySelector("h2.section-title")?.textContent.replace(/\s+/g, " ").trim() || "Chương học";
    const shortMatch = fullTitle.match(/^(Chương\s*\d+)/i);
    const chapterShort = shortMatch ? shortMatch[1] : fullTitle.slice(0, 18);
    let sectionTitle = "";
    if (sectionId) {
      const secEl = document.getElementById(sectionId);
      if (secEl) {
        sectionTitle = (secEl.querySelector(".card-header .label")?.textContent || secEl.textContent || "")
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 55);
      }
    }
    lastProgress = {
      partId: activePart.id,
      chapterId: activeCh.id,
      sectionId: sectionId || "",
      title: fullTitle,
      sectionTitle,
      timestamp: Date.now()
    };
    safeStorageWrite(STORAGE_KEYS.PROGRESS, lastProgress);
    const histKey = `${activePart.id}:${activeCh.id}:${sectionId || ""}`;
    readingHistory = readingHistory.filter(h => h.key !== histKey);
    readingHistory.unshift({
      key: histKey,
      partId: activePart.id,
      chapterId: activeCh.id,
      sectionId: sectionId || "",
      title: fullTitle,
      chapterShort,
      sectionTitle,
      timestamp: Date.now()
    });
    if (readingHistory.length > 12) readingHistory.length = 12;
    safeStorageWrite(STORAGE_KEYS.HISTORY, readingHistory);
    syncCurrentChapterContext();
    updateReadingHubUI();
  }
  const debouncedScrollTracker = debounce(() => {
    if (document.body.getAttribute("data-app-mode") === "slides") return;
    const activePart = document.querySelector(".part-panel.active");
    const activeCh = activePart?.querySelector(".chapter-content.active");
    if (!activePart || !activeCh) return;
    const headings = Array.from(activeCh.querySelectorAll("h3.subsection-title"));
    let currentSecId = "";
    const threshold = 220;
    for (const h of headings) {
      const rect = h.getBoundingClientRect();
      if (rect.top <= threshold) {
        currentSecId = h.id;
      } else {
        break;
      }
    }
    recordReadingPosition(activePart.id, activeCh.id, currentSecId);
  }, 450);
  function restoreFromHashOrStorage() {
    const rawHash = (window.location.hash || "").replace(/^#/, "").trim();
    if (rawHash.includes("/")) {
      const [pId, cId, sId] = rawHash.split("/");
      if (pId && cId && document.getElementById(pId) && document.getElementById(cId)) {
        navigateToLocation(pId, cId, sId || "", false);
        return;
      }
    } else if (rawHash) {
      const targetEl = document.getElementById(rawHash);
      if (targetEl) {
        const p = targetEl.closest(".part-panel");
        const c = targetEl.closest(".chapter-content");
        if (p && c) {
          navigateToLocation(p.id, c.id, rawHash, false);
          return;
        }
      }
    }
    updateReadingHubUI();
  }
  // ---------------- 13. KHỞI CHẠY TOÀN BỘ HỆ THỐNG DIGITAL BOOK ----------------
  function bootstrapDigitalBook() {
    ensureStableIds();
    injectReaderToolbar();
    injectReadingHub();
    injectNotebookDrawer();
    syncLegacyBookmarksIntoNotebook();
    decorateKnowledgeBlocks();
    setupSelectionPopover();
    restorePersistedHighlights();
    injectLatexButtonsIntoLabAndExam();
    applyReaderSettings();
    renderNotebookList();
    restoreFromHashOrStorage();
    window.addEventListener("scroll", debouncedScrollTracker, { passive: true });
    document.querySelector(".main-tabs-bar")?.addEventListener("click", () => {
      setTimeout(() => {
        const p = document.querySelector(".part-panel.active");
        const c = p?.querySelector(".chapter-content.active");
        if (p && c) recordReadingPosition(p.id, c.id, "");
        injectLatexButtonsIntoLabAndExam();
      }, 80);
    });
    document.getElementById("subTabsContainer")?.addEventListener("click", () => {
      setTimeout(() => {
        const p = document.querySelector(".part-panel.active");
        const c = p?.querySelector(".chapter-content.active");
        if (p && c) recordReadingPosition(p.id, c.id, "");
      }, 80);
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrapDigitalBook);
  } else {
    bootstrapDigitalBook();
  }
})();


/* ==========================================================================
   14. ENGINE ĐIỀU HƯỚNG BÀI HỌC CHUẨN KẾ HOẠCH & LỘ TRÌNH 15 TUẦN (LESSON PLAN)
   ========================================================================== */
(function initLessonPlanEngine() {
  "use strict";
  const LP_DONE_KEY = "ctds_lesson_units_done_v1";

  const COURSE_MODULES = [
    { part: "part-0", ch: "tab-c0", week: "Tuần 1–2", title: "Ch.0 · Công cụ", units: ["lp-u0-1", "lp-u0-2", "lp-u0-3"] },
    { part: "part-1", ch: "tab-c1", week: "Tuần 3–4", title: "Ch.1 · Nhóm", units: ["lp-u1-1", "lp-u1-2", "lp-u1-3"] },
    { part: "part-1", ch: "tab-c2", week: "Tuần 5–6", title: "Ch.2 · Nhóm con", units: ["lp-u2-1", "lp-u2-2", "lp-u2-3"] },
    { part: "part-1", ch: "tab-c3", week: "Tuần 7–8", title: "Ch.3 · Lagrange", units: ["lp-u3-1", "lp-u3-2", "lp-u3-3"] },
    { part: "part-1", ch: "tab-c4", week: "Tuần 8–9", title: "Ch.4 · Nhóm thương", units: ["lp-u4-1", "lp-u4-2", "lp-u4-3"] },
    { part: "part-1", ch: "tab-c5", week: "Tuần 10–11", title: "Ch.5 · Đồng cấu", units: ["lp-u5-1", "lp-u5-2", "lp-u5-3"] },
    { part: "part-2", ch: "tab-c6", week: "Tuần 12", title: "Ch.6 · Vành", units: ["lp-u6-1", "lp-u6-2", "lp-u6-3"] },
    { part: "part-2", ch: "tab-c7", week: "Tuần 13", title: "Ch.7 · Iđêan", units: ["lp-u7-1", "lp-u7-2", "lp-u7-3"] },
    { part: "part-2", ch: "tab-c8", week: "Tuần 14", title: "Ch.8 · ĐC Vành", units: ["lp-u8-1", "lp-u8-2", "lp-u8-3"] },
    { part: "part-3", ch: "tab-c9", week: "Tuần 15A", title: "Ch.9 · Trường", units: ["lp-u9-1", "lp-u9-2", "lp-u9-3"] },
    { part: "part-4", ch: "tab-compare", week: "Tuần 15B", title: "Đối chiếu & Ôn thi", units: ["lp-ucomp-1", "lp-ucomp-2"] }
  ];

  function getDoneUnits() {
    try {
      const raw = window.localStorage.getItem(LP_DONE_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      return new Set(Array.isArray(arr) ? arr : []);
    } catch (_) {
      return new Set();
    }
  }

  function saveDoneUnits(setObj) {
    try {
      window.localStorage.setItem(LP_DONE_KEY, JSON.stringify(Array.from(setObj)));
    } catch (_) {}
  }

  function injectCourseRoadmapIntoHub() {
    const hubShell = document.getElementById("dbHubShell");
    if (!hubShell || document.getElementById("dbCourseRoadmapBar")) return;
    const roadmapDiv = document.createElement("div");
    roadmapDiv.className = "lp-hub-roadmap";
    roadmapDiv.id = "dbCourseRoadmapBar";
    roadmapDiv.innerHTML = `
      <div class="lp-roadmap-head">
        <span class="lp-roadmap-title">🗓️ Lộ trình Kế hoạch Học tập 15 Tuần (45 Tiết · 32 Bài học &amp; Chuyên đề)</span>
        <div class="lp-roadmap-bar-wrap">
          <div class="lp-roadmap-bar"><span id="lpGlobalProgressFill"></span></div>
          <span class="lp-roadmap-pct" id="lpGlobalProgressText">0 / 32 bài (0%)</span>
        </div>
      </div>
      <div class="lp-week-grid" id="lpWeekGrid"></div>
    `;
    hubShell.appendChild(roadmapDiv);
  }

  function syncAllUnitProgressUI() {
    injectCourseRoadmapIntoHub();
    const doneSet = getDoneUnits();
    document.querySelectorAll(".lp-unit-done-btn[data-unit-id]").forEach(btn => {
      const uid = btn.getAttribute("data-unit-id");
      const isDone = doneSet.has(uid);
      btn.classList.toggle("is-done", isDone);
      btn.setAttribute("aria-pressed", String(isDone));
      btn.innerHTML = isDone ? "✅ Đã hoàn thành bài học" : "⚪ Đánh dấu đã học xong";
    });

    document.querySelectorAll(".chapter-content[id^='tab-']").forEach(chEl => {
      const unitBtns = chEl.querySelectorAll(".lp-unit-done-btn[data-unit-id]");
      if (!unitBtns.length) return;
      let doneCount = 0;
      unitBtns.forEach(b => {
        if (doneSet.has(b.getAttribute("data-unit-id"))) doneCount++;
      });
      const pill = chEl.querySelector(".lp-progress-pill");
      if (pill) {
        pill.textContent = `Tiến độ bài học: ${doneCount}/${unitBtns.length} bài`;
      }
    });

    // Cập nhật thanh lộ trình 15 tuần trên Reading Hub
    const weekGrid = document.getElementById("lpWeekGrid");
    let totalUnits = 0;
    let totalDone = 0;
    if (weekGrid) {
      weekGrid.replaceChildren();
      COURSE_MODULES.forEach(m => {
        const doneInMod = m.units.filter(u => doneSet.has(u)).length;
        totalUnits += m.units.length;
        totalDone += doneInMod;
        const isComp = doneInMod === m.units.length;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "lp-week-card" + (isComp ? " is-complete" : "");
        btn.innerHTML = `
          <div class="w-top">
            <span>${m.week}</span>
            <span>${isComp ? "✅" : `${doneInMod}/${m.units.length}`}</span>
          </div>
          <div class="w-label">${m.title}</div>
        `;
        btn.addEventListener("click", () => {
          if (typeof window.switchPart === "function") window.switchPart(m.part, false);
          if (typeof window.switchChapter === "function") window.switchChapter(m.part, m.ch, true);
        });
        weekGrid.appendChild(btn);
      });
    } else {
      COURSE_MODULES.forEach(m => {
        totalUnits += m.units.length;
        totalDone += m.units.filter(u => doneSet.has(u)).length;
      });
    }
    const pct = totalUnits ? Math.round((totalDone / totalUnits) * 100) : 0;
    const fillEl = document.getElementById("lpGlobalProgressFill");
    const txtEl = document.getElementById("lpGlobalProgressText");
    if (fillEl) fillEl.style.width = `${pct}%`;
    if (txtEl) txtEl.textContent = `${totalDone} / ${totalUnits} bài (${pct}%)`;
  }

  window.toggleLessonUnitDone = function(btn, unitId) {
    if (!unitId) return;
    const doneSet = getDoneUnits();
    if (doneSet.has(unitId)) doneSet.delete(unitId);
    else doneSet.add(unitId);
    saveDoneUnits(doneSet);
    syncAllUnitProgressUI();
  };

  window.scrollToLessonUnit = function(unitId) {
    const el = document.getElementById(unitId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.remove("db-target-flash");
    void el.offsetWidth;
    el.classList.add("db-target-flash");
  };

  window.goToPracticeExercise = function(chNum, exId) {
    if (typeof window.switchPart === "function") {
      window.switchPart("part-5", false);
    }
    const tabChaptersBtn = document.getElementById("practiceTabChapters");
    if (tabChaptersBtn) tabChaptersBtn.click();
    if (typeof window.switchChapter === "function") {
      window.switchChapter("part-5", "tab-ex" + chNum, false);
    }
    setTimeout(() => {
      const target = exId ? document.getElementById(exId) : document.getElementById("tab-ex" + chNum);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        target.classList.remove("db-target-flash");
        void target.offsetWidth;
        target.classList.add("db-target-flash");
      }
    }, 140);
  };

  window.openProofTemplateById = function(tplIndex) {
    if (typeof window.switchPart === "function") {
      window.switchPart("part-4", false);
    }
    setTimeout(() => {
      const sel = document.getElementById("compareProofSelect");
      const box = document.getElementById("compareProofBox");
      if (sel) {
        sel.value = String(tplIndex);
        sel.dispatchEvent(new Event("change"));
      }
      if (box) {
        box.scrollIntoView({ behavior: "smooth", block: "center" });
        box.classList.remove("db-target-flash");
        void box.offsetWidth;
        box.classList.add("db-target-flash");
      }
    }, 140);
  };

  window.startChapterQuickExam = function(chNum) {
    if (typeof window.switchPart === "function") {
      window.switchPart("part-5", false);
    }
    setTimeout(() => {
      const reviewBtn = document.getElementById("practiceTabReview");
      if (reviewBtn) reviewBtn.click();
      setTimeout(() => {
        const chBoxes = document.querySelectorAll('#seChapterGrid input[name="seChapter"]');
        chBoxes.forEach(cb => {
          cb.checked = (Number(cb.value) === Number(chNum));
          cb.closest("label")?.classList.toggle("checked", cb.checked);
        });
        const qCountSel = document.getElementById("seQuestionCount");
        if (qCountSel) qCountSel.value = "10";
        const genBtn = document.getElementById("seGenerateBtn");
        if (genBtn) genBtn.click();
        const qCard = document.getElementById("seQuestionCard");
        if (qCard) qCard.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }, 100);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(syncAllUnitProgressUI, 60));
  } else {
    setTimeout(syncAllUnitProgressUI, 60);
  }
})();
