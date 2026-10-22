// ========================================================
// CẤU HÌNH DANH MỤC CHƯƠNG TOÀN DIỆN (PART 0 -> PART 5)
// ========================================================
const partChapters = {
  "part-0": [
    { id: "tab-c0", title: "Chương 0. Ngôn ngữ & Công cụ" }
  ],
  "part-1": [
    { id: "tab-c1", title: "Chương 1. Nhóm & Ví dụ cơ bản" },
    { id: "tab-c2", title: "Chương 2. Nhóm con & Nhóm cyclic" },
    { id: "tab-c3", title: "Chương 3. Lớp kề & Lagrange" },
    { id: "tab-c4", title: "Chương 4. Chuẩn tắc & Nhóm thương" },
    { id: "tab-c5", title: "Chương 5. Đồng cấu & Đẳng cấu" }
  ],
  "part-2": [
    { id: "tab-c6", title: "Chương 6. Vành, Miền nguyên & Trường" },
    { id: "tab-c7", title: "Chương 7. Iđêan & Vành thương" },
    { id: "tab-c8", title: "Chương 8. Đồng cấu vành & Đặc số" }
  ],
  "part-3": [
    { id: "tab-c9", title: "Chương 9. Trường các thương Frac(R)" }
  ],
  "part-4": [
    { id: "tab-compare", title: "Đối chiếu Nhóm vs Vành" }
  ],
  "part-5": [
    { id: "tab-ex0", title: "Bài tập Chương 0: Công cụ" },
    { id: "tab-ex1", title: "Bài tập Chương 1: Nhóm" },
    { id: "tab-ex2", title: "Bài tập Chương 2: Nhóm Cyclic" },
    { id: "tab-ex3", title: "Bài tập Chương 3: Lagrange" },
    { id: "tab-ex4", title: "Bài tập Chương 4: Chuẩn tắc" },
    { id: "tab-ex5", title: "Bài tập Chương 5: Đẳng cấu" },
    { id: "tab-ex6", title: "Bài tập Chương 6: Vành" },
    { id: "tab-ex7", title: "Bài tập Chương 7: Iđêan" },
    { id: "tab-ex8", title: "Bài tập Chương 8: Đồng cấu vành" },
    { id: "tab-ex9", title: "Bài tập Chương 9: Trường thương" }
  ]
};

// ========================================================
// DỮ LIỆU SLIDE (DATA-DRIVEN) — 10 CHƯƠNG
// ========================================================
const SLIDES_DATA = {
  "0": [
    // ========================================================
    // SLIDE 1: TRANG BÌA CĂN GIỮA - ĐẠI DƯƠNG SƯƠNG MÙ & SINH VẬT BIỂN PHÁT SÁNG
    // ========================================================
    {
      html: `
        <div style="position: relative; width: 100%; height: 100%; min-height: 100%; display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center; padding: 26px 34px 22px; box-sizing: border-box; overflow: hidden; border-radius: 16px; border: 1.5px solid rgba(56, 189, 248, 0.45); box-shadow: 0 18px 45px rgba(2, 8, 23, 0.7);">
          <!-- LỚP NỀN CẢNH QUAN: BIỂN SƯƠNG MÙ, ĐÀN CÁ, SỨA VÀ CÁ ĐUỐI PHÁT SÁNG -->
          <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none;">
            <defs>
              <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#020813"/>
                <stop offset="40%" stop-color="#061833"/>
                <stop offset="75%" stop-color="#0a274c"/>
                <stop offset="100%" stop-color="#020f21"/>
              </linearGradient>
              <radialGradient id="mistHorizonGlow" cx="50%" cy="48%" r="52%">
                <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.32"/>
                <stop offset="35%" stop-color="#0284c7" stop-opacity="0.16"/>
                <stop offset="70%" stop-color="#061833" stop-opacity="0.05"/>
                <stop offset="100%" stop-color="#020813" stop-opacity="0"/>
              </radialGradient>
              <linearGradient id="distantMountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#0f315c" stop-opacity="0.45"/>
                <stop offset="100%" stop-color="#041022" stop-opacity="0.85"/>
              </linearGradient>
              <linearGradient id="waveMisty1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#0369a1" stop-opacity="0.2"/>
                <stop offset="50%" stop-color="#38bdf8" stop-opacity="0.4"/>
                <stop offset="100%" stop-color="#0284c7" stop-opacity="0.15"/>
              </linearGradient>
              <linearGradient id="waveMisty2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#075985" stop-opacity="0.5"/>
                <stop offset="50%" stop-color="#0284c7" stop-opacity="0.3"/>
                <stop offset="100%" stop-color="#0c4a6e" stop-opacity="0.55"/>
              </linearGradient>
              <linearGradient id="seaFloorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#082242" stop-opacity="0.75"/>
                <stop offset="100%" stop-color="#010712" stop-opacity="0.95"/>
              </linearGradient>
              <linearGradient id="fishCyan" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#7dd3fc" stop-opacity="0.95"/>
                <stop offset="60%" stop-color="#0284c7" stop-opacity="0.75"/>
                <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.4"/>
              </linearGradient>
              <linearGradient id="tailCyan" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.8"/>
                <stop offset="100%" stop-color="#67e8f9" stop-opacity="0.1"/>
              </linearGradient>
              <linearGradient id="fishEmerald" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#a7f3d0" stop-opacity="0.95"/>
                <stop offset="60%" stop-color="#059669" stop-opacity="0.7"/>
                <stop offset="100%" stop-color="#34d399" stop-opacity="0.35"/>
              </linearGradient>
              <linearGradient id="tailEmerald" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#34d399" stop-opacity="0.8"/>
                <stop offset="100%" stop-color="#6ee7b7" stop-opacity="0.1"/>
              </linearGradient>
              <linearGradient id="jellyCyan" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#bae6fd" stop-opacity="0.9"/>
                <stop offset="70%" stop-color="#0284c7" stop-opacity="0.6"/>
                <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.2"/>
              </linearGradient>
              <linearGradient id="jellyViolet" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#f5d0fe" stop-opacity="0.85"/>
                <stop offset="70%" stop-color="#9333ea" stop-opacity="0.55"/>
                <stop offset="100%" stop-color="#c084fc" stop-opacity="0.2"/>
              </linearGradient>
              <linearGradient id="mantaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#0369a1" stop-opacity="0.8"/>
                <stop offset="60%" stop-color="#075985" stop-opacity="0.5"/>
                <stop offset="100%" stop-color="#0c4a6e" stop-opacity="0.2"/>
              </linearGradient>
              <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="16"/>
              </filter>
            </defs>

            <rect width="1000" height="600" fill="url(#skyGrad)"/>
            <ellipse cx="500" cy="340" rx="480" ry="190" fill="url(#mistHorizonGlow)" filter="url(#softGlow)"/>
            <path d="M 0,335 Q 160,285 330,325 T 690,305 Q 830,275 1000,330 L 1000,600 L 0,600 Z" fill="url(#distantMountainGrad)" filter="url(#softGlow)"/>

            <!-- Sứa phát quang 1 (Trái) -->
            <g transform="translate(110, 220) scale(0.82)" opacity="0.82" filter="drop-shadow(0 0 12px rgba(56, 189, 248, 0.7))">
              <path d="M -30,0 C -30,-36 30,-36 30,0 C 20,8 -20,8 -30,0 Z" fill="url(#jellyCyan)"/>
              <ellipse cx="0" cy="0" rx="28" ry="6" fill="#0369a1" opacity="0.45"/>
              <path d="M -18,4 Q -26,30 -12,62 T -20,105" fill="none" stroke="#7dd3fc" stroke-width="1.5" opacity="0.75"/>
              <path d="M -8,6 Q -15,35 -2,72 T -10,120" fill="none" stroke="#38bdf8" stroke-width="1.6" opacity="0.85"/>
              <path d="M 0,6 Q 8,40 -2,78 T 4,125" fill="none" stroke="#67e8f9" stroke-width="1.8" opacity="0.9"/>
              <path d="M 12,5 Q 20,35 8,70 T 16,112" fill="none" stroke="#38bdf8" stroke-width="1.5" opacity="0.8"/>
            </g>

            <!-- Sứa phát quang 2 (Phải) -->
            <g transform="translate(885, 195) scale(0.75)" opacity="0.78" filter="drop-shadow(0 0 12px rgba(192, 132, 252, 0.7))">
              <path d="M -28,0 C -28,-34 28,-34 28,0 C 18,7 -18,7 -28,0 Z" fill="url(#jellyViolet)"/>
              <path d="M -14,4 Q -20,30 -8,62 T -14,98" fill="none" stroke="#e879f9" stroke-width="1.5" opacity="0.8"/>
              <path d="M 0,6 Q 7,35 -2,72 T 4,110" fill="none" stroke="#f0abfc" stroke-width="1.8" opacity="0.9"/>
              <path d="M 16,4 Q 22,30 12,62 T 18,98" fill="none" stroke="#d8b4fe" stroke-width="1.4" opacity="0.8"/>
            </g>

            <path d="M 0,365 Q 250,330 500,355 T 1000,345 L 1000,600 L 0,600 Z" fill="url(#waveMisty1)" filter="url(#softGlow)"/>

            <!-- Cá đuối phát sáng -->
            <g transform="translate(275, 410) rotate(-14) scale(0.68)" opacity="0.68" filter="drop-shadow(0 0 14px rgba(56, 189, 248, 0.55))">
              <path d="M 0,-40 C 35,-25 90,0 120,25 C 75,30 35,40 0,45 C -35,40 -75,30 -120,25 C -90,0 -35,-25 0,-40 Z" fill="url(#mantaGrad)"/>
              <path d="M 0,45 Q 6,95 -3,150 T 4,200" fill="none" stroke="#38bdf8" stroke-width="2" opacity="0.75"/>
            </g>

            <path d="M 0,415 Q 280,385 600,410 T 1000,395 L 1000,600 L 0,600 Z" fill="url(#waveMisty2)"/>

            <!-- Đàn cá phát sáng -->
            <g transform="translate(175, 445) rotate(-16) scale(0.88)" opacity="0.88">
              <path d="M -45,0 C -30,-14 15,-12 40,0 C 15,12 -30,14 -45,0 Z" fill="url(#fishCyan)" filter="drop-shadow(0 0 10px rgba(56, 189, 248, 0.7))"/>
              <path d="M 40,0 C 58,-18 88,-22 100,-8 C 76,0 90,18 100,22 C 84,14 58,10 40,0 Z" fill="url(#tailCyan)"/>
              <circle cx="-35" cy="-3" r="2.2" fill="#ffffff"/>
            </g>
            <g transform="translate(825, 435) rotate(168) scale(0.88)" opacity="0.88">
              <path d="M -45,0 C -30,-14 15,-12 40,0 C 15,12 -30,14 -45,0 Z" fill="url(#fishEmerald)" filter="drop-shadow(0 0 10px rgba(52, 211, 153, 0.6))"/>
              <path d="M 40,0 C 58,-18 88,-22 100,-8 C 76,0 90,18 100,22 C 84,14 58,10 40,0 Z" fill="url(#tailEmerald)"/>
              <circle cx="-35" cy="-3" r="2.2" fill="#ffffff"/>
            </g>
            <path d="M 0,480 Q 340,450 680,475 T 1000,465 L 1000,600 L 0,600 Z" fill="url(#seaFloorGrad)"/>
          </svg>

          <!-- TIÊU ĐỀ SLIDE (CĂN GIỮA, CỠ CHỮ LỚN NỔI BẬT) -->
          <div class="anim-title" style="position: relative; z-index: 2; max-width: 900px;">
            <div style="display: inline-flex; align-items: center; gap: 10px; padding: 6px 22px; background: rgba(15, 23, 42, 0.78); border: 1.5px solid rgba(56, 189, 248, 0.55); border-radius: 999px; font-size: clamp(0.92rem, 1.2vw, 1.08rem); font-weight: 800; color: #7dd3fc; letter-spacing: 1.2px; margin-bottom: 12px; backdrop-filter: blur(10px); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);">
              <span>🌊</span> CẤU TRÚC ĐẠI SỐ — CHƯƠNG 0
            </div>
            <h1 style="font-size: clamp(2.55rem, 4.1vw, 3.45rem); font-weight: 800; color: #ffffff; margin: 0 0 8px; line-height: 1.18; letter-spacing: -0.5px; text-shadow: 0 4px 28px rgba(0, 0, 0, 0.75);">
              Ngôn Ngữ &amp; <span style="color: #38bdf8;">Công Cụ Đại Số</span>
            </h1>
            <p style="font-size: clamp(1.1rem, 1.45vw, 1.3rem); color: #bae6fd; margin: 0; font-weight: 600;">
              Giáo trình Cấu trúc Đại số · TS. Huỳnh Việt Khánh
            </p>
          </div>

          <!-- TÂM ĐIỂM: KHỐI CÂU HỎI TRIẾT HỌC TRUNG TÂM -->
          <div class="slide-glass-card anim-card anim-d1" style="position: relative; z-index: 2; max-width: 880px; width: 100%; padding: 26px 38px; margin: 12px 0; background: rgba(10, 25, 47, 0.78) !important; border: 1.5px solid rgba(56, 189, 248, 0.5) !important; border-radius: 18px; backdrop-filter: blur(20px); box-shadow: 0 20px 50px rgba(2, 6, 23, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.18); text-align: center;">
            <div style="font-size: clamp(0.98rem, 1.25vw, 1.12rem); font-weight: 800; color: #fbbf24; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">
              ✦ Câu Hỏi Trung Tâm Của Chương ✦
            </div>
            <p style="font-size: clamp(1.28rem, 1.75vw, 1.52rem); line-height: 1.62; color: #ffffff; margin: 0; font-weight: 500;">
              Làm thế nào để nhiều biểu diễn hình thức khác nhau trong toán học vẫn được nhìn nhận là <b style="color: #38bdf8; text-decoration: underline; text-underline-offset: 6px;">cùng một đối tượng duy nhất</b>, và làm sao tính toán trên chúng mà không phụ thuộc cách chọn đại diện?
            </p>
          </div>

          <!-- ĐÁY SLIDE: THANH 4 TRỤ CỘT KIẾN THỨC (KHÔNG THANH CUỘN) -->
          <div class="anim-card anim-d2" style="position: relative; z-index: 2; display: flex; flex-wrap: nowrap; justify-content: space-between; align-items: center; gap: 6px; width: 100%; max-width: 960px; padding: 8px 14px; box-sizing: border-box; background: rgba(15, 23, 42, 0.82); border: 1.5px solid rgba(56, 189, 248, 0.38); border-radius: 999px; backdrop-filter: blur(12px); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45); overflow: hidden;">
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(56, 189, 248, 0.2); border: 1px solid rgba(56, 189, 248, 0.42); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #7dd3fc; white-space: nowrap;">
              1. Quan Hệ Tương Đương
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(52, 211, 153, 0.2); border: 1px solid rgba(52, 211, 153, 0.42); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #6ee7b7; white-space: nowrap;">
              2. Tập Thương &amp; Phân Hoạch
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(251, 191, 36, 0.2); border: 1px solid rgba(251, 191, 36, 0.42); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #fde68a; white-space: nowrap;">
              3. Số Học Modulo &amp; Bézout
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(244, 114, 182, 0.2); border: 1px solid rgba(244, 114, 182, 0.42); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #f472b6; white-space: nowrap;">
              4. Tính Xác Định Tốt
            </span>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 2: ĐỘNG CƠ TRỰC QUAN (2 CỘT SONG HÀNH: ĐỒNG HỒ & PHÂN SỐ)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(56,189,248,0.14), transparent 32%), linear-gradient(135deg, #06152d, #0f2952 55%, #06152d); border:1.5px solid rgba(56,189,248,0.45); color:#f0f9ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(56,189,248,0.2); border:1.5px solid #38bdf8; border-radius:999px; color:#7dd3fc; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🌊 TRỰC QUAN KHỞI NGUỒN
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Một Đối Tượng — Nhiều Cách Gọi Tên</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Mặt đồng hồ 12h -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.78)!important; border:1.5px solid rgba(56,189,248,0.45)!important; border-left:5px solid #38bdf8!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#38bdf8; font-size:clamp(1.22rem, 1.6vw, 1.42rem); display:block; margin-bottom:10px;">⏰ 1) Mô Hình Mặt Đồng Hồ 12 Giờ</b>
              <p style="color:#e2e8f0; font-size:clamp(1.1rem, 1.4vw, 1.26rem); line-height:1.68; margin:0 0 12px;">
                Các mốc thời gian <b>$5$ giờ</b>, <b>$17$ giờ</b> và <b>$-7$ giờ</b> cùng chỉ đúng một vị trí của kim giờ trên mặt đồng hồ:
              </p>
              <div class="slide-math-display" style="background:rgba(2,12,27,0.9); border-color:#38bdf8; font-size:clamp(1.2rem, 1.55vw, 1.38rem); padding:12px; margin:8px 0 12px;">
                $$5 \\equiv 17 \\equiv -7 \\pmod{12}$$
              </div>
              <p style="color:#bae6fd; font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.6; margin:0;">
                - Các số nguyên sai khác nhau một bội của $12$ được gom lại thành những đại diện của cùng một trạng thái giờ.
              </p>
            </div>

            <!-- Cột 2: Phân số số học -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; border-left:5px solid #34d399!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#34d399; font-size:clamp(1.22rem, 1.6vw, 1.42rem); display:block; margin-bottom:10px;">🍰 2) Mô Hình Phân Số Hình Thức</b>
              <p style="color:#e2e8f0; font-size:clamp(1.1rem, 1.4vw, 1.26rem); line-height:1.68; margin:0 0 12px;">
                Các cặp tử - mẫu khác nhau như <b>$1/2$</b>, <b>$2/4$</b> và <b>$-3/-6$</b> cùng biểu thị duy nhất một giá trị tỉ lệ:
              </p>
              <div class="slide-math-display" style="background:rgba(2,12,27,0.9); border-color:#34d399; color:#a7f3d0; font-size:clamp(1.2rem, 1.55vw, 1.38rem); padding:12px; margin:8px 0 12px;">
                $$\\frac{1}{2} = \\frac{2}{4} = \\frac{-3}{-6} \\iff ad = bc$$
              </div>
              <p style="color:#a7f3d0; font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.6; margin:0;">
                - Nhiều biểu diễn khác nhau được đồng nhất thành một số hữu tỉ duy nhất trong $\\mathbb{Q}$.
              </p>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:16px 22px; background:rgba(10,25,47,0.9)!important; border:1.5px solid #fbbf24!important; border-left:6px solid #fbbf24!important; color:#fef3c7!important; font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.6;">
            <b>✨ Điểm khởi nguồn:</b> Nhu cầu "gom nhóm" các biểu diễn tương đương lại thành một thực thể toán học duy nhất chính là động cơ sinh ra <b>Quan hệ tương đương &amp; Tập thương</b>!
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 3: LÝ THUYẾT - QUAN HỆ TƯƠNG ĐƯƠNG (3 TIÊN ĐỀ)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(56,189,248,0.14), transparent 32%), linear-gradient(135deg, #06152d, #0f2952 55%, #06152d); border:1.5px solid rgba(56,189,248,0.45); color:#f0f9ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(56,189,248,0.2); border:1.5px solid #38bdf8; border-radius:999px; color:#7dd3fc; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 ĐỊNH NGHĨA
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Quan Hệ Tương Đương (Equivalence Relation)</h2>
            <p style="color:#bae6fd; font-size:clamp(1.14rem, 1.46vw, 1.3rem); line-height:1.58; margin:0;">
              Cho tập hợp $X \\neq \\emptyset$. Một quan hệ hai ngôi $\\sim$ trên $X$ được gọi là <b>quan hệ tương đương</b> nếu thỏa mãn đồng thời 3 tiên đề với mọi $x, y, z \\in X$:
            </p>
          </div>

          <div class="slide-grid-3 anim-card anim-d1" style="flex:1; align-items:stretch; gap:18px; margin:0;">
            <!-- Card 1: Phản xạ -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid rgba(56,189,248,0.45)!important; border-top:5px solid #38bdf8!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#38bdf8; font-size:clamp(1.2rem, 1.55vw, 1.38rem); margin-bottom:8px;">(i) Tính Phản Xạ</b>
              <div class="slide-math-display" style="background:rgba(2,12,27,0.9); border-color:#38bdf8; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:10px; margin:10px 0;">
                $$x \\sim x, \\quad \\forall x \\in X$$
              </div>
              <p style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); color:#e2e8f0; margin:6px 0 0; line-height:1.65;">
                - Mỗi phần tử luôn tự nhận diện và tương đương với chính bản thân nó.
              </p>
            </div>

            <!-- Card 2: Đối xứng -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid rgba(52,211,153,0.45)!important; border-top:5px solid #34d399!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#34d399; font-size:clamp(1.2rem, 1.55vw, 1.38rem); margin-bottom:8px;">(ii) Tính Đối Xứng</b>
              <div class="slide-math-display" style="background:rgba(2,12,27,0.9); border-color:#34d399; color:#a7f3d0; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:10px; margin:10px 0;">
                $$x \\sim y \\implies y \\sim x$$
              </div>
              <p style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); color:#e2e8f0; margin:6px 0 0; line-height:1.65;">
                - Sự tương đương hoàn toàn bình đẳng hai chiều, không phân biệt trước - sau.
              </p>
            </div>

            <!-- Card 3: Bắc cầu -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid rgba(251,191,36,0.45)!important; border-top:5px solid #fbbf24!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.2rem, 1.55vw, 1.38rem); margin-bottom:8px;">(iii) Tính Bắc Cầu</b>
              <div class="slide-math-display" style="background:rgba(2,12,27,0.9); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.14rem, 1.48vw, 1.32rem); padding:10px; margin:10px 0;">
                $$x \\sim y \\land y \\sim z \\implies x \\sim z$$
              </div>
              <p style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); color:#e2e8f0; margin:6px 0 0; line-height:1.65;">
                - Tính tương thích được lan truyền liên tục qua các mắt xích trung gian.
              </p>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(10,25,47,0.92)!important; border:1.5px solid #fbbf24!important; color:#fef3c7!important; font-size:clamp(1.06rem, 1.36vw, 1.22rem); text-align:center;">
            <b>💡 Ý nghĩa cốt lõi:</b> Quan hệ tương đương là sự trừu tượng hóa chính xác nhất của dấu bằng "$=$" để gom các phần tử cùng bản chất vào chung một lớp.
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 4: VÍ DỤ SOI SÁNG CHO SLIDE 3 (ĐỒNG DƯ MODULO 3 TRÊN Z)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(56,189,248,0.14), transparent 32%), linear-gradient(135deg, #06152d, #0f2952 55%, #06152d); border:1.5px solid rgba(56,189,248,0.45); color:#f0f9ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(52,211,153,0.22); border:1.5px solid #34d399; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0 0 6px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Kiểm Tra Quan Hệ Đồng Dư Modulo $3$ Trên $\\mathbb{Z}$</h2>
            <p style="color:#bae6fd; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Trên tập số nguyên $\\mathbb{Z}$, xét quan hệ <b style="color:#fde68a;">$a \\sim b \\iff 3 \\mid (a - b)$</b> (tức $a - b = 3k, k \\in \\mathbb{Z}$). Chứng minh $\\sim$ là quan hệ tương đương:
            </p>
          </div>

          <div class="anim-card anim-d1" style="flex:1; display:flex; flex-direction:column; justify-content:space-between; gap:12px;">
            <div class="slide-glass-card" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border-left:5px solid #38bdf8!important; padding:14px 22px; border-radius:12px;">
              <b style="color:#7dd3fc; font-size:clamp(1.14rem, 1.46vw, 1.3rem);">1) Kiểm tra tính phản xạ ($a \\sim a$):</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); color:#e2e8f0; margin-top:4px; line-height:1.6;">
                - Với mọi $a \\in \\mathbb{Z}$, ta có $a - a = 0 = 3 \\cdot 0 \\implies 3 \\mid (a - a) \\implies a \\sim a$.
              </div>
            </div>

            <div class="slide-glass-card" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border-left:5px solid #34d399!important; padding:14px 22px; border-radius:12px;">
              <b style="color:#6ee7b7; font-size:clamp(1.14rem, 1.46vw, 1.3rem);">2) Kiểm tra tính đối xứng ($a \\sim b \\implies b \\sim a$):</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); color:#e2e8f0; margin-top:4px; line-height:1.6;">
                - Giả sử $a \\sim b \\implies a - b = 3k$ ($k \\in \\mathbb{Z}$) $\\implies b - a = 3(-k)$ (với $-k \\in \\mathbb{Z}$) $\\implies 3 \\mid (b - a) \\implies b \\sim a$.
              </div>
            </div>

            <div class="slide-glass-card" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border-left:5px solid #fbbf24!important; padding:14px 22px; border-radius:12px;">
              <b style="color:#fbbf24; font-size:clamp(1.14rem, 1.46vw, 1.3rem);">3) Kiểm tra tính bắc cầu ($a \\sim b \\land b \\sim c \\implies a \\sim c$):</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); color:#e2e8f0; margin-top:4px; line-height:1.6;">
                - Giả sử $a - b = 3k$ và $b - c = 3m$ ($k, m \\in \\mathbb{Z}$). Cộng vế theo vế: $a - c = (a - b) + (b - c) = 3(k + m) \\implies a \\sim c$. $\\blacksquare$
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 5: PHẢN VÍ DỤ CHO SLIDE 3 (GÃY TÍNH BẮC CẦU KHOẢNG CÁCH)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(56,189,248,0.14), transparent 32%), linear-gradient(135deg, #06152d, #0f2952 55%, #06152d); border:1.5px solid rgba(56,189,248,0.45); color:#f0f9ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.22); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              ⚠️ PHẢN VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Phản Xạ &amp; Đối Xứng Chưa Chắc Đã Kéo Theo Bắc Cầu!</h2>
            <p style="color:#bae6fd; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Trên tập số nguyên $\\mathbb{Z}$ (hoặc $\\mathbb{R}$), xét quan hệ khoảng cách gần: <b style="color:#fde68a;">$x \\sim y \\iff |x - y| \\le 1$</b>.
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Bên trái: 2 tính chất thỏa mãn -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid rgba(52,211,153,0.45)!important; border-left:5px solid #34d399!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">✔ Thỏa mãn Phản xạ &amp; Đối xứng:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.75; color:#e2e8f0; margin-top:12px;">
                - <b>(i) Phản xạ:</b> Với mọi $x$, ta có $|x - x| = 0 \\le 1 \\implies x \\sim x$.<br>
                - <b>(ii) Đối xứng:</b> Nếu $x \\sim y$ thì $|y - x| = |x - y| \\le 1 \\implies y \\sim x$.
              </div>
            </div>

            <!-- Bên phải: Gãy tính bắc cầu -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid #fb7185!important; border-left:5px solid #fb7185!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">❌ Gãy đổ hoàn toàn ở Tính bắc cầu:</b>
              <div class="slide-math-display" style="background:rgba(2,12,27,0.92); border-color:#fb7185; color:#fecdd3; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:10px; margin:12px 0;">
                $$0 \\sim 1 \\;\\text{ và }\\; 1 \\sim 2 \\quad \\text{nhưng} \\quad 0 \\not\\sim 2$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.7; color:#e2e8f0;">
                - Vì $|0 - 1| = 1 \\le 1$ và $|1 - 2| = 1 \\le 1$, nhưng $|0 - 2| = 2 &gt; 1$.<br>
                - Sai số cộng dồn qua cầu nối trung gian làm đứt gãy quan hệ!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 6: LÝ THUYẾT - LỚP TƯƠNG ĐƯƠNG & ĐỊNH LÝ PHÂN HOẠCH
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(56,189,248,0.14), transparent 32%), linear-gradient(135deg, #06152d, #0f2952 55%, #06152d); border:1.5px solid rgba(56,189,248,0.45); color:#f0f9ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(56,189,248,0.2); border:1.5px solid #38bdf8; border-radius:999px; color:#7dd3fc; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 KHÁI NIỆM &amp; ĐỊNH LÝ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Lớp Tương Đương, Tập Thương &amp; Định Lý Phân Hoạch</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột định nghĩa -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid rgba(56,189,248,0.45)!important; border-left:5px solid #38bdf8!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#38bdf8; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Lớp Tương Đương &amp; Tập Thương:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#e2e8f0; margin-top:10px;">
                - <b>Lớp tương đương chứa $x$</b> ($x$ gọi là một <i>đại diện</i>):
                <div class="slide-math-display" style="background:rgba(2,12,27,0.9); border-color:#38bdf8; font-size:clamp(1.15rem, 1.48vw, 1.34rem); padding:8px; margin:8px 0;">
                  $$[x] = \\{y \\in X \\mid x \\sim y\\}$$
                </div>
                - <b>Tập thương $X/{\\sim}$:</b> Tập hợp gồm tất cả các lớp tương đương:
                <div class="slide-math-display" style="background:rgba(2,12,27,0.9); border-color:#38bdf8; font-size:clamp(1.15rem, 1.48vw, 1.34rem); padding:8px; margin:8px 0 0;">
                  $$X/{\\sim} = \\{[x] \\mid x \\in X\\}$$
                </div>
              </div>
            </div>

            <!-- Cột định lý phân hoạch -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid rgba(52,211,153,0.45)!important; border-left:5px solid #34d399!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#34d399; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Định Lý Phân Hoạch (Partition Theorem):</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.75; color:#e2e8f0; margin-top:10px;">
                Các lớp tương đương chia tập $X$ thành các khối rời nhau thỏa mãn:<br>
                - <b>(i)</b> Mỗi phần tử $x \\in X$ thuộc đúng một lớp ($x \\in [x] \\neq \\emptyset$).<br>
                - <b>(ii)</b> Hai lớp bất kỳ: <b>hoặc trùng khít nhau, hoặc rời nhau đôi một</b>.<br>
                - <b>(iii)</b> Hợp của toàn bộ các lớp phủ kín $X$: $\\bigcup_{x \\in X} [x] = X$.
              </div>
            </div>
          </div>

          <div class="slide-math-display anim-card anim-d2" style="background:rgba(10,25,47,0.92); border:1.5px solid #fbbf24; color:#fde68a; font-size:clamp(1.24rem, 1.65vw, 1.48rem); padding:12px 22px; margin:0;">
            $$[x] = [y] \\iff x \\sim y \\iff [x] \\cap [y] \\neq \\emptyset$$
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 7: VÍ DỤ SOI SÁNG CHO SLIDE 6 (MÔ TẢ TƯỜNG MINH Z/3Z)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(56,189,248,0.14), transparent 32%), linear-gradient(135deg, #06152d, #0f2952 55%, #06152d); border:1.5px solid rgba(56,189,248,0.45); color:#f0f9ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(52,211,153,0.22); border:1.5px solid #34d399; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Mô Tả Phân Hoạch Của Tập Thương $\\mathbb{Z}/3\\mathbb{Z}$</h2>
            <p style="color:#bae6fd; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Quan hệ đồng dư modulo $3$ chia tập số nguyên $\\mathbb{Z}$ thành đúng $3$ lớp số dư hoàn toàn rời nhau:
            </p>
          </div>

          <div class="slide-grid-3 anim-card anim-d1" style="flex:1; align-items:stretch; gap:18px; margin:0;">
            <!-- Lớp [0] -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid rgba(56,189,248,0.45)!important; border-top:5px solid #38bdf8!important; padding:20px 22px; border-radius:14px; text-align:center;">
              <b style="color:#38bdf8; font-size:clamp(1.25rem, 1.65vw, 1.45rem);">Lớp $[0]_3 = 3\\mathbb{Z}$</b>
              <div class="slide-math-display" style="background:rgba(2,12,27,0.9); border-color:#38bdf8; font-size:clamp(1.1rem, 1.4vw, 1.25rem); padding:10px; margin:12px 0;">
                $$\\{\\dots, -6, -3, 0, 3, 6, \\dots\\}$$
              </div>
              <p style="color:#bae6fd; font-size:clamp(1.04rem, 1.34vw, 1.2rem); margin:0; line-height:1.6;">
                Chia $3$ dư $0$.<br>Các đại diện: $[0] = [3] = [-3] = \\dots$
              </p>
            </div>

            <!-- Lớp [1] -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid rgba(52,211,153,0.45)!important; border-top:5px solid #34d399!important; padding:20px 22px; border-radius:14px; text-align:center;">
              <b style="color:#34d399; font-size:clamp(1.25rem, 1.65vw, 1.45rem);">Lớp $[1]_3 = 3\\mathbb{Z} + 1$</b>
              <div class="slide-math-display" style="background:rgba(2,12,27,0.9); border-color:#34d399; color:#a7f3d0; font-size:clamp(1.1rem, 1.4vw, 1.25rem); padding:10px; margin:12px 0;">
                $$\\{\\dots, -5, -2, 1, 4, 7, \\dots\\}$$
              </div>
              <p style="color:#a7f3d0; font-size:clamp(1.04rem, 1.34vw, 1.2rem); margin:0; line-height:1.6;">
                Chia $3$ dư $1$.<br>Các đại diện: $[1] = [4] = [-2] = \\dots$
              </p>
            </div>

            <!-- Lớp [2] -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid rgba(251,191,36,0.45)!important; border-top:5px solid #fbbf24!important; padding:20px 22px; border-radius:14px; text-align:center;">
              <b style="color:#fbbf24; font-size:clamp(1.25rem, 1.65vw, 1.45rem);">Lớp $[2]_3 = 3\\mathbb{Z} + 2$</b>
              <div class="slide-math-display" style="background:rgba(2,12,27,0.9); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.1rem, 1.4vw, 1.25rem); padding:10px; margin:12px 0;">
                $$\\{\\dots, -4, -1, 2, 5, 8, \\dots\\}$$
              </div>
              <p style="color:#fde68a; font-size:clamp(1.04rem, 1.34vw, 1.2rem); margin:0; line-height:1.6;">
                Chia $3$ dư $2$.<br>Các đại diện: $[2] = [5] = [-1] = \\dots$
              </p>
            </div>
          </div>

          <div class="slide-math-display anim-card anim-d2" style="background:rgba(10,25,47,0.92); border:1.5px solid #38bdf8; color:#7dd3fc; font-size:clamp(1.2rem, 1.6vw, 1.42rem); padding:12px 20px; margin:0;">
            $$\\mathbb{Z} = [0] \\;\\dot{\\cup}\\; [1] \\;\\dot{\\cup}\\; [2] \\qquad \\text{và} \\qquad \\mathbb{Z}/3\\mathbb{Z} = \\{[0], [1], [2]\\}$$
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 8: LÝ THUYẾT - ĐỒNG DƯ MODULO & ĐỒNG NHẤT THỨC BÉZOUT
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(56,189,248,0.14), transparent 32%), linear-gradient(135deg, #06152d, #0f2952 55%, #06152d); border:1.5px solid rgba(56,189,248,0.45); color:#f0f9ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Đồng Dư Modulo $n$ &amp; Đồng Nhất Thức Bézout</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Khối Đồng dư Modulo -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid rgba(56,189,248,0.45)!important; border-left:5px solid #38bdf8!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#38bdf8; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Quan Hệ Đồng Dư Modulo $n$ ($n \\ge 1$):</b>
              <div class="slide-math-display" style="background:rgba(2,12,27,0.9); border-color:#38bdf8; font-size:clamp(1.2rem, 1.55vw, 1.38rem); padding:10px; margin:12px 0;">
                $$a \\equiv b \\pmod n \\iff n \\mid (a - b)$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); color:#e2e8f0; line-height:1.7;">
                - Tập thương gồm đúng $n$ lớp thặng dư số học:<br>
                <span style="color:#7dd3fc; font-weight:700;">$\\mathbb{Z}/n\\mathbb{Z} = \\{[0]_n, [1]_n, [2]_n, \\dots, [n-1]_n\\}$</span>.
              </div>
            </div>

            <!-- Khối Bézout -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid rgba(251,191,36,0.45)!important; border-left:5px solid #fbbf24!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Đồng Nhất Thức Bézout (Định lý 0.3):</b>
              <div class="slide-math-display" style="background:rgba(2,12,27,0.9); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.2rem, 1.55vw, 1.38rem); padding:10px; margin:12px 0;">
                $$\\forall a, b \\in \\mathbb{Z},\\; \\exists u, v \\in \\mathbb{Z}: \\quad ua + vb = \\gcd(a, b)$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); color:#e2e8f0; line-height:1.7;">
                - <b>Tiêu chuẩn nguyên tố cùng nhau:</b><br>
                $$\\gcd(a, n) = 1 \\iff \\exists u, v \\in \\mathbb{Z}: ua + vn = 1$$
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:16px 22px; background:rgba(10,25,47,0.92)!important; border:1.5px solid #34d399!important; border-left:6px solid #34d399!important; color:#d1fae5!important; font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.6;">
            <b>🎯 Chìa khóa đại số của Bézout:</b> Khi $\\gcd(a, n) = 1$, từ $ua + vn = 1 \\implies ua \\equiv 1 \\pmod n \\implies \\mathbf{[u]_n \\cdot [a]_n = [1]_n}$. Hệ số Bézout $u$ chính là <b>nghịch đảo nhân</b> của $[a]_n$ trong $\\mathbb{Z}/n\\mathbb{Z}$!
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 9: VÍ DỤ SOI SÁNG CHO SLIDE 8 (TÌM NGHỊCH ĐẢO QUA BÉZOUT)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(56,189,248,0.14), transparent 32%), linear-gradient(135deg, #06152d, #0f2952 55%, #06152d); border:1.5px solid rgba(56,189,248,0.45); color:#f0f9ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(52,211,153,0.22); border:1.5px solid #34d399; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Tìm Nghịch Đảo Nhân Của $[5]_{12}$ Bằng Thuật Toán Euclid</h2>
            <p style="color:#bae6fd; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Tìm phần tử nghịch đảo $[5]_{12}^{-1}$ trong $\\mathbb{Z}/12\\mathbb{Z}$ (do $\\gcd(5, 12) = 1$):
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Nhánh 1: Chia Euclid xuôi -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid rgba(56,189,248,0.45)!important; border-left:5px solid #38bdf8!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#7dd3fc; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Bước 1 — Chia Euclid liên tiếp (Chiều xuôi):</b>
              <div class="slide-math-display" style="background:rgba(2,12,27,0.9); border-color:#38bdf8; font-size:clamp(1.2rem, 1.55vw, 1.38rem); padding:14px; margin:14px 0;">
                $$\\begin{aligned} 12 &= 2 \\cdot 5 + \\mathbf{2} \\\\ 5 &= 2 \\cdot \\mathbf{2} + \\mathbf{1} \\end{aligned}$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); color:#e2e8f0; line-height:1.68;">
                - Dư cuối cùng khác $0$ là $\\mathbf{1} \\implies \\gcd(5, 12) = 1$.
              </div>
            </div>

            <!-- Nhánh 2: Truy ngược Bézout -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid rgba(251,191,36,0.45)!important; border-left:5px solid #fbbf24!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Bước 2 — Thế ngược tìm hệ số Bézout:</b>
              <div class="slide-math-display" style="background:rgba(2,12,27,0.9); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.16rem, 1.5vw, 1.34rem); padding:14px; margin:14px 0;">
                $$1 = 5 - 2 \\cdot \\mathbf{2} = 5 - 2(12 - 2 \\cdot 5) = \\mathbf{5} \\cdot 5 + (-2) \\cdot 12$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); color:#e2e8f0; line-height:1.68;">
                - Lấy modulo $12$: $5 \\cdot 5 \\equiv 1 \\pmod{12} \\implies \\mathbf{[5]_{12}^{-1} = [5]_{12}}$.
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 10: LÝ THUYẾT - HÀM PHI EULER & QUY ƯỚC BIÊN
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(56,189,248,0.14), transparent 32%), linear-gradient(135deg, #06152d, #0f2952 55%, #06152d); border:1.5px solid rgba(56,189,248,0.45); color:#f0f9ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(56,189,248,0.2); border:1.5px solid #38bdf8; border-radius:999px; color:#7dd3fc; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 ĐỊNH NGHĨA
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Hàm Phi Euler $\\varphi(n)$ &amp; Quy Ước Biên Giáo Trình</h2>
            <p style="color:#bae6fd; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Với $n \\ge 1$, <b>hàm phi Euler</b> $\\varphi(n)$ đếm số lượng các số nguyên trong tập thặng dư chuẩn $R_n = \\{0, 1, \\dots, n-1\\}$ nguyên tố cùng nhau với $n$:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(10,25,47,0.92); border:1.5px solid #38bdf8; color:#7dd3fc; font-size:clamp(1.26rem, 1.7vw, 1.5rem); padding:14px 22px; margin:0;">
            $$\\varphi(n) = \\Big|\\{k \\in \\{0, 1, \\dots, n-1\\} \\mid \\gcd(k, n) = 1\\}\\Big|$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid rgba(52,211,153,0.45)!important; border-left:5px solid #34d399!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(i) Công thức tính nhanh $\\varphi(n)$:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); color:#e2e8f0; line-height:1.72; margin-top:10px;">
                - Với $p$ là số nguyên tố: $\\mathbf{\\varphi(p) = p - 1}$.<br>
                - Lũy thừa nguyên tố: $\\mathbf{\\varphi(p^k) = p^k - p^{k-1} = p^k(1 - 1/p)}$.<br>
                - Tính nhân tính: $\\gcd(m, n) = 1 \\implies \\mathbf{\\varphi(mn) = \\varphi(m)\\varphi(n)}$.
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid #fbbf24!important; border-left:5px solid #fbbf24!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(ii) Quy ước biên при $n = 1$ của giáo trình:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); color:#fef3c7; line-height:1.72; margin-top:10px;">
                - Khi $n = 1$, tập $R_1 = \\{0\\}$. Vì $\\gcd(0, 1) = 1$, giáo trình TS. Huỳnh Việt Khánh quy ước chặt chẽ:<br>
                <div class="slide-math-display" style="background:rgba(2,12,27,0.9); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.22rem, 1.6vw, 1.42rem); padding:8px; margin:8px 0 0;">
                  $$\\varphi(1) = 1$$
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 11: VÍ DỤ SOI SÁNG CHO SLIDE 10 (BẢNG TÍNH & NHÓM U(n))
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(56,189,248,0.14), transparent 32%), linear-gradient(135deg, #06152d, #0f2952 55%, #06152d); border:1.5px solid rgba(56,189,248,0.45); color:#f0f9ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(52,211,153,0.22); border:1.5px solid #34d399; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Khảo Sát Giá Trị $\\varphi(n)$ &amp; Sự Khởi Sinh Của Nhóm Đơn Vị $U(n)$</h2>
          </div>

          <div class="anim-card anim-d1" style="flex:1; display:flex; flex-direction:column; justify-content:center;">
            <table style="width:100%; height:100%; border-collapse:collapse; text-align:center; font-size:clamp(1.06rem, 1.38vw, 1.24rem); background:rgba(10,25,47,0.85); border:1.5px solid rgba(56,189,248,0.45); border-radius:14px; overflow:hidden;">
              <thead>
                <tr style="background:rgba(56,189,248,0.25); color:#fde68a; font-size:clamp(1.1rem, 1.42vw, 1.28rem);">
                  <th style="padding:12px 16px; border-bottom:1.5px solid rgba(56,189,248,0.4);">Môđun $n$</th>
                  <th style="padding:12px 16px; border-bottom:1.5px solid rgba(56,189,248,0.4);">Các số $k \\in R_n$ thỏa $\\gcd(k, n) = 1$</th>
                  <th style="padding:12px 16px; border-bottom:1.5px solid rgba(56,189,248,0.4);">Giá trị $\\varphi(n)$</th>
                  <th style="padding:12px 16px; border-bottom:1.5px solid rgba(56,189,248,0.4);">Tập các lớp khả nghịch $U(n)$</th>
                </tr>
              </thead>
              <tbody style="color:#f0f9ff; line-height:1.6;">
                <tr style="border-bottom:1px solid rgba(56,189,248,0.2);">
                  <td style="padding:10px 16px; font-weight:800; color:#7dd3fc;">$n = 1$</td>
                  <td style="padding:10px 16px;">$\\{0\\}$ (do $\\gcd(0,1)=1$)</td>
                  <td style="padding:10px 16px; color:#fde68a; font-weight:800;">$\\varphi(1) = 1$</td>
                  <td style="padding:10px 16px;">$\\{[0]_1\\}$</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(56,189,248,0.2);">
                  <td style="padding:10px 16px; font-weight:800; color:#7dd3fc;">$n = 6$</td>
                  <td style="padding:10px 16px;">$\\{1, 5\\}$</td>
                  <td style="padding:10px 16px; color:#fde68a; font-weight:800;">$\\varphi(6) = 2$</td>
                  <td style="padding:10px 16px;">$U(6) = \\{[1], [5]\\}$</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(56,189,248,0.2);">
                  <td style="padding:10px 16px; font-weight:800; color:#7dd3fc;">$n = 8$</td>
                  <td style="padding:10px 16px;">$\\{1, 3, 5, 7\\}$</td>
                  <td style="padding:10px 16px; color:#fde68a; font-weight:800;">$\\varphi(8) = 4$</td>
                  <td style="padding:10px 16px;">$U(8) = \\{[1], [3], [5], [7]\\}$</td>
                </tr>
                <tr>
                  <td style="padding:10px 16px; font-weight:800; color:#7dd3fc;">$n = 12$</td>
                  <td style="padding:10px 16px;">$\\{1, 5, 7, 11\\}$</td>
                  <td style="padding:10px 16px; color:#fde68a; font-weight:800;">$\\varphi(12) = 4$</td>
                  <td style="padding:10px 16px;">$U(12) = \\{[1], [5], [7], [11]\\}$</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(10,25,47,0.92)!important; border:1.5px solid #a855f7!important; border-left:6px solid #a855f7!important; color:#f3e8ff!important; font-size:clamp(1.06rem, 1.36vw, 1.22rem);">
            <b>🚀 Cầu nối tới Chương 1:</b> Tập hợp $U(n) = \\{[a]_n \\in \\mathbb{Z}/n\\mathbb{Z} \\mid \\gcd(a, n) = 1\\}$ gồm toàn bộ các lớp khả nghịch nhân trong $\\mathbb{Z}/n\\mathbb{Z}$ và có lực lượng $|U(n)| = \\varphi(n)$.
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 12: LÝ THUYẾT - PHÉP TOÁN HAI NGÔI TRÊN TẬP GỐC X
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(56,189,248,0.14), transparent 32%), linear-gradient(135deg, #06152d, #0f2952 55%, #06152d); border:1.5px solid rgba(56,189,248,0.45); color:#f0f9ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(56,189,248,0.2); border:1.5px solid #38bdf8; border-radius:999px; color:#7dd3fc; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 ĐỊNH NGHĨA
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Phép Toán Hai Ngôi Trên Tập Hợp $X$</h2>
            <p style="color:#bae6fd; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Một <b>phép toán hai ngôi</b> trên tập hợp khác rỗng $X$ là một ánh xạ từ tích Descartes $X \\times X$ vào chính tập $X$:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(10,25,47,0.92); border:1.5px solid #38bdf8; color:#67e8f9; font-size:clamp(1.3rem, 1.75vw, 1.55rem); padding:14px 24px; margin:0;">
            $$* : X \\times X \\longrightarrow X, \\qquad (a, b) \\longmapsto a * b$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Tính Đóng -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid rgba(52,211,153,0.45)!important; border-left:5px solid #34d399!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(i) Tính Đóng (Closure):</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); color:#e2e8f0; line-height:1.72; margin-top:10px;">
                - <b>Điều kiện:</b> $\\forall a, b \\in X \\implies a * b \\in X$.<br>
                - <b>Bản chất:</b> Kết quả của phép toán không bao giờ văng ra khỏi tập hợp nền $X$ (ví dụ: phép trừ trên $\\mathbb{N}$ không đóng vì $2 - 5 = -3 \\notin \\mathbb{N}$).
              </div>
            </div>

            <!-- Cột 2: Tính kết hợp & Giao hoán -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid rgba(56,189,248,0.45)!important; border-left:5px solid #38bdf8!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#7dd3fc; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(ii) Tính Kết Hợp &amp; Tính Giao Hoán:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); color:#e2e8f0; line-height:1.72; margin-top:10px;">
                - <b>Kết hợp:</b> $(a * b) * c = a * (b * c),\\; \\forall a, b, c \\in X$.<br>
                - <b>Giao hoán:</b> $a * b = b * a,\\; \\forall a, b \\in X$.<br>
                - Đây là hai thuộc tính hoàn toàn độc lập của phép toán hai ngôi.
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 13: VÍ DỤ & BẪY CHO SLIDE 12 (RANH GIỚI TIÊN ĐỀ TẬP GỐC)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(56,189,248,0.14), transparent 32%), linear-gradient(135deg, #06152d, #0f2952 55%, #06152d); border:1.5px solid rgba(56,189,248,0.45); color:#f0f9ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.22); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              ⚠️ PHẢN VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Bẫy Nhận Diện Tiên Đề: Đóng, Kết Hợp Hay Giao Hoán?</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Tình huống 1: Phép trừ trên Z -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid #fb7185!important; border-left:5px solid #fb7185!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Phép trừ trên $\\mathbb{Z}$: Đóng nhưng KHÔNG kết hợp!</b>
              <div class="slide-math-display" style="background:rgba(2,12,27,0.92); border-color:#fb7185; color:#fecdd3; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:12px; margin:14px 0;">
                $$(5 - 3) - 1 = 1 \\;\\neq\\; 3 = 5 - (3 - 1)$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); color:#e2e8f0; line-height:1.7;">
                - Dù hiệu hai số nguyên luôn là số nguyên (đóng), nhưng đặt dấu ngoặc khác nhau làm thay đổi hoàn toàn kết quả!
              </div>
            </div>

            <!-- Tình huống 2: Trung bình cộng trên R -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid #fbbf24!important; border-left:5px solid #fbbf24!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Phép $x * y = \\dfrac{x+y}{2}$ trên $\\mathbb{R}$: Giao hoán nhưng KHÔNG kết hợp!</b>
              <div class="slide-math-display" style="background:rgba(2,12,27,0.92); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:12px; margin:14px 0;">
                $$(0 * 0) * 4 = 2 \\;\\neq\\; 1 = 0 * (0 * 4)$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); color:#e2e8f0; line-height:1.7;">
                - Hiển nhiên $x * y = y * x$, nhưng không thỏa mãn tính kết hợp!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 14: LÝ THUYẾT - CẢM SINH PHÉP TOÁN TRÊN TẬP THƯƠNG & WELL-DEFINED
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(56,189,248,0.14), transparent 32%), linear-gradient(135deg, #06152d, #0f2952 55%, #06152d); border:1.5px solid rgba(56,189,248,0.45); color:#f0f9ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 KHÁI NIỆM TRỌNG TÂM
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Phép Toán Trên Tập Thương &amp; Tính Xác Định Tốt (Well-Defined)</h2>
            <p style="color:#bae6fd; font-size:clamp(1.14rem, 1.46vw, 1.3rem); line-height:1.58; margin:0;">
              Khi định nghĩa một phép toán (hoặc ánh xạ) trên tập thương $X/{\\sim}$ thông qua các phần tử đại diện theo công thức <b style="color:#fde68a;">$[a] \\circledast [b] = [a * b]$</b>:
            </p>
          </div>

          <div class="slide-glass-card anim-card anim-d1" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.82)!important; border:1.5px solid rgba(56,189,248,0.5)!important; padding:24px 28px; border-radius:14px;">
            <b style="color:#7dd3fc; font-size:clamp(1.2rem, 1.55vw, 1.38rem); display:block; margin-bottom:10px;">⚖️ Điều Kiện Xác Định Tốt (Độc Lập Với Cách Chọn Đại Diện):</b>
            <p style="color:#e2e8f0; font-size:clamp(1.1rem, 1.42vw, 1.26rem); line-height:1.68; margin:0 0 14px;">
              Vì mỗi lớp tương đương có nhiều đại diện khác nhau ($[a] = [a']$ và $[b] = [b']$), công thức chỉ có nghĩa khi kết quả đầu ra thuộc <b>cùng một lớp duy nhất</b>:
            </p>
            <div class="slide-math-display" style="background:rgba(2,12,27,0.92); border:1.5px solid #34d399; color:#a7f3d0; font-size:clamp(1.22rem, 1.62vw, 1.45rem); padding:16px; margin:0;">
              $$\\forall a, a', b, b' \\in X: \\qquad \\Big( [a] = [a'] \\;\\land\\; [b] = [b'] \\Big) \\implies \\mathbf{[a * b] = [a' * b']}$$
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(10,25,47,0.92)!important; border:1.5px solid #fbbf24!important; color:#fef3c7!important; font-size:clamp(1.06rem, 1.36vw, 1.22rem); text-align:center;">
            <b>✨ Nguyên lý:</b> Nếu thay đại diện khác cho cùng một lớp đầu vào mà dẫn đến hai lớp kết quả khác nhau ở đầu ra, thì công thức đó <b>không xác định tốt (phá sản)</b>!
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 15: VÍ DỤ SOI SÁNG CHO SLIDE 14 (PHÉP CỘNG TRÊN Z/nZ)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(56,189,248,0.14), transparent 32%), linear-gradient(135deg, #06152d, #0f2952 55%, #06152d); border:1.5px solid rgba(56,189,248,0.45); color:#f0f9ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(52,211,153,0.22); border:1.5px solid #34d399; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Chứng Minh Phép Cộng Modulo Xác Định Tốt Trên $\\mathbb{Z}/n\\mathbb{Z}$</h2>
            <p style="color:#bae6fd; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Chứng minh công thức <b style="color:#fde68a;">$[a]_n + [b]_n = [a + b]_n$</b> xác định tốt trên tập thương $\\mathbb{Z}/n\\mathbb{Z}$:
            </p>
          </div>

          <div class="slide-grid-3 anim-card anim-d1" style="flex:1; align-items:stretch; gap:18px; margin:0;">
            <!-- Bước 1 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid rgba(56,189,248,0.45)!important; border-top:5px solid #38bdf8!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#7dd3fc; font-size:clamp(1.16rem, 1.48vw, 1.32rem); margin-bottom:8px;">1) Bước 1: Giả thiết đổi đại diện</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); color:#e2e8f0; line-height:1.68;">
                - Giả sử $[a]_n = [a']_n$ và $[b]_n = [b']_n$.<br>
                - Theo định nghĩa lớp đồng dư:<br>
                $$n \\mid (a' - a) \\;\\text{ và }\\; n \\mid (b' - b)$$
              </div>
            </div>

            <!-- Bước 2 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid rgba(251,191,36,0.45)!important; border-top:5px solid #fbbf24!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.16rem, 1.48vw, 1.32rem); margin-bottom:8px;">2) Bước 2: Biến đổi đại số</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); color:#e2e8f0; line-height:1.68;">
                - Tồn tại $k, l \\in \\mathbb{Z}$ sao cho $a' - a = kn$ và $b' - b = ln$.<br>
                - Cộng hai vế:<br>
                $$(a' + b') - (a + b) = (k + l)n$$
              </div>
            </div>

            <!-- Bước 3 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid rgba(52,211,153,0.45)!important; border-top:5px solid #34d399!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.16rem, 1.48vw, 1.32rem); margin-bottom:8px;">3) Bước 3: Kết luận lớp đầu ra</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); color:#e2e8f0; line-height:1.68;">
                - Suy ra $n \\mid \\big((a' + b') - (a + b)\\big)$, tức là:<br>
                $$[a' + b']_n = [a + b]_n$$
                - Vậy phép cộng xác định tốt! $\\blacksquare$
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 16: PHẢN VÍ DỤ CHO SLIDE 14 (THẢM HỌA CỘNG PHÂN SỐ NGÂY THƠ)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(56,189,248,0.14), transparent 32%), linear-gradient(135deg, #06152d, #0f2952 55%, #06152d); border:1.5px solid rgba(56,189,248,0.45); color:#f0f9ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.22); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              ⚠️ PHẢN VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Thảm Họa "Cộng Phân Số Ngây Thơ" (Không Xác Định Tốt!)</h2>
            <p style="color:#bae6fd; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Trên tập hợp $\\mathbb{Q}$, thử định nghĩa phép cộng hai phân số bằng cách <b>"cộng tử với tử, cộng mẫu với mẫu"</b>:
              <span style="color:#fda4af; font-weight:700;">$\\dfrac{a}{b} \\oplus \\dfrac{c}{d} = \\dfrac{a + c}{b + d}$</span>.
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cách chọn đại diện 1 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid rgba(56,189,248,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#7dd3fc; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Cách chọn đại diện thứ nhất:</b>
              <p style="color:#e2e8f0; font-size:clamp(1.08rem, 1.38vw, 1.24rem); margin:10px 0;">
                Sử dụng đại diện $\\dfrac{1}{2}$ và $\\dfrac{1}{3}$:
              </p>
              <div class="slide-math-display" style="background:rgba(2,12,27,0.92); border-color:#38bdf8; color:#7dd3fc; font-size:clamp(1.22rem, 1.6vw, 1.42rem); padding:12px; margin:0;">
                $$\\frac{1}{2} \\oplus \\frac{1}{3} = \\frac{1 + 1}{2 + 3} = \\mathbf{\\frac{2}{5}}$$
              </div>
            </div>

            <!-- Cách chọn đại diện 2 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border:1.5px solid #fb7185!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Thay $\\dfrac{1}{2}$ bởi đại diện tương đương $\\dfrac{2}{4}$:</b>
              <p style="color:#e2e8f0; font-size:clamp(1.08rem, 1.38vw, 1.24rem); margin:10px 0;">
                Dù $\\dfrac{1}{2} = \\dfrac{2}{4}$, nhưng khi lắp vào công thức $\\oplus$:
              </p>
              <div class="slide-math-display" style="background:rgba(2,12,27,0.92); border-color:#fb7185; color:#fecdd3; font-size:clamp(1.22rem, 1.6vw, 1.42rem); padding:12px; margin:0;">
                $$\\frac{2}{4} \\oplus \\frac{1}{3} = \\frac{2 + 1}{4 + 3} = \\mathbf{\\frac{3}{7} \\neq \\frac{2}{5}}$$
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(10,25,47,0.92)!important; border:1.5px solid #fb7185!important; color:#fecdd3!important; font-size:clamp(1.06rem, 1.36vw, 1.22rem); text-align:center;">
            <b>❌ Kết luận:</b> Cùng một dữ liệu đầu vào nhưng chọn đại diện khác nhau lại cho hai kết quả khác nhau $\\implies$ Phép toán $\\oplus$ <b>không xác định tốt</b>!
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 17: PHƯƠNG PHÁP LUẬN PHÒNG THI (THỬ SỐ CỤ THỂ VS TỔNG QUÁT)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(56,189,248,0.14), transparent 32%), linear-gradient(135deg, #06152d, #0f2952 55%, #06152d); border:1.5px solid rgba(56,189,248,0.45); color:#f0f9ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.22); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🛑 PHƯƠNG PHÁP LUẬN PHÒNG THI
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Bắt Lỗi Bài Thi: Thử Số Cụ Thể Hay Chứng Minh Tổng Quát?</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột bài làm của sinh viên -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(45,10,35,0.8)!important; border:1.5px solid #fb7185!important; border-left:6px solid #ef4444!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">❌ Bài làm sai của Sinh viên A:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fecdd3; font-style:italic; margin-top:12px;">
                "Để chứng minh phép nhân $[a]_6 \\cdot [b]_6 = [ab]_6$ xác định tốt trên $\\mathbb{Z}/6\\mathbb{Z}$:<br>
                - Em lấy $[2]_6 = [8]_6$ và $[3]_6 = [9]_6$.<br>
                - Nhân lại ta có $[2 \\cdot 3]_6 = [6]_6 = [0]_6$, còn $[8 \\cdot 9]_6 = [72]_6 = [0]_6$.<br>
                - Vì hai kết quả bằng nhau nên phép nhân xác định tốt!"
              </div>
            </div>

            <!-- Cột lời phê của giảng viên -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.82)!important; border:1.5px solid #34d399!important; border-left:6px solid #10b981!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">✔ Lời phê &amp; Nguyên tắc chấm thi:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#e2e8f0; margin-top:12px;">
                - <b>1) Để bác bỏ (chứng minh SAI):</b> Chỉ cần chỉ ra <b>1 phản ví dụ</b> bằng số cụ thể là đủ.<br>
                - <b>2) Để chứng minh ĐÚNG (xác định tốt):</b> Phải chứng minh với <b>mọi đại diện tổng quát</b> $[a] = [a']$ và $[b] = [b']$. Thử một vài cặp số cụ thể sẽ nhận <b>0 điểm</b>!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 18: LỜI GIẢI MẪU BÀI TOÁN PHÉP NHÂN MODULO
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(56,189,248,0.14), transparent 32%), linear-gradient(135deg, #06152d, #0f2952 55%, #06152d); border:1.5px solid rgba(56,189,248,0.45); color:#f0f9ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(52,211,153,0.22); border:1.5px solid #34d399; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              💡 LỜI GIẢI TỰ LUẬN MẪU MỰC
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Chứng Minh Phép Nhân $[a]_n \\cdot [b]_n = [ab]_n$ Xác Định Tốt</h2>
          </div>

          <div class="slide-glass-card anim-card anim-d1" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.82)!important; border:1.5px solid rgba(52,211,153,0.5)!important; border-left:6px solid #34d399!important; padding:22px 26px; border-radius:14px;">
            <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#e2e8f0;">
              - Giả sử $[a]_n = [a']_n$ và $[b]_n = [b']_n$ trong $\\mathbb{Z}/n\\mathbb{Z}$. Khi đó tồn tại $k, l \\in \\mathbb{Z}$ sao cho:<br>
              <div class="slide-math-display" style="background:rgba(2,12,27,0.9); border-color:#38bdf8; font-size:clamp(1.16rem, 1.5vw, 1.34rem); padding:10px; margin:10px 0;">
                $$a' = a + kn \\qquad \\text{và} \\qquad b' = b + ln$$
              </div>
              - Nhân hai biểu thức đại diện mới:<br>
              <div class="slide-math-display" style="background:rgba(2,12,27,0.9); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.16rem, 1.5vw, 1.34rem); padding:10px; margin:10px 0;">
                $$a'b' = (a + kn)(b + ln) = ab + n(al + kb + kln)$$
              </div>
              - Do $al + kb + kln \\in \\mathbb{Z}$, suy ra $n \\mid (a'b' - ab) \\iff a'b' \\equiv ab \\pmod n \\iff \\mathbf{[a'b']_n = [ab]_n}$. Vậy phép nhân xác định tốt! $\\blacksquare$
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 19: TỔNG KẾT BẢN ĐỒ 4 TRỤ CỘT CHƯƠNG 0
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(56,189,248,0.14), transparent 32%), linear-gradient(135deg, #06152d, #0f2952 55%, #06152d); border:1.5px solid rgba(56,189,248,0.45); color:#f0f9ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(56,189,248,0.2); border:1.5px solid #38bdf8; border-radius:999px; color:#7dd3fc; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              🎯 TỔNG KẾT CHƯƠNG 0
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Bản Đồ Bốn Chìa Khóa Ngôn Ngữ Cốt Lõi</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:16px; margin:0;">
            <!-- Trụ cột 1 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border-left:5px solid #38bdf8!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#7dd3fc; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">1) Quan Hệ Tương Đương $\\sim$</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#e2e8f0; margin-top:6px;">
                - Thỏa mãn 3 tiên đề: Phản xạ ($x \\sim x$), Đối xứng ($x \\sim y \\implies y \\sim x$) và Bắc cầu ($x \\sim y \\land y \\sim z \\implies x \\sim z$).
              </div>
            </div>

            <!-- Trụ cột 2 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border-left:5px solid #34d399!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#6ee7b7; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">2) Tập Thương $X/{\\sim}$ &amp; Định Lý Phân Hoạch</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#e2e8f0; margin-top:6px;">
                - Các lớp $[x]$ chia $X$ thành các khối rời nhau phủ kín $X$.<br>
                - Đặc trưng: $[x] = [y] \\iff x \\sim y \\iff [x] \\cap [y] \\neq \\emptyset$.
              </div>
            </div>

            <!-- Trụ cột 3 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border-left:5px solid #fbbf24!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fbbf24; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">3) Số Học Modulo, Bézout &amp; Hàm $\\varphi(n)$</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#e2e8f0; margin-top:6px;">
                - $\\gcd(a, n) = 1 \\iff ua + vn = 1 \\implies [a]_n^{-1} = [u]_n$.<br>
                - Số lớp khả nghịch trong $\\mathbb{Z}/n\\mathbb{Z}$ là $|U(n)| = \\varphi(n)$ (với $\\varphi(1) = 1$).
              </div>
            </div>

            <!-- Trụ cột 4 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(10,25,47,0.8)!important; border-left:5px solid #f472b6!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#f472b6; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">4) Phép Toán Hai Ngôi &amp; Tính Xác Định Tốt</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#e2e8f0; margin-top:6px;">
                - Trên tập gốc $X$: kiểm tra tính đóng, kết hợp, giao hoán.<br>
                - Trên tập thương $X/{\\sim}$: phải kiểm tra $[a]=[a'], [b]=[b'] \\implies [a*b]=[a'*b']$.
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 20: CẦU NỐI SANG CHƯƠNG 1 (TEASER & KHỞI NGUỒN NHÓM)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; gap:20px; padding:30px 38px; border-radius:16px; background:radial-gradient(circle at 50% 20%, rgba(168,85,247,0.22), transparent 45%), linear-gradient(135deg, #06152d, #1e1b4b 55%, #06152d); border:1.5px solid rgba(168,85,247,0.5); color:#f0f9ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:6px 20px; background:rgba(168,85,247,0.25); border:1.5px solid #c084fc; border-radius:999px; font-size:clamp(0.95rem, 1.22vw, 1.1rem); font-weight:800; color:#e9d5ff; margin-bottom:14px;">
              🚀 KHÉP LẠI CÔNG CỤ · KHỞI ĐẦU CẤU TRÚC
            </span>
            <h1 style="font-size:clamp(2.2rem, 3.2vw, 2.85rem); font-weight:800; color:#ffffff; margin:0; line-height:1.22;">
              Sẵn Sàng Bước Vào Thế Giới Đại Số Trừu Tượng!
            </h1>
          </div>

          <div class="slide-glass-card anim-card anim-d1" style="max-width:820px; width:100%; text-align:left; padding:24px 30px; background:rgba(15,23,42,0.82)!important; border:1.5px solid rgba(56,189,248,0.45)!important; border-left:6px solid #38bdf8!important; border-radius:16px;">
            <p style="color:#e2e8f0; font-size:clamp(1.12rem, 1.44vw, 1.28rem); line-height:1.72; margin:0;">
              - Ở <b>Chương 0</b>, ta đã chuẩn bị đầy đủ bộ công cụ nền tảng: <b>Quan hệ tương đương</b>, <b>Tập thương $\\mathbb{Z}/n\\mathbb{Z}$</b>, <b>Đồng nhất thức Bézout</b>, <b>Hàm $\\varphi(n)$</b> và <b>Tính xác định tốt</b>.<br>
              - Bước sang <b>Chương 1</b>, khi trang bị một phép toán hai ngôi thỏa mãn tính kết hợp, có đơn vị và mọi phần tử đều khả nghịch, ta chính thức khai sinh cấu trúc <b>Nhóm (Group)</b>!
            </p>
          </div>

          <div class="anim-card anim-d2" style="padding:14px 28px; background:rgba(168,85,247,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(1.1rem, 1.42vw, 1.26rem); font-weight:800;">
            👉 Chào đón bạn đến với Chương 1: Nhóm và các Ví dụ Cơ bản!
          </div>
        </div>
      `
    }
  ],
  "1": [
    // ========================================================
    // SLIDE 1: TRANG BÌA CĂN GIỮA - TINH VÂN THẠCH ANH TÍM & PHƯỢNG HOÀNG ĐỐI XỨNG
    // ========================================================
    {
      html: `
        <div style="position: relative; width: 100%; height: 100%; min-height: 100%; display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center; padding: 26px 34px 22px; box-sizing: border-box; overflow: hidden; border-radius: 16px; background: radial-gradient(circle at 50% 18%, rgba(216, 180, 254, 0.24), transparent 45%), radial-gradient(ellipse at 15% 88%, rgba(168, 85, 247, 0.32), transparent 42%), radial-gradient(ellipse at 85% 85%, rgba(244, 114, 182, 0.22), transparent 38%), linear-gradient(160deg, #110521 0%, #240d45 48%, #351461 78%, #10041f 100%); border: 1.5px solid rgba(192, 132, 252, 0.55); color: #faf5ff; box-shadow: 0 18px 45px rgba(17, 5, 33, 0.72);">
          
          <!-- VECTOR SVG NỀN: THUNG LŨNG TINH THỂ TÍM, TAM GIÁC ĐỐI XỨNG & SINH VẬT HUYỀN THOẠI -->
          <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0;">
            <defs>
              <radialGradient id="c1NebulaGlow" cx="50%" cy="30%" r="44%">
                <stop offset="0%" stop-color="#e879f9" stop-opacity="0.32"/>
                <stop offset="45%" stop-color="#a855f7" stop-opacity="0.14"/>
                <stop offset="100%" stop-color="#110521" stop-opacity="0"/>
              </radialGradient>
              <linearGradient id="c1StarMist" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#c084fc" stop-opacity="0.05"/>
                <stop offset="50%" stop-color="#f5d0fe" stop-opacity="0.3"/>
                <stop offset="100%" stop-color="#f472b6" stop-opacity="0.05"/>
              </linearGradient>
              <linearGradient id="c1RidgeFar" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#4c1d95" stop-opacity="0.55"/>
                <stop offset="100%" stop-color="#1a0836" stop-opacity="0.92"/>
              </linearGradient>
              <linearGradient id="c1RidgeNear" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#2e1065" stop-opacity="0.9"/>
                <stop offset="100%" stop-color="#0b0217" stop-opacity="0.98"/>
              </linearGradient>
              <linearGradient id="phoenixGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#fef08a" stop-opacity="0.95"/>
                <stop offset="50%" stop-color="#f59e0b" stop-opacity="0.85"/>
                <stop offset="100%" stop-color="#ec4899" stop-opacity="0.55"/>
              </linearGradient>
              <linearGradient id="wolfViolet" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#f5d0fe" stop-opacity="0.95"/>
                <stop offset="55%" stop-color="#c084fc" stop-opacity="0.82"/>
                <stop offset="100%" stop-color="#6b21a8" stop-opacity="0.45"/>
              </linearGradient>
              <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#f0abfc" stop-opacity="0.9"/>
                <stop offset="60%" stop-color="#9333ea" stop-opacity="0.65"/>
                <stop offset="100%" stop-color="#3b0764" stop-opacity="0.3"/>
              </linearGradient>
            </defs>

            <!-- Quầng sáng tinh vân & Vòng đối xứng hình học trung tâm -->
            <circle cx="500" cy="230" r="340" fill="url(#c1NebulaGlow)"/>
            <g transform="translate(500, 240)" opacity="0.32">
              <circle r="230" fill="none" stroke="#c084fc" stroke-width="1.2" stroke-dasharray="10 7"/>
              <circle r="175" fill="none" stroke="#f472b6" stroke-width="1.4" opacity="0.7"/>
              <!-- Tam giác đều đối xứng (Biểu tượng khởi nguồn lý thuyết Nhóm) -->
              <polygon points="0,-165 143,82 -143,82" fill="none" stroke="#fbbf24" stroke-width="1.8" opacity="0.75"/>
              <polygon points="0,165 143,-82 -143,-82" fill="none" stroke="#e879f9" stroke-width="1.2" stroke-dasharray="6 5" opacity="0.6"/>
              <line x1="0" y1="-195" x2="0" y2="195" stroke="#fde68a" stroke-width="1" stroke-dasharray="4 6" opacity="0.55"/>
            </g>

            <!-- SINH VẬT HUYỀN THOẠI 1: PHƯỢNG HOÀNG ÁNH SAO ĐỐI XỨNG (TRÊN ĐỈNH BẦU TRỜI) -->
            <g transform="translate(500, 92) scale(0.95)" opacity="0.55" filter="drop-shadow(0 0 16px rgba(251, 191, 36, 0.7))">
              <!-- Đôi cánh đối xứng hoàn hảo qua trục dọc -->
              <path d="M0,0 C-35,-28 -95,-38 -155,-18 C-115,2 -65,12 -12,10 Z" fill="url(#phoenixGold)"/>
              <path d="M0,0 C35,-28 95,-38 155,-18 C115,2 65,12 12,10 Z" fill="url(#phoenixGold)"/>
              <path d="M0,6 C-28,-8 -78,-12 -125,8 C-85,18 -45,20 -8,14 Z" fill="#f472b6" opacity="0.75"/>
              <path d="M0,6 C28,-8 78,-12 125,8 C85,18 45,20 8,14 Z" fill="#f472b6" opacity="0.75"/>
              <!-- Thân, đầu vương miện và đuôi sao băng -->
              <polygon points="0,-24 -8,4 0,20 8,4" fill="#fef08a"/>
              <path d="M0,18 Q-14,55 -28,85 M0,18 L0,92 M0,18 Q14,55 28,85" stroke="#fbbf24" stroke-width="2" fill="none" stroke-linecap="round"/>
            </g>

            <!-- Dải ngân hà & núi tinh thể phía xa -->
            <path d="M40,340 Q260,295 500,335 T960,320" fill="none" stroke="url(#c1StarMist)" stroke-width="12" opacity="0.65"/>
            <path d="M0,390 L140,305 L290,365 L460,295 L630,360 L810,290 L1000,375 L1000,600 L0,600 Z" fill="url(#c1RidgeFar)"/>
            <path d="M0,450 Q230,385 480,440 T840,405 T1000,445 L1000,600 L0,600 Z" fill="url(#c1RidgeNear)"/>

            <!-- Cụm Tinh Thể Thạch Anh Tím Phát Quang Hai Bên -->
            <g transform="translate(68, 445)" filter="drop-shadow(0 0 14px rgba(192, 132, 252, 0.65))">
              <polygon points="0,35 -18,-35 0,-68 18,-35" fill="url(#crystalGrad)"/>
              <polygon points="22,40 12,-15 28,-42 38,-10" fill="url(#crystalGrad)" opacity="0.85"/>
              <polygon points="-20,42 -36,0 -24,-28 -10,5" fill="#f472b6" opacity="0.75"/>
            </g>
            <g transform="translate(932, 448)" filter="drop-shadow(0 0 14px rgba(192, 132, 252, 0.65))">
              <polygon points="0,35 -18,-35 0,-68 18,-35" fill="url(#crystalGrad)"/>
              <polygon points="-22,40 -38,-10 -28,-42 -12,-15" fill="url(#crystalGrad)" opacity="0.85"/>
              <polygon points="20,42 10,5 24,-28 36,0" fill="#f472b6" opacity="0.75"/>
            </g>

            <!-- SINH VẬT HUYỀN THOẠI 2: SÓI TINH VÂN (NEBULA WOLF - BÊN TRÁI) -->
            <g transform="translate(175, 405) scale(0.88)" filter="drop-shadow(0 0 14px rgba(192, 132, 252, 0.7))">
              <path d="M-30,4 L-36,46 M-12,6 L-14,48 M18,4 L16,48 M32,2 L38,45" stroke="#e9d5ff" stroke-width="3.4" stroke-linecap="round"/>
              <!-- Đuôi sói phát sáng -->
              <path d="M-32,-2 C-56,-8 -68,8 -52,22 C-38,26 -28,12 -30,2 Z" fill="url(#wolfViolet)"/>
              <!-- Thân và đầu sói ngẩng nhìn các vì sao -->
              <path d="M-34,0 C-30,-16 -5,-20 24,-14 C36,-12 40,-2 32,8 C12,12 -14,10 -34,0 Z" fill="url(#wolfViolet)"/>
              <path d="M18,-10 C24,-28 32,-46 42,-58 L38,-72 L48,-62 L58,-56 C52,-42 42,-24 34,-2 Z" fill="url(#wolfViolet)"/>
              <!-- Hoa văn chòm sao trên mình sói -->
              <g fill="#fef08a">
                <circle cx="-15" cy="-6" r="2.2"/><circle cx="2" cy="-8" r="2.5"/><circle cx="18" cy="-4" r="2.2"/><circle cx="44" cy="-54" r="2"/>
              </g>
              <polyline points="-15,-6 2,-8 18,-4 44,-54" fill="none" stroke="#fde68a" stroke-width="1" opacity="0.7"/>
            </g>

            <!-- SINH VẬT HUYỀN THOẠI 3: HỒ LY ÁNH SAO (STARLIGHT FOX - BÊN PHẢI) -->
            <g transform="translate(820, 418) scale(0.86)" filter="drop-shadow(0 0 14px rgba(244, 114, 182, 0.65))">
              <!-- Ba đuôi ánh sao phát sáng -->
              <path d="M16,4 C48,-16 76,-4 66,16 C54,28 26,20 14,12 Z" fill="url(#phoenixGold)"/>
              <path d="M18,10 C52,2 74,20 58,32 C44,38 24,24 14,16 Z" fill="url(#wolfViolet)" opacity="0.85"/>
              <path d="M-22,12 C-12,-4 10,-4 20,10 C10,18 -10,18 -22,12 Z" fill="url(#phoenixGold)"/>
              <path d="M-18,8 L-28,-10 L-16,-6 L-8,-14 L-6,4 Z" fill="#fef08a"/>
              <path d="M-18,14 L-22,34 M-8,15 L-10,35 M10,14 L12,34 M18,12 L22,32" stroke="#fde68a" stroke-width="2.6" stroke-linecap="round"/>
            </g>

            <!-- Đàn bướm tinh vân & các ngôi sao bốn cánh lấp lánh -->
            <g transform="translate(215, 150) rotate(-16) scale(0.88)" filter="drop-shadow(0 0 10px rgba(244, 114, 182, 0.75))">
              <path d="M0,0 C-18,-22 -36,-14 -26,4 C-34,16 -16,26 0,8 C16,26 34,16 26,4 C36,-14 18,-22 0,0 Z" fill="url(#phoenixGold)"/>
            </g>
            <g transform="translate(785, 145) rotate(18) scale(0.85)" filter="drop-shadow(0 0 10px rgba(192, 132, 252, 0.75))">
              <path d="M0,0 C-18,-22 -36,-14 -26,4 C-34,16 -16,26 0,8 C16,26 34,16 26,4 C36,-14 18,-22 0,0 Z" fill="url(#wolfViolet)"/>
            </g>
            <!-- Sao bốn cánh phát sáng -->
            <g fill="#fef08a" opacity="0.9">
              <path d="M130,110 L133,120 L143,123 L133,126 L130,136 L127,126 L117,123 L127,120 Z"/>
              <path d="M865,105 L868,115 L878,118 L868,121 L865,131 L862,121 L852,118 L862,115 Z"/>
              <circle cx="280" cy="230" r="2.8"/><circle cx="720" cy="220" r="2.8"/>
              <circle cx="155" cy="285" r="2.4"/><circle cx="845" cy="275" r="2.4"/>
              <circle cx="390" cy="425" r="2.6"/><circle cx="615" cy="420" r="2.6"/>
            </g>
          </svg>

          <!-- TIÊU ĐỀ SLIDE (CĂN GIỮA, CỠ CHỮ LỚN NỔI BẬT) -->
          <div class="anim-title" style="position: relative; z-index: 2; max-width: 900px;">
            <div style="display: inline-flex; align-items: center; gap: 10px; padding: 6px 22px; background: rgba(28, 10, 54, 0.84); border: 1.5px solid rgba(192, 132, 252, 0.65); border-radius: 999px; font-size: clamp(0.92rem, 1.2vw, 1.08rem); font-weight: 800; color: #e9d5ff; letter-spacing: 1.2px; margin-bottom: 12px; backdrop-filter: blur(10px); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);">
              <span>🔮</span> CẤU TRÚC ĐẠI SỐ — CHƯƠNG 1
            </div>
            <h1 style="font-size: clamp(2.55rem, 4.1vw, 3.45rem); font-weight: 800; color: #ffffff; margin: 0 0 8px; line-height: 1.18; letter-spacing: -0.5px; text-shadow: 0 4px 28px rgba(0, 0, 0, 0.78);">
              Nhóm &amp; <span style="color: #fbbf24;">Các Ví Dụ Cơ Bản</span>
            </h1>
            <p style="font-size: clamp(1.1rem, 1.45vw, 1.3rem); color: #f5d0fe; margin: 0; font-weight: 600; text-shadow: 0 2px 10px rgba(0,0,0,0.6);">
              Giáo trình Cấu trúc Đại số · TS. Huỳnh Việt Khánh
            </p>
          </div>

          <!-- TÂM ĐIỂM: KHỐI CÂU HỎI TRIẾT HỌC TRUNG TÂM -->
          <div class="slide-glass-card anim-card anim-d1" style="position: relative; z-index: 2; max-width: 880px; width: 100%; padding: 26px 38px; margin: 12px 0; background: rgba(28, 10, 54, 0.80) !important; border: 1.5px solid rgba(192, 132, 252, 0.55) !important; border-radius: 18px; backdrop-filter: blur(20px); box-shadow: 0 20px 50px rgba(10, 2, 24, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.2); text-align: center;">
            <div style="font-size: clamp(0.98rem, 1.25vw, 1.12rem); font-weight: 800; color: #fbbf24; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">
              ✦ Câu Hỏi Trung Tâm Của Chương ✦
            </div>
            <p style="font-size: clamp(1.26rem, 1.72vw, 1.5rem); line-height: 1.62; color: #ffffff; margin: 0; font-weight: 500;">
              Đằng sau các phép cộng số nguyên, phép nhân ma trận khả nghịch và các phép biến hình đối xứng hình học, <b style="color: #f0abfc;">những quy luật tiên đề tối giản nào</b> cho phép ta thực hiện phép toán hợp thành và luôn đảo ngược (hoàn tác) được mọi thao tác?
            </p>
          </div>

          <!-- ĐÁY SLIDE: THANH 4 TRỤ CỘT KIẾN THỨC (KHÔNG THANH CUỘN) -->
          <div class="anim-card anim-d2" style="position: relative; z-index: 2; display: flex; flex-wrap: nowrap; justify-content: space-between; align-items: center; gap: 6px; width: 100%; max-width: 960px; padding: 8px 14px; box-sizing: border-box; background: rgba(28, 10, 54, 0.86); border: 1.5px solid rgba(192, 132, 252, 0.42); border-radius: 999px; backdrop-filter: blur(12px); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45); overflow: hidden;">
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(168, 85, 247, 0.25); border: 1px solid rgba(192, 132, 252, 0.5); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #e9d5ff; white-space: nowrap;">
              1. Đối Xứng &amp; Tiên Đề
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(244, 114, 182, 0.22); border: 1px solid rgba(244, 114, 182, 0.45); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #fbcfe8; white-space: nowrap;">
              2. Giản Ước &amp; Nhóm Abel
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(251, 191, 36, 0.2); border: 1px solid rgba(251, 191, 36, 0.45); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #fde68a; white-space: nowrap;">
              3. Bảng Cayley &amp; Latinh
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(56, 189, 248, 0.22); border: 1px solid rgba(56, 189, 248, 0.45); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #bae6fd; white-space: nowrap;">
              4. Họ Nhóm Chuẩn Mực
            </span>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 2: KHỞI NGUỒN SƯ PHẠM - TỪ ĐỐI XỨNG TAM GIÁC ĐỀU ĐẾN CẤU TRÚC NHÓM
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(232,121,249,0.14), transparent 32%), linear-gradient(135deg, #130626, #2b1152 55%, #130626); border:1.5px solid rgba(192,132,252,0.48); color:#faf5ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(168,85,247,0.24); border:1.5px solid #c084fc; border-radius:999px; color:#e9d5ff; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🔮 KHỞI NGUỒN TRỰC QUAN
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Từ Biến Hình Đối Xứng Đến Tư Duy Tiên Đề Hóa</h2>
            <p style="color:#e9d5ff; font-size:clamp(1.14rem, 1.46vw, 1.3rem); line-height:1.58; margin:0;">
              Xét tập hợp $\\operatorname{Sym}(\\Delta)$ gồm tất cả các phép biến hình bảo toàn một tam giác đều $\\Delta$ (gồm các phép quay $r$ góc $120^\\circ$ và phép đối xứng trục $s$ qua đỉnh):
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: 4 đặc tính tự nhiên của đối xứng -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; border-left:5px solid #c084fc!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#e9d5ff; font-size:clamp(1.2rem, 1.55vw, 1.38rem); display:block; margin-bottom:10px;">1) Bốn Đặc Tính Tự Nhiên Của Phép Đối Xứng:</b>
              <div style="font-size:clamp(1.1rem, 1.4vw, 1.26rem); line-height:1.72; color:#faf5ff;">
                - <b>(i) Tính đóng:</b> Làm liên tiếp hai phép đối xứng vẫn giữ nguyên tam giác đều.<br>
                - <b>(ii) Tính kết hợp:</b> Hợp thành các ánh xạ luôn có tính kết hợp: $(f \\circ g) \\circ h = f \\circ (g \\circ h)$.<br>
                - <b>(iii) Phép giữ nguyên ($\\operatorname{id}$):</b> Không tác động gì (quay $0^\\circ$) đóng vai trò phần tử trung hòa.<br>
                - <b>(iv) Khả năng hoàn tác:</b> Quay thuận $120^\\circ$ có thể quay ngược lại; lật qua trục rồi lật lại về vị trí cũ.
              </div>
            </div>

            <!-- Cột 2: Bước nhảy trừu tượng hóa -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; border-left:5px solid #fbbf24!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.2rem, 1.55vw, 1.38rem); display:block; margin-bottom:10px;">2) Bước Nhảy Trừu Tượng Hóa Đại Số:</b>
              <div class="slide-math-display" style="background:rgba(17,5,33,0.9); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.2rem, 1.55vw, 1.38rem); padding:14px; margin:10px 0 14px;">
                $$(\\operatorname{Sym}(\\Delta), \\circ) \\;\\xrightarrow{\\quad\\text{tiên đề hóa}\\quad}\\; (G, *)$$
              </div>
              <div style="font-size:clamp(1.1rem, 1.4vw, 1.26rem); line-height:1.72; color:#faf5ff;">
                - Thay vì xét riêng từng hình học, số nguyên hay ma trận, toán học chắt lọc đúng 4 đặc tính trên thành khái niệm <b>Nhóm (Group)</b>.<br>
                - Mọi định lý chứng minh trên $(G, *)$ sẽ tự động đúng cho mọi mô hình toán học thỏa mãn 4 đặc tính ấy!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 3: ĐỊNH NGHĨA - THANG BẬC 4 CẤU TRÚC ĐẠI SỐ
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(232,121,249,0.14), transparent 32%), linear-gradient(135deg, #130626, #2b1152 55%, #130626); border:1.5px solid rgba(192,132,252,0.48); color:#faf5ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(168,85,247,0.24); border:1.5px solid #c084fc; border-radius:999px; color:#e9d5ff; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              📘 ĐỊNH NGHĨA
            </span>
            <h2 style="color:#ffffff; margin:0 0 6px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Thang Bậc Cấu Trúc Đại Số: Từ Nửa Nhóm Đến Nhóm Abel</h2>
            <p style="color:#e9d5ff; font-size:clamp(1.12rem, 1.42vw, 1.28rem); line-height:1.55; margin:0;">
              Cho tập hợp $G \\neq \\emptyset$ trang bị một <b>phép toán hai ngôi</b> $* : G \\times G \\to G$ (tự động bảo đảm <b>tính đóng</b> $\\forall a, b \\in G \\implies a * b \\in G$). Ta có 4 nấc thang cấu trúc:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:16px; margin:0;">
            <!-- Nấc 1: Nửa nhóm -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; border-left:5px solid #38bdf8!important; padding:16px 22px; border-radius:14px;">
              <b style="color:#7dd3fc; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">(i) Nấc 1 · Nửa nhóm (Semigroup):</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.65; color:#faf5ff; margin-top:6px;">
                - Phép toán thỏa mãn <b>tính kết hợp</b>:<br>
                $$\\forall a, b, c \\in G: \\quad (a * b) * c = a * (b * c)$$
                - Ý nghĩa: Cho phép bỏ dấu ngoặc khi viết $a * b * c$.
              </div>
            </div>

            <!-- Nấc 2: Vị nhóm -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; border-left:5px solid #c084fc!important; padding:16px 22px; border-radius:14px;">
              <b style="color:#e9d5ff; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">(ii) Nấc 2 · Vị nhóm (Monoid):</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.65; color:#faf5ff; margin-top:6px;">
                - Là một nửa nhóm có thêm <b>phần tử đơn vị (trung hòa)</b> $e \\in G$:<br>
                $$\\exists e \\in G,\\; \\forall a \\in G: \\quad a * e = e * a = a$$
                - Công thức: $\\text{Vị nhóm} = \\text{Nửa nhóm} + \\text{Đơn vị } e$.
              </div>
            </div>

            <!-- Nấc 3: Nhóm -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.84)!important; border:1.5px solid #fbbf24!important; border-left:5px solid #fbbf24!important; padding:16px 22px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">(iii) Nấc 3 · Nhóm (Group):</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.65; color:#fef3c7; margin-top:6px;">
                - Là một vị nhóm mà <b>mọi phần tử đều khả đối xứng (khả nghịch)</b>:<br>
                $$\\forall a \\in G,\\; \\exists a^{-1} \\in G: \\quad a * a^{-1} = a^{-1} * a = e$$
                - Ký hiệu cộng: đơn vị là $0$, phần tử đối là $-a$.
              </div>
            </div>

            <!-- Nấc 4: Nhóm Abel -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.84)!important; border:1.5px solid #f472b6!important; border-left:5px solid #f472b6!important; padding:16px 22px; border-radius:14px;">
              <b style="color:#f472b6; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">(iv) Nấc 4 · Nhóm Abel (Nhóm giao hoán):</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.65; color:#fce7f3; margin-top:6px;">
                - Là một nhóm thỏa mãn thêm <b>tính giao hoán</b>:<br>
                $$\\forall a, b \\in G: \\quad a * b = b * a$$
                - Lưu ý: Tính giao hoán là một trục độc lập (có nửa nhóm giao hoán, vị nhóm giao hoán, nhóm Abel).
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 4: VÍ DỤ SOI SÁNG CHO SLIDE 3 (KHẢO SÁT CÁC TẬP SỐ HỌC)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(232,121,249,0.14), transparent 32%), linear-gradient(135deg, #130626, #2b1152 55%, #130626); border:1.5px solid rgba(192,132,252,0.48); color:#faf5ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(52,211,153,0.22); border:1.5px solid #34d399; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Khảo Sát Từng Tiên Đề Trên Các Cấu Trúc Quen Thuộc</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:16px; margin:0;">
            <!-- Mô hình 1 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; border-left:5px solid #38bdf8!important; padding:18px 22px; border-radius:14px;">
              <b style="color:#7dd3fc; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">1) $(\\mathbb{N}, +)$ với $0 \\in \\mathbb{N}$ $\\longrightarrow$ Vị nhóm giao hoán</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.68; color:#faf5ff; margin-top:8px;">
                - Đóng, kết hợp, giao hoán và có đơn vị là $0$ ($n + 0 = n$).<br>
                - <b>Không là nhóm:</b> Phần tử $1 \\in \\mathbb{N}$ không có phần tử đối trong $\\mathbb{N}$ (vì $-1 \\notin \\mathbb{N}$).
              </div>
            </div>

            <!-- Mô hình 2 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; border-left:5px solid #34d399!important; padding:18px 22px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">2) $(\\mathbb{Z}, +)$ và $(\\mathbb{Q}^*, \\cdot)$ $\\longrightarrow$ Nhóm Abel</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.68; color:#faf5ff; margin-top:8px;">
                - Trong $(\\mathbb{Z}, +)$: Đơn vị là $0$, mọi $a \\in \\mathbb{Z}$ có số đối $-a \\in \\mathbb{Z}$.<br>
                - Trong $(\\mathbb{Q} \\setminus \\{0\\}, \\cdot)$: Tích hai số khác $0$ luôn khác $0$, đơn vị là $1$, nghịch đảo của $x \\neq 0$ là $1/x \\in \\mathbb{Q}^*$.
              </div>
            </div>

            <!-- Mô hình 3 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; border-left:5px solid #fbbf24!important; padding:18px 22px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">3) $(\\mathbb{Z}, \\cdot)$ $\\longrightarrow$ Vị nhóm giao hoán (Chưa là nhóm)</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.68; color:#faf5ff; margin-top:8px;">
                - Phép nhân số nguyên đóng, kết hợp, giao hoán và có đơn vị là $1$.<br>
                - <b>Không là nhóm:</b> Chỉ có $\\pm 1$ khả nghịch trong $\\mathbb{Z}$; số $2$ không có nghịch đảo nguyên (vì $1/2 \\notin \\mathbb{Z}$).
              </div>
            </div>

            <!-- Mô hình 4 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(244,63,94,0.5)!important; border-left:5px solid #fb7185!important; padding:18px 22px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">4) Tập số lẻ $(2\\mathbb{Z}+1, +)$ $\\longrightarrow$ Không đóng!</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.68; color:#faf5ff; margin-top:8px;">
                - Lấy $1, 3 \\in 2\\mathbb{Z} + 1$, nhưng $1 + 3 = 4 \\notin 2\\mathbb{Z} + 1$.<br>
                - Vi phạm ngay điều kiện <b>phép toán hai ngôi (tính đóng)</b>, nên không tạo thành bất kỳ cấu trúc đại số nào!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 5: PHẢN VÍ DỤ - RANH GIỚI TIÊN ĐỀ KẾT HỢP & KHẢ NGHỊCH
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(232,121,249,0.14), transparent 32%), linear-gradient(135deg, #130626, #2b1152 55%, #130626); border:1.5px solid rgba(192,132,252,0.48); color:#faf5ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.22); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              ⚠️ PHẢN VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Nhận Diện Ranh Giới Tiên Đề Qua Hai Cạm Bẫy Kinh Điển</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Bẫy 1: Giao hoán không kéo theo kết hợp -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.8)!important; border:1.5px solid #fb7185!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Bẫy 1: Giao hoán KHÔNG kéo theo kết hợp!</b>
              <div class="slide-math-display" style="background:rgba(17,5,33,0.92); border-color:#fb7185; color:#fecdd3; font-size:clamp(1.16rem, 1.5vw, 1.34rem); padding:10px; margin:12px 0;">
                $$x * y = \\frac{x + y}{2} \\quad \\text{trên } \\mathbb{R}$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.68; color:#faf5ff;">
                - Phép trung bình cộng hiển nhiên đóng và giao hoán ($x * y = y * x$).<br>
                - Nhưng xét bộ ba $(0, 0, 4)$:<br>
                &nbsp;&nbsp;+ $(0 * 0) * 4 = 0 * 4 = 2$.<br>
                &nbsp;&nbsp;+ $0 * (0 * 4) = 0 * 2 = 1 \\neq 2$.<br>
                - Vi phạm tính kết hợp $\\implies (\\mathbb{R}, *)$ thậm chí <b>không phải là nửa nhóm</b>!
              </div>
            </div>

            <!-- Bẫy 2: Ma trận suy biến làm gãy tính nhóm -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.8)!important; border:1.5px solid #fbbf24!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Bẫy 2: Từ vị nhóm $M_n(\\mathbb{R})$ đến nhóm $\\operatorname{GL}_n(\\mathbb{R})$</b>
              <div class="slide-math-display" style="background:rgba(17,5,33,0.92); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.14rem, 1.48vw, 1.32rem); padding:10px; margin:12px 0;">
                $$\\operatorname{GL}_n(\\mathbb{R}) = \\{A \\in M_n(\\mathbb{R}) \\mid \\det(A) \\neq 0\\}$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.68; color:#faf5ff;">
                - Tập toàn bộ ma trận vuông $(M_n(\\mathbb{R}), \\cdot)$ có tính kết hợp và có đơn vị $I_n$, nhưng các ma trận có $\\det(A) = 0$ <b>không có nghịch đảo</b>.<br>
                - Phải lọc bỏ các ma trận suy biến, ta mới thu được <b>Nhóm tuyến tính tổng quát $\\operatorname{GL}_n(\\mathbb{R})$</b> (nhóm không giao hoán khi $n \\ge 2$).
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(28,10,54,0.92)!important; border:1.5px solid #c084fc!important; border-left:6px solid #c084fc!important; color:#e9d5ff!important; font-size:clamp(1.06rem, 1.36vw, 1.22rem);">
            <b>⚡ Điểm cốt lõi cần lưu tâm:</b> Tiên đề Nhóm đòi hỏi <b>mọi phần tử</b> trong tập hợp đều phải có nghịch đảo thuộc chính tập hợp đó; chỉ một phần tử không khả nghịch (như số $0$ trong phép nhân) cũng đủ làm sập cấu trúc nhóm!
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 6: ĐỊNH LÝ - TÍNH DUY NHẤT & LUẬT GIẢN ƯỚC HAI PHÍA
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(232,121,249,0.14), transparent 32%), linear-gradient(135deg, #130626, #2b1152 55%, #130626); border:1.5px solid rgba(192,132,252,0.48); color:#faf5ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Tính Duy Nhất &amp; Luật Giản Ước Hai Phía Trong Nhóm</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Tính duy nhất -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; border-left:5px solid #c084fc!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#e9d5ff; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Tính Duy Nhất Tuyệt Đối:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#faf5ff; margin-top:10px;">
                - <b>(i) Duy nhất đơn vị:</b> Phần tử đơn vị $e \\in G$ là duy nhất (nếu $e, e'$ đều là đơn vị thì $e = ee' = e'$).<br>
                - <b>(ii) Duy nhất nghịch đảo:</b> Với mỗi $a \\in G$, phần tử nghịch đảo $a^{-1}$ là duy nhất (nếu $b, c$ cùng là nghịch đảo của $a$ thì $b = be = b(ac) = (ba)c = ec = c$).<br>
                - <b>(iii) Phản đối xứng kép:</b> $(a^{-1})^{-1} = a$ với mọi $a \\in G$.
              </div>
            </div>

            <!-- Cột 2: Luật giản ước -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; border-left:5px solid #fbbf24!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Luật Giản Ước Trái &amp; Phải (Cancellation Laws):</b>
              <div class="slide-math-display" style="background:rgba(17,5,33,0.92); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.15rem, 1.48vw, 1.34rem); padding:12px; margin:12px 0;">
                $$\\begin{aligned} \\text{Giản ước trái: } & ax = ay \\implies x = y \\\\ \\text{Giản ước phải: } & xa = ya \\implies x = y \\end{aligned}$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#faf5ff;">
                - <b>Chứng minh:</b> Từ $ax = ay$, nhân $a^{-1}$ vào <b>bên trái</b> cả hai vế:<br>
                $$a^{-1}(ax) = a^{-1}(ay) \\implies (a^{-1}a)x = (a^{-1}a)y \\implies x = y.$$
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(28,10,54,0.92)!important; border:1.5px solid #fbbf24!important; color:#fef3c7!important; font-size:clamp(1.06rem, 1.36vw, 1.22rem); text-align:center;">
            <b>✨ Ý nghĩa cốt lõi:</b> Luật giản ước bảo đảm trong cấu trúc nhóm <b>không bao giờ có hiện tượng mất mát thông tin</b> khi nhân thêm một phần tử!
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 7: VÍ DỤ & LƯU Ý CHO SLIDE 6 (GIẢI PHƯƠNG TRÌNH TRONG NHÓM)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(232,121,249,0.14), transparent 32%), linear-gradient(135deg, #130626, #2b1152 55%, #130626); border:1.5px solid rgba(192,132,252,0.48); color:#faf5ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(52,211,153,0.22); border:1.5px solid #34d399; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Cơ Chế Giải Phương Trình Tuyến Tính $ax = b$ và $ya = b$</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Phương trình trái ax = b -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.2rem, 1.55vw, 1.38rem);">1) Phương trình $ax = b$ (Khử $a$ ở bên trái)</b>
              <div class="slide-math-display" style="background:rgba(17,5,33,0.92); border-color:#34d399; color:#a7f3d0; font-size:clamp(1.22rem, 1.6vw, 1.42rem); padding:12px; margin:14px 0;">
                $$ax = b \\iff x = a^{-1}b \\quad (\\text{Nghiệm duy nhất!})$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#faf5ff;">
                - <b>Cách giải:</b> Nhân $a^{-1}$ vào <b>bên trái</b> cả hai vế:<br>
                $$a^{-1}(ax) = a^{-1}b \\implies (a^{-1}a)x = a^{-1}b \\implies x = a^{-1}b.$$
              </div>
            </div>

            <!-- Phương trình phải ya = b -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.2rem, 1.55vw, 1.38rem);">2) Phương trình $ya = b$ (Khử $a$ ở bên phải)</b>
              <div class="slide-math-display" style="background:rgba(17,5,33,0.92); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.22rem, 1.6vw, 1.42rem); padding:12px; margin:14px 0;">
                $$ya = b \\iff y = ba^{-1} \\quad (\\text{Nghiệm duy nhất!})$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#faf5ff;">
                - <b>Cách giải:</b> Nhân $a^{-1}$ vào <b>bên phải</b> cả hai vế:<br>
                $$(ya)a^{-1} = ba^{-1} \\implies y(aa^{-1}) = ba^{-1} \\implies y = ba^{-1}.$$
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:16px 22px; background:rgba(28,10,54,0.92)!important; border:1.5px solid #fb7185!important; border-left:6px solid #fb7185!important; color:#fecdd3!important; font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.6;">
            <b>⚠️ Lưu ý sống còn trong nhóm không giao hoán:</b> Hai nghiệm $a^{-1}b$ và $ba^{-1}$ nói chung <b>khác nhau hoàn toàn</b>! Tuyệt đối không bao giờ viết phân số $\\dfrac{b}{a}$ trong nhóm tổng quát vì không biết nhân $a^{-1}$ ở bên trái hay bên phải.
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 8: ĐỊNH LÝ & LƯU Ý - NGHỊCH ĐẢO CỦA TÍCH & KHAI TRIỂN LŨY THỪA
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(232,121,249,0.14), transparent 32%), linear-gradient(135deg, #130626, #2b1152 55%, #130626); border:1.5px solid rgba(192,132,252,0.48); color:#faf5ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ &amp; LƯU Ý
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Quy Tắc Nghịch Đảo Của Tích &amp; Bẫy Khai Triển Lũy Thừa</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Nghịch đảo của tích (Ẩn dụ đi giày và tất) -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; border-left:5px solid #c084fc!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#e9d5ff; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Quy tắc đảo thứ tự nghịch đảo (Socks &amp; Shoes Rule):</b>
              <div class="slide-math-display" style="background:rgba(17,5,33,0.92); border-color:#c084fc; color:#f5d0fe; font-size:clamp(1.24rem, 1.65vw, 1.46rem); padding:12px; margin:14px 0;">
                $$(ab)^{-1} = b^{-1}a^{-1}$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.7; color:#faf5ff;">
                - <b>Chứng minh:</b> $(ab)(b^{-1}a^{-1}) = a(bb^{-1})a^{-1} = aea^{-1} = aa^{-1} = e$.<br>
                - <b>Ẩn dụ trực quan:</b> Buổi sáng mang tất ($a$) rồi đi giày ($b$). Buổi tối muốn tháo ra thì phải <b>tháo giày trước ($b^{-1}$)</b> rồi mới <b>tháo tất sau ($a^{-1}$)</b>!
              </div>
            </div>

            <!-- Cột 2: Quy tắc lũy thừa nguyên & Bẫy (ab)^2 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid #fb7185!important; border-left:5px solid #fb7185!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Quy tắc lũy thừa cùng cơ số &amp; Bẫy $(ab)^n$:</b>
              <div class="slide-math-display" style="background:rgba(17,5,33,0.92); border-color:#fb7185; color:#fecdd3; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:12px; margin:14px 0;">
                $$a^m a^n = a^{m+n}, \\quad (a^m)^n = a^{mn} \\quad (m, n \\in \\mathbb{Z})$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.7; color:#faf5ff;">
                - <b>⚠️ Cảnh báo bẫy:</b> Với hai cơ số khác nhau $a, b$, trong nhóm không giao hoán ta luôn có:<br>
                $$\\mathbf{(ab)^2 = abab \\neq a^2b^2 = aabb}$$
                - Không được tự ý gom $(ab)^n = a^n b^n$ nếu chưa biết nhóm giao hoán!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 9: MỆNH ĐỀ - TIÊU CHUẨN NHÓM GIAO HOÁN QUA LŨY THỪA BẬC 2
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(232,121,249,0.14), transparent 32%), linear-gradient(135deg, #130626, #2b1152 55%, #130626); border:1.5px solid rgba(192,132,252,0.48); color:#faf5ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ MỆNH ĐỀ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Tiêu Chuẩn Nhóm Giao Hoán Qua Lũy Thừa Bậc Hai</h2>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(28,10,54,0.92); border:1.5px solid #fbbf24; color:#fde68a; font-size:clamp(1.28rem, 1.72vw, 1.52rem); padding:16px 24px; margin:0;">
            $$\\text{Nhóm } G \\text{ là nhóm giao hoán (Abel)} \\iff (ab)^2 = a^2b^2, \\quad \\forall a, b \\in G$$
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; padding:22px 26px; border-radius:14px;">
            <b style="color:#e9d5ff; font-size:clamp(1.2rem, 1.55vw, 1.38rem); display:block; margin-bottom:10px;">🔍 Chứng minh hai chiều bằng Luật giản ước (Mệnh đề 1.3 Giáo trình):</b>
            <div style="font-size:clamp(1.1rem, 1.42vw, 1.26rem); line-height:1.78; color:#faf5ff;">
              <b>1) Chiều thuận $(\\implies)$:</b> Nếu $G$ giao hoán thì $ba = ab$. Khi đó:<br>
              $$(ab)^2 = (ab)(ab) = a(ba)b = a(ab)b = (aa)(bb) = a^2b^2.$$
              <b>2) Chiều đảo $(\\impliedby)$:</b> Giả sử $(ab)^2 = a^2b^2$ đúng với mọi $a, b \\in G$. Viết tường minh hai vế:<br>
              $$abab = aabb \\iff a(ba)b = a(ab)b$$
              - Áp dụng <b>luật giản ước trái</b> cho $a$ và <b>luật giản ước phải</b> cho $b$, ta thu được ngay $ba = ab, \\forall a, b \\in G$. Vậy $G$ là nhóm Abel! $\\blacksquare$
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 10: VÍ DỤ CHỨNG MINH MẪU MỰC - NHÓM CÓ MỌI PHẦN TỬ CẤP 2
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(232,121,249,0.14), transparent 32%), linear-gradient(135deg, #130626, #2b1152 55%, #130626); border:1.5px solid rgba(192,132,252,0.48); color:#faf5ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(52,211,153,0.22); border:1.5px solid #34d399; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Bài Toán Kinh Điển: Nhóm Thỏa $x^2 = e, \\forall x \\in G$ Luôn Là Nhóm Abel</h2>
            <p style="color:#e9d5ff; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              <b>Đề bài (Bài tập 1.19):</b> Cho nhóm $G$ thỏa mãn $x^2 = e$ với mọi $x \\in G$. Chứng minh $G$ là một nhóm giao hoán.
            </p>
          </div>

          <div class="slide-glass-card anim-card anim-d1" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.8)!important; border:1.5px solid rgba(52,211,153,0.5)!important; border-left:6px solid #34d399!important; padding:22px 26px; border-radius:14px;">
            <b style="color:#6ee7b7; font-size:clamp(1.18rem, 1.52vw, 1.36rem); display:block; margin-bottom:10px;">📘 Trình bày lời giải tự luận 3 bước chuẩn mực:</b>
            <div style="font-size:clamp(1.1rem, 1.42vw, 1.26rem); line-height:1.78; color:#faf5ff;">
              <b>1) Bước 1 (Chuyển giả thiết thành tính tự nghịch đảo):</b><br>
              - Với mọi $x \\in G$, từ $x^2 = e \\iff x \\cdot x = e$, nhân $x^{-1}$ vào bên phải ta được <b style="color:#fde68a;">$x = x^{-1}$</b>.<br>
              <b>2) Bước 2 (Áp dụng cho từng phần tử $a, b$ và cho tích $ab$):</b><br>
              - Lấy tùy ý $a, b \\in G$. Vì $a, b \\in G$ và $ab \\in G$, áp dụng Bước 1 ta có: $a = a^{-1},\\; b = b^{-1}$ và $ab = (ab)^{-1}$.<br>
              <b>3) Bước 3 (Kết hợp quy tắc nghịch đảo của tích):</b><br>
              $$ab = (ab)^{-1} = b^{-1}a^{-1} = ba \\quad (\\forall a, b \\in G) \\implies G \\text{ là nhóm Abel! } \\blacksquare$$
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 11: KHÁI NIỆM - BẢNG CAYLEY & HÌNH VUÔNG LATINH
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(232,121,249,0.14), transparent 32%), linear-gradient(135deg, #130626, #2b1152 55%, #130626); border:1.5px solid rgba(192,132,252,0.48); color:#faf5ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(168,85,247,0.24); border:1.5px solid #c084fc; border-radius:999px; color:#e9d5ff; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 KHÁI NIỆM
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Bảng Cayley &amp; Đặc Trưng Hình Vuông Latinh</h2>
            <p style="color:#e9d5ff; font-size:clamp(1.14rem, 1.46vw, 1.3rem); line-height:1.58; margin:0;">
              Với một nhóm hữu hạn $G = \\{g_1, g_2, \\dots, g_n\\}$, <b>bảng Cayley</b> ghi nhận toàn bộ phép toán của nhóm theo quy ước chuẩn: ô nằm ở <b style="color:#fbbf24;">hàng $x$, cột $y$</b> chứa kết quả của tích <b style="color:#fbbf24;">$xy$</b>.
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:18px; margin:0;">
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; border-left:5px solid #c084fc!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#e9d5ff; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">(i) Đơn vị &amp; Nghịch đảo trên bảng:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.7; color:#faf5ff; margin-top:8px;">
                - <b>Hàng $e$ và cột $e$:</b> Giữ nguyên hoàn toàn thứ tự các phần tử tiêu đề.<br>
                - <b>Tìm nghịch đảo $x^{-1}$:</b> Tìm vị trí ô chứa phần tử đơn vị $e$ trên hàng $x$; tiêu đề cột tương ứng chính là $x^{-1}$.
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; border-left:5px solid #fbbf24!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">(ii) Hình vuông Latinh &amp; Đối xứng đường chéo:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.7; color:#faf5ff; margin-top:8px;">
                - <b>Quy luật Hình vuông Latinh:</b> Do luật giản ước ($ax = ay \\implies x = y$), trên mỗi hàng và mỗi cột, mỗi phần tử của nhóm xuất hiện <b>đúng một lần</b>!<br>
                - <b>Nhận diện nhóm Abel:</b> $G$ giao hoán $\\iff$ bảng Cayley <b>đối xứng gương qua đường chéo chính</b> ($xy = yx$).
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 12: VÍ DỤ SOI SÁNG CHO SLIDE 11 (BẢNG CAYLEY NHÓM KLEIN V4)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(232,121,249,0.14), transparent 32%), linear-gradient(135deg, #130626, #2b1152 55%, #130626); border:1.5px solid rgba(192,132,252,0.48); color:#faf5ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(52,211,153,0.22); border:1.5px solid #34d399; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Đọc Cấu Trúc Từ Bảng Cayley Của Nhóm Bốn Klein $V_4$</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; grid-template-columns:minmax(290px, 0.92fr) minmax(0, 1.08fr); gap:22px; align-items:stretch; margin:0;">
            <!-- Cột 1: Bảng Cayley 4x4 của V4 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.85)!important; border:1.5px solid rgba(192,132,252,0.5)!important; padding:18px; border-radius:14px;">
              <table style="width:100%; height:100%; border-collapse:collapse; text-align:center; font-size:clamp(1.15rem, 1.5vw, 1.35rem); color:#ffffff;">
                <thead>
                  <tr style="background:rgba(168,85,247,0.32); color:#fde68a; font-weight:800;">
                    <th style="padding:12px; border:1px solid rgba(192,132,252,0.35);">$\cdot$</th>
                    <th style="padding:12px; border:1px solid rgba(192,132,252,0.35);">$e$</th>
                    <th style="padding:12px; border:1px solid rgba(192,132,252,0.35);">$\\alpha$</th>
                    <th style="padding:12px; border:1px solid rgba(192,132,252,0.35);">$\\beta$</th>
                    <th style="padding:12px; border:1px solid rgba(192,132,252,0.35);">$\\gamma$</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="padding:12px; background:rgba(168,85,247,0.25); color:#fde68a; font-weight:800; border:1px solid rgba(192,132,252,0.35);">$e$</td>
                    <td style="padding:12px; background:rgba(251,191,36,0.18); color:#fde68a; font-weight:800; border:1px solid rgba(192,132,252,0.35);">$e$</td>
                    <td style="padding:12px; border:1px solid rgba(192,132,252,0.35);">$\\alpha$</td>
                    <td style="padding:12px; border:1px solid rgba(192,132,252,0.35);">$\\beta$</td>
                    <td style="padding:12px; border:1px solid rgba(192,132,252,0.35);">$\\gamma$</td>
                  </tr>
                  <tr>
                    <td style="padding:12px; background:rgba(168,85,247,0.25); color:#fde68a; font-weight:800; border:1px solid rgba(192,132,252,0.35);">$\\alpha$</td>
                    <td style="padding:12px; border:1px solid rgba(192,132,252,0.35);">$\\alpha$</td>
                    <td style="padding:12px; background:rgba(251,191,36,0.18); color:#fde68a; font-weight:800; border:1px solid rgba(192,132,252,0.35);">$e$</td>
                    <td style="padding:12px; border:1px solid rgba(192,132,252,0.35);">$\\gamma$</td>
                    <td style="padding:12px; border:1px solid rgba(192,132,252,0.35);">$\\beta$</td>
                  </tr>
                  <tr>
                    <td style="padding:12px; background:rgba(168,85,247,0.25); color:#fde68a; font-weight:800; border:1px solid rgba(192,132,252,0.35);">$\\beta$</td>
                    <td style="padding:12px; border:1px solid rgba(192,132,252,0.35);">$\\beta$</td>
                    <td style="padding:12px; border:1px solid rgba(192,132,252,0.35);">$\\gamma$</td>
                    <td style="padding:12px; background:rgba(251,191,36,0.18); color:#fde68a; font-weight:800; border:1px solid rgba(192,132,252,0.35);">$e$</td>
                    <td style="padding:12px; border:1px solid rgba(192,132,252,0.35);">$\\alpha$</td>
                  </tr>
                  <tr>
                    <td style="padding:12px; background:rgba(168,85,247,0.25); color:#fde68a; font-weight:800; border:1px solid rgba(192,132,252,0.35);">$\\gamma$</td>
                    <td style="padding:12px; border:1px solid rgba(192,132,252,0.35);">$\\gamma$</td>
                    <td style="padding:12px; border:1px solid rgba(192,132,252,0.35);">$\\beta$</td>
                    <td style="padding:12px; border:1px solid rgba(192,132,252,0.35);">$\\alpha$</td>
                    <td style="padding:12px; background:rgba(251,191,36,0.18); color:#fde68a; font-weight:800; border:1px solid rgba(192,132,252,0.35);">$e$</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Cột 2: Giải mã thông tin từ bảng -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.2rem, 1.55vw, 1.38rem); display:block; margin-bottom:10px;">🔍 Ba Phát Hiện Trực Tiếp Từ Bảng Cayley $V_4$:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.75; color:#faf5ff;">
                - <b>1) Hình vuông Latinh hoàn hảo:</b> Mỗi hàng và mỗi cột đều chứa đủ $e, \\alpha, \\beta, \\gamma$ đúng 1 lần.<br>
                - <b>2) Đường chéo chính toàn đơn vị $e$:</b><br>
                &nbsp;&nbsp;+ $\\alpha^2 = \\beta^2 = \\gamma^2 = e$, nghĩa là mọi phần tử đều tự nghịch đảo ($x^{-1} = x$).<br>
                - <b>3) Đối xứng gương qua đường chéo chính:</b><br>
                &nbsp;&nbsp;+ $\\alpha\\beta = \\beta\\alpha = \\gamma$, $\\beta\\gamma = \\gamma\\beta = \\alpha$, $\\gamma\\alpha = \\alpha\\gamma = \\beta$. Vậy $V_4$ là một <b>nhóm Abel cấp $4$</b>!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 13: MÔ HÌNH CHUẨN MỰC 1 - NHÓM CỘNG MODULO & NHÓM ĐƠN VỊ U(n)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(232,121,249,0.14), transparent 32%), linear-gradient(135deg, #130626, #2b1152 55%, #130626); border:1.5px solid rgba(192,132,252,0.48); color:#faf5ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(168,85,247,0.24); border:1.5px solid #c084fc; border-radius:999px; color:#e9d5ff; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 HỌ NHÓM CHUẨN MỰC 1
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Nhóm Cộng Modulo $(\\mathbb{Z}/n\\mathbb{Z}, +)$ và Nhóm Nhân Các Đơn Vị $U(n)$</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: (Z/nZ, +) -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; border-left:5px solid #38bdf8!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#7dd3fc; font-size:clamp(1.2rem, 1.55vw, 1.38rem);">1) Nhóm Cộng Modulo $(\\mathbb{Z}/n\\mathbb{Z}, +)$</b>
              <div class="slide-math-display" style="background:rgba(17,5,33,0.92); border-color:#38bdf8; color:#bae6fd; font-size:clamp(1.14rem, 1.48vw, 1.32rem); padding:10px; margin:12px 0;">
                $$\\mathbb{Z}/n\\mathbb{Z} = \\{[0]_n, [1]_n, \\dots, [n-1]_n\\}, \\quad |\\mathbb{Z}/n\\mathbb{Z}| = n$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.7; color:#faf5ff;">
                - <b>Phép toán:</b> $[a]_n + [b]_n = [a + b]_n$ (nhóm Abel cấp $n$).<br>
                - <b>Phần tử đơn vị:</b> Lớp $[0]_n$.<br>
                - <b>Phần tử đối:</b> $-[a]_n = [n - a]_n$ (ví dụ trong $\\mathbb{Z}/12\\mathbb{Z}$: $-[5] = [7]$).
              </div>
            </div>

            <!-- Cột 2: U(n) -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; border-left:5px solid #fbbf24!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.2rem, 1.55vw, 1.38rem);">2) Nhóm Nhân Các Đơn Vị $(U(n), \\cdot)$</b>
              <div class="slide-math-display" style="background:rgba(17,5,33,0.92); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.14rem, 1.48vw, 1.32rem); padding:10px; margin:12px 0;">
                $$U(n) = \\{[a]_n \\in \\mathbb{Z}/n\\mathbb{Z} \\mid \\gcd(a, n) = 1\\}, \\quad |U(n)| = \\varphi(n)$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.7; color:#faf5ff;">
                - <b>Phép toán:</b> $[a]_n \\cdot [b]_n = [ab]_n$ (nhóm Abel cấp $\\varphi(n)$).<br>
                - <b>Phần tử đơn vị:</b> Lớp $[1]_n$.<br>
                - <b>Nghịch đảo nhân:</b> Tìm từ đồng nhất thức Bézout $ua + vn = 1 \\implies [a]_n^{-1} = [u]_n$.
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 14: MÔ HÌNH CHUẨN MỰC 2 - NHÓM ĐỐI XỨNG S3 & QUY ƯỚC PHẢI SANG TRÁI
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(232,121,249,0.14), transparent 32%), linear-gradient(135deg, #130626, #2b1152 55%, #130626); border:1.5px solid rgba(192,132,252,0.48); color:#faf5ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(168,85,247,0.24); border:1.5px solid #c084fc; border-radius:999px; color:#e9d5ff; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 HỌ NHÓM CHUẨN MỰC 2
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Nhóm Đối Xứng $S_3$ &amp; Quy Ước Nhân Từ Phải Sang Trái</h2>
            <p style="color:#e9d5ff; font-size:clamp(1.12rem, 1.44vw, 1.28rem); line-height:1.58; margin:0;">
              Nhóm đối xứng $S_n$ gồm $n!$ song ánh (hoán vị) của $\\{1, 2, \\dots, n\\}$ với phép hợp thành ánh xạ. Với $n = 3$, $|S_3| = 3! = 6$:
              <b style="color:#fde68a;">$S_3 = \\{\\operatorname{id},\\; (1\\,2),\\; (1\\,3),\\; (2\\,3),\\; (1\\,2\\,3),\\; (1\\,3\\,2)\\}$</b>.
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Tính (1 2)(1 2 3) -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; border-left:5px solid #34d399!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">1) Tính tích $\\sigma\\tau = (1\\,2)(1\\,2\\,3)$ (Phải sang Trái):</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#faf5ff; margin-top:10px;">
                - <b>Quy ước:</b> $(\\sigma\\tau)(x) = \\sigma(\\tau(x))$ — cho $\\tau = (1\\,2\\,3)$ tác động trước, rồi mới đến $\\sigma = (1\\,2)$:<br>
                &nbsp;&nbsp;+ $1 \\xrightarrow{(1\\,2\\,3)} 2 \\xrightarrow{(1\\,2)} 1$ (giữ nguyên $1$).<br>
                &nbsp;&nbsp;+ $2 \\xrightarrow{(1\\,2\\,3)} 3 \\xrightarrow{(1\\,2)} 3$ ($2 \\mapsto 3$).<br>
                &nbsp;&nbsp;+ $3 \\xrightarrow{(1\\,2\\,3)} 1 \\xrightarrow{(1\\,2)} 2$ ($3 \\mapsto 2$).<br>
                <div class="slide-math-display" style="background:rgba(17,5,33,0.92); border-color:#34d399; color:#a7f3d0; font-size:clamp(1.16rem, 1.5vw, 1.34rem); padding:8px; margin:10px 0 0;">
                  $$\\Longrightarrow \\quad (1\\,2)(1\\,2\\,3) = (2\\,3)$$
                </div>
              </div>
            </div>

            <!-- Cột 2: Đổi thứ tự (1 2 3)(1 2) -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; border-left:5px solid #fbbf24!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">2) Đảo thứ tự $\\tau\\sigma = (1\\,2\\,3)(1\\,2)$ (Phải sang Trái):</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#faf5ff; margin-top:10px;">
                - Cho $(1\\,2)$ tác động trước, rồi mới đến $(1\\,2\\,3)$:<br>
                &nbsp;&nbsp;+ $1 \\xrightarrow{(1\\,2)} 2 \\xrightarrow{(1\\,2\\,3)} 3$ ($1 \\mapsto 3$).<br>
                &nbsp;&nbsp;+ $3 \\xrightarrow{(1\\,2)} 3 \\xrightarrow{(1\\,2\\,3)} 1$ ($3 \\mapsto 1$).<br>
                &nbsp;&nbsp;+ $2 \\xrightarrow{(1\\,2)} 1 \\xrightarrow{(1\\,2\\,3)} 2$ (giữ nguyên $2$).<br>
                <div class="slide-math-display" style="background:rgba(17,5,33,0.92); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.16rem, 1.5vw, 1.34rem); padding:8px; margin:10px 0 0;">
                  $$\\Longrightarrow \\quad (1\\,2\\,3)(1\\,2) = (1\\,3) \\neq (2\\,3)$$
                </div>
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(28,10,54,0.92)!important; border:1.5px solid #f472b6!important; color:#fce7f3!important; font-size:clamp(1.06rem, 1.36vw, 1.22rem); text-align:center;">
            <b>⚡ Kết luận quan trọng:</b> Vì $(1\\,2)(1\\,2\\,3) \\neq (1\\,2\\,3)(1\\,2)$, nhóm $S_3$ (cấp $6$) là <b>nhóm không giao hoán nhỏ nhất</b> trong đại số! (Mọi nhóm $S_n$ với $n \\ge 3$ đều không giao hoán).
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 15: PHƯƠNG PHÁP LUẬN PHÒNG THI - BẮT LỖI NHÂN HOÁN VỊ
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(232,121,249,0.14), transparent 32%), linear-gradient(135deg, #130626, #2b1152 55%, #130626); border:1.5px solid rgba(192,132,252,0.48); color:#faf5ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.24); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🛑 PHƯƠNG PHÁP LUẬN PHÒNG THI
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Bắt Lỗi Bài Thi: Sai Lầm Đọc Hoán Vị Từ Trái Sang Phải</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Bài làm sai của sinh viên -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(45,10,35,0.82)!important; border:1.5px solid #fb7185!important; border-left:6px solid #ef4444!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">❌ Bài làm sai của Sinh viên A:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fecdd3; font-style:italic; margin-top:12px;">
                "Để tính tích $(1\\,2)(1\\,2\\,3)$ trong $S_3$, em xét từng phần tử đi từ trái sang phải:<br>
                - Số $1$ qua $(1\\,2)$ thành $2$, rồi $2$ qua $(1\\,2\\,3)$ thành $3$ ($1 \\mapsto 3$).<br>
                - Số $2$ qua $(1\\,2)$ thành $1$, rồi $1$ qua $(1\\,2\\,3)$ thành $2$ ($2 \\mapsto 2$).<br>
                - Số $3$ giữ nguyên qua $(1\\,2)$, rồi qua $(1\\,2\\,3)$ thành $1$ ($3 \\mapsto 1$).<br>
                Vậy $(1\\,2)(1\\,2\\,3) = (1\\,3)$."
              </div>
            </div>

            <!-- Cột 2: Phản biện của giảng viên -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.82)!important; border:1.5px solid #34d399!important; border-left:6px solid #10b981!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">✔ Lời phê &amp; Chuẩn hóa của Giảng viên:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#faf5ff; margin-top:12px;">
                - <b>Lỗi sai nghiêm trọng:</b> Mỗi hoán vị là một <b>ánh xạ</b>, và phép nhân trong $S_n$ là <b>hợp thành ánh xạ</b> $(\\sigma \\circ \\tau)(x) = \\sigma(\\tau(x))$.<br>
                - Phần tử $x$ đứng ở bên phải, nên <b>ánh xạ bên phải phải tác động vào $x$ trước</b>!<br>
                - Đọc ngược từ trái sang phải sẽ biến tích $\\sigma\\tau$ thành $\\tau\\sigma$, làm sai toàn bộ các bài toán lớp kề (Chương 3) và liên hợp (Chương 4).
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 16: MÔ HÌNH CHUẨN MỰC 3 - NHÓM BIẾN HÌNH AFIN Aff(R)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(232,121,249,0.14), transparent 32%), linear-gradient(135deg, #130626, #2b1152 55%, #130626); border:1.5px solid rgba(192,132,252,0.48); color:#faf5ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(168,85,247,0.24); border:1.5px solid #c084fc; border-radius:999px; color:#e9d5ff; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 HỌ NHÓM CHUẨN MỰC 3
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Nhóm Các Phép Biến Hình Afin $\\operatorname{Aff}(\\mathbb{R})$</h2>
            <p style="color:#e9d5ff; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Xét tập hợp các hàm số bậc nhất (co giãn hệ số $a \\neq 0$ và tịnh tiến đoạn $b$) trên đường thẳng thực $\\mathbb{R}$ cùng phép hợp thành ánh xạ:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(28,10,54,0.92); border:1.5px solid #fbbf24; color:#fde68a; font-size:clamp(1.22rem, 1.6vw, 1.42rem); padding:14px 22px; margin:0;">
            $$\\operatorname{Aff}(\\mathbb{R}) = \\{T_{a,b} : \\mathbb{R} \\to \\mathbb{R} \\mid T_{a,b}(x) = ax + b,\\; a \\in \\mathbb{R}^*,\\; b \\in \\mathbb{R}\\}$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Công thức hợp thành -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#e9d5ff; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">1) Phép hợp thành (Tính đóng &amp; Không giao hoán):</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#faf5ff; margin-top:10px;">
                - Với mọi $x \\in \\mathbb{R}$:<br>
                $$(T_{a,b} \\circ T_{c,d})(x) = T_{a,b}(cx + d) = a(cx + d) + b = (ac)x + (ad + b)$$
                - Do $a \\neq 0, c \\neq 0 \\implies ac \\neq 0$, vậy <b style="color:#fde68a;">$T_{a,b} \\circ T_{c,d} = T_{ac,\\; ad+b} \\in \\operatorname{Aff}(\\mathbb{R})$</b>.<br>
                - Vì $ad + b \\neq cb + d$ nói chung, nên $\\operatorname{Aff}(\\mathbb{R})$ là <b>nhóm vô hạn không giao hoán</b>!
              </div>
            </div>

            <!-- Cột 2: Đơn vị và Nghịch đảo -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border:1.5px solid rgba(192,132,252,0.45)!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">2) Phần tử đơn vị &amp; Ánh xạ nghịch đảo:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#faf5ff; margin-top:10px;">
                - <b>Phần tử đơn vị:</b> Là ánh xạ đồng nhất $\\operatorname{id} = T_{1, 0}$ (vì $1x + 0 = x$).<br>
                - <b>Phần tử nghịch đảo của $T_{a,b}$:</b> Giải $y = ax + b \\iff x = \\dfrac{1}{a}y - \\dfrac{b}{a}$:<br>
                <div class="slide-math-display" style="background:rgba(17,5,33,0.92); border-color:#34d399; color:#a7f3d0; font-size:clamp(1.16rem, 1.5vw, 1.34rem); padding:10px; margin:10px 0 0;">
                  $$(T_{a,b})^{-1} = T_{\\frac{1}{a},\\; -\\frac{b}{a}} \\in \\operatorname{Aff}(\\mathbb{R})$$
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 17: BẢNG TỔNG HỢP GIÁO TRÌNH - CÁC HỌ NHÓM CHUẨN MỰC
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:22px 30px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(232,121,249,0.14), transparent 32%), linear-gradient(135deg, #130626, #2b1152 55%, #130626); border:1.5px solid rgba(192,132,252,0.48); color:#faf5ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              📊 BẢNG ĐỐI CHIẾU GIÁO TRÌNH
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.85rem, 2.4vw, 2.25rem);">Tổng Hợp Sáu Họ Nhóm Nền Tảng Trong Chương Trình</h2>
          </div>

          <div class="anim-card anim-d1" style="flex:1; display:flex; flex-direction:column; justify-content:center; overflow-x:auto;">
            <table style="width:100%; height:100%; border-collapse:collapse; font-size:clamp(1.0rem, 1.3vw, 1.18rem); background:rgba(28,10,54,0.85); border:1.5px solid rgba(192,132,252,0.5); border-radius:14px; overflow:hidden;">
              <thead>
                <tr style="background:rgba(168,85,247,0.32); color:#fde68a; text-align:left; font-size:clamp(1.04rem, 1.34vw, 1.22rem);">
                  <th style="padding:11px 14px; border-bottom:1.5px solid rgba(192,132,252,0.45);">Họ Nhóm</th>
                  <th style="padding:11px 14px; border-bottom:1.5px solid rgba(192,132,252,0.45);">Phép toán</th>
                  <th style="padding:11px 14px; border-bottom:1.5px solid rgba(192,132,252,0.45);">Cấp $|G|$</th>
                  <th style="padding:11px 14px; border-bottom:1.5px solid rgba(192,132,252,0.45);">Abel?</th>
                  <th style="padding:11px 14px; border-bottom:1.5px solid rgba(192,132,252,0.45);">Đơn vị $e$</th>
                  <th style="padding:11px 14px; border-bottom:1.5px solid rgba(192,132,252,0.45);">Nghịch đảo $a^{-1}$</th>
                </tr>
              </thead>
              <tbody style="color:#faf5ff; line-height:1.55;">
                <tr style="border-bottom:1px solid rgba(192,132,252,0.22);">
                  <td style="padding:10px 14px; font-weight:800; color:#e9d5ff;">$(\\mathbb{Z}, +)$</td>
                  <td style="padding:10px 14px;">Cộng số nguyên</td>
                  <td style="padding:10px 14px;">$\\infty$</td>
                  <td style="padding:10px 14px; color:#6ee7b7; font-weight:700;">✔ Có</td>
                  <td style="padding:10px 14px;">$0$</td>
                  <td style="padding:10px 14px;">$-a$</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(192,132,252,0.22);">
                  <td style="padding:10px 14px; font-weight:800; color:#7dd3fc;">$(\\mathbb{Z}/n\\mathbb{Z}, +)$</td>
                  <td style="padding:10px 14px;">Cộng modulo $n$</td>
                  <td style="padding:10px 14px;">$n$</td>
                  <td style="padding:10px 14px; color:#6ee7b7; font-weight:700;">✔ Có</td>
                  <td style="padding:10px 14px;">$[0]_n$</td>
                  <td style="padding:10px 14px;">$-[a]_n = [n - a]_n$</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(192,132,252,0.22);">
                  <td style="padding:10px 14px; font-weight:800; color:#fbbf24;">$(U(n), \\cdot)$</td>
                  <td style="padding:10px 14px;">Nhân modulo $n$</td>
                  <td style="padding:10px 14px;">$\\varphi(n)$</td>
                  <td style="padding:10px 14px; color:#6ee7b7; font-weight:700;">✔ Có</td>
                  <td style="padding:10px 14px;">$[1]_n$</td>
                  <td style="padding:10px 14px;">$[u]_n$ (từ Bézout $ua+vn=1$)</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(192,132,252,0.22);">
                  <td style="padding:10px 14px; font-weight:800; color:#f472b6;">$S_n\\; (n \\ge 3)$</td>
                  <td style="padding:10px 14px;">Hợp thành hoán vị</td>
                  <td style="padding:10px 14px;">$n!$</td>
                  <td style="padding:10px 14px; color:#fda4af; font-weight:700;">✖ Không</td>
                  <td style="padding:10px 14px;">$\\operatorname{id}$</td>
                  <td style="padding:10px 14px;">Đảo chiều mũi tên chu trình</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(192,132,252,0.22);">
                  <td style="padding:10px 14px; font-weight:800; color:#c084fc;">$\\operatorname{GL}_n(\\mathbb{R})\\; (n \\ge 2)$</td>
                  <td style="padding:10px 14px;">Nhân ma trận</td>
                  <td style="padding:10px 14px;">$\\infty$</td>
                  <td style="padding:10px 14px; color:#fda4af; font-weight:700;">✖ Không</td>
                  <td style="padding:10px 14px;">$I_n$</td>
                  <td style="padding:10px 14px;">$A^{-1} = \\dfrac{1}{\\det A}\\operatorname{adj}(A)$</td>
                </tr>
                <tr>
                  <td style="padding:10px 14px; font-weight:800; color:#fde68a;">$\\operatorname{Aff}(\\mathbb{R})$</td>
                  <td style="padding:10px 14px;">Hợp thành hàm $T_{a,b}$</td>
                  <td style="padding:10px 14px;">$\\infty$</td>
                  <td style="padding:10px 14px; color:#fda4af; font-weight:700;">✖ Không</td>
                  <td style="padding:10px 14px;">$T_{1,0}$</td>
                  <td style="padding:10px 14px;">$T_{1/a,\\; -b/a}$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 18: TỔNG KẾT CHƯƠNG 1 & CẦU NỐI SANG CHƯƠNG 2
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(232,121,249,0.14), transparent 32%), linear-gradient(135deg, #130626, #2b1152 55%, #130626); border:1.5px solid rgba(192,132,252,0.48); color:#faf5ff;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(168,85,247,0.24); border:1.5px solid #c084fc; border-radius:999px; color:#e9d5ff; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              🎯 TỔNG KẾT CHƯƠNG 1
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Bản Đồ Bốn Trụ Cột Cốt Lõi &amp; Cầu Nối Chương 2</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:16px; margin:0;">
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border-left:5px solid #c084fc!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#e9d5ff; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">1) Thang bậc 4 cấu trúc đại số</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#faf5ff; margin-top:6px;">
                - Nửa nhóm (Đóng + Kết hợp) $\\to$ Vị nhóm (+ Đơn vị $e$) $\\to$ Nhóm (+ Nghịch đảo $a^{-1}$ cho mọi phần tử) $\\to$ Nhóm Abel (+ Giao hoán).
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border-left:5px solid #fbbf24!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fbbf24; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">2) Quy tắc tính toán &amp; Luật giản ước</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#faf5ff; margin-top:6px;">
                - Giản ước hai phía; nghiệm duy nhất $ax=b \\iff x=a^{-1}b$ và $ya=b \\iff y=ba^{-1}$.<br>
                - Đảo thứ tự nghịch đảo: $(ab)^{-1} = b^{-1}a^{-1}$; Abel $\\iff (ab)^2 = a^2b^2$.
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border-left:5px solid #38bdf8!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#7dd3fc; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">3) Bảng Cayley &amp; Hình vuông Latinh</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#faf5ff; margin-top:6px;">
                - Ô hàng $x$, cột $y$ ghi tích $xy$; mỗi hàng/cột chứa mỗi phần tử đúng 1 lần.<br>
                - Nhóm giao hoán khi và chỉ khi bảng đối xứng qua đường chéo chính.
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,10,54,0.78)!important; border-left:5px solid #f472b6!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#f472b6; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">4) Quy ước sống còn trong các họ nhóm</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#faf5ff; margin-top:6px;">
                - Nhóm Abel chuẩn: $(\\mathbb{Z}, +)$, $(\\mathbb{Z}/n\\mathbb{Z}, +)$, $U(n)$, $V_4$.<br>
                - Nhóm không Abel: $S_n (n \\ge 3)$, $\\operatorname{GL}_n(\\mathbb{R})$, $\\operatorname{Aff}(\\mathbb{R})$ (luôn đọc từ phải sang trái).
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(28,10,54,0.92)!important; border:1.5px solid #fbbf24!important; color:#fef3c7!important; font-size:clamp(1.06rem, 1.36vw, 1.22rem); text-align:center; line-height:1.55;">
            <b>🚀 Tiếp nối Chương 2 (Nhóm Con &amp; Nhóm Cyclic):</b> Khi trích ra một tập con $H \\subseteq G$, làm sao nhận diện nhanh $H$ tự lập thành nhóm chỉ bằng 1 phép thử $xy^{-1} \\in H$, và khám phá cấu trúc kỳ diệu sinh bởi một phần tử $\\langle a \\rangle$?
          </div>
        </div>
      `
    }
  ],
  "2": [
    // ========================================================
    // SLIDE 1: TRANG BÌA CĂN GIỮA - RỪNG NGỌC BÍCH & SINH VẬT RỪNG PHÁT SÁNG
    // ========================================================
    {
      html: `
        <div style="position: relative; width: 100%; height: 100%; min-height: 100%; display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center; padding: 26px 34px 22px; box-sizing: border-box; overflow: hidden; border-radius: 16px; background: radial-gradient(circle at 50% 18%, rgba(110, 231, 183, 0.22), transparent 45%), radial-gradient(ellipse at 15% 88%, rgba(16, 185, 129, 0.32), transparent 42%), radial-gradient(ellipse at 85% 85%, rgba(251, 191, 36, 0.18), transparent 38%), linear-gradient(160deg, #02120f 0%, #052e26 48%, #074236 78%, #021410 100%); border: 1.5px solid rgba(52, 211, 153, 0.55); color: #ecfdf5; box-shadow: 0 18px 45px rgba(2, 20, 16, 0.65);">
          
          <!-- VECTOR SVG NỀN: HỆ SINH THÁI RỪNG NGỌC BÍCH & SINH VẬT RỪNG PHÁT SÁNG -->
          <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0;">
            <defs>
              <radialGradient id="c2MoonGlow" cx="50%" cy="32%" r="42%">
                <stop offset="0%" stop-color="#a7f3d0" stop-opacity="0.32"/>
                <stop offset="45%" stop-color="#10b981" stop-opacity="0.12"/>
                <stop offset="100%" stop-color="#02120f" stop-opacity="0"/>
              </radialGradient>
              <linearGradient id="c2MistWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#34d399" stop-opacity="0.05"/>
                <stop offset="50%" stop-color="#ecfdf5" stop-opacity="0.28"/>
                <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
              </linearGradient>
              <linearGradient id="c2HillFar" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#0d5c4b" stop-opacity="0.55"/>
                <stop offset="100%" stop-color="#031c17" stop-opacity="0.9"/>
              </linearGradient>
              <linearGradient id="c2HillNear" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#063b30" stop-opacity="0.88"/>
                <stop offset="100%" stop-color="#010e0b" stop-opacity="0.98"/>
              </linearGradient>
              <linearGradient id="stagBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ecfdf5" stop-opacity="0.95"/>
                <stop offset="55%" stop-color="#6ee7b7" stop-opacity="0.82"/>
                <stop offset="100%" stop-color="#059669" stop-opacity="0.45"/>
              </linearGradient>
              <linearGradient id="foxGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#fde68a" stop-opacity="0.92"/>
                <stop offset="60%" stop-color="#f59e0b" stop-opacity="0.75"/>
                <stop offset="100%" stop-color="#34d399" stop-opacity="0.4"/>
              </linearGradient>
              <linearGradient id="butterflyEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#a7f3d0" stop-opacity="0.95"/>
                <stop offset="60%" stop-color="#10b981" stop-opacity="0.8"/>
                <stop offset="100%" stop-color="#047857" stop-opacity="0.4"/>
              </linearGradient>
              <linearGradient id="butterflyGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#fef3c7" stop-opacity="0.95"/>
                <stop offset="60%" stop-color="#fbbf24" stop-opacity="0.85"/>
                <stop offset="100%" stop-color="#d97706" stop-opacity="0.4"/>
              </linearGradient>
            </defs>

            <!-- Quầng sáng vòng sinh trưởng thần mộc ở trung tâm -->
            <circle cx="500" cy="240" r="320" fill="url(#c2MoonGlow)"/>
            <g transform="translate(500, 250)" opacity="0.32">
              <circle r="235" fill="none" stroke="#34d399" stroke-width="1.2" stroke-dasharray="10 7"/>
              <circle r="190" fill="none" stroke="#6ee7b7" stroke-width="1.5" opacity="0.7"/>
              <circle r="145" fill="none" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5 6" opacity="0.75"/>
              <circle r="102" fill="none" stroke="#a7f3d0" stroke-width="1.8" opacity="0.6"/>
            </g>

            <!-- Dây leo phát sáng rủ từ tán rừng phía trên -->
            <g stroke="#34d399" stroke-width="1.4" fill="none" opacity="0.45">
              <path d="M70,0 Q62,65 74,125"/>
              <path d="M135,0 Q145,48 132,95"/>
              <path d="M865,0 Q855,60 868,118"/>
              <path d="M930,0 Q940,50 926,105"/>
            </g>
            <g fill="#a7f3d0" opacity="0.75">
              <circle cx="74" cy="125" r="3.5"/><circle cx="70" cy="85" r="2.5"/>
              <circle cx="132" cy="95" r="3"/><circle cx="868" cy="118" r="3.5"/>
              <circle cx="862" cy="75" r="2.5"/><circle cx="926" cy="105" r="3"/>
            </g>

            <!-- Núi rừng trùng điệp phía xa & sương mù -->
            <path d="M0,385 Q160,295 340,355 T680,325 T1000,370 L1000,600 L0,600 Z" fill="url(#c2HillFar)"/>
            <path d="M30,360 Q220,320 420,360 T820,345" fill="none" stroke="url(#c2MistWave)" stroke-width="10" opacity="0.65"/>

            <!-- Tán cây cổ thụ khổng lồ hai bên khung hình -->
            <g fill="#064e3b" opacity="0.65">
              <!-- Cụm thông cổ thụ bên trái -->
              <polygon points="55,220 10,365 100,365"/>
              <polygon points="55,165 18,285 92,285"/>
              <polygon points="55,115 26,215 84,215"/>
              <polygon points="125,265 85,395 165,395"/>
              <polygon points="125,210 92,315 158,315"/>
              <!-- Cụm thông cổ thụ bên phải -->
              <polygon points="945,215 900,365 990,365"/>
              <polygon points="945,160 908,280 982,280"/>
              <polygon points="945,110 916,210 974,210"/>
              <polygon points="875,260 835,395 915,395"/>
              <polygon points="875,205 842,310 908,310"/>
            </g>

            <!-- Tầng địa hình rừng gần -->
            <path d="M0,445 Q230,375 470,435 T830,400 T1000,440 L1000,600 L0,600 Z" fill="url(#c2HillNear)"/>

            <!-- SINH VẬT RỪNG 1: HƯƠU THẦN LINH MỘC PHÁT SÁNG (BÊN TRÁI) -->
            <g transform="translate(175, 398) scale(0.88)" filter="drop-shadow(0 0 14px rgba(52, 211, 153, 0.65))">
              <!-- Thân, cổ và chân hươu thần -->
              <path d="M-28,0 L-34,46 M-12,2 L-14,48 M18,0 L15,48 M32,-2 L38,45" stroke="#a7f3d0" stroke-width="3.2" stroke-linecap="round"/>
              <path d="M-35,-2 C-35,-16 -10,-22 22,-18 C34,-16 40,-6 34,4 C15,8 -15,8 -35,-2 Z" fill="url(#stagBodyGrad)"/>
              <path d="M20,-14 C26,-32 32,-52 38,-66 C44,-68 54,-64 56,-58 C48,-50 40,-30 34,-6 Z" fill="url(#stagBodyGrad)"/>
              <!-- Đuôi phát sáng -->
              <path d="M-35,-6 Q-48,-12 -44,4" fill="none" stroke="#6ee7b7" stroke-width="3" stroke-linecap="round"/>
              <!-- Sừng hươu phân nhánh như cây mạng lưới nhóm con (Subgroup Lattice Antlers) -->
              <g stroke="#fbbf24" stroke-width="2.2" fill="none" stroke-linecap="round">
                <path d="M40,-66 C34,-86 20,-102 6,-112"/>
                <path d="M28,-88 L14,-92 M22,-98 L26,-114"/>
                <path d="M43,-66 C50,-88 64,-102 78,-110"/>
                <path d="M55,-86 L70,-88 M62,-96 L60,-112"/>
              </g>
              <!-- Các hạt ngọc sáng trên đầu nhánh sừng -->
              <g fill="#fef08a">
                <circle cx="6" cy="-112" r="3"/><circle cx="14" cy="-92" r="2.5"/><circle cx="26" cy="-114" r="2.8"/>
                <circle cx="78" cy="-110" r="3"/><circle cx="70" cy="-88" r="2.5"/><circle cx="60" cy="-112" r="2.8"/>
              </g>
            </g>

            <!-- SINH VẬT RỪNG 2: CÁO NGỌC BÍCH PHÁT SÁNG (BÊN PHẢI) -->
            <g transform="translate(815, 422) scale(0.85)" filter="drop-shadow(0 0 12px rgba(251, 191, 36, 0.55))">
              <!-- Đuôi cáo lớn phát sáng lượn sóng -->
              <path d="M18,6 C48,-8 72,4 64,22 C52,34 26,24 14,14 Z" fill="url(#foxGrad)"/>
              <!-- Thân và đầu cáo -->
              <path d="M-22,12 C-12,-4 10,-4 20,10 C10,18 -10,18 -22,12 Z" fill="url(#foxGrad)"/>
              <path d="M-18,8 L-28,-10 L-16,-6 L-8,-14 L-6,4 Z" fill="#fde68a"/>
              <path d="M-18,14 L-22,34 M-8,15 L-10,35 M10,14 L12,34 M18,12 L22,32" stroke="#fde68a" stroke-width="2.6" stroke-linecap="round"/>
            </g>

            <!-- SINH VẬT RỪNG 3: ĐÀN BƯỚM NGỌC & CHIM RỪNG BAY LƯỢN -->
            <!-- Bướm ngọc 1 (Trái trên) -->
            <g transform="translate(220, 145) rotate(-18) scale(0.9)" filter="drop-shadow(0 0 10px rgba(52, 211, 153, 0.7))">
              <path d="M0,0 C-18,-22 -36,-14 -26,4 C-34,16 -16,26 0,8 C16,26 34,16 26,4 C36,-14 18,-22 0,0 Z" fill="url(#butterflyEmerald)"/>
              <line x1="0" y1="-8" x2="0" y2="12" stroke="#ffffff" stroke-width="1.8"/>
            </g>
            <!-- Bướm hoàng kim 2 (Phải trên) -->
            <g transform="translate(785, 135) rotate(22) scale(0.82)" filter="drop-shadow(0 0 10px rgba(251, 191, 36, 0.7))">
              <path d="M0,0 C-18,-22 -36,-14 -26,4 C-34,16 -16,26 0,8 C16,26 34,16 26,4 C36,-14 18,-22 0,0 Z" fill="url(#butterflyGold)"/>
              <line x1="0" y1="-8" x2="0" y2="12" stroke="#ffffff" stroke-width="1.8"/>
            </g>
            <!-- Bướm ngọc 3 (Phải giữa) -->
            <g transform="translate(865, 240) rotate(-12) scale(0.62)" filter="drop-shadow(0 0 8px rgba(52, 211, 153, 0.65))">
              <path d="M0,0 C-18,-22 -36,-14 -26,4 C-34,16 -16,26 0,8 C16,26 34,16 26,4 C36,-14 18,-22 0,0 Z" fill="url(#butterflyEmerald)"/>
            </g>
            <!-- Đàn chim hạc phát sáng bay qua sương mù -->
            <g stroke="#a7f3d0" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.75">
              <path d="M310,95 Q322,82 332,92 Q342,82 354,95"/>
              <path d="M355,75 Q364,65 372,73 Q380,65 389,75"/>
              <path d="M645,82 Q655,70 664,79 Q673,70 683,82"/>
            </g>

            <!-- SINH VẬT RỪNG 4: QUẦN THỂ NẤM SINH HỌC PHÁT QUANG & ĐOM ĐÓM -->
            <g transform="translate(78, 465)" filter="drop-shadow(0 0 10px rgba(52, 211, 153, 0.6))">
              <path d="M0,0 L0,24 M18,6 L16,26 M-14,10 L-12,26" stroke="#a7f3d0" stroke-width="3" stroke-linecap="round"/>
              <path d="M-16,2 C-16,-12 16,-12 16,2 Z" fill="#34d399"/>
              <path d="M6,8 C6,-2 28,-2 28,8 Z" fill="#6ee7b7"/>
              <path d="M-24,12 C-24,4 -4,4 -4,12 Z" fill="#fbbf24"/>
            </g>
            <g transform="translate(918, 468)" filter="drop-shadow(0 0 10px rgba(52, 211, 153, 0.6))">
              <path d="M0,0 L0,24 M-18,6 L-16,26" stroke="#a7f3d0" stroke-width="3" stroke-linecap="round"/>
              <path d="M-16,2 C-16,-12 16,-12 16,2 Z" fill="#34d399"/>
              <path d="M-28,8 C-28,-2 -6,-2 -6,8 Z" fill="#fbbf24"/>
            </g>

            <!-- Đom đóm rừng phát sáng lấp lánh khắp không gian -->
            <g fill="#fde68a" opacity="0.88">
              <circle cx="140" cy="240" r="3"/><circle cx="260" cy="310" r="2.5"/><circle cx="390" cy="180" r="2.2"/>
              <circle cx="620" cy="175" r="2.5"/><circle cx="735" cy="295" r="3"/><circle cx="845" cy="195" r="2.5"/>
              <circle cx="480" cy="430" r="2.8"/><circle cx="550" cy="410" r="2.2"/><circle cx="310" cy="425" r="2.6"/>
            </g>
            <g fill="#6ee7b7" opacity="0.8">
              <circle cx="190" cy="195" r="2.5"/><circle cx="295" cy="255" r="3"/><circle cx="695" cy="220" r="2.8"/>
              <circle cx="775" cy="345" r="2.4"/><circle cx="420" cy="395" r="2.5"/><circle cx="615" cy="415" r="3"/>
            </g>
          </svg>

          <!-- TIÊU ĐỀ SLIDE (CĂN GIỮA, CỠ CHỮ LỚN NỔI BẬT) -->
          <div class="anim-title" style="position: relative; z-index: 2; max-width: 900px;">
            <div style="display: inline-flex; align-items: center; gap: 10px; padding: 6px 22px; background: rgba(4, 38, 32, 0.82); border: 1.5px solid rgba(52, 211, 153, 0.6); border-radius: 999px; font-size: clamp(0.92rem, 1.2vw, 1.08rem); font-weight: 800; color: #6ee7b7; letter-spacing: 1.2px; margin-bottom: 12px; backdrop-filter: blur(10px); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);">
              <span>🌲</span> CẤU TRÚC ĐẠI SỐ — CHƯƠNG 2
            </div>
            <h1 style="font-size: clamp(2.6rem, 4.2vw, 3.5rem); font-weight: 800; color: #ffffff; margin: 0 0 8px; line-height: 1.18; letter-spacing: -0.5px; text-shadow: 0 4px 28px rgba(0, 0, 0, 0.75);">
              Nhóm Con &amp; <span style="color: #fbbf24;">Nhóm Cyclic</span>
            </h1>
            <p style="font-size: clamp(1.1rem, 1.45vw, 1.3rem); color: #a7f3d0; margin: 0; font-weight: 600; text-shadow: 0 2px 10px rgba(0,0,0,0.6);">
              Giáo trình Cấu trúc Đại số · TS. Huỳnh Việt Khánh
            </p>
          </div>

          <!-- TÂM ĐIỂM: KHỐI CÂU HỎI TRIẾT HỌC TRUNG TÂM -->
          <div class="slide-glass-card anim-card anim-d1" style="position: relative; z-index: 2; max-width: 880px; width: 100%; padding: 26px 38px; margin: 12px 0; background: rgba(4, 38, 32, 0.80) !important; border: 1.5px solid rgba(52, 211, 153, 0.55) !important; border-radius: 18px; backdrop-filter: blur(20px); box-shadow: 0 20px 50px rgba(2, 20, 16, 0.82), inset 0 1px 0 rgba(255, 255, 255, 0.18); text-align: center;">
            <div style="font-size: clamp(0.98rem, 1.25vw, 1.12rem); font-weight: 800; color: #fbbf24; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">
              ✦ Câu Hỏi Trung Tâm Của Chương ✦
            </div>
            <p style="font-size: clamp(1.28rem, 1.75vw, 1.52rem); line-height: 1.62; color: #ffffff; margin: 0; font-weight: 500;">
              Khi nào một tập hợp con $H \\subseteq G$ tự mang đầy đủ cấu trúc của một <b style="color: #6ee7b7;">thế giới nhóm độc lập</b>, và làm thế nào việc lặp đi lặp lại một phần tử duy nhất $\\langle a \\rangle$ lại sinh ra được những chu kỳ đại số hoàn mỹ?
            </p>
          </div>

          <!-- ĐÁY SLIDE: THANH 4 TRỤ CỘT KIẾN THỨC (KHÔNG THANH CUỘN) -->
          <div class="anim-card anim-d2" style="position: relative; z-index: 2; display: flex; flex-wrap: nowrap; justify-content: space-between; align-items: center; gap: 6px; width: 100%; max-width: 960px; padding: 8px 14px; box-sizing: border-box; background: rgba(4, 38, 32, 0.85); border: 1.5px solid rgba(52, 211, 153, 0.42); border-radius: 999px; backdrop-filter: blur(12px); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45); overflow: hidden;">
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(16, 185, 129, 0.22); border: 1px solid rgba(52, 211, 153, 0.45); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #6ee7b7; white-space: nowrap;">
              1. Tiêu Chuẩn Nhóm Con
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(56, 189, 248, 0.2); border: 1px solid rgba(56, 189, 248, 0.4); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #7dd3fc; white-space: nowrap;">
              2. Giao, Hợp &amp; Tập Sinh $\\langle S \\rangle$
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(251, 191, 36, 0.2); border: 1px solid rgba(251, 191, 36, 0.45); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #fde68a; white-space: nowrap;">
              3. Cấp Phần Tử $\\operatorname{ord}(a)$
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(16, 185, 129, 0.22); border: 1px solid rgba(52, 211, 153, 0.45); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #a7f3d0; white-space: nowrap;">
              4. Phân Loại Nhóm Cyclic
            </span>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 2: ĐỘNG CƠ TRỰC QUAN - TỪ TẬP CON ĐẾN NHÓM CON
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(16,185,129,0.22); border:1.5px solid #10b981; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🌱 TRỰC QUAN KHỞI NGUỒN
            </span>
            <h2 style="color:#ffffff; margin:0 0 10px; font-size:clamp(1.9rem, 2.5vw, 2.35rem); line-height:1.22;">Khi Nào Một Tập Con Tự Lập Thành Một Nhóm?</h2>
            <p style="color:#d1fae5; font-size:clamp(1.15rem, 1.48vw, 1.32rem); line-height:1.6; margin:0;">
              Bên trong một nhóm mẹ $G$, có những tập hợp con tự vận hành trơn tru như một nhóm hoàn chỉnh, nhưng cũng có những tập hợp con bị "vỡ cấu trúc" ngay khi thực hiện phép toán:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Trong nhóm cộng số nguyên (Z, +) -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; border-left:5px solid #10b981!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.22rem, 1.6vw, 1.42rem); display:block; margin-bottom:12px;">1) Trong Nhóm Cộng Số Nguyên $(\\mathbb{Z}, +)$:</b>
              <div style="font-size:clamp(1.12rem, 1.42vw, 1.28rem); line-height:1.72; color:#ecfdf5;">
                - <b style="color:#a7f3d0;">Tập số chẵn $2\\mathbb{Z}$ (Thành công):</b><br>
                &nbsp;&nbsp;+ Tổng hai số chẵn luôn là số chẵn (đóng).<br>
                &nbsp;&nbsp;+ Chứa đơn vị $0$, và mọi số chẵn $2m$ đều có số đối $-2m \\in 2\\mathbb{Z}$.<br>
                - <b style="color:#fda4af;">Tập số tự nhiên $\\mathbb{N}$ (Thất bại):</b><br>
                &nbsp;&nbsp;+ Dù chứa $0$ và đóng với phép cộng, nhưng thiếu toàn bộ số đối của các số nguyên dương ($-1, -2 \\notin \\mathbb{N}$).
              </div>
            </div>

            <!-- Cột 2: Trong nhóm đồng hồ (Z/12Z, +) -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; border-left:5px solid #fbbf24!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.22rem, 1.6vw, 1.42rem); display:block; margin-bottom:12px;">2) Trong Nhóm Đồng Hồ $(\\mathbb{Z}/12\\mathbb{Z}, +)$:</b>
              <div style="font-size:clamp(1.12rem, 1.42vw, 1.28rem); line-height:1.72; color:#ecfdf5;">
                - <b style="color:#fde68a;">Tập $H = \\{[0], [4], [8]\\}$ (Thành công):</b><br>
                &nbsp;&nbsp;+ Cộng hai phần tử bất kỳ vẫn rơi vào $H$.<br>
                &nbsp;&nbsp;+ Chứa $[0]$, và phần tử đối của $[4]$ là $[8] \\in H$.<br>
                - <b style="color:#fda4af;">Tập $K = \\{[0], [4]\\}$ (Thất bại):</b><br>
                &nbsp;&nbsp;+ Bị văng ra ngoài biên giới ngay khi lấy $[4] + [4] = [8] \\notin K$ (vi phạm tính đóng).
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 3: LÝ THUYẾT - ĐỊNH NGHĨA NHÓM CON
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(16,185,129,0.22); border:1.5px solid #10b981; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 ĐỊNH NGHĨA
            </span>
            <h2 style="color:#ffffff; margin:0 0 10px; font-size:clamp(1.95rem, 2.55vw, 2.38rem); line-height:1.2;">Khái Niệm Nhóm Con (Subgroup)</h2>
            <p style="color:#d1fae5; font-size:clamp(1.16rem, 1.5vw, 1.34rem); line-height:1.62; margin:0;">
              Cho $(G, *)$ là một nhóm và tập hợp con $H \\subseteq G$. Cấu trúc $H$ được gọi là một <b>nhóm con</b> của $G$, ký hiệu <b style="color:#fbbf24;">$H \\le G$</b> (hoặc $H &lt; G$ nếu $H \\neq G$), nếu bản thân $(H, *)$ lập thành một nhóm dưới phép toán thu hẹp từ $G$:
            </p>
          </div>

          <!-- 4 điều kiện đánh số (i), (ii), (iii), (iv) -->
          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.48)!important; padding:22px 26px; border-radius:14px;">
              <div style="font-size:clamp(1.16rem, 1.52vw, 1.34rem); line-height:1.85; color:#ecfdf5;">
                <b style="color:#6ee7b7;">(i) Khác rỗng:</b> $H \\neq \\emptyset$.<br>
                <b style="color:#6ee7b7;">(ii) Tính đóng:</b> Với mọi $x, y \\in H$, ta có $x * y \\in H$.
              </div>
            </div>
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.48)!important; padding:22px 26px; border-radius:14px;">
              <div style="font-size:clamp(1.16rem, 1.52vw, 1.34rem); line-height:1.85; color:#ecfdf5;">
                <b style="color:#fbbf24;">(iii) Chứa đơn vị:</b> Phần tử đơn vị $e$ của $G$ thuộc $H$ ($e \\in H$).<br>
                <b style="color:#fbbf24;">(iv) Chứa nghịch đảo:</b> Với mọi $x \\in H$, ta có $x^{-1} \\in H$.
              </div>
            </div>
          </div>

          <!-- Phát hiện / Điểm cần cân nhắc -->
          <div class="slide-glass-card anim-card anim-d2" style="padding:18px 24px; background:rgba(4,38,32,0.9)!important; border:1.5px solid #fbbf24!important; border-left:6px solid #fbbf24!important; border-radius:14px;">
            <div style="color:#fbbf24; font-weight:800; font-size:clamp(1.15rem, 1.48vw, 1.3rem); margin-bottom:6px;">
              ✨ Điểm cốt lõi cần lưu tâm ở Định nghĩa:
            </div>
            <div style="color:#fef3c7; font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.68;">
              - <b>Không cần kiểm tra lại tính kết hợp:</b> Vì $H \\subseteq G$, đẳng thức $(x*y)*z = x*(y*z)$ đúng trên toàn bộ $G$ nên tự động đúng trên $H$.<br>
              - <b>Đơn vị bắt buộc trùng nhau ($e_H = e_G$):</b> Nếu $e_H \\in H$ thỏa $e_H * e_H = e_H = e_H * e_G$ trong $G$, luật giản ước của $G$ ép $e_H = e_G$.
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 4: VÍ DỤ SOI SÁNG CHO SLIDE 3 (KIỂM TRA NHÓM CON THEO ĐỊNH NGHĨA)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(52,211,153,0.22); border:1.5px solid #34d399; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Kiểm Định Nhóm Con Theo Bốn Điều Kiện Định Nghĩa</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Ví dụ 1: 2Z <= Z -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.2rem, 1.55vw, 1.38rem);">Ví dụ 1: Tập số nguyên chẵn $2\\mathbb{Z} \\le (\\mathbb{Z}, +)$</b>
              <div class="slide-math-display" style="background:rgba(3,26,22,0.9); border-color:#10b981; font-size:clamp(1.22rem, 1.6vw, 1.42rem); padding:12px; margin:14px 0;">
                $$2\\mathbb{Z} = \\{2k \\mid k \\in \\mathbb{Z}\\}$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#ecfdf5;">
                - <b>(i) Khác rỗng &amp; (iii) Đơn vị:</b> Ta có $0 = 2 \\cdot 0 \\in 2\\mathbb{Z}$.<br>
                - <b>(ii) Tính đóng:</b> Với $2m, 2n \\in 2\\mathbb{Z}$, tổng là:<br>
                &nbsp;&nbsp;+ $2m + 2n = 2(m + n) \\in 2\\mathbb{Z}$ (do $m + n \\in \\mathbb{Z}$).<br>
                - <b>(iv) Phần tử đối:</b> Với mọi $2m \\in 2\\mathbb{Z}$, số đối là:<br>
                &nbsp;&nbsp;+ $-(2m) = 2(-m) \\in 2\\mathbb{Z}$.<br>
                $\\implies 2\\mathbb{Z}$ là một nhóm con thực sự của $\\mathbb{Z}$ ($2\\mathbb{Z} &lt; \\mathbb{Z}$).
              </div>
            </div>

            <!-- Ví dụ 2: Nhóm tuyến tính đặc biệt SL2(R) -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.2rem, 1.55vw, 1.38rem);">Ví dụ 2: Nhóm ma trận $\\operatorname{SL}_2(\\mathbb{R}) \\le \\operatorname{GL}_2(\\mathbb{R})$</b>
              <div class="slide-math-display" style="background:rgba(3,26,22,0.9); border-color:#fbbf24; font-size:clamp(1.22rem, 1.6vw, 1.42rem); padding:12px; margin:14px 0; color:#fde68a;">
                $$\\operatorname{SL}_2(\\mathbb{R}) = \\{A \\in \\operatorname{GL}_2(\\mathbb{R}) \\mid \\det(A) = 1\\}$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#ecfdf5;">
                - <b>(i) &amp; (iii) Đơn vị:</b> Ma trận đơn vị $I_2$ có $\\det(I_2) = 1 \\implies I_2 \\in \\operatorname{SL}_2(\\mathbb{R})$.<br>
                - <b>(ii) Tính đóng:</b> Với $A, B \\in \\operatorname{SL}_2(\\mathbb{R})$:<br>
                &nbsp;&nbsp;+ $\\det(AB) = \\det(A)\\det(B) = 1 \\cdot 1 = 1 \\implies AB \\in \\operatorname{SL}_2(\\mathbb{R})$.<br>
                - <b>(iv) Nghịch đảo:</b> Với $A \\in \\operatorname{SL}_2(\\mathbb{R})$:<br>
                &nbsp;&nbsp;+ $\\det(A^{-1}) = (\\det A)^{-1} = 1^{-1} = 1 \\implies A^{-1} \\in \\operatorname{SL}_2(\\mathbb{R})$.
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 5: LÝ THUYẾT - TIÊU CHUẨN NHÓM CON RÚT GỌN (1 BƯỚC)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Tiêu Chuẩn Nhóm Con Rút Gọn (Một Bước)</h2>
            <p style="color:#d1fae5; font-size:clamp(1.15rem, 1.48vw, 1.32rem); line-height:1.58; margin:0;">
              Cho $G$ là một nhóm và tập con $H \\subseteq G$. Khi đó $H \\le G$ khi và chỉ khi thỏa mãn đồng thời 2 điều kiện:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(4,38,32,0.92); border:1.5px solid #fbbf24; color:#fde68a; font-size:clamp(1.28rem, 1.72vw, 1.52rem); padding:16px 24px; margin:0;">
            $$\\text{(i) } H \\neq \\emptyset \\qquad \\text{và} \\qquad \\text{(ii) } \\forall x, y \\in H \\implies xy^{-1} \\in H \\quad (\\text{Dạng cộng: } x - y \\in H)$$
          </div>

          <!-- Cơ chế 3 bước chứng minh -->
          <div class="slide-glass-card anim-card anim-d2" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
            <b style="color:#6ee7b7; font-size:clamp(1.2rem, 1.55vw, 1.38rem); display:block; margin-bottom:10px;">⚙️ Cơ chế tự sinh cả 3 tiên đề chỉ từ biểu thức gộp $xy^{-1} \\in H$:</b>
            <div style="font-size:clamp(1.12rem, 1.44vw, 1.28rem); line-height:1.78; color:#ecfdf5;">
              <b>1) Thu được đơn vị $e \\in H$:</b> Do $H \\neq \\emptyset$, lấy một phần tử $a \\in H$. Áp dụng (ii) cho cặp $(x, y) = (a, a)$, ta có $aa^{-1} = e \\in H$.<br>
              <b>2) Thu được nghịch đảo $y^{-1} \\in H$:</b> Với mọi $y \\in H$, áp dụng (ii) cho cặp $(e, y)$ (do $e, y \\in H$), ta có $ey^{-1} = y^{-1} \\in H$.<br>
              <b>3) Thu được tính đóng $xy \\in H$:</b> Với mọi $x, y \\in H$, vì $y^{-1} \\in H$ (theo bước 2), áp dụng (ii) cho cặp $(x, y^{-1})$ ta được $x(y^{-1})^{-1} = xy \\in H$. $\\blacksquare$
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 6: VÍ DỤ SOI SÁNG CHO SLIDE 5 (THỰC HÀNH TIÊU CHUẨN 1 BƯỚC)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(52,211,153,0.22); border:1.5px solid #34d399; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Thực Hành Tiêu Chuẩn Một Bước Trên Nhóm Cộng &amp; Nhóm Nhân</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Ví dụ 1: Ký hiệu cộng -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.2rem, 1.55vw, 1.38rem);">1) Trên Nhóm Cộng $(\\mathbb{Z}, +)$ — Dùng phép thử $x - y$</b>
              <p style="color:#d1fae5; font-size:clamp(1.08rem, 1.38vw, 1.22rem); margin:10px 0;">
                Chứng minh $H = n\\mathbb{Z} = \\{nk \\mid k \\in \\mathbb{Z}\\}$ là nhóm con của $(\\mathbb{Z}, +)$:
              </p>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.75; color:#ecfdf5; background:rgba(3,26,22,0.85); padding:16px 18px; border-radius:10px; border-left:4px solid #10b981;">
                - <b>Bước 1 (Khác rỗng):</b> Vì $0 = n \\cdot 0 \\in n\\mathbb{Z}$, nên $n\\mathbb{Z} \\neq \\emptyset$.<br>
                - <b>Bước 2 (Kiểm tra $x - y \\in H$):</b><br>
                &nbsp;&nbsp;+ Lấy tùy ý $x, y \\in n\\mathbb{Z} \\implies x = nk_1,\\; y = nk_2$ ($k_1, k_2 \\in \\mathbb{Z}$).<br>
                &nbsp;&nbsp;+ Xét hiệu: $x - y = n(k_1 - k_2) \\in n\\mathbb{Z}$ (do $k_1 - k_2 \\in \\mathbb{Z}$).<br>
                - <b>Kết luận:</b> Vậy $n\\mathbb{Z} \\le (\\mathbb{Z}, +)$. $\\blacksquare$
              </div>
            </div>

            <!-- Ví dụ 2: Ký hiệu nhân -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.2rem, 1.55vw, 1.38rem);">2) Trên Nhóm Nhân $(\\mathbb{Q}^*, \\cdot)$ — Dùng phép thử $xy^{-1}$</b>
              <p style="color:#d1fae5; font-size:clamp(1.08rem, 1.38vw, 1.22rem); margin:10px 0;">
                Chứng minh $H = \\mathbb{Q}_{&gt;0} = \\{x \\in \\mathbb{Q} \\mid x &gt; 0\\}$ là nhóm con của $(\\mathbb{Q}^*, \\cdot)$:
              </p>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.75; color:#ecfdf5; background:rgba(3,26,22,0.85); padding:16px 18px; border-radius:10px; border-left:4px solid #fbbf24;">
                - <b>Bước 1 (Khác rỗng):</b> Vì $1 &gt; 0$ nên $1 \\in \\mathbb{Q}_{&gt;0} \\implies \\mathbb{Q}_{&gt;0} \\neq \\emptyset$.<br>
                - <b>Bước 2 (Kiểm tra $xy^{-1} \\in H$):</b><br>
                &nbsp;&nbsp;+ Lấy tùy ý $x, y \\in \\mathbb{Q}_{&gt;0}$ ($x &gt; 0, y &gt; 0$).<br>
                &nbsp;&nbsp;+ Thương hai số hữu tỉ dương $xy^{-1} = \\dfrac{x}{y} &gt; 0 \\implies xy^{-1} \\in \\mathbb{Q}_{&gt;0}$.<br>
                - <b>Kết luận:</b> Vậy $\\mathbb{Q}_{&gt;0} \\le (\\mathbb{Q}^*, \\cdot)$. $\\blacksquare$
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 7: LÝ THUYẾT - TIÊU CHUẨN NHÓM CON HỮU HẠN
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Tiêu Chuẩn Nhóm Con Cho Tập Hợp Hữu Hạn</h2>
            <p style="color:#d1fae5; font-size:clamp(1.15rem, 1.48vw, 1.32rem); line-height:1.58; margin:0;">
              Nếu tập con $H \\subseteq G$ là một <b>tập hữu hạn</b> ($|H| &lt; \\infty$), ta không cần kiểm tra nghịch đảo mà chỉ cần kiểm tra <b>tính đóng</b>:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(4,38,32,0.92); border:1.5px solid #10b981; color:#fde68a; font-size:clamp(1.26rem, 1.7vw, 1.5rem); padding:16px 24px; margin:0;">
            $$\\text{Cho } H \\subseteq G \\text{ hữu hạn}: \\qquad H \\le G \\iff \\text{(i) } H \\neq \\emptyset \\quad \\text{và} \\quad \\text{(ii) } \\forall x, y \\in H \\implies xy \\in H$$
          </div>

          <!-- Giải thích cơ chế hoàn tác tự nhiên -->
          <div class="slide-glass-card anim-card anim-d2" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
            <b style="color:#6ee7b7; font-size:clamp(1.2rem, 1.55vw, 1.38rem); display:block; margin-bottom:10px;">🔄 Cơ chế tự sinh nghịch đảo nhờ tính hữu hạn (Nguyên lý Dirichlet):</b>
            <div style="font-size:clamp(1.12rem, 1.44vw, 1.28rem); line-height:1.76; color:#ecfdf5;">
              - Lấy $x \\in H$ bất kỳ. Do $H$ đóng với phép nhân nên toàn bộ dãy lũy thừa dương $x, x^2, x^3, \\dots$ đều nằm trong $H$.<br>
              - Vì $H$ chỉ có <b>hữu hạn phần tử</b>, dãy lũy thừa bắt buộc phải lặp lại: tồn tại $i &gt; j \\ge 1$ sao cho $x^i = x^j$.<br>
              - Áp dụng luật giản ước trong nhóm mẹ $G$: $x^{i - j} = e \\in H$ (đặt $m = i - j \\ge 1$).<br>
              - Từ $x \\cdot x^{m-1} = x^m = e$, suy ra ngay phần tử nghịch đảo $x^{-1} = x^{m-1} \\in H$! $\\blacksquare$
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 8: VÍ DỤ SOI SÁNG CHO SLIDE 7 (KIỂM ĐỊNH TẬP HỮU HẠN)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(52,211,153,0.22); border:1.5px solid #34d399; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Kiểm Định Nhanh Tập Con Hữu Hạn Trên $S_3$ và $\\mathbb{Z}/12\\mathbb{Z}$</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Ví dụ 1: Nhóm thay phiên A3 trong S3 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.2rem, 1.55vw, 1.38rem);">1) Trong Nhóm Đối Xứng $S_3$</b>
              <div class="slide-math-display" style="background:rgba(3,26,22,0.9); border-color:#10b981; font-size:clamp(1.2rem, 1.55vw, 1.4rem); padding:12px; margin:14px 0;">
                $$H = \\{e, (1\\,2\\,3), (1\\,3\\,2)\\}, \\quad |H| = 3 &lt; \\infty$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#ecfdf5;">
                - Tập $H$ hữu hạn và khác rỗng ($e \\in H$).<br>
                - Kiểm tra tính đóng của các tích:<br>
                &nbsp;&nbsp;+ $(1\\,2\\,3)^2 = (1\\,3\\,2) \\in H$ và $(1\\,3\\,2)^2 = (1\\,2\\,3) \\in H$.<br>
                &nbsp;&nbsp;+ $(1\\,2\\,3)(1\\,3\\,2) = (1\\,3\\,2)(1\\,2\\,3) = e \\in H$.<br>
                - Theo tiêu chuẩn tập hữu hạn, $H \\le S_3$ (nhóm thay phiên $A_3$).
              </div>
            </div>

            <!-- Ví dụ 2: Tập hữu hạn trong Z/12Z -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.2rem, 1.55vw, 1.38rem);">2) Trong Nhóm Cộng $(\\mathbb{Z}/12\\mathbb{Z}, +)$</b>
              <div class="slide-math-display" style="background:rgba(3,26,22,0.9); border-color:#fbbf24; font-size:clamp(1.2rem, 1.55vw, 1.4rem); padding:12px; margin:14px 0; color:#fde68a;">
                $$H = \\{[0], [4], [8]\\}, \\quad |H| = 3 &lt; \\infty$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#ecfdf5;">
                - Tập $H$ hữu hạn và khác rỗng ($[0] \\in H$).<br>
                - Kiểm tra tính đóng với phép cộng modulo $12$:<br>
                &nbsp;&nbsp;+ $[4] + [4] = [8] \\in H$; &nbsp; $[4] + [8] = [12] = [0] \\in H$.<br>
                &nbsp;&nbsp;+ $[8] + [8] = [16] = [4] \\in H$.<br>
                - Không cần tìm phần tử đối riêng lẻ, kết luận ngay $H \\le \\mathbb{Z}/12\\mathbb{Z}$!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 9: PHẢN VÍ DỤ & LƯU Ý CHO TIÊU CHUẨN NHÓM CON
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.22); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              ⚠️ PHẢN VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Tại Sao Tập Vô Hạn Chỉ Đóng Thì Chưa Đủ Là Nhóm Con?</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Bẫy 1: Tập vô hạn đóng nhưng không có nghịch đảo -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid #fb7185!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">❌ Phản ví dụ 1: Tập vô hạn $\\mathbb{N} \\subset (\\mathbb{Z}, +)$</b>
              <div class="slide-math-display" style="background:rgba(3,26,22,0.9); border-color:#fb7185; font-size:clamp(1.16rem, 1.5vw, 1.34rem); padding:10px; margin:12px 0; color:#fecdd3;">
                $$\\forall a, b \\in \\mathbb{N} \\implies a + b \\in \\mathbb{N} \\quad \\text{nhưng} \\quad \\mathbb{N} \\not\\le \\mathbb{Z}$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.68; color:#ecfdf5;">
                - <b>Nguyên nhân gãy đổ:</b> Vì $\\mathbb{N}$ là tập <b>vô hạn</b>, việc cộng liên tiếp $1 + 1 + 1 + \\dots$ tiến mãi ra vô cùng mà không bao giờ tạo thành chu kỳ quay về $0$.<br>
                - Hệ quả: Phép thử $x - y$ thất bại ($2 - 5 = -3 \\notin \\mathbb{N}$).
              </div>
            </div>

            <!-- Bẫy 2: Có nghịch đảo nhưng không đóng -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid #fbbf24!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">❌ Phản ví dụ 2: Tập $K = \\{e, (1\\,2), (1\\,3)\\} \\subset S_3$</b>
              <div class="slide-math-display" style="background:rgba(3,26,22,0.9); border-color:#fbbf24; font-size:clamp(1.16rem, 1.5vw, 1.34rem); padding:10px; margin:12px 0; color:#fde68a;">
                $$(1\\,2) \\cdot (1\\,3) = (1\\,3\\,2) \\notin K \\implies K \\not\\le S_3$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.68; color:#ecfdf5;">
                - <b>Nguyên nhân gãy đổ:</b> Dù $K$ chứa đơn vị $e$ và mọi phần tử trong $K$ đều tự nghịch đảo ($(1\\,2)^{-1}=(1\\,2) \\in K$), nhưng tích hai chuyển vị khác nhau lại sinh ra chu trình bậc 3 nằm ngoài $K$!
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:16px 22px; background:rgba(4,38,32,0.9)!important; border:1.5px solid #10b981!important; border-left:6px solid #10b981!important; color:#d1fae5!important; font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.6;">
            <b>⚡ Nguyên tắc thực hành:</b> Khi $H$ vô hạn hoặc chưa rõ lực lượng, bắt buộc phải kiểm tra $xy^{-1} \\in H$ (hoặc $x - y \\in H$). Chỉ khi biết chắc $|H| &lt; \\infty$ mới được dùng tính đóng $xy \\in H$.
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 10: LÝ THUYẾT - PHÉP GIAO CÁC NHÓM CON
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Giao Của Một Họ Bất Kỳ Các Nhóm Con</h2>
            <p style="color:#d1fae5; font-size:clamp(1.15rem, 1.48vw, 1.32rem); line-height:1.6; margin:0;">
              Cho $\\{H_i\\}_{i \\in I}$ là một họ tùy ý (hữu hạn hoặc vô hạn) các nhóm con của nhóm $G$. Khi đó giao của toàn bộ họ này luôn là một nhóm con của $G$:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(4,38,32,0.92); border:1.5px solid #10b981; color:#fde68a; font-size:clamp(1.32rem, 1.8vw, 1.6rem); padding:16px 24px; margin:0;">
            $$H = \\bigcap_{i \\in I} H_i \\le G$$
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
            <b style="color:#6ee7b7; font-size:clamp(1.2rem, 1.55vw, 1.38rem); display:block; margin-bottom:10px;">🔍 Chứng minh 3 bước bằng Tiêu chuẩn nhóm con rút gọn:</b>
            <div style="font-size:clamp(1.12rem, 1.44vw, 1.28rem); line-height:1.78; color:#ecfdf5;">
              <b>1) Kiểm tra khác rỗng:</b> Vì $H_i \\le G$ với mọi $i \\in I$, nên phần tử đơn vị $e \\in H_i$ với mọi $i \\in I$. Suy ra $e \\in \\bigcap_{i \\in I} H_i$, tức $H \\neq \\emptyset$.<br>
              <b>2) Kiểm tra phép thử $xy^{-1}$:</b> Lấy tùy ý $x, y \\in \\bigcap_{i \\in I} H_i$. Theo định nghĩa phép giao, $x, y \\in H_i$ với mọi $i \\in I$.<br>
              <b>3) Kết luận:</b> Do mỗi $H_i$ là một nhóm con của $G$, ta có $xy^{-1} \\in H_i$ với mọi $i \\in I \\implies xy^{-1} \\in \\bigcap_{i \\in I} H_i$. Vậy $\\bigcap_{i \\in I} H_i \\le G$. $\\blacksquare$
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 11: VÍ DỤ SOI SÁNG CHO SLIDE 10 (PHÉP GIAO NHÓM CON)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(52,211,153,0.22); border:1.5px solid #34d399; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Giao Của Các Nhóm Con Trên $(\\mathbb{Z}, +)$ và $\\mathbb{Z}/12\\mathbb{Z}$</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Ví dụ 1: Giao trong Z -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.2rem, 1.55vw, 1.38rem);">1) Giao Hai Nhóm Con Trong $(\\mathbb{Z}, +)$</b>
              <div class="slide-math-display" style="background:rgba(3,26,22,0.9); border-color:#10b981; font-size:clamp(1.22rem, 1.6vw, 1.42rem); padding:12px; margin:14px 0;">
                $$2\\mathbb{Z} \\cap 3\\mathbb{Z} = 6\\mathbb{Z} \\le \\mathbb{Z}$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#ecfdf5;">
                - Một số nguyên $k \\in 2\\mathbb{Z} \\cap 3\\mathbb{Z}$ khi và chỉ khi $k$ đồng thời chia hết cho cả $2$ và $3$.<br>
                - Theo tính chất số học, điều này tương đương với $\\operatorname{lcm}(2, 3) = 6 \\mid k$, tức $k \\in 6\\mathbb{Z}$.<br>
                - Tổng quát: $m\\mathbb{Z} \\cap n\\mathbb{Z} = \\operatorname{lcm}(m, n)\\mathbb{Z} \\le \\mathbb{Z}$.
              </div>
            </div>

            <!-- Ví dụ 2: Giao trong Z/12Z -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.2rem, 1.55vw, 1.38rem);">2) Giao Hai Nhóm Con Trong $(\\mathbb{Z}/12\\mathbb{Z}, +)$</b>
              <div class="slide-math-display" style="background:rgba(3,26,22,0.9); border-color:#fbbf24; font-size:clamp(1.22rem, 1.6vw, 1.42rem); padding:12px; margin:14px 0; color:#fde68a;">
                $$H \\cap K = \\{[0], [6]\\} \\le \\mathbb{Z}/12\\mathbb{Z}$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#ecfdf5;">
                - Xét hai nhóm con của $\\mathbb{Z}/12\\mathbb{Z}$:<br>
                &nbsp;&nbsp;+ $H = \\{[0], [2], [4], [6], [8], [10]\\}$ (nhóm con cấp $6$).<br>
                &nbsp;&nbsp;+ $K = \\{[0], [3], [6], [9]\\}$ (nhóm con cấp $4$).<br>
                - Phần chung của chúng là $H \\cap K = \\{[0], [6]\\}$, tự lập thành nhóm con cấp $2$ của $\\mathbb{Z}/12\\mathbb{Z}$.
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 12: PHẢN VÍ DỤ - TRỞ NGẠI CỦA PHÉP HỢP HAI NHÓM CON
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.22); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              ⚠️ PHẢN VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Hợp Của Hai Nhóm Con Nói Chung Không Là Nhóm Con!</h2>
            <p style="color:#d1fae5; font-size:clamp(1.15rem, 1.48vw, 1.32rem); line-height:1.6; margin:0;">
              Trái ngược hoàn toàn với phép giao, hợp $H \\cup K$ của hai nhóm con thường bị <b>vỡ tính đóng</b> ngay khi ta ghép một phần tử của $H$ với một phần tử của $K$:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(4,38,32,0.92); border:1.5px solid #fb7185; color:#fecdd3; font-size:clamp(1.26rem, 1.7vw, 1.5rem); padding:16px 24px; margin:0;">
            $$2 \\in 2\\mathbb{Z}, \\quad 3 \\in 3\\mathbb{Z} \\quad \\Longrightarrow \\quad 2 + 3 = 5 \\notin 2\\mathbb{Z} \\cup 3\\mathbb{Z} \\quad (2\\mathbb{Z} \\cup 3\\mathbb{Z} \\not\\le \\mathbb{Z})$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Điều kiện nào vẫn còn giữ được?</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#ecfdf5; margin-top:10px;">
                - Tập hợp $H \\cup K$ vẫn chứa phần tử đơn vị $e$.<br>
                - Tập hợp $H \\cup K$ vẫn chứa nghịch đảo của từng phần tử riêng lẻ (vì $x \\in H \\implies x^{-1} \\in H \\subseteq H \\cup K$).
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid #fb7185!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Điều kiện nào bị phá vỡ?</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#ecfdf5; margin-top:10px;">
                - <b>Tính đóng bị gãy đổ:</b> Số $2$ thuần thuộc $2\\mathbb{Z}$ và số $3$ thuần thuộc $3\\mathbb{Z}$, nhưng tổng lai ghép $2 + 3 = 5$ không chia hết cho $2$ cũng không chia hết cho $3$!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 13: LÝ THUYẾT - ĐỊNH LÝ ĐẶC TRƯNG PHÉP HỢP HAI NHÓM CON
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Tiêu Chuẩn Để Hợp Của Hai Nhóm Con Là Nhóm Con</h2>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(4,38,32,0.92); border:1.5px solid #fbbf24; color:#fde68a; font-size:clamp(1.3rem, 1.75vw, 1.55rem); padding:16px 24px; margin:0;">
            $$\\text{Cho } H, K \\le G: \\qquad H \\cup K \\le G \\iff H \\subseteq K \\;\\text{ hoặc }\\; K \\subseteq H$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Chiều đảo và thuận -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">🏛️ Chứng minh bằng phản chứng:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#ecfdf5; margin-top:10px;">
                - <b>1) Chiều $(\\impliedby)$:</b> Nếu $H \\subseteq K$ thì $H \\cup K = K \\le G$ (hiển nhiên).<br>
                - <b>2) Chiều $(\\implies)$:</b> Giả sử $H \\cup K \\le G$ nhưng $H \\not\\subseteq K$ và $K \\not\\subseteq H$.<br>
                &nbsp;&nbsp;+ Khi đó tồn tại $h \\in H \\setminus K$ và $k \\in K \\setminus H$.<br>
                &nbsp;&nbsp;+ Vì $H \\cup K$ là nhóm con nên tích $hk \\in H \\cup K$.
              </div>
            </div>

            <!-- Truy tìm mâu thuẫn -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">⚡ Hai khả năng của tích $hk$ đều dẫn tới mâu thuẫn:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#ecfdf5; margin-top:10px;">
                - <b>Trường hợp 1 ($hk \\in H$):</b> Vì $h \\in H \\le G$ nên $h^{-1} \\in H$. Suy ra:<br>
                &nbsp;&nbsp;+ $k = h^{-1}(hk) \\in H$ (mâu thuẫn với cách chọn $k \\notin H$).<br>
                - <b>Trường hợp 2 ($hk \\in K$):</b> Vì $k \\in K \\le G$ nên $k^{-1} \\in K$. Suy ra:<br>
                &nbsp;&nbsp;+ $h = (hk)k^{-1} \\in K$ (mâu thuẫn với cách chọn $h \\notin K$). $\\blacksquare$
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 14: LÝ THUYẾT - NHÓM CON SINH BỞI TẬP HỢP <S>
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(16,185,129,0.22); border:1.5px solid #10b981; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 ĐỊNH NGHĨA
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Nhóm Con Sinh Bởi Tập Hợp $\\langle S \\rangle$</h2>
            <p style="color:#d1fae5; font-size:clamp(1.15rem, 1.48vw, 1.32rem); line-height:1.58; margin:0;">
              Cho tập hợp con $S \\subseteq G$. <b>Nhóm con sinh bởi $S$</b>, ký hiệu <b style="color:#fbbf24;">$\\langle S \\rangle$</b>, là nhóm con nhỏ nhất của $G$ chứa $S$, được xác định qua hai góc nhìn tương đương:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Góc nhìn từ trên xuống -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(i) Định nghĩa từ trên xuống (Qua phép giao):</b>
              <div class="slide-math-display" style="background:rgba(3,26,22,0.9); border-color:#10b981; font-size:clamp(1.2rem, 1.55vw, 1.38rem); padding:12px; margin:14px 0;">
                $$\\langle S \\rangle = \\bigcap \\{H \\le G \\mid S \\subseteq H\\}$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.7; color:#ecfdf5;">
                - Giao của tất cả các nhóm con của $G$ chứa $S$.<br>
                - Mọi nhóm con $H \\le G$ chứa $S$ đều phải chứa $\\langle S \\rangle$ ($S \\subseteq \\langle S \\rangle \\subseteq H$).
              </div>
            </div>

            <!-- Góc nhìn từ dưới lên -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(ii) Mô tả từ dưới lên (Tích các lũy thừa):</b>
              <div class="slide-math-display" style="background:rgba(3,26,22,0.9); border-color:#fbbf24; font-size:clamp(1.14rem, 1.48vw, 1.32rem); padding:12px; margin:14px 0; color:#fde68a;">
                $$\\langle S \\rangle = \\{x_1^{k_1} x_2^{k_2} \\cdots x_m^{k_m} \\mid m \\ge 1,\\; x_i \\in S,\\; k_i \\in \\mathbb{Z}\\}$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.7; color:#ecfdf5;">
                - Gồm mọi tích hữu hạn ("từ") ghép từ các phần tử của $S$ và nghịch đảo của chúng.<br>
                - <i>Quy ước biên:</i> Khi $S = \\emptyset$, ta quy ước $\\langle \\emptyset \\rangle = \\{e\\}$.
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 15: VÍ DỤ SOI SÁNG CHO SLIDE 14 (NHÓM CON SINH <S>)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(52,211,153,0.22); border:1.5px solid #34d399; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Khảo Sát Nhóm Con Sinh $\\langle S \\rangle$ Trên $(\\mathbb{Z}, +)$ và $S_3$</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Ví dụ 1: Trên (Z, +) -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.2rem, 1.55vw, 1.38rem);">1) Trong Nhóm Cộng $(\\mathbb{Z}, +)$</b>
              <div class="slide-math-display" style="background:rgba(3,26,22,0.9); border-color:#10b981; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:12px; margin:14px 0;">
                $$\\langle \\{2, 3\\} \\rangle = \\{2u + 3v \\mid u, v \\in \\mathbb{Z}\\} = \\mathbb{Z}$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#ecfdf5;">
                - Dù hợp $2\\mathbb{Z} \\cup 3\\mathbb{Z}$ không phải là nhóm con, nhưng nhóm con sinh bởi chúng là $\\langle 2\\mathbb{Z} \\cup 3\\mathbb{Z} \\rangle = \\langle 2, 3 \\rangle$.<br>
                - Vì $3 - 2 = 1 \\in \\langle 2, 3 \\rangle$, mọi số nguyên $k = k \\cdot 1$ đều thuộc $\\langle 2, 3 \\rangle$, nên $\\langle 2, 3 \\rangle = \\mathbb{Z}$.<br>
                - Tương tự: $\\langle \\{4, 6\\} \\rangle = \\{4u + 6v \\mid u, v \\in \\mathbb{Z}\\} = 2\\mathbb{Z}$.
              </div>
            </div>

            <!-- Ví dụ 2: Trên S3 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.2rem, 1.55vw, 1.38rem);">2) Trong Nhóm Đối Xứng $S_3$</b>
              <div class="slide-math-display" style="background:rgba(3,26,22,0.9); border-color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:12px; margin:14px 0; color:#fde68a;">
                $$S = \\{(1\\,2),\\; (1\\,3)\\} \\implies \\langle S \\rangle = S_3$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#ecfdf5;">
                - Từ hai chuyển vị $a = (1\\,2)$ và $b = (1\\,3)$, việc nhân liên tiếp tạo ra toàn bộ 6 phần tử của $S_3$:<br>
                &nbsp;&nbsp;+ $a^2 = e$; &nbsp; $ab = (1\\,2)(1\\,3) = (1\\,3\\,2)$.<br>
                &nbsp;&nbsp;+ $ba = (1\\,3)(1\\,2) = (1\\,2\\,3)$; &nbsp; $aba = (1\\,2)(1\\,3)(1\\,2) = (2\\,3)$.<br>
                - Vậy chỉ cần hai chuyển vị $(1\\,2)$ và $(1\\,3)$ đã sinh ra toàn bộ $S_3$.
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 16: LÝ THUYẾT - CẤP CỦA PHẦN TỬ ord(a)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(16,185,129,0.22); border:1.5px solid #10b981; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              📘 ĐỊNH NGHĨA
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Cấp Của Phần Tử $\\operatorname{ord}(a)$ &amp; Nhóm Con Đơn Sinh $\\langle a \\rangle$</h2>
            <p style="color:#d1fae5; font-size:clamp(1.12rem, 1.44vw, 1.28rem); line-height:1.58; margin:0;">
              Khi tập sinh chỉ gồm một phần tử $S = \\{a\\}$, nhóm con $\\langle a \\rangle = \\{a^k \\mid k \\in \\mathbb{Z}\\}$ (dạng cộng: $\\{ka \\mid k \\in \\mathbb{Z}\\}$) gọi là nhóm con đơn sinh. <b>Cấp của phần tử $a$</b> là lực lượng <b style="color:#fbbf24;">$\\operatorname{ord}(a) = |\\langle a \\rangle|$</b>:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">(i) Cấp hữu hạn ($\\operatorname{ord}(a) = n &lt; \\infty$):</b>
              <div class="slide-math-display" style="background:rgba(3,26,22,0.9); border-color:#10b981; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:10px; margin:10px 0;">
                $$\\operatorname{ord}(a) = \\min\\{m \\in \\mathbb{Z}^+ \\mid a^m = e\\}$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.68; color:#ecfdf5;">
                - Là số nguyên dương $n$ nhỏ nhất sao cho $a^n = e$ (cộng: $na = 0$).<br>
                - Khi đó $\\langle a \\rangle = \\{e, a, a^2, \\dots, a^{n-1}\\}$ gồm đúng $n$ phần tử phân biệt.
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">(ii) Cấp vô hạn ($\\operatorname{ord}(a) = \\infty$):</b>
              <div class="slide-math-display" style="background:rgba(3,26,22,0.9); border-color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:10px; margin:10px 0; color:#fde68a;">
                $$\\forall m \\in \\mathbb{Z}^+, \\quad a^m \\neq e$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.68; color:#ecfdf5;">
                - Không tồn tại số nguyên dương $m$ nào để $a^m = e$.<br>
                - Mọi lũy thừa $a^k$ ($k \\in \\mathbb{Z}$) đôi một phân biệt: $a^i = a^j \\iff i = j$.
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(4,38,32,0.9)!important; border:1.5px solid #fbbf24!important; border-left:6px solid #fbbf24!important; color:#fef3c7!important; font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.6;">
            <b>✨ Điểm đáng chú ý:</b> Phần tử đơn vị $e$ là phần tử <b>duy nhất</b> có cấp bằng $1$ ($\\operatorname{ord}(a) = 1 \\iff a = e$). Vì cấp đếm số phần tử của $\\langle a \\rangle \\neq \\emptyset$, <b>không bao giờ có phần tử cấp $0$</b>!
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 17: LÝ THUYẾT - ĐỊNH LÝ ĐỒNG DƯ SỐ MŨ THEO CẤP
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Quy Tắc Chia Hết &amp; Đồng Dư Số Mũ Của Phần Tử Cấp $n$</h2>
            <p style="color:#d1fae5; font-size:clamp(1.15rem, 1.48vw, 1.32rem); line-height:1.58; margin:0;">
              Cho phần tử $a \\in G$ có cấp hữu hạn $\\operatorname{ord}(a) = n$. Khi đó với mọi số nguyên $k, i, j \\in \\mathbb{Z}$:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(4,38,32,0.92); border:1.5px solid #10b981; color:#fde68a; font-size:clamp(1.26rem, 1.7vw, 1.5rem); padding:16px 24px; margin:0;">
            $$1)\\; a^k = e \\iff n \\mid k \\qquad\\qquad 2)\\; a^i = a^j \\iff i \\equiv j \\pmod n$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">🔑 Chứng minh bằng phép chia Euclid:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#ecfdf5; margin-top:10px;">
                - Chia $k$ cho $n$: viết $k = qn + r$ với $0 \\le r &lt; n$.<br>
                - Ta có: $a^k = (a^n)^q \\cdot a^r = e^q \\cdot a^r = a^r$.<br>
                - Do $n$ là số nguyên dương nhỏ nhất làm $a^n = e$ và $0 \\le r &lt; n$, nên $a^k = e \\iff a^r = e \\iff r = 0 \\iff n \\mid k$.
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid #fbbf24!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">⚡ Điểm cần cân nhắc khi giải toán:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fef3c7; margin-top:10px;">
                - Đẳng thức $a^k = e$ (với $k &gt; 0$) <b>chưa cho phép kết luận</b> $\\operatorname{ord}(a) = k$!<br>
                - Nó chỉ khẳng định $\\operatorname{ord}(a)$ là một <b>ước dương</b> của $k$ ($\\operatorname{ord}(a) \\mid k$). Muốn chốt $\\operatorname{ord}(a) = k$, phải kiểm tra thêm $a^d \\neq e$ với các ước thực sự $d \\mid k$.
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 18: VÍ DỤ SOI SÁNG CHO SLIDE 16 & 17 (BẢNG CẤP PHẦN TỬ)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(52,211,153,0.22); border:1.5px solid #34d399; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Bảng Tra CỨU Cấp Phần Tử Trên $\\mathbb{Z}/12\\mathbb{Z}$, $U(12)$ và $S_3$</h2>
          </div>

          <div class="anim-card anim-d1" style="flex:1; display:flex; flex-direction:column; justify-content:center; overflow-x:auto;">
            <table style="width:100%; height:100%; border-collapse:collapse; font-size:clamp(1.06rem, 1.38vw, 1.24rem); background:rgba(4,38,32,0.85); border:1.5px solid rgba(52,211,153,0.48); border-radius:14px; overflow:hidden;">
              <thead>
                <tr style="background:rgba(16,185,129,0.28); color:#fde68a; text-align:left; font-size:clamp(1.1rem, 1.42vw, 1.28rem);">
                  <th style="padding:14px 18px; border-bottom:1.5px solid rgba(52,211,153,0.45);">Nhóm $G$ &amp; Cấp $|G|$</th>
                  <th style="padding:14px 18px; border-bottom:1.5px solid rgba(52,211,153,0.45);">Đơn vị $e$</th>
                  <th style="padding:14px 18px; border-bottom:1.5px solid rgba(52,211,153,0.45);">Phân Bố Cấp Của Các Phần Tử $\\operatorname{ord}(a)$</th>
                  <th style="padding:14px 18px; border-bottom:1.5px solid rgba(52,211,153,0.45);">Cấp Lớn Nhất</th>
                </tr>
              </thead>
              <tbody style="color:#ecfdf5; line-height:1.72;">
                <tr style="border-bottom:1px solid rgba(52,211,153,0.25);">
                  <td style="padding:14px 18px; font-weight:700; color:#6ee7b7;">$(\\mathbb{Z}/12\\mathbb{Z}, +)$<br><span style="font-weight:500; color:#a7f3d0;">$|G| = 12$</span></td>
                  <td style="padding:14px 18px; font-weight:700;">$[0]$</td>
                  <td style="padding:14px 18px;">
                    - Cấp 1: $[0]$ &nbsp;|&nbsp; Cấp 2: $[6]$ &nbsp;|&nbsp; Cấp 3: $[4], [8]$<br>
                    - Cấp 4: $[3], [9]$ &nbsp;|&nbsp; Cấp 6: $[2], [10]$ &nbsp;|&nbsp; <b style="color:#fbbf24;">Cấp 12: $[1], [5], [7], [11]$</b>
                  </td>
                  <td style="padding:14px 18px; color:#fbbf24; font-weight:800;">$12 = |G|$<br>(Cyclic)</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(52,211,153,0.25);">
                  <td style="padding:14px 18px; font-weight:700; color:#7dd3fc;">$(U(12), \\cdot)$<br><span style="font-weight:500; color:#bae6fd;">$|G| = \\varphi(12) = 4$</span></td>
                  <td style="padding:14px 18px; font-weight:700;">$[1]$</td>
                  <td style="padding:14px 18px;">
                    - Cấp 1: $[1]$<br>
                    - Cấp 2: $[5], [7], [11]$ (do $[5]^2 = [7]^2 = [11]^2 = [1]$; <span style="color:#fda4af;">không có phần tử cấp 4</span>)
                  </td>
                  <td style="padding:14px 18px; color:#fda4af; font-weight:800;">$2 &lt; |G|$<br>(Không Cyclic)</td>
                </tr>
                <tr>
                  <td style="padding:14px 18px; font-weight:700; color:#fcd34d;">$(S_3, \\circ)$<br><span style="font-weight:500; color:#fde68a;">$|G| = 3! = 6$</span></td>
                  <td style="padding:14px 18px; font-weight:700;">$\\operatorname{id}$</td>
                  <td style="padding:14px 18px;">
                    - Cấp 1: $\\operatorname{id}$ &nbsp;|&nbsp; Cấp 2: $(1\\,2), (1\\,3), (2\\,3)$<br>
                    - Cấp 3: $(1\\,2\\,3), (1\\,3\\,2)$ (<span style="color:#fda4af;">không có phần tử cấp 6</span>)
                  </td>
                  <td style="padding:14px 18px; color:#fda4af; font-weight:800;">$3 &lt; |G|$<br>(Không Cyclic)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 19: LÝ THUYẾT - ĐỊNH NGHĨA NHÓM CYCLIC & TÍNH ABEL
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(16,185,129,0.22); border:1.5px solid #10b981; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 ĐỊNH NGHĨA
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Nhóm Cyclic (Nhóm Đơn Sinh) $G = \\langle a \\rangle$</h2>
            <p style="color:#d1fae5; font-size:clamp(1.15rem, 1.48vw, 1.32rem); line-height:1.58; margin:0;">
              Một nhóm $G$ được gọi là <b>nhóm cyclic</b> nếu tồn tại một phần tử $a \\in G$ sao cho toàn bộ nhóm được sinh ra từ các lũy thừa của $a$ (phần tử $a$ gọi là một <b>phần tử sinh</b> của $G$):
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(4,38,32,0.92); border:1.5px solid #fbbf24; color:#fde68a; font-size:clamp(1.28rem, 1.72vw, 1.52rem); padding:14px 22px; margin:0;">
            $$G = \\langle a \\rangle = \\{a^k \\mid k \\in \\mathbb{Z}\\} \\qquad (\\text{Dạng cộng: } G = \\{ka \\mid k \\in \\mathbb{Z}\\})$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(i) Hai mô hình cyclic chuẩn mực:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#ecfdf5; margin-top:10px;">
                - <b>Cyclic vô hạn:</b> $(\\mathbb{Z}, +) = \\langle 1 \\rangle = \\langle -1 \\rangle$ (có đúng 2 phần tử sinh là $1$ và $-1$).<br>
                - <b>Cyclic hữu hạn cấp $n$:</b> $(\\mathbb{Z}/n\\mathbb{Z}, +) = \\langle [1]_n \\rangle$ (nhóm hữu hạn $G$ cấp $n$ là cyclic $\\iff \\exists a \\in G: \\operatorname{ord}(a) = n$).
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid #fbbf24!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(ii) Phát hiện cốt lõi: Cyclic $\\implies$ Giao hoán!</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fef3c7; margin-top:10px;">
                - <b>Mọi nhóm cyclic đều là nhóm Abel:</b> Với mọi $x = a^r, y = a^s \\in \\langle a \\rangle$, phép nhân quy về phép cộng số nguyên trên số mũ:<br>
                $$xy = a^r a^s = a^{r+s} = a^{s+r} = a^s a^r = yx$$
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 20: PHẢN VÍ DỤ & LƯU Ý VỀ NHÓM CYCLIC
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.22); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              ⚠️ PHẢN VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Hai Bẫy Ngộ Nhận Kinh Điển Về Nhóm Cyclic &amp; Cấp Vô Hạn</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Bẫy 1: Giao hoán chưa chắc Cyclic -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid #fb7185!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Bẫy 1: Nhóm Abel CHƯA CHẮC là nhóm Cyclic!</b>
              <div class="slide-math-display" style="background:rgba(3,26,22,0.9); border-color:#fb7185; font-size:clamp(1.16rem, 1.5vw, 1.34rem); padding:12px; margin:14px 0; color:#fecdd3;">
                $$U(8) = \\{[1], [3], [5], [7]\\}, \\quad |U(8)| = \\varphi(8) = 4$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#ecfdf5;">
                - Nhóm nhân $U(8)$ hiển nhiên <b>giao hoán (Abel)</b>.<br>
                - Tuy nhiên: $[3]^2 = [9] = [1]$, $[5]^2 = [25] = [1]$, $[7]^2 = [49] = [1]$.<br>
                - Mọi phần tử chỉ có cấp $1$ hoặc $2$ (không có phần tử cấp $4$) $\\implies$ <b>$U(8)$ không phải là nhóm cyclic</b>!
              </div>
            </div>

            <!-- Bẫy 2: Cùng cấp vô hạn chưa chắc sinh cùng nhóm -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid #fbbf24!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Bẫy 2: Cùng cấp $\\infty$ chưa chắc sinh cùng nhóm con!</b>
              <div class="slide-math-display" style="background:rgba(3,26,22,0.9); border-color:#fbbf24; font-size:clamp(1.14rem, 1.48vw, 1.32rem); padding:12px; margin:14px 0; color:#fde68a;">
                $$\\operatorname{ord}(1) = \\operatorname{ord}(2) = \\infty \\quad \\text{nhưng} \\quad \\langle 2 \\rangle = 2\\mathbb{Z} \\subsetneq \\langle 1 \\rangle = \\mathbb{Z}$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#ecfdf5;">
                - Trong $(\\mathbb{Z}, +)$, cả $1$ và $2$ đều có cấp vô hạn.<br>
                - Nhưng $\\langle 1 \\rangle = \\mathbb{Z}$ trong khi $\\langle 2 \\rangle = 2\\mathbb{Z}$ chỉ quét qua các số chẵn.<br>
                - Ở nhóm vô hạn, hai phần tử cùng cấp $\\infty$ vẫn có thể sinh ra hai nhóm con lồng nhau thực sự!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 21: LÝ THUYẾT - ĐỊNH LÝ PHẦN TỬ SINH CỦA NHÓM CYCLIC HỮU HẠN
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Cấp Của Lũy Thừa $a^k$ &amp; Tiêu Chuẩn Phần Tử Sinh</h2>
            <p style="color:#d1fae5; font-size:clamp(1.15rem, 1.48vw, 1.32rem); line-height:1.58; margin:0;">
              Cho $G = \\langle a \\rangle$ là một nhóm cyclic hữu hạn cấp $n$ ($\\operatorname{ord}(a) = n$). Với mọi số nguyên $k \\in \\mathbb{Z}$:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(4,38,32,0.92); border:1.5px solid #fbbf24; color:#fde68a; font-size:clamp(1.28rem, 1.72vw, 1.52rem); padding:16px 24px; margin:0;">
            $$1)\\; \\langle a^k \\rangle = \\langle a^{\\gcd(n, k)} \\rangle \\qquad\\qquad 2)\\; \\operatorname{ord}(a^k) = \\frac{n}{\\gcd(n, k)}$$
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid #10b981!important; padding:22px 26px; border-radius:14px;">
            <b style="color:#6ee7b7; font-size:clamp(1.2rem, 1.55vw, 1.38rem); display:block; margin-bottom:10px;">3) Hệ quả Đặc trưng Phần tử sinh &amp; Hàm phi Euler $\\varphi(n)$:</b>
            <div style="font-size:clamp(1.12rem, 1.44vw, 1.28rem); line-height:1.78; color:#ecfdf5;">
              - Phần tử $a^k$ sinh ra toàn bộ nhóm $G$ khi và chỉ khi cấp của $a^k$ bằng $n$:<br>
              $$\\langle a^k \\rangle = \\langle a \\rangle \\iff \\operatorname{ord}(a^k) = n \\iff \\frac{n}{\\gcd(n, k)} = n \\iff \\mathbf{\\gcd(k, n) = 1}$$
              - Do đó, một nhóm cyclic cấp $n$ bất kỳ luôn có đúng <b style="color:#fbbf24;">$\\varphi(n)$ phần tử sinh</b>!
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 22: VÍ DỤ SOI SÁNG CHO SLIDE 21 (TÌM PHẦN TỬ SINH)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(52,211,153,0.22); border:1.5px solid #34d399; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Tính Cấp Phần Tử &amp; Tìm Phần Tử Sinh Trong $\\mathbb{Z}/18\\mathbb{Z}$</h2>
            <p style="color:#d1fae5; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Xét nhóm cộng cyclic $G = \\mathbb{Z}/18\\mathbb{Z} = \\langle [1] \\rangle$ có cấp $n = 18$:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Tính cấp phần tử -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Tính cấp bằng công thức $\\operatorname{ord}([k]) = \\dfrac{18}{\\gcd(18, k)}$:</b>
              <div style="font-size:clamp(1.1rem, 1.4vw, 1.26rem); line-height:1.8; color:#ecfdf5; margin-top:12px;">
                - Với $[4]$: $\\operatorname{ord}([4]) = \\dfrac{18}{\\gcd(18, 4)} = \\dfrac{18}{2} = 9$.<br>
                - Với $[6]$: $\\operatorname{ord}([6]) = \\dfrac{18}{\\gcd(18, 6)} = \\dfrac{18}{6} = 3$.<br>
                - Với $[15]$: $\\operatorname{ord}([15]) = \\dfrac{18}{\\gcd(18, 15)} = \\dfrac{18}{3} = 6$.<br>
                &nbsp;&nbsp;+ Đồng thời $\\langle [15] \\rangle = \\langle [\\gcd(18, 15)] \\rangle = \\langle [3] \\rangle$.
              </div>
            </div>

            <!-- Cột 2: Liệt kê phần tử sinh -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Liệt kê tất cả các phần tử sinh của $\\mathbb{Z}/18\\mathbb{Z}$:</b>
              <div style="font-size:clamp(1.1rem, 1.4vw, 1.26rem); line-height:1.75; color:#ecfdf5; margin-top:12px;">
                - Số lượng phần tử sinh của $\\mathbb{Z}/18\\mathbb{Z}$ là:<br>
                $$\\varphi(18) = 18 \\cdot \\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{3}\\right) = 6$$
                - Đó là các lớp $[k]$ với $1 \\le k &lt; 18$ và $\\gcd(k, 18) = 1$:<br>
                <div style="margin-top:10px; padding:12px 16px; background:rgba(3,26,22,0.9); border:1.5px solid #fbbf24; border-radius:10px; color:#fde68a; font-size:clamp(1.15rem, 1.48vw, 1.32rem); font-weight:800; text-align:center;">
                  $\\{[1],\\; [5],\\; [7],\\; [11],\\; [13],\\; [17]\\}$
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 23: LÝ THUYẾT - ĐỊNH LÝ PHÂN LOẠI TOÀN DIỆN NHÓM CON CYCLIC
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Định Lý Cơ Bản Về Cấu Trúc Nhóm Con Của Nhóm Cyclic</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Tính kế thừa & Duy nhất theo ước -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#6ee7b7; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Tính kế thừa &amp; Tính duy nhất theo ước số:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#ecfdf5; margin-top:10px;">
                - <b>Mọi nhóm con</b> của một nhóm cyclic đều là <b>nhóm cyclic</b>.<br>
                - Nếu $G = \\langle a \\rangle$ vô hạn ($\\cong \\mathbb{Z}$): mọi nhóm con có dạng duy nhất $\\langle a^d \\rangle$ với $d \\ge 0$ (trong $\\mathbb{Z}$ là $d\\mathbb{Z}$).<br>
                - Nếu $G = \\langle a \\rangle$ hữu hạn cấp $n$: ứng với <b>mỗi ước dương $q \\mid n$</b>, tồn tại <b>duy nhất một nhóm con</b> cấp $q$:<br>
                <div class="slide-math-display" style="background:rgba(3,26,22,0.92); border-color:#10b981; font-size:clamp(1.2rem, 1.55vw, 1.38rem); padding:10px; margin:12px 0 0;">
                  $$H_q = \\langle a^{n/q} \\rangle, \\qquad |H_q| = q$$
                </div>
              </div>
            </div>

            <!-- Bao hàm, Giao & Hợp -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border:1.5px solid rgba(52,211,153,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Quan hệ bao hàm, Giao ($\\operatorname{lcm}$) &amp; Nhóm sinh ($\\gcd$):</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#ecfdf5; margin-top:10px;">
                Với $c, d$ là các ước dương của $n$:<br>
                - <b>Quan hệ bao hàm (ngược chiều chia hết):</b><br>
                $$\\langle a^c \\rangle \\subseteq \\langle a^d \\rangle \\iff d \\mid c$$
                - <b>Giao của hai nhóm con (Lấy BCNN):</b><br>
                $$\\langle a^c \\rangle \\cap \\langle a^d \\rangle = \\langle a^{\\operatorname{lcm}(c, d)} \\rangle$$
                - <b>Nhóm con sinh bởi hợp (Lấy ƯCLN):</b><br>
                $$\\langle \\langle a^c \\rangle \\cup \\langle a^d \\rangle \\rangle = \\langle a^c, a^d \\rangle = \\langle a^{\\gcd(c, d)} \\rangle$$
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 24: VÍ DỤ SOI SÁNG CHO SLIDE 23 (MẠNG LƯỚI NHÓM CON CỦA Z/12Z)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:22px 30px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(52,211,153,0.22); border:1.5px solid #34d399; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.85rem, 2.4vw, 2.25rem);">Sơ Đồ Mạng Lưới Nhóm Con (Subgroup Lattice) Của $\\mathbb{Z}/12\\mathbb{Z}$</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; grid-template-columns:minmax(320px, 0.92fr) minmax(0, 1.08fr); gap:20px; align-items:stretch; margin:0;">
            <!-- Cột 1: Sơ đồ nhánh cây phân tầng Hasse (Phóng to rõ nét) -->
            <div class="slide-glass-card" style="background:rgba(4,38,32,0.82)!important; border:1.5px solid rgba(52,211,153,0.48)!important; padding:16px; border-radius:14px; display:flex; flex-direction:column; justify-content:center; align-items:center;">
              <svg viewBox="0 0 420 340" style="width:100%; height:100%; max-height:340px;">
                <!-- Các đường nối bao hàm -->
                <g stroke="#34d399" stroke-width="3" opacity="0.88">
                  <line x1="210" y1="42" x2="120" y2="115"/>
                  <line x1="210" y1="42" x2="300" y2="115"/>
                  <line x1="120" y1="115" x2="72" y2="210"/>
                  <line x1="120" y1="115" x2="210" y2="210"/>
                  <line x1="300" y1="115" x2="210" y2="210"/>
                  <line x1="72" y1="210" x2="210" y2="298"/>
                  <line x1="210" y1="210" x2="210" y2="298"/>
                </g>

                <!-- Node Cấp 12 -->
                <rect x="115" y="12" width="190" height="46" rx="10" fill="#042620" stroke="#fbbf24" stroke-width="2.5"/>
                <text x="210" y="40" fill="#fde68a" font-size="16" font-weight="800" text-anchor="middle">⟨[1]⟩ = Z/12Z (cấp 12)</text>

                <!-- Node Cấp 6 -->
                <rect x="42" y="92" width="156" height="44" rx="10" fill="#042620" stroke="#10b981" stroke-width="2.2"/>
                <text x="120" y="119" fill="#6ee7b7" font-size="15.5" font-weight="700" text-anchor="middle">⟨[2]⟩ (cấp 6)</text>

                <!-- Node Cấp 4 -->
                <rect x="222" y="92" width="156" height="44" rx="10" fill="#042620" stroke="#38bdf8" stroke-width="2.2"/>
                <text x="300" y="119" fill="#7dd3fc" font-size="15.5" font-weight="700" text-anchor="middle">⟨[3]⟩ (cấp 4)</text>

                <!-- Node Cấp 3 -->
                <rect x="6" y="188" width="136" height="44" rx="10" fill="#042620" stroke="#10b981" stroke-width="2.2"/>
                <text x="74" y="215" fill="#6ee7b7" font-size="15.5" font-weight="700" text-anchor="middle">⟨[4]⟩ (cấp 3)</text>

                <!-- Node Cấp 2 -->
                <rect x="152" y="188" width="136" height="44" rx="10" fill="#042620" stroke="#38bdf8" stroke-width="2.2"/>
                <text x="220" y="215" fill="#7dd3fc" font-size="15.5" font-weight="700" text-anchor="middle">⟨[6]⟩ (cấp 2)</text>

                <!-- Node Cấp 1 -->
                <rect x="120" y="276" width="180" height="46" rx="10" fill="#042620" stroke="#fbbf24" stroke-width="2.5"/>
                <text x="210" y="304" fill="#fde68a" font-size="16" font-weight="800" text-anchor="middle">⟨[0]⟩ = {[0]} (cấp 1)</text>
              </svg>
            </div>

            <!-- Cột 2: Bảng phân loại 6 ước (Chữ lớn, giãn đều chiều cao) -->
            <div style="display:flex; flex-direction:column; justify-content:stretch; overflow-x:auto;">
              <table style="width:100%; height:100%; border-collapse:collapse; font-size:clamp(1.04rem, 1.35vw, 1.2rem); background:rgba(4,38,32,0.85); border:1.5px solid rgba(52,211,153,0.48); border-radius:14px; overflow:hidden;">
                <thead>
                  <tr style="background:rgba(16,185,129,0.28); color:#fde68a; text-align:left; font-size:clamp(1.08rem, 1.38vw, 1.24rem);">
                    <th style="padding:11px 14px;">Ước $q \\mid 12$</th>
                    <th style="padding:11px 14px;">$H_q = \\langle [12/q] \\rangle$</th>
                    <th style="padding:11px 14px;">Các phần tử</th>
                    <th style="padding:11px 14px;">Phần tử sinh</th>
                  </tr>
                </thead>
                <tbody style="color:#ecfdf5; line-height:1.55;">
                  <tr style="border-top:1px solid rgba(52,211,153,0.22);">
                    <td style="padding:10px 14px; font-weight:700; color:#fde68a;">$q = 1$</td>
                    <td style="padding:10px 14px;">$\\langle [0] \\rangle$</td>
                    <td style="padding:10px 14px;">$\\{[0]\\}$</td>
                    <td style="padding:10px 14px;">$\\{[0]\\}$</td>
                  </tr>
                  <tr style="border-top:1px solid rgba(52,211,153,0.22);">
                    <td style="padding:10px 14px; font-weight:700; color:#7dd3fc;">$q = 2$</td>
                    <td style="padding:10px 14px;">$\\langle [6] \\rangle$</td>
                    <td style="padding:10px 14px;">$\\{[0],[6]\\}$</td>
                    <td style="padding:10px 14px;">$\\{[6]\\}$</td>
                  </tr>
                  <tr style="border-top:1px solid rgba(52,211,153,0.22);">
                    <td style="padding:10px 14px; font-weight:700; color:#6ee7b7;">$q = 3$</td>
                    <td style="padding:10px 14px;">$\\langle [4] \\rangle$</td>
                    <td style="padding:10px 14px;">$\\{[0],[4],[8]\\}$</td>
                    <td style="padding:10px 14px;">$\\{[4],[8]\\}$</td>
                  </tr>
                  <tr style="border-top:1px solid rgba(52,211,153,0.22);">
                    <td style="padding:10px 14px; font-weight:700; color:#7dd3fc;">$q = 4$</td>
                    <td style="padding:10px 14px;">$\\langle [3] \\rangle$</td>
                    <td style="padding:10px 14px;">$\\{[0],[3],[6],[9]\\}$</td>
                    <td style="padding:10px 14px;">$\\{[3],[9]\\}$</td>
                  </tr>
                  <tr style="border-top:1px solid rgba(52,211,153,0.22);">
                    <td style="padding:10px 14px; font-weight:700; color:#6ee7b7;">$q = 6$</td>
                    <td style="padding:10px 14px;">$\\langle [2] \\rangle$</td>
                    <td style="padding:10px 14px;">$\\{[0],[2],[4],[6],[8],[10]\\}$</td>
                    <td style="padding:10px 14px;">$\\{[2],[10]\\}$</td>
                  </tr>
                  <tr style="border-top:1px solid rgba(52,211,153,0.22);">
                    <td style="padding:10px 14px; font-weight:700; color:#fde68a;">$q = 12$</td>
                    <td style="padding:10px 14px;">$\\langle [1] \\rangle$</td>
                    <td style="padding:10px 14px;">$\\mathbb{Z}/12\\mathbb{Z}$</td>
                    <td style="padding:10px 14px;">$\\{[1],[5],[7],[11]\\}$</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 25: TỔNG KẾT CHƯƠNG 2 & CẦU NỐI SANG CHƯƠNG 3
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(236,253,245,0.12), transparent 30%), linear-gradient(135deg, #031a16, #063d33 55%, #031a16); border:1.5px solid rgba(52,211,153,0.45); color:#ecfdf5;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(16,185,129,0.22); border:1.5px solid #10b981; border-radius:999px; color:#6ee7b7; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              🎯 TỔNG KẾT CHƯƠNG 2
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Bản Đồ Bốn Trụ Cột Kiến Thức &amp; Cầu Nối Chương 3</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:16px; margin:0;">
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border-left:5px solid #10b981!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#6ee7b7; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">1) Tiêu chuẩn nhận diện nhóm con $H \\le G$</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#ecfdf5; margin-top:6px;">
                - Tổng quát / Vô hạn: $H \\neq \\emptyset$ và $xy^{-1} \\in H$ (cộng: $x - y \\in H$).<br>
                - Hữu hạn ($|H| &lt; \\infty$): Chỉ cần $H \\neq \\emptyset$ và tính đóng $xy \\in H$.
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border-left:5px solid #38bdf8!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#7dd3fc; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">2) Phép giao, phép hợp &amp; nhóm con sinh $\\langle S \\rangle$</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#ecfdf5; margin-top:6px;">
                - Giao tùy ý $\\bigcap H_i \\le G$; hợp $H \\cup K \\le G \\iff H \\subseteq K$ hoặc $K \\subseteq H$.<br>
                - $\\langle S \\rangle$ là nhóm con nhỏ nhất chứa $S$, gồm mọi tích hữu hạn từ $S \\cup S^{-1}$.
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border-left:5px solid #fbbf24!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fbbf24; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">3) Cấp phần tử &amp; tính chất nhóm Cyclic</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#ecfdf5; margin-top:6px;">
                - $a^k = e \\iff \\operatorname{ord}(a) \\mid k$; mọi nhóm cyclic đều là nhóm Abel.<br>
                - Trong nhóm cyclic cấp $n$: $\\operatorname{ord}(a^k) = \\dfrac{n}{\\gcd(n,k)}$; có $\\varphi(n)$ phần tử sinh.
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(4,38,32,0.78)!important; border-left:5px solid #a7f3d0!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#a7f3d0; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">4) Định lý phân loại nhóm con cyclic</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#ecfdf5; margin-top:6px;">
                - Mọi nhóm con của nhóm cyclic đều cyclic.<br>
                - Mỗi ước dương $q \\mid n$ ứng với duy nhất một nhóm con cấp $q$ là $\\langle a^{n/q} \\rangle$.
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(4,38,32,0.92)!important; border:1.5px solid #fbbf24!important; color:#fef3c7!important; font-size:clamp(1.06rem, 1.36vw, 1.22rem); text-align:center; line-height:1.55;">
            <b>🚀 Tiếp nối Chương 3 (Lớp kề &amp; Định lý Lagrange):</b> Khi dùng một phần tử $g \\in G$ để "tịnh tiến" nhóm con $H \\le G$ thành các khối $gH$, toàn bộ nhóm mẹ $G$ sẽ được chia đều thành các lớp kề rời nhau có cùng kích thước $|gH| = |H|$!
          </div>
        </div>
      `
    }
  ],
  "3": [
    // ========================================================
    // SLIDE 1: TRANG BÌA CĂN GIỮA - HẺM NÚI HOÀNG HÔN HỔ PHÁCH & CỘT ĐÁ TỊNH TIẾN
    // ========================================================
    {
      html: `
        <div style="position: relative; width: 100%; height: 100%; min-height: 100%; display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center; padding: 26px 34px 22px; box-sizing: border-box; overflow: hidden; border-radius: 16px; background: radial-gradient(circle at 50% 22%, rgba(251, 191, 36, 0.28), transparent 46%), radial-gradient(ellipse at 15% 88%, rgba(249, 115, 22, 0.28), transparent 42%), radial-gradient(ellipse at 85% 85%, rgba(225, 29, 72, 0.24), transparent 38%), linear-gradient(160deg, #1a0604 0%, #381008 48%, #52180c 78%, #170503 100%); border: 1.5px solid rgba(251, 146, 60, 0.55); color: #fff7ed; box-shadow: 0 18px 45px rgba(26, 6, 4, 0.78);">
          
          <!-- VECTOR SVG NỀN: HẺM NÚI HOÀNG HÔN ĐỎ RỰC, CỘT ĐÁ LỚP KỀ & SINH VẬT SA MẠC -->
          <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0;">
            <defs>
              <radialGradient id="c3SunGlow" cx="50%" cy="30%" r="42%">
                <stop offset="0%" stop-color="#fef08a" stop-opacity="0.45"/>
                <stop offset="40%" stop-color="#f97316" stop-opacity="0.22"/>
                <stop offset="75%" stop-color="#9a3412" stop-opacity="0.06"/>
                <stop offset="100%" stop-color="#1a0604" stop-opacity="0"/>
              </radialGradient>
              <linearGradient id="c3SunDisc" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#fef08a" stop-opacity="0.55"/>
                <stop offset="60%" stop-color="#f59e0b" stop-opacity="0.35"/>
                <stop offset="100%" stop-color="#ea580c" stop-opacity="0.1"/>
              </linearGradient>
              <linearGradient id="c3CanyonFar" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#7c2d12" stop-opacity="0.6"/>
                <stop offset="100%" stop-color="#270905" stop-opacity="0.92"/>
              </linearGradient>
              <linearGradient id="c3CanyonNear" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#431407" stop-opacity="0.92"/>
                <stop offset="100%" stop-color="#120302" stop-opacity="0.98"/>
              </linearGradient>
              <linearGradient id="c3Monolith" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.35"/>
                <stop offset="50%" stop-color="#c2410c" stop-opacity="0.45"/>
                <stop offset="100%" stop-color="#431407" stop-opacity="0.8"/>
              </linearGradient>
              <linearGradient id="oryxGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#fef08a" stop-opacity="0.95"/>
                <stop offset="55%" stop-color="#fb923c" stop-opacity="0.85"/>
                <stop offset="100%" stop-color="#9a3412" stop-opacity="0.5"/>
              </linearGradient>
              <linearGradient id="falconGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#fde68a" stop-opacity="0.95"/>
                <stop offset="50%" stop-color="#f97316" stop-opacity="0.85"/>
                <stop offset="100%" stop-color="#fde68a" stop-opacity="0.95"/>
              </linearGradient>
            </defs>

            <!-- Vầng mặt trời hoàng hôn khổng lồ & Vòng tia sáng phân hoạch -->
            <circle cx="500" cy="215" r="330" fill="url(#c3SunGlow)"/>
            <circle cx="500" cy="215" r="135" fill="url(#c3SunDisc)"/>
            <g transform="translate(500, 215)" opacity="0.32">
              <circle r="185" fill="none" stroke="#fbbf24" stroke-width="1.3" stroke-dasharray="12 8"/>
              <circle r="235" fill="none" stroke="#fb923c" stroke-width="1.2" opacity="0.65"/>
              <!-- Các vạch chia đều vòng tròn tượng trưng cho Định lý Lagrange -->
              <line x1="-250" y1="0" x2="250" y2="0" stroke="#fde68a" stroke-width="1" stroke-dasharray="5 6"/>
              <line x1="-176" y1="-176" x2="176" y2="176" stroke="#fde68a" stroke-width="1" stroke-dasharray="5 6"/>
              <line x1="176" y1="-176" x2="-176" y2="176" stroke="#fde68a" stroke-width="1" stroke-dasharray="5 6"/>
            </g>

            <!-- БА KHỐI CỘT ĐÁ SA THẠCH CÙNG KÍCH THƯỚC (BIỂU TƯỢNG CÁC LỚP KỀ H, g1H, g2H) -->
            <g opacity="0.48">
              <!-- Khối cột đá trái: H -->
              <polygon points="270,220 330,220 342,390 258,390" fill="url(#c3Monolith)" stroke="#fbbf24" stroke-width="1.5"/>
              <!-- Khối cột đá giữa: g1H -->
              <polygon points="470,195 530,195 542,390 458,390" fill="url(#c3Monolith)" stroke="#fbbf24" stroke-width="1.5"/>
              <!-- Khối cột đá phải: g2H -->
              <polygon points="670,220 730,220 742,390 658,390" fill="url(#c3Monolith)" stroke="#fbbf24" stroke-width="1.5"/>
            </g>

            <!-- SINH VẬT SA MẠC 1: ĐẠI BÀNG LỬA HOÀNG KIM (SOLAR FALCON) SẢI CÁNH -->
            <g transform="translate(500, 88) scale(0.92)" opacity="0.72" filter="drop-shadow(0 0 14px rgba(251, 191, 36, 0.75))">
              <path d="M0,4 C-32,-22 -88,-32 -145,-12 C-105,6 -58,14 -10,12 Z" fill="url(#falconGrad)"/>
              <path d="M0,4 C32,-22 88,-32 145,-12 C105,6 58,14 10,12 Z" fill="url(#falconGrad)"/>
              <polygon points="0,-16 -7,4 0,22 7,4" fill="#fef08a"/>
              <polygon points="0,18 -14,42 0,34 14,42" fill="#fb923c"/>
            </g>
            <!-- Đàn chim ưng nhỏ bay lượn phía xa -->
            <g stroke="#fde68a" stroke-width="2.2" fill="none" stroke-linecap="round" opacity="0.75">
              <path d="M240,115 Q252,102 262,112 Q272,102 284,115"/>
              <path d="M290,92 Q299,82 307,90 Q315,82 324,92"/>
              <path d="M715,105 Q727,92 737,102 Q747,92 759,105"/>
            </g>

            <!-- Dãy hẻm núi đá đỏ tầng xa và đồi cát tầng gần -->
            <path d="M0,385 L110,305 L220,355 L360,295 L500,360 L650,295 L790,355 L895,300 L1000,375 L1000,600 L0,600 Z" fill="url(#c3CanyonFar)"/>
            <path d="M0,445 Q240,380 500,435 T1000,425 L1000,600 L0,600 Z" fill="url(#c3CanyonNear)"/>

            <!-- SINH VẬT SA MẠC 2: LINH DƯƠNG SỪNG KIẾM HOÀNG KIM (GOLDEN ORYX - BÊN TRÁI) -->
            <g transform="translate(165, 398) scale(0.88)" filter="drop-shadow(0 0 14px rgba(251, 146, 60, 0.7))">
              <!-- Chân linh dương -->
              <path d="M-28,2 L-32,46 M-12,4 L-14,48 M18,2 L16,48 M30,0 L36,45" stroke="#fed7aa" stroke-width="3.2" stroke-linecap="round"/>
              <!-- Thân và cổ -->
              <path d="M-34,0 C-32,-16 -6,-22 24,-16 C36,-14 40,-4 32,6 C12,10 -14,10 -34,0 Z" fill="url(#oryxGold)"/>
              <path d="M20,-12 C26,-32 34,-50 40,-64 C48,-66 56,-60 58,-52 C48,-44 40,-26 32,-4 Z" fill="url(#oryxGold)"/>
              <!-- Đuôi -->
              <path d="M-34,-4 Q-48,4 -44,22" fill="none" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
              <!-- Cặp sừng kiếm dài vút cong ra sau đặc trưng của Oryx -->
              <path d="M42,-62 Q10,-98 -38,-112" fill="none" stroke="#fef08a" stroke-width="2.8" stroke-linecap="round"/>
              <path d="M46,-60 Q16,-92 -28,-104" fill="none" stroke="#fbbf24" stroke-width="2.2" stroke-linecap="round"/>
            </g>

            <!-- SINH VẬT SA MẠC 3: CÁO SA MẠC TAI DƠI (GLOWING FENNEC FOX - BÊN PHẢI) -->
            <g transform="translate(825, 418) scale(0.88)" filter="drop-shadow(0 0 14px rgba(251, 191, 36, 0.65))">
              <!-- Đuôi cáo bông lớn phát sáng -->
              <path d="M16,6 C48,-10 74,4 64,22 C52,34 26,24 14,14 Z" fill="url(#oryxGold)"/>
              <!-- Thân cáo -->
              <path d="M-22,12 C-12,-4 10,-4 20,10 C10,18 -10,18 -22,12 Z" fill="url(#oryxGold)"/>
              <!-- Đôi tai lớn đặc trưng của cáo sa mạc Fennec -->
              <path d="M-18,8 L-34,-18 L-16,-8 L-4,-22 L-4,4 Z" fill="#fef08a"/>
              <path d="M-18,14 L-22,34 M-8,15 L-10,35 M10,14 L12,34 M18,12 L22,32" stroke="#fed7aa" stroke-width="2.6" stroke-linecap="round"/>
            </g>

            <!-- Cụm Xương Rồng Sa Mạc & Tinh Thể Hổ Phách Phát Quang Hai Bên -->
            <g transform="translate(62, 455)" filter="drop-shadow(0 0 10px rgba(45, 212, 191, 0.55))">
              <path d="M0,30 L0,-35 M0,-8 Q-18,-8 -18,-25 L-18,-32 M0,2 Q18,2 18,-15 L18,-24" fill="none" stroke="#2dd4bf" stroke-width="6" stroke-linecap="round"/>
              <circle cx="0" cy="-38" r="3.5" fill="#fef08a"/>
              <circle cx="-18" cy="-35" r="3" fill="#fbbf24"/>
              <circle cx="18" cy="-27" r="3" fill="#fbbf24"/>
            </g>
            <g transform="translate(938, 458)" filter="drop-shadow(0 0 10px rgba(45, 212, 191, 0.55))">
              <path d="M0,30 L0,-32 M0,-5 Q-16,-5 -16,-22 L-16,-28 M0,4 Q16,4 16,-14 L16,-20" fill="none" stroke="#2dd4bf" stroke-width="5.5" stroke-linecap="round"/>
              <circle cx="0" cy="-35" r="3.5" fill="#fef08a"/>
            </g>

            <!-- Các hạt bụi vàng sa mạc & ốc đảo ngọc lam bay lơ lửng -->
            <g fill="#fde68a" opacity="0.88">
              <circle cx="145" cy="235" r="3"/><circle cx="285" cy="195" r="2.5"/><circle cx="410" cy="155" r="2.4"/>
              <circle cx="595" cy="160" r="2.5"/><circle cx="725" cy="205" r="3"/><circle cx="855" cy="240" r="2.6"/>
              <circle cx="360" cy="425" r="2.8"/><circle cx="640" cy="420" r="2.6"/>
            </g>
            <g fill="#5eead4" opacity="0.8">
              <circle cx="205" cy="295" r="2.6"/><circle cx="795" cy="290" r="2.6"/>
              <circle cx="465" cy="410" r="2.5"/><circle cx="545" cy="415" r="2.8"/>
            </g>
          </svg>

          <!-- TIÊU ĐỀ SLIDE (CĂN GIỮA, CỠ CHỮ LỚN NỔI BẬT) -->
          <div class="anim-title" style="position: relative; z-index: 2; max-width: 900px;">
            <div style="display: inline-flex; align-items: center; gap: 10px; padding: 6px 22px; background: rgba(42, 12, 7, 0.84); border: 1.5px solid rgba(251, 146, 60, 0.65); border-radius: 999px; font-size: clamp(0.92rem, 1.2vw, 1.08rem); font-weight: 800; color: #fdba74; letter-spacing: 1.2px; margin-bottom: 12px; backdrop-filter: blur(10px); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);">
              <span>🏜️</span> CẤU TRÚC ĐẠI SỐ — CHƯƠNG 3
            </div>
            <h1 style="font-size: clamp(2.55rem, 4.1vw, 3.45rem); font-weight: 800; color: #ffffff; margin: 0 0 8px; line-height: 1.18; letter-spacing: -0.5px; text-shadow: 0 4px 28px rgba(0, 0, 0, 0.78);">
              Lớp Kề &amp; <span style="color: #fbbf24;">Định Lý Lagrange</span>
            </h1>
            <p style="font-size: clamp(1.1rem, 1.45vw, 1.3rem); color: #fed7aa; margin: 0; font-weight: 600; text-shadow: 0 2px 10px rgba(0,0,0,0.6);">
              Giáo trình Cấu trúc Đại số · TS. Huỳnh Việt Khánh
            </p>
          </div>

          <!-- TÂM ĐIỂM: KHỐI CÂU HỎI TRIẾT HỌC TRUNG TÂM -->
          <div class="slide-glass-card anim-card anim-d1" style="position: relative; z-index: 2; max-width: 880px; width: 100%; padding: 26px 38px; margin: 12px 0; background: rgba(42, 12, 7, 0.82) !important; border: 1.5px solid rgba(251, 146, 60, 0.55) !important; border-radius: 18px; backdrop-filter: blur(20px); box-shadow: 0 20px 50px rgba(18, 4, 2, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.2); text-align: center;">
            <div style="font-size: clamp(0.98rem, 1.25vw, 1.12rem); font-weight: 800; color: #fbbf24; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">
              ✦ Câu Hỏi Trung Tâm Của Chương ✦
            </div>
            <p style="font-size: clamp(1.26rem, 1.72vw, 1.5rem); line-height: 1.62; color: #ffffff; margin: 0; font-weight: 500;">
              Khi dùng phép nhân của nhóm mẹ $G$ để "dịch chuyển" một nhóm con $H$ đi khắp không gian, tại sao các <b style="color: #fdba74;">bản sao lớp kề $gH$</b> lại chia đều toàn bộ nhóm mẹ thành những khối rời nhau có <b style="color: #5eead4;">cùng kích thước tuyệt đối</b>?
            </p>
          </div>

          <!-- ĐÁY SLIDE: THANH 4 TRỤ CỘT KIẾN THỨC (KHÔNG THANH CUỘN) -->
          <div class="anim-card anim-d2" style="position: relative; z-index: 2; display: flex; flex-wrap: nowrap; justify-content: space-between; align-items: center; gap: 6px; width: 100%; max-width: 960px; padding: 8px 14px; box-sizing: border-box; background: rgba(42, 12, 7, 0.88); border: 1.5px solid rgba(251, 146, 60, 0.42); border-radius: 999px; backdrop-filter: blur(12px); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45); overflow: hidden;">
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(249, 115, 22, 0.24); border: 1px solid rgba(251, 146, 60, 0.5); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #fed7aa; white-space: nowrap;">
              1. Lớp Kề $gH, Hg$ &amp; Chỉ Số
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(45, 212, 191, 0.2); border: 1px solid rgba(45, 212, 191, 0.45); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #5eead4; white-space: nowrap;">
              2. Phân Hoạch &amp; Song Ánh
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(251, 191, 36, 0.22); border: 1px solid rgba(251, 191, 36, 0.48); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #fde68a; white-space: nowrap;">
              3. Định Lý Lagrange &amp; Euler
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(244, 63, 94, 0.22); border: 1px solid rgba(251, 113, 133, 0.48); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #fda4af; white-space: nowrap;">
              4. Hai Mệnh Đề Đảo Sai
            </span>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 2: ĐỘNG CƠ SƯ PHẠM - TỪ PHÉP TỊNH TIẾN ĐẾN KHÁI NIỆM LỚP KỀ
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(251,191,36,0.14), transparent 32%), linear-gradient(135deg, #1c0704, #3d1209 55%, #1c0704); border:1.5px solid rgba(251,146,60,0.48); color:#fff7ed;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(249,115,22,0.24); border:1.5px solid #fb923c; border-radius:999px; color:#fed7aa; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🌅 TRỰC QUAN KHỞI NGUỒN
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Từ Các Lớp Đồng Dư $a + n\\mathbb{Z}$ Đến Ý Tưởng Tịnh Tiến Nhóm Con</h2>
            <p style="color:#fed7aa; font-size:clamp(1.14rem, 1.46vw, 1.3rem); line-height:1.58; margin:0;">
              Nhìn lại tập các lớp đồng dư modulo $3$ trong nhóm cộng $(\\mathbb{Z}, +)$ dưới góc nhìn của nhóm con $H = 3\\mathbb{Z}$:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Phép tịnh tiến trong (Z, +) -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(251,146,60,0.45)!important; border-left:5px solid #fbbf24!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.2rem, 1.55vw, 1.38rem); display:block; margin-bottom:10px;">1) Dịch Chuyển Nhóm Con $H = 3\\mathbb{Z}$ Trong $\\mathbb{Z}$:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.75; color:#fff7ed;">
                - <b>Nhóm con gốc:</b> $0 + 3\\mathbb{Z} = \\{\\dots, -3, 0, 3, 6, \\dots\\}$.<br>
                - <b>Tịnh tiến thêm $1$:</b> $1 + 3\\mathbb{Z} = \\{\\dots, -2, 1, 4, 7, \\dots\\}$.<br>
                - <b>Tịnh tiến thêm $2$:</b> $2 + 3\\mathbb{Z} = \\{\\dots, -1, 2, 5, 8, \\dots\\}$.<br>
                - Ba "bản sao dịch chuyển" này hoàn toàn rời nhau và lắp ghép vừa khít toàn bộ trục số nguyên $\\mathbb{Z}$!
              </div>
            </div>

            <!-- Cột 2: Tổng quát hóa lên nhóm trừu tượng G -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(45,212,191,0.45)!important; border-left:5px solid #2dd4bf!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.2rem, 1.55vw, 1.38rem); display:block; margin-bottom:10px;">2) Tổng Quát Hóa Lên Nhóm Bất Kỳ $(G, \\cdot)$:</b>
              <div class="slide-math-display" style="background:rgba(24,6,3,0.92); border-color:#2dd4bf; color:#99f6e4; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:12px; margin:8px 0 12px;">
                $$H \\le G,\\; g \\in G \\quad \\xrightarrow{\\text{tịnh tiến}}\\quad gH = \\{gh \\mid h \\in H\\}$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fff7ed;">
                - Khi nhóm $G$ <b>không giao hoán</b>, việc nhân phần tử $g$ vào bên trái ($gH$) hay bên phải ($Hg$) sẽ tạo ra hai họ bản sao dịch chuyển: <b>lớp kề trái</b> và <b>lớp kề phải</b>.
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 3: ĐỊNH NGHĨA - LỚP KỀ TRÁI, LỚP KỀ PHẢI & ĐẠI DIỆN LỚP
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(251,191,36,0.14), transparent 32%), linear-gradient(135deg, #1c0704, #3d1209 55%, #1c0704); border:1.5px solid rgba(251,146,60,0.48); color:#fff7ed;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(249,115,22,0.24); border:1.5px solid #fb923c; border-radius:999px; color:#fed7aa; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 ĐỊNH NGHĨA
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Lớp Kề Trái, Lớp Kề Phải và Phần Tử Đại Diện</h2>
            <p style="color:#fed7aa; font-size:clamp(1.14rem, 1.46vw, 1.3rem); line-height:1.58; margin:0;">
              Cho nhóm $G$ và một nhóm con $H \\le G$. Với mỗi phần tử $g \\in G$, ta xác định:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Lớp kề trái -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(251,146,60,0.48)!important; border-top:5px solid #fbbf24!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.2rem, 1.55vw, 1.38rem);">(i) Lớp kề trái (Left Coset) của $H$ chứa $g$:</b>
              <div class="slide-math-display" style="background:rgba(24,6,3,0.92); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.24rem, 1.65vw, 1.46rem); padding:12px; margin:14px 0;">
                $$gH = \\{gh \\mid h \\in H\\}$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.7; color:#fff7ed;">
                - Trong ký hiệu cộng: <b style="color:#fde68a;">$g + H = \\{g + h \\mid h \\in H\\}$</b>.<br>
                - Phần tử $g = ge \\in gH$ được gọi là một <b>đại diện</b> của lớp kề $gH$.
              </div>
            </div>

            <!-- Lớp kề phải -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(45,212,191,0.48)!important; border-top:5px solid #2dd4bf!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.2rem, 1.55vw, 1.38rem);">(ii) Lớp kề phải (Right Coset) của $H$ chứa $g$:</b>
              <div class="slide-math-display" style="background:rgba(24,6,3,0.92); border-color:#2dd4bf; color:#99f6e4; font-size:clamp(1.24rem, 1.65vw, 1.46rem); padding:12px; margin:14px 0;">
                $$Hg = \\{hg \\mid h \\in H\\}$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.7; color:#fff7ed;">
                - Trong ký hiệu cộng: <b style="color:#99f6e4;">$H + g = \\{h + g \\mid h \\in H\\}$</b>.<br>
                - Nếu nhóm $G$ giao hoán (Abel), lớp kề trái và lớp kề phải luôn trùng nhau ($gH = Hg, \\forall g \\in G$).
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 4: LƯU Ý QUAN TRỌNG - LỚP KỀ CÓ PHẢI LÀ NHÓM CON KHÔNG?
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(251,191,36,0.14), transparent 32%), linear-gradient(135deg, #1c0704, #3d1209 55%, #1c0704); border:1.5px solid rgba(251,146,60,0.48); color:#fff7ed;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.24); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              ⚠️ LƯU Ý QUAN TRỌNG
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Một Lớp Kề $gH$ Nói Chung Không Phải Là Một Nhóm Con!</h2>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(42,12,7,0.92); border:1.5px solid #fbbf24; color:#fde68a; font-size:clamp(1.26rem, 1.7vw, 1.5rem); padding:16px 24px; margin:0;">
            $$gH \\le G \\iff e \\in gH \\iff g \\in H \\iff gH = H$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Giải thích lý thuyết -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(251,146,60,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fdba74; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Tại sao lớp kề $gH$ (với $g \\notin H$) không là nhóm con?</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fff7ed; margin-top:10px;">
                - Bản thân nhóm con $H$ chính là lớp kề ứng với đại diện đơn vị: <b style="color:#fde68a;">$eH = He = H$</b>.<br>
                - Mọi nhóm con đều bắt buộc phải chứa phần tử đơn vị $e$.<br>
                - Nhưng nếu $g \\notin H$, lớp kề $gH$ bị dịch chuyển rời hẳn khỏi $H$ nên <b>không chứa phần tử đơn vị $e$</b> (và cũng không đóng với phép toán)!
              </div>
            </div>

            <!-- Ví dụ cụ thể -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(244,63,94,0.48)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Minh họa trực quan trên $(\\mathbb{Z}, +)$ với $H = 2\\mathbb{Z}$:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fff7ed; margin-top:10px;">
                - Lớp kề $0 + 2\\mathbb{Z} = 2\\mathbb{Z}$ (tập số chẵn) là nhóm con.<br>
                - Lớp kề $1 + 2\\mathbb{Z}$ (tập các số nguyên lẻ) <b>chỉ là một tập con, không phải nhóm con</b> vì:<br>
                &nbsp;&nbsp;+ Không chứa số đơn vị $0$ ($0 \\notin 1 + 2\\mathbb{Z}$).<br>
                &nbsp;&nbsp;+ Không đóng với phép cộng ($1 + 3 = 4 \\notin 1 + 2\\mathbb{Z}$).
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 5: ĐỊNH NGHĨA - CHỈ SỐ CỦA NHÓM CON [G : H] & TẬP THƯƠNG G/H
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(251,191,36,0.14), transparent 32%), linear-gradient(135deg, #1c0704, #3d1209 55%, #1c0704); border:1.5px solid rgba(251,146,60,0.48); color:#fff7ed;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(249,115,22,0.24); border:1.5px solid #fb923c; border-radius:999px; color:#fed7aa; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 ĐỊNH NGHĨA
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Chỉ Số Của Nhóm Con $[G : H]$ &amp; Tập Thương $G/H$</h2>
            <p style="color:#fed7aa; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Cho nhóm con $H \\le G$. Số lượng các lớp kề trái phân biệt của $H$ trong $G$ được gọi là <b>chỉ số (index)</b> của $H$ trong $G$:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(42,12,7,0.92); border:1.5px solid #fbbf24; color:#fde68a; font-size:clamp(1.26rem, 1.7vw, 1.5rem); padding:14px 22px; margin:0;">
            $$G/H = \\{gH \\mid g \\in G\\}, \\qquad [G : H] = |G/H|$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Tính chất 1 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(45,212,191,0.45)!important; border-left:5px solid #2dd4bf!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">(i) Số lớp kề trái luôn bằng số lớp kề phải:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fff7ed; margin-top:10px;">
                - Ánh xạ $\\Phi(gH) = Hg^{-1}$ là một song ánh giữa tập các lớp kề trái và tập các lớp kề phải (kể cả khi $G$ vô hạn).<br>
                - Do đó chỉ số $[G : H]$ không phụ thuộc vào việc đếm lớp kề trái hay lớp kề phải!
              </div>
            </div>

            <!-- Tính chất 2 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(251,146,60,0.45)!important; border-left:5px solid #fbbf24!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">(ii) Hai điểm cốt lõi cần lưu tâm:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fff7ed; margin-top:10px;">
                - <b>Nhóm vô hạn vẫn có thể có chỉ số hữu hạn:</b> Ví dụ $[\\mathbb{Z} : n\\mathbb{Z}] = n &lt; \\infty$ dù cả $\\mathbb{Z}$ và $n\\mathbb{Z}$ đều vô hạn.<br>
                - <b>Bản chất $G/H$ ở Chương 3:</b> $G/H$ mới chỉ là <b>tập hợp các khối</b>, chưa trang bị phép toán nhóm!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 6: ĐỊNH LÝ - QUAN HỆ TƯƠNG ĐƯƠNG CẢM SINH & PHÂN HOẠCH
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(251,191,36,0.14), transparent 32%), linear-gradient(135deg, #1c0704, #3d1209 55%, #1c0704); border:1.5px solid rgba(251,146,60,0.48); color:#fff7ed;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Quan Hệ Tương Đương Cảm Sinh &amp; Định Lý Phân Hoạch Lớp Kề</h2>
            <p style="color:#fed7aa; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Cho nhóm con $H \\le G$. Xét quan hệ hai ngôi $\\sim_H$ trên $G$ định bởi <b style="color:#fde68a;">$x \\sim_H y \\iff x^{-1}y \\in H$</b> (dạng cộng: $y - x \\in H$):
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Chứng minh 3 tiên đề tương đương nhờ H <= G -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(251,146,60,0.45)!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.16rem, 1.5vw, 1.34rem);">1) Ba tiên đề của $H \\le G$ sinh ra 3 tiên đề của $\\sim_H$:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fff7ed; margin-top:10px;">
                - <b>(i) Phản xạ:</b> Do $e \\in H$, ta có $x^{-1}x = e \\in H \\implies x \\sim_H x$.<br>
                - <b>(ii) Đối xứng:</b> Nếu $x^{-1}y \\in H$, do $H$ đóng với nghịch đảo nên $y^{-1}x = (x^{-1}y)^{-1} \\in H \\implies y \\sim_H x$.<br>
                - <b>(iii) Bắc cầu:</b> Nếu $x^{-1}y \\in H$ và $y^{-1}z \\in H$, do $H$ đóng với tích nên $x^{-1}z = (x^{-1}y)(y^{-1}z) \\in H \\implies x \\sim_H z$.
              </div>
            </div>

            <!-- Cột 2: Lớp tương đương chính là lớp kề -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(45,212,191,0.45)!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.16rem, 1.5vw, 1.34rem);">2) Lớp tương đương của $a$ chính là lớp kề trái $aH$:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fff7ed; margin-top:10px;">
                - Với $a \\in G$: $x \\in [a] \\iff a^{-1}x = h \\in H \\iff x = ah \\in aH$. Vậy $[a] = aH$.<br>
                - Hai lớp kề bất kỳ <b>hoặc trùng khít nhau, hoặc rời nhau đôi một</b>:
                <div class="slide-math-display" style="background:rgba(24,6,3,0.92); border-color:#2dd4bf; color:#99f6e4; font-size:clamp(1.1rem, 1.42vw, 1.28rem); padding:10px; margin:10px 0 0;">
                  $$aH = bH \\iff b \\in aH \\iff a^{-1}b \\in H \\iff aH \\cap bH \\neq \\emptyset$$
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 7: ĐỊNH LÝ - SONG ÁNH TỊNH TIẾN & SỰ BẢO TOÀN KÍCH THƯỚC
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(251,191,36,0.14), transparent 32%), linear-gradient(135deg, #1c0704, #3d1209 55%, #1c0704); border:1.5px solid rgba(251,146,60,0.48); color:#fff7ed;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Song Ánh Tịnh Tiến &amp; Sự Bảo Toàn Tuyệt Đối Kích Thước Lớp Kề</h2>
            <p style="color:#fed7aa; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Tại sao mọi lớp kề $gH$ và $Hg$ đều có đúng số lượng phần tử bằng $|H|$ mà không bị co lại khi nhân với $g$?
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(42,12,7,0.92); border:1.5px solid #fbbf24; color:#fde68a; font-size:clamp(1.26rem, 1.7vw, 1.5rem); padding:14px 22px; margin:0;">
            $$\\lambda_g : H \\longrightarrow gH, \\quad h \\longmapsto gh \\quad \\text{là một song ánh} \\implies \\mathbf{|gH| = |Hg| = |H|}$$
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(251,146,60,0.45)!important; padding:22px 26px; border-radius:14px;">
            <b style="color:#5eead4; font-size:clamp(1.2rem, 1.55vw, 1.38rem); display:block; margin-bottom:10px;">🔍 Chứng minh 2 bước dựa trên Luật giản ước (Chương 1):</b>
            <div style="font-size:clamp(1.12rem, 1.44vw, 1.28rem); line-height:1.78; color:#fff7ed;">
              <b>1) Tính toàn ánh (Surjective):</b> Theo định nghĩa $gH = \\{gh \\mid h \\in H\\}$, mọi phần tử $x \\in gH$ đều viết được dưới dạng $x = gh = \\lambda_g(h)$ với $h \\in H$.<br>
              <b>2) Tính đơn ánh (Injective):</b> Với mọi $h_1, h_2 \\in H$, nếu $\\lambda_g(h_1) = \\lambda_g(h_2)$ thì:<br>
              $$gh_1 = gh_2 \\;\\xrightarrow{\\text{giản ước trái } g}\\; h_1 = h_2$$
              - Vậy $\\lambda_g$ là song ánh (ánh xạ ngược là $x \\mapsto g^{-1}x$), nên $|gH| = |H|$ đúng cho cả tập hữu hạn lẫn vô hạn! $\\blacksquare$
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 8: VÍ DỤ SOI SÁNG 1 - LỚP KỀ DẠNG CỘNG TRONG Z/15Z
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(251,191,36,0.14), transparent 32%), linear-gradient(135deg, #1c0704, #3d1209 55%, #1c0704); border:1.5px solid rgba(251,146,60,0.48); color:#fff7ed;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(45,212,191,0.22); border:1.5px solid #2dd4bf; border-radius:999px; color:#5eead4; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Phân Hoạch Nhóm Cộng $\\mathbb{Z}/15\\mathbb{Z}$ Theo Nhóm Con $H = \\langle [5] \\rangle$</h2>
            <p style="color:#fed7aa; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Trong $G = \\mathbb{Z}/15\\mathbb{Z}$ ($|G| = 15$), xét nhóm con $H = \\langle [5] \\rangle = \\{[0], [5], [10]\\}$ có cấp $|H| = 3$:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Liệt kê 5 lớp kề -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(251,146,60,0.45)!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.16rem, 1.5vw, 1.34rem);">1) Liệt kê $[G : H] = \\dfrac{15}{3} = 5$ lớp kề rời nhau:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fff7ed; margin-top:10px;">
                - $[0] + H = \\{[0],\\; [5],\\; [10]\\} = H$<br>
                - $[1] + H = \\{[1],\\; [6],\\; [11]\\}$<br>
                - $[2] + H = \\{[2],\\; [7],\\; [12]\\}$<br>
                - $[3] + H = \\{[3],\\; [8],\\; [13]\\}$<br>
                - $[4] + H = \\{[4],\\; [9],\\; [14]\\}$
              </div>
            </div>

            <!-- Cột 2: Quy tắc kiểm tra nhanh 2 lớp kề trùng nhau -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(45,212,191,0.45)!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.16rem, 1.5vw, 1.34rem);">2) Quy tắc kiểm tra nhanh $a + H = b + H$:</b>
              <div class="slide-math-display" style="background:rgba(24,6,3,0.92); border-color:#2dd4bf; color:#99f6e4; font-size:clamp(1.14rem, 1.48vw, 1.32rem); padding:10px; margin:10px 0;">
                $$a + H = b + H \\iff a - b \\in H$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.7; color:#fff7ed;">
                - <b>So sánh $[11] + H$ và $[1] + H$:</b><br>
                &nbsp;&nbsp;+ Hiệu $[11] - [1] = [10] \\in H \\implies \\mathbf{[11] + H = [1] + H}$.<br>
                - <b>So sánh $[12] + H$ và $[1] + H$:</b><br>
                &nbsp;&nbsp;+ Hiệu $[12] - [1] = [11] \\notin H \\implies \\mathbf{[12] + H \\neq [1] + H}$.
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 9: VÍ DỤ SOI SÁNG 2 - LỚP KỀ TRÁI VÀ PHẢI TRONG S3
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(251,191,36,0.14), transparent 32%), linear-gradient(135deg, #1c0704, #3d1209 55%, #1c0704); border:1.5px solid rgba(251,146,60,0.48); color:#fff7ed;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(45,212,191,0.22); border:1.5px solid #2dd4bf; border-radius:999px; color:#5eead4; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Lớp Kề Trái và Lớp Kề Phải Trong Nhóm Không Giao Hoán $S_3$</h2>
            <p style="color:#fed7aa; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Trong $S_3$ ($|S_3| = 6$), xét nhóm con $H = \\langle (1\\,2) \\rangle = \\{e, (1\\,2)\\}$ có cấp $|H| = 2$, chỉ số $[S_3 : H] = 3$:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: 3 lớp kề trái -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(251,146,60,0.45)!important; border-left:5px solid #fbbf24!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Ba Lớp Kề Trái $gH = \\{ge, g(1\\,2)\\}$:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.78; color:#fff7ed; margin-top:10px;">
                - $eH = \\{e, (1\\,2)\\} = H$<br>
                - $(1\\,3)H = \\{(1\\,3)e,\\; (1\\,3)(1\\,2)\\} = \\{(1\\,3),\\; \\mathbf{(1\\,2\\,3)}\\}$<br>
                - $(2\\,3)H = \\{(2\\,3)e,\\; (2\\,3)(1\\,2)\\} = \\{(2\\,3),\\; \\mathbf{(1\\,3\\,2)}\\}$
              </div>
            </div>

            <!-- Cột 2: 3 lớp kề phải -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(244,63,94,0.48)!important; border-left:5px solid #fb7185!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Ba Lớp Kề Phải $Hg = \\{eg, (1\\,2)g\\}$:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.78; color:#fff7ed; margin-top:10px;">
                - $He = \\{e, (1\\,2)\\} = H$<br>
                - $H(1\\,3) = \\{e(1\\,3),\\; (1\\,2)(1\\,3)\\} = \\{(1\\,3),\\; \\mathbf{(1\\,3\\,2)}\\}$<br>
                - $H(2\\,3) = \\{e(2\\,3),\\; (1\\,2)(2\\,3)\\} = \\{(2\\,3),\\; \\mathbf{(1\\,2\\,3)}\\}$
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(42,12,7,0.92)!important; border:1.5px solid #fb7185!important; color:#fecdd3!important; font-size:clamp(1.08rem, 1.38vw, 1.24rem); text-align:center;">
            <b>⚡ Phát hiện quan trọng:</b> Với $g = (1\\,3)$, dù $(1\\,3)H$ và $H(1\\,3)$ có cùng kích thước bằng $2$ và cùng chứa $(1\\,3)$, nhưng <b style="color:#fde68a;">$(1\\,3)H \\neq H(1\\,3)$</b>!
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 10: MỆNH ĐỀ - NHÓM CON CHỈ SỐ 2 LUÔN CÓ LỚP TRÁI BẰNG LỚP PHẢI
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(251,191,36,0.14), transparent 32%), linear-gradient(135deg, #1c0704, #3d1209 55%, #1c0704); border:1.5px solid rgba(251,146,60,0.48); color:#fff7ed;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ MỆNH ĐỀ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Nhóm Con Chỉ Số $2$ Luôn Có Lớp Kề Trái Trùng Lớp Kề Phải</h2>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(42,12,7,0.92); border:1.5px solid #fbbf24; color:#fde68a; font-size:clamp(1.28rem, 1.72vw, 1.52rem); padding:16px 24px; margin:0;">
            $$\\text{Cho } H \\le G: \\qquad [G : H] = 2 \\implies gH = Hg, \\quad \\forall g \\in G$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Chứng minh bằng phần bù -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(251,146,60,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Chứng minh tuyệt đẹp bằng Phần bù tập hợp:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fff7ed; margin-top:10px;">
                - Vì $[G : H] = 2$, nhóm $G$ được chia thành đúng <b>$2$ lớp kề trái</b> rời nhau và <b>$2$ lớp kề phải</b> rời nhau.<br>
                - <b>Trường hợp 1 ($g \\in H$):</b> Khi đó $gH = H = Hg$.<br>
                - <b>Trường hợp 2 ($g \\notin H$):</b> Vì lớp thứ nhất là $eH = H$, nên lớp thứ hai bắt buộc phải là toàn bộ phần bù:<br>
                $$gH = G \\setminus H = Hg \\implies gH = Hg! \\quad \\blacksquare$$
              </div>
            </div>

            <!-- Ví dụ nhóm thay phiên A3 trong S3 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(45,212,191,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Minh họa: Nhóm thay phiên $K = A_3 \\le S_3$:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fff7ed; margin-top:10px;">
                - Xét $K = A_3 = \\{e, (1\\,2\\,3), (1\\,3\\,2)\\}$ có cấp $3$, chỉ số $[S_3 : A_3] = \\dfrac{6}{3} = 2$.<br>
                - Với mọi chuyển vị lẻ $g \\in \\{(1\\,2), (1\\,3), (2\\,3)\\}$:<br>
                $$gK = S_3 \\setminus K = \\{(1\\,2), (1\\,3), (2\\,3)\\} = Kg$$
                - Tổng quát: Với mọi $n \\ge 2$, $[S_n : A_n] = 2 \\implies gA_n = A_n g$.
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 11: ĐỊNH LÝ LAGRANGE (ĐỊNH LÝ 3.4)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(251,191,36,0.14), transparent 32%), linear-gradient(135deg, #1c0704, #3d1209 55%, #1c0704); border:1.5px solid rgba(251,146,60,0.48); color:#fff7ed;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ TRỌNG TÂM
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Định Lý Lagrange (Lagrange's Theorem)</h2>
            <p style="color:#fed7aa; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Cho $G$ là một <b>nhóm hữu hạn</b> và $H$ là một nhóm con của $G$ ($H \\le G$). Khi đó cấp của $H$ luôn là một ước số của cấp nhóm $G$:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(42,12,7,0.94); border:2px solid #fbbf24; color:#fde68a; font-size:clamp(1.32rem, 1.8vw, 1.6rem); padding:16px 24px; margin:0;">
            $$|G| = [G : H] \\cdot |H| \\qquad \\Longleftrightarrow \\qquad [G : H] = \\frac{|G|}{|H|}$$
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(251,146,60,0.45)!important; padding:22px 26px; border-radius:14px;">
            <b style="color:#5eead4; font-size:clamp(1.2rem, 1.55vw, 1.38rem); display:block; margin-bottom:10px;">🔍 Chứng minh trực quan từ Phân hoạch các lớp kề cùng kích thước:</b>
            <div style="font-size:clamp(1.12rem, 1.44vw, 1.28rem); line-height:1.78; color:#fff7ed;">
              - Đặt $k = [G : H]$ là số lượng các lớp kề trái phân biệt của $H$ trong $G$: $g_1H, g_2H, \\dots, g_kH$.<br>
              - Vì các lớp kề này đôi một rời nhau và phủ kín $G = g_1H \\;\\dot{\\cup}\\; g_2H \\;\\dot{\\cup}\\; \\cdots \\;\\dot{\\cup}\\; g_kH$, nên:<br>
              $$|G| = |g_1H| + |g_2H| + \\cdots + |g_kH| = \\underbrace{|H| + |H| + \\cdots + |H|}_{k \\text{ lần}} = k \\cdot |H| = [G : H] \\cdot |H| \\quad \\blacksquare$$
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 12: HỆ QUẢ ĐẠI SỐ CỦA ĐỊNH LÝ LAGRANGE
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(251,191,36,0.14), transparent 32%), linear-gradient(135deg, #1c0704, #3d1209 55%, #1c0704); border:1.5px solid rgba(251,146,60,0.48); color:#fff7ed;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              🏛️ HỆ QUẢ ĐẠI SỐ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Ba Hệ Quả Cấu Trúc Trực Tiếp Từ Định Lý Lagrange</h2>
          </div>

          <div class="slide-grid-3 anim-card anim-d1" style="flex:1; align-items:stretch; gap:18px; margin:0;">
            <!-- Hệ quả 1 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(251,146,60,0.45)!important; border-top:5px solid #fbbf24!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">1) Cấp phần tử chia hết cấp nhóm</b>
              <div class="slide-math-display" style="background:rgba(24,6,3,0.92); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:10px; margin:12px 0;">
                $$\\forall a \\in G: \\quad \\operatorname{ord}(a) \\mid |G|$$
              </div>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fff7ed;">
                - <b>Chứng minh:</b> Xét nhóm con cyclic $H = \\langle a \\rangle \\le G$. Vì $|H| = \\operatorname{ord}(a)$, theo Lagrange ta có ngay $\\operatorname{ord}(a) \\mid |G|$.
              </div>
            </div>

            <!-- Hệ quả 2 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(45,212,191,0.45)!important; border-top:5px solid #2dd4bf!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">2) Lũy thừa bậc $|G|$ luôn bằng $e$</b>
              <div class="slide-math-display" style="background:rgba(24,6,3,0.92); border-color:#2dd4bf; color:#99f6e4; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:10px; margin:12px 0;">
                $$\\forall a \\in G: \\quad a^{|G|} = e$$
              </div>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fff7ed;">
                - <b>Chứng minh:</b> Đặt $m = \\operatorname{ord}(a)$. Vì $m \\mid |G|$ nên $|G| = mk$. Suy ra $a^{|G|} = (a^m)^k = e^k = e$.
              </div>
            </div>

            <!-- Hệ quả 3 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(244,63,94,0.45)!important; border-top:5px solid #fb7185!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">3) Nhóm cấp nguyên tố $p$ luôn Cyclic</b>
              <div class="slide-math-display" style="background:rgba(24,6,3,0.92); border-color:#fb7185; color:#fecdd3; font-size:clamp(1.14rem, 1.48vw, 1.32rem); padding:10px; margin:12px 0;">
                $$|G| = p \\implies G \\cong \\mathbb{Z}/p\\mathbb{Z}$$
              </div>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fff7ed;">
                - Lấy $a \\in G, a \\neq e$. Vì $\\operatorname{ord}(a) \\mid p$ và $\\operatorname{ord}(a) &gt; 1$, buộc $\\operatorname{ord}(a) = p \\implies G = \\langle a \\rangle$!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 13: HỆ QUẢ SỐ HỌC - ĐỊNH LÝ EULER & ĐỊNH LÝ FERMAT NHỎ
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(251,191,36,0.14), transparent 32%), linear-gradient(135deg, #1c0704, #3d1209 55%, #1c0704); border:1.5px solid rgba(251,146,60,0.48); color:#fff7ed;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ HỆ QUẢ SỐ HỌC
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Định Lý Euler &amp; Định Lý Fermat Nhỏ Dưới Ánh Sáng Lý Thuyết Nhóm</h2>
            <p style="color:#fed7aa; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Áp dụng hệ quả $x^{|G|} = e$ vào nhóm nhân các đơn vị <b style="color:#fde68a;">$G = U(n)$</b> có cấp <b style="color:#fde68a;">$|U(n)| = \\varphi(n)$</b> và đơn vị là $[1]_n$:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Định lý Euler -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(251,146,60,0.48)!important; border-left:5px solid #fbbf24!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.2rem, 1.55vw, 1.38rem);">1) Định Lý Euler (Euler's Totient Theorem):</b>
              <div class="slide-math-display" style="background:rgba(24,6,3,0.92); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.2rem, 1.55vw, 1.4rem); padding:12px; margin:14px 0;">
                $$\\gcd(a, n) = 1 \\implies a^{\\varphi(n)} \\equiv 1 \\pmod n$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fff7ed;">
                - <b>Chứng minh 1 dòng:</b> Vì $\\gcd(a, n) = 1$ nên $[a]_n \\in U(n)$. Áp dụng Lagrange cho nhóm $U(n)$ cấp $\\varphi(n)$: $([a]_n)^{\\varphi(n)} = [1]_n \\iff a^{\\varphi(n)} \\equiv 1 \\pmod n$. $\\blacksquare$
              </div>
            </div>

            <!-- Định lý Fermat nhỏ -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(45,212,191,0.48)!important; border-left:5px solid #2dd4bf!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.2rem, 1.55vw, 1.38rem);">2) Định Lý Fermat Nhỏ (Khi $n = p$ nguyên tố):</b>
              <div class="slide-math-display" style="background:rgba(24,6,3,0.92); border-color:#2dd4bf; color:#99f6e4; font-size:clamp(1.2rem, 1.55vw, 1.4rem); padding:12px; margin:14px 0;">
                $$p \\nmid a \\implies a^{p-1} \\equiv 1 \\pmod p$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fff7ed;">
                - Khi $p$ là số nguyên tố, $\\varphi(p) = p - 1$.<br>
                - Nhân thêm $a$ vào hai vế, ta được đẳng thức đúng với <b>mọi</b> $a \\in \\mathbb{Z}$: <b style="color:#fde68a;">$a^p \\equiv a \\pmod p$</b>.
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 14: VÍ DỤ SOI SÁNG CHO SLIDE 13 (RÚT GỌN LŨY THỪA SỐ HỌC)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(251,191,36,0.14), transparent 32%), linear-gradient(135deg, #1c0704, #3d1209 55%, #1c0704); border:1.5px solid rgba(251,146,60,0.48); color:#fff7ed;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(45,212,191,0.22); border:1.5px solid #2dd4bf; border-radius:999px; color:#5eead4; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Thực Hành Rút Gọn Lũy Thừa Lớn Bằng Định Lý Euler &amp; Fermat Nhỏ</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Bài toán 1: Định lý Euler -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(251,146,60,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Tìm số dư của $3^{100}$ khi chia cho $35$:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.75; color:#fff7ed; margin-top:10px;">
                - <b>Kiểm tra giả thiết:</b> $\\gcd(3, 35) = 1$, và:<br>
                $$\\varphi(35) = \\varphi(5)\\varphi(7) = 4 \\times 6 = 24$$
                - Theo Định lý Euler: $3^{24} \\equiv 1 \\pmod{35}$.<br>
                - Chia số mũ cho $24$: $100 = 24 \\times 4 + 4$. Suy ra:<br>
                $$3^{100} = (3^{24})^4 \\cdot 3^4 \\equiv 1^4 \\cdot 81 \\equiv \\mathbf{11} \\pmod{35}$$
              </div>
            </div>

            <!-- Bài toán 2: Định lý Fermat nhỏ -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid rgba(45,212,191,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Tìm số dư của $7^{222}$ khi chia cho $13$:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.75; color:#fff7ed; margin-top:10px;">
                - <b>Kiểm tra giả thiết:</b> $p = 13$ là số nguyên tố và $13 \\nmid 7$.<br>
                - Theo Định lý Fermat nhỏ: $7^{12} \\equiv 1 \\pmod{13}$.<br>
                - Chia số mũ cho $12$: $222 = 12 \\times 18 + 6$. Suy ra:<br>
                $$7^{222} = (7^{12})^{18} \\cdot 7^6 \\equiv (7^2)^3 = 49^3 \\equiv (-3)^3 = -27 \\equiv \\mathbf{12} \\pmod{13}$$
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 15: PHẢN VÍ DỤ 1 - BÁC BỎ CHIỀU ĐẢO LAGRANGE VỀ CẤP PHẦN TỬ
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(251,191,36,0.14), transparent 32%), linear-gradient(135deg, #1c0704, #3d1209 55%, #1c0704); border:1.5px solid rgba(251,146,60,0.48); color:#fff7ed;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.24); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              ⚠️ PHẢN VÍ DỤ 1
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Mệnh Đề Đảo Sai 1: Ước Của $|G|$ Chưa Chắc Là Cấp Của Phần Tử!</h2>
            <p style="color:#fed7aa; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Lagrange khẳng định: $\\operatorname{ord}(g) \\mid |G|$. Nhưng chiều ngược lại: <i>"Nếu $d \\mid |G|$ thì tồn tại $g \\in G$ có $\\operatorname{ord}(g) = d$"</i> là <b style="color:#fda4af;">HOÀN TOÀN SAI</b>!
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Phản ví dụ V4 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid #fb7185!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Phản ví dụ trên Nhóm Bốn Klein $V_4$ (hoặc $U(8)$):</b>
              <div class="slide-math-display" style="background:rgba(24,6,3,0.92); border-color:#fb7185; color:#fecdd3; font-size:clamp(1.16rem, 1.5vw, 1.34rem); padding:10px; margin:12px 0;">
                $$|V_4| = 4,\\; d = 4 \\mid 4 \\quad \\text{nhưng} \\quad \\nexists g \\in V_4: \\operatorname{ord}(g) = 4$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.7; color:#fff7ed;">
                - Trong $V_4 = \\{e, \\alpha, \\beta, \\gamma\\}$, ta có $\\operatorname{ord}(e) = 1$ và $\\operatorname{ord}(\\alpha) = \\operatorname{ord}(\\beta) = \\operatorname{ord}(\\gamma) = 2$.<br>
                - Không có bất kỳ phần tử nào đạt cấp $d = 4$!
              </div>
            </div>

            <!-- Phản ví dụ S3 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border:1.5px solid #fbbf24!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Phản ví dụ trên Nhóm Đối Xứng $S_3$:</b>
              <div class="slide-math-display" style="background:rgba(24,6,3,0.92); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.16rem, 1.5vw, 1.34rem); padding:10px; margin:12px 0;">
                $$|S_3| = 6,\\; d = 6 \\mid 6 \\quad \\text{nhưng} \\quad \\nexists \\sigma \\in S_3: \\operatorname{ord}(\\sigma) = 6$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.7; color:#fff7ed;">
                - Các phần tử của $S_3$ chỉ có cấp $1$ ($\\operatorname{id}$), cấp $2$ (3 chuyển vị) và cấp $3$ (2 chu trình bậc 3).<br>
                - Mọi nhóm hữu hạn không cyclic cấp $n$ đều không có phần tử cấp $n$!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 16: PHẢN VÍ DỤ 2 - BÁC BỎ CHIỀU ĐẢO LAGRANGE VỀ NHÓM CON (NHÓM A4)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(251,191,36,0.14), transparent 32%), linear-gradient(135deg, #1c0704, #3d1209 55%, #1c0704); border:1.5px solid rgba(251,146,60,0.48); color:#fff7ed;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.24); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              ⚠️ PHẢN VÍ DỤ 2 (KINH ĐIỂN)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.86rem, 2.42vw, 2.28rem);">Mệnh Đề Đảo Sai 2: Nhóm $A_4$ (Cấp $12$) Không Có Nhóm Con Cấp $6$!</h2>
            <p style="color:#fed7aa; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Mệnh đề: <i>"Nếu $d \\mid |G|$ thì $G$ luôn có ít nhất một nhóm con $H \\le G$ cấp $d$"</i> chỉ đúng cho nhóm cyclic, nhưng <b style="color:#fda4af;">SAI</b> trên nhóm tổng quát:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(42,12,7,0.92); border:1.5px solid #fb7185; color:#fecdd3; font-size:clamp(1.22rem, 1.6vw, 1.42rem); padding:14px 22px; margin:0;">
            $$|A_4| = \\frac{4!}{2} = 12, \\quad 6 \\mid 12 \\qquad \\text{nhưng} \\qquad \\mathbf{\\nexists H \\le A_4 \\text{ sao cho } |H| = 6!}$$
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.82)!important; border:1.5px solid rgba(251,146,60,0.48)!important; padding:22px 26px; border-radius:14px;">
            <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem); display:block; margin-bottom:10px;">🔍 Chứng minh phản chứng vì sao $A_4$ không thể có nhóm con cấp $6$:</b>
            <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.75; color:#fff7ed;">
              - <b>1) Đếm chu trình bậc 3 trong $A_4$:</b> Trong $A_4$ có đúng <b>$8$ phần tử cấp $3$</b> (là các chu trình dạng $(i\\,j\\,k)$).<br>
              - <b>2) Giả sử phản chứng tồn tại $H \\le A_4$ với $|H| = 6$:</b> Khi đó chỉ số $[A_4 : H] = \\dfrac{12}{6} = 2$.<br>
              - <b>3) Mâu thuẫn về số phần tử:</b> Với mọi phần tử $g \\in A_4$ cấp $3$, nếu $g \\notin H$ thì lớp kề $gH = H g$ suy ra $g^2 \\in H \\implies g = g^4 = (g^2)^2 \\in H$ (vô lý!). Vậy $H$ buộc phải chứa cả $8$ phần tử cấp $3$ cùng đơn vị $e \\implies |H| \\ge 9 &gt; 6$ (mâu thuẫn!). $\\blacksquare$
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 17: TỔNG KẾT CHƯƠNG 3
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(251,191,36,0.14), transparent 32%), linear-gradient(135deg, #1c0704, #3d1209 55%, #1c0704); border:1.5px solid rgba(251,146,60,0.48); color:#fff7ed;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(249,115,22,0.24); border:1.5px solid #fb923c; border-radius:999px; color:#fed7aa; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              🎯 TỔNG KẾT CHƯƠNG 3
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Bản Đồ Bốn Trụ Cột Kiến Thức Cốt Lõi Chương 3</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:16px; margin:0;">
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border-left:5px solid #fb923c!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fdba74; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">1) Lớp kề $gH, Hg$ &amp; Chỉ số $[G : H]$</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fff7ed; margin-top:6px;">
                - $gH$ là tập con tịnh tiến; $gH \\le G \\iff g \\in H \\iff gH = H$.<br>
                - Trong nhóm không Abel, $gH \\neq Hg$ nói chung; nhưng nếu $[G:H]=2$ thì $gH=Hg$.
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border-left:5px solid #2dd4bf!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#5eead4; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">2) Định lý Phân hoạch &amp; Song ánh tịnh tiến</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fff7ed; margin-top:6px;">
                - $aH = bH \\iff a^{-1}b \\in H \\iff aH \\cap bH \\neq \\emptyset$ (cộng: $a - b \\in H$).<br>
                - Mọi lớp kề đều có cùng lực lượng: $|gH| = |Hg| = |H|$.
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border-left:5px solid #fbbf24!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fbbf24; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">3) Định lý Lagrange &amp; Hệ quả Euler – Fermat</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fff7ed; margin-top:6px;">
                - $|G| = [G : H] \\cdot |H| \\implies |H| \\mid |G|$, $\\operatorname{ord}(a) \\mid |G|$ và $a^{|G|} = e$.<br>
                - Nhóm cấp nguyên tố $p$ luôn cyclic; $a^{\\varphi(n)} \\equiv 1 \\pmod n$ khi $\\gcd(a,n)=1$.
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,12,7,0.8)!important; border-left:5px solid #fb7185!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fda4af; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">4) Hai phản ví dụ bác bỏ chiều đảo Lagrange</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fff7ed; margin-top:6px;">
                - $V_4$ (cấp $4$) không có phần tử cấp $4$ (bác bỏ chiều đảo cấp phần tử).<br>
                - $A_4$ (cấp $12$) không có nhóm con cấp $6$ (bác bỏ chiều đảo cấp nhóm con).
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 18: CẦU NỐI SANG CHƯƠNG 4 (NHÓM CON CHUẨN TẮC & NHÓM THƯƠNG)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; gap:20px; padding:30px 38px; border-radius:16px; background:radial-gradient(circle at 50% 20%, rgba(251,191,36,0.22), transparent 45%), linear-gradient(135deg, #1c0704, #3d1209 55%, #1c0704); border:1.5px solid rgba(251,146,60,0.5); color:#fff7ed;">
          <div class="anim-title">
            <span style="display:inline-block; padding:6px 20px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; font-size:clamp(0.95rem, 1.22vw, 1.1rem); font-weight:800; color:#fde68a; margin-bottom:14px;">
              🤔 CÂU HỎI MỞ DẪN SANG CHƯƠNG 4
            </span>
            <h1 style="font-size:clamp(2.1rem, 3.1vw, 2.75rem); font-weight:800; color:#ffffff; margin:0; line-height:1.22;">
              Khi Nào Tập Thương $G/H$ Trở Thành Một Nhóm?
            </h1>
          </div>

          <div class="slide-glass-card anim-card anim-d1" style="max-width:860px; width:100%; text-align:left; padding:24px 30px; background:rgba(42,12,7,0.84)!important; border:1.5px solid rgba(251,146,60,0.5)!important; border-left:6px solid #fbbf24!important; border-radius:16px;">
            <p style="color:#fff7ed; font-size:clamp(1.12rem, 1.44vw, 1.28rem); line-height:1.72; margin:0;">
              - Trên tập hợp các lớp kề trái $G/H = \\{aH \\mid a \\in G\\}$, nếu ta thử định nghĩa phép nhân tự nhiên qua đại diện: <b style="color:#fde68a;">$(aH)(bH) = abH$</b>.<br>
              - Trong $S_3$ với $H = \\langle (1\\,2) \\rangle$, vì lớp trái khác lớp phải (<b style="color:#fda4af;">$(1\\,3)H \\neq H(1\\,3)$</b>), việc đổi đại diện khác nhau trong cùng một lớp sẽ cho ra hai lớp kết quả khác nhau! Phép nhân bị <b>phá sản</b>.<br>
              - Muốn phép nhân lớp kề <b>xác định tốt</b>, điều kiện vừa đủ là <b style="color:#5eead4;">$gH = Hg$ với mọi $g \\in G$</b> — đó chính là khái niệm <b>Nhóm Con Chuẩn Tắc</b>!
            </p>
          </div>

          <div class="anim-card anim-d2" style="padding:14px 28px; background:rgba(249,115,22,0.24); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(1.1rem, 1.42vw, 1.26rem); font-weight:800;">
            👉 Chào đón bạn đến với Chương 4: Nhóm Con Chuẩn Tắc và Nhóm Thương!
          </div>
        </div>
      `
    }
  ],
  "4": [
    // ========================================================
    // SLIDE 1: TRANG BÌA CĂN GIỮA - HỒ GƯƠNG HẮC DIỆN THẠCH & ĐÔI THIÊN NGA BẠCH KIM
    // ========================================================
    {
      html: `
        <div style="position: relative; width: 100%; height: 100%; min-height: 100%; display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center; padding: 26px 34px 22px; box-sizing: border-box; overflow: hidden; border-radius: 16px; background: radial-gradient(circle at 50% 18%, rgba(253, 224, 71, 0.22), transparent 45%), radial-gradient(ellipse at 18% 85%, rgba(226, 232, 240, 0.18), transparent 42%), radial-gradient(ellipse at 82% 85%, rgba(234, 179, 8, 0.22), transparent 40%), linear-gradient(160deg, #0b0c10 0%, #1c1910 46%, #2e2715 76%, #0d0e12 100%); border: 1.5px solid rgba(250, 204, 21, 0.55); color: #fefce8; box-shadow: 0 18px 45px rgba(10, 10, 14, 0.82);">
          
          <!-- VECTOR SVG NỀN: HỒ GƯƠNG BẠCH KIM, THIÊN BÌNH HOÀNG KIM, ĐÔI THIÊN NGA & HOA SEN PHÁT QUANG -->
          <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0;">
            <defs>
              <radialGradient id="c4MoonHalo" cx="50%" cy="28%" r="42%">
                <stop offset="0%" stop-color="#fef08a" stop-opacity="0.38"/>
                <stop offset="45%" stop-color="#eab308" stop-opacity="0.14"/>
                <stop offset="100%" stop-color="#0b0c10" stop-opacity="0"/>
              </radialGradient>
              <linearGradient id="c4MountSil" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#42381c" stop-opacity="0.55"/>
                <stop offset="100%" stop-color="#14130d" stop-opacity="0.92"/>
              </linearGradient>
              <linearGradient id="c4LakeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#272212" stop-opacity="0.88"/>
                <stop offset="100%" stop-color="#090a0d" stop-opacity="0.98"/>
              </linearGradient>
              <linearGradient id="swanPlatinum" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.96"/>
                <stop offset="60%" stop-color="#e2e8f0" stop-opacity="0.85"/>
                <stop offset="100%" stop-color="#94a3b8" stop-opacity="0.5"/>
              </linearGradient>
              <linearGradient id="swanGoldWing" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#fef08a" stop-opacity="0.92"/>
                <stop offset="65%" stop-color="#facc15" stop-opacity="0.75"/>
                <stop offset="100%" stop-color="#ca8a04" stop-opacity="0.4"/>
              </linearGradient>
              <linearGradient id="lotusGold" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#fef9c3" stop-opacity="0.95"/>
                <stop offset="65%" stop-color="#facc15" stop-opacity="0.8"/>
                <stop offset="100%" stop-color="#a16207" stop-opacity="0.4"/>
              </linearGradient>
            </defs>

            <!-- Quầng sáng trăng nhật thực & Vòng thiên văn đối xứng -->
            <circle cx="500" cy="200" r="320" fill="url(#c4MoonHalo)"/>
            <g transform="translate(500, 195)" opacity="0.34">
              <circle r="210" fill="none" stroke="#facc15" stroke-width="1.3" stroke-dasharray="10 6"/>
              <circle r="165" fill="none" stroke="#e2e8f0" stroke-width="1.2" opacity="0.75"/>
              <!-- Trục cân bằng Thiên Bình Hoàng Kim (Biểu tượng gN = Ng) -->
              <line x1="-185" y1="0" x2="185" y2="0" stroke="#fde047" stroke-width="2"/>
              <line x1="0" y1="-175" x2="0" y2="175" stroke="#e2e8f0" stroke-width="1.2" stroke-dasharray="5 5"/>
              <!-- Hai đĩa cân đối xứng hai bên -->
              <path d="M-185,0 L-205,42 L-165,42 Z" fill="none" stroke="#fde047" stroke-width="1.4"/>
              <path d="M-212,42 Q-185,56 -158,42" fill="rgba(250,204,21,0.25)" stroke="#fde047" stroke-width="2"/>
              <path d="M185,0 L165,42 L205,42 Z" fill="none" stroke="#fde047" stroke-width="1.4"/>
              <path d="M158,42 Q185,56 212,42" fill="rgba(250,204,21,0.25)" stroke="#fde047" stroke-width="2"/>
            </g>

            <!-- ĐÀN HẠC TRẮNG VƯƠNG GIẢ (CELESTIAL WHITE CRANES) BAY ĐỐI XỨNG QUA TRĂNG -->
            <g transform="translate(230, 115) rotate(-8) scale(0.85)" filter="drop-shadow(0 0 12px rgba(255, 255, 255, 0.65))">
              <path d="M0,0 C-22,-24 -62,-28 -95,-10 C-65,4 -32,8 -6,6 Z" fill="url(#swanPlatinum)"/>
              <path d="M0,0 C22,-24 62,-28 95,-10 C65,4 32,8 6,6 Z" fill="url(#swanPlatinum)"/>
              <path d="M-18,4 L24,-14" stroke="#fde047" stroke-width="2.5" stroke-linecap="round"/>
            </g>
            <g transform="translate(770, 115) scale(-0.85, 0.85) rotate(-8)" filter="drop-shadow(0 0 12px rgba(255, 255, 255, 0.65))">
              <path d="M0,0 C-22,-24 -62,-28 -95,-10 C-65,4 -32,8 -6,6 Z" fill="url(#swanPlatinum)"/>
              <path d="M0,0 C22,-24 62,-28 95,-10 C65,4 32,8 6,6 Z" fill="url(#swanPlatinum)"/>
              <path d="M-18,4 L24,-14" stroke="#fde047" stroke-width="2.5" stroke-linecap="round"/>
            </g>

            <!-- Dãy núi bạc - đồng phía xa & Mặt hồ gương phẳng lặng -->
            <path d="M0,380 Q150,305 320,355 T680,355 T1000,380 L1000,600 L0,600 Z" fill="url(#c4MountSil)"/>
            <rect x="0" y="410" width="1000" height="190" fill="url(#c4LakeGrad)"/>
            <!-- Đường chân trời mặt hồ gương phát sáng -->
            <line x1="0" y1="410" x2="1000" y2="410" stroke="#fde047" stroke-width="1.5" opacity="0.55"/>
            <!-- Gợn sóng bạc đồng tâm trên mặt hồ -->
            <g fill="none" stroke="#e2e8f0" stroke-width="1" opacity="0.35">
              <ellipse cx="185" cy="442" rx="75" ry="10"/>
              <ellipse cx="185" cy="442" rx="110" ry="16" stroke="#fde047" opacity="0.4"/>
              <ellipse cx="815" cy="442" rx="75" ry="10"/>
              <ellipse cx="815" cy="442" rx="110" ry="16" stroke="#fde047" opacity="0.4"/>
              <ellipse cx="500" cy="485" rx="160" ry="18" stroke="#fde047" opacity="0.3"/>
            </g>

            <!-- SINH VẬT HUYỀN THOẠI 1: THIÊN NGA BẠCH KIM TRÁI (BIỂU TƯỢNG LỚP KỀ TRÁI gN) -->
            <g transform="translate(175, 425) scale(0.92)" filter="drop-shadow(0 0 14px rgba(250, 204, 21, 0.55))">
              <!-- Thân và cánh thiên nga -->
              <path d="M-42,10 C-42,-12 12,-16 32,6 C18,18 -24,20 -42,10 Z" fill="url(#swanPlatinum)"/>
              <path d="M-28,4 C-18,-22 18,-24 26,0 C8,8 -14,10 -28,4 Z" fill="url(#swanGoldWing)"/>
              <!-- Cổ thiên nga uốn cong duyên dáng -->
              <path d="M24,4 C38,-18 44,-46 32,-60 C24,-66 14,-60 16,-50 C20,-42 28,-22 18,4 Z" fill="url(#swanPlatinum)"/>
              <!-- Mỏ vàng và vương miện nhỏ -->
              <polygon points="34,-58 46,-54 34,-50" fill="#facc15"/>
              <polygon points="24,-64 28,-74 32,-63" fill="#fde047"/>
              <!-- Bóng phản chiếu mờ dưới mặt hồ gương -->
              <path d="M-42,18 C-42,32 12,36 32,20 C18,14 -24,14 -42,18 Z" fill="#cbd5e1" opacity="0.22"/>
            </g>

            <!-- SINH VẬT HUYỀN THOẠI 2: THIÊN NGA BẠCH KIM PHẢI (BIỂU TƯỢNG LỚP KỀ PHẢI Ng) -->
            <g transform="translate(825, 425) scale(-0.92, 0.92)" filter="drop-shadow(0 0 14px rgba(250, 204, 21, 0.55))">
              <path d="M-42,10 C-42,-12 12,-16 32,6 C18,18 -24,20 -42,10 Z" fill="url(#swanPlatinum)"/>
              <path d="M-28,4 C-18,-22 18,-24 26,0 C8,8 -14,10 -28,4 Z" fill="url(#swanGoldWing)"/>
              <path d="M24,4 C38,-18 44,-46 32,-60 C24,-66 14,-60 16,-50 C20,-42 28,-22 18,4 Z" fill="url(#swanPlatinum)"/>
              <polygon points="34,-58 46,-54 34,-50" fill="#facc15"/>
              <polygon points="24,-64 28,-74 32,-63" fill="#fde047"/>
              <path d="M-42,18 C-42,32 12,36 32,20 C18,14 -24,14 -42,18 Z" fill="#cbd5e1" opacity="0.22"/>
            </g>

            <!-- HOA SEN HOÀNG KIM PHÁT QUANG TRÊN MẶT HỒ (GLOWING GOLDEN LOTUSES) -->
            <g transform="translate(72, 472)" filter="drop-shadow(0 0 10px rgba(250, 204, 21, 0.65))">
              <ellipse cx="0" cy="8" rx="28" ry="6" fill="#2dd4bf" opacity="0.45"/>
              <path d="M0,6 C-12,-12 -22,-4 -14,6 Z" fill="url(#lotusGold)"/>
              <path d="M0,6 C12,-12 22,-4 14,6 Z" fill="url(#lotusGold)"/>
              <path d="M-8,6 C-8,-18 8,-18 8,6 Z" fill="#fef08a"/>
            </g>
            <g transform="translate(928, 472)" filter="drop-shadow(0 0 10px rgba(250, 204, 21, 0.65))">
              <ellipse cx="0" cy="8" rx="28" ry="6" fill="#2dd4bf" opacity="0.45"/>
              <path d="M0,6 C-12,-12 -22,-4 -14,6 Z" fill="url(#lotusGold)"/>
              <path d="M0,6 C12,-12 22,-4 14,6 Z" fill="url(#lotusGold)"/>
              <path d="M-8,6 C-8,-18 8,-18 8,6 Z" fill="#fef08a"/>
            </g>

            <!-- Các hạt sáng bạch kim & vàng kim lơ lửng -->
            <g fill="#fef08a" opacity="0.9">
              <circle cx="130" cy="185" r="2.8"/><circle cx="290" cy="245" r="2.4"/><circle cx="420" cy="140" r="2.5"/>
              <circle cx="580" cy="140" r="2.5"/><circle cx="710" cy="245" r="2.4"/><circle cx="870" cy="185" r="2.8"/>
            </g>
            <g fill="#e2e8f0" opacity="0.85">
              <circle cx="195" cy="310" r="2.5"/><circle cx="805" cy="310" r="2.5"/>
              <circle cx="350" cy="455" r="2.4"/><circle cx="650" cy="455" r="2.4"/>
            </g>
          </svg>

          <!-- TIÊU ĐỀ SLIDE (CĂN GIỮA, CỠ CHỮ LỚN NỔI BẬT) -->
          <div class="anim-title" style="position: relative; z-index: 2; max-width: 900px;">
            <div style="display: inline-flex; align-items: center; gap: 10px; padding: 6px 22px; background: rgba(28, 25, 16, 0.86); border: 1.5px solid rgba(250, 204, 21, 0.65); border-radius: 999px; font-size: clamp(0.92rem, 1.2vw, 1.08rem); font-weight: 800; color: #fde047; letter-spacing: 1.2px; margin-bottom: 12px; backdrop-filter: blur(10px); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);">
              <span>⚖️</span> CẤU TRÚC ĐẠI SỐ — CHƯƠNG 4
            </div>
            <h1 style="font-size: clamp(2.45rem, 3.9vw, 3.35rem); font-weight: 800; color: #ffffff; margin: 0 0 8px; line-height: 1.18; letter-spacing: -0.5px; text-shadow: 0 4px 28px rgba(0, 0, 0, 0.82);">
              Nhóm Con Chuẩn Tắc &amp; <span style="color: #fde047;">Nhóm Thương</span>
            </h1>
            <p style="font-size: clamp(1.1rem, 1.45vw, 1.3rem); color: #e2e8f0; margin: 0; font-weight: 600; text-shadow: 0 2px 10px rgba(0,0,0,0.65);">
              Giáo trình Cấu trúc Đại số · TS. Huỳnh Việt Khánh
            </p>
          </div>

          <!-- TÂM ĐIỂM: KHỐI CÂU HỎI TRIẾT HỌC TRUNG TÂM -->
          <div class="slide-glass-card anim-card anim-d1" style="position: relative; z-index: 2; max-width: 880px; width: 100%; padding: 26px 38px; margin: 12px 0; background: rgba(24, 22, 14, 0.84) !important; border: 1.5px solid rgba(250, 204, 21, 0.55) !important; border-radius: 18px; backdrop-filter: blur(20px); box-shadow: 0 20px 50px rgba(8, 8, 10, 0.88), inset 0 1px 0 rgba(255, 255, 255, 0.22); text-align: center;">
            <div style="font-size: clamp(0.98rem, 1.25vw, 1.12rem); font-weight: 800; color: #fde047; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">
              ✦ Câu Hỏi Trung Tâm Của Chương ✦
            </div>
            <p style="font-size: clamp(1.26rem, 1.72vw, 1.5rem); line-height: 1.62; color: #ffffff; margin: 0; font-weight: 500;">
              Khi nào sự đối xứng giữa lớp kề trái và lớp kề phải (<b style="color: #fde047;">$gN = Ng$</b>) xóa bỏ hoàn toàn rào cản phụ thuộc đại diện, cho phép tập hợp các lớp kề <b style="color: #5eead4;">$G/N$</b> tự kết tinh thành một <b style="color: #f8fafc;">Nhóm Thương</b> hoàn chỉnh?
            </p>
          </div>

          <!-- ĐÁY SLIDE: THANH 4 TRỤ CỘT KIẾN THỨC (KHÔNG THANH CUỘN) -->
          <div class="anim-card anim-d2" style="position: relative; z-index: 2; display: flex; flex-wrap: nowrap; justify-content: space-between; align-items: center; gap: 6px; width: 100%; max-width: 960px; padding: 8px 14px; box-sizing: border-box; background: rgba(24, 22, 14, 0.9); border: 1.5px solid rgba(250, 204, 21, 0.42); border-radius: 999px; backdrop-filter: blur(12px); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5); overflow: hidden;">
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(234, 179, 8, 0.22); border: 1px solid rgba(250, 204, 21, 0.5); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #fef08a; white-space: nowrap;">
              1. Phép Liên Hợp &amp; $N \\trianglelefteq G$
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(226, 232, 240, 0.18); border: 1px solid rgba(226, 232, 240, 0.45); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #f1f5f9; white-space: nowrap;">
              2. Bốn Cơ Chế Chuẩn Tắc
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(45, 212, 191, 0.2); border: 1px solid rgba(45, 212, 191, 0.45); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #5eead4; white-space: nowrap;">
              3. Nhóm Thương $G/N$ &amp; $\\pi_N$
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(244, 63, 94, 0.22); border: 1px solid rgba(251, 113, 133, 0.48); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #fda4af; white-space: nowrap;">
              4. Định Lý Tâm $G/Z(G)$
            </span>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 2: ĐỘNG CƠ SƯ PHẠM - SỰ THẤT BẠI KHI NHÂN ĐẠI DIỆN LỚP KỀ
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(253,224,71,0.14), transparent 32%), linear-gradient(135deg, #0e0f12, #262112 55%, #0e0f12); border:1.5px solid rgba(250,204,21,0.48); color:#fefce8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.22); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              ⚠️ KHỞI NGUỒN SƯ PHẠM
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Sự Thất Bại Khi Nhân Đại Diện Lớp Kề Của $H = \\langle (1\\,2) \\rangle$ Trong $S_3$</h2>
            <p style="color:#e2e8f0; font-size:clamp(1.12rem, 1.44vw, 1.28rem); line-height:1.58; margin:0;">
              Trong $S_3$, xét $H = \\{e, (1\\,2)\\}$ có $3$ lớp kề trái: $C_1 = eH = \\{e, (1\\,2)\\}$, $C_2 = (1\\,3)H = \\{(1\\,3), (1\\,2\\,3)\\}$, $C_3 = (2\\,3)H = \\{(2\\,3), (1\\,3\\,2)\\}$. Thử tính tích <b style="color:#fde047;">$C_2 \\cdot C_2$</b> theo quy tắc $(aH)(bH) = abH$:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cách chọn đại diện 1 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border:1.5px solid rgba(250,204,21,0.45)!important; border-left:5px solid #fde047!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fde047; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Cách chọn đại diện thứ nhất trong $C_2$:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fefce8; margin-top:10px;">
                - Chọn $a = (1\\,3) \\in C_2$ và $b = (1\\,3) \\in C_2$.<br>
                - Nhân hai đại diện: $ab = (1\\,3)(1\\,3) = e$.<br>
                - Lớp kết quả thu được là:<br>
                <div class="slide-math-display" style="background:rgba(12,12,15,0.92); border-color:#fde047; color:#fef08a; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:10px; margin:10px 0 0;">
                  $$(ab)H = eH = \\mathbf{C_1}$$
                </div>
              </div>
            </div>

            <!-- Cách chọn đại diện 2 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border:1.5px solid rgba(244,63,94,0.48)!important; border-left:5px solid #fb7185!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Đổi đại diện $a' = (1\\,2\\,3) \\in C_2$:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fefce8; margin-top:10px;">
                - Chọn $a' = (1\\,2\\,3) \\in C_2$ và giữ nguyên $b = (1\\,3) \\in C_2$.<br>
                - Nhân hai đại diện: $a'b = (1\\,2\\,3)(1\\,3) = (2\\,3)$.<br>
                - Lớp kết quả thu được lại nhảy sang:<br>
                <div class="slide-math-display" style="background:rgba(12,12,15,0.92); border-color:#fb7185; color:#fecdd3; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:10px; margin:10px 0 0;">
                  $$(a'b)H = (2\\,3)H = \\mathbf{C_3 \\neq C_1}$$
                </div>
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(26,24,15,0.92)!important; border:1.5px solid #5eead4!important; color:#ccfbf1!important; font-size:clamp(1.06rem, 1.36vw, 1.22rem); text-align:center;">
            <b>🔍 Nguyên nhân sâu xa:</b> Phép nhân $(aH)(bH) = abH$ bị <b>phá sản</b> vì trong tích $a H b H$, ta không thể chuyển $H$ đi qua $b$ để gộp thành $abHH = abH$ (do $Hb \\neq bH$).
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 3: ĐỊNH NGHĨA - PHÉP LIÊN HỢP & NHÓM CON CHUẨN TẮC
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(253,224,71,0.14), transparent 32%), linear-gradient(135deg, #0e0f12, #262112 55%, #0e0f12); border:1.5px solid rgba(250,204,21,0.48); color:#fefce8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(234,179,8,0.22); border:1.5px solid #fde047; border-radius:999px; color:#fef08a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 ĐỊNH NGHĨA
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Phép Liên Hợp &amp; Khái Niệm Nhóm Con Chuẩn Tắc $N \\trianglelefteq G$</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Phép liên hợp -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border:1.5px solid rgba(226,232,240,0.45)!important; border-top:5px solid #e2e8f0!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#f8fafc; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(i) Phép Liên Hợp (Conjugation):</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fefce8; margin-top:10px;">
                - Với $g, x \\in G$, phần tử <b style="color:#fde047;">$gxg^{-1}$</b> được gọi là <b>phần tử liên hợp</b> của $x$ bởi $g$.<br>
                - Với $H \\le G$, tập hợp:<br>
                <div class="slide-math-display" style="background:rgba(12,12,15,0.92); border-color:#cbd5e1; color:#f8fafc; font-size:clamp(1.15rem, 1.48vw, 1.34rem); padding:10px; margin:10px 0;">
                  $$gHg^{-1} = \\{ghg^{-1} \\mid h \\in H\\} \\le G$$
                </div>
                được gọi là <b>nhóm con liên hợp</b> của $H$ bởi $g$ (có cùng cấp $|gHg^{-1}| = |H|$).
              </div>
            </div>

            <!-- Cột 2: Nhóm con chuẩn tắc -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border:1.5px solid rgba(250,204,21,0.5)!important; border-top:5px solid #fde047!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fde047; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(ii) Nhóm Con Chuẩn Tắc (Normal Subgroup):</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fefce8; margin-top:10px;">
                - Nhóm con $N \\le G$ được gọi là <b>nhóm con chuẩn tắc</b> của $G$, ký hiệu <b style="color:#fde047;">$N \\trianglelefteq G$</b> (hoặc $N \\triangleleft G$ nếu $N \\neq G$), nếu lớp kề trái bằng lớp kề phải tại mọi vị trí:
                <div class="slide-math-display" style="background:rgba(12,12,15,0.92); border-color:#fde047; color:#fef08a; font-size:clamp(1.22rem, 1.6vw, 1.42rem); padding:10px; margin:10px 0;">
                  $$gN = Ng, \\quad \\forall g \\in G$$
                </div>
                - Hai nhóm con chuẩn tắc tầm thường luôn có: $\\{e\\} \\trianglelefteq G$ và $G \\trianglelefteq G$.
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(26,24,15,0.92)!important; border:1.5px solid #fde047!important; border-left:6px solid #fde047!important; color:#fef08a!important; font-size:clamp(1.06rem, 1.36vw, 1.22rem);">
            <b>✨ Điểm cốt lõi cần lưu tâm:</b> Đẳng thức $gN = Ng$ là <b>đẳng thức giữa hai tập hợp</b> (tức $\\forall n \\in N, \\exists n' \\in N: gn = n'g$), hoàn toàn <b>không đòi hỏi</b> $gn = ng$ với từng phần tử $n \\in N$!
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 4: ĐỊNH LÝ - BA TIÊU CHUẨN TƯƠNG ĐƯƠNG CỦA TÍNH CHUẨN TẮC
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(253,224,71,0.14), transparent 32%), linear-gradient(135deg, #0e0f12, #262112 55%, #0e0f12); border:1.5px solid rgba(250,204,21,0.48); color:#fefce8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(234,179,8,0.22); border:1.5px solid #fde047; border-radius:999px; color:#fef08a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Ba Tiêu Chuẩn Tương Đương Của Nhóm Con Chuẩn Tắc</h2>
            <p style="color:#e2e8f0; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Cho nhóm con $N \\le G$. Khi đó ba mệnh đề sau đây là hoàn toàn tương đương:
            </p>
          </div>

          <div class="slide-grid-3 anim-card anim-d1" style="flex:1; align-items:stretch; gap:18px; margin:0;">
            <!-- Tiêu chuẩn 1 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border:1.5px solid rgba(226,232,240,0.45)!important; border-top:5px solid #e2e8f0!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#f8fafc; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">1) Tiêu chuẩn Lớp kề</b>
              <div class="slide-math-display" style="background:rgba(12,12,15,0.92); border-color:#cbd5e1; color:#f8fafc; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:10px; margin:12px 0;">
                $$gN = Ng, \\quad \\forall g \\in G$$
              </div>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#e2e8f0;">
                - Phân hoạch lớp kề trái và phân hoạch lớp kề phải trùng khít nhau.
              </div>
            </div>

            <!-- Tiêu chuẩn 2 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border:1.5px solid rgba(45,212,191,0.45)!important; border-top:5px solid #2dd4bf!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">2) Bất biến qua Liên hợp</b>
              <div class="slide-math-display" style="background:rgba(12,12,15,0.92); border-color:#2dd4bf; color:#99f6e4; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:10px; margin:12px 0;">
                $$gNg^{-1} = N, \\quad \\forall g \\in G$$
              </div>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#e2e8f0;">
                - Mọi nhóm con liên hợp của $N$ đều trùng với chính $N$.
              </div>
            </div>

            <!-- Tiêu chuẩn 3 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.86)!important; border:1.5px solid #fde047!important; border-top:5px solid #fde047!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#fde047; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">3) Bao hàm một phía (Thực hành)</b>
              <div class="slide-math-display" style="background:rgba(12,12,15,0.92); border-color:#fde047; color:#fef08a; font-size:clamp(1.14rem, 1.46vw, 1.3rem); padding:10px; margin:12px 0;">
                $$\\forall g \\in G, \\forall n \\in N \\implies gng^{-1} \\in N$$
              </div>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fef08a;">
                - Tức là $gNg^{-1} \\subseteq N, \\forall g \\in G$. Đây là <b>phép thử nhanh nhất</b> khi làm bài tập!
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(26,24,15,0.92)!important; border:1.5px solid #2dd4bf!important; color:#ccfbf1!important; font-size:clamp(1.06rem, 1.36vw, 1.22rem);">
            <b>🔍 Tại sao $gNg^{-1} \\subseteq N, \\forall g \\in G$ lại kéo theo $gNg^{-1} = N$?</b> Vì áp dụng bao hàm trên cho phần tử $g^{-1} \\in G$, ta có $g^{-1}Ng \\subseteq N \\implies N = g(g^{-1}Ng)g^{-1} \\subseteq gNg^{-1}$. Suy ra $gNg^{-1} = N$ (đúng cho cả nhóm vô hạn!).
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 5: VÍ DỤ SOI SÁNG 1 - KIỂM ĐỊNH CHUẨN TẮC TRÊN GL_n(R)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(253,224,71,0.14), transparent 32%), linear-gradient(135deg, #0e0f12, #262112 55%, #0e0f12); border:1.5px solid rgba(250,204,21,0.48); color:#fefce8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(45,212,191,0.22); border:1.5px solid #2dd4bf; border-radius:999px; color:#5eead4; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Thực Hành Tiêu Chuẩn Liên Hợp: $\\operatorname{SL}_n(\\mathbb{R}) \\trianglelefteq \\operatorname{GL}_n(\\mathbb{R})$</h2>
            <p style="color:#e2e8f0; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Chứng minh nhóm tuyến tính đặc biệt $\\operatorname{SL}_n(\\mathbb{R}) = \\{A \\in \\operatorname{GL}_n(\\mathbb{R}) \\mid \\det(A) = 1\\}$ là một nhóm con chuẩn tắc của $\\operatorname{GL}_n(\\mathbb{R})$:
            </p>
          </div>

          <div class="slide-glass-card anim-card anim-d1" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border:1.5px solid rgba(250,204,21,0.5)!important; border-left:6px solid #fde047!important; padding:24px 28px; border-radius:14px;">
            <b style="color:#fde047; font-size:clamp(1.2rem, 1.55vw, 1.38rem); display:block; margin-bottom:12px;">📘 Lời giải mẫu mực bằng Tiêu chuẩn bao hàm một phía ($P A P^{-1} \\in N$):</b>
            <div style="font-size:clamp(1.1rem, 1.42vw, 1.26rem); line-height:1.78; color:#fefce8;">
              - <b>Bước 1:</b> Ở Chương 2, ta đã biết $\\operatorname{SL}_n(\\mathbb{R})$ là một nhóm con của $\\operatorname{GL}_n(\\mathbb{R})$. <br>
              - <b>Bước 2 (Kiểm tra liên hợp):</b> Lấy tùy ý $P \\in \\operatorname{GL}_n(\\mathbb{R})$ và $A \\in \\operatorname{SL}_n(\\mathbb{R})$ (tức $\\det(A) = 1$).<br>
              - Xét định thức của ma trận liên hợp $P A P^{-1}$:<br>
              <div class="slide-math-display" style="background:rgba(12,12,15,0.92); border-color:#fde047; color:#fef08a; font-size:clamp(1.2rem, 1.55vw, 1.4rem); padding:12px; margin:12px 0;">
                $$\\det(P A P^{-1}) = \\det(P) \\cdot \\det(A) \\cdot (\\det P)^{-1} = \\det(P) \\cdot 1 \\cdot (\\det P)^{-1} = 1$$
              </div>
              - Suy ra $P A P^{-1} \\in \\operatorname{SL}_n(\\mathbb{R})$ với mọi $P \\in \\operatorname{GL}_n(\\mathbb{R}), A \\in \\operatorname{SL}_n(\\mathbb{R})$. Vậy <b style="color:#5eead4;">$\\operatorname{SL}_n(\\mathbb{R}) \\trianglelefteq \\operatorname{GL}_n(\\mathbb{R})$</b>! $\\blacksquare$
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 6: VÍ DỤ SOI SÁNG 2 - KIỂM ĐỊNH CHUẨN TẮC TRONG S3
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(253,224,71,0.14), transparent 32%), linear-gradient(135deg, #0e0f12, #262112 55%, #0e0f12); border:1.5px solid rgba(250,204,21,0.48); color:#fefce8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(45,212,191,0.22); border:1.5px solid #2dd4bf; border-radius:999px; color:#5eead4; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Đối Chứng Tính Chuẩn Tắc Trong Nhóm Đối Xứng $S_3$</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: H = <(12)> không chuẩn tắc -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border:1.5px solid rgba(244,63,94,0.48)!important; border-left:5px solid #fb7185!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) $H = \\langle (1\\,2) \\rangle = \\{e, (1\\,2)\\} \\not\\trianglelefteq S_3$:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fefce8; margin-top:10px;">
                - Chọn phần tử $g = (1\\,3) \\in S_3$ và $h = (1\\,2) \\in H$.<br>
                - Tính phần tử liên hợp $ghg^{-1}$ (đọc từ phải sang trái):<br>
                <div class="slide-math-display" style="background:rgba(12,12,15,0.92); border-color:#fb7185; color:#fecdd3; font-size:clamp(1.16rem, 1.5vw, 1.34rem); padding:10px; margin:12px 0;">
                  $$(1\\,3)(1\\,2)(1\\,3)^{-1} = (1\\,3)(1\\,2)(1\\,3) = (2\\,3) \\notin H$$
                </div>
                - Khi đó $(1\\,3)H(1\\,3)^{-1} = \\{e, (2\\,3)\\} \\neq H$. Vậy $H$ <b>không chuẩn tắc</b> trong $S_3$!
              </div>
            </div>

            <!-- Cột 2: A3 chuẩn tắc trong S3 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border:1.5px solid rgba(45,212,191,0.48)!important; border-left:5px solid #2dd4bf!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) $A_3 = \\{e, (1\\,2\\,3), (1\\,3\\,2)\\} \\trianglelefteq S_3$:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fefce8; margin-top:10px;">
                - Phép liên hợp bảo toàn độ dài chu trình: liên hợp của một chu trình bậc $3$ luôn là một chu trình bậc $3$.<br>
                - Ví dụ với $g = (1\\,2)$:<br>
                <div class="slide-math-display" style="background:rgba(12,12,15,0.92); border-color:#2dd4bf; color:#99f6e4; font-size:clamp(1.16rem, 1.5vw, 1.34rem); padding:10px; margin:12px 0;">
                  $$(1\\,2)(1\\,2\\,3)(1\\,2)^{-1} = (1\\,3\\,2) \\in A_3$$
                </div>
                - Lưu ý: $gng^{-1} = (1\\,3\\,2) \\neq (1\\,2\\,3) = n$, nhưng vẫn nằm trong $A_3$. Vậy $A_3 \\trianglelefteq S_3$!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 7: MỆNH ĐỀ - BỐN CƠ CHẾ TỰ NHIÊN SINH RA NHÓM CON CHUẨN TẮC
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(253,224,71,0.14), transparent 32%), linear-gradient(135deg, #0e0f12, #262112 55%, #0e0f12); border:1.5px solid rgba(250,204,21,0.48); color:#fefce8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(234,179,8,0.22); border:1.5px solid #fde047; border-radius:999px; color:#fef08a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              🏛️ MỆNH ĐỀ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Bốn Cơ Chế Kinh Điển Bảo Đảm Tính Chuẩn Tắc $N \\trianglelefteq G$</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:16px; margin:0;">
            <!-- Cơ chế 1: Nhóm mẹ Abel -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border-left:5px solid #fde047!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fde047; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">1) Nhóm mẹ $G$ là nhóm giao hoán (Abel):</b>
              <div style="font-size:clamp(1.05rem, 1.35vw, 1.2rem); line-height:1.65; color:#fefce8; margin-top:6px;">
                - Nếu $G$ là nhóm Abel thì <b>mọi nhóm con $H \\le G$ đều chuẩn tắc</b> (vì $ghg^{-1} = gg^{-1}h = h \\in H$).<br>
                - Ví dụ: $n\\mathbb{Z} \\trianglelefteq (\\mathbb{Z}, +)$ với mọi $n \\ge 0$.
              </div>
            </div>

            <!-- Cơ chế 2: Chỉ số bằng 2 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border-left:5px solid #5eead4!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#5eead4; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">2) Nhóm con có chỉ số bằng $2$ ($[G : N] = 2$):</b>
              <div style="font-size:clamp(1.05rem, 1.35vw, 1.2rem); line-height:1.65; color:#fefce8; margin-top:6px;">
                - Theo Mệnh đề 3.6, $[G : N] = 2 \\implies gN = Ng, \\forall g \\in G \\implies N \\trianglelefteq G$.<br>
                - Ví dụ: $A_n \\trianglelefteq S_n$ (do $[S_n : A_n] = 2$); nhóm phép quay $\\langle r \\rangle \\trianglelefteq D_{2n}$.
              </div>
            </div>

            <!-- Cơ chế 3: Tâm của nhóm Z(G) -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border-left:5px solid #e2e8f0!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#f8fafc; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">3) Tâm của nhóm $Z(G)$ &amp; Nhóm con nằm trong tâm:</b>
              <div style="font-size:clamp(1.05rem, 1.35vw, 1.2rem); line-height:1.65; color:#fefce8; margin-top:6px;">
                - Tâm $Z(G) = \\{z \\in G \\mid zg = gz, \\forall g \\in G\\}$ luôn chuẩn tắc trong $G$.<br>
                - Hơn nữa, mọi nhóm con $H \\le Z(G)$ đều thỏa $ghg^{-1} = h \\in H \\implies H \\trianglelefteq G$.
              </div>
            </div>

            <!-- Cơ chế 4: Nhóm con duy nhất cấp k -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border-left:5px solid #fb7185!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fda4af; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">4) Nhóm con duy nhất của $G$ có cấp bằng $k$:</b>
              <div style="font-size:clamp(1.05rem, 1.35vw, 1.2rem); line-height:1.65; color:#fefce8; margin-top:6px;">
                - Vì với mọi $g \\in G$, nhóm con liên hợp $gNg^{-1}$ có cùng cấp $|gNg^{-1}| = |N| = k$.<br>
                - Do $N$ là nhóm con duy nhất cấp $k$, bắt buộc $gNg^{-1} = N \\implies N \\trianglelefteq G$!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 8: PHẢN VÍ DỤ - TÍNH CHUẨN TẮC KHÔNG CÓ TÍNH BẮC CẦU!
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(253,224,71,0.14), transparent 32%), linear-gradient(135deg, #0e0f12, #262112 55%, #0e0f12); border:1.5px solid rgba(250,204,21,0.48); color:#fefce8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.24); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              ⚠️ PHẢN VÍ DỤ KINH ĐIỂN
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Cảnh Báo Bẫy: Quan Hệ Chuẩn Tắc KHÔNG Có Tính Bắc Cầu!</h2>
            <p style="color:#e2e8f0; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Nếu $K \\trianglelefteq H$ và $H \\trianglelefteq G$, ta <b style="color:#fda4af;">KHÔNG THỂ SUY RA</b> $K \\trianglelefteq G$! Xét phản ví dụ trong nhóm đối xứng hình vuông $D_8$:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(26,24,15,0.94); border:1.5px solid #fb7185; color:#fecdd3; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:14px 22px; margin:0;">
            $$D_8 = \\langle r, s \\mid r^4 = s^2 = e,\\; sr = r^{-1}s = r^3s \\rangle, \\qquad |D_8| = 8$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: K <| H <| D8 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border:1.5px solid rgba(45,212,191,0.45)!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.16rem, 1.5vw, 1.34rem);">1) Chuỗi chuẩn tắc từng bậc $K \\trianglelefteq H \\trianglelefteq D_8$:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fefce8; margin-top:10px;">
                - Xét $K = \\{e, s\\}$ (cấp $2$) và $H = \\{e, r^2, s, r^2s\\}$ (cấp $4$).<br>
                - Vì $[H : K] = \\dfrac{4}{2} = 2 \\implies \\mathbf{K \\trianglelefteq H}$.<br>
                - Vì $[D_8 : H] = \\dfrac{8}{4} = 2 \\implies \\mathbf{H \\trianglelefteq D_8}$.
              </div>
            </div>

            <!-- Cột 2: K không chuẩn tắc trong D8 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border:1.5px solid rgba(244,63,94,0.48)!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.16rem, 1.5vw, 1.34rem);">2) Nhưng $K$ KHÔNG chuẩn tắc trong $D_8$:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fefce8; margin-top:10px;">
                - Lấy phép quay $r \\in D_8$ và phép lật $s \\in K$.<br>
                - Xét phần tử liên hợp của $s$ bởi $r$ trong $D_8$:<br>
                $$rsr^{-1} = r(sr^3) = r(r s) = r^2 s \\notin K = \\{e, s\\}$$
                - Vậy <b style="color:#fda4af;">$K \\not\\trianglelefteq D_8$</b>! (Tính chuẩn tắc phụ thuộc vào nhóm mẹ đang xét).
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 9: ĐỊNH LÝ TRỌNG TÂM - CẤU TRÚC NHÓM THƯƠNG G/N
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(253,224,71,0.14), transparent 32%), linear-gradient(135deg, #0e0f12, #262112 55%, #0e0f12); border:1.5px solid rgba(250,204,21,0.48); color:#fefce8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(234,179,8,0.22); border:1.5px solid #fde047; border-radius:999px; color:#fef08a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              🏛️ ĐỊNH LÝ TRỌNG TÂM
            </span>
            <h2 style="color:#ffffff; margin:0 0 6px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Định Lý Cấu Trúc Nhóm Thương $G/N$ (Quotient Group)</h2>
            <p style="color:#e2e8f0; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Cho nhóm $G$ và nhóm con $N \\le G$. Phép nhân các lớp kề <b style="color:#fde047;">$(aN)(bN) = abN$</b> là một phép toán hai ngôi <b>xác định tốt</b> trên $G/N$ khi và chỉ khi <b style="color:#5eead4;">$N \\trianglelefteq G$</b>. Khi đó $(G/N, \\cdot)$ lập thành một nhóm, gọi là <b>nhóm thương</b> của $G$ theo $N$:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:18px; margin:0;">
            <!-- Cột 1: Ký hiệu nhân -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border:1.5px solid rgba(250,204,21,0.5)!important; border-left:5px solid #fde047!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fde047; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">(i) Cấu trúc $G/N$ trong ký hiệu nhân:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fefce8; margin-top:8px;">
                - <b>Phép nhân lớp:</b> $(aN)(bN) = abN$.<br>
                - <b>Phần tử đơn vị:</b> Lớp đơn vị <b style="color:#fef08a;">$e_{G/N} = eN = N$</b>.<br>
                - <b>Phần tử nghịch đảo:</b> <b style="color:#fef08a;">$(aN)^{-1} = a^{-1}N$</b>.<br>
                - <b>Lũy thừa nguyên:</b> $(aN)^k = a^k N, \\forall k \\in \\mathbb{Z}$.
              </div>
            </div>

            <!-- Cột 2: Ký hiệu cộng & Cấp -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border:1.5px solid rgba(45,212,191,0.48)!important; border-left:5px solid #2dd4bf!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">(ii) Ký hiệu cộng &amp; Cấp của nhóm thương:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fefce8; margin-top:8px;">
                - <b>Phép cộng lớp:</b> $(a + N) + (b + N) = (a + b) + N$.<br>
                - <b>Đơn vị &amp; Phần tử đối:</b> $0_{G/N} = N$; &nbsp; $-(a + N) = (-a) + N$.<br>
                - <b>Cấp của nhóm thương (khi $|G| &lt; \\infty$):</b>
                <div class="slide-math-display" style="background:rgba(12,12,15,0.92); border-color:#2dd4bf; color:#99f6e4; font-size:clamp(1.16rem, 1.5vw, 1.34rem); padding:8px; margin:8px 0 0;">
                  $$|G/N| = [G : N] = \\frac{|G|}{|N|}$$
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 10: CHỨNG MINH TÍNH XÁC ĐỊNH TỐT CỦA PHÉP NHÂN LỚP KỀ
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(253,224,71,0.14), transparent 32%), linear-gradient(135deg, #0e0f12, #262112 55%, #0e0f12); border:1.5px solid rgba(250,204,21,0.48); color:#fefce8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(234,179,8,0.22); border:1.5px solid #fde047; border-radius:999px; color:#fef08a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🔍 CƠ CHẾ BẢN CHẤT
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Tại Sao $gN = Ng$ Giúp Phép Nhân Lớp Kề Xác Định Tốt?</h2>
            <p style="color:#e2e8f0; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Giả sử $N \\trianglelefteq G$. Ta chứng minh nếu đổi đại diện <b style="color:#fde047;">$aN = a'N$</b> và <b style="color:#fde047;">$bN = b'N$</b> thì kết quả nhân vẫn giữ nguyên <b style="color:#5eead4;">$abN = a'b'N$</b>:
            </p>
          </div>

          <div class="slide-glass-card anim-card anim-d1" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.84)!important; border:1.5px solid rgba(250,204,21,0.5)!important; padding:24px 28px; border-radius:14px;">
            <div style="font-size:clamp(1.1rem, 1.42vw, 1.26rem); line-height:1.78; color:#fefce8;">
              <b>1) Biểu diễn đại diện mới qua $N$:</b><br>
              - Từ $a' \\in a'N = aN$ và $b' \\in b'N = bN$, tồn tại $n_1, n_2 \\in N$ sao cho <b style="color:#fef08a;">$a' = an_1$</b> và <b style="color:#fef08a;">$b' = bn_2$</b>.<br>
              <b>2) Nhân hai đại diện mới và dùng tính chuẩn tắc $Nb = bN$:</b><br>
              - Xét tích: $a'b' = (an_1)(bn_2) = a(n_1 b)n_2$.<br>
              - Vì $N \\trianglelefteq G$, ta có $Nb = bN$. Do $n_1 b \\in Nb = bN$, tồn tại $n_3 \\in N$ sao cho <b style="color:#5eead4;">$n_1 b = b n_3$</b>!<br>
              <b>3) Gom các phần tử của $N$ về phía bên phải:</b><br>
              <div class="slide-math-display" style="background:rgba(12,12,15,0.92); border-color:#5eead4; color:#99f6e4; font-size:clamp(1.18rem, 1.52vw, 1.38rem); padding:12px; margin:10px 0 0;">
                $$a'b' = a(b n_3)n_2 = (ab)(n_3 n_2) \\in (ab)N \\implies \\mathbf{a'b'N = abN} \\quad \\blacksquare$$
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 11: LƯU Ý QUAN TRỌNG - CẤP CỦA LỚP KỀ aN TRONG NHÓM THƯƠNG G/N
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(253,224,71,0.14), transparent 32%), linear-gradient(135deg, #0e0f12, #262112 55%, #0e0f12); border:1.5px solid rgba(250,204,21,0.48); color:#fefce8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(234,179,8,0.22); border:1.5px solid #fde047; border-radius:999px; color:#fef08a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              ⚡ KỸ NĂNG TÍNH TOÁN TRỌNG TÂM
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Cách Tìm Cấp Của Một Phần Tử $aN$ Trong Nhóm Thương $G/N$</h2>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(26,24,15,0.94); border:1.5px solid #fde047; color:#fef08a; font-size:clamp(1.22rem, 1.6vw, 1.42rem); padding:14px 22px; margin:0;">
            $$(aN)^m = e_{G/N} = N \\iff a^m N = N \\iff \\mathbf{a^m \\in N} \\quad (\\text{Dạng cộng: } ma \\in N)$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Quy tắc lý thuyết -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border:1.5px solid rgba(250,204,21,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fde047; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Quy tắc tìm $\\operatorname{ord}_{G/N}(aN)$:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fefce8; margin-top:10px;">
                - Vì đơn vị của $G/N$ là cả tập hợp $N$ (chứ không chỉ riêng $e$), nên cấp của lớp $aN$ là <b>số nguyên dương $m \\ge 1$ nhỏ nhất</b> sao cho:<br>
                $$a^m \\in N \\quad (\\text{hoặc } ma \\in N)$$
                - Hệ quả: $\\operatorname{ord}_{G/N}(aN)$ luôn là ước của $\\operatorname{ord}_G(a)$!
              </div>
            </div>

            <!-- Ví dụ cụ thể -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border:1.5px solid rgba(45,212,191,0.48)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Ví dụ trên $(\\mathbb{Z}/12\\mathbb{Z}) / N$ với $N = \\langle [4] \\rangle$:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fefce8; margin-top:10px;">
                - Cho $N = \\{[0], [4], [8]\\}$. Tìm cấp của lớp $[2] + N$ trong nhóm thương:<br>
                &nbsp;&nbsp;+ $1 \\cdot ([2] + N) = [2] + N \\neq N$ (vì $[2] \\notin N$).<br>
                &nbsp;&nbsp;+ $2 \\cdot ([2] + N) = [4] + N = N$ (vì $[4] \\in N$!).<br>
                - Vậy $\\operatorname{ord}([2] + N) = \\mathbf{2}$ (dù trong $\\mathbb{Z}/12\\mathbb{Z}$, $\\operatorname{ord}([2]) = 6$).
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 12: VÍ DỤ SOI SÁNG - BẢNG CAYLEY NHÓM THƯƠNG (Z/12Z)/<[4]>
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(253,224,71,0.14), transparent 32%), linear-gradient(135deg, #0e0f12, #262112 55%, #0e0f12); border:1.5px solid rgba(250,204,21,0.48); color:#fefce8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(45,212,191,0.22); border:1.5px solid #2dd4bf; border-radius:999px; color:#5eead4; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Bảng Cộng Của Nhóm Thương $(\\mathbb{Z}/12\\mathbb{Z}) / \\langle [4] \\rangle$</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; grid-template-columns:minmax(290px, 0.92fr) minmax(0, 1.08fr); gap:22px; align-items:stretch; margin:0;">
            <!-- Cột 1: Bảng Cayley của nhóm thương -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.85)!important; border:1.5px solid rgba(250,204,21,0.5)!important; padding:18px; border-radius:14px;">
              <table style="width:100%; height:100%; border-collapse:collapse; text-align:center; font-size:clamp(1.12rem, 1.46vw, 1.32rem); color:#ffffff;">
                <thead>
                  <tr style="background:rgba(234,179,8,0.28); color:#fde047; font-weight:800;">
                    <th style="padding:11px; border:1px solid rgba(250,204,21,0.35);">$+$</th>
                    <th style="padding:11px; border:1px solid rgba(250,204,21,0.35);">$C_0$</th>
                    <th style="padding:11px; border:1px solid rgba(250,204,21,0.35);">$C_1$</th>
                    <th style="padding:11px; border:1px solid rgba(250,204,21,0.35);">$C_2$</th>
                    <th style="padding:11px; border:1px solid rgba(250,204,21,0.35);">$C_3$</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="padding:11px; background:rgba(234,179,8,0.22); color:#fde047; font-weight:800; border:1px solid rgba(250,204,21,0.35);">$C_0$</td>
                    <td style="padding:11px; border:1px solid rgba(250,204,21,0.35);">$C_0$</td>
                    <td style="padding:11px; border:1px solid rgba(250,204,21,0.35);">$C_1$</td>
                    <td style="padding:11px; border:1px solid rgba(250,204,21,0.35);">$C_2$</td>
                    <td style="padding:11px; border:1px solid rgba(250,204,21,0.35);">$C_3$</td>
                  </tr>
                  <tr>
                    <td style="padding:11px; background:rgba(234,179,8,0.22); color:#fde047; font-weight:800; border:1px solid rgba(250,204,21,0.35);">$C_1$</td>
                    <td style="padding:11px; border:1px solid rgba(250,204,21,0.35);">$C_1$</td>
                    <td style="padding:11px; border:1px solid rgba(250,204,21,0.35);">$C_2$</td>
                    <td style="padding:11px; border:1px solid rgba(250,204,21,0.35);">$C_3$</td>
                    <td style="padding:11px; background:rgba(45,212,191,0.2); color:#5eead4; font-weight:800; border:1px solid rgba(250,204,21,0.35);">$C_0$</td>
                  </tr>
                  <tr>
                    <td style="padding:11px; background:rgba(234,179,8,0.22); color:#fde047; font-weight:800; border:1px solid rgba(250,204,21,0.35);">$C_2$</td>
                    <td style="padding:11px; border:1px solid rgba(250,204,21,0.35);">$C_2$</td>
                    <td style="padding:11px; border:1px solid rgba(250,204,21,0.35);">$C_3$</td>
                    <td style="padding:11px; background:rgba(45,212,191,0.2); color:#5eead4; font-weight:800; border:1px solid rgba(250,204,21,0.35);">$C_0$</td>
                    <td style="padding:11px; border:1px solid rgba(250,204,21,0.35);">$C_1$</td>
                  </tr>
                  <tr>
                    <td style="padding:11px; background:rgba(234,179,8,0.22); color:#fde047; font-weight:800; border:1px solid rgba(250,204,21,0.35);">$C_3$</td>
                    <td style="padding:11px; border:1px solid rgba(250,204,21,0.35);">$C_3$</td>
                    <td style="padding:11px; background:rgba(45,212,191,0.2); color:#5eead4; font-weight:800; border:1px solid rgba(250,204,21,0.35);">$C_0$</td>
                    <td style="padding:11px; border:1px solid rgba(250,204,21,0.35);">$C_1$</td>
                    <td style="padding:11px; border:1px solid rgba(250,204,21,0.35);">$C_2$</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Cột 2: Giải thích các lớp kề -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border:1.5px solid rgba(250,204,21,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fde047; font-size:clamp(1.18rem, 1.52vw, 1.36rem); display:block; margin-bottom:10px;">🔍 Cấu trúc 4 phần tử của $(\\mathbb{Z}/12\\mathbb{Z}) / N$:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fefce8;">
                - Với $N = \\langle [4] \\rangle = \\{[0], [4], [8]\\}$ ($|N| = 3$), nhóm thương có cấp $\\dfrac{12}{3} = 4$:<br>
                &nbsp;&nbsp;+ $C_0 = [0] + N = \\{[0], [4], [8]\\}$ (Đơn vị).<br>
                &nbsp;&nbsp;+ $C_1 = [1] + N = \\{[1], [5], [9]\\}$ (Cấp $4$).<br>
                &nbsp;&nbsp;+ $C_2 = [2] + N = \\{[2], [6], [10]\\}$ (Cấp $2$).<br>
                &nbsp;&nbsp;+ $C_3 = [3] + N = \\{[3], [7], [11]\\}$ (Cấp $4$).<br>
                - Bảng cộng trùng khít với nhóm cyclic <b style="color:#5eead4;">$\\mathbb{Z}/4\\mathbb{Z}$</b>!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 13: ĐỊNH LÝ - ĐỊNH LÝ NHÓM THƯƠNG THEO TÂM G/Z(G)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(253,224,71,0.14), transparent 32%), linear-gradient(135deg, #0e0f12, #262112 55%, #0e0f12); border:1.5px solid rgba(250,204,21,0.48); color:#fefce8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(234,179,8,0.22); border:1.5px solid #fde047; border-radius:999px; color:#fef08a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ KINH ĐIỂN (BÀI TẬP 4.22)
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Định Lý Nhóm Thương Theo Tâm: $G/Z(G)$ Cyclic $\\implies G$ Abel</h2>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(26,24,15,0.94); border:2px solid #fde047; color:#fef08a; font-size:clamp(1.22rem, 1.62vw, 1.44rem); padding:14px 22px; margin:0;">
            $$\\text{Nếu nhóm thương } G/Z(G) \\text{ là một nhóm cyclic} \\quad \\Longrightarrow \\quad G \\text{ bắt buộc là nhóm giao hoán (Abel)!}$$
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border:1.5px solid rgba(250,204,21,0.48)!important; padding:22px 26px; border-radius:14px;">
            <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.36rem); display:block; margin-bottom:10px;">🔍 Chứng minh 3 bước mẫu mực:</b>
            <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.75; color:#fefce8;">
              <b>1) Biểu diễn phần tử qua lớp sinh $gZ(G)$:</b> Giả sử $G/Z(G) = \\langle gZ(G) \\rangle$. Với mọi $x, y \\in G$, vì $xZ(G) = g^m Z(G)$ và $yZ(G) = g^n Z(G)$, tồn tại $m, n \\in \\mathbb{Z}$ và $z_1, z_2 \\in Z(G)$ sao cho <b style="color:#fef08a;">$x = g^m z_1$</b> và <b style="color:#fef08a;">$y = g^n z_2$</b>.<br>
              <b>2) Khai thác tính chất $z_1, z_2 \\in Z(G)$ giao hoán với mọi phần tử:</b><br>
              $$xy = (g^m z_1)(g^n z_2) = g^m (z_1 g^n) z_2 = g^m (g^n z_1) z_2 = g^{m+n} z_1 z_2$$
              <b>3) Đổi thứ tự $yx$:</b> Tương tự, $yx = (g^n z_2)(g^m z_1) = g^{n+m} z_2 z_1 = g^{m+n} z_1 z_2 = xy$. Vậy $G$ là nhóm Abel! $\\blacksquare$
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 14: ĐỊNH NGHĨA - PHÉP CHIẾU CHÍNH TẮC pi_N
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(253,224,71,0.14), transparent 32%), linear-gradient(135deg, #0e0f12, #262112 55%, #0e0f12); border:1.5px solid rgba(250,204,21,0.48); color:#fefce8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(234,179,8,0.22); border:1.5px solid #fde047; border-radius:999px; color:#fef08a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 ĐỊNH NGHĨA
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Phép Chiếu Chính Tắc $\\pi_N : G \\twoheadrightarrow G/N$</h2>
            <p style="color:#e2e8f0; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Cho $N \\trianglelefteq G$. Ánh xạ tự nhiên gửi mỗi phần tử $g \\in G$ về chính lớp kề $gN$ chứa nó được gọi là <b>phép chiếu chính tắc</b>:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(26,24,15,0.94); border:1.5px solid #fde047; color:#fef08a; font-size:clamp(1.28rem, 1.72vw, 1.52rem); padding:14px 24px; margin:0;">
            $$\\pi_N : G \\longrightarrow G/N, \\qquad \\pi_N(g) = gN, \\quad \\forall g \\in G$$
          </div>

          <div class="slide-grid-3 anim-card anim-d2" style="flex:1; align-items:stretch; gap:18px; margin:0;">
            <!-- Tính chất 1 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border:1.5px solid rgba(226,232,240,0.45)!important; border-top:5px solid #e2e8f0!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#f8fafc; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">(i) Tính Toàn Ánh</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.68; color:#e2e8f0; margin-top:8px;">
                - Mọi lớp kề $gN \\in G/N$ đều là ảnh của phần tử đại diện $g \\in G$ qua $\\pi_N$, nên $\\operatorname{im}(\\pi_N) = G/N$.
              </div>
            </div>

            <!-- Tính chất 2 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border:1.5px solid rgba(250,204,21,0.5)!important; border-top:5px solid #fde047!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#fde047; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">(ii) Bảo Toàn Phép Toán</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.68; color:#fefce8; margin-top:8px;">
                - Với mọi $a, b \\in G$:<br>
                $$\\pi_N(ab) = abN = (aN)(bN) = \\pi_N(a)\\pi_N(b)$$
              </div>
            </div>

            <!-- Tính chất 3 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border:1.5px solid rgba(45,212,191,0.48)!important; border-top:5px solid #2dd4bf!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">(iii) Nghịch Ảnh Đơn Vị Là $N$</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.68; color:#ccfbf1; margin-top:8px;">
                - Tập các phần tử bị triệt tiêu về đơn vị $N$ của $G/N$ đúng bằng $N$:<br>
                $$\\{g \\in G \\mid \\pi_N(g) = N\\} = N$$
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 15: BẢNG TỔNG HỢP KIỂM ĐỊNH TÍNH CHUẨN TẮC TRÊN CÁC MÔ HÌNH CHUẨN
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:22px 30px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(253,224,71,0.14), transparent 32%), linear-gradient(135deg, #0e0f12, #262112 55%, #0e0f12); border:1.5px solid rgba(250,204,21,0.48); color:#fefce8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(234,179,8,0.22); border:1.5px solid #fde047; border-radius:999px; color:#fef08a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              📊 BẢNG TỔNG HỢP GIÁO TRÌNH
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.85rem, 2.4vw, 2.25rem);">Kiểm Định Tính Chuẩn Tắc &amp; Nhóm Thương Trên Các Mô Hình Chuẩn</h2>
          </div>

          <div class="anim-card anim-d1" style="flex:1; display:flex; flex-direction:column; justify-content:center; overflow-x:auto;">
            <table style="width:100%; height:100%; border-collapse:collapse; font-size:clamp(1.0rem, 1.3vw, 1.18rem); background:rgba(26,24,15,0.86); border:1.5px solid rgba(250,204,21,0.5); border-radius:14px; overflow:hidden;">
              <thead>
                <tr style="background:rgba(234,179,8,0.28); color:#fde047; text-align:left; font-size:clamp(1.04rem, 1.34vw, 1.22rem);">
                  <th style="padding:11px 14px; border-bottom:1.5px solid rgba(250,204,21,0.45);">Nhóm mẹ $G$</th>
                  <th style="padding:11px 14px; border-bottom:1.5px solid rgba(250,204,21,0.45);">Nhóm con $N$</th>
                  <th style="padding:11px 14px; border-bottom:1.5px solid rgba(250,204,21,0.45); text-align:center;">Chỉ số $[G:N]$</th>
                  <th style="padding:11px 14px; border-bottom:1.5px solid rgba(250,204,21,0.45); text-align:center;">$N \\trianglelefteq G$?</th>
                  <th style="padding:11px 14px; border-bottom:1.5px solid rgba(250,204,21,0.45);">Căn cứ đại số &amp; Nhóm thương $G/N$</th>
                </tr>
              </thead>
              <tbody style="color:#fefce8; line-height:1.55;">
                <tr style="border-bottom:1px solid rgba(250,204,21,0.22);">
                  <td style="padding:10px 14px; font-weight:800; color:#fde047;">$(\\mathbb{Z}, +)$</td>
                  <td style="padding:10px 14px;">$n\\mathbb{Z}\\; (n \\ge 1)$</td>
                  <td style="padding:10px 14px; text-align:center;">$n$</td>
                  <td style="padding:10px 14px; text-align:center; color:#5eead4; font-weight:800;">✔ Có</td>
                  <td style="padding:10px 14px;">Nhóm mẹ Abel $\\implies$ chuẩn tắc. Thương là $\\mathbb{Z}/n\\mathbb{Z}$.</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(250,204,21,0.22);">
                  <td style="padding:10px 14px; font-weight:800; color:#f8fafc;">$S_n\\; (n \\ge 2)$</td>
                  <td style="padding:10px 14px;">$A_n$ (nhóm thay phiên)</td>
                  <td style="padding:10px 14px; text-align:center;">$2$</td>
                  <td style="padding:10px 14px; text-align:center; color:#5eead4; font-weight:800;">✔ Có</td>
                  <td style="padding:10px 14px;">Chỉ số bằng $2 \\implies$ chuẩn tắc. Thương cấp $2$ ($\\cong \\mathbb{Z}/2\\mathbb{Z}$).</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(250,204,21,0.22);">
                  <td style="padding:10px 14px; font-weight:800; color:#fda4af;">$S_3$</td>
                  <td style="padding:10px 14px;">$H = \\langle (1\\,2) \\rangle$</td>
                  <td style="padding:10px 14px; text-align:center;">$3$</td>
                  <td style="padding:10px 14px; text-align:center; color:#fda4af; font-weight:800;">✖ Không</td>
                  <td style="padding:10px 14px;">$(1\\,3)(1\\,2)(1\\,3)^{-1} = (2\\,3) \\notin H$. Phép nhân lớp thất bại.</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(250,204,21,0.22);">
                  <td style="padding:10px 14px; font-weight:800; color:#5eead4;">$\\operatorname{GL}_n(\\mathbb{R})$</td>
                  <td style="padding:10px 14px;">$\\operatorname{SL}_n(\\mathbb{R})$</td>
                  <td style="padding:10px 14px; text-align:center;">$\\infty$</td>
                  <td style="padding:10px 14px; text-align:center; color:#5eead4; font-weight:800;">✔ Có</td>
                  <td style="padding:10px 14px;">$\\det(PAP^{-1}) = \\det(A) = 1$. Thương $\\cong \\mathbb{R}^*$.</td>
                </tr>
                <tr>
                  <td style="padding:10px 14px; font-weight:800; color:#fde047;">$D_{2n}\\; (n \\ge 3)$</td>
                  <td style="padding:10px 14px;">$\\langle r \\rangle$ (nhóm quay)</td>
                  <td style="padding:10px 14px; text-align:center;">$2$</td>
                  <td style="padding:10px 14px; text-align:center; color:#5eead4; font-weight:800;">✔ Có</td>
                  <td style="padding:10px 14px;">Chỉ số $[D_{2n} : \\langle r \\rangle] = \\dfrac{2n}{n} = 2 \\implies \\langle r \\rangle \\trianglelefteq D_{2n}$.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 16: TỔNG KẾT CHƯƠNG 4 & CẦU NỐI SANG CHƯƠNG 5
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(253,224,71,0.14), transparent 32%), linear-gradient(135deg, #0e0f12, #262112 55%, #0e0f12); border:1.5px solid rgba(250,204,21,0.48); color:#fefce8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(234,179,8,0.22); border:1.5px solid #fde047; border-radius:999px; color:#fef08a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              🎯 TỔNG KẾT CHƯƠNG 4
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Bản Đồ Bốn Trụ Cột Cốt Lõi &amp; Cầu Nối Chương 5</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:16px; margin:0;">
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border-left:5px solid #fde047!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fde047; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">1) Ba tiêu chuẩn tương đương của $N \\trianglelefteq G$</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fefce8; margin-top:6px;">
                - $gN = Ng, \\forall g \\in G \\iff gNg^{-1} = N, \\forall g \\in G$.<br>
                - Thực hành: Kiểm tra $gng^{-1} \\in N$ với mọi $g \\in G, n \\in N$.
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border-left:5px solid #e2e8f0!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#f8fafc; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">2) Các dấu hiệu chuẩn tắc &amp; Bẫy bắc cầu</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fefce8; margin-top:6px;">
                - Nhóm Abel; chỉ số $[G:N]=2$; tâm $Z(G)$; nhóm con duy nhất cấp $k$.<br>
                - Cẩn trọng: $K \\trianglelefteq H \\trianglelefteq G$ <b>không suy ra</b> $K \\trianglelefteq G$ (phản ví dụ $D_8$).
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border-left:5px solid #2dd4bf!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#5eead4; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">3) Nhóm thương $G/N$ &amp; Cấp phần tử</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fefce8; margin-top:6px;">
                - Phép nhân $(aN)(bN) = abN$; đơn vị $N$; nghịch đảo $a^{-1}N$; $|G/N| = |G|/|N|$.<br>
                - Cấp $\\operatorname{ord}(aN)$ là số nguyên dương $m$ nhỏ nhất để $a^m \\in N$.
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(26,24,15,0.82)!important; border-left:5px solid #fb7185!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fda4af; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">4) Định lý Tâm &amp; Phép chiếu chính tắc $\\pi_N$</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fefce8; margin-top:6px;">
                - Nếu $G/Z(G)$ là nhóm cyclic thì $G$ bắt buộc là nhóm Abel.<br>
                - Ánh xạ $\\pi_N(g) = gN$ bảo toàn phép toán và nhận $N$ làm hạt nhân.
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(26,24,15,0.94)!important; border:1.5px solid #fde047!important; color:#fef08a!important; font-size:clamp(1.06rem, 1.36vw, 1.22rem); text-align:center; line-height:1.55;">
            <b>🚀 Tiếp nối Chương 5 (Đồng cấu &amp; Đẳng cấu nhóm):</b> Làm sao nhận diện nhanh cấu trúc của một nhóm thương phức tạp $G/N$ mà không cần lập bảng Cayley? Câu trả lời nằm ở <b>Định lý Đẳng cấu Thứ nhất</b> $G/\\ker\\varphi \\cong \\operatorname{im}\\varphi$!
          </div>
        </div>
      `
    }
  ],
  "5": [
    // ========================================================
    // SLIDE 1: TRANG BÌA CĂN GIỮA - ĐÊM ANH ĐÀO HỒNG NGỌC, CẦU ÁNH SÁNG & CÁ CHÉP HÓA RỒNG
    // ========================================================
    {
      html: `
        <div style="position: relative; width: 100%; height: 100%; min-height: 100%; display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center; padding: 26px 34px 22px; box-sizing: border-box; overflow: hidden; border-radius: 16px; background: radial-gradient(circle at 50% 18%, rgba(244, 114, 182, 0.26), transparent 46%), radial-gradient(ellipse at 15% 88%, rgba(56, 189, 248, 0.22), transparent 42%), radial-gradient(ellipse at 85% 85%, rgba(251, 191, 36, 0.22), transparent 40%), linear-gradient(160deg, #17030c 0%, #36071c 48%, #4f0b29 78%, #14020a 100%); border: 1.5px solid rgba(244, 114, 182, 0.55); color: #fdf2f8; box-shadow: 0 18px 45px rgba(23, 3, 12, 0.82);">
          
          <!-- VECTOR SVG NỀN: CẦU VÒM ÁNH SÁNG ĐỒNG CẤU, CÁ CHÉP HÓA RỒNG & RỪNG ANH ĐÀO ĐÊM -->
          <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0;">
            <defs>
              <radialGradient id="c5SakuraMoon" cx="50%" cy="26%" r="42%">
                <stop offset="0%" stop-color="#fbcfe8" stop-opacity="0.38"/>
                <stop offset="45%" stop-color="#ec4899" stop-opacity="0.16"/>
                <stop offset="100%" stop-color="#17030c" stop-opacity="0"/>
              </radialGradient>
              <linearGradient id="c5BridgeArc" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.75"/>
                <stop offset="50%" stop-color="#fde047" stop-opacity="0.95"/>
                <stop offset="100%" stop-color="#f472b6" stop-opacity="0.8"/>
              </linearGradient>
              <linearGradient id="c5HillSil" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#500724" stop-opacity="0.68"/>
                <stop offset="100%" stop-color="#19020b" stop-opacity="0.95"/>
              </linearGradient>
              <linearGradient id="c5DragonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#5eead4" stop-opacity="0.92"/>
                <stop offset="50%" stop-color="#fde047" stop-opacity="0.95"/>
                <stop offset="100%" stop-color="#f472b6" stop-opacity="0.9"/>
              </linearGradient>
              <linearGradient id="c5KoiGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#fef08a" stop-opacity="0.95"/>
                <stop offset="60%" stop-color="#f97316" stop-opacity="0.85"/>
                <stop offset="100%" stop-color="#ec4899" stop-opacity="0.55"/>
              </linearGradient>
            </defs>

            <!-- Quầng sáng trăng hồng ngọc & Vòng cổng Vũ Môn -->
            <circle cx="500" cy="195" r="330" fill="url(#c5SakuraMoon)"/>
            <g transform="translate(500, 195)" opacity="0.34">
              <circle r="195" fill="none" stroke="#f472b6" stroke-width="1.4" stroke-dasharray="10 6"/>
              <circle r="150" fill="none" stroke="#fde047" stroke-width="1.3" opacity="0.75"/>
            </g>

            <!-- SINH VẬT HUYỀN THOẠI 1: RỒNG ÁNH SAO (CELESTIAL DRAGON) UỐN LƯỢN TRÊN BẦU TRỜI -->
            <g transform="translate(500, 95)" opacity="0.68" filter="drop-shadow(0 0 16px rgba(253, 224, 71, 0.65))">
              <!-- Thân rồng lượn sóng kết nối từ trái sang phải -->
              <path d="M-240,35 C-160,-35 -80,45 0,-15 C80,-75 160,15 240,-25" fill="none" stroke="url(#c5DragonGrad)" stroke-width="7" stroke-linecap="round"/>
              <path d="M-240,35 C-160,-35 -80,45 0,-15 C80,-75 160,15 240,-25" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="6 8" opacity="0.85"/>
              <!-- Đầu rồng & Sừng vàng ở phía đông -->
              <path d="M235,-25 L262,-36 L252,-18 L266,-10 L242,-12 Z" fill="#fef08a"/>
              <path d="M238,-28 Q220,-52 198,-56" fill="none" stroke="#fde047" stroke-width="2.5" stroke-linecap="round"/>
              <!-- Viên ngọc rồng phát sáng -->
              <circle cx="278" cy="-24" r="7" fill="#5eead4"/>
              <circle cx="278" cy="-24" r="3.5" fill="#ffffff"/>
            </g>

            <!-- Dãy núi đêm anh đào & Sông Ngân Hà phản chiếu -->
            <path d="M0,395 Q170,315 350,370 T690,360 T1000,390 L1000,600 L0,600 Z" fill="url(#c5HillSil)"/>
            <path d="M0,455 Q250,415 500,445 T1000,440 L1000,600 L0,600 Z" fill="#120208" opacity="0.95"/>

            <!-- CÂY CẦU VÒM ÁNH SÁNG PHA LÊ (BIỂU TƯỢNG ĐỒNG CẤU NHÓM G -> K) -->
            <g opacity="0.72" filter="drop-shadow(0 0 18px rgba(244, 114, 182, 0.55))">
              <!-- Nhịp cầu chính nối hai bờ G (trái) và K (phải) -->
              <path d="M80,465 Q500,265 920,465" fill="none" stroke="url(#c5BridgeArc)" stroke-width="6"/>
              <path d="M110,485 Q500,295 890,485" fill="none" stroke="url(#c5BridgeArc)" stroke-width="2.5" stroke-dasharray="10 6"/>
              <!-- Các trụ pha lê nối nhịp cầu -->
              <g stroke="#fbcfe8" stroke-width="1.5" opacity="0.65">
                <line x1="220" y1="412" x2="220" y2="432"/>
                <line x1="340" y1="376" x2="340" y2="400"/>
                <line x1="500" y1="355" x2="500" y2="382"/>
                <line x1="660" y1="376" x2="660" y2="400"/>
                <line x1="780" y1="412" x2="780" y2="432"/>
              </g>
            </g>

            <!-- CỔNG TORII ÁNH SÁNG & TÁN ANH ĐÀO PHÁT QUANG HAI BÊN BỜ -->
            <!-- Bờ trái (Miền nguồn G) -->
            <g transform="translate(88, 395)" filter="drop-shadow(0 0 12px rgba(244, 114, 182, 0.65))">
              <!-- Thân và tán cây anh đào phát sáng -->
              <path d="M-25,65 Q-15,20 -5,-10 Q-25,-35 -45,-30 M-5,-10 Q18,-32 35,-22" fill="none" stroke="#fbcfe8" stroke-width="4" stroke-linecap="round"/>
              <circle cx="-35" cy="-35" r="28" fill="#f472b6" opacity="0.55"/>
              <circle cx="0" cy="-42" r="34" fill="#fb7185" opacity="0.6"/>
              <circle cx="32" cy="-28" r="24" fill="#fbcfe8" opacity="0.55"/>
            </g>
            <!-- Bờ phải (Miền đích K) -->
            <g transform="translate(912, 395)" filter="drop-shadow(0 0 12px rgba(244, 114, 182, 0.65))">
              <path d="M25,65 Q15,20 5,-10 Q25,-35 45,-30 M5,-10 Q-18,-32 -35,-22" fill="none" stroke="#fbcfe8" stroke-width="4" stroke-linecap="round"/>
              <circle cx="35" cy="-35" r="28" fill="#f472b6" opacity="0.55"/>
              <circle cx="0" cy="-42" r="34" fill="#fb7185" opacity="0.6"/>
              <circle cx="-32" cy="-28" r="24" fill="#fbcfe8" opacity="0.55"/>
            </g>

            <!-- SINH VẬT HUYỀN THOẠI 2: ĐÔI CÁ CHÉP KOI HOÀNG KIM VƯỢT CẦU ÁNH SÁNG -->
            <!-- Cá Koi 1 (Bờ trái phóng lên cầu) -->
            <g transform="translate(185, 425) rotate(-32) scale(0.9)" filter="drop-shadow(0 0 14px rgba(251, 191, 36, 0.75))">
              <path d="M-38,0 C-22,-15 18,-14 42,0 C18,14 -22,15 -38,0 Z" fill="url(#c5KoiGold)"/>
              <path d="M-12,-10 C2,-24 22,-20 16,-6 Z" fill="#fbcfe8" opacity="0.8"/>
              <path d="M-12,10 C2,24 22,20 16,6 Z" fill="#fbcfe8" opacity="0.8"/>
              <path d="M-38,0 C-56,-18 -78,-22 -86,-6 C-66,0 -76,16 -86,20 C-70,14 -52,10 -38,0 Z" fill="#fde047" opacity="0.85"/>
              <circle cx="28" cy="-3" r="2.4" fill="#ffffff"/>
            </g>
            <!-- Cá Koi 2 (Bờ phải hóa thân ánh ngọc) -->
            <g transform="translate(815, 425) scale(-0.9, 0.9) rotate(-32)" filter="drop-shadow(0 0 14px rgba(45, 212, 191, 0.75))">
              <path d="M-38,0 C-22,-15 18,-14 42,0 C18,14 -22,15 -38,0 Z" fill="url(#c5DragonGrad)"/>
              <path d="M-12,-10 C2,-24 22,-20 16,-6 Z" fill="#99f6e4" opacity="0.8"/>
              <path d="M-12,10 C2,24 22,20 16,6 Z" fill="#99f6e4" opacity="0.8"/>
              <path d="M-38,0 C-56,-18 -78,-22 -86,-6 C-66,0 -76,16 -86,20 C-70,14 -52,10 -38,0 Z" fill="#5eead4" opacity="0.85"/>
              <circle cx="28" cy="-3" r="2.4" fill="#ffffff"/>
            </g>

            <!-- Cánh hoa anh đào & hạt sáng bay lơ lửng trong đêm -->
            <g fill="#fbcfe8" opacity="0.85">
              <ellipse cx="160" cy="190" rx="5" ry="2.5" transform="rotate(25 160 190)"/>
              <ellipse cx="280" cy="145" rx="4.5" ry="2.2" transform="rotate(-18 280 145)"/>
              <ellipse cx="720" cy="150" rx="5" ry="2.5" transform="rotate(32 720 150)"/>
              <ellipse cx="840" cy="195" rx="4.5" ry="2.2" transform="rotate(-24 840 195)"/>
              <ellipse cx="340" cy="285" rx="4" ry="2" transform="rotate(15 340 285)"/>
              <ellipse cx="660" cy="280" rx="4" ry="2" transform="rotate(-20 660 280)"/>
            </g>
            <g fill="#fde047" opacity="0.9">
              <circle cx="220" cy="240" r="2.6"/><circle cx="780" cy="235" r="2.6"/>
              <circle cx="430" cy="390" r="2.5"/><circle cx="570" cy="390" r="2.5"/>
            </g>
          </svg>

          <!-- TIÊU ĐỀ SLIDE (CĂN GIỮA, CỠ CHỮ LỚN NỔI BẬT) -->
          <div class="anim-title" style="position: relative; z-index: 2; max-width: 920px;">
            <div style="display: inline-flex; align-items: center; gap: 10px; padding: 6px 22px; background: rgba(45, 6, 24, 0.85); border: 1.5px solid rgba(244, 114, 182, 0.65); border-radius: 999px; font-size: clamp(0.92rem, 1.2vw, 1.08rem); font-weight: 800; color: #fbcfe8; letter-spacing: 1.2px; margin-bottom: 12px; backdrop-filter: blur(10px); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);">
              <span>🌸</span> CẤU TRÚC ĐẠI SỐ — CHƯƠNG 5
            </div>
            <h1 style="font-size: clamp(2.4rem, 3.85vw, 3.3rem); font-weight: 800; color: #ffffff; margin: 0 0 8px; line-height: 1.18; letter-spacing: -0.5px; text-shadow: 0 4px 28px rgba(0, 0, 0, 0.8);">
              Đồng Cấu Nhóm &amp; <span style="color: #fde047;">Các Định Lý Đẳng Cấu</span>
            </h1>
            <p style="font-size: clamp(1.1rem, 1.45vw, 1.3rem); color: #fbcfe8; margin: 0; font-weight: 600; text-shadow: 0 2px 10px rgba(0,0,0,0.6);">
              Giáo trình Cấu trúc Đại số · TS. Huỳnh Việt Khánh
            </p>
          </div>

          <!-- TÂM ĐIỂM: KHỐI CÂU HỎI TRIẾT HỌC TRUNG TÂM -->
          <div class="slide-glass-card anim-card anim-d1" style="position: relative; z-index: 2; max-width: 880px; width: 100%; padding: 26px 38px; margin: 12px 0; background: rgba(42, 6, 22, 0.82) !important; border: 1.5px solid rgba(244, 114, 182, 0.55) !important; border-radius: 18px; backdrop-filter: blur(20px); box-shadow: 0 20px 50px rgba(18, 2, 9, 0.86), inset 0 1px 0 rgba(255, 255, 255, 0.2); text-align: center;">
            <div style="font-size: clamp(0.98rem, 1.25vw, 1.12rem); font-weight: 800; color: #fde047; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">
              ✦ Câu Hỏi Trung Tâm Của Chương ✦
            </div>
            <p style="font-size: clamp(1.26rem, 1.72vw, 1.5rem); line-height: 1.62; color: #ffffff; margin: 0; font-weight: 500;">
              Làm thế nào những <b style="color: #f9a8d4;">ánh xạ bảo toàn phép toán $\\varphi: G \\to K$</b> lại bắc nhịp cầu nối hai thế giới đại số khác hẳn nhau về hình thức, và giúp ta giải mã tức thì cấu trúc của mọi nhóm thương qua <b style="color: #5eead4;">$G/\\ker\\varphi \\cong \\operatorname{im}\\varphi$</b>?
            </p>
          </div>

          <!-- ĐÁY SLIDE: THANH 4 TRỤ CỘT KIẾN THỨC (KHÔNG THANH CUỘN) -->
          <div class="anim-card anim-d2" style="position: relative; z-index: 2; display: flex; flex-wrap: nowrap; justify-content: space-between; align-items: center; gap: 6px; width: 100%; max-width: 960px; padding: 8px 14px; box-sizing: border-box; background: rgba(42, 6, 22, 0.88); border: 1.5px solid rgba(244, 114, 182, 0.42); border-radius: 999px; backdrop-filter: blur(12px); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45); overflow: hidden;">
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(236, 72, 153, 0.24); border: 1px solid rgba(244, 114, 182, 0.5); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #fbcfe8; white-space: nowrap;">
              1. Đồng Cấu &amp; Đẳng Cấu
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(45, 212, 191, 0.2); border: 1px solid rgba(45, 212, 191, 0.45); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #5eead4; white-space: nowrap;">
              2. Hạt Nhân $\\ker\\varphi$ &amp; Ảnh $\\operatorname{im}\\varphi$
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(251, 191, 36, 0.22); border: 1px solid rgba(251, 191, 36, 0.48); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #fde68a; white-space: nowrap;">
              3. Định Lý Đẳng Cấu 1, 2, 3
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(56, 189, 248, 0.22); border: 1px solid rgba(56, 189, 248, 0.48); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #7dd3fc; white-space: nowrap;">
              4. Bất Biến Đẳng Cấu
            </span>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 2: ĐỘNG CƠ SƯ PHẠM - SO SÁNH CẤU TRÚC BẰNG ÁNH XẠ GIỮ PHÉP TOÁN
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(244,114,182,0.15), transparent 32%), linear-gradient(135deg, #1a040e, #3b081f 55%, #1a040e); border:1.5px solid rgba(244,114,182,0.48); color:#fdf2f8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(236,72,153,0.24); border:1.5px solid #f472b6; border-radius:999px; color:#fbcfe8; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🌸 TRỰC QUAN KHỞI NGUỒN
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Khác Nhau Về Hình Thái Phần Tử — Đồng Nhất Về Cấu Trúc Phép Toán</h2>
            <p style="color:#fbcfe8; font-size:clamp(1.14rem, 1.46vw, 1.3rem); line-height:1.58; margin:0;">
              Hai nhóm có thể gồm những đối tượng hoàn toàn khác nhau, nhưng quy luật vận hành phép toán bên trong lại là bản sao của nhau:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Hàm mũ nối nhóm cộng và nhóm nhân -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border:1.5px solid rgba(244,114,182,0.45)!important; border-left:5px solid #f472b6!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#f9a8d4; font-size:clamp(1.2rem, 1.55vw, 1.38rem); display:block; margin-bottom:10px;">1) Cầu Nối Hàm Mũ: Từ Cộng Sang Nhân</b>
              <div class="slide-math-display" style="background:rgba(22,3,11,0.92); border-color:#f472b6; color:#fbcfe8; font-size:clamp(1.16rem, 1.5vw, 1.35rem); padding:12px; margin:8px 0 12px;">
                $$\\varphi : (\\mathbb{R}, +) \\longrightarrow (\\mathbb{R}_{&gt;0}, \\cdot), \\quad \\varphi(x) = 2^x$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fdf2f8;">
                - <b>Bảo toàn phép toán:</b> Cộng trước rồi lấy hàm mũ cũng giống hệt như lấy hàm mũ từng số rồi nhân lại:<br>
                $$\\varphi(x + y) = 2^{x+y} = 2^x \\cdot 2^y = \\varphi(x) \\cdot \\varphi(y)$$
              </div>
            </div>

            <!-- Cột 2: Nhóm đồng hồ 2 giờ và nhóm dấu -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border:1.5px solid rgba(45,212,191,0.45)!important; border-left:5px solid #2dd4bf!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.2rem, 1.55vw, 1.38rem); display:block; margin-bottom:10px;">2) Cầu Nối Giữa $(\\mathbb{Z}/2\\mathbb{Z}, +)$ và $(\\{1, -1\\}, \\cdot)$</b>
              <div class="slide-math-display" style="background:rgba(22,3,11,0.92); border-color:#2dd4bf; color:#99f6e4; font-size:clamp(1.16rem, 1.5vw, 1.35rem); padding:12px; margin:8px 0 12px;">
                $$\\psi([0]_2) = 1, \\qquad \\psi([1]_2) = -1$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fdf2f8;">
                - Quy tắc cộng chẵn/lẻ trong $\\mathbb{Z}/2\\mathbb{Z}$ khớp 1-1 với quy tắc nhân dấu trong $\\{1, -1\\}$:<br>
                $$\\psi([a]_2 + [b]_2) = (-1)^{a+b} = (-1)^a (-1)^b = \\psi([a]_2)\\psi([b]_2)$$
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 3: ĐỊNH NGHĨA - ĐỒNG CẤU NHÓM & BA TÍNH CHẤT BẢO TOÀN
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(244,114,182,0.15), transparent 32%), linear-gradient(135deg, #1a040e, #3b081f 55%, #1a040e); border:1.5px solid rgba(244,114,182,0.48); color:#fdf2f8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(236,72,153,0.24); border:1.5px solid #f472b6; border-radius:999px; color:#fbcfe8; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              📘 ĐỊNH NGHĨA &amp; TÍNH CHẤT
            </span>
            <h2 style="color:#ffffff; margin:0 0 6px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Đồng Cấu Nhóm (Group Homomorphism) &amp; Ba Hệ Quả Tức Thời</h2>
            <p style="color:#fbcfe8; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Cho hai nhóm $(G, \\cdot)$ và $(K, *)$. Ánh xạ $\\varphi : G \\to K$ được gọi là một <b>đồng cấu nhóm</b> nếu bảo toàn phép toán:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(42,6,22,0.92); border:1.5px solid #fbbf24; color:#fde68a; font-size:clamp(1.24rem, 1.65vw, 1.48rem); padding:12px 22px; margin:0;">
            $$\\varphi(a \\cdot b) = \\varphi(a) * \\varphi(b), \\qquad \\forall a, b \\in G$$
          </div>

          <div class="slide-grid-3 anim-card anim-d2" style="flex:1; align-items:stretch; gap:18px; margin:0;">
            <!-- Hệ quả 1: Bảo toàn đơn vị -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border:1.5px solid rgba(244,114,182,0.45)!important; border-top:5px solid #f472b6!important; padding:18px 22px; border-radius:14px;">
              <b style="color:#f9a8d4; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">(i) Bảo toàn đơn vị</b>
              <div class="slide-math-display" style="background:rgba(22,3,11,0.92); border-color:#f472b6; color:#fbcfe8; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:8px; margin:10px 0;">
                $$\\varphi(e_G) = e_K$$
              </div>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fdf2f8;">
                - Do $\\varphi(e_G) = \\varphi(e_G e_G) = \\varphi(e_G)\\varphi(e_G) = \\varphi(e_G)e_K$, giản ước trong $K$ cho $\\varphi(e_G) = e_K$.
              </div>
            </div>

            <!-- Hệ quả 2: Bảo toàn nghịch đảo -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border:1.5px solid rgba(45,212,191,0.45)!important; border-top:5px solid #2dd4bf!important; padding:18px 22px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">(ii) Bảo toàn nghịch đảo</b>
              <div class="slide-math-display" style="background:rgba(22,3,11,0.92); border-color:#2dd4bf; color:#99f6e4; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:8px; margin:10px 0;">
                $$\\varphi(a^{-1}) = \\big(\\varphi(a)\\big)^{-1}$$
              </div>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fdf2f8;">
                - Do $\\varphi(a)\\varphi(a^{-1}) = \\varphi(aa^{-1}) = \\varphi(e_G) = e_K$. (Dạng cộng: $\\varphi(-a) = -\\varphi(a)$).
              </div>
            </div>

            <!-- Hệ quả 3: Bảo toàn lũy thừa -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border:1.5px solid rgba(251,191,36,0.45)!important; border-top:5px solid #fbbf24!important; padding:18px 22px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">(iii) Bảo toàn lũy thừa nguyên</b>
              <div class="slide-math-display" style="background:rgba(22,3,11,0.92); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.16rem, 1.5vw, 1.34rem); padding:8px; margin:10px 0;">
                $$\\varphi(a^n) = \\big(\\varphi(a)\\big)^n,\\; \\forall n \\in \\mathbb{Z}$$
              </div>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fdf2f8;">
                - Trong ký hiệu cộng: $\\varphi(na) = n\\varphi(a)$ với mọi số nguyên $n \\in \\mathbb{Z}$.
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 4: VÍ DỤ & PHẢN VÍ DỤ SOI SÁNG CHO SLIDE 3
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(244,114,182,0.15), transparent 32%), linear-gradient(135deg, #1a040e, #3b081f 55%, #1a040e); border:1.5px solid rgba(244,114,182,0.48); color:#fdf2f8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(45,212,191,0.22); border:1.5px solid #2dd4bf; border-radius:999px; color:#5eead4; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ &amp; PHẢN VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Kiểm Định Đồng Cấu Nhóm &amp; Phản Xạ Bắt Lỗi Qua Phần Tử Đơn Vị</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Ví dụ đồng cấu chuẩn -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border:1.5px solid rgba(45,212,191,0.48)!important; border-left:5px solid #2dd4bf!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Hai Đồng Cấu Nhóm Mẫu Mực:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fdf2f8; margin-top:10px;">
                - <b>Ánh xạ định thức $\\det : \\operatorname{GL}_n(\\mathbb{R}) \\to (\\mathbb{R}^*, \\cdot)$:</b><br>
                &nbsp;&nbsp;+ Với mọi $A, B \\in \\operatorname{GL}_n(\\mathbb{R})$: $\\det(AB) = \\det(A)\\det(B) \\implies$ <b>Là đồng cấu</b>.<br>
                - <b>Ánh xạ nhân bội $\\varphi(x) = kx$ từ $(\\mathbb{Z}, +) \\to (\\mathbb{Z}, +)$:</b><br>
                &nbsp;&nbsp;+ Với mọi $a, b \\in \\mathbb{Z}$: $\\varphi(a + b) = k(a + b) = ka + kb = \\varphi(a) + \\varphi(b) \\implies$ <b>Là đồng cấu</b>.
              </div>
            </div>

            <!-- Phản ví dụ bắt lỗi nhanh -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border:1.5px solid rgba(244,63,94,0.5)!important; border-left:5px solid #fb7185!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Phản Ví Dụ: Ánh Xạ Tịnh Tiến $f(x) = x + 1$ Trên $(\\mathbb{Z}, +)$</b>
              <div class="slide-math-display" style="background:rgba(22,3,11,0.92); border-color:#fb7185; color:#fecdd3; font-size:clamp(1.16rem, 1.5vw, 1.34rem); padding:10px; margin:12px 0;">
                $$f(0) = 0 + 1 = 1 \\neq 0 \\implies f \\text{ KHÔNG là đồng cấu!}$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.7; color:#fdf2f8;">
                - Thử trực tiếp: $f(a + b) = a + b + 1 \\neq (a + 1) + (b + 1) = f(a) + f(b)$.<br>
                - <b>⚡ Mẹo trắc nghiệm:</b> Trước khi biến đổi $\\varphi(ab)$, hãy nhẩm ngay $\\varphi(e_G)$. Nếu $\\varphi(e_G) \\neq e_K$, loại ngay lập tức!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 5: ĐỊNH NGHĨA - PHÂN LOẠI CÁC DẠNG ĐỒNG CẤU & ĐẲNG CẤU
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(244,114,182,0.15), transparent 32%), linear-gradient(135deg, #1a040e, #3b081f 55%, #1a040e); border:1.5px solid rgba(244,114,182,0.48); color:#fdf2f8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(236,72,153,0.24); border:1.5px solid #f472b6; border-radius:999px; color:#fbcfe8; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              📘 ĐỊNH NGHĨA
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Phân Loại Các Dạng Đồng Cấu Nhóm (Định Nghĩa 5.2)</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:16px; margin:0;">
            <!-- (i) Đơn cấu -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border-left:5px solid #38bdf8!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#7dd3fc; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">(i) Đơn cấu (Monomorphism):</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.65; color:#fdf2f8; margin-top:6px;">
                - Là một đồng cấu nhóm có thêm tính <b>đơn ánh</b> (ký hiệu $\\varphi : G \\hookrightarrow K$).<br>
                - Cho phép "nhúng" một bản sao của nhóm $G$ vào bên trong nhóm $K$.
              </div>
            </div>

            <!-- (ii) Toàn cấu -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border-left:5px solid #f472b6!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#f9a8d4; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">(ii) Toàn cấu (Epimorphism):</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.65; color:#fdf2f8; margin-top:6px;">
                - Là một đồng cấu nhóm có thêm tính <b>toàn ánh</b> (ký hiệu $\\varphi : G \\twoheadrightarrow K$).<br>
                - Ví dụ: Phép chiếu chính tắc $\\pi_N : G \\twoheadrightarrow G/N$ luôn là một toàn cấu.
              </div>
            </div>

            <!-- (iii) Đẳng cấu -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.86)!important; border:1.5px solid #fbbf24!important; border-left:5px solid #fbbf24!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fbbf24; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">(iii) Đẳng cấu (Isomorphism — $G \\cong K$):</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.65; color:#fef3c7; margin-top:6px;">
                - Là một đồng cấu vừa đơn ánh vừa toàn ánh (<b>song ánh</b>).<br>
                - Khi tồn tại đẳng cấu $\\varphi: G \\to K$, ta nói $G$ và $K$ <b>đẳng cấu với nhau</b>, viết là <b style="color:#fde047;">$G \\cong K$</b>.
              </div>
            </div>

            <!-- (iv) Tự đồng cấu & Tự đẳng cấu -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border-left:5px solid #2dd4bf!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#5eead4; font-size:clamp(1.16rem, 1.48vw, 1.32rem);">(iv) Tự đồng cấu &amp; Tự đẳng cấu:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.65; color:#fdf2f8; margin-top:6px;">
                - <b>Tự đồng cấu (Endomorphism):</b> Đồng cấu từ nhóm $G$ vào chính nó ($\\varphi: G \\to G$).<br>
                - <b>Tự đẳng cấu (Automorphism):</b> Đẳng cấu từ $G$ lên chính $G$ (ví dụ phép liên hợp $c_g(x) = gxg^{-1}$).
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 6: ĐỊNH NGHĨA - HẠT NHÂN (KERNEL) & TẬP ẢNH (IMAGE)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(244,114,182,0.15), transparent 32%), linear-gradient(135deg, #1a040e, #3b081f 55%, #1a040e); border:1.5px solid rgba(244,114,182,0.48); color:#fdf2f8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(236,72,153,0.24); border:1.5px solid #f472b6; border-radius:999px; color:#fbcfe8; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 ĐỊNH NGHĨA
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Hạt Nhân ($\\ker\\varphi$) và Tập Ảnh ($\\operatorname{im}\\varphi$) Của Đồng Cấu</h2>
            <p style="color:#fbcfe8; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Cho đồng cấu nhóm $\\varphi : G \\to K$. Hai tập hợp gắn liền với mọi đồng cấu là:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Hạt nhân -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border:1.5px solid rgba(251,191,36,0.48)!important; border-top:5px solid #fbbf24!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.2rem, 1.55vw, 1.38rem);">(i) Hạt nhân (Kernel) — Nằm trong nhóm nguồn $G$:</b>
              <div class="slide-math-display" style="background:rgba(22,3,11,0.92); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.2rem, 1.55vw, 1.4rem); padding:12px; margin:14px 0;">
                $$\\ker\\varphi = \\{g \\in G \\mid \\varphi(g) = e_K\\} \\subseteq G$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.7; color:#fdf2f8;">
                - Gồm tất cả các phần tử của $G$ bị ánh xạ $\\varphi$ "triệt tiêu" về phần tử đơn vị $e_K$ của nhóm đích $K$.<br>
                - Đo lường mức độ "chập phần tử" của ánh xạ $\\varphi$.
              </div>
            </div>

            <!-- Cột 2: Tập ảnh -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border:1.5px solid rgba(45,212,191,0.48)!important; border-top:5px solid #2dd4bf!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.2rem, 1.55vw, 1.38rem);">(ii) Tập ảnh (Image) — Nằm trong nhóm đích $K$:</b>
              <div class="slide-math-display" style="background:rgba(22,3,11,0.92); border-color:#2dd4bf; color:#99f6e4; font-size:clamp(1.2rem, 1.55vw, 1.4rem); padding:12px; margin:14px 0;">
                $$\\operatorname{im}\\varphi = \\varphi(G) = \\{\\varphi(g) \\mid g \\in G\\} \\subseteq K$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.7; color:#fdf2f8;">
                - Gồm tất cả các giá trị trong nhóm đích $K$ thực sự được vươn tới bởi các phần tử của $G$.<br>
                - Ánh xạ $\\varphi$ là toàn ánh $\\iff \\operatorname{im}\\varphi = K$.
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(42,6,22,0.92)!important; border:1.5px solid #f472b6!important; border-left:6px solid #f472b6!important; color:#fbcfe8!important; font-size:clamp(1.06rem, 1.36vw, 1.22rem);">
            <b>⚠️ Lưu ý tránh nhầm lẫn:</b> Khi giải phương trình $\\varphi(g) = e_K$ để tìm $\\ker\\varphi$, hãy xác định thật kỹ <b>đơn vị $e_K$ của nhóm đích $K$</b> (bằng $0$ nếu $K$ là nhóm cộng, nhưng bằng $1$ nếu $K$ là nhóm nhân như $\\mathbb{R}^*$ hay $U(n)$!).
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 7: ĐỊNH LÝ - CẤU TRÚC CỦA HẠT NHÂN & TIÊU CHUẨN ĐƠN ÁNH
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(244,114,182,0.15), transparent 32%), linear-gradient(135deg, #1a040e, #3b081f 55%, #1a040e); border:1.5px solid rgba(244,114,182,0.48); color:#fdf2f8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ (ĐỊNH LÝ 5.4)
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Cấu Trúc Chuẩn Tắc Của $\\ker\\varphi$ &amp; Tiêu Chuẩn Đơn Ánh Cốt Lõi</h2>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(42,6,22,0.92); border:1.5px solid #fbbf24; color:#fde68a; font-size:clamp(1.22rem, 1.6vw, 1.44rem); padding:14px 22px; margin:0;">
            $$1)\\; \\operatorname{im}\\varphi \\le K \\qquad\\qquad 2)\\; \\ker\\varphi \\trianglelefteq G \\qquad\\qquad 3)\\; \\varphi \\text{ đơn ánh} \\iff \\ker\\varphi = \\{e_G\\}$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Chứng minh ker(phi) chuẩn tắc -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border:1.5px solid rgba(244,114,182,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#f9a8d4; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">🔍 Chứng minh $\\ker\\varphi \\trianglelefteq G$ (Mọi hạt nhân đều chuẩn tắc!):</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fdf2f8; margin-top:10px;">
                - Lấy tùy ý $g \\in G$ và $n \\in \\ker\\varphi$ (tức $\\varphi(n) = e_K$).<br>
                - Kiểm tra phần tử liên hợp $gng^{-1}$ qua đồng cấu $\\varphi$:<br>
                $$\\varphi(gng^{-1}) = \\varphi(g)\\varphi(n)\\varphi(g)^{-1} = \\varphi(g) e_K \\varphi(g)^{-1} = e_K$$
                - Suy ra $gng^{-1} \\in \\ker\\varphi$. Vậy <b style="color:#fde68a;">$\\ker\\varphi \\trianglelefteq G$</b>! $\\blacksquare$
              </div>
            </div>

            <!-- Chứng minh tiêu chuẩn đơn ánh -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border:1.5px solid rgba(45,212,191,0.48)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">🔍 Chứng minh $\\varphi$ đơn ánh $\\iff \\ker\\varphi = \\{e_G\\}$:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fdf2f8; margin-top:10px;">
                - <b>$(\\implies)$:</b> Nếu $\\varphi(x) = e_K = \\varphi(e_G)$, tính đơn ánh ép $x = e_G$.<br>
                - <b>$(\\impliedby)$:</b> Giả sử $\\ker\\varphi = \\{e_G\\}$ và $\\varphi(a) = \\varphi(b)$. Khi đó:<br>
                $$\\varphi(ab^{-1}) = \\varphi(a)\\varphi(b)^{-1} = e_K \\implies ab^{-1} \\in \\ker\\varphi = \\{e_G\\}$$
                - Suy ra $ab^{-1} = e_G \\implies a = b$. Vậy $\\varphi$ đơn ánh! $\\blacksquare$
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 8: VÍ DỤ SOI SÁNG CHO SLIDE 6 & 7 (TÌM KER VÀ IM)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(244,114,182,0.15), transparent 32%), linear-gradient(135deg, #1a040e, #3b081f 55%, #1a040e); border:1.5px solid rgba(244,114,182,0.48); color:#fdf2f8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(45,212,191,0.22); border:1.5px solid #2dd4bf; border-radius:999px; color:#5eead4; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Tìm Hạt Nhân $\\ker\\varphi$ &amp; Tập Ảnh $\\operatorname{im}\\varphi$ Trên Các Mô Hình Chuẩn</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Ví dụ 1: Đồng cấu dấu trên Sn -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border:1.5px solid rgba(244,114,182,0.45)!important; border-left:5px solid #f472b6!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#f9a8d4; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Đồng cấu dấu $\\operatorname{sgn} : S_n \\to (\\{1, -1\\}, \\cdot)$ ($n \\ge 2$):</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fdf2f8; margin-top:10px;">
                - Gửi hoán vị chẵn về $1$, hoán vị lẻ về $-1$. Ta có $\\operatorname{sgn}(\\sigma\\tau) = \\operatorname{sgn}(\\sigma)\\operatorname{sgn}(\\tau)$.<br>
                - <b>Tập ảnh:</b> $\\operatorname{im}(\\operatorname{sgn}) = \\{1, -1\\}$ (toàn cấu).<br>
                - <b>Hạt nhân (đơn vị đích là $1$):</b><br>
                <div class="slide-math-display" style="background:rgba(22,3,11,0.92); border-color:#f472b6; color:#fbcfe8; font-size:clamp(1.14rem, 1.48vw, 1.32rem); padding:10px; margin:10px 0 0;">
                  $$\\ker(\\operatorname{sgn}) = \\{\\sigma \\in S_n \\mid \\operatorname{sgn}(\\sigma) = 1\\} = A_n \\trianglelefteq S_n$$
                </div>
              </div>
            </div>

            <!-- Ví dụ 2: Môđun số phức -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border:1.5px solid rgba(45,212,191,0.48)!important; border-left:5px solid #2dd4bf!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Đồng cấu môđun $\\varphi(z) = |z|$ từ $(\\mathbb{C}^*, \\cdot) \\to (\\mathbb{R}^*, \\cdot)$:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fdf2f8; margin-top:10px;">
                - Bảo toàn phép nhân: $|z_1 z_2| = |z_1| \\cdot |z_2|$ với mọi $z_1, z_2 \\in \\mathbb{C}^*$.<br>
                - <b>Tập ảnh:</b> $\\operatorname{im}\\varphi = (0, +\\infty) = \\mathbb{R}_{&gt;0} &lt; \\mathbb{R}^*$ (không toàn ánh vì $|z| &gt; 0$).<br>
                - <b>Hạt nhân (đơn vị đích là $1$):</b> Đường tròn đơn vị:<br>
                <div class="slide-math-display" style="background:rgba(22,3,11,0.92); border-color:#2dd4bf; color:#99f6e4; font-size:clamp(1.14rem, 1.48vw, 1.32rem); padding:10px; margin:10px 0 0;">
                  $$\\ker\\varphi = \\{z \\in \\mathbb{C}^* \\mid |z| = 1\\} = S^1 \\trianglelefteq \\mathbb{C}^*$$
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 9: ĐỊNH LÝ ĐẲNG CẤU THỨ NHẤT (ĐỊNH LÝ 5.5)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(244,114,182,0.15), transparent 32%), linear-gradient(135deg, #1a040e, #3b081f 55%, #1a040e); border:1.5px solid rgba(244,114,182,0.48); color:#fdf2f8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ TRỌNG TÂM (ĐỊNH LÝ 5.5)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Định Lý Đẳng Cấu Thứ Nhất (First Isomorphism Theorem)</h2>
            <p style="color:#fbcfe8; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Cho $\\varphi : G \\to K$ là một đồng cấu nhóm. Khi đó ánh xạ cảm sinh $\\Phi(g\\ker\\varphi) = \\varphi(g)$ thiết lập một <b>đẳng cấu nhóm</b> giữa nhóm thương $G/\\ker\\varphi$ và tập ảnh $\\operatorname{im}\\varphi$:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(42,6,22,0.94); border:2px solid #fbbf24; color:#fde68a; font-size:clamp(1.3rem, 1.78vw, 1.56rem); padding:16px 24px; margin:0;">
            $$\\frac{G}{\\ker\\varphi} \\;\\cong\\; \\operatorname{im}\\varphi \\qquad \\Big(\\text{Đặc biệt, nếu } \\varphi \\text{ toàn ánh thì } \\frac{G}{\\ker\\varphi} \\cong K\\Big)$$
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.82)!important; border:1.5px solid rgba(244,114,182,0.45)!important; padding:22px 26px; border-radius:14px;">
            <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.36rem); display:block; margin-bottom:10px;">🔍 Tại sao $\\Phi(gN) = \\varphi(g)$ (với $N = \\ker\\varphi$) vừa xác định tốt vừa là song ánh?</b>
            <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.75; color:#fdf2f8;">
              - <b>1) Xác định tốt &amp; Đơn ánh cùng lúc:</b> Với mọi $a, b \\in G$:<br>
              $$aN = bN \\iff a^{-1}b \\in N = \\ker\\varphi \\iff \\varphi(a^{-1}b) = e_K \\iff \\varphi(a) = \\varphi(b) \\iff \\Phi(aN) = \\Phi(bN)$$
              - <b>2) Bảo toàn phép toán:</b> $\\Phi((aN)(bN)) = \\Phi(abN) = \\varphi(ab) = \\varphi(a)\\varphi(b) = \\Phi(aN)\\Phi(bN)$.<br>
              - <b>3) Toàn ánh lên $\\operatorname{im}\\varphi$:</b> Mọi $y = \\varphi(g) \\in \\operatorname{im}\\varphi$ đều là ảnh của lớp $gN \\in G/N$. $\\blacksquare$
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 10: PHƯƠNG PHÁP LUẬN - QUY TRÌNH 3 BƯỚC NHẬN DIỆN NHÓM THƯƠNG
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(244,114,182,0.15), transparent 32%), linear-gradient(135deg, #1a040e, #3b081f 55%, #1a040e); border:1.5px solid rgba(244,114,182,0.48); color:#fdf2f8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🛑 PHƯƠNG PHÁP LUẬN TRỌNG TÂM
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Phương Pháp $3$ Bước Chứng Minh Đẳng Cấu Nhóm Thương $G/N \\cong K$</h2>
            <p style="color:#fbcfe8; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Khi đề bài yêu cầu chứng minh $G/N \\cong K$, <b>tuyệt đối không chia lớp kề thủ công</b>. Hãy thực hiện đúng $3$ bước chuẩn mực:
            </p>
          </div>

          <div class="slide-grid-3 anim-card anim-d1" style="flex:1; align-items:stretch; gap:18px; margin:0;">
            <!-- Bước 1 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.82)!important; border:1.5px solid rgba(244,114,182,0.48)!important; border-top:5px solid #f472b6!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#f9a8d4; font-size:clamp(1.16rem, 1.48vw, 1.32rem); margin-bottom:8px;">Bước 1: Dựng đồng cấu $\\varphi$</b>
              <div style="font-size:clamp(1.05rem, 1.35vw, 1.2rem); line-height:1.68; color:#fdf2f8;">
                - Thiết lập một ánh xạ tự nhiên đi từ nhóm mẹ <b style="color:#fde68a;">$\\varphi : G \\to K$</b>.<br>
                - Kiểm tra tính bảo toàn phép toán: $\\varphi(xy) = \\varphi(x)\\varphi(y), \\forall x, y \\in G$.
              </div>
            </div>

            <!-- Bước 2 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.82)!important; border:1.5px solid rgba(45,212,191,0.48)!important; border-top:5px solid #2dd4bf!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.16rem, 1.48vw, 1.32rem); margin-bottom:8px;">Bước 2: Chứng minh toàn ánh</b>
              <div style="font-size:clamp(1.05rem, 1.35vw, 1.2rem); line-height:1.68; color:#fdf2f8;">
                - Lấy tùy ý $k \\in K$, chỉ ra sự tồn tại của $g \\in G$ sao cho $\\varphi(g) = k$.<br>
                - Kết luận <b style="color:#5eead4;">$\\operatorname{im}\\varphi = K$</b>.
              </div>
            </div>

            <!-- Bước 3 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.82)!important; border:1.5px solid rgba(251,191,36,0.48)!important; border-top:5px solid #fbbf24!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.16rem, 1.48vw, 1.32rem); margin-bottom:8px;">Bước 3: Chỉ ra $\\ker\\varphi = N$</b>
              <div style="font-size:clamp(1.05rem, 1.35vw, 1.2rem); line-height:1.68; color:#fdf2f8;">
                - Giải phương trình $\\varphi(g) = e_K$ để tìm hạt nhân và khẳng định <b style="color:#fde68a;">$\\ker\\varphi = N$</b>.<br>
                - (Điều này cũng chứng minh luôn $N \\trianglelefteq G$ mà không cần thử liên hợp!).
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(42,6,22,0.92)!important; border:1.5px solid #fbbf24!important; color:#fef08a!important; font-size:clamp(1.08rem, 1.38vw, 1.24rem); text-align:center;">
            <b>🎯 Dòng chốt điểm tuyệt đối:</b> "Áp dụng Định lý Đẳng cấu Thứ nhất cho đồng cấu $\\varphi$, ta thu được $G/N = G/\\ker\\varphi \\cong \\operatorname{im}\\varphi = K$. $\\blacksquare$"
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 11: VÍ DỤ THỰC CHIẾN 1 - BÀI TẬP 5.5 ((Z x Z)/Delta ~= Z)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(244,114,182,0.15), transparent 32%), linear-gradient(135deg, #1a040e, #3b081f 55%, #1a040e); border:1.5px solid rgba(244,114,182,0.48); color:#fdf2f8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(45,212,191,0.22); border:1.5px solid #2dd4bf; border-radius:999px; color:#5eead4; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ THỰC CHIẾN 1 (BÀI TẬP 5.5)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Chứng Minh $(\\mathbb{Z} \\times \\mathbb{Z}) / \\Delta \\;\\cong\\; \\mathbb{Z}$ Bằng Phương Pháp $3$ Bước</h2>
            <p style="color:#fbcfe8; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Trên nhóm cộng $\\mathbb{Z} \\times \\mathbb{Z}$, xét nhóm con đường chéo <b style="color:#fde68a;">$\\Delta = \\{(k, k) \\mid k \\in \\mathbb{Z}\\}$</b>:
            </p>
          </div>

          <div class="slide-glass-card anim-card anim-d1" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.82)!important; border:1.5px solid rgba(45,212,191,0.5)!important; border-left:6px solid #2dd4bf!important; padding:22px 26px; border-radius:14px;">
            <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.76; color:#fdf2f8;">
              <b>1) Bước 1 (Thiết lập đồng cấu hiệu):</b> Xét ánh xạ $\\delta : \\mathbb{Z} \\times \\mathbb{Z} \\to \\mathbb{Z}$ định bởi <b style="color:#5eead4;">$\\delta(a, b) = a - b$</b>.<br>
              - Kiểm tra bảo toàn phép cộng với mọi $(a_1, b_1), (a_2, b_2) \\in \\mathbb{Z} \\times \\mathbb{Z}$:<br>
              $$\\delta\\big((a_1 + a_2, b_1 + b_2)\\big) = (a_1 + a_2) - (b_1 + b_2) = (a_1 - b_1) + (a_2 - b_2) = \\delta(a_1, b_1) + \\delta(a_2, b_2)$$
              <b>2) Bước 2 (Chứng minh toàn ánh):</b> Với mọi $m \\in \\mathbb{Z}$, chọn cặp $(m, 0) \\in \\mathbb{Z} \\times \\mathbb{Z}$, ta có $\\delta(m, 0) = m - 0 = m$. Vậy $\\operatorname{im}\\delta = \\mathbb{Z}$.<br>
              <b>3) Bước 3 (Tìm hạt nhân $\\ker\\delta$):</b><br>
              $$\\ker\\delta = \\{(a, b) \\in \\mathbb{Z} \\times \\mathbb{Z} \\mid a - b = 0\\} = \\{(a, a) \\mid a \\in \\mathbb{Z}\\} = \\Delta$$
              - <b>Kết luận:</b> Theo Định lý Đẳng cấu Thứ nhất, <b style="color:#fde68a;">$(\\mathbb{Z} \\times \\mathbb{Z}) / \\Delta = (\\mathbb{Z} \\times \\mathbb{Z}) / \\ker\\delta \\cong \\operatorname{im}\\delta = \\mathbb{Z}$</b>! $\\blacksquare$
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 12: VÍ DỤ THỰC CHIẾN 2 - NHÓM THƯƠNG MA TRẬN & ĐƯỜNG TRÒN ĐƠN VỊ
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(244,114,182,0.15), transparent 32%), linear-gradient(135deg, #1a040e, #3b081f 55%, #1a040e); border:1.5px solid rgba(244,114,182,0.48); color:#fdf2f8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(45,212,191,0.22); border:1.5px solid #2dd4bf; border-radius:999px; color:#5eead4; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ THỰC CHIẾN 2
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Hai Đẳng Cấu Nhóm Thương Kinh Điển Trong Đại Số &amp; Giải Tích</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Ví dụ 1: GL_n(R) / SL_n(R) -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border:1.5px solid rgba(251,191,36,0.48)!important; border-left:5px solid #fbbf24!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Thương của nhóm ma trận: $\\operatorname{GL}_n(\\mathbb{R}) / \\operatorname{SL}_n(\\mathbb{R}) \\cong \\mathbb{R}^*$</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fdf2f8; margin-top:10px;">
                - <b>Bước 1:</b> Xét đồng cấu định thức $\\det : \\operatorname{GL}_n(\\mathbb{R}) \\to \\mathbb{R}^*$.<br>
                - <b>Bước 2 (Toàn ánh):</b> Với mọi $r \\in \\mathbb{R}^*$, ma trận đường chéo $A = \\operatorname{diag}(r, 1, \\dots, 1) \\in \\operatorname{GL}_n(\\mathbb{R})$ có $\\det(A) = r$.<br>
                - <b>Bước 3 (Hạt nhân):</b> $\\ker(\\det) = \\{A \\mid \\det(A) = 1\\} = \\operatorname{SL}_n(\\mathbb{R})$.<br>
                <div class="slide-math-display" style="background:rgba(22,3,11,0.92); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.15rem, 1.48vw, 1.34rem); padding:8px; margin:10px 0 0;">
                  $$\\Longrightarrow \\quad \\operatorname{GL}_n(\\mathbb{R}) / \\operatorname{SL}_n(\\mathbb{R}) \\;\\cong\\; (\\mathbb{R}^*, \\cdot)$$
                </div>
              </div>
            </div>

            <!-- Ví dụ 2: R / Z ~= S^1 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border:1.5px solid rgba(244,114,182,0.48)!important; border-left:5px solid #f472b6!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#f9a8d4; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Cuộn trục thực thành đường tròn: $\\mathbb{R}/\\mathbb{Z} \\cong S^1$</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fdf2f8; margin-top:10px;">
                - <b>Bước 1:</b> Xét $\\varphi : (\\mathbb{R}, +) \\to (S^1, \\cdot)$ với $\\varphi(x) = e^{2\\pi i x} = \\cos(2\\pi x) + i\\sin(2\\pi x)$.<br>
                - <b>Bước 2 (Toàn ánh):</b> Mọi điểm trên đường tròn đơn vị $S^1$ đều có dạng $e^{2\\pi i x}$ ($x \\in \\mathbb{R}$).<br>
                - <b>Bước 3 (Hạt nhân):</b> $e^{2\\pi i x} = 1 \\iff x \\in \\mathbb{Z} \\implies \\ker\\varphi = \\mathbb{Z}$.<br>
                <div class="slide-math-display" style="background:rgba(22,3,11,0.92); border-color:#f472b6; color:#fbcfe8; font-size:clamp(1.15rem, 1.48vw, 1.34rem); padding:8px; margin:10px 0 0;">
                  $$\\Longrightarrow \\quad (\\mathbb{R}/\\mathbb{Z}, +) \\;\\cong\\; (S^1, \\cdot)$$
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 13: ĐỊNH LÝ ĐẲNG CẤU THỨ HAI & THỨ BA (ĐỊNH LÝ 5.6 & 5.7)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(244,114,182,0.15), transparent 32%), linear-gradient(135deg, #1a040e, #3b081f 55%, #1a040e); border:1.5px solid rgba(244,114,182,0.48); color:#fdf2f8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ (ĐỊNH LÝ 5.6 &amp; 5.7)
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Định Lý Đẳng Cấu Thứ Hai (Hình Thoi) &amp; Thứ Ba (Thương Của Thương)</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Định lý Đẳng cấu 2 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border:1.5px solid rgba(244,114,182,0.48)!important; border-top:5px solid #f472b6!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#f9a8d4; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Định Lý Đẳng Cấu Thứ Hai (Định lý Hình thoi):</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.68; color:#fdf2f8; margin-top:8px;">
                - <b>Giả thiết:</b> Cho $H \\le G$ và $N \\trianglelefteq G$.<br>
                - <b>Kết luận:</b> Tích $HN \\le G$, giao $H \\cap N \\trianglelefteq H$, và:
                <div class="slide-math-display" style="background:rgba(22,3,11,0.92); border-color:#f472b6; color:#fbcfe8; font-size:clamp(1.22rem, 1.6vw, 1.42rem); padding:10px; margin:10px 0;">
                  $$\\frac{H}{H \\cap N} \\;\\cong\\; \\frac{HN}{N}$$
                </div>
                - <i>Ví dụ trên $(\\mathbb{Z}, +)$:</i> $2\\mathbb{Z} / (2\\mathbb{Z} \\cap 3\\mathbb{Z}) = 2\\mathbb{Z}/6\\mathbb{Z} \\cong (2\\mathbb{Z}+3\\mathbb{Z})/3\\mathbb{Z} = \\mathbb{Z}/3\\mathbb{Z}$.
              </div>
            </div>

            <!-- Định lý Đẳng cấu 3 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border:1.5px solid rgba(251,191,36,0.48)!important; border-top:5px solid #fbbf24!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Định Lý Đẳng Cấu Thứ Ba (Giản ước thương):</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.68; color:#fdf2f8; margin-top:8px;">
                - <b>Giả thiết:</b> Cho $N, H \\trianglelefteq G$ thỏa mãn $N \\subseteq H$.<br>
                - <b>Kết luận:</b> $H/N \\trianglelefteq G/N$, và ta có thể "rút gọn" $N$:
                <div class="slide-math-display" style="background:rgba(22,3,11,0.92); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.22rem, 1.6vw, 1.42rem); padding:10px; margin:10px 0;">
                  $$\\frac{G/N}{H/N} \\;\\cong\\; \\frac{G}{H}$$
                </div>
                - <i>Ví dụ trên $(\\mathbb{Z}, +)$:</i> $(\\mathbb{Z}/12\\mathbb{Z}) / (4\\mathbb{Z}/12\\mathbb{Z}) \\cong \\mathbb{Z}/4\\mathbb{Z}$.
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 14: ĐỊNH LÝ TƯƠNG ỨNG (CORRESPONDENCE THEOREM - ĐỊNH LÝ 5.8)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(244,114,182,0.15), transparent 32%), linear-gradient(135deg, #1a040e, #3b081f 55%, #1a040e); border:1.5px solid rgba(244,114,182,0.48); color:#fdf2f8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ (ĐỊNH LÝ 5.8)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Định Lý Tương Ứng (Mạng Lưới Nhóm Con Của Nhóm Thương)</h2>
            <p style="color:#fbcfe8; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Cho $N \\trianglelefteq G$. Phép chiếu chính tắc $\\pi_N : G \\to G/N$ thiết lập một <b>song ánh bảo toàn quan hệ bao hàm</b> giữa:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(42,6,22,0.94); border:1.5px solid #2dd4bf; color:#99f6e4; font-size:clamp(1.18rem, 1.55vw, 1.38rem); padding:14px 22px; margin:0;">
            $$\\Big\\{\\text{Nhóm con } H \\le G \\text{ chứa } N\\Big\\} \\;\\stackrel{1 - 1}{\\longleftrightarrow}\\; \\Big\\{\\text{Nhóm con của } G/N\\Big\\}, \\qquad H \\;\\longmapsto\\; \\frac{H}{N}$$
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.82)!important; border:1.5px solid rgba(244,114,182,0.45)!important; padding:22px 26px; border-radius:14px;">
            <b style="color:#fde68a; font-size:clamp(1.18rem, 1.52vw, 1.36rem); display:block; margin-bottom:10px;">🔍 Ba đặc trưng đại số được bảo toàn qua song ánh tương ứng:</b>
            <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.76; color:#fdf2f8;">
              - <b>1) Bảo toàn thứ tự bao hàm:</b> Với mọi $N \\subseteq H_1, H_2 \\le G$, ta có <b style="color:#fbcfe8;">$H_1 \\subseteq H_2 \\iff H_1/N \\subseteq H_2/N$</b>.<br>
              - <b>2) Bảo toàn chỉ số:</b> <b style="color:#5eead4;">$[G : H] = [G/N : H/N]$</b>.<br>
              - <b>3) Bảo toàn tính chuẩn tắc:</b> <b style="color:#fde68a;">$H \\trianglelefteq G \\iff H/N \\trianglelefteq G/N$</b> (khi đó $(G/N)/(H/N) \\cong G/H$).
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 15: MỆNH ĐỀ & PHẢN VÍ DỤ - BẤT BIẾN ĐẲNG CẤU & BẪY CÙNG CẤP
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(244,114,182,0.15), transparent 32%), linear-gradient(135deg, #1a040e, #3b081f 55%, #1a040e); border:1.5px solid rgba(244,114,182,0.48); color:#fdf2f8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.24); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ BẤT BIẾN ĐẲNG CẤU &amp; PHẢN VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Làm Sao Chứng Minh Hai Nhóm Cùng Cấp Nhưng KHÔNG Đẳng Cấu?</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Các bất biến đẳng cấu -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border:1.5px solid rgba(45,212,191,0.48)!important; border-left:5px solid #2dd4bf!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Năm Bất Biến Đại Số Qua Đẳng Cấu $G \\cong K$:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fdf2f8; margin-top:10px;">
                Nếu $\\varphi : G \\stackrel{\\cong}{\\longrightarrow} K$ là một đẳng cấu, thì:<br>
                - <b>(i) Cùng lực lượng (cấp):</b> $|G| = |K|$.<br>
                - <b>(ii) Bảo toàn tính Abel:</b> $G$ giao hoán $\\iff K$ giao hoán.<br>
                - <b>(iii) Bảo toàn tính Cyclic:</b> $G$ cyclic $\\iff K$ cyclic.<br>
                - <b>(iv) Bảo toàn cấp từng phần tử:</b> $\\operatorname{ord}(\\varphi(g)) = \\operatorname{ord}(g), \\forall g \\in G$.<br>
                - <b>(v) Cùng số lượng phần tử cấp $d$</b> với mọi $d \\ge 1$.
              </div>
            </div>

            <!-- Cột 2: Phản ví dụ kinh điển -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border:1.5px solid rgba(244,63,94,0.5)!important; border-left:5px solid #fb7185!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Hai Cặp Nhóm Cùng Cấp Nhưng KHÔNG Đẳng Cấu:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fdf2f8; margin-top:10px;">
                - <b>Cặp cấp $6$: $\\mathbb{Z}/6\\mathbb{Z} \\not\\cong S_3$:</b><br>
                &nbsp;&nbsp;+ Cùng có $6$ phần tử, nhưng $\\mathbb{Z}/6\\mathbb{Z}$ là nhóm <b>Abel</b> còn $S_3$ <b>không giao hoán</b>!<br>
                - <b>Cặp cấp $4$: $\\mathbb{Z}/4\\mathbb{Z} \\not\\cong V_4$ (hoặc $U(8)$):</b><br>
                &nbsp;&nbsp;+ Cùng có $4$ phần tử và cùng là nhóm Abel.<br>
                &nbsp;&nbsp;+ Nhưng $\\mathbb{Z}/4\\mathbb{Z}$ là <b>cyclic</b> (có phần tử $[1]$ cấp $4$), còn trong $V_4$ mọi phần tử chỉ có cấp $\\le 2$!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 16: BẢNG TỔNG HỢP BỐN ĐỊNH LÝ ĐẲNG CẤU NHÓM (MỤC 5.7)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:22px 30px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(244,114,182,0.15), transparent 32%), linear-gradient(135deg, #1a040e, #3b081f 55%, #1a040e); border:1.5px solid rgba(244,114,182,0.48); color:#fdf2f8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              📊 BẢNG TỔNG HỢP GIÁO TRÌNH
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.85rem, 2.4vw, 2.25rem);">Hệ Thống Bốn Định Lý Đẳng Cấu &amp; Tương Ứng Của Lý Thuyết Nhóm</h2>
          </div>

          <div class="anim-card anim-d1" style="flex:1; display:flex; flex-direction:column; justify-content:center; overflow-x:auto;">
            <table style="width:100%; height:100%; border-collapse:collapse; font-size:clamp(1.02rem, 1.32vw, 1.2rem); background:rgba(42,6,22,0.86); border:1.5px solid rgba(244,114,182,0.5); border-radius:14px; overflow:hidden;">
              <thead>
                <tr style="background:rgba(236,72,153,0.28); color:#fde68a; text-align:left; font-size:clamp(1.06rem, 1.36vw, 1.24rem);">
                  <th style="padding:12px 16px; border-bottom:1.5px solid rgba(244,114,182,0.45);">Tên Định Lý</th>
                  <th style="padding:12px 16px; border-bottom:1.5px solid rgba(244,114,182,0.45);">Giả Thiết</th>
                  <th style="padding:12px 16px; border-bottom:1.5px solid rgba(244,114,182,0.45);">Kết Quả Đẳng Cấu / Song Ánh</th>
                  <th style="padding:12px 16px; border-bottom:1.5px solid rgba(244,114,182,0.45);">Ý Nghĩa &amp; Ứng Dụng Thực Chiến</th>
                </tr>
              </thead>
              <tbody style="color:#fdf2f8; line-height:1.6;">
                <tr style="border-bottom:1px solid rgba(244,114,182,0.22);">
                  <td style="padding:12px 16px; font-weight:800; color:#fde047;">Định lý đẳng cấu 1</td>
                  <td style="padding:12px 16px;">$\\varphi : G \\to K$ là đồng cấu</td>
                  <td style="padding:12px 16px; color:#5eead4; font-weight:700;">$\\dfrac{G}{\\ker\\varphi} \\;\\cong\\; \\operatorname{im}\\varphi$</td>
                  <td style="padding:12px 16px;">Nhận diện nhóm thương $G/N \\cong K$ qua phương pháp $3$ bước.</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(244,114,182,0.22);">
                  <td style="padding:12px 16px; font-weight:800; color:#f9a8d4;">Định lý đẳng cấu 2</td>
                  <td style="padding:12px 16px;">$H \\le G$ và $N \\trianglelefteq G$</td>
                  <td style="padding:12px 16px; color:#fbcfe8; font-weight:700;">$\\dfrac{H}{H \\cap N} \\;\\cong\\; \\dfrac{HN}{N}$</td>
                  <td style="padding:12px 16px;">Chuyển đổi thương của nhóm con $H$ sang không gian nhân $HN$.</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(244,114,182,0.22);">
                  <td style="padding:12px 16px; font-weight:800; color:#7dd3fc;">Định lý đẳng cấu 3</td>
                  <td style="padding:12px 16px;">$N, H \\trianglelefteq G$ với $N \\subseteq H$</td>
                  <td style="padding:12px 16px; color:#bae6fd; font-weight:700;">$\\dfrac{G/N}{H/N} \\;\\cong\\; \\dfrac{G}{H}$</td>
                  <td style="padding:12px 16px;">Giản ước cấu trúc thương lồng nhau (tương tự rút gọn phân số).</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px; font-weight:800; color:#5eead4;">Định lý tương ứng</td>
                  <td style="padding:12px 16px;">$N \\trianglelefteq G$</td>
                  <td style="padding:12px 16px; color:#fde68a; font-weight:700;">$\\{H \\le G \\mid N \\subseteq H\\} \\leftrightarrow \\{L \\le G/N\\}$</td>
                  <td style="padding:12px 16px;">Xác định toàn bộ mạng lưới nhóm con của $G/N$ từ nhóm mẹ $G$.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 17: TỔNG KẾT CHƯƠNG 5 & CẦU NỐI SANG PHẦN II (LÝ THUYẾT VÀNH)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 10%, rgba(244,114,182,0.15), transparent 32%), linear-gradient(135deg, #1a040e, #3b081f 55%, #1a040e); border:1.5px solid rgba(244,114,182,0.48); color:#fdf2f8;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(236,72,153,0.24); border:1.5px solid #f472b6; border-radius:999px; color:#fbcfe8; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              🎯 TỔNG KẾT CHƯƠNG 5 &amp; PHẦN I
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Bản Đồ Bốn Trụ Cột Chương 5 &amp; Khởi Hành Sang Lý Thuyết Vành</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:16px; margin:0;">
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border-left:5px solid #f472b6!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#f9a8d4; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">1) Đồng cấu nhóm &amp; Các tính chất bảo toàn</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fdf2f8; margin-top:6px;">
                - $\\varphi(ab) = \\varphi(a)\\varphi(b) \\implies \\varphi(e_G) = e_K$ và $\\varphi(a^{-1}) = \\varphi(a)^{-1}$.<br>
                - Nếu $\\varphi(e_G) \\neq e_K$, kết luận ngay $\\varphi$ không phải là đồng cấu!
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border-left:5px solid #2dd4bf!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#5eead4; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">2) Hạt nhân $\\ker\\varphi$ &amp; Tiêu chuẩn đơn ánh</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fdf2f8; margin-top:6px;">
                - $\\ker\\varphi = \\{g \\in G \\mid \\varphi(g) = e_K\\} \\trianglelefteq G$ và $\\operatorname{im}\\varphi \\le K$.<br>
                - $\\varphi$ là đơn ánh (đơn cấu) $\\iff \\ker\\varphi = \\{e_G\\}$.
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border-left:5px solid #fbbf24!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fbbf24; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">3) Định lý Đẳng cấu Thứ nhất &amp; Quy trình $3$ bước</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fdf2f8; margin-top:6px;">
                - $G/\\ker\\varphi \\cong \\operatorname{im}\\varphi$.<br>
                - Để chứng minh $G/N \\cong K$: tìm toàn cấu $\\varphi: G \\twoheadrightarrow K$ có $\\ker\\varphi = N$.
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(42,6,22,0.8)!important; border-left:5px solid #38bdf8!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#7dd3fc; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">4) Bất biến đẳng cấu &amp; Phân biệt nhóm cùng cấp</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fdf2f8; margin-top:6px;">
                - Đẳng cấu bảo toàn tính Abel, tính cyclic và phổ cấp phần tử.<br>
                - Nhớ rõ: $\\mathbb{Z}/6\\mathbb{Z} \\not\\cong S_3$ và $\\mathbb{Z}/4\\mathbb{Z} \\not\\cong V_4$.
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(42,6,22,0.94)!important; border:1.5px solid #fbbf24!important; color:#fef08a!important; font-size:clamp(1.06rem, 1.36vw, 1.22rem); text-align:center; line-height:1.55;">
            <b>🚀 Tiếp nối Chương 6 (Cấu trúc Vành, Miền nguyên &amp; Trường):</b> Khi một tập hợp trang bị <b>đồng thời hai phép toán Cộng ($+$) và Nhân ($\\cdot$)</b> gắn kết qua luật phân phối, ta bước vào thế giới của <b>Vành (Rings)</b>, <b>Ước của không</b> và <b>Trường (Fields)</b>!
          </div>
        </div>
      `
    }
  ],
  "6": [
    // ========================================================
    // SLIDE 1: TRANG BÌA CĂN GIỮA - CỰC QUANG LƯỠNG NGHI & GIAO HÒA HAI PHÉP TOÁN (+, .)
    // ========================================================
    {
      html: `
        <div style="position: relative; width: 100%; height: 100%; min-height: 100%; display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center; padding: 26px 34px 22px; box-sizing: border-box; overflow: hidden; border-radius: 16px; background: radial-gradient(circle at 50% 20%, rgba(190, 242, 100, 0.24), transparent 45%), radial-gradient(ellipse at 12% 85%, rgba(34, 211, 238, 0.26), transparent 42%), radial-gradient(ellipse at 88% 85%, rgba(251, 146, 60, 0.26), transparent 42%), linear-gradient(125deg, #071f29 0%, #162a26 48%, #2e1912 100%); border: 1.5px solid rgba(190, 242, 100, 0.55); color: #f7fee7; box-shadow: 0 18px 45px rgba(7, 20, 26, 0.82);">
          
          <!-- VECTOR SVG NỀN: BẮC CỰC QUANG, HAI VÒNG NHẪN GIAO THOA (+, .) & THẦN THÚ BĂNG - HỎA -->
          <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0;">
            <defs>
              <radialGradient id="c6AuroraCore" cx="50%" cy="26%" r="44%">
                <stop offset="0%" stop-color="#bef264" stop-opacity="0.35"/>
                <stop offset="45%" stop-color="#2dd4bf" stop-opacity="0.14"/>
                <stop offset="100%" stop-color="#071f29" stop-opacity="0"/>
              </radialGradient>
              <linearGradient id="c6AuroraRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.1"/>
                <stop offset="30%" stop-color="#67e8f9" stop-opacity="0.45"/>
                <stop offset="50%" stop-color="#bef264" stop-opacity="0.6"/>
                <stop offset="70%" stop-color="#fbbf24" stop-opacity="0.45"/>
                <stop offset="100%" stop-color="#fb923c" stop-opacity="0.1"/>
              </linearGradient>
              <linearGradient id="c6IcePeak" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#0e7490" stop-opacity="0.7"/>
                <stop offset="100%" stop-color="#04131a" stop-opacity="0.95"/>
              </linearGradient>
              <linearGradient id="c6FirePeak" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#9a3412" stop-opacity="0.7"/>
                <stop offset="100%" stop-color="#1c0a05" stop-opacity="0.95"/>
              </linearGradient>
              <linearGradient id="c6QilinIce" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ecfeff" stop-opacity="0.96"/>
                <stop offset="55%" stop-color="#67e8f9" stop-opacity="0.85"/>
                <stop offset="100%" stop-color="#0891b2" stop-opacity="0.5"/>
              </linearGradient>
              <linearGradient id="c6LionFire" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#fef08a" stop-opacity="0.96"/>
                <stop offset="55%" stop-color="#fb923c" stop-opacity="0.85"/>
                <stop offset="100%" stop-color="#c2410c" stop-opacity="0.5"/>
              </linearGradient>
            </defs>

            <!-- Quầng sáng cực quang trung tâm -->
            <circle cx="500" cy="200" r="340" fill="url(#c6AuroraCore)"/>

            <!-- Dải Bắc Cực Quang (Aurora Borealis) uốn lượn nối hai cực Băng - Hỏa -->
            <path d="M0,165 C220,65 380,245 500,145 C620,45 780,225 1000,135" fill="none" stroke="url(#c6AuroraRibbon)" stroke-width="28" opacity="0.55"/>
            <path d="M0,210 C240,115 360,275 500,185 C640,95 760,255 1000,175" fill="none" stroke="url(#c6AuroraRibbon)" stroke-width="12" opacity="0.7"/>

            <!-- BIỂU TƯỢNG TOÁN HỌC TRUNG TÂM: HAI VÒNG NHẪN VÀNH (R, +, .) LỒNG NHAU -->
            <g transform="translate(500, 205)" opacity="0.42">
              <!-- Vòng nhẫn trái: Nhóm cộng (R, +) -->
              <circle cx="-75" cy="0" r="125" fill="none" stroke="#67e8f9" stroke-width="2.2" stroke-dasharray="10 6"/>
              <circle cx="-75" cy="0" r="98" fill="none" stroke="#22d3ee" stroke-width="1.4"/>
              <!-- Vòng nhẫn phải: Nửa nhóm nhân (R, .) -->
              <circle cx="75" cy="0" r="125" fill="none" stroke="#fbbf24" stroke-width="2.2" stroke-dasharray="10 6"/>
              <circle cx="75" cy="0" r="98" fill="none" stroke="#fb923c" stroke-width="1.4"/>
              <!-- Vòng hào quang Luật Phân Phối khóa ở tâm -->
              <circle cx="0" cy="0" r="52" fill="rgba(190,242,100,0.12)" stroke="#bef264" stroke-width="2.2"/>
              <polygon points="0,-62 54,31 -54,31" fill="none" stroke="#bef264" stroke-width="1.4" opacity="0.8"/>
              <polygon points="0,62 54,-31 -54,-31" fill="none" stroke="#bef264" stroke-width="1.4" opacity="0.8"/>
            </g>

            <!-- CHIM KHỔNG TƯỚC CỰC QUANG (AURORA PEACOCK PHOENIX) BAY TRÊN ĐỈNH VÒNG NHẪN -->
            <g transform="translate(500, 82) scale(0.9)" opacity="0.72" filter="drop-shadow(0 0 14px rgba(190, 242, 100, 0.75))">
              <path d="M0,4 C-35,-24 -92,-32 -148,-12 C-105,6 -58,14 -10,12 Z" fill="#67e8f9"/>
              <path d="M0,4 C35,-24 92,-32 148,-12 C105,6 58,14 10,12 Z" fill="#fbbf24"/>
              <polygon points="0,-18 -8,4 0,22 8,4" fill="#bef264"/>
              <circle cx="-65" cy="-8" r="3.5" fill="#bef264"/>
              <circle cx="65" cy="-8" r="3.5" fill="#bef264"/>
            </g>

            <!-- Dãy núi Băng Tinh (Trái) & Dãy núi Hỏa Ngọc (Phải) giao nhau ở thung lũng giữa -->
            <path d="M0,365 L125,285 L255,345 L410,295 L560,385 L560,600 L0,600 Z" fill="url(#c6IcePeak)"/>
            <path d="M1000,365 L875,285 L745,345 L590,295 L440,385 L440,600 L1000,600 Z" fill="url(#c6FirePeak)"/>
            <path d="M0,445 Q250,390 500,435 T1000,430 L1000,600 L0,600 Z" fill="#081317" opacity="0.94"/>

            <!-- SINH VẬT HUYỀN THOẠI 1: KỲ LÂN BĂNG TINH (GLACIAL QILIN - BÊN TRÁI, BIỂU TƯỢNG PHÉP CỘNG +) -->
            <g transform="translate(170, 402) scale(0.88)" filter="drop-shadow(0 0 14px rgba(34, 211, 238, 0.7))">
              <path d="M-28,2 L-34,46 M-12,4 L-14,48 M18,2 L16,48 M32,0 L38,45" stroke="#a5f3fc" stroke-width="3.2" stroke-linecap="round"/>
              <path d="M-34,0 C-32,-16 -6,-22 24,-16 C36,-14 40,-4 32,6 C12,10 -14,10 -34,0 Z" fill="url(#c6QilinIce)"/>
              <path d="M20,-12 C26,-32 34,-50 40,-64 C48,-66 56,-60 58,-52 C48,-44 40,-26 32,-4 Z" fill="url(#c6QilinIce)"/>
              <!-- Đuôi lượn sóng băng -->
              <path d="M-34,-4 C-56,-14 -68,4 -52,18 C-40,22 -30,10 -34,0 Z" fill="url(#c6QilinIce)"/>
              <!-- Sừng Kỳ Lân phát sáng ngọc lục bảo -->
              <path d="M42,-64 Q24,-92 8,-104 M30,-82 L16,-84" fill="none" stroke="#bef264" stroke-width="2.8" stroke-linecap="round"/>
              <circle cx="8" cy="-104" r="3.5" fill="#bef264"/>
            </g>

            <!-- SINH VẬT HUYỀN THOẠI 2: SƯ TỬ LỬA HOÀNG KIM (SOLAR LION - BÊN PHẢI, BIỂU TƯỢNG PHÉP NHÂN .) -->
            <g transform="translate(830, 405) scale(-0.88, 0.88)" filter="drop-shadow(0 0 14px rgba(251, 146, 60, 0.7))">
              <path d="M-28,2 L-34,46 M-12,4 L-14,48 M18,2 L16,48 M32,0 L38,45" stroke="#fed7aa" stroke-width="3.4" stroke-linecap="round"/>
              <path d="M-34,0 C-32,-16 -6,-22 24,-16 C36,-14 40,-4 32,6 C12,10 -14,10 -34,0 Z" fill="url(#c6LionFire)"/>
              <!-- Bờm lửa sư tử rực rỡ -->
              <path d="M14,-8 C12,-34 26,-58 44,-66 C56,-64 62,-50 54,-38 C46,-26 38,-10 28,4 Z" fill="url(#c6LionFire)"/>
              <path d="M22,-46 L8,-56 L20,-34 L6,-38 L20,-20" fill="none" stroke="#fde047" stroke-width="2.5" stroke-linecap="round"/>
              <!-- Đuôi lửa -->
              <path d="M-34,-4 Q-54,-18 -48,6" fill="none" stroke="#fbbf24" stroke-width="3.2" stroke-linecap="round"/>
              <circle cx="-48" cy="6" r="4" fill="#fde047"/>
            </g>

            <!-- Cụm Tinh Thể Băng (Trái) & Tinh Thể Lửa Hổ Phách (Phải) -->
            <g transform="translate(65, 455)" filter="drop-shadow(0 0 12px rgba(34, 211, 238, 0.65))">
              <polygon points="0,30 -16,-32 0,-60 16,-32" fill="url(#c6QilinIce)"/>
              <polygon points="20,34 10,-12 24,-36 34,-8" fill="#bef264" opacity="0.8"/>
            </g>
            <g transform="translate(935, 455)" filter="drop-shadow(0 0 12px rgba(251, 146, 60, 0.65))">
              <polygon points="0,30 -16,-32 0,-60 16,-32" fill="url(#c6LionFire)"/>
              <polygon points="-20,34 -34,-8 -24,-36 -10,-12" fill="#bef264" opacity="0.8"/>
            </g>

            <!-- Hạt sáng cực quang bay lơ lửng -->
            <g fill="#bef264" opacity="0.9">
              <circle cx="150" cy="215" r="2.8"/><circle cx="290" cy="165" r="2.5"/><circle cx="420" cy="135" r="2.6"/>
              <circle cx="580" cy="135" r="2.6"/><circle cx="710" cy="165" r="2.5"/><circle cx="850" cy="215" r="2.8"/>
              <circle cx="370" cy="420" r="2.6"/><circle cx="630" cy="420" r="2.6"/>
            </g>
          </svg>

          <!-- TIÊU ĐỀ SLIDE (CĂN GIỮA, CỠ CHỮ LỚN NỔI BẬT) -->
          <div class="anim-title" style="position: relative; z-index: 2; max-width: 920px;">
            <div style="display: inline-flex; align-items: center; gap: 10px; padding: 6px 22px; background: rgba(14, 34, 38, 0.86); border: 1.5px solid rgba(190, 242, 100, 0.65); border-radius: 999px; font-size: clamp(0.92rem, 1.2vw, 1.08rem); font-weight: 800; color: #bef264; letter-spacing: 1.2px; margin-bottom: 12px; backdrop-filter: blur(10px); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);">
              <span>💍</span> CẤU TRÚC ĐẠI SỐ — CHƯƠNG 6 (PHẦN II: VÀNH)
            </div>
            <h1 style="font-size: clamp(2.35rem, 3.8vw, 3.25rem); font-weight: 800; color: #ffffff; margin: 0 0 8px; line-height: 1.18; letter-spacing: -0.5px; text-shadow: 0 4px 28px rgba(0, 0, 0, 0.8);">
              Cấu Trúc Vành, <span style="color: #bef264;">Miền Nguyên</span> &amp; <span style="color: #fbbf24;">Trường</span>
            </h1>
            <p style="font-size: clamp(1.1rem, 1.45vw, 1.3rem); color: #d9f99d; margin: 0; font-weight: 600; text-shadow: 0 2px 10px rgba(0,0,0,0.6);">
              Giáo trình Cấu trúc Đại số · TS. Huỳnh Việt Khánh
            </p>
          </div>

          <!-- TÂM ĐIỂM: KHỐI CÂU HỎI TRIẾT HỌC TRUNG TÂM -->
          <div class="slide-glass-card anim-card anim-d1" style="position: relative; z-index: 2; max-width: 880px; width: 100%; padding: 26px 38px; margin: 12px 0; background: rgba(14, 32, 36, 0.84) !important; border: 1.5px solid rgba(190, 242, 100, 0.55) !important; border-radius: 18px; backdrop-filter: blur(20px); box-shadow: 0 20px 50px rgba(5, 14, 18, 0.88), inset 0 1px 0 rgba(255, 255, 255, 0.2); text-align: center;">
            <div style="font-size: clamp(0.98rem, 1.25vw, 1.12rem); font-weight: 800; color: #bef264; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">
              ✦ Câu Hỏi Trung Tâm Của Chương ✦
            </div>
            <p style="font-size: clamp(1.26rem, 1.72vw, 1.5rem); line-height: 1.62; color: #ffffff; margin: 0; font-weight: 500;">
              Khi một không gian toán học sở hữu đồng thời cả <b style="color: #67e8f9;">phép cộng $+$</b> và <b style="color: #fbbf24;">phép nhân $\\cdot$</b> được khóa chặt vào nhau qua <b style="color: #bef264;">luật phân phối</b>, những hiện tượng đại số mới nào (như <i>ước của không</i>, <i>miền nguyên</i> và <i>trường</i>) sẽ nảy sinh?
            </p>
          </div>

          <!-- ĐÁY SLIDE: THANH 4 TRỤ CỘT KIẾN THỨC (KHÔNG THANH CUỘN) -->
          <div class="anim-card anim-d2" style="position: relative; z-index: 2; display: flex; flex-wrap: nowrap; justify-content: space-between; align-items: center; gap: 6px; width: 100%; max-width: 960px; padding: 8px 14px; box-sizing: border-box; background: rgba(14, 32, 36, 0.9); border: 1.5px solid rgba(190, 242, 100, 0.42); border-radius: 999px; backdrop-filter: blur(12px); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45); overflow: hidden;">
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(132, 204, 22, 0.22); border: 1px solid rgba(190, 242, 100, 0.5); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #d9f99d; white-space: nowrap;">
              1. Tiên Đề Vành $(R, +, \\cdot)$
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(34, 211, 238, 0.2); border: 1px solid rgba(103, 232, 249, 0.48); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #67e8f9; white-space: nowrap;">
              2. Khả Nghịch $U(R)$ &amp; Ước Của $0$
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(251, 191, 36, 0.22); border: 1px solid rgba(251, 191, 36, 0.48); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #fde68a; white-space: nowrap;">
              3. Miền Nguyên, Thể &amp; Trường
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(251, 146, 60, 0.22); border: 1px solid rgba(251, 146, 60, 0.48); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #fed7aa; white-space: nowrap;">
              4. Vành Con &amp; Đơn Vị Riêng
            </span>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 2: ĐỘNG CƠ SƯ PHẠM - TỪ MỘT PHÉP TOÁN ĐẾN HỆ THỐNG HAI PHÉP TOÁN
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 12% 15%, rgba(190,242,100,0.14), transparent 34%), radial-gradient(circle at 88% 85%, rgba(251,146,60,0.14), transparent 34%), linear-gradient(135deg, #091d24, #162a27 52%, #291811); border:1.5px solid rgba(190,242,100,0.48); color:#f7fee7;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(132,204,22,0.22); border:1.5px solid #bef264; border-radius:999px; color:#d9f99d; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🌱 TRỰC QUAN KHỞI NGUỒN
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Từ Một Phép Toán (Nhóm) Đến Hệ Thống Hai Phép Toán (Vành)</h2>
            <p style="color:#d9f99d; font-size:clamp(1.14rem, 1.46vw, 1.3rem); line-height:1.58; margin:0;">
              Trên các tập hợp quen thuộc như số nguyên $\\mathbb{Z}$, ma trận $M_n(\\mathbb{R})$ hay đa thức $\\mathbb{R}[x]$, ta luôn làm việc đồng thời với <b>hai phép toán: Cộng ($+$) và Nhân ($\\cdot$)</b>:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Bất đối xứng giữa Cộng và Nhân trên Z -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(103,232,249,0.45)!important; border-left:5px solid #22d3ee!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#67e8f9; font-size:clamp(1.2rem, 1.55vw, 1.38rem); display:block; margin-bottom:10px;">1) Hai Phép Toán Trên $\\mathbb{Z}$ Có Vai Trò Khác Hẳn Nhau:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#f7fee7;">
                - <b>Dưới phép cộng $+$:</b> $(\\mathbb{Z}, +)$ là một <b>nhóm Abel</b> hoàn chỉnh (có đơn vị là $0$, mọi số nguyên $a$ đều có số đối $-a \\in \\mathbb{Z}$).<br>
                - <b>Dưới phép nhân $\\cdot$:</b> $(\\mathbb{Z}, \\cdot)$ chỉ là một <b>nửa nhóm / vị nhóm</b> (có tính kết hợp, nhưng hầu hết các phần tử như $2, 3$ không có nghịch đảo nhân trong $\\mathbb{Z}$).
              </div>
            </div>

            <!-- Cột 2: Sợi dây liên kết Phân phối -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(190,242,100,0.48)!important; border-left:5px solid #bef264!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#bef264; font-size:clamp(1.2rem, 1.55vw, 1.38rem); display:block; margin-bottom:10px;">2) Sợi Dây Gắn Kết: Luật Phân Phối Hai Phía</b>
              <div class="slide-math-display" style="background:rgba(7,18,22,0.92); border-color:#bef264; color:#ecfccb; font-size:clamp(1.16rem, 1.5vw, 1.35rem); padding:12px; margin:8px 0 12px;">
                $$a(b + c) = ab + ac \\qquad \\text{và} \\qquad (b + c)a = ba + ca$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#f7fee7;">
                - Nếu không có luật phân phối, phép cộng và phép nhân chỉ là hai phép toán rời rạc đặt cạnh nhau.<br>
                - Luật phân phối truyền cấu trúc của nhóm cộng sang phép nhân, khai sinh ra <b>Cấu trúc Vành (Ring)</b>!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 3: ĐỊNH NGHĨA - CẤU TRÚC VÀNH (ĐỊNH NGHĨA 6.1)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 12% 15%, rgba(190,242,100,0.14), transparent 34%), radial-gradient(circle at 88% 85%, rgba(251,146,60,0.14), transparent 34%), linear-gradient(135deg, #091d24, #162a27 52%, #291811); border:1.5px solid rgba(190,242,100,0.48); color:#f7fee7;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(132,204,22,0.22); border:1.5px solid #bef264; border-radius:999px; color:#d9f99d; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              📘 ĐỊNH NGHĨA (ĐỊNH NGHĨA 6.1)
            </span>
            <h2 style="color:#ffffff; margin:0 0 6px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Định Nghĩa Cấu Trúc Vành $(R, +, \\cdot)$</h2>
            <p style="color:#d9f99d; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Một <b>vành (Ring)</b> là một tập hợp $R \\neq \\emptyset$ trang bị hai phép toán hai ngôi (phép cộng $+$ và phép nhân $\\cdot$) thỏa mãn đồng thời <b>$3$ nhóm tiên đề</b>:
            </p>
          </div>

          <div class="slide-grid-3 anim-card anim-d1" style="flex:1; align-items:stretch; gap:18px; margin:0;">
            <!-- Nhóm tiên đề 1 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(103,232,249,0.48)!important; border-top:5px solid #22d3ee!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#67e8f9; font-size:clamp(1.18rem, 1.5vw, 1.34rem); margin-bottom:8px;">(i) $(R, +)$ là Nhóm Abel</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.68; color:#f7fee7;">
                - <b>Kết hợp:</b> $(a+b)+c = a+(b+c)$.<br>
                - <b>Phần tử không $0_R$:</b> $a + 0_R = 0_R + a = a$.<br>
                - <b>Phần tử đối $-a$:</b> $a + (-a) = 0_R$.<br>
                - <b>Giao hoán:</b> $a + b = b + a$.
              </div>
            </div>

            <!-- Nhóm tiên đề 2 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(251,146,60,0.48)!important; border-top:5px solid #fb923c!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#fdba74; font-size:clamp(1.18rem, 1.5vw, 1.34rem); margin-bottom:8px;">(ii) $(R, \\cdot)$ là Nửa nhóm</b>
              <div class="slide-math-display" style="background:rgba(7,18,22,0.92); border-color:#fb923c; color:#fed7aa; font-size:clamp(1.14rem, 1.46vw, 1.3rem); padding:10px; margin:10px 0;">
                $$(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$$
              </div>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.68; color:#f7fee7;">
                - Phép nhân đóng trên $R$ và thỏa mãn <b>tính kết hợp</b> với mọi $a, b, c \\in R$.
              </div>
            </div>

            <!-- Nhóm tiên đề 3 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(190,242,100,0.48)!important; border-top:5px solid #bef264!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#bef264; font-size:clamp(1.18rem, 1.5vw, 1.34rem); margin-bottom:8px;">(iii) Luật Phân Phối Hai Phía</b>
              <div class="slide-math-display" style="background:rgba(7,18,22,0.92); border-color:#bef264; color:#ecfccb; font-size:clamp(1.1rem, 1.42vw, 1.26rem); padding:10px; margin:10px 0;">
                $$\\begin{aligned} a(b + c) &= ab + ac \\\\ (b + c)a &= ba + ca \\end{aligned}$$
              </div>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#f7fee7;">
                - Bắt buộc kiểm tra cả <b>phân phối trái</b> và <b>phân phối phải</b>!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 4: QUY ƯỚC GIÁO TRÌNH & VÍ DỤ ĐỐI CHỨNG VỀ VÀNH
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 12% 15%, rgba(190,242,100,0.14), transparent 34%), radial-gradient(circle at 88% 85%, rgba(251,146,60,0.14), transparent 34%), linear-gradient(135deg, #091d24, #162a27 52%, #291811); border:1.5px solid rgba(190,242,100,0.48); color:#f7fee7;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              ⚠️ QUY ƯỚC BẮT BUỘC &amp; VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Vành Giao Hoán, Vành Có Đơn Vị $1_R$ &amp; Quy Ước Giáo Trình</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Quy ước giáo trình -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(251,191,36,0.48)!important; border-left:5px solid #fbbf24!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Ba Quy Ước Chuẩn Mực Của Giáo Trình:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#f7fee7; margin-top:10px;">
                - <b>Không mặc định giao hoán &amp; không mặc định có đơn vị:</b> Một vành tổng quát $(R, +, \\cdot)$ chỉ cần phép nhân kết hợp.<br>
                - <b>Vành giao hoán (Commutative Ring):</b> Nếu thỏa thêm $ab = ba, \\forall a, b \\in R$.<br>
                - <b>Vành có đơn vị (Ring with unity):</b> Nếu tồn tại phần tử đơn vị nhân $1_R \\in R$ sao cho $a \\cdot 1_R = 1_R \\cdot a = a, \\forall a \\in R$.<br>
                - <b>Vành không $\\{0\\}$:</b> Vành duy nhất có $1_R = 0_R$. Nếu $R \\neq \\{0\\}$ thì luôn có $1_R \\neq 0_R$.
              </div>
            </div>

            <!-- Cột 2: Ví dụ đối chứng -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(190,242,100,0.48)!important; border-left:5px solid #bef264!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#bef264; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Ví Dụ Đối Chứng Ba Lớp Vành Điển Hình:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#f7fee7; margin-top:10px;">
                - <b>$(\\mathbb{Z}, +, \\cdot)$ và $(\\mathbb{Z}/n\\mathbb{Z}, +, \\cdot)$:</b> Là các <b>vành giao hoán có đơn vị</b> ($1$ và $[1]_n$).<br>
                - <b>$(2\\mathbb{Z}, +, \\cdot)$ (Tập các số nguyên chẵn):</b> Là <b>vành giao hoán nhưng KHÔNG có đơn vị</b> (vì số $1 \\notin 2\\mathbb{Z}$).<br>
                - <b>$(M_n(\\mathbb{R}), +, \\cdot)$ ($n \\ge 2$):</b> Là <b>vành có đơn vị</b> (ma trận $I_n$) nhưng <b>KHÔNG giao hoán</b> ($AB \\neq BA$).
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 5: ĐỊNH LÝ - QUY TẮC TÍNH TOÁN CƠ BẢN TRONG VÀNH (ĐỊNH LÝ 6.2)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 12% 15%, rgba(190,242,100,0.14), transparent 34%), radial-gradient(circle at 88% 85%, rgba(251,146,60,0.14), transparent 34%), linear-gradient(135deg, #091d24, #162a27 52%, #291811); border:1.5px solid rgba(190,242,100,0.48); color:#f7fee7;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ (ĐỊNH LÝ 6.2)
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Các Quy Tắc Tính Toán Nền Tảng Trong Một Vành</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: 4 quy tắc -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(190,242,100,0.48)!important; border-left:5px solid #bef264!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#bef264; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Bốn Đẳng Thức Đúng Trong Mọi Vành $R$:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.78; color:#f7fee7; margin-top:10px;">
                - <b>1) Nhân với phần tử không:</b> <b style="color:#fde68a;">$a \\cdot 0_R = 0_R \\cdot a = 0_R$</b>.<br>
                - <b>2) Quy tắc đổi dấu:</b> <b style="color:#67e8f9;">$a(-b) = (-a)b = -(ab)$</b>.<br>
                - <b>3) Âm nhân âm thành dương:</b> <b style="color:#bef264;">$(-a)(-b) = ab$</b>.<br>
                - <b>4) Phân phối với phép trừ:</b> $a(b - c) = ab - ac$ và $(b - c)a = ba - ca$. (Nếu có $1_R$: $(-1_R)a = -a$).
              </div>
            </div>

            <!-- Cột 2: Chứng minh mẫu mực -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(103,232,249,0.48)!important; border-left:5px solid #22d3ee!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#67e8f9; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Chứng Minh Mẫu Mực Nhờ Luật Phân Phối:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#f7fee7; margin-top:10px;">
                - <b>Tại sao $a \\cdot 0_R = 0_R$?</b> Vì $0_R = 0_R + 0_R$, dùng phân phối trái:<br>
                $$a \\cdot 0_R + 0_R = a(0_R + 0_R) = a \\cdot 0_R + a \\cdot 0_R$$
                &nbsp;&nbsp;Giản ước $a \\cdot 0_R$ trong nhóm cộng $(R, +) \\implies \\mathbf{a \\cdot 0_R = 0_R}$!<br>
                - <b>Tại sao $a(-b) = -(ab)$?</b> Xét tổng:<br>
                $$ab + a(-b) = a(b + (-b)) = a \\cdot 0_R = 0_R \\implies a(-b) = -(ab). \\; \\blacksquare$$
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 6: LƯU Ý & PHẢN VÍ DỤ - BẪY KHAI TRIỂN HẰNG ĐẲNG THỨC TRONG VÀNH
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 12% 15%, rgba(190,242,100,0.14), transparent 34%), radial-gradient(circle at 88% 85%, rgba(251,146,60,0.14), transparent 34%), linear-gradient(135deg, #091d24, #162a27 52%, #291811); border:1.5px solid rgba(190,242,100,0.48); color:#f7fee7;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.24); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              ⚠️ CẢNH BÁO BẪY TÍNH TOÁN
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Bẫy Khai Triển Hằng Đẳng Thức Trong Vành Không Giao Hoán</h2>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(14,32,36,0.94); border:1.5px solid #fb7185; color:#fecdd3; font-size:clamp(1.2rem, 1.58vw, 1.42rem); padding:14px 22px; margin:0;">
            $$(a + b)^2 = (a + b)(a + b) = a^2 + \\mathbf{ab + ba} + b^2 \\;\\neq\\; a^2 + 2ab + b^2$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Khai triển đúng -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(190,242,100,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#bef264; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Tại sao không được gộp thành $2ab$ hay $a^2 - b^2$?</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#f7fee7; margin-top:10px;">
                - Áp dụng luật phân phối hai phía cho $(a - b)(a - b)$:<br>
                $$(a - b)^2 = a(a - b) - b(a - b) = a^2 - ab - ba + b^2$$
                - Tương tự: $(a + b)(a - b) = a^2 - ab + ba - b^2$.<br>
                - Hai số hạng giữa <b>chỉ gộp/triệt tiêu được khi và chỉ khi $ab = ba$</b>!
              </div>
            </div>

            <!-- Cột 2: Ví dụ bài toán luỹ thừa 2 (Idempotent ring) -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(251,191,36,0.48)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Ứng dụng: Vành Boole ($x^2 = x, \\forall x \\in R$) luôn Giao hoán!</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#f7fee7; margin-top:10px;">
                - Với mọi $a, b \\in R$: $(a + b)^2 = a + b \\implies a^2 + ab + ba + b^2 = a + b$.<br>
                - Do $a^2 = a, b^2 = b$, giản ước được <b style="color:#fde68a;">$ab + ba = 0_R \\implies ab = -ba$</b>.<br>
                - Mặt khác với mọi $x$: $x + x = (x + x)^2 = 4x^2 = 4x \\implies 2x = 0_R \\implies x = -x$. Suy ra $ab = -ba = ba$ ($R$ giao hoán!).
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 7: ĐỊNH NGHĨA - PHẦN TỬ KHẢ NGHỊCH & NHÓM CÁC ĐƠN VỊ U(R)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 12% 15%, rgba(190,242,100,0.14), transparent 34%), radial-gradient(circle at 88% 85%, rgba(251,146,60,0.14), transparent 34%), linear-gradient(135deg, #091d24, #162a27 52%, #291811); border:1.5px solid rgba(190,242,100,0.48); color:#f7fee7;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(132,204,22,0.22); border:1.5px solid #bef264; border-radius:999px; color:#d9f99d; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 ĐỊNH NGHĨA (ĐỊNH NGHĨA 6.3)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Phần Tử Khả Nghịch (Unit) &amp; Nhóm Nhân Các Đơn Vị $U(R)$</h2>
            <p style="color:#d9f99d; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Cho $R$ là một vành có đơn vị $1_R$. Một phần tử $u \\in R$ được gọi là <b>khả nghịch</b> (hay một <b>đơn vị / unit</b> của $R$) nếu tồn tại $v \\in R$ sao cho:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(14,32,36,0.94); border:1.5px solid #bef264; color:#ecfccb; font-size:clamp(1.24rem, 1.65vw, 1.48rem); padding:14px 24px; margin:0;">
            $$u \\cdot v = v \\cdot u = 1_R \\qquad \\Big(\\text{Ký hiệu } v = u^{-1},\\; \\text{tập khả nghịch: } U(R) \\text{ hoặc } R^\\times\\Big)$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Cấu trúc nhóm U(R) -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(103,232,249,0.45)!important; border-left:5px solid #22d3ee!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#67e8f9; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(i) Cấu trúc Nhóm các đơn vị $(U(R), \\cdot)$:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#f7fee7; margin-top:10px;">
                - Tập hợp $U(R) = \\{u \\in R \\mid \\exists u^{-1} \\in R\\}$ luôn <b>lập thành một nhóm dưới phép nhân</b> của vành $R$.<br>
                - <b>Phân biệt thuật ngữ:</b> "Phần tử đơn vị" (identity $1_R$) là số $1$ của vành, còn "một đơn vị" (a unit $u \\in U(R)$) là một phần tử khả nghịch nhân!
              </div>
            </div>

            <!-- Cột 2: Ví dụ U(R) quen thuộc -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(251,191,36,0.48)!important; border-left:5px solid #fbbf24!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(ii) Các Nhóm Đơn Vị $U(R)$ Kinh Điển:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#f7fee7; margin-top:10px;">
                - Trong vành số nguyên $\\mathbb{Z}$: <b style="color:#fde68a;">$U(\\mathbb{Z}) = \\{1, -1\\}$</b>.<br>
                - Trong vành $\\mathbb{Z}/n\\mathbb{Z}$: <b style="color:#fde68a;">$U(\\mathbb{Z}/n\\mathbb{Z}) = U(n) = \\{[a]_n \\mid \\gcd(a, n) = 1\\}$</b>.<br>
                - Trong vành ma trận $M_n(\\mathbb{R})$: <b style="color:#fde68a;">$U(M_n(\\mathbb{R})) = \\operatorname{GL}_n(\\mathbb{R})$</b>.<br>
                - Trong vành đa thức $\\mathbb{R}[x]$: <b style="color:#fde68a;">$U(\\mathbb{R}[x]) = \\mathbb{R}^* = \\mathbb{R} \\setminus \\{0\\}$</b>.
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 8: ĐỊNH NGHĨA - ƯỚC CỦA KHÔNG & LUẬT GIẢN ƯỚC NHÂN
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 12% 15%, rgba(190,242,100,0.14), transparent 34%), radial-gradient(circle at 88% 85%, rgba(251,146,60,0.14), transparent 34%), linear-gradient(135deg, #091d24, #162a27 52%, #291811); border:1.5px solid rgba(190,242,100,0.48); color:#f7fee7;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(249,115,22,0.24); border:1.5px solid #fb923c; border-radius:999px; color:#fed7aa; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 ĐỊNH NGHĨA (ĐỊNH NGHĨA 6.4)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Ước Của Không (Zero Divisor) &amp; Điều Kiện Giản Ước Nhân</h2>
            <p style="color:#d9f99d; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Trong một vành $R$, hai phần tử <b>khác không</b> nhân với nhau vẫn có thể bằng $0_R$! Một phần tử <b style="color:#fde68a;">$a \\in R,\\; a \\neq 0_R$</b> được gọi là:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Ước của không trái & phải -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(251,146,60,0.48)!important; border-top:5px solid #fb923c!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fdba74; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(i) Ước của không trái &amp; Ước của không phải:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#f7fee7; margin-top:10px;">
                - <b>Ước của không trái:</b> Tồn tại <b style="color:#fde68a;">$b \\in R, b \\neq 0_R$</b> sao cho <b style="color:#fde68a;">$a \\cdot b = 0_R$</b>.<br>
                - <b>Ước của không phải:</b> Tồn tại <b style="color:#fde68a;">$c \\in R, c \\neq 0_R$</b> sao cho <b style="color:#fde68a;">$c \\cdot a = 0_R$</b>.<br>
                - <b>⚠️ Lưu ý định nghĩa:</b> Phần tử $0_R$ <b>không bao giờ</b> được gọi là ước của không! (Bản thân $a$ và phần tử nhân cùng $b$ đều phải $\\neq 0_R$).
              </div>
            </div>

            <!-- Cột 2: Luật giản ước nhân -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(190,242,100,0.48)!important; border-top:5px solid #bef264!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#bef264; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(ii) Điều kiện sống còn của Luật giản ước nhân:</b>
              <div class="slide-math-display" style="background:rgba(7,18,22,0.92); border-color:#bef264; color:#ecfccb; font-size:clamp(1.14rem, 1.46vw, 1.3rem); padding:10px; margin:10px 0;">
                $$ax = ay \\iff a(x - y) = 0_R$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#f7fee7;">
                - Luật giản ước nhân ($ax = ay \\implies x = y$ với mọi $a \\neq 0_R$) nghiệm đúng trong vành $R$ <b>khi và chỉ khi $R$ không có ước của không</b>!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 9: MỆNH ĐỀ & VÍ DỤ - SỰ RỜI NHAU GIỮA U(R) VÀ ƯỚC CỦA KHÔNG
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 12% 15%, rgba(190,242,100,0.14), transparent 34%), radial-gradient(circle at 88% 85%, rgba(251,146,60,0.14), transparent 34%), linear-gradient(135deg, #091d24, #162a27 52%, #291811); border:1.5px solid rgba(190,242,100,0.48); color:#f7fee7;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ MỆNH ĐỀ 6.5 &amp; VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Một Phần Tử Khả Nghịch Không Bao Giờ Là Một Ước Của Không!</h2>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(14,32,36,0.94); border:1.5px solid #fbbf24; color:#fde68a; font-size:clamp(1.2rem, 1.58vw, 1.42rem); padding:12px 22px; margin:0;">
            $$u \\in U(R) \\;\\text{ và }\\; ub = 0_R \\implies b = u^{-1}(ub) = u^{-1} \\cdot 0_R = 0_R \\quad \\Big(U(R) \\cap \\{\\text{Ước của } 0\\} = \\emptyset\\Big)$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Ví dụ 1: Trên Z/6Z -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(103,232,249,0.48)!important; border-left:5px solid #22d3ee!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#67e8f9; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Phân loại phần tử trong vành $\\mathbb{Z}/6\\mathbb{Z}$:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#f7fee7; margin-top:10px;">
                - <b>Phần tử không:</b> $\\{[0]\\}$.<br>
                - <b>Phần tử khả nghịch $U(\\mathbb{Z}/6\\mathbb{Z})$:</b> $\\{[1], [5]\\}$ (do $\\gcd(a, 6) = 1$).<br>
                - <b>Ước của không:</b> $\\{[2], [3], [4]\\}$ vì:<br>
                $$[2] \\cdot [3] = [6] = [0] \\quad \\text{và} \\quad [4] \\cdot [3] = [12] = [0]$$
              </div>
            </div>

            <!-- Ví dụ 2: Trên M_2(R) -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(251,146,60,0.48)!important; border-left:5px solid #fb923c!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fdba74; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Ước của không trong vành ma trận $M_2(\\mathbb{R})$:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#f7fee7; margin-top:10px;">
                - Hai ma trận khác $0$ nhân nhau vẫn có thể bằng ma trận $0$:<br>
                <div class="slide-math-display" style="background:rgba(7,18,22,0.92); border-color:#fb923c; color:#fed7aa; font-size:clamp(1.08rem, 1.4vw, 1.24rem); padding:8px; margin:8px 0;">
                  $$\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix} \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$$
                </div>
                - Mọi ma trận $A \\neq 0$ có $\\det(A) = 0$ đều là ước của không trong $M_2(\\mathbb{R})$!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 10: ĐỊNH NGHĨA - THANG BẬC MIỀN NGUYÊN, VÀNH CHIA & TRƯỜNG
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 12% 15%, rgba(190,242,100,0.14), transparent 34%), radial-gradient(circle at 88% 85%, rgba(251,146,60,0.14), transparent 34%), linear-gradient(135deg, #091d24, #162a27 52%, #291811); border:1.5px solid rgba(190,242,100,0.48); color:#f7fee7;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(132,204,22,0.22); border:1.5px solid #bef264; border-radius:999px; color:#d9f99d; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              📘 ĐỊNH NGHĨA TRỌNG TÂM (MỤC 6.5)
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Thang Bậc Cấu Trúc: Miền Nguyên, Vành Chia (Thể) và Trường</h2>
          </div>

          <div class="slide-grid-3 anim-card anim-d1" style="flex:1; align-items:stretch; gap:18px; margin:0;">
            <!-- Nấc 1: Miền nguyên -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(103,232,249,0.48)!important; border-top:5px solid #22d3ee!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#67e8f9; font-size:clamp(1.16rem, 1.48vw, 1.32rem); margin-bottom:8px;">(i) Miền Nguyên (Integral Domain)</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.68; color:#f7fee7;">
                - <b>1)</b> Vành <b>giao hoán</b> có đơn vị <b style="color:#67e8f9;">$1_R \\neq 0_R$</b>.<br>
                - <b>2) Không có ước của không:</b><br>
                $$ab = 0_R \\implies a = 0_R \\lor b = 0_R$$
                - <i>Ví dụ:</i> $\\mathbb{Z},\\; \\mathbb{Z}[i],\\; \\mathbb{R}[x]$.
              </div>
            </div>

            <!-- Nấc 2: Vành chia (Thể) -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(251,146,60,0.48)!important; border-top:5px solid #fb923c!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#fdba74; font-size:clamp(1.16rem, 1.48vw, 1.32rem); margin-bottom:8px;">(ii) Vành Chia / Thể (Division Ring)</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.68; color:#f7fee7;">
                - <b>1)</b> Vành có đơn vị <b style="color:#fdba74;">$1_R \\neq 0_R$</b> (không đòi hỏi giao hoán).<br>
                - <b>2) Mọi phần tử $\\neq 0_R$ đều khả nghịch:</b><br>
                $$U(R) = R \\setminus \\{0_R\\}$$
                - <i>Ví dụ:</i> Thể Quaternion $\\mathbb{H}$.
              </div>
            </div>

            <!-- Nấc 3: Trường -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.88)!important; border:1.5px solid #bef264!important; border-top:5px solid #bef264!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#bef264; font-size:clamp(1.16rem, 1.48vw, 1.32rem); margin-bottom:8px;">(iii) Trường (Field)</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.68; color:#ecfccb;">
                - Là <b>vành giao hoán</b> có $1_R \\neq 0_R$ mà <b>mọi phần tử khác $0_R$ đều khả nghịch</b>:<br>
                $$(R \\setminus \\{0_R\\}, \\cdot) \\text{ là nhóm Abel}$$
                - <i>Ví dụ:</i> $\\mathbb{Q},\\; \\mathbb{R},\\; \\mathbb{C},\\; \\mathbb{Z}/p\\mathbb{Z}$ ($p$ nguyên tố).
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:12px 22px; background:rgba(14,32,36,0.92)!important; border:1.5px solid #fbbf24!important; color:#fef08a!important; font-size:clamp(1.06rem, 1.36vw, 1.22rem); text-align:center;">
            <b>✨ Công thức liên kết cốt lõi:</b> $\\text{Trường} = \\text{Vành chia} + \\text{Giao hoán} = \\text{Miền nguyên} + \\text{Mọi phần tử khác } 0 \\text{ khả nghịch}$ (Mọi trường đều là miền nguyên!).
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 11: SƠ ĐỒ PHÂN CẤP VÀNH & HAI ĐỊNH LÝ HỮU HẠN
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 12% 15%, rgba(190,242,100,0.14), transparent 34%), radial-gradient(circle at 88% 85%, rgba(251,146,60,0.14), transparent 34%), linear-gradient(135deg, #091d24, #162a27 52%, #291811); border:1.5px solid rgba(190,242,100,0.48); color:#f7fee7;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              🏛️ SƠ ĐỒ CẤU TRÚC &amp; ĐỊNH LÝ HỮU HẠN
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Mạng Lưới Phân Cấp Vành &amp; Sự Sụp Đổ Ranh Giới Khi Hữu Hạn</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; grid-template-columns:minmax(310px, 0.92fr) minmax(0, 1.08fr); gap:20px; align-items:stretch; margin:0;">
            <!-- Cột 1: Sơ đồ SVG phân cấp từ Vành lên Trường -->
            <div class="slide-glass-card" style="background:rgba(14,32,36,0.85)!important; border:1.5px solid rgba(190,242,100,0.48)!important; padding:14px; border-radius:14px; display:flex; flex-direction:column; justify-content:center; align-items:center;">
              <svg viewBox="0 0 420 310" style="width:100%; height:100%; max-height:310px;">
                <g stroke="#bef264" stroke-width="2.5" opacity="0.85">
                  <line x1="210" y1="46" x2="110" y2="115"/>
                  <line x1="210" y1="46" x2="310" y2="115"/>
                  <line x1="110" y1="155" x2="110" y2="205"/>
                  <line x1="310" y1="155" x2="310" y2="205"/>
                  <line x1="110" y1="245" x2="210" y2="275"/>
                  <line x1="310" y1="245" x2="210" y2="275"/>
                </g>
                <!-- Đỉnh: TRƯỜNG -->
                <rect x="125" y="10" width="170" height="42" rx="10" fill="#091d24" stroke="#bef264" stroke-width="2.5"/>
                <text x="210" y="36" fill="#bef264" font-size="16" font-weight="800" text-anchor="middle">TRƯỜNG (Field)</text>

                <!-- Tầng 2: Miền nguyên & Vành chia -->
                <rect x="20" y="112" width="180" height="42" rx="9" fill="#091d24" stroke="#22d3ee" stroke-width="2"/>
                <text x="110" y="138" fill="#67e8f9" font-size="14.5" font-weight="700" text-anchor="middle">Miền nguyên (Domain)</text>

                <rect x="220" y="112" width="180" height="42" rx="9" fill="#091d24" stroke="#fb923c" stroke-width="2"/>
                <text x="310" y="138" fill="#fdba74" font-size="14.5" font-weight="700" text-anchor="middle">Vành chia (Thể)</text>

                <!-- Tầng 3: Vành giao hoán có 1 & Vành có 1 -->
                <rect x="20" y="198" width="180" height="40" rx="9" fill="#091d24" stroke="#94a3b8" stroke-width="1.8"/>
                <text x="110" y="223" fill="#e2e8f0" font-size="14" font-weight="700" text-anchor="middle">Vành giao hoán có 1</text>

                <rect x="220" y="198" width="180" height="40" rx="9" fill="#091d24" stroke="#94a3b8" stroke-width="1.8"/>
                <text x="310" y="223" fill="#e2e8f0" font-size="14" font-weight="700" text-anchor="middle">Vành có đơn vị 1</text>

                <!-- Đáy: VÀNH TỔNG QUÁT -->
                <rect x="115" y="262" width="190" height="40" rx="10" fill="#091d24" stroke="#fbbf24" stroke-width="2.2"/>
                <text x="210" y="287" fill="#fde68a" font-size="15" font-weight="800" text-anchor="middle">VÀNH TỔNG QUÁT (Ring)</text>
              </svg>
            </div>

            <!-- Cột 2: Hai định lý hữu hạn kinh điển -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(251,191,36,0.48)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.18rem, 1.52vw, 1.36rem); display:block; margin-bottom:10px;">⚡ Hai Định Lý Đảo Ngoạn Mục Khi $R$ Hữu Hạn:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#f7fee7;">
                - <b>1) Định lý 1: Mọi miền nguyên hữu hạn đều là một Trường!</b><br>
                &nbsp;&nbsp;+ <i>Chứng minh:</i> Với $a \\in R \\setminus \\{0_R\\}$, xét ánh xạ nhân $L_a(x) = ax$. Do $R$ không có ước của $0$, $L_a$ là đơn ánh trên tập hữu hạn $R$ nên đồng thời là <b>toàn ánh</b> $\\implies \\exists b \\in R: ab = 1_R$!<br>
                &nbsp;&nbsp;+ <i>Hệ quả:</i> $\\mathbb{Z}/n\\mathbb{Z}$ là trường $\\iff \\mathbb{Z}/n\\mathbb{Z}$ là miền nguyên $\\iff n$ nguyên tố.<br>
                - <b>2) Định lý nhỏ Wedderburn:</b> Mọi vành chia hữu hạn đều tự động giao hoán và trở thành một <b>Trường</b>!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 12: PHẢN VÍ DỤ - BỘ 4 PHẢN VÍ DỤ KINH ĐIỂN TRÊN SƠ ĐỒ VÀNH
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 12% 15%, rgba(190,242,100,0.14), transparent 34%), radial-gradient(circle at 88% 85%, rgba(251,146,60,0.14), transparent 34%), linear-gradient(135deg, #091d24, #162a27 52%, #291811); border:1.5px solid rgba(190,242,100,0.48); color:#f7fee7;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.24); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              ⚠️ PHẢN VÍ DỤ (BÀI TẬP 6.19)
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Bốn Phản Ví Dụ Bác Bỏ Chiều Ngược Lại Trên Sơ Đồ Vành</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:16px; margin:0;">
            <!-- Phản ví dụ 1 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border-left:5px solid #22d3ee!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#67e8f9; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">1) $2\\mathbb{Z}$: Giao hoán + Không ước của $0$ $\\not\\implies$ Miền nguyên</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#f7fee7; margin-top:6px;">
                - Vành các số chẵn $2\\mathbb{Z}$ giao hoán và không có ước của $0$, nhưng <b>thiếu phần tử đơn vị $1$</b> ($1 \\notin 2\\mathbb{Z}$), nên không là miền nguyên!
              </div>
            </div>

            <!-- Phản ví dụ 2 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border-left:5px solid #fb923c!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fdba74; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">2) $M_2(\\mathbb{R})$: Vành có đơn vị $1_R$ $\\not\\implies$ Vành giao hoán</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#f7fee7; margin-top:6px;">
                - Có đơn vị $I_2$, nhưng vi phạm cả tính giao hoán ($E_{12}E_{21} \\neq E_{21}E_{12}$) lẫn điều kiện không có ước của $0$ ($E_{12}^2 = 0$).
              </div>
            </div>

            <!-- Phản ví dụ 3 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border-left:5px solid #fb7185!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fda4af; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">3) $\\mathbb{Z}/6\\mathbb{Z}$: Vành giao hoán có $1$ $\\not\\implies$ Miền nguyên</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#f7fee7; margin-top:6px;">
                - Giao hoán và có đơn vị $[1]_6$, nhưng <b>có ước của không</b>: $[2]_6 \\neq [0]_6$ và $[3]_6 \\neq [0]_6$ mà $[2]_6[3]_6 = [0]_6$.
              </div>
            </div>

            <!-- Phản ví dụ 4 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border-left:5px solid #bef264!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#bef264; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">4) $\\mathbb{Z}$ (hoặc $\\mathbb{R}[x]$): Miền nguyên (vô hạn) $\\not\\implies$ Trường</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#f7fee7; margin-top:6px;">
                - $\\mathbb{Z}$ là miền nguyên chuẩn mực, nhưng số $2 \\neq 0$ không có nghịch đảo nhân trong $\\mathbb{Z}$ ($U(\\mathbb{Z}) = \\{\\pm 1\\} \\neq \\mathbb{Z} \\setminus \\{0\\}$).
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 13: ĐỊNH LÝ - TIÊU CHUẨN VÀNH CON (ĐỊNH LÝ 6.6)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 12% 15%, rgba(190,242,100,0.14), transparent 34%), radial-gradient(circle at 88% 85%, rgba(251,146,60,0.14), transparent 34%), linear-gradient(135deg, #091d24, #162a27 52%, #291811); border:1.5px solid rgba(190,242,100,0.48); color:#f7fee7;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ (ĐỊNH LÝ 6.6)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Khái Niệm Vành Con &amp; Tiêu Chuẩn Nhận Diện Vành Con</h2>
            <p style="color:#d9f99d; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Cho vành $(R, +, \\cdot)$. Tập con $S \\subseteq R$ là một <b>vành con (Subring)</b> của $R$ nếu bản thân $(S, +, \\cdot)$ là một vành dưới hai phép toán thu hẹp từ $R$. Tiêu chuẩn kiểm tra rút gọn gồm:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(14,32,36,0.94); border:2px solid #bef264; color:#ecfccb; font-size:clamp(1.24rem, 1.65vw, 1.48rem); padding:14px 24px; margin:0;">
            $$S \\text{ là vành con của } R \\iff \\begin{cases} \\text{(i) } S \\neq \\emptyset \\; (\\text{thường kiểm tra } 0_R \\in S) \\\\ \\text{(ii) } \\forall x, y \\in S \\implies x - y \\in S \\quad (\\text{Nhóm con cộng}) \\\\ \\text{(iii) } \\forall x, y \\in S \\implies x \\cdot y \\in S \\quad (\\text{Đóng với phép nhân}) \\end{cases}$$
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(103,232,249,0.48)!important; border-left:6px solid #22d3ee!important; padding:20px 26px; border-radius:14px;">
            <b style="color:#67e8f9; font-size:clamp(1.18rem, 1.52vw, 1.36rem); display:block; margin-bottom:8px;">💡 Ví dụ minh họa: Vành các số nguyên Gauss $\\mathbb{Z}[i] = \\{a + bi \\mid a, b \\in \\mathbb{Z}\\} \\subset \\mathbb{C}$</b>
            <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#f7fee7;">
              - <b>(i) Khác rỗng:</b> $0 = 0 + 0i \\in \\mathbb{Z}[i]$.<br>
              - <b>(ii) Đóng với hiệu:</b> $(a + bi) - (c + di) = (a - c) + (b - d)i \\in \\mathbb{Z}[i]$ (do $a - c, b - d \\in \\mathbb{Z}$).<br>
              - <b>(iii) Đóng với tích:</b> $(a + bi)(c + di) = (ac - bd) + (ad + bc)i \\in \\mathbb{Z}[i]$. Vậy $\\mathbb{Z}[i]$ là vành con của $\\mathbb{C}$!
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 14: HIỆN TƯỢNG ĐẶC THÙ - VÀNH CON CÓ ĐƠN VỊ RIÊNG KHÁC VÀNH MẸ
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 12% 15%, rgba(190,242,100,0.14), transparent 34%), radial-gradient(circle at 88% 85%, rgba(251,146,60,0.14), transparent 34%), linear-gradient(135deg, #091d24, #162a27 52%, #291811); border:1.5px solid rgba(190,242,100,0.48); color:#f7fee7;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.24); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              ⚠️ HIỆN TƯỢNG ĐẶC THÙ CỦA VÀNH CON (BÀI TẬP 6.8)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.86rem, 2.42vw, 2.28rem);">Khác Với Nhóm Con, Vành Con Có Thể Có Đơn Vị Riêng $1_S \\neq 1_R$!</h2>
            <p style="color:#d9f99d; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Trong nhóm, đơn vị của nhóm con bắt buộc trùng với đơn vị nhóm mẹ ($e_H = e_G$) vì mọi phần tử đều khả nghịch. Nhưng trong vành, do phép nhân <b>không có luật giản ước tổng quát</b>, có 3 trường hợp xảy ra cho vành con $S \\subseteq R$:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Ba khả năng về đơn vị của vành con -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border:1.5px solid rgba(103,232,249,0.45)!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#67e8f9; font-size:clamp(1.16rem, 1.5vw, 1.34rem);">1) Ba Trạng Thái Đơn Vị Của Vành Con $S \\subseteq R$:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#f7fee7; margin-top:10px;">
                - <b>Trường hợp 1 (Cùng đơn vị $1_S = 1_R$):</b> Ví dụ $\\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$ đều có chung đơn vị nhân là số $1$.<br>
                - <b>Trường hợp 2 ($R$ có đơn vị nhưng $S$ không có đơn vị):</b> Ví dụ $2\\mathbb{Z} \\subset \\mathbb{Z}$ là vành con không có đơn vị.<br>
                - <b>Trường hợp 3 ($S$ có đơn vị riêng $1_S \\neq 1_R$):</b> Xem phản ví dụ kinh điển trên vành ma trận $M_2(\\mathbb{R})$ ở bên phải!
              </div>
            </div>

            <!-- Cột 2: Phản ví dụ ma trận E11 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.85)!important; border:1.5px solid #fbbf24!important; border-left:5px solid #fbbf24!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fbbf24; font-size:clamp(1.16rem, 1.5vw, 1.34rem);">2) Ví Dụ Kinh Điển: $1_S = E_{11} \\neq I_2 = 1_{M_2(\\mathbb{R})}$</b>
              <div class="slide-math-display" style="background:rgba(7,18,22,0.92); border-color:#fbbf24; color:#fde68a; font-size:clamp(1.08rem, 1.4vw, 1.24rem); padding:10px; margin:10px 0;">
                $$S = \\left\\{ \\begin{pmatrix} a & 0 \\\\ 0 & 0 \\end{pmatrix} \\;\\Bigg|\\; a \\in \\mathbb{R} \\right\\} \\subset M_2(\\mathbb{R})$$
              </div>
              <div style="font-size:clamp(1.05rem, 1.35vw, 1.2rem); line-height:1.68; color:#f7fee7;">
                - $S$ đóng với hiệu và tích nên $S$ là vành con của $M_2(\\mathbb{R})$.<br>
                - Ma trận $E_{11} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix} \\in S$ thỏa $A \\cdot E_{11} = E_{11} \\cdot A = A, \\forall A \\in S$.<br>
                - Vậy <b style="color:#bef264;">$1_S = E_{11} \\neq I_2 = 1_{M_2(\\mathbb{R})}$</b>!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 15: BẢNG TỔNG HỢP KIỂM ĐỊNH TOÀN DIỆN CÁC VÀNH CHUẨN MỰC (MỤC 6.7)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:22px 30px; border-radius:16px; background:radial-gradient(circle at 12% 15%, rgba(190,242,100,0.14), transparent 34%), radial-gradient(circle at 88% 85%, rgba(251,146,60,0.14), transparent 34%), linear-gradient(135deg, #091d24, #162a27 52%, #291811); border:1.5px solid rgba(190,242,100,0.48); color:#f7fee7;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              📊 BẢNG TỔNG HỢP GIÁO TRÌNH (MỤC 6.7)
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.85rem, 2.4vw, 2.25rem);">Bảng Kiểm Định Toàn Diện Các Mô Hình Vành Chuẩn Mực</h2>
          </div>

          <div class="anim-card anim-d1" style="flex:1; display:flex; flex-direction:column; justify-content:center; overflow-x:auto;">
            <table style="width:100%; height:100%; border-collapse:collapse; font-size:clamp(0.98rem, 1.28vw, 1.16rem); background:rgba(14,32,36,0.88); border:1.5px solid rgba(190,242,100,0.5); border-radius:14px; overflow:hidden;">
              <thead>
                <tr style="background:rgba(132,204,22,0.25); color:#fde68a; text-align:left; font-size:clamp(1.02rem, 1.32vw, 1.2rem);">
                  <th style="padding:10px 14px; border-bottom:1.5px solid rgba(190,242,100,0.45);">Cấu trúc $(R, +, \\cdot)$</th>
                  <th style="padding:10px 14px; border-bottom:1.5px solid rgba(190,242,100,0.45); text-align:center;">Giao hoán?</th>
                  <th style="padding:10px 14px; border-bottom:1.5px solid rgba(190,242,100,0.45); text-align:center;">Đơn vị $1_R$</th>
                  <th style="padding:10px 14px; border-bottom:1.5px solid rgba(190,242,100,0.45);">Nhóm đơn vị $U(R)$</th>
                  <th style="padding:10px 14px; border-bottom:1.5px solid rgba(190,242,100,0.45);">Ước của không</th>
                  <th style="padding:10px 14px; border-bottom:1.5px solid rgba(190,242,100,0.45);">Phân loại cao nhất</th>
                </tr>
              </thead>
              <tbody style="color:#f7fee7; line-height:1.52;">
                <tr style="border-bottom:1px solid rgba(190,242,100,0.2);">
                  <td style="padding:9px 14px; font-weight:800; color:#67e8f9;">$(\\mathbb{Z}, +, \\cdot)$</td>
                  <td style="padding:9px 14px; text-align:center; color:#bef264; font-weight:700;">✔ Có</td>
                  <td style="padding:9px 14px; text-align:center;">$1$</td>
                  <td style="padding:9px 14px;">$\\{1, -1\\}$</td>
                  <td style="padding:9px 14px; color:#a3e635;">Không có ($\\emptyset$)</td>
                  <td style="padding:9px 14px; font-weight:700; color:#67e8f9;">Miền nguyên</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(190,242,100,0.2);">
                  <td style="padding:9px 14px; font-weight:800; color:#fda4af;">$(2\\mathbb{Z}, +, \\cdot)$</td>
                  <td style="padding:9px 14px; text-align:center; color:#bef264; font-weight:700;">✔ Có</td>
                  <td style="padding:9px 14px; text-align:center; color:#fda4af;">✖ Không</td>
                  <td style="padding:9px 14px;">$\\emptyset$</td>
                  <td style="padding:9px 14px; color:#a3e635;">Không có</td>
                  <td style="padding:9px 14px; color:#fda4af;">Vành giao hoán không có $1$</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(190,242,100,0.2);">
                  <td style="padding:9px 14px; font-weight:800; color:#fdba74;">$(\\mathbb{Z}/6\\mathbb{Z}, +, \\cdot)$</td>
                  <td style="padding:9px 14px; text-align:center; color:#bef264; font-weight:700;">✔ Có</td>
                  <td style="padding:9px 14px; text-align:center;">$[1]_6$</td>
                  <td style="padding:9px 14px;">$\\{[1], [5]\\}$</td>
                  <td style="padding:9px 14px; color:#fda4af;">$\\{[2], [3], [4]\\}$</td>
                  <td style="padding:9px 14px; color:#fdba74;">Vành giao hoán có ước của $0$</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(190,242,100,0.2);">
                  <td style="padding:9px 14px; font-weight:800; color:#bef264;">$(\\mathbb{Z}/p\\mathbb{Z}, +, \\cdot)$ ($p$ nguyên tố)</td>
                  <td style="padding:9px 14px; text-align:center; color:#bef264; font-weight:700;">✔ Có</td>
                  <td style="padding:9px 14px; text-align:center;">$[1]_p$</td>
                  <td style="padding:9px 14px;">$(\\mathbb{Z}/p\\mathbb{Z}) \\setminus \\{[0]\\}$</td>
                  <td style="padding:9px 14px; color:#a3e635;">Không có</td>
                  <td style="padding:9px 14px; font-weight:800; color:#bef264;">Trường hữu hạn $\\mathbb{F}_p$</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(190,242,100,0.2);">
                  <td style="padding:9px 14px; font-weight:800; color:#fde047;">$(M_2(\\mathbb{R}), +, \\cdot)$</td>
                  <td style="padding:9px 14px; text-align:center; color:#fda4af; font-weight:700;">✖ Không</td>
                  <td style="padding:9px 14px; text-align:center;">$I_2$</td>
                  <td style="padding:9px 14px;">$\\operatorname{GL}_2(\\mathbb{R})$ ($\\det \\neq 0$)</td>
                  <td style="padding:9px 14px; color:#fda4af;">$A \\neq 0, \\det(A) = 0$</td>
                  <td style="padding:9px 14px; color:#fde047;">Vành không giao hoán có $1$</td>
                </tr>
                <tr>
                  <td style="padding:9px 14px; font-weight:800; color:#67e8f9;">$(\\mathbb{R}[x], +, \\cdot)$</td>
                  <td style="padding:9px 14px; text-align:center; color:#bef264; font-weight:700;">✔ Có</td>
                  <td style="padding:9px 14px; text-align:center;">$1$</td>
                  <td style="padding:9px 14px;">$\\mathbb{R} \\setminus \\{0\\}$ (hằng $\\neq 0$)</td>
                  <td style="padding:9px 14px; color:#a3e635;">Không có</td>
                  <td style="padding:9px 14px; font-weight:700; color:#67e8f9;">Miền nguyên đa thức</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 16: TỔNG KẾT CHƯƠNG 6 & CẦU NỐI SANG CHƯƠNG 7
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 12% 15%, rgba(190,242,100,0.14), transparent 34%), radial-gradient(circle at 88% 85%, rgba(251,146,60,0.14), transparent 34%), linear-gradient(135deg, #091d24, #162a27 52%, #291811); border:1.5px solid rgba(190,242,100,0.48); color:#f7fee7;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(132,204,22,0.22); border:1.5px solid #bef264; border-radius:999px; color:#d9f99d; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              🎯 TỔNG KẾT CHƯƠNG 6
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Bản Đồ Bốn Trụ Cột Chương 6 &amp; Cầu Nối Sang Chương 7</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:16px; margin:0;">
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border-left:5px solid #bef264!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#bef264; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">1) Tiên đề Vành &amp; Quy tắc dấu</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#f7fee7; margin-top:6px;">
                - $(R, +)$ là nhóm Abel; $(R, \\cdot)$ là nửa nhóm; liên kết qua phân phối hai phía.<br>
                - $a \\cdot 0_R = 0_R$; $(-a)(-b) = ab$; chú ý $(a+b)^2 = a^2 + ab + ba + b^2$.
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border-left:5px solid #22d3ee!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#67e8f9; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">2) Phần tử khả nghịch $U(R)$ vs. Ước của không</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#f7fee7; margin-top:6px;">
                - $U(R)$ lập thành nhóm nhân; ước của không là $a \\neq 0_R$ thỏa $\\exists b \\neq 0_R: ab = 0_R$.<br>
                - Phần tử khả nghịch không bao giờ là ước của không ($U(R) \\cap Z(R) = \\emptyset$).
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border-left:5px solid #fbbf24!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fbbf24; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">3) Miền nguyên, Vành chia &amp; Trường</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#f7fee7; margin-top:6px;">
                - Miền nguyên = Giao hoán + Có $1_R \\neq 0_R$ + Không có ước của $0$ (giản ước được).<br>
                - Trường = Vành chia giao hoán; mọi miền nguyên hữu hạn đều là Trường!
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(14,32,36,0.82)!important; border-left:5px solid #fb923c!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fdba74; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">4) Tiêu chuẩn Vành con &amp; Đơn vị riêng</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#f7fee7; margin-top:6px;">
                - Kiểm tra: $S \\neq \\emptyset$, $\\forall x, y \\in S \\implies x - y \\in S$ và $xy \\in S$.<br>
                - Vành con có thể không có đơn vị ($2\\mathbb{Z}$) hoặc có đơn vị riêng $1_S \\neq 1_R$ ($E_{11}$).
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(14,32,36,0.94)!important; border:1.5px solid #bef264!important; color:#ecfccb!important; font-size:clamp(1.06rem, 1.36vw, 1.22rem); text-align:center; line-height:1.55;">
            <b>🚀 Tiếp nối Chương 7 (Iđêan &amp; Vành thương):</b> Tại sao một vành con $S \\subseteq R$ không đủ sức tạo ra phép nhân lớp xác định tốt trên $R/S$ (như thất bại trên $\\mathbb{Q}/\\mathbb{Z}$), mà bắt buộc phải cần đến cấu trúc "hấp thụ phép nhân" mang tên <b>Iđêan ($I \\trianglelefteq R$)</b>?
          </div>
        </div>
      `
    }
  ],
  "7": [
    // ========================================================
    // SLIDE 1: TRANG BÌA CĂN GIỮA - ĐÀI THIÊN VĂN ĐỒNG CỔ & XOÁY HẤP THỤ IĐÊAN
    // ========================================================
    {
      html: `
        <div style="position: relative; width: 100%; height: 100%; min-height: 100%; display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center; padding: 26px 34px 22px; box-sizing: border-box; overflow: hidden; border-radius: 16px; background: radial-gradient(circle at 50% 20%, rgba(165, 180, 252, 0.25), transparent 45%), radial-gradient(ellipse at 15% 88%, rgba(251, 146, 60, 0.26), transparent 42%), radial-gradient(ellipse at 85% 85%, rgba(94, 234, 212, 0.20), transparent 40%), linear-gradient(155deg, #160f0a 0%, #2b1d14 48%, #1d1e3a 82%, #110d19 100%); border: 1.5px solid rgba(165, 180, 252, 0.55); color: #fffbeb; box-shadow: 0 18px 45px rgba(15, 10, 8, 0.85);">
          
          <!-- VECTOR SVG NỀN: ĐÀI THIÊN VĂN ĐỒNG CỔ, XOÁY HẤP THỤ TINH CẦU, CÚ MÈO TINH TÚ & LINH MIÊU -->
          <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0;">
            <defs>
              <radialGradient id="c7VortexCore" cx="50%" cy="24%" r="42%">
                <stop offset="0%" stop-color="#fde047" stop-opacity="0.42"/>
                <stop offset="35%" stop-color="#a5b4fc" stop-opacity="0.24"/>
                <stop offset="70%" stop-color="#fb923c" stop-opacity="0.08"/>
                <stop offset="100%" stop-color="#160f0a" stop-opacity="0"/>
              </radialGradient>
              <linearGradient id="c7BronzeArch" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#78350f" stop-opacity="0.72"/>
                <stop offset="100%" stop-color="#1c110a" stop-opacity="0.96"/>
              </linearGradient>
              <linearGradient id="c7OwlWing" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#fef3c7" stop-opacity="0.96"/>
                <stop offset="55%" stop-color="#fdba74" stop-opacity="0.85"/>
                <stop offset="100%" stop-color="#9a3412" stop-opacity="0.5"/>
              </linearGradient>
              <linearGradient id="c7LynxPeriwinkle" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#e0e7ff" stop-opacity="0.95"/>
                <stop offset="55%" stop-color="#a5b4fc" stop-opacity="0.85"/>
                <stop offset="100%" stop-color="#4338ca" stop-opacity="0.5"/>
              </linearGradient>
              <linearGradient id="c7SpiralStream" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#a5b4fc" stop-opacity="0.1"/>
                <stop offset="50%" stop-color="#5eead4" stop-opacity="0.75"/>
                <stop offset="100%" stop-color="#fde047" stop-opacity="0.95"/>
              </linearGradient>
            </defs>

            <!-- Quầng sáng Xoáy Hấp Thụ Tinh Cầu (Biểu tượng Iđêan hấp thụ phép nhân r.x thuộc I) -->
            <circle cx="500" cy="190" r="340" fill="url(#c7VortexCore)"/>
            <g transform="translate(500, 190)" opacity="0.45">
              <!-- Vòng bánh răng thiên văn đồng cổ bên ngoài (Vành mẹ R) -->
              <circle r="220" fill="none" stroke="#fdba74" stroke-width="1.5" stroke-dasharray="14 8"/>
              <circle r="175" fill="none" stroke="#a5b4fc" stroke-width="1.6" stroke-dasharray="6 6"/>
              <circle r="128" fill="none" stroke="#5eead4" stroke-width="1.8" opacity="0.8"/>
              <!-- Các đường xoắn ốc hút phần tử từ vành ngoài R vào hạt nhân Iđêan I ở tâm -->
              <path d="M-210,-40 C-140,-110 -50,-90 0,0" fill="none" stroke="url(#c7SpiralStream)" stroke-width="2.5"/>
              <path d="M210,40 C140,110 50,90 0,0" fill="none" stroke="url(#c7SpiralStream)" stroke-width="2.5"/>
              <path d="M-60,195 C-110,120 -70,40 0,0" fill="none" stroke="url(#c7SpiralStream)" stroke-width="2.2"/>
              <path d="M60,-195 C110,-120 70,-40 0,0" fill="none" stroke="url(#c7SpiralStream)" stroke-width="2.2"/>
              <!-- Tâm Iđêan phát sáng -->
              <circle r="42" fill="rgba(253, 224, 71, 0.18)" stroke="#fde047" stroke-width="2.5"/>
              <circle r="14" fill="#fde047" opacity="0.85"/>
            </g>

            <!-- Киến trúc Vòm Thiên Văn Đồng Cổ & Đồi Đá Huyền Vũ phía xa -->
            <path d="M0,390 Q175,315 350,365 T680,355 T1000,385 L1000,600 L0,600 Z" fill="url(#c7BronzeArch)"/>
            <path d="M0,450 Q260,395 500,440 T1000,435 L1000,600 L0,600 Z" fill="#120c14" opacity="0.96"/>

            <!-- Hai Tháp Trụ Kính Viễn Vọng Cổ Điển Hai Bên -->
            <g stroke="#fdba74" stroke-width="1.8" fill="rgba(43,29,20,0.75)" opacity="0.65">
              <rect x="48" y="290" width="46" height="170" rx="6"/>
              <path d="M42,290 L71,245 L100,290 Z" fill="#fb923c"/>
              <rect x="906" y="290" width="46" height="170" rx="6"/>
              <path d="M900,290 L929,245 L958,290 Z" fill="#a5b4fc"/>
            </g>

            <!-- SINH VẬT HUYỀN THOẠI 1: CÚ MÈO TINH TÚ (CELESTIAL BARN OWL - BÊN TRÁI) -->
            <g transform="translate(185, 378) scale(0.92)" filter="drop-shadow(0 0 16px rgba(251, 146, 60, 0.7))">
              <!-- Đôi cánh sải rộng bằng vàng đồng & ánh sao -->
              <path d="M-10,0 C-55,-42 -115,-36 -135,-8 C-95,12 -52,18 -12,12 Z" fill="url(#c7OwlWing)"/>
              <path d="M10,0 C55,-42 115,-36 135,-8 C95,12 52,18 12,12 Z" fill="url(#c7OwlWing)"/>
              <!-- Thân và đầu cú mèo thông thái -->
              <ellipse cx="0" cy="12" rx="22" ry="30" fill="url(#c7OwlWing)"/>
              <circle cx="0" cy="-18" r="18" fill="#fef3c7"/>
              <!-- Đôi mắt ngọc lam phát sáng & mỏ vàng -->
              <circle cx="-7" cy="-18" r="4" fill="#0f172a"/>
              <circle cx="-7" cy="-18" r="2" fill="#5eead4"/>
              <circle cx="7" cy="-18" r="4" fill="#0f172a"/>
              <circle cx="7" cy="-18" r="2" fill="#5eead4"/>
              <polygon points="0,-14 -4,-6 4,-6" fill="#f59e0b"/>
              <!-- Lông đuôi xòe -->
              <polygon points="-14,38 14,38 22,62 -22,62" fill="#fdba74"/>
            </g>

            <!-- SINH VẬT HUYỀN THOẠI 2: LINH MIÊU ÁNH SAO (STARLIGHT ASTRAL LYNX - BÊN PHẢI) -->
            <g transform="translate(825, 412) scale(-0.9, 0.9)" filter="drop-shadow(0 0 16px rgba(165, 180, 252, 0.75))">
              <!-- Chân và thân linh miêu -->
              <path d="M-26,4 L-30,44 M-10,6 L-12,46 M16,4 L14,46 M28,2 L34,44" stroke="#e0e7ff" stroke-width="3.4" stroke-linecap="round"/>
              <path d="M-32,0 C-28,-16 -4,-20 24,-14 C36,-12 38,-2 30,8 C10,12 -14,10 -32,0 Z" fill="url(#c7LynxPeriwinkle)"/>
              <!-- Đầu linh miêu với đôi tai nhọn có chùm lông phát sáng đặc trưng -->
              <path d="M18,-10 C24,-26 30,-42 38,-52 L34,-68 L44,-56 L54,-70 L52,-52 C58,-44 46,-24 32,-2 Z" fill="url(#c7LynxPeriwinkle)"/>
              <circle cx="34" cy="-68" r="2.8" fill="#fde047"/>
              <circle cx="54" cy="-70" r="2.8" fill="#fde047"/>
              <!-- Đuôi linh miêu phát sáng -->
              <path d="M-32,-2 Q-52,-14 -48,8" fill="none" stroke="#a5b4fc" stroke-width="4" stroke-linecap="round"/>
              <circle cx="-48" cy="8" r="4.5" fill="#5eead4"/>
            </g>

            <!-- Các ngôi sao băng & quả cầu thiên văn lơ lửng -->
            <g fill="#fde047" opacity="0.9">
              <circle cx="140" cy="160" r="3"/><circle cx="290" cy="120" r="2.5"/><circle cx="420" cy="105" r="2.4"/>
              <circle cx="580" cy="105" r="2.4"/><circle cx="710" cy="120" r="2.5"/><circle cx="860" cy="160" r="3"/>
            </g>
            <g fill="#a5b4fc" opacity="0.88">
              <circle cx="235" cy="245" r="2.8"/><circle cx="765" cy="245" r="2.8"/>
              <circle cx="370" cy="425" r="2.5"/><circle cx="630" cy="425" r="2.5"/>
            </g>
          </svg>

          <!-- TIÊU ĐỀ SLIDE (CĂN GIỮA, CỠ CHỮ LỚN NỔI BẬT) -->
          <div class="anim-title" style="position: relative; z-index: 2; max-width: 920px;">
            <div style="display: inline-flex; align-items: center; gap: 10px; padding: 6px 22px; background: rgba(28, 19, 14, 0.86); border: 1.5px solid rgba(165, 180, 252, 0.65); border-radius: 999px; font-size: clamp(0.92rem, 1.2vw, 1.08rem); font-weight: 800; color: #c7d2fe; letter-spacing: 1.2px; margin-bottom: 12px; backdrop-filter: blur(10px); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);">
              <span>🧭</span> CẤU TRÚC ĐẠI SỐ — CHƯƠNG 7
            </div>
            <h1 style="font-size: clamp(2.5rem, 4.0vw, 3.4rem); font-weight: 800; color: #ffffff; margin: 0 0 8px; line-height: 1.18; letter-spacing: -0.5px; text-shadow: 0 4px 28px rgba(0, 0, 0, 0.82);">
              Iđêan &amp; <span style="color: #fdba74;">Vành Thương</span>
            </h1>
            <p style="font-size: clamp(1.1rem, 1.45vw, 1.3rem); color: #e0e7ff; margin: 0; font-weight: 600; text-shadow: 0 2px 10px rgba(0,0,0,0.65);">
              Giáo trình Cấu trúc Đại số · TS. Huỳnh Việt Khánh
            </p>
          </div>

          <!-- TÂM ĐIỂM: KHỐI CÂU HỎI TRIẾT HỌC TRUNG TÂM -->
          <div class="slide-glass-card anim-card anim-d1" style="position: relative; z-index: 2; max-width: 880px; width: 100%; padding: 26px 38px; margin: 12px 0; background: rgba(26, 18, 14, 0.84) !important; border: 1.5px solid rgba(165, 180, 252, 0.55) !important; border-radius: 18px; backdrop-filter: blur(20px); box-shadow: 0 20px 50px rgba(10, 7, 5, 0.88), inset 0 1px 0 rgba(255, 255, 255, 0.22); text-align: center;">
            <div style="font-size: clamp(0.98rem, 1.25vw, 1.12rem); font-weight: 800; color: #fde047; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">
              ✦ Câu Hỏi Trung Tâm Của Chương ✦
            </div>
            <p style="font-size: clamp(1.26rem, 1.72vw, 1.5rem); line-height: 1.62; color: #ffffff; margin: 0; font-weight: 500;">
              Tại sao một vành con thông thường không đủ sức tạo ra phép nhân lớp xác định tốt, mà bắt buộc phải cần đến <b style="color: #fdba74;">Iđêan $I \\trianglelefteq R$</b> — những "hố đen đại số" có khả năng <b style="color: #a5b4fc;">hấp thụ mọi phép nhân</b> từ toàn bộ vành mẹ?
            </p>
          </div>

          <!-- ĐÁY SLIDE: THANH 4 TRỤ CỘT KIẾN THỨC (KHÔNG THANH CUỘN) -->
          <div class="anim-card anim-d2" style="position: relative; z-index: 2; display: flex; flex-wrap: nowrap; justify-content: space-between; align-items: center; gap: 6px; width: 100%; max-width: 960px; padding: 8px 14px; box-sizing: border-box; background: rgba(26, 18, 14, 0.9); border: 1.5px solid rgba(165, 180, 252, 0.42); border-radius: 999px; backdrop-filter: blur(12px); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5); overflow: hidden;">
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(251, 146, 60, 0.22); border: 1px solid rgba(251, 146, 60, 0.5); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #fed7aa; white-space: nowrap;">
              1. Hấp Thụ &amp; Iđêan $I \\trianglelefteq R$
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(129, 140, 248, 0.22); border: 1px solid rgba(165, 180, 252, 0.5); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #c7d2fe; white-space: nowrap;">
              2. Iđêan Chính $(a)$ &amp; PID
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(45, 212, 191, 0.2); border: 1px solid rgba(94, 234, 212, 0.48); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #5eead4; white-space: nowrap;">
              3. Vành Thương $R/I$
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(250, 204, 21, 0.22); border: 1px solid rgba(253, 224, 71, 0.48); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #fef08a; white-space: nowrap;">
              4. Nguyên Tố &amp; Cực Đại
            </span>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 2: ĐỘNG CƠ SƯ PHẠM - TẠI SAO VÀNH CON THẤT BẠI KHI TẠO THƯƠNG?
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(165,180,252,0.16), transparent 34%), linear-gradient(135deg, #18110c, #2c1d14 52%, #191c36); border:1.5px solid rgba(165,180,252,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,146,60,0.22); border:1.5px solid #fb923c; border-radius:999px; color:#fed7aa; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🧭 KHỞI NGUỒN SƯ PHẠM (MỤC 7.1)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Tại Sao Một Vành Con $S \\subseteq R$ Chưa Đủ Để Tạo Vành Thương?</h2>
            <p style="color:#e0e7ff; font-size:clamp(1.12rem, 1.44vw, 1.28rem); line-height:1.58; margin:0;">
              Cho vành $R$ và một vành con $S \\subseteq R$. Vì $(R, +)$ là nhóm Abel nên $(S, +) \\trianglelefteq (R, +)$, do đó phép cộng lớp $(a+S)+(b+S) = (a+b)+S$ luôn xác định tốt. Nhưng còn <b>phép nhân lớp $(a+S)(b+S) = ab+S$</b> thì sao?
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Khai triển đại diện -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(165,180,252,0.45)!important; border-left:5px solid #a5b4fc!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#c7d2fe; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Khai triển khi đổi đại diện trong lớp cộng:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fffbeb; margin-top:10px;">
                - Lấy $a' = a + s_1 \\in a + S$ và $b' = b + s_2 \\in b + S$ (với $s_1, s_2 \\in S$).<br>
                - Nhân hai đại diện mới theo luật phân phối:<br>
                <div class="slide-math-display" style="background:rgba(15,12,20,0.92); border-color:#a5b4fc; color:#e0e7ff; font-size:clamp(1.12rem, 1.44vw, 1.28rem); padding:10px; margin:10px 0 0;">
                  $$a'b' = (a + s_1)(b + s_2) = ab + \\mathbf{a s_2 + s_1 b} + s_1 s_2$$
                </div>
              </div>
            </div>

            <!-- Cột 2: Điều kiện hấp thụ -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(251,146,60,0.48)!important; border-left:5px solid #fb923c!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fdba74; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Xuất hiện điều kiện "Hấp thụ phép nhân":</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fffbeb; margin-top:10px;">
                - Vì $S$ là vành con nên $s_1 s_2 \\in S$. Nhưng muốn $a'b' \\in ab + S$, hai số hạng chéo <b style="color:#fde047;">$a s_2$</b> và <b style="color:#fde047;">$s_1 b$</b> cũng bắt buộc phải thuộc $S$ với <b>mọi $a, b \\in R$</b>!<br>
                - Tức là tập con $S$ phải <b>"nuốt chửng" (hấp thụ)</b> mọi phép nhân từ các phần tử của toàn bộ vành mẹ $R$. Đó chính là <b>Iđêan</b>!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 3: PHẢN VÍ DỤ KINH ĐIỂN - THẤT BẠI CỦA PHÉP NHÂN LỚP TRÊN Q/Z
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(165,180,252,0.16), transparent 34%), linear-gradient(135deg, #18110c, #2c1d14 52%, #191c36); border:1.5px solid rgba(165,180,252,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.24); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              ⚠️ PHẢN VÍ DỤ KINH ĐIỂN (BÀI TẬP 7.1)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Sự Phá Sản Của Phép Nhân Lớp Trên Nhóm Thương Cộng $\\mathbb{Q}/\\mathbb{Z}$</h2>
            <p style="color:#e0e7ff; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Xem $\\mathbb{Z}$ là một <b>vành con</b> của $\\mathbb{Q}$. Trên $\\mathbb{Q}/\\mathbb{Z}$, lớp không $[0] = 0 + \\mathbb{Z} = 1 + \\mathbb{Z}$ có hai đại diện là $0$ và $1$. Thử nhân lớp $[0]$ với lớp $\\dfrac{1}{2} + \\mathbb{Z}$:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cách 1: Dùng đại diện 0 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(94,234,212,0.48)!important; border-left:5px solid #2dd4bf!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Dùng đại diện $0 \\in 0 + \\mathbb{Z}$:</b>
              <div class="slide-math-display" style="background:rgba(15,12,20,0.92); border-color:#2dd4bf; color:#99f6e4; font-size:clamp(1.16rem, 1.5vw, 1.34rem); padding:12px; margin:14px 0;">
                $$(0 + \\mathbb{Z})\\left(\\frac{1}{2} + \\mathbb{Z}\\right) = \\left(0 \\cdot \\frac{1}{2}\\right) + \\mathbb{Z} = \\mathbf{0 + \\mathbb{Z}}$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.68; color:#fffbeb;">
                - Kết quả thu được là lớp nguyên $\\mathbb{Z}$.
              </div>
            </div>

            <!-- Cách 2: Dùng đại diện 1 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(244,63,94,0.5)!important; border-left:5px solid #fb7185!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Đổi sang đại diện tương đương $1 \\in 0 + \\mathbb{Z}$:</b>
              <div class="slide-math-display" style="background:rgba(15,12,20,0.92); border-color:#fb7185; color:#fecdd3; font-size:clamp(1.16rem, 1.5vw, 1.34rem); padding:12px; margin:14px 0;">
                $$(1 + \\mathbb{Z})\\left(\\frac{1}{2} + \\mathbb{Z}\\right) = \\left(1 \\cdot \\frac{1}{2}\\right) + \\mathbb{Z} = \\mathbf{\\frac{1}{2} + \\mathbb{Z} \\neq 0 + \\mathbb{Z}}$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.68; color:#fffbeb;">
                - Vì $\\dfrac{1}{2} - 0 = \\dfrac{1}{2} \\notin \\mathbb{Z}$, hai lớp kết quả khác nhau hoàn toàn!
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(28,20,16,0.92)!important; border:1.5px solid #fde047!important; color:#fef08a!important; font-size:clamp(1.06rem, 1.36vw, 1.22rem); text-align:center;">
            <b>❌ Nguyên nhân gãy đổ:</b> $\\mathbb{Z}$ chỉ là vành con chứ <b>không phải iđêan</b> của $\\mathbb{Q}$ (vì lấy $r = 1/2 \\in \\mathbb{Q}$ nhân với $x = 1 \\in \\mathbb{Z}$ thì $rx = 1/2 \\notin \\mathbb{Z}$).
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 4: ĐỊNH NGHĨA - IĐÊAN TRÁI, IĐÊAN PHẢI & IĐÊAN HAI PHÍA
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(165,180,252,0.16), transparent 34%), linear-gradient(135deg, #18110c, #2c1d14 52%, #191c36); border:1.5px solid rgba(165,180,252,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(129,140,248,0.24); border:1.5px solid #a5b4fc; border-radius:999px; color:#c7d2fe; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              📘 ĐỊNH NGHĨA (ĐỊNH NGHĨA 7.1)
            </span>
            <h2 style="color:#ffffff; margin:0 0 6px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Iđêan Trái, Iđêan Phải và Iđêan Hai Phía $I \\trianglelefteq R$</h2>
            <p style="color:#e0e7ff; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Cho vành $(R, +, \\cdot)$ và tập con $I \\subseteq R$ là một nhóm con cộng của $(R, +)$ ($I \\neq \\emptyset$ và $\\forall x, y \\in I \\implies x - y \\in I$):
            </p>
          </div>

          <div class="slide-grid-3 anim-card anim-d1" style="flex:1; align-items:stretch; gap:18px; margin:0;">
            <!-- Iđêan trái -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(165,180,252,0.48)!important; border-top:5px solid #a5b4fc!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#c7d2fe; font-size:clamp(1.16rem, 1.48vw, 1.32rem); margin-bottom:8px;">(i) Iđêan Trái (Left Ideal)</b>
              <div class="slide-math-display" style="background:rgba(15,12,20,0.92); border-color:#a5b4fc; color:#e0e7ff; font-size:clamp(1.12rem, 1.44vw, 1.28rem); padding:10px; margin:8px 0;">
                $$\\forall r \\in R, \\forall x \\in I \\implies rx \\in I$$
              </div>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fffbeb;">
                - Hấp thụ phép nhân từ phía <b>bên trái</b> bởi mọi phần tử của vành mẹ ($RI \\subseteq I$).
              </div>
            </div>

            <!-- Iđêan phải -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(94,234,212,0.48)!important; border-top:5px solid #2dd4bf!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.16rem, 1.48vw, 1.32rem); margin-bottom:8px;">(ii) Iđêan Phải (Right Ideal)</b>
              <div class="slide-math-display" style="background:rgba(15,12,20,0.92); border-color:#2dd4bf; color:#99f6e4; font-size:clamp(1.12rem, 1.44vw, 1.28rem); padding:10px; margin:8px 0;">
                $$\\forall r \\in R, \\forall x \\in I \\implies xr \\in I$$
              </div>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fffbeb;">
                - Hấp thụ phép nhân từ phía <b>bên phải</b> bởi mọi phần tử của vành mẹ ($IR \\subseteq I$).
              </div>
            </div>

            <!-- Iđêan hai phía -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.86)!important; border:1.5px solid #fdba74!important; border-top:5px solid #fb923c!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#fdba74; font-size:clamp(1.16rem, 1.48vw, 1.32rem); margin-bottom:8px;">(iii) Iđêan (Hai Phía) $I \\trianglelefteq R$</b>
              <div class="slide-math-display" style="background:rgba(15,12,20,0.92); border-color:#fb923c; color:#fed7aa; font-size:clamp(1.12rem, 1.44vw, 1.28rem); padding:10px; margin:8px 0;">
                $$\\forall r \\in R, \\forall x \\in I \\implies rx, xr \\in I$$
              </div>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fed7aa;">
                - Vừa là iđêan trái, vừa là iđêan phải. Ký hiệu chuẩn: <b style="color:#fde047;">$I \\trianglelefteq R$</b>.
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:12px 22px; background:rgba(28,20,16,0.92)!important; border:1.5px solid #fde047!important; color:#fef08a!important; font-size:clamp(1.05rem, 1.35vw, 1.2rem); text-align:center;">
            <b>✨ Quy ước giáo trình:</b> Khi nói <b>"Iđêan"</b> mà không ghi rõ phía, ta luôn hiểu là <b>Iđêan hai phía</b> ($I \\trianglelefteq R$). Nếu $R$ là vành giao hoán thì 3 khái niệm trên trùng nhau hoàn toàn!
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 5: ĐỊNH LÝ - TIÊU CHUẨN IĐÊAN RÚT GỌN & ĐỐI CHIẾU VÀNH CON
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(165,180,252,0.16), transparent 34%), linear-gradient(135deg, #18110c, #2c1d14 52%, #191c36); border:1.5px solid rgba(165,180,252,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ (ĐỊNH LÝ 7.2)
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Tiêu Chuẩn Kiểm Tra Iđêan &amp; Ranh Giới Với Vành Con</h2>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(28,20,16,0.94); border:2px solid #fdba74; color:#fde047; font-size:clamp(1.2rem, 1.6vw, 1.42rem); padding:14px 22px; margin:0;">
            $$I \\trianglelefteq R \\iff \\begin{cases} 1)\\; I \\neq \\emptyset \\;\\text{ và }\\; \\forall x, y \\in I \\implies x - y \\in I \\\\ 2)\\; \\forall r \\in R,\\; \\forall x \\in I \\implies rx \\in I \\;\\text{ và }\\; xr \\in I \\end{cases}$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Vành con (Đóng nội tại) -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(165,180,252,0.45)!important; border-left:5px solid #a5b4fc!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#c7d2fe; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Vành con $S \\subseteq R$ (Chỉ cần Đóng nội tại):</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fffbeb; margin-top:10px;">
                - Điều kiện nhân: <b style="color:#c7d2fe;">$\\forall x, y \\in S \\implies xy \\in S$</b>.<br>
                - Chỉ đòi hỏi nhân hai phần tử <b>cùng nằm bên trong $S$</b> thì kết quả ở lại trong $S$.<br>
                - <i>Ví dụ:</i> $\\mathbb{Z}$ là vành con của $\\mathbb{Q}$ (nhân hai số nguyên ra số nguyên).
              </div>
            </div>

            <!-- Cột 2: Iđêan (Hấp thụ ngoại tại) -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(251,146,60,0.48)!important; border-left:5px solid #fb923c!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fdba74; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Iđêan $I \\trianglelefteq R$ (Đòi hỏi Hấp thụ ngoại tại):</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fffbeb; margin-top:10px;">
                - Điều kiện nhân: <b style="color:#fde047;">$\\forall r \\in R,\\; \\forall x \\in I \\implies rx, xr \\in I$</b>.<br>
                - Phần tử $x \\in I$ nhân với <b>bất kỳ phần tử $r$ nào ở ngoài vành mẹ $R$</b> cũng phải bị hút vào trong $I$!<br>
                - <i>Hệ quả:</i> Mọi iđêan đều là vành con, nhưng <b>vành con chưa chắc là iđêan</b> ($\\mathbb{Z} \\not\\trianglelefteq \\mathbb{Q}$).
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 6: VÍ DỤ SOI SÁNG CHO SLIDE 4 & 5 (BÀI TẬP 7.3)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(165,180,252,0.16), transparent 34%), linear-gradient(135deg, #18110c, #2c1d14 52%, #191c36); border:1.5px solid rgba(165,180,252,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(45,212,191,0.22); border:1.5px solid #2dd4bf; border-radius:999px; color:#5eead4; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ &amp; PHẢN VÍ DỤ (BÀI TẬP 7.3)
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Kiểm Định Iđêan Trong $\\mathbb{Z}$ &amp; Phân Biệt Iđêan Trái – Phải Trong $M_2(\\mathbb{R})$</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Ví dụ 1: nZ trong Z -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(94,234,212,0.48)!important; border-left:5px solid #2dd4bf!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Trong vành số nguyên $\\mathbb{Z}$: $n\\mathbb{Z} \\trianglelefteq \\mathbb{Z}$</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb; margin-top:10px;">
                - <b>Khác rỗng &amp; Đóng với trừ:</b> $0 \\in n\\mathbb{Z}$, và với mọi $nk_1, nk_2 \\in n\\mathbb{Z}$:<br>
                $$nk_1 - nk_2 = n(k_1 - k_2) \\in n\\mathbb{Z}$$
                - <b>Hấp thụ phép nhân từ $\\mathbb{Z}$:</b> Với mọi $r \\in \\mathbb{Z}$ và $x = nk \\in n\\mathbb{Z}$:<br>
                $$rx = r(nk) = n(rk) \\in n\\mathbb{Z} \\implies \\mathbf{n\\mathbb{Z} \\trianglelefteq \\mathbb{Z}}$$
              </div>
            </div>

            <!-- Ví dụ 2: Iđêan trái nhưng không phải iđêan phải trên M2(R) -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(251,146,60,0.48)!important; border-left:5px solid #fb923c!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fdba74; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Trong $M_2(\\mathbb{R})$: Iđêan trái nhưng KHÔNG là iđêan phải!</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.68; color:#fffbeb; margin-top:8px;">
                - Xét $I = \\left\\{ \\begin{pmatrix} a & 0 \\\\ c & 0 \\end{pmatrix} \\;\\Bigg|\\; a, c \\in \\mathbb{R} \\right\\}$ (cột 2 bằng $0$).<br>
                - <b>Là iđêan trái:</b> $\\begin{pmatrix} x & y \\\\ z & t \\end{pmatrix} \\begin{pmatrix} a & 0 \\\\ c & 0 \\end{pmatrix} = \\begin{pmatrix} xa+yc & 0 \\\\ za+tc & 0 \\end{pmatrix} \\in I$.<br>
                - <b>Không là iđêan phải:</b> Nhân bên phải với $\\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix} \\in M_2(\\mathbb{R})$:<br>
                $$\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix} \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & \\mathbf{1} \\\\ 0 & 0 \\end{pmatrix} \\notin I!$$
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 7: MỆNH ĐỀ - IĐÊAN CHỨA KHẢ NGHỊCH & IĐÊAN CỦA TRƯỜNG (MỆNH ĐỀ 7.3)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(165,180,252,0.16), transparent 34%), linear-gradient(135deg, #18110c, #2c1d14 52%, #191c36); border:1.5px solid rgba(165,180,252,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ MỆNH ĐỀ TRỌNG TÂM (MỆNH ĐỀ 7.3 &amp; BÀI TẬP 7.11)
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Iđêan Chứa Phần Tử Khả Nghịch &amp; Cấu Trúc Iđêan Của Một Trường</h2>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(28,20,16,0.94); border:1.5px solid #fde047; color:#fef08a; font-size:clamp(1.2rem, 1.58vw, 1.42rem); padding:14px 22px; margin:0;">
            $$\\text{Cho } I \\trianglelefteq R \\text{ (vành có } 1_R\\text{)}: \\qquad 1_R \\in I \\iff I \\cap U(R) \\neq \\emptyset \\iff \\mathbf{I = R}$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Chứng minh hiệu ứng nuốt trọn vành R -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(251,146,60,0.48)!important; border-left:5px solid #fb923c!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fdba74; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Tại sao chứa 1 phần tử khả nghịch là nuốt trọn cả $R$?</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb; margin-top:10px;">
                - <b>Nếu $1_R \\in I$:</b> Với mọi $r \\in R$, nhờ tính hấp thụ của iđêan ta có $r = r \\cdot 1_R \\in I \\implies R \\subseteq I \\implies I = R$.<br>
                - <b>Nếu $I$ chứa phần tử khả nghịch $u \\in U(R)$:</b> Khi đó tồn tại $u^{-1} \\in R$. Do $u \\in I$, tính hấp thụ cho <b style="color:#fde047;">$1_R = u^{-1}u \\in I \\implies I = R$</b>!
              </div>
            </div>

            <!-- Cột 2: Iđêan của Trường F -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(165,180,252,0.48)!important; border-left:5px solid #a5b4fc!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#c7d2fe; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Hệ quả: Một Trường $F$ chỉ có đúng $2$ iđêan!</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb; margin-top:10px;">
                - Giả sử $I \\trianglelefteq F$. Nếu $I \\neq \\{0_F\\}$, tồn tại phần tử $a \\in I, a \\neq 0_F$.<br>
                - Vì $F$ là một <b>trường</b> nên mọi phần tử khác $0_F$ đều khả nghịch ($a \\in U(F)$).<br>
                - Áp dụng tính chất (1), suy ra ngay <b style="color:#5eead4;">$I = F$</b>! Vậy trường $F$ không có bất kỳ iđêan thực sự nào khác $\\{0_F\\}$. $\\blacksquare$
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 8: ĐỊNH NGHĨA - IĐÊAN CHÍNH (a) & VÀNH IĐÊAN CHÍNH (PID)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(165,180,252,0.16), transparent 34%), linear-gradient(135deg, #18110c, #2c1d14 52%, #191c36); border:1.5px solid rgba(165,180,252,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(129,140,248,0.24); border:1.5px solid #a5b4fc; border-radius:999px; color:#c7d2fe; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 ĐỊNH NGHĨA (MỤC 7.3 - ĐỊNH NGHĨA 7.4)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Iđêan Chính $(a) = aR$ &amp; Vành Iđêan Chính (PID)</h2>
            <p style="color:#e0e7ff; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Giao của một họ tùy ý các iđêan của $R$ luôn là một iđêan của $R$. Khi iđêan được sinh bởi một phần tử duy nhất $a \\in R$, ta có:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Iđêan chính -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(165,180,252,0.48)!important; border-top:5px solid #a5b4fc!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#c7d2fe; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(i) Iđêan Chính (Principal Ideal) sinh bởi $a$:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb; margin-top:8px;">
                - Là iđêan nhỏ nhất của $R$ chứa phần tử $a$, ký hiệu là <b style="color:#fde047;">$(a)$</b> hoặc $\\langle a \\rangle$.<br>
                - Khi $R$ là <b>vành giao hoán có đơn vị $1_R$</b>, iđêan chính $(a)$ chính là tập mọi bội của $a$ trong $R$:<br>
                <div class="slide-math-display" style="background:rgba(15,12,20,0.92); border-color:#a5b4fc; color:#e0e7ff; font-size:clamp(1.2rem, 1.55vw, 1.38rem); padding:10px; margin:10px 0 0;">
                  $$(a) = aR = \\{ra \\mid r \\in R\\}$$
                </div>
              </div>
            </div>

            <!-- Cột 2: Vành iđêan chính (PID) -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(251,146,60,0.48)!important; border-top:5px solid #fb923c!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fdba74; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(ii) Vành Iđêan Chính (PID - Principal Ideal Domain):</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb; margin-top:8px;">
                - Một <b>miền nguyên $R$</b> được gọi là một <b>Vành iđêan chính (PID)</b> nếu <b>mọi iđêan của $R$ đều là iđêan chính</b> (tức mọi $I \\trianglelefteq R$ đều có dạng $I = (a)$ với $a \\in R$).<br>
                - <b>Hai mô hình PID chuẩn mực nhất:</b><br>
                &nbsp;&nbsp;+ Vành số nguyên <b style="color:#fde047;">$\\mathbb{Z}$</b>: Mọi iđêan đều có dạng $(n) = n\\mathbb{Z}$ ($n \\ge 0$).<br>
                &nbsp;&nbsp;+ Vành đa thức <b style="color:#5eead4;">$F[x]$</b> trên một trường $F$: Mọi iđêan đều có dạng $(p(x))$.
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 9: VÍ DỤ SOI SÁNG CHO SLIDE 8 - GIAO & TỔNG IĐÊAN TRONG Z
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(165,180,252,0.16), transparent 34%), linear-gradient(135deg, #18110c, #2c1d14 52%, #191c36); border:1.5px solid rgba(165,180,252,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(45,212,191,0.22); border:1.5px solid #2dd4bf; border-radius:999px; color:#5eead4; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Bao Hàm, Phép Giao &amp; Phép Tổng Các Iđêan Chính Trong $\\mathbb{Z}$</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Bao hàm & Giao -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(165,180,252,0.45)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#c7d2fe; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Quan hệ bao hàm &amp; Giao hai iđêan:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb; margin-top:10px;">
                - <b>Bao hàm ngược chiều chia hết:</b><br>
                $$(m) \\subseteq (n) \\iff m\\mathbb{Z} \\subseteq n\\mathbb{Z} \\iff \\mathbf{n \\mid m}$$
                &nbsp;&nbsp;<i>Ví dụ:</i> $6\\mathbb{Z} \\subsetneq 2\\mathbb{Z}$ (vì $2 \\mid 6$; bội của $6$ luôn là số chẵn).<br>
                - <b>Giao của hai iđêan (Lấy BCNN):</b><br>
                $$m\\mathbb{Z} \\cap n\\mathbb{Z} = \\operatorname{lcm}(m, n)\\mathbb{Z} \\quad (\\text{VD: } 4\\mathbb{Z} \\cap 6\\mathbb{Z} = 12\\mathbb{Z})$$
              </div>
            </div>

            <!-- Cột 2: Tổng hai iđêan -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(251,146,60,0.48)!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fdba74; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Tổng của hai iđêan $I + J$ (Lấy ƯCLN):</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb; margin-top:10px;">
                - Với $I, J \\trianglelefteq R$, tổng $I + J = \\{x + y \\mid x \\in I, y \\in J\\}$ là iđêan nhỏ nhất chứa $I \\cup J$.<br>
                - Trong $\\mathbb{Z}$, nhờ đồng nhất thức Bézout:<br>
                $$m\\mathbb{Z} + n\\mathbb{Z} = \\{mu + nv \\mid u, v \\in \\mathbb{Z}\\} = \\mathbf{\\gcd(m, n)\\mathbb{Z}}$$
                - Đặc biệt: $m\\mathbb{Z} + n\\mathbb{Z} = \\mathbb{Z} \\iff \\gcd(m, n) = 1$ (hai iđêan nguyên tố cùng nhau).
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 10: ĐỊNH LÝ - CẤU TRÚC VÀNH THƯƠNG R/I & PHÉP CHIẾU CHÍNH TẮC
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(165,180,252,0.16), transparent 34%), linear-gradient(135deg, #18110c, #2c1d14 52%, #191c36); border:1.5px solid rgba(165,180,252,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              🏛️ ĐỊNH LÝ TRỌNG TÂM (MỤC 7.4 - ĐỊNH LÝ 7.5)
            </span>
            <h2 style="color:#ffffff; margin:0 0 6px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Định Lý Cấu Trúc Vành Thương $R/I$ &amp; Phép Chiếu Chính Tắc $\\pi_I$</h2>
            <p style="color:#e0e7ff; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Cho vành $R$ và iđêan hai phía $I \\trianglelefteq R$. Trên tập thương $R/I = \\{a + I \\mid a \\in R\\}$, hai phép toán lớp kề đều <b>xác định tốt</b> và biến $R/I$ thành một vành, gọi là <b>vành thương (Quotient Ring)</b>:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(28,20,16,0.94); border:2px solid #fde047; color:#fef08a; font-size:clamp(1.2rem, 1.58vw, 1.42rem); padding:12px 22px; margin:0;">
            $$(a + I) + (b + I) = (a + b) + I \\qquad \\text{và} \\qquad (a + I) \\cdot (b + I) = ab + I$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:18px; margin:0;">
            <!-- Cột 1: Các phần tử đặc biệt của R/I -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(251,146,60,0.48)!important; border-left:5px solid #fb923c!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fdba74; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">(i) Các thành phần cấu trúc của Vành thương $R/I$:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb; margin-top:8px;">
                - <b>Phần tử không (đơn vị cộng):</b> Lớp <b style="color:#fde047;">$0_{R/I} = 0_R + I = I$</b>.<br>
                - <b>Phần tử đối của $a + I$:</b> $-(a + I) = (-a) + I$.<br>
                - <b>Phần tử đơn vị nhân:</b> Nếu $R$ có đơn vị $1_R$, thì $R/I$ có đơn vị là <b style="color:#fde047;">$1_{R/I} = 1_R + I$</b>.<br>
                - <b>Tính kế thừa:</b> Nếu $R$ là vành giao hoán thì $R/I$ cũng là vành giao hoán.
              </div>
            </div>

            <!-- Cột 2: Phép chiếu chính tắc pi_I -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(94,234,212,0.48)!important; border-left:5px solid #2dd4bf!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">(ii) Phép Chiếu Chính Tắc $\\pi_I : R \\twoheadrightarrow R/I$:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb; margin-top:8px;">
                - Ánh xạ $\\pi_I(a) = a + I$ bảo toàn cả phép cộng lẫn phép nhân:<br>
                $$\\pi_I(a + b) = \\pi_I(a) + \\pi_I(b), \\qquad \\pi_I(ab) = \\pi_I(a)\\pi_I(b)$$
                - Tập các phần tử bị gửi về $0_{R/I} = I$ chính là iđêan $I$:<br>
                $$\\ker(\\pi_I) = \\{a \\in R \\mid a + I = I\\} = I$$
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 11: ĐỊNH NGHĨA - IĐÊAN NGUYÊN TỐ & IĐÊAN CỰC ĐẠI (MỤC 7.5)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(165,180,252,0.16), transparent 34%), linear-gradient(135deg, #18110c, #2c1d14 52%, #191c36); border:1.5px solid rgba(165,180,252,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(129,140,248,0.24); border:1.5px solid #a5b4fc; border-radius:999px; color:#c7d2fe; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 ĐỊNH NGHĨA (ĐỊNH NGHĨA 7.7 &amp; 7.8)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Iđêan Nguyên Tố (Prime Ideal) &amp; Iđêan Cực Đại (Maximal Ideal)</h2>
            <p style="color:#e0e7ff; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Cho $R$ là một vành giao hoán có đơn vị $1_R \\neq 0_R$. Xét một <b>iđêan thực sự</b> $I \\subsetneq R$ (tức $I \\neq R$, hay $1_R \\notin I$):
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Iđêan nguyên tố -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(165,180,252,0.48)!important; border-top:5px solid #a5b4fc!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#c7d2fe; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(i) Iđêan Nguyên Tố $P \\subsetneq R$ (Prime Ideal):</b>
              <div class="slide-math-display" style="background:rgba(15,12,20,0.92); border-color:#a5b4fc; color:#e0e7ff; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:12px; margin:14px 0;">
                $$\\forall a, b \\in R: \\qquad ab \\in P \\implies a \\in P \\;\\text{ hoặc }\\; b \\in P$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.7; color:#fffbeb;">
                - <b>Ý nghĩa:</b> Tổng quát hóa bổ đề Euclid của số nguyên tố ($p \\mid ab \\implies p \\mid a$ hoặc $p \\mid b$).<br>
                - Lưu ý: $P$ bắt buộc phải là iđêan thực sự ($P \\neq R$).
              </div>
            </div>

            <!-- Iđêan cực đại -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(251,191,36,0.48)!important; border-top:5px solid #fbbf24!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fde047; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(ii) Iđêan Cực Đại $M \\subsetneq R$ (Maximal Ideal):</b>
              <div class="slide-math-display" style="background:rgba(15,12,20,0.92); border-color:#fbbf24; color:#fef08a; font-size:clamp(1.14rem, 1.48vw, 1.32rem); padding:12px; margin:14px 0;">
                $$\\forall J \\trianglelefteq R: \\quad M \\subseteq J \\subseteq R \\implies J = M \\;\\text{ hoặc }\\; J = R$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.7; color:#fffbeb;">
                - <b>Ý nghĩa:</b> Giữa $M$ và vành mẹ $R$ không thể chèn thêm bất kỳ một iđêan thực sự trung gian nào ($M$ là iđêan thực sự "to nhất" có thể).
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 12: ĐỊNH LÝ ĐẶC TRƯNG VÀNH THƯƠNG NGUYÊN TỐ & CỰC ĐẠI (ĐỊNH LÝ 7.9)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(165,180,252,0.16), transparent 34%), linear-gradient(135deg, #18110c, #2c1d14 52%, #191c36); border:1.5px solid rgba(165,180,252,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ TRỌNG TÂM (ĐỊNH LÝ 7.9)
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Định Lý Đặc Trưng Vành Thương Qua Iđêan Nguyên Tố &amp; Cực Đại</h2>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(28,20,16,0.94); border:2px solid #fde047; color:#fef08a; font-size:clamp(1.18rem, 1.54vw, 1.38rem); padding:14px 22px; margin:0;">
            $$\\text{Cho } R \\text{ giao hoán có } 1_R \\neq 0_R,\\; I \\subsetneq R: \\qquad (1)\\; R/I \\text{ là Miền nguyên} \\iff I \\text{ nguyên tố} \\qquad (2)\\; R/I \\text{ là Trường} \\iff I \\text{ cực đại}$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Chứng minh 1: R/I miền nguyên <=> I nguyên tố -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(165,180,252,0.45)!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#c7d2fe; font-size:clamp(1.16rem, 1.5vw, 1.34rem);">1) Tại sao $R/I$ là miền nguyên $\\iff I$ nguyên tố?</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb; margin-top:8px;">
                - $R/I$ không có ước của không:<br>
                $$\\iff (a + I)(b + I) = 0_{R/I} = I \\implies a + I = I \\lor b + I = I$$
                $$\\iff ab + I = I \\implies a \\in I \\lor b \\in I$$
                $$\\iff ab \\in I \\implies a \\in I \\lor b \\in I \\quad (I \\text{ là iđêan nguyên tố!})$$
              </div>
            </div>

            <!-- Chứng minh 2 & Hệ quả -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(94,234,212,0.48)!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.16rem, 1.5vw, 1.34rem);">2) Hệ quả kế thừa: Cực đại $\\implies$ Nguyên tố!</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb; margin-top:8px;">
                - Nếu $M$ là một <b>iđêan cực đại</b> của $R$, thì theo (2), vành thương $R/M$ là một <b>trường</b>.<br>
                - Vì mọi trường đều là một <b>miền nguyên</b>, nên theo (1), $M$ bắt buộc phải là một <b>iđêan nguyên tố</b>!<br>
                <div style="margin-top:8px; padding:8px 12px; background:rgba(15,12,20,0.92); border:1px solid #fde047; border-radius:8px; color:#fef08a; font-weight:700; text-align:center;">
                  $M \\text{ là iđêan cực đại} \\implies M \\text{ là iđêan nguyên tố}$
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 13: VÍ DỤ SOI SÁNG (BÀI TẬP 7.15) & PHẢN VÍ DỤ (MỤC 7.6)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(165,180,252,0.16), transparent 34%), linear-gradient(135deg, #18110c, #2c1d14 52%, #191c36); border:1.5px solid rgba(165,180,252,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.24); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ &amp; PHẢN VÍ DỤ KINH ĐIỂN (BÀI TẬP 7.15)
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Iđêan Nguyên Tố Chưa Chắc Đã Là Iđêan Cực Đại!</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Phản ví dụ I = (0) trong Z -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(244,63,94,0.5)!important; border-left:5px solid #fb7185!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Phản ví dụ 1: Iđêan $I = (0) = \\{0\\}$ trong vành $\\mathbb{Z}$</b>
              <div class="slide-math-display" style="background:rgba(15,12,20,0.92); border-color:#fb7185; color:#fecdd3; font-size:clamp(1.14rem, 1.48vw, 1.32rem); padding:10px; margin:12px 0;">
                $$\\mathbb{Z}/(0) \\cong \\mathbb{Z} \\quad (\\text{Là miền nguyên, nhưng KHÔNG là trường!})$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb;">
                - Vì $\\mathbb{Z}/(0) \\cong \\mathbb{Z}$ là miền nguyên nên $(0)$ là một <b>iđêan nguyên tố</b> của $\\mathbb{Z}$.<br>
                - Nhưng $\\mathbb{Z}$ không phải là trường (hoặc nhìn trực tiếp chuỗi bao hàm <b style="color:#fde047;">$(0) \\subsetneq 2\\mathbb{Z} \\subsetneq \\mathbb{Z}$</b>), nên $(0)$ <b>không phải là iđêan cực đại</b>!
              </div>
            </div>

            <!-- Cột 2: Phản ví dụ I = (x) trong R[x, y] -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(165,180,252,0.48)!important; border-left:5px solid #a5b4fc!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#c7d2fe; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Phản ví dụ 2: Iđêan $I = (x)$ trong vành $\\mathbb{R}[x, y]$</b>
              <div class="slide-math-display" style="background:rgba(15,12,20,0.92); border-color:#a5b4fc; color:#e0e7ff; font-size:clamp(1.14rem, 1.48vw, 1.32rem); padding:10px; margin:12px 0;">
                $$\\mathbb{R}[x, y] / (x) \\cong \\mathbb{R}[y] \\quad (\\text{Là miền nguyên, không là trường!})$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb;">
                - Iđêan $(x)$ là <b>iđêan nguyên tố</b> vì thương $\\mathbb{R}[y]$ là miền nguyên.<br>
                - Nhưng $(x)$ <b>không cực đại</b> vì bị kẹp bởi iđêan thực sự $(x, y)$:<br>
                $$(x) \\subsetneq (x, y) \\subsetneq \\mathbb{R}[x, y]$$
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 14: MÔ HÌNH DỰNG TRƯỜNG THỰC CHIẾN - KHAI SINH SỐ PHỨC C (MỤC 7.7)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(165,180,252,0.16), transparent 34%), linear-gradient(135deg, #18110c, #2c1d14 52%, #191c36); border:1.5px solid rgba(165,180,252,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(45,212,191,0.22); border:1.5px solid #2dd4bf; border-radius:999px; color:#5eead4; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 MÔ HÌNH DỰNG TRƯỜNG KINH ĐIỂN (MỤC 7.7)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Khai Sinh Trường Số Phức $\\mathbb{C}$ Từ Vành Thương $\\mathbb{R}[x] / (x^2 + 1)$</h2>
            <p style="color:#e0e7ff; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Trong vành đa thức $\\mathbb{R}[x]$, xét iđêan chính $I = (x^2 + 1) = \\{(x^2 + 1)g(x) \\mid g(x) \\in \\mathbb{R}[x]\\}$:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Tại sao là Trường -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(251,146,60,0.48)!important; border-left:5px solid #fb923c!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fdba74; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Tại sao $\\mathbb{R}[x] / (x^2 + 1)$ là một Trường?</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb; margin-top:10px;">
                - Đa thức bậc hai $p(x) = x^2 + 1$ vô nghiệm trên $\\mathbb{R}$ nên <b>bất khả quy</b> trên $\\mathbb{R}[x]$.<br>
                - Trong vành iđêan chính $\\mathbb{R}[x]$, đa thức bất khả quy sinh ra một <b>iđêan cực đại</b> $I = (x^2 + 1)$.<br>
                - Theo Định lý 7.9, vành thương $\\mathbb{R}[x]/(x^2 + 1)$ là một <b>Trường</b>!
              </div>
            </div>

            <!-- Cột 2: Sự xuất hiện tự nhiên của số ảo i -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border:1.5px solid rgba(94,234,212,0.48)!important; border-left:5px solid #2dd4bf!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Sự xuất hiện tự nhiên của đơn vị ảo $i = x + I$:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb; margin-top:10px;">
                - Chia đa thức $f(x)$ cho $x^2 + 1$ được dư bậc nhất $a + bx$, nên mọi phần tử của thương có dạng duy nhất $(a + bx) + I$.<br>
                - Đặt <b style="color:#fde047;">$i = x + I$</b>. Vì $x^2 + 1 \\in I = 0_{R/I}$, ta có:<br>
                <div class="slide-math-display" style="background:rgba(15,12,20,0.92); border-color:#2dd4bf; color:#99f6e4; font-size:clamp(1.14rem, 1.48vw, 1.32rem); padding:8px; margin:8px 0 0;">
                  $$i^2 + 1 = (x^2 + 1) + I = 0_{R/I} \\iff \\mathbf{i^2 = -1} \\implies \\frac{\\mathbb{R}[x]}{(x^2+1)} \\cong \\mathbb{C}$$
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 15: BẢNG TỔNG HỢP PHÂN LOẠI IĐÊAN nZ VÀ VÀNH THƯƠNG Z/nZ (MỤC 7.8)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:22px 30px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(165,180,252,0.16), transparent 34%), linear-gradient(135deg, #18110c, #2c1d14 52%, #191c36); border:1.5px solid rgba(165,180,252,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              📊 BẢNG TỔNG HỢP GIÁO TRÌNH (MỤC 7.8)
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.85rem, 2.4vw, 2.25rem);">Khảo Sát Toàn Diện Iđêan $I = n\\mathbb{Z}$ và Vành Thương $\\mathbb{Z}/n\\mathbb{Z}$</h2>
          </div>

          <div class="anim-card anim-d1" style="flex:1; display:flex; flex-direction:column; justify-content:center; overflow-x:auto;">
            <table style="width:100%; height:100%; border-collapse:collapse; font-size:clamp(1.0rem, 1.3vw, 1.18rem); background:rgba(28,20,16,0.88); border:1.5px solid rgba(165,180,252,0.5); border-radius:14px; overflow:hidden;">
              <thead>
                <tr style="background:rgba(129,140,248,0.28); color:#fde047; text-align:left; font-size:clamp(1.04rem, 1.34vw, 1.22rem);">
                  <th style="padding:11px 14px; border-bottom:1.5px solid rgba(165,180,252,0.45);">Iđêan $I = n\\mathbb{Z}$</th>
                  <th style="padding:11px 14px; border-bottom:1.5px solid rgba(165,180,252,0.45); text-align:center;">$I \\subsetneq \\mathbb{Z}$?</th>
                  <th style="padding:11px 14px; border-bottom:1.5px solid rgba(165,180,252,0.45); text-align:center;">Nguyên tố?</th>
                  <th style="padding:11px 14px; border-bottom:1.5px solid rgba(165,180,252,0.45); text-align:center;">Cực đại?</th>
                  <th style="padding:11px 14px; border-bottom:1.5px solid rgba(165,180,252,0.45);">Vành thương $\\mathbb{Z}/n\\mathbb{Z}$ &amp; Bản chất cấu trúc</th>
                </tr>
              </thead>
              <tbody style="color:#fffbeb; line-height:1.58;">
                <tr style="border-bottom:1px solid rgba(165,180,252,0.22);">
                  <td style="padding:11px 14px; font-weight:800; color:#c7d2fe;">$n = 0$: $I = \\{0\\}$</td>
                  <td style="padding:11px 14px; text-align:center; color:#5eead4; font-weight:700;">✔ Có</td>
                  <td style="padding:11px 14px; text-align:center; color:#5eead4; font-weight:800;">✔ Có</td>
                  <td style="padding:11px 14px; text-align:center; color:#fda4af; font-weight:800;">✖ Không</td>
                  <td style="padding:11px 14px;">$\\mathbb{Z}/(0) \\cong \\mathbb{Z}$: <b>Miền nguyên</b> nhưng không là trường ($(0) \\subsetneq 2\\mathbb{Z} \\subsetneq \\mathbb{Z}$).</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(165,180,252,0.22);">
                  <td style="padding:11px 14px; font-weight:800; color:#fda4af;">$n = 1$: $I = \\mathbb{Z}$</td>
                  <td style="padding:11px 14px; text-align:center; color:#fda4af; font-weight:700;">✖ Không</td>
                  <td style="padding:11px 14px; text-align:center; color:#fda4af; font-weight:800;">✖ Không</td>
                  <td style="padding:11px 14px; text-align:center; color:#fda4af; font-weight:800;">✖ Không</td>
                  <td style="padding:11px 14px;">$\\mathbb{Z}/\\mathbb{Z} = \\{[0]\\}$: <b>Vành không</b> (vi phạm điều kiện iđêan thực sự $I \\subsetneq R$).</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(165,180,252,0.22);">
                  <td style="padding:11px 14px; font-weight:800; color:#fde047;">$n = p$ (Nguyên tố)</td>
                  <td style="padding:11px 14px; text-align:center; color:#5eead4; font-weight:700;">✔ Có</td>
                  <td style="padding:11px 14px; text-align:center; color:#5eead4; font-weight:800;">✔ Có</td>
                  <td style="padding:11px 14px; text-align:center; color:#5eead4; font-weight:800;">✔ Có</td>
                  <td style="padding:11px 14px;">$\\mathbb{Z}/p\\mathbb{Z} = \\mathbb{F}_p$: <b>Trường hữu hạn</b> cấp $p$ (vừa là trường, vừa là miền nguyên).</td>
                </tr>
                <tr>
                  <td style="padding:11px 14px; font-weight:800; color:#fdba74;">$n = 6$ (Hợp số)</td>
                  <td style="padding:11px 14px; text-align:center; color:#5eead4; font-weight:700;">✔ Có</td>
                  <td style="padding:11px 14px; text-align:center; color:#fda4af; font-weight:800;">✖ Không</td>
                  <td style="padding:11px 14px; text-align:center; color:#fda4af; font-weight:800;">✖ Không</td>
                  <td style="padding:11px 14px;">$\\mathbb{Z}/6\\mathbb{Z}$: <b>Vành giao hoán có ước của không</b> ($[2][3] = [0]$; $6\\mathbb{Z} \\subsetneq 2\\mathbb{Z} \\subsetneq \\mathbb{Z}$).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 16: TỔNG KẾT CHƯƠNG 7 & CẦU NỐI SANG CHƯƠNG 8
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(165,180,252,0.16), transparent 34%), linear-gradient(135deg, #18110c, #2c1d14 52%, #191c36); border:1.5px solid rgba(165,180,252,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(129,140,248,0.24); border:1.5px solid #a5b4fc; border-radius:999px; color:#c7d2fe; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              🎯 TỔNG KẾT CHƯƠNG 7
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Bản Đồ Bốn Trụ Cột Chương 7 &amp; Cầu Nối Sang Chương 8</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:16px; margin:0;">
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border-left:5px solid #fb923c!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fdba74; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">1) Tiêu chuẩn Iđêan &amp; Iđêan của Trường</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fffbeb; margin-top:6px;">
                - $I \\trianglelefteq R \\iff x - y \\in I$ và hấp thụ $rx, xr \\in I$ ($\\forall r \\in R, x \\in I$).<br>
                - $1_R \\in I \\iff I \\cap U(R) \\neq \\emptyset \\iff I = R$. Trường $F$ chỉ có 2 iđêan $\\{0\\}$ và $F$.
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border-left:5px solid #a5b4fc!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#c7d2fe; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">2) Iđêan chính $(a) = aR$ &amp; Vành PID</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fffbeb; margin-top:6px;">
                - PID là miền nguyên mà mọi iđêan đều có dạng $(a) = aR$ (như $\\mathbb{Z}$ và $F[x]$).<br>
                - Trong $\\mathbb{Z}$: $m\\mathbb{Z} \\cap n\\mathbb{Z} = \\operatorname{lcm}(m,n)\\mathbb{Z}$ và $m\\mathbb{Z} + n\\mathbb{Z} = \\gcd(m,n)\\mathbb{Z}$.
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border-left:5px solid #2dd4bf!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#5eead4; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">3) Cấu trúc Vành thương $R/I$</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fffbeb; margin-top:6px;">
                - $(a+I)+(b+I) = (a+b)+I$ và $(a+I)(b+I) = ab+I$.<br>
                - Đơn vị cộng $0_{R/I} = I$, đơn vị nhân $1_{R/I} = 1_R + I$; $\\ker(\\pi_I) = I$.
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,20,16,0.82)!important; border-left:5px solid #fde047!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fde047; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">4) Iđêan nguyên tố &amp; Iđêan cực đại</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fffbeb; margin-top:6px;">
                - $R/I$ là miền nguyên $\\iff I$ nguyên tố; $R/I$ là trường $\\iff I$ cực đại.<br>
                - Cực đại $\\implies$ Nguyên tố, nhưng chiều ngược lại sai (VD: $(0)$ trong $\\mathbb{Z}$).
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(28,20,16,0.94)!important; border:1.5px solid #fde047!important; color:#fef08a!important; font-size:clamp(1.06rem, 1.36vw, 1.22rem); text-align:center; line-height:1.55;">
            <b>🚀 Tiếp nối Chương 8 (Đồng cấu Vành &amp; Đặc số):</b> Làm sao chứng minh đẳng cấu $\\mathbb{R}[x]/(x^2+1) \\cong \\mathbb{C}$ chỉ trong $3$ dòng bằng <b>Định lý Đẳng cấu Vành Thứ nhất</b> $R/\\ker f \\cong \\operatorname{im} f$, và khám phá đại lượng <b>Đặc số $\\operatorname{char}(R)$</b>?
          </div>
        </div>
      `
    }
  ],
  "8": [
    // ========================================================
    // SLIDE 1: TRANG BÌA CĂN GIỮA - LĂNG KÍNH KHÚC XẠ KÉP & ĐỒNG HỒ MẶT TRỜI ĐẶC SỐ
    // ========================================================
    {
      html: `
        <div style="position: relative; width: 100%; height: 100%; min-height: 100%; display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center; padding: 26px 34px 22px; box-sizing: border-box; overflow: hidden; border-radius: 16px; background: radial-gradient(circle at 50% 20%, rgba(251, 113, 133, 0.24), transparent 45%), radial-gradient(ellipse at 14% 86%, rgba(45, 212, 191, 0.25), transparent 42%), radial-gradient(ellipse at 86% 86%, rgba(253, 224, 71, 0.20), transparent 40%), linear-gradient(145deg, #0c141d 0%, #162838 48%, #2d1828 82%, #0e121a 100%); border: 1.5px solid rgba(253, 164, 175, 0.55); color: #fff1f2; box-shadow: 0 18px 45px rgba(10, 16, 24, 0.85);">
          
          <!-- VECTOR SVG NỀN: LĂNG KÍNH KHÚC XẠ KÉP (+, .), VÒNG ĐẶC SỐ, THIÊN MÃ PEGASUS & KHỔNG TƯỚC -->
          <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0;">
            <defs>
              <radialGradient id="c8PrismGlow" cx="50%" cy="24%" r="44%">
                <stop offset="0%" stop-color="#fda4af" stop-opacity="0.38"/>
                <stop offset="42%" stop-color="#2dd4bf" stop-opacity="0.16"/>
                <stop offset="100%" stop-color="#0c141d" stop-opacity="0"/>
              </radialGradient>
              <linearGradient id="c8RayAdd" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9"/>
                <stop offset="50%" stop-color="#5eead4" stop-opacity="0.8"/>
                <stop offset="100%" stop-color="#2dd4bf" stop-opacity="0.1"/>
              </linearGradient>
              <linearGradient id="c8RayMul" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9"/>
                <stop offset="50%" stop-color="#fda4af" stop-opacity="0.85"/>
                <stop offset="100%" stop-color="#fbbf24" stop-opacity="0.1"/>
              </linearGradient>
              <linearGradient id="c8PalaceSil" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#1e3a4c" stop-opacity="0.68"/>
                <stop offset="100%" stop-color="#0c131c" stop-opacity="0.96"/>
              </linearGradient>
              <linearGradient id="c8PegasusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.96"/>
                <stop offset="55%" stop-color="#99f6e4" stop-opacity="0.85"/>
                <stop offset="100%" stop-color="#0d9488" stop-opacity="0.45"/>
              </linearGradient>
              <linearGradient id="c8PeacockCoral" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#fef08a" stop-opacity="0.95"/>
                <stop offset="55%" stop-color="#fb7185" stop-opacity="0.85"/>
                <stop offset="100%" stop-color="#881337" stop-opacity="0.5"/>
              </linearGradient>
            </defs>

            <!-- Quầng sáng Lăng Kính trung tâm -->
            <circle cx="500" cy="195" r="340" fill="url(#c8PrismGlow)"/>

            <!-- BIỂU TƯỢNG TOÁN HỌC TRUNG TÂM: VÒNG ĐỒNG HỒ ĐẶC SỐ char(R) & LĂNG KÍNH KHÚC XẠ KÉP -->
            <g transform="translate(500, 185)" opacity="0.46">
              <!-- Vòng đồng hồ mặt trời Đặc số char(R) -->
              <circle r="215" fill="none" stroke="#fda4af" stroke-width="1.5" stroke-dasharray="12 7"/>
              <circle r="172" fill="none" stroke="#5eead4" stroke-width="1.5" stroke-dasharray="5 6"/>
              <circle r="125" fill="none" stroke="#fde68a" stroke-width="1.4" opacity="0.7"/>
              <!-- Tia sáng đầu vào từ vành nguồn R (bên trái) chiếu vào Lăng kính tam giác -->
              <line x1="-380" y1="35" x2="-48" y2="5" stroke="#ffffff" stroke-width="4.5" opacity="0.85"/>
              <!-- Hai chùm tia khúc xạ đầu ra: Tia Cộng (Ngọc lam) và Tia Nhân (San hô vàng) -->
              <polygon points="42,-15 390,-95 390,-55 48,5" fill="url(#c8RayAdd)"/>
              <polygon points="48,5 390,45 390,85 42,25" fill="url(#c8RayMul)"/>
              <!-- Khối Lăng Kính Pha Lê Tam Giác ở tâm -->
              <polygon points="0,-78 68,42 -68,42" fill="rgba(255,255,255,0.15)" stroke="#ffffff" stroke-width="2.5"/>
              <polygon points="0,-52 45,28 -45,28" fill="none" stroke="#5eead4" stroke-width="1.5"/>
            </g>

            <!-- Dãy tháp pha lê & địa hình thung lũng lăng kính -->
            <path d="M0,385 L130,305 L265,360 L420,300 L580,360 L735,300 L870,355 L1000,315 L1000,600 L0,600 Z" fill="url(#c8PalaceSil)"/>
            <path d="M0,448 Q250,395 500,440 T1000,435 L1000,600 L0,600 Z" fill="#090e14" opacity="0.96"/>

            <!-- Trụ pha lê lục giác phát sáng hai bên -->
            <g transform="translate(68, 445)" filter="drop-shadow(0 0 12px rgba(94, 234, 212, 0.65))">
              <polygon points="0,35 -16,-35 0,-65 16,-35" fill="url(#c8PegasusGrad)"/>
              <polygon points="22,40 10,-15 24,-40 34,-10" fill="#fda4af" opacity="0.8"/>
            </g>
            <g transform="translate(932, 445)" filter="drop-shadow(0 0 12px rgba(251, 113, 133, 0.65))">
              <polygon points="0,35 -16,-35 0,-65 16,-35" fill="url(#c8PeacockCoral)"/>
              <polygon points="-22,40 -34,-10 -24,-40 -10,-15" fill="#5eead4" opacity="0.8"/>
            </g>

            <!-- SINH VẬT HUYỀN THOẠI 1: THIÊN MÃ CÓ CÁNH BẠCH KIM (WINGED PEGASUS - BÊN TRÁI) -->
            <g transform="translate(175, 392) scale(0.88)" filter="drop-shadow(0 0 16px rgba(94, 234, 212, 0.7))">
              <!-- Bốn chân thiên mã tung vó -->
              <path d="M-28,6 L-38,48 M-12,8 L-16,50 M18,2 L28,42 M30,-4 L46,32" stroke="#ccfbf1" stroke-width="3.2" stroke-linecap="round"/>
              <!-- Thân và cổ thiên mã -->
              <path d="M-32,2 C-30,-16 -4,-20 26,-14 C38,-12 42,-2 32,8 C12,12 -14,10 -32,2 Z" fill="url(#c8PegasusGrad)"/>
              <path d="M20,-10 C28,-32 36,-52 44,-64 C52,-66 60,-58 58,-50 C48,-42 40,-24 32,-2 Z" fill="url(#c8PegasusGrad)"/>
              <!-- Đôi cánh thiên thần sải rộng -->
              <path d="M-4,-12 C-28,-52 -78,-64 -105,-38 C-72,-16 -38,-4 -8,0 Z" fill="url(#c8PegasusGrad)"/>
              <path d="M4,-14 C-12,-46 -48,-56 -72,-36 C-46,-18 -22,-8 0,-2 Z" fill="#fde68a" opacity="0.75"/>
              <!-- Đuôi lượn sóng ánh sao -->
              <path d="M-32,0 Q-56,-8 -52,18" fill="none" stroke="#99f6e4" stroke-width="3.5" stroke-linecap="round"/>
            </g>

            <!-- SINH VẬT HUYỀN THOẠI 2: KHỔNG TƯỚC SAN HÔ HOÀNG GIA (CORAL PEACOCK - BÊN PHẢI) -->
            <g transform="translate(825, 405) scale(0.88)" filter="drop-shadow(0 0 16px rgba(251, 113, 133, 0.7))">
              <!-- Vòm đuôi Khổng Tước xòe quạt lăng kính -->
              <path d="M0,10 C15,-45 85,-55 110,-10 C95,22 45,28 0,14 Z" fill="url(#c8PeacockCoral)" opacity="0.85"/>
              <circle cx="48" cy="-22" r="5" fill="#5eead4"/><circle cx="72" cy="-16" r="5" fill="#fde68a"/><circle cx="84" cy="2" r="5" fill="#5eead4"/>
              <!-- Thân, cổ uốn lượn và mào vương miện -->
              <path d="M-24,10 C-12,-8 14,-6 22,10 C8,20 -12,20 -24,10 Z" fill="url(#c8PeacockCoral)"/>
              <path d="M-16,6 C-26,-16 -30,-42 -20,-56 C-12,-60 -4,-54 -8,-46 C-14,-36 -14,-16 -6,6 Z" fill="#5eead4"/>
              <path d="M-20,-56 L-26,-70 M-16,-58 L-18,-72 M-12,-56 L-10,-68" stroke="#fde68a" stroke-width="2" stroke-linecap="round"/>
              <path d="M-12,16 L-16,42 M2,16 L0,42" stroke="#fde68a" stroke-width="2.6" stroke-linecap="round"/>
            </g>

            <!-- Đàn chim én pha lê & các hạt ánh sáng khúc xạ -->
            <g fill="#fde68a" opacity="0.9">
              <circle cx="145" cy="165" r="2.8"/><circle cx="285" cy="125" r="2.4"/><circle cx="415" cy="105" r="2.5"/>
              <circle cx="585" cy="105" r="2.5"/><circle cx="715" cy="125" r="2.4"/><circle cx="855" cy="165" r="2.8"/>
            </g>
            <g fill="#5eead4" opacity="0.85">
              <circle cx="225" cy="255" r="2.6"/><circle cx="775" cy="255" r="2.6"/>
              <circle cx="380" cy="425" r="2.5"/><circle cx="620" cy="425" r="2.5"/>
            </g>
          </svg>

          <!-- TIÊU ĐỀ SLIDE (CĂN GIỮA, CỠ CHỮ LỚN NỔI BẬT) -->
          <div class="anim-title" style="position: relative; z-index: 2; max-width: 920px;">
            <div style="display: inline-flex; align-items: center; gap: 10px; padding: 6px 22px; background: rgba(18, 30, 42, 0.86); border: 1.5px solid rgba(253, 164, 175, 0.65); border-radius: 999px; font-size: clamp(0.92rem, 1.2vw, 1.08rem); font-weight: 800; color: #fda4af; letter-spacing: 1.2px; margin-bottom: 12px; backdrop-filter: blur(10px); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);">
              <span>💎</span> CẤU TRÚC ĐẠI SỐ — CHƯƠNG 8
            </div>
            <h1 style="font-size: clamp(2.45rem, 3.95vw, 3.35rem); font-weight: 800; color: #ffffff; margin: 0 0 8px; line-height: 1.18; letter-spacing: -0.5px; text-shadow: 0 4px 28px rgba(0, 0, 0, 0.82);">
              Đồng Cấu Vành &amp; <span style="color: #5eead4;">Đặc Số</span> <span style="color: #fde68a;">$\\operatorname{char}(R)$</span>
            </h1>
            <p style="font-size: clamp(1.1rem, 1.45vw, 1.3rem); color: #fecdd3; margin: 0; font-weight: 600; text-shadow: 0 2px 10px rgba(0,0,0,0.65);">
              Giáo trình Cấu trúc Đại số · TS. Huỳnh Việt Khánh
            </p>
          </div>

          <!-- TÂM ĐIỂM: KHỐI CÂU HỎI TRIẾT HỌC TRUNG TÂM -->
          <div class="slide-glass-card anim-card anim-d1" style="position: relative; z-index: 2; max-width: 880px; width: 100%; padding: 26px 38px; margin: 12px 0; background: rgba(18, 28, 40, 0.84) !important; border: 1.5px solid rgba(253, 164, 175, 0.55) !important; border-radius: 18px; backdrop-filter: blur(20px); box-shadow: 0 20px 50px rgba(6, 10, 16, 0.88), inset 0 1px 0 rgba(255, 255, 255, 0.22); text-align: center;">
            <div style="font-size: clamp(0.98rem, 1.25vw, 1.12rem); font-weight: 800; color: #fde68a; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">
              ✦ Câu Hỏi Trung Tâm Của Chương ✦
            </div>
            <p style="font-size: clamp(1.26rem, 1.72vw, 1.5rem); line-height: 1.62; color: #ffffff; margin: 0; font-weight: 500;">
              Khi một ánh xạ <b style="color: #fda4af;">$f : R \\to S$</b> bảo toàn đồng thời cả phép cộng lẫn phép nhân, tại sao hạt nhân <b style="color: #5eead4;">$\\ker f$</b> luôn kết tinh thành một Iđêan, và đại lượng <b style="color: #fde68a;">Đặc số $\\operatorname{char}(R)$</b> tiết lộ bí mật gì về chu kỳ cộng nội tại của một miền nguyên?
            </p>
          </div>

          <!-- ĐÁY SLIDE: THANH 4 TRỤ CỘT KIẾN THỨC (KHÔNG THANH CUỘN) -->
          <div class="anim-card anim-d2" style="position: relative; z-index: 2; display: flex; flex-wrap: nowrap; justify-content: space-between; align-items: center; gap: 6px; width: 100%; max-width: 960px; padding: 8px 14px; box-sizing: border-box; background: rgba(18, 28, 40, 0.9); border: 1.5px solid rgba(253, 164, 175, 0.42); border-radius: 999px; backdrop-filter: blur(12px); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5); overflow: hidden;">
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(244, 63, 94, 0.22); border: 1px solid rgba(253, 164, 175, 0.5); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #fecdd3; white-space: nowrap;">
              1. Đồng Cấu Vành &amp; Đơn Vị
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(45, 212, 191, 0.2); border: 1px solid rgba(94, 234, 212, 0.48); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #5eead4; white-space: nowrap;">
              2. Hạt Nhân $\\ker f \\trianglelefteq R$
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(251, 191, 36, 0.22); border: 1px solid rgba(253, 224, 71, 0.48); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #fde68a; white-space: nowrap;">
              3. Định Lý Đẳng Cấu Vành
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(56, 189, 248, 0.22); border: 1px solid rgba(103, 232, 249, 0.48); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #67e8f9; white-space: nowrap;">
              4. Đặc Số $\\operatorname{char}(R) \\in \\{0, p\\}$
            </span>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 2: ĐỘNG CƠ SƯ PHẠM - ÁNH XẠ GIỮ ĐỒNG THỜI HAI PHÉP TOÁN
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(251,113,133,0.15), transparent 34%), linear-gradient(135deg, #0d1620, #172a3a 52%, #2c1928); border:1.5px solid rgba(253,164,175,0.48); color:#fff1f2;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.22); border:1.5px solid #fda4af; border-radius:999px; color:#fecdd3; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💎 KHỞI NGUỒN SƯ PHẠM (MỤC 8.1)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Ánh Xạ Tôn Trọng Đồng Thời Hai Phép Toán Cộng &amp; Nhân</h2>
            <p style="color:#fecdd3; font-size:clamp(1.12rem, 1.44vw, 1.28rem); line-height:1.58; margin:0;">
              Ở Chương 5, đồng cấu nhóm chỉ cần giữ nguyên một phép toán duy nhất. Nhưng vì một vành $(R, +, \\cdot)$ mang trên mình cả hai phép toán, một ánh xạ $f : R \\to S$ muốn bảo toàn cấu trúc vành phải đóng <b>hai vai trò cùng lúc</b>:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Vai trò 1: Đồng cấu nhóm cộng -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(94,234,212,0.48)!important; border-left:5px solid #2dd4bf!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.2rem, 1.55vw, 1.38rem); display:block; margin-bottom:10px;">1) Vai Trò Thứ Nhất — Đồng Cấu Nhóm Cộng:</b>
              <div class="slide-math-display" style="background:rgba(10,16,24,0.92); border-color:#2dd4bf; color:#99f6e4; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:12px; margin:8px 0 12px;">
                $$f : (R, +) \\longrightarrow (S, +), \\quad f(a + b) = f(a) + f(b)$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fff1f2;">
                - Kế thừa trọn vẹn mọi tính chất của đồng cấu nhóm cộng: tự động gửi $0_R$ về $0_S$ và gửi phần tử đối $-a$ về $-f(a)$.
              </div>
            </div>

            <!-- Vai trò 2: Đồng cấu nửa nhóm nhân -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(253,164,175,0.48)!important; border-left:5px solid #fb7185!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.2rem, 1.55vw, 1.38rem); display:block; margin-bottom:10px;">2) Vai Trò Thứ Hai — Bảo Toàn Phép Nhân:</b>
              <div class="slide-math-display" style="background:rgba(10,16,24,0.92); border-color:#fb7185; color:#fecdd3; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:12px; margin:8px 0 12px;">
                $$f : (R, \\cdot) \\longrightarrow (S, \\cdot), \\quad f(ab) = f(a)f(b)$$
              </div>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fff1f2;">
                - <b>⚠️ Khác biệt tinh tế:</b> Vì $(R, \\cdot)$ không phải là một nhóm (không có luật giản ước nhân), điều kiện $f(ab) = f(a)f(b)$ <b>không tự động ép</b> $f(1_R) = 1_S$!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 3: ĐỊNH NGHĨA - ĐỒNG CẤU VÀNH & PHÂN LOẠI (ĐỊNH NGHĨA 8.1 & 8.2)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(251,113,133,0.15), transparent 34%), linear-gradient(135deg, #0d1620, #172a3a 52%, #2c1928); border:1.5px solid rgba(253,164,175,0.48); color:#fff1f2;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.22); border:1.5px solid #fda4af; border-radius:999px; color:#fecdd3; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              📘 ĐỊNH NGHĨA (ĐỊNH NGHĨA 8.1 &amp; 8.2)
            </span>
            <h2 style="color:#ffffff; margin:0 0 6px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Đồng Cấu Vành (Ring Homomorphism) &amp; Các Hệ Quả Tức Thời</h2>
            <p style="color:#fecdd3; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Cho hai vành $R$ và $S$. Ánh xạ $f : R \\to S$ được gọi là một <b>đồng cấu vành</b> nếu thỏa mãn đồng thời 2 điều kiện với mọi $a, b \\in R$:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(18,30,42,0.94); border:2px solid #fde68a; color:#fef08a; font-size:clamp(1.22rem, 1.62vw, 1.45rem); padding:12px 22px; margin:0;">
            $$(1)\\; f(a + b) = f(a) + f(b) \\qquad \\text{và} \\qquad (2)\\; f(ab) = f(a)f(b)$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:18px; margin:0;">
            <!-- Cột 1: Các hệ quả tức thời -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(94,234,212,0.48)!important; border-left:5px solid #2dd4bf!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">(i) Bốn Hệ Quả Tức Thời Với Mọi Đồng Cấu Vành:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fff1f2; margin-top:8px;">
                - <b>Bảo toàn phần tử không:</b> <b style="color:#fde68a;">$f(0_R) = 0_S$</b>.<br>
                - <b>Bảo toàn phần tử đối &amp; hiệu:</b> $f(-a) = -f(a)$ và $f(a - b) = f(a) - f(b)$.<br>
                - <b>Bảo toàn bội nguyên:</b> $f(na) = n f(a)$ với mọi $n \\in \\mathbb{Z}$.<br>
                - <b>Bảo toàn lũy thừa dương:</b> $f(a^k) = (f(a))^k$ với mọi $k \\in \\mathbb{Z}^+$.
              </div>
            </div>

            <!-- Cột 2: Phân loại đồng cấu vành -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(253,164,175,0.48)!important; border-left:5px solid #fb7185!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">(ii) Phân Loại Đồng Cấu Vành:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fff1f2; margin-top:8px;">
                - <b>Đơn cấu vành (Monomorphism):</b> Đồng cấu vành có tính <i>đơn ánh</i>.<br>
                - <b>Toàn cấu vành (Epimorphism):</b> Đồng cấu vành có tính <i>toàn ánh</i>.<br>
                - <b>Đẳng cấu vành (Isomorphism):</b> Đồng cấu vành vừa đơn ánh vừa toàn ánh (<i>song ánh</i>), ký hiệu <b style="color:#fde68a;">$R \\cong S$</b>.
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 4: VÍ DỤ SOI SÁNG CHO SLIDE 3 (PHÉP CHIẾU & PHÉP THẾ)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(251,113,133,0.15), transparent 34%), linear-gradient(135deg, #0d1620, #172a3a 52%, #2c1928); border:1.5px solid rgba(253,164,175,0.48); color:#fff1f2;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(45,212,191,0.22); border:1.5px solid #2dd4bf; border-radius:999px; color:#5eead4; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ (BÀI TẬP 8.1)
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Hai Đồng Cấu Vành Chuẩn Mực: Phép Chiếu Modulo &amp; Phép Thế Đa Thức</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Ví dụ 1: Phép chiếu modulo n -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(94,234,212,0.48)!important; border-left:5px solid #2dd4bf!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Phép chiếu chính tắc $\\rho_n : \\mathbb{Z} \\to \\mathbb{Z}/n\\mathbb{Z}$ ($k \\mapsto [k]_n$):</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fff1f2; margin-top:10px;">
                - Với mọi $a, b \\in \\mathbb{Z}$, theo định nghĩa phép toán trên $\\mathbb{Z}/n\\mathbb{Z}$:<br>
                $$\\begin{aligned} \\rho_n(a + b) &= [a + b]_n = [a]_n + [b]_n = \\rho_n(a) + \\rho_n(b) \\\\ \\rho_n(ab) &= [ab]_n = [a]_n[b]_n = \\rho_n(a)\\rho_n(b) \\end{aligned}$$
                - Vậy $\\rho_n$ là một <b>toàn cấu vành</b> bảo toàn đơn vị ($\\rho_n(1) = [1]_n$).
              </div>
            </div>

            <!-- Ví dụ 2: Đồng cấu thế đa thức -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(253,164,175,0.48)!important; border-left:5px solid #fb7185!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Đồng cấu thế giá trị $\\operatorname{ev}_a : R[x] \\to R$ ($f(x) \\mapsto f(a)$):</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fff1f2; margin-top:10px;">
                - Cho $R$ là vành giao hoán có $1$ và cố định phần tử $a \\in R$.<br>
                - Với hai đa thức bất kỳ $f(x), g(x) \\in R[x]$:<br>
                $$\\begin{aligned} (f + g)(a) &= f(a) + g(a) \\implies \\operatorname{ev}_a(f + g) = \\operatorname{ev}_a(f) + \\operatorname{ev}_a(g) \\\\ (f \\cdot g)(a) &= f(a)g(a) \\implies \\operatorname{ev}_a(fg) = \\operatorname{ev}_a(f)\\operatorname{ev}_a(g) \\end{aligned}$$
                - Vậy phép thay $x = a$ vào đa thức chính là một <b>toàn cấu vành</b>!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 5: PHẢN VÍ DỤ & LƯU Ý - ĐỒNG CẤU VÀNH KHÔNG BẢO TOÀN ĐƠN VỊ (BÀI TẬP 8.4)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(251,113,133,0.15), transparent 34%), linear-gradient(135deg, #0d1620, #172a3a 52%, #2c1928); border:1.5px solid rgba(253,164,175,0.48); color:#fff1f2;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.24); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              ⚠️ PHẢN VÍ DỤ KINH ĐIỂN (BÀI TẬP 8.4)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.86rem, 2.42vw, 2.28rem);">Đồng Cấu Vành Nói Chung KHÔNG Mặc Định Bảo Toàn Đơn Vị $1_R$!</h2>
            <p style="color:#fecdd3; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Trong lý thuyết nhóm, mọi đồng cấu đều thỏa $\\varphi(e_G) = e_K$. Nhưng trong lý thuyết vành, ảnh của đơn vị $f(1_R)$ <b>có thể khác</b> đơn vị $1_S$ của vành đích:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Phản ví dụ bài tập 8.4 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(244,63,94,0.5)!important; border-left:5px solid #fb7185!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.16rem, 1.5vw, 1.34rem);">1) Phản ví dụ: $\\delta : \\mathbb{Z} \\to M_2(\\mathbb{Z})$ với $\\delta(k) = \\begin{pmatrix} k & 0 \\\\ 0 & 0 \\end{pmatrix}$</b>
              <div style="font-size:clamp(1.05rem, 1.35vw, 1.2rem); line-height:1.68; color:#fff1f2; margin-top:8px;">
                - <b>Là đồng cấu vành (thậm chí đơn cấu):</b> Với mọi $a, b \\in \\mathbb{Z}$, $\\delta(a+b) = \\delta(a)+\\delta(b)$ và $\\delta(ab) = \\delta(a)\\delta(b)$ (do $E_{11}^2 = E_{11}$).<br>
                - <b>Nhưng KHÔNG bảo toàn đơn vị:</b> Đơn vị của $\\mathbb{Z}$ là $1$, song:<br>
                <div class="slide-math-display" style="background:rgba(10,16,24,0.92); border-color:#fb7185; color:#fecdd3; font-size:clamp(1.08rem, 1.4vw, 1.24rem); padding:8px; margin:8px 0 0;">
                  $$\\delta(1) = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix} \\neq \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = I_2 = 1_{M_2(\\mathbb{Z})}$$
                </div>
              </div>
            </div>

            <!-- Cột 2: Khi nào f(1_R) = 1_S? -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(94,234,212,0.48)!important; border-left:5px solid #2dd4bf!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.16rem, 1.5vw, 1.34rem);">2) Khi nào đồng cấu vành tự động thỏa $f(1_R) = 1_S$?</b>
              <div style="font-size:clamp(1.05rem, 1.35vw, 1.2rem); line-height:1.68; color:#fff1f2; margin-top:8px;">
                - Trong tập ảnh $\\operatorname{im} f$, phần tử $e' = f(1_R)$ luôn là đơn vị riêng của vành con $\\operatorname{im} f$ và thỏa $e'^2 = e'$.<br>
                - Do đó, ta <b>chắc chắn có $f(1_R) = 1_S$</b> trong hai trường hợp:<br>
                &nbsp;&nbsp;+ <b>(i) Khi $f$ là toàn ánh ($\operatorname{im} f = S$):</b> Vì đơn vị của $S$ là duy nhất.<br>
                &nbsp;&nbsp;+ <b>(ii) Khi $S$ là miền nguyên (và $f \\neq 0$):</b> Vì từ $e'^2 = e' = e' \\cdot 1_S$ và $e' \\neq 0_S$, luật giản ước trong miền nguyên $S$ ép $f(1_R) = 1_S$!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 6: ĐỊNH NGHĨA & ĐỊNH LÝ - HẠT NHÂN ker(f) & TẬP ẢNH im(f)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(251,113,133,0.15), transparent 34%), linear-gradient(135deg, #0d1620, #172a3a 52%, #2c1928); border:1.5px solid rgba(253,164,175,0.48); color:#fff1f2;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 ĐỊNH NGHĨA 8.3 &amp; 🏛️ ĐỊNH LÝ 8.4
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Hạt Nhân $\\ker f$, Tập Ảnh $\\operatorname{im} f$ &amp; Tiêu Chuẩn Đơn Cấu Vành</h2>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(18,30,42,0.94); border:1.5px solid #5eead4; color:#99f6e4; font-size:clamp(1.18rem, 1.54vw, 1.38rem); padding:14px 22px; margin:0;">
            $$\\ker f = \\{r \\in R \\mid f(r) = 0_S\\} \\trianglelefteq R, \\qquad \\operatorname{im} f = f(R) \\text{ là vành con của } S, \\qquad f \\text{ đơn ánh} \\iff \\ker f = \\{0_R\\}$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Chứng minh ker f là Iđêan -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(94,234,212,0.48)!important; border-left:5px solid #2dd4bf!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Chứng minh $\\ker f$ luôn là Iđêan hai phía của $R$:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fff1f2; margin-top:10px;">
                - Vì $f$ là đồng cấu nhóm cộng nên $(\\ker f, +) \\le (R, +)$.<br>
                - <b>Kiểm tra tính hấp thụ hai phía:</b> Với mọi $r \\in R$ và $x \\in \\ker f$ (tức $f(x) = 0_S$), ta có:<br>
                $$f(rx) = f(r)f(x) = f(r) \\cdot 0_S = 0_S \\implies rx \\in \\ker f$$
                $$f(xr) = f(x)f(r) = 0_S \\cdot f(r) = 0_S \\implies xr \\in \\ker f$$
                - Vậy <b style="color:#fde68a;">$\\ker f \\trianglelefteq R$</b>! $\\blacksquare$
              </div>
            </div>

            <!-- Cột 2: Hệ quả đồng cấu đi từ một trường -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(253,164,175,0.48)!important; border-left:5px solid #fb7185!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Hệ quả vàng: Đồng cấu khác $0$ từ Trường luôn Đơn ánh!</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fff1f2; margin-top:10px;">
                - Cho $F$ là một <b>trường</b> và $f : F \\to S$ là đồng cấu vành khác không ($\\operatorname{im} f \\neq \\{0_S\\}$).<br>
                - Vì $\\ker f \\trianglelefteq F$, mà trường $F$ chỉ có đúng $2$ iđêan là $\\{0_F\\}$ và $F$ (Chương 7).<br>
                - Do $f \\neq 0 \\implies \\ker f \\neq F \\implies \\mathbf{\\ker f = \\{0_F\\}}$.<br>
                - Vậy <b>$f$ bắt buộc là một đơn cấu vành</b>!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 7: ĐỊNH LÝ ĐẲNG CẤU THỨ NHẤT CHO VÀNH & PHƯƠNG PHÁP 3 BƯỚC (MỤC 8.4)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(251,113,133,0.15), transparent 34%), linear-gradient(135deg, #0d1620, #172a3a 52%, #2c1928); border:1.5px solid rgba(253,164,175,0.48); color:#fff1f2;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              🏛️ ĐỊNH LÝ TRỌNG TÂM (ĐỊNH LÝ 8.5)
            </span>
            <h2 style="color:#ffffff; margin:0 0 6px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Định Lý Đẳng Cấu Thứ Nhất Cho Vành &amp; Quy Trình $3$ Bước</h2>
            <p style="color:#fecdd3; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Cho $f : R \\to S$ là một đồng cấu vành. Ánh xạ cảm sinh $\\Phi(r + \\ker f) = f(r)$ là một <b>đẳng cấu vành</b>:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(18,30,42,0.94); border:2px solid #fde68a; color:#fef08a; font-size:clamp(1.26rem, 1.7vw, 1.5rem); padding:12px 24px; margin:0;">
            $$\\frac{R}{\\ker f} \\;\\cong\\; \\operatorname{im} f \\qquad \\Big(\\text{Nếu } f \\text{ là toàn cấu thì } \\frac{R}{\\ker f} \\cong S\\Big)$$
          </div>

          <div class="slide-grid-3 anim-card anim-d2" style="flex:1; align-items:stretch; gap:18px; margin:0;">
            <!-- Bước 1 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(253,164,175,0.48)!important; border-top:5px solid #fb7185!important; padding:18px 22px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.16rem, 1.48vw, 1.32rem); margin-bottom:8px;">Bước 1: Dựng đồng cấu $f$</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fff1f2;">
                - Thiết lập ánh xạ tự nhiên <b style="color:#fde68a;">$f : R \\to S$</b>.<br>
                - Kiểm tra bảo toàn cả hai phép toán: $f(a+b) = f(a)+f(b)$ và $f(ab) = f(a)f(b)$.
              </div>
            </div>

            <!-- Bước 2 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(94,234,212,0.48)!important; border-top:5px solid #2dd4bf!important; padding:18px 22px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.16rem, 1.48vw, 1.32rem); margin-bottom:8px;">Bước 2: Chứng minh toàn ánh</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fff1f2;">
                - Với mọi $s \\in S$, chỉ ra phần tử tạo ảnh $r \\in R$ sao cho $f(r) = s$.<br>
                - Kết luận <b style="color:#5eead4;">$\\operatorname{im} f = S$</b>.
              </div>
            </div>

            <!-- Bước 3 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(251,191,36,0.48)!important; border-top:5px solid #fbbf24!important; padding:18px 22px; border-radius:14px;">
              <b style="color:#fde68a; font-size:clamp(1.16rem, 1.48vw, 1.32rem); margin-bottom:8px;">Bước 3: Tìm $\\ker f = I$</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fff1f2;">
                - Giải phương trình $f(r) = 0_S$ để tìm hạt nhân và chốt <b style="color:#fde68a;">$\\ker f = I$</b>.<br>
                - Kết luận ngay: $R/I = R/\\ker f \\cong \\operatorname{im} f = S$!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 8: VÍ DỤ THỰC CHIẾN 1 - BÀI TẬP 8.10 (F[x]/(x - a) ~= F)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(251,113,133,0.15), transparent 34%), linear-gradient(135deg, #0d1620, #172a3a 52%, #2c1928); border:1.5px solid rgba(253,164,175,0.48); color:#fff1f2;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(45,212,191,0.22); border:1.5px solid #2dd4bf; border-radius:999px; color:#5eead4; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ THỰC CHIẾN 1 (MỤC 8.6 &amp; BÀI TẬP 8.10)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Nhận Diện Vành Thương Đa Thức: $\\dfrac{F[x]}{(x - a)} \\;\\cong\\; F$</h2>
            <p style="color:#fecdd3; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Cho $F$ là một trường và cố định $a \\in F$. Chứng minh $\\dfrac{F[x]}{(x - a)} \\cong F$ bằng phương pháp $3$ bước:
            </p>
          </div>

          <div class="slide-glass-card anim-card anim-d1" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.84)!important; border:1.5px solid rgba(94,234,212,0.5)!important; border-left:6px solid #2dd4bf!important; padding:22px 26px; border-radius:14px;">
            <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.75; color:#fff1f2;">
              <b>1) Bước 1 (Xây dựng đồng cấu thế):</b> Xét ánh xạ tính giá trị đa thức tại $a$: <b style="color:#5eead4;">$\\operatorname{ev}_a : F[x] \\to F,\\; f(x) \\mapsto f(a)$</b>.<br>
              - Ta có $\\operatorname{ev}_a(f + g) = (f + g)(a) = f(a) + g(a)$ và $\\operatorname{ev}_a(fg) = (fg)(a) = f(a)g(a)$, nên $\\operatorname{ev}_a$ là đồng cấu vành.<br>
              <b>2) Bước 2 (Chứng minh toàn ánh):</b> Với mọi hằng số $c \\in F$, chọn đa thức hằng $f(x) = c \\in F[x]$, ta có $\\operatorname{ev}_a(f) = c$. Vậy $\\operatorname{im}(\\operatorname{ev}_a) = F$.<br>
              <b>3) Bước 3 (Tìm hạt nhân theo Định lý Bézout đa thức):</b><br>
              $$f(x) \\in \\ker(\\operatorname{ev}_a) \\iff f(a) = 0 \\iff (x - a) \\mid f(x) \\iff f(x) \\in (x - a)$$
              - Vậy $\\ker(\\operatorname{ev}_a) = (x - a)$. Áp dụng Định lý Đẳng cấu 1: <b style="color:#fde68a;">$\\dfrac{F[x]}{(x - a)} \\cong F$</b>! (Do $F$ là trường nên $(x - a)$ luôn là iđêan cực đại). $\\blacksquare$
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 9: VÍ DỤ THỰC CHIẾN 2 - CHỨNG MINH R[x]/(x^2+1) ~= C BẰNG 3 BƯỚC
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(251,113,133,0.15), transparent 34%), linear-gradient(135deg, #0d1620, #172a3a 52%, #2c1928); border:1.5px solid rgba(253,164,175,0.48); color:#fff1f2;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(45,212,191,0.22); border:1.5px solid #2dd4bf; border-radius:999px; color:#5eead4; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ THỰC CHIẾN 2
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Chứng Minh $\\dfrac{\\mathbb{R}[x]}{(x^2 + 1)} \\;\\cong\\; \\mathbb{C}$ Bằng Đồng Cấu Thế Số Ảo $i$</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Bước 1 & Bước 2 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(253,164,175,0.48)!important; border-left:5px solid #fb7185!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Bước 1 &amp; Bước 2 (Dựng toàn cấu $\\operatorname{ev}_i$):</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fff1f2; margin-top:10px;">
                - <b>Bước 1:</b> Xét đồng cấu thế $\\operatorname{ev}_i : \\mathbb{R}[x] \\to \\mathbb{C}$ định bởi <b style="color:#fde68a;">$\\operatorname{ev}_i(f(x)) = f(i)$</b>.<br>
                - <b>Bước 2 (Toàn ánh):</b> Với mọi số phức $a + bi \\in \\mathbb{C}$ ($a, b \\in \\mathbb{R}$), chọn nhị thức bậc nhất $f(x) = a + bx \\in \\mathbb{R}[x]$.<br>
                - Khi đó $\\operatorname{ev}_i(a + bx) = a + bi \\implies \\mathbf{\\operatorname{im}(\\operatorname{ev}_i) = \\mathbb{C}}$.
              </div>
            </div>

            <!-- Cột 2: Bước 3 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(94,234,212,0.48)!important; border-left:5px solid #2dd4bf!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Bước 3 (Xác định hạt nhân $\\ker(\\operatorname{ev}_i)$):</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fff1f2; margin-top:10px;">
                - Chia $f(x) \\in \\mathbb{R}[x]$ cho $x^2 + 1$: $f(x) = (x^2 + 1)q(x) + (a + bx)$ ($a, b \\in \\mathbb{R}$).<br>
                - Thay $x = i$ (với $i^2 + 1 = 0$):<br>
                $$f(i) = 0 \\iff a + bi = 0 \\iff a = b = 0 \\iff (x^2 + 1) \\mid f(x)$$
                - Suy ra $\\ker(\\operatorname{ev}_i) = (x^2 + 1) \\implies \\mathbf{\\mathbb{R}[x]/(x^2 + 1) \\cong \\mathbb{C}}$! $\\blacksquare$
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 10: ĐỊNH LÝ 8.6 - BỘ BA ĐỊNH LÝ CẤU TRÚC MỞ RỘNG CHO VÀNH
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(251,113,133,0.15), transparent 34%), linear-gradient(135deg, #0d1620, #172a3a 52%, #2c1928); border:1.5px solid rgba(253,164,175,0.48); color:#fff1f2;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              🏛️ ĐỊNH LÝ (ĐỊNH LÝ 8.6)
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Định Lý Đẳng Cấu Thứ Hai, Thứ Ba &amp; Định Lý Tương Ứng Cho Vành</h2>
          </div>

          <div class="slide-grid-3 anim-card anim-d1" style="flex:1; align-items:stretch; gap:18px; margin:0;">
            <!-- Định lý đẳng cấu 2 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(253,164,175,0.48)!important; border-top:5px solid #fb7185!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.15rem, 1.48vw, 1.3rem); margin-bottom:8px;">1) Định Lý Đẳng Cấu 2 (Hình thoi)</b>
              <div class="slide-math-display" style="background:rgba(10,16,24,0.92); border-color:#fb7185; color:#fecdd3; font-size:clamp(1.14rem, 1.48vw, 1.32rem); padding:10px; margin:8px 0;">
                $$\\frac{S + I}{I} \\;\\cong\\; \\frac{S}{S \\cap I}$$
              </div>
              <div style="font-size:clamp(1.03rem, 1.32vw, 1.18rem); line-height:1.62; color:#fff1f2;">
                - Với $S$ là vành con của $R$ và $I \\trianglelefteq R$: tổng $S + I$ là vành con của $R$, và $S \\cap I \\trianglelefteq S$.
              </div>
            </div>

            <!-- Định lý đẳng cấu 3 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(94,234,212,0.48)!important; border-top:5px solid #2dd4bf!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.15rem, 1.48vw, 1.3rem); margin-bottom:8px;">2) Định Lý Đẳng Cấu 3 (Rút gọn)</b>
              <div class="slide-math-display" style="background:rgba(10,16,24,0.92); border-color:#2dd4bf; color:#99f6e4; font-size:clamp(1.14rem, 1.48vw, 1.32rem); padding:10px; margin:8px 0;">
                $$\\frac{R/I}{J/I} \\;\\cong\\; \\frac{R}{J}$$
              </div>
              <div style="font-size:clamp(1.03rem, 1.32vw, 1.18rem); line-height:1.62; color:#fff1f2;">
                - Với hai iđêan $I, J \\trianglelefteq R$ thỏa mãn $I \\subseteq J$: khi đó $J/I \\trianglelefteq R/I$ và thương của thương giản ước được $I$.
              </div>
            </div>

            <!-- Định lý tương ứng -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(251,191,36,0.48)!important; border-top:5px solid #fbbf24!important; padding:20px 22px; border-radius:14px;">
              <b style="color:#fde68a; font-size:clamp(1.15rem, 1.48vw, 1.3rem); margin-bottom:8px;">3) Định Lý Tương Ứng Iđêan</b>
              <div class="slide-math-display" style="background:rgba(10,16,24,0.92); border-color:#fbbf24; color:#fef08a; font-size:clamp(1.06rem, 1.38vw, 1.22rem); padding:10px; margin:8px 0;">
                $$\\{J \\trianglelefteq R \\mid I \\subseteq J\\} \\leftrightarrow \\{K \\trianglelefteq R/I\\}$$
              </div>
              <div style="font-size:clamp(1.03rem, 1.32vw, 1.18rem); line-height:1.62; color:#fff1f2;">
                - Song ánh $J \\mapsto J/I$ bảo toàn cả tính <b>nguyên tố</b> lẫn tính <b>cực đại</b> ($J$ cực đại $\\iff J/I$ cực đại)!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 11: ĐỊNH NGHĨA - ĐẶC SỐ CỦA VÀNH char(R) (MỤC 8.5)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(251,113,133,0.15), transparent 34%), linear-gradient(135deg, #0d1620, #172a3a 52%, #2c1928); border:1.5px solid rgba(253,164,175,0.48); color:#fff1f2;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.22); border:1.5px solid #fda4af; border-radius:999px; color:#fecdd3; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 ĐỊNH NGHĨA (MỤC 8.5 - ĐỊNH NGHĨA 8.7)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Đặc Số Của Vành $\\operatorname{char}(R)$ (Characteristic of a Ring)</h2>
            <p style="color:#fecdd3; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Cho vành $R$. Tập các số nguyên làm triệt tiêu toàn bộ vành $A_R = \\{n \\in \\mathbb{Z} \\mid n \\cdot r = 0_R, \\forall r \\in R\\}$ là một iđêan của $\\mathbb{Z}$, nên có dạng duy nhất $A_R = m\\mathbb{Z}$ ($m \\ge 0$). Số nguyên $m$ gọi là <b>đặc số</b> của vành, ký hiệu <b style="color:#fde68a;">$\\operatorname{char}(R) = m$</b>:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Hai trạng thái m > 0 và m = 0 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(253,164,175,0.48)!important; border-top:5px solid #fb7185!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(i) Định nghĩa tổng quát cho mọi vành $R$:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fff1f2; margin-top:10px;">
                - <b>Nếu tồn tại $n \\in \\mathbb{Z}^+$ sao cho $n \\cdot r = 0_R, \\forall r \\in R$:</b><br>
                &nbsp;&nbsp;$\\operatorname{char}(R)$ là <b>số nguyên dương nhỏ nhất $m &gt; 0$</b> thỏa mãn $m \\cdot r = 0_R$ với mọi $r \\in R$.<br>
                - <b>Nếu không tồn tại $n \\in \\mathbb{Z}^+$ nào như vậy:</b><br>
                &nbsp;&nbsp;Khi đó $A_R = \\{0\\}$, và ta nói vành $R$ có <b>đặc số bằng $0$</b> ($\\operatorname{char}(R) = 0$).
              </div>
            </div>

            <!-- Cột 2: Cách tính nhanh khi R có đơn vị 1_R -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(94,234,212,0.48)!important; border-top:5px solid #2dd4bf!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(ii) Quy tắc tính cực nhanh khi $R$ có đơn vị $1_R$:</b>
              <div class="slide-math-display" style="background:rgba(10,16,24,0.92); border-color:#2dd4bf; color:#99f6e4; font-size:clamp(1.12rem, 1.44vw, 1.28rem); padding:10px; margin:10px 0;">
                $$n \\cdot r = n(1_R \\cdot r) = (n \\cdot 1_R)r$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.7; color:#fff1f2;">
                - Do đó $n \\cdot r = 0_R, \\forall r \\in R \\iff \\mathbf{n \\cdot 1_R = 0_R}$!<br>
                - Vậy $\\operatorname{char}(R)$ chính là số nguyên dương $m$ nhỏ nhất để $m \\cdot 1_R = 0_R$ (hoặc bằng $0$ nếu $\\operatorname{ord}_+(1_R) = \\infty$).
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 12: ĐỊNH LÝ 8.8 - ĐẶC SỐ CỦA MIỀN NGUYÊN VÀ TRƯỜNG (BÀI TẬP 8.24)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(251,113,133,0.15), transparent 34%), linear-gradient(135deg, #0d1620, #172a3a 52%, #2c1928); border:1.5px solid rgba(253,164,175,0.48); color:#fff1f2;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ TRỌNG TÂM (ĐỊNH LÝ 8.8 &amp; BÀI TẬP 8.24)
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Đặc Số Của Một Miền Nguyên (Hoặc Trường) Chỉ Có Thể Là $0$ Hoặc $p$!</h2>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(18,30,42,0.94); border:2px solid #fde68a; color:#fef08a; font-size:clamp(1.24rem, 1.65vw, 1.48rem); padding:14px 24px; margin:0;">
            $$\\text{Nếu } R \\text{ là một miền nguyên (hoặc trường)} \\quad \\Longrightarrow \\quad \\operatorname{char}(R) = 0 \\;\\text{ hoặc }\\; \\operatorname{char}(R) = p \\text{ (nguyên tố)}$$
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(94,234,212,0.48)!important; padding:22px 26px; border-radius:14px;">
            <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.36rem); display:block; margin-bottom:10px;">🔍 Chứng minh phản chứng vì sao đặc số của miền nguyên không bao giờ là hợp số:</b>
            <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.76; color:#fff1f2;">
              - Vì $R$ là miền nguyên nên $1_R \\neq 0_R$, suy ra $\\operatorname{char}(R) \\neq 1$. Nếu $\\operatorname{char}(R) = 0$ thì định lý hiển nhiên đúng.<br>
              - Xét trường hợp $\\operatorname{char}(R) = n &gt; 1$. Giả sử phản chứng $n$ là một <b>hợp số</b>: <b style="color:#fda4af;">$n = a \\cdot b$</b> với $1 &lt; a, b &lt; n$.<br>
              - Khi đó trong miền nguyên $R$, ta có:<br>
              $$(a \\cdot 1_R)(b \\cdot 1_R) = (ab) \\cdot 1_R = n \\cdot 1_R = 0_R$$
              - Vì miền nguyên $R$ <b>không có ước của không</b>, suy ra <b style="color:#fde68a;">$a \\cdot 1_R = 0_R$</b> hoặc <b style="color:#fde68a;">$b \\cdot 1_R = 0_R$</b>, mâu thuẫn trực tiếp với tính nhỏ nhất của đặc số $n$ (do $1 &lt; a, b &lt; n$)! Vậy $n = p$ bắt buộc là số nguyên tố! $\\blacksquare$
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 13: VÍ DỤ SOI SÁNG VỀ ĐẶC SỐ & ĐỒNG NHẤT THỨC FRESHMAN'S DREAM
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(251,113,133,0.15), transparent 34%), linear-gradient(135deg, #0d1620, #172a3a 52%, #2c1928); border:1.5px solid rgba(253,164,175,0.48); color:#fff1f2;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(45,212,191,0.22); border:1.5px solid #2dd4bf; border-radius:999px; color:#5eead4; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ &amp; ỨNG DỤNG ĐẶC SỐ $p$
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Bảng Đặc Số Quen Thuộc &amp; Đồng Cấu Frobenius $(a + b)^p = a^p + b^p$</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Bảng đặc số các vành quen thuộc -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(94,234,212,0.48)!important; border-left:5px solid #2dd4bf!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#5eead4; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Đặc số của các vành và trường chuẩn mực:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fff1f2; margin-top:10px;">
                - <b>Các vành có đặc số $0$:</b><br>
                $$\\operatorname{char}(\\mathbb{Z}) = \\operatorname{char}(\\mathbb{Q}) = \\operatorname{char}(\\mathbb{R}) = \\operatorname{char}(\\mathbb{C}) = 0$$
                - <b>Vành đồng dư $\\mathbb{Z}/n\\mathbb{Z}$:</b> Có $\\operatorname{char}(\\mathbb{Z}/n\\mathbb{Z}) = n$ (vì $n \\cdot [1]_n = [0]_n$).<br>
                - <b>Trường hữu hạn $\\mathbb{Z}/p\\mathbb{Z} = \\mathbb{F}_p$:</b> Có $\\operatorname{char}(\\mathbb{F}_p) = p$.<br>
                - <b>Vành đa thức $R[x]$:</b> Luôn có $\\operatorname{char}(R[x]) = \\operatorname{char}(R)$.
              </div>
            </div>

            <!-- Cột 2: Đồng cấu Frobenius trong đặc số p -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border:1.5px solid rgba(253,164,175,0.48)!important; border-left:5px solid #fb7185!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Kỳ tích trong vành giao hoán có $\\operatorname{char}(R) = p$:</b>
              <div class="slide-math-display" style="background:rgba(10,16,24,0.92); border-color:#fb7185; color:#fecdd3; font-size:clamp(1.16rem, 1.5vw, 1.34rem); padding:10px; margin:10px 0;">
                $$(a + b)^p = a^p + b^p \\quad (\\text{Đồng cấu Frobenius } \\Phi(x) = x^p)$$
              </div>
              <div style="font-size:clamp(1.05rem, 1.35vw, 1.2rem); line-height:1.68; color:#fff1f2;">
                - Vì với mọi $1 \\le k \\le p - 1$, hệ số nhị thức $\\binom{p}{k} = \\dfrac{p!}{k!(p-k)!}$ luôn chia hết cho số nguyên tố $p$.<br>
                - Do $\\operatorname{char}(R) = p$, mọi số hạng trung gian $\\binom{p}{k}a^{p-k}b^k$ đều triệt tiêu về $0_R$!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 14: BẢNG ĐỐI CHIẾU SONG HÀNH TOÀN DIỆN NHÓM VS VÀNH (MỤC 8.7)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:22px 30px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(251,113,133,0.15), transparent 34%), linear-gradient(135deg, #0d1620, #172a3a 52%, #2c1928); border:1.5px solid rgba(253,164,175,0.48); color:#fff1f2;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(251,191,36,0.22); border:1.5px solid #fbbf24; border-radius:999px; color:#fde68a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              📊 BẢNG ĐỐI CHIẾU SONG HÀNH (MỤC 8.7)
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.85rem, 2.4vw, 2.25rem);">Sự Tương Đồng Cấu Trúc Giữa Lý Thuyết Nhóm &amp; Lý Thuyết Vành</h2>
          </div>

          <div class="anim-card anim-d1" style="flex:1; display:flex; flex-direction:column; justify-content:center; overflow-x:auto;">
            <table style="width:100%; height:100%; border-collapse:collapse; font-size:clamp(0.98rem, 1.28vw, 1.16rem); background:rgba(18,30,42,0.88); border:1.5px solid rgba(253,164,175,0.5); border-radius:14px; overflow:hidden;">
              <thead>
                <tr style="background:rgba(244,63,94,0.25); color:#fde68a; text-align:left; font-size:clamp(1.02rem, 1.32vw, 1.2rem);">
                  <th style="padding:10px 14px; border-bottom:1.5px solid rgba(253,164,175,0.45);">Phương diện đại số</th>
                  <th style="padding:10px 14px; border-bottom:1.5px solid rgba(253,164,175,0.45);">Lý thuyết Nhóm (Chương 1 – 5)</th>
                  <th style="padding:10px 14px; border-bottom:1.5px solid rgba(253,164,175,0.45);">Lý thuyết Vành (Chương 6 – 8)</th>
                </tr>
              </thead>
              <tbody style="color:#fff1f2; line-height:1.52;">
                <tr style="border-bottom:1px solid rgba(253,164,175,0.2);">
                  <td style="padding:9px 14px; font-weight:800; color:#fde68a;">Cấu trúc con nội tại</td>
                  <td style="padding:9px 14px;">Nhóm con $H \\le G$ ($xy^{-1} \\in H$)</td>
                  <td style="padding:9px 14px;">Vành con $S \\subseteq R$ ($x - y \\in S$ và $xy \\in S$)</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(253,164,175,0.2);">
                  <td style="padding:9px 14px; font-weight:800; color:#fda4af;">Cấu trúc tạo thương</td>
                  <td style="padding:9px 14px; color:#5eead4;"><b>Nhóm con chuẩn tắc</b> $N \\trianglelefteq G$ ($gNg^{-1} \\subseteq N$)</td>
                  <td style="padding:9px 14px; color:#5eead4;"><b>Iđêan hai phía</b> $I \\trianglelefteq R$ ($rx, xr \\in I, \\forall r \\in R$)</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(253,164,175,0.2);">
                  <td style="padding:9px 14px; font-weight:800; color:#5eead4;">Ánh xạ bảo toàn</td>
                  <td style="padding:9px 14px;">Đồng cấu nhóm $\\varphi(ab) = \\varphi(a)\\varphi(b)$ (luôn giữ $e$)</td>
                  <td style="padding:9px 14px;">Đồng cấu vành $f(a+b)=f(a)+f(b),\\; f(ab)=f(a)f(b)$</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(253,164,175,0.2);">
                  <td style="padding:9px 14px; font-weight:800; color:#fde68a;">Hạt nhân &amp; Đơn ánh</td>
                  <td style="padding:9px 14px;">$\\ker\\varphi \\trianglelefteq G$; &nbsp; $\\varphi$ đơn ánh $\\iff \\ker\\varphi = \\{e_G\\}$</td>
                  <td style="padding:9px 14px;">$\\ker f \\trianglelefteq R$; &nbsp; $f$ đơn ánh $\\iff \\ker f = \\{0_R\\}$</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(253,164,175,0.2);">
                  <td style="padding:9px 14px; font-weight:800; color:#fda4af;">Định lý đẳng cấu 1</td>
                  <td style="padding:9px 14px; font-weight:700; color:#fde68a;">$G / \\ker\\varphi \\;\\cong\\; \\operatorname{im}\\varphi$</td>
                  <td style="padding:9px 14px; font-weight:700; color:#fde68a;">$R / \\ker f \\;\\cong\\; \\operatorname{im} f$</td>
                </tr>
                <tr>
                  <td style="padding:9px 14px; font-weight:800; color:#5eead4;">Đại lượng chu kỳ</td>
                  <td style="padding:9px 14px;">Cấp nhóm $|G|$ và cấp phần tử $\\operatorname{ord}(a)$</td>
                  <td style="padding:9px 14px;">Đặc số của vành $\\operatorname{char}(R)$ (miền nguyên: $0$ hoặc $p$)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 15: TỔNG KẾT CHƯƠNG 8 & CẦU NỐI SANG CHƯƠNG 9 (PHẦN III: TRƯỜNG)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(251,113,133,0.15), transparent 34%), linear-gradient(135deg, #0d1620, #172a3a 52%, #2c1928); border:1.5px solid rgba(253,164,175,0.48); color:#fff1f2;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.22); border:1.5px solid #fda4af; border-radius:999px; color:#fecdd3; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              🎯 TỔNG KẾT CHƯƠNG 8 &amp; PHẦN II
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Bản Đồ Bốn Trụ Cột Chương 8 &amp; Khởi Hành Sang Lý Thuyết Trường</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:16px; margin:0;">
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border-left:5px solid #fb7185!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fda4af; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">1) Đồng cấu vành &amp; Ranh giới bảo toàn đơn vị</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fff1f2; margin-top:6px;">
                - Bảo toàn đồng thời $f(a+b)=f(a)+f(b)$ và $f(ab)=f(a)f(b)$.<br>
                - Luôn có $f(0_R)=0_S$, nhưng $f(1_R)$ có thể khác $1_S$ (trừ khi $f$ toàn ánh hoặc $S$ là miền nguyên).
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border-left:5px solid #2dd4bf!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#5eead4; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">2) Hạt nhân $\\ker f \\trianglelefteq R$ &amp; Tiêu chuẩn đơn cấu</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fff1f2; margin-top:6px;">
                - $\\ker f = \\{r \\in R \\mid f(r) = 0_S\\}$ luôn là iđêan hai phía; $f$ đơn ánh $\\iff \\ker f = \\{0_R\\}$.<br>
                - Mọi đồng cấu khác không đi từ một trường $F$ đều là đơn cấu!
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border-left:5px solid #fde68a!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fde68a; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">3) Định lý Đẳng cấu Vành 1 &amp; Đồng cấu thế $\\operatorname{ev}_a$</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fff1f2; margin-top:6px;">
                - $R / \\ker f \\cong \\operatorname{im} f$.<br>
                - Ứng dụng quy trình $3$ bước: $F[x]/(x-a) \\cong F$ và $\\mathbb{R}[x]/(x^2+1) \\cong \\mathbb{C}$.
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(18,30,42,0.82)!important; border-left:5px solid #67e8f9!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#67e8f9; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">4) Đặc số của vành $\\operatorname{char}(R)$</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fff1f2; margin-top:6px;">
                - Khi $R$ có đơn vị $1_R$: $\\operatorname{char}(R)$ là số nguyên dương $m$ nhỏ nhất để $m \\cdot 1_R = 0_R$ (hoặc $0$).<br>
                - Nếu $R$ là miền nguyên hoặc trường: $\\operatorname{char}(R) = 0$ hoặc $\\operatorname{char}(R) = p$ (nguyên tố).
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(18,30,42,0.94)!important; border:1.5px solid #fde68a!important; color:#fef08a!important; font-size:clamp(1.06rem, 1.36vw, 1.22rem); text-align:center; line-height:1.55;">
            <b>🚀 Tiếp nối Chương 9 (Trường Con &amp; Trường Các Thương $\\operatorname{Frac}(R)$):</b> Làm thế nào để nhúng một miền nguyên bất kỳ (như $\\mathbb{Z}$ hay $F[x]$) vào một trường nhỏ nhất chứa nó qua phép dựng phân số hình thức $\\dfrac{a}{b}$?
          </div>
        </div>
      `
    }
  ],
  "9": [
    // ========================================================
    // SLIDE 1: TRANG BÌA CĂN GIỮA - KIỆT TÁC PHONG CẢNH NHẬT BẢN CHI TIẾT
    // ========================================================
    {
      html: `
        <div style="position: relative; width: 100%; height: 100%; min-height: 100%; display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center; padding: 26px 34px 22px; box-sizing: border-box; overflow: hidden; border-radius: 16px; background: radial-gradient(circle at 50% 24%, rgba(239, 68, 68, 0.32), transparent 48%), radial-gradient(ellipse at 15% 86%, rgba(250, 204, 21, 0.24), transparent 42%), radial-gradient(ellipse at 85% 86%, rgba(74, 222, 128, 0.18), transparent 40%), linear-gradient(160deg, #100e1a 0%, #24121d 45%, #3b1715 78%, #110b10 100%); border: 1.5px solid rgba(248, 113, 113, 0.62); color: #fffbeb; box-shadow: 0 18px 45px rgba(18, 10, 14, 0.88);">
          
          <!-- VECTOR SVG NỀN: BỨC TRANH UKIYO-E NHẬT BẢN CHI TIẾT CAO -->
          <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0;">
            <defs>
              <radialGradient id="c9SunGlow" cx="50%" cy="27%" r="45%">
                <stop offset="0%" stop-color="#fef08a" stop-opacity="0.45"/>
                <stop offset="38%" stop-color="#ef4444" stop-opacity="0.28"/>
                <stop offset="72%" stop-color="#991b1b" stop-opacity="0.08"/>
                <stop offset="100%" stop-color="#100e1a" stop-opacity="0"/>
              </radialGradient>
              <linearGradient id="c9Hinomaru" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#fef08a" stop-opacity="0.88"/>
                <stop offset="28%" stop-color="#f87171" stop-opacity="0.78"/>
                <stop offset="75%" stop-color="#dc2626" stop-opacity="0.62"/>
                <stop offset="100%" stop-color="#7f1d1d" stop-opacity="0.25"/>
              </linearGradient>
              <linearGradient id="c9FujiSlope" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#3730a3" stop-opacity="0.88"/>
                <stop offset="55%" stop-color="#1e1b4b" stop-opacity="0.94"/>
                <stop offset="100%" stop-color="#120c18" stop-opacity="0.98"/>
              </linearGradient>
              <linearGradient id="c9SnowCap" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.98"/>
                <stop offset="65%" stop-color="#e2e8f0" stop-opacity="0.88"/>
                <stop offset="100%" stop-color="#94a3b8" stop-opacity="0.15"/>
              </linearGradient>
              <linearGradient id="c9ToriiRed" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#b91c1c"/>
                <stop offset="50%" stop-color="#ef4444"/>
                <stop offset="100%" stop-color="#991b1b"/>
              </linearGradient>
              <linearGradient id="c9LakeMirror" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#2a121c" stop-opacity="0.92"/>
                <stop offset="45%" stop-color="#170d1c" stop-opacity="0.96"/>
                <stop offset="100%" stop-color="#09060d" stop-opacity="1"/>
              </linearGradient>
              <linearGradient id="c9CraneWing" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.98"/>
                <stop offset="75%" stop-color="#fef2f2" stop-opacity="0.92"/>
                <stop offset="100%" stop-color="#cbd5e1" stop-opacity="0.75"/>
              </linearGradient>
              <!-- Mẫu cánh lá phong Nhật Bản 5 thùy (Momiji Leaf) -->
              <g id="momijiLeaf">
                <path d="M0,-12 L3,-4 L11,-7 L6,0 L12,5 L4,5 L5,11 L0,6 L-5,11 L-4,5 L-12,5 L-6,0 L-11,-7 L-3,-4 Z"/>
              </g>
            </defs>

            <!-- 1. BẦU TRỜI ĐÊM PHÙ TANG, HÀO QUANG KIM MÔN & VẦNG MẶT TRỜI HINOMARU -->
            <circle cx="500" cy="210" r="360" fill="url(#c9SunGlow)"/>
            <!-- Hoa văn tia sáng mặt trời mờ cổ điển -->
            <g transform="translate(500, 210)" stroke="#fde047" stroke-width="1" opacity="0.22">
              <circle r="215" fill="none" stroke-dasharray="12 6"/>
              <circle r="175" fill="none" stroke="#f87171" stroke-width="1.4" stroke-dasharray="4 8"/>
              <line x1="-260" y1="0" x2="260" y2="0" stroke-dasharray="6 8"/>
              <line x1="-184" y1="-184" x2="184" y2="184" stroke-dasharray="6 8"/>
              <line x1="184" y1="-184" x2="-184" y2="184" stroke-dasharray="6 8"/>
            </g>
            <!-- Đĩa Mặt Trời Đỏ Hinomaru -->
            <circle cx="500" cy="210" r="142" fill="url(#c9Hinomaru)" stroke="#fde047" stroke-width="1.8" stroke-opacity="0.55"/>

            <!-- Dải mây truyền thống Ukiyo-e (Suyari Kasumi) dát viền vàng -->
            <g fill="rgba(253, 224, 71, 0.14)" stroke="rgba(253, 224, 71, 0.35)" stroke-width="1">
              <rect x="65" y="130" width="185" height="12" rx="6"/>
              <rect x="115" y="148" width="135" height="9" rx="4.5"/>
              <rect x="745" y="118" width="190" height="12" rx="6"/>
              <rect x="705" y="136" width="140" height="9" rx="4.5"/>
            </g>

            <!-- 2. NÚI PHÚ SĨ TUYẾT TRẮNG & DÃY ĐỒI XA -->
            <path d="M0,410 Q140,345 290,385 T680,375 Q840,335 1000,400 L1000,450 L0,450 Z" fill="#1b1124" opacity="0.75"/>
            <g opacity="0.88">
              <!-- Thân núi Phú Sĩ -->
              <path d="M110,435 Q355,342 450,188 L550,188 Q645,342 890,435 Z" fill="url(#c9FujiSlope)" stroke="#818cf8" stroke-width="0.8" stroke-opacity="0.4"/>
              <!-- Các sườn băng tuyết chảy dài trên đỉnh Phú Sĩ -->
              <path d="M450,188 L550,188 Q576,235 602,272 L572,254 L554,282 L530,256 L508,288 L500,252 L492,288 L470,256 L446,282 L428,254 L398,272 Q424,235 450,188 Z" fill="url(#c9SnowCap)"/>
              <!-- Đường gân tuyết sáng -->
              <path d="M475,188 L465,245 M500,188 L500,248 M525,188 L535,245" stroke="#ffffff" stroke-width="1.5" opacity="0.65"/>
            </g>

            <!-- 3. MẶT HỒ GƯƠNG PHẢN CHIẾU & HOA VĂN SÓNG SEIGAIHA -->
            <rect x="0" y="425" width="1000" height="175" fill="url(#c9LakeMirror)"/>
            <line x1="0" y1="425" x2="1000" y2="425" stroke="#fde047" stroke-width="1.2" opacity="0.5"/>
            <!-- Bóng mặt trời vàng cam lung linh trên mặt nước -->
            <g fill="#f87171" opacity="0.22">
              <ellipse cx="500" cy="442" rx="95" ry="4"/>
              <ellipse cx="500" cy="454" rx="75" ry="3.5" fill="#fde047"/>
              <ellipse cx="500" cy="466" rx="55" ry="3"/>
              <ellipse cx="500" cy="478" rx="38" ry="2.5" fill="#fde047"/>
            </g>

            <!-- 4. CẦU GỖ VÒM ĐỎ TAIKO-BASHI (CẦU NHÚNG CHÍNH TẮC R -> Frac(R)) -->
            <g transform="translate(500, 442)" opacity="0.78" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.6))">
              <!-- Trụ cầu gỗ -->
              <line x1="-135" y1="-2" x2="-135" y2="35" stroke="#991b1b" stroke-width="4.5"/>
              <line x1="-70" y1="-18" x2="-70" y2="32" stroke="#991b1b" stroke-width="4.5"/>
              <line x1="0" y1="-25" x2="0" y2="30" stroke="#991b1b" stroke-width="4.5"/>
              <line x1="70" y1="-18" x2="70" y2="32" stroke="#991b1b" stroke-width="4.5"/>
              <line x1="135" y1="-2" x2="135" y2="35" stroke="#991b1b" stroke-width="4.5"/>
              <!-- Sàn cầu và lan can sơn mài đỏ đính nút đồng vàng -->
              <path d="M-195,22 Q0,-52 195,22" fill="none" stroke="#dc2626" stroke-width="6"/>
              <path d="M-195,10 Q0,-64 195,10" fill="none" stroke="#ef4444" stroke-width="3"/>
              <g fill="#fde047">
                <circle cx="-135" cy="-12" r="3"/><circle cx="-70" cy="-28" r="3"/>
                <circle cx="0" cy="-35" r="3.5"/><circle cx="70" cy="-28" r="3"/><circle cx="135" cy="-12" r="3"/>
              </g>
            </g>

            <!-- 5. KIẾN TRÚC BÊN TRÁI: CỔNG TORII ĐỎ CHU SA TRÊN MẶT HỒ & CÂY TÙNG CỔ THỤ -->
            <!-- Đảo đá & Cây Tùng La Hán (Matsu Pine) bên trái -->
            <path d="M0,435 Q85,405 165,438 Z" fill="#17111a"/>
            <g transform="translate(58, 385)" opacity="0.88">
              <path d="M0,45 Q-8,15 12,-5 Q28,-22 52,-18 M12,-5 Q-14,-20 -28,-12" fill="none" stroke="#451a03" stroke-width="5" stroke-linecap="round"/>
              <ellipse cx="52" cy="-22" rx="28" ry="10" fill="#15803d"/>
              <ellipse cx="22" cy="-28" rx="32" ry="11" fill="#166534"/>
              <ellipse cx="-24" cy="-16" rx="24" ry="9" fill="#14532d"/>
            </g>

            <!-- Cổng Torii nước (Floating Torii Gate) tinh xảo -->
            <g transform="translate(172, 352) scale(0.96)" filter="drop-shadow(0 0 16px rgba(239, 68, 68, 0.6))">
              <!-- Mái trên cùng uốn cong (Kasagi & Shimaki) -->
              <path d="M-86,-84 Q0,-66 86,-84 L80,-72 Q0,-56 -80,-72 Z" fill="#1c1917"/>
              <path d="M-80,-73 Q0,-57 80,-73 L75,-64 Q0,-50 -75,-64 Z" fill="url(#c9ToriiRed)" stroke="#fde047" stroke-width="0.8"/>
              <!-- Thanh xà ngang thứ hai (Nuki) -->
              <rect x="-64" y="-48" width="128" height="9" rx="2" fill="url(#c9ToriiRed)" stroke="#fde047" stroke-width="0.6"/>
              <!-- Bảng thần hiệu (Gaku) viền vàng ở chính giữa -->
              <rect x="-9" y="-65" width="18" height="20" rx="2" fill="#0f172a" stroke="#fde047" stroke-width="1.8"/>
              <circle cx="0" cy="-55" r="3" fill="#fde047"/>
              <!-- Hai cột chính (Hashira) và chân đế đen (Kamebara) -->
              <rect x="-45" y="-66" width="12" height="122" fill="url(#c9ToriiRed)"/>
              <rect x="33" y="-66" width="12" height="122" fill="url(#c9ToriiRed)"/>
              <rect x="-48" y="38" width="18" height="20" rx="2" fill="#1c1917" stroke="#fde047" stroke-width="0.8"/>
              <rect x="30" y="38" width="18" height="20" rx="2" fill="#1c1917" stroke="#fde047" stroke-width="0.8"/>
              <!-- Dây thừng thiêng Shimenawa & giấy trắng Shide -->
              <path d="M-38,-37 Q0,-29 38,-37" fill="none" stroke="#fde047" stroke-width="2.5" stroke-linecap="round"/>
              <polyline points="-20,-35 -23,-28 -18,-25 -21,-18" fill="none" stroke="#ffffff" stroke-width="2"/>
              <polyline points="0,-33 -3,-26 2,-23 -1,-16" fill="none" stroke="#ffffff" stroke-width="2"/>
              <polyline points="20,-35 17,-28 22,-25 19,-18" fill="none" stroke="#ffffff" stroke-width="2"/>
              <!-- Bóng cổng Torii phản chiếu dưới mặt nước -->
              <g opacity="0.28" transform="translate(0, 116) scale(1, -0.45)">
                <rect x="-45" y="-66" width="12" height="120" fill="#ef4444"/>
                <rect x="33" y="-66" width="12" height="120" fill="#ef4444"/>
                <rect x="-64" y="-48" width="128" height="12" fill="#ef4444"/>
              </g>
            </g>

            <!-- 6. KIẾN TRÚC BÊN PHẢI: BẢO THÁP 5 TẦNG KYOTO (GOJŪ-NO-TŌ) Lộng Lẫy -->
            <path d="M750,435 Q875,388 1000,428 L1000,450 L750,450 Z" fill="#1a1018"/>
            <g transform="translate(842, 362) scale(0.95)" filter="drop-shadow(0 0 16px rgba(250, 204, 21, 0.5))">
              <!-- Đỉnh tháp Sorin bằng vàng ròng -->
              <line x1="0" y1="-168" x2="0" y2="-115" stroke="#fde047" stroke-width="3.2"/>
              <circle cx="0" cy="-158" r="4" fill="#fde047"/>
              <ellipse cx="0" cy="-142" rx="7" ry="2.5" fill="none" stroke="#fde047" stroke-width="1.5"/>
              <ellipse cx="0" cy="-134" rx="8" ry="2.5" fill="none" stroke="#fde047" stroke-width="1.5"/>
              <ellipse cx="0" cy="-126" rx="9" ry="2.5" fill="none" stroke="#fde047" stroke-width="1.5"/>

              <!-- Tầng 5 -->
              <path d="M-32,-108 Q0,-124 32,-108 Q18,-102 22,-98 L-22,-98 Q-18,-102 -32,-108 Z" fill="url(#c9ToriiRed)" stroke="#fde047" stroke-width="1"/>
              <rect x="-15" y="-98" width="30" height="13" fill="#3b170b" stroke="#b45309" stroke-width="0.8"/>
              <rect x="-5" y="-94" width="10" height="7" fill="#fef08a" opacity="0.9"/>

              <!-- Tầng 4 -->
              <path d="M-40,-84 Q0,-102 40,-84 Q24,-78 28,-73 L-28,-73 Q-24,-78 -40,-84 Z" fill="url(#c9ToriiRed)" stroke="#fde047" stroke-width="1"/>
              <rect x="-19" y="-73" width="38" height="14" fill="#3b170b" stroke="#b45309" stroke-width="0.8"/>
              <rect x="-6" y="-69" width="12" height="8" fill="#fef08a" opacity="0.9"/>

              <!-- Tầng 3 -->
              <path d="M-48,-57 Q0,-77 48,-57 Q30,-51 34,-46 L-34,-46 Q-30,-51 -48,-57 Z" fill="url(#c9ToriiRed)" stroke="#fde047" stroke-width="1"/>
              <rect x="-23" y="-46" width="46" height="15" fill="#3b170b" stroke="#b45309" stroke-width="0.8"/>
              <rect x="-12" y="-42" width="9" height="8" fill="#fef08a" opacity="0.9"/>
              <rect x="3" y="-42" width="9" height="8" fill="#fef08a" opacity="0.9"/>

              <!-- Tầng 2 -->
              <path d="M-58,-28 Q0,-50 58,-28 Q36,-22 40,-16 L-40,-16 Q-36,-22 -58,-28 Z" fill="url(#c9ToriiRed)" stroke="#fde047" stroke-width="1.1"/>
              <rect x="-28" y="-16" width="56" height="16" fill="#3b170b" stroke="#b45309" stroke-width="0.8"/>
              <rect x="-15" y="-12" width="11" height="9" fill="#fef08a" opacity="0.9"/>
              <rect x="4" y="-12" width="11" height="9" fill="#fef08a" opacity="0.9"/>

              <!-- Tầng 1 (Chính điện) -->
              <path d="M-68,3 Q0,-22 68,3 Q44,9 48,16 L-48,16 Q-44,9 -68,3 Z" fill="url(#c9ToriiRed)" stroke="#fde047" stroke-width="1.2"/>
              <rect x="-34" y="16" width="68" height="24" fill="#29120a" stroke="#facc15" stroke-width="1"/>
              <rect x="-8" y="21" width="16" height="18" fill="#fef08a" opacity="0.95"/>
              <rect x="-24" y="23" width="10" height="10" fill="#fde047" opacity="0.75"/>
              <rect x="14" y="23" width="10" height="10" fill="#fde047" opacity="0.75"/>
              <!-- Chuông gió vàng (Fūrin) treo ở các đầu đao -->
              <g fill="#fde047">
                <circle cx="-66" cy="6" r="2.2"/><circle cx="66" cy="6" r="2.2"/>
                <circle cx="-56" cy="-25" r="2"/><circle cx="56" cy="-25" r="2"/>
                <circle cx="-46" cy="-54" r="1.8"/><circle cx="46" cy="-54" r="1.8"/>
              </g>
            </g>

            <!-- 7. THUYỀN GỖ TRUYỀN THỐNG (WASEN) & HOA ĐĂNG TŌRŌ TRÊN MẶT HỒ -->
            <g transform="translate(275, 458) scale(0.85)" filter="drop-shadow(0 2px 8px rgba(250, 204, 21, 0.5))">
              <path d="M-38,0 Q0,14 42,0 L30,10 L-28,10 Z" fill="#451a03" stroke="#fde047" stroke-width="1"/>
              <line x1="36" y1="2" x2="36" y2="-14" stroke="#fde047" stroke-width="1.5"/>
              <circle cx="40" cy="-10" r="4.5" fill="#ef4444" stroke="#fde047" stroke-width="1"/>
              <circle cx="40" cy="-10" r="2" fill="#fef08a"/>
            </g>
            <!-- Đèn hoa đăng trôi trên nước -->
            <g filter="drop-shadow(0 0 8px rgba(253, 224, 71, 0.85))">
              <rect x="680" y="452" width="10" height="12" rx="2" fill="#fef08a" stroke="#ef4444" stroke-width="1"/>
              <line x1="676" y1="464" x2="694" y2="464" stroke="#fde047" stroke-width="2"/>
              <rect x="735" y="468" width="8" height="10" rx="1.5" fill="#fef08a" stroke="#ef4444" stroke-width="1"/>
              <line x1="732" y1="478" x2="746" y2="478" stroke="#fde047" stroke-width="1.8"/>
            </g>

            <!-- 8. ĐÀN SẾU ĐẦU ĐỎ NHẬT BẢN (TANCHŌZURU) BAY QUA MẶT TRỜI -->
            <g transform="translate(275, 162) rotate(-12) scale(0.9)" filter="drop-shadow(0 0 12px rgba(255, 255, 255, 0.7))">
              <path d="M0,0 C-24,-28 -68,-32 -104,-12 C-70,4 -35,10 -6,8 Z" fill="url(#c9CraneWing)"/>
              <path d="M0,0 C24,-28 68,-32 104,-12 C70,4 35,10 6,8 Z" fill="url(#c9CraneWing)"/>
              <path d="M-104,-12 C-85,-2 -65,4 -45,6 M104,-12 C85,-2 65,4 45,6" stroke="#0f172a" stroke-width="3.5" fill="none"/>
              <path d="M-22,18 L0,2 L28,-16" stroke="#ffffff" stroke-width="3.6" stroke-linecap="round" fill="none"/>
              <circle cx="29" cy="-17" r="3.6" fill="#ef4444"/>
              <path d="M31,-18 L42,-23" stroke="#fde047" stroke-width="2.2" stroke-linecap="round"/>
            </g>
            <g transform="translate(725, 152) scale(-0.82, 0.82) rotate(-10)" filter="drop-shadow(0 0 12px rgba(255, 255, 255, 0.7))">
              <path d="M0,0 C-24,-28 -68,-32 -104,-12 C-70,4 -35,10 -6,8 Z" fill="url(#c9CraneWing)"/>
              <path d="M0,0 C24,-28 68,-32 104,-12 C70,4 35,10 6,8 Z" fill="url(#c9CraneWing)"/>
              <path d="M-104,-12 C-85,-2 -65,4 -45,6 M104,-12 C85,-2 65,4 45,6" stroke="#0f172a" stroke-width="3.5" fill="none"/>
              <path d="M-22,18 L0,2 L28,-16" stroke="#ffffff" stroke-width="3.6" stroke-linecap="round" fill="none"/>
              <circle cx="29" cy="-17" r="3.6" fill="#ef4444"/>
              <path d="M31,-18 L42,-23" stroke="#fde047" stroke-width="2.2" stroke-linecap="round"/>
            </g>

            <!-- 9. TÁN LÁ PHONG ĐỎ MÙA THU (MOMIJI 5 CÁNH SẮC NÉT) RỦ TỪ GÓC TRÊN & BAY TRONG GIÓ -->
            <g stroke="#5c2410" stroke-width="3" fill="none" stroke-linecap="round">
              <path d="M0,18 Q65,48 145,15 M52,32 Q92,72 135,64 M25,28 Q42,75 20,105"/>
              <path d="M1000,18 Q935,48 855,15 M948,32 Q908,72 865,64 M975,28 Q958,75 980,105"/>
            </g>
            <!-- Các chùm lá phong Momiji 5 cánh bằng thẻ <use> -->
            <g fill="#ef4444" filter="drop-shadow(0 2px 6px rgba(239, 68, 68, 0.6))">
              <use href="#momijiLeaf" transform="translate(38, 36) rotate(18) scale(1.3)"/>
              <use href="#momijiLeaf" transform="translate(88, 28) rotate(-14) scale(1.4)"/>
              <use href="#momijiLeaf" transform="translate(132, 60) rotate(28) scale(1.1)"/>
              <use href="#momijiLeaf" transform="translate(22, 92) rotate(-25) scale(1.15)"/>
              <use href="#momijiLeaf" transform="translate(962, 36) rotate(-18) scale(1.3)"/>
              <use href="#momijiLeaf" transform="translate(912, 28) rotate(14) scale(1.4)"/>
              <use href="#momijiLeaf" transform="translate(868, 60) rotate(-28) scale(1.1)"/>
              <use href="#momijiLeaf" transform="translate(978, 92) rotate(25) scale(1.15)"/>
            </g>
            <g fill="#f59e0b" filter="drop-shadow(0 2px 6px rgba(245, 158, 11, 0.6))">
              <use href="#momijiLeaf" transform="translate(64, 52) rotate(-8) scale(1.15)"/>
              <use href="#momijiLeaf" transform="translate(142, 20) rotate(35) scale(1.0)"/>
              <use href="#momijiLeaf" transform="translate(936, 52) rotate(8) scale(1.15)"/>
              <use href="#momijiLeaf" transform="translate(858, 20) rotate(-35) scale(1.0)"/>
              <!-- Lá phong bay lơ lửng trong gió thu -->
              <use href="#momijiLeaf" transform="translate(195, 115) rotate(42) scale(0.75)"/>
              <use href="#momijiLeaf" transform="translate(805, 110) rotate(-38) scale(0.75)"/>
              <use href="#momijiLeaf" transform="translate(345, 245) rotate(22) scale(0.65)" fill="#fb7185"/>
              <use href="#momijiLeaf" transform="translate(655, 240) rotate(-28) scale(0.65)" fill="#fb7185"/>
            </g>
          </svg>

          <!-- TIÊU ĐỀ SLIDE (CĂN GIỮA, CỠ CHỮ LỚN NỔI BẬT) -->
          <div class="anim-title" style="position: relative; z-index: 2; max-width: 920px;">
            <div style="display: inline-flex; align-items: center; gap: 10px; padding: 6px 22px; background: rgba(30, 16, 24, 0.88); border: 1.5px solid rgba(248, 113, 113, 0.68); border-radius: 999px; font-size: clamp(0.92rem, 1.2vw, 1.08rem); font-weight: 800; color: #fca5a5; letter-spacing: 1.2px; margin-bottom: 12px; backdrop-filter: blur(10px); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);">
              <span>⛩️</span> CẤU TRÚC ĐẠI SỐ — CHƯƠNG 9 (PHẦN III: TRƯỜNG)
            </div>
            <h1 style="font-size: clamp(2.4rem, 3.9vw, 3.35rem); font-weight: 800; color: #ffffff; margin: 0 0 8px; line-height: 1.18; letter-spacing: -0.5px; text-shadow: 0 4px 28px rgba(0, 0, 0, 0.85);">
              Trường Con &amp; <span style="color: #fde047;">Trường Các Thương</span> <span style="color: #fca5a5;">$\\operatorname{Frac}(R)$</span>
            </h1>
            <p style="font-size: clamp(1.1rem, 1.45vw, 1.3rem); color: #fef3c7; margin: 0; font-weight: 600; text-shadow: 0 2px 10px rgba(0,0,0,0.7);">
              Giáo trình Cấu trúc Đại số · TS. Huỳnh Việt Khánh
            </p>
          </div>

          <!-- TÂM ĐIỂM: KHỐI CÂU HỎI TRIẾT HỌC TRUNG TÂM -->
          <div class="slide-glass-card anim-card anim-d1" style="position: relative; z-index: 2; max-width: 880px; width: 100%; padding: 26px 38px; margin: 12px 0; background: rgba(28, 15, 22, 0.84) !important; border: 1.5px solid rgba(250, 204, 21, 0.55) !important; border-radius: 18px; backdrop-filter: blur(20px); box-shadow: 0 20px 50px rgba(10, 5, 8, 0.88), inset 0 1px 0 rgba(255, 255, 255, 0.22); text-align: center;">
            <div style="font-size: clamp(0.98rem, 1.25vw, 1.12rem); font-weight: 800; color: #fde047; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">
              ✦ Câu Hỏi Trung Tâm Của Chương ✦
            </div>
            <p style="font-size: clamp(1.26rem, 1.72vw, 1.5rem); line-height: 1.62; color: #ffffff; margin: 0; font-weight: 500;">
              Trong một miền nguyên bất kỳ (như $\\mathbb{Z}$ hay $F[x]$) nơi phép chia bị bế tắc vì thiếu phần tử nghịch đảo, làm thế nào để <b style="color: #fca5a5;">"nhúng" miền nguyên ấy</b> vào một <b style="color: #fde047;">trường nhỏ nhất $\\operatorname{Frac}(R)$</b> chứa nó sao cho mọi phần tử khác không đều khả nghịch?
            </p>
          </div>

          <!-- ĐÁY SLIDE: THANH 4 TRỤ CỘT KIẾN THỨC (KHÔNG THANH CUỘN) -->
          <div class="anim-card anim-d2" style="position: relative; z-index: 2; display: flex; flex-wrap: nowrap; justify-content: space-between; align-items: center; gap: 6px; width: 100%; max-width: 960px; padding: 8px 14px; box-sizing: border-box; background: rgba(28, 15, 22, 0.9); border: 1.5px solid rgba(248, 113, 113, 0.45); border-radius: 999px; backdrop-filter: blur(12px); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5); overflow: hidden;">
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(239, 68, 68, 0.24); border: 1px solid rgba(248, 113, 113, 0.52); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #fecaca; white-space: nowrap;">
              1. Tiêu Chuẩn Trường Con
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(250, 204, 21, 0.22); border: 1px solid rgba(253, 224, 71, 0.48); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #fef08a; white-space: nowrap;">
              2. Trường Con Nguyên Tố $P_K$
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(74, 222, 128, 0.2); border: 1px solid rgba(134, 239, 172, 0.48); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #bbf7d0; white-space: nowrap;">
              3. Dựng Trường Thương $\\operatorname{Frac}(R)$
            </span>
            <span style="color: rgba(255, 255, 255, 0.45); font-size: 0.9rem; flex-shrink: 0;">→</span>
            <span style="flex: 1; text-align: center; padding: 5px 10px; background: rgba(56, 189, 248, 0.22); border: 1px solid rgba(125, 211, 252, 0.48); border-radius: 999px; font-size: clamp(0.76rem, 0.98vw, 0.9rem); font-weight: 700; color: #bae6fd; white-space: nowrap;">
              4. Tính Chất Phổ Dụng
            </span>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 2: ĐỘNG CƠ SƯ PHẠM - TỪ SỰ BẾ TẮC CỦA PHÉP CHIA ĐẾN MỞ RỘNG TRƯỜNG
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(239,68,68,0.16), transparent 34%), linear-gradient(135deg, #13111c, #271520 52%, #361816); border:1.5px solid rgba(248,113,113,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(239,68,68,0.24); border:1.5px solid #f87171; border-radius:999px; color:#fecaca; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              ⛩️ KHỞI NGUỒN SƯ PHẠM (MỤC 9.1)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Từ Sự Bế Tắc Của Phép Chia Đến Tư Tưởng Mở Rộng Thành Trường</h2>
            <p style="color:#fef3c7; font-size:clamp(1.12rem, 1.44vw, 1.28rem); line-height:1.58; margin:0;">
              Trong một miền nguyên $R$, phép cộng, phép trừ và phép nhân đã hoàn chỉnh, nhưng <b>phép chia vẫn bị chặn đứng</b> vì thiếu các phần tử nghịch đảo nhân:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Ba nhu cầu mở rộng kinh điển -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,15,22,0.82)!important; border:1.5px solid rgba(248,113,113,0.48)!important; border-left:5px solid #ef4444!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fca5a5; font-size:clamp(1.18rem, 1.52vw, 1.36rem); display:block; margin-bottom:10px;">1) Ba Nhu Cầu Mở Rộng Kinh Điển Trong Toán Học:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb;">
                - <b>Từ số nguyên $\\mathbb{Z}$ đến số hữu tỉ $\\mathbb{Q}$:</b> Phương trình $2x = 1$ vô nghiệm trong $\\mathbb{Z}$, thúc đẩy việc tạo ra phân số $1/2 \\in \\mathbb{Q}$.<br>
                - <b>Từ đa thức $F[x]$ đến phân thức hữu tỉ $F(x)$:</b> Muốn chia đa thức $P(x)$ cho $Q(x) \\neq 0$, ta dựng trường $F(x) = \\{P(x)/Q(x)\\}$.<br>
                - <b>Từ số nguyên Gauss $\\mathbb{Z}[i]$ đến trường $\\mathbb{Q}(i)$:</b> Mở rộng vành $\\mathbb{Z}[i]$ thành trường các số phức có phần thực và ảo hữu tỉ.
              </div>
            </div>

            <!-- Cột 2: Bản chất bài toán -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,15,22,0.82)!important; border:1.5px solid rgba(250,204,21,0.48)!important; border-left:5px solid #fde047!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fde047; font-size:clamp(1.18rem, 1.52vw, 1.36rem); display:block; margin-bottom:10px;">2) Mục Tiêu Của Phép Dựng Đại Số Trừu Tượng:</b>
              <div class="slide-math-display" style="background:rgba(16,9,14,0.92); border-color:#fde047; color:#fef08a; font-size:clamp(1.18rem, 1.52vw, 1.36rem); padding:12px; margin:8px 0 12px;">
                $$R \\text{ (Miền nguyên)} \\;\\stackrel{\\iota_R}{\\hookrightarrow}\\; \\operatorname{Frac}(R) \\text{ (Trường nhỏ nhất)}$$
              </div>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb;">
                - Xây dựng một quy trình <b>tổng quát và hoàn toàn chặt chẽ</b> để nhúng bất kỳ miền nguyên $R$ nào vào một trường nhỏ nhất chứa nó mà không làm mất mát dữ liệu!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 3: ĐỊNH NGHĨA 9.1 - TRƯỜNG CON & QUY ƯỚC CÙNG ĐƠN VỊ
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(239,68,68,0.16), transparent 34%), linear-gradient(135deg, #13111c, #271520 52%, #361816); border:1.5px solid rgba(248,113,113,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(239,68,68,0.24); border:1.5px solid #f87171; border-radius:999px; color:#fecaca; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 ĐỊNH NGHĨA (ĐỊNH NGHĨA 9.1)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Khái Niệm Trường Con (Subfield) &amp; Trường Mở Rộng $K/F$</h2>
            <p style="color:#fef3c7; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Cho $(K, +, \\cdot)$ là một trường. Một tập hợp con $F \\subseteq K$ được gọi là một <b>trường con</b> của $K$ nếu bản thân $F$ lập thành một trường dưới hai phép toán thu hẹp từ $K$:
            </p>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Điều kiện định nghĩa -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,15,22,0.82)!important; border:1.5px solid rgba(250,204,21,0.48)!important; border-top:5px solid #fde047!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fde047; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(i) Cấu trúc nội tại của Trường con $F \\subseteq K$:</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fffbeb; margin-top:10px;">
                - <b>Chứa ít nhất $2$ phần tử ($|F| \\ge 2$):</b> Chứa cùng phần tử không $0_K$ và cùng phần tử đơn vị $1_K \\neq 0_K$ với trường mẹ.<br>
                - <b>Nhóm con cộng &amp; nhân:</b> $(F, +) \\le (K, +)$ và $(F \\setminus \\{0_K\\}, \\cdot) \\le (K \\setminus \\{0_K\\}, \\cdot)$.<br>
                - Khi $F$ là trường con của $K$, ta nói $K$ là một <b>trường mở rộng (extension field)</b> của $F$, ký hiệu <b style="color:#fde047;">$K/F$</b>.
              </div>
            </div>

            <!-- Cột 2: Đối chiếu Vành con vs Trường con -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,15,22,0.82)!important; border:1.5px solid rgba(74,222,128,0.48)!important; border-top:5px solid #4ade80!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#86efac; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">(ii) Tại sao Trường con bắt buộc có $1_F = 1_K$?</b>
              <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fffbeb; margin-top:10px;">
                - Khác với vành con (có thể có đơn vị riêng $1_S \\neq 1_R$ do có ước của không), trong trường $K$ mọi phần tử khác $0_K$ đều khả nghịch!<br>
                - Do $1_F \\neq 0_K$, từ đẳng thức $1_F \\cdot 1_F = 1_F = 1_F \\cdot 1_K$ trong nhóm nhân $K^*$, luật giản ước bắt buộc <b style="color:#86efac;">$1_F = 1_K$</b>!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 4: ĐỊNH LÝ 9.2 - TIÊU CHUẨN TRƯỜNG CON RÚT GỌN
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(239,68,68,0.16), transparent 34%), linear-gradient(135deg, #13111c, #271520 52%, #361816); border:1.5px solid rgba(248,113,113,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(250,204,21,0.22); border:1.5px solid #fde047; border-radius:999px; color:#fef08a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ (ĐỊNH LÝ 9.2)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Tiêu Chuẩn Nhận Diện Trường Con Rút Gọn (Subfield Test)</h2>
            <p style="color:#fef3c7; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Cho trường $K$. Một tập hợp con $F \\subseteq K$ là một <b>trường con</b> của $K$ khi và chỉ khi thỏa mãn đồng thời $3$ điều kiện:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(28,15,22,0.94); border:2px solid #fde047; color:#fef08a; font-size:clamp(1.2rem, 1.6vw, 1.44rem); padding:14px 24px; margin:0;">
            $$F \\text{ là trường con của } K \\iff \\begin{cases} 1)\\; 1_K \\in F \\quad (\\text{hoặc } F \\text{ chứa ít nhất một phần tử } a \\neq 0_K) \\\\ 2)\\; \\forall x, y \\in F \\implies x - y \\in F \\quad (\\text{Đóng với phép trừ}) \\\\ 3)\\; \\forall x \\in F,\\; \\forall y \\in F \\setminus \\{0_K\\} \\implies x y^{-1} \\in F \\quad (\\text{Đóng với phép chia}) \\end{cases}$$
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(28,15,22,0.82)!important; border:1.5px solid rgba(248,113,113,0.48)!important; padding:20px 26px; border-radius:14px;">
            <b style="color:#fca5a5; font-size:clamp(1.18rem, 1.52vw, 1.36rem); display:block; margin-bottom:8px;">⚙️ Cơ chế kết hợp hai tiêu chuẩn nhóm con (Chương 2):</b>
            <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.72; color:#fffbeb;">
              - <b>Từ (1) và (2):</b> Vì $1_K \\in F$, lấy $x = y = 1_K$ trong (2) suy ra $0_K = 1_K - 1_K \\in F$. Theo tiêu chuẩn nhóm con cộng, $(F, +) \\le (K, +)$.<br>
              - <b>Từ (1) và (3):</b> Vì $1_K \\in F \\setminus \\{0_K\\}$, theo tiêu chuẩn nhóm con nhân $xy^{-1} \\in F \\setminus \\{0_K\\}$, tập $(F \\setminus \\{0_K\\}, \\cdot)$ là nhóm con của $(K \\setminus \\{0_K\\}, \\cdot)$! $\\blacksquare$
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 5: VÍ DỤ SOI SÁNG CHO SLIDE 3 & 4 (BÀI TẬP 9.1 & 9.2 - TRƯỜNG Q(i))
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(239,68,68,0.16), transparent 34%), linear-gradient(135deg, #13111c, #271520 52%, #361816); border:1.5px solid rgba(248,113,113,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(74,222,128,0.22); border:1.5px solid #4ade80; border-radius:999px; color:#bbf7d0; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ (BÀI TẬP 9.1 &amp; 9.2)
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Kiểm Định Trường Số Hữu Tỉ Gauss $\\mathbb{Q}(i) \\subseteq \\mathbb{C}$</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Chứng minh Q(i) là trường con của C -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,15,22,0.82)!important; border:1.5px solid rgba(74,222,128,0.48)!important; border-left:5px solid #4ade80!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#86efac; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">1) Chứng minh $\\mathbb{Q}(i) = \\{a + bi \\mid a, b \\in \\mathbb{Q}\\}$ là trường con:</b>
              <div style="font-size:clamp(1.05rem, 1.35vw, 1.2rem); line-height:1.68; color:#fffbeb; margin-top:8px;">
                - <b>Chứa đơn vị $1$:</b> $1 = 1 + 0i \\in \\mathbb{Q}(i)$ (do $1, 0 \\in \\mathbb{Q}$).<br>
                - <b>Đóng với trừ &amp; nhân:</b> Với $x = a+bi,\\; y = c+di \\in \\mathbb{Q}(i)$, cả $x - y$ và $xy$ đều có phần thực, ảo thuộc $\\mathbb{Q}$.<br>
                - <b>Mọi $z = a + bi \\neq 0$ đều có nghịch đảo thuộc $\\mathbb{Q}(i)$:</b><br>
                <div class="slide-math-display" style="background:rgba(16,9,14,0.92); border-color:#4ade80; color:#bbf7d0; font-size:clamp(1.08rem, 1.4vw, 1.24rem); padding:8px; margin:8px 0 0;">
                  $$(a + bi)^{-1} = \\frac{a - bi}{a^2 + b^2} = \\underbrace{\\left(\\frac{a}{a^2+b^2}\\right)}_{\\in \\mathbb{Q}} + \\underbrace{\\left(\\frac{-b}{a^2+b^2}\\right)}_{\\in \\mathbb{Q}} i \\in \\mathbb{Q}(i)$$
                </div>
              </div>
            </div>

            <!-- Cột 2: Chuỗi bao hàm Vành con vs Trường con -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,15,22,0.82)!important; border:1.5px solid rgba(250,204,21,0.48)!important; border-left:5px solid #fde047!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fde047; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">2) Đối chứng Vành con vs. Trường con trong $\\mathbb{C}$:</b>
              <div style="font-size:clamp(1.05rem, 1.35vw, 1.2rem); line-height:1.68; color:#fffbeb; margin-top:8px;">
                - <b>Chuỗi trường con:</b> <b style="color:#fde047;">$\\mathbb{Q} \\subsetneq \\mathbb{Q}(i) \\subsetneq \\mathbb{C}$</b> và <b style="color:#fde047;">$\\mathbb{Q} \\subsetneq \\mathbb{R} \\subsetneq \\mathbb{C}$</b>.<br>
                - <b>$\\mathbb{Z} \\subset \\mathbb{Q}$ và $\\mathbb{Z}[i] \\subset \\mathbb{Q}(i)$:</b> Chỉ là các <b>vành con</b> (miền nguyên), <b>không phải trường con</b> vì thiếu nghịch đảo nhân:<br>
                &nbsp;&nbsp;+ Trong $\\mathbb{Z}$: $2^{-1} = 1/2 \\notin \\mathbb{Z}$.<br>
                &nbsp;&nbsp;+ Trong $\\mathbb{Z}[i]$: $(1 + i)^{-1} = \\dfrac{1}{2} - \\dfrac{1}{2}i \\notin \\mathbb{Z}[i]$.<br>
                - <b>Áp dụng tính toán:</b> Trong $\\mathbb{Q}(i)$, $(3 - 4i)^{-1} = \\dfrac{3}{25} + \\dfrac{4}{25}i$.
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 6: ĐỊNH NGHĨA 9.3 & ĐỊNH LÝ 9.4 - TRƯỜNG CON NGUYÊN TỐ P_K
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(239,68,68,0.16), transparent 34%), linear-gradient(135deg, #13111c, #271520 52%, #361816); border:1.5px solid rgba(248,113,113,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(250,204,21,0.22); border:1.5px solid #fde047; border-radius:999px; color:#fef08a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              📘 ĐỊNH NGHĨA 9.3 &amp; 🏛️ ĐỊNH LÝ 9.4
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.9rem, 2.5vw, 2.35rem);">Trường Con Nguyên Tố $P_K$ &amp; Định Lý Phân Loại Theo Đặc Số</h2>
            <p style="color:#fef3c7; font-size:clamp(1.14rem, 1.46vw, 1.3rem); margin:0;">
              Giao của một họ tùy ý các trường con của $K$ luôn là một trường con của $K$. Giao của <b>tất cả</b> các trường con của $K$ tạo thành <b>trường con nhỏ nhất</b> của $K$, gọi là <b>trường con nguyên tố (Prime Subfield)</b> $P_K$:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(28,15,22,0.94); border:1.5px solid #fde047; color:#fef08a; font-size:clamp(1.22rem, 1.62vw, 1.45rem); padding:12px 22px; margin:0;">
            $$P_K = \\bigcap \\Big\\{F \\subseteq K \\mid F \\text{ là trường con của } K\\Big\\}$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Trường hợp 1: Đặc số 0 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,15,22,0.82)!important; border:1.5px solid rgba(56,189,248,0.48)!important; border-top:5px solid #38bdf8!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#7dd3fc; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Khi $\\operatorname{char}(K) = 0$ $\\Longrightarrow P_K \\cong \\mathbb{Q}$:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb; margin-top:10px;">
                - Mọi trường con của $K$ phải chứa $1_K$, nên phải chứa mọi bội nguyên $m \\cdot 1_K$ ($m \\in \\mathbb{Z}$) và các thương $(m \\cdot 1_K)(n \\cdot 1_K)^{-1}$ ($n \\neq 0$).<br>
                - Do $\\operatorname{char}(K) = 0$, bản sao này đẳng cấu chính tắc với trường số hữu tỉ <b style="color:#7dd3fc;">$\\mathbb{Q}$</b> (VD: $P_{\\mathbb{R}} = P_{\\mathbb{C}} = \\mathbb{Q}$).
              </div>
            </div>

            <!-- Trường hợp 2: Đặc số p -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,15,22,0.82)!important; border:1.5px solid rgba(248,113,113,0.48)!important; border-top:5px solid #ef4444!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fca5a5; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Khi $\\operatorname{char}(K) = p &gt; 0$ $\\Longrightarrow P_K \\cong \\mathbb{F}_p = \\mathbb{Z}/p\\mathbb{Z}$:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb; margin-top:10px;">
                - Xét đồng cấu $\\chi : \\mathbb{Z} \\to K,\\; n \\mapsto n \\cdot 1_K$. Khi $\\operatorname{char}(K) = p$, ta có $\\ker\\chi = p\\mathbb{Z}$.<br>
                - Theo Định lý Đẳng cấu 1: $\\operatorname{im}\\chi \\cong \\mathbb{Z}/p\\mathbb{Z}$ đã là một trường, nên <b style="color:#fde047;">$P_K = \\operatorname{im}\\chi \\cong \\mathbb{Z}/p\\mathbb{Z}$</b>!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 7: PHÉP DỰNG FRAC(R) - BƯỚC 1: QUAN HỆ TƯƠNG ĐƯƠNG PHÂN SỐ
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(239,68,68,0.16), transparent 34%), linear-gradient(135deg, #13111c, #271520 52%, #361816); border:1.5px solid rgba(248,113,113,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(250,204,21,0.22); border:1.5px solid #fde047; border-radius:999px; color:#fef08a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ PHÉP DỰNG $\\operatorname{Frac}(R)$ — BƯỚC 1 (MỤC 9.3)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Quan Hệ Tương Đương Nhân Chéo Trên Miền Nguyên $R$</h2>
            <p style="color:#fef3c7; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Cho $R$ là một <b>miền nguyên</b>. Xét tập hợp mọi cặp "tử – mẫu" với mẫu khác không <b style="color:#fde047;">$P = R \\times (R \\setminus \\{0_R\\}) = \\{(a, b) \\mid a, b \\in R,\\; b \\neq 0_R\\}$</b> cùng quan hệ:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(28,15,22,0.94); border:2px solid #fde047; color:#fef08a; font-size:clamp(1.26rem, 1.7vw, 1.5rem); padding:14px 24px; margin:0;">
            $$(a, b) \\sim (c, d) \\iff ad = bc$$
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="flex:1; display:flex; flex-direction:column; justify-content:center; background:rgba(28,15,22,0.82)!important; border:1.5px solid rgba(74,222,128,0.48)!important; border-left:6px solid #4ade80!important; padding:22px 26px; border-radius:14px;">
            <b style="color:#86efac; font-size:clamp(1.18rem, 1.52vw, 1.36rem); display:block; margin-bottom:10px;">🔍 Chứng minh $\\sim$ là quan hệ tương đương (Vai trò sống còn của Miền nguyên ở tính Bắc cầu!):</b>
            <div style="font-size:clamp(1.08rem, 1.38vw, 1.24rem); line-height:1.75; color:#fffbeb;">
              - <b>1) Phản xạ &amp; Đối xứng:</b> $(a, b) \\sim (a, b)$ vì $ab = ba$; nếu $ad = bc$ thì $cb = da \\implies (c, d) \\sim (a, b)$.<br>
              - <b>2) Tính bắc cầu:</b> Giả sử $(a, b) \\sim (c, d)$ và $(c, d) \\sim (e, f)$, tức là <b style="color:#fde047;">$ad = bc$</b> và <b style="color:#fde047;">$cf = de$</b> (với $b, d, f \\neq 0_R$).<br>
              - Nhân phương trình đầu với $f$ và thay $cf = de$: $adf = bcf = bde \\iff \\mathbf{d(af - be) = 0_R}$.<br>
              - Vì $d \\neq 0_R$ và <b>miền nguyên $R$ không có ước của không</b>, ta giản ước được $d$ để thu được <b style="color:#86efac;">$af - be = 0_R \\iff af = be \\iff (a, b) \\sim (e, f)$</b>! $\\blacksquare$
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 8: PHẢN VÍ DỤ KINH ĐIỂN (BÀI TẬP 9.5) - THẤT BẠI KHI CÓ ƯỚC CỦA 0
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(239,68,68,0.16), transparent 34%), linear-gradient(135deg, #13111c, #271520 52%, #361816); border:1.5px solid rgba(248,113,113,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(244,63,94,0.24); border:1.5px solid #fb7185; border-radius:999px; color:#fda4af; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              ⚠️ PHẢN VÍ DỤ KINH ĐIỂN (BÀI TẬP 9.5)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Tại Sao Phép Dựng Phân Số Sụp Đổ Nếu Vành Có Ước Của Không?</h2>
            <p style="color:#fef3c7; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Trên vành $R = \\mathbb{Z}/6\\mathbb{Z}$ (có cặp ước của không $[2][3] = [0]$), xét tập $P = R \\times (R \\setminus \\{[0]\\})$ với quan hệ $(a, b) \\sim (c, d) \\iff ad = bc$:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(28,15,22,0.94); border:1.5px solid #fb7185; color:#fecdd3; font-size:clamp(1.18rem, 1.54vw, 1.38rem); padding:14px 22px; margin:0;">
            $$X = ([0], [2]) \\sim Y = ([0], [3]) \\;\\text{ và }\\; Y = ([0], [3]) \\sim Z = ([2], [3]) \\quad \\text{nhưng} \\quad X \\not\\sim Z!$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Kiểm tra X ~ Y và Y ~ Z -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,15,22,0.82)!important; border:1.5px solid rgba(250,204,21,0.48)!important; border-left:5px solid #fde047!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fde047; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">1) Hai mắt xích đầu đều thỏa mãn:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb; margin-top:10px;">
                - <b>Kiểm tra $X = ([0], [2]) \\sim Y = ([0], [3])$:</b><br>
                &nbsp;&nbsp;Nhân chéo: $[0][3] = [0] = [2][0] \\implies X \\sim Y$.<br>
                - <b>Kiểm tra $Y = ([0], [3]) \\sim Z = ([2], [3])$:</b><br>
                &nbsp;&nbsp;Nhân chéo: $[0][3] = [0]$ và $[3][2] = [6] = [0] \\implies Y \\sim Z$.
              </div>
            </div>

            <!-- Cột 2: Gãy tính bắc cầu X !~ Z -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,15,22,0.82)!important; border:1.5px solid rgba(244,63,94,0.5)!important; border-left:5px solid #fb7185!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fda4af; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">2) Nhưng mắt xích bắc cầu $X \\sim Z$ bị gãy đổ:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb; margin-top:10px;">
                - Xét $X = ([0], [2])$ và $Z = ([2], [3])$:<br>
                &nbsp;&nbsp;+ Tích chéo 1: $[0] \\cdot [3] = [0]$.<br>
                &nbsp;&nbsp;+ Tích chéo 2: $[2] \\cdot [2] = [4] \\neq [0]$!<br>
                - Vậy $X \\not\\sim Z$: Quan hệ $\\sim$ <b>không có tính bắc cầu</b> khi vành có ước của không!
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 9: PHÉP DỰNG FRAC(R) - BƯỚC 2: HAI PHÉP TOÁN & CẤU TRÚC TRƯỜNG
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(239,68,68,0.16), transparent 34%), linear-gradient(135deg, #13111c, #271520 52%, #361816); border:1.5px solid rgba(248,113,113,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(250,204,21,0.22); border:1.5px solid #fde047; border-radius:999px; color:#fef08a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              🏛️ PHÉP DỰNG $\\operatorname{Frac}(R)$ — BƯỚC 2 (MỤC 9.3)
            </span>
            <h2 style="color:#ffffff; margin:0 0 6px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Cấu Trúc Trường Các Thương $\\operatorname{Frac}(R) = P / {\\sim}$</h2>
            <p style="color:#fef3c7; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Ký hiệu lớp tương đương $[(a, b)]$ dưới dạng phân số hình thức <b style="color:#fde047;">$\\dfrac{a}{b}$</b>. Trên tập thương $\\operatorname{Frac}(R) = \\left\\{\\dfrac{a}{b} \\;\\middle|\\; a, b \\in R, b \\neq 0_R\\right\\}$, ta trang bị hai phép toán:
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(28,15,22,0.94); border:2px solid #fde047; color:#fef08a; font-size:clamp(1.22rem, 1.62vw, 1.44rem); padding:12px 22px; margin:0;">
            $$\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd} \\qquad \\text{và} \\qquad \\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd} \\qquad (\\text{Do } R \\text{ là miền nguyên nên } bd \\neq 0_R!)$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:18px; margin:0;">
            <!-- Cột 1: Đơn vị không & đơn vị 1 -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,15,22,0.82)!important; border:1.5px solid rgba(248,113,113,0.48)!important; border-left:5px solid #ef4444!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#fca5a5; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">(i) Phần tử không, Phần tử đối &amp; Đơn vị nhân:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb; margin-top:8px;">
                - <b>Phần tử không $0_{\\operatorname{Frac}(R)}$:</b> Là lớp <b style="color:#fde047;">$\\dfrac{0_R}{1_R} = \\dfrac{0_R}{b}$</b> ($\\forall b \\neq 0_R$).<br>
                - <b>Phần tử đối của $\\dfrac{a}{b}$:</b> Là $-\\left(\\dfrac{a}{b}\\right) = \\dfrac{-a}{b}$.<br>
                - <b>Phần tử đơn vị nhân $1_{\\operatorname{Frac}(R)}$:</b> Là lớp <b style="color:#fde047;">$\\dfrac{1_R}{1_R} = \\dfrac{b}{b}$</b> ($\\forall b \\neq 0_R$).
              </div>
            </div>

            <!-- Cột 2: Phần tử nghịch đảo nhân -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,15,22,0.82)!important; border:1.5px solid rgba(74,222,128,0.48)!important; border-left:5px solid #4ade80!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#86efac; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">(ii) Mọi phần tử khác $0$ đều khả nghịch:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb; margin-top:8px;">
                - Một phân số $\\dfrac{a}{b} \\neq 0_{\\operatorname{Frac}(R)} \\iff a \\neq 0_R$.<br>
                - Khi $a \\neq 0_R$, phân số đảo ngược $\\dfrac{b}{a}$ hợp lệ và thuộc $\\operatorname{Frac}(R)$:<br>
                <div class="slide-math-display" style="background:rgba(16,9,14,0.92); border-color:#4ade80; color:#bbf7d0; font-size:clamp(1.14rem, 1.48vw, 1.32rem); padding:8px; margin:8px 0 0;">
                  $$\\left(\\frac{a}{b}\\right)^{-1} = \\frac{b}{a} \\quad \\left(\\text{vì } \\frac{a}{b} \\cdot \\frac{b}{a} = \\frac{ab}{ba} = \\frac{1_R}{1_R}\\right)$$
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 10: ĐỊNH LÝ 9.5 - PHÉP NHÚNG CHÍNH TẮC & TÍNH CHẤT PHỔ DỤNG
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(239,68,68,0.16), transparent 34%), linear-gradient(135deg, #13111c, #271520 52%, #361816); border:1.5px solid rgba(248,113,113,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(250,204,21,0.22); border:1.5px solid #fde047; border-radius:999px; color:#fef08a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              🏛️ ĐỊNH LÝ TRỌNG TÂM (ĐỊNH LÝ 9.5 - MỤC 9.4)
            </span>
            <h2 style="color:#ffffff; margin:0 0 8px; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Phép Nhúng Chính Tắc &amp; Tính Chất Phổ Dụng Của $\\operatorname{Frac}(R)$</h2>
            <p style="color:#fef3c7; font-size:clamp(1.12rem, 1.44vw, 1.28rem); margin:0;">
              Ánh xạ <b style="color:#fde047;">$\\iota_R : R \\hookrightarrow \\operatorname{Frac}(R),\\; a \\mapsto \\dfrac{a}{1_R}$</b> là một <b>đơn cấu vành bảo toàn đơn vị</b> (cho phép xem $R \\subseteq \\operatorname{Frac}(R)$):
            </p>
          </div>

          <div class="slide-math-display anim-card anim-d1" style="background:rgba(28,15,22,0.94); border:2px solid #fde047; color:#fef08a; font-size:clamp(1.16rem, 1.52vw, 1.36rem); padding:14px 22px; margin:0;">
            $$\\forall \\text{ trường } K,\\; \\forall \\text{ đơn cấu } f : R \\hookrightarrow K \\implies \\exists! \\text{ đơn cấu trường } \\tilde{f} : \\operatorname{Frac}(R) \\hookrightarrow K \\text{ sao cho } \\tilde{f}\\left(\\frac{a}{b}\\right) = f(a)\\big(f(b)\\big)^{-1}$$
          </div>

          <div class="slide-grid-2 anim-card anim-d2" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Sơ đồ giao hoán -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; align-items:center; background:rgba(28,15,22,0.84)!important; border:1.5px solid rgba(250,204,21,0.48)!important; padding:16px; border-radius:14px;">
              <svg viewBox="0 0 380 185" style="width:100%; max-width:360px; height:auto;">
                <!-- Mũi tên ngang R -> Frac(R) -->
                <line x1="85" y1="45" x2="245" y2="45" stroke="#fde047" stroke-width="2.5"/>
                <polygon points="245,45 233,39 233,51" fill="#fde047"/>
                <text x="165" y="32" fill="#fde047" font-size="14" font-weight="700" text-anchor="middle">ι_R (nhúng)</text>

                <!-- Mũi tên chéo R -> K -->
                <line x1="75" y1="68" x2="255" y2="145" stroke="#fca5a5" stroke-width="2.5"/>
                <polygon points="255,145 242,145 247,134" fill="#fca5a5"/>
                <text x="142" y="125" fill="#fca5a5" font-size="14" font-weight="700" text-anchor="middle">f (đơn cấu)</text>

                <!-- Mũi tên dọc Frac(R) -> K -->
                <line x1="295" y1="70" x2="295" y2="132" stroke="#86efac" stroke-width="2.5" stroke-dasharray="6 4"/>
                <polygon points="295,135 289,123 301,123" fill="#86efac"/>
                <text x="335" y="106" fill="#86efac" font-size="14" font-weight="800" text-anchor="middle">∃! f̃</text>

                <!-- Các nút R, Frac(R), K -->
                <rect x="20" y="24" width="62" height="40" rx="8" fill="#1c0f16" stroke="#fde047" stroke-width="2"/>
                <text x="51" y="49" fill="#ffffff" font-size="16" font-weight="800" text-anchor="middle">R</text>

                <rect x="248" y="24" width="96" height="40" rx="8" fill="#1c0f16" stroke="#fde047" stroke-width="2"/>
                <text x="296" y="49" fill="#fef08a" font-size="15.5" font-weight="800" text-anchor="middle">Frac(R)</text>

                <rect x="260" y="136" width="72" height="40" rx="8" fill="#1c0f16" stroke="#86efac" stroke-width="2"/>
                <text x="296" y="161" fill="#86efac" font-size="16" font-weight="800" text-anchor="middle">K</text>
              </svg>
            </div>

            <!-- Cột 2: Ý nghĩa của tính chất phổ dụng -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,15,22,0.82)!important; border:1.5px solid rgba(74,222,128,0.48)!important; border-left:5px solid #4ade80!important; padding:20px 24px; border-radius:14px;">
              <b style="color:#86efac; font-size:clamp(1.18rem, 1.52vw, 1.35rem);">💡 Ý Nghĩa Thực Chiến Của Tính Chất Phổ Dụng:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.72; color:#fffbeb; margin-top:8px;">
                - <b>Trường nhỏ nhất chứa $R$:</b> Mọi trường $K$ chứa miền nguyên $R$ đều bắt buộc chứa một trường con đẳng cấu với $\\operatorname{Frac}(R)$:<br>
                $$\\operatorname{Frac}(R) \\;\\cong\\; \\Big\\{ab^{-1} \\in K \\;\\Big|\\; a, b \\in R,\\; b \\neq 0_R\\Big\\}$$
                - Nếu bản thân $R$ đã là một trường thì $\\operatorname{Frac}(R) \\cong R$.
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 11: VÍ DỤ THỰC CHIẾN - BA NHẬN DIỆN KINH ĐIỂN & BÀI TẬP 9.15
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:16px; padding:26px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(239,68,68,0.16), transparent 34%), linear-gradient(135deg, #13111c, #271520 52%, #361816); border:1.5px solid rgba(248,113,113,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(74,222,128,0.22); border:1.5px solid #4ade80; border-radius:999px; color:#bbf7d0; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:10px;">
              💡 VÍ DỤ THỰC CHIẾN (MỤC 9.4 &amp; BÀI TẬP 9.15)
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Nhận Diện Trường Các Thương Qua Tính Chất Phổ Dụng</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:20px; margin:0;">
            <!-- Cột 1: Ba nhận diện kinh điển -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,15,22,0.82)!important; border:1.5px solid rgba(250,204,21,0.48)!important; border-left:5px solid #fde047!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#fde047; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">1) Ba Mô Hình Trường Các Thương Chuẩn Mực:</b>
              <div style="font-size:clamp(1.06rem, 1.36vw, 1.22rem); line-height:1.75; color:#fffbeb; margin-top:10px;">
                - <b>Từ vành số nguyên $\\mathbb{Z}$:</b><br>
                $$\\operatorname{Frac}(\\mathbb{Z}) \\;\\cong\\; \\mathbb{Q} \\quad (\\text{Trường số hữu tỉ})$$
                - <b>Từ vành đa thức $F[x]$:</b><br>
                $$\\operatorname{Frac}(F[x]) \\;\\cong\\; F(x) = \\left\\{\\frac{P(x)}{Q(x)} \\;\\middle|\\; Q(x) \\neq 0\\right\\}$$
                - <b>Từ vành số nguyên Gauss $\\mathbb{Z}[i]$:</b><br>
                $$\\operatorname{Frac}(\\mathbb{Z}[i]) \\;\\cong\\; \\mathbb{Q}(i) = \\{u + vi \\mid u, v \\in \\mathbb{Q}\\}$$
              </div>
            </div>

            <!-- Cột 2: Bài tập 9.15 - Frac(Z[sqrt(2)]) ~= Q(sqrt(2)) -->
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,15,22,0.82)!important; border:1.5px solid rgba(74,222,128,0.48)!important; border-left:5px solid #4ade80!important; padding:22px 26px; border-radius:14px;">
              <b style="color:#86efac; font-size:clamp(1.18rem, 1.52vw, 1.36rem);">2) Giải Bài Tập 9.15: $\\operatorname{Frac}(\\mathbb{Z}[\\sqrt{2}]) \\cong \\mathbb{Q}(\\sqrt{2})$</b>
              <div style="font-size:clamp(1.05rem, 1.35vw, 1.2rem); line-height:1.7; color:#fffbeb; margin-top:10px;">
                - Xét đơn cấu nhúng $j : \\mathbb{Z}[\\sqrt{2}] \\hookrightarrow \\mathbb{Q}(\\sqrt{2}) = \\{u + v\\sqrt{2} \\mid u, v \\in \\mathbb{Q}\\}$.<br>
                - Theo Tính chất phổ dụng, $j$ cảm sinh đơn cấu trường:<br>
                $$\\tilde{j} : \\operatorname{Frac}(\\mathbb{Z}[\\sqrt{2}]) \\hookrightarrow \\mathbb{Q}(\\sqrt{2}), \\quad \\frac{x}{y} \\longmapsto x y^{-1}$$
                - Với mọi $\\alpha = \\dfrac{a}{b} + \\dfrac{c}{d}\\sqrt{2} = \\dfrac{ad + bc\\sqrt{2}}{bd} \\in \\mathbb{Q}(\\sqrt{2})$, tử và mẫu đều thuộc $\\mathbb{Z}[\\sqrt{2}]$, nên $\\tilde{j}$ <b>toàn ánh</b> $\\implies \\mathbf{\\operatorname{Frac}(\\mathbb{Z}[\\sqrt{2}]) \\cong \\mathbb{Q}(\\sqrt{2})}$! $\\blacksquare$
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 12: ĐỐI CHIẾU BẢN CHẤT SÂU SẮC - VÀNH THƯƠNG R/I VS TRƯỜNG CÁC THƯƠNG FRAC(R)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:22px 30px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(239,68,68,0.16), transparent 34%), linear-gradient(135deg, #13111c, #271520 52%, #361816); border:1.5px solid rgba(248,113,113,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(250,204,21,0.22); border:1.5px solid #fde047; border-radius:999px; color:#fef08a; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              📊 ĐỐI CHIẾU BẢN CHẤT (MỤC 9.5)
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.85rem, 2.4vw, 2.25rem);">Phân Biệt Hai Cơ Chế Đối Lập: Vành Thương $R/I$ vs. Trường Thương $\\operatorname{Frac}(R)$</h2>
          </div>

          <div class="anim-card anim-d1" style="flex:1; display:flex; flex-direction:column; justify-content:center; overflow-x:auto;">
            <table style="width:100%; height:100%; border-collapse:collapse; font-size:clamp(1.0rem, 1.3vw, 1.18rem); background:rgba(28,15,22,0.88); border:1.5px solid rgba(248,113,113,0.5); border-radius:14px; overflow:hidden;">
              <thead>
                <tr style="background:rgba(239,68,68,0.26); color:#fde047; text-align:left; font-size:clamp(1.04rem, 1.34vw, 1.22rem);">
                  <th style="padding:11px 14px; border-bottom:1.5px solid rgba(248,113,113,0.45);">Tiêu chí đối chiếu</th>
                  <th style="padding:11px 14px; border-bottom:1.5px solid rgba(248,113,113,0.45);">Vành Thương $R/I$ (Chương 7)</th>
                  <th style="padding:11px 14px; border-bottom:1.5px solid rgba(248,113,113,0.45);">Trường Các Thương $\\operatorname{Frac}(R)$ (Chương 9)</th>
                </tr>
              </thead>
              <tbody style="color:#fffbeb; line-height:1.55;">
                <tr style="border-bottom:1px solid rgba(248,113,113,0.22);">
                  <td style="padding:10px 14px; font-weight:800; color:#fde047;">Bản chất tác động</td>
                  <td style="padding:10px 14px; color:#fca5a5;"><b>"Thu gọn" (Collapse):</b> Đồng nhất toàn bộ iđêan $I$ về $0$.</td>
                  <td style="padding:10px 14px; color:#86efac;"><b>"Mở rộng" (Expand):</b> Bổ sung nghịch đảo nhân $a/b$ cho $b \\neq 0$.</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(248,113,113,0.22);">
                  <td style="padding:10px 14px; font-weight:800; color:#fde047;">Điều kiện đầu vào</td>
                  <td style="padding:10px 14px;">Vành $R$ bất kỳ và một iđêan hai phía $I \\trianglelefteq R$.</td>
                  <td style="padding:10px 14px;">$R$ bắt buộc phải là một <b>Miền nguyên</b> (không có ước của $0$).</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(248,113,113,0.22);">
                  <td style="padding:10px 14px; font-weight:800; color:#fde047;">Quan hệ tương đương</td>
                  <td style="padding:10px 14px;">Trên $R$: $a \\sim b \\iff a - b \\in I$.</td>
                  <td style="padding:10px 14px;">Trên $R \\times (R \\setminus \\{0\\})$: $(a, b) \\sim (c, d) \\iff ad = bc$.</td>
                </tr>
                <tr style="border-bottom:1px solid rgba(248,113,113,0.22);">
                  <td style="padding:10px 14px; font-weight:800; color:#fde047;">Ánh xạ chính tắc</td>
                  <td style="padding:10px 14px;"><b>Toàn cấu</b> chiếu: $\\pi_I : R \\twoheadrightarrow R/I,\\; a \\mapsto a + I$.</td>
                  <td style="padding:10px 14px;"><b>Đơn cấu</b> nhúng: $\\iota_R : R \\hookrightarrow \\operatorname{Frac}(R),\\; a \\mapsto a/1_R$.</td>
                </tr>
                <tr>
                  <td style="padding:10px 14px; font-weight:800; color:#fde047;">Ví dụ trên $R = \\mathbb{Z}$</td>
                  <td style="padding:10px 14px;">$\\mathbb{Z}/n\\mathbb{Z}$ (vành hữu hạn $n$ phần tử; là trường khi $n=p$).</td>
                  <td style="padding:10px 14px;">$\\operatorname{Frac}(\\mathbb{Z}) \\cong \\mathbb{Q}$ (trường vô hạn các số hữu tỉ, đặc số $0$).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },

    // ========================================================
    // SLIDE 13: TỔNG KẾT CHƯƠNG 9 & ĐẠI LỘ TIẾN HÓA TOÀN GIÁO TRÌNH (MỤC 9.6)
    // ========================================================
    {
      html: `
        <div class="slide-body" style="height:100%; box-sizing:border-box; display:flex; flex-direction:column; justify-content:space-between; gap:14px; padding:24px 32px; border-radius:16px; background:radial-gradient(circle at 88% 12%, rgba(239,68,68,0.16), transparent 34%), linear-gradient(135deg, #13111c, #271520 52%, #361816); border:1.5px solid rgba(248,113,113,0.48); color:#fffbeb;">
          <div class="anim-title">
            <span style="display:inline-block; padding:5px 16px; background:rgba(239,68,68,0.24); border:1.5px solid #f87171; border-radius:999px; color:#fecaca; font-size:clamp(0.92rem, 1.18vw, 1.06rem); font-weight:800; margin-bottom:8px;">
              🎯 TỔNG KẾT CHƯƠNG 9 &amp; TOÀN BỘ HỌC PHẦN
            </span>
            <h2 style="color:#ffffff; margin:0; font-size:clamp(1.88rem, 2.45vw, 2.3rem);">Bốn Trụ Cột Chương 9 &amp; Mạch Tiến Hóa Đại Số Trừu Tượng</h2>
          </div>

          <div class="slide-grid-2 anim-card anim-d1" style="flex:1; align-items:stretch; gap:16px; margin:0;">
            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,15,22,0.82)!important; border-left:5px solid #ef4444!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fca5a5; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">1) Tiêu chuẩn Trường con $F \\subseteq K$</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fffbeb; margin-top:6px;">
                - Bắt buộc cùng đơn vị $1_F = 1_K$; đóng với phép trừ ($x - y \\in F$) và phép chia ($xy^{-1} \\in F, \\forall y \\neq 0$).
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,15,22,0.82)!important; border-left:5px solid #fde047!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#fde047; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">2) Phân loại Trường con nguyên tố $P_K$</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fffbeb; margin-top:6px;">
                - Trường con nhỏ nhất của $K$ chỉ có 2 khả năng: $P_K \\cong \\mathbb{Q}$ (khi $\\operatorname{char}(K)=0$) hoặc $P_K \\cong \\mathbb{Z}/p\\mathbb{Z}$ (khi $\\operatorname{char}(K)=p$).
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,15,22,0.82)!important; border-left:5px solid #4ade80!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#86efac; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">3) Phép dựng Trường các thương $\\operatorname{Frac}(R)$</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fffbeb; margin-top:6px;">
                - Trên miền nguyên $R$: $(a,b) \\sim (c,d) \\iff ad=bc$.<br>
                - Nếu $R$ có ước của không (như $\\mathbb{Z}/6\\mathbb{Z}$), quan hệ $\\sim$ gãy tính bắc cầu!
              </div>
            </div>

            <div class="slide-glass-card" style="display:flex; flex-direction:column; justify-content:center; background:rgba(28,15,22,0.82)!important; border-left:5px solid #38bdf8!important; padding:18px 22px; border-radius:12px;">
              <b style="color:#7dd3fc; font-size:clamp(1.15rem, 1.48vw, 1.32rem);">4) Tính chất phổ dụng &amp; Ba nhận diện</b>
              <div style="font-size:clamp(1.04rem, 1.34vw, 1.2rem); line-height:1.65; color:#fffbeb; margin-top:6px;">
                - $\\operatorname{Frac}(R)$ là trường nhỏ nhất chứa $R$ (duy nhất sai khác đẳng cấu).<br>
                - $\\operatorname{Frac}(\\mathbb{Z}) \\cong \\mathbb{Q}$, $\\operatorname{Frac}(F[x]) \\cong F(x)$, $\\operatorname{Frac}(\\mathbb{Z}[i]) \\cong \\mathbb{Q}(i)$.
              </div>
            </div>
          </div>

          <div class="slide-glass-card anim-card anim-d2" style="padding:14px 22px; background:rgba(28,15,22,0.94)!important; border:1.5px solid #fde047!important; color:#fef08a!important; font-size:clamp(1.05rem, 1.35vw, 1.2rem); text-align:center; line-height:1.55;">
            <b>🌟 Khép lại hành trình 10 Chương Cấu Trúc Đại Số:</b>
            <span style="color:#ffffff; font-weight:600;">Tập hợp &amp; Quan hệ (Ch.0)</span> $\\longrightarrow$
            <span style="color:#fca5a5; font-weight:600;">Nhóm, Thương &amp; Đẳng cấu (Ch.1–5)</span> $\\longrightarrow$
            <span style="color:#86efac; font-weight:600;">Vành, Iđêan &amp; Đặc số (Ch.6–8)</span> $\\longrightarrow$
            <span style="color:#fde047; font-weight:700;">Trường các thương $\\operatorname{Frac}(R)$ (Ch.9)!</span>
          </div>
        </div>
      `
    }
  ]
};
