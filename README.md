# Sleepcomet Landing Page ☄️

![Sleepcomet Landing Page](public/logo.svg)

> **Monitoring is Endpoints.** The public-facing gateway to the Sleepcomet ecosystem.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Turbo Drive](https://img.shields.io/badge/Turbo_Drive-8.0-red?style=for-the-badge&logo=hotwire&logoColor=white)](https://turbo.hotwired.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

---

## 📖 About

This repository contains the source code for the **Sleepcomet Landing Page**. It serves as the first touchpoint for users, showcasing the platform's capabilities, pricing, and integrations.

Designed for speed and aesthetics, it uses **Next.js 16** and **Tailwind CSS v4**, enhanced with **Turbo Drive** for SPA-like navigation without the complexity of a full client-side app.

## ✨ Features

- **⚡ Blazing Fast:** Built on Next.js 16 Server Components.
- **🚀 Turbo Drive:** Instant page transitions without full reloads.
- **🎨 Modern Design:** Crafted with Shadcn UI and custom Tailwind animations.
- **📱 Fully Responsive:** Optimized for mobile, tablet, and desktop.
- **📊 Integrated Analytics:** Vercel Analytics & Microsoft Clarity setup.
- **📝 Form Handling:** Type-safe forms with `react-hook-form` and `zod`.
- **🌙 Dark Mode:** First-class support for dark and light themes.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Navigation:** [Turbo Drive (@hotwired/turbo)](https://turbo.hotwired.dev/)
- **Components:** [Radix UI](https://www.radix-ui.com/) (via Shadcn UI)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Analytics:** Vercel Analytics & Microsoft Clarity

## 📂 Project Structure

```bash
lp/
├── public/                # Static assets
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/
│   │   ├── landing-page/  # Hero, Features, CTA sections
│   │   ├── ui/            # Reusable UI components
│   │   └── turbo-init.tsx # Turbo Drive initialization
│   ├── hooks/             # Custom hooks
│   └── lib/               # Utilities
└── ...
```

## 🚀 Getting Started

We love contributions! Follow these steps to set up the project locally.

### Prerequisites

- Node.js 20+
- npm or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sleepcomet/sleepcomet-lp.git
    cd sleepcomet-lp
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    pnpm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file for analytics keys (optional for local dev):
    ```env
    NEXT_PUBLIC_CLARITY_ID="your_clarity_id"
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID="your_gtm_id"
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### We are looking for help with:
- [ ] New Landing Page sections (Pricing, Team, Blog)
- [ ] Accessibility improvements
- [ ] Internationalization (i18n)
- [ ] Performance optimizations

### How to Contribute
1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact

- **Website:** [https://www.sleepcomet.com/](https://www.sleepcomet.com/)
- **Console:** [https://console.sleepcomet.com/](https://console.sleepcomet.com/)
- **GitHub:** [https://github.com/sleepcomet](https://github.com/sleepcomet)

---

<p align="center">
  Built with ❤️ by the Sleepcomet Team
</p>
