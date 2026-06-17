// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// 0-suite — single integrated app. Each hub is a route group under src/pages/<hub>/.
// MPA static output: every route ships its own CSS bundle, so per-hub themes never collide.
export default defineConfig({
  // Canonical site URL — single source for canonical tags, OG URLs, and the sitemap.
  // PLACEHOLDER: domain not finalized. Change this one value once the domain is chosen.
  site: 'https://0-suite.example',
  output: 'static',
  integrations: [tailwind(), sitemap()],
  build: { inlineStylesheets: 'auto' },
  vite: {
    optimizeDeps: {
      // Pre-bundle heavy deps so the dev server serves one request each instead of
      // flooding the browser with hundreds of unbundled ESM modules (ERR_INSUFFICIENT_RESOURCES).
      // dev0: jq-web/quicktype-core/dagre (CJS); privacy0: exifr/pdf-lib (metadata stripper).
      include: ['jq-web', 'quicktype-core', 'dagre', 'exifr', 'pdf-lib'],
      // data0 ships its own wasm; let Vite leave it alone
      exclude: ['@duckdb/duckdb-wasm'],
    },
  },
});
