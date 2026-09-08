<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

useScrollReveal()

useSeoMeta({
  title: "Construct — There's a Space for that",
  description:
    "Construct is the operating system for the age of AI. Install modular Spaces for code, design, ops, and agents. There's a Space for that.",
  ogTitle: "Construct — There's a Space for that",
  ogDescription:
    "Construct is the operating system for the age of AI. Install modular Spaces for code, design, ops, and agents. There's a Space for that.",
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebPage({
    name: "Construct — There's a Space for that",
    description:
      "The operating system for the age of AI. Every workflow gets its own Space, with its own interface, memory, tools, and Operator.",
  }),
  defineSoftwareApp({
    name: 'Construct',
    operatingSystem: 'macOS, Windows, Linux',
    applicationCategory: 'DeveloperApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }),
])

const contrast = [
  { left: 'One chat box', right: 'Many specialized Spaces' },
  { left: 'Same UI for every task', right: 'Purpose-built interface per workflow' },
  { left: 'Prompting as the product', right: 'Apps as the product' },
  { left: 'Tools bolted onto chat', right: 'Tools built into the Space' },
  { left: 'Memory is vague', right: 'Context belongs to the workflow' },
  { left: 'Chat parked in the sidebar', right: 'Operator summoned with Shift Shift' },
  { left: 'Agents feel hidden', right: 'Operator acts inside the app' },
]

const possibleSpaces = [
  { name: 'CRM', desc: 'Customer pipeline & deals', color: '#007AFF' },
  { name: 'Patient Records', desc: 'HIPAA-compliant workflows', color: '#FF2D55' },
  { name: 'Contract Review', desc: 'AI-powered legal analysis', color: '#BF5AF2' },
  { name: 'Floor Plans', desc: 'Architectural design tools', color: '#30D158' },
  { name: 'Trading Dashboard', desc: 'Real-time market data', color: '#FFD60A' },
  { name: 'Lesson Builder', desc: 'Interactive course authoring', color: '#FF9500' },
  { name: 'Inventory', desc: 'Stock & supply chain', color: '#5856D6' },
  { name: 'Fleet Tracker', desc: 'Route & vehicle management', color: '#64D2FF' },
  { name: 'Payroll', desc: 'Team compensation & taxes', color: '#34C759' },
  { name: 'Landing Pages', desc: 'Drag-and-drop page builder', color: '#FF3B30' },
]

const stats = [
  { num: '∞', label: 'Spaces on the Space Store' },
  { num: 'Many', label: 'Models, swappable' },
  { num: '100+', label: 'Tools & actions' },
  { num: 'Open', label: 'SDK + Space Store' },
]
</script>

<template>
  <div>
    <!-- Hero. The iconic line does the implicit equation; the
         subtitle gives the category frame. The body of the page
         demonstrates the equation through app-vocabulary instead
         of restating it. -->
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Construct — The operating system for the age of AI</p>
        <h1 class="page-title hero-title">
          There's a <span class="accent punch">Space</span> for that.
        </h1>
        <p class="page-subtitle hero-sub">
          Install one for sales. Install one for support. One for routes, one for revenue,
          one for the messy thing your team does that no SaaS ever got right. Open it,
          and the Operator gets to work inside.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/download" class="btn btn-primary">Download Free</NuxtLink>
          <NuxtLink to="/spaces" class="btn btn-secondary">Browse Spaces</NuxtLink>
        </div>

        <ShotPlaceholder
          name="home-hero.png"
          alt="Construct desktop with multiple Spaces installed in the sidebar"
          desc="Construct desktop window, full size. Sidebar showing 6+ Space icons (Notes, Tasks, Support, Transport, Revenue, etc.). One Space open in the main area showing real UI — not a chat panel. Captured on the dark theme so the accent color pops."
          caption="Your home screen for work in the age of AI."
          hero
        />
      </div>
    </section>

    <!-- The shift. From a single chatbox to a system of installable
         workflows. The verbs (install, open, switch) carry the implicit
         equation. -->
    <section class="page-section alt">
      <div class="page-container reveal">
        <p class="page-label">The Shift</p>
        <h2 class="page-title">
          Chat was the first interface for AI.<br>
          <span class="accent">This is the next one.</span>
        </h2>
        <p class="page-subtitle">
          Real work is not one conversation. Support, sales, operations, coding, finance,
          notes, and logistics each need different interfaces, tools, memory, permissions,
          and automations. So you install one for each, and switch between them like you
          switch between anything else on your computer.
        </p>
        <div class="problem-grid">
          <div class="card reveal" style="transition-delay: 0.1s">
            <h3>Yesterday</h3>
            <p>One chatbox for everything. Same UI for every job. Tools bolted on. Memory vague. Agents hidden somewhere behind a slash command.</p>
          </div>
          <div class="card card-accent reveal" style="transition-delay: 0.2s">
            <h3>Today, in Construct</h3>
            <p>Open the Space for the job. Its interface fits the job. Its Operator already knows the job. Done with sales, switch to support — same icons, same dock, different room.</p>
          </div>
          <div class="card reveal" style="transition-delay: 0.3s">
            <h3>Underneath</h3>
            <p>One operating layer carries identity, memory, models, tools, permissions, and the Operator across every Space you open.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Generic AI vs Construct. The contrast table. -->
    <section class="page-section">
      <div class="page-container">
        <p class="page-label">Why Spaces</p>
        <h2 class="page-title">
          Not one assistant.
          <span class="accent">An OS full of AI-native apps.</span>
        </h2>
        <p class="page-subtitle">
          The contrast that defines Construct.
        </p>
        <div class="contrast-table">
          <div class="contrast-head">
            <span>Generic AI products</span>
            <span>Construct</span>
          </div>
          <div v-for="row in contrast" :key="row.right" class="contrast-row">
            <span class="contrast-left">{{ row.left }}</span>
            <span class="contrast-right">{{ row.right }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- The product mockup, kept from previous version because it
         shows a Space with file tree, editor, and Operator inline —
         exactly the "AI inside the app" story. -->
    <section class="page-section alt">
      <div class="page-container">
        <div class="reveal">
          <p class="page-label">Inside a Space</p>
          <h2 class="page-title">
            One system.
            <span class="accent">Many purpose-built apps.</span>
          </h2>
          <p class="page-subtitle">
            Each Space has its own interface, its own memory, its own tools, and its own
            Operator. The system underneath is shared — identity, models, permissions,
            files, automations.
          </p>
          <div class="stat-row">
            <div v-for="s in stats" :key="s.label" class="stat">
              <div class="stat-num">{{ s.num }}</div>
              <div class="stat-label">{{ s.label }}</div>
            </div>
          </div>
        </div>

        <!-- data-nosnippet: this is a decorative UI mockup. Without it
             Google scrapes the fake code ("import { useGraph } …") as the
             search snippet instead of the page's meta description. The
             attribute excludes the whole block from snippet candidacy. -->
        <!-- aria-hidden: decorative fake-IDE illustration — conveys no
             info, so it's correctly skipped by screen readers. (Its text
             still needs AA contrast for sighted users — handled in CSS.) -->
        <div class="mockup" data-nosnippet aria-hidden="true">
          <div class="mockup-titlebar">
            <div class="mockup-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
            <span class="mockup-title">Construct — Coding Space</span>
          </div>
          <div class="mockup-body">
            <div class="mockup-sidebar">
              <div class="ms-logo" :style="{ color: 'var(--app-accent)' }">C</div>
              <div class="ms-icons">
                <div class="ms-icon active"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
                <div class="ms-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg></div>
                <div class="ms-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 5v11"/><path d="M12 5v6"/><path d="M18 5v14"/></svg></div>
                <div class="ms-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div>
                <div class="ms-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg></div>
              </div>
            </div>
            <div class="mockup-filetree">
              <div class="ft-header">SPACE</div>
              <div class="ft-folder open"><span class="ft-arrow">▾</span> src</div>
              <div class="ft-file active"><span class="ft-indent"></span>App.vue</div>
              <div class="ft-file"><span class="ft-indent"></span>main.ts</div>
              <div class="ft-folder open"><span class="ft-arrow">▾</span> pages</div>
              <div class="ft-file"><span class="ft-indent2"></span>Home.vue</div>
              <div class="ft-file"><span class="ft-indent2"></span>About.vue</div>
            </div>
            <div class="mockup-editor">
              <div class="editor-tabs">
                <div class="editor-tab active">App.vue</div>
                <div class="editor-tab">space.config.ts</div>
              </div>
              <div class="editor-content">
                <div class="editor-line"><span class="ln">1</span><span class="kw">&lt;script</span> <span class="attr">setup</span><span class="kw">&gt;</span></div>
                <div class="editor-line"><span class="ln">2</span><span class="kw">import</span> { <span class="fn">useGraph</span> } <span class="kw">from</span> <span class="str">'@construct-space/graph'</span></div>
                <div class="editor-line"><span class="ln">3</span><span class="kw">import</span> { <span class="fn">useOperator</span> } <span class="kw">from</span> <span class="str">'@construct-space/sdk'</span></div>
                <div class="editor-line"><span class="ln">4</span></div>
                <div class="editor-line"><span class="ln">5</span><span class="kw">const</span> <span class="fn">graph</span> = <span class="fn">useGraph</span>()</div>
                <div class="editor-line"><span class="ln">6</span><span class="kw">const</span> <span class="fn">operator</span> = <span class="fn">useOperator</span>()</div>
                <div class="editor-line"><span class="ln">7</span><span class="kw">&lt;/script&gt;</span></div>
              </div>
              <div class="editor-ai">
                <div class="ai-header">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 01-1.275 1.275L3 12l5.813 1.912a2 2 0 011.275 1.275L12 21l1.912-5.813a2 2 0 011.275-1.275L21 12l-5.813-1.912a2 2 0 01-1.275-1.275L12 3z"/></svg>
                  Operator
                </div>
                <div class="ai-msg user">Wire the dashboard to live data</div>
                <div class="ai-msg bot">Reading your Graph schema, opening <span class="ai-code">DashboardView.vue</span>, and queueing the change.</div>
                <div class="ai-input">Ask anything…</div>
              </div>
            </div>
          </div>
          <div class="mockup-statusbar">
            <span>Coding Space</span><span>main</span><span>Operator online</span><span style="margin-left:auto">Sonnet 4.6</span><span>Memory · 12 files</span>
          </div>
        </div>
      </div>
    </section>

    <!-- The Space Store pitch. -->
    <section class="page-section">
      <div class="page-container">
        <p class="page-label">Space Store</p>
        <h2 class="page-title">
          An app store for
          <span class="accent">AI-native work.</span>
        </h2>
        <p class="page-subtitle">
          Install Spaces from the Space Store, build your own with the SDK, and let the
          Operator help inside each one with the right context and capabilities.
        </p>
        <ShotPlaceholder
          name="spaces-launcher.png"
          alt="Construct Spaces Space Store and launcher grid"
          desc="The Spaces Space Store inside Construct. Category sidebar on the left (Productivity, Business, Finance, etc.), a grid of Space cards with icon, name, version, short description, and an Install button. Mix of installed and not-yet-installed Spaces."
        />
        <div class="saas-grid">
          <div v-for="space in possibleSpaces" :key="space.name" class="saas-card">
            <div class="saas-dot" :style="{ background: space.color }"></div>
            <div class="saas-info">
              <div class="saas-name">{{ space.name }}</div>
              <div class="saas-desc">{{ space.desc }}</div>
            </div>
          </div>
        </div>
        <p class="industry-note">Each Space inherits identity, models, memory, tools, and the Operator. Build once, runs everywhere.</p>
      </div>
    </section>

    <!-- Build your own. -->
    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">SDK</p>
        <h2 class="page-title">
          Build a Space
          <span class="accent">in an afternoon.</span>
        </h2>
        <p class="page-subtitle">
          Spaces are Vue 3 plugins. The SDK gives you Graph, Operator, identity, files, and
          actions. The CLI scaffolds, builds, and publishes. A hospital builds patient
          records. A law firm builds contract review. Same platform.
        </p>
        <div class="cli-card" data-nosnippet>
          <div class="cli-line">$ construct scaffold my-space</div>
          <div class="cli-line">$ construct dev</div>
          <div class="cli-line">$ construct build</div>
          <div class="cli-line" style="opacity: 1">$ construct publish</div>
        </div>
        <div class="hero-actions" style="margin-top: 24px">
          <NuxtLink to="/sdk" class="btn btn-secondary">SDK Docs</NuxtLink>
          <a href="https://my.lisaos.dev" target="_blank" rel="noreferrer" class="btn btn-secondary">Developer Portal</a>
        </div>
      </div>
    </section>

    <!-- Eating our own dogfood. The clearest proof the model works
         at depth: we use a Space to build every other Space. Same SDK
         as yours, same Operator, same OS. The recursion is the pitch. -->
    <section class="page-section">
      <div class="page-container">
        <p class="page-label">Eating our own dogfood</p>
        <h2 class="page-title">
          We built a Space <span class="accent">to build Spaces.</span>
        </h2>
        <p class="page-subtitle">
          SpaceKit is the Space we use to scaffold, edit, preview, and publish every other
          Space — including itself. Same SDK as yours. Same Operator. Same OS. If it is
          good enough to ship the platform, it is good enough to ship your workflow.
        </p>

        <ol class="dev-flow">
          <li>
            <span class="dev-flow__num">01</span>
            <strong>Scaffold from a manifest.</strong>
            <span>Pick a name, an icon, and the capabilities the Space needs. Operator drops the boilerplate.</span>
          </li>
          <li>
            <span class="dev-flow__num">02</span>
            <strong>Edit in-Space, with help.</strong>
            <span>The coding view opens beside the manifest. Operator pairs alongside, scoped to the Space being built.</span>
          </li>
          <li>
            <span class="dev-flow__num">03</span>
            <strong>Preview live, in another Space.</strong>
            <span>Hot-reload the new Space in a sibling window. Real OS, real identity, real Operator — not a sandbox lie.</span>
          </li>
          <li>
            <span class="dev-flow__num">04</span>
            <strong>Publish where it belongs.</strong>
            <span>Public Space Store, private to your org, or scoped to one project. One command, three audiences.</span>
          </li>
        </ol>

        <ShotPlaceholder
          name="space-developer.png"
          alt="SpaceKit — the Space we use to build other Spaces"
          desc="The SpaceKit Space inside Construct. Left rail: Manifest, Code, Preview, Publish. Center pane shows a live edit on a sample Space (e.g. Notes), right pane shows the preview rendering in a sibling window. Operator panel summoned, scoped to the Space-in-progress, suggesting a missing capability declaration. Reads as: same OS, same Operator, recursive."
          caption="Same SDK as yours. Same Operator. Same OS."
        />

        <p class="dev-foot">
          SpaceKit is open to anyone with a free Construct install. The
          <NuxtLink to="/sdk" class="accent">SDK</NuxtLink> documents what is under it; the
          <a href="https://my.lisaos.dev" target="_blank" rel="noreferrer" class="accent">developer portal</a>
          is where Spaces are listed once published.
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="page-section alt" style="text-align: center">
      <div class="page-container">
        <h2 class="page-title">
          The future is not one assistant.<br>
          <span class="accent">It is an operating system full of AI-native apps.</span>
        </h2>
        <p class="page-subtitle" style="margin-left: auto; margin-right: auto">
          Free to use. Open SDK. Built for every team that does real work.
        </p>
        <div class="hero-actions" style="justify-content: center">
          <NuxtLink to="/download" class="btn btn-primary">Download Free</NuxtLink>
          <NuxtLink to="/operator" class="btn btn-secondary">Meet the Operator</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section { padding-top: 120px; padding-bottom: 60px; }
/* Hero shares .page-title sizing globally now — no local override. */
.hero-sub { font-size: 17px; max-width: 600px; }

.hero-actions { display: flex; gap: 12px; margin-top: 24px; }

.btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 12px 28px; border-radius: 10px; font-size: 14px; font-weight: 600;
  text-decoration: none; transition: all 0.15s; font-family: inherit; cursor: pointer;
}
.btn-primary { background: var(--app-accent-text, #e11d48); color: #fff; border: none; }
.btn-primary:hover { opacity: 0.9; }
.btn-secondary { background: var(--app-card-bg); border: 1px solid var(--app-border); color: var(--app-foreground); }
.btn-secondary:hover { border-color: var(--app-muted); }

.problem-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 32px; }
.card-accent { border-left: 3px solid var(--app-accent); }
.card h3 { font-size: 15px; margin-bottom: 8px; }
.card p { font-size: 13px; color: var(--app-muted); line-height: 1.6; }

.stat-row { display: flex; gap: 48px; margin: 32px 0; }
.stat-num { font-size: clamp(1.5rem, 3vw, 2.5rem); font-weight: 900; color: var(--app-accent-text, #e11d48); }
.stat-label { font-size: 13px; color: var(--app-muted); margin-top: 4px; max-width: 180px; }

/* Contrast list — "Generic AI vs Construct." No borders, no card
   frame. Each row is a soft tile with a tiny shadow; columns
   separate by gap and color, not by lines. Matches the in-app
   dashboard look. */
.contrast-table {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.contrast-head, .contrast-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.contrast-head {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--app-muted);
  margin-bottom: 4px;
}
.contrast-head span { padding: 4px 22px; }
.contrast-head span + span { color: var(--app-accent-text, #e11d48); }
.contrast-row { font-size: 15px; }
.contrast-left, .contrast-right {
  padding: 18px 22px;
  border-radius: 2px;
  background: var(--app-card-bg);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  min-height: 56px;
}
.contrast-left {
  color: var(--app-muted);
  font-weight: 300;
  text-decoration: line-through;
  text-decoration-color: color-mix(in srgb, var(--app-muted) 40%, transparent);
}
.contrast-right {
  color: var(--app-foreground);
  font-weight: 500;
  background: color-mix(in srgb, var(--app-accent) 5%, var(--app-card-bg));
}

/* Screenshot slots. No frame, no canvas — the screenshot ships with
   its own browser/window chrome and we add a soft dropshadow so it
   floats off the page. Caption sits below, not boxed in. */
.hero-shot-slot, .inline-shot-slot {
  margin-top: 40px;
  text-align: center;
}
.hero-shot-slot img, .inline-shot-slot img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
  filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.18))
          drop-shadow(0 8px 18px rgba(0, 0, 0, 0.10));
}
.hero-shot-slot figcaption {
  margin-top: 16px;
  font-size: 12px;
  color: var(--app-muted);
}
.inline-shot-slot { margin-bottom: 24px; }

.saas-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 24px; }
.saas-card { display: flex; align-items: center; gap: 12px; padding: 14px 18px; border-radius: 10px; border: 1px solid var(--app-border); background: var(--app-card-bg); transition: border-color 0.15s; }
.saas-card:hover { border-color: var(--app-muted); }
.saas-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.saas-name { font-size: 14px; font-weight: 600; }
.saas-desc { font-size: 11px; color: var(--app-muted); }

.industry-note { font-size: 13px; color: var(--app-muted); margin-top: 20px; }

.cli-card { display: flex; flex-direction: column; gap: 6px; margin-top: 24px; }
/* Dim history with a muted (still AA) colour instead of opacity, which
   would drop the text below contrast. The current command stays accent. */
.cli-line { font-family: 'JetBrains Mono', 'SF Mono', monospace; font-size: 14px; color: var(--app-muted); }
.cli-line:last-child { color: var(--app-accent-text, #e11d48); }

/* Space Developer flow — four numbered steps showing the meta-loop
   (we build Spaces with a Space). No bordered cards; soft tinted
   blocks with the step number floated as a quiet accent. */
.dev-flow {
  list-style: none;
  margin: 32px 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
}
.dev-flow li {
  position: relative;
  padding: 24px 26px 24px 70px;
  background: var(--app-card-bg);
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.dev-flow__num {
  position: absolute;
  top: 24px;
  left: 26px;
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  color: var(--app-accent-text, #e11d48);
  letter-spacing: 0.04em;
}
.dev-flow li strong {
  font-size: 15px;
  font-weight: 500;
  color: var(--app-foreground);
}
.dev-flow li span {
  font-size: 13px;
  font-weight: 300;
  color: var(--app-muted);
  line-height: 1.6;
}
.dev-foot {
  margin-top: 24px;
  font-size: 13px;
  font-weight: 300;
  color: var(--app-muted);
  line-height: 1.7;
}
.dev-foot .accent { font-weight: 400; text-decoration: none; }
.dev-foot .accent:hover { text-decoration: underline; }
@media (max-width: 768px) {
  .dev-flow { grid-template-columns: 1fr; }
}

/* Mockup */
.mockup { border-radius: 12px; border: 1px solid var(--app-border); overflow: hidden; box-shadow: 0 25px 60px rgba(0,0,0,0.3); margin-top: 16px; }
.mockup-titlebar { display: flex; align-items: center; gap: 10px; padding: 10px 16px; background: color-mix(in srgb, var(--app-background) 50%, black 10%); border-bottom: 1px solid var(--app-border); }
.mockup-dots { display: flex; gap: 6px; }
.dot { width: 10px; height: 10px; border-radius: 50%; }
.dot.red { background: #ff5f57; } .dot.yellow { background: #febc2e; } .dot.green { background: #28c840; }
.mockup-title { font-size: 11px; color: var(--app-foreground); margin-left: auto; margin-right: auto; }
.mockup-body { display: flex; height: 320px; background: var(--app-background); }
.mockup-sidebar { width: 44px; border-right: 1px solid var(--app-border); background: var(--app-canvas-bg); display: flex; flex-direction: column; align-items: center; padding: 10px 0; gap: 2px; }
.ms-logo { font-size: 16px; font-weight: 700; margin-bottom: 12px; }
.ms-icons { display: flex; flex-direction: column; align-items: center; gap: 2px; }
.ms-icon { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 6px; color: var(--app-muted); }
.ms-icon.active { color: var(--app-accent-text, #e11d48); background: color-mix(in srgb, var(--app-accent) 12%, transparent); }
.mockup-filetree { width: 160px; border-right: 1px solid var(--app-border); background: var(--app-canvas-bg); padding: 6px 0; font-size: 11px; overflow: hidden; }
.ft-header { padding: 4px 12px; font-size: 10px; font-weight: 600; letter-spacing: 0.05em; color: var(--app-muted); margin-bottom: 4px; }
.ft-folder, .ft-file { padding: 3px 12px; color: var(--app-muted); white-space: nowrap; }
.ft-file.active { background: color-mix(in srgb, var(--app-accent) 10%, transparent); color: var(--app-foreground); }
.ft-arrow { font-size: 9px; margin-right: 4px; }
.ft-indent { display: inline-block; width: 16px; }
.ft-indent2 { display: inline-block; width: 32px; }
.mockup-editor { flex: 1; display: flex; flex-direction: column; min-width: 0; }
.editor-tabs { display: flex; border-bottom: 1px solid var(--app-border); background: var(--app-canvas-bg); }
.editor-tab { padding: 6px 16px; font-size: 11px; color: var(--app-muted); border-right: 1px solid var(--app-border); }
.editor-tab.active { background: var(--app-background); color: var(--app-foreground); border-bottom: 2px solid var(--app-accent); }
.editor-content { flex: 1; padding: 8px 0; font-family: 'JetBrains Mono', 'SF Mono', monospace; font-size: 12px; line-height: 1.7; overflow: hidden; }
.editor-line { padding: 0 16px; white-space: nowrap; }
.ln { display: inline-block; width: 28px; text-align: right; margin-right: 16px; color: #5b6472; font-size: 11px; }
/* Light-theme IDE syntax colours — dark enough to pass WCAG AA on the
   white editor (the old Material palette was built for a dark editor). */
.kw { color: var(--app-accent-text, #e11d48); } .str { color: #2e7d32; } .fn { color: #1565c0; } .attr { color: #8a6d00; } .tag { color: var(--app-accent-text, #e11d48); } .num { color: #c2410c; } .accent-text { color: var(--app-accent-text, #e11d48); }
.editor-ai { border-top: 1px solid var(--app-border); background: var(--app-canvas-bg); padding: 8px 12px; }
.ai-header { display: flex; align-items: center; gap: 6px; font-size: 10px; font-weight: 600; color: var(--app-accent-text, #e11d48); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.04em; }
.ai-msg { font-size: 11px; padding: 6px 10px; border-radius: 8px; margin-bottom: 4px; max-width: 90%; }
.ai-msg.user { background: color-mix(in srgb, var(--app-accent) 15%, transparent); color: var(--app-foreground); margin-left: auto; }
.ai-msg.bot { background: var(--app-card-bg); color: var(--app-muted); line-height: 1.5; }
.ai-code { font-family: monospace; background: color-mix(in srgb, var(--app-accent) 10%, transparent); padding: 1px 4px; border-radius: 3px; color: var(--app-accent-text, #e11d48); font-size: 10px; }
.ai-input { margin-top: 6px; padding: 6px 10px; border-radius: 6px; background: var(--app-background); border: 1px solid var(--app-border); font-size: 11px; color: var(--app-muted); }
.mockup-statusbar { display: flex; gap: 16px; padding: 4px 12px; font-size: 10px; color: var(--app-foreground); background: color-mix(in srgb, var(--app-accent) 8%, var(--app-canvas-bg)); border-top: 1px solid var(--app-border); }

@media (max-width: 768px) {
  .problem-grid { grid-template-columns: 1fr; }
  .saas-grid { grid-template-columns: 1fr; }
  .hero-actions { flex-direction: column; }
  .stat-row { gap: 24px; flex-wrap: wrap; }
  .mockup-filetree { display: none; }
  .mockup-body { height: 240px; }
  .editor-ai { display: none; }
  .contrast-head, .contrast-row { grid-template-columns: 1fr; }
}
</style>
