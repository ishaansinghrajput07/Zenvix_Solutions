# Zenvix Solutions — Frontend

Premium international EdTech + Career platform. Frontend only (React + Vite + Tailwind + Framer Motion).

## Run locally

```bash
npm install
npm run dev
```

## What's built so far

- **Architecture** — full component/data/page structure in place (see below).
- **Navbar** — sticky glass navbar, animated dropdowns (Programs / Career / Resources), mobile hamburger menu with accordion submenus.
- **Hero** — full headline/copy/CTAs/trust-indicator layout, plus the signature "career journey dashboard" visual (`ProgressRail` component) with floating status cards.

Every other section (`Programs`, `LearningExperience`, `CareerSupport`, `HowItWorks`, `SuccessStories`, `About`, `Footer`) is scaffolded as a lightweight placeholder with the correct anchor id, ready to be built out next in the same visual language.

## Structure

```
src/
  components/
    Navbar.jsx
    Logo.jsx
    ProgressRail.jsx   ← signature journey-rail visual, reused across sections
    Hero.jsx
    Programs.jsx
    LearningExperience.jsx
    CareerSupport.jsx
    HowItWorks.jsx
    SuccessStories.jsx
    About.jsx
    Footer.jsx
  data/
    navigation.js
    programs.js
  pages/
    Home.jsx
  App.jsx
  main.jsx
  index.css
```

## Design tokens (tailwind.config.js)

- **Colors** — `paper`/`surface` (light neutrals), `navy` (primary text/dark anchor), `slate` (secondary text), and an accent system: `violet`, `electric` (blue), `cyan`, `emerald` — used across the journey stages (Learn → Build → Prepare → Get Hired) and section icons.
- **Type** — `font-display` (Space Grotesk, headlines/CTAs), `font-body` (Inter, copy/nav), `font-mono` (JetBrains Mono, eyebrows/labels/stage numbers — gives the "dashboard" feel).
- **Signature element** — `ProgressRail`: a stepped rail with a gradient connector line, used in the Hero's dashboard card and intended for reuse in Learning Experience / How It Works so the journey motif stays consistent site-wide.

Light mode only — no dark theme is implemented, per spec.
