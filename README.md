# 0-suite

**Privacy-first browser tools suite.** All tools run entirely client-side, nothing is uploaded, no API keys, no tracking.

## Tools (Unified Suite — Single Deployment)

- **[dev0](./packages/dev0)** — 10 developer utilities (JWT decoder, regex tester, cron parser, base64, epoch, json-to-types, jq playground, ERD, UUID, cert inspector)
- **[web0](./packages/web0)** — 6 network tools (DNS lookup, RDAP, HTTP headers analyzer, WebSocket tester, email header analyzer, CIDR calculator)
- **[data0](./packages/data0)** — SQL query any CSV, Parquet, or JSON file in your browser via DuckDB-WASM
- **[privacy0](./packages/privacy0)** — Privacy-focused utilities (coming soon)

## Future Suites

Separate deployments (ai0, media0) are developed separately under browser-based-tools/ and will eventually move to their own repos. They'll link back to 0-suite from their sites.

## Development

This is a monorepo using npm/pnpm workspaces for the unified suite.

```bash
# Install dependencies (from 0-suite root)
npm install
# or: pnpm install

# Develop a specific tool
cd packages/dev0      # or: web0, data0, privacy0
npm run dev
```

## Architecture

Unified suite tools (packages/) are independently deployable as routes:
- **dev0:** Astro + Tailwind + TypeScript (blue accent `#2563eb`)
- **web0:** Astro + Tailwind + TypeScript (teal accent `#0d9488`)
- **data0:** Vite + vanilla CSS + TypeScript (violet accent `#7c3aed`)
- **privacy0:** (TBD)

Future suites (ai0, media0) are separate repos/deployments with their own stacks.

## Design

**Shared design principles:**
- **Per-hub minimal design:** White background + accent color, system-ui font + JetBrains Mono
- **Token contract:** Each hub uses semantic CSS vars (`--bg`, `--ink`, `--accent`, etc.) — never raw colors
- **Theme toggle:** Light/dark via `data-theme` attribute, persisted to `localStorage('0-theme')`
- **Trust strip:** Above the fold — "100% client-side — your data never leaves this page. Verify: DevTools → Network."
- **Typography:** system-ui for body/UI, JetBrains Mono (self-hosted via `@fontsource/jetbrains-mono`) for labels, data, code
- **SEO:** Real static URLs, unique `<title>`, meta descriptions, JSON-LD (`SoftwareApplication`), `robots.txt`, `sitemap.xml`
- **a11y:** 2px accent focus ring (offset 2px), all interactive elements, labels on inputs, `aria-live` for status updates, WCAG AA contrast

See `../docs/DESIGN.md` (meta-project) for full design register and token definitions.

## Entitlements & Licensing

Everything free at launch. Licensing infrastructure (ECDSA P-256 offline verification) is built in for future paid features without refactoring. See `../docs/MONETIZATION.md` for the architecture.

## License

MIT
