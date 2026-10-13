<div align="center">

# Next Apple Clone

**A responsive clone of the apple.com UI.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

---

## Overview

Next Apple Clone recreates key pages of Apple's website as a front-end practice project. It focuses on Apple's layout system, typography, product carousels, and scroll-driven reveals, and it serves every image and video locally.

> This is an educational UI clone and is not affiliated with Apple Inc.

## Features

- **Home page:** hero section, promo cards, an entertainment carousel, and a services grid.
- **iPhone page** with product sections and actions.
- **Education Store page** (`/us-edu/store`) with responsive hero videos.
- **Global header and footer** that mirror Apple's navigation and footer columns.
- **Reusable hooks** for carousels and scroll-reveal animations.
- **Asset verification:** a build-time script confirms that all referenced media exists locally.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Tooling | ESLint, Node test runner |

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

```bash
git clone https://github.com/RithyBondeth/Next-Apple-Clone.git
cd Next-Apple-Clone
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Verify local assets and create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```text
Next-Apple-Clone/
├── app/
│   ├── page.tsx          # Home page
│   ├── iphone/           # iPhone page
│   └── us-edu/store/     # Education Store page
├── components/
│   ├── home/             # Hero, promo cards, entertainment carousel
│   ├── layout/           # Global header and footer
│   └── ui/               # Shared UI pieces
├── hooks/                # Carousel and scroll-reveal hooks
├── utils/constants/      # Navigation, footer, product, and store data
├── public/images/        # Local images and videos
└── scripts/              # Asset verification
```

## Author

**Rithy Bondeth** — Full Stack Developer & AI Engineer

[![Portfolio](https://img.shields.io/badge/Portfolio-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://bondeth.dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RithyBondeth)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rithy-bondeth-484073282/)
