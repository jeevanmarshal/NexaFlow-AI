<div align="center">
  <img src="public/favicon.svg" alt="NexaFlow AI" width="64" />
  <h1>NexaFlow AI</h1>
  <p>A premium SaaS landing page for an AI-driven data automation platform.</p>

  <p>
    <a href="https://nexa-flow-ai-five.vercel.app">
      <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Site-FFC801?style=for-the-badge" />
    </a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" />
    <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
    <img src="https://img.shields.io/badge/Deployed-Vercel-000?style=flat-square&logo=vercel" />
  </p>
</div>

---

NexaFlow AI is a fully responsive, dark-themed landing page built with React and Tailwind CSS. It features a dynamic multi-currency pricing engine, a responsive Bento Grid that transitions into a mobile Accordion, and a CSS-animated hero pipeline visualizer — all without any external UI or animation libraries.

## Features

- **Dynamic Pricing Matrix** — Prices across three tiers (Starter, Pro, Enterprise) are computed in real time from a configuration object. Supports USD, INR, and EUR with a monthly/annual billing toggle. Price nodes update via direct DOM refs — no component re-renders on toggle.
- **Bento Grid → Accordion** — Features are displayed as an asymmetric CSS Grid on desktop. On mobile they collapse into an accessible accordion. If you're hovering a card when the window resizes past the mobile breakpoint, that panel opens automatically on the accordion side.
- **Hero Visualizer** — An SVG pipeline diagram with animated stroke-dashoffset flow lines and a rotating engine node, built entirely in CSS.
- **Fully Responsive** — Tested across 375px, 768px, and 1280px viewports with no horizontal overflow.
- **Accessible** — Semantic HTML5 landmarks, ARIA attributes on all interactive elements, keyboard navigation, and `prefers-reduced-motion` support.

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS 4** with custom CSS variable theme tokens
- **Google Fonts** — JetBrains Mono (headings) and Inter (body)
- **Native CSS animations** — no Framer Motion or animation libraries
- **OxLint** for linting

## Getting Started

```bash
git clone https://github.com/jeevanmarshal/NexaFlow-AI.git
cd NexaFlow-AI
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

```bash
npm run build    # production build
npm run preview  # preview the build locally
npm run lint     # run linter
```

## License

MIT
