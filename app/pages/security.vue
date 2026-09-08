<script setup lang="ts">
useSeoMeta({
  title: 'Security — Local-first, air-gappable, auditable',
  description:
    'Construct runs locally. Models can run locally. Spaces declare what they need; the OS decides what they get. Data, audit, and policy live at the operating layer.',
  ogTitle: 'Security — Construct',
  ogDescription:
    'Local-first by default. Air-gappable. Per-Space capabilities, per-action approvals, and a full audit trail at the OS level.',
})

const principles = [
  { title: 'Local-first by default', body: 'The OS, the Spaces, and the data live on your machine. Cloud is a choice you make per Space, not a default the product makes for you.' },
  { title: 'Air-gappable', body: 'Run Operator on local models with the same tools and the same SDK. The Space does not know — and does not need to know — that the model never left the perimeter.' },
  { title: 'Capabilities, declared', body: "A Space's manifest lists what it wants — files, network, tools, automation. Anything not declared, it doesn't get. No silent escalation by prompt." },
  { title: 'Per-action approvals', body: 'Risky actions can require a click, a typed confirmation, or a second signer. Configurable per Space, per role, per environment.' },
  { title: 'Routing rules', body: "Pin a model per Space, per task type, or by data sensitivity. Protected data never touches a non-compliant model — the routing layer enforces it." },
  { title: 'Audit trail', body: 'Operator actions are logged at the OS layer with who, what, where, and which model — designed to be exportable and queryable in a SIEM-friendly format.' },
]

const data = [
  { q: 'Where does my data live?', a: 'On your machine, in the Construct profile directory. Nothing leaves the device unless you sync to your own cloud, install a Space that requests network, or call a cloud model.' },
  { q: 'Does Construct send telemetry?', a: 'Not by default. The desktop app does not phone home. Optional anonymous telemetry can be enabled per device or per org for diagnostic purposes.' },
  { q: 'What about cloud models?', a: 'Cloud models are off-device by definition. Construct ships routing rules so you can pin which models a Space is allowed to call, and which models are allowed to see protected data.' },
  { q: 'Can I run fully offline?', a: 'Yes. Local-only mode disables every cloud surface — model calls, Space Store, sync — and runs Operator on a local model server (Ollama, LM Studio, vLLM, etc.).' },
]

const compliance = [
  { title: 'SOC 2', body: 'We are pursuing SOC 2 Type II for the cloud surfaces (Space Store, identity). The desktop app is local-first and stores no customer data on our servers.' },
  { title: 'GDPR', body: 'You control where data lives. The desktop is local. Cloud surfaces are EU-region capable on Enterprise plans.' },
  { title: 'HIPAA', body: "Run a Patient Records Space in air-gap mode against a local model, so PHI never leaves your perimeter. For cloud surfaces, talk to us about BAAs and your compliance requirements." },
  { title: 'Custom', body: 'Air-gap, on-prem, custom routing rules, and dedicated infrastructure are all available on Enterprise. Talk to us about your constraints.' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Security</p>
        <h1 class="page-title hero-title">
          Local first. <span class="accent">Auditable always.</span>
        </h1>
        <p class="page-subtitle hero-sub">
          Construct runs on your machine. Models can run on your machine. Spaces declare
          what they need; the OS decides what they get. Data, audit, and policy live at
          the operating layer — not bolted onto a single feature.
        </p>
        <div class="hero-actions">
          <a href="mailto:security@lisaos.dev" class="btn btn-primary">Security contact</a>
          <NuxtLink to="/operator/control" class="btn btn-secondary">Autonomy controls</NuxtLink>
        </div>
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">Principles</p>
        <h2 class="page-title">Six things <span class="accent">we hold to.</span></h2>
        <div class="grid-3">
          <article v-for="p in principles" :key="p.title" class="card">
            <h3>{{ p.title }}</h3>
            <p>{{ p.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="page-container">
        <p class="page-label">Data handling</p>
        <h2 class="page-title">Plain answers, <span class="accent">no hand-waving.</span></h2>
        <div class="qa-list">
          <article v-for="row in data" :key="row.q" class="qa-row">
            <h3>{{ row.q }}</h3>
            <p>{{ row.a }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">Compliance</p>
        <h2 class="page-title">Where we stand.</h2>
        <p class="page-subtitle">Local-first plus air-gap covers most regulated workloads. Cloud surfaces are auditable on their own track.</p>
        <div class="grid-2">
          <article v-for="c in compliance" :key="c.title" class="card">
            <h3>{{ c.title }}</h3>
            <p>{{ c.body }}</p>
          </article>
        </div>
        <div class="hero-actions" style="margin-top: 28px">
          <a href="mailto:security@lisaos.dev" class="btn btn-primary">Security contact</a>
          <NuxtLink to="/enterprise" class="btn btn-secondary">For enterprise</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.qa-list { display: flex; flex-direction: column; gap: 8px; margin-top: 28px; }
.qa-row {
  padding: 22px 26px;
  border-radius: 2px;
  background: var(--app-card-bg);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.qa-row h3 {
  font-size: 14px;
  font-weight: 500;
  color: var(--app-foreground);
  margin: 0 0 6px;
}
.qa-row p {
  font-size: 13px;
  font-weight: 300;
  color: var(--app-muted);
  line-height: 1.6;
  margin: 0;
}
</style>
