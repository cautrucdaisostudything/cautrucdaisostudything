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
        A: "Sai vì: $a*c=a+2c$ nói chung không bằng $a$; lũy thừa cũng cộng hằng số $c$ nur lần, không $n$ lần.",
        B: "Sai vì: nghịch đảo $b$ phải thỏa $a+b+c=e=-c$, nên $b=-a-2c$, không $-a$ nói chung.",
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
        B: "Sai vì: vị nhóm hữu hạn có thể không là nhóm, chẳng hạn $(\\mathbb{N},+)$ vô hạn là ví dụ quen thuộc; hữu hạn tự nó không đảm bảo nghịch đảo.",
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
  // 1. NGÂN HÀNG CÂU HỎI LÝ THUYẾT & BẪY PHẢN VÍ DỤ TINH TUYỂN (CHƯƠNG 0–9)
  // ====================================================================
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
      exp: "Theo Định nghĩa 0.4 trong Giáo trình: Quan hệ tương đương $\\sim$ trên $X$ phải thỏa mãn 3 tính chất: phản xạ ($x \\sim x$), đối xứng ($x \\sim y \\implies y \\sim x$) và bắc cầu ($x \\sim y, y \\sim z \\implies x \\sim z$)."
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
      exp: "Trong $\\mathbb{Z}/3\\mathbb{Z}$, hai đại diện $1$ và $4$ thuộc cùng một lớp ($[1]_3 = [4]_3$), nhưng đầu ra lại rơi vào hai lớp khác nhau trong $\\mathbb{Z}/2\\mathbb{Z}$ ($[1]_2 \\neq [0]_2 = [4]_2$). Do đó công thức phụ thuộc vào đại diện và không xác định một ánh xạ."
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
      exp: "Ta có $1 + (a * b) = (1 + a)(1 + b)$. Phần tử đơn vị là $e = 0$. Để $a * b = 0$, ta cần $(1+a)(1+b) = 1$. Vì $a, b \\in \\mathbb{Z}$ nên $1+a \\in \\{\\pm 1\\} \\iff a \\in \\{0, -2\\}$."
    },
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
    A: "với mọi $x, y \\in \\mathbb{R}$, trung bình cộng $\\dfrac{x + y}{2} \\in \\mathbb{R}$ nên phép toán $*$ hoàn toàn thỏa mãn tính đóng trên $\\mathbb{R}$.",
    B: "với mọi $x, y \\in \\mathbb{R}$, ta luôn có $x * y = \\dfrac{x + y}{2} = \\dfrac{y + x}{2} = y * x$ nên phép toán $*$ thỏa mãn tính giao hoán.",
    C: "Phép toán $x * y = \\dfrac{x + y}{2}$ đóng và giao hoán trên $\\mathbb{R}$, nhưng KHÔNG kết hợp vì $(x * y) * z = \\dfrac{x + y + 2z}{4} \\neq \\dfrac{2x + y + z}{4} = x * (y * z)$. Phản ví dụ cụ thể: $(0 * 0) * 4 = 2 \\neq 1 = 0 * (0 * 4)$. Đây là phản ví dụ kinh điển cho thấy tính giao hoán không kéo theo tính kết hợp.",
    D: "phép toán $x * y = \\dfrac{x + y}{2}$ đã vi phạm ngay từ tiên đề kết hợp (và cũng không có phần tử đơn vị trên $\\mathbb{R}$), chứ không phải vẫn thỏa mãn tính kết hợp."
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
    ...questionsChapter1.map((item, index) => ({
      ch: item.chapter,
      level: index % 4 === 0 ? "recognition" : index % 4 === 3 ? "application" : "understanding",
      q: item.question,
      opts: Object.values(item.options),
      ans: Object.keys(item.options).indexOf(item.correct),
      exp: item.explanations[item.correct],
      explanations: item.explanations
    })),
    ...questionsChapter1_Part2.map((item, index) => ({
      ch: item.chapter,
      level: index % 4 === 0 ? "recognition" : index % 4 === 3 ? "application" : "understanding",
      q: item.question,
      opts: Object.values(item.options),
      ans: Object.keys(item.options).indexOf(item.correct),
      exp: item.explanations[item.correct],
      explanations: item.explanations
    })),
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
      exp: "Theo Mục 3.7 và Bài tập 3.12 Giáo trình: $V_4$ có mọi phần tử khác $e$ đều cấp $2$ (bác bỏ việc tồn tại phần tử cấp $d \\mid |G|$); còn $A_4$ có cấp $12$ nhưng không có bất kỳ nhóm con nào cấp $6$ (bác bỏ việc tồn tại nhóm con cấp $d \\mid |G|$)."
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
      const a = b * qTrue + rTrue; // Số nguyên âm
      const qTrap = qTrue + 1;
      const rTrap = a - b * qTrap; // Số dư âm (bẫy phổ biến!)
      return buildQuestionFromAnswer(
        {
          ch: 0, level: "application",
          q: `Thực hiện phép chia Euclid của $a = ${a}$ cho $b = ${b}$ theo đúng quy ước $a = bq + r$ với $0 \\le r < ${b}$ (Mục 0.3.1). Cặp thương và số dư $(q, r)$ duy nhất là:`,
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
          exp: `Theo Mục 1.6.4 Giáo trình: Nhóm $D_{2n} = \\{e, r, \\dots, r^{n-1}, s, rs, \\dots, r^{n-1}s\\}$ có cấp $2n = ${2 * n}$, gồm đúng $${n}$ phép quay $r^k$ và $${n}$ phép đối xứng trục $r^ks$.`
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
    // Ch.4 & Ch.5: Nhận diện nhóm thương & Hạt nhân của đồng cấu φ: Z_m -> Z_n
    () => {
      const pairs = [
        { m: 12, n: 8, k: 2 },
        { m: 15, n: 10, k: 2 },
        { m: 18, n: 12, k: 2 },
        { m: 12, n: 6, k: 3 }
      ];
      const { m, n, k } = randChoice(pairs);
      // k*x ≡ 0 (mod n) <=> (n / gcd(n, k)) | x
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
