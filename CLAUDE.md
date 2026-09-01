# NatsGo Landing - AI Context

Public landing page for NatsGo, the commuter-facing app for Natsco bus tracking, arrivals, fares, terminals, promos, and route updates.

Use this file when opening only the `natsgo-landing/` repo in Claude Code, Codex, or another coding assistant.

## Product direction

- This is a public marketing/preview page for commuters, not an admin or backend explainer.
- Keep copy focused on what riders can do: check nearby buses, arrival estimates, terminal details, fares, promos, and announcements.
- Do not expose or explain backend internals such as ESP32, GSM, Railway API, device heartbeat, admin dashboard architecture, or database flow in public sections.
- The tone should feel practical, modern, and premium-minimal, not technical and not template-like.

## Visual direction

- Keep the design clean, airy, and mobile-first.
- Use the real app screenshots in `public/screenshots/`; avoid fake AI-looking phone mockups.
- The hero uses the real home screen asset: `public/screenshots/commuter-home-hero.png`.
- Keep the phone preview visible but not oversized. On mobile, it should sit beside the hero text or peek naturally without creating a huge empty lower area.
- Avoid bulky shadows, oversized text, loud gradients, and obvious stock-template sections.
- The background may use soft route/map line motion, but keep it subtle.

## Motion direction

- Do not add a loading/splash screen on refresh.
- Page open should use only subtle content entrance animation: navbar, hero text, hero phone, and scroll reveal sections.
- Keep motion short and smooth. Avoid anything that delays access to the content.
- Respect `prefers-reduced-motion`.

## CTA links

CTA links are intentionally disabled for now.

Current source of truth:

```js
// src/data/landingContent.js
export const appLinks = {
  web: '',
  android: '',
}
```

Only add real URLs when explicitly requested.

## Tech stack

- Vue 3 with `<script setup>`
- Vite
- Plain CSS with scoped component styles
- Content lives mostly in `src/data/landingContent.js`
- Shared global design tokens live in `src/style.css`

## Structure

Key files:

- `src/App.vue` - page composition
- `src/style.css` - global tokens, base styles, shared reveal animation
- `src/data/landingContent.js` - nav labels, feature copy, screen data, FAQ data, CTA links
- `src/components/ui/AppNavbar.vue` - top navigation and CTA buttons
- `src/components/sections/HeroSection.vue` - first viewport
- `src/components/sections/PhoneShowcase.vue` - app screenshots carousel/experience section
- `src/components/sections/WhySection.vue` - commuter value points
- `src/components/sections/FeaturesSection.vue` - commuter-facing feature cards
- `src/components/sections/HowItWorksSection.vue` - simple ride flow
- `src/components/sections/CtaSection.vue` - bottom CTA

## Development

```bash
npm install
npm run dev
npm run build
```

Vercel settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

Production repo:

- `https://github.com/vnino2003/natsgo-landing.git`
- Branch: `main`

## Git workflow

When editing this repo directly:

1. Make the landing change inside `natsgo-landing/`.
2. Run `npm run build` before pushing.
3. Commit and push to `origin/main`.
4. If this repo is being used through the root `capstone` workspace, update and push the root submodule pointer too.
