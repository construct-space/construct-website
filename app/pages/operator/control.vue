<script setup lang="ts">
useSeoMeta({
  title: 'Operator Control — Power without losing control',
  description: 'Boundaries, approvals, and audit. Spaces declare what they need; you decide what to grant. Operator runs inside those rules.',
})

const controls = [
  { title: 'Capability declarations', body: "A Space's manifest lists what it wants — files, network, tools, automation. Nothing else is granted." },
  { title: 'Per-action approvals', body: "Risky actions can require a single click, a typed confirmation, or a second signer." },
  { title: 'Audit trail', body: 'Every action the Operator takes is logged with who, what, where, and which model — exportable.' },
  { title: 'Model routing rules', body: 'Pin a model per Space, per task type, or by data sensitivity. Never let a non-compliant model see protected data.' },
  { title: 'Local-only mode', body: "Air-gap the Space against any cloud provider. The Operator runs on local models with the same tools." },
  { title: 'Org policies', body: 'Set defaults for the whole org from the staff console. Spaces inherit unless explicitly overridden.' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Operator → Control</p>
        <h1 class="page-title hero-title">Power, <span class="accent">without losing control.</span></h1>
        <p class="page-subtitle hero-sub">
          Operator is allowed to act because you decided what it's allowed to do. Capabilities,
          approvals, audit, and routing live at the OS layer — Spaces can't quietly opt out.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/operator" class="btn btn-secondary">← Back to Operator</NuxtLink>
          <NuxtLink to="/enterprise" class="btn btn-secondary">For enterprise</NuxtLink>
        </div>
        <ShotPlaceholder
          name="operator-control.png"
          alt="Operator permissions and autonomy controls"
          desc="The Control panel for a Space — toggles for Observe / Local Execute / Execute & Commit, capability allowlist (files, network, tools, automation), per-action approval rules, and the current model routing rule. Audit log row visible at the bottom."
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">Controls</p>
        <h2 class="page-title">What you actually decide.</h2>
        <div class="grid-3">
          <article v-for="c in controls" :key="c.title" class="card">
            <h3>{{ c.title }}</h3>
            <p>{{ c.body }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
