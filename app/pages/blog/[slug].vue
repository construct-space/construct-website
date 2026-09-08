<script setup lang="ts">
// /blog/[slug] — a single published post. Fetched from oracle's public
// blog API at build time; Markdown content is rendered to HTML here.
// Prerendered per slug via the blog prerender hook in nuxt.config.
import { marked } from 'marked'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const base = useRuntimeConfig().public.blogApiUrl

interface Post {
  slug: string
  title: string
  excerpt?: string
  content?: string
  cover_image?: string
  author?: string
  tags?: string[]
  reading_minutes?: number
  published_at?: string | null
}

const { data: post, error } = await useAsyncData(
  () => `blog-${slug.value}`,
  () => $fetch<Post>(`${base}/api/blog/posts/${slug.value}`),
)

if (error.value || !post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

// Markdown → HTML at build time. Content is authored only by oracle
// staff, so it is trusted; marked runs with GitHub-flavoured defaults.
marked.setOptions({ gfm: true, breaks: false })
const html = computed(() => marked.parse(post.value?.content || '') as string)

function fmtDate(s?: string | null) {
  if (!s) return ''
  return new Date(s).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const p = computed(() => post.value as Post)
const desc = computed(() => p.value.excerpt || `${p.value.title} — from the Construct blog.`)

useSeoMeta({
  title: () => `${p.value.title} — Construct Blog`,
  description: () => desc.value,
  ogTitle: () => p.value.title,
  ogDescription: () => desc.value,
  ogType: 'article',
  ogImage: () => p.value.cover_image || undefined,
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineArticle({
    headline: () => p.value.title,
    description: () => desc.value,
    image: () => p.value.cover_image || undefined,
    datePublished: () => p.value.published_at || undefined,
    author: () => (p.value.author ? { '@type': 'Person', name: p.value.author } : undefined),
  }),
])
</script>

<template>
  <div>
    <article class="page-section hero-section">
      <div class="post-container">
        <NuxtLink to="/blog" class="back-link">← Blog</NuxtLink>
        <p class="post-meta">
          <span v-if="p.published_at">{{ fmtDate(p.published_at) }}</span>
          <span v-if="p.reading_minutes">· {{ p.reading_minutes }} min read</span>
          <span v-if="p.author">· {{ p.author }}</span>
        </p>
        <h1 class="post-title">{{ p.title }}</h1>
        <p v-if="p.excerpt" class="post-lede">{{ p.excerpt }}</p>

        <div v-if="p.tags && p.tags.length" class="post-tags">
          <span v-for="t in p.tags" :key="t" class="post-tag">{{ t }}</span>
        </div>

        <figure v-if="p.cover_image" class="post-cover">
          <img :src="p.cover_image" :alt="p.title" />
        </figure>

        <!-- eslint-disable-next-line vue/no-v-html — trusted, staff-authored Markdown -->
        <div class="prose" v-html="html" />
      </div>
    </article>

    <section class="page-section alt" style="text-align: center">
      <div class="page-container">
        <h2 class="page-title">There's a Space for that.</h2>
        <p class="page-subtitle" style="margin-left: auto; margin-right: auto">
          Construct is the operating system for the age of AI. Free to use.
        </p>
        <div class="hero-actions center" style="justify-content: center">
          <NuxtLink to="/download" class="btn btn-primary">Download Construct</NuxtLink>
          <NuxtLink to="/blog" class="btn btn-secondary">More posts</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.post-container { max-width: 720px; margin: 0 auto; }
.back-link { font-size: 13px; color: var(--app-muted); text-decoration: none; }
.back-link:hover { color: var(--app-accent-text, #e11d48); }
.post-meta { font-size: 13px; color: var(--app-muted); margin: 24px 0 14px; }
.post-title { font-size: clamp(2rem, 4.5vw, 3rem); font-weight: 400; line-height: 1.12; letter-spacing: -0.02em; margin-bottom: 16px; }
.post-lede { font-size: 18px; font-weight: 300; color: var(--app-muted); line-height: 1.6; margin-bottom: 20px; }

.post-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
.post-tag {
  font-size: 12px; padding: 4px 11px; border-radius: 999px;
  background: var(--app-canvas-bg); border: 1px solid var(--app-border); color: var(--app-muted);
}

.post-cover { margin: 0 0 32px; }
.post-cover img { width: 100%; border-radius: 12px; display: block; }

/* Article body — readable measure, generous rhythm. Targets the
   HTML emitted by marked, so selectors are plain element names. */
.prose { font-size: 17px; line-height: 1.75; color: var(--app-foreground); font-weight: 300; }
.prose :deep(h2) { font-size: 1.6rem; font-weight: 500; letter-spacing: -0.01em; margin: 2em 0 0.6em; line-height: 1.2; }
.prose :deep(h3) { font-size: 1.25rem; font-weight: 500; margin: 1.6em 0 0.5em; }
.prose :deep(p) { margin: 0 0 1.2em; }
.prose :deep(ul), .prose :deep(ol) { margin: 0 0 1.2em; padding-left: 1.4em; }
.prose :deep(li) { margin-bottom: 0.4em; }
.prose :deep(a) { color: var(--app-accent-text, #e11d48); text-decoration: underline; text-underline-offset: 2px; }
.prose :deep(blockquote) {
  margin: 1.5em 0; padding: 6px 0 6px 20px;
  border-left: 3px solid var(--app-accent); color: var(--app-muted); font-style: italic;
}
.prose :deep(img) { max-width: 100%; height: auto; border-radius: 10px; margin: 1.5em 0; }
.prose :deep(code) {
  font-family: 'JetBrains Mono', 'SF Mono', ui-monospace, monospace; font-size: 0.88em;
  background: color-mix(in srgb, var(--app-accent) 9%, transparent);
  color: var(--app-accent-text, #e11d48); padding: 2px 6px; border-radius: 4px;
}
.prose :deep(pre) {
  background: color-mix(in srgb, var(--app-foreground) 5%, var(--app-canvas-bg));
  border: 1px solid var(--app-border); border-radius: 10px;
  padding: 18px 20px; overflow-x: auto; margin: 1.5em 0;
}
.prose :deep(pre code) { background: none; color: var(--app-foreground); padding: 0; font-size: 13.5px; }
.prose :deep(hr) { border: none; border-top: 1px solid var(--app-border); margin: 2.5em 0; }
.prose :deep(h2:first-child), .prose :deep(p:first-child) { margin-top: 0; }
</style>
