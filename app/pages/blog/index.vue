<script setup lang="ts">
// /blog — index of published posts. Content is authored in oracle
// (oracle.lisaos.dev) and served from its public read API; the
// website fetches the list at build time and prerenders this page.
import { useScrollReveal } from '~/composables/useScrollReveal'

useScrollReveal()

const base = useRuntimeConfig().public.blogApiUrl

interface PostSummary {
  slug: string
  title: string
  excerpt?: string
  cover_image?: string
  author?: string
  tags?: string[]
  reading_minutes?: number
  published_at?: string | null
}

// Graceful: a flaky/empty blog API yields an empty list, not a build
// failure. The page then renders its "nothing here yet" state.
const { data } = await useAsyncData('blog-index', async () => {
  try {
    const res = await $fetch<{ posts: PostSummary[] }>(`${base}/api/blog/posts?pageSize=100`)
    return res?.posts || []
  } catch {
    return []
  }
})

const posts = computed(() => data.value || [])
const featured = computed(() => posts.value[0])
const rest = computed(() => posts.value.slice(1))

function fmtDate(s?: string | null) {
  if (!s) return ''
  return new Date(s).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

useSeoMeta({
  title: 'Blog — Construct',
  description: 'Product news, engineering, and ideas from the team building the operating system for the age of AI.',
  ogTitle: 'The Construct Blog',
  ogDescription: 'Product news, engineering, and ideas from the team building Construct.',
  ogType: 'website',
})
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Blog</p>
        <h1 class="page-title hero-title">Notes from <span class="accent">building Construct.</span></h1>
        <p class="page-subtitle hero-sub">
          Product news, engineering deep-dives, and ideas from the team building the operating
          system for the age of AI.
        </p>
      </div>
    </section>

    <section v-if="posts.length" class="page-section alt">
      <div class="page-container">
        <!-- Featured (most recent) -->
        <NuxtLink v-if="featured" :to="`/blog/${featured.slug}`" class="feature reveal">
          <div v-if="featured.cover_image" class="feature__media">
            <img :src="featured.cover_image" :alt="featured.title" loading="lazy" />
          </div>
          <div class="feature__body">
            <p class="post-meta">
              <span v-if="featured.published_at">{{ fmtDate(featured.published_at) }}</span>
              <span v-if="featured.reading_minutes">· {{ featured.reading_minutes }} min read</span>
            </p>
            <h2 class="feature__title">{{ featured.title }}</h2>
            <p v-if="featured.excerpt" class="feature__excerpt">{{ featured.excerpt }}</p>
            <p v-if="featured.author" class="post-author">By {{ featured.author }}</p>
          </div>
        </NuxtLink>

        <!-- The rest -->
        <div v-if="rest.length" class="post-grid">
          <NuxtLink v-for="p in rest" :key="p.slug" :to="`/blog/${p.slug}`" class="post-card reveal">
            <div v-if="p.cover_image" class="post-card__media">
              <img :src="p.cover_image" :alt="p.title" loading="lazy" />
            </div>
            <div class="post-card__body">
              <p class="post-meta">
                <span v-if="p.published_at">{{ fmtDate(p.published_at) }}</span>
                <span v-if="p.reading_minutes">· {{ p.reading_minutes }} min</span>
              </p>
              <h3 class="post-card__title">{{ p.title }}</h3>
              <p v-if="p.excerpt" class="post-card__excerpt">{{ p.excerpt }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section v-else class="page-section alt">
      <div class="page-container">
        <div class="empty">
          <p class="empty__title">No posts yet.</p>
          <p class="empty__sub">The first article is on its way. Check back soon.</p>
          <NuxtLink to="/" class="btn btn-secondary" style="margin-top: 8px">Back home</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.post-meta { font-size: 12px; color: var(--app-muted); letter-spacing: 0.02em; margin-bottom: 10px; }
.post-author { font-size: 13px; color: var(--app-muted); margin-top: 14px; }

.feature {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 36px;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding: 28px;
  border-radius: 10px;
  background: var(--app-card-bg);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.18s ease, transform 0.18s ease;
}
.feature:hover { box-shadow: 0 10px 30px rgba(0, 0, 0, 0.10); transform: translateY(-2px); }
.feature__media img { width: 100%; height: 100%; max-height: 320px; object-fit: cover; border-radius: 8px; display: block; }
.feature__title { font-size: clamp(1.5rem, 3vw, 2.1rem); font-weight: 400; line-height: 1.15; letter-spacing: -0.015em; margin-bottom: 12px; }
.feature__excerpt { font-size: 15px; color: var(--app-muted); line-height: 1.65; font-weight: 300; }

.post-grid {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.post-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  border-radius: 8px;
  background: var(--app-card-bg);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: box-shadow 0.18s ease, transform 0.18s ease;
}
.post-card:hover { box-shadow: 0 8px 24px rgba(0, 0, 0, 0.10); transform: translateY(-2px); }
.post-card__media img { width: 100%; height: 168px; object-fit: cover; display: block; }
.post-card__body { padding: 22px 22px 26px; }
.post-card__title { font-size: 17px; font-weight: 500; line-height: 1.3; margin-bottom: 8px; }
.post-card__excerpt { font-size: 13px; color: var(--app-muted); line-height: 1.6; }

.empty { text-align: center; padding: 40px 0; display: flex; flex-direction: column; align-items: center; gap: 6px; }
.empty__title { font-size: 20px; font-weight: 500; }
.empty__sub { font-size: 14px; color: var(--app-muted); }

@media (max-width: 860px) {
  .feature { grid-template-columns: 1fr; gap: 20px; }
  .post-grid { grid-template-columns: 1fr; }
}
</style>
