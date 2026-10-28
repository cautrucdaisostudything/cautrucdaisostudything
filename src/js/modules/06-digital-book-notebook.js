/* ==========================================================================
   FILE: src/js/modules/06-digital-book-notebook.js
   TÍNH NĂNG:
   1. Cài đặt đọc Digital Book (Cỡ chữ, Giãn dòng, Sáng/Tối/Đọc tập trung)
   2. Tự động lưu vị trí đọc, Lịch sử đọc gần đây & Deep-link URL Hash
   3. Trang chủ Đọc sách (Reading Hub: Tiếp tục đọc, Thư viện chương, Đánh dấu)
   4. Sổ tay cá nhân bên phải (CRUD ghi chú, Đánh dấu ĐN/ĐL/VD, Tìm kiếm, JSON Backup)
   ========================================================================== */
(function initDigitalBookUpgrade() {
  "use strict";

  const STORAGE_KEYS = {
    SETTINGS: "ctds_db_reader_settings_v1",
    PROGRESS: "ctds_db_reading_progress_v1",
    HISTORY: "ctds_db_reading_history_v1",
    NOTES: "ctds_db_personal_notes_v1",
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

  // ---------------- 1. TRẠNG THÁI CÀI ĐẶT ĐỌC & KHỞI TẠO ----------------
  const defaultSettings = {
    fontSize: 18,
    lineHeight: 1.85,
    colorMode: "light", // "light" | "dark"
    focusMode: false,
    drawerOpen: false,
    hubCollapsed: false
  };

  let settings = Object.assign({}, defaultSettings, safeStorageRead(STORAGE_KEYS.SETTINGS, {}));
  // Ràng buộc miền giá trị hợp lệ
  settings.fontSize = Math.min(22, Math.max(15, Number(settings.fontSize) || 18));
  settings.lineHeight = Math.min(2.15, Math.max(1.6, Number(settings.lineHeight) || 1.85));
  if (settings.colorMode !== "dark") settings.colorMode = "light";

  let notesData = safeStorageRead(STORAGE_KEYS.NOTES, []);
  if (!Array.isArray(notesData)) notesData = [];

  let readingHistory = safeStorageRead(STORAGE_KEYS.HISTORY, []);
  if (!Array.isArray(readingHistory)) readingHistory = [];

  let lastProgress = safeStorageRead(STORAGE_KEYS.PROGRESS, {
    partId: "part-0",
    chapterId: "tab-c0",
    sectionId: "",
    title: "Chương 0: Công cụ Logic, Tập hợp & Ánh xạ",
    timestamp: Date.now()
  });

  // Trạng thái đang soạn ghi chú trong Sổ tay
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

    // Popover chỉnh cỡ chữ & giãn dòng
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
      <div class="db-typo-row" style="margin-top:8px; padding-top:8px; border-top:1px solid var(--db-border);">
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
              <span class="db-hub-subtitle">Tự động lưu vị trí đọc · Đánh dấu Định nghĩa, Định lý, Ví dụ · Sao lưu JSON</span>
            </div>
          </div>
          <div style="display:flex; gap:8px; align-items:center;">
            <button type="button" class="db-step-btn" id="dbHubOpenNotesBtn">📓 Mở Sổ tay</button>
            <button type="button" class="db-step-btn" id="dbHubCollapseBtn" aria-expanded="${!settings.hubCollapsed}">
              ${settings.hubCollapsed ? "▼ Mở rộng Bảng đọc sách" : "▲ Thu gọn"}
            </button>
          </div>
        </div>

        <div class="db-hub-grid">
          <!-- Cột 1: Tiếp tục đọc từ vị trí gần nhất -->
          <div class="db-hub-card">
            <div>
              <h4>📖 Tiếp tục đọc</h4>
              <div class="db-continue-title" id="dbContinueTitle">Chương 0</div>
              <div class="db-continue-meta" id="dbContinueMeta">Vị trí gần nhất của bạn</div>
            </div>
            <button type="button" class="db-primary-btn" id="dbContinueBtn">Đọc tiếp từ vị trí này →</button>
          </div>

          <!-- Cột 2: Thư viện chương -->
          <div class="db-hub-card">
            <h4>🗂️ Thư viện chương</h4>
            <div class="db-chapter-chips" id="dbChapterChips"></div>
          </div>

          <!-- Cột 3: Sổ tay & Kiến thức đã đánh dấu -->
          <div class="db-hub-card">
            <h4>🔖 Đã đánh dấu &amp; Ghi chú (<span id="dbHubNotesCount">0</span>)</h4>
            <ul class="db-mini-list" id="dbHubBookmarksList"></ul>
          </div>

          <!-- Cột 4: Lịch sử đọc gần đây -->
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

    // Render Thư viện chương
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

    // Render Danh sách đánh dấu & ghi chú gần nhất trên Hub
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
        empty.style.color = "var(--db-text-muted)";
        empty.textContent = "Chưa có mục đánh dấu. Bấm '📝 Ghi chú' hoặc '☆ Lưu ôn thi' trên bất kỳ định nghĩa/định lý nào.";
        bmList.appendChild(empty);
      } else {
        notesData.slice(0, 4).forEach(n => {
          const li = document.createElement("li");
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "db-mini-item";
          btn.style.width = "100%";
          const span = document.createElement("span");
          span.textContent = `${n.type === "bookmark" ? "🔖" : "📝"} ${n.title}`;
          btn.appendChild(span);
          btn.addEventListener("click", () => navigateToLocation(n.partId, n.chapterId, n.blockId || n.sectionId));
          li.appendChild(btn);
          bmList.appendChild(li);
        });
      }
    }

    // Render Lịch sử đọc gần đây
    const histList = document.getElementById("dbHubHistoryList");
    if (histList) {
      histList.replaceChildren();
      if (readingHistory.length === 0) {
        const empty = document.createElement("li");
        empty.style.fontSize = "12px";
        empty.style.color = "var(--db-text-muted)";
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
        <input type="search" class="db-nb-search" id="dbNbSearch" placeholder="Tìm trong ghi chú &amp; mục đánh dấu..." aria-label="Tìm kiếm ghi chú">
        <div class="db-nb-tabs" role="tablist" aria-label="Lọc sổ tay">
          <button type="button" class="db-nb-tab is-active" data-nb-filter="all">Tất cả</button>
          <button type="button" class="db-nb-tab" data-nb-filter="note">📝 Ghi chú</button>
          <button type="button" class="db-nb-tab" data-nb-filter="def">Định nghĩa</button>
          <button type="button" class="db-nb-tab" data-nb-filter="thm">Định lý</button>
          <button type="button" class="db-nb-tab" data-nb-filter="ex">Ví dụ/BT</button>
        </div>
      </div>

      <div class="db-nb-composer">
        <div class="db-nb-context-badge">
          <span id="dbNbContextLabel">📍 Đang gắn với: Chương 0</span>
          <button type="button" class="db-note-act-btn" id="dbNbResetContextBtn" title="Chuyển về ghi chú chung của chương hiện tại">Mặc định</button>
        </div>
        <input type="text" class="db-nb-input-title" id="dbNbTitleInput" placeholder="Tiêu đề ghi chú (tùy chọn)..." maxlength="140">
        <textarea class="db-nb-textarea" id="dbNbBodyInput" placeholder="Nhập ghi chú cá nhân hoặc nhận xét toán học (hỗ trợ công thức $...$)..."></textarea>
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
        <button type="button" class="db-note-act-btn" id="dbNbExportJsonBtn" title="Xuất toàn bộ Sổ tay ra file JSON">📤 Xuất JSON</button>
        <button type="button" class="db-note-act-btn" id="dbNbImportJsonBtn" title="Nhập bản sao lưu JSON">📥 Nhập JSON</button>
        <input type="file" id="dbNbImportFileInput" accept=".json,application/json" hidden>
      </div>
    `;

    container.appendChild(aside);

    document.getElementById("dbNbCloseBtn")?.addEventListener("click", () => {
      settings.drawerOpen = false;
      applyReaderSettings();
      saveReaderSettings();
    });

    // Tìm kiếm ghi chú có Debounce 200ms
    const searchInput = document.getElementById("dbNbSearch");
    searchInput?.addEventListener("input", debounce(() => {
      renderNotebookList();
    }, 200));

    // Lọc theo tab loại kiến thức
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

    // Xuất & Nhập JSON
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
      // Khôi phục lại dữ liệu nếu lưu thất bại (không báo lưu thành công giả)
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
    const snippet = clone.textContent.replace(/\s+/g, " ").trim().slice(0, 220);

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

      // Lắng nghe nút "☆ Lưu ôn thi" sẵn có để đồng bộ ngay vào Sổ tay
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
      empty.style.color = "var(--db-text-muted)";
      empty.style.fontSize = "13px";
      empty.textContent = query
        ? "Không tìm thấy ghi chú nào khớp từ khóa."
        : "Chưa có mục nào trong phân loại này. Hãy viết ghi chú ở khung trên hoặc bấm '📝 Ghi chú' tại bất kỳ Định nghĩa, Định lý, Ví dụ nào.";
      listEl.appendChild(empty);
      return;
    }

    const typeLabels = {
      def: "Định nghĩa",
      thm: "Định lý",
      ex: "Ví dụ / BT",
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
      badge.textContent = `${item.type === "bookmark" ? "🔖 " : "📝 "}${typeLabels[item.blockType] || "Ghi chú"}`;

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
      // Gán bằng textContent để chống XSS tuyệt đối, sau đó render KaTeX
      bodyDiv.textContent = item.content || "";
      renderMathSafely(bodyDiv);

      const actionsRow = document.createElement("div");
      actionsRow.className = "db-note-actions";

      const gotoBtn = document.createElement("button");
      gotoBtn.type = "button";
      gotoBtn.className = "db-note-act-btn";
      gotoBtn.textContent = "↗ Đi tới kiến thức gốc";
      gotoBtn.addEventListener("click", () => {
        navigateToLocation(item.partId, item.chapterId, item.blockId || item.sectionId);
      });
      actionsRow.appendChild(gotoBtn);

      if (item.type === "note") {
        const editBtn = document.createElement("button");
        editBtn.type = "button";
        editBtn.className = "db-note-act-btn";
        editBtn.textContent = "Sửa";
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
        // Nếu là bookmark đồng bộ từ nút ngôi sao, cập nhật cả nút ngôi sao
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

  // ---------------- 9. XUẤT VÀ NHẬP BẢN SAO LƯU JSON AN TOÀN ----------------
  function exportNotebookJSON() {
    const payload = {
      schemaVersion: 1,
      exportedAt: new Date().toISOString(),
      course: "Digital Book Academic Platform",
      settings,
      lastProgress,
      readingHistory,
      notes: notesData
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `So-Tay-Hoc-Thuat-Backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
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
            type: n.type === "bookmark" ? "bookmark" : "note",
            blockType: ["def", "thm", "ex", "note"].includes(n.blockType) ? n.blockType : "note",
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

  // ---------------- 10. ĐIỀU HƯỚNG SÂU (DEEP-LINK) & TỰ ĐỘNG LƯU VỊ TRÍ ĐỌC ----------------
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

    // Cập nhật lịch sử đọc (không trùng lặp mục liên tiếp)
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

  // ---------------- 11. KHỞI CHẠY TOÀN BỘ HỆ THỐNG DIGITAL BOOK ----------------
  function bootstrapDigitalBook() {
    ensureStableIds();
    injectReaderToolbar();
    injectReadingHub();
    injectNotebookDrawer();
    syncLegacyBookmarksIntoNotebook();
    decorateKnowledgeBlocks();
    applyReaderSettings();
    renderNotebookList();
    restoreFromHashOrStorage();

    window.addEventListener("scroll", debouncedScrollTracker, { passive: true });

    // Theo dõi khi người dùng bấm chuyển Chương/Phần để cập nhật ngữ cảnh Sổ tay
    document.querySelector(".main-tabs-bar")?.addEventListener("click", () => {
      setTimeout(() => {
        const p = document.querySelector(".part-panel.active");
        const c = p?.querySelector(".chapter-content.active");
        if (p && c) recordReadingPosition(p.id, c.id, "");
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
