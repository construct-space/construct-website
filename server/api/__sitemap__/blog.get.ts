// Dynamic sitemap source for blog posts. @nuxtjs/sitemap fetches this
// at build time and merges the entries into sitemap.xml. Network
// failure degrades to an empty list so the build never breaks.
export default defineSitemapEventHandler(async () => {
  const base =
    process.env.NUXT_PUBLIC_BLOG_API_URL || 'https://oracle.lisaos.dev'

  const entries: { loc: string; priority: 0.7; changefreq: 'monthly'; lastmod?: string }[] = []
  try {
    for (let page = 1; page <= 50; page++) {
      const res = await fetch(`${base}/api/blog/posts?page=${page}&pageSize=100`)
      if (!res.ok) break
      const data: any = await res.json()
      const rows: any[] = data?.posts || []
      for (const p of rows) {
        if (!p?.slug) continue
        entries.push({
          loc: `/blog/${p.slug}`,
          priority: 0.7,
          changefreq: 'monthly',
          lastmod: p.published_at || undefined,
        })
      }
      if (rows.length < 100) break
    }
  } catch (err) {
    console.warn('[sitemap] blog source failed:', err)
  }
  return entries
})
