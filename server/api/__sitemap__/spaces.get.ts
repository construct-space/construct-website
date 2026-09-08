// Dynamic sitemap source for generated marketplace Space pages.
// @nuxtjs/sitemap fetches this at build time and merges the returned
// entries into sitemap.xml. Network failure degrades to an empty list
// so the build never breaks on a flaky catalog.
//
// Built-in Space pages already live in the static sitemap `urls`; the
// curated ones (assistant, meet, …) may appear twice but the sitemap
// module de-duplicates by `loc`.
export default defineSitemapEventHandler(async () => {
  const base =
    process.env.NUXT_PUBLIC_MARKETPLACE_URL || 'https://my.lisaos.dev'

  const entries: { loc: string; priority: 0.7; changefreq: 'weekly' }[] = []
  try {
    for (let page = 1; page <= 50; page++) {
      const res = await fetch(
        `${base}/api/marketplace/spaces?page=${page}&pageSize=100`,
      )
      if (!res.ok) break
      const data: any = await res.json()
      const rows: any[] = data?.spaces || []
      for (const s of rows) {
        if (!s?.id) continue
        entries.push({
          loc: `/spaces/${s.id}`,
          priority: 0.7,
          changefreq: 'weekly',
        })
      }
      if (rows.length < 100) break
    }
  } catch (err) {
    console.warn('[sitemap] marketplace source failed:', err)
  }
  return entries
})
