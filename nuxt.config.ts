// Nuxt 4 config for the Construct website. The Go server has been
// retired; everything is served by Nitro. SEO, sitemap, robots,
// og-image, and schema-org all come from @nuxtjs/seo.
//
// Site URL is read from NUXT_PUBLIC_SITE_URL when set; defaults to
// production. The `seo` module uses this for canonical links,
// sitemap.xml entries, and og-image absolute URLs.

const SITE_URL = process.env.NUXT_PUBLIC_SITE_URL || 'https://lisaos.dev'

// Public marketplace catalog. Read server-side at build time to
// generate one /spaces/<slug> page per published Space (programmatic
// SEO) and to feed the dynamic sitemap source. CORS-open, no auth.
const MARKETPLACE_URL =
  process.env.NUXT_PUBLIC_MARKETPLACE_URL || 'https://my.lisaos.dev'

// Fetch every published Space slug, paging through the catalog. Used
// by the prerender hook below. Network failures degrade gracefully to
// an empty list — the build still succeeds, just without generated
// Space pages.
async function fetchMarketplaceSlugs(): Promise<string[]> {
  const slugs: string[] = []
  try {
    for (let page = 1; page <= 50; page++) {
      const res = await fetch(
        `${MARKETPLACE_URL}/api/marketplace/spaces?page=${page}&pageSize=100`,
      )
      if (!res.ok) break
      const data: any = await res.json()
      const rows: any[] = data?.spaces || []
      for (const s of rows) if (s?.id) slugs.push(String(s.id))
      if (rows.length < 100) break
    }
  } catch (err) {
    console.warn('[marketplace] slug fetch failed; skipping generated Space pages:', err)
  }
  return slugs
}

// Public blog API — posts are authored in oracle and served read-only.
// Read at build time to prerender /blog/<slug> pages and feed the blog
// sitemap source. Defaults to the oracle host (its nginx proxies the
// public /api/blog/* routes to oracle-api).
const BLOG_API_URL =
  process.env.NUXT_PUBLIC_BLOG_API_URL || 'https://oracle.lisaos.dev'

// Fetch every published post slug. Degrades to an empty list on any
// network failure so a flaky blog API never breaks the build.
async function fetchBlogSlugs(): Promise<string[]> {
  const slugs: string[] = []
  try {
    for (let page = 1; page <= 50; page++) {
      const res = await fetch(`${BLOG_API_URL}/api/blog/posts?page=${page}&pageSize=100`)
      if (!res.ok) break
      const data: any = await res.json()
      const rows: any[] = data?.posts || []
      for (const p of rows) if (p?.slug) slugs.push(String(p.slug))
      if (rows.length < 100) break
    }
  } catch (err) {
    console.warn('[blog] slug fetch failed; skipping generated post pages:', err)
  }
  return slugs
}

// Master positioning. The hero pairs an iconic line ("There's a Space
// for that.") with the category frame ("the operating system for the
// age of AI"). The Space=app equation is *shown*, not asserted: body copy
// across the site uses app-vocabulary (install, open, switch,
// marketplace, icon, home screen, permissions) instead of repeating
// the claim.
const SITE_TAGLINE = "There's a Space for that. The operating system for the age of AI."
const SITE_DESCRIPTION =
  "Construct is the operating system for the age of AI. Install modular Spaces for code, design, ops, and agents. There's a Space for that."

// Static pages we want fully prerendered. Nested routes (operator/*,
// spaces/*) are listed explicitly because crawlLinks stays off so the
// /login server redirect is preserved.
const STATIC_ROUTES = [
  '/',
  '/spaces',
  '/spaces/transport',
  '/spaces/support',
  '/spaces/revenue',
  '/spaces/operations',
  // Built-in Space detail pages — one per Space, each with unique
  // SEO copy + use cases.
  '/spaces/assistant',
  '/spaces/meet',
  '/spaces/ask',
  '/spaces/editor',
  '/spaces/tui',
  '/spaces/project',
  '/spaces/builder',
  '/spaces/spacekit',
  '/spaces/org',
  '/spaces/org-project',
  '/operator',
  // Presentation decks — slide-style shareable pages. /presentation
  // + /dev are public (indexable via the sitemap below); invest +
  // construct are noindex (shareable by direct link only).
  '/presentation',
  '/presentation/invest',
  '/presentation/dev',
  '/presentation/construct',
  '/blog',
  '/operator/agents',
  '/operator/automations',
  '/operator/context',
  '/operator/control',
  '/operator/morpheus',
  '/marketplace',
  '/ecosystem',
  '/sdk',
  '/pricing',
  '/download',
  '/about',
  '/compare',
  '/solutions',
  '/enterprise',
  '/learn',
  '/product',
  '/security',
  '/changelog',
  '/careers',
  '/terms',
  '/privacy',
]

const prerenderRouteRules = Object.fromEntries(
  STATIC_ROUTES.map((r) => [r, { prerender: true }]),
)

export default defineNuxtConfig({
  compatibilityDate: '2026-05-01',
  devtools: { enabled: false },

  // Inline the page's CSS into the HTML instead of a render-blocking
  // <link> — removes the critical-path CSS request that delays first
  // paint on throttled mobile.
  features: { inlineStyles: true },

  // No sourcemaps in production — this static marketing site doesn't
  // need them (smaller output, no source exposure).
  sourcemap: false,

  // Silence the benign Rollup SOURCEMAP_BROKEN notice from Nuxt's own
  // `nuxt:module-preload-polyfill` plugin (it transforms the entry
  // without emitting a sourcemap — a known upstream Nuxt quirk). Scoped
  // to exactly that warning; every other Rollup warning still reaches
  // the default handler.
  vite: {
    build: {
      rollupOptions: {
        onwarn(warning, defaultHandler) {
          const isPolyfillSourcemapNoise =
            warning.code === 'SOURCEMAP_BROKEN' &&
            (warning.plugin === 'nuxt:module-preload-polyfill' ||
              /module-preload-polyfill/.test(warning.message || ''))
          if (isPolyfillSourcemapNoise) return
          defaultHandler(warning)
        },
      },
    },
  },

  modules: ['@nuxtjs/seo', '@nuxt/icon'],

  // Lucide icons (the Space icons from the catalog) served from our own
  // bundle via @iconify-json/lucide — no third-party Iconify request.
  icon: { mode: 'svg', serverBundle: 'local' },

  css: ['~/assets/css/fonts.css', '~/assets/css/main.css'],

  site: {
    url: SITE_URL,
    name: 'Construct',
    description: SITE_DESCRIPTION,
    defaultLocale: 'en',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      // titleTemplate lives in app.vue (a function that brands titles
      // without "Construct | Construct" duplication) — config can only
      // hold a static string, so it's not set here.
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#FF2D55' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'manifest', href: '/manifest.webmanifest' },
        // Rubik is self-hosted (app/assets/css/fonts.css) — no
        // render-blocking Google Fonts request, no third-party preconnect.
        // Preload the body weight so first paint has the real font.
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/rubik-400-latin.woff2', crossorigin: '' },
      ],
      // Analytics is NOT loaded here — it's deferred to idle in
      // app/plugins/gtag.client.ts so it doesn't block hydration or
      // inflate Total Blocking Time.
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: SITE_URL,
      siteTagline: SITE_TAGLINE,
      // Read by /spaces/[slug].vue (and the sitemap source) to fetch
      // the published Space's catalog row at build time.
      marketplaceUrl: MARKETPLACE_URL,
      // Read by /blog pages to fetch posts from oracle's public API.
      blogApiUrl: BLOG_API_URL,
    },
  },

  // Inject one prerender route per published Space. Runs only when a
  // prerender pass is configured (build/generate), never in dev. Built
  // -in Space pages that share a slug take precedence over the dynamic
  // /spaces/[slug] route, so curated pages keep their bespoke content.
  hooks: {
    async 'nitro:config'(nitroConfig) {
      // Only inject routes for a real prerender pass. Skipping in dev
      // avoids blocking dev-server boot on the catalog/blog fetches.
      if (nitroConfig.dev || !nitroConfig.prerender) return
      nitroConfig.prerender.routes = nitroConfig.prerender.routes || []
      const [spaceSlugs, blogSlugs] = await Promise.all([
        fetchMarketplaceSlugs(),
        fetchBlogSlugs(),
      ])
      for (const slug of spaceSlugs) nitroConfig.prerender.routes.push(`/spaces/${slug}`)
      for (const slug of blogSlugs) nitroConfig.prerender.routes.push(`/blog/${slug}`)
    },
  },

  nitro: {
    // Pre-compress static assets (HTML, JS, CSS, fonts) at build time so
    // the server can ship brotli/gzip — cuts document + asset transfer.
    compressPublicAssets: { gzip: true, brotli: true },
    prerender: {
      crawlLinks: false,
      ignore: ['/login', '/register', '/api'],
      routes: [...STATIC_ROUTES, '/sitemap.xml', '/robots.txt'],
    },
  },

  routeRules: {
    ...prerenderRouteRules,
    '/api/**': { prerender: false },
    // Long-lived caching for static assets (PageSpeed "efficient cache
    // lifetimes"). Screenshots are content-stable; _nuxt/* is already
    // content-hashed so it's safe to mark immutable.
    '/shots/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/fonts/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/og-default.png': { headers: { 'cache-control': 'public, max-age=2592000' } },
    '/favicon.svg': { headers: { 'cache-control': 'public, max-age=2592000' } },
    '/mark.png': { headers: { 'cache-control': 'public, max-age=2592000' } },
    '/accounts.png': { headers: { 'cache-control': 'public, max-age=2592000' } },
    '/manifest.webmanifest': { headers: { 'cache-control': 'public, max-age=86400' } },
  },

  seo: {
    redirectToCanonicalSiteUrl: true,
  },

  sitemap: {
    autoLastmod: true,
    // Generated Space + blog pages come from these dynamic source
    // endpoints so every published item lands in the sitemap.
    sources: ['/api/__sitemap__/spaces', '/api/__sitemap__/blog'],
    urls: [
      { loc: '/', priority: 1.0, changefreq: 'weekly' },
      { loc: '/spaces', priority: 0.9, changefreq: 'monthly' },
      { loc: '/operator', priority: 0.9, changefreq: 'monthly' },
      { loc: '/sdk', priority: 0.9, changefreq: 'monthly' },
      { loc: '/download', priority: 0.9, changefreq: 'weekly' },
      { loc: '/pricing', priority: 0.8, changefreq: 'monthly' },
      { loc: '/compare', priority: 0.8, changefreq: 'monthly' },
      { loc: '/solutions', priority: 0.7, changefreq: 'monthly' },
      { loc: '/enterprise', priority: 0.7, changefreq: 'monthly' },
      { loc: '/marketplace', priority: 0.85, changefreq: 'weekly' },
      { loc: '/ecosystem', priority: 0.7, changefreq: 'monthly' },
      { loc: '/learn', priority: 0.6, changefreq: 'monthly' },
      { loc: '/product', priority: 0.6, changefreq: 'monthly' },
      // Public decks only. /presentation/invest + /construct are
      // noindex and intentionally excluded from the sitemap.
      { loc: '/presentation', priority: 0.6, changefreq: 'monthly' },
      { loc: '/presentation/dev', priority: 0.7, changefreq: 'monthly' },
      { loc: '/blog', priority: 0.8, changefreq: 'weekly' },
      { loc: '/security', priority: 0.7, changefreq: 'monthly' },
      { loc: '/changelog', priority: 0.7, changefreq: 'weekly' },
      { loc: '/careers', priority: 0.5, changefreq: 'monthly' },
      { loc: '/about', priority: 0.6, changefreq: 'monthly' },
      { loc: '/spaces/transport', priority: 0.6, changefreq: 'monthly' },
      { loc: '/spaces/support', priority: 0.6, changefreq: 'monthly' },
      { loc: '/spaces/revenue', priority: 0.6, changefreq: 'monthly' },
      { loc: '/spaces/operations', priority: 0.6, changefreq: 'monthly' },
      { loc: '/spaces/assistant', priority: 0.7, changefreq: 'monthly' },
      { loc: '/spaces/meet', priority: 0.7, changefreq: 'monthly' },
      { loc: '/spaces/ask', priority: 0.7, changefreq: 'monthly' },
      { loc: '/spaces/editor', priority: 0.7, changefreq: 'monthly' },
      { loc: '/spaces/tui', priority: 0.7, changefreq: 'monthly' },
      { loc: '/spaces/project', priority: 0.7, changefreq: 'monthly' },
      { loc: '/spaces/builder', priority: 0.75, changefreq: 'monthly' },
      { loc: '/spaces/spacekit', priority: 0.75, changefreq: 'monthly' },
      { loc: '/spaces/org', priority: 0.6, changefreq: 'monthly' },
      { loc: '/spaces/org-project', priority: 0.6, changefreq: 'monthly' },
      { loc: '/operator/agents', priority: 0.6, changefreq: 'monthly' },
      { loc: '/operator/automations', priority: 0.6, changefreq: 'monthly' },
      { loc: '/operator/context', priority: 0.6, changefreq: 'monthly' },
      { loc: '/operator/control', priority: 0.6, changefreq: 'monthly' },
      { loc: '/operator/morpheus', priority: 0.7, changefreq: 'monthly' },
      { loc: '/terms', priority: 0.3, changefreq: 'yearly' },
      { loc: '/privacy', priority: 0.3, changefreq: 'yearly' },
    ],
  },

  robots: {
    // Note: we deliberately do NOT disallow /api/. Those routes are
    // JSON/redirect endpoints (release info, download redirects, sitemap
    // sources) — not page resources — and blocking /api makes @nuxt/robots
    // warn that it can hurt indexing. They're absent from the sitemap, so
    // leaving them crawlable is harmless.
    disallow: ['/presentation/invest', '/presentation/construct'],
    sitemap: `${SITE_URL}/sitemap.xml`,
  },

  // Static OG card lives at /public/og-default.png. Zero-runtime stops
  // nuxt-og-image from prompting for a Chromium/Satori renderer at
  // dev start (which fails in non-TTY shells like this one).
  ogImage: {
    zeroRuntime: true,
  },

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Construct',
      // The exact-match brand variant people search for (the domain is
      // lisaos.dev). Structured-data signal, not keyword stuffing.
      alternateName: 'Construct Space',
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.svg`,
      sameAs: [
        'https://construct.blog',
        'https://my.lisaos.dev',
        'https://github.com/construct-space',
      ],
    },
  },

  linkChecker: {
    failOnError: false,
    excludeLinks: [],
    skipInspections: ['redirects'],
  },
})
