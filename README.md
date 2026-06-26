<p align="center">
  <img src="public/favicon.svg" alt="NexaFlow AI Logo" width="80" />
</p>

<h1 align="center">NexaFlow AI</h1>

<p align="center">
  <b>Next-Gen Data Automation Platform</b><br/>
  <i>Premium AI SaaS landing page — dynamic pricing matrix, Bento-to-Accordion with resize context transfer, state-isolated DOM updates. Built for Frontend Battle 3.0.</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-green" />
</p>

---

## ✨ Overview

**NexaFlow AI** is a premium, fully responsive SaaS landing page built as a competition submission for **Frontend Battle 3.0 — VibeCoding Phase 1**. The project targets a fictional AI-driven data automation platform and was engineered under strict architectural, performance, and asset-compliance constraints within a 4-hour build window.

### What Makes This Submission Stand Out

**Feature 1 — Performance-Isolated Currency Switcher**
A multi-dimensional pricing configuration matrix (`pricingMatrix.js`) drives all price values dynamically. Switching between INR / USD / EUR and Monthly / Annual billing never triggers a global React re-render — price text nodes are updated via direct `useRef` DOM mutation with `React.memo` shallow comparison, keeping the parent component tree completely stable. Verified clean under Chrome DevTools Profiler.

**Feature 2 — Bento-to-Accordion with State Persistence**
On desktop (≥768px) features render as an asymmetric CSS Grid Bento layout. On mobile (<768px) they collapse into a touch-optimized Accordion. The critical detail: if a user is hovering over Bento card N and resizes the browser past the mobile breakpoint, the accordion automatically opens at panel N — implemented via a custom `useActiveFeatureIndex` hook with a `lastHoveredIndex` ref and resize event listener. Zero external component libraries used.

---

## 🎨 Design System

| Token | Hex | Usage |
|---|---|---|
| **Arctic Powder** | `#F1F6F4` | Body text, light surfaces |
| **Mystic Mint** | `#D9E8E2` | Secondary light accent, muted borders |
| **Forsythia** | `#FFC801` | Primary accent, CTAs, highlights |
| **Deep Saffron** | `#FF9932` | Secondary accent, gradients |
| **Nocturnal Expedition** | `#114C5A` | Teal accent, scrollbar hover |
| **Oceanic Noir** | `#172B36` | Dark backgrounds, cards |

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
| Icons | 14 custom SVGs (Heroicons-based) — all meaningfully integrated |
| Fonts | Google Fonts (JetBrains Mono, Inter) |

### Tech Constraints Honored

- No Framer Motion, Radix, Shadcn, or HeadlessUI
- All animations via native CSS transitions and `@keyframes`
- All 14 provided SVG icons integrated meaningfully
- Exact brand hex palette and typography from the competition asset pack
- Full semantic HTML5 + Open Graph SEO metadata
- Entry animation total ≤ 500ms (no TTI blocking)

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
│   ├── svgs/                  # 14 SVG icon assets (all used)
│   ├── favicon.svg            # Browser tab icon
│   ├── icons.svg              # SVG sprite sheet
│   └── og-image.png           # Open Graph social preview
├── src/
│   ├── components/
│   │   ├── features/          # AccordionItem, AccordionList, BentoCard, BentoGrid
│   │   ├── layout/            # Navbar (with search), Footer
│   │   ├── pricing/           # PricingCard (React.memo), BillingToggle, CurrencyDropdown
│   │   └── sections/          # HeroSection, FeaturesSection, PricingSection, SocialProof
│   ├── data/                  # Pricing matrix config & feature data
│   ├── hooks/                 # useActiveFeatureIndex (Bento↔Accordion state transfer)
│   ├── styles/                # Global CSS, animations, Tailwind @theme
│   ├── App.jsx                # Root component + ScrollToTop
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
| 1 | **Hero** | Animated headline, subtext, dual CTA buttons, live pipeline visualizer with SVG flow animations |
| 2 | **Features** | Desktop Bento Grid ↔ Mobile Accordion with cross-breakpoint state persistence |
| 3 | **Pricing** | 3-tier card grid with billing toggle, currency switcher, ref-based DOM price updates |
| 4 | **Social Proof** | Auto-rotating testimonial carousel with prev/next arrows and dot indicators |
| 5 | **Footer** | Navigation links, newsletter signup, social icons |

---

## 📋 SVG Asset Usage Map

All 14 provided SVGs are meaningfully integrated:

| SVG | Used In |
|---|---|
| `arrow-path.svg` | FeaturesSection (Bento/Accordion icon) |
| `arrow-trending-up.svg` | Hero badge, PricingCard "Most Popular" badge |
| `chart-pie.svg` | FeaturesSection (Bento/Accordion icon) |
| `chevron-down.svg` | AccordionItem (closed state), CurrencyDropdown |
| `chevron-left.svg` | SocialProof carousel (prev arrow) |
| `chevron-right.svg` | SocialProof carousel (next arrow) |
| `chevron-up.svg` | ScrollToTop floating button |
| `chevron-up-solid.svg` | AccordionItem (open state) |
| `cog-8-tooth.svg` | Hero pipeline visualizer (NexaEngine node) |
| `cube-16-solid.svg` | Hero pipeline visualizer (Edge Target node), FeaturesSection |
| `link.svg` | FeaturesSection (Bento/Accordion icon) |
| `link-solid.svg` | Hero pipeline visualizer, PricingCard feature bullets |
| `search.svg` | Navbar search button |
| `x-mark.svg` | Navbar mobile close, CurrencyDropdown close |

---

## ⚡ Performance

- **Zero external JS dependencies** beyond React + Vite
- **`React.memo`** on PricingCard for state isolation (prevents unnecessary re-renders)
- **CSS-only animations** — no animation libraries
- **Optimized SVG assets** — inline where possible
- **`prefers-reduced-motion`** media query for accessibility
- **Lazy transitions** via `IntersectionObserver` for scroll-triggered animations

---

## ♿ Accessibility

- `<html lang="en">` with proper document outline
- Semantic landmarks: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`
- `aria-labelledby` on all sections
- `aria-expanded` and `aria-controls` on accordion triggers
- `role="region"` on accordion panels
- `aria-hidden="true"` on all decorative SVGs
- Keyboard-navigable interactive elements
- `prefers-reduced-motion` media query

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🏆 Competition

Built for **Frontend Battle 3.0 — VibeCoding Competition**

---

<p align="center">
  Made with ☕ and 💛
</p>
