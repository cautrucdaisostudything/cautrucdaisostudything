(function initAcademicSupportBatch1() {

  // Dữ liệu 10 Khuôn Mẫu Chứng Minh Chuẩn Mực (Trang 11 & Phụ lục trang 161–162 Giáo trình)
  const PROOF_TEMPLATES = [
    {
      id: "set-eq",
      title: "1. Chứng minh hai tập hợp bằng nhau: A = B (Tr. 11 & 161)",
      steps: [
        "Bước 1 (Chiều bao hàm A ⊆ B): Lấy tùy ý một phần tử x ∈ A.",
        "Bước 2: Khai thác định nghĩa/điều kiện xác định của tập A để biến đổi suy ra x thỏa mãn điều kiện của tập B (tức x ∈ B).",
        "Bước 3 (Chiều bao hàm B ⊆ A): Lấy tùy ý một phần tử y ∈ B, biến đổi suy ra y ∈ A (không dùng ngầm đẳng thức đang chứng minh).",
        "Bước 4: Kết luận từ A ⊆ B và B ⊆ A suy ra A = B."
      ],
      trap: "Tuyệt đối không kiểm tra vài phần tử cụ thể rồi kết luận A = B. Nếu viết chuỗi tương đương x ∈ A ⇔ ... ⇔ x ∈ B, phải bảo đảm mọi dấu ⇔ đều đúng cả hai chiều!",
      latex: `\\textbf{Chứng minh } A = B:\n\\bullet\\text{ Chiều } (\\subseteq):\\text{ Lấy tùy ý } x \\in A.\\text{ Theo định nghĩa của } A,\\text{ ta có } \\dots \\implies x \\in B.\\text{ Vậy } A \\subseteq B.\n\\bullet\\text{ Chiều } (\\supseteq):\\text{ Lấy tùy ý } y \\in B.\\text{ Theo định nghĩa của } B,\\text{ ta có } \\dots \\implies y \\in A.\\text{ Vậy } B \\subseteq A.\n\\text{Từ hai bao hàm trên, ta kết luận } A = B. \\; \\blacksquare`
    },
    {
      id: "well-defined",
      title: "2. Kiểm tra ánh xạ / phép toán trên tập thương xác định tốt (Tr. 8 & 161)",
      steps: [
        "Bước 1: Giả sử ta có các đại diện khác nhau của cùng một lớp đầu vào: [x] = [x'] (và [y] = [y'] nếu là phép toán 2 ngôi).",
        "Bước 2: Chuyển đẳng thức lớp thành điều kiện tương đương cụ thể trên phần tử đại diện: x ~ x' và y ~ y'.",
        "Bước 3: Biến đổi biểu thức đầu ra f(x, y) và f(x', y') để chứng minh f(x, y) ~ f(x', y') (cùng thuộc một lớp ở đối miền).",
        "Bước 4: Kết luận công thức không phụ thuộc vào việc chọn đại diện, nên xác định tốt."
      ],
      trap: "Với phép toán hai ngôi [x] * [y] = [f(x, y)], bắt buộc phải đổi ĐỒNG THỜI cả hai đại diện (x ~ x' và y ~ y'). Phải kiểm tra xác định tốt TRƯỚC khi kiểm tra kết hợp hay đồng cấu!",
      latex: `\\textbf{Kiểm tra tính xác định tốt:}\n\\text{Giả sử } [x] = [x'] \\text{ và } [y] = [y'] \\text{ trong tập thương } X/{\\sim}.\n\\text{Khi đó theo định nghĩa quan hệ tương đương: } x \\sim x' \\text{ và } y \\sim y'.\n\\text{Ta có: } \\dots \\implies f(x, y) \\sim f(x', y') \\iff [f(x, y)] = [f(x', y')].\n\\text{Vậy kết quả không phụ thuộc vào cách chọn đại diện, nên phép toán xác định tốt.} \\; \\blacksquare`
    },
    {
      id: "equiv-rel",
      title: "3. Kiểm tra quan hệ tương đương ~ trên tập hợp X (Tr. 5 & 162)",
      steps: [
        "Bước 1 (Tính phản xạ): Lấy tùy ý x ∈ X, kiểm tra x ~ x luôn đúng.",
        "Bước 2 (Tính đối xứng): Lấy tùy ý x, y ∈ X, giả sử x ~ y rồi suy ra y ~ x.",
        "Bước 3 (Tính bắc cầu): Lấy tùy ý x, y, z ∈ X, giả sử đồng thời x ~ y và y ~ z, kết nối qua y để suy ra x ~ z.",
        "Bước 4: Kết luận ~ là quan hệ tương đương và mô tả lớp tương đương [x] = {y ∈ X | x ~ y}."
      ],
      trap: "Để bác bỏ tính bắc cầu, phải chỉ ra một bộ ba cụ thể (x, y, z) thỏa mãn cả hai tiền đề x ~ y và y ~ z nhưng x ≁ z.",
      latex: `\\textbf{Chứng minh } {\\sim} \\textbf{ là quan hệ tương đương trên } X:\n1)\\text{ Phản xạ: Với mọi } x \\in X,\\text{ ta có } \\dots \\implies x \\sim x.\n2)\\text{ Đối xứng: Với mọi } x, y \\in X,\\text{ giả sử } x \\sim y \\implies \\dots \\implies y \\sim x.\n3)\\text{ Bắc cầu: Với mọi } x, y, z \\in X,\\text{ giả sử } x \\sim y \\text{ và } y \\sim z \\implies \\dots \\implies x \\sim z.\n\\text{Vậy } {\\sim} \\text{ là một quan hệ tương đương trên } X. \\; \\blacksquare`
    },
    {
      id: "subgroup-test",
      title: "4. Tiêu chuẩn nhóm con rút gọn H ≤ G (Tr. 36 – Định lý 2.2)",
      steps: [
        "Bước 1 (Kiểm tra bao hàm & khác rỗng): Chỉ rõ H ⊆ G và chỉ ra phần tử đơn vị e_G ∈ H để suy ra H ≠ ∅.",
        "Bước 2: Lấy hai phần tử tùy ý x, y ∈ H (ghi rõ điều kiện xác định của x và y).",
        "Bước 3: Chứng minh phần tử xy⁻¹ ∈ H (hoặc x - y ∈ H nếu nhóm G viết theo ký hiệu cộng).",
        "Bước 4: Áp dụng Tiêu chuẩn nhóm con rút gọn, kết luận H ≤ G."
      ],
      trap: "Nhiều bài làm quên bước 1 (chứng minh H ≠ ∅) hoặc kiểm tra x + y thay vì x - y trong nhóm cộng!",
      latex: `\\textbf{Chứng minh } H \\le G:\n\\bullet\\text{ Rõ ràng } H \\subseteq G.\\text{ Vì } e_G \\in H \\text{ (do } \\dots\\text{) nên } H \\neq \\emptyset.\n\\bullet\\text{ Lấy tùy ý } x, y \\in H.\\text{ Khi đó:}\nxy^{-1} = \\dots \\in H \\quad (\\text{hoặc } x - y = \\dots \\in H).\n\\text{Theo tiêu chuẩn nhóm con rút gọn, ta kết luận } H \\le G. \\; \\blacksquare`
    },
    {
      id: "normal-subgroup",
      title: "5. Tiêu chuẩn nhóm con chuẩn tắc N ⊴ G (Tr. 70 – Định lý 4.3)",
      steps: [
        "Bước 1: Kiểm tra (hoặc viện dẫn) N là một nhóm con của G (N ≤ G).",
        "Bước 2: Lấy tùy ý một phần tử g ∈ G (từ toàn bộ nhóm mẹ) và một phần tử n ∈ N.",
        "Bước 3: Tính phần tử liên hợp gng⁻¹ (hoặc g + n - g) và chứng minh gng⁻¹ ∈ N.",
        "Bước 4: Suy ra gNg⁻¹ ⊆ N với mọi g ∈ G, kết luận N ⊴ G."
      ],
      trap: "Nếu [G : N] = 2 hoặc G là nhóm Abel hoặc N = ker(φ), hãy viện dẫn trực tiếp định lý để kết luận N ⊴ G mà không cần tính liên hợp dài dòng!",
      latex: `\\textbf{Chứng minh } N \\trianglelefteq G:\n\\bullet\\text{ Trước hết, ta có } N \\le G.\n\\bullet\\text{ Lấy tùy ý } g \\in G \\text{ và } n \\in N.\\text{ Xét phần tử liên hợp:}\ngng^{-1} = \\dots \\in N.\n\\text{Do đó } gNg^{-1} \\subseteq N,\\; \\forall g \\in G.\\text{ Vậy } N \\trianglelefteq G. \\; \\blacksquare`
    },
    {
      id: "first-iso-group",
      title: "6. Phương pháp 3 bước nhận diện nhóm thương G/N ≅ K (Tr. 86 – Định lý 5.5)",
      steps: [
        "Bước 1 (Dựng đồng cấu): Thiết lập ánh xạ φ : G → K từ nhóm mẹ G và chứng minh φ(xy) = φ(x)φ(y), ∀x, y ∈ G.",
        "Bước 2 (Chứng minh toàn ánh): Lấy tùy ý k ∈ K, chỉ ra sự tồn tại của g ∈ G sao cho φ(g) = k. Suy ra im(φ) = K.",
        "Bước 3 (Xác định hạt nhân): Giải phương trình φ(g) = e_K để chứng minh ker(φ) = N.",
        "Bước 4: Áp dụng Định lý Đẳng cấu Thứ nhất, kết luận G/N = G/ker(φ) ≅ im(φ) = K."
      ],
      trap: "Khi tìm ker(φ) = {g ∈ G | φ(g) = e_K}, phải chú ý đúng phần tử đơn vị e_K của nhóm đích K (là 0 nếu K cộng, là 1 nếu K nhân)!",
      latex: `\\textbf{Chứng minh } G/N \\cong K \\textbf{ bằng Định lý Đẳng cấu Thứ nhất:}\n\\bullet\\textbf{ Bước 1 (Xây dựng đồng cấu):}\\text{ Xét ánh xạ } \\varphi : G \\to K \\text{ định bởi } \\varphi(g) = \\dots\n\\text{Với mọi } x, y \\in G,\\text{ ta có } \\varphi(xy) = \\dots = \\varphi(x)\\varphi(y) \\implies \\varphi \\text{ là đồng cấu nhóm.}\n\\bullet\\textbf{ Bước 2 (Tính toàn ánh):}\\text{ Với mọi } k \\in K,\\text{ chọn } g = \\dots \\in G \\text{ thì } \\varphi(g) = k \\implies \\operatorname{im}\\varphi = K.\n\\bullet\\textbf{ Bước 3 (Tìm hạt nhân):}\\text{ Ta có } g \\in \\ker\\varphi \\iff \\varphi(g) = e_K \\iff \\dots \\iff g \\in N.\\text{ Vậy } \\ker\\varphi = N.\n\\bullet\\textbf{ Kết luận:}\\text{ Theo Định lý Đẳng cấu Thứ nhất, } G/N = G/\\ker\\varphi \\cong \\operatorname{im}\\varphi = K. \\; \\blacksquare`
    },
    {
      id: "subring-test",
      title: "7. Tiêu chuẩn Vành con S ⊆ R & Khảo sát đơn vị riêng (Tr. 107)",
      steps: [
        "Bước 1 (Khác rỗng): Chỉ ra 0_R ∈ S để khẳng định S ≠ ∅.",
        "Bước 2 (Đóng với phép trừ): Lấy tùy ý x, y ∈ S, chứng minh hiệu x - y ∈ S.",
        "Bước 3 (Đóng với phép nhân): Với x, y ∈ S ở trên, chứng minh tích xy ∈ S. Kết luận S là vành con của R.",
        "Bước 4 (Khảo sát đơn vị): Tìm phần tử e ∈ S sao cho ex = xe = x, ∀x ∈ S và so sánh e với 1_R."
      ],
      trap: "Theo quy ước giáo trình (tr. iii & 107), vành con KHÔNG bắt buộc chứa cùng đơn vị với vành mẹ (có thể không có đơn vị như 2ℤ ⊂ ℤ, hoặc có đơn vị riêng 1_S ≠ 1_R).",
      latex: `\\textbf{Chứng minh } S \\textbf{ là vành con của } R:\n1)\\text{ Vì } 0_R = \\dots \\in S \\text{ nên } S \\neq \\emptyset.\n2)\\text{ Lấy tùy ý } x, y \\in S.\\text{ Khi đó hiệu } x - y = \\dots \\in S.\n3)\\text{ Đồng thời tích } x \\cdot y = \\dots \\in S.\n\\text{Theo tiêu chuẩn vành con, } S \\text{ là một vành con của } R. \\; \\blacksquare`
    },
    {
      id: "ideal-test",
      title: "8. Tiêu chuẩn Iđêan hai phía I ⊴ R (Tr. 112 – Định lý 7.2)",
      steps: [
        "Bước 1 (Khác rỗng & Đóng với trừ): Chỉ ra 0_R ∈ I (nên I ≠ ∅) và ∀x, y ∈ I ⇒ x - y ∈ I.",
        "Bước 2 (Hấp thụ phép nhân bên trái): Lấy tùy ý r ∈ R (thuộc toàn bộ vành mẹ) và x ∈ I, chứng minh rx ∈ I.",
        "Bước 3 (Hấp thụ phép nhân bên phải): Chứng minh xr ∈ I (nếu R giao hoán thì bước 3 suy ra ngay từ bước 2).",
        "Bước 4: Kết luận I là một iđêan (hai phía) của R (I ⊴ R)."
      ],
      trap: "Phân biệt rõ với vành con: Ở bước hấp thụ, r phải lấy tùy ý trong TOÀN BỘ vành mẹ R chứ không phải chỉ trong I!",
      latex: `\\textbf{Chứng minh } I \\trianglelefteq R:\n1)\\text{ Nhóm con cộng: } 0_R \\in I \\implies I \\neq \\emptyset.\\text{ Với mọi } x, y \\in I,\\text{ ta có } x - y = \\dots \\in I.\n2)\\text{ Hấp thụ phép nhân: Lấy tùy ý } r \\in R \\text{ và } x \\in I.\\text{ Khi đó:}\nrx = \\dots \\in I \\quad \\text{và} \\quad xr = \\dots \\in I.\n\\text{Vậy } I \\text{ là một iđêan hai phía của } R \\; (I \\trianglelefteq R). \\; \\blacksquare`
    },
    {
      id: "quotient-ring-iso",
      title: "9. Nhận diện Vành thương R/I ≅ S & Kiểm tra Miền nguyên / Trường (Tr. 121 & 132)",
      steps: [
        "Bước 1: Thiết lập đồng cấu vành f : R → S (kiểm tra bảo toàn cả cộng f(a+b)=f(a)+f(b) và nhân f(ab)=f(a)f(b)).",
        "Bước 2: Chứng minh f toàn ánh (im f = S) và giải phương trình f(r) = 0_S để chỉ ra ker f = I.",
        "Bước 3: Áp dụng Định lý Đẳng cấu 1 cho vành, suy ra R/I ≅ S.",
        "Bước 4: Nếu S là miền nguyên ⇒ I là iđêan nguyên tố; nếu S là trường ⇒ I là iđêan cực đại (Định lý 7.9)."
      ],
      trap: "Đây là cách nhanh nhất để chứng minh một iđêan I là nguyên tố hay cực đại: thay vì dùng định nghĩa trực tiếp, hãy chứng minh R/I đẳng cấu với một miền nguyên hoặc một trường đã biết!",
      latex: `\\textbf{Nhận diện vành thương } R/I \\cong S:\n\\bullet\\text{ Xét ánh xạ } f : R \\to S \\text{ định bởi } f(r) = \\dots\n\\bullet\\text{ Kiểm tra được } f(a+b) = f(a)+f(b) \\text{ và } f(ab) = f(a)f(b),\\text{ nên } f \\text{ là đồng cấu vành.}\n\\bullet\\text{ Ta có } \\operatorname{im} f = S \\text{ (toàn ánh) và } \\ker f = \\{r \\in R \\mid f(r) = 0_S\\} = I.\n\\bullet\\text{ Theo Định lý Đẳng cấu Vành Thứ nhất: } R/I \\cong S.\n(\\text{Vì } S \\text{ là trường/miền nguyên nên } I \\text{ là iđêan cực đại/nguyên tố của } R). \\; \\blacksquare`
    },
    {
      id: "counterexample",
      title: "10. Xây dựng phản ví dụ bác bỏ mệnh đề phổ quát ∀x, P(x) ⇒ Q(x) (Tr. 11 & 162)",
      steps: [
        "Bước 1: Xác định rõ giả thiết P(x) và kết luận Q(x) của mệnh đề cần bác bỏ.",
        "Bước 2: Chọn một đối tượng cụ thể x₀ (thường lấy từ Z/6Z, S₃, D₈, U(8), 2Z, M₂(R), A₄...).",
        "Bước 3: Kiểm tra tường minh rằng x₀ THỎA MÃN đầy đủ mọi giả thiết P(x₀).",
        "Bước 4: Chứng minh tường minh rằng x₀ LÀM SAI kết luận Q(x₀), từ đó bác bỏ hoàn toàn mệnh đề."
      ],
      trap: "Một đối tượng không thỏa giả thiết P(x) KHÔNG phải là phản ví dụ hợp lệ! (VD: Phép chia trên ℤ không phải phản ví dụ cho tính kết hợp của phép toán hai ngôi vì nó chưa đóng trên ℤ).",
      latex: `\\textbf{Phản ví dụ bác bỏ mệnh đề:}\n\\text{Mệnh đề đã cho là SAI. Ta xét phản ví dụ cụ thể sau:}\n\\bullet\\text{ Chọn cấu trúc / phần tử: } \\dots\n\\bullet\\text{ Kiểm tra giả thiết } P:\\text{ Ta có } \\dots \\text{ (thỏa mãn đầy đủ giả thiết).}\n\\bullet\\text{ Kiểm tra kết luận } Q:\\text{ Tuy nhiên, } \\dots \\text{ (vi phạm kết luận).}\n\\text{Vậy mệnh đề không đúng trong trường hợp tổng quát.} \\; \\blacksquare`
    }
  ];

  function runAcademicBatch1() {

    // ====================================================================
    // MỤC 2: VỞ NHÁP LATEX TRỰC TIẾP TRÊN TỪNG BÀI TẬP & CHẾ ĐỘ TỰ LUYỆN
    // ====================================================================
    const SYMBOLS = [
      { label: "≤", tex: "\\le " },
      { label: "⊴", tex: "\\trianglelefteq " },
      { label: "≅", tex: "\\cong " },
      { label: "ker φ", tex: "\\ker\\varphi " },
      { label: "im φ", tex: "\\operatorname{im}\\varphi " },
      { label: "⟨a⟩", tex: "\\langle a \\rangle " },
      { label: "ℤ/nℤ", tex: "\\mathbb{Z}/n\\mathbb{Z} " },
      { label: "xy⁻¹ ∈ H", tex: "xy^{-1} \\in H " },
      { label: "gNg⁻¹", tex: "gNg^{-1} " },
      { label: "Frac(R)", tex: "\\operatorname{Frac}(R) " },
      { label: "⇒", tex: "\\implies " },
      { label: "⇔", tex: "\\iff " },
      { label: "∀", tex: "\\forall " },
      { label: "∃", tex: "\\exists " },
      { label: "∎", tex: "\\blacksquare" }
    ];

    document.querySelectorAll("#part-5 .ex-study-card").forEach(card => {
      const exId = card.id || "ex";
      const nav = card.querySelector(".inner-tabs-nav");
      if (!nav || nav.querySelector('[data-scratch-btn]')) return;

      const savedNote = localStorage.getItem("ctds_scratch_" + exId) || "";

      // Tạo nút Tab thứ 4: Vở nháp LaTeX
      const scratchBtn = document.createElement("button");
      scratchBtn.type = "button";
      scratchBtn.className = "inner-tab-btn";
      scratchBtn.setAttribute("data-scratch-btn", "1");
      scratchBtn.setAttribute(" onclick", "switchInnerTab(this, 'scratch')");
      scratchBtn.onclick = function() { window.switchInnerTab(this, "scratch"); };
      scratchBtn.innerHTML = `✍️ Vở nháp LaTeX${savedNote.trim() ? '<span class="scratch-dot" title="Đã có ghi chú"></span>' : ""}`;
      nav.appendChild(scratchBtn);

      // Tạo Pane nội dung Vở nháp
      const scratchPane = document.createElement("div");
      scratchPane.className = "inner-tab-pane pane-scratch";
      scratchPane.setAttribute("data-pane", "scratch");
      scratchPane.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:8px;">
          <b style="font-family:var(--font-ui); font-size:13px; color:var(--brand);">✍️ Không gian tự trình bày lời giải (Hỗ trợ gõ công thức LaTeX trong dấu $...$ hoặc $$...$$):</b>
          <button type="button" class="scratch-sym-btn" data-clear-scratch="${exId}" style="color:var(--warn-color);">🗑️ Xóa nháp</button>
        </div>
        <div class="scratch-toolbar">
          <span style="font-size:11.5px; font-family:var(--font-ui); color:var(--mute); margin-right:4px;">Chèn nhanh:</span>
          ${SYMBOLS.map(s => `<button type="button" class="scratch-sym-btn" data-tex="${s.tex}">${s.label}</button>`).join("")}
        </div>
        <textarea class="scratch-textarea" placeholder="Gõ thử lời giải của bạn vào đây trước khi đối chiếu đáp án (VD: Lấy tùy ý $x, y \\in H$, ta có $xy^{-1} \\in H \\implies H \\le G$)..."></textarea>
        <div class="scratch-preview"></div>
      `;
      card.appendChild(scratchPane);

      const ta = scratchPane.querySelector(".scratch-textarea");
      const preview = scratchPane.querySelector(".scratch-preview");
      ta.value = savedNote;

      function updatePreview() {
        const val = ta.value.trim();
        if (!val) {
          preview.innerHTML = `<span style="color:var(--mute); font-style:italic; font-size:13.5px;">Xem trước hiển thị toán học KaTeX của bạn sẽ xuất hiện tại đây...</span>`;
          return;
        }
        preview.textContent = val;
        preview.innerHTML = preview.innerHTML.replace(/\n/g, "<br>");
        if (window.renderMathInElement) {
          renderMathInElement(preview, {
            delimiters: [{left: "$$", right: "$$", display: true}, {left: "$", right: "$", display: false}],
            throwOnError: false
          });
        }
      }
      updatePreview();

      ta.addEventListener("input", () => {
        const val = ta.value;
        try { localStorage.setItem("ctds_scratch_" + exId, val); } catch (_) {}
        scratchBtn.innerHTML = `✍️ Vở nháp LaTeX${val.trim() ? '<span class="scratch-dot" title="Đã có ghi chú"></span>' : ""}`;
        updatePreview();
      });

      scratchPane.querySelectorAll("[data-tex]").forEach(symBtn => {
        symBtn.addEventListener("click", () => {
          const tex = symBtn.getAttribute("data-tex");
          const start = ta.selectionStart || 0;
          const end = ta.selectionEnd || 0;
          const text = ta.value;
          const needDollar = !text.slice(0, start).includes("$") || (text.slice(0, start).split("$").length - 1) % 2 === 0;
          const insertStr = needDollar ? `$${tex.trim()}$ ` : tex;
          ta.value = text.slice(0, start) + insertStr + text.slice(end);
          ta.focus();
          ta.selectionStart = ta.selectionEnd = start + insertStr.length;
          ta.dispatchEvent(new Event("input"));
        });
      });

      scratchPane.querySelector("[data-clear-scratch]")?.addEventListener("click", () => {
        ta.value = "";
        ta.dispatchEvent(new Event("input"));
      });
    });

    // ====================================================================
    // MỤC 3: BỘ LỌC BÀI TẬP ĐA CHIỀU A - B - C - D & CHẾ ĐỘ TỰ LUYỆN
    // ====================================================================
    const summarySec = document.querySelector("#part-5 .practice-summary");
    if (summarySec && !document.getElementById("exSmartFilterBar")) {
      const filterBar = document.createElement("div");
      filterBar.className = "ex-Smart-Filter-Bar";
      filterBar.id = "exSmartFilterBar";
      filterBar.innerHTML = `
        <div class="ex-filter-row">
          <div class="ex-filter-group" id="exGroupFilterBtns">
            <span style="font-size:12.5px; font-weight:800; color:var(--ink); margin-right:4px;">🎯 Lọc theo Nhóm chuẩn Giáo trình:</span>
            <button type="button" class="ex-filter-chip active" data-group="all">Tất cả nhóm</button>
            <button type="button" class="ex-filter-chip" data-group="a">🟢 Nhóm A · Nhận diện &amp; Tính toán</button>
            <button type="button" class="ex-filter-chip" data-group="b">🟡 Nhóm B · Vận dụng</button>
            <button type="button" class="ex-filter-chip" data-group="c">🟠 Nhóm C · Chứng minh &amp; Phản ví dụ</button>
            <button type="button" class="ex-filter-chip" data-group="d">🔴 Nhóm D · Tổng hợp</button>
          </div>
          <button type="button" class="blind-mode-btn" id="btnBlindStudyMode" aria-pressed="false" title="Ẩn lời giải mặc định để tự suy nghĩ hoặc nháp trước theo lời khuyên của tác giả">
            🙈 Chế độ Tự luyện (Ẩn lời giải): Tắt
          </button>
        </div>
        <div class="ex-filter-row" style="border-top:1px dashed var(--line); padding-top:10px;">
          <div class="ex-filter-group" id="exStatusFilterBtns">
            <span style="font-size:12.5px; font-weight:800; color:var(--ink); margin-right:4px;">📌 Lọc theo Trạng thái:</span>
            <button type="button" class="ex-filter-chip active" data-st="all">Tất cả</button>
            <button type="button" class="ex-filter-chip" data-st="todo">⚪ Chưa làm</button>
            <button type="button" class="ex-filter-chip" data-st="doing">🟡 Đang làm</button>
            <button type="button" class="ex-filter-chip" data-st="done">✅ Đã thành thạo</button>
          </div>
          <span class="glossary-count-badge" id="exFilterMatchCount">Đang hiển thị tất cả bài tập</span>
        </div>
      `;
      summarySec.after(filterBar);

      let activeGroup = "all";
      let activeStatus = "all";
      let blindMode = false;
      try { blindMode = localStorage.getItem("ctds_blind_mode") === "true"; } catch (_) {}

      function applyExerciseFilters() {
        const allCards = document.querySelectorAll("#part-5 .ex-study-card");
        let visibleCount = 0;
        allCards.forEach(card => {
          const badge = card.querySelector(".ex-group-badge");
          const stBtn = card.querySelector(".ex-status-btn");
          const grpMatch = activeGroup === "all" || (badge && badge.classList.contains("badge-group-" + activeGroup));
          const curSt = stBtn?.getAttribute("data-status") || "todo";
          const stMatch = activeStatus === "all" || curSt === activeStatus;
          const show = grpMatch && stMatch;
          card.style.display = show ? "" : "none";
          if (show) visibleCount++;
        });
        const countBadge = document.getElementById("exFilterMatchCount");
        if (countBadge) countBadge.textContent = `Khớp bộ lọc: ${visibleCount} / ${allCards.length} bài tập toàn khóa`;
      }

      filterBar.querySelectorAll("#exGroupFilterBtns .ex-filter-chip").forEach(btn => {
        btn.addEventListener("click", () => {
          activeGroup = btn.getAttribute("data-group");
          filterBar.querySelectorAll("#exGroupFilterBtns .ex-filter-chip").forEach(b => b.classList.toggle("active", b === btn));
          applyExerciseFilters();
        });
      });

      filterBar.querySelectorAll("#exStatusFilterBtns .ex-filter-chip").forEach(btn => {
        btn.addEventListener("click", () => {
          activeStatus = btn.getAttribute("data-st");
          filterBar.querySelectorAll("#exStatusFilterBtns .ex-filter-chip").forEach(b => b.classList.toggle("active", b === btn));
          applyExerciseFilters();
        });
      });

      const blindBtn = document.getElementById("btnBlindStudyMode");
      function updateBlindStudyMode() {
        blindBtn.setAttribute("aria-pressed", String(blindMode));
        blindBtn.innerHTML = blindMode
          ? "🙈 Chế độ Tự luyện (Ẩn lời giải): BẬT"
          : "🙈 Chế độ Tự luyện (Ẩn lời giải): Tắt";

        document.querySelectorAll("#part-5 .ex-study-card").forEach(card => {
          const solutionBtn = card.querySelector('.inner-tab-btn[onclick*="sol"]');
          const solutionPane = card.querySelector('.inner-tab-pane[data-pane="sol"]');
          if (blindMode) {
            const hintBtn = card.querySelector('.inner-tab-btn[onclick*="hint"]');
            const scratchBtn = card.querySelector("[data-scratch-btn]");
            const activePane = card.querySelector(".inner-tab-pane.active");
            if (activePane?.dataset.pane === "sol") {
              const targetBtn = hintBtn || scratchBtn;
              if (targetBtn) window.switchInnerTab(targetBtn, hintBtn ? "hint" : "scratch");
            }
          }
          if (solutionBtn) solutionBtn.hidden = blindMode;
          if (solutionPane) solutionPane.hidden = blindMode;
        });
        try { localStorage.setItem("ctds_blind_mode", String(blindMode)); } catch (_) {}
      }

      blindBtn?.addEventListener("click", () => {
        blindMode = !blindMode;
        updateBlindStudyMode();
      });
      if (blindBtn) updateBlindStudyMode();
    }

    // ====================================================================
    // MỤC 1: TRỢ LÝ KHUNG SƯỜN CHỨNG MINH ĐẠI SỐ (10 DẠNG TOÁN TRỌNG TÂM)
    // ====================================================================
    function buildProofAssistantHTML(prefix) {
      return `
        <div class="proof-assistant-box" id="${prefix}Box">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:10px;">
            <div>
              <strong style="font-size:16px; color:var(--brand); font-family:var(--font-ui);">📐 Trợ Lý Khung Sườn Chứng Minh Đại Số (Theo Phụ Lục Tr. 161–162 Giáo Trình)</strong>
              <p style="margin:3px 0 0; font-size:13px; color:var(--mute);">Chọn dạng bài chứng minh tự luận để xem Checklist các bước bắt buộc và chép khung trình bày chuẩn mực.</p>
            </div>
          </div>
          <div class="proof-select-bar">
            <select id="${prefix}Select" aria-label="Chọn mẫu chứng minh đại số">
              ${PROOF_TEMPLATES.map((t, i) => `<option value="${i}">${t.title}</option>`).join("")}
            </select>
            <button type="button" class="lab-btn primary" id="${prefix}CopyBtn">📋 Chép khung LaTeX</button>
          </div>
          <div class="proof-grid-layout">
            <div class="proof-checklist-card">
              <b style="font-size:13px; font-family:var(--font-ui); color:var(--thm-color); display:block; margin-bottom:8px;">✅ Checklist các bước lập luận bắt buộc:</b>
              <div id="${prefix}Steps"></div>
              <div id="${prefix}Trap" style="margin-top:12px; padding:10px 12px; border-radius:8px; background:var(--warn-bg); border-left:3.5px solid var(--warn-color); font-size:12.5px; color:var(--warn-color); line-height:1.55;"></div>
            </div>
            <div class="proof-template-card">
              <b style="font-size:13px; font-family:var(--font-ui); color:var(--def-color); display:block; margin-bottom:6px;">📝 Khung sườn trình bày mẫu &amp; Mã nguồn LaTeX:</b>
              <div id="${prefix}Rendered" style="padding:10px 12px; border-radius:8px; background:var(--paper); border:1px solid var(--line); font-size:14px; line-height:1.7; margin-bottom:8px;"></div>
              <div class="proof-latex-code" id="${prefix}LatexRaw"></div>
            </div>
          </div>
        </div>
      `;
    }

    function bindProofAssistantEvents(prefix) {
      const sel = document.getElementById(prefix + "Select");
      const stepsEl = document.getElementById(prefix + "Steps");
      const trapEl = document.getElementById(prefix + "Trap");
      const renderedEl = document.getElementById(prefix + "Rendered");
      const rawEl = document.getElementById(prefix + "LatexRaw");
      const copyBtn = document.getElementById(prefix + "CopyBtn");
      if (!sel) return;

      function renderTemplate(idx) {
        const t = PROOF_TEMPLATES[idx] || PROOF_TEMPLATES[0];
        stepsEl.innerHTML = t.steps.map(s => `
          <label class="proof-check-item">
            <input type="checkbox">
            <span>${s}</span>
          </label>
        `).join("");
        trapEl.innerHTML = `<b>⚠️ Lưu ý tránh mất điểm:</b> ${t.trap}`;
        rawEl.textContent = t.latex;
        renderedEl.innerHTML = t.latex
          .replace(/\\textbf\{([^}]+)\}/g, "<b>$1</b>")
          .replace(/\\text\{([^}]+)\}/g, "$1")
          .replace(/\\bullet/g, "•")
          .replace(/\\blacksquare/g, "∎")
          .replace(/\n/g, "<br>");
        if (window.renderMathInElement) {
          renderMathInElement(renderedEl, {
            delimiters: [{left: "$$", right: "$$", display: true}, {left: "$", right: "$", display: false}],
            throwOnError: false
          });
        }
      }

      sel.addEventListener("change", () => renderTemplate(parseInt(sel.value, 10)));
      copyBtn?.addEventListener("click", () => {
        const t = PROOF_TEMPLATES[parseInt(sel.value, 10)] || PROOF_TEMPLATES[0];
        navigator.clipboard?.writeText(t.latex).then(() => {
          const old = copyBtn.textContent;
          copyBtn.textContent = "✓ Đã chép khung LaTeX!";
          setTimeout(() => (copyBtn.textContent = old), 1600);
        });
      });

      renderTemplate(0);
    }

    // Gắn Trợ lý Khung Chứng Minh vào đầu Tab 4 (Đối chiếu & Tra cứu)
    const tabCompare = document.getElementById("tab-compare");
    if (tabCompare && !document.getElementById("compareProofBox")) {
      const introP = tabCompare.querySelector("p.welcome-copy");
      if (introP) {
        const wrap = document.createElement("div");
        wrap.innerHTML = buildProofAssistantHTML("compareProof");
        introP.after(wrap.firstElementChild);
        bindProofAssistantEvents("compareProof");
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runAcademicBatch1);
  } else {
    runAcademicBatch1();
  }
})();

(function initAcademicSupportBatch2() {
  const BM_STORAGE_KEY = "ctds_bookmarks_v1";

  function runAcademicBatch2() {
    const labModal = document.getElementById("labModal");
    const labTabsBar = labModal?.querySelector(".lab-tabs");
    const labBody = labModal?.querySelector(".lab-body");
    if (!labTabsBar || !labBody) return;

    // ====================================================================
    // 1. GẮN ID ỔN ĐỊNH & NÚT "☆ LƯU ÔN THI" CHO MỌI THẺ KIẾN THỨC
    // ====================================================================
    let bookmarks = new Set();
    try {
      bookmarks = new Set(JSON.parse(localStorage.getItem(BM_STORAGE_KEY) || "[]"));
    } catch (_) {}

    function saveBookmarks() {
      try {
        localStorage.setItem(BM_STORAGE_KEY, JSON.stringify([...bookmarks]));
      } catch (_) {}
      updateNotebookCounter();
    }

    const allStudyCards = document.querySelectorAll("main.content .math-card.def:not(.cyclic-calculator), main.content .math-card.thm, #part-5 .ex-study-card");
    allStudyCards.forEach((card, idx) => {
      if (!card.id) {
        card.id = "ctds-card-" + idx;
      }
      const header = card.querySelector(".card-header") || card.querySelector(".ex-header-bar");
      if (!header || header.querySelector(".bm-star-btn")) return;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "bm-star-btn" + (bookmarks.has(card.id) ? " is-bookmarked" : "");
      btn.innerHTML = bookmarks.has(card.id) ? "★ Đã lưu ôn thi" : "☆ Lưu ôn thi";
      btn.title = "Lưu mục này vào Sổ tay Đề cương Ôn thi cá nhân";

      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (bookmarks.has(card.id)) {
          bookmarks.delete(card.id);
          btn.classList.remove("is-bookmarked");
          btn.innerHTML = "☆ Lưu ôn thi";
        } else {
          bookmarks.add(card.id);
          btn.classList.add("is-bookmarked");
          btn.innerHTML = "★ Đã lưu ôn thi";
        }
        saveBookmarks();
      });

      const tagSpan = header.querySelector(".tag");
      if (tagSpan) {
        tagSpan.after(btn);
      } else {
        header.appendChild(btn);
      }
    });

    // ====================================================================
    // 2. THÊM 3 TAB MỚI VÀO PHÒNG LAB: "🔄 HOÁN VỊ Sn", "🔗 ĐỒNG CẤU" & "⭐ SỔ TAY ÔN THI"
    // ====================================================================
    if (!document.getElementById("labTabPerm")) {
      const btnPerm = document.createElement("button");
      btnPerm.className = "lab-tab";
      btnPerm.setAttribute("role", "tab");
      btnPerm.id = "labTabPerm";
      btnPerm.setAttribute("aria-controls", "labPanePerm");
      btnPerm.setAttribute("aria-selected", "false");
      btnPerm.dataset.labTab = "perm";
      btnPerm.innerHTML = "🔄 Hoán vị Sₙ";

      const btnHomo = document.createElement("button");
      btnHomo.className = "lab-tab";
      btnHomo.setAttribute("role", "tab");
      btnHomo.id = "labTabHomo";
      btnHomo.setAttribute("aria-controls", "labPaneHomo");
      btnHomo.setAttribute("aria-selected", "false");
      btnHomo.dataset.labTab = "homo";
      btnHomo.innerHTML = "🔗 Đồng cấu &amp; Đẳng cấu I";

      const btnNotebook = document.createElement("button");
      btnNotebook.className = "lab-tab";
      btnNotebook.setAttribute("role", "tab");
      btnNotebook.id = "labTabNotebook";
      btnNotebook.setAttribute("aria-controls", "labPaneNotebook");
      btnNotebook.setAttribute("aria-selected", "false");
      btnNotebook.dataset.labTab = "notebook";
      btnNotebook.innerHTML = `⭐ Sổ tay Ôn thi (<span id="bmTabCount">${bookmarks.size}</span>)`;

      labTabsBar.appendChild(btnPerm);
      labTabsBar.appendChild(btnHomo);
      labTabsBar.appendChild(btnNotebook);

      // Tạo Pane 5: Máy tính Hoán vị Sn & Phân tích Chu trình Độc lập
      const panePerm = document.createElement("section");
      panePerm.className = "lab-pane";
      panePerm.id = "labPanePerm";
      panePerm.setAttribute("role", "tabpanel");
      panePerm.setAttribute("aria-labelledby", "labTabPerm");
      panePerm.hidden = true;
      panePerm.innerHTML = `
        <p class="lab-intro">
          Nhập hai hoán vị <b>σ, τ ∈ Sₙ</b> dưới dạng tích các chu trình (ví dụ: <code>(1 2)(3 4)</code> và <code>(1 2 3)</code>). Máy tính tuân thủ nghiêm ngặt <b>quy ước đọc hợp thành từ phải sang trái</b> của giáo trình: <b>(στ)(x) = σ(τ(x))</b> (thực hiện τ trước, rồi đến σ).
        </p>
        <div class="perm-input-grid">
          <label>Bậc n (3–9)
            <input id="permLabN" type="number" min="3" max="9" value="4" inputmode="numeric">
          </label>
          <label>Hoán vị σ (bên trái)
            <input id="permLabSigma" type="text" value="(1 2)(3 4)" placeholder="VD: (1 2)(3 4)">
          </label>
          <label>Hoán vị τ (bên phải)
            <input id="permLabTau" type="text" value="(1 2 3)" placeholder="VD: (1 2 3)">
          </label>
          <button type="button" class="lab-btn primary" id="permLabCalcBtn">Tính &amp; Phân tích</button>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px;">
          <span style="font-size:12px; font-weight:700; color:var(--mute); align-self:center;">Mẫu chuẩn trong giáo trình:</span>
          <button type="button" class="lab-preset-chip perm-preset" data-n="3" data-s="(1 2)" data-t="(1 2 3)">S₃: σ=(1 2), τ=(1 2 3)</button>
          <button type="button" class="lab-preset-chip perm-preset active" data-n="4" data-s="(1 2)(3 4)" data-t="(1 2 3)">Bài 1.3 (S₄): σ=(1 2)(3 4), τ=(1 2 3)</button>
          <button type="button" class="lab-preset-chip perm-preset" data-n="4" data-s="(1 2 3 4)" data-t="(1 3)">D₈ ⊂ S₄: Quay r=(1 2 3 4), Lật s=(1 3)</button>
          <button type="button" class="lab-preset-chip perm-preset" data-n="5" data-s="(1 2 3 4 5)" data-t="(2 5)(3 4)">S₅: Chu trình bậc 5</button>
        </div>
        <div class="lab-verdict" id="permLabVerdict"></div>
        <div class="perm-results-grid" id="permLabResults"></div>
      `;

      // Tạo Pane Mô phỏng Đồng cấu Nhóm & Định lý Đẳng cấu I (G/ker φ ≅ im φ)
      const paneHomo = document.createElement("section");
      paneHomo.className = "lab-pane";
      paneHomo.id = "labPaneHomo";
      paneHomo.setAttribute("role", "tabpanel");
      paneHomo.setAttribute("aria-labelledby", "labTabHomo");
      paneHomo.hidden = true;
      paneHomo.innerHTML = `
        <p class="lab-intro">
          Khảo sát <b>Tính xác định tốt</b> (Well-definedness), <b>Bảo toàn phép toán</b>, tìm tường minh <b>Hạt nhân $\\ker\\varphi \\trianglelefteq G$</b>, <b>Tập ảnh $\\operatorname{im}\\varphi \\le K$</b>, các <b>thớ đồng cấu (lớp kề $g\\ker\\varphi$)</b> và dựng song ánh đẳng cấu $\\Phi: G/\\ker\\varphi \\xrightarrow{\\sim} \\operatorname{im}\\varphi$ theo <b>Định lý Đẳng cấu Thứ nhất</b> (Chương 5 &amp; Chương 8).
        </p>
        <div class="homo-controls-bar">
          <label>Họ ánh xạ khảo sát
            <select id="homoLabMode">
              <option value="zn" selected>φ : (ℤ/mℤ, +) → (ℤ/nℤ, +), [x]ₘ ↦ [k·x + c]ₙ</option>
              <option value="un">ψ : (U(m), ·) → (U(m), ·), [x]ₘ ↦ [xᵏ]ₘ (Lũy thừa)</option>
              <option value="sgn">sgn : (Sₘ, ∘) → ({±1}, ·), σ ↦ sgn(σ) (Ánh xạ dấu)</option>
            </select>
          </label>
          <label id="homoWrapM">Môđun / Bậc m
            <input id="homoLabM" type="number" min="2" max="24" value="12" inputmode="numeric">
          </label>
          <label id="homoWrapN">Môđun đích n
            <input id="homoLabN" type="number" min="2" max="24" value="4" inputmode="numeric">
          </label>
          <label id="homoWrapK">Hệ số / Mũ k
            <input id="homoLabK" type="number" min="0" max="23" value="1" inputmode="numeric">
          </label>
          <label id="homoWrapC">Độ dịch c
            <input id="homoLabC" type="number" min="0" max="11" value="0" inputmode="numeric">
          </label>
          <button type="button" class="lab-btn primary" id="homoLabRunBtn">Phân tích φ</button>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:14px;">
          <span style="font-size:12px; font-weight:700; color:var(--mute); align-self:center;">Mẫu kinh điển trong Giáo trình:</span>
          <button type="button" class="lab-preset-chip homo-preset active" data-mode="zn" data-m="12" data-n="4" data-k="1" data-c="0">Toàn cấu chuẩn: ℤ/12ℤ → ℤ/4ℤ ([x] ↦ [x])</button>
          <button type="button" class="lab-preset-chip homo-preset" data-mode="zn" data-m="12" data-n="8" data-k="2" data-c="0">Nhân hệ số: ℤ/12ℤ → ℤ/8ℤ ([x] ↦ [2x])</button>
          <button type="button" class="lab-preset-chip homo-preset" data-mode="zn" data-m="10" data-n="10" data-k="3" data-c="0">Đẳng cấu (Bài 0.13): ℤ/10ℤ → ℤ/10ℤ ([x] ↦ [3x])</button>
          <button type="button" class="lab-preset-chip homo-preset" data-mode="zn" data-m="3" data-n="2" data-k="1" data-c="0">⚠️ Bẫy KHÔNG xác định tốt (PV 0.16): ℤ/3ℤ → ℤ/2ℤ</button>
          <button type="button" class="lab-preset-chip homo-preset" data-mode="zn" data-m="6" data-n="6" data-k="1" data-c="1">⚠️ Bẫy KHÔNG đồng cấu (Bài 5.1c): [x]₆ ↦ [x+1]₆</button>
          <button type="button" class="lab-preset-chip homo-preset" data-mode="un" data-m="12" data-n="12" data-k="2" data-c="0">Bình phương trên U(12): [x] ↦ [x²]</button>
          <button type="button" class="lab-preset-chip homo-preset" data-mode="sgn" data-m="3" data-n="2" data-k="1" data-c="0">Đồng cấu dấu: sgn : S₃ → {±1} (ker = A₃)</button>
        </div>
        <div class="lab-badges" id="homoLabBadges"></div>
        <div class="lab-verdict" id="homoLabVerdict"></div>
        <div class="perm-results-grid" id="homoLabCards"></div>
      `;

      // Tạo Pane 6: Sổ tay Đánh dấu Ôn thi & Vở nháp Cá nhân
      const paneNotebook = document.createElement("section");
      paneNotebook.className = "lab-pane";
      paneNotebook.id = "labPaneNotebook";
      paneNotebook.setAttribute("role", "tabpanel");
      paneNotebook.setAttribute("aria-labelledby", "labTabNotebook");
      paneNotebook.hidden = true;
      paneNotebook.innerHTML = `
        <div class="quiz-header-bar">
          <div>
            <strong style="color:var(--brand); font-size:15px;">⭐ Sổ Tay Ôn Thi &amp; Tổng Hợp Vở Nháp LaTeX Cá Nhân</strong>
            <div style="font-size:12.5px; color:var(--mute); margin-top:2px;">Tự động gom toàn bộ Định nghĩa, Định lý, Bài tập bạn đã bấm "★ Lưu ôn thi" và các bài tập có ghi chú Vở nháp.</div>
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:8px;">
            <button type="button" class="lab-btn primary" id="nbExportMdBtn">📥 Tải Đề Cương (.md / LaTeX)</button>
            <button type="button" class="lab-btn" id="nbClearAllBtn" style="color:var(--warn-color);">🗑️ Xóa danh sách lưu</button>
          </div>
        </div>
        <div id="notebookContentList"></div>
      `;

      labBody.appendChild(panePerm);
      labBody.appendChild(paneHomo);
      labBody.appendChild(paneNotebook);

      // Đồng bộ chuyển Tab cho toàn bộ các Tab trong Phòng LAB
      const allTabs = labTabsBar.querySelectorAll("[data-lab-tab]");
      allTabs.forEach(tabBtn => {
        tabBtn.addEventListener("click", () => {
          const target = tabBtn.dataset.labTab;
          allTabs.forEach(t => t.setAttribute("aria-selected", String(t.dataset.labTab === target)));
          labBody.querySelectorAll(".lab-pane").forEach(p => {
            p.hidden = (p.id !== "labPane" + target.charAt(0).toUpperCase() + target.slice(1));
          });
          if (target === "perm") runPermutationCalculator();
          if (target === "notebook") renderNotebookPane();
          if (target === "homo") runHomomorphismSimulator();
        });
      });

      // Hàm toàn cục mở nhanh một Tab bất kỳ trong Phòng LAB (dùng cho nút ở Chương 5)
      window.openLabTab = function(tabName) {
        const openBtn = document.getElementById("btnAlgebraLab");
        if (openBtn && !labModal.classList.contains("open")) {
          openBtn.click();
        }
        const targetBtn = labTabsBar.querySelector(`[data-lab-tab="${tabName}"]`);
        if (targetBtn) targetBtn.click();
      };

      // ==================================================================
      // THUẬT TOÁN MÁY TÍNH HOÁN VỊ Sn (QUY ƯỚC PHẢI SANG TRÁI)
      // ==================================================================
      const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
      const lcm = (a, b) => (a && b) ? Math.abs((a / gcd(a, b)) * b) : 0;

      function parsePermutation(str, n) {
        const id = Array.from({ length: n + 1 }, (_, i) => i);
        const clean = (str || "").trim().toLowerCase();
        if (!clean || clean === "id" || clean === "e" || clean === "(1)") return id;

        const matches = [...clean.matchAll(/\(([^)]+)\)/g)];
        if (!matches.length) return id;

        let res = id.slice();
        for (let m = matches.length - 1; m >= 0; m--) {
          const nums = matches[m][1]
            .trim()
            .split(/[\s,]+/)
            .map(x => parseInt(x, 10))
            .filter(x => Number.isFinite(x) && x >= 1 && x <= n);

          if (nums.length >= 2) {
            const cyc = Array.from({ length: n + 1 }, (_, i) => i);
            for (let k = 0; k < nums.length; k++) {
              const from = nums[k];
              const to = nums[(k + 1) % nums.length];
              cyc[from] = to;
            }
            const nextRes = Array.from({ length: n + 1 }, (_, i) => cyc[res[i]]);
            res = nextRes;
          }
        }
        return res;
      }

      function composePerm(pLeft, pRight, n) {
        return Array.from({ length: n + 1 }, (_, x) => (x === 0 ? 0 : pLeft[pRight[x]]));
      }

      function invertPerm(p, n) {
        const inv = Array.from({ length: n + 1 }, () => 0);
        for (let x = 1; x <= n; x++) inv[p[x]] = x;
        return inv;
      }

      function analyzePerm(p, n) {
        const visited = new Array(n + 1).fill(false);
        const cycles = [];
        let order = 1;
        let transCount = 0;

        for (let i = 1; i <= n; i++) {
          if (!visited[i]) {
            const cyc = [];
            let cur = i;
            while (!visited[cur]) {
              visited[cur] = true;
              cyc.push(cur);
              cur = p[cur];
            }
            if (cyc.length > 1) {
              cycles.push(cyc);
              order = lcm(order, cyc.length);
              transCount += cyc.length - 1;
            }
          }
        }

        const cycleStr = cycles.length
          ? cycles.map(c => `(${c.join(" ")})`).join("")
          : "id (đồng nhất)";

        const transList = [];
        cycles.forEach(c => {
          for (let k = c.length - 1; k >= 1; k--) {
            transList.push(`(${c[0]} ${c[k]})`);
          }
        });

        const sgn = transCount % 2 === 0 ? 1 : -1;
        return {
          cycles,
          cycleStr,
          order,
          sgn,
          parityText: sgn === 1 ? "Hoán vị CHẴN (∈ Aₙ)" : "Hoán vị LẺ (∉ Aₙ)",
          transStr: transList.length ? transList.join("") : "id (0 chuyển vị)"
        };
      }

      function renderTwoRowHTML(p, n) {
        let top = "", bot = "";
        for (let i = 1; i <= n; i++) {
          top += `<span>${i}</span>`;
          bot += `<span>${p[i]}</span>`;
        }
        return `<div class="perm-two-row"><div>${top}</div><div>${bot}</div></div>`;
      }

      function runPermutationCalculator() {
        const nInp = document.getElementById("permLabN");
        let n = parseInt(nInp.value, 10);
        if (!Number.isFinite(n)) n = 4;
        n = Math.min(9, Math.max(3, n));
        nInp.value = n;

        const sStr = document.getElementById("permLabSigma").value;
        const tStr = document.getElementById("permLabTau").value;

        const sigma = parsePermutation(sStr, n);
        const tau = parsePermutation(tStr, n);
        const st = composePerm(sigma, tau, n);
        const ts = composePerm(tau, sigma, n);
        const sigmaInv = invertPerm(sigma, n);
        const conj = composePerm(composePerm(sigma, tau, n), sigmaInv, n);

        const infoS = analyzePerm(sigma, n);
        const infoT = analyzePerm(tau, n);
        const infoST = analyzePerm(st, n);
        const infoTS = analyzePerm(ts, n);
        const infoInvS = analyzePerm(sigmaInv, n);
        const infoConj = analyzePerm(conj, n);

        const commFlag = infoST.cycleStr === infoTS.cycleStr;
        document.getElementById("permLabVerdict").innerHTML = `
          <b>⚡ Kết quả hợp thành từ phải sang trái trong S<sub>${n}</sub>:</b>
          <code>στ = ${infoST.cycleStr}</code> &nbsp;trong khi&nbsp; <code>τσ = ${infoTS.cycleStr}</code>
          ⇒ Hai hoán vị σ và τ <b>${commFlag ? "GIAO HOÁN (στ = τσ)" : "KHÔNG GIAO HOÁN (στ ≠ τσ)"}</b>!
        `;

        let traceChips = "";
        for (let x = 1; x <= n; x++) {
          const tx = tau[x];
          const stx = sigma[tx];
          traceChips += `<span class="perm-trace-chip">${x} <small>↦(τ)</small> ${tx} <small>↦(σ)</small> <b>${stx}</b></span>`;
        }

        document.getElementById("permLabResults").innerHTML = `
          <div class="perm-card">
            <h4><span>1️⃣ Tích thuận στ = σ ∘ τ</span> <span style="color:var(--ex-color);">Cấp ${infoST.order}</span></h4>
            <div style="font-size:15px; font-weight:800; font-family:var(--font-mono); color:var(--brand); margin-bottom:4px;">
              στ = ${infoST.cycleStr}
            </div>
            ${renderTwoRowHTML(st, n)}
            <div style="font-size:12px; color:var(--ink-soft); margin-top:4px;">
              • Dấu: <b>sgn(στ) = ${infoST.sgn > 0 ? "+1" : "-1"}</b> (${infoST.parityText})<br>
              • <b>Vết tác động (τ trước, σ sau):</b>
            </div>
            <div class="perm-trace-list">${traceChips}</div>
          </div>

          <div class="perm-card">
            <h4><span>2️⃣ Tích ngược τσ = τ ∘ σ</span> <span style="color:var(--cor-color);">Cấp ${infoTS.order}</span></h4>
            <div style="font-size:15px; font-weight:800; font-family:var(--font-mono); color:var(--cor-color); margin-bottom:4px;">
              τσ = ${infoTS.cycleStr}
            </div>
            ${renderTwoRowHTML(ts, n)}
            <div style="font-size:12px; color:var(--ink-soft); margin-top:6px;">
              • Liên hợp (Chương 4): <b>στσ⁻¹ = <code>${infoConj.cycleStr}</code></b> (cùng kiểu chu trình &amp; cùng cấp ${infoConj.order} với τ!).<br>
              • Nghịch đảo: <b>σ⁻¹ = <code>${infoInvS.cycleStr}</code></b>
            </div>
          </div>

          <div class="perm-card">
            <h4><span>3️⃣ Phân tích riêng σ và τ</span> <span>Chu trình rời nhau</span></h4>
            <div style="font-size:12.5px; line-height:1.68; color:var(--ink);">
              • <b>σ = <code>${infoS.cycleStr}</code></b>: cấp <b>${infoS.order}</b>, sgn = <b>${infoS.sgn > 0 ? "+1" : "-1"}</b><br>
              &nbsp;&nbsp;<small style="color:var(--mute);">Chuyển vị: ${infoS.transStr}</small><br>
              • <b>τ = <code>${infoT.cycleStr}</code></b>: cấp <b>${infoT.order}</b>, sgn = <b>${infoT.sgn > 0 ? "+1" : "-1"}</b><br>
              &nbsp;&nbsp;<small style="color:var(--mute);">Chuyển vị: ${infoT.transStr}</small>
            </div>
          </div>
        `;
      }

      // ==================================================================
      // THUẬT TOÁN MÔ PHỎNG ĐỒNG CẤU & ĐỊNH LÝ ĐẲNG CẤU I
      // ==================================================================
      function modPos(a, n) {
        return ((a % n) + n) % n;
      }

      function modPow(base, exp, mod) {
        let res = 1 % mod;
        let b = modPos(base, mod);
        let e = Math.max(0, exp);
        while (e > 0) {
          if (e & 1) res = (res * b) % mod;
          b = (b * b) % mod;
          e >>= 1;
        }
        return res;
      }

      function runHomomorphismSimulator() {
        const modeEl = document.getElementById("homoLabMode");
        const mInp = document.getElementById("homoLabM");
        const nInp = document.getElementById("homoLabN");
        const kInp = document.getElementById("homoLabK");
        const cInp = document.getElementById("homoLabC");
        const outBadges = document.getElementById("homoLabBadges");
        const outVerdict = document.getElementById("homoLabVerdict");
        const outCards = document.getElementById("homoLabCards");

        if (!outVerdict || !outCards) return;

        const mode = modeEl ? modeEl.value : "zn";
        let m = parseInt(mInp?.value || "12", 10);
        let n = parseInt(nInp?.value || "4", 10);
        let k = parseInt(kInp?.value || "1", 10);
        let c = parseInt(cInp?.value || "0", 10);

        if (!Number.isFinite(m) || m < 2) m = 12;
        if (!Number.isFinite(n) || n < 2) n = 4;
        if (!Number.isFinite(k) || k < 0) k = 1;
        if (!Number.isFinite(c) || c < 0) c = 0;

        // Ẩn/hiện các ô input theo chế độ
        const wrapN = document.getElementById("homoWrapN");
        const wrapK = document.getElementById("homoWrapK");
        const wrapC = document.getElementById("homoWrapC");
        if (wrapN) wrapN.style.display = mode === "zn" ? "" : "none";
        if (wrapK) wrapK.style.display = mode === "sgn" ? "none" : "";
        if (wrapC) wrapC.style.display = mode === "zn" ? "" : "none";

        if (mode === "zn") {
          m = Math.min(24, Math.max(2, m));
          n = Math.min(24, Math.max(2, n));
          if (mInp) mInp.value = m;
          if (nInp) nInp.value = n;

          // Kiểm tra tính xác định tốt: k*m chia hết cho n
          const wellDefined = (k * m) % n === 0;
          const fn = (x) => modPos(k * x + c, n);

          // Kiểm tra bảo toàn phép toán: fn((a+b)%m) == (fn(a)+fn(b))%n
          let isHomo = wellDefined && (modPos(c, n) === 0);
          let counterEx = null;
          if (wellDefined) {
            for (let a = 0; a < m; a++) {
              for (let b = 0; b < m; b++) {
                const lhs = fn((a + b) % m);
                const rhs = modPos(fn(a) + fn(b), n);
                if (lhs !== rhs) {
                  isHomo = false;
                  counterEx = { a, b, lhs, rhs };
                  break;
                }
              }
              if (counterEx) break;
            }
          }

          if (!wellDefined) {
            const x1 = 0, x2 = m;
            const y1 = modPos(k * x1 + c, n);
            const y2 = modPos(k * x2 + c, n);
            if (outBadges) {
              outBadges.innerHTML = `<span class="lab-badge warn">✗ KHÔNG xác định tốt</span>`;
            }
            outVerdict.innerHTML = `
              <b>⚠️ Bẫy logic (Phản ví dụ 0.16):</b> Quy tắc $[x]_{${m}} \\mapsto [${k}x + ${c}]_{${n}}$ <b>KHÔNG xác định tốt (ill-defined)</b> vì $k \\cdot m = ${k}\\cdot ${m} = ${k * m} \\not\\equiv 0 \\pmod{${n}}$.<br>
              • Cụ thể: $[${x1}]_{${m}} = [${x2}]_{${m}}$ trong $\\mathbb{Z}/${m}\\mathbb{Z}$, nhưng công thức cho $[${y1}]_{${n}} \\neq [${y2}]_{${n}}$ trong $\\mathbb{Z}/${n}\\mathbb{Z}$!
            `;
            outCards.innerHTML = "";
          } else if (!isHomo) {
            if (outBadges) {
              outBadges.innerHTML = `
                <span class="lab-badge ok">✓ Xác định tốt</span>
                <span class="lab-badge warn">✗ KHÔNG bảo toàn phép toán</span>
              `;
            }
            outVerdict.innerHTML = `
              <b>⚠️ Ánh xạ xác định tốt nhưng KHÔNG phải đồng cấu nhóm:</b> Do hằng số dịch $c = ${c} \\not\\equiv 0 \\pmod{${n}}$, nên $\\varphi([0]_{${m}}) = [${modPos(c, n)}]_{${n}} \\neq [0]_{${n}}$.<br>
              • Phản ví dụ: $\\varphi([${counterEx.a}]_{${m}} + [${counterEx.b}]_{${m}}) = [${counterEx.lhs}]_{${n}} \\neq \\varphi([${counterEx.a}]_{${m}}) + \\varphi([${counterEx.b}]_{${m}}) = [${counterEx.rhs}]_{${n}}$.
            `;
            outCards.innerHTML = "";
          } else {
            const ker = [];
            const imSet = new Set();
            const fibers = new Map();
            for (let x = 0; x < m; x++) {
              const y = fn(x);
              imSet.add(y);
              if (y === 0) ker.push(x);
              if (!fibers.has(y)) fibers.set(y, []);
              fibers.get(y).push(x);
            }
            const im = [...imSet].sort((a, b) => a - b);
            const isMono = ker.length === 1;
            const isEpi = im.length === n;
            const isIso = isMono && isEpi;

            if (outBadges) {
              outBadges.innerHTML = `
                <span class="lab-badge ok">✓ Xác định tốt ($${n} \\mid ${k}\\cdot ${m}$)</span>
                <span class="lab-badge ok">✓ Đồng cấu nhóm</span>
                <span class="lab-badge ${isMono ? "ok" : ""}">${isMono ? "✓ Đơn cấu" : "Không đơn cấu"} ($|\\ker\\varphi|=${ker.length}$)</span>
                <span class="lab-badge ${isEpi ? "ok" : ""}">${isEpi ? "✓ Toàn cấu" : "Không toàn cấu"} ($|\\operatorname{im}\\varphi|=${im.length}$)</span>
                ${isIso ? `<span class="lab-badge ok">🌟 ĐẲNG CẤU NHÓM</span>` : ""}
              `;
            }

            outVerdict.innerHTML = `
              <b>✓ Định lý Đẳng cấu I:</b> $\\varphi: \\mathbb{Z}/${m}\\mathbb{Z} \\to \\mathbb{Z}/${n}\\mathbb{Z},\\ [x]_{${m}} \\mapsto [${k}x]_{${n}}$ là đồng cấu nhóm với
              $|G/\\ker\\varphi| = ${m}/${ker.length} = ${m / ker.length} = |\\operatorname{im}\\varphi|$, cảm sinh đẳng cấu
              $$\\Phi: (\\mathbb{Z}/${m}\\mathbb{Z})/\\ker\\varphi \\xrightarrow{\\sim} \\operatorname{im}\\varphi \\le \\mathbb{Z}/${n}\\mathbb{Z}.$$
            `;

            let fiberRows = "";
            im.forEach(y => {
              const coset = fibers.get(y).map(v => `[${v}]_{${m}}`).join(", ");
              const rep = fibers.get(y)[0];
              fiberRows += `
                <tr>
                  <td><b>$[${rep}]_{${m}} + \\ker\\varphi$</b> = $\\{${coset}\\}$</td>
                  <td><span class="homo-fiber-arrow">↦ $[${y}]_{${n}}$</span></td>
                </tr>
              `;
            });

            outCards.innerHTML = `
              <div class="perm-card">
                <h4><span>1️⃣ Hạt nhân $\\ker\\varphi \\trianglelefteq \\mathbb{Z}/${m}\\mathbb{Z}$</span> <span>Cấp ${ker.length}</span></h4>
                <div style="font-size:13.5px; line-height:1.7;">
                  $$\\ker\\varphi = \\{ ${ker.map(x => `[${x}]_{${m}}`).join(", ")} \\}$$
                  • Là nhóm con chuẩn tắc sinh bởi $[${ker[1] ?? 0}]_{${m}}$.
                </div>
              </div>
              <div class="perm-card">
                <h4><span>2️⃣ Tập ảnh $\\operatorname{im}\\varphi \\le \\mathbb{Z}/${n}\\mathbb{Z}$</span> <span>Cấp ${im.length}</span></h4>
                <div style="font-size:13.5px; line-height:1.7;">
                  $$\\operatorname{im}\\varphi = \\{ ${im.map(y => `[${y}]_{${n}}`).join(", ")} \\}$$
                  • Chỉ số $[\\mathbb{Z}/${m}\\mathbb{Z} : \\ker\\varphi] = ${m / ker.length} = |\\operatorname{im}\\varphi|$.
                </div>
              </div>
              <div class="perm-card" style="grid-column: 1 / -1;">
                <h4><span>3️⃣ Song ánh Đẳng cấu $\\Phi: G/\\ker\\varphi \\xrightarrow{\\sim} \\operatorname{im}\\varphi$</span> <span>Phân hoạch thành ${im.length} thớ (lớp kề)</span></h4>
                <table class="homo-fiber-table">
                  <thead>
                    <tr>
                      <th>Lớp kề trong nhóm thương $(\\mathbb{Z}/${m}\\mathbb{Z})/\\ker\\varphi$ (Thớ $\\varphi^{-1}([y]_{${n}})$)</th>
                      <th>Ảnh đẳng cấu $\\Phi$ trong $\\operatorname{im}\\varphi$</th>
                    </tr>
                  </thead>
                  <tbody>${fiberRows}</tbody>
                </table>
              </div>
            `;
          }
        } else if (mode === "un") {
          m = Math.min(24, Math.max(3, m));
          if (mInp) mInp.value = m;
          const units = [];
          for (let x = 1; x < m; x++) {
            if (gcd(x, m) === 1) units.push(x);
          }
          const ker = [];
          const fibers = new Map();
          units.forEach(x => {
            const y = modPow(x, k, m);
            if (y === 1) ker.push(x);
            if (!fibers.has(y)) fibers.set(y, []);
            fibers.get(y).push(x);
          });
          const im = [...fibers.keys()].sort((a, b) => a - b);

          if (outBadges) {
            outBadges.innerHTML = `
              <span class="lab-badge ok">✓ Đồng cấu lũy thừa trên $U(${m})$</span>
              <span class="lab-badge">$|U(${m})| = \\varphi(${m}) = ${units.length}$</span>
              <span class="lab-badge">$|\\ker\\psi| = ${ker.length}$</span>
              <span class="lab-badge">$|\\operatorname{im}\\psi| = ${im.length}$</span>
            `;
          }
          outVerdict.innerHTML = `
            <b>✓ Đồng cấu lũy thừa bậc $k=${k}$ trên nhóm Abel nhân $U(${m})$:</b>
            $\\psi([x]_{${m}}) = [x^{${k}}]_{${m}}$ luôn là đồng cấu vì $(xy)^k = x^k y^k$.
            Định lý Đẳng cấu I cho $U(${m})/\\ker\\psi \\cong \\operatorname{im}\\psi$ với $|U(${m})/\\ker\\psi| = ${units.length}/${ker.length} = ${im.length}$.
          `;

          let fiberRows = "";
          im.forEach(y => {
            const coset = fibers.get(y).map(v => `[${v}]`).join(", ");
            fiberRows += `<tr><td>$\\{${coset}\\}$</td><td><span class="homo-fiber-arrow">↦ $[${y}]_{${m}}$</span></td></tr>`;
          });

          outCards.innerHTML = `
            <div class="perm-card">
              <h4><span>1️⃣ Hạt nhân $\\ker\\psi$</span> <span>Cấp ${ker.length}</span></h4>
              <div>$$\\ker\\psi = \\{ ${ker.map(x => `[${x}]`).join(", ")} \\}$$</div>
            </div>
            <div class="perm-card">
              <h4><span>2️⃣ Tập ảnh $\\operatorname{im}\\psi$</span> <span>Cấp ${im.length}</span></h4>
              <div>$$\\operatorname{im}\\psi = \\{ ${im.map(y => `[${y}]`).join(", ")} \\}$$</div>
            </div>
            <div class="perm-card" style="grid-column: 1 / -1;">
              <h4><span>3️⃣ Bảng phân hoạch lớp kề $U(${m})/\\ker\\psi \\xrightarrow{\\sim} \\operatorname{im}\\psi$</span></h4>
              <table class="homo-fiber-table">
                <thead><tr><th>Lớp kề $x\\ker\\psi$</th><th>Ảnh $[x^{${k}}]_{${m}}$</th></tr></thead>
                <tbody>${fiberRows}</tbody>
              </table>
            </div>
          `;
        } else {
          // mode === "sgn"
          m = Math.min(5, Math.max(3, m));
          if (mInp) mInp.value = m;
          let fact = 1;
          for (let i = 2; i <= m; i++) fact *= i;
          const half = fact / 2;

          if (outBadges) {
            outBadges.innerHTML = `
              <span class="lab-badge ok">✓ Toàn cấu dấu $\\operatorname{sgn}: S_{${m}} \\twoheadrightarrow \\{\\pm 1\\}$</span>
              <span class="lab-badge ok">$\\ker(\\operatorname{sgn}) = A_{${m}}$ (Cấp ${half})</span>
              <span class="lab-badge ok">$S_{${m}}/A_{${m}} \\cong \\{\\pm 1\\} \\cong \\mathbb{Z}_2$</span>
            `;
          }
          outVerdict.innerHTML = `
            <b>✓ Định lý Đẳng cấu I cho ánh xạ dấu:</b> $\\operatorname{sgn}: S_{${m}} \\to (\\{\\pm 1\\}, \\cdot)$ là toàn cấu với hạt nhân chính là <b>nhóm thay phiên $A_{${m}}$</b> gồm ${half} hoán vị chẵn. Do đó $A_{${m}} \\trianglelefteq S_{${m}}$ và $S_{${m}}/A_{${m}} \\cong \\{\\pm 1\\}$.
          `;
          outCards.innerHTML = `
            <div class="perm-card">
              <h4><span>1️⃣ Thớ hoán vị chẵn $\\ker(\\operatorname{sgn}) = A_{${m}}$</span> <span>${half} phần tử</span></h4>
              <div>Lớp kề đơn vị $A_{${m}} \\mapsto +1$ (Mọi hoán vị phân tích được thành một số <b>chẵn</b> các chuyển vị).</div>
            </div>
            <div class="perm-card">
              <h4><span>2️⃣ Thớ hoán vị lẻ $(1\\ 2)A_{${m}}$</span> <span>${half} phần tử</span></h4>
              <div>Lớp kề $(1\\ 2)A_{${m}} \\mapsto -1$ (Mọi hoán vị phân tích được thành một số <b>lẻ</b> các chuyển vị).</div>
            </div>
          `;
        }

        if (window.renderMathInElement) {
          window.renderMathInElement(paneHomo, {
            delimiters: [
              { left: "$$", right: "$$", display: true },
              { left: "$", right: "$", display: false }
            ],
            throwOnError: false
          });
        }
      }

      document.getElementById("permLabCalcBtn")?.addEventListener("click", runPermutationCalculator);
      panePerm.querySelectorAll(".perm-preset").forEach(btn => {
        btn.addEventListener("click", () => {
          panePerm.querySelectorAll(".perm-preset").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          document.getElementById("permLabN").value = btn.dataset.n;
          document.getElementById("permLabSigma").value = btn.dataset.s;
          document.getElementById("permLabTau").value = btn.dataset.t;
          runPermutationCalculator();
        });
      });

      document.getElementById("homoLabRunBtn")?.addEventListener("click", runHomomorphismSimulator);
      document.getElementById("homoLabMode")?.addEventListener("change", runHomomorphismSimulator);
      paneHomo.querySelectorAll(".homo-preset").forEach(btn => {
        btn.addEventListener("click", () => {
          paneHomo.querySelectorAll(".homo-preset").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          document.getElementById("homoLabMode").value = btn.dataset.mode || "zn";
          document.getElementById("homoLabM").value = btn.dataset.m || "12";
          document.getElementById("homoLabN").value = btn.dataset.n || "4";
          document.getElementById("homoLabK").value = btn.dataset.k || "1";
          document.getElementById("homoLabC").value = btn.dataset.c || "0";
          runHomomorphismSimulator();
        });
      });

      runPermutationCalculator();
      runHomomorphismSimulator();
    }

    // ====================================================================
    // 3. LOGIC SỔ TAY ÔN THI & XUẤT ĐỀ CƯƠNG CÁ NHÂN
    // ====================================================================
    function updateNotebookCounter() {
      const cntEl = document.getElementById("bmTabCount");
      if (cntEl) cntEl.textContent = bookmarks.size;
    }

    function renderNotebookPane() {
      const listEl = document.getElementById("notebookContentList");
      if (!listEl) return;

      const items = [];
      bookmarks.forEach(cardId => {
        const el = document.getElementById(cardId);
        if (!el) return;
        const ch = el.closest(".chapter-content");
        const chTitle = ch?.querySelector("h2.section-title")?.childNodes[0]?.textContent?.trim() || "Giáo trình";
        const label = el.querySelector(".card-header .label")?.textContent.trim()
          || el.querySelector(".ex-title-label")?.textContent.trim()
          || "Mục đã lưu";
        const tag = el.querySelector(".card-header .tag")?.textContent.trim() || "";
        const bodyHTML = el.querySelector(".card-body")?.innerHTML
          || el.querySelector(".ex-problem-statement")?.innerHTML
          || "";
        items.push({ id: cardId, chTitle, label, tag, bodyHTML, el });
      });

      // Tìm thêm các bài tập có viết Vở nháp LaTeX
      const scratchItems = [];
      document.querySelectorAll("#part-5 .ex-study-card").forEach(card => {
        const note = localStorage.getItem("ctds_scratch_" + card.id);
        if (note && note.trim()) {
          const title = card.querySelector(".ex-title-label")?.textContent.trim() || card.id;
          scratchItems.push({ id: card.id, title, note: note.trim(), el: card });
        }
      });

      if (items.length === 0 && scratchItems.length === 0) {
        listEl.innerHTML = `
          <div style="text-align:center; padding:32px 20px; border:1.5px dashed var(--line); border-radius:14px; color:var(--mute);">
            <div style="font-size:28px; margin-bottom:8px;">⭐</div>
            <b>Sổ tay Ôn thi của bạn đang trống!</b>
            <p style="font-size:13.5px; margin:6px auto 0; max-width:520px;">
              Hãy bấm nút <b>"☆ Lưu ôn thi"</b> ở góc phải của bất kỳ thẻ Định nghĩa, Định lý hoặc Bài tập nào trong lúc đọc giáo trình để gom chúng về đây thành đề cương ôn tập trước kỳ thi.
            </p>
          </div>
        `;
        return;
      }

      let html = "";
      if (items.length > 0) {
        html += `<h3 style="font-size:14px; color:var(--brand); text-transform:uppercase; margin:8px 0 10px;">📌 Các Định nghĩa, Định lý &amp; Bài tập đã đánh dấu (${items.length})</h3>`;
        html += items.map(it => `
          <div class="notebook-item-card">
            <div class="notebook-item-head">
              <div>
                <span style="font-size:11.5px; font-weight:800; color:var(--thm-color); background:var(--thm-bg); padding:2px 8px; border-radius:6px; margin-right:6px;">${it.chTitle}</span>
                <strong style="font-size:14.5px; color:var(--ink);">${it.label}${it.tag ? " — " + it.tag : ""}</strong>
              </div>
              <button type="button" class="scratch-sym-btn" data-goto-card="${it.id}">📖 Mở tại chương</button>
            </div>
            <div style="font-size:14px; line-height:1.7; color:var(--ink-soft);">${it.bodyHTML}</div>
          </div>
        `).join("");
      }

      if (scratchItems.length > 0) {
        html += `<h3 style="font-size:14px; color:var(--ex-color); text-transform:uppercase; margin:18px 0 10px;">✍️ Các Bài Tập Đã Viết Vở Nháp LaTeX (${scratchItems.length})</h3>`;
        html += scratchItems.map(sc => `
          <div class="notebook-item-card" style="border-left-color:var(--ex-color);">
            <div class="notebook-item-head">
              <strong style="font-size:14px; color:var(--ex-color);">${sc.title}</strong>
              <button type="button" class="scratch-sym-btn" data-goto-card="${sc.id}">✍️ Mở bài tập</button>
            </div>
            <div style="font-size:14px; line-height:1.7; background:var(--eq-bg); padding:10px 12px; border-radius:8px;">${sc.note.replace(/\n/g, "<br>")}</div>
          </div>
        `).join("");
      }

      listEl.innerHTML = html;
      if (window.renderMathInElement) {
        renderMathInElement(listEl, {
          delimiters: [{left: "$$", right: "$$", display: true}, {left: "$", right: "$", display: false}],
          throwOnError: false
        });
      }

      listEl.querySelectorAll("[data-goto-card]").forEach(btn => {
        btn.addEventListener("click", () => {
          const targetEl = document.getElementById(btn.getAttribute("data-goto-card"));
          if (!targetEl) return;
          const chapter = targetEl.closest(".chapter-content");
          const part = targetEl.closest(".part-panel");
          document.getElementById("labClose")?.click();
          if (part && window.switchPart) window.switchPart(part.id, false);
          if (part && chapter && window.switchChapter) window.switchChapter(part.id, chapter.id, false);
          setTimeout(() => {
            targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 150);
        });
      });
    }

    // Nút Xuất file Đề cương Markdown / LaTeX
    document.getElementById("nbExportMdBtn")?.addEventListener("click", () => {
      let md = "# ĐỀ CƯƠNG ÔN TẬP CẤU TRÚC ĐẠI SỐ CÁ NHÂN\n";
      md += "> Trích xuất từ Hệ thống Học tập Cấu trúc Đại số (TS. Huỳnh Việt Khánh)\n\n";

      bookmarks.forEach(cardId => {
        const el = document.getElementById(cardId);
        if (!el) return;
        const label = el.querySelector(".card-header .label")?.textContent.trim()
          || el.querySelector(".ex-title-label")?.textContent.trim() || "";
        const tag = el.querySelector(".card-header .tag")?.textContent.trim() || "";
        const body = (el.querySelector(".card-body") || el.querySelector(".ex-problem-statement"))?.textContent.replace(/\s+/g, " ").trim() || "";
        md += `## ${label}${tag ? " (" + tag + ")" : ""}\n${body}\n\n`;
      });

      document.querySelectorAll("#part-5 .ex-study-card").forEach(card => {
        const note = localStorage.getItem("ctds_scratch_" + card.id);
        if (note && note.trim()) {
          const title = card.querySelector(".ex-title-label")?.textContent.trim() || card.id;
          md += `## [Vở nháp] ${title}\n${note.trim()}\n\n`;
        }
      });

      const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "De-Cuong-Cau-Truc-Dai-So.md";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });

    document.getElementById("nbClearAllBtn")?.addEventListener("click", () => {
      bookmarks.clear();
      document.querySelectorAll(".bm-star-btn").forEach(b => {
        b.classList.remove("is-bookmarked");
        b.innerHTML = "☆ Lưu ôn thi";
      });
      saveBookmarks();
      renderNotebookPane();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runAcademicBatch2);
  } else {
    runAcademicBatch2();
  }
})();

(function runCodeRefactoringAndThemeSync() {
  // ====================================================================
  // 1. CHUYỂN ĐỔI CÁC MÀU CỨNG INLINE TRONG SƠ ĐỒ SANG CLASS BIẾN CSS
  // ====================================================================
  function refactorHardcodedDiagramStyles() {
    const studyWorkspace = document.getElementById("studyWorkspace");
    if (!studyWorkspace) return;

    const styledElements = studyWorkspace.querySelectorAll("[style]");
    styledElements.forEach(el => {
      // Bỏ qua các khối có chủ đích giữ nền tối hoặc dải gradient đặc biệt
      const rawStyle = (el.getAttribute("style") || "").toLowerCase();
      if (rawStyle.includes("linear-gradient") || rawStyle.includes("radial-gradient")) return;

      const s = el.style;
      const bg = (s.backgroundColor || s.background || "").replace(/\s+/g, "").toLowerCase();
      const fg = (s.color || "").replace(/\s+/g, "").toLowerCase();
      const borderCol = (s.borderColor || s.border || "").replace(/\s+/g, "").toLowerCase();

      // A. Xử lý các khối có nền sáng gắn cứng (#ffffff, #f8fafc, #ecfdf5, #f0f9ff, #fefce8...)
      const isWhiteBg =
        bg === "#ffffff" || bg === "#fff" || bg === "rgb(255,255,255)" || bg.includes("#ffffff");
      const isSoftLightBg =
        bg.includes("#f8fafc") || bg === "rgb(248,250,252)" ||
        bg.includes("#f1f5f9") || bg === "rgb(241,245,249)";
      const isTintedBadgeOrBox =
        bg.includes("#ecfdf5") || bg === "rgb(236,253,245)" ||
        bg.includes("#f0fdf4") || bg === "rgb(240,253,244)" ||
        bg.includes("#f0f9ff") || bg === "rgb(240,249,255)" ||
        bg.includes("#eff6ff") || bg === "rgb(239,246,255)" ||
        bg.includes("#fefce8") || bg === "rgb(254,252,232)" ||
        bg.includes("#fffbeb") || bg === "rgb(255,251,235)" ||
        bg.includes("#faf5ff") || bg === "rgb(250,245,255)" ||
        bg.includes("#f5f3ff") || bg === "rgb(245,243,255)" ||
        bg.includes("#fff1f2") || bg === "rgb(255,241,242)" ||
        bg.includes("#fef2f2") || bg === "rgb(254,242,242)";

      if (isWhiteBg) {
        el.classList.add("theme-diagram-card");
        if (borderCol.includes("#34d399") || borderCol.includes("52,211,153") || borderCol.includes("#10b981") || borderCol.includes("16,185,129")) {
          el.setAttribute("data-accent", "emerald");
        } else if (borderCol.includes("#fbbf24") || borderCol.includes("251,191,36") || borderCol.includes("#f59e0b") || borderCol.includes("#fcd34d")) {
          el.setAttribute("data-accent", "amber");
        } else if (borderCol.includes("#c084fc") || borderCol.includes("192,132,252") || borderCol.includes("#a78bfa") || borderCol.includes("#ddd6fe")) {
          el.setAttribute("data-accent", "purple");
        } else if (borderCol.includes("#fb7185") || borderCol.includes("251,113,133") || borderCol.includes("#fda4af") || borderCol.includes("#fecdd3")) {
          el.setAttribute("data-accent", "rose");
        }
      } else if (isSoftLightBg) {
        el.classList.add("theme-diagram-box");
      } else if (isTintedBadgeOrBox) {
        const isSmallBadge = el.tagName === "SPAN" || (s.fontSize && parseFloat(s.fontSize) <= 0.88);
        if (isSmallBadge) {
          el.classList.add("theme-diagram-badge");
          if (bg.includes("#ecfdf5") || bg.includes("236,253,245") || bg.includes("#f0fdf4")) {
            el.setAttribute("data-badge-tone", "emerald");
          } else if (bg.includes("#fefce8") || bg.includes("254,252,232") || bg.includes("#fffbeb")) {
            el.setAttribute("data-badge-tone", "amber");
          } else if (bg.includes("#faf5ff") || bg.includes("250,245,255") || bg.includes("#f5f3ff")) {
            el.setAttribute("data-badge-tone", "purple");
          } else if (bg.includes("#fff1f2") || bg.includes("255,241,242") || bg.includes("#fef2f2")) {
            el.setAttribute("data-badge-tone", "rose");
          }
        } else {
          el.classList.add("theme-diagram-box");
        }
      }

      // B. Xử lý các màu chữ tối gắn cứng (#1e293b, #334155, #0f172a, #047857, #1e40af...)
      if (
        fg.includes("#1e293b") || fg === "rgb(30,41,59)" ||
        fg.includes("#0f172a") || fg === "rgb(15,23,42)"
      ) {
        el.classList.add("theme-text-ink");
      } else if (
        fg.includes("#334155") || fg === "rgb(51,65,85)" ||
        fg.includes("#475569") || fg === "rgb(71,85,105)"
      ) {
        el.classList.add("theme-text-soft");
      } else if (
        fg.includes("#1e40af") || fg === "rgb(30,64,175)" ||
        fg.includes("#1e3a8a") || fg === "rgb(30,58,138)" ||
        fg.includes("#0369a1") || fg === "rgb(3,105,161)" ||
        fg.includes("#0284c7") || fg === "rgb(2,132,199)"
      ) {
        el.classList.add("theme-text-brand");
      } else if (
        fg.includes("#047857") || fg === "rgb(4,120,87)" ||
        fg.includes("#065f46") || fg === "rgb(6,95,70)" ||
        fg.includes("#059669") || fg === "rgb(5,150,105)"
      ) {
        el.classList.add("theme-text-emerald");
      } else if (
        fg.includes("#b45309") || fg === "rgb(180,83,9)" ||
        fg.includes("#92400e") || fg === "rgb(146,64,14)" ||
        fg.includes("#d97706") || fg === "rgb(217,119,6)"
      ) {
        el.classList.add("theme-text-amber");
      } else if (
        fg.includes("#6d28d9") || fg === "rgb(109,40,217)" ||
        fg.includes("#5b21b6") || fg === "rgb(91,33,182)" ||
        fg.includes("#7e22ce") || fg === "rgb(126,34,206)"
      ) {
        el.classList.add("theme-text-purple");
      } else if (
        fg.includes("#be123c") || fg === "rgb(190,18,60)" ||
        fg.includes("#9f1239") || fg === "rgb(159,18,57)"
      ) {
        el.classList.add("theme-text-rose");
      }
    });
  }

  // ====================================================================
  // 2. GOM GỌN #flashReset THÀNH PHƯƠNG THỨC CHUẨN window.flash.reset()
  // ====================================================================
  function refactorFlashcardReset() {
    const resetBtn = document.getElementById("flashReset");
    if (!resetBtn) return;

    // Định nghĩa đối tượng điều khiển `window.flash` thống nhất
    window.flash = window.flash || {};
    window.flash.STORAGE_KEYS = ["ctds_flash_known_v1", "ctds_flash_known", "algebra_flash_known"];

    window.flash.reset = function() {
      // 1. Xóa sạch dữ liệu thẻ đã thuộc trong localStorage (không gọi setItem dư thừa trước removeItem)
      window.flash.STORAGE_KEYS.forEach(k => {
        try { localStorage.removeItem(k); } catch (_) {}
      });

      // 2. Nếu đối tượng flash có tập Set `known` nội bộ thì làm rỗng trực tiếp
      if (window.flash.known instanceof Set) {
        window.flash.known.clear();
      }

      // 3. Nếu thẻ hiện tại đang ở trạng thái "Đã thuộc" (aria-pressed="true"), kích hoạt nút #flashKnown
      //    để đồng bộ Set `known` đóng kín bên trong closure của initAlgebraLab
      const knownBtn = document.getElementById("flashKnown");
      if (knownBtn && knownBtn.getAttribute("aria-pressed") === "true") {
        knownBtn.click();
      }

      // 4. Cập nhật giao diện thanh tiến độ và nút trạng thái về 0
      const countEl = document.getElementById("flashCount");
      const totalMatch = (countEl?.textContent || "").match(/\/\s*(\d+)/);
      const totalCards = totalMatch ? Number(totalMatch[1]) : 0;

      const progText = document.getElementById("flashProgressText");
      const progBar = document.getElementById("flashBar");
      if (progText) progText.textContent = `Đã thuộc 0/${totalCards}`;
      if (progBar) progBar.style.width = "0%";
      if (knownBtn) {
        knownBtn.setAttribute("aria-pressed", "false");
        knownBtn.classList.remove("active", "is-known");
      }
    };

    // Thay thế các trình lắng nghe sự kiện trùng lặp cũ trên #flashReset bằng 1 listener duy nhất
    const cleanResetBtn = resetBtn.cloneNode(true);
    resetBtn.parentNode.replaceChild(cleanResetBtn, resetBtn);
    cleanResetBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.flash.reset();
    });
  }

  // ====================================================================
  // 3. HOÀN THIỆN CLICK COPY LATEX CHO KHỐI .math-display (PHẢN HỒI 1.5s)
  // ====================================================================
  function extractRawLatexFromMathDisplay(mathBox) {
    // Ưu tiên 1: Thuộc tính data-latex nếu đã lưu sẵn
    const saved = mathBox.getAttribute("data-latex");
    if (saved && saved.trim()) return saved.trim();

    // Ưu tiên 2: Trích xuất tất cả thẻ <annotation encoding="application/x-tex"> do KaTeX sinh ra
    const annotations = Array.from(mathBox.querySelectorAll('annotation[encoding="application/x-tex"]'));
    if (annotations.length > 0) {
      const texParts = annotations.map(a => a.textContent.trim()).filter(Boolean);
      if (texParts.length === 1) {
        const single = texParts[0];
        return single.startsWith("$$") ? single : `$$\n${single}\n$$`;
      }
      return texParts.map(p => `$$${p}$$`).join("\n");
    }

    // Ưu tiên 3: Fallback lấy text thuần và loại bỏ phần tử .katex-html bị lặp
    const clone = mathBox.cloneNode(true);
    clone.querySelectorAll(".katex-html").forEach(el => el.remove());
    return clone.textContent.trim();
  }

  function copyTextToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise((resolve, reject) => {
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }

  function setupMathDisplayCopy() {
    document.querySelectorAll(".math-display").forEach(mathBox => {
      if (mathBox.dataset.copyRefactored === "1") return;
      mathBox.dataset.copyRefactored = "1";
      mathBox.setAttribute("title", "Bấm để chép mã nguồn LaTeX vào TeXstudio / Overleaf");

      mathBox.addEventListener("click", function(e) {
        // Không ghi đè nếu người dùng đang bôi đen văn bản bằng chuột
        if (window.getSelection && window.getSelection().toString().trim().length > 0) return;
        e.stopPropagation();

        const rawLatex = extractRawLatexFromMathDisplay(this);
        if (!rawLatex) return;

        copyTextToClipboard(rawLatex).then(() => {
          this.classList.add("is-copied");
          if (this._copyTimer) clearTimeout(this._copyTimer);
          this._copyTimer = setTimeout(() => {
            this.classList.remove("is-copied");
          }, 1500);
        });
      });
    });
  }

  function initAllRefactorings() {
    refactorHardcodedDiagramStyles();
    refactorFlashcardReset();
    setupMathDisplayCopy();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAllRefactorings);
  } else {
    initAllRefactorings();
  }
})();
