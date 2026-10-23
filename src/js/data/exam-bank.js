// ---------------- DANH MỤC 10 CHƯƠNG TRONG GIÁO TRÌNH ----------------
  const CHAPTER_META = [
    { ch: 0, part: "part-0", tabId: "tab-c0", name: "Ch.0 · Ngôn ngữ & Công cụ" },
    { ch: 1, part: "part-1", tabId: "tab-c1", name: "Ch.1 · Nhóm & Ví dụ cơ bản" },
    { ch: 2, part: "part-1", tabId: "tab-c2", name: "Ch.2 · Nhóm con & Nhóm cyclic" },
    { ch: 3, part: "part-1", tabId: "tab-c3", name: "Ch.3 · Lớp kề & Định lý Lagrange" },
    { ch: 4, part: "part-1", tabId: "tab-c4", name: "Ch.4 · Nhóm con chuẩn tắc & Thương" },
    { ch: 5, part: "part-1", tabId: "tab-c5", name: "Ch.5 · Đồng cấu & Đẳng cấu nhóm" },
    { ch: 6, part: "part-2", tabId: "tab-c6", name: "Ch.6 · Vành, Miền nguyên & Trường" },
    { ch: 7, part: "part-2", tabId: "tab-c7", name: "Ch.7 · Iđêan & Vành thương" },
    { ch: 8, part: "part-2", tabId: "tab-c8", name: "Ch.8 · Đồng cấu vành & Đặc số" },
    { ch: 9, part: "part-3", tabId: "tab-c9", name: "Ch.9 · Trường con & Trường các thương" }
  ];

  // ====================================================================
  // NGÂN HÀNG MỞ RỘNG CHƯƠNG 0 (10 CÂU: c0_q01 -> c0_q10)
  // ====================================================================
  const questionsChapter0 = [
    {
      id: "c0_q01",
      chapter: 0,
      topic: "Ánh xạ, tập ảnh và nghịch ảnh (Bài tập 0.1)",
      question: "Cho ánh xạ $f: \\mathbb{Z} \\to \\mathbb{Z}$ xác định bởi $f(x) = x^2 - 1$. Với $A = \\{-2, -1, 0, 1, 2\\}$ và $B = \\{0, 3, 8\\}$, khẳng định nào sau đây là ĐÚNG?",
      options: {
        A: "$f(A) = \\{-1, 0, 3\\}$, $f^{-1}(B) = \\{\\pm 1, \\pm 2, \\pm 3\\}$ và $f^{-1}(\\{-2\\}) = \\emptyset$.",
        B: "$f^{-1}(B)$ không tồn tại vì $f$ không phải là song ánh trên $\\mathbb{Z}$.",
        C: "$f(A) = \\{3, 0, -1, 0, 3\\}$ gồm 5 phần tử phân biệt và $f$ là đơn ánh.",
        D: "$f$ là toàn ánh trên $\\mathbb{Z}$ vì mọi số nguyên đều có dạng $x^2 - 1$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: Ta có $f(\\pm 2)=3, f(\\pm 1)=0, f(0)=-1$ nên $f(A)=\\{-1,0,3\\}$. Giải $x^2-1\\in\\{0,3,8\\}\\iff x^2\\in\\{1,4,9\\}\\iff x\\in\\{\\pm 1,\\pm 2,\\pm 3\\}$. Phương trình $x^2-1=-2\\iff x^2=-1$ vô nghiệm nguyên nên $f^{-1}(\\{-2\\})=\\emptyset$.",
        B: "Sai vì: Nghịch ảnh $f^{-1}(B) = \\{x \\in X \\mid f(x) \\in B\\}$ luôn xác định với mọi ánh xạ mà không đòi hỏi ánh xạ ngược $f^{-1}$ tồn tại.",
        C: "Sai vì: Tập hợp không lặp lại các phần tử trùng nhau, và $f(1)=f(-1)=0$ nên $f$ không đơn ánh.",
        D: "Sai vì: $f(x) = x^2 - 1 \\ge -1$ với mọi $x \\in \\mathbb{Z}$, nên các số nguyên nhỏ hơn $-1$ (như $-2$) không thuộc tập ảnh $\\operatorname{im} f$."
      }
    },
    {
      id: "c0_q02",
      chapter: 0,
      topic: "Hợp thành ánh xạ theo quy ước phải sang trái",
      question: "Trên $\\mathbb{Z}$, xét hai ánh xạ $f(x) = x^2$ và $g(x) = x + 1$. Theo quy ước đọc hợp thành từ phải sang trái của Giáo trình, giá trị của $(g \\circ f)(2)$ và $(f \\circ g)(2)$ lần lượt là:",
      options: {
        A: "$(g \\circ f)(2) = 9$ và $(f \\circ g)(2) = 5$.",
        B: "$(g \\circ f)(2) = 5$ và $(f \\circ g)(2) = 9$.",
        C: "$(g \\circ f)(2) = (f \\circ g)(2) = 5$ vì hợp thành ánh xạ luôn giao hoán.",
        D: "$(g \\circ f)(2) = 6$ và $(f \\circ g)(2) = 6$."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: Đã áp dụng ngược quy ước (thực hiện ánh xạ bên trái trước thay vì bên phải trước).",
        B: "Chính xác! Lời giải: Theo quy ước phải sang trái, $(g \\circ f)(2) = g(f(2)) = g(4) = 5$; còn $(f \\circ g)(2) = f(g(2)) = f(3) = 3^2 = 9$.",
        C: "Sai vì: Hợp thành ánh xạ có tính kết hợp nhưng nói chung không giao hoán; ở đây $5 \\neq 9$.",
        D: "Sai vì: $f(x)=x^2$ là phép bình phương chứ không phải nhân đôi."
      }
    },
    {
      id: "c0_q03",
      chapter: 0,
      topic: "Phép chia Euclid với số bị chia âm (Định nghĩa 0.2)",
      question: "Khi chia số nguyên âm $a = -27$ cho $b = 4$ theo đúng quy ước phép chia Euclid $a = bq + r$ ($0 \\le r < b$), cặp thương và số dư $(q, r)$ duy nhất là:",
      options: {
        A: "$q = -6$ và $r = -3$.",
        B: "$q = -6$ và $r = 3$.",
        C: "$q = -7$ và $r = 1$.",
        D: "$q = 7$ và $r = -1$."
      },
      correct: "C",
      explanations: {
        A: "Sai vì: Dù $-27 = 4(-6) + (-3)$, số dư $r = -3 < 0$ vi phạm điều kiện bắt buộc $0 \\le r < 4$.",
        B: "Sai vì: $4(-6) + 3 = -21 \\neq -27$.",
        C: "Chính xác! Lời giải: Để số dư không âm và nhỏ hơn $4$, ta lùi thương xuống $q = -7$, khi đó $-27 = 4 \\cdot (-7) + 1$ với $0 \\le 1 < 4$.",
        D: "Sai vì: Thương $q=7$ làm $4\\cdot 7 + (-1) = 27 \\neq -27$ và số dư âm không hợp lệ."
      }
    },
    {
      id: "c0_q04",
      chapter: 0,
      topic: "Thuật toán Euclid và Đồng nhất thức Bézout (Định lý 0.3)",
      question: "Áp dụng thuật toán Euclid cho hai số $252$ và $105$, ước chung lớn nhất $d = \\gcd(252, 105)$ và một cặp hệ số nguyên $(u, v)$ thỏa mãn $252u + 105v = d$ là:",
      options: {
        A: "$d = 21$ với $u = -2, v = 5$.",
        B: "$d = 21$ với $u = 2, v = -5$.",
        C: "$d = 7$ với $u = -2, v = 5$.",
        D: "$d = 42$ với $u = 1, v = -2$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: Chia Euclid: $252 = 2\\cdot 105 + 42$ và $105 = 2\\cdot 42 + 21$, $42 = 2\\cdot 21 + 0 \\implies d = 21$. Truy ngược: $21 = 105 - 2(252 - 2\\cdot 105) = 252(-2) + 105(5)$.",
        B: "Sai vì: Với $u = 2, v = -5$ thì $252(2) + 105(-5) = 504 - 525 = -21 \\neq 21$.",
        C: "Sai vì: $\\gcd(252, 105) = 21$, không phải $7$.",
        D: "Sai vì: $42$ là số dư ở bước đầu nhưng không phải ước của $105$."
      }
    },
    {
      id: "c0_q05",
      chapter: 0,
      topic: "Hàm phi Euler trên tập thặng dư chuẩn (Định nghĩa 0.4)",
      question: "Trong tập thặng dư chuẩn $R_{12} = \\{0, 1, 2, \\dots, 11\\}$, tập hợp tất cả các phần tử nguyên tố cùng nhau với $12$ và giá trị $\\varphi(12)$ là:",
      options: {
        A: "$\\{1, 3, 5, 7, 9, 11\\}$ và $\\varphi(12) = 6$.",
        B: "$\\{1, 5, 7, 11\\}$ và $\\varphi(12) = 4$.",
        C: "$\\{0, 1, 5, 7, 11\\}$ và $\\varphi(12) = 5$.",
        D: "$\\{2, 3, 4, 6\\}$ và $\\varphi(12) = 4$."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: $3$ và $9$ chia hết cho $3$ nên $\\gcd(3,12)=\\gcd(9,12)=3 > 1$.",
        B: "Chính xác! Lời giải: Loại các số chia hết cho $2$ hoặc $3$ trong $R_{12}$, chỉ còn $4$ phần tử $\\{1, 5, 7, 11\\}$ thỏa $\\gcd(a, 12) = 1$, do đó $\\varphi(12) = 4$.",
        C: "Sai vì: $\\gcd(0, 12) = 12 \\neq 1$, nên $0$ không nguyên tố cùng nhau với $12$ (chỉ có quy ước biên $\\gcd(0,1)=1$ khi $n=1$).",
        D: "Sai vì: $\\{2, 3, 4, 6\\}$ là các ước của $12$ chứ không nguyên tố cùng nhau với $12$."
      }
    },
    {
      id: "c0_q06",
      chapter: 0,
      topic: "Phản ví dụ quan hệ tương đương (Phản ví dụ 0.9)",
      question: "Trên $\\mathbb{Z}$, xét quan hệ $a \\, R \\, b \\iff |a - b| \\le 1$. Khẳng định nào mô tả chính xác các tính chất của quan hệ $R$?",
      options: {
        A: "$R$ là một quan hệ tương đương và chia $\\mathbb{Z}$ thành các lớp rời nhau.",
        B: "$R$ có tính phản xạ và bắc cầu nhưng không có tính đối xứng.",
        C: "$R$ có tính phản xạ và đối xứng, nhưng vi phạm tính bắc cầu vì $0 \\, R \\, 1$ và $1 \\, R \\, 2$ mà $0 \\not R \\, 2$.",
        D: "$R$ không có tính phản xạ vì $|a - a| = 0$."
      },
      correct: "C",
      explanations: {
        A: "Sai vì: $R$ không thỏa mãn tính bắc cầu nên không phải là quan hệ tương đương.",
        B: "Sai vì: $|a - b| = |b - a|$ nên $R$ hoàn toàn đối xứng; tính chất bị gãy là bắc cầu.",
        C: "Chính xác! Lời giải: $|a-a|=0\\le 1$ (phản xạ), $|a-b|=|b-a|$ (đối xứng). Nhưng $|0-1|=1\\le 1$ và $|1-2|=1\\le 1$ trong khi $|0-2|=2 > 1$, nên $R$ không bắc cầu.",
        D: "Sai vì: $0 \\le 1$ là mệnh đề đúng nên mọi $a \\in \\mathbb{Z}$ đều thỏa $a \\, R \\, a$."
      }
    },
    {
      id: "c0_q07",
      chapter: 0,
      topic: "Ba điều kiện tương đương của lớp tương đương (Định lý 0.6 & Bài tập 0.16)",
      question: "Cho $\\sim$ là một quan hệ tương đương trên tập $X$. Với mọi $x, y \\in X$, phát biểu nào sau đây là ĐÚNG về hai lớp tương đương $[x]$ và $[y]$?",
      options: {
        A: "Nếu $[x] \\cap [y] \\neq \\emptyset$ thì $[x] = [y]$ (hai lớp chỉ cần có chung 1 phần tử là trùng khít hoàn toàn).",
        B: "Hai lớp $[x]$ và $[y]$ có thể giao nhau tại đúng 1 phần tử mà vẫn khác nhau.",
        C: "$[x] = [y]$ khi và chỉ khi $x = y$.",
        D: "Phần tử $x$ không thuộc lớp $[x]$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: Theo Định lý 0.6 và Bài tập 0.16, $[x] = [y] \\iff x \\sim y \\iff [x] \\cap [y] \\neq \\emptyset$. Nếu $z \\in [x] \\cap [y]$ thì $x \\sim z$ và $y \\sim z \\implies x \\sim y$ (nhờ đối xứng và bắc cầu), kéo theo $[x] = [y]$.",
        B: "Sai vì: Các lớp tương đương tạo thành một phân hoạch nên hai lớp phân biệt bắt buộc phải rời nhau ($[x] \\cap [y] = \\emptyset$).",
        C: "Sai vì: Hai đại diện khác nhau nhưng tương đương nhau ($x \\sim y, x \\neq y$) vẫn sinh ra cùng một lớp, ví dụ $[1]_3 = [4]_3$.",
        D: "Sai vì: Nhờ tính phản xạ $x \\sim x$, mọi phần tử $x$ luôn thuộc chính lớp $[x]$ của nó."
      }
    },
    {
      id: "c0_q08",
      chapter: 0,
      topic: "Ánh xạ nhân môđulô và điều kiện khả nghịch (Bài tập 0.13)",
      question: "Cho $m \\in \\mathbb{Z}, n \\ge 1$ và ánh xạ $T_m: \\mathbb{Z}/n\\mathbb{Z} \\to \\mathbb{Z}/n\\mathbb{Z}$ định bởi $T_m([a]_n) = [ma]_n$. Điều kiện cần và đủ để $T_m$ là một song ánh là:",
      options: {
        A: "$m$ là một số nguyên tố.",
        B: "$\\gcd(m, n) = 1$.",
        C: "$m$ là ước của $n$ ($m \\mid n$).",
        D: "$m \\ge n$."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: Chẳng hạn với $n=6, m=3$ là số nguyên tố nhưng $\\gcd(3,6)=3>1$, khi đó $T_3([2]_6)=[0]_6=T_3([0]_6)$ nên không đơn ánh.",
        B: "Chính xác! Lời giải: Trên tập hữu hạn $\\mathbb{Z}/n\\mathbb{Z}$, $T_m$ đơn ánh $\\iff T_m$ toàn ánh $\\iff \\exists [a]_n: [ma]_n = [1]_n \\iff ma + kn = 1 \\iff \\gcd(m, n) = 1$ (theo Bézout).",
        C: "Sai vì: Nếu $m \\mid n$ và $m > 1$ thì $T_m([n/m]_n) = [n]_n = [0]_n = T_m([0]_n)$, ánh xạ không đơn ánh.",
        D: "Sai vì: Độ lớn của $m$ không quyết định tính song ánh; chỉ quan hệ nguyên tố cùng nhau $\\gcd(m,n)=1$ mới quyết định."
      }
    },
    {
      id: "c0_q09",
      chapter: 0,
      topic: "Phép toán hai biến thất bại trên tập thương (Phản ví dụ 0.16)",
      question: "Xét quy tắc $\\Phi: (\\mathbb{Z}/4\\mathbb{Z}) \\times (\\mathbb{Z}/4\\mathbb{Z}) \\to \\mathbb{Z}/6\\mathbb{Z}$ cho bởi $\\Phi([a]_4, [b]_4) = [a + b]_6$. Vì sao $\\Phi$ KHÔNG xác định tốt?",
      options: {
        A: "Vì phép cộng số nguyên không có tính giao hoán.",
        B: "Vì $([0]_4, [0]_4) = ([4]_4, [0]_4)$ trong miền xác định nhưng $\\Phi([0]_4, [0]_4) = [0]_6 \\neq [4]_6 = \\Phi([4]_4, [0]_4)$.",
        C: "Vì $\\mathbb{Z}/6\\mathbb{Z}$ có nhiều phần tử hơn $\\mathbb{Z}/4\\mathbb{Z}$ nên không thể có bất kỳ ánh xạ nào giữa chúng.",
        D: "Vì $4$ và $6$ đều là các số chẵn."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: Phép cộng số nguyên luôn giao hoán; lỗi nằm ở việc giá trị lớp đầu ra phụ thuộc vào đại diện đầu vào.",
        B: "Chính xác! Lời giải: Trong $\\mathbb{Z}/4\\mathbb{Z}$, $0$ và $4$ đại diện cho cùng một lớp ($[0]_4 = [4]_4$), nhưng khi thay vào công thức đầu ra modulo $6$ lại cho $[0]_6 \\neq [4]_6$. Vậy $\\Phi$ phụ thuộc đại diện và không xác định tốt.",
        C: "Sai vì: Giữa hai tập bất kỳ khác rỗng luôn tồn tại ánh xạ (ví dụ ánh xạ hằng); lỗi ở đây là dùng trực tiếp đại diện mà không tương thích môđun.",
        D: "Sai vì: Tính chẵn lẻ không phải nguyên nhân; nguyên nhân là $4 \\not\\equiv 0 \\pmod 6$."
      }
    },
    {
      id: "c0_q10",
      chapter: 0,
      topic: "Nhúng tập thương phân số vào trường số thực (Bài tập 0.20)",
      question: "Trên $P = \\mathbb{Z} \\times (\\mathbb{Z} \\setminus \\{0\\})$ với quan hệ $(a, b) \\sim (c, d) \\iff ad = bc$, xét ánh xạ $j: P/\\sim \\;\\to \\mathbb{R}$ cho bởi $j([(a, b)]) = \\dfrac{a}{b}$. Khẳng định nào ĐÚNG?",
      options: {
        A: "$j$ không xác định tốt vì $[(1, 2)] = [(2, 4)]$ có các số nguyên khác nhau.",
        B: "$j$ xác định tốt, là một đơn ánh và có tập ảnh $\\operatorname{im} j = \\mathbb{Q} \\subset \\mathbb{R}$.",
        C: "$j$ là một toàn ánh lên toàn bộ trường số thực $\\mathbb{R}$.",
        D: "$j$ xác định tốt nhưng không đơn ánh vì $\\dfrac{1}{2} = \\dfrac{2}{4}$."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: Khi $(a,b)\\sim(a',b') \\iff ab'=ba'$, chia cho $bb'\\neq 0$ trong $\\mathbb{R}$ cho $a/b = a'/b'$, nên $j$ hoàn toàn độc lập với đại diện.",
        B: "Chính xác! Lời giải: $ab'=ba' \\iff a/b=a'/b'$ trong $\\mathbb{R}$. Chiều thuận chứng minh $j$ xác định tốt; chiều ngược chứng minh $j([(a,b)])=j([(c,d)]) \\implies ad=bc \\implies [(a,b)]=[(c,d)]$ (đơn ánh), với ảnh đúng bằng $\\mathbb{Q}$.",
        C: "Sai vì: Các số vô tỉ như $\\sqrt{2} \\in \\mathbb{R}$ không biểu diễn được dưới dạng $a/b$ với $a,b \\in \\mathbb{Z}$, nên $j$ không toàn ánh lên $\\mathbb{R}$.",
        D: "Sai vì: Trong tập thương $P/\\sim$, hai cặp $(1,2)$ và $(2,4)$ nằm trong CÙNG một lớp tương đương $[(1,2)] = [(2,4)]$, nên không vi phạm tính đơn ánh."
      }
    }
  ];

  // ====================================================================
  // NGÂN HÀNG CHƯƠNG 1 (40 CÂU: c1_q01 -> c1_q40)
  // ====================================================================
  const questionsChapter1 = [
    {
      id: "c1_q01",
      chapter: 1,
      topic: "Phép toán hai ngôi và tính đóng",
      question: "Trên tập số nguyên lẻ $2\\mathbb{Z}+1$, phép cộng thông thường có xác định một phép toán hai ngôi hay không?",
      options: {
        A: "Có, vì tổng của hai số nguyên luôn là số nguyên.",
        B: "Có, vì phép cộng giao hoán và kết hợp trên $\\mathbb{Z}$.",
        C: "Không, vì $1+3=4\\notin 2\\mathbb{Z}+1$, nên tập không đóng.",
        D: "Không, vì phép cộng không giao hoán trên các số lẻ."
      },
      correct: "C",
      explanations: {
        A: "Sai vì: kết quả phải thuộc chính tập $2\\mathbb{Z}+1$, không chỉ thuộc $\\mathbb{Z}$; chẳng hạn $1+3=4$ là số chẵn.",
        B: "Sai vì: giao hoán và kết hợp không thay thế điều kiện đóng của ánh xạ $(2\\mathbb{Z}+1)\\times(2\\mathbb{Z}+1)\\to 2\\mathbb{Z}+1$.",
        C: "Chính xác! Lời giải: tổng của hai số lẻ luôn chẵn; cụ thể $1,3\\in 2\\mathbb{Z}+1$ nhưng $1+3=4\\notin 2\\mathbb{Z}+1$. Do đó phép cộng không phải phép toán hai ngôi trên tập này.",
        D: "Sai vì: phép cộng số nguyên vẫn giao hoán, kể cả khi giới hạn các đầu vào là số lẻ; thất bại nằm ở tính đóng."
      }
    },
    {
      id: "c1_q02",
      chapter: 1,
      topic: "Phản ví dụ về tính kết hợp",
      question: "Trên $\\mathbb{R}$, đặt $x*y=\\dfrac{x+y}{2}$. Kết luận nào đúng về phép toán này?",
      options: {
        A: "Phép toán không đóng trên $\\mathbb{R}$.",
        B: "Phép toán giao hoán nhưng không kết hợp; cụ thể $(0*0)*4=2$ còn $0*(0*4)=1$.",
        C: "Phép toán kết hợp vì nó giao hoán.",
        D: "Phép toán không giao hoán nhưng kết hợp."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: trung bình cộng của hai số thực vẫn là số thực, nên phép toán đóng trên $\\mathbb{R}$.",
        B: "Chính xác! Lời giải: $x*y=(x+y)/2=(y+x)/2=y*x$, nhưng $(0*0)*4=0*4=2$ trong khi $0*(0*4)=0*2=1$. Vì hai kết quả khác nhau, phép toán không kết hợp.",
        C: "Sai vì: giao hoán không kéo theo kết hợp; phản ví dụ bộ ba $(0,0,4)$ cho hai cách đặt ngoặc khác kết quả.",
        D: "Sai vì: công thức đối xứng theo $x,y$ nên phép toán giao hoán; tính kết hợp mới là tiên đề bị vi phạm."
      }
    },
    {
      id: "c1_q03",
      chapter: 1,
      topic: "Phép trừ và đơn vị một phía",
      question: "Với phép trừ thông thường trên $\\mathbb{Z}$, khẳng định nào mô tả chính xác nhất?",
      options: {
        A: "$0$ là đơn vị hai phía và phép trừ kết hợp.",
        B: "$0$ là đơn vị trái vì $0-a=a$ với mọi $a\\in\\mathbb{Z}$.",
        C: "Phép trừ giao hoán nhưng không kết hợp.",
        D: "Có đơn vị phải $0$ vì $a-0=a$, nhưng không có đơn vị trái; phép trừ cũng không giao hoán và không kết hợp."
      },
      correct: "D",
      explanations: {
        A: "Sai vì: tuy $a-0=a$, nói chung $0-a\\ne a$; đồng thời $(a-b)-c$ thường khác $a-(b-c)$.",
        B: "Sai vì: $0-a=-a$, không bằng $a$ với mọi số nguyên; $0$ không phải đơn vị trái.",
        C: "Sai vì: phép trừ không giao hoán, ví dụ $5-2=3$ nhưng $2-5=-3$; nó cũng không kết hợp.",
        D: "Chính xác! Lời giải: $a-0=a$ nên $0$ là đơn vị phải. Không có đơn vị trái chung; ví dụ phép trừ không giao hoán vì $5-2\\ne2-5$, và không kết hợp vì $(5-2)-1=2\\ne4=5-(2-1)$."
      }
    },
    {
      id: "c1_q04",
      chapter: 1,
      topic: "Kiểm tra phép toán hình thức",
      question: "Trên $\\mathbb{Z}$, định nghĩa $a*b=a+b+1$. Tính chất nào đúng?",
      options: {
        A: "Phép toán đóng, giao hoán và kết hợp; đơn vị là $-1$.",
        B: "Phép toán giao hoán nhưng không kết hợp.",
        C: "Phép toán kết hợp nhưng không giao hoán.",
        D: "Phép toán không đóng trên $\\mathbb{Z}$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: $a+b+1\\in\\mathbb{Z}$; $a*b=b*a$; và $(a*b)*c=a+b+c+2=a*(b*c)$. Hơn nữa $a*(-1)=(-1)*a=a$, nên $-1$ là đơn vị.",
        B: "Sai vì: phép toán không chỉ giao hoán mà còn kết hợp, như hai vế đều bằng $a+b+c+2$.",
        C: "Sai vì: công thức đối xứng theo $a,b$, do đó phép toán giao hoán.",
        D: "Sai vì: tổng của các số nguyên cộng thêm $1$ vẫn là số nguyên, nên phép toán đóng."
      }
    },
    {
      id: "c1_q05",
      chapter: 1,
      topic: "Nửa nhóm không có đơn vị",
      question: "Vì sao $(\\mathbb{N}^*,+)$ với $\\mathbb{N}^* = \\{1,2,3,\\ldots\\}$ là nửa nhóm nhưng không là vị nhóm?",
      options: {
        A: "Phép cộng không đóng trên $\\mathbb{N}^*$.",
        B: "Phép cộng kết hợp và đóng, nhưng phần tử trung hòa cộng $0$ không thuộc $\\mathbb{N}^*$.",
        C: "Phép cộng không kết hợp.",
        D: "Mọi phần tử đều có nghịch đảo cộng trong $\\mathbb{N}^*$."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: tổng của hai số nguyên dương vẫn là số nguyên dương, nên phép cộng đóng.",
        B: "Chính xác! Lời giải: phép cộng kết hợp, nên đây là nửa nhóm. Phần tử trung hòa của phép cộng trên các số nguyên là $0$, nhưng $0\\notin\\mathbb{N}^*$; vì vậy cấu trúc không có đơn vị và không là vị nhóm.",
        C: "Sai vì: phép cộng các số nguyên thỏa tính kết hợp.",
        D: "Sai vì: không có số đối cộng của một số dương nào nằm trong $\\mathbb{N}^*$; hơn nữa vị nhóm chỉ cần đơn vị, chưa cần nghịch đảo."
      }
    },
    {
      id: "c1_q06",
      chapter: 1,
      topic: "Vị nhóm thiếu nghịch đảo",
      question: "Với quy ước $\\mathbb{N}=\\{0,1,2,\\ldots\\}$, tại sao $(\\mathbb{N},+)$ là vị nhóm giao hoán nhưng không là nhóm?",
      options: {
        A: "Vì không có phần tử trung hòa.",
        B: "Vì phép cộng không kết hợp.",
        C: "Vì $0$ là đơn vị và phép cộng kết hợp, nhưng $1$ không có nghịch đảo cộng trong $\\mathbb{N}$.",
        D: "Vì phép cộng không giao hoán."
      },
      correct: "C",
      explanations: {
        A: "Sai vì: $0$ là phần tử trung hòa, bởi $n+0=0+n=n$ với mọi $n\\in\\mathbb{N}$.",
        B: "Sai vì: phép cộng số nguyên không âm vẫn kết hợp.",
        C: "Chính xác! Lời giải: đơn vị $0$ tồn tại và phép cộng kết hợp, giao hoán; tuy nhiên phần tử đối của $1$ phải là $-1$, không thuộc $\\mathbb{N}$. Do đó cấu trúc là vị nhóm nhưng không là nhóm.",
        D: "Sai vì: phép cộng giao hoán; thiếu nghịch đảo của mọi phần tử mới là lý do không thành nhóm."
      }
    },
    {
      id: "c1_q07",
      chapter: 1,
      topic: "Vị nhóm nhân số nguyên",
      question: "Trong $(\\mathbb{Z},\\cdot)$, phát biểu nào phân biệt đúng vị nhóm với nhóm?",
      options: {
        A: "Đây là nhóm Abel vì số nguyên nào cũng có nghịch đảo nhân.",
        B: "Đây không phải vị nhóm vì phép nhân không có đơn vị.",
        C: "Đây là nhóm không giao hoán.",
        D: "Đây là vị nhóm giao hoán có đơn vị $1$, nhưng không là nhóm vì $2$ không có nghịch đảo nhân trong $\\mathbb{Z}$."
      },
      correct: "D",
      explanations: {
        A: "Sai vì: nghịch đảo nhân của $2$ là $1/2$, không thuộc $\\mathbb{Z}$.",
        B: "Sai vì: $1$ là đơn vị nhân trên các số nguyên.",
        C: "Sai vì: phép nhân số nguyên giao hoán; cấu trúc cũng không là nhóm vì thiếu nghịch đảo cho mọi phần tử.",
        D: "Chính xác! Lời giải: phép nhân đóng, kết hợp, giao hoán và có đơn vị $1$. Nhưng muốn $2b=1$ với $b\\in\\mathbb{Z}$ là không thể, nên vị nhóm này không phải nhóm."
      }
    },
    {
      id: "c1_q08",
      chapter: 1,
      topic: "Tiên đề nhóm và trục Abel",
      question: "Cho một tập khác rỗng với phép toán hai ngôi. Điều kiện nào đủ để cấu trúc là nhóm Abel?",
      options: {
        A: "Phép toán kết hợp, có đơn vị hai phía, mọi phần tử có nghịch đảo hai phía, và phép toán giao hoán.",
        B: "Phép toán đóng và giao hoán; không cần kết hợp hay đơn vị.",
        C: "Phép toán kết hợp và giao hoán; không cần đơn vị hay nghịch đảo.",
        D: "Chỉ cần có đơn vị và mỗi phần tử có nghịch đảo; không cần tính kết hợp."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: nhóm cần tính kết hợp, đơn vị và nghịch đảo cho mọi phần tử; nhóm Abel có thêm điều kiện giao hoán.",
        B: "Sai vì: tính đóng đã có trong khái niệm phép toán hai ngôi, nhưng giao hoán không thay thế tính kết hợp, đơn vị và nghịch đảo.",
        C: "Sai vì: kết hợp và giao hoán chưa đảm bảo tồn tại đơn vị hoặc nghịch đảo.",
        D: "Sai vì: tính kết hợp là tiên đề thiết yếu của nhóm; có đơn vị và nghịch đảo vẫn chưa đủ nếu phép toán không kết hợp."
      }
    },
    {
      id: "c1_q09",
      chapter: 1,
      topic: "Tính duy nhất của đơn vị và nghịch đảo",
      question: "Trong một nhóm, vì sao đơn vị và nghịch đảo của mỗi phần tử là duy nhất?",
      options: {
        A: "Vì mọi nhóm đều giao hoán.",
        B: "Nếu $e,f$ đều là đơn vị thì $e=ef=f$; nếu $b,c$ cùng là nghịch đảo của $a$ thì $b=b(ac)=(ba)c=c$.",
        C: "Vì mọi phép toán hai ngôi chỉ có thể có một phần tử đặc biệt.",
        D: "Vì luật giản ước chỉ đúng trong nhóm Abel."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: nhóm có thể không giao hoán; tính duy nhất vẫn suy ra từ các tiên đề nhóm và tính kết hợp.",
        B: "Chính xác! Lời giải: hai đơn vị cho $e=ef=f$. Nếu $b,c$ đều nghịch đảo của $a$, thì $b=be=b(ac)=(ba)c=ec=c$, dùng $ac=e$ và $ba=e$.",
        C: "Sai vì: phép toán nói chung có thể có nhiều phần tử trung hòa một phía; tính duy nhất hai phía trong nhóm cần chứng minh bằng tiên đề.",
        D: "Sai vì: giản ước trong nhóm tổng quát được bằng cách nhân hai vế với nghịch đảo ở đúng phía, không cần giao hoán."
      }
    },
    {
      id: "c1_q10",
      chapter: 1,
      topic: "Giải phương trình hai phía trong nhóm",
      question: "Trong $S_3$, dùng quy ước hợp thành từ phải sang trái, cho $a=(12)$ và $b=(123)$. Nghiệm của $ax=b$ và $ya=b$ lần lượt là gì?",
      options: {
        A: "$x=ba^{-1}=(13)$ và $y=a^{-1}b=(23)$.",
        B: "$x=a^{-1}b=(23)$ và $y=ba^{-1}=(13)$.",
        C: "$x=ab^{-1}=(13)$ và $y=b^{-1}a=(23)$.",
        D: "$x=a^{-1}b=ba^{-1}$, nên hai nghiệm nhất thiết bằng nhau."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: công thức bị đảo phía; phương trình $ax=b$ giải bằng nhân $a^{-1}$ bên trái, còn $ya=b$ giải bằng nhân $a^{-1}$ bên phải.",
        B: "Chính xác! Lời giải: $a^{-1}=a$ vì $(12)$ là chuyển vị. Do đó $ax=b$ cho $x=a^{-1}b=(12)(123)=(23)$; còn $ya=b$ cho $y=ba^{-1}=(123)(12)=(13)$.",
        C: "Sai vì: nghiệm duy nhất lần lượt là $a^{-1}b$ và $ba^{-1}$; thay $b^{-1}$ không giải các phương trình đã cho.",
        D: "Sai vì: trong nhóm không giao hoán, $a^{-1}b$ và $ba^{-1}$ nói chung khác nhau; ở ví dụ này chúng lần lượt là $(23)$ và $(13)$."
      }
    },
    {
      id: "c1_q11",
      chapter: 1,
      topic: "Nghịch đảo của tích",
      question: "Trong một nhóm không giả sử giao hoán, công thức đúng cho nghịch đảo của tích là:",
      options: {
        A: "$(ab)^{-1}=a^{-1}b^{-1}$.",
        B: "$(ab)^{-1}=ab^{-1}$.",
        C: "$(ab)^{-1}=b^{-1}a^{-1}$.",
        D: "$(ab)^{-1}=a^{-1}b$."
      },
      correct: "C",
      explanations: {
        A: "Sai vì: thứ tự nghịch đảo bị giữ nguyên; trong nhóm không giao hoán, biểu thức này nói chung không triệt tiêu $ab$ về đơn vị.",
        B: "Sai vì: $ab^{-1}$ không phải phần tử triệt tiêu $ab$ ở cả hai phía.",
        C: "Chính xác! Lời giải: $(ab)(b^{-1}a^{-1})=a(bb^{-1})a^{-1}=e$ và $(b^{-1}a^{-1})(ab)=b^{-1}(a^{-1}a)b=e$. Bởi tính duy nhất của nghịch đảo, $(ab)^{-1}=b^{-1}a^{-1}$.",
        D: "Sai vì: $a^{-1}b$ không đảo thứ tự các thừa số và nói chung không phải nghịch đảo của $ab$."
      }
    },
    {
      id: "c1_q12",
      chapter: 1,
      topic: "Tiêu chuẩn giao hoán qua bình phương",
      question: "Trong một nhóm $G$, tiêu chuẩn nào tương đương với việc $G$ giao hoán?",
      options: {
        A: "$(ab)^2=a^2b^2$ với mọi $a,b\\in G$.",
        B: "$(ab)^2=a^2b^2$ với ít nhất một cặp $a,b\\in G$.",
        C: "$a^2=b^2$ với mọi $a,b\\in G$.",
        D: "$a^2=e$ với mọi $a\\in G$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: nếu $G$ giao hoán thì $(ab)^2=abab=aabb=a^2b^2$. Ngược lại, giả sử đẳng thức đúng với mọi $a,b$; từ $abab=aabb$, giản ước trái $a$ rồi giản ước phải $b$ thu được $ba=ab$. Vì vậy $G$ giao hoán.",
        B: "Sai vì: đẳng thức đúng với một cặp không suy ra mọi cặp phần tử giao hoán.",
        C: "Sai vì: tiêu chuẩn yêu cầu so sánh $(ab)^2$ với $a^2b^2$, không yêu cầu bình phương của mọi phần tử bằng nhau.",
        D: "Sai vì: điều kiện này đủ kéo theo giao hoán, nhưng mạnh hơn và không tương đương với tính Abel cho mọi nhóm."
      }
    },
    {
      id: "c1_q13",
      chapter: 1,
      topic: "Quy tắc lũy thừa",
      question: "Với $a\\in G$ và $m,n\\in\\mathbb{Z}$, quy tắc lũy thừa nào luôn đúng trong mọi nhóm?",
      options: {
        A: "$a^m a^n=a^{mn}$ và $(ab)^n=a^n b^n$.",
        B: "$a^m a^n=a^{m+n}$ và $(a^m)^n=a^{mn}$; không thể khẳng định chung $(ab)^n=a^n b^n$ khi $G$ không giao hoán.",
        C: "$a^m a^n=a^{m+n}$ chỉ khi $G$ giao hoán, còn $(ab)^n=a^n b^n$ luôn đúng.",
        D: "$a^m a^n=a^{m+n}$ và $(ab)^n=a^n b^n$ trong mọi nhóm."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: tích hai lũy thừa của cùng một phần tử cộng số mũ, không nhân số mũ: $a^m a^n=a^{m+n}$.",
        B: "Chính xác! Lời giải: quy tắc lũy thừa của cùng một phần tử theo sau trực tiếp từ tính kết hợp và định nghĩa số mũ nguyên. Trái lại, khai triển $(ab)^n$ xen kẽ $a,b$; muốn gom thành $a^n b^n$ nói chung cần các phần tử giao hoán.",
        C: "Sai vì: các lũy thừa cùng cơ số tuân theo quy tắc cộng số mũ trong mọi nhóm; đẳng thức $(ab)^n=a^n b^n$ mới không đúng tổng quát.",
        D: "Sai vì: $(ab)^n=a^n b^n$ có thể sai trong nhóm không giao hoán; chẳng hạn trong $S_3$, nếu $a=(12)$, $b=(123)$ thì $(ab)^2=e$ nhưng $a^2b^2=(132)\\ne e$."
      }
    },
    {
      id: "c1_q14",
      chapter: 1,
      topic: "Nhóm có mọi phần tử bình phương bằng đơn vị",
      question: "Nếu $G$ là nhóm thỏa $x^2=e$ với mọi $x\\in G$, suy luận nào chứng minh $G$ giao hoán?",
      options: {
        A: "Từ $x^2=e$ suy ra $G$ có nhiều nhất hai phần tử.",
        B: "Từ $x^2=e$ suy ra mọi phần tử có cấp đúng bằng $2$.",
        C: "Vì $x=x^{-1}$ với mọi $x$, nên $ab=(ab)^{-1}=b^{-1}a^{-1}=ba$.",
        D: "Vì $x^2=e$ nên $G$ là nhóm cyclic."
      },
      correct: "C",
      explanations: {
        A: "Sai vì: nhóm Klein $V_4$ có bốn phần tử và mọi phần tử đều bình phương bằng đơn vị.",
        B: "Sai vì: phần tử đơn vị có cấp $1$, không phải cấp $2$; các phần tử khác đơn vị mới có cấp $2$.",
        C: "Chính xác! Lời giải: giả thiết cho $x^{-1}=x$ với mọi $x$. Áp dụng cho $ab$, ta có $ab=(ab)^{-1}=b^{-1}a^{-1}=ba$, nên mọi cặp giao hoán.",
        D: "Sai vì: $V_4$ thỏa điều kiện nhưng không cyclic; tính chất bảo đảm Abel chứ không bảo đảm cyclic."
      }
    },
    {
      id: "c1_q15",
      chapter: 1,
      topic: "Quy ước đọc bảng Cayley",
      question: "Theo quy ước bảng Cayley của giáo trình, muốn tra tích $xy$ thì phải đọc ô nào?",
      options: {
        A: "Hàng $x$, cột $y$.",
        B: "Hàng $y$, cột $x$.",
        C: "Luôn lấy ô trên đường chéo chính.",
        D: "Hàng $x^{-1}$, cột $y^{-1}$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: theo quy ước, ô ở hàng $x$ và cột $y$ chứa kết quả phép toán $xy$.",
        B: "Sai vì: hàng $y$, cột $x$ sẽ tra tích $yx$, có thể khác $xy$ trong nhóm không giao hoán.",
        C: "Sai vì: đường chéo chính chỉ cho các tích dạng $xx$, không cho một tích bất kỳ $xy$.",
        D: "Sai vì: đây không phải quy tắc đọc bảng; tra nghịch đảo chỉ cần thiết nếu câu hỏi yêu cầu xác định phần tử nghịch đảo."
      }
    },
    {
      id: "c1_q16",
      chapter: 1,
      topic: "Bảng Cayley và hình vuông Latinh",
      question: "Vì sao trong bảng Cayley của một nhóm hữu hạn, mỗi phần tử xuất hiện đúng một lần trên mỗi hàng và mỗi cột?",
      options: {
        A: "Vì nhóm hữu hạn luôn giao hoán.",
        B: "Vì tính kết hợp buộc mọi ô trong hàng phải khác nhau.",
        C: "Vì phần tử đơn vị xuất hiện đúng một lần trong nhóm.",
        D: "Vì luật giản ước: ánh xạ nhân trái hoặc phải bởi một phần tử cố định là song ánh."
      },
      correct: "D",
      explanations: {
        A: "Sai vì: có nhiều nhóm hữu hạn không giao hoán, chẳng hạn $S_3$; tính chất hình vuông Latinh vẫn đúng.",
        B: "Sai vì: chỉ từ tính kết hợp chưa có luật giản ước; việc nhân bởi phần tử trong nhóm khả nghịch mới cho ánh xạ một-một và toàn ánh.",
        C: "Sai vì: tính duy nhất của đơn vị không giải thích sự xuất hiện đúng một lần của mọi phần tử trên từng hàng, cột.",
        D: "Chính xác! Lời giải: cố định hàng $x$, nếu $xy_1=xy_2$ thì giản ước trái cho $y_1=y_2$; do hữu hạn, các kết quả chạy qua mọi phần tử đúng một lần. Tương tự theo cột bằng giản ước phải."
      }
    },
    {
      id: "c1_q17",
      chapter: 1,
      topic: "Nhóm đối xứng và quy ước hợp thành",
      question: "Trong $S_n$, dùng quy ước tích hoán vị đọc từ phải sang trái, phát biểu nào đúng?",
      options: {
        A: "$(12)(123)=(13)$, vì phải áp dụng $(12)$ trước.",
        B: "$(12)(123)=(23)$; đồng thời hai chuyển vị rời nhau $(12)$ và $(34)$ giao hoán.",
        C: "$(12)(34)\\ne(34)(12)$ vì mọi chuyển vị đều không giao hoán.",
        D: "$(123)$ có cấp $2$ và $(12)(34)$ có cấp $3$."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: theo quy ước phải sang trái, áp dụng $(123)$ trước rồi $(12)$; tính ảnh các phần tử cho kết quả $(23)$.",
        B: "Chính xác! Lời giải: hợp thành từ phải sang trái cho $(12)(123)=(23)$. Hai chuyển vị rời nhau tác động trên các tập phần tử rời nhau nên $(12)(34)=(34)(12)$.",
        C: "Sai vì: các chuyển vị rời nhau giao hoán; không thể kết luận mọi chuyển vị đều không giao hoán với nhau.",
        D: "Sai vì: chu trình độ dài $3$ có cấp $3$, còn tích của hai chuyển vị rời nhau có cấp $2$."
      }
    },
    {
      id: "c1_q18",
      chapter: 1,
      topic: "Nhóm Dihedral",
      question: "Với nhóm đối xứng đa giác đều $D_{2n}$, quy ước $|D_{2n}|=2n$, $r^n=e$, $s^2=e$ và $sr=r^{-1}s$. Kết luận nào đúng?",
      options: {
        A: "$|D_{2n}|=n$ và mọi phép lật có bình phương là $r$.",
        B: "$|D_{2n}|=2n$, nhưng $sr=rs$ với mọi $r,s$.",
        C: "$|D_{2n}|=2n$ và với mọi $k$, $(r^k s)^2=e$, nên mỗi phép lật là tự nghịch đảo.",
        D: "$|D_{2n}|=2n$ và $(r^k s)^2=r^{2k}$."
      },
      correct: "C",
      explanations: {
        A: "Sai vì: nhóm dihedral gồm $n$ phép quay và $n$ phép lật, tổng cộng $2n$; phép lật tự nghịch đảo.",
        B: "Sai vì: quan hệ cơ bản là $sr=r^{-1}s$, không phải phép quay và phép lật giao hoán nói chung.",
        C: "Chính xác! Lời giải: $sr^k=r^{-k}s$, do đó $(r^k s)^2=r^k(sr^k)s=r^kr^{-k}s^2=e$. Vậy phép lật $r^ks$ có nghịch đảo chính nó.",
        D: "Sai vì: dùng quan hệ $sr^k=r^{-k}s$ sẽ làm các lũy thừa quay triệt tiêu, không tạo ra $r^{2k}$."
      }
    },
    {
      id: "c1_q19",
      chapter: 1,
      topic: "Nhóm ma trận khả nghịch",
      question: "Phát biểu nào vừa đúng về tính giao hoán của $\\mathrm{GL}_2(\\mathbb{R})$, vừa nêu đúng công thức nghịch đảo của $A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$?",
      options: {
        A: "$\\mathrm{GL}_2(\\mathbb{R})$ không giao hoán; với $\\det A=ad-bc\\ne0$, $A^{-1}=\\dfrac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$.",
        B: "$\\mathrm{GL}_2(\\mathbb{R})$ giao hoán; công thức nghịch đảo là $A^{-1}=\\dfrac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$.",
        C: "$\\mathrm{GL}_2(\\mathbb{R})$ không giao hoán; công thức nghịch đảo dùng mẫu số $a+d$.",
        D: "$\\mathrm{GL}_2(\\mathbb{R})$ không giao hoán; $A^{-1}=\\dfrac{1}{ad-bc}\\begin{pmatrix}a&c\\\\b&d\\end{pmatrix}$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: ma trận khả nghịch có $\\det A=ad-bc\\ne0$ và nghịch đảo là $\\dfrac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$. Phép nhân không giao hoán, chẳng hạn $P=\\begin{pmatrix}1&0\\\\0&2\\end{pmatrix}$ và $Q=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$ đều khả nghịch nhưng $PQ=\\begin{pmatrix}0&1\\\\2&0\\end{pmatrix}\\ne\\begin{pmatrix}0&2\\\\1&0\\end{pmatrix}=QP$.",
        B: "Sai vì: công thức nghịch đảo đúng nhưng kết luận giao hoán sai; hai ma trận khả nghịch $P=\\begin{pmatrix}1&0\\\\0&2\\end{pmatrix}$ và $Q=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$ thỏa $PQ\\ne QP$.",
        C: "Sai vì: mẫu số phải là định thức $ad-bc$, không phải vết $a+d$; điều kiện khả nghịch là $ad-bc\\ne0$.",
        D: "Sai vì: tử số phải là ma trận phụ hợp $\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$; hoán vị các phần tử và dấu như phương án này không cho nghịch đảo tổng quát."
      }
    },
    {
      id: "c1_q20",
      chapter: 1,
      topic: "Nhóm đơn vị modulo và định lý Bézout",
      question: "Trong $U(10)$, khẳng định nào đúng về số phần tử và nghịch đảo của $[3]_{10}$?",
      options: {
        A: "$|U(10)|=10$ và $[3]^{-1}=[3]$ vì $3$ lẻ.",
        B: "$|U(10)|=\\varphi(10)=4$ và $[3]^{-1}=[7]$, vì $3\\cdot7=21\\equiv1\\pmod{10}$.",
        C: "$|U(10)|=5$ và $[3]$ không khả nghịch vì $3$ không chia hết $10$.",
        D: "$|U(10)|=\\varphi(10)=4$, nhưng $[3]$ không khả nghịch vì $3$ không nguyên tố."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: $U(10)$ chỉ gồm các lớp nguyên tố cùng nhau với $10$, không phải cả 10 lớp; hơn nữa $3^2=9\\not\\equiv1\\pmod{10}$.",
        B: "Chính xác! Lời giải: các đơn vị modulo $10$ là $[1],[3],[7],[9]$, nên số lượng là $\\varphi(10)=4$. Vì $\\gcd(3,10)=1$ và $3\\cdot7=21\\equiv1\\pmod{10}$, nghịch đảo của $[3]$ là $[7]$.",
        C: "Sai vì: $|U(10)|=4$; điều kiện khả nghịch là $\\gcd(3,10)=1$, không phải một điều kiện về việc $3$ chia hết $10$.",
        D: "Sai vì: tính nguyên tố của số $3$ không liên quan; một lớp modulo $n$ khả nghịch khi và chỉ khi đại diện nguyên tố cùng nhau với $n$."
      }
    }
  ];

  const questionsChapter1_Part2 = [
    {
      id: "c1_q21",
      chapter: 1,
      topic: "Phép toán tham số và nghịch đảo",
      question: "Cho $k\\in\\mathbb{Q}\\setminus\\{0\\}$ và $G=\\mathbb{Q}\\setminus\\{1/k\\}$ với $x*y=x+y-kxy$. Khẳng định nào giải thích đúng cấu trúc phép toán trên $G$?",
      options: {
        A: "Đơn vị là $1/k$, nghịch đảo của $x$ là $-x$; loại $1/k$ chỉ để phép toán có đơn vị.",
        B: "Đơn vị là $0$, nghịch đảo của $x$ là $\\dfrac{x}{kx-1}$; loại $1/k$ bảo đảm $x*y\\ne1/k$ với mọi $x,y\\in G$.",
        C: "Đơn vị là $0$, nhưng không tồn tại nghịch đảo khi $x\\ne0$.",
        D: "Đơn vị là $k$, nghịch đảo là $\\dfrac{1}{kx}$; loại $1/k$ bảo đảm tính giao hoán."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: thế $y=1/k$ không hợp lệ và biểu thức không cho đơn vị; thay $y=0$ cho $x*0=x$, nên đơn vị là $0$.",
        B: "Chính xác! Lời giải: $x*0=0*x=x$. Giải $x*y=0$ được $y(kx-1)=x$, tức $y=x/(kx-1)$; mẫu khác $0$ vì $x\\ne1/k$. Hơn nữa $1-k(x*y)=(1-kx)(1-ky)\\ne0$ do $x,y\\ne1/k$, nên phép toán đóng trên $G$; phần tử bị loại chính là điểm làm thừa số này triệt tiêu.",
        C: "Sai vì: với $x\\ne1/k$, công thức $x^{-1}=x/(kx-1)$ là hữu tỉ và thuộc $G$; riêng $x=0$ tự nghịch đảo.",
        D: "Sai vì: kiểm tra đơn vị trực tiếp cho $0$; loại $1/k$ liên quan đến đóng và nghịch đảo chứ không phải để tạo giao hoán."
      }
    },
    {
      id: "c1_q22",
      chapter: 1,
      topic: "Phép toán tịnh tiến và lũy thừa",
      question: "Trên $\\mathbb{Z}$ đặt $a*b=a+b+c$, với $c$ cố định. Nếu $a^{*n}$ là tích $n$ bản sao của $a$, bộ ba công thức nào đúng?",
      options: {
        A: "$e=c$, $a^{-1}=-a-c$, và $a^{*n}=na+nc$.",
        B: "$e=-c$, $a^{-1}=-a$, và $a^{*n}=na+(n-1)c$.",
        C: "$e=-c$, $a^{-1}=-a-2c$, và $a^{*n}=na+(n-1)c$.",
        D: "$e=0$, $a^{-1}=-a-c$, và $a^{*n}=na+(n-1)c$."
      },
      correct: "C",
      explanations: {
        A: "Sai vì: $a*c=a+2c$ nói chung không bằng $a$; lũy thừa cũng cộng hằng số $c$ chỉ $n-1$ lần, không phải $n$ lần.",
        B: "Sai vì: nghịch đảo $b$ phải thỏa $a+b+c=e=-c$, nên $b=-a-2c$, không phải $-a$ nói chung.",
        C: "Chính xác! Lời giải: từ $a*e=a$ suy ra $e=-c$. Điều kiện $a*b=e$ cho $a+b+c=-c$, nên $b=-a-2c$. Quy nạp: $a^{*1}=a$; nếu $a^{*n}=na+(n-1)c$ thì $a^{*(n+1)}=a^{*n}*a=(n+1)a+nc$.",
        D: "Sai vì: đơn vị phải giải từ $a+e+c=a$, do đó $e=-c$, không nhất thiết bằng $0$."
      }
    },
    {
      id: "c1_q23",
      chapter: 1,
      topic: "Nhóm ma trận tham số",
      question: "Đặt $A_t=\\begin{pmatrix}1&t\\\\0&1\\end{pmatrix}$. Giải phương trình ma trận $A_3X=A_{-2}$ trong nhóm $\\{A_t:t\\in\\mathbb{R}\\}$.",
      options: {
        A: "$X=A_{-5}=\\begin{pmatrix}1&-5\\\\0&1\\end{pmatrix}$.",
        B: "$X=A_5=\\begin{pmatrix}1&5\\\\0&1\\end{pmatrix}$.",
        C: "$X=A_{-1}=\\begin{pmatrix}1&-1\\\\0&1\\end{pmatrix}$.",
        D: "$X=A_{-2}$ vì phép nhân ma trận triệt tiêu $A_3$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: $A_sA_t=A_{s+t}$, nên $A_3^{-1}=A_{-3}$. Nhân phương trình bên trái với $A_{-3}$ được $X=A_{-3}A_{-2}=A_{-5}$.",
        B: "Sai vì: khi chuyển $A_3$ sang vế phải phải nhân nghịch đảo $A_{-3}$, do đó tham số là $-3+(-2)=-5$, không phải $5$.",
        C: "Sai vì: phép nhân trong nhóm cộng tham số cho $-3-2=-5$, không phải hiệu $-3-(-2)$.",
        D: "Sai vì: phải khử thừa số bên trái bằng nghịch đảo $A_{-3}$; $A_3$ không tự triệt tiêu."
      }
    },
    {
      id: "c1_q24",
      chapter: 1,
      topic: "Hợp thành phép biến hình afin",
      question: "Với $T_{a,b}(x)=ax+b$ và $a,c\\ne0$, hợp thành theo quy ước từ phải sang trái là:",
      options: {
        A: "$T_{a,b}\\circ T_{c,d}=T_{ac,bc+d}$.",
        B: "$T_{a,b}\\circ T_{c,d}=T_{a+c,b+d}$.",
        C: "$T_{a,b}\\circ T_{c,d}=T_{ac,ad+b}$.",
        D: "$T_{a,b}\\circ T_{c,d}=T_{ac,ab+d}$."
      },
      correct: "C",
      explanations: {
        A: "Sai vì: áp dụng $T_{c,d}$ trước, nên hệ số $a$ của phép biến hình ngoài nhân cả với hạng tử dịch $d$.",
        B: "Sai vì: hệ số của hợp thành là tích $ac$, không phải tổng $a+c$.",
        C: "Chính xác! Lời giải: $(T_{a,b}\\circ T_{c,d})(x)=T_{a,b}(cx+d)=a(cx+d)+b=acx+ad+b$, nên kết quả là $T_{ac,ad+b}$.",
        D: "Sai vì: phần tịnh tiến thu được là $ad+b$; hạng tử $ab+d$ không xuất hiện khi khai triển."
      }
    },
    {
      id: "c1_q25",
      chapter: 1,
      topic: "Nghịch đảo phép biến hình afin",
      question: "Với $a\\ne0$, nghịch đảo của phép biến hình afin $T_{a,b}(x)=ax+b$ là:",
      options: {
        A: "$T_{a,b}^{-1}=T_{a^{-1},a^{-1}b}$.",
        B: "$T_{a,b}^{-1}=T_{a^{-1},-a^{-1}b}$.",
        C: "$T_{a,b}^{-1}=T_{-a^{-1},a^{-1}b}$.",
        D: "$T_{a,b}^{-1}=T_{a,-b}$."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: dấu phần tịnh tiến phải âm; giải $y=ax+b$ theo $x$ cho $x=a^{-1}y-a^{-1}b$.",
        B: "Chính xác! Lời giải: từ $y=ax+b$ suy ra $x=a^{-1}y-a^{-1}b$. Do đó phép ngược là $T_{a^{-1},-a^{-1}b}$; hợp thành hai chiều đều cho $T_{1,0}$.",
        C: "Sai vì: hệ số góc của phép ngược là $a^{-1}$, không phải $-a^{-1}$.",
        D: "Sai vì: hệ số góc phải được đảo thành $a^{-1}$; chỉ đổi dấu phần tịnh tiến là chưa đủ."
      }
    },
    {
      id: "c1_q26",
      chapter: 1,
      topic: "Phương trình và giao hoán trong Aff",
      question: "Trong $\\operatorname{Aff}(\\mathbb{R})$, giải $T_{2,3}\\circ X=T_{-4,5}$; đồng thời chọn điều kiện giao hoán đúng cho $T_{a,b}$ và $T_{c,d}$.",
      options: {
        A: "$X=T_{-2,1}$; chúng giao hoán khi $(a-1)d=(c-1)b$.",
        B: "$X=T_{-2,1}$; chúng giao hoán khi $a=c$.",
        C: "$X=T_{2,1}$; chúng giao hoán khi $ad=cb$.",
        D: "$X=T_{-2,-1}$; hai phép biến hình afin luôn giao hoán."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: $X=T_{2,3}^{-1}\\circ T_{-4,5}=T_{1/2,-3/2}\\circ T_{-4,5}=T_{-2,1}$. Mặt khác, hai chiều hợp thành lần lượt có phần dịch $ad+b$ và $cb+d$; bằng nhau khi $ad+b=cb+d$, tương đương $(a-1)d=(c-1)b$.",
        B: "Sai vì: bằng hệ số góc chỉ cho điều kiện cần vốn tự động đúng do $ac=ca$; phần tịnh tiến còn phải thỏa $ad+b=cb+d$.",
        C: "Sai vì: tham số hệ số là $(-4)/2=-2$; điều kiện giao hoán không đơn giản là $ad=cb$.",
        D: "Sai vì: $X$ tính được có phần dịch $1$; Aff nói chung không giao hoán, chỉ giao hoán khi thỏa điều kiện dịch."
      }
    },
    {
      id: "c1_q27",
      chapter: 1,
      topic: "Rút gọn tích phép quay và phép lật",
      question: "Trong $D_{2n}$, với $r^n=e$, $s^2=e$ và $sr^k=r^{-k}s$, công thức nào rút gọn đúng?",
      options: {
        A: "$sr^k=r^ks$ và $(r^ks)(r^ms)=r^{k+m}$.",
        B: "$sr^k=r^{-k}s=r^{n-k}s$ và $(r^ks)(r^ms)=r^{k-m}$.",
        C: "$sr^k=r^{n-k}s$ và $(r^ks)(r^ms)=r^{m-k}$.",
        D: "$sr^k=r^{-k}s$ và $(r^ks)(r^ms)=r^{k+m}s$."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: phép lật không giao hoán với phép quay nói chung; chuyển $r^k$ qua $s$ phải đổi số mũ thành $-k$.",
        B: "Chính xác! Lời giải: $r^{-k}=r^{n-k}$ theo $r^n=e$. Đồng thời $r^ksr^ms=r^kr^{-m}s^2=r^{k-m}$.",
        C: "Sai vì: trong tích hai phép lật, chuyển $r^m$ qua $s$ cho $r^{-m}$, nên số mũ là $k-m$, không phải $m-k$.",
        D: "Sai vì: hai phép lật triệt tiêu phần $s^2=e$; kết quả là một phép quay, không còn $s$."
      }
    },
    {
      id: "c1_q28",
      chapter: 1,
      topic: "Đối xứng trục tự nghịch đảo",
      question: "Trong nhóm dihedral, vì sao mọi phép lật $r^ks$ đều là nghịch đảo của chính nó?",
      options: {
        A: "$(r^ks)^2=r^{2k}$ vì lũy thừa của $r$ cộng lại.",
        B: "$(r^ks)^{-1}=s^{-1}r^{-k}=sr^{-k}$, khác $r^ks$ nói chung.",
        C: "$(r^ks)^2=r^ks^2=r^k$.",
        D: "$(r^ks)^2=r^k(sr^k)s=r^kr^{-k}s^2=e$, nên $(r^ks)^{-1}=r^ks$."
      },
      correct: "D",
      explanations: {
        A: "Sai vì: đã bỏ qua việc đưa $s$ qua $r^k$; quy tắc $sr^k=r^{-k}s$ làm số mũ triệt tiêu.",
        B: "Sai vì: áp dụng quan hệ dihedral cho thấy $sr^{-k}=r^ks$, nên biểu thức nghịch đảo thực ra bằng $r^ks$.",
        C: "Sai vì: không thể tùy ý bỏ $s$ giữa hai thừa số; phải dùng quan hệ $sr^k=r^{-k}s$.",
        D: "Chính xác! Lời giải: $sr^k=r^{-k}s$ và $s^2=e$, nên $(r^ks)^2=r^k r^{-k}s^2=e$. Một phần tử có bình phương bằng đơn vị chính là nghịch đảo của nó."
      }
    },
    {
      id: "c1_q29",
      chapter: 1,
      topic: "Tính toán cụ thể trong nhóm dihedral",
      question: "Trong $D_8$ (nhóm đối xứng hình vuông, $r^4=e$), rút gọn $(r^3s)(r^2s)$ và tìm $(r^2s)^{-1}$.",
      options: {
        A: "Tích bằng $r$ và $(r^2s)^{-1}=r^2s$.",
        B: "Tích bằng $r^5$ và $(r^2s)^{-1}=r^{-2}$.",
        C: "Tích bằng $r^{-1}$ và $(r^2s)^{-1}=r^2s$.",
        D: "Tích bằng $r^5s$ và $(r^2s)^{-1}=r^2$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: $(r^3s)(r^2s)=r^{3-2}=r$; số mũ được xét modulo $4$. Mọi phần tử dạng $r^ks$ là phép lật và tự nghịch đảo, nên $(r^2s)^{-1}=r^2s$.",
        B: "Sai vì: $r^5=r$ trong $D_8$, nhưng nghịch đảo của phép lật là $r^2s$, không phải phép quay $r^{-2}$.",
        C: "Sai vì: nghịch đảo nêu đúng, nhưng tích hai phép lật là $r^{3-2}=r$, không phải $r^{-1}=r^3$.",
        D: "Sai vì: hai phép lật nhân thành phép quay $r$, không còn $s$; nghịch đảo của $r^2s$ vẫn là chính nó."
      }
    },
    {
      id: "c1_q30",
      chapter: 1,
      topic: "Nghịch đảo tích nhiều thừa số",
      question: "Trong một nhóm không giao hoán, công thức nghịch đảo của tích $a_1a_2\\cdots a_k$ là:",
      options: {
        A: "$(a_1a_2\\cdots a_k)^{-1}=a_1^{-1}a_2^{-1}\\cdots a_k^{-1}$.",
        B: "$(a_1a_2\\cdots a_k)^{-1}=a_k^{-1}a_{k-1}^{-1}\\cdots a_1^{-1}$.",
        C: "$(a_1a_2\\cdots a_k)^{-1}=a_k a_{k-1}\\cdots a_1$.",
        D: "$(a_1a_2\\cdots a_k)^{-1}=a_1a_2\\cdots a_k$."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: thứ tự không thể được giữ nguyên trong nhóm phi Abel; hai phía triệt tiêu chỉ khi các nghịch đảo được xếp ngược thứ tự.",
        B: "Chính xác! Lời giải: áp dụng lặp công thức $(ab)^{-1}=b^{-1}a^{-1}$; với ba thừa số, $(a_1a_2a_3)^{-1}=a_3^{-1}a_2^{-1}a_1^{-1}$, và tiếp tục cho $k$ thừa số.",
        C: "Sai vì: công thức phải dùng nghịch đảo từng thừa số, không phải bản thân các thừa số.",
        D: "Sai vì: tích không nhất thiết là tự nghịch đảo; điều này chỉ đúng trong trường hợp đặc biệt."
      }
    },
    {
      id: "c1_q31",
      chapter: 1,
      topic: "Giải phương trình nhiều biến trong nhóm",
      question: "Trong nhóm không giao hoán, từ $a_1a_2xb_1b_2b_3=c$, biểu thức nào giải đúng theo $x$?",
      options: {
        A: "$x=a_1^{-1}a_2^{-1}c b_1^{-1}b_2^{-1}b_3^{-1}$.",
        B: "$x=a_2a_1 c b_3b_2b_1$.",
        C: "$x=a_2^{-1}a_1^{-1}c b_3^{-1}b_2^{-1}b_1^{-1}$.",
        D: "$x=a_2^{-1}a_1^{-1}b_3^{-1}b_2^{-1}b_1^{-1}c$."
      },
      correct: "C",
      explanations: {
        A: "Sai vì: nghịch đảo của tiền tố bên trái phải theo thứ tự đảo: $a_2^{-1}a_1^{-1}$; các thừa số bên phải cũng bị đảo.",
        B: "Sai vì: phải nhân bằng nghịch đảo ở mỗi phía, không thể bỏ nghịch đảo hoặc đảo vị trí tùy ý.",
        C: "Chính xác! Lời giải: nhân bên trái với $(a_1a_2)^{-1}=a_2^{-1}a_1^{-1}$ và bên phải với $(b_1b_2b_3)^{-1}=b_3^{-1}b_2^{-1}b_1^{-1}$. Tính kết hợp và giản ước cho $x=a_2^{-1}a_1^{-1}c b_3^{-1}b_2^{-1}b_1^{-1}$.",
        D: "Sai vì: các nghịch đảo bên phải phải nhân ở bên phải của $c$ để triệt tiêu hậu tố; không được chuyển qua $c$."
      }
    },
    {
      id: "c1_q32",
      chapter: 1,
      topic: "Bẫy đổi thứ tự khi giản ước",
      question: "Trong $S_3$ với quy ước hợp thành từ phải sang trái, giải $(12)x(123)=e$. Giá trị nào đúng?",
      options: {
        A: "$x=(13)$; không được đổi chỗ các nghịch đảo khi khử hai phía.",
        B: "$x=(23)$ vì $(123)^{-1}(12)^{-1}=(23)$.",
        C: "$x=(12)(123)=(23)$.",
        D: "$x=e$ vì các thừa số bên trái và bên phải tự triệt tiêu."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: nhân trái với $(12)^{-1}=(12)$ và phải với $(123)^{-1}=(132)$, được $x=(12)(132)=(13)$. Đổi thứ tự thành $(132)(12)$ sẽ cho phần tử khác.",
        B: "Sai vì: nghịch đảo phải nhân ở phía phải sau khi khử thừa số bên trái; $(132)(12)$ không phải biểu thức của nghiệm và bằng $(23)$.",
        C: "Sai vì: cách này không khử hậu tố $(123)$; thay vào phương trình sẽ không cho đơn vị.",
        D: "Sai vì: hai thừa số ngoài không phải nghịch đảo đặt cạnh nhau; có $x$ nằm giữa và nhóm không giao hoán."
      }
    },
    {
      id: "c1_q33",
      chapter: 1,
      topic: "Tiên đề một phía dẫn đến nhóm",
      question: "Giả sử phép toán kết hợp trên $G$, có đơn vị trái $e$ và mỗi $x\\in G$ có nghịch đảo trái $y$ sao cho $yx=e$. Kết luận nào đúng?",
      options: {
        A: "Chưa đủ thành nhóm vì phải giả sử thêm giao hoán.",
        B: "Đã đủ để $(G,*)$ là nhóm; dùng nghịch đảo trái của $y$ và tính kết hợp suy ra $xy=e$.",
        C: "Chỉ suy ra $e$ là đơn vị phải, nhưng không suy ra nghịch đảo hai phía.",
        D: "Chỉ đủ nếu $G$ hữu hạn."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: nhóm không cần giao hoán; tiên đề một phía đã nêu đủ nhờ tính kết hợp.",
        B: "Chính xác! Lời giải: với $x$, chọn $y$ sao cho $yx=e$, rồi chọn $z$ sao cho $zy=e$. Khi đó $x=e x=(zy)x=z(yx)=z e$. Suy ra $xy=(z e)y=z(e y)=zy=e$, nên $y$ là nghịch đảo hai phía của $x$. Cuối cùng $x e=x(yx)=(xy)x=e x=x$, nên $e$ cũng là đơn vị phải. Vậy là nhóm.",
        C: "Sai vì: lập luận trên chứng minh từng nghịch đảo trái cũng là nghịch đảo phải, rồi suy ra đơn vị phải.",
        D: "Sai vì: tính hữu hạn không cần thiết; kết hợp và các giả thiết một phía đã đủ."
      }
    },
    {
      id: "c1_q34",
      chapter: 1,
      topic: "Bất đối xứng của đơn vị và nghịch đảo",
      question: "Vì sao giả thiết chỉ có đơn vị trái và mỗi phần tử có nghịch đảo phải chưa đủ để kết luận là nhóm?",
      options: {
        A: "Thực ra các giả thiết này luôn đủ trong mọi cấu trúc kết hợp.",
        B: "Vì một đơn vị trái không thể tồn tại trong phép toán kết hợp.",
        C: "Vì nghịch đảo phải buộc phép toán phải giao hoán.",
        D: "Phản ví dụ: trên $G=\\{e,a\\}$ đặt $x*y=y$. Khi đó $e$ là đơn vị trái và mọi $x$ có nghịch đảo phải $e$, nhưng $a*e=e\\ne a$."
      },
      correct: "D",
      explanations: {
        A: "Sai vì: phản ví dụ ở phương án D thỏa kết hợp, có đơn vị trái và nghịch đảo phải cho mọi phần tử nhưng không có đơn vị hai phía.",
        B: "Sai vì: phép toán chiếu phải $x*y=y$ là kết hợp và có đơn vị trái.",
        C: "Sai vì: nghịch đảo phải không kéo theo giao hoán; điều kiện cũng không tạo ra đơn vị phải.",
        D: "Chính xác! Lời giải: phép toán $x*y=y$ kết hợp vì $(x*y)*z=z=x*(y*z)$. Chọn $e$ bất kỳ, $e*x=x$ nên là đơn vị trái; với mọi $x$, $x*e=e$, nên $e$ là nghịch đảo phải của $x$. Nhưng $a*e=e\\ne a$, vậy $e$ không là đơn vị phải và cấu trúc không là nhóm."
      }
    },
    {
      id: "c1_q35",
      chapter: 1,
      topic: "Vị nhóm hữu hạn và giản ước",
      question: "Cho $M$ là vị nhóm hữu hạn thỏa luật giản ước trái: $ax=ay\\Rightarrow x=y$. Vì sao $M$ nhất thiết là nhóm?",
      options: {
        A: "Với mỗi $a$, ánh xạ $L_a(x)=ax$ đơn ánh trên tập hữu hạn nên toàn ánh; do đó tồn tại $x$ sao cho $ax=e$, rồi giản ước trái suy ra $xa=e$.",
        B: "Vì mọi vị nhóm hữu hạn đều là nhóm, không cần giả thiết giản ước.",
        C: "Vì hữu hạn kéo theo phép toán giao hoán.",
        D: "Vì luật giản ước trái trực tiếp khẳng định mọi phần tử có nghịch đảo hai phía."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: giản ước trái làm $L_a$ đơn ánh; trên tập hữu hạn, đơn ánh kéo theo toàn ánh, nên $L_a(x)=e$ có nghiệm, tức $ax=e$. Từ $a(xa)=(ax)a=e a=a=a e$, giản ước trái cho $xa=e$. Mọi phần tử có nghịch đảo hai phía, vậy $M$ là nhóm.",
        B: "Sai vì: vị nhóm hữu hạn có thể không là nhóm (chẳng hạn $\\mathbb{Z}/4\\mathbb{Z}$ với phép nhân); hữu hạn tự nó không đảm bảo nghịch đảo nếu thiếu luật giản ước.",
        C: "Sai vì: hữu hạn không làm phép toán giao hoán; giả thiết chỉ tạo song ánh tịnh tiến và nghịch đảo.",
        D: "Sai vì: luật giản ước trái là tính chất khử; cần kết hợp với tính hữu hạn để suy ra ánh xạ tịnh tiến toàn ánh."
      }
    },
    {
      id: "c1_q36",
      chapter: 1,
      topic: "Phân loại nhóm cấp hai",
      question: "Cho nhóm $G=\\{e,a\\}$ có đúng hai phần tử. Vì sao bắt buộc $a^2=e$ và $G$ giao hoán?",
      options: {
        A: "Vì mọi nhóm có ít nhất hai phần tử đều giao hoán.",
        B: "Vì $a^2=a$ do $a$ là đơn vị khác $e$.",
        C: "Tích $a^2$ chỉ có thể là $e$ hoặc $a$; nếu $a^2=a$ thì giản ước $a$ cho $a=e$, mâu thuẫn. Do đó bảng chỉ có thể hoán vị hai phần tử và phép toán giao hoán.",
        D: "Vì nhóm cấp hai nhất thiết có mọi phần tử tự nghịch đảo theo định nghĩa nhóm."
      },
      correct: "C",
      explanations: {
        A: "Sai vì: nhóm có cấp lớn hơn hai có thể không giao hoán, như $S_3$; kết luận ở đây dựa riêng trên chỉ có hai phần tử.",
        B: "Sai vì: nếu $a^2=a$ thì nhân trái với $a^{-1}$ suy ra $a=e$, trái giả thiết.",
        C: "Chính xác! Lời giải: đóng buộc $a^2\\in\\{e,a\\}$. Trường hợp $a^2=a$ bị loại bằng giản ước, nên $a^2=e$. Các tích với đơn vị cố định; bảng còn $a a=e$, do đó bảng đối xứng và nhóm Abel.",
        D: "Sai vì: tự nghịch đảo không phải định nghĩa cho mọi nhóm; tính chất này được suy ra ở nhóm cấp hai."
      }
    },
    {
      id: "c1_q37",
      chapter: 1,
      topic: "Phân loại nhóm cấp ba",
      question: "Với nhóm $G=\\{e,a,b\\}$ có cấp $3$, kết luận nào luôn đúng?",
      options: {
        A: "Có thể có một nhóm không cyclic nếu $a$ và $b$ không giao hoán.",
        B: "Mọi phần tử khác đơn vị có cấp $3$; chọn $a\\ne e$ thì $b=a^2$, nên bảng Cayley duy nhất sai khác phép đổi tên và $G$ cyclic Abel.",
        C: "Có đúng hai bảng Cayley không đẳng cấu, tùy $a^2=e$ hay $a^2=b$.",
        D: "Nhóm cấp ba có một phần tử cấp $2$ và một phần tử cấp $3$."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: nhóm cấp nguyên tố luôn cyclic; hơn nữa không thể có hai phần tử khác đơn vị tạo ra cấu trúc phi giao hoán với chỉ ba phần tử.",
        B: "Chính xác! Lời giải: theo định lý Lagrange, cấp của phần tử chia $3$; với $a\\ne e$ cấp không thể là $1$, nên là $3$. Vì vậy $a^2\\ne e$ và phần tử còn lại là $b=a^2$; các tích được quyết định hoàn toàn: $a^3=e$. Nhóm cyclic nên giao hoán.",
        C: "Sai vì: $a^2=e$ khiến $a$ có cấp $2$, không thể xảy ra trong nhóm cấp $3$ theo Lagrange.",
        D: "Sai vì: cấp phần tử phải chia cấp nhóm $3$, nên không có phần tử cấp $2$."
      }
    },
    {
      id: "c1_q38",
      chapter: 1,
      topic: "Phân biệt nhóm cấp bốn",
      question: "Vì sao bảng Cayley của $\\mathbb{Z}/4\\mathbb{Z}$ không thể thu được từ bảng của nhóm Klein $V_4$ chỉ bằng đổi tên phần tử?",
      options: {
        A: "Vì $\\mathbb{Z}/4\\mathbb{Z}$ không giao hoán còn $V_4$ giao hoán.",
        B: "Vì hai nhóm có số phần tử khác nhau.",
        C: "Vì $V_4$ có phần tử cấp $4$, còn $\\mathbb{Z}/4\\mathbb{Z}$ không có phần tử cấp $4$.",
        D: "$\\mathbb{Z}/4\\mathbb{Z}$ có một phần tử cấp $2$ và hai phần tử cấp $4$; $V_4$ có ba phần tử cấp $2$. Đẳng cấu bảo toàn cấp phần tử."
      },
      correct: "D",
      explanations: {
        A: "Sai vì: cả hai nhóm đều giao hoán.",
        B: "Sai vì: cả hai đều có cấp $4$.",
        C: "Sai vì: phát biểu đã đảo ngược; $[1]$ và $[3]$ có cấp $4$ trong $\\mathbb{Z}/4\\mathbb{Z}$, còn $V_4$ không có phần tử cấp $4$.",
        D: "Chính xác! Lời giải: trong nhóm cyclic cấp $4$, hai phần tử sinh có cấp $4$, còn $[2]$ có cấp $2$. Trong $V_4$, cả ba phần tử khác đơn vị đều có cấp $2$. Vì đổi tên tương ứng với đẳng cấu và đẳng cấu bảo toàn cấp, hai bảng không thể trùng sau đổi tên."
      }
    },
    {
      id: "c1_q39",
      chapter: 1,
      topic: "Giải phương trình bằng bảng Cayley",
      question: "Trong bảng Cayley chuẩn (hàng $x$, cột $y$ ghi $xy$), muốn giải $ax=b$ và $ya=b$ trực tiếp từ bảng thì phải làm gì?",
      options: {
        A: "Với $ax=b$, tìm $b$ ở cột $a$; với $ya=b$, tìm $b$ ở hàng $a$.",
        B: "Cả hai phương trình đều tìm $b$ trong hàng $a$ vì phép toán kết hợp.",
        C: "Với $ax=b$, tìm ô $b$ trong hàng $a$ rồi lấy nhãn cột là $x$; với $ya=b$, tìm ô $b$ trong cột $a$ rồi lấy nhãn hàng là $y$.",
        D: "Tìm đơn vị $e$ trước; không thể xác định nghiệm chỉ từ một hàng hay một cột."
      },
      correct: "C",
      explanations: {
        A: "Sai vì: quy ước bảng đặt thừa số trái ở hàng và thừa số phải ở cột; hai hướng đã bị hoán đổi.",
        B: "Sai vì: phương trình $ya=b$ cố định thừa số phải $a$, nên phải tra cột $a$, không phải hàng $a$.",
        C: "Chính xác! Lời giải: trong $ax=b$, cố định hàng $a$ và tìm kết quả $b$; cột tương ứng cho nghiệm $x$. Trong $ya=b$, cố định cột $a$ và tìm $b$; hàng tương ứng cho nghiệm $y$. Tính giản ước bảo đảm nghiệm duy nhất.",
        D: "Sai vì: vị trí trong hàng hoặc cột xác định trực tiếp nghiệm; không cần thử từng phần tử hay tìm đơn vị trước."
      }
    },
    {
      id: "c1_q40",
      chapter: 1,
      topic: "Phần tử lũy đẳng trong nhóm",
      question: "Nếu $x$ thuộc một nhóm và thỏa mãn $x^2=x$, phần tử $x$ bắt buộc là gì?",
      options: {
        A: "Phần tử đơn vị $e$, vì nhân hai vế bên trái với $x^{-1}$ cho $x=e$.",
        B: "Một phần tử cấp $2$, vì $x^2=x$.",
        C: "Bất kỳ phần tử nào trong nhóm Abel.",
        D: "Không thể xảy ra vì định nghĩa nhóm đòi hỏi $x^2\\ne x$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: từ $x^2=x$, nhân trái hai vế với $x^{-1}$ và dùng tính kết hợp được $x=e$. Ngược lại $e^2=e$, nên đơn vị là phần tử lũy đẳng duy nhất trong nhóm.",
        B: "Sai vì: phần tử cấp $2$ thỏa $x^2=e$ với $x\\ne e$, không thỏa $x^2=x$.",
        C: "Sai vì: phương trình cùng lũy thừa này trong nhóm buộc $x=e$, không phải tùy ý.",
        D: "Sai vì: nhóm luôn có $e^2=e$; tính chất này là hệ quả của nghịch đảo, không mâu thuẫn định nghĩa."
      }
    }
  ];

  // ====================================================================
  // NGÂN HÀNG MỞ RỘNG CHƯƠNG 2 (10 CÂU: c2_q01 -> c2_q10)
  // ====================================================================
  const questionsChapter2 = [
    {
      id: "c2_q01",
      chapter: 2,
      topic: "Tiêu chuẩn nhóm con rút gọn dạng cộng (Định lý 2.2 & Bài tập 2.1)",
      question: "Trong nhóm cộng $(\\mathbb{Z}, +)$, xét ba tập hợp con: $H_1 = 5\\mathbb{Z}$, $H_2 = \\mathbb{N} = \\{m \\in \\mathbb{Z} \\mid m \\ge 0\\}$, và $H_3 = 2\\mathbb{Z} + 1$. Tập nào là nhóm con của $(\\mathbb{Z}, +)$?",
      options: {
        A: "Cả $H_1$ và $H_2$ vì cả hai đều đóng đối với phép cộng.",
        B: "Chỉ có $H_1 = 5\\mathbb{Z}$; tập $H_2$ vi phạm vì $2 - 5 = -3 \\notin \\mathbb{N}$, còn $H_3$ không chứa đơn vị $0$ và không đóng.",
        C: "Cả ba tập đều là nhóm con của $(\\mathbb{Z}, +)$.",
        D: "Chỉ có $H_2 = \\mathbb{N}$ vì nó chứa phần tử đơn vị $0$."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: Tập vô hạn $H_2 = \\mathbb{N}$ tuy đóng với phép cộng nhưng không chứa số đối của các số nguyên dương ($-1 \\notin \\mathbb{N}$).",
        B: "Chính xác! Lời giải: Với $5\\mathbb{Z}$, $0 \\in 5\\mathbb{Z}$ và $5k - 5l = 5(k-l) \\in 5\\mathbb{Z}$ nên $5\\mathbb{Z} \\le \\mathbb{Z}$. Với $\\mathbb{N}$, $2, 5 \\in \\mathbb{N}$ nhưng $2 - 5 = -3 \\notin \\mathbb{N}$. Với $2\\mathbb{Z}+1$, $0 \\notin 2\\mathbb{Z}+1$ và $3 - 1 = 2 \\notin 2\\mathbb{Z}+1$.",
        C: "Sai vì: $H_2$ thiếu phần tử đối còn $H_3$ thiếu đơn vị $0$ và không đóng.",
        D: "Sai vì: Chứa đơn vị $0$ và đóng với cộng trên tập vô hạn chưa đủ để làm nhóm con nếu thiếu phần tử đối."
      }
    },
    {
      id: "c2_q02",
      chapter: 2,
      topic: "Tiêu chuẩn nhóm con cho tập con hữu hạn (Định lý 2.3 & Bài tập 2.2)",
      question: "Trong nhóm đối xứng $S_3$, xét ba tập con hữu hạn: $H = \\{e, (123), (132)\\}$, $K = \\{e, (12), (13)\\}$ và $L = \\{e, (12)\\}$. Khẳng định nào ĐÚNG?",
      options: {
        A: "Cả $H, K, L$ đều là nhóm con của $S_3$ vì mọi phần tử trong mỗi tập đều có nghịch đảo nằm trong tập đó.",
        B: "$H$ và $L$ là nhóm con của $S_3$; còn $K$ không phải là nhóm con vì $(12)(13) = (132) \\notin K$.",
        C: "Chỉ có $H$ là nhóm con, còn $L$ không phải là nhóm con vì chỉ có 2 phần tử.",
        D: "Không tập nào là nhóm con vì $S_3$ không giao hoán."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: Trong $K$, dù $(12)^{-1}=(12)\\in K$ và $(13)^{-1}=(13)\\in K$, tập $K$ không đóng dưới phép nhân: $(12)(13)=(132)\\notin K$.",
        B: "Chính xác! Lời giải: Theo Định lý 2.3, tập con hữu hạn khác rỗng là nhóm con khi và chỉ khi nó đóng với phép nhân. $H = A_3$ và $L = \\langle(12)\\rangle$ đóng với phép nhân nên là nhóm con; còn $K$ thất bại vì $(12)(13) = (132) \\notin K$.",
        C: "Sai vì: $(12)^2 = e \\in L$ nên $L$ đóng với phép nhân và là nhóm con cấp $2$ của $S_3$.",
        D: "Sai vì: Một nhóm không giao hoán vẫn có các nhóm con (thậm chí các nhóm con cyclic $H$ và $L$ ở đây đều giao hoán)."
      }
    },
    {
      id: "c2_q03",
      chapter: 2,
      topic: "Giao và hợp của các nhóm con (Định lý 2.4 & Định lý 2.5)",
      question: "Cho $H, K$ là hai nhóm con của nhóm $G$. Phát biểu nào sau đây mô tả đúng tính chất của giao $H \\cap K$ và hợp $H \\cup K$?",
      options: {
        A: "Cả $H \\cap K$ và $H \\cup K$ đều luôn là nhóm con của $G$.",
        B: "$H \\cap K$ luôn là nhóm con của $G$; còn $H \\cup K$ là nhóm con của $G$ khi và chỉ khi $H \\subseteq K$ hoặc $K \\subseteq H$.",
        C: "$H \\cup K$ luôn là nhóm con, còn $H \\cap K$ có thể rỗng nên không là nhóm con.",
        D: "$H \\cup K$ là nhóm con khi và chỉ khi $H \\cap K = \\{e\\}$."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: Hợp của hai nhóm con nói chung không đóng, ví dụ $2\\mathbb{Z} \\cup 3\\mathbb{Z}$ chứa $2$ và $3$ nhưng không chứa $2+3=5$.",
        B: "Chính xác! Lời giải: Theo Định lý 2.4, giao của họ nhóm con bất kỳ luôn là nhóm con. Theo Định lý 2.5, $H \\cup K \\le G \\iff H \\subseteq K$ hoặc $K \\subseteq H$.",
        C: "Sai vì: Mọi nhóm con đều chứa phần tử đơn vị $e$, nên $e \\in H \\cap K$ (giao không bao giờ rỗng).",
        D: "Sai vì: Nếu $H \\cap K = \\{e\\}$ với $H, K$ khác $\\{e\\}$ thì tồn tại $h \\in H \\setminus K, k \\in K \\setminus H$ làm $hk \\notin H \\cup K$."
      }
    },
    {
      id: "c2_q04",
      chapter: 2,
      topic: "Nhóm con sinh bởi tập hợp (Định nghĩa 2.6)",
      question: "Cho $S$ là một tập con của nhóm $G$. Nhóm con sinh bởi $S$, ký hiệu $\\langle S \\rangle$, được xác định tương đương bởi khẳng định nào sau đây?",
      options: {
        A: "Là giao của tất cả các nhóm con của $G$ chứa $S$, đồng thời là tập mọi tích hữu hạn các phần tử của $S$ và nghịch đảo của chúng (với quy ước $\\langle \\emptyset \\rangle = \\{e\\}$).",
        B: "Là tập hợp chỉ gồm các lũy thừa dương $s^k$ ($k \\ge 1$) của một phần tử $s \\in S$.",
        C: "Là hợp của tất cả các nhóm con chứa trong $S$.",
        D: "Luôn bằng toàn bộ nhóm mẹ $G$ với mọi tập con $S \\neq \\emptyset$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: Theo Định nghĩa 2.6, $\\langle S \\rangle = \\bigcap_{S \\subseteq H \\le G} H$ là nhóm con nhỏ nhất chứa $S$, được mô tả từ dưới lên bởi $\\{x_1^{k_1}\\cdots x_m^{k_m} \\mid x_i \\in S, k_i \\in \\mathbb{Z}\\}$ và $\\langle \\emptyset \\rangle = \\{e\\}$.",
        B: "Sai vì: Nếu chỉ lấy lũy thừa dương trên tập vô hạn (như $S=\\{1\\}$ trong $\\mathbb{Z}$) sẽ thiếu phần tử đơn vị $0$ và các phần tử nghịch đảo (số âm).",
        C: "Sai vì: $\\langle S \\rangle$ là giao của các nhóm con chứa $S$, không phải hợp các nhóm con nằm trong $S$.",
        D: "Sai vì: Chẳng hạn trong $\\mathbb{Z}$, $\\langle \\{2\\} \\rangle = 2\\mathbb{Z} \\neq \\mathbb{Z}$."
      }
    },
    {
      id: "c2_q05",
      chapter: 2,
      topic: "Cấp của phần tử và điều kiện lũy thừa bằng đơn vị (Định nghĩa 2.7)",
      question: "Cho phần tử $a \\in G$ có cấp hữu hạn $\\operatorname{ord}(a) = n$. Với các số nguyên $r, s, k \\in \\mathbb{Z}$, khẳng định nào sau đây là ĐÚNG?",
      options: {
        A: "$a^k = e \\iff k \\mid n$, và $a^r = a^s \\iff r = s$.",
        B: "$a^k = e \\iff n \\mid k$, và $a^r = a^s \\iff r \\equiv s \\pmod n$.",
        C: "$\\operatorname{ord}(a) = 0$ nếu $a = e$.",
        D: "Mọi ước của $k$ đều là bội của $n$."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: Đã đảo ngược quan hệ chia hết ($n$ phải là ước của $k$), và đẳng thức $r=s$ chỉ là điều kiện cần khi $\\operatorname{ord}(a) = \\infty$.",
        B: "Chính xác! Lời giải: Theo Định nghĩa 2.7, khi $\\operatorname{ord}(a) = n < \\infty$, phép chia Euclid $k = nq + r$ ($0 \\le r < n$) cho thấy $a^k = (a^n)^q a^r = a^r = e \\iff r = 0 \\iff n \\mid k$. Suy ra $a^r = a^s \\iff a^{r-s} = e \\iff r \\equiv s \\pmod n$.",
        C: "Sai vì: Phần tử đơn vị $e$ là phần tử duy nhất có cấp bằng $1$ ($e^1 = e$); không có phần tử nào có cấp bằng $0$.",
        D: "Sai vì: Điều kiện đúng là $k$ phải là bội của $n$ khi $a^k = e$."
      }
    },
    {
      id: "c2_q06",
      chapter: 2,
      topic: "Cấp phần tử và phần tử sinh trong Z/18Z (Bài tập 2.12)",
      question: "Trong nhóm cộng cyclic $G = \\mathbb{Z}/18\\mathbb{Z}$, cấp của phần tử $[15]_{18}$, số lượng phần tử sinh của $G$, và nhóm con duy nhất cấp $6$ của $G$ lần lượt là:",
      options: {
        A: "$\\operatorname{ord}([15]) = 6$; có $\\varphi(18) = 6$ phần tử sinh; nhóm con duy nhất cấp $6$ là $\\langle [3]_{18} \\rangle$.",
        B: "$\\operatorname{ord}([15]) = 3$; có $6$ phần tử sinh; nhóm con cấp $6$ là $\\langle [6]_{18} \\rangle$.",
        C: "$\\operatorname{ord}([15]) = 15$; có $17$ phần tử sinh; nhóm con cấp $6$ là $\\langle [3]_{18} \\rangle$.",
        D: "$\\operatorname{ord}([15]) = 6$; có $9$ phần tử sinh; nhóm con cấp $6$ là $\\langle [6]_{18} \\rangle$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: Theo Bài tập 2.12, $\\operatorname{ord}([15]_{18}) = 18/\\gcd(18,15) = 18/3 = 6$. Số phần tử sinh là $\\varphi(18) = 6$ (gồm $[1],[5],[7],[11],[13],[17]$). Nhóm con duy nhất cấp $d=6$ là $\\langle [18/6] \\rangle = \\langle [3] \\rangle$.",
        B: "Sai vì: $3$ là $\\gcd(18,15)$ chứ không phải cấp của $[15]$; còn $\\langle [6]_{18} \\rangle = \\{[0],[6],[12]\\}$ chỉ có cấp $3$.",
        C: "Sai vì: Cấp phần tử phải chia hết $18$, và chỉ các lớp nguyên tố cùng nhau với $18$ mới sinh ra nhóm.",
        D: "Sai vì: $\\varphi(18) = 18(1-1/2)(1-1/3) = 6 \\neq 9$, và $\\langle [6] \\rangle$ có cấp $3$."
      }
    },
    {
      id: "c2_q07",
      chapter: 2,
      topic: "Định lý cơ bản về cấu trúc nhóm cyclic (Định lý 2.9)",
      question: "Cho $G = \\langle a \\rangle$ là một nhóm cyclic hữu hạn cấp $n$. Khẳng định nào sau đây là SAI?",
      options: {
        A: "Mọi nhóm con của $G$ đều là nhóm cyclic.",
        B: "Với mỗi ước dương $q \\mid n$, tồn tại duy nhất một nhóm con của $G$ có cấp bằng $q$, đó là $\\langle a^{n/q} \\rangle$.",
        C: "Với mọi $k \\in \\mathbb{Z}$, cấp của phần tử $a^k$ được tính bởi $\\operatorname{ord}(a^k) = \\dfrac{n}{\\gcd(n, k)}$.",
        D: "Với mỗi ước dương $q \\mid n$, nhóm con cấp $q$ của $G$ được sinh bởi phần tử $a^q$."
      },
      correct: "D",
      explanations: {
        A: "Sai vì đây là mệnh đề ĐÚNG theo khoản 1 Định lý 2.9 (mọi nhóm con của nhóm cyclic đều cyclic).",
        B: "Sai vì đây là mệnh đề ĐÚNG theo khoản 3 Định lý 2.9.",
        C: "Sai vì đây là mệnh đề ĐÚNG theo khoản 4 Định lý 2.9.",
        D: "Chính xác! Lời giải: Đây là bẫy số mũ rất phổ biến: phần tử $a^q$ (với $q \\mid n$) có cấp là $n/\\gcd(n,q) = n/q$, nên $\\langle a^q \\rangle$ có cấp $n/q$ chứ không phải cấp $q$. Nhóm con cấp $q$ phải là $\\langle a^{n/q} \\rangle$."
      }
    },
    {
      id: "c2_q08",
      chapter: 2,
      topic: "ƯCLN và BCNN trên mạng lưới nhóm con cyclic (Mệnh đề 2.10)",
      question: "Trong nhóm cyclic $G = \\langle a \\rangle$ có cấp $12$, xét hai nhóm con $H = \\langle a^4 \\rangle$ và $K = \\langle a^6 \\rangle$. Giao $H \\cap K$ và nhóm con sinh bởi hợp $\\langle H \\cup K \\rangle = \\langle a^4, a^6 \\rangle$ lần lượt là:",
      options: {
        A: "$H \\cap K = \\langle a^2 \\rangle$ và $\\langle a^4, a^6 \\rangle = \\langle a^{12} \\rangle = \\{e\\}$.",
        B: "$H \\cap K = \\langle a^{12} \\rangle = \\{e\\}$ và $\\langle a^4, a^6 \\rangle = \\langle a^2 \\rangle$ (có cấp $6$).",
        C: "$H \\cap K = \\langle a^4 \\rangle$ và $\\langle a^4, a^6 \\rangle = \\langle a^6 \\rangle$.",
        D: "$H \\cap K = \\langle a^{24} \\rangle$ và $\\langle a^4, a^6 \\rangle = \\langle a^{10} \\rangle = G$."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: Đã nhầm lẫn vị trí giữa $\\operatorname{lcm}(4,6)=12$ và $\\gcd(4,6)=2$.",
        B: "Chính xác! Lời giải: Theo Mệnh đề 2.10, với $c, d \\mid 12$: $\\langle a^4 \\rangle \\cap \\langle a^6 \\rangle = \\langle a^{\\operatorname{lcm}(4,6)} \\rangle = \\langle a^{12} \\rangle = \\{e\\}$; còn $\\langle a^4, a^6 \\rangle = \\langle a^{\\gcd(4,6)} \\rangle = \\langle a^2 \\rangle$ có cấp $12/2 = 6$.",
        C: "Sai vì: $4$ không chia hết $6$ và $6$ không chia hết $4$, nên hai nhóm con không chứa nhau.",
        D: "Sai vì: $\\gcd(4,6)=2$ nên $\\langle a^4, a^6 \\rangle = \\langle a^2 \\rangle$ chỉ gồm các lũy thừa chẵn của $a$, không sinh được toàn bộ $G$."
      }
    },
    {
      id: "c2_q09",
      chapter: 2,
      topic: "Bẫy nhóm giao hoán nhưng không cyclic (Mục 2.8 - Phản ví dụ U(8))",
      question: "Xét nhóm đơn vị $U(8) = \\{[1], [3], [5], [7]\\}$ với phép nhân modulo $8$. Vì sao $U(8)$ là phản ví dụ kinh điển bác bỏ mệnh đề 'Mọi nhóm Abel đều là nhóm cyclic'?",
      options: {
        A: "Vì phép nhân trên $U(8)$ không giao hoán.",
        B: "Vì $U(8)$ là nhóm Abel cấp $4$, nhưng mọi phần tử khác đơn vị đều thỏa $x^2 = [1]$ (cấp $2$), không có phần tử nào cấp $4$ và có tới 3 nhóm con cấp $2$ khác nhau.",
        C: "Vì $U(8)$ có cấp $8$ nhưng chỉ có 4 phần tử khả nghịch.",
        D: "Vì $U(8)$ không có nhóm con nào cấp $2$."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: Phép nhân modulo $8$ hoàn toàn giao hoán nên $U(8)$ là nhóm Abel.",
        B: "Chính xác! Lời giải: Trong $U(8)$, $3^2 \\equiv 5^2 \\equiv 7^2 \\equiv 1 \\pmod 8$, nên $[3],[5],[7]$ đều có cấp $2$. Không có phần tử cấp $4$ để sinh toàn bộ $U(8)$, đồng thời có tới 3 nhóm con cấp $2$ là $\\langle[3]\\rangle, \\langle[5]\\rangle, \\langle[7]\\rangle$ (trái với tính duy nhất nhóm con cùng cấp của nhóm cyclic).",
        C: "Sai vì: Cấp của $U(8)$ là $|U(8)| = \\varphi(8) = 4$, không phải $8$.",
        D: "Sai vì: $U(8)$ có tới 3 nhóm con phân biệt cùng có cấp $2$."
      }
    },
    {
      id: "c2_q10",
      chapter: 2,
      topic: "Số nghiệm của phương trình x^m = e trong nhóm cyclic (Bài tập 2.32)",
      question: "Cho $G = \\langle a \\rangle$ là nhóm cyclic cấp $n = 24$. Số nghiệm $x \\in G$ của phương trình $x^{18} = e$ là bao nhiêu, và tập nghiệm này có cấu trúc gì?",
      options: {
        A: "Có đúng $\\gcd(24, 18) = 6$ nghiệm, và chúng lập thành nhóm con duy nhất cấp $6$ là $\\langle a^4 \\rangle$.",
        B: "Có đúng $18$ nghiệm vì phương trình có bậc $18$.",
        C: "Có đúng $24/6 = 4$ nghiệm, lập thành nhóm con $\\langle a^6 \\rangle$.",
        D: "Chỉ có duy nhất $1$ nghiệm là $x = e$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: Theo Bài tập 2.32, viết $x = a^k$ ($0 \\le k < 24$), ta có $a^{18k} = e \\iff 24 \\mid 18k \\iff 4 \\mid 3k \\iff 4 \\mid k$. Vậy $k \\in \\{0, 4, 8, 12, 16, 20\\}$ gồm đúng $\\gcd(24,18) = 6$ nghiệm, tạo thành nhóm con $\\langle a^4 \\rangle$ cấp $6$.",
        B: "Sai vì: Trong nhóm cyclic cấp $24$, số nghiệm của $x^m = e$ là $\\gcd(24, m)$ chứ không phải $m$.",
        C: "Sai vì: $4 = 24/\\gcd(24,18)$ là bước nhảy của số mũ $k$, còn số lượng nghiệm là $\\gcd(24,18) = 6$.",
        D: "Sai vì: Mọi phần tử thuộc $\\langle a^4 \\rangle$ đều có cấp chia hết $6$ nên lũy thừa bậc $18$ đều bằng $e$."
      }
    }
  ];

  // ====================================================================
  // NGÂN HÀNG MỞ RỘNG CHƯƠNG 3 (10 CÂU: c3_q01 -> c3_q10)
  // ====================================================================
  const questionsChapter3 = [
    {
      id: "c3_q01",
      chapter: 3,
      topic: "Định nghĩa lớp kề và bẫy lớp kề là nhóm con (Định nghĩa 3.1)",
      question: "Cho $H$ là một nhóm con của nhóm $G$ và $g \\in G$. Khẳng định nào sau đây về lớp kề trái $gH = \\{gh \\mid h \\in H\\}$ là ĐÚNG?",
      options: {
        A: "Mọi lớp kề trái $gH$ đều là một nhóm con của $G$ với mọi $g \\in G$.",
        B: "Lớp kề trái $gH$ là một nhóm con của $G$ khi và chỉ khi $g \\in H$ (tức là $gH = H$).",
        C: "Lớp kề trái $gH$ luôn bằng lớp kề phải $Hg$ trong mọi nhóm $G$.",
        D: "Số phần tử của $gH$ phụ thuộc vào việc chọn phần tử đại diện $g$."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: Một nhóm con bắt buộc phải chứa phần tử đơn vị $e$. Nếu $g \\notin H$ thì $e \\notin gH$, nên $gH$ không thể là nhóm con.",
        B: "Chính xác! Lời giải: Theo Nhận xét tại Định nghĩa 3.1, một nhóm con phải chứa đơn vị $e$. Ta có $e \\in gH \\iff \\exists h \\in H: gh = e \\iff g = h^{-1} \\in H \\iff gH = H$. Vậy $gH$ chỉ là nhóm con khi $g \\in H$.",
        C: "Sai vì: Trong nhóm không giao hoán (như $S_3$ với $H=\\langle(12)\\rangle$), $(13)H \\neq H(13)$.",
        D: "Sai vì: Theo Định lý 3.3, ánh xạ tịnh tiến $\\lambda_g: h \\mapsto gh$ là song ánh nên $|gH| = |H|$ với mọi $g \\in G$."
      }
    },
    {
      id: "c3_q02",
      chapter: 3,
      topic: "So sánh lớp kề trái và lớp kề phải trong S_3 (Bài tập 3.1)",
      question: "Trong nhóm đối xứng $S_3$ (quy ước nhân hoán vị từ phải sang trái), xét nhóm con $H = \\langle (12) \\rangle = \\{e, (12)\\}$ và phần tử $g = (13)$. Lớp kề trái $(13)H$ và lớp kề phải $H(13)$ lần lượt là:",
      options: {
        A: "$(13)H = \\{(13), (123)\\}$ và $H(13) = \\{(13), (132)\\}$; hai lớp này khác nhau.",
        B: "$(13)H = \\{(13), (132)\\}$ và $H(13) = \\{(13), (123)\\}$.",
        C: "$(13)H = H(13) = \\{(13), (23)\\}$.",
        D: "$(13)H = H(13) = \\{e, (13)\\}$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: Theo quy ước phải sang trái, $(13)(12) = (123)$ nên $(13)H = \\{(13)e, (13)(12)\\} = \\{(13), (123)\\}$. Ngược lại $(12)(13) = (132)$ nên $H(13) = \\{e(13), (12)(13)\\} = \\{(13), (132)\\}$. Hai tập hợp này khác nhau.",
        B: "Sai vì: Đã nhân hoán vị theo thứ tự ngược (từ trái sang phải).",
        C: "Sai vì: Tích của hai chuyển vị $(13)$ và $(12)$ là một chu trình độ dài $3$, không thể là chuyển vị $(23)$.",
        D: "Sai vì: Vì $(13) \\notin H$, lớp kề $(13)H$ không thể chứa phần tử đơn vị $e$."
      }
    },
    {
      id: "c3_q03",
      chapter: 3,
      topic: "Chỉ số của nhóm con trong nhóm vô hạn (Định nghĩa 3.2)",
      question: "Xét nhóm cộng các số nguyên $G = (\\mathbb{Z}, +)$ và nhóm con $H = 3\\mathbb{Z}$. Khẳng định nào sau đây là ĐÚNG về chỉ số $[\\mathbb{Z} : 3\\mathbb{Z}]$?",
      options: {
        A: "$[\\mathbb{Z} : 3\\mathbb{Z}] = \\infty$ vì cả $\\mathbb{Z}$ và $3\\mathbb{Z}$ đều có vô hạn phần tử.",
        B: "$[\\mathbb{Z} : 3\\mathbb{Z}] = 3$, tương ứng với 3 lớp kề rời nhau là $3\\mathbb{Z}$, $1 + 3\\mathbb{Z}$ và $2 + 3\\mathbb{Z}$.",
        C: "$[\\mathbb{Z} : 3\\mathbb{Z}] = 1$ vì $\\mathbb{Z}$ và $3\\mathbb{Z}$ có cùng lực lượng đếm được.",
        D: "Không định nghĩa được chỉ số $[G : H]$ khi $G$ là nhóm vô hạn."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: Chỉ số $[G : H]$ đếm số lượng các khối lớp kề phân biệt chứ không đếm số phần tử của nhóm mẹ.",
        B: "Chính xác! Lời giải: Mọi số nguyên chia cho $3$ chỉ có số dư $0, 1, 2$, nên tập thương $\\mathbb{Z}/3\\mathbb{Z}$ gồm đúng 3 lớp kề rời nhau: $0+3\\mathbb{Z}, 1+3\\mathbb{Z}, 2+3\\mathbb{Z}$. Do đó $[\\mathbb{Z} : 3\\mathbb{Z}] = 3$.",
        C: "Sai vì: Không được lấy tỷ số lực lượng kiểu vô hạn chia vô hạn; định nghĩa chỉ số là số lượng lớp kề trái phân biệt.",
        D: "Sai vì: Định nghĩa 3.2 xác định $[G : H] = |G/H|$ cho mọi nhóm $G$, kể cả khi $G$ vô hạn."
      }
    },
    {
      id: "c3_q04",
      chapter: 3,
      topic: "Tiêu chuẩn hai lớp kề trùng nhau (Định lý 3.3 & Bài tập 3.2)",
      question: "Cho $H \\le G$ và $a, b \\in G$. Trong ký hiệu nhân tổng quát, điều kiện cần và đủ để hai lớp kề trái trùng nhau ($aH = bH$) là gì? Áp dụng vào $G = \\mathbb{Z}/15\\mathbb{Z}$ với $H = \\langle [5]_{15} \\rangle$, cặp lớp kề nào trùng nhau?",
      options: {
        A: "$aH = bH \\iff a^{-1}b \\in H$; trong $\\mathbb{Z}/15\\mathbb{Z}$, $[11] + H = [1] + H$ vì $[11] - [1] = [10] \\in H$.",
        B: "$aH = bH \\iff ab^{-1} \\in H$; trong $\\mathbb{Z}/15\\mathbb{Z}$, $[12] + H = [1] + H$.",
        C: "$aH = bH \\iff a = b$; do đó $[11] + H \\neq [1] + H$.",
        D: "$aH = bH \\iff ab \\in H$; trong $\\mathbb{Z}/15\\mathbb{Z}$, $[4] + H = [1] + H$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: Theo Định lý 3.3, $aH = bH \\iff b \\in aH \\iff a^{-1}b \\in H$ (dạng cộng: $a - b \\in H$). Trong $\\mathbb{Z}/15\\mathbb{Z}$ với $H = \\{[0],[5],[10]\\}$, ta có $[11] - [1] = [10] \\in H$ nên $[11] + H = [1] + H$.",
        B: "Sai vì: Trong nhóm không giao hoán, điều kiện cho lớp kề trái là $a^{-1}b \\in H$ (không phải $ab^{-1} \\in H$); hơn nữa $[12]-[1]=[11]\\notin H$.",
        C: "Sai vì: Một lớp kề có $|H|$ phần tử nên mọi phần tử trong lớp đều làm đại diện cho cùng lớp đó.",
        D: "Sai vì: Phải xét phép nhân với nghịch đảo $a^{-1}b$ (hoặc hiệu $a-b$), không phải tích $ab$ (hay tổng $a+b$)."
      }
    },
    {
      id: "c3_q05",
      chapter: 3,
      topic: "Song ánh tịnh tiến và sự bảo toàn kích thước lớp kề (Định lý 3.3)",
      question: "Vì sao mọi lớp kề trái $gH$ và lớp kề phải $Hg$ đều có cùng số phần tử với nhóm con $H$ ($|gH| = |Hg| = |H|$)?",
      options: {
        A: "Vì phép tịnh tiến trái $\\lambda_g: H \\to gH, h \\mapsto gh$ là một song ánh (đơn ánh nhờ luật giản ước trái, toàn ánh theo định nghĩa $gH$).",
        B: "Vì mọi nhóm $G$ đều hữu hạn và giao hoán.",
        C: "Vì $gH$ luôn là một nhóm đẳng cấu với $H$ qua đồng cấu $\\lambda_g$.",
        D: "Vì các lớp kề có giao khác rỗng."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: Theo Định lý 3.3, nếu $gh_1 = gh_2$ thì nhân trái với $g^{-1}$ cho $h_1 = h_2$ (đơn ánh); và mọi phần tử của $gH$ có dạng $gh$ với $h \\in H$ (toàn ánh). Do đó $\\lambda_g$ là song ánh, suy ra $|gH| = |H|$ (tương tự cho $Hg$).",
        B: "Sai vì: Kết quả đúng cho cả nhóm vô hạn và nhóm không giao hoán.",
        C: "Sai vì: Khi $g \\notin H$, $gH$ không phải là nhóm con và $\\lambda_g$ chỉ là song ánh tập hợp chứ không phải đồng cấu nhóm.",
        D: "Sai vì: Các lớp kề phân biệt luôn đôi một rời nhau."
      }
    },
    {
      id: "c3_q06",
      chapter: 3,
      topic: "Định lý Lagrange và hệ quả trực tiếp (Định lý 3.4 & Hệ quả 3.5)",
      question: "Cho $G$ là một nhóm hữu hạn có cấp $|G| = 35$. Theo Định lý Lagrange và các hệ quả, khẳng định nào sau đây KHÔNG THỂ xảy ra?",
      options: {
        A: "$G$ có một nhóm con cấp $5$.",
        B: "$G$ có một phần tử cấp $7$.",
        C: "$G$ có một nhóm con cấp $10$.",
        D: "Với mọi $a \\in G$, ta luôn có $a^{35} = e$."
      },
      correct: "C",
      explanations: {
        A: "Sai vì: $5$ là ước của $35$ nên hoàn toàn phù hợp với Định lý Lagrange.",
        B: "Sai vì: $7$ là ước của $35$ nên cấp phần tử bằng $7$ hoàn toàn hợp lệ.",
        C: "Chính xác! Lời giải: Theo Định lý Lagrange, cấp của mọi nhóm con $H \\le G$ bắt buộc phải là ước của $|G| = 35$. Vì $10 \\nmid 35$, nhóm $G$ tuyệt đối không thể có nhóm con cấp $10$.",
        D: "Sai vì: Theo Hệ quả 3.5, với mọi $a \\in G$ ta luôn có $a^{|G|} = a^{35} = e$."
      }
    },
    {
      id: "c3_q07",
      chapter: 3,
      topic: "Hệ quả số học Euler và điều kiện nguyên tố cùng nhau (Bài tập 3.9a)",
      question: "Áp dụng Định lý Euler để tìm số dư của $3^{100}$ khi chia cho $35$, kết quả và điều kiện tiên quyết nào sau đây là ĐÚNG?",
      options: {
        A: "Vì $\\gcd(3, 35) = 1$ và $\\varphi(35) = 24$, ta có $3^{24} \\equiv 1 \\pmod{35} \\implies 3^{100} = (3^{24})^4 \\cdot 3^4 \\equiv 81 \\equiv 11 \\pmod{35}$.",
        B: "Vì $\\varphi(35) = 34$, ta có $3^{34} \\equiv 1 \\pmod{35}$ và số dư là $9$.",
        C: "Số dư là $1$ vì $100$ là số chẵn.",
        D: "Có thể áp dụng $a^{\\varphi(35)} \\equiv 1 \\pmod{35}$ cho cả $a = 5$ và $a = 7$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: Ta có $\\varphi(35) = \\varphi(5)\\varphi(7) = 4 \\cdot 6 = 24$. Do $\\gcd(3,35)=1$, Định lý Euler cho $3^{24} \\equiv 1 \\pmod{35}$. Vì $100 = 24 \\cdot 4 + 4$, suy ra $3^{100} \\equiv 3^4 = 81 = 35 \\cdot 2 + 11 \\equiv 11 \\pmod{35}$.",
        B: "Sai vì: $35 = 5 \\cdot 7$ là hợp số nên $\\varphi(35) = 24$, không phải $35 - 1 = 34$.",
        C: "Sai vì: $24 \\nmid 100$ nên số dư không bằng $1$.",
        D: "Sai vì: Định lý Euler bắt buộc $\\gcd(a, 35) = 1$ (tức $[a] \\in U(35)$); với $a=5$ hoặc $a=7$ thì $\\gcd(a,35)>1$ nên không áp dụng được."
      }
    },
    {
      id: "c3_q08",
      chapter: 3,
      topic: "Hệ quả Định lý Fermat nhỏ (Bài tập 3.9b)",
      question: "Dùng Định lý Fermat nhỏ, số dư của lũy thừa $7^{222}$ khi chia cho số nguyên tố $13$ là:",
      options: {
        A: "$1$",
        B: "$12$",
        C: "$6$",
        D: "$7$"
      },
      correct: "B",
      explanations: {
        A: "Sai vì: $222 = 12 \\cdot 18 + 6$, còn dư số mũ $6$ nên $7^{222} \\equiv 7^6 \\equiv 12 \\not\\equiv 1 \\pmod{13}$.",
        B: "Chính xác! Lời giải: Vì $13$ nguyên tố và $13 \\nmid 7$, Fermat nhỏ cho $7^{12} \\equiv 1 \\pmod{13}$. Ta có $222 = 12 \\cdot 18 + 6 \\implies 7^{222} \\equiv 7^6 = (7^2)^3 = 49^3 \\equiv (-3)^3 = -27 \\equiv 12 \\pmod{13}$.",
        C: "Sai vì: $6$ là số dư của số mũ $222$ khi chia cho $12$, không phải số dư của lũy thừa $7^{222}$ khi chia cho $13$.",
        D: "Sai vì: $7^6 \\equiv 12 \\pmod{13}$, không đồng dư với $7$."
      }
    },
    {
      id: "c3_q09",
      chapter: 3,
      topic: "Chứng minh A_4 không có nhóm con cấp 6 (Mục 3.5 & Bài tập 3.12b)",
      question: "Trong chứng minh nhóm thay phiên $A_4$ (cấp $12$) không có nhóm con nào cấp $6$, lập luận mấu chốt nào sau đây được sử dụng?",
      options: {
        A: "Nếu $H \\le A_4$ có cấp $6$ thì $[A_4 : H] = 2 \\implies H \\trianglelefteq A_4$ và $g^2 \\in H$ với mọi $g \\in A_4$; do mọi chu trình bậc 3 đều có dạng $g^2$ nên cả 8 chu trình bậc 3 cùng với $e$ đều thuộc $H$, làm $|H| \\ge 9 > 6$ (mâu thuẫn).",
        B: "Vì $6$ không phải là ước của $12$ nên theo Lagrange không tồn tại $H$.",
        C: "Vì $A_4$ là nhóm giao hoán nên chỉ có nhóm con cấp $2$ và cấp $3$.",
        D: "Vì $A_4$ không chứa bất kỳ phần tử nào có cấp $2$ hoặc cấp $3$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: Giả sử $|H|=6 \\implies [A_4:H]=2 \\implies H \\trianglelefteq A_4$ và nhóm thương $A_4/H$ có cấp $2$. Khi đó với mọi chu trình 3-cycle $\\sigma = (ijk) \\in A_4$, ta có $\\sigma = (ikj)^2 \\in H$. Vì $A_4$ có đúng $8$ chu trình 3-cycle, cùng với $e$ buộc $|H| \\ge 9$, mâu thuẫn với $|H|=6$.",
        B: "Sai vì: $6$ là ước của $12$; đây chính là phản ví dụ bác bỏ chiều đảo của Định lý Lagrange.",
        C: "Sai vì: $A_4$ không phải là nhóm giao hoán, và nhóm giao hoán hữu hạn thì luôn có nhóm con ứng với mọi ước của cấp nhóm.",
        D: "Sai vì: $A_4$ có $3$ phần tử cấp $2$ (tích hai chuyển vị rời nhau) và $8$ phần tử cấp $3$ (các 3-cycle)."
      }
    },
    {
      id: "c3_q10",
      chapter: 3,
      topic: "Nhóm con chỉ số 2 và cầu nối sang Chương 4 (Mệnh đề 3.6 & Mục 3.7)",
      question: "Cho $H \\le G$ thỏa mãn $[G : H] = 2$. Khẳng định nào sau đây là ĐÚNG về các lớp kề của $H$?",
      options: {
        A: "Với mọi $g \\in G$, tập hợp lớp kề trái luôn trùng với tập hợp lớp kề phải ($gH = Hg$), vì nếu $g \\notin H$ thì cả $gH$ và $Hg$ đều bằng phần bù $G \\setminus H$.",
        B: "Với mọi $g \\in G$ và mọi $h \\in H$, ta luôn có $gh = hg$ (mọi phần tử giao hoán từng đôi một).",
        C: "Nhóm $G$ bắt buộc phải có đúng $2$ phần tử.",
        D: "Phép nhân đại diện $(aH)(bH) = abH$ vẫn bị phụ thuộc đại diện và không xác định tốt."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: Theo Mệnh đề 3.6, khi $[G:H]=2$, phân hoạch trái chỉ có 2 khối là $H$ và $G \\setminus H$; phân hoạch phải cũng chỉ có 2 khối là $H$ và $G \\setminus H$. Do đó với $g \\notin H$, $gH = G \\setminus H = Hg$.",
        B: "Sai vì: $gH = Hg$ là đẳng thức giữa hai TẬP HỢP, không có nghĩa là $gh = hg$ với từng phần tử (ví dụ trong $S_3$, $(12)A_3 = A_3(12)$ nhưng $(12)(123) \\neq (123)(12)$).",
        C: "Sai vì: $[G:H] = 2$ chỉ nói rằng có 2 lớp kề (ví dụ $[S_n : A_n] = 2$ hay $[\\mathbb{Z} : 2\\mathbb{Z}] = 2$), nhóm $G$ có thể lớn tùy ý hoặc vô hạn.",
        D: "Sai vì: Vì $gH = Hg$ với mọi $g \\in G$, $H$ là nhóm con chuẩn tắc nên phép nhân lớp kề $(aH)(bH) = abH$ hoàn toàn xác định tốt."
      }
    }
  ];

  // ====================================================================
  // NGÂN HÀNG MỞ RỘNG CHƯƠNG 4 (10 CÂU: c4_q01 -> c4_q10)
  // ====================================================================
  const questionsChapter4 = [
    {
      id: "c4_q01",
      chapter: 4,
      topic: "Sự thất bại khi nhân đại diện lớp kề không chuẩn tắc (Mục 4.1)",
      question: "Trong $S_3$, xét nhóm con $H = \\langle (12) \\rangle = \\{e, (12)\\}$ và lớp kề trái $C_2 = (13)H = \\{(13), (123)\\}$. Khi thử nhân $C_2 \\cdot C_2$ bằng quy tắc nhân đại diện $(xH)(yH) = xyH$, hiện tượng gì xảy ra?",
      options: {
        A: "Chọn đại diện $(13)$ và $(13)$ cho lớp $(13)(13)H = eH$; nhưng chọn đại diện $(123)$ và $(13)$ trong cùng lớp $C_2$ lại cho $(123)(13)H = (23)H \\neq eH$. Phép nhân không xác định tốt!",
        B: "Mọi cách chọn đại diện trong $C_2$ đều cho cùng kết quả là $eH$.",
        C: "Phép nhân xác định tốt nhưng không có tính kết hợp.",
        D: "Tích $(123)(13)$ không thuộc $S_3$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: Theo Mục 4.1, cả $(13)$ và $(123)$ đều thuộc $C_2$. Tuy nhiên $(13)(13) = e \\in eH$, còn $(123)(13) = (23) \\in (23)H \\neq eH$. Đổi đại diện làm thay đổi hẳn lớp kết quả nên phép nhân lớp không xác định tốt.",
        B: "Sai vì: Cặp đại diện $((123), (13))$ cho tích $(23) \\notin eH$.",
        C: "Sai vì: Quy tắc này đã thất bại ngay ở bước xác định tốt (well-definedness), chưa phải là một phép toán hai ngôi trên $S_3/H$.",
        D: "Sai vì: $S_3$ đóng với phép nhân hoán vị, $(123)(13) = (23) \\in S_3$."
      }
    },
    {
      id: "c4_q02",
      chapter: 4,
      topic: "Phép liên hợp và nhóm con liên hợp trong S_3 (Định nghĩa 4.1 & Bài tập 4.1)",
      question: "Trong nhóm $S_3$, cho $H = \\langle (12) \\rangle = \\{e, (12)\\}$ và $g = (123)$. Nhóm con liên hợp $gHg^{-1}$ và tập hợp tất cả các phần tử $x \\in S_3$ thỏa mãn $xHx^{-1} = H$ lần lượt là:",
      options: {
        A: "$gHg^{-1} = \\{e, (23)\\} \\neq H$; và chỉ có $x \\in \\{e, (12)\\} = H$ mới giữ nguyên $H$ qua phép liên hợp.",
        B: "$gHg^{-1} = \\{e, (13)\\}$; và mọi $x \\in S_3$ đều thỏa $xHx^{-1} = H$.",
        C: "$gHg^{-1} = H$; nên $H$ là nhóm con chuẩn tắc của $S_3$.",
        D: "$gHg^{-1} = \\{e, (123)\\}$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: Theo công thức liên hợp chu trình, với $g=(123)$, ta có $g(12)g^{-1} = (g(1)\\;g(2)) = (23)$, nên $gHg^{-1} = \\{e, (23)\\} \\neq H$. Kiểm tra cả 6 phần tử của $S_3$ (Bài tập 4.1), chỉ có $e$ và $(12)$ giữ nguyên $H$.",
        B: "Sai vì: $g(1)=2, g(2)=3$ nên $(123)(12)(132) = (23)$ chứ không phải $(13)$.",
        C: "Sai vì: $gHg^{-1} = \\{e, (23)\\} \\neq H$, do đó $H$ không chuẩn tắc trong $S_3$.",
        D: "Sai vì: Phép liên hợp bảo toàn cấp của phần tử; $(12)$ có cấp $2$ nên liên hợp của nó không thể là $(123)$ cấp $3$."
      }
    },
    {
      id: "c4_q03",
      chapter: 4,
      topic: "Ba tiêu chuẩn tương đương của tính chuẩn tắc (Định lý 4.3)",
      question: "Cho $N \\le G$. Theo Định lý 4.3, ba điều kiện nào sau đây là hoàn toàn tương đương để $N$ là nhóm con chuẩn tắc của $G$ ($N \\trianglelefteq G$)?",
      options: {
        A: "(i) $gN = Ng$ với mọi $g \\in G$; (ii) $gNg^{-1} = N$ với mọi $g \\in G$; (iii) $gng^{-1} \\in N$ với mọi $g \\in G, n \\in N$.",
        B: "(i) $gn = ng$ với mọi $g \\in G, n \\in N$; (ii) $N$ là nhóm Abel; (iii) $[G : N] = 2$.",
        C: "(i) $gNg^{-1} \\subseteq N$ chỉ với một phần tử $g \\in G$ cố định; (ii) $N$ là nhóm cyclic.",
        D: "(i) $gN \\cap Ng \\neq \\emptyset$; (ii) $|N|$ chia hết $|G|$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: Định lý 4.3 khẳng định sự tương đương giữa: trùng lớp kề trái/phải ($gN=Ng$), bất biến tập hợp qua liên hợp ($gNg^{-1}=N$), và tiêu chuẩn bao hàm một phía ($\\forall g\\in G, \\forall n\\in N, gng^{-1}\\in N$).",
        B: "Sai vì: $gn=ng$ đòi hỏi phần tử thuộc tâm $Z(G)$ (mạnh hơn chuẩn tắc rất nhiều); ví dụ $A_3 \\trianglelefteq S_3$ nhưng $(12)(123) \\neq (123)(12)$.",
        C: "Sai vì: Điều kiện $gng^{-1} \\in N$ phải đúng với MỌI $g \\in G$ thì mới dùng được cho cả $g^{-1}$ để suy ra đẳng thức $gNg^{-1} = N$.",
        D: "Sai vì: $g = ge = eg \\in gN \\cap Ng$ nên giao của lớp trái và lớp phải cùng đại diện luôn khác rỗng với mọi nhóm con $N$, không đủ để $gN = Ng$."
      }
    },
    {
      id: "c4_q04",
      chapter: 4,
      topic: "Chứng minh SL_2(R) chuẩn tắc trong GL_2(R) (Mục 4.3)",
      question: "Xét nhóm ma trận khả nghịch $G = \\mathrm{GL}_2(\\mathbb{R})$ và nhóm con $N = \\mathrm{SL}_2(\\mathbb{R}) = \\{A \\in G \\mid \\det A = 1\\}$. Vì sao $\\mathrm{SL}_2(\\mathbb{R}) \\trianglelefteq \\mathrm{GL}_2(\\mathbb{R})$?",
      options: {
        A: "Vì mọi ma trận trong $\\mathrm{SL}_2(\\mathbb{R})$ đều giao hoán với mọi ma trận trong $\\mathrm{GL}_2(\\mathbb{R})$.",
        B: "Vì với mọi $g \\in \\mathrm{GL}_2(\\mathbb{R})$ và $n \\in \\mathrm{SL}_2(\\mathbb{R})$, ta có $\\det(gng^{-1}) = \\det(g)\\det(n)(\\det g)^{-1} = 1$, nên $gng^{-1} \\in \\mathrm{SL}_2(\\mathbb{R})$.",
        C: "Vì chỉ số $[\\mathrm{GL}_2(\\mathbb{R}) : \\mathrm{SL}_2(\\mathbb{R})] = 2$.",
        D: "Vì $\\mathrm{GL}_2(\\mathbb{R})$ là nhóm giao hoán."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: Các ma trận định thức bằng $1$ nói chung không giao hoán với nhau và không giao hoán với ma trận trong $\\mathrm{GL}_2(\\mathbb{R})$.",
        B: "Chính xác! Lời giải: Nhờ tính nhân của định thức trên trường giao hoán $\\mathbb{R}$, với mọi $g \\in \\mathrm{GL}_2(\\mathbb{R})$ và $n \\in \\mathrm{SL}_2(\\mathbb{R})$, $\\det(gng^{-1}) = \\det(g)\\cdot 1 \\cdot (\\det g)^{-1} = 1 \\implies gng^{-1} \\in \\mathrm{SL}_2(\\mathbb{R})$. Theo tiêu chuẩn một phía, $\\mathrm{SL}_2(\\mathbb{R}) \\trianglelefteq \\mathrm{GL}_2(\\mathbb{R})$.",
        C: "Sai vì: Nhóm thương $\\mathrm{GL}_2(\\mathbb{R})/\\mathrm{SL}_2(\\mathbb{R}) \\cong \\mathbb{R}^\\times$ có vô hạn phần tử, không phải chỉ số $2$.",
        D: "Sai vì: Phép nhân ma trận cấp $2$ không giao hoán."
      }
    },
    {
      id: "c4_q05",
      chapter: 4,
      topic: "Tính chuẩn tắc không có tính bắc cầu trong D_8 (Mục 4.4)",
      question: "Trong nhóm đối xứng hình vuông $D_8 = \\langle r, s \\mid r^4 = s^2 = e, sr = r^{-1}s \\rangle$, xét chuỗi nhóm con $K = \\langle s \\rangle = \\{e, s\\} \\le H = \\langle s, r^2 \\rangle = \\{e, r^2, s, r^2s\\} \\le D_8$. Khẳng định nào ĐÚNG?",
      options: {
        A: "$K \\trianglelefteq H$ và $H \\trianglelefteq D_8$ (do đều có chỉ số $2$), nhưng $K \\not\\trianglelefteq D_8$ vì $rsr^{-1} = r^2s \\notin K$; điều này chứng tỏ quan hệ chuẩn tắc KHÔNG có tính bắc cầu.",
        B: "Vì $K \\trianglelefteq H$ và $H \\trianglelefteq D_8$ nên theo tính bắc cầu ta có $K \\trianglelefteq D_8$.",
        C: "$H$ không chuẩn tắc trong $D_8$ vì $D_8$ không giao hoán.",
        D: "$K \\trianglelefteq D_8$ vì $s^2 = e$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: Ta có $[D_8 : H] = 8/4 = 2 \\implies H \\trianglelefteq D_8$, và $[H : K] = 4/2 = 2 \\implies K \\trianglelefteq H$. Nhưng khi liên hợp $s \\in K$ bởi $r \\in D_8$: $rsr^{-1} = r(r^{-1}s)^1$? Không, $sr = r^{-1}s \\implies sr^{-1} = rs \\implies rsr^{-1} = r^2s \\notin \\{e, s\\} = K$. Vậy $K \\not\\trianglelefteq D_8$!",
        B: "Sai vì: Quan hệ chuẩn tắc $\\trianglelefteq$ không có tính bắc cầu; $K$ chỉ bất biến dưới liên hợp bởi các phần tử trong $H$, không bất biến dưới $r \\in D_8 \\setminus H$.",
        C: "Sai vì: $[D_8 : H] = 2$ nên $H$ chắc chắn chuẩn tắc trong $D_8$.",
        D: "Sai vì: Phần tử cấp $2$ không tự động sinh ra nhóm con chuẩn tắc (trừ khi nó nằm trong tâm $Z(G)$)."
      }
    },
    {
      id: "c4_q06",
      chapter: 4,
      topic: "Bốn cơ chế tự nhiên sinh ra nhóm con chuẩn tắc (Mệnh đề 4.4)",
      question: "Trong các nhóm con sau đây, cặp nào mà nhóm con KHÔNG chuẩn tắc trong nhóm mẹ?",
      options: {
        A: "Nhóm thay phiên $A_n$ trong nhóm đối xứng $S_n$ ($n \\ge 2$).",
        B: "Nhóm các phép quay $\\langle r \\rangle$ trong nhóm Dihedral $D_{2n}$ ($n \\ge 3$).",
        C: "Nhóm con sinh bởi một phép lật $\\langle s \\rangle = \\{e, s\\}$ trong nhóm Dihedral $D_{2n}$ ($n \\ge 3$).",
        D: "Tâm $Z(G)$ trong một nhóm $G$ bất kỳ."
      },
      correct: "C",
      explanations: {
        A: "Sai vì: $[S_n : A_n] = 2$ nên $A_n \\trianglelefteq S_n$ với mọi $n \\ge 2$.",
        B: "Sai vì: $[D_{2n} : \\langle r \\rangle] = 2n/n = 2$ nên $\\langle r \\rangle \\trianglelefteq D_{2n}$.",
        C: "Chính xác! Lời giải: Với $n \\ge 3$, ta có $rsr^{-1} = r^2s$. Vì $n \\ge 3$ nên $r^2 \\neq e$, suy ra $r^2s \\notin \\{e, s\\} = \\langle s \\rangle$. Do đó $\\langle s \\rangle$ không chuẩn tắc trong $D_{2n}$ (Bảng 4.8).",
        D: "Sai vì: Với mọi $z \\in Z(G)$ và $g \\in G$, $gzg^{-1} = z \\in Z(G)$ nên $Z(G) \\trianglelefteq G$."
      }
    },
    {
      id: "c4_q07",
      chapter: 4,
      topic: "Định lý cấu trúc nhóm thương G/N (Định lý 4.5)",
      question: "Cho $N \\trianglelefteq G$. Trong nhóm thương $G/N = \\{aN \\mid a \\in G\\}$ với phép nhân $(aN)(bN) = abN$, phần tử đơn vị, phần tử nghịch đảo của lớp $aN$, và điều kiện để $aN = N$ lần lượt là:",
      options: {
        A: "Đơn vị là $e$; nghịch đảo của $aN$ là $aN^{-1}$; và $aN = N \\iff a = e$.",
        B: "Đơn vị là lớp $N = eN$; nghịch đảo của $aN$ là $(aN)^{-1} = a^{-1}N$; và $aN = N \\iff a \\in N$.",
        C: "Đơn vị là lớp $G$; nghịch đảo của $aN$ là $Na^{-1}$; và $aN = N \\iff a \\notin N$.",
        D: "Đơn vị là $\\{e\\}$; nghịch đảo của $aN$ là $a^{-1}N$; và mọi lớp đều có cấp bằng $|N|$."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: Các phần tử của $G/N$ là các LỚP KỀ chứ không phải phần tử của $G$; và mọi $a \\in N$ đều cho $aN = N$, không chỉ riêng $a = e$.",
        B: "Chính xác! Lời giải: Theo Định lý 4.5, đơn vị của nhóm thương $G/N$ là cả lớp kề $eN = N$; nghịch đảo của $aN$ là $a^{-1}N$ vì $(aN)(a^{-1}N) = aa^{-1}N = eN = N$; và một lớp trùng với lớp đơn vị $N$ khi và chỉ khi đại diện $a \\in N$.",
        C: "Sai vì: Tập $G$ là nhóm mẹ chứ không phải một lớp kề trong $G/N$ (trừ khi $N=G$).",
        D: "Sai vì: Đơn vị của $G/N$ là toàn bộ lớp $N$, không phải tập đơn tử $\\{e\\}$ (khi $N \\neq \\{e\\}$)."
      }
    },
    {
      id: "c4_q08",
      chapter: 4,
      topic: "Phép chiếu chính tắc pi_N (Định nghĩa 4.6)",
      question: "Trong nhóm cộng $G = \\mathbb{Z}/12\\mathbb{Z}$, xét nhóm con chuẩn tắc $N = \\langle [4]_{12} \\rangle = \\{[0], [4], [8]\\}$ và phép chiếu chính tắc $\\pi_N: G \\to G/N$ cho bởi $\\pi_N([k]) = [k] + N$. Khẳng định nào ĐÚNG?",
      options: {
        A: "$\\pi_N$ là toàn ánh bảo toàn phép cộng, tập hạt nhân $\\ker\\pi_N = N = \\{[0], [4], [8]\\}$, và nhóm thương $G/N$ có cấp $12 / 3 = 4$.",
        B: "Hạt nhân của $\\pi_N$ chỉ gồm duy nhất phần tử $\\{[0]\\}$ nên $\\pi_N$ là song ánh.",
        C: "Nhóm thương $G/N$ có cấp bằng $3$.",
        D: "$\\pi_N([2] + [3]) \\neq \\pi_N([2]) + \\pi_N([3])$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: Theo Định nghĩa 4.6 và Ví dụ Mục 4.6, $\\pi_N([x]+[y]) = ([x]+[y])+N = ([x]+N)+([y]+N) = \\pi_N([x])+\\pi_N([y])$. Các phần tử được gửi về lớp đơn vị $N$ của $G/N$ chính là $\\ker\\pi_N = \\{[k] \\in G \\mid [k]+N = N\\} = N = \\{[0],[4],[8]\\}$, và $|G/N| = 12/3 = 4$.",
        B: "Sai vì: Đơn vị của nhóm thương là cả lớp $N$, nên mọi phần tử thuộc $N$ đều bị gửi về đơn vị của $G/N$.",
        C: "Sai vì: $|N| = 3$ nên $|G/N| = |G|/|N| = 12/3 = 4$ (gồm 4 lớp $N, [1]+N, [2]+N, [3]+N$).",
        D: "Sai vì: Phép chiếu chính tắc luôn bảo toàn phép toán của nhóm."
      }
    },
    {
      id: "c4_q09",
      chapter: 4,
      topic: "Cấp của phần tử trong nhóm thương",
      question: "Trong nhóm thương $G/N = (\\mathbb{Z}/12\\mathbb{Z}) / \\langle [4]_{12} \\rangle$ (với $N = \\{[0], [4], [8]\\}$), cấp của lớp kề $C_1 = [1]_{12} + N$ và cấp của lớp kề $C_2 = [2]_{12} + N$ lần lượt là:",
      options: {
        A: "$\\operatorname{ord}(C_1) = 12$ và $\\operatorname{ord}(C_2) = 6$.",
        B: "$\\operatorname{ord}(C_1) = 4$ và $\\operatorname{ord}(C_2) = 2$.",
        C: "$\\operatorname{ord}(C_1) = 3$ và $\\operatorname{ord}(C_2) = 3$.",
        D: "$\\operatorname{ord}(C_1) = 1$ và $\\operatorname{ord}(C_2) = 2$."
      },
      correct: "B",
      explanations: {
        A: "Sai vì: Đây là cấp của $[1]_{12}$ và $[2]_{12}$ trong nhóm mẹ $\\mathbb{Z}/12\\mathbb{Z}$, còn trong nhóm thương cấp $4$, cấp của lớp là số nguyên dương $m$ nhỏ nhất để $m[k] \\in N$.",
        B: "Chính xác! Lời giải: Trong $G/N$, lớp đơn vị là $C_0 = N = \\{[0],[4],[8]\\}$. Với $C_1 = [1]+N$: $1[1], 2[1], 3[1] \\notin N$ và $4[1] = [4] \\in N \\implies \\operatorname{ord}(C_1) = 4$. Với $C_2 = [2]+N$: $[2] \\notin N$ nhưng $2[2] = [4] \\in N \\implies \\operatorname{ord}(C_2) = 2$.",
        C: "Sai vì: Cấp của phần tử trong nhóm thương phải chia hết $|G/N| = 4$, nên không thể bằng $3$.",
        D: "Sai vì: $[1]_{12} \\notin N$ nên $C_1 \\neq C_0$, cấp của $C_1$ không thể bằng $1$."
      }
    },
    {
      id: "c4_q10",
      chapter: 4,
      topic: "Định lý nhóm thương theo tâm G/Z(G) (Định lý 4.7 & Bài tập 4.22)",
      question: "Cho $G$ là một nhóm và $Z(G)$ là tâm của $G$. Phát biểu nào sau đây là hệ quả ĐÚNG của Định lý 4.7 ('Nếu $G/Z(G)$ cyclic thì $G$ giao hoán')?",
      options: {
        A: "Nếu $G$ là một nhóm không giao hoán thì nhóm thương $G/Z(G)$ không bao giờ là nhóm cyclic (đặc biệt $|G/Z(G)|$ không thể là một số nguyên tố $p$).",
        B: "Mọi nhóm thương $G/N$ của một nhóm không giao hoán $G$ đều không thể là nhóm cyclic.",
        C: "Trong nhóm $S_3$, ta có $Z(S_3) = A_3$ nên $S_3/Z(S_3)$ là nhóm cyclic cấp $2$.",
        D: "Nếu $G/Z(G)$ là nhóm cyclic thì $Z(G) = \\{e\\}$."
      },
      correct: "A",
      explanations: {
        A: "Chính xác! Lời giải: Lấy phản đảo của Định lý 4.7: vì $G/Z(G)$ cyclic $\\implies G$ Abel, nên nếu $G$ không Abel thì $G/Z(G)$ không thể cyclic. Do mọi nhóm cấp nguyên tố $p$ đều cyclic, $|G/Z(G)|$ của một nhóm phi Abel không bao giờ bằng $p$.",
        B: "Sai vì: Định lý chỉ áp dụng riêng cho thương theo TÂM $G/Z(G)$. Với nhóm con chuẩn tắc khác tâm, thương vẫn có thể cyclic, ví dụ $S_3/A_3 \\cong \\mathbb{Z}/2\\mathbb{Z}$ là cyclic dù $S_3$ không Abel.",
        C: "Sai vì: Tâm của $S_3$ là $Z(S_3) = \\{e\\}$ (chứ không phải $A_3$), nên $S_3/Z(S_3) \\cong S_3$ không cyclic.",
        D: "Sai vì: Khi $G/Z(G)$ cyclic thì $G$ giao hoán, tức là $Z(G) = G$ và $|G/Z(G)| = 1$."
      }
    }
  ];

  // ====================================================================
  // 1. NGÂN HÀNG CÂU HỎI LÝ THUYẾT & BẪY PHẢN VÍ DỤ TINH TUYỂN (CHƯƠNG 0–9)
  // ====================================================================
  const mapStructuredQuestions = (arr) => arr.map((item, index) => ({
    id: item.id,
    ch: item.chapter,
    topic: item.topic,
    level: index % 4 === 0 ? "recognition" : index % 4 === 3 ? "application" : "understanding",
    q: item.question,
    opts: Object.values(item.options),
    ans: Object.keys(item.options).indexOf(item.correct),
    exp: item.explanations[item.correct],
    explanations: item.explanations
  }));

  const CURATED_BANK = [
    // CHƯƠNG 0
    {
      ch: 0, level: "recognition",
      q: "Cho quan hệ $\\sim$ trên tập $X$. Ba tính chất bắt buộc để $\\sim$ là một quan hệ tương đương bao gồm:",
      opts: [
        "Phản xạ, đối xứng và bắc cầu.",
        "Phản xạ, phản xứng và bắc cầu.",
        "Giao hoán, kết hợp và có phần tử đơn vị.",
        "Đơn ánh, toàn ánh và song ánh."
      ],
      ans: 0,
      exp: "Theo Định nghĩa 0.5 trong Giáo trình: Quan hệ tương đương $\\sim$ trên $X$ phải thỏa mãn 3 tính chất: phản xạ ($x \\sim x$), đối xứng ($x \\sim y \\implies y \\sim x$) và bắc cầu ($x \\sim y, y \\sim z \\implies x \\sim z$).",
      explanations: {
        A: "Chính xác! Lời giải: Theo Định nghĩa 0.5, quan hệ tương đương $\\sim$ trên $X$ phải thỏa mãn đủ 3 tính chất: phản xạ ($x \\sim x$), đối xứng ($x \\sim y \\implies y \\sim x$) và bắc cầu ($x \\sim y, y \\sim z \\implies x \\sim z$).",
        B: "Sai vì: Phản xứng ($x \\sim y, y \\sim x \\implies x = y$) là tính chất của quan hệ thứ tự, không phải quan hệ tương đương.",
        C: "Sai vì: Giao hoán, kết hợp và đơn vị là tính chất của phép toán hai ngôi, không phải của quan hệ hai ngôi.",
        D: "Sai vì: Đơn ánh, toàn ánh, song ánh là các tính chất của ánh xạ."
      }
    },
    {
      ch: 0, level: "understanding",
      q: "Xét công thức $T: \\mathbb{Z}/3\\mathbb{Z} \\to \\mathbb{Z}/2\\mathbb{Z}$ cho bởi $T([a]_3) = [a]_2$ (Phản ví dụ 0.16). Khẳng định nào sau đây là ĐÚNG?",
      opts: [
        "$T$ không xác định tốt vì $[1]_3 = [4]_3$ nhưng $[1]_2 \\neq [4]_2$.",
        "$T$ là một toàn cấu nhóm vì $2 < 3$.",
        "$T$ là một đơn cấu vì $\\gcd(3, 2) = 1$.",
        "$T$ xác định tốt nhưng không bảo toàn phép cộng."
      ],
      ans: 0,
      exp: "Trong $\\mathbb{Z}/3\\mathbb{Z}$, hai đại diện $1$ và $4$ thuộc cùng một lớp ($[1]_3 = [4]_3$), nhưng đầu ra lại rơi vào hai lớp khác nhau trong $\\mathbb{Z}/2\\mathbb{Z}$ ($[1]_2 \\neq [0]_2 = [4]_2$). Do đó công thức phụ thuộc vào đại diện và không xác định một ánh xạ.",
      explanations: {
        A: "Chính xác! Lời giải: Trong $\\mathbb{Z}/3\\mathbb{Z}$, $[1]_3 = [4]_3$ là cùng một phần tử, nhưng $T([1]_3) = [1]_2 \\neq [0]_2 = T([4]_3)$, nên công thức phụ thuộc vào đại diện và không xác định tốt.",
        B: "Sai vì: $T$ thậm chí chưa phải là một ánh xạ hợp lệ nên không thể là đồng cấu hay toàn cấu.",
        C: "Sai vì: $\\gcd(3,2)=1$ làm cho $3 \\not\\mid 2$ và $2 \\not\\mid 3$, khiến việc giữ nguyên đại diện từ mod 3 sang mod 2 bị mâu thuẫn.",
        D: "Sai vì: $T$ vi phạm ngay từ tính xác định tốt."
      }
    },
    {
      ch: 0, level: "understanding",
      q: "Trên tập số nguyên $\\mathbb{Z}$, xét phép toán $a * b = a + b + ab$ (Bài tập 0.18). Tập tất cả các phần tử có nghịch đảo trong $(\\mathbb{Z}, *)$ là:",
      opts: [
        "$\\{0, -2\\}$",
        "$\\mathbb{Z} \\setminus \\{-1\\}$",
        "$\\{1, -1\\}$",
        "$\\{0\\}$"
      ],
      ans: 0,
      exp: "Ta có $1 + (a * b) = (1 + a)(1 + b)$. Phần tử đơn vị là $e = 0$. Để $a * b = 0$, ta cần $(1+a)(1+b) = 1$. Vì $a, b \\in \\mathbb{Z}$ nên $1+a \\in \\{\\pm 1\\} \\iff a \\in \\{0, -2\\}$.",
      explanations: {
        A: "Chính xác! Lời giải: Đơn vị là $e = 0$. Phương trình $a * b = 0 \\iff (1+a)(1+b) = 1$ trên $\\mathbb{Z}$ buộc $1+a \\in \\{1, -1\\} \\iff a \\in \\{0, -2\\}$.",
        B: "Sai vì: Nghịch đảo $b = -a/(1+a)$ chỉ thuộc $\\mathbb{R}$ hoặc $\\mathbb{Q}$ khi $a \\neq -1$, còn trên tập số nguyên $\\mathbb{Z}$ thì chỉ có $a=0$ và $a=-2$ cho kết quả nguyên.",
        C: "Sai vì: Với $a = 1$, $1 + a = 2$ không có nghịch đảo nhân nguyên; với $a = -1$, $1 + a = 0$ làm $(1+a)(1+b)=0 \\neq 1$.",
        D: "Sai vì: Bỏ sót phần tử $a = -2$ (vì $(-2) * (-2) = -2 - 2 + 4 = 0$)."
      }
    },
    ...mapStructuredQuestions(questionsChapter0),

    // CHƯƠNG 1
    {
      ch: 1,
      level: "understanding",
      q: "Trên tập hợp các số thực $\\mathbb{R}$, xét phép toán trung bình cộng $x * y = \\dfrac{x + y}{2}$. Cấu trúc $(\\mathbb{R}, *)$ vi phạm tiên đề nhóm nào đầu tiên?",
      opts: [
        "Tính đóng trên tập $\\mathbb{R}$.",
        "Tính giao hoán.",
        "Tính kết hợp (dù phép toán có tính giao hoán).",
        "Chỉ thiếu phần tử nghịch đảo còn vẫn thỏa mãn tính kết hợp."
      ],
      ans: 2,
      exp: "Phép toán $x * y = \\dfrac{x + y}{2}$ đóng và giao hoán trên $\\mathbb{R}$, nhưng KHÔNG kết hợp: $(0 * 0) * 4 = 2 \\neq 1 = 0 * (0 * 4)$. Đây là phản ví dụ kinh điển cho thấy tính giao hoán không kéo theo tính kết hợp.",
      explanations: {
        A: "Sai vì: với mọi $x, y \\in \\mathbb{R}$, trung bình cộng $\\dfrac{x + y}{2} \\in \\mathbb{R}$ nên phép toán $*$ hoàn toàn thỏa mãn tính đóng trên $\\mathbb{R}$.",
        B: "Sai vì: với mọi $x, y \\in \\mathbb{R}$, ta luôn có $x * y = \\dfrac{x + y}{2} = \\dfrac{y + x}{2} = y * x$ nên phép toán $*$ thỏa mãn tính giao hoán.",
        C: "Chính xác! Lời giải: Phép toán $x * y = \\dfrac{x + y}{2}$ đóng và giao hoán trên $\\mathbb{R}$, nhưng KHÔNG kết hợp vì $(x * y) * z = \\dfrac{x + y + 2z}{4} \\neq \\dfrac{2x + y + z}{4} = x * (y * z)$. Phản ví dụ cụ thể: $(0 * 0) * 4 = 2 \\neq 1 = 0 * (0 * 4)$.",
        D: "Sai vì: phép toán $x * y = \\dfrac{x + y}{2}$ đã vi phạm ngay từ tiên đề kết hợp (và cũng không có phần tử đơn vị trên $\\mathbb{R}$), chứ không phải vẫn thỏa mãn tính kết hợp."
      }
    },
    {
      ch: 1, level: "understanding",
      q: "Trong một nhóm $G$ bất kỳ (không mặc định giao hoán), với mọi $a, b \\in G$, phần tử nghịch đảo của tích $ab$ là:",
      opts: [
        "$(ab)^{-1} = b^{-1}a^{-1}$",
        "$(ab)^{-1} = a^{-1}b^{-1}$",
        "$(ab)^{-1} = ab^{-1}$",
        "$(ab)^{-1} = a^{-1}b$"
      ],
      ans: 0,
      exp: "Theo quy tắc 'mang giày – tất' trong nhóm không giao hoán: $(ab)(b^{-1}a^{-1}) = a(bb^{-1})a^{-1} = aea^{-1} = e$. Đẳng thức $(ab)^{-1} = a^{-1}b^{-1}$ chỉ đúng khi $a$ và $b$ giao hoán với nhau."
    },
    {
      ch: 1, level: "application",
      q: "Cho nhóm $G$ thỏa mãn $x^2 = e$ với mọi $x \\in G$ (Bài tập 1.19). Kết luận nào sau đây luôn ĐÚNG?",
      opts: [
        "$G$ bắt buộc là một nhóm giao hoán (nhóm Abel).",
        "$G$ bắt buộc là một nhóm cyclic.",
        "$G$ chỉ có tối đa 2 phần tử.",
        "$G$ đẳng cấu với nhóm đối xứng $S_3$."
      ],
      ans: 0,
      exp: "Vì $x^2 = e \\iff x = x^{-1}$ với mọi $x \\in G$, nên với mọi $a, b \\in G$ ta có $ab = (ab)^{-1} = b^{-1}a^{-1} = ba$. Lưu ý: $G$ chưa chắc cyclic (chẳng hạn nhóm Klein $V_4$ thỏa $x^2 = e$ nhưng không cyclic)."
    },
    ...mapStructuredQuestions(questionsChapter1),
    ...mapStructuredQuestions(questionsChapter1_Part2),

    // CHƯƠNG 2
    {
      ch: 2, level: "recognition",
      q: "Theo Tiêu chuẩn nhóm con rút gọn (Định lý 2.2), một tập con khác rỗng $H$ của nhóm $(G, \\cdot)$ là nhóm con khi và chỉ khi:",
      opts: [
        "Với mọi $x, y \\in H$, ta có $xy^{-1} \\in H$.",
        "Với mọi $x, y \\in H$, ta có $xy \\in H$ (kể cả khi $H$ vô hạn).",
        "$H$ chứa phần tử đơn vị $e$.",
        "Hợp của $H$ với bất kỳ nhóm con $K$ nào cũng là nhóm con."
      ],
      ans: 0,
      exp: "Điều kiện gộp 1 bước $xy^{-1} \\in H$ với mọi $x, y \\in H$ (kèm $H \\neq \\emptyset$) là cần và đủ. Nếu chỉ kiểm tra $xy \\in H$ trên tập vô hạn sẽ bị sai (ví dụ $\\mathbb{N} \\subseteq (\\mathbb{Z}, +)$ đóng với phép cộng nhưng không có phần tử đối)."
    },
    {
      ch: 2, level: "understanding",
      q: "Cho $H, K$ là hai nhóm con của nhóm $G$. Hợp $H \\cup K$ là một nhóm con của $G$ khi và chỉ khi:",
      opts: [
        "$H \\subseteq K$ hoặc $K \\subseteq H$ (một nhóm con nằm trọn trong nhóm con kia).",
        "$H \\cap K = \\{e\\}$.",
        "$G$ là nhóm giao hoán.",
        "$H$ và $K$ đều là các nhóm cyclic."
      ],
      ans: 0,
      exp: "Trong $(\\mathbb{Z}, +)$, $2\\mathbb{Z} \\cup 3\\mathbb{Z}$ không đóng với phép cộng vì $2 \\in 2\\mathbb{Z}, 3 \\in 3\\mathbb{Z}$ nhưng $2 + 3 = 5 \\notin 2\\mathbb{Z} \\cup 3\\mathbb{Z}$. Hợp của hai nhóm con chỉ là nhóm con khi tập này chứa tập kia."
    },
    ...mapStructuredQuestions(questionsChapter2),

    // CHƯƠNG 3
    {
      ch: 3, level: "understanding",
      q: "Hai phản ví dụ chuẩn trong Giáo trình dùng để bác bỏ hai mệnh đề đảo của Định lý Lagrange là:",
      opts: [
        "Nhóm Klein $V_4$ (cấp 4 nhưng không có phần tử cấp 4) và nhóm thay phiên $A_4$ (cấp 12 nhưng không có nhóm con cấp 6).",
        "Nhóm $S_3$ (cấp 6) và nhóm $\\mathbb{Z}/6\\mathbb{Z}$ (cấp 6).",
        "Nhóm $U(8)$ và nhóm $U(10)$.",
        "Nhóm Dihedral $D_8$ và nhóm Quaternion $Q_8$."
      ],
      ans: 0,
      exp: "Theo Mục 3.5 và Bài tập 3.12 Giáo trình: $V_4$ có mọi phần tử khác $e$ đều cấp $2$ (bác bỏ việc tồn tại phần tử cấp $d \\mid |G|$); còn $A_4$ có cấp $12$ nhưng không có bất kỳ nhóm con nào cấp $6$ (bác bỏ việc tồn tại nhóm con cấp $d \\mid |G|$)."
    },
    {
      ch: 3, level: "recognition",
      q: "Nếu $G$ là một nhóm hữu hạn có cấp $|G| = p$ là một số nguyên tố, thì kết luận nào sau đây luôn ĐÚNG?",
      opts: [
        "$G$ là nhóm cyclic và mọi phần tử $a \\neq e$ đều là phần tử sinh của $G$.",
        "$G$ có đúng 3 nhóm con phân biệt.",
        "$G$ không giao hoán khi $p > 3$.",
        "$G$ có ít nhất một phần tử cấp 2."
      ],
      ans: 0,
      exp: "Theo hệ quả Định lý Lagrange: với $a \\neq e$, $\\operatorname{ord}(a) > 1$ và $\\operatorname{ord}(a) \\mid p$ (nguyên tố) nên $\\operatorname{ord}(a) = p = |G|$, suy ra $G = \\langle a \\rangle$ là nhóm cyclic."
    },
    ...mapStructuredQuestions(questionsChapter3),

    // CHƯƠNG 4
    {
      ch: 4, level: "understanding",
      q: "Trong nhóm đối xứng $S_3$, xét hai nhóm con $N = \\langle (123) \\rangle = \\{e, (123), (132)\\}$ và $H = \\langle (12) \\rangle = \\{e, (12)\\}$. Khẳng định nào ĐÚNG?",
      opts: [
        "$N \\trianglelefteq S_3$ (chuẩn tắc vì có chỉ số $[S_3 : N] = 2$), còn $H \\not\\trianglelefteq S_3$ vì $(13)H \\neq H(13)$.",
        "Cả $N$ và $H$ đều là nhóm con chuẩn tắc của $S_3$ vì chúng đều là nhóm cyclic.",
        "Cả $N$ và $H$ đều không chuẩn tắc vì $S_3$ không giao hoán.",
        "$H \\trianglelefteq S_3$ còn $N \\not\\trianglelefteq S_3$."
      ],
      ans: 0,
      exp: "Mọi nhóm con chỉ số $2$ luôn chuẩn tắc nên $N \\trianglelefteq S_3$. Ngược lại, với $H = \\{e, (12)\\}$, ta có $(13)H = \\{(13), (123)\\}$ còn $H(13) = \\{(13), (132)\\}$, nên $(13)H \\neq H(13)$ và $H$ không chuẩn tắc."
    },
    {
      ch: 4, level: "application",
      q: "Theo Định lý về nhóm thương theo tâm $G/Z(G)$ (Chương 4), nếu nhóm thương $G/Z(G)$ là một nhóm cyclic thì:",
      opts: [
        "$G$ bắt buộc là nhóm giao hoán (tức $Z(G) = G$ và $G/Z(G)$ chỉ có 1 phần tử).",
        "$G$ bắt buộc là nhóm cyclic.",
        "$Z(G)$ chỉ gồm phần tử đơn vị $\\{e\\}$.",
        "$G$ có cấp là một số nguyên tố."
      ],
      ans: 0,
      exp: "Nếu $G/Z(G) = \\langle aZ(G) \\rangle$ là cyclic thì mọi phần tử của $G$ đều có dạng $a^k z$ ($z \\in Z(G)$), dẫn đến hai phần tử bất kỳ đều giao hoán với nhau, tức $G$ giao hoán!"
    },
    ...mapStructuredQuestions(questionsChapter4),

    // CHƯƠNG 5
    {
      ch: 5, level: "recognition",
      q: "Cho đồng cấu nhóm $\\varphi: G \\to K$. Điều kiện cần và đủ để $\\varphi$ là một đơn cấu (đơn ánh) là:",
      opts: [
        "$\\ker\\varphi = \\{e_G\\}$",
        "$\\operatorname{im}\\varphi = K$",
        "$\\ker\\varphi = G$",
        "$G$ và $K$ đều là các nhóm giao hoán."
      ],
      ans: 0,
      exp: "Một đồng cấu nhóm $\\varphi$ là đơn ánh khi và chỉ khi hạt nhân của nó chỉ chứa duy nhất phần tử đơn vị: $\\ker\\varphi = \\{e_G\\}$."
    },
    {
      ch: 5, level: "understanding",
      q: "Hai nhóm $(\\mathbb{Z}/4\\mathbb{Z}, +)$ và nhóm bốn Klein $V_4 = \\mathbb{Z}_2 \\times \\mathbb{Z}_2$ có cùng cấp $4$ nhưng KHÔNG đẳng cấu với nhau vì:",
      opts: [
        "$\\mathbb{Z}/4\\mathbb{Z}$ có phần tử cấp $4$ (là nhóm cyclic), trong khi mọi phần tử khác đơn vị của $V_4$ đều có cấp $2$.",
        "$\\mathbb{Z}/4\\mathbb{Z}$ giao hoán còn $V_4$ không giao hoán.",
        "$V_4$ không có phần tử đơn vị.",
        "$\\mathbb{Z}/4\\mathbb{Z}$ không có nhóm con nào cấp $2$."
      ],
      ans: 0,
      exp: "Một đẳng cấu phải bảo toàn cấp của mọi phần tử. Vì $\\mathbb{Z}/4\\mathbb{Z}$ có phần tử $[1]_4$ cấp $4$ còn $V_4$ chỉ có các phần tử cấp $1$ và cấp $2$, nên không thể tồn tại song ánh bảo toàn phép toán giữa chúng."
    },
    // CHƯƠNG 6
    {
      ch: 6, level: "understanding",
      q: "Theo quy ước của Giáo trình Cấu trúc Đại số (Chương 6), khẳng định nào sau đây về bốn vành $\\mathbb{Z}, 2\\mathbb{Z}, \\mathbb{Z}/6\\mathbb{Z}, M_2(\\mathbb{R})$ là ĐÚNG?",
      opts: [
        "$\\mathbb{Z}$ là miền nguyên; $2\\mathbb{Z}$ không có đơn vị; $\\mathbb{Z}/6\\mathbb{Z}$ giao hoán nhưng có ước của không; $M_2(\\mathbb{R})$ không giao hoán và có ước của không.",
        "Cả $\\mathbb{Z}$ và $2\\mathbb{Z}$ đều là miền nguyên.",
        "$\\mathbb{Z}/6\\mathbb{Z}$ là một trường hữu hạn cấp 6.",
        "Mọi vành con của một vành có đơn vị $1_R$ đều bắt buộc phải nhận $1_R$ làm phần tử đơn vị."
      ],
      ans: 0,
      exp: "Theo Định nghĩa 6.10 (tr. 101): Miền nguyên phải là vành khác không, giao hoán, CÓ ĐƠN VỊ và không có ước của không. Do đó $2\\mathbb{Z}$ không là miền nguyên vì thiếu đơn vị nhân. Ngoài ra, vành con như $\\mathbb{R}E_{11} \\subseteq M_2(\\mathbb{R})$ có đơn vị riêng $E_{11} \\neq I_2$."
    },
    {
      ch: 6, level: "application",
      q: "Theo Định lý Wedderburn – cấu trúc miền nguyên hữu hạn (Chương 6, Bài tập 6.28), mọi miền nguyên hữu hạn $R$ đều là:",
      opts: [
        "Một trường (Field).",
        "Một vành có ước của không khác không.",
        "Đẳng cấu với vành số nguyên $\\mathbb{Z}$.",
        "Một vành không có phần tử đơn vị."
      ],
      ans: 0,
      exp: "Trong miền nguyên hữu hạn $R$, với mọi $a \\neq 0$, ánh xạ nhân trái $L_a(x) = ax$ là đơn ánh trên tập hữu hạn $R$ nên cũng là toàn ánh, suy ra tồn tại $b \\in R$ để $ab = 1_R$. Vậy mọi phần tử khác $0$ đều khả nghịch và $R$ là một trường."
    },
    // CHƯƠNG 7
    {
      ch: 7, level: "understanding",
      q: "Cho $R$ là một vành giao hoán có đơn vị $1_R \\neq 0_R$ và $I \\trianglelefteq R$ là một iđêan. Mối liên hệ giữa tính chất của $I$ và vành thương $R/I$ là:",
      opts: [
        "$R/I$ là miền nguyên $\\iff I$ là iđêan nguyên tố; $R/I$ là trường $\\iff I$ là iđêan cực đại.",
        "$R/I$ là trường $\\iff I$ là iđêan nguyên tố.",
        "$R/I$ luôn là miền nguyên với mọi iđêan $I \\neq R$.",
        "Nếu $I$ chứa một phần tử khả nghịch của $R$ thì $R/I$ là một trường."
      ],
      ans: 0,
      exp: "Theo Định lý cấu trúc Chương 7: $I$ nguyên tố $\\iff R/I$ là miền nguyên; $I$ cực đại $\\iff R/I$ là trường. (Nếu $I$ chứa phần tử khả nghịch thì $I = R$ và $R/I$ chỉ là vành không $\\{0\\}$)."
    },
    {
      ch: 7, level: "application",
      q: "Tại sao vành các số nguyên $\\mathbb{Z}$ là một vành con của trường $\\mathbb{Q}$, nhưng không thể định nghĩa phép nhân vành thương $(a + \\mathbb{Z})(b + \\mathbb{Z}) = ab + \\mathbb{Z}$ trên $\\mathbb{Q}/\\mathbb{Z}$ (Bài tập 7.1)?",
      opts: [
        "Vì $\\mathbb{Z}$ không phải là iđêan của $\\mathbb{Q}$ (không hấp thụ phép nhân với phân số như $\\frac{1}{2} \\cdot 1 = \\frac{1}{2} \\notin \\mathbb{Z}$), làm phép nhân lớp phụ thuộc vào đại diện.",
        "Vì $\\mathbb{Q}$ không phải là vành giao hoán.",
        "Vì phép cộng trên $\\mathbb{Q}/\\mathbb{Z}$ không xác định tốt.",
        "Vì $\\mathbb{Z}$ không có phần tử đơn vị."
      ],
      ans: 0,
      exp: "Lấy $[0] = 0 + \\mathbb{Z} = 1 + \\mathbb{Z}$ nhân với $\\frac{1}{2} + \\mathbb{Z}$: đại diện $0$ cho $0 \\cdot \\frac{1}{2} + \\mathbb{Z} = 0 + \\mathbb{Z}$, nhưng đại diện $1$ cho $1 \\cdot \\frac{1}{2} + \\mathbb{Z} = \\frac{1}{2} + \\mathbb{Z} \\neq 0 + \\mathbb{Z}$. Điều kiện hấp thụ của Iđêan là bắt buộc để phép nhân lớp xác định tốt!"
    },
    // CHƯƠNG 8
    {
      ch: 8, level: "understanding",
      q: "Xét ánh xạ $\\delta: \\mathbb{Z} \\to M_2(\\mathbb{Z})$ cho bởi $\\delta(k) = \\begin{pmatrix} k & 0 \\\\ 0 & 0 \\end{pmatrix} = kE_{11}$. Khẳng định nào sau đây là ĐÚNG?",
      opts: [
        "$\\delta$ là một đơn cấu vành, nhưng KHÔNG bảo toàn phần tử đơn vị của vành mẹ vì $\\delta(1) = E_{11} \\neq I_2$.",
        "$\\delta$ là một đồng cấu bảo toàn đơn vị vì $\\delta(1) = I_2$.",
        "$\\delta$ không bảo toàn phép nhân hai ma trận.",
        "$\\ker\\delta = 2\\mathbb{Z}$."
      ],
      ans: 0,
      exp: "Theo Chương 8 Giáo trình: Đồng cấu vành bảo toàn cộng và nhân nhưng không mặc định gửi $1_R$ thành $1_S$. Ở đây $\\delta(1) = E_{11}$ chỉ là đơn vị của vành ảnh $\\operatorname{im}\\delta$, khác với đơn vị $I_2$ của $M_2(\\mathbb{Z})$."
    },
    {
      ch: 8, level: "application",
      q: "Đặc số $\\operatorname{char}(R)$ của một miền nguyên $R$ bất kỳ chỉ có thể nhận giá trị nào?",
      opts: [
        "Hoặc bằng $0$, hoặc bằng một số nguyên tố $p$.",
        "Bất kỳ số nguyên dương $n \\ge 2$ nào.",
        "Luôn bằng $0$.",
        "Luôn bằng $1$."
      ],
      ans: 0,
      exp: "Theo Bài tập 8.24 Giáo trình: Nếu miền nguyên $R$ có đặc số $d = ab > 0$ là hợp số ($1 < a, b < d$) thì $(a1_R)(b1_R) = (ab)1_R = d1_R = 0_R$, suy ra $a1_R = 0_R$ hoặc $b1_R = 0_R$ (mâu thuẫn với tính nhỏ nhất của $d$). Vậy $\\operatorname{char}(R)$ chỉ có thể là $0$ hoặc nguyên tố $p$."
    },
    // CHƯƠNG 9
    {
      ch: 9, level: "understanding",
      q: "Tại sao phép dựng trường các thương $\\operatorname{Frac}(R)$ bằng quan hệ $(a, b) \\sim (c, d) \\iff ad = bc$ lại thất bại khi áp dụng cho vành $R = \\mathbb{Z}/4\\mathbb{Z}$ hoặc $\\mathbb{Z}/6\\mathbb{Z}$ (Mục 9.9)?",
      opts: [
        "Vì sự tồn tại của các ước của không làm gãy tính bắc cầu của quan hệ $\\sim$ và làm tích hai mẫu số khác $0$ có thể bằng $0$.",
        "Vì $\\mathbb{Z}/4\\mathbb{Z}$ và $\\mathbb{Z}/6\\mathbb{Z}$ không phải là vành giao hoán.",
        "Vì hai vành này không có phần tử đơn vị.",
        "Vì chỉ những vành vô hạn mới dựng được trường các thương."
      ],
      ans: 0,
      exp: "Theo Mục 9.9 (tr. 154 Giáo trình): Trong $\\mathbb{Z}/4\\mathbb{Z}$, $(0, 1) \\sim (0, 2)$ và $(0, 2) \\sim (2, 1)$ nhưng $(0, 1) \\not\\sim (2, 1)$ vì $0 \\cdot 1 \\neq 1 \\cdot 2$; đồng thời hai mẫu khác không $2$ và $2$ nhân nhau lại bằng $2 \\cdot 2 = 0$!"
    },
    {
      ch: 9, level: "recognition",
      q: "Sự khác biệt bản chất giữa Vành thương $R/I$ và Trường các thương $\\operatorname{Frac}(R)$ (Mục 9.10, tr. 154–155) là:",
      opts: [
        "$R/I$ dùng phép chiếu toàn ánh $\\pi_I$ để đồng nhất các phần tử sai khác thuộc $I$; còn $\\operatorname{Frac}(R)$ dùng phép nhúng đơn ánh $\\iota_R$ để giữ nguyên miền nguyên $R$ và bổ sung nghịch đảo cho mọi phần tử khác không.",
        "$R/I$ luôn là một trường, còn $\\operatorname{Frac}(R)$ chỉ là một vành.",
        "$\\ker\\pi_I = \\{0\\}$, còn $\\ker\\iota_R = I$.",
        "Cả hai phép dựng đều yêu cầu $R$ phải là miền nguyên và cần chọn trước một iđêan cực đại."
      ],
      ans: 0,
      exp: "Bảng so sánh Mục 9.10 (tr. 155 Giáo trình) chỉ rõ: $\\pi_I: R \\to R/I$ là toàn cấu với $\\ker\\pi_I = I$ (thu gọn vành), trong khi $\\iota_R: R \\hookrightarrow \\operatorname{Frac}(R)$ là đơn cấu với $\\ker\\iota_R = \\{0\\}$ (mở rộng miền nguyên thành trường)."
    }
  ];

  // ====================================================================
  // 2. BỘ MÁY SINH CÂU HỎI THAM SỐ HÓA ĐỘNG (DYNAMIC PARAMETRIC ENGINE)
  // ====================================================================
  function buildQuestionFromAnswer(meta, correctStr, wrongCandidates) {
    const uniqueWrongs = [];
    for (const w of wrongCandidates) {
      if (w !== correctStr && !uniqueWrongs.includes(w)) uniqueWrongs.push(w);
      if (uniqueWrongs.length === 3) break;
    }
    while (uniqueWrongs.length < 3) {
      const fallback = `Phương án nhiễu ${uniqueWrongs.length + 1}`;
      if (!uniqueWrongs.includes(fallback)) uniqueWrongs.push(fallback);
    }
    const allOpts = shuffleArr([correctStr, ...uniqueWrongs]);
    return {
      ...meta,
      isDynamic: true,
      opts: allOpts,
      ans: allOpts.indexOf(correctStr)
    };
  }

  const DYNAMIC_GENERATORS = [
    // Ch.0: Phép chia Euclid với số bị chia âm (Bài tập 0.3)
    () => {
      const b = randChoice([7, 9, 11, 12, 13, 15]);
      const qTrue = -randChoice([8, 9, 11, 12, 14]);
      const rTrue = randChoice([2, 3, 4, 5, b - 2]);
      const a = b * qTrue + rTrue;
      const qTrap = qTrue + 1;
      const rTrap = a - b * qTrap;
      return buildQuestionFromAnswer(
        {
          ch: 0, level: "application",
          q: `Thực hiện phép chia Euclid của $a = ${a}$ cho $b = ${b}$ theo đúng quy ước $a = bq + r$ với $0 \\le r < ${b}$ (Mục 0.3). Cặp thương và số dư $(q, r)$ duy nhất là:`,
          exp: `Vì số dư $r$ bắt buộc thỏa mãn $0 \\le r < ${b}$, ta không được lấy $q = ${qTrap}, r = ${rTrap} < 0$. Phép biểu diễn đúng duy nhất là $${a} = ${b} \\cdot (${qTrue}) + ${rTrue}$, nên $(q, r) = (${qTrue}, ${rTrue})$.`
        },
        `$(q, r) = (${qTrue}, ${rTrue})$`,
        [
          `$(q, r) = (${qTrap}, ${rTrap})$`,
          `$(q, r) = (${qTrap}, ${Math.abs(rTrap)})$`,
          `$(q, r) = (${-qTrue}, ${rTrue})$`
        ]
      );
    },
    // Ch.0: Hàm phi Euler φ(n) (Bài tập 0.5)
    () => {
      const n = randChoice([10, 12, 14, 15, 16, 18, 20, 21, 24, 30, 35, 36]);
      const phi = eulerPhi(n);
      const divs = getDivisors(n).length;
      return buildQuestionFromAnswer(
        {
          ch: 0, level: "recognition",
          q: `Giá trị của hàm phi Euler $\\varphi(${n})$ (số lớp đồng dư nguyên tố cùng nhau với $${n}$ trong $\\mathbb{Z}/${n}\\mathbb{Z}$) bằng:`,
          exp: `Đếm các số nguyên $k \\in \\{0, 1, \\dots, ${n - 1}\\}$ thỏa mãn $\\gcd(k, ${n}) = 1$, ta thu được đúng $\\varphi(${n}) = ${phi}$ phần tử.`
        },
        `$\\varphi(${n}) = ${phi}$`,
        [
          `$\\varphi(${n}) = ${n - 1}$`,
          `$\\varphi(${n}) = ${divs}$`,
          `$\\varphi(${n}) = ${phi + 2}$`
        ]
      );
    },
    // Ch.1: Nhân hai hoán vị theo quy ước phải sang trái (Bài tập 1.3 / Ví dụ 1.16)
    () => {
      const cases = [
        {
          s: "(12)", t: "(23)", grp: "S_3",
          rightToLeft: "(123)", leftToRight: "(132)",
          trace: "1 \\mapsto 1 \\mapsto 2,\\; 2 \\mapsto 3 \\mapsto 3,\\; 3 \\mapsto 2 \\mapsto 1"
        },
        {
          s: "(13)", t: "(12)", grp: "S_3",
          rightToLeft: "(123)", leftToRight: "(132)",
          trace: "1 \\mapsto 2 \\mapsto 2,\\; 2 \\mapsto 1 \\mapsto 3,\\; 3 \\mapsto 3 \\mapsto 1"
        },
        {
          s: "(12)(34)", t: "(123)", grp: "S_4",
          rightToLeft: "(243)", leftToRight: "(143)",
          trace: "1 \\mapsto 2 \\mapsto 1,\\; 2 \\mapsto 3 \\mapsto 4,\\; 3 \\mapsto 1 \\mapsto 2,\\; 4 \\mapsto 4 \\mapsto 3"
        }
      ];
      const c = randChoice(cases);
      return buildQuestionFromAnswer(
        {
          ch: 1, level: "application",
          q: `Trong nhóm đối xứng $${c.grp}$, với quy ước hợp thành đọc từ phải sang trái (thực hiện thừa số bên phải trước), tích hai hoán vị $\\sigma\\tau = ${c.s}${c.t}$ viết dưới dạng chu trình rời nhau là:`,
          exp: `Thực hiện $\\tau = ${c.t}$ trước rồi đến $\\sigma = ${c.s}$: $${c.trace}$. Do đó $\\sigma\\tau = ${c.rightToLeft}$. (Nếu đọc ngược từ trái sang phải sẽ bị rơi vào bẫy $${c.leftToRight}$!).`
        },
        `$${c.rightToLeft}$`,
        [
          `$${c.leftToRight}$ (bẫy đọc từ trái sang phải)`,
          `$e$ (ánh xạ đồng nhất)`,
          `$${c.s}$`
        ]
      );
    },
    // Ch.1: Cấp của nhóm Dihedral D_{2n} và nhóm đơn vị U(n)
    () => {
      const n = randChoice([5, 6, 7, 8, 9, 10, 12]);
      return buildQuestionFromAnswer(
        {
          ch: 1, level: "recognition",
          q: `Xét nhóm Dihedral $D_{${2 * n}}$ gồm tất cả các phép đối xứng của đa giác đều $${n}$ cạnh. Số phép quay và số phép đối xứng trục trong $D_{${2 * n}}$ lần lượt là:`,
          exp: `Theo Mục 1.7 Giáo trình: Nhóm $D_{2n} = \\{e, r, \\dots, r^{n-1}, s, rs, \\dots, r^{n-1}s\\}$ có cấp $2n = ${2 * n}$, gồm đúng $${n}$ phép quay $r^k$ và $${n}$ phép đối xứng trục $r^ks$.`
        },
        `$${n}$ phép quay và $${n}$ phép đối xứng trục (tổng cấp là $${2 * n}$).`,
        [
          `$${2 * n}$ phép quay và $${2 * n}$ phép đối xứng trục.`,
          `$${n - 1}$ phép quay và $${n + 1}$ phép đối xứng trục.`,
          `$${n}$ phép quay và $2$ phép đối xứng trục.`
        ]
      );
    },
    // Ch.2: Cấp của phần tử [k]_n trong Z/nZ (Bài tập 2.12)
    () => {
      const n = randChoice([12, 15, 18, 20, 24, 30, 36, 40]);
      const kCandidates = [];
      for (let k = 2; k < n; k++) if (gcd(k, n) > 1) kCandidates.push(k);
      const k = randChoice(kCandidates);
      const g = gcd(n, k);
      const ord = n / g;
      return buildQuestionFromAnswer(
        {
          ch: 2, level: "application",
          q: `Trong nhóm cộng cyclic $(\\mathbb{Z}/${n}\\mathbb{Z}, +)$, cấp của phần tử $[${k}]_{${n}}$ và chỉ số của nhóm con $H = \\langle [${k}]_{${n}} \\rangle$ lần lượt là:`,
          exp: `Áp dụng công thức $\\operatorname{ord}([k]_n) = \\dfrac{n}{\\gcd(n, k)}$: Ta có $\\gcd(${n}, ${k}) = ${g}$, suy ra $\\operatorname{ord}([${k}]_{${n}}) = \\dfrac{${n}}{${g}} = ${ord}$, và chỉ số $[\\mathbb{Z}/${n}\\mathbb{Z} : H] = \\dfrac{${n}}{${ord}} = ${g}$.`
        },
        `$\\operatorname{ord}([${k}]_{${n}}) = ${ord}$ và chỉ số $[\\mathbb{Z}/${n}\\mathbb{Z} : H] = ${g}$.`,
        [
          `$\\operatorname{ord}([${k}]_{${n}}) = ${g}$ và chỉ số $[\\mathbb{Z}/${n}\\mathbb{Z} : H] = ${ord}$.`,
          `$\\operatorname{ord}([${k}]_{${n}}) = ${k}$ và chỉ số $[\\mathbb{Z}/${n}\\mathbb{Z} : H] = ${n - k}$.`,
          `$\\operatorname{ord}([${k}]_{${n}}) = ${n}$ và chỉ số $[\\mathbb{Z}/${n}\\mathbb{Z} : H] = 1$.`
        ]
      );
    },
    // Ch.2: Đếm số nghiệm của phương trình x^m = e trong nhóm cyclic cấp n (Bài tập 2.32)
    () => {
      const n = randChoice([24, 30, 36, 40, 48, 60]);
      const m = randChoice([8, 9, 10, 12, 15, 16, 18, 20]);
      const g = gcd(n, m);
      return buildQuestionFromAnswer(
        {
          ch: 2, level: "application",
          q: `Cho $G = \\langle a \\rangle$ là một nhóm cyclic cấp $${n}$. Theo kết quả Bài tập 2.32, phương trình $x^{${m}} = e$ có bao nhiêu nghiệm $x \\in G$?`,
          exp: `Viết $x = a^k$ ($0 \\le k < ${n}$), ta có $a^{${m}k} = e \\iff ${n} \\mid ${m}k \\iff \\dfrac{${n}}{\\gcd(${n}, ${m})} \\mid k$. Do đó phương trình có đúng $\\gcd(${n}, ${m}) = ${g}$ nghiệm phân biệt trong $G$.`
        },
        `Đúng $\\gcd(${n}, ${m}) = ${g}$ nghiệm.`,
        [
          `Đúng $${m}$ nghiệm.`,
          `Đúng $\\dfrac{${n}}{\\gcd(${n}, ${m})} = ${n / g}$ nghiệm.`,
          `Chỉ có $1$ nghiệm duy nhất là $x = e$.`
        ]
      );
    },
    // Ch.3: Định lý Fermat nhỏ & Định lý Euler (Bài tập 3.9)
    () => {
      const cases = [
        { base: 7, exp: 222, mod: 13, phi: 12, remExp: 6, ans: 12, thm: "Fermat nhỏ ($7^{12} \\equiv 1 \\pmod{13}$)" },
        { base: 3, exp: 100, mod: 35, phi: 24, remExp: 4, ans: 11, thm: "Euler ($\\varphi(35) = 24 \\implies 3^{24} \\equiv 1 \\pmod{35}$)" },
        { base: 2, exp: 100, mod: 11, phi: 10, remExp: 0, ans: 1, thm: "Fermat nhỏ ($2^{10} \\equiv 1 \\pmod{11}$)" },
        { base: 5, exp: 62, mod: 13, phi: 12, remExp: 2, ans: 12, thm: "Fermat nhỏ ($5^{12} \\equiv 1 \\pmod{13}$)" }
      ];
      const c = randChoice(cases);
      return buildQuestionFromAnswer(
        {
          ch: 3, level: "application",
          q: `Áp dụng hệ quả số học của Định lý Lagrange (Bài tập 3.9), số dư của lũy thừa $${c.base}^{${c.exp}}$ khi chia cho $${c.mod}$ là:`,
          exp: `Dùng Định lý ${c.thm}: Vì $${c.exp} = ${c.phi} \\cdot ${Math.floor(c.exp / c.phi)} + ${c.remExp}$, nên $${c.base}^{${c.exp}} \\equiv (${c.base}^{${c.phi}})^{${Math.floor(c.exp / c.phi)}} \\cdot ${c.base}^{${c.remExp}} \\equiv ${c.base}^{${c.remExp}} \\equiv ${c.ans} \\pmod{${c.mod}}$.`
        },
        `Số dư là $${c.ans}$.`,
        [
          `Số dư là $${(c.ans + 2) % c.mod}$.`,
          `Số dư là $0$.`,
          `Số dư là $${c.remExp || 3}$.`
        ]
      );
    },
    // Ch.4: Cấp của nhóm thương (Z/nZ) / <[d]_n> và cấp của lớp kề
    () => {
      const configs = [
        { n: 12, d: 4 },
        { n: 15, d: 5 },
        { n: 18, d: 6 },
        { n: 20, d: 5 },
        { n: 24, d: 6 }
      ];
      const { n, d } = randChoice(configs);
      const subOrder = n / d;
      const quotOrder = d;
      return buildQuestionFromAnswer(
        {
          ch: 4, level: "application",
          q: `Trong nhóm cộng $G = \\mathbb{Z}/${n}\\mathbb{Z}$, xét nhóm con chuẩn tắc $N = \\langle [${d}]_{${n}} \\rangle$. Cấp của nhóm con $|N|$, cấp của nhóm thương $|G/N|$ và phần tử đơn vị của nhóm thương $G/N$ lần lượt là:`,
          exp: `Trong $\\mathbb{Z}/${n}\\mathbb{Z}$, phần tử $[${d}]_{${n}}$ có cấp $|N| = \\dfrac{${n}}{\\gcd(${n}, ${d})} = ${subOrder}$. Theo Định lý 4.5, cấp của nhóm thương là $|G/N| = [G : N] = \\dfrac{${n}}{${subOrder}} = ${quotOrder}$, và phần tử đơn vị của nhóm thương là toàn bộ lớp $N = \\langle [${d}]_{${n}} \\rangle$.`
        },
        `$|N| = ${subOrder}$, $|G/N| = ${quotOrder}$ và đơn vị của $G/N$ là lớp $N = \\langle [${d}]_{${n}} \\rangle$.`,
        [
          `$|N| = ${quotOrder}$, $|G/N| = ${subOrder}$ và đơn vị của $G/N$ là $[0]_{${n}}$.`,
          `$|N| = ${subOrder}$, $|G/N| = ${quotOrder}$ và đơn vị của $G/N$ là phần tử $[0]_{${n}}$ chứ không phải lớp $N$.`,
          `$|N| = ${n}$, $|G/N| = 1$ và đơn vị của $G/N$ là $G$.`
        ]
      );
    },
    // Ch.4 & Ch.5: Nhận diện nhóm thương & Hạt nhân của đồng cấu φ: Z_m -> Z_n
    () => {
      const pairs = [
        { m: 12, n: 8, k: 2 },
        { m: 15, n: 10, k: 2 },
        { m: 18, n: 12, k: 2 },
        { m: 12, n: 6, k: 3 }
      ];
      const { m, n, k } = randChoice(pairs);
      const step = n / gcd(n, k);
      const kerSize = m / step;
      const imSize = m / kerSize;
      return buildQuestionFromAnswer(
        {
          ch: 5, level: "application",
          q: `Xét đồng cấu nhóm cộng xác định tốt $\\varphi: \\mathbb{Z}/${m}\\mathbb{Z} \\to \\mathbb{Z}/${n}\\mathbb{Z}$ cho bởi $\\varphi([x]_{${m}}) = [${k}x]_{${n}}$. Cấp của hạt nhân $|\\ker\\varphi|$ và cấp của ảnh $|\\operatorname{im}\\varphi|$ lần lượt là:`,
          exp: `Ta có $[x]_{${m}} \\in \\ker\\varphi \\iff ${n} \\mid ${k}x \\iff ${step} \\mid x$. Trong $\\mathbb{Z}/${m}\\mathbb{Z}$ có đúng $${m}/${step} = ${kerSize}$ phần tử như vậy, nên $|\\ker\\varphi| = ${kerSize}$. Theo Định lý Đẳng cấu thứ nhất, $|\\operatorname{im}\\varphi| = [\\mathbb{Z}/${m}\\mathbb{Z} : \\ker\\varphi] = ${m}/${kerSize} = ${imSize}$.`
        },
        `$|\\ker\\varphi| = ${kerSize}$ và $|\\operatorname{im}\\varphi| = ${imSize}$.`,
        [
          `$|\\ker\\varphi| = ${imSize}$ và $|\\operatorname{im}\\varphi| = ${kerSize}$.`,
          `$|\\ker\\varphi| = 1$ và $|\\operatorname{im}\\varphi| = ${m}$.`,
          `$|\\ker\\varphi| = ${gcd(m, n)}$ và $|\\operatorname{im}\\varphi| = ${n}$.`
        ]
      );
    },
    // Ch.6: Đếm phần tử khả nghịch và ước của không trong vành Z/nZ (Bài tập 6.3)
    () => {
      const n = randChoice([8, 9, 10, 12, 14, 15, 16, 18, 20]);
      const units = eulerPhi(n);
      const zeroDivs = n - 1 - units;
      return buildQuestionFromAnswer(
        {
          ch: 6, level: "application",
          q: `Trong vành $\\mathbb{Z}/${n}\\mathbb{Z}$, số lượng phần tử khả nghịch $|(\\mathbb{Z}/${n}\\mathbb{Z})^\\times|$ và số lượng ước của không (khác $[0]_{${n}}$) lần lượt là:`,
          exp: `Trong $\\mathbb{Z}/${n}\\mathbb{Z}$, lớp $[a] \\neq [0]$ khả nghịch khi và chỉ khi $\\gcd(a, ${n}) = 1$ (có $\\varphi(${n}) = ${units}$ phần tử), và là ước của không khi và chỉ khi $\\gcd(a, ${n}) > 1$ (có $${n} - 1 - ${units} = ${zeroDivs}$ phần tử).`
        },
        `$${units}$ phần tử khả nghịch và $${zeroDivs}$ ước của không.`,
        [
          `$${zeroDivs}$ phần tử khả nghịch và $${units}$ ước của không.`,
          `$${units}$ phần tử khả nghịch và $${zeroDivs + 1}$ ước của không (tính cả $[0]$).`,
          `$${n - 1}$ phần tử khả nghịch và $0$ ước của không.`
        ]
      );
    },
    // Ch.7: Số lượng Iđêan và Iđêan cực đại của Z/nZ
    () => {
      const configs = [
        { n: 12, primes: [2, 3] },
        { n: 18, primes: [2, 3] },
        { n: 20, primes: [2, 5] },
        { n: 30, primes: [2, 3, 5] },
        { n: 36, primes: [2, 3] }
      ];
      const { n, primes } = randChoice(configs);
      const totalIdeals = getDivisors(n).length;
      const maxIdeals = primes.map(p => `([${p}]_{${n}})`).join(", ");
      return buildQuestionFromAnswer(
        {
          ch: 7, level: "application",
          q: `Áp dụng Định lý tương ứng cho vành thương $\\mathbb{Z}/${n}\\mathbb{Z}$, tổng số iđêan và các iđêan cực đại của $\\mathbb{Z}/${n}\\mathbb{Z}$ là:`,
          exp: `Các iđêan của $\\mathbb{Z}/${n}\\mathbb{Z}$ tương ứng 1–1 với các ước dương $d \\mid ${n}$ (có $${totalIdeals}$ ước). Trong đó, iđêan $d\\mathbb{Z}/${n}\\mathbb{Z}$ cực đại khi và chỉ khi vành thương $(\\mathbb{Z}/${n}\\mathbb{Z})/(d\\mathbb{Z}/${n}\\mathbb{Z}) \\cong \\mathbb{Z}/d\\mathbb{Z}$ là một trường $\\iff d$ là ước nguyên tố của $${n}$ ($d \\in \\{${primes.join(", ")}\\}$).`
        },
        `Có tất cả $${totalIdeals}$ iđêan; trong đó có $${primes.length}$ iđêan cực đại là $${maxIdeals}$.`,
        [
          `Có tất cả $${n}$ iđêan; trong đó mọi iđêan khác $(0)$ đều cực đại.`,
          `Có tất cả $${primes.length}$ iđêan và không có iđêan cực đại nào.`,
          `Chỉ có $2$ iđêan tầm thường là $(\\{[0]\\})$ và toàn bộ $\\mathbb{Z}/${n}\\mathbb{Z}$.`
        ]
      );
    }
  ];
