<script setup lang="ts">
useSeoMeta({
  title: 'Assistant Space — The Operator surface in Construct',
  description:
    'Assistant is the always-on Operator surface. Summon with Shift Shift, scoped to whatever you are doing — your Space, your project, your active record.',
  ogTitle: 'Assistant — The Operator surface',
  ogDescription:
    'Always on, summoned with Shift Shift, already scoped to the work in front of you.',
})

useSchemaOrg([
  defineWebPage({
    name: 'Assistant — The Operator surface in Construct',
    description: 'A built-in Construct Space. Summon the Operator with Shift Shift; act inside the active workflow without switching tabs.',
  }),
])

const features = [
  { title: 'Summoned, not parked', body: 'Tap Shift twice. Operator comes forward, already scoped to the Space you are in. Esc to dismiss. No persistent chat panel taking up the rail.' },
  { title: 'Scope follows you', body: 'Open in the Editor, scoped to the file. Open in Boards, scoped to the active board. The Assistant inherits state from wherever you summoned it.' },
  { title: 'Acts where the work is', body: 'Tools fire inside the Space — list, find, update, draft, run. The result is the work being done, not a paragraph describing what you should do.' },
  { title: 'Multi-model, by task', body: 'Pick a model per task, per Space, or by data sensitivity. Cloud or local. The Assistant routes based on the rules you set.' },
]

const useCases = [
  { title: 'Quick question, no context-switch', body: 'You are in the Editor. Shift Shift, ask, get the answer in-place. Back to work.' },
  { title: 'One-shot action', body: '"Move the sidebar focus loop bug to high." The Assistant opens Boards, finds the ticket, updates it, confirms.' },
  { title: 'Cross-Space hand-off', body: 'Finish a deal in Revenue → Shift Shift → "create a Support thread for this customer." The thread carries.' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Built in · Personal</p>
        <h1 class="page-title hero-title">Assistant. <span class="accent">Summoned.</span></h1>
        <p class="page-subtitle hero-sub">
          The Operator surface inside every Space. Tap Shift twice — it comes forward,
          already scoped to whatever you are doing. No tab to switch to, no context to
          paste, no parked chat panel waiting for you.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/download" class="btn btn-primary">Download Free</NuxtLink>
          <NuxtLink to="/operator" class="btn btn-secondary">How Operator works</NuxtLink>
        </div>

        <ShotPlaceholder
          name="space-assistant.png"
          alt="Assistant Space — Operator panel summoned over a Space"
          desc="A Construct Space (e.g. Editor or Boards) in full view. Operator panel summoned in the upper-right via Shift Shift, scoped to the Space — header reads the Space name, tool calls listed, suggested action button, result line. Same look as summon-operator.png but framed as the Assistant Space."
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">What it does</p>
        <h2 class="page-title">Always there. <span class="accent">Out of your way.</span></h2>
        <div class="grid-2">
          <article v-for="f in features" :key="f.title" class="card">
            <h3>{{ f.title }}</h3>
            <p>{{ f.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="page-container">
        <p class="page-label">In practice</p>
        <h2 class="page-title">Three ways teams <span class="accent">actually use it.</span></h2>
        <div class="grid-3">
          <article v-for="u in useCases" :key="u.title" class="card">
            <h3>{{ u.title }}</h3>
            <p>{{ u.body }}</p>
          </article>
        </div>
        <div class="hero-actions" style="margin-top: 28px">
          <NuxtLink to="/spaces" class="btn btn-secondary">← All built-in Spaces</NuxtLink>
          <NuxtLink to="/operator" class="btn btn-secondary">Operator details</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
