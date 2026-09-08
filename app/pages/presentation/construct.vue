<script setup lang="ts">
// /presentation/construct — the internal "so we're all on the same
// page" deck. The canonical definition of what Construct is, the
// vocabulary we use, the architecture, and the three pitches by
// length. Not in the sitemap; shareable by direct link.
import { useScrollReveal } from '~/composables/useScrollReveal'

useScrollReveal()

useSeoMeta({
  title: 'Construct — What we are (team brief)',
  description:
    'The canonical definition of Construct: the three layers, the vocabulary, the architecture, and the elevator pitch by length. For the team.',
  robots: 'noindex, nofollow',
})

// The shared vocabulary. One row per canonical term so nobody invents
// a synonym in a deck, a doc, or a sales call.
const vocab = [
  { term: 'Space', def: 'An installable app for a kind of work. Has its own interface, data models, actions, memory, permissions, and Operator context. Technically a Vue 3 plugin. "There\'s a Space for that."' },
  { term: 'Operator', def: 'What operates the Spaces — it acts inside the app instead of just chatting, and calls Space actions as tools. Summoned with Shift Shift. Powered by the Brain.' },
  { term: 'Brain', def: 'The agent engine that powers an Operator — the intelligence that reasons, plans, and loads skills on demand. Internal term; externally we just say "Operator".' },
  { term: 'Construct models', def: 'Our own models that power the Operators — one small shared base plus a specialist tuning per sibling, so behaviour and cost are ours to control (we\'re not reselling a third party\'s API). Named after Matrix characters (Trinity, Apoc, Mouse, Oracle, Neo…).' },
  { term: 'Graph', def: 'Construct\'s backend for Spaces — one secure store where all your work lives (customers, tasks, notes, files, records) so every Space shares the same data instead of scattering it across apps, and the Operator can read it and act on it. Each org\'s data is sealed off from every other org\'s, with rules for who can see what.' },
  { term: 'Space Store', def: 'The app store for Spaces. Public catalog + staff curation + editorial. Install / publish with personal, org, or project scope; revenue share on paid Spaces.' },
  { term: 'Execution Mesh', def: 'The always-on automation layer: Conductor (control plane) → Operators (desktop preferred, cloud fallback) → Space actions run headless → Graph. Rules fire even when the desktop is closed.' },
  { term: 'Surface', def: 'A client that presents Construct: the desktop app, the web portal (my.lisaos.dev), and the mobile companion. Same gateway, same features, different surface.' },
  { term: 'Gateway', def: 'my.lisaos.dev — the single entry point. Every surface is a client of the same gateway and the same services (accounts, developer, source, graph, Space Store, conductor…).' },
]

const layers = [
  {
    n: '01', name: 'Spaces — the surface',
    body: 'Apps for any workflow. Sales, support, routes, revenue, patient records, contract review, the messy thing no SaaS got right. You install one, open it, and it has the right interface for that job — not one chat box for everything.',
  },
  {
    n: '02', name: 'The Operator — the intelligence',
    body: 'An AI that runs the Spaces, not a sidebar that answers questions. It reads the Graph, calls a Space\'s actions as tools, and does the work inside the app. Powered by our own Construct models, so behaviour and cost are ours to control.',
  },
  {
    n: '03', name: 'Graph + Mesh — the substrate',
    body: 'One data layer and one always-on runtime carry identity, memory, models, permissions, and automations across every Space — and keep running when your machine is closed. Local-first when the desktop is on; cloud fallback when it is off.',
  },
]

const areNot = [
  { not: 'A coding tool', is: 'We started in code. We outgrew it. Construct is horizontal — every industry, every kind of knowledge work.' },
  { not: 'Another chatbot', is: 'Chat was the first interface for AI. Construct is the next one: apps with an Operator inside, not a prompt box.' },
  { not: 'A SaaS suite', is: 'You don\'t rent ten disconnected tools. You install Spaces onto one OS that already knows who you are and what you\'re working on.' },
  { not: 'A wrapper on one model', is: 'We own a family of operator models and run a full stack — app, web, mobile, CLI, SDK, Space Store, mesh.' },
]

const pitches = [
  {
    len: '10 seconds',
    text: 'Construct is the operating system for the age of AI. Instead of one chatbot, you install Spaces — apps for any kind of work — and an Operator runs them for you.',
  },
  {
    len: '30 seconds',
    text: 'Every team juggles a dozen SaaS tools plus a chatbot that can\'t touch any of them. Construct replaces that with an OS: install a Space for sales, one for support, one for routes or revenue or whatever your team actually does. Every Space shares one identity, one data layer, and one Operator that works inside it — and keeps working even when your machine is closed. There\'s a Space for that.',
  },
  {
    len: '2 minutes',
    text: 'The smartphone made every task a matter of installing an app. Before it, you carried a camera, a map, a music player. Construct is that moment for AI work. The home screen is your OS; the App Store is our Space Store; the apps are Spaces — and the difference is that an Operator doesn\'t just live next to the apps, it operates them. Underneath every Space is one shared substrate: your identity, a structured Graph of your work, the models, the permissions, and an execution mesh that runs your automations even when your laptop is shut. We own the operator models too — a small base with a specialist LoRA per task — so we control behaviour and cost where everyone else is reselling someone else\'s API. AI is finally capable enough to do real work, but it\'s homeless: it has no place to live, no data to act on, no UI per job, no economy. Construct is that home.',
  },
]
</script>

<template>
  <div class="deck">
    <div class="deck-bar">
      <span class="deck-bar__title">Construct<span>.</span> team brief</span>
      <span class="deck-bar__tag">Internal</span>
      <span class="deck-bar__spacer" />
      <NuxtLink to="/presentation" class="deck-bar__link">All decks</NuxtLink>
      <NuxtLink to="/" class="deck-bar__link">lisaos.dev →</NuxtLink>
    </div>

    <!-- 01 — One sentence -->
    <section class="slide">
      <span class="slide-num">01 / 09</span>
      <div class="slide-inner">
        <p class="slide-kicker">So we're all on the same page</p>
        <h1 class="deck-statement">
          Construct is the <span class="accent">operating system</span> for the age of AI.
        </h1>
        <p class="slide-lead" style="margin-top: 28px">
          You install <strong>Spaces</strong> — apps for any kind of work — and an
          <strong>Operator</strong> runs them for you. Everything underneath is shared:
          identity, data, models, permissions, automations. Say it the same way every time.
          The line is <strong>"There's a Space for that."</strong>
        </p>
      </div>
    </section>

    <!-- 02 — The analogy -->
    <section class="slide alt">
      <span class="slide-num">02 / 09</span>
      <div class="slide-inner reveal">
        <p class="slide-kicker">The mental model</p>
        <h2 class="slide-title wide">The smartphone moment, for AI work.</h2>
        <p class="slide-lead">
          Before the iPhone, every task meant a separate device. The App Store collapsed
          them into one: install an app for anything. Construct does that for AI work — with
          one twist that is the whole pitch.
        </p>
        <div class="deck-rows">
          <div class="deck-row"><div class="deck-row__key">The home screen</div><div class="deck-row__val">Construct — the OS you open to start working.</div></div>
          <div class="deck-row"><div class="deck-row__key">The App Store</div><div class="deck-row__val">The <strong>Space Store</strong> — install a Space, build your own, or publish to your org.</div></div>
          <div class="deck-row"><div class="deck-row__key">The apps</div><div class="deck-row__val"><strong>Spaces</strong> — purpose-built for one kind of work each.</div></div>
          <div class="deck-row"><div class="deck-row__key">The twist</div><div class="deck-row__val">The <strong>Operator</strong> doesn't sit next to the apps. It <strong>operates</strong> them.</div></div>
        </div>
      </div>
    </section>

    <!-- 03 — Three layers -->
    <section class="slide">
      <span class="slide-num">03 / 09</span>
      <div class="slide-inner reveal">
        <p class="slide-kicker">The whole thing in three layers</p>
        <h2 class="slide-title">If someone only remembers three things.</h2>
        <div class="deck-steps">
          <div v-for="l in layers" :key="l.n" class="deck-step">
            <div class="deck-step__num">{{ l.n }}</div>
            <div>
              <h4>{{ l.name }}</h4>
              <p>{{ l.body }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 04 — What we are NOT -->
    <section class="slide alt">
      <span class="slide-num">04 / 09</span>
      <div class="slide-inner reveal">
        <p class="slide-kicker">Guardrails</p>
        <h2 class="slide-title wide">What Construct is <span class="accent">not.</span></h2>
        <p class="slide-lead">If you catch yourself describing one of these, reframe. This is where the confusion comes from.</p>
        <div class="deck-rows">
          <div v-for="row in areNot" :key="row.not" class="deck-row">
            <div class="deck-row__key">Not “{{ row.not }}”</div>
            <div class="deck-row__val">{{ row.is }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 05 — Vocabulary -->
    <section class="slide">
      <span class="slide-num">05 / 09</span>
      <div class="slide-inner reveal">
        <p class="slide-kicker">Say it the same way</p>
        <h2 class="slide-title">The vocabulary.</h2>
        <p class="slide-lead">One canonical word per concept. No synonyms in decks, docs, or calls.</p>
        <div class="deck-rows">
          <div v-for="v in vocab" :key="v.term" class="deck-row">
            <div class="deck-row__key">{{ v.term }}</div>
            <div class="deck-row__val">{{ v.def }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 06 — Architecture -->
    <section class="slide alt">
      <span class="slide-num">06 / 09</span>
      <div class="slide-inner reveal">
        <p class="slide-kicker">How it fits together</p>
        <h2 class="slide-title wide">One gateway. Many surfaces. Owned models.</h2>
        <div class="arch">
          <div class="arch-tier">
            <span class="arch-tier__label">Surfaces</span>
            <div class="arch-tier__items">
              <span class="arch-chip">Desktop app</span>
              <span class="arch-chip">Web · my.lisaos.dev</span>
              <span class="arch-chip">Mobile companion</span>
            </div>
          </div>
          <div class="arch-flow">↓ same gateway, same features ↓</div>
          <div class="arch-tier">
            <span class="arch-tier__label">Services</span>
            <div class="arch-tier__items">
              <span class="arch-chip">accounts</span>
              <span class="arch-chip">developer</span>
              <span class="arch-chip">source</span>
              <span class="arch-chip">graph</span>
              <span class="arch-chip">Space Store</span>
              <span class="arch-chip">oracle</span>
              <span class="arch-chip">delivery</span>
              <span class="arch-chip">conductor</span>
            </div>
          </div>
          <div class="arch-flow">↓</div>
          <div class="arch-tier arch-tier--split">
            <div class="arch-half">
              <span class="arch-tier__label">Intelligence</span>
              <div class="arch-tier__items">
                <span class="arch-chip arch-chip--accent">Operator / Brain</span>
                <span class="arch-chip arch-chip--accent">Construct models</span>
              </div>
            </div>
            <div class="arch-half">
              <span class="arch-tier__label">Always-on</span>
              <div class="arch-tier__items">
                <span class="arch-chip arch-chip--accent">Execution Mesh</span>
                <span class="arch-chip arch-chip--accent">space-runtime</span>
              </div>
            </div>
          </div>
          <div class="arch-flow">↓ every Space reads &amp; writes ↓</div>
          <div class="arch-tier">
            <span class="arch-tier__label">Substrate</span>
            <div class="arch-tier__items">
              <span class="arch-chip">The Graph — your structured work, multi-tenant</span>
            </div>
          </div>
        </div>
        <p class="slide-lead" style="margin-top: 28px; font-size: 1rem">
          Principles we don't break: <strong>app / web parity</strong> (same features, same gateway),
          <strong>local-first</strong> (the desktop is the preferred Operator; cloud is fallback), and
          <strong>owned models</strong> (we run our own Construct models, not someone else's resold API).
        </p>
      </div>
    </section>

    <!-- 07 — The data flow: Shift Shift → done -->
    <section class="slide">
      <span class="slide-num">07 / 09</span>
      <div class="slide-inner reveal">
        <p class="slide-kicker">From Shift Shift to done</p>
        <h2 class="slide-title wide">What happens when you say hi.</h2>
        <p class="slide-lead">
          One request, end to end — and what keeps running after you walk away. This is the
          data path every Space shares.
        </p>
        <ol class="flow">
          <li class="flow-step">
            <span class="flow-step__n">01</span>
            <div>
              <h4>Shift Shift</h4>
              <p>You summon the Operator over the Space you're already in — no tab to switch to, nothing to paste.</p>
            </div>
          </li>
          <li class="flow-step">
            <span class="flow-step__n">02</span>
            <div>
              <h4>“Hi” — you ask</h4>
              <p>Your message arrives already scoped to that Space and what's on screen — the active record, board, or file.</p>
            </div>
          </li>
          <li class="flow-step">
            <span class="flow-step__n">03</span>
            <div>
              <h4>Context loads</h4>
              <p>The Operator pulls the Space's data from the Graph, your memory, and picks the model — our Construct models or a provider you set.</p>
            </div>
          </li>
          <li class="flow-step">
            <span class="flow-step__n">04</span>
            <div>
              <h4>Tools fire</h4>
              <p>It calls the Space's own actions as tools — list, find, create, draft, run — instead of just writing a paragraph back.</p>
            </div>
          </li>
          <li class="flow-step">
            <span class="flow-step__n">05</span>
            <div>
              <h4>Graph reads &amp; writes</h4>
              <p>Those actions touch your structured data in the Graph: per-Space, multi-tenant, access-controlled. This is where work actually changes.</p>
            </div>
          </li>
          <li class="flow-step">
            <span class="flow-step__n">06</span>
            <div>
              <h4>Done, in the app</h4>
              <p>The result is the work itself — a record created, a reply drafted, a ticket moved — inside the Space. Esc dismisses; the Operator never parks in a sidebar.</p>
            </div>
          </li>
          <li class="flow-step flow-step--mesh">
            <span class="flow-step__n">07</span>
            <div>
              <h4>You walk away — it keeps going</h4>
              <p>Scheduled work doesn't stop. Conductor hands the job to a cloud Operator that runs the same actions headless against the same Graph — even with your machine closed.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- 08 — The three pitches -->
    <section class="slide">
      <span class="slide-num">08 / 09</span>
      <div class="slide-inner reveal">
        <p class="slide-kicker">Pick the length, not the words</p>
        <h2 class="slide-title">The pitch, three sizes.</h2>
        <div class="pitch-stack">
          <div v-for="p in pitches" :key="p.len" class="pitch">
            <span class="pitch__len">{{ p.len }}</span>
            <p class="pitch__text">{{ p.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 09 — Audiences -->
    <section class="slide alt">
      <span class="slide-num">09 / 09</span>
      <div class="slide-inner reveal">
        <p class="slide-kicker">Same product, three doors</p>
        <h2 class="slide-title wide">Who we're talking to, and the deck for each.</h2>
        <div class="grid-3" style="margin-top: 8px">
          <NuxtLink to="/presentation/invest" class="card audience-card">
            <h3>Investors → /presentation/invest</h3>
            <p>Lead with the category and the moat: a horizontal AI OS, owned models, Space Store network effects, data gravity. The full stack already ships.</p>
          </NuxtLink>
          <NuxtLink to="/presentation/dev" class="card audience-card">
            <h3>Developers → /presentation/dev</h3>
            <p>Lead with leverage: write a Space, get an app with a built-in Operator, data layer, auth, billing, and distribution — for free.</p>
          </NuxtLink>
          <NuxtLink to="/spaces" class="card audience-card">
            <h3>Users → the Spaces tour</h3>
            <p>Lead with the job: there's a Space for what you do. Open it, the Operator works inside, your work lives in one place.</p>
          </NuxtLink>
        </div>
        <p class="slide-lead" style="margin-top: 36px; font-size: 1rem">
          Whoever the audience, the spine is the same: <strong>Spaces</strong> are the apps,
          the <strong>Operator</strong> runs them, the <strong>Graph + Mesh</strong> are the substrate.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Data-flow — numbered stages joined by an accent spine. */
.flow { list-style: none; margin: 36px 0 0; padding: 0; }
.flow-step {
  position: relative;
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 20px;
  padding-bottom: 24px;
}
.flow-step:last-child { padding-bottom: 0; }
/* The spine connecting each circle to the next. */
.flow-step:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 19px;
  top: 44px;
  bottom: 0;
  width: 2px;
  background: color-mix(in srgb, var(--app-accent) 22%, var(--app-border));
}
.flow-step__n {
  width: 40px; height: 40px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%;
  font-size: 13px; font-weight: 600;
  color: #fff; background: var(--app-accent-text, #e11d48);
  font-variant-numeric: tabular-nums;
  position: relative; z-index: 1;
}
.flow-step h4 { font-size: 16px; font-weight: 500; margin-bottom: 4px; }
.flow-step p { font-size: 14px; color: var(--app-muted); line-height: 1.6; }
/* The "you walk away" step reads as the off-machine handoff. */
.flow-step--mesh .flow-step__n { background: var(--app-foreground); }
.flow-step--mesh:not(:last-child)::after { background: color-mix(in srgb, var(--app-foreground) 18%, var(--app-border)); }

/* Pitch cards — increasing length, accent left edge grows subtler. */
.pitch-stack { display: flex; flex-direction: column; gap: 16px; margin-top: 32px; }
.pitch {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 24px;
  padding: 26px 28px;
  border-radius: 4px;
  background: var(--app-card-bg);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  align-items: start;
}
.pitch__len {
  font-size: 12px; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.16em; color: var(--app-accent-text, #e11d48); padding-top: 4px;
}
.pitch__text { font-size: 16px; line-height: 1.62; font-weight: 300; }

/* Architecture diagram. Stacked tiers of theme-aware chips. */
.arch { margin-top: 32px; display: flex; flex-direction: column; gap: 10px; }
.arch-tier {
  padding: 18px 22px;
  border-radius: 6px;
  background: var(--app-card-bg);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.arch-tier--split { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; background: transparent; box-shadow: none; padding: 0; }
.arch-half { padding: 18px 22px; border-radius: 6px; background: var(--app-card-bg); box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); }
.arch-tier__label {
  display: block; font-size: 10px; text-transform: uppercase;
  letter-spacing: 0.18em; color: var(--app-muted); margin-bottom: 12px;
}
.arch-tier__items { display: flex; flex-wrap: wrap; gap: 8px; }
.arch-chip {
  font-size: 13px; padding: 6px 12px; border-radius: 999px;
  background: var(--app-canvas-bg); border: 1px solid var(--app-border);
  color: var(--app-foreground);
}
.arch-chip--accent {
  background: color-mix(in srgb, var(--app-accent) 10%, transparent);
  border-color: color-mix(in srgb, var(--app-accent) 30%, var(--app-border));
  color: var(--app-accent-text, #e11d48); font-weight: 500;
}
.arch-flow { text-align: center; font-size: 12px; color: var(--app-muted); letter-spacing: 0.04em; }

.audience-card { text-decoration: none; color: inherit; display: block; transition: box-shadow 0.18s ease; }
.audience-card h3 { color: var(--app-accent-text, #e11d48); }

@media (max-width: 860px) {
  .pitch { grid-template-columns: 1fr; gap: 8px; }
  .arch-tier--split { grid-template-columns: 1fr; }
}
</style>
