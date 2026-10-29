const SLIDE_KATEX = {
  delimiters: [
    {left: "$$", right: "$$", display: true},
    {left: "$", right: "$", display: false}
  ],
  throwOnError: false
};

function renderSlideMath(el) {
  if (el && window.renderMathInElement) renderMathInElement(el, SLIDE_KATEX);
}

function initSlideEngine() {
  const workspace = document.getElementById("slideWorkspace");
  const select = document.getElementById("slideChapterSelect");
  const card = document.getElementById("slideCard");
  const prevBtn = document.getElementById("slidePrev");
  const nextBtn = document.getElementById("slideNext");
  const counter = document.getElementById("slideCounter");
  const bar = document.getElementById("slideProgressBar");
  const fsBtn = document.getElementById("slideFullscreen");
  const stageFrame = document.getElementById("slideStageFrame");
  const filmstrip = document.getElementById("slideFilmstrip");
  const presentationLayout = document.getElementById("slidePresentationLayout");
  const filmstripList = document.getElementById("slideFilmstripList");
  const filmstripToggle = document.getElementById("slideFilmstripToggle");
  if (!workspace || !select || !card) return;

  let chapter = select.value || "1";
  let index = 0;
  let animating = false;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  function slidesOf() { return SLIDES_DATA[chapter] || []; }

  function isSlideMode() {
    return document.body.getAttribute("data-app-mode") === "slides";
  }
  function labOpen() {
    const m = document.getElementById("labModal");
    return m && !m.hidden;
  }
  function typingTarget(el) {
    const tag = (el && el.tagName || "").toLowerCase();
    return tag === "input" || tag === "textarea" || tag === "select" || (el && el.isContentEditable);
  }
  function resizeFilmstripPreviews() {
    filmstripList.querySelectorAll(".slide-filmstrip-preview").forEach(preview => {
      const content = preview.querySelector(".slide-filmstrip-content");
      content.style.transform = `scale(${preview.clientWidth / 960})`;
    });
  }

  function resizeFilmstrip() {
    const stageHeight = stageFrame.getBoundingClientRect().height;
    if (stageHeight) filmstrip.style.height = `${stageHeight}px`;
    resizeFilmstripPreviews();
    syncFilmstrip();
  }

  function syncFilmstrip() {
    let activeItem;
    filmstripList.querySelectorAll(".slide-filmstrip-item").forEach(item => {
      const active = Number(item.dataset.slideIndex) === index;
      item.setAttribute("aria-current", String(active));
      if (active) activeItem = item;
    });
    if (activeItem) activeItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function renderFilmstrip() {
    const list = slidesOf();
    filmstripList.replaceChildren();
    list.forEach((slide, slideIndex) => {
      const row = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "slide-filmstrip-item";
      button.dataset.slideIndex = String(slideIndex);
      button.setAttribute("aria-current", String(slideIndex === index));
      button.setAttribute("aria-label", `Slide ${slideIndex + 1}`);
      const number = document.createElement("span");
      number.className = "slide-filmstrip-number";
      number.textContent = String(slideIndex + 1);
      const preview = document.createElement("div");
      preview.className = "slide-filmstrip-preview";
      const thumbnail = document.createElement("article");
      thumbnail.className = "slide-card slide-filmstrip-content";
      thumbnail.innerHTML = slide.html;
      thumbnail.querySelectorAll("[id]").forEach(element => element.removeAttribute("id"));
      preview.append(thumbnail);
      button.append(number, preview);
      button.addEventListener("click", () => {
        index = slideIndex;
        paint(0);
      });
      row.append(button);
      filmstripList.append(row);
      renderSlideMath(thumbnail);
    });
    resizeFilmstripPreviews();
    syncFilmstrip();
  }

  function updateChrome() {
    const list = slidesOf();
    const n = list.length || 1;
    counter.textContent = `Slide ${Math.min(index + 1, n)} / ${n}`;
    bar.style.width = `${((index + 1) / n) * 100}%`;
    prevBtn.disabled = index <= 0;
    nextBtn.disabled = index >= n - 1;
    syncFilmstrip();
  }

  function paint(dir) {
    const list = slidesOf();
    if (!list.length) {
      card.innerHTML = "<h2>Chưa có slide</h2>";
      updateChrome();
      return;
    }
    index = Math.max(0, Math.min(index, list.length - 1));
    const apply = () => {
      card.innerHTML = list[index].html;
      renderSlideMath(card);
      updateChrome();
    };
    if (reduced.matches || !dir) {
      card.className = "slide-card";
      apply();
      return;
    }
    animating = true;
    card.classList.add(dir > 0 ? "is-leave-next" : "is-leave-prev");
    window.setTimeout(() => {
      card.classList.remove("is-leave-next", "is-leave-prev");
      card.classList.add(dir > 0 ? "is-enter-next" : "is-enter-prev");
      apply();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          card.classList.remove("is-enter-next", "is-enter-prev");
          animating = false;
        });
      });
    }, 180);
  }

  window.goSlide = function(delta) {
    if (animating) return;
    const list = slidesOf();
    const next = index + delta;
    if (next < 0 || next >= list.length) return;
    index = next;
    syncFilmstrip();
    paint(delta);
  };

  window.loadSlideChapter = function(id, keepIndex) {
    chapter = String(id);
    if (select.value !== chapter) select.value = chapter;
    if (!keepIndex) index = 0;
    renderFilmstrip();
    paint(0);
  };

  select.addEventListener("change", () => loadSlideChapter(select.value, false));
  prevBtn.addEventListener("click", () => goSlide(-1));
  nextBtn.addEventListener("click", () => goSlide(1));

  function isFs() {
    return document.fullscreenElement === workspace || document.webkitFullscreenElement === workspace;
  }
  window.toggleSlideFullscreen = function() {
    if (isFs()) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    } else if (workspace.requestFullscreen) {
      workspace.requestFullscreen();
    } else if (workspace.webkitRequestFullscreen) {
      workspace.webkitRequestFullscreen();
    }
  };
  fsBtn.addEventListener("click", () => toggleSlideFullscreen());
  filmstripToggle.addEventListener("click", () => {
    const expanded = filmstripToggle.getAttribute("aria-expanded") === "true";
    presentationLayout.classList.toggle("is-filmstrip-collapsed", expanded);
    filmstripToggle.setAttribute("aria-expanded", String(!expanded));
    filmstripToggle.title = expanded ? "Mở danh sách slide" : "Thu gọn danh sách slide";
    requestAnimationFrame(() => {
      resizeFilmstripPreviews();
      syncFilmstrip();
    });
  });
  window.addEventListener("resize", resizeFilmstrip);
  document.addEventListener("fullscreenchange", resizeFilmstrip);
  document.addEventListener("webkitfullscreenchange", resizeFilmstrip);
  window.refreshSlideFilmstrip = resizeFilmstrip;

  document.addEventListener("keydown", function(e) {
    if (!isSlideMode() || labOpen()) return;
    if (typingTarget(document.activeElement)) return;
    if (e.key === "ArrowRight" || e.key === " ") {
      e.preventDefault();
      goSlide(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goSlide(-1);
    } else if (e.key === "f" || e.key === "F") {
      e.preventDefault();
      toggleSlideFullscreen();
    } else if (e.key === "Escape" && isFs()) {
      e.preventDefault();
      if (document.exitFullscreen) document.exitFullscreen();
    }
  });

  renderFilmstrip();
  paint(0);
}

function setAppMode(mode) {
  const next = mode === "slides" ? "slides" : "study";
  document.body.setAttribute("data-app-mode", next);
  document.querySelectorAll(".mode-btn").forEach(btn => {
    const on = btn.getAttribute("data-mode") === next;
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-selected", String(on));
  });
  if (next === "slides") {
    renderSlideMath(document.getElementById("slideCard"));
    window.scrollTo({ top: 0, behavior: "auto" });
    requestAnimationFrame(() => window.refreshSlideFilmstrip?.());
  }
}

// ========================================================
// QUẢN LÝ TIẾN ĐỘ HỌC TẬP & TRẠNG THÁI BÀI TẬP
// ========================================================
const statusFlow = {
  todo: { next: "doing", icon: "🟡", text: "Đang làm" },
  doing: { next: "done", icon: "✅", text: "Thành thạo" },
  done: { next: "todo", icon: "⚪", text: "Chưa làm" }
};

window.toggleExStatus = function(btn, exId) {
  const cur = btn.getAttribute("data-status") || "todo";
  const nxt = statusFlow[cur].next;
  document.querySelectorAll(`.ex-status-btn[data-id="${exId}"]`).forEach(b => {
    b.setAttribute("data-status", nxt);
    b.querySelector(".status-icon").textContent = statusFlow[cur].icon;
    b.querySelector(".status-text").textContent = statusFlow[cur].text;
  });
  localStorage.setItem("ctds_ex_" + exId, nxt);
  updatePracticeSummary();
};

function updatePracticeSummary() {
  const allBtns = document.querySelectorAll("#part-5 .ex-status-btn");
  const totalCount = allBtns.length;
  let doneCount = 0;
  allBtns.forEach(b => {
    if (b.getAttribute("data-status") === "done") doneCount++;
  });
  const countEl = document.getElementById("practice-completed-count");
  const totalEl = document.getElementById("practice-exercise-count");
  if (countEl) countEl.textContent = doneCount;
  if (totalEl) totalEl.textContent = totalCount;
}

function restoreExStatuses() {
  document.querySelectorAll("#part-5 .ex-status-btn").forEach(btn => {
    const exId = btn.getAttribute("data-id");
    const saved = localStorage.getItem("ctds_ex_" + exId);
    if (saved && statusFlow[saved]) {
      btn.setAttribute("data-status", saved);
      const icon = saved === "done" ? "✅" : (saved === "doing" ? "🟡" : "⚪");
      const text = saved === "done" ? "Thành thạo" : (saved === "doing" ? "Đang làm" : "Chưa làm");
      btn.querySelector(".status-icon").textContent = icon;
      btn.querySelector(".status-text").textContent = text;
    }
  });
  updatePracticeSummary();
}

window.switchInnerTab = function(btn, targetPane) {
  const card = btn.closest(".ex-study-card");
  if (!card) return;
  card.querySelectorAll(".inner-tab-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  card.querySelectorAll(".inner-tab-pane").forEach(p => p.classList.remove("active"));
  const activePane = card.querySelector(`.inner-tab-pane[data-pane="${targetPane}"]`);
  if (activePane) activePane.classList.add("active");
};

// ========================================================
// LOGIC CHUYỂN TAB VÀ KHỞI TẠO ỨNG DỤNG
// ========================================================
document.addEventListener("DOMContentLoaded", function() {
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "$", right: "$", display: false}
      ],
      throwOnError: false
    });
  }

  const mainTabs = document.querySelectorAll(".main-tab");
  const partPanels = document.querySelectorAll(".part-panel");
  const subTabsContainer = document.getElementById("subTabsContainer");
  const topbar = document.querySelector(".topbar");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const workspaceContainer = document.querySelector(".container");
  const chapterSidebar = document.querySelector(".chapter-sidebar");
  const sidebarTitle = document.getElementById("sidebarTitle");

  function setPracticeView(view) {
    const isReview = view === "review";
    workspaceContainer.classList.toggle("practice-review-mode", isReview);
    document.getElementById("practiceChapterView").hidden = isReview;
    document.getElementById("practiceReviewView").hidden = !isReview;
    document.getElementById("practiceTabChapters").classList.toggle("active", !isReview);
    document.getElementById("practiceTabChapters").setAttribute("aria-selected", String(!isReview));
    document.getElementById("practiceTabReview").classList.toggle("active", isReview);
    document.getElementById("practiceTabReview").setAttribute("aria-selected", String(isReview));
    // Giữ Sidebar Cây thư mục luôn khả dụng trong bố cục 3 cột (Ý tưởng 2)
    chapterSidebar.hidden = false;
    sidebarTitle.textContent = "🗂️ MỤC LỤC GIÁO TRÌNH";
    const treeRevBtn = document.getElementById("treeSmartExamBtn");
    if (treeRevBtn) {
      treeRevBtn.classList.toggle("active", isReview);
    }
  }

  function initializePracticeCards() {
    const groupLabels = {
      a: "Nhóm A · Nhận diện",
      b: "Nhóm B · Áp dụng",
      c: "Nhóm C · Chứng minh / Phản ví dụ",
      d: "Nhóm D · Tổng hợp"
    };
    document.querySelectorAll("#part-5 .chapter-content[id^='tab-ex']").forEach(chapter => {
      const cards = [...chapter.querySelectorAll(".ex-study-card")];
      if (!cards.length) return;
      const groups = new Map(Object.keys(groupLabels).map(key => [key, []]));
      cards.forEach(card => {
        const badge = card.querySelector(".ex-group-badge");
        const group = [...groups.keys()].find(key => badge?.classList.contains(`badge-group-${key}`));
        if (!group) return;
        badge.textContent = groupLabels[group];
        card.dataset.exerciseGroup = group;
        groups.get(group).push(card);
        card.querySelectorAll(".inner-tab-btn").forEach(button => {
          const isHint = button.getAttribute("onclick")?.includes("'hint'");
          button.classList.toggle("active", isHint);
        });
        card.querySelectorAll(".inner-tab-pane").forEach(pane => {
          pane.classList.toggle("active", pane.dataset.pane === "hint");
        });
      });
      const groupList = document.createElement("div");
      groupList.className = "practice-exercise-groups";
      groups.forEach((groupCards, key) => {
        const section = document.createElement("section");
        section.className = `practice-exercise-group practice-exercise-group-${key}`;
        const heading = document.createElement("h3");
        heading.textContent = groupLabels[key];
        section.appendChild(heading);
        if (groupCards.length) groupCards.forEach(card => section.appendChild(card));
        else {
          const empty = document.createElement("p");
          empty.className = "practice-group-empty";
          empty.textContent = "Chương này hiện chưa có bài tập thuộc nhóm này.";
          section.appendChild(empty);
        }
        groupList.appendChild(section);
      });
      chapter.appendChild(groupList);
    });
  }

  initializePracticeCards();
  document.querySelectorAll(".practice-segment-btn").forEach(button => {
    button.addEventListener("click", () => setPracticeView(button.dataset.practiceView));
  });

  const PART_TREE_META = [
    { id: "part-0", icon: "📌", title: "Chương 0 · Công cụ Đại số" },
    { id: "part-1", icon: "🔹", title: "Phần I · Nhóm (Ch.1–5)" },
    { id: "part-2", icon: "🔷", title: "Phần II · Vành (Ch.6–8)" },
    { id: "part-3", icon: "💠", title: "Phần III · Trường (Ch.9)" },
    { id: "part-4", icon: "📑", title: "Đối chiếu & Cẩm nang" },
    { id: "part-5", icon: "🎯", title: "Luyện tập & Phòng thi" }
  ];
  const expandedTreeParts = new Set(["part-0", "part-1"]);

  window.switchPart = function(partId, autoScroll = true) {
    if (typeof setAppMode === "function") setAppMode("study");
    workspaceContainer.classList.toggle("practice-container", partId === "part-5");
    chapterSidebar.hidden = false;
    sidebarTitle.textContent = "🗂️ MỤC LỤC GIÁO TRÌNH";
    mainTabs.forEach(t => t.classList.toggle("active", t.getAttribute("data-part") === partId));
    partPanels.forEach(p => p.classList.toggle("active", p.id === partId));
    expandedTreeParts.add(partId);
    renderSubTabs(partId);
    const panel = document.getElementById(partId);
    const activeChEl = panel?.querySelector(".chapter-content.active");
    const firstChapter = activeChEl?.id || partChapters[partId]?.[0]?.id;
    if (firstChapter) {
      switchChapter(partId, firstChapter, autoScroll);
    }
    if (partId === "part-5") setPracticeView("chapters");
  };

  window.switchChapter = function(partId, chapterId, autoScroll = true) {
    const panel = document.getElementById(partId);
    if (!panel) return;
    // Đảm bảo partId đang được kích hoạt nếu gọi trực tiếp từ cây thư mục
    if (!panel.classList.contains("active")) {
      workspaceContainer.classList.toggle("practice-container", partId === "part-5");
      mainTabs.forEach(t => t.classList.toggle("active", t.getAttribute("data-part") === partId));
      partPanels.forEach(p => p.classList.toggle("active", p.id === partId));
    }
    expandedTreeParts.add(partId);
    panel.querySelectorAll(".chapter-content").forEach(c => {
      c.classList.toggle("active", c.id === chapterId);
    });
    if (partId === "part-5" && chapterId.startsWith("tab-ex")) {
      setPracticeView("chapters");
    }
    // Đồng bộ trạng thái active trên Cây thư mục Accordion
    subTabsContainer.querySelectorAll(".tree-part-group").forEach(grp => {
      const pId = grp.getAttribute("data-tree-part");
      const isExp = expandedTreeParts.has(pId);
      grp.classList.toggle("is-expanded", isExp);
      grp.classList.toggle("is-active-part", pId === partId);
      const hdr = grp.querySelector(".tree-part-header");
      if (hdr) hdr.setAttribute("aria-expanded", String(isExp));
    });
    subTabsContainer.querySelectorAll(".sub-tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-target") === chapterId);
    });
    renderSubsections(panel.querySelector(".chapter-content.active"));
    if (autoScroll) {
      window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "auto" : "smooth" });
    }
  };

  function renderSubTabs(activePartId) {
    expandedTreeParts.add(activePartId);
    subTabsContainer.innerHTML = "";
    const activePanel = document.getElementById(activePartId);
    const activeChId = activePanel?.querySelector(".chapter-content.active")?.id || partChapters[activePartId]?.[0]?.id;

    PART_TREE_META.forEach(meta => {
      const pId = meta.id;
      const chapters = partChapters[pId] || [];
      const isExpanded = expandedTreeParts.has(pId);
      const isActivePart = pId === activePartId;

      const groupEl = document.createElement("div");
      groupEl.className = "tree-part-group"
        + (isExpanded ? " is-expanded" : "")
        + (isActivePart ? " is-active-part" : "");
      groupEl.setAttribute("data-tree-part", pId);

      const headerBtn = document.createElement("button");
      headerBtn.type = "button";
      headerBtn.className = "tree-part-header";
      headerBtn.setAttribute("aria-expanded", String(isExpanded));
      headerBtn.innerHTML = `
        <span class="tree-part-icon" aria-hidden="true">${meta.icon}</span>
        <span class="tree-part-label">${meta.title}</span>
        <span class="tree-part-count">${chapters.length}</span>
        <span class="tree-part-chevron" aria-hidden="true">▾</span>
      `;

      headerBtn.addEventListener("click", (e) => {
        const clickedChevron = e.target.closest(".tree-part-chevron");
        const curActivePart = document.querySelector(".part-panel.active")?.id || "part-0";
        if (clickedChevron || curActivePart === pId) {
          if (expandedTreeParts.has(pId)) expandedTreeParts.delete(pId);
          else expandedTreeParts.add(pId);
          const nowExp = expandedTreeParts.has(pId);
          groupEl.classList.toggle("is-expanded", nowExp);
          headerBtn.setAttribute("aria-expanded", String(nowExp));
        } else {
          expandedTreeParts.add(pId);
          window.switchPart(pId, true);
        }
      });

      const bodyEl = document.createElement("div");
      bodyEl.className = "tree-part-children";

      // Nếu là Phần 5 (Luyện tập), thêm nút vào thẳng Phòng thi thông minh ở đầu nhánh
      if (pId === "part-5") {
        const examItem = document.createElement("div");
        examItem.className = "chapter-nav-item";
        const examBtn = document.createElement("button");
        examBtn.type = "button";
        examBtn.id = "treeSmartExamBtn";
        examBtn.className = "sub-tab-btn tree-review-btn";
        examBtn.innerHTML = "🚀 <span>Phòng thi &amp; Tự ôn tập</span>";
        examBtn.addEventListener("click", () => {
          if (document.querySelector(".part-panel.active")?.id !== "part-5") {
            window.switchPart("part-5", false);
          }
          setPracticeView("review");
          subTabsContainer.querySelectorAll(".sub-tab-btn").forEach(b => b.classList.remove("active"));
          examBtn.classList.add("active");
          if (typeof window.closeSidebarDrawer === "function") window.closeSidebarDrawer();
          window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "auto" : "smooth" });
        });
        examItem.appendChild(examBtn);
        bodyEl.appendChild(examItem);
      }

      chapters.forEach(ch => {
        const chapterItem = document.createElement("div");
        chapterItem.className = "chapter-nav-item";
        const btn = document.createElement("button");
        btn.type = "button";
        const isCurrentCh = isActivePart && ch.id === activeChId;
        btn.className = "sub-tab-btn" + (isCurrentCh ? " active" : "");
        btn.setAttribute("data-part", pId);
        btn.setAttribute("data-target", ch.id);
        btn.textContent = ch.title;
        btn.onclick = function() {
          window.switchChapter(pId, ch.id, true);
          if (typeof window.closeSidebarDrawer === "function") window.closeSidebarDrawer();
        };
        chapterItem.appendChild(btn);
        bodyEl.appendChild(chapterItem);
      });

      groupEl.append(headerBtn, bodyEl);
      subTabsContainer.appendChild(groupEl);
    });
  }

  function normalizeMathLabel(node) {
    if (!node) return "";
    const clone = node.cloneNode(true);
    clone.querySelectorAll(".katex, .katex-display").forEach(math => {
      const annotation = math.querySelector('annotation[encoding="application/x-tex"]');
      const rawTex = annotation ? annotation.textContent : (math.textContent || "");
      const plainText = rawTex
        .replace(/\\operatorname\s*\{([^}]+)\}/g, "$1")
        .replace(/\\mathrm\s*\{([^}]+)\}/g, "$1")
        .replace(/\\mathbb\s*\{([^}]+)\}/g, "$1")
        .replace(/\\text\s*\{([^}]+)\}/g, "$1")
        .replace(/\\left|\\right|\\big|\\Big|\\bigg|\\Bigg/g, "")
        .replace(/\\[A-Za-z]+/g, "")
        .replace(/[{}()]/g, "");
      math.replaceWith(document.createTextNode(plainText || rawTex));
    });
    return clone.textContent.replace(/\s+/g, " ").trim();
  }

  function renderSubsections(chapter) {
    subTabsContainer.querySelectorAll(".subsection-nav").forEach(menu => menu.remove());
    const chapterButton = subTabsContainer.querySelector(".sub-tab-btn.active");
    if (!chapter || !chapterButton) return;
    const headings = chapter.querySelectorAll("h3.subsection-title");
    if (!headings.length) return;
    const menu = document.createElement("ul");
    menu.className = "subsection-nav";
    menu.setAttribute("aria-label", "Mục con của " + chapterButton.textContent);
    headings.forEach((heading, index) => {
      if (!heading.id) {
        const baseId = chapter.id + "-subsection-" + (index + 1);
        let headingId = baseId;
        let suffix = 1;
        while (document.getElementById(headingId)) headingId = baseId + "-" + suffix++;
        heading.id = headingId;
      }
      const label = normalizeMathLabel(heading);
      const numberedTitle = label.match(/^(\d+(?:\.\d+)+)\.?\s*(.*)$/);
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.className = "subsection-link";
      link.setAttribute("href", "#" + heading.id);
      link.setAttribute("aria-label", label);
      if (numberedTitle) {
        const number = document.createElement("span");
        number.className = "subsection-number";
        number.textContent = numberedTitle[1];
        link.appendChild(number);
      }
      const text = document.createElement("span");
      text.className = "subsection-label";
      text.textContent = numberedTitle ? numberedTitle[2] : label;
      link.appendChild(text);
      link.addEventListener("click", function(event) {
        event.preventDefault();
        menu.querySelectorAll(".subsection-link").forEach(otherLink => {
          otherLink.classList.remove("active");
          otherLink.removeAttribute("aria-current");
        });
        link.classList.add("active");
        link.setAttribute("aria-current", "location");
        let stickyBottom = 0;
        document.querySelectorAll(".topbar, .mode-switch, .main-tabs-bar, nav.chapter-sidebar").forEach(bar => {
          const style = getComputedStyle(bar);
          if (style.position !== "sticky" || !bar.getClientRects().length) return;
          if (bar.matches("nav.chapter-sidebar") && !window.matchMedia("(max-width: 960px)").matches) return;
          stickyBottom = Math.max(stickyBottom, (parseFloat(style.top) || 0) + bar.getBoundingClientRect().height);
        });
        if (typeof window.closeSidebarDrawer === "function") window.closeSidebarDrawer();
        window.scrollTo({
          top: Math.max(0, window.scrollY + heading.getBoundingClientRect().top - stickyBottom - 16),
          behavior: reducedMotion.matches ? "auto" : "smooth"
        });
      });
      item.appendChild(link);
      menu.appendChild(item);
    });
    chapterButton.after(menu);
  }

  mainTabs.forEach(tab => {
    tab.addEventListener("click", function() {
      const partId = this.getAttribute("data-part");
      switchPart(partId);
    });
  });

  renderSubTabs("part-0");
  renderSubsections(document.querySelector("#part-0 .chapter-content.active"));
  restoreExStatuses();
  document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.addEventListener("click", function() { setAppMode(this.getAttribute("data-mode")); });
  });
  initSlideEngine();

  // Nút chuyển đổi 5 giao diện: Học tập (Dịu mắt) -> Xuân -> Hạ -> Thu -> Đông
const themes = ["study", "spring", "summer", "autumn", "winter"];
const themeLabels = {
study: "📖 Giao diện: Học tập",
spring: "🌸 Giao diện: Xuân",
summer: "🌊 Giao diện: Hạ",
autumn: "🍁 Giao diện: Thu",
winter: "❄️ Giao diện: Đông"
};
const themeEyebrows = {
study: "📖 WELCOME TO CTĐS",
spring: "🌸 MÙA XUÂN KHỞI SINH · WELCOME TO CTĐS",
summer: "🌊 MÙA HẠ ĐẠI DƯƠNG · WELCOME TO CTĐS",
autumn: "🍁 MÙA THU LÁ PHONG · WELCOME TO CTĐS",
winter: "❄️ MÙA ĐÔNG CỰC QUANG · WELCOME TO CTĐS"
};
const themeBtn = document.getElementById("btnTheme");
const seasonEyebrow = document.getElementById("seasonEyebrow");
if (themeBtn) {
let currentThemeIdx = Math.max(0, themes.indexOf(document.documentElement.getAttribute("data-theme") || "study"));
  const applySeasonUI = (seasonKey) => {
    document.documentElement.setAttribute("data-theme", seasonKey);
    themeBtn.textContent = themeLabels[seasonKey];
    if (seasonEyebrow) seasonEyebrow.textContent = themeEyebrows[seasonKey];
  };
  applySeasonUI(themes[currentThemeIdx]);
  themeBtn.addEventListener("click", function() {
    currentThemeIdx = (currentThemeIdx + 1) % themes.length;
    const nextTheme = themes[currentThemeIdx];
    applySeasonUI(nextTheme);
  });
}

  // Thu / Mở tất cả ví dụ
  const btnToggleAll = document.getElementById("btnToggleAllEx");
  if (btnToggleAll) {
    let allOpen = false;
    btnToggleAll.addEventListener("click", function() {
      allOpen = !allOpen;
      document.querySelectorAll("details.ex-card, details.proof-block").forEach(d => d.open = allOpen);
      this.textContent = allOpen ? "Thu gọn ví dụ" : "Mở rộng ví dụ";
    });
  }

  // Nút cuộn lên đầu trang
  const topBtn = document.getElementById("topBtn");
  if (topBtn) {
    window.addEventListener("scroll", function() {
      const scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
      if (topbar) topbar.classList.toggle("is-scrolled", scrollOffset > 8);
      topBtn.style.display = scrollOffset > 300 ? "block" : "none";
    }, { passive: true });
    topBtn.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "auto" : "smooth" });
    });
  }

  // Công cụ Bézout
  window.calcBezoutInteractive = function() {
    let a = parseInt(document.getElementById("bezoutA")?.value);
    let b = parseInt(document.getElementById("bezoutB")?.value);
    const resEl = document.getElementById("bezoutResult");
    if (!resEl) return;
    if (isNaN(a) || isNaN(b) || a === 0 || b === 0) {
      resEl.textContent = "Vui lòng nhập hai số nguyên khác 0.";
      return;
    }
    let r0 = Math.abs(a), r1 = Math.abs(b);
    let s0 = 1, s1 = 0, t0 = 0, t1 = 1;
    let steps = `Thuật toán Euclid mở rộng cho a = ${a}, b = ${b}:\n`;
    while (r1 !== 0) {
      let q = Math.floor(r0 / r1);
      let r2 = r0 % r1;
      let s2 = s0 - q * s1;
      let t2 = t0 - q * t1;
      steps += `${r0} = ${r1} × ${q} + ${r2}\n`;
      r0 = r1; r1 = r2; s0 = s1; s1 = s2; t0 = t1; t1 = t2;
    }
    if (a < 0) s0 = -s0;
    if (b < 0) t0 = -t0;
    steps += `\nKết luận:\n• ƯCLN: gcd(${a}, ${b}) = ${r0}\n• Hệ số Bézout: u = ${s0}, v = ${t0}\n• Đẳng thức: ${a} × (${s0}) + ${b} × (${t0}) = ${r0}`;
    resEl.textContent = steps;
  };
});

// ========================================================
// TÌM KIẾM SPOTLIGHT MỞ RỘNG (100% KẾT QUẢ TỰ DO)
// ========================================================
(function initOptimizedSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchCounter = document.getElementById("searchCounter");
  const searchDropdown = document.getElementById("searchDropdown");
  const searchResultsList = document.getElementById("searchResultsList");
  const searchFooterInfo = document.getElementById("searchFooterInfo");

  let searchIndexData = [];
  let allMatched = [];
  let currentSelectedIndex = -1;

  function buildSearchIndex() {
    searchIndexData = [];
    const elements = document.querySelectorAll(".math-card, .ex-study-card, details.ex-card, details.proof-block, h2.section-title, h3.subsection-title, .table-wrapper");
    elements.forEach(el => {
      const chapter = el.closest(".chapter-content");
      const part = el.closest(".part-panel");
      if (!chapter || !part) return;

      const chapterTitle = chapter.querySelector("h2.section-title")?.textContent.replace(/^Chương\s*\d+\.\s*/i, "").trim() || "Chương";
      let type = "Nội dung", tagClass = "tag-def", title = "";

      if (el.classList.contains("ex-study-card")) {
        type = "Bài tập"; tagClass = "tag-ex";
        title = el.querySelector(".ex-title-label")?.textContent.trim() || "Bài tập";
      } else if (el.classList.contains("def")) {
        type = "Định nghĩa"; tagClass = "tag-def";
        title = el.querySelector(".card-header .label")?.textContent.trim() || "Định nghĩa";
      } else if (el.classList.contains("thm")) {
        type = "Định lý"; tagClass = "tag-thm";
        title = el.querySelector(".card-header .label")?.textContent.trim() || "Định lý";
      } else if (el.tagName.toLowerCase() === "details") {
        type = "Ví dụ"; tagClass = "tag-ex";
        title = el.querySelector("summary")?.textContent.trim() || "Ví dụ";
      } else {
        type = "Mục"; tagClass = "tag-def";
        title = el.textContent.trim().slice(0, 45);
      }

      searchIndexData.push({
        element: el,
        partId: part.id,
        chapterId: chapter.id,
        chapterTitle: chapterTitle,
        type: type,
        tagClass: tagClass,
        title: title,
        text: el.textContent.replace(/\s+/g, " ").trim()
      });
    });
  }

  function updateCounterDisplay() {
    if (!searchCounter) return;
    if (allMatched.length === 0) {
      searchCounter.textContent = "0/0";
      searchCounter.style.color = "var(--warn-color)";
      searchCounter.style.display = "block";
    } else {
      searchCounter.textContent = `${currentSelectedIndex + 1}/${allMatched.length}`;
      searchCounter.style.color = "var(--def-color)";
      searchCounter.style.display = "block";
    }
  }

  function doSearch(query) {
    if (searchIndexData.length === 0) buildSearchIndex();
    if (query.length < 2) {
      if (searchDropdown) searchDropdown.style.display = "none";
      if (searchCounter) searchCounter.style.display = "none";
      allMatched = [];
      currentSelectedIndex = -1;
      return;
    }

    allMatched = searchIndexData.filter(item =>
      item.title.toLowerCase().includes(query) || item.text.toLowerCase().includes(query)
    );

    if (allMatched.length === 0) {
      currentSelectedIndex = -1;
      updateCounterDisplay();
      if (searchResultsList) searchResultsList.innerHTML = `<div class="search-empty">Không tìm thấy nội dung phù hợp với "<b>${query}</b>"</div>`;
      if (searchFooterInfo) searchFooterInfo.style.display = "none";
      if (searchDropdown) searchDropdown.style.display = "block";
      return;
    }

    currentSelectedIndex = 0;
    updateCounterDisplay();

    if (searchResultsList) {
      searchResultsList.innerHTML = allMatched.map((item, idx) => `
        <div class="search-item ${idx === 0 ? 'selected' : ''}" data-idx="${idx}">
          <div class="search-item-header">
            <span class="search-item-title">${item.title}</span>
            <span class="search-item-tag ${item.tagClass}">${item.type}</span>
          </div>
          <div class="search-item-breadcrumb">📍 ${item.chapterTitle}</div>
        </div>
      `).join("");

      searchResultsList.querySelectorAll(".search-item").forEach((itemEl, idx) => {
        itemEl.addEventListener("click", () => {
          currentSelectedIndex = idx;
          updateCounterDisplay();
          selectAndNavigate(allMatched[idx]);
        });
      });
    }

    if (searchFooterInfo) {
      searchFooterInfo.innerHTML = `<span>Kết quả 1/${allMatched.length} · Dùng ↑ ↓ để lướt, Enter để đến</span><span>Esc để đóng</span>`;
      searchFooterInfo.style.display = "flex";
    }
    if (searchDropdown) searchDropdown.style.display = "block";
  }

  function selectAndNavigate(item) {
    if (!item || !item.element) return;
    if (searchDropdown) searchDropdown.style.display = "none";
    if (searchInput) searchInput.blur();

    window.switchPart(item.partId, false);
    window.switchChapter(item.partId, item.chapterId, false);

    const parentDetails = item.element.closest("details");
    if (parentDetails) parentDetails.open = true;

    setTimeout(() => {
      item.element.scrollIntoView({ behavior: "smooth", block: "center" });
      item.element.style.transition = "outline 0.3s ease";
      item.element.style.outline = "3px solid var(--gold, #e3b341)";
      item.element.style.outlineOffset = "5px";
      setTimeout(() => { item.element.style.outline = ""; }, 2500);
    }, 150);
  }

  if (searchInput) {
    searchInput.addEventListener("input", function() { doSearch(this.value.trim().toLowerCase()); });
    searchInput.addEventListener("focus", function() {
      const val = this.value.trim().toLowerCase();
      if (val.length >= 2) doSearch(val);
    });
    searchInput.addEventListener("keydown", function(e) {
      if (allMatched.length === 0) return;
      if (e.key === "Enter") {
        e.preventDefault();
        if (currentSelectedIndex >= 0 && currentSelectedIndex < allMatched.length) {
          selectAndNavigate(allMatched[currentSelectedIndex]);
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        currentSelectedIndex = (currentSelectedIndex + 1) % allMatched.length;
        updateCounterDisplay();
        const items = searchResultsList?.querySelectorAll(".search-item");
        items?.forEach((it, idx) => {
          it.classList.toggle("selected", idx === currentSelectedIndex);
          if (idx === currentSelectedIndex) it.scrollIntoView({ block: "nearest" });
        });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        currentSelectedIndex = (currentSelectedIndex - 1 + allMatched.length) % allMatched.length;
        updateCounterDisplay();
        const items = searchResultsList?.querySelectorAll(".search-item");
        items?.forEach((it, idx) => {
          it.classList.toggle("selected", idx === currentSelectedIndex);
          if (idx === currentSelectedIndex) it.scrollIntoView({ block: "nearest" });
        });
      } else if (e.key === "Escape") {
        if (searchDropdown) searchDropdown.style.display = "none";
      }
    });
  }

  document.addEventListener("click", function(e) {
    if (searchInput && searchDropdown && !searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
      searchDropdown.style.display = "none";
    }
  });

  window.addEventListener("keydown", function(e) {
    if ((e.key === "/" || ((e.ctrlKey || e.metaKey) && e.key === "k")) && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput?.focus();
      searchInput?.select();
    }
  });
})();
