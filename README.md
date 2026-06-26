<p align="center">
  <img src="public/favicon.svg" alt="NexaFlow AI Logo" width="80" />
</p>

<h1 align="center">NexaFlow AI</h1>

<p align="center">
  <b>Next-Gen Data Automation Platform</b><br/>
  <i>A premium, pixel-perfect landing page built for the Frontend Battle 3.0 — VibeCoding Competition.</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-green" />
</p>

---

## ✨ Overview

NexaFlow AI is a high-fidelity, single-page landing website for a fictional AI-powered data automation platform. The project showcases:

- **Choreographed entry animations** — staggered fade-ups, gradient reveals, and counter roll-ups
- **Dynamic pricing matrix** — real-time currency conversion (USD / INR / EUR) with monthly ↔ yearly billing toggle
- **Interactive feature accordion** — expand/collapse with smooth panel transitions
- **Testimonial carousel** — auto-rotating cards with manual navigation
- **Fully responsive design** — optimised for desktop, tablet, and mobile breakpoints
- **Accessibility-first** — semantic HTML5, ARIA attributes, keyboard navigation, and focus management

---

## 🎨 Design System

| Token | Hex | Usage |
|---|---|---|
| **Forsythia** | `#FFC801` | Primary accent, CTAs, highlights |
| **Deep Saffron** | `#FF9932` | Secondary accent, gradients |
| **Arctic Powder** | `#F3F4F4` | Body text, light surfaces |
| **Oceanic Noir** | `#0D2436` | Dark backgrounds, cards |
| **Abyssal Anchor** | `#0B171E` | Deepest background layer |

**Typography:**
- **Display:** JetBrains Mono (headings, labels, navigation)
- **Body:** Inter (paragraphs, descriptions)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev) |
| Build Tool | [Vite 8](https://vite.dev) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Linting | [OxLint](https://oxc.rs) |
| Icons | 14 custom SVGs (Heroicons-based) |
| Fonts | Google Fonts (JetBrains Mono, Inter) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or yarn / pnpm)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/jeevanmarshal/NexaFlow-AI.git
cd NexaFlow-AI

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Build for Production

```bash
npm run build
npm run preview    # Preview the production build locally
```

### Lint

```bash
npm run lint
```

---

## 📁 Project Structure

```
nexaflow-ai/
├── public/
│   ├── svgs/                  # 14 SVG icon assets
│   ├── favicon.svg            # Browser tab icon
│   ├── icons.svg              # SVG sprite sheet
│   └── og-image.png           # Open Graph social preview
├── src/
│   ├── components/
│   │   ├── features/          # AccordionItem component
│   │   ├── layout/            # Navbar, Footer
│   │   ├── pricing/           # PricingCard, BillingToggle, CurrencyDropdown
│   │   └── sections/          # HeroSection, FeaturesSection, PricingSection, SocialProof
│   ├── data/                  # Pricing matrix & feature data
│   ├── hooks/                 # Custom React hooks
│   ├── styles/                # Global CSS, animations, Tailwind theme
│   ├── App.jsx                # Root application component
│   └── main.jsx               # React DOM entry point
├── index.html                 # HTML shell with SEO meta tags
├── vite.config.js             # Vite + Tailwind plugin config
├── package.json
└── .gitignore
```

---

## 🖥️ Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Animated headline, subtext, dual CTA buttons, live metric counters |
| 2 | **Features** | Accordion-style feature list with icon highlights |
| 3 | **Pricing** | 3-tier card grid with billing toggle & currency switcher |
| 4 | **Social Proof** | Auto-rotating testimonial carousel with avatars |
| 5 | **Footer** | Navigation links, newsletter signup, social icons |

---

## ⚡ Performance

- **Zero external JS dependencies** beyond React + Vite
- **CSS-only animations** — no animation libraries
- **Optimized SVG assets** — inline where possible
- **Lazy transitions** via `IntersectionObserver` for scroll-triggered animations

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🏆 Competition

Built for **Frontend Battle 3.0 — VibeCoding Competition**

- **Strict color palette** — no deviations from the provided hex values
- **Typography locked** — JetBrains Mono + Inter only
- **Assets restricted** — only the 14 provided SVGs used
- **Accessibility audited** — semantic HTML, ARIA roles, keyboard support

---

<p align="center">
  Made with ☕ and 💛
</p>
