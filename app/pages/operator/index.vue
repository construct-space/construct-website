<script setup lang="ts">
useSeoMeta({
  title: 'Operator — The AI inside every Space',
  description:
    'Operator is the AI that lives inside each Space — with the right interface, memory, models, tools, and permissions for the work in front of it. Not a chatbot bolted on. Part of the product.',
  ogTitle: 'Operator — The AI inside every Space',
  ogDescription:
    'Operator answers, acts, verifies, and follows through inside each Space — with project memory, multi-model routing, and explicit autonomy controls.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

const subnav = [
  { to: '/operator/agents', label: 'Agents' },
  { to: '/operator/automations', label: 'Automations' },
  { to: '/operator/context', label: 'Context' },
  { to: '/operator/control', label: 'Control' },
  { to: '/operator/morpheus', label: 'Morpheus' },
]

const shift = [
  { title: 'Yesterday', body: 'A chat tab beside the work, with thin context, weak memory, and no clear way to act.' },
  { title: 'Today, in Construct', body: 'The Operator is part of the Space — it reads the real state, switches models, and runs actions inside the same surface.' },
  { title: 'The result', body: 'Answers, actions, verification, and follow-through all happen in one place. The work moves.' },
]

const capabilities = [
  { title: 'Specialists, not one assistant', body: 'Architect, Coder, Project, Researcher — the right specialist takes the turn, with the same thread and the same goal in view.' },
  { title: 'Project memory that carries forward', body: 'Decisions, files, preferences, recent state. Every new turn starts where the work actually is, not from zero.' },
  { title: 'Multi-model, multimodal', body: 'Load the right model for the job. Move across text, screenshots, documents, images, and live state without flattening into chat.' },
  { title: 'Capabilities with boundaries', body: 'Browsing, tools, automation, approvals, execution — all loaded deliberately. Power without losing control.' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Construct Operator</p>
        <h1 class="page-title hero-title">
          The AI that works <span class="accent">with your project,</span><br>
          not beside it.
        </h1>
        <p class="page-subtitle hero-sub">
          Operator keeps answers, actions, specialists, and follow-through inside the same
          Space. It switches models for the task, reads the real state of the work, and
          loads the right capabilities — without turning the product into a chatbot.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/download" class="btn btn-primary">Download Free</NuxtLink>
          <NuxtLink to="/operator/agents" class="btn btn-secondary">See agents</NuxtLink>
        </div>
        <!-- No hero shot. Operator runs as a background process; the
             surfaces worth showing are inside its sub-pages (agents,
             context, automations, control). -->
      </div>
    </section>

    <!-- Summon mechanic. Operator runs as a background process on
         the OS; Shift Shift brings it forward, scoped to whatever
         Space you're in, with that Space's tools already in hand.
         The screenshot shows it summoned over the Boards Space. -->
    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">Summon</p>
        <h2 class="page-title">
          Hit
          <kbd class="kbd"><span class="kbd__icon" aria-hidden="true">⇧</span><span class="kbd__label">Shift</span></kbd>
          <kbd class="kbd"><span class="kbd__icon" aria-hidden="true">⇧</span><span class="kbd__label">Shift</span></kbd>.
          <span class="accent">Ask exactly what you need.</span>
        </h2>
        <p class="page-subtitle">
          Operator runs in the background. Tap Shift twice and it comes forward, already
          scoped to the Space you're in — with that Space's tools in hand. No tab to switch
          to, no context to paste, no "as an AI…" preamble. Type what you want, get it done.
        </p>

        <!-- This one would land harder as a short clip (Shift Shift →
             panel forward → tool calls tick → result). Rename file to
             .webm later if you produce motion; the component will
             auto-detect and render <video>. -->
        <ShotPlaceholder
          name="summon-operator.png"
          alt="Operator summoned over the Boards Space via Shift Shift"
          desc="A Construct Space (e.g. Boards / Bugs) in full view. Operator panel summoned in the upper-right, scoped to the Space — header reads 'Board', tool calls listed inline (board.listTickets, board.listColumns, board.updateTicket), each ticked. Above them, the suggested action button: 'Update backlog bug to low priority'. Result line below: 'Updated Bug: UI button state in Backlog to low priority'. Composer at the bottom with 'Ask anything…' placeholder."
          caption="Summoned over the Boards Space — running the Space's tools, returning a precise result."
          hero
        />

        <div class="summon-flow">
          <div class="summon-step">
            <span class="summon-step__num">1</span>
            <strong>Shift Shift</strong>
            <span>Operator comes forward, already inside the Space you're in.</span>
          </div>
          <div class="summon-step">
            <span class="summon-step__num">2</span>
            <strong>Ask</strong>
            <span>"Move the UI button bug to low priority." No prefix, no setup.</span>
          </div>
          <div class="summon-step">
            <span class="summon-step__num">3</span>
            <strong>Act</strong>
            <span>Operator runs the Space's tools — list, find, update — and returns a precise result.</span>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="page-container">
        <p class="page-label">The Shift</p>
        <h2 class="page-title">One Operator. <span class="accent">Every mode of work.</span></h2>
        <p class="page-subtitle">Construct does not treat AI as a side panel. Operator is part of the product layer, so planning, execution, and follow-through happen in the same system.</p>
        <div class="grid-3">
          <article v-for="item in shift" :key="item.title" class="card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Vocabulary. The model already has the capability — what we
         ship is the recognition that brings it into contact with the
         work. We name that unit explicitly so it does not get
         confused with "skills" (which implies teaching). The industry
         calls them skills; we still answer to that name, but every
         time we do, we mean Grasp. -->
    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">Vocabulary</p>
        <h2 class="page-title">
          Not skills. <span class="accent">Grasps.</span>
        </h2>
        <p class="page-subtitle">
          A skill is something you teach to someone who cannot yet do it. The model already
          can. What it needs is a moment of contact — the recognition that <em>this</em>
          is what the situation calls for. We call that a Grasp.
        </p>

        <div class="grid-2 grasps-contrast">
          <article class="card">
            <div class="grasps-contrast__head">
              <span class="grasps-contrast__pill grasps-contrast__pill--mute">Skill</span>
              <span class="grasps-contrast__sub">what the industry says</span>
            </div>
            <p>Adds a capability the model does not have. Implies a curriculum, a teacher, and a learner. The wrong shape for a system that already understands more than it applies.</p>
          </article>
          <article class="card card-accent">
            <div class="grasps-contrast__head">
              <span class="grasps-contrast__pill">Grasp</span>
              <span class="grasps-contrast__sub">what is actually happening</span>
            </div>
            <p>Brings a latent capability into contact with the work in front of it. The Operator already knows the move; the Grasp tells it which move, now, on this.</p>
          </article>
        </div>

        <div class="grasps-examples">
          <p class="grasps-examples__lead">A Grasp can be:</p>
          <ul>
            <li><strong>Reply in our voice</strong> — a Support Space loads it and Operator drafts in the team's register, not generic AI.</li>
            <li><strong>Read the contract</strong> — a Legal Space loads it and Operator sees clauses, not paragraphs.</li>
            <li><strong>Plan a release</strong> — a Code Space loads it and Operator returns a plan with risks and approvals, not a wall of text.</li>
            <li><strong>Triage a route</strong> — a Transport Space loads it and Operator knows what counts as drift, what counts as failure, and who to page.</li>
          </ul>
        </div>

        <!-- Industry-name caveat. Spelled out so we can use the
             industry term in Space Store listings, blog posts, and
             docs without contradicting ourselves. -->
        <aside class="grasps-aside">
          <strong>One note on naming.</strong>
          The rest of the industry will keep calling these "skills" — partly because that is what the early agent SDKs shipped with, partly because it is the easier word. We will still answer to it, in Space Store listings and casual conversation. But every time we say <em>skill</em>, we mean <strong>Grasp</strong>. Same thing. Better word.
        </aside>
      </div>
    </section>

    <section class="page-section">
      <div class="page-container">
        <p class="page-label">Capabilities</p>
        <h2 class="page-title">One Operator. <span class="accent">Several powerful surfaces.</span></h2>
        <p class="page-subtitle">Operator is broken into explicit capability areas so teams can understand what it can do, how it behaves, and where each layer fits in the product.</p>
        <div class="grid-2">
          <article v-for="item in capabilities" :key="item.title" class="card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </article>
        </div>

        <nav class="op-subnav" aria-label="Operator sections">
          <NuxtLink v-for="link in subnav" :key="link.to" :to="link.to">{{ link.label }} →</NuxtLink>
        </nav>
      </div>
    </section>

    <!-- Morpheus teaser. The full story moved to /operator/morpheus
         once it earned its own page. This stays on the landing as a
         pointer so the autonomous-mode narrative is not buried. -->
    <section class="page-section alt">
      <div class="page-container morpheus-teaser">
        <div>
          <p class="page-label">Morpheus — autonomous mode</p>
          <h2 class="page-title">When you stop typing, <span class="accent">Operator keeps working.</span></h2>
          <p class="page-subtitle">
            Morpheus watches live sessions, scores dynamic specialists, spawns new ones for
            failing tools, verifies output before reporting success, and rewrites weak prompts.
            Bounded by the policies you set per Space.
          </p>
          <div class="hero-actions">
            <NuxtLink to="/operator/morpheus" class="btn btn-primary">Meet Morpheus</NuxtLink>
            <NuxtLink to="/operator/control" class="btn btn-secondary">Set autonomy</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Keyboard shortcut chip — styled as a real keycap. The ⇧ glyph is
   the macOS shift modifier symbol (U+21E7); paired with the "Shift"
   label so it reads correctly across every OS without needing custom
   icons. Inline in the summon headline. */
.kbd {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  margin: 0 4px;
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  font-size: 0.55em;
  font-weight: 600;
  letter-spacing: 0.04em;
  vertical-align: middle;
  color: var(--app-foreground);
  background: var(--app-card-bg);
  border: 1px solid var(--app-border);
  border-bottom-width: 2px;
  border-radius: 8px;
  box-shadow: 0 1px 0 rgba(0,0,0,0.04);
  text-transform: none;
  line-height: 1;
}
.kbd__icon {
  font-size: 1.15em;
  font-weight: 400;
  color: var(--app-accent-text, #e11d48);
  display: inline-block;
  transform: translateY(-0.5px);
}
.kbd__label {
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* Three-step summon flow shown beneath the screenshot. */
.summon-flow {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 32px;
}
.summon-step {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 18px 20px;
  border-radius: 12px;
  background: var(--app-card-bg);
  border: 1px solid var(--app-border);
  position: relative;
}
.summon-step__num {
  position: absolute;
  top: 14px; right: 16px;
  font-size: 11px; font-weight: 700;
  color: var(--app-accent-text, #e11d48);
  opacity: 0.5;
}
.summon-step strong {
  font-size: 14px;
  color: var(--app-accent-text, #e11d48);
  font-weight: 600;
}
.summon-step span {
  font-size: 13px;
  color: var(--app-muted);
  line-height: 1.5;
}
@media (max-width: 768px) {
  .summon-flow { grid-template-columns: 1fr; }
}

/* Grasps vocabulary block. Two contrasting cards (Skill / Grasp),
   an example list, and a naming caveat. */
.grasps-contrast { margin-top: 32px; }
.grasps-contrast__head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.grasps-contrast__pill {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--app-accent-text, #e11d48);
  background: color-mix(in srgb, var(--app-accent) 12%, transparent);
}
.grasps-contrast__pill--mute {
  color: var(--app-muted);
  background: var(--app-canvas-bg);
}
.grasps-contrast__sub {
  font-size: 12px;
  color: var(--app-muted);
}

.grasps-examples {
  margin-top: 32px;
  padding: 20px 24px;
  border-radius: 12px;
  background: var(--app-card-bg);
  border: 1px solid var(--app-border);
}
.grasps-examples__lead {
  font-size: 13px;
  font-weight: 600;
  color: var(--app-accent-text, #e11d48);
  margin: 0 0 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.grasps-examples ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.grasps-examples li {
  font-size: 13px;
  color: var(--app-muted);
  line-height: 1.6;
}
.grasps-examples li strong {
  color: var(--app-foreground);
  font-weight: 600;
}

.grasps-aside {
  margin-top: 24px;
  padding: 16px 20px;
  border-left: 3px solid var(--app-accent);
  background: color-mix(in srgb, var(--app-accent) 4%, transparent);
  font-size: 13px;
  color: var(--app-muted);
  line-height: 1.7;
  border-radius: 0 8px 8px 0;
}
.grasps-aside strong { color: var(--app-foreground); }

.op-subnav {
  display: flex; flex-wrap: wrap; gap: 14px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--app-border);
}
.op-subnav a {
  font-size: 13px; font-weight: 600;
  color: var(--app-accent-text, #e11d48);
  text-decoration: none;
}
.op-subnav a:hover { text-decoration: underline; }
</style>
