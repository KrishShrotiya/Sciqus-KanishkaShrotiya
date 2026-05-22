# Sciqus F1 Dashboard

A highly interactive, visually striking Formula 1 dashboard built with modern web technologies. This project features a sleek dark-mode aesthetic with glassmorphic elements, dynamic animations, and responsive layouts designed to give a premium, futuristic "Pit Wall" experience.

## 🏁 Features

* **Race Weekend Overview**: Dynamic carousel showcasing key moments (e.g., Las Vegas Night Race) with smooth transitions.
* **Pit Wall Strategy**: Visual breakdown of race strategies including tyre windows, undercut gaps, and remaining laps.
* **Driver Focus & Standings**: Interactive driver cards and a live 2026 driver championship leaderboard.
* **Circuit Telemetry**: Clean circuit layouts with sector analysis, speed traps, and DRS zone information.
* **Live Team Radio**: Interactive tabbed interfaces simulating live garage communications and team calls.
* **Responsive Design**: Fully responsive desktop layout (`index.html`) and a specialized mobile app view (`mobile.html`).

## 🛠️ Tech Stack

* **HTML5**: Semantic markup structuring the dashboard panels and grids.
* **Vanilla CSS3**: Custom design system utilizing CSS Grid, Flexbox, CSS Variables, glassmorphism (`backdrop-filter`), and fluid typography. No heavy CSS frameworks used.
* **Vanilla JavaScript**: Lightweight DOM manipulation for the interactive carousel, slider controls, tab switching, and scroll-triggered fade-in animations.

## 🚀 Getting Started

No build tools or package installations are required to run this project. It is built entirely with vanilla web technologies.

1. Clone the repository to your local machine.
2. Open the project folder.
3. Serve the directory using any local web server. For example, using Python:
   ```bash
   python3 -m http.server 8080
   ```
4. Open your browser and navigate to:
   * **Desktop View**: `http://localhost:8080/index.html`
   * **Mobile App View**: `http://localhost:8080/mobile.html`

## 🎨 Design System & Aesthetics

The UI is built to feel responsive and alive:
* **Micro-interactions**: Hover states that scale images, smooth transitions, and glowing pulse animations for "LIVE" indicators.
* **Performance**: Optimized DOM structure using `IntersectionObserver` for scroll reveals.
* **Typography & Colors**: Formula 1 inspired typography paired with a deep dark-mode palette and striking red accents.

---
*Built as a concept dashboard to showcase modern front-end UI/UX capabilities.*
