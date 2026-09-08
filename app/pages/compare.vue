<script setup lang="ts">
useSeoMeta({
  title: 'Compare — Construct vs ChatGPT, Notion AI, custom GPTs',
  description: 'How Construct compares to a single chatbox, an AI-augmented doc tool, and the world of custom GPTs and assistants. One operating layer vs many bolt-ons.',
  ogTitle: 'Construct vs ChatGPT, Notion AI, custom GPTs',
  ogDescription: 'Many specialized Spaces vs one chat box. Apps as the product vs prompts as the product.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebPage({
    name: 'Construct vs ChatGPT, Notion AI, custom GPTs',
    description: 'Side-by-side comparison of how Construct positions against generic AI products.',
  }),
])

const features = [
  { name: 'Unit of work', construct: 'A Space — a real app for the workflow', chatgpt: 'A conversation', notion: 'A doc with AI in the margin', gpts: 'A system prompt + tools' },
  { name: 'Interface', construct: 'Purpose-built per Space', chatgpt: 'One chat box', notion: 'Doc canvas + sidebar', gpts: 'One chat box' },
  { name: 'Memory', construct: 'Belongs to the Space — files, decisions, state', chatgpt: 'Per-conversation, brittle', notion: 'In the doc, not in the AI', gpts: 'System prompt + uploaded files' },
  { name: 'Tools / actions', construct: 'Declared by the Space, run inside it', chatgpt: 'Plugins, scoped to chat', notion: 'In-doc commands', gpts: 'Bring-your-own actions' },
  { name: 'Models', construct: 'Multi-provider, swappable per task', chatgpt: 'Single vendor', notion: 'Single vendor', gpts: 'Single vendor' },
  { name: 'Permissions / autonomy', construct: 'Observe → Local → Execute & Commit', chatgpt: 'Per-message confirmations', notion: 'Manual', gpts: 'Per-action approval' },
  { name: 'Identity / org', construct: 'OS-level, shared across Spaces', chatgpt: 'Account-level', notion: 'Workspace-level', gpts: 'Per-GPT' },
  { name: 'Distribution', construct: 'Space Store, private, or scoped', chatgpt: '—', notion: '—', gpts: 'GPT Store' },
  { name: 'Local / air-gap', construct: 'Yes — local models, full air-gap', chatgpt: 'No', notion: 'No', gpts: 'No' },
  { name: 'Price', construct: 'Free + BYOK', chatgpt: 'From $20/mo', notion: '+$10/mo for AI', gpts: 'Bundled with paid plan' },
]

const why = [
  { title: 'Many specialized Spaces, not one chat box', body: "Real work spans queues, boards, runbooks, files, schedules. Forcing it through a single text input is a regression." },
  { title: 'Apps as the product, not prompts', body: 'A workflow deserves a UI, a memory, and a set of tools — not a system prompt and a hope.' },
  { title: 'Tools built into the Space', body: "When the Operator runs an action, it's already part of the Space — not a plugin grafted onto a chat session." },
  { title: 'Open SDK, real distribution', body: 'Build a Space, ship it to your team or to the Space Store. The Space owns its UI, its data model, and its actions.' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Why Construct</p>
        <h1 class="page-title hero-title">An OS full of apps, <span class="accent">not one chat box.</span></h1>
        <p class="page-subtitle hero-sub">
          Generic AI products keep stuffing every job into the same conversation. Construct
          treats each workflow as its own Space — with its own interface, memory, tools, and
          Operator. Here's how that changes the comparison.
        </p>
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">Side by side</p>
        <h2 class="page-title">Construct, plainly.</h2>
        <div class="compare-table-wrap">
          <table class="compare-table">
            <thead>
              <tr>
                <th class="feature-col">Capability</th>
                <th class="construct-col">Construct</th>
                <th>ChatGPT</th>
                <th>Notion AI</th>
                <th>Custom GPTs</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="f in features" :key="f.name">
                <td class="feature-col">{{ f.name }}</td>
                <td class="construct-col">{{ f.construct }}</td>
                <td>{{ f.chatgpt }}</td>
                <td>{{ f.notion }}</td>
                <td>{{ f.gpts }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="page-container">
        <p class="page-label">The shift</p>
        <h2 class="page-title">Why this shape <span class="accent">wins.</span></h2>
        <div class="grid-2">
          <article v-for="w in why" :key="w.title" class="card">
            <h3>{{ w.title }}</h3>
            <p>{{ w.body }}</p>
          </article>
        </div>
        <div class="hero-actions" style="margin-top: 28px">
          <NuxtLink to="/download" class="btn btn-primary">Download Free</NuxtLink>
          <NuxtLink to="/operator" class="btn btn-secondary">Meet the Operator</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.compare-table-wrap { overflow-x: auto; margin-top: 24px; border: 1px solid var(--app-border); border-radius: 12px; background: var(--app-card-bg); }
.compare-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.compare-table th, .compare-table td { padding: 14px 18px; text-align: left; border-bottom: 1px solid var(--app-border); vertical-align: top; }
.compare-table thead th {
  font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;
  color: var(--app-muted); background: var(--app-canvas-bg);
}
.compare-table tbody tr:last-child td { border-bottom: none; }
.feature-col { font-weight: 600; color: var(--app-foreground); width: 200px; }
.construct-col { color: var(--app-accent-text, #e11d48); font-weight: 500; background: color-mix(in srgb, var(--app-accent) 6%, transparent); }
.compare-table thead .construct-col { color: var(--app-accent-text, #e11d48); }
@media (max-width: 768px) {
  .compare-table { font-size: 12px; }
  .compare-table th, .compare-table td { padding: 10px 12px; }
}
</style>
