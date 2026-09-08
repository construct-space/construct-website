<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

useScrollReveal()

useSeoMeta({
  title: 'Build — SDK & CLI for Spaces',
  description: 'Build a Space in an afternoon. Vue 3 plugins, six platform APIs, an Operator already wired in, and a CLI that scaffolds, builds, and publishes.',
  ogTitle: 'Build a Space',
  ogDescription: 'Idea to published in minutes. The OS handles identity, models, memory, files, and the Operator — you build the experience.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebPage({
    name: 'Build with the Construct SDK',
    description: 'SDK and CLI documentation for building custom Spaces inside Construct.',
  }),
])

const apis = [
  { name: 'AI', desc: 'Chat, agents, model routing, tool calls.' },
  { name: 'Storage', desc: 'Key-value and file storage per space.' },
  { name: 'UI Kit', desc: 'Buttons, inputs, dialogs, toasts, themes.' },
  { name: 'Shell', desc: 'Run commands in a sandboxed environment.' },
  { name: 'Cross-Space', desc: 'Share data between installed spaces.' },
  { name: 'Permissions', desc: 'Request granular access to platform features.' },
]
</script>

<template>
  <div>
    <!-- Hero: two-col with code mockup -->
    <section class="page-section" style="padding-top: 100px;">
      <div class="page-container two-col">
        <div class="reveal from-left">
          <p class="page-label">Build</p>
          <h1 class="page-title">Build a <span class="accent">Space.</span></h1>
          <p class="page-subtitle">Spaces are Vue 3 plugins. The OS gives you identity, models, memory, files, permissions, and the Operator. You build the surface that fits the work.</p>
          <div class="hero-actions">
            <a href="https://my.lisaos.dev" target="_blank" rel="noreferrer" class="btn btn-primary">Developer Portal</a>
            <NuxtLink to="/download" class="btn btn-secondary">Download Construct</NuxtLink>
          </div>
        </div>
        <div class="reveal from-right">
          <!-- Config mockup -->
          <div class="code-mockup">
            <div class="cm-bar"><span class="cm-dot r"></span><span class="cm-dot y"></span><span class="cm-dot g"></span><span class="cm-file">space.config.ts</span></div>
            <div class="cm-body">
              <div class="cm-line"><span class="cm-kw">export default</span> {</div>
              <div class="cm-line">  name: <span class="cm-str">'patient-records'</span>,</div>
              <div class="cm-line">  icon: <span class="cm-str">'heart-pulse'</span>,</div>
              <div class="cm-line">  color: <span class="cm-str">'#FF2D55'</span>,</div>
              <div class="cm-line">  permissions: [</div>
              <div class="cm-line">    <span class="cm-str">'ai'</span>, <span class="cm-str">'storage'</span>, <span class="cm-str">'shell'</span></div>
              <div class="cm-line">  ]</div>
              <div class="cm-line">}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What is a Space: two-col reversed -->
    <section class="page-section alt">
      <div class="page-container two-col reverse">
        <div class="reveal from-left">
          <p class="page-label">Stack</p>
          <h2 class="page-title">Inherits <span class="accent">from the OS.</span></h2>
          <p class="page-subtitle">A Space sits on top of the Construct runtime. Identity, models, memory, files, themes, permissions, and the Operator come from below. You write the surface and the actions that belong to your workflow.</p>
        </div>
        <div class="reveal from-right">
          <!-- Stack mockup -->
          <div class="stack-visual">
            <div class="sv-layer sv-top">Your Space</div>
            <div class="sv-connector"></div>
            <div class="sv-layer sv-mid">Construct SDK</div>
            <div class="sv-connector"></div>
            <div class="sv-layer sv-bot">Construct Runtime</div>
          </div>
        </div>
      </div>
    </section>

    <!-- APIs: grid -->
    <section class="page-section">
      <div class="page-container">
        <div class="reveal">
          <p class="page-label">APIs</p>
          <h2 class="page-title">Everything you <span class="accent">need.</span></h2>
          <p class="page-subtitle">Six APIs. Full platform access. No boilerplate.</p>
        </div>
        <div class="api-grid">
          <div v-for="(api, i) in apis" :key="api.name" class="card reveal" :style="{ transitionDelay: i * 0.08 + 's' }">
            <h3 class="api-name">{{ api.name }}</h3>
            <p class="api-desc">{{ api.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CLI: two-col with terminal mockup -->
    <section class="page-section alt">
      <div class="page-container two-col">
        <div class="reveal from-left">
          <p class="page-label">CLI</p>
          <h2 class="page-title">Idea to published in <span class="accent">minutes.</span></h2>
          <p class="page-subtitle">The Construct CLI handles scaffolding, development, building, and publishing.</p>
        </div>
        <div class="reveal from-right">
          <!-- Terminal mockup -->
          <div class="code-mockup">
            <div class="cm-bar"><span class="cm-dot r"></span><span class="cm-dot y"></span><span class="cm-dot g"></span><span class="cm-file">Terminal</span></div>
            <div class="cm-body terminal">
              <div class="cm-line"><span class="cm-prompt">$</span> construct scaffold my-space</div>
              <div class="cm-line cm-dim">  Creating patient-records...</div>
              <div class="cm-line cm-dim">  Done.</div>
              <div class="cm-line"></div>
              <div class="cm-line"><span class="cm-prompt">$</span> construct dev</div>
              <div class="cm-line cm-dim">  Dev server on :5173</div>
              <div class="cm-line"></div>
              <div class="cm-line"><span class="cm-prompt">$</span> construct build</div>
              <div class="cm-line cm-dim">  Built patient-records.space</div>
              <div class="cm-line"></div>
              <div class="cm-line"><span class="cm-prompt">$</span> <span class="cm-accent">construct publish</span></div>
              <div class="cm-line cm-accent">  Published to Space Store.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="page-section" style="text-align: center;">
      <div class="page-container reveal">
        <h2 class="page-title">Ready to <span class="accent">build</span>?</h2>
        <p class="page-subtitle" style="margin-left: auto; margin-right: auto;">Start building your first space today. The platform handles the rest.</p>
        <div class="hero-actions" style="justify-content: center;">
          <a href="https://my.lisaos.dev" target="_blank" rel="noreferrer" class="btn btn-primary">Developer Portal</a>
          <NuxtLink to="/spaces" class="btn btn-secondary">Explore Spaces</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.btn { display: inline-flex; align-items: center; padding: 12px 28px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; transition: all 0.15s; cursor: pointer; border: none; }
.btn-primary { background: var(--app-accent-text, #e11d48); color: #fff; }
.btn-primary:hover { opacity: 0.9; }
.btn-secondary { background: var(--app-card-bg); color: var(--app-foreground); border: 1px solid var(--app-border); }
.btn-secondary:hover { border-color: var(--app-accent-text, #e11d48); }

/* Code mockup */
.code-mockup {
  border-radius: 12px;
  border: 1px solid var(--app-border);
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
}
.cm-bar {
  display: flex; align-items: center; gap: 6px; padding: 10px 14px;
  background: color-mix(in srgb, var(--app-background) 50%, black 8%);
  border-bottom: 1px solid var(--app-border);
}
.cm-dot { width: 10px; height: 10px; border-radius: 50%; }
.cm-dot.r { background: #ff5f57; } .cm-dot.y { background: #febc2e; } .cm-dot.g { background: #28c840; }
.cm-file { font-size: 11px; color: var(--app-muted); margin-left: auto; }
.cm-body {
  padding: 16px 20px;
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  font-size: 13px;
  line-height: 1.8;
  background: var(--app-background);
}
.cm-body.terminal { background: color-mix(in srgb, var(--app-background) 80%, black); }
.cm-line { white-space: nowrap; }
.cm-kw { color: var(--app-accent-text, #e11d48); }
.cm-str { color: #a5d6a7; }
.cm-prompt { color: var(--app-muted); margin-right: 8px; }
.cm-dim { color: var(--app-muted); opacity: 0.6; }
.cm-accent { color: var(--app-accent-text, #e11d48); }

/* Stack visual */
.stack-visual { display: flex; flex-direction: column; align-items: center; max-width: 320px; margin: 0 auto; }
.sv-layer {
  width: 100%; padding: 18px; text-align: center; font-weight: 600; font-size: 14px;
  border-radius: 10px; border: 1px solid var(--app-border);
}
.sv-top { background: color-mix(in srgb, var(--app-accent) 12%, var(--app-card-bg)); color: var(--app-accent-text, #e11d48); }
.sv-mid { background: var(--app-card-bg); }
.sv-bot { background: var(--app-canvas-bg); }
.sv-connector { width: 2px; height: 20px; background: var(--app-border); }

/* API grid */
.api-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 24px; }
.api-name { font-size: 15px; font-weight: 600; margin-bottom: 6px; }
.api-desc { font-size: 13px; color: var(--app-muted); line-height: 1.5; }

@media (max-width: 768px) {
  .api-grid { grid-template-columns: 1fr; }
}
</style>
