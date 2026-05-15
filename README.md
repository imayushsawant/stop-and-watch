# Stop&Watch ⏱️

A beautifully crafted stopwatch and countdown timer web app built with React. Featuring an aurora glassmorphism design system dubbed **"Liquid Time"** — complete with animated backgrounds, circular progress rings, and smooth micro-interactions.

Live demo: https://stop-and-watch-flame.vercel.app/

---

## ✨ Features

- **Stopwatch** — Count up with hours, minutes, and seconds. Start, pause, and reset with a single click. A circular ring with 60 tick marks animates in real time.
- **Countdown Timer** — Set a custom duration (hours / minutes / seconds) and count down to zero. Visual progress ring drains as time elapses.
- **Client-Side Routing** — Seamless navigation between the home screen, stopwatch, and timer via React Router (no full-page reloads).
- **Responsive Design** — Fully adaptive layout from mobile to desktop.

---

## 🛠 Tech Stack

| Layer       | Technology                                             |
| ----------- | ------------------------------------------------------ |
| Framework   | [React 19](https://react.dev)                          |
| Bundler     | [Vite 8](https://vite.dev)                             |
| Routing     | [React Router 7](https://reactrouter.com)              |
| Styling     | Vanilla CSS (custom design tokens, glassmorphism)      |
| Typography  | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts |
| Linting     | ESLint                                                 |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** (or npm / yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/stop-and-watch.git
cd stop-and-watch

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

The app will be available at **http://localhost:5173** by default.

### Build for Production

```bash
pnpm build
pnpm preview   # preview the production build locally
```

---

## 📁 Project Structure

```
stop-and-watch/
├── index.html            # HTML entry point (Google Fonts, meta tags)
├── package.json
├── vite.config.js
├── eslint.config.js
├── public/               # Static assets
└── src/
    ├── main.jsx          # App entry — router setup (createBrowserRouter)
    ├── App.jsx           # Root layout (header, aurora background, footer)
    ├── App.css           # Component-level styles
    ├── index.css         # Global reset, design tokens & CSS custom properties
    ├── homepage.jsx      # Landing page with Stopwatch / Timer cards
    ├── stopwatch.jsx     # Stopwatch feature (count-up logic + ring UI)
    └── timer.jsx         # Timer feature (countdown logic + input form)
```

---

## 🧭 Routes

| Path           | Component   | Description                              |
| -------------- | ----------- | ---------------------------------------- |
| `/`            | `HomePage`  | Landing page — choose Stopwatch or Timer |
| `/stop-watch`  | `Stopwatch` | Count-up stopwatch with circular ring    |
| `/timer`       | `Timer`     | Countdown timer with custom duration     |

---

## 🎨 Design System — "Liquid Time"

The UI follows a **retro-futuristic, aurora-infused dark theme**:

- **Aurora Background** — Three animated gradient blobs (violet, cyan, rose) drift across the viewport with a subtle grain texture overlay.
- **Glassmorphism Cards** — Translucent containers with backdrop blur, glowing borders on hover, and radial gradient highlights.
- **Circular Progress Ring** — SVG-based ring with 60 tick marks (stopwatch) and a smooth `strokeDasharray` progress animation.
- **Neon Glow Accents** — Violet for stopwatch elements, cyan for timer elements, rose for pause states.
- **Page Transitions** — Fade + slide + blur entrance animation on every route change.

### Color Palette

| Token          | Value     | Usage                |
| -------------- | --------- | -------------------- |
| `--accent-1`   | `#7c3aed` | Violet — stopwatch   |
| `--accent-2`   | `#06b6d4` | Cyan — timer         |
| `--accent-3`   | `#f43f5e` | Rose — pause / alerts|
| `--accent-4`   | `#10b981` | Emerald — reserved   |
| `--bg-void`    | `#07060b` | Background           |

---

## 📜 License

This project is private. Feel free to fork and adapt for personal use.
