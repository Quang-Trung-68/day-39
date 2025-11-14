# F8 Fullstack Project - Bài tập về nhà Day 39

Ứng dụng Todo List sử dụng React Router và tự xây dựng Redux + React-Redux library.

## 📦 Cấu trúc dự án

```txt
src/
├── components/          # UI components tái sử dụng (Header, Footer)
├── configs/            # Cấu hình routes và layouts
├── helpers/            # Hàm tiện ích (todoStorage)
├── layouts/            # Layout templates (Default, Auth, NoLayout)
├── libs/               # Thư viện tự viết
│   ├── redux/         # Redux library (createStore)
│   └── react-redux/   # React-Redux library (Provider, hooks)
├── pages/              # Các trang chính (TodoApp, NotFound)
├── store/              # Redux store (reducer, constants)
├── routes.js           # Cấu hình routing
├── App.jsx             # Component chính
└── main.jsx            # Entry point
```

## 🚀 Cách cài đặt & chạy dự án

```bash
# Clone repo
git clone https://github.com/Quang-Trung-68/day-39.git

cd day-39

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

```

## ✨ Tính năng

- ✅ Tự xây dựng Redux & React-Redux
- ✅ Thêm todo mới
- ✅ Đánh dấu hoàn thành
- ✅ Chỉnh sửa todo
- ✅ Xóa todo
- ✅ Lưu trữ vào localStorage

## 🛠️ Công nghệ sử dụng

- **React 19** - UI library
- **React Router 7** - Routing
- **Redux** - State management
- **Vite** - Build tool
- **localStorage** - Data persistence

## 🚀 Deploy

```bash
# Deploy Vercel
https://day-39-rho.vercel.app/
```

---
