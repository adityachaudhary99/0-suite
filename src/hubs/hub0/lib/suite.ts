// Shared landing data — hubs, their tools (linked to real routes), and the inline
// Lucide icon set. Imported by the hero variants and the page body so everything
// stays in one place.

export const ICONS: Record<string, string> = {
  terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  shieldCheck: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  cloudOff: '<path d="m2 2 20 20"/><path d="M5.78 5.78A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.3-.19"/><path d="M21.53 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7 7 0 0 0 10 5.07"/>',
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  gitBranch: '<line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  arrowUpRight: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  contrast: '<circle cx="12" cy="12" r="10"/><path d="M12 18a6 6 0 0 0 0-12v12z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
};

export interface Tool { name: string; href: string; }
export interface Hub {
  name: string; slug: string; url: string; icon: string; accent: string;
  count: string; tagline: string; desc: string; tools: Tool[];
  cls: string; featured: boolean; delay: string;
}

export const hubs: Hub[] = [
  {
    name: 'dev0', slug: 'dev0', url: '/dev0', icon: 'terminal', accent: '#2383e2',
    count: '10', tagline: 'Developer utilities',
    desc: 'The everyday developer toolbox — decode, parse, convert and inspect without leaving the tab.',
    tools: [
      { name: 'JWT decoder', href: '/dev0/jwt' },
      { name: 'regex tester', href: '/dev0/regex' },
      { name: 'cron parser', href: '/dev0/cron' },
      { name: 'base64', href: '/dev0/base64' },
      { name: 'epoch', href: '/dev0/epoch' },
      { name: 'JSON→types', href: '/dev0/json-to-types' },
      { name: 'jq', href: '/dev0/jq' },
      { name: 'ERD', href: '/dev0/erd' },
      { name: 'UUID', href: '/dev0/uuid' },
      { name: 'cert inspector', href: '/dev0/cert' },
    ],
    cls: 'sm:col-span-2 sm:row-span-2', featured: true, delay: '0ms',
  },
  {
    name: 'web0', slug: 'web0', url: '/web0', icon: 'globe', accent: '#0f9488',
    count: '6', tagline: 'Network & web',
    desc: 'DNS lookup, RDAP search, HTTP header analysis, WebSocket testing, email headers and CIDR math.',
    tools: [
      { name: 'DNS lookup', href: '/web0/dns' },
      { name: 'RDAP search', href: '/web0/rdap' },
      { name: 'HTTP headers', href: '/web0/headers' },
      { name: 'WebSocket', href: '/web0/ws' },
      { name: 'email headers', href: '/web0/email' },
      { name: 'CIDR calc', href: '/web0/cidr' },
    ],
    cls: '', featured: false, delay: '70ms',
  },
  {
    name: 'data0', slug: 'data0', url: '/data0', icon: 'database', accent: '#9065b0',
    count: '1', tagline: 'Data & SQL',
    desc: 'Run SQL over CSV, Parquet and JSON with DuckDB-WASM. Joins, CTEs, window functions — data never leaves the tab.',
    tools: [
      { name: 'SQL query engine', href: '/data0' },
    ],
    cls: '', featured: false, delay: '140ms',
  },
  {
    name: 'privacy0', slug: 'privacy0', url: '/privacy0', icon: 'shield', accent: '#448361',
    count: '4', tagline: 'Privacy & safety',
    desc: 'PII scrubber, metadata stripper, AES-256-GCM encrypted notes and a browser fingerprint inspector.',
    tools: [
      { name: 'PII scrubber', href: '/privacy0/scrub' },
      { name: 'metadata stripper', href: '/privacy0/metadata' },
      { name: 'encrypted notes', href: '/privacy0/notes' },
      { name: 'fingerprint', href: '/privacy0/fingerprint' },
    ],
    cls: 'sm:col-span-3', featured: false, delay: '210ms',
  },
];

export const stats = [
  { num: '21', accent: false, label: 'tools' },
  { num: '0', accent: true, label: 'servers' },
  { num: '0', accent: true, label: 'trackers' },
  { num: '0', accent: true, label: 'API keys' },
];
