# AVN-Stack

> **Local development environment for MacOS, Windows and Linux.**  
> A modern, Electron-based alternative to Laragon — manage PHP services, virtual hosts, databases, and projects from a sleek, intuitive GUI.

[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-MacOS%20%7C%20Windows%20%7C%20Linux-lightgrey)](#installation)
[![Version](https://img.shields.io/badge/version-1.1.0-green)](CHANGELOG.md)

**Homepage:** [https://avn.io.vn](https://avn.io.vn)  
**Author:** Steven Phan

---

## 🚀 Overview

AVN-Stack is a desktop application that manages a full local PHP development stack — web servers, databases, caches, and mail catchers — without the overhead of Docker or VMs. Services run as native processes for maximum performance, and projects are served over `.test` domains with automatic local DNS resolution and SSL via **mkcert**.

Built with **Electron 32**, **React 18**, **TypeScript 5**, **Vite 5**, and **Tailwind CSS 3**.

---

## ✨ Features

- **⚡ One-click Service Management** — Start, stop, and restart Nginx, Apache, MariaDB, PHP-FPM, Redis, Memcached, PostgreSQL, and Mailpit instantly.
- **🌐 Virtual Hosts** — Automatically create `.test` domains (e.g. `my-project.test`) with zero-configuration DNS updates.
- **🛡️ Secure by Default** — Integrated **mkcert** support to trust a local CA and generate SSL certificates for all your projects with one click.
- **📦 PHP Profiles** — Assign isolated PHP-FPM processes per project with dedicated `php.ini` settings and specific extensions (Laravel, WordPress, Symfony, etc.).
- **🛠️ Smart Project Scaffolding** — Scaffold new projects from templates or point to existing directories. It automatically skips scaffolding if code is already present.
- **🌙 Background Mode** — Close the main window to minimize the app to the system tray. Services keep running, and the dashboard is always one click away.
- **🐳 Zero Dependencies** — No Docker, no WSL, no system-wide manual installs. Everything is self-contained in your user directory.
- **🐚 Integrated Terminal** — A full xterm.js terminal for every project, pre-configured with the correct binary paths.
- **🗄️ Database Tools** — One-click access to **phpMyAdmin** (`phpmyadmin.test`) with automatic root login.
- **🌏 Multi-language** — Full support for English and Vietnamese interfaces.

---

## 🏗️ Services

| Service       | Default Port(s)         | Notes                                  |
|---------------|-------------------------|----------------------------------------|
| **Nginx**     | 80 (HTTP), 443 (HTTPS)  | High-performance default web server    |
| **Apache**    | 80 (HTTP), 443 (HTTPS)  | Optional alternative                   |
| **MariaDB**   | 3306                    | MySQL-compatible relational database   |
| **PostgreSQL**| 5432                    | Advanced relational database           |
| **PHP-FPM**   | 9100–9600 (dynamic)    | Multi-version concurrent PHP runtimes  |
| **Redis**     | 6379                    | In-memory data structure store         |
| **Mailpit**   | 1025 (SMTP), 8025 (UI)  | Modern local mail catcher & UI        |

---

## 📂 Data Directory

AVN-Stack stores all configuration, service binaries, and databases in a self-contained folder:

```
~/.avnstack/
├── bin/               # Service binaries (per platform)
├── etc/               # Web server configs (Nginx/Apache)
├── data/              # MariaDB and PostgreSQL data
├── logs/              # Real-time service logs
├── ssl/               # mkcert CA and domain certificates
└── settings.json      # Global app settings
```

---

## 🛠️ Building from Source

### Prerequisites
- **Node.js** 20+
- **npm** 9+
- **Git**

### Steps
1. Clone the repository: `git clone https://github.com/marixdev/avnstack.git`
2. Install dependencies: `npm install`
3. Run development mode: `npm run dev`
4. Build for your platform:
   - MacOS: `npm run dist:mac`
   - Windows: `npm run dist:win`
   - Linux: `npm run dist:linux`

---

## 📜 License

Distributed under the **GPL-3.0 License**.  
© AVN-Stack — [https://avn.io.vn](https://avn.io.vn)
