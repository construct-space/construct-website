<script setup lang="ts">
// /spaces/[slug] — programmatic, SEO-focused detail page for any
// published Space. Data comes from the public Space Store catalog
// (my.lisaos.dev/api/marketplace/spaces/{slug}) at build time, so
// every published Space gets its own indexable landing page that mirrors
// the in-app Space Store layout: About / Usage / What's included, plus
// SoftwareApplication structured data.
//
// Note on counts: the public catalog stores a reduced manifest. `pages`
// and the usage figures are accurate; `agent tools` / `widgets` reflect
// only what the catalog publishes (often 0), so we render them best-effort.
//
// Hand-written built-in pages (assistant.vue, meet.vue, …) sit at the
// same path and take precedence over this dynamic route.
import { computed } from 'vue'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const base = useRuntimeConfig().public.marketplaceUrl

const { data: space, error } = await useAsyncData(
  () => `mp-space-${slug.value}`,
  () => $fetch(`${base}/api/marketplace/spaces/${slug.value}`),
)

if (error.value || !space.value) {
  throw createError({ statusCode: 404, statusMessage: 'Space not found', fatal: true })
}

const sp = computed<any>(() => space.value || {})
const manifest = computed<any>(() => sp.value.manifest || {})
const name = computed(() => sp.value.name || slug.value)
const monogram = computed(() => (name.value[0] || '?').toUpperCase())
const publisher = computed(() => sp.value.publisher_name || manifest.value.author?.name || 'Construct')

function fmtDate(s?: string) {
  if (!s) return '—'
  return new Date(s).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

// Scope badges — the catalog uses 'app' (available to everyone =
// Personal) and 'org'. Mirrors the in-app PERSONAL / ORG chips.
const scopeBadges = computed<string[]>(() =>
  (sp.value.scopes || []).map((s: string) => (s === 'app' ? 'Personal' : s === 'org' ? 'Org' : s)),
)

// Usage — accurate from the catalog counters.
const usage = computed(() => [
  { k: 'Downloads', v: `${sp.value.downloads ?? 0} total` },
  { k: 'Last 7 days', v: `${sp.value.installs_7d ?? 0} installs` },
  { k: 'Last 30 days', v: `${sp.value.installs_30d ?? 0} installs` },
  { k: 'Updated', v: fmtDate(sp.value.updated_at) },
])

// What's included — counts derived from the published manifest.
const pageList = computed(() =>
  (manifest.value.pages || []).filter((p: any) => !p.hidden && p.label).map((p: any) => p.label as string),
)
const agentToolsCount = computed(() => {
  const a = manifest.value.actions
  if (Array.isArray(a)) return a.length
  const perm = manifest.value.permissions?.actions
  if (perm && typeof perm === 'object') return Object.keys(perm).length
  return 0
})
const included = computed(() => [
  { k: 'Pages', v: (manifest.value.pages || []).length },
  { k: 'Agent tools', v: agentToolsCount.value },
  { k: 'Widgets', v: (manifest.value.widgets || []).length },
])

const details = computed(() =>
  [
    { k: 'Version', v: sp.value.version },
    { k: 'Host API', v: sp.value.host_api_version },
    { k: 'Surfaces', v: (sp.value.scopes || []).join(' · ') },
    { k: 'Project-aware', v: sp.value.projectAware ? 'Yes' : 'No' },
    { k: 'Category', v: sp.value.category },
  ].filter((d) => d.v),
)

const keywords = computed<string[]>(() => manifest.value.keywords || sp.value.tags || [])

const desc = computed(
  () => sp.value.description || `${name.value} is a Space for Construct — the operating system for the age of AI.`,
)

useSeoMeta({
  title: () => `${name.value} — Construct Space`,
  description: () => desc.value,
  ogTitle: () => `${name.value} — a Space for Construct`,
  ogDescription: () => desc.value,
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

// Richer SoftwareApplication structured data for search results.
useSchemaOrg([
  defineWebPage({ name: () => `${name.value} — Construct Space`, description: () => desc.value }),
  defineSoftwareApp({
    name: () => name.value,
    description: () => desc.value,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Construct (macOS, Windows, Linux)',
    softwareVersion: () => sp.value.version || undefined,
    datePublished: () => sp.value.promoted_at || undefined,
    dateModified: () => sp.value.updated_at || undefined,
    author: () => ({ '@type': 'Organization', name: publisher.value }),
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }),
])
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Space Store · Space</p>
        <div class="sp-hero">
          <div class="sp-mark">{{ monogram }}</div>
          <div>
            <h1 class="page-title hero-title" style="margin-bottom: 6px">{{ name }}</h1>
            <p class="sp-meta">
              <span>by {{ publisher }}</span>
              <span v-if="sp.version">· v{{ sp.version }}</span>
              <span v-if="sp.host_api_version">· host {{ sp.host_api_version }}</span>
            </p>
            <div v-if="scopeBadges.length" class="sp-badges">
              <span v-for="b in scopeBadges" :key="b" class="sp-badge" :class="b === 'Org' ? 'is-org' : ''">{{ b }}</span>
            </div>
          </div>
        </div>
        <div class="hero-actions">
          <NuxtLink to="/download" class="btn btn-primary">Get Construct &amp; install {{ name }}</NuxtLink>
          <NuxtLink to="/marketplace" class="btn btn-secondary">Browse the Space Store</NuxtLink>
        </div>
        <p class="install-note">
          {{ name }} is published on the Construct Space Store. Install Construct, open
          <strong>Spaces → {{ name }} → Install</strong>, and it's on your home screen.
        </p>

        <ShotPlaceholder
          :name="`space-${slug}.png`"
          :alt="`${name} Space running inside Construct`"
          :desc="`The ${name} Space open in Construct — its own interface in the main area, the Spaces dock on the left with the ${name} icon active, and the Operator available inside. Captured on the dark theme.`"
          hero
        />
      </div>
    </section>

    <!-- ABOUT -->
    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">About</p>
        <h2 class="page-title">What {{ name }} <span class="accent">does.</span></h2>
        <p class="page-subtitle" style="max-width: 720px">{{ desc }}</p>
      </div>
    </section>

    <!-- USAGE -->
    <section class="page-section">
      <div class="page-container">
        <p class="page-label">Usage</p>
        <h2 class="page-title">{{ name }} <span class="accent">by the numbers.</span></h2>
        <div class="info-grid">
          <div v-for="u in usage" :key="u.k" class="info">
            <div class="info__k">{{ u.k }}</div>
            <div class="info__v">{{ u.v }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT'S INCLUDED -->
    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">What's included</p>
        <h2 class="page-title">Inside <span class="accent">{{ name }}.</span></h2>
        <div class="info-grid info-grid--3">
          <div v-for="i in included" :key="i.k" class="info">
            <div class="info__v info__v--big">{{ i.v }}</div>
            <div class="info__k">{{ i.k }}</div>
          </div>
        </div>
        <div v-if="pageList.length" class="page-chips">
          <span class="page-chips__label">Pages</span>
          <span v-for="p in pageList" :key="p" class="kw">{{ p }}</span>
        </div>
      </div>
    </section>

    <!-- DETAILS -->
    <section v-if="details.length" class="page-section">
      <div class="page-container">
        <p class="page-label">Details</p>
        <h2 class="page-title">{{ name }}, <span class="accent">at a glance.</span></h2>
        <div class="info-grid">
          <div v-for="d in details" :key="d.k" class="info">
            <div class="info__k">{{ d.k }}</div>
            <div class="info__v">{{ d.v }}</div>
          </div>
        </div>
        <div v-if="keywords.length" class="kw-row">
          <span v-for="k in keywords" :key="k" class="kw">{{ k }}</span>
        </div>
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">Why it's more than an app</p>
        <h2 class="page-title">Every Space inherits <span class="accent">the OS.</span></h2>
        <p class="page-subtitle">
          {{ name }} doesn't stand alone. Like every Space, it shares one identity, one data
          layer, and one Operator with everything else you run in Construct — so the AI can act
          inside it, and your work flows between {{ name }} and the rest of your Spaces.
        </p>
        <div class="grid-3">
          <div class="card"><h3>One Operator</h3><p>The AI that runs your Spaces can work inside {{ name }} — calling its actions as tools, not just answering questions.</p></div>
          <div class="card"><h3>One data layer</h3><p>{{ name }}'s data lives in the Graph alongside your other Spaces, multi-tenant and access-controlled.</p></div>
          <div class="card"><h3>One identity</h3><p>No separate login. {{ name }} inherits who you are and which org you're in the moment you open it.</p></div>
        </div>
      </div>
    </section>

    <section class="page-section" style="text-align: center">
      <div class="page-container">
        <h2 class="page-title">There's a Space for that.</h2>
        <p class="page-subtitle" style="margin-left: auto; margin-right: auto">
          {{ name }} is free with Construct. Install once, and the Operator works inside it.
        </p>
        <div class="hero-actions center" style="justify-content: center">
          <NuxtLink to="/download" class="btn btn-primary">Download Construct</NuxtLink>
          <NuxtLink to="/spaces" class="btn btn-secondary">All Spaces</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.sp-hero { display: flex; align-items: center; gap: 18px; }
.sp-mark {
  width: 60px; height: 60px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  border-radius: 14px;
  font-size: 28px; font-weight: 600; color: var(--app-accent-text, #e11d48);
  background: color-mix(in srgb, var(--app-accent) 12%, var(--app-card-bg));
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.sp-meta { font-size: 14px; color: var(--app-muted); display: flex; gap: 8px; flex-wrap: wrap; }
.sp-badges { display: flex; gap: 6px; margin-top: 8px; }
.sp-badge {
  font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;
  padding: 3px 9px; border-radius: 5px;
  background: var(--app-canvas-bg); color: var(--app-muted); border: 1px solid var(--app-border);
}
.sp-badge.is-org { color: var(--app-accent-text, #e11d48); background: color-mix(in srgb, var(--app-accent) 10%, transparent); border-color: color-mix(in srgb, var(--app-accent) 30%, var(--app-border)); }

.install-note { font-size: 13px; font-weight: 300; color: var(--app-muted); margin-top: 16px; line-height: 1.6; }
.install-note strong { color: var(--app-foreground); font-weight: 500; }

/* Info grid — reused for Usage / What's included / Details. */
.info-grid {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.info-grid--3 { grid-template-columns: repeat(3, 1fr); max-width: 620px; }
.info {
  padding: 18px 20px; border-radius: 4px;
  background: var(--app-card-bg); box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.info__k { font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; color: var(--app-muted); }
.info__v { font-size: 15px; font-weight: 500; margin-top: 6px; }
.info__v--big { font-size: 30px; font-weight: 600; color: var(--app-accent-text, #e11d48); margin: 0 0 4px; line-height: 1; }
.info-grid--3 .info__k { margin-top: 0; }

.page-chips { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 24px; }
.page-chips__label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; color: var(--app-muted); margin-right: 4px; }

.kw-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }
.kw {
  font-size: 12px; padding: 5px 12px; border-radius: 999px;
  background: var(--app-canvas-bg); border: 1px solid var(--app-border); color: var(--app-muted);
}

@media (max-width: 860px) { .info-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .info-grid, .info-grid--3 { grid-template-columns: 1fr; } }
</style>
