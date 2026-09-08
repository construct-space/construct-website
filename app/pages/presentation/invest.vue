<script setup lang="ts">
// /presentation/invest — the investor deck. Grounded in the real
// product; every private figure (traction, raise, dates) is a visible
// .tbd placeholder the deck owner fills in before presenting. We never
// fabricate metrics.
import { useScrollReveal } from '~/composables/useScrollReveal'

useScrollReveal()

useSeoMeta({
  title: 'Construct — Investor brief',
  description:
    'Construct is the operating system for the age of AI: a horizontal platform of installable Spaces with an Operator that runs them. Category, model, and moat.',
  robots: 'noindex, nofollow',
})

const why = [
  { h: 'Models crossed the line', p: 'Frontier and small fine-tuned models are finally good enough to do real, multi-step work — not just answer questions.' },
  { h: 'But agents are homeless', p: 'They have no place to live, no structured data to act on, no UI per job, no permissions, no economy. Capability without a substrate.' },
  { h: 'SaaS is unbundling', p: 'A decade of point tools is collapsing. The re-bundle happens around an AI-native OS, not another dashboard.' },
  { h: 'Small models got ownable', p: 'A small base plus a LoRA per task is now cheap enough to own the operator layer — while competitors resell someone else\'s API.' },
]

const model = [
  { h: 'Metered AI credits', p: 'Post-paid usage of the Operator and models, billed through Polar. Margin is structural because we run our own Construct models.', tag: 'Usage' },
  { h: 'Space Store revenue share', p: 'A take rate on paid Spaces. Two-sided: developers earn distribution, we earn on every transaction.', tag: 'Platform' },
  { h: 'Org & Enterprise seats', p: 'Private marketplaces, org Spaces, admin and audit. Seat-based, expands with the team.', tag: 'Seats' },
]

const moat = [
  { h: 'Data gravity', p: 'Every Space writes structured work into the Graph. The longer an org runs on Construct, the more its operational memory lives here — and the harder it is to leave.' },
  { h: 'Two-sided network', p: 'Developers build Spaces because users are here; users come because the Spaces exist. The Space Store compounds like every app store before it.' },
  { h: 'Owned operator models', p: 'The Construct model family — one base, a LoRA per sibling — gives us cost and behaviour control. We are not a markup on a third-party API.' },
  { h: 'Always-on stickiness', p: 'The execution mesh runs automations even when machines are closed. Once a team\'s operations fire through Construct, it becomes load-bearing.' },
]

const built = [
  'Desktop app — native, shipping on macOS, Windows, Linux',
  'Web portal — my.lisaos.dev, same gateway',
  'Mobile companion — live device-bus to the desktop Operator',
  'SDK + CLI — @construct-space/graph, /ui, /cli on npm',
  'Space Store — public catalog, curation, install + publish',
  'The Graph — multi-tenant data layer in production',
  'Construct model family — owned models, LoRA-per-task',
  'Execution mesh — Conductor + cloud operator, headless runs',
]
</script>

<template>
  <div class="deck">
    <div class="deck-bar">
      <span class="deck-bar__title">Construct<span>.</span> investor brief</span>
      <span class="deck-bar__tag">Confidential</span>
      <span class="deck-bar__spacer" />
      <NuxtLink to="/presentation" class="deck-bar__link">All decks</NuxtLink>
      <NuxtLink to="/" class="deck-bar__link">lisaos.dev →</NuxtLink>
    </div>

    <!-- 01 — Title -->
    <section class="slide">
      <div class="slide-inner">
        <p class="slide-kicker">The operating system for the age of AI</p>
        <h1 class="deck-statement">
          Everyone is building <span class="accent">chatbots.</span><br />We built the OS they should run on.
        </h1>
        <p class="slide-lead" style="margin-top: 28px">
          Construct turns AI from a chat box into a platform: you install <strong>Spaces</strong> —
          apps for any kind of work — and an <strong>Operator</strong> runs them for you.
          One Space Store, one data layer, one always-on runtime underneath.
        </p>
        <div class="kpi-row">
          <div><div class="kpi-num">Horizontal</div><div class="kpi-label">Every industry, not just code</div></div>
          <div><div class="kpi-num">Owned models</div><div class="kpi-label">Our own operator family</div></div>
          <div><div class="kpi-num">Full stack</div><div class="kpi-label">App · web · mobile · SDK · mesh, shipping</div></div>
        </div>
      </div>
    </section>

    <!-- 02 — Problem -->
    <section class="slide alt">
      <div class="slide-inner reveal">
        <p class="slide-kicker">The problem</p>
        <h2 class="slide-title wide">AI is powerful and homeless.</h2>
        <p class="slide-lead">
          The average team runs a dozen disconnected SaaS tools and a chatbot that can't touch
          any of them. The AI is smart enough to do the work — but it has no interface built for
          the job, no access to the team's data, no permissions, and nowhere to run when the
          laptop closes. Intelligence without a home does nothing.
        </p>
        <div class="deck-versus">
          <div class="deck-versus__row deck-versus__head"><span>The world today</span><span>What it costs</span></div>
          <div class="deck-versus__row">
            <div class="deck-versus__cell is-old">A chatbot in a sidebar</div>
            <div class="deck-versus__cell">Answers, never actions</div>
          </div>
          <div class="deck-versus__row">
            <div class="deck-versus__cell is-old">Ten SaaS subscriptions</div>
            <div class="deck-versus__cell">Data siloed, nothing shared</div>
          </div>
          <div class="deck-versus__row">
            <div class="deck-versus__cell is-old">Same UI for every task</div>
            <div class="deck-versus__cell">Wrong tool for most jobs</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 03 — Insight / category -->
    <section class="slide">
      <div class="slide-inner reveal">
        <p class="slide-kicker">The insight</p>
        <h2 class="slide-title wide">Chat was the first interface for AI. The OS is the next one.</h2>
        <p class="slide-lead">
          The smartphone didn't win because it was a better phone — it won because it became the
          platform every task installed onto. AI is at that exact threshold. The team that owns
          the home screen, the app store, and the runtime owns the category. We're building it as
          an operating system from day one, not a feature bolted onto a chat window.
        </p>
      </div>
    </section>

    <!-- 04 — Product -->
    <section class="slide alt">
      <div class="slide-inner reveal">
        <p class="slide-kicker">The product</p>
        <h2 class="slide-title">Three layers, one system.</h2>
        <div class="deck-steps">
          <div class="deck-step"><div class="deck-step__num">01</div><div><h4>Spaces — the surface</h4><p>Installable apps for any workflow, each with its own interface, data, and tools. There's a Space for sales, support, routes, revenue, records, review — or the messy thing no SaaS got right.</p></div></div>
          <div class="deck-step"><div class="deck-step__num">02</div><div><h4>The Operator — the intelligence</h4><p>An AI that runs the Spaces instead of sitting beside them. It reads the data, calls each Space's actions as tools, and does the work inside the app. Powered by our own models.</p></div></div>
          <div class="deck-step"><div class="deck-step__num">03</div><div><h4>Graph + Mesh — the substrate</h4><p>One data layer and one always-on runtime carry identity, memory, models, permissions, and automations across every Space — running even when the machine is closed.</p></div></div>
        </div>
      </div>
    </section>

    <!-- 05 — Why now -->
    <section class="slide">
      <div class="slide-inner reveal">
        <p class="slide-kicker">Why now</p>
        <h2 class="slide-title wide">Four curves crossing at once.</h2>
        <div class="grid-2" style="margin-top: 8px">
          <div v-for="w in why" :key="w.h" class="card">
            <h3>{{ w.h }}</h3>
            <p>{{ w.p }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 06 — Market -->
    <section class="slide alt">
      <div class="slide-inner reveal">
        <p class="slide-kicker">Market</p>
        <h2 class="slide-title wide">Horizontal by construction.</h2>
        <p class="slide-lead">
          Because a Space can be anything, the reachable market is every team that does knowledge
          work — the same surface area as SaaS plus AI spend, not a single vertical. We land
          through technical users and expand outward, one Space category at a time.
        </p>
        <div class="kpi-row">
          <div><div class="kpi-num"><span class="tbd">[ TAM ]</span></div><div class="kpi-label">AI + software spend you can address</div></div>
          <div><div class="kpi-num"><span class="tbd">[ SAM ]</span></div><div class="kpi-label">Teams reachable through the wedge</div></div>
          <div><div class="kpi-num"><span class="tbd">[ SOM ]</span></div><div class="kpi-label">12–24 month obtainable</div></div>
        </div>
        <p class="slide-lead" style="margin-top: 32px; font-size: 1rem">
          <strong>Wedge → expand:</strong> developers and technical teams adopt the coding and ops
          Spaces first, then pull in CRM, support, finance, logistics, and industry-specific
          Spaces from the Space Store — the same motion that took the App Store horizontal.
        </p>
      </div>
    </section>

    <!-- 07 — Business model -->
    <section class="slide">
      <div class="slide-inner reveal">
        <p class="slide-kicker">Business model</p>
        <h2 class="slide-title wide">Three lines, all expanding with usage.</h2>
        <div class="grid-3" style="margin-top: 8px">
          <div v-for="m in model" :key="m.h" class="card card-accent">
            <p class="page-label" style="margin-bottom: 8px">{{ m.tag }}</p>
            <h3>{{ m.h }}</h3>
            <p>{{ m.p }}</p>
          </div>
        </div>
        <p class="slide-lead" style="margin-top: 32px; font-size: 1rem">
          The desktop app is free — adoption is the funnel. Revenue grows with Operator usage,
          Space Store volume, and seats, and our owned models keep gross margin on the usage line
          structurally higher than any API reseller.
        </p>
      </div>
    </section>

    <!-- 08 — Moat -->
    <section class="slide alt">
      <div class="slide-inner reveal">
        <p class="slide-kicker">Why it compounds</p>
        <h2 class="slide-title">Four moats that reinforce each other.</h2>
        <div class="grid-2" style="margin-top: 8px">
          <div v-for="m in moat" :key="m.h" class="card">
            <h3>{{ m.h }}</h3>
            <p>{{ m.p }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 09 — Why us / already built -->
    <section class="slide">
      <div class="slide-inner reveal">
        <p class="slide-kicker">Unfair advantage</p>
        <h2 class="slide-title wide">The whole stack already ships.</h2>
        <p class="slide-lead">
          This isn't a pitch for a thing we'll build. The hard, integrated parts — surfaces,
          gateway, data layer, owned models, Space Store, and an always-on mesh — are running.
          That integration is the moat competitors underestimate.
        </p>
        <div class="built-grid">
          <div v-for="b in built" :key="b" class="built-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            <span>{{ b }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 10 — Traction -->
    <section class="slide alt">
      <div class="slide-inner reveal">
        <p class="slide-kicker">Traction</p>
        <h2 class="slide-title wide">Pick the metrics that tell the truth.</h2>
        <p class="slide-lead">Replace each placeholder with a real, verifiable number. Leave blank rather than guess.</p>
        <div class="kpi-row">
          <div><div class="kpi-num"><span class="tbd">[ # ]</span></div><div class="kpi-label">Installs / active users</div></div>
          <div><div class="kpi-num"><span class="tbd">[ # ]</span></div><div class="kpi-label">Spaces published</div></div>
          <div><div class="kpi-num"><span class="tbd">[ # ]</span></div><div class="kpi-label">Operator runs / week</div></div>
          <div><div class="kpi-num"><span class="tbd">[ $ ]</span></div><div class="kpi-label">Revenue / pipeline</div></div>
        </div>
        <div class="kpi-row" style="margin-top: 28px">
          <div><div class="kpi-num"><span class="tbd">[ % ]</span></div><div class="kpi-label">MoM growth</div></div>
          <div><div class="kpi-num"><span class="tbd">[ # ]</span></div><div class="kpi-label">Org / paying teams</div></div>
          <div><div class="kpi-num"><span class="tbd">[ logo ]</span></div><div class="kpi-label">Notable design partners</div></div>
          <div><div class="kpi-num"><span class="tbd">[ # ]</span></div><div class="kpi-label">Retention / weekly actives</div></div>
        </div>
      </div>
    </section>

    <!-- 11 — The ask -->
    <section class="slide">
      <div class="slide-inner reveal">
        <p class="slide-kicker">The ask</p>
        <h2 class="slide-title wide">
          Raising <span class="tbd">[ $ amount ]</span> to <span class="accent">own the AI-era OS.</span>
        </h2>
        <div class="deck-rows">
          <div class="deck-row"><div class="deck-row__key">Use of funds</div><div class="deck-row__val"><span class="tbd">[ e.g. operator model training, Space Store growth, enterprise + go-to-market ]</span></div></div>
          <div class="deck-row"><div class="deck-row__key">Milestones</div><div class="deck-row__val"><span class="tbd">[ what this round proves — usage, revenue, ecosystem targets ]</span></div></div>
          <div class="deck-row"><div class="deck-row__key">Team</div><div class="deck-row__val"><span class="tbd">[ founders + key hires, why this team ships the whole stack ]</span></div></div>
        </div>
        <div class="hero-actions" style="margin-top: 36px">
          <a href="mailto:flakerimi@basecode.al" class="btn btn-primary">Talk to us</a>
          <NuxtLink to="/presentation/construct" class="btn btn-secondary">What Construct is</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.built-grid {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
.built-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-radius: 4px;
  background: var(--app-card-bg);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  font-size: 14.5px;
}
.built-item svg { color: var(--app-accent-text, #e11d48); flex-shrink: 0; }

@media (max-width: 860px) {
  .built-grid { grid-template-columns: 1fr; }
}
</style>
