# AVN-Stack

> **Môi trường phát triển cục bộ dành cho MacOS, Windows và Linux.**  
> Một giải pháp thay thế Laragon hiện đại dựa trên Electron — quản lý các dịch vụ PHP, virtual host, cơ sở dữ liệu và dự án từ một giao diện đồ họa (GUI) mượt mà và trực quan.

[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-MacOS%20%7C%20Windows%20%7C%20Linux-lightgrey)](#cài-đặt)
[![Version](https://img.shields.io/badge/version-1.1.0-green)](CHANGELOG.vi.md)

**Trang chủ:** [https://avn.io.vn](https://avn.io.vn)  
**Tác giả:** Steven Phan

---

## 🚀 Tổng quan

AVN-Stack là ứng dụng desktop giúp quản lý toàn bộ stack phát triển PHP cục bộ — bao gồm web server, cơ sở dữ liệu, cache và mail catcher — mà không cần đến Docker hay máy ảo (VM). Các dịch vụ chạy dưới dạng tiến trình native để đạt hiệu suất tối đa, và các dự án được phục vụ qua domain `.test` với khả năng tự động phân giải DNS nội bộ và hỗ trợ SSL qua **mkcert**.

Được xây dựng với **Electron 32**, **React 18**, **TypeScript 5**, **Vite 5** và **Tailwind CSS 3**.

---

## ✨ Tính năng nổi bật

- **⚡ Quản lý dịch vụ một chạm** — Khởi động, dừng và khởi động lại Nginx, Apache, MariaDB, PHP-FPM, Redis, Memcached, PostgreSQL và Mailpit ngay lập tức.
- **🌐 Virtual Hosts** — Tự động tạo domain `.test` (ví dụ: `my-project.test`) với cơ chế cập nhật file hosts hệ thống tự động thông qua quyền quản trị.
- **🛡️ Bảo mật mặc định** — Tích hợp **mkcert** để tin tưởng CA cục bộ và tạo chứng chỉ SSL cho tất cả dự án chỉ với một cú nhấp chuột.
- **📦 PHP Profiles** — Gán các tiến trình PHP-FPM riêng biệt cho từng dự án với cài đặt `php.ini` và extension đặc thù (Laravel, WordPress, Symfony, v.v.).
- **🛠️ Khởi tạo dự án thông minh** — Hỗ trợ tạo dự án mới từ template hoặc sử dụng thư mục code có sẵn. Tự động bỏ qua bước cài đặt (scaffolding) nếu phát hiện code đã tồn tại.
- **🌙 Chế độ chạy nền** — Đóng cửa sổ chính để thu nhỏ ứng dụng xuống khay hệ thống (system tray). Các dịch vụ vẫn tiếp tục chạy và dashboard luôn sẵn sàng quay lại bất cứ lúc nào.
- **🐳 Không phụ thuộc hệ thống** — Không cần Docker, không cần WSL, không cần cài đặt thủ công trên toàn hệ thống. Mọi thứ được gói gọn trong thư mục người dùng của bạn.
- **🐚 Terminal tích hợp** — Terminal xterm.js đầy đủ cho mỗi dự án, được cấu hình sẵn các đường dẫn binary cần thiết.
- **🗄️ Công cụ Database** — Truy cập nhanh vào **phpMyAdmin** (`phpmyadmin.test`) với tính năng tự động đăng nhập root.
- **🌏 Đa ngôn ngữ** — Hỗ trợ đầy đủ giao diện tiếng Anh và tiếng Việt.

---

## 🏗️ Các dịch vụ hỗ trợ

| Dịch vụ       | Cổng mặc định           | Ghi chú                                        |
|---------------|-------------------------|------------------------------------------------|
| **Nginx**     | 80 (HTTP), 443 (HTTPS)  | Web server mặc định hiệu suất cao             |
| **Apache**    | 80 (HTTP), 443 (HTTPS)  | Lựa chọn thay thế                              |
| **MariaDB**   | 3306                    | Cơ sở dữ liệu tương thích MySQL                |
| **PostgreSQL**| 5432                    | Cơ sở dữ liệu quan hệ nâng cao                 |
| **PHP-FPM**   | 9100–9600 (năng động)   | Đa phiên bản PHP chạy đồng thời                |
| **Redis**     | 6379                    | Lưu trữ dữ liệu in-memory                     |
| **Mailpit**   | 1025 (SMTP), 8025 (UI)  | Trình bắt mail cục bộ hiện đại                |

---

## 📂 Thư mục dữ liệu

AVN-Stack lưu trữ tất cả cấu hình, binary dịch vụ và cơ sở dữ liệu trong một thư mục độc lập:

```
~/.avnstack/
├── bin/               # Binary của dịch vụ (theo từng nền tảng)
├── etc/               # Cấu hình Web server (Nginx/Apache)
├── data/              # Dữ liệu MariaDB và PostgreSQL
├── logs/              # Log dịch vụ thời gian thực
├── ssl/               # CA mkcert và chứng chỉ domain
└── settings.json      # Cài đặt ứng dụng toàn cục
```

---

## 🛠️ Build từ mã nguồn

### Yêu cầu hệ thống
- **Node.js** 20+
- **npm** 9+
- **Git**

### Các bước thực hiện
1. Clone repository: `git clone https://github.com/marixdev/avnstack.git`
2. Cài đặt dependency: `npm install`
3. Chạy chế độ phát triển: `npm run dev`
4. Build cho nền tảng của bạn:
   - MacOS: `npm run dist:mac`
   - Windows: `npm run dist:win`
   - Linux: `npm run dist:linux`

---

## 📜 Giấy phép

Được phát hành dưới giấy phép **GPL-3.0**.  
© AVN-Stack — [https://avn.io.vn](https://avn.io.vn)
