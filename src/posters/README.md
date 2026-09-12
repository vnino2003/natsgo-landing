# NatsGo pre-launch posters

Five original Vue/CSS campaign compositions, each a fixed 1920 × 1080 landscape canvas (16:9). These are screen/social presentation assets, not a specified physical print size.

Run `npm run dev -- --host 127.0.0.1 --port 5198` from the landing folder. Open `/posters.html` for navigation, or an individual clean page:

- `/posters.html?clean#launch`
- `/posters.html?clean#tracking`
- `/posters.html?clean#nori`
- `/posters.html?clean#access`
- `/posters.html?clean#arrivals`

The introduction says “Track NatsCo buses with NatsGo.” All posters highlight Web & Android with platform icons; the public URL is deliberately omitted. The access poster shows two mobile devices, including browser chrome for mobile web.

On the Nori studio page, use the screenshot picker to insert a real chat PNG/JPEG/WebP. The image stays local and is retained in session storage when space permits, including a clean view opened from the studio. It is not uploaded or committed. The blank phone is intentional until the real chat screenshot is provided; no conversation is recreated. For a permanent screenshot, put the approved image in public and replace the initial `chatScreenshot` source in `Posters.vue`.

Arrivals copy is grounded in `backend/ml/prediction/train.py` and its README: a RandomForest model learns from recorded trips/GPS logs to estimate passing times. The marketing explanation avoids promising guaranteed accuracy or conflating historical predictions with live tracking.

The canvas scales to fit the window without changing its composition. Clean views contain no studio controls. For exact exports use `node scripts/export-posters.mjs` with Playwright installed, or set `PLAYWRIGHT_MODULE` to a local Playwright entry point. `POSTER_URL` overrides the local server URL. Exports go to `output/posters/`. The script also checks rendering, page navigation, viewport fit, and browser errors.

Production build includes the independent `posters.html` entry. Existing landing-page content is unaffected.

## Editing and provenance

- Copy, order and October 2 announcement: `Posters.vue`. No store availability or download-now claims.
- All layout, device frames and visual styling: `posters.css`, using the landing page's blue/teal palette, Inter/system font stack, light surfaces and route motifs.
- Logo: existing `/natsgo-mark.svg`; wordmark follows the landing navbar.
- Nori: `Nori.vue`, static original SVG paths from landing `NoriSection.vue`; no generated character artwork.
- `Preview.vue` deliberately uses editable illustrative UI and labeled sample data, not screenshots of production. Map geometry is schematic. Replace these previews with approved current screenshots before final publication. The landing folder's older screenshots contain retired Capy and outdated UI, so they are not used.
- Reference advertisements informed general hierarchy and device presentation only. None of their images, copy or layouts are embedded.

For real screenshots, replace the `Preview` inside each device with an image styled `width:100%;height:100%;object-fit:contain` and verify the screen aspect ratio. Do not crop away material status information or present sample ETA as live data. Confirm October 2 before publication.

## September 12: supplied screenshots
Six posters now use original user-supplied JPGs stored in public/screenshots/campaign. Screen.vue maps Home, tracking overview, bus details, arrivals and terminals. Nori defaults to the supplied welcome screen (not a conversation). Account was not copied into public assets because it contains a personal email and has no campaign placement. Both platform mockups use the supplied Home capture; the mobile browser bar is presentation framing.

Images are copied without recompression or AI rewriting. Frames are larger, upright and use object-fit:contain to retain all content. Source JPEG softness cannot be recovered by layout changes. Export also creates 3840 x 2160 PNGs for clearer poster typography and presentation. ETA callout matches the bus-details capture: 14 minutes, seen four minutes ago. All values are captured data, not current live status. The original illustrative Preview.vue is no longer imported by the posters.
