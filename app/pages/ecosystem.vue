<script setup lang="ts">
useSeoMeta({
  title: 'Ecosystem — One account, one Graph, every screen',
  description: 'Desktop, web, mobile, and TV are the same Construct. One identity, one Graph, one operator mesh, and a shared set of APIs keep every surface in sync.',
  ogTitle: 'Ecosystem — One account, one Graph, every screen',
  ogDescription: 'How Construct stays in sync across desktop, the my.lisaos.dev portal, mobile, and TV — and the services underneath them all.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebPage({
    name: 'Construct Ecosystem',
    description: 'How the desktop, web, mobile, and TV surfaces share one identity, one Graph, and one operator mesh.',
  }),
])

// The four surfaces a person actually touches. Different shells, same OS.
// `url`/`cta` only set where the destination is live today — the rest
// carry a status chip instead of a dead link.
const surfaces = [
  {
    name: 'Desktop',
    tag: 'macOS · Windows · Linux',
    status: 'Available',
    desc: 'The full OS. Every Space, the Operator, files, memory, themes, and automations — and the preferred executor for your automations whenever it is running.',
    url: '/download',
    cta: 'Download',
  },
  {
    name: 'Web portal',
    tag: 'my.lisaos.dev',
    status: 'Available',
    desc: 'Everything around the OS, in the browser — your account, organisations, the developer portal, domains, and delivery. Nothing to install.',
    url: 'https://my.lisaos.dev',
    cta: 'Open portal',
  },
  {
    name: 'Mobile',
    tag: 'iOS · Android',
    status: 'Coming soon',
    desc: 'A device-bus companion. Ask from your phone and it runs live on your online desktop operator. A cloud fallback for when the desktop is offline is on the way.',
    url: null,
    cta: null,
  },
  {
    name: 'TV',
    tag: 'Android TV',
    status: 'Preview',
    desc: 'An ambient, voice-driven dashboard. Speak a query and the inference API composes a screen-spec on the fly — clock, weather, or anything you ask for.',
    url: null,
    cta: null,
  },
]

// The shared spine. This is *why* the surfaces above stay in sync — they
// are not four apps with four databases, they are four shells over the
// same identity, data, execution, and services.
const spine = [
  {
    name: 'One identity',
    svc: 'accounts',
    desc: 'A single account and session sign you in everywhere. The same token authorises desktop, web, mobile, and TV — no per-device accounts, no separate logins.',
  },
  {
    name: 'One Graph',
    svc: 'graph.lisaos.dev',
    desc: 'Every Space reads and writes the same Graph. Your user and org are resolved from the token server-side, so the data you see is identical on every screen.',
  },
  {
    name: 'One operator mesh',
    svc: 'conductor + space-runtime',
    desc: 'Your work runs on a machine you own. Asks from any surface already route to your online desktop operator; the execution mesh — Conductor scheduling to your desktop first, the cloud as fallback — is rolling out to keep automations running when the desktop is closed.',
  },
  {
    name: 'Shared services',
    svc: 'inference · source · developer',
    desc: 'The same APIs back every client — inference for the Operator, source and developer for code and publishing, marketplace for the Space Store.',
  },
]

// Everything around the OS lives inside the my.lisaos.dev portal.
// Each entry deep-links to its space route.
const portal = [
  { name: 'Account', desc: 'Identity, sessions, security, and personal settings.', url: 'https://my.lisaos.dev/account' },
  { name: 'Domains', desc: 'Register and manage custom domains.', url: 'https://my.lisaos.dev/domains' },
  { name: 'Delivery', desc: 'Transactional email with DKIM, SPF, and DMARC.', url: 'https://my.lisaos.dev/delivery' },
  { name: 'Organisations', desc: 'Members, roles, billing, and shared workspaces.', url: 'https://my.lisaos.dev/org' },
  { name: 'Developer', desc: 'Publish spaces, manage API keys and publisher tokens.', url: 'https://my.lisaos.dev/developer' },
]

const resources = [
  { name: 'npm Packages', desc: 'Official packages for the Construct SDK and tooling.', url: 'https://www.npmjs.com/org/construct-space' },
  { name: 'Blog', desc: 'Product updates, engineering deep dives, and announcements.', url: 'https://construct.blog' },
]

const operations = [
  { name: 'Status', desc: 'Real-time health across every Construct service.', url: 'https://status.lisaos.dev' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="page-section" style="padding-top: 120px;">
      <div class="page-container">
        <p class="page-label">Ecosystem</p>
        <h1 class="page-title">One account. One Graph. <span class="accent">Every screen.</span></h1>
        <p class="page-subtitle">Desktop, the <a href="https://my.lisaos.dev" target="_blank" rel="noreferrer" class="accent">my.lisaos.dev</a> portal, mobile, and TV are not four apps — they are four shells over the same Construct. One identity signs you in, one Graph holds your data, and one operator mesh runs your work, so what you start on one surface is already there on the next.</p>

        <EcosystemDiagram />
      </div>
    </section>

    <!-- Surfaces — the four shells -->
    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">Surfaces</p>
        <h2 class="page-title">Pick a screen.</h2>
        <p class="page-subtitle">Each surface is the right shape for where you are — a full workstation on the desktop, your portal in any browser, a thumb-sized companion on your phone, an ambient glance on the TV.</p>
        <div class="eco-grid">
          <component
            :is="s.url ? 'a' : 'div'"
            v-for="s in surfaces"
            :key="s.name"
            :href="s.url || undefined"
            :target="s.url && s.url.startsWith('http') ? '_blank' : undefined"
            :rel="s.url && s.url.startsWith('http') ? 'noopener noreferrer' : undefined"
            class="card eco-card surface-card"
          >
            <div class="surface-head">
              <h3 class="eco-name">{{ s.name }}</h3>
              <span class="surface-status" :class="{ live: s.status === 'Available' }">{{ s.status }}</span>
            </div>
            <span class="surface-tag">{{ s.tag }}</span>
            <p class="eco-desc">{{ s.desc }}</p>
            <span v-if="s.cta" class="eco-url">{{ s.cta }} →</span>
          </component>
        </div>
      </div>
    </section>

    <!-- The spine — why they stay in sync -->
    <section class="page-section">
      <div class="page-container">
        <p class="page-label">The spine</p>
        <h2 class="page-title">Why they stay in sync.</h2>
        <p class="page-subtitle">There is no per-device database to reconcile and no sync conflict to resolve, because there is only one of each thing underneath.</p>
        <div class="eco-grid">
          <article v-for="item in spine" :key="item.name" class="card eco-card">
            <h3 class="eco-name">{{ item.name }}</h3>
            <p class="eco-desc">{{ item.desc }}</p>
            <span class="eco-url">{{ item.svc }}</span>
          </article>
        </div>
      </div>
    </section>

    <!-- Portal — everything inside my.lisaos.dev -->
    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">Portal</p>
        <h2 class="page-title">Around the OS.</h2>
        <p class="page-subtitle">Identity, organisations, billing, domains, delivery, and the developer portal all live at <a href="https://my.lisaos.dev" target="_blank" rel="noreferrer" class="accent">my.lisaos.dev</a> — and surface inside every client.</p>
        <div class="eco-grid">
          <a
            v-for="item in portal"
            :key="item.name"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="card eco-card"
          >
            <h3 class="eco-name">{{ item.name }}</h3>
            <p class="eco-desc">{{ item.desc }}</p>
            <span class="eco-url">{{ item.url.replace('https://', '') }}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Resources -->
    <section class="page-section">
      <div class="page-container">
        <p class="page-label">Resources</p>
        <div class="eco-grid">
          <a
            v-for="item in resources"
            :key="item.name"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="card eco-card"
          >
            <h3 class="eco-name">{{ item.name }}</h3>
            <p class="eco-desc">{{ item.desc }}</p>
            <span class="eco-url">{{ item.url.replace('https://', '').replace('https://www.', '') }}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Operations -->
    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">Operations</p>
        <div class="eco-grid">
          <a
            v-for="item in operations"
            :key="item.name"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="card eco-card"
          >
            <h3 class="eco-name">{{ item.name }}</h3>
            <p class="eco-desc">{{ item.desc }}</p>
            <span class="eco-url">{{ item.url.replace('https://', '') }}</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.eco-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.eco-card {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
}

.eco-name {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
}

.eco-desc {
  font-size: 13px;
  color: var(--app-muted);
  line-height: 1.5;
  margin-bottom: 12px;
  flex: 1;
}

.eco-url {
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 12px;
  color: var(--app-accent-text, #e11d48);
}

/* Surface cards carry a status chip + a device tag above the body. */
.surface-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.surface-status {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 3px 8px;
  border-radius: 999px;
  color: var(--app-muted);
  background: color-mix(in srgb, var(--app-muted) 12%, transparent);
  white-space: nowrap;
}

.surface-status.live {
  color: var(--app-accent-text, #e11d48);
  background: color-mix(in srgb, var(--app-accent) 12%, transparent);
}

.surface-tag {
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 11px;
  color: var(--app-muted);
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .eco-grid {
    grid-template-columns: 1fr;
  }
}
</style>
