<script setup lang="ts">
useSeoMeta({
  title: 'Space Store — An app store for AI-native work',
  description:
    'Browse, install, and publish Spaces. Public catalog, private to your org, or scoped to a single project — same SDK, same Operator, same OS.',
  ogTitle: 'Construct Space Store',
  ogDescription:
    'Install Spaces from the public catalog, publish your own, or distribute privately. The home for AI-native apps.',
})

const distributions = [
  {
    title: 'Public',
    body: 'Publish to the catalog. Anyone with Construct can install. Reviewed for safety, signed for integrity, ranked by usefulness — not by promotion.',
    tag: 'Anyone',
  },
  {
    title: 'Private',
    body: 'Distribute inside your org only. Internal tools, company-specific workflows, proprietary processes. Members install with one click; nobody outside ever sees it listed.',
    tag: 'Your org',
  },
  {
    title: 'Scoped',
    body: 'Pin a Space to a single project. Travels with the project, comes and goes with its lifecycle, no install required for collaborators on that project.',
    tag: 'One project',
  },
]

const categories = [
  'Productivity', 'Business', 'Operations', 'Sales', 'Support',
  'Engineering', 'Design', 'Finance', 'Health & Fitness', 'Education',
  'Communication', 'Reference', 'Lifestyle', 'Utilities', 'Games',
]

const trust = [
  { title: 'Signed manifests', body: 'Every published Space is signed by its publisher. Construct verifies the signature on install and at every update.' },
  { title: 'Capability declarations', body: "What a Space asks for is what you grant. Files, network, tools, automation — declared up front, never escalated by prompt." },
  { title: 'Reviewed before public', body: "Public listings go through a safety review. Air-gap, telemetry, network egress, and prompt-injection surfaces all checked." },
  { title: 'Versioned and revertable', body: 'Each install pins a version. Updates are opt-in by default; revert in one click if a release breaks something.' },
]

const buildFlow = [
  { num: '01', title: 'Scaffold', body: '`construct scaffold my-space` — manifest, capabilities, icon, basic Operator wiring.' },
  { num: '02', title: 'Build', body: 'Edit code in your local Construct, or open SpaceKit for a guided flow. Live preview in a sibling window.' },
  { num: '03', title: 'Sign', body: '`construct publish` signs the build with your publisher key. The Space Store verifies the signature on every install.' },
  { num: '04', title: 'Ship', body: 'Pick the audience: public catalog, private to your org, or scoped to a project. Same artifact, different reach.' },
]

// The live catalog — fetched from the public marketplace API at build
// time and rendered as cards linking to each Space's /spaces/<slug>
// detail page. Degrades to an empty list (section hidden) on failure.
const base = useRuntimeConfig().public.marketplaceUrl
const { data: catalog } = await useAsyncData('mp-catalog', async () => {
  try {
    const res = await $fetch<{ spaces: any[] }>(`${base}/api/marketplace/spaces?pageSize=100`)
    return res?.spaces || []
  } catch {
    return []
  }
})
const spaces = computed<any[]>(() => catalog.value || [])
const mono = (s: any) => String(s?.name || s?.id || '?').charAt(0).toUpperCase()
const short = (d?: string, n = 90) => (d && d.length > n ? `${d.slice(0, n).trimEnd()}…` : d || '')
// The catalog stores icons as "i-lucide-<name>"; render via @nuxt/icon as
// "lucide:<name>". Non-lucide values (e.g. "icons/NBA.svg") return null →
// the card falls back to a monogram.
const iconName = (icon?: string): string | null => {
  if (!icon) return null
  const m = icon.match(/^i-lucide-(.+)$/)
  if (m) return `lucide:${m[1]}`
  if (icon.startsWith('lucide:')) return icon
  return null
}
</script>

<template>
  <div>
    <!-- Catalog-first — lead straight into the Space Store, like the app. -->
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Space Store</p>
        <h1 class="page-title hero-title">Install a Space for <span class="accent">whatever you do.</span></h1>
        <p class="page-subtitle hero-sub">
          {{ spaces.length ? `${spaces.length} Spaces published and counting` : 'Browse the catalog' }} —
          productivity, finance, ops, games, and more. Open Construct to search, filter, and install in a click.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/download" class="btn btn-primary">Open Construct</NuxtLink>
          <NuxtLink to="/sdk" class="btn btn-secondary">Build a Space</NuxtLink>
        </div>
        <div class="mp-pill-row">
          <span v-for="c in categories" :key="c" class="pill">{{ c }}</span>
        </div>

        <!-- The live catalog — real published Spaces, fetched at build time. -->
        <div v-if="spaces.length" class="catalog-grid">
          <NuxtLink v-for="s in spaces" :key="s.id" :to="`/spaces/${s.id}`" class="cat-card">
            <div class="cat-mark">
              <Icon v-if="iconName(s.icon)" :name="iconName(s.icon)!" class="cat-icon" />
              <span v-else>{{ mono(s) }}</span>
            </div>
            <div class="cat-body">
              <div class="cat-name">{{ s.name }}<span v-if="s.version" class="cat-ver">v{{ s.version }}</span></div>
              <p class="cat-desc">{{ short(s.description) }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="page-container">
        <p class="page-label">Distribution</p>
        <h2 class="page-title">Three audiences, <span class="accent">one artifact.</span></h2>
        <p class="page-subtitle">A Space ships the same way regardless of who sees it. The reach is a publish-time choice, not a re-build.</p>
        <div class="grid-3">
          <article v-for="d in distributions" :key="d.title" class="card mp-dist">
            <span class="mp-dist__tag">{{ d.tag }}</span>
            <h3>{{ d.title }}</h3>
            <p>{{ d.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">Trust</p>
        <h2 class="page-title">Open catalog, <span class="accent">closed loopholes.</span></h2>
        <p class="page-subtitle">An open Space Store works only if the install is safe. Four guardrails make that real.</p>
        <div class="grid-2">
          <article v-for="t in trust" :key="t.title" class="card">
            <h3>{{ t.title }}</h3>
            <p>{{ t.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="page-container">
        <p class="page-label">Publishing</p>
        <h2 class="page-title">Ship a Space <span class="accent">in four steps.</span></h2>
        <p class="page-subtitle">Same flow we use to publish Construct's own built-in Spaces. The CLI handles the boring parts.</p>
        <ol class="mp-flow">
          <li v-for="step in buildFlow" :key="step.num">
            <span class="mp-flow__num">{{ step.num }}</span>
            <strong>{{ step.title }}</strong>
            <span>{{ step.body }}</span>
          </li>
        </ol>
        <div class="hero-actions" style="margin-top: 28px">
          <NuxtLink to="/sdk" class="btn btn-primary">SDK Docs</NuxtLink>
          <a href="https://my.lisaos.dev" target="_blank" rel="noreferrer" class="btn btn-secondary">Developer Portal</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.mp-dist { position: relative; }
.mp-dist__tag {
  position: absolute;
  top: 22px; right: 22px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--app-muted);
}

.mp-pill-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }
.pill {
  padding: 8px 16px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 400;
  color: var(--app-accent-text, #e11d48);
  background: color-mix(in srgb, var(--app-accent) 8%, transparent);
}

/* Live catalog cards — compact, link to each Space's detail page. */
.catalog-grid {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.cat-card {
  display: flex;
  gap: 14px;
  padding: 18px;
  border-radius: 8px;
  background: var(--app-card-bg);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.18s ease, transform 0.18s ease;
}
.cat-card:hover { box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08); transform: translateY(-2px); }
.cat-mark {
  width: 40px; height: 40px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  border-radius: 9px; font-size: 17px; font-weight: 600;
  color: var(--app-accent-text, #e11d48);
  background: color-mix(in srgb, var(--app-accent) 10%, var(--app-card-bg));
}
.cat-icon { width: 20px; height: 20px; }
.cat-name { font-size: 14px; font-weight: 500; }
.cat-ver { font-size: 11px; color: var(--app-muted); margin-left: 6px; font-weight: 400; }
.cat-desc { font-size: 12px; color: var(--app-muted); line-height: 1.5; margin-top: 4px; }

@media (max-width: 860px) { .catalog-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .catalog-grid { grid-template-columns: 1fr; } }

.mp-flow {
  list-style: none;
  margin: 32px 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
}
.mp-flow li {
  position: relative;
  padding: 24px 26px 24px 70px;
  background: var(--app-card-bg);
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.mp-flow__num {
  position: absolute;
  top: 24px; left: 26px;
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  color: var(--app-accent-text, #e11d48);
  letter-spacing: 0.04em;
}
.mp-flow li strong {
  font-size: 15px;
  font-weight: 500;
  color: var(--app-foreground);
}
.mp-flow li span:not(.mp-flow__num) {
  font-size: 13px;
  font-weight: 300;
  color: var(--app-muted);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .mp-flow { grid-template-columns: 1fr; }
}
</style>
