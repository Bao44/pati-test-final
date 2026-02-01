# PATI Test Final

**Link bài test**:

```bash
https://pati-test-final.vercel.app/
```

**Hoặc**:
Click vào [đây][1] để xem.

[1]: https://pati-test-final.vercel.app/

**Clone mã nguồn**:

```bash
git clone https://github.com/Bao44/pati-test-final.git
cd pati-test-final
```

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** CSS Transitions & Tailwind utility classes
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)

## Tính năng nổi bật

Dự án tái hiện các thành phần UI/UX phức tạp của trang gốc:

* **Responsive toàn diện:** Tối ưu hóa giao diện cho Mobile, Tablet (iPad Pro 1024px), Laptop và Desktop màn hình rộng.
* **Pillars Switcher (Trụ cột sức khỏe):** Component chuyển đổi chế độ tương tác cao giữa "Organ" (Giao diện Đỏ) và "Cellular" (Giao diện Cam), thay đổi hình nền, icon và nội dung động.
* **Chatbot thông minh:** Widget Chatbot với hiệu ứng mở rộng mượt mà (Framer Motion). Tự động chuyển thành giao diện "Bottom Sheet" (ngăn kéo dưới) khi ở trên Mobile.
* **Modal Nhà khoa học:** Hiệu ứng Backdrop Blur (kính mờ) và Animation khi xem chi tiết thông tin các chuyên gia.
* **Mega Menu & Header:** Navigation bar điều hướng với Dropdown menu tùy chỉnh và Sidebar menu cho mobile.
* **Bảng tính tiết kiệm:** Layout so sánh giá linh hoạt, chuyển từ dạng ngang (Desktop) sang dạng dọc (Mobile/Tablet).
* **Video Carousel:** Slider video tin cậy từ chuyên gia với khả năng kéo thả (Drag-to-scroll).

## Cấu trúc dự án

Dự án được tổ chức theo kiến trúc hướng tính năng (Feature-based):

```text
├── app/                  # Next.js App Router (Pages & Layout)
├── components/           # React Components
│   ├── chatbot/          # Widget Chatbot & Logic
│   ├── layout/           # Header, Footer, Mobile Menu
│   ├── sections/         # Các section chính của Landing Page
│   │   ├── clinical_proof/
│   │   ├── comparison/
│   │   ├── expert_trust/ # Video Carousel
│   │   ├── hero/
│   │   ├── im8_gold_standard/
│   │   ├── pillars_switch/ # Section chuyển đổi Organ/Cellular phức tạp
│   │   ├── savings_comparison/
│   │   ├── science/      # Grid chuyên gia & Modals
│   │   └── ...
│   └── ui/               # Các UI nhỏ dùng chung (Button, Card...)
├── lib/                  # Chứa data mẫu (Mock data constants)
├── public/               # Tài nguyên tĩnh (Images, Fonts, Icons)
└── types/                # Định nghĩa TypeScript Types