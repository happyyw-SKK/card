# card (웹 명함)

A single-page static "web business card" for 백굴비. Pure HTML/CSS/vanilla JS — no build step, no package manager, no backend.

- `index.html` — markup and SVG character
- `styles.css` — styling and the 3D flip animation
- `script.js` — click/keyboard flip interaction and accessibility attributes

## Cursor Cloud specific instructions

- There are no dependencies to install and no build step. The update script is intentionally a no-op.
- To run locally, serve the static files from the repo root, e.g. `python3 -m http.server 8000`, then open `http://localhost:8000/`. Opening `index.html` via `file://` also works but a static server is preferred for correct relative paths.
- There are no lint or automated test suites in this repo. "Testing" means serving the page and verifying the card renders and flips on click (and Enter/Space).
- Google Fonts (Noto Sans KR) loads via CDN at runtime; the page falls back to system fonts when offline, so missing fonts are not a failure.
