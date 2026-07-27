# ABYSSAL 🌊

A fully animated deep-ocean expedition website built with **Next.js (App Router)** in **plain JavaScript — no TypeScript**. Scrolling feels like descending into the sea: a live depth gauge tracks your dive, bioluminescent particles drift upward, and every section reveals with motion.

## Tech

- **Next.js 14** (App Router)
- **React 18**
- **Framer Motion** for scroll reveals, staggered text, parallax, and the rotating logbook
- Pure CSS keyframes for ambient effects (rising motes, glow pulses, caustic light, marquee)
- No TypeScript, no Tailwind — just `styled-jsx` (built into Next.js) and `next/font`

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open the site
# http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

## What's animated

| Element | Animation |
| --- | --- |
| Hero title | Staggered per-word blur-in reveal |
| Background | Parallax + drifting caustic light |
| Dive gauge (left) | Live depth readout tied to scroll position |
| Particles | Rising bioluminescent motes (CSS) |
| Zones | Scroll-triggered reveals + animated light bars |
| Creatures | Hover lift, glow halo, swaying glyphs |
| Stats | Count-up numbers when scrolled into view |
| Logbook | Auto-rotating quotes with `AnimatePresence` |
| Footer | Infinite text marquee |

All animations respect `prefers-reduced-motion`.

## Structure

```
abyssal/
├── app/
│   ├── globals.css      # design tokens + keyframes
│   ├── layout.js        # fonts + metadata
│   └── page.js          # section assembly
├── components/          # one file per section
│   ├── Navbar.js
│   ├── DiveGauge.js     # signature scroll-depth gauge
│   ├── Hero.js
│   ├── Particles.js
│   ├── Zones.js
│   ├── Creatures.js
│   ├── Stats.js
│   ├── Logs.js
│   ├── CTA.js
│   └── Footer.js
└── lib/
    └── useCountUp.js    # count-up hook
```

*Content is a fictional expedition, written to show off the design. Facts about ocean zones are broadly accurate.*
"# -Ariana_Travels" 
