# Giáo trình Cấu trúc Đại số – Hệ thống Học tập & Ôn luyện Tương tác (Modular Edition)

Dự án đã được **tách nhỏ thành 36 tệp con theo từng phần/chương** trong thư mục `src/` và tự động tổng hợp vào tệp `index.html` thông qua cơ chế `@input` (tương tự lệnh `\input{...}` trong LaTeX).

---

## 📂 Cấu trúc thư mục

```text
cautrucdaisostudy/
├── index.html                        <-- Tệp chính chạy web (tự động sinh ra từ src/)
├── build.py                          <-- Công cụ ghép các tệp trong src/ thành index.html
├── build.bat                         <-- Nhấp đúp chuột (trên Windows) để chạy build.py
├── .github/workflows/auto-build.yml  <-- Tự động ghép index.html ngay trên GitHub khi bạn sửa bất kỳ tệp nào trong src/
└── src/
    ├── main.template.html            <-- TỆP KHUNG CHÍNH (~110 dòng, chứa các lệnh @input)
    ├── css/
    │   ├── 01-theme-base.css         <-- Giao diện nền tảng & Bảng màu 4 mùa + Học tập
    │   ├── 02-topbar-seasons.css     <-- Thanh công cụ & Đồ họa vòm 4 mùa
    │   ├── 03-features-and-lab.css   <-- CSS của Phòng Lab, Vở nháp, Sổ tay
    │   └── 04-smart-exam.css         <-- CSS của Phòng thi & Luyện tập thông minh
    ├── html/
    │   ├── layout/
    │   │   ├── header-and-sidebar.html <-- Topbar, Banner, Modal Phòng Lab & Sidebar
    │   │   └── slides-workspace.html   <-- Khung trình chiếu Slide 16:9
    │   ├── chapters/                 <-- 10 Chương Lý thuyết + Bảng đối chiếu (350–600 dòng/tệp)
    │   │   ├── ch0.html ... ch9.html
    │   │   └── compare.html
    │   └── exercises/                <-- 10 Chương Bài tập tự luận (170–310 dòng/tệp)
    │       ├── practice-header.html
    │       ├── ex0.html ... ex9.html
    │       └── practice-review.html
    └── js/
        ├── data/
        │   ├── slides-data.js        <-- Dữ liệu trình chiếu Slide 10 chương
        │   └── exam-bank.js          <-- Ngân hàng câu hỏi trắc nghiệm & Máy sinh đề động
        └── modules/
            ├── 01-core-ui-and-slides.js    <-- Điều hướng Tab, Tìm kiếm, Slide Engine
            ├── 02-algebra-lab.js           <-- Phòng Lab: Bảng Cayley & Thẻ ghi nhớ Flashcard
            ├── 03-seasonal-and-ring-lab.js <-- Hiệu ứng 4 mùa, Bộ phân tích vành Z_n, Quiz nhanh
            ├── 04-academic-tools.js        <-- Vở nháp LaTeX, Gợi ý chứng minh, Máy tính S_n, Sổ tay
            └── 05-smart-exam-engine.js     <-- Hệ thống Thi & Chấm điểm thông minh
```

---

## 🛠️ Cách chỉnh sửa cực kỳ đơn giản

### Cách 1: Chỉnh sửa trực tiếp ngay trên giao diện web GitHub (Không cần cài đặt gì)
1. Trên kho GitHub của bạn, bấm vào thư mục `src/` -> mở tệp con muốn sửa (ví dụ `src/html/chapters/ch1.html` để sửa Lý thuyết Chương 1, hoặc `src/js/data/exam-bank.js` để thêm câu hỏi trắc nghiệm).
2. Bấm biểu tượng cây bút (**Edit**), sửa nội dung rồi bấm **Commit changes**.
3. GitHub Actions (`.github/workflows/auto-build.yml`) sẽ **tự động chạy `build.py`** trên đám mây để ghép lại tệp `index.html` mới nhất và cập nhật thẳng lên trang GitHub Pages của bạn sau 15–30 giây!

### Cách 2: Chỉnh sửa trên máy tính cá nhân
1. Mở tệp con cần sửa trong thư mục `src/` bằng VS Code hoặc Notepad.
2. Sau khi lưu, nhấp đúp vào tệp **`build.bat`** (hoặc chạy lệnh `python build.py` trong Terminal).
3. Tệp `index.html` sẽ được cập nhật ngay lập tức trong 0.1 giây.
