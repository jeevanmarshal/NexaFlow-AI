<div align="center">
  <img src="public/favicon.svg" alt="NexaFlow AI" width="72" height="72" />
  <h1>NexaFlow AI</h1>
  <p><strong>Next-Gen AI Data Automation Platform</strong></p>
  <p>
    A premium, high-converting SaaS landing page engineered for
    <strong>Frontend Battle 3.0 — VibeCoding Competition · Phase 1</strong>
  </p>

  <p>
    <a href="https://nexa-flow-ai-five.vercel.app" target="_blank">
      <img src="https://img.shields.io/badge/Live%20Demo-▶%20View%20Site-FFC801?style=for-the-badge&logoColor=172B36" alt="Live Demo" />
    </a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" />
    <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
    <img src="https://img.shields.io/badge/License-MIT-22c55e?style=flat-square" />
    <img src="https://img.shields.io/badge/Deployment-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" />
  </p>
</div>

---

## Table of Contents

- [Overview](#overview)
- [Competition Context](#competition-context)
- [Key Features](#key-features)
- [Design System](#design-system)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [SVG Asset Map](#svg-asset-map)
- [Performance & Constraints](#performance--constraints)
- [Accessibility](#accessibility)
- [SEO](#seo)
- [License](#license)

---

## Overview

NexaFlow AI is a pixel-perfect, fully responsive SaaS landing page for a fictional AI-driven data automation platform. Built under strict competition constraints — locked asset pack, no external UI or animation libraries, isolated state updates, and a 500ms animation budget — every decision in this codebase has a reason behind it.

The page is structured around two scored engineering features:

- **Feature 1** — A multi-currency pricing matrix that computes prices dynamically via a configuration object and updates the DOM directly through refs, without triggering a single React re-render outside the targeted text nodes.
- **Feature 2** — A Bento Grid on desktop that collapses to a touch-optimized Accordion on mobile, with a custom hook that transfers the active hover index across the breakpoint boundary when the browser is resized mid-interaction.

---

## Competition Context

| Field | Detail |
|---|---|
| **Event** | Frontend Battle 3.0 — VibeCoding Competition |
| **Phase** | Phase 1 — Next-Gen AI Platform Speed Run |
| **Format** | Online · 4-hour build window |
| **Date** | 26 June 2026 |
| **Allowed Frameworks** | React, Next.js, Vue, Nuxt, SolidJS, Angular, Vanilla JS |
| **Allowed Styling** | Tailwind CSS, Bootstrap, or custom CSS |

### Scoring Breakdown (100 pts)

| Category | Points |
|---|---|
| Feature 1: Dynamic pricing matrix — no hardcoded values | 15 |
| Re-render & state isolation guardrail | 15 |
| Feature 2: Bento-to-Accordion + context transfer + zero-dependency rule | 10 |
| Semantic DOM layout | 15 |
| SEO hygiene & metadata | 10 |
| Loading sequence performance (≤ 500ms) | 5 |
| Asset compliance — all SVGs, colors, and fonts used | 15 |
| Breakpoint fluidity | 10 |
| Motion accuracy | 5 |

---

## Key Features

### Feature 1 — Performance-Isolated Currency Switcher

Pricing is driven entirely by a multi-dimensional configuration object in `src/data/pricingMatrix.js`. A `computePrice(tierKey, currency, billingCycle)` function derives every displayed value — no prices are hardcoded anywhere in JSX.

```js
// Base rate × regional tariff × billing cycle multiplier
const rawPrice = tier.baseMonthlyUSD * tariff.regionalMultiplier * cycleMultiplier;
```

When the user switches currency or billing cycle, the update path is:

```
BillingToggle / CurrencyDropdown
  → PricingSection state (billingCycle, currency)
    → PricingCard useEffect
      → priceRef.current.textContent = `${symbol}${amount}`  ← direct DOM mutation
```

The card's JSX structure is **never re-rendered** on toggle. The price `<span>` is a bare ref target — React's reconciler has nothing to diff. This is the isolation the DevTools profiler test checks for.

### Feature 2 — Bento Grid ↔ Accordion with State Persistence

On desktop (`≥ 768px`), features are presented in an asymmetric CSS Grid Bento layout. On mobile (`< 768px`) the same data renders as an accessible, CSS-only Accordion list.

The hard part — handled by `useActiveFeatureIndex.js`:

```
User hovers Bento card at index 3 on desktop
  → lastHoveredIndex.current = 3

User drags browser window below 768px breakpoint
  → resize handler fires
  → detects desktop → mobile transition
  → setActiveIndex(lastHoveredIndex.current)  ← accordion opens at panel 3
```

No external libraries involved. The accordion expand/collapse is a pure `max-height` CSS transition — no JS height calculation, no layout thrashing.

### Hero Pipeline Visualizer

An SVG-animated data flow diagram sits inside the hero section, showing a live pipeline — ingestion node → NexaEngine → edge target — with animated stroke-dashoffset paths and a slowly rotating cog using `@keyframes`. Fully CSS-driven.

### Responsive Navigation

The sticky navbar collapses to a mobile drawer on small screens, toggled with the provided `x-mark.svg` and a custom hamburger icon. Includes a search trigger using `search.svg`.

---

## Design System

All tokens are defined as CSS variables in `src/styles/index.css` via Tailwind's `@theme` directive. No values are magic-numbered in components.

### Color Palette

| Token | Hex | Role |
|---|---|---|
| **Arctic Powder** | `#F1F6F4` | Body text, light surface backgrounds |
| **Mystic Mint** | `#D9E8E2` | Muted borders, secondary light accents |
| **Forsythia** | `#FFC801` | Primary accent — CTAs, highlights, active states |
| **Deep Saffron** | `#FF9932` | Secondary accent — gradient midpoints, hover glows |
| **Nocturnal Expedition** | `#114C5A` | Teal mid-tone — scrollbar hover, section tints |
| **Oceanic Noir** | `#172B36` | Primary dark background — cards, page base |

```css
/* src/styles/index.css */
@theme {
  --color-arctic-powder:          #F1F6F4;
  --color-mystic-mint:            #D9E8E2;
  --color-forsythia:              #FFC801;
  --color-deep-saffron:           #FF9932;
  --color-nocturnal-expedition:   #114C5A;
  --color-oceanic-noir:           #172B36;
}
```

### Typography

| Role | Family | Weights | Used For |
|---|---|---|---|
| `--font-display` | JetBrains Mono | 400 · 500 · 700 | H1–H3, pricing figures, labels, nav, badges |
| `--font-body` | Inter | 300 · 400 · 500 · 600 · 700 | Body copy, descriptions, CTAs, form elements |

Both loaded via Google Fonts `@import` in `index.css`. No font files bundled.

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | React 19 | Concurrent features, stable |
| Build | Vite 8 | Near-instant HMR, fast production builds |
| Styling | Tailwind CSS 4 | Utility-first with `@theme` CSS variable integration |
| Linting | OxLint | Rust-speed linting, zero-config |
| Animations | Native CSS / `@keyframes` | Competition rules ban CSS-in-JS animation engines |
| Icons | 14 provided SVGs | Competition rules ban external icon libraries |
| Fonts | Google Fonts | CDN-loaded JetBrains Mono + Inter |
| Deployment | Vercel | Instant CI/CD from `main` branch |

### Zero Runtime Animation Dependencies

All motion is implemented with:
- CSS `transition` properties (micro-interactions: `150ms ease-out`)
- CSS `@keyframes` (entry sequence, price update slide)
- `max-height` accordion expansion (`350ms cubic-bezier(0.4, 0, 0.2, 1)`)
- SVG `stroke-dashoffset` animation (hero pipeline flow)

No Framer Motion. No GSAP. No Radix. No Shadcn.

---

## Architecture

### State Isolation Pattern (Pricing)

```
PricingSection
├── useState: billingCycle ('monthly' | 'annual')
├── useState: currency ('USD' | 'INR' | 'EUR')
├── BillingToggle  ← sets billingCycle
├── CurrencyDropdown  ← sets currency
└── PricingCard × 3  ← memo(PricingCard)
    ├── priceRef (span)         ← textContent mutated directly
    ├── periodRef (span)        ← textContent mutated directly
    └── billedPeriodRef (span)  ← textContent mutated directly
```

`PricingCard` is wrapped with `React.memo`. The parent re-renders on state change but the cards skip reconciliation entirely. Price spans are updated via `ref.current.textContent` — zero Virtual DOM diffing on the price nodes.

### Bento ↔ Accordion Context Transfer

```
useActiveFeatureIndex()
├── activeIndex: number          — drives both layouts
├── isMobile: boolean            — determines which layout renders
├── lastHoveredIndex: useRef     — persists last hovered bento index
├── handleBentoHover(i)          — updates ref + state on mouseenter
└── resize listener
    └── desktop → mobile?
        └── setActiveIndex(lastHoveredIndex.current)
```

### Component Tree

```
App
├── Navbar
├── main
│   ├── HeroSection
│   ├── FeaturesSection
│   │   ├── [mobile]  AccordionList → AccordionItem × 6
│   │   └── [desktop] BentoGrid → BentoCard × 6
│   ├── PricingSection
│   │   ├── BillingToggle
│   │   ├── CurrencyDropdown
│   │   └── PricingCard × 3
│   └── SocialProof
└── Footer
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18.x
- npm ≥ 9.x

### Install & Run

```bash
# Clone
git clone https://github.com/jeevanmarshal/NexaFlow-AI.git
cd NexaFlow-AI

# Install
npm install

# Dev server → http://localhost:5173
npm run dev
```

### Build & Preview

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
NexaFlow-AI/
├── public/
│   ├── svgs/                       ← All 14 competition SVG assets
│   │   ├── arrow-path.svg
│   │   ├── arrow-trending-up.svg
│   │   ├── chart-pie.svg
│   │   ├── chevron-down.svg
│   │   ├── chevron-left.svg
│   │   ├── chevron-right.svg
│   │   ├── chevron-up.svg
│   │   ├── chevron-up-solid.svg
│   │   ├── cog-8-tooth.svg
│   │   ├── cube-16-solid.svg
│   │   ├── link.svg
│   │   ├── link-solid.svg
│   │   ├── search.svg
│   │   └── x-mark.svg
│   ├── favicon.svg
│   ├── icons.svg
│   └── og-image.png
│
├── src/
│   ├── components/
│   │   ├── features/
│   │   │   ├── AccordionItem.jsx   ← Single accordion panel (aria-expanded, role=region)
│   │   │   ├── AccordionList.jsx   ← Mobile accordion container
│   │   │   ├── BentoCard.jsx       ← Desktop feature card with hover tracking
│   │   │   └── BentoGrid.jsx       ← Asymmetric CSS Grid layout
│   │   ├── layout/
│   │   │   ├── Navbar.jsx          ← Sticky header, mobile drawer, search
│   │   │   └── Footer.jsx          ← 4-column footer grid
│   │   ├── pricing/
│   │   │   ├── BillingToggle.jsx   ← CSS-only pill toggle (monthly/annual)
│   │   │   ├── CurrencyDropdown.jsx← Custom listbox (no Radix/Headless)
│   │   │   └── PricingCard.jsx     ← React.memo + ref-based price updates
│   │   └── sections/
│   │       ├── HeroSection.jsx     ← Headline, CTAs, SVG pipeline visualizer
│   │       ├── FeaturesSection.jsx ← Bento/Accordion orchestrator
│   │       ├── PricingSection.jsx  ← Pricing state owner
│   │       └── SocialProof.jsx     ← Testimonials, logos, stats
│   │
│   ├── data/
│   │   ├── pricingMatrix.js        ← PRICING_CONFIG object + computePrice()
│   │   └── featuresData.js         ← Feature content with SVG icon paths
│   │
│   ├── hooks/
│   │   └── useActiveFeatureIndex.js← Bento ↔ Accordion state transfer hook
│   │
│   ├── styles/
│   │   ├── index.css               ← @theme tokens, global reset, accordion CSS
│   │   └── animations.css          ← @keyframes, hero entry, price update, reduced-motion
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html                      ← Meta tags, OG tags, Twitter Card, canonical
├── vite.config.js
├── package.json
└── .gitignore
```

---

## SVG Asset Map

All 14 competition-provided SVG assets are meaningfully integrated on the page:

| SVG | Location | Purpose |
|---|---|---|
| `arrow-path.svg` | FeaturesSection (Bento + Accordion) | Adaptive Automation feature icon |
| `arrow-trending-up.svg` | Hero badge · PricingCard "Most Popular" | Growth signal, popularity indicator |
| `chart-pie.svg` | FeaturesSection (Bento + Accordion) | Predictive Analytics feature icon |
| `chevron-down.svg` | AccordionItem (closed) · CurrencyDropdown | Expand / open dropdown |
| `chevron-left.svg` | SocialProof carousel | Previous testimonial |
| `chevron-right.svg` | BentoCard "Explore" indicator · SocialProof | Next item / directional cue |
| `chevron-up.svg` | ScrollToTop floating button | Scroll back to top |
| `chevron-up-solid.svg` | AccordionItem (open state) | Collapse indicator |
| `cog-8-tooth.svg` | Hero pipeline visualizer (NexaEngine node) · FeaturesSection | Configuration / orchestration |
| `cube-16-solid.svg` | Hero pipeline visualizer (Edge Target) · FeaturesSection | Infrastructure / edge layer |
| `link.svg` | Footer "Edge Network" link | External link indicator |
| `link-solid.svg` | Hero pipeline (Ingestion node) · PricingCard bullets | Connected / active state |
| `search.svg` | Navbar search button | Search trigger |
| `x-mark.svg` | Navbar mobile menu close · CurrencyDropdown close | Dismiss / close |

---

## Performance & Constraints

### Animation Budget

| Interaction | Duration | Easing |
|---|---|---|
| Hero headline entry | `200ms` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Hero sub / CTA entry | `200ms` · staggered at `100ms / 200ms` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Hero visual fade-in | `300ms` · delayed `150ms` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Total entry sequence | **≤ 400ms** (under 500ms cap) | — |
| Price update slide | `150ms` | `ease-out` |
| Hover / toggle micro-interactions | `150ms` | `ease-out` |
| Accordion open/close | `350ms` | `cubic-bezier(0.4, 0, 0.2, 1)` |

### Banned — Not Present

- ❌ Framer Motion
- ❌ `@radix-ui/*`
- ❌ Shadcn / Tailwind UI
- ❌ HeadlessUI
- ❌ Any CSS-in-JS animation engine
- ❌ Hardcoded price values in JSX

### `prefers-reduced-motion`

All animations are disabled for users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Accessibility

- `<html lang="en">` — document language declared
- `<header role="banner">`, `<main>`, `<footer role="contentinfo">` — landmark roles
- `<nav aria-label="Main navigation">` — navigation labelled
- All `<section>` elements use `aria-labelledby` pointing to their heading
- Accordion: `aria-expanded`, `aria-controls`, `id` on triggers; `role="region"`, `aria-labelledby` on panels
- Currency dropdown: `aria-haspopup="listbox"`, `aria-expanded`, `role="listbox"`, `aria-selected` on options
- Decorative SVGs: `aria-hidden="true"` throughout
- Interactive elements: keyboard-navigable with visible focus states
- Heading hierarchy: single `<h1>` → `<h2>` per section → `<h3>` per card

---

## SEO

Full metadata in `index.html`:

```html
<meta name="description" content="..." />
<meta name="keywords" content="..." />
<meta name="robots" content="index, follow" />

<!-- Open Graph -->
<meta property="og:title" content="NexaFlow AI — Next-Gen Data Automation" />
<meta property="og:description" content="..." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://nexa-flow-ai-five.vercel.app" />
<meta property="og:image" content="/og-image.png" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="NexaFlow AI — Next-Gen Data Automation" />

<link rel="canonical" href="https://nexa-flow-ai-five.vercel.app" />
```

---

## License

MIT © 2026 — open source, free to fork.

---

<div align="center">
  <p>Built with ☕ and 💛 for <strong>Frontend Battle 3.0</strong></p>
  <a href="https://nexa-flow-ai-five.vercel.app">nexa-flow-ai-five.vercel.app</a>
</div>
