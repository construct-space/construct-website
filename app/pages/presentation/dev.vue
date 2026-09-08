<script setup lang="ts">
// /presentation/dev — the developer deck. The pitch to people who
// build: a Space is a small Vue plugin, but publishing it gives you an
// app with an Operator, a data layer, auth, billing, and a
// Space Store for free. Code shapes are the real SDK.
import { useScrollReveal } from '~/composables/useScrollReveal'

useScrollReveal()

useSeoMeta({
  title: 'Construct for developers — build a Space, get an AI app',
  description:
    'Write a Space — a small Vue 3 plugin — and ship an app with a built-in Operator, a typed data layer (the Graph), auth, billing, and Space Store distribution. SDK + CLI.',
  ogTitle: 'Build a Space, get an AI-native app',
  ogDescription:
    'A Space is a Vue plugin. Publishing it gives you an Operator, the Graph, auth, billing, and distribution — for free.',
})

const free = [
  { h: 'An Operator, built in', p: 'Every action you declare becomes a tool the Operator can call. You write a function; users get an agent that can run it. No model wiring, no tool plumbing.' },
  { h: 'A typed data layer', p: 'defineModel + useGraph give you a multi-tenant, access-controlled database with zero backend code. Schemas are per-Space and isolated by org.' },
  { h: 'Identity & auth, solved', p: 'Your Space inherits the signed-in user and their org. No login screens, no token handling, no OAuth dance to build.' },
  { h: 'Billing & metering', p: 'Operator usage is metered and billed by the platform. Paid Spaces earn through the Space Store revenue share.' },
  { h: 'Three surfaces, one build', p: 'The same Space runs in the desktop app, the web portal, and alongside the mobile companion. Build once.' },
  { h: 'Distribution', p: 'Publish to the public Space Store, privately to your org, or scoped to one project — one command, three audiences.' },
]

const anatomy = [
  { f: 'space.manifest.json', d: 'Name, icon, pages, and the permissions the Space needs (graph, scheduler, files…).' },
  { f: 'src/models/*.ts', d: 'defineModel() — your data shapes, fields, and access rules. This is your database.' },
  { f: 'src/pages/*.vue', d: 'Vue 3 pages — the interface for the job. Whatever UI fits the work.' },
  { f: 'src/actions.ts', d: 'Typed actions. Auto-registered, and each one becomes a tool the Operator can call.' },
  { f: 'src/composables/*.ts', d: 'useGraph(Model) for data; useScheduler() for anything that should fire later.' },
]

const flow = [
  { n: '01', h: 'Scaffold', p: 'construct scaffold my-space — manifest, pages, models, actions, all wired.' },
  { n: '02', h: 'Develop', p: 'construct dev — live in the real OS, with real identity and a real Operator. Not a sandbox lie.' },
  { n: '03', h: 'Build', p: 'construct build — bundled as an IIFE Space, ready to install anywhere Construct runs.' },
  { n: '04', h: 'Publish', p: 'construct publish — to the public Space Store, your org, or a single project.' },
]
</script>

<template>
  <div class="deck">
    <div class="deck-bar">
      <span class="deck-bar__title">Construct<span>.</span> for developers</span>
      <span class="deck-bar__tag">Build</span>
      <span class="deck-bar__spacer" />
      <NuxtLink to="/presentation" class="deck-bar__link">All decks</NuxtLink>
      <NuxtLink to="/sdk" class="deck-bar__link">SDK docs →</NuxtLink>
    </div>

    <!-- 01 — Hook -->
    <section class="slide">
      <span class="slide-num">01 / 07</span>
      <div class="slide-inner">
        <p class="slide-kicker">Build on the OS for the age of AI</p>
        <h1 class="deck-statement">
          Write a <span class="accent">Space.</span><br />Ship an app with an AI inside it.
        </h1>
        <p class="slide-lead" style="margin-top: 28px">
          A Space is a small Vue 3 plugin. Publishing one gives you an app with a built-in
          <strong>Operator</strong>, a typed data layer, identity, billing, and a Space Store to
          reach users — none of which you have to build. You write the part that's yours; the OS
          provides the rest.
        </p>
        <div class="hero-actions" style="margin-top: 28px">
          <a href="https://www.npmjs.com/package/@construct-space/cli" target="_blank" rel="noreferrer" class="btn btn-primary">Install the CLI</a>
          <NuxtLink to="/sdk" class="btn btn-secondary">Read the SDK</NuxtLink>
        </div>
      </div>
    </section>

    <!-- 02 — What you get for free -->
    <section class="slide alt">
      <span class="slide-num">02 / 07</span>
      <div class="slide-inner reveal">
        <p class="slide-kicker">The leverage</p>
        <h2 class="slide-title wide">Six things you don't have to build.</h2>
        <div class="grid-3" style="margin-top: 8px">
          <div v-for="f in free" :key="f.h" class="card">
            <h3>{{ f.h }}</h3>
            <p>{{ f.p }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 03 — The actions → tools idea -->
    <section class="slide">
      <span class="slide-num">03 / 07</span>
      <div class="slide-inner reveal">
        <p class="slide-kicker">The key idea</p>
        <h2 class="slide-title wide">Your actions <span class="accent">are</span> the Operator's tools.</h2>
        <p class="slide-lead">
          Declare an action in your Space and two things happen at once: your UI can call it, and
          the Operator can call it too — with descriptions, typed params, and your access rules.
          You write a function; your users get an agent that knows how to use it.
        </p>
        <pre class="deck-code"><code><span class="c-com">// src/actions.ts — auto-registered, callable by UI and Operator alike</span>
<span class="c-key">export const</span> actions = {
  create_note: {
    description: <span class="c-str">'Create a note for the signed-in user'</span>,
    params: { content: { type: <span class="c-str">'string'</span>, required: <span class="c-key">true</span> } },
    <span class="c-key">async</span> <span class="c-fn">run</span>({ content }, ctx) {
      <span class="c-key">return</span> ctx.graph.<span class="c-fn">create</span>(Note, { content })
    },
  },
}</code></pre>
      </div>
    </section>

    <!-- 04 — Data layer -->
    <section class="slide alt">
      <span class="slide-num">04 / 07</span>
      <div class="slide-inner reveal">
        <p class="slide-kicker">The data layer</p>
        <h2 class="slide-title wide">Define a model. You have a backend.</h2>
        <div class="slide-split">
          <div>
            <p class="slide-lead">
              <code class="inline">defineModel()</code> declares fields and access rules;
              <code class="inline">useGraph()</code> gives you typed CRUD against a multi-tenant,
              org-isolated store. No migrations to hand-write, no server to deploy, no auth to
              bolt on — the <strong>Graph</strong> (Construct's backend for Spaces, the
              <code class="inline">@construct-space/graph</code> SDK) runs it.
            </p>
          </div>
          <pre class="deck-code"><code><span class="c-key">import</span> { defineModel, field, access } <span class="c-key">from</span> <span class="c-str">'@construct-space/graph'</span>

<span class="c-key">export const</span> Note = <span class="c-fn">defineModel</span>(<span class="c-str">'Note'</span>, {
  content: <span class="c-fn">field</span>.<span class="c-fn">text</span>(),
  pinned:  <span class="c-fn">field</span>.<span class="c-fn">boolean</span>(),
  access:  access.<span class="c-fn">owner</span>(),
})

<span class="c-com">// in a component / composable</span>
<span class="c-key">const</span> { find, create } = <span class="c-fn">useGraph</span>(Note)</code></pre>
        </div>
      </div>
    </section>

    <!-- 05 — Anatomy of a Space -->
    <section class="slide">
      <span class="slide-num">05 / 07</span>
      <div class="slide-inner reveal">
        <p class="slide-kicker">Anatomy</p>
        <h2 class="slide-title">What's in a Space.</h2>
        <div class="deck-rows">
          <div v-for="a in anatomy" :key="a.f" class="deck-row">
            <div class="deck-row__key"><span class="mono">{{ a.f }}</span></div>
            <div class="deck-row__val">{{ a.d }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 06 — The loop -->
    <section class="slide alt">
      <span class="slide-num">06 / 07</span>
      <div class="slide-inner reveal">
        <p class="slide-kicker">The loop</p>
        <h2 class="slide-title wide">Scaffold → dev → build → publish.</h2>
        <div class="deck-steps">
          <div v-for="s in flow" :key="s.n" class="deck-step">
            <div class="deck-step__num">{{ s.n }}</div>
            <div><h4>{{ s.h }}</h4><p>{{ s.p }}</p></div>
          </div>
        </div>
        <pre class="deck-code" style="margin-top: 24px"><code>$ construct scaffold my-space
$ construct dev
$ construct build
$ construct publish   <span class="c-com"># public · org · or project-scoped</span></code></pre>
      </div>
    </section>

    <!-- 07 — Dogfood + CTA -->
    <section class="slide">
      <span class="slide-num">07 / 07</span>
      <div class="slide-inner reveal">
        <p class="slide-kicker">The proof</p>
        <h2 class="slide-title wide">We build Spaces with a Space.</h2>
        <p class="slide-lead">
          SpaceKit — the tool we use to scaffold, edit, preview, and publish every Space,
          including itself — runs on the same SDK you'd use, the same Operator, the same OS. If
          it's good enough to ship the platform, it's good enough to ship your workflow.
        </p>
        <div class="hero-actions" style="margin-top: 32px">
          <a href="https://www.npmjs.com/package/@construct-space/cli" target="_blank" rel="noreferrer" class="btn btn-primary">Install the CLI</a>
          <NuxtLink to="/sdk" class="btn btn-secondary">SDK docs</NuxtLink>
          <a href="https://my.lisaos.dev" target="_blank" rel="noreferrer" class="btn btn-secondary">Developer portal</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
code.inline {
  font-family: 'JetBrains Mono', 'SF Mono', ui-monospace, monospace;
  font-size: 0.92em;
  padding: 2px 6px;
  border-radius: 4px;
  background: color-mix(in srgb, var(--app-accent) 9%, transparent);
  color: var(--app-accent-text, #e11d48);
}
.deck-code code { display: block; white-space: pre; }
.slide-split .deck-code { margin-top: 0; }
</style>
