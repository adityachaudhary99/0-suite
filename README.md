# 0-suite

**Privacy-first browser tools.** Every tool runs entirely client-side — nothing is uploaded, no API keys, no accounts, no tracking. Open DevTools → Network and watch: your data never leaves the page.

One integrated [Astro](https://astro.build) app. Each hub is a route group with its own accent and theme, sharing a single semantic-token design system.

![0-suite demo — 40 client-side browser tools across five hubs](docs/media/0-suite-demo.gif)

## Hubs

| Hub | Accent | What it does |
|-----|--------|--------------|
| **dev0** | blue | 13 developer utilities — JWT decoder, regex tester, cron parser, base64, epoch converter, JSON→types, jq playground, ERD generator, UUID/ULID, cert inspector, JSON formatter, SHA hash, diff checker |
| **web0** | teal | 6 network tools — DNS-over-HTTPS lookup, RDAP, HTTP header audit, WebSocket tester, email-header analyzer, CIDR calculator |
| **data0** | violet | 7 data tools — DuckDB-WASM SQL workbench (CSV / Parquet / JSON) plus CSV⇄JSON, YAML⇄JSON, SQL formatter, Markdown-table generator, base converter and chart maker |
| **privacy0** | emerald | 7 privacy tools — PII scrubber, file metadata stripper, encrypted local notes, browser-fingerprint check, password generator, file-hash checker, image steganography |
| **ui0** | amber | 7 design & web tools — color picker (+ WCAG contrast), CSS gradient maker, meta / Open-Graph preview, favicon generator, QR code, URL encoder, lorem ipsum |

`hub0` is the unified landing page that links them together — 40 tools across five hubs, one real URL each.

> Why client-side matters now: the safest way to use these alongside AI tools is to never hand your data to anyone's servers. Scrub it, decode it, query it — locally, in the tab.

## Develop

Requires Node 18+.

```bash
npm install
npm run dev       # local dev server
npm run build     # static build to dist/
npm run preview   # serve the production build
npm run check     # astro check (type/diagnostics)
```

## Architecture

Single Astro 5 app, `output: 'static'` (MPA) — every route ships its own CSS bundle, so per-hub themes never collide.

```
src/
  pages/
    index.astro        # hub0 landing
    <hub>/*.astro      # one route per tool (dev0/, web0/, data0/, privacy0/, ui0/)
  hubs/
    <hub>/             # per-hub components, styles, lib
```

- **Stack:** Astro + Tailwind + TypeScript, all hubs (data0 included — it's Astro, not Vite).
- **Theme:** paper (light) / nocturne (dark) via `data-theme`, persisted to `localStorage['0-theme']`.
- **Token contract:** hubs use semantic CSS vars (`--bg`, `--ink`, `--accent`, …) — never raw colors. Accent is the only per-hub differentiator.
- **Heavy deps run in-browser:** DuckDB-WASM (data0), exifr + pdf-lib (privacy0 metadata), jq-web / quicktype-core / dagre (dev0).
- **SEO:** static URLs, unique titles + meta, `SoftwareApplication` JSON-LD, sitemap, robots.txt.

The canonical site URL is a placeholder in `astro.config.mjs` (`site:`) — set it once a domain is chosen.

## Licensing scaffold

Everything is free. An optional offline license-verification path (ECDSA P-256, public-key-only, no network calls) is wired in so paid features can be added later without refactoring — it gates nothing today. See `docs/MONETIZATION.md` in the parent project for the design. No signing keys live in this repo.

## Roadmap

`ai0` (on-device AI) and `media0` (transcode/transcribe) are planned as separate deployments and are **not** in this repo.

## License

[MIT](./LICENSE)
