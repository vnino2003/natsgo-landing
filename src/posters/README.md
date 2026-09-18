# NatsGo campaign posters

Eight Vue/CSS compositions: six feature/introduction landscapes, the 1080 × 1350 portrait launch hero at page 7, and a 1920 × 1080 first-trip guide at page 8. The campaign announces October 5 availability on Web & Android, with no public URL CTA.

Run `npm run dev -- --host 127.0.0.1 --port 5198`. Open `/posters.html` for the studio. Individual clean views:

- `/posters.html?clean#launch`
- `/posters.html?clean#tracking`
- `/posters.html?clean#nori`
- `/posters.html?clean#access`
- `/posters.html?clean#arrivals`
- `/posters.html?clean#terminals`
- `/posters.html?clean#portrait`
- `/posters.html?clean#how-it-works`

The canvas scales to fit the window without changing its composition. The portrait leads with commuter benefits and a dominant tracking phone. The final first-trip guide helps people move from interest to using the app. Footer client attribution is omitted; NATSCO remains in relevant product and service copy.

## Screenshots and devices

`Screen.vue` maps supplied images from `public/screenshots/campaign`. Images retain their native aspect ratio with uniform slim bezels, aligned corners, restrained shadows, and no artificial camera overlay. Both platform devices are mobile and preserve the supplied screen without additional browser or camera overlays. The frame follows the supplied slim metallic-device reference, with a 4px total edge and rounded glass.

Original screenshots are not recompressed or rewritten. Larger exports keep poster typography sharp but cannot recover missing screenshot detail. Captured bus information is not current live data.

Nori defaults to the supplied welcome screen. Use the Nori studio screenshot picker for a real conversation. The selected image stays local in session storage when space permits and persists into a clean view opened from the studio. It is not uploaded or committed.

## Editing

- Landscape content, page order and studio: `Posters.vue`.
- Portrait: `Portrait.vue`.
- First-trip guide: `HowItWorks.vue`.
- Layouts, typography and device styling: `posters.css`.
- Logo: existing `/natsgo-mark.svg`; colors and wordmark follow landing branding.
- Nori: `Nori.vue`, original SVG paths from the landing character.
- Screenshot mapping: `Screen.vue`.

Arrivals copy describes machine-learning estimates from recorded trip patterns, consistent with the backend model, without promising guaranteed accuracy. Legacy `Preview.vue` is unused. References informed general presentation only; their artwork and copy are not embedded.

## Verification and exports

Run `node scripts/export-posters.mjs` with Playwright installed, or set `PLAYWRIGHT_MODULE` to its local entry point. `POSTER_URL` overrides the server URL. Exports go to `output/posters/refined/`:

- Landscape: 1920 × 1080 and 3840 × 2160 (`-4k.png`).
- Portrait: 1080 × 1350 and 2160 × 2700 (`-hires.png`).

The script checks all canvases, screenshot loading/proportions, symmetric bezels, footer clearance, obsolete copy, page order, navigation, clean mode, local screenshot persistence, viewport fit, and browser errors. `npm run build` includes the independent `posters.html` entry.
