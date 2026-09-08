<script setup lang="ts">
const site = useSiteConfig()

// Brand the <title> on every page. A page's own title wins; we only
// append "| Construct" when it doesn't already mention the brand, so
// every tab/SERP entry carries "Construct" without "Construct | Construct"
// duplication. Set here (runtime) because a function titleTemplate can't
// live in the static nuxt.config app.head.
useHead({
  titleTemplate: (title) => {
    const t = (title || '').trim()
    if (!t) return 'Construct — The operating system for the age of AI'
    return /construct/i.test(t) ? t : `${t} | Construct`
  },
})

// Default Open Graph + Twitter card for every page. Per-page
// `useSeoMeta` calls override these as needed. ogSiteName reinforces the
// brand for social/search crawlers across every route.
useSeoMeta({
  ogSiteName: 'Construct',
  ogImage: `${site.url}/og-default.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/png',
  twitterCard: 'summary_large_image',
  twitterImage: `${site.url}/og-default.png`,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
