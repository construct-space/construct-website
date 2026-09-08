<script setup lang="ts">
useSeoMeta({
  title: 'Enterprise — Construct for organizations',
  description: 'SSO, audit, policies, on-prem, air-gap, custom Spaces — and the same operating layer your team gets for free.',
})

const pillars = [
  { title: 'Identity that fits', body: 'SSO/SAML, SCIM, role mapping. Spaces inherit org identity at the OS level — no per-Space onboarding.' },
  { title: 'Policies you set once', body: 'Org-wide model routing, capability allowlists, autonomy ceilings, and per-Space overrides where you need them.' },
  { title: 'Audit you can defend', body: 'Every action the Operator takes is logged with who, what, where, and which model. Exportable, queryable, kept.' },
  { title: 'Local + air-gap', body: 'Run Spaces with local models only. The same SDK, the same Operator, the same UI — without a single byte leaving the perimeter.' },
  { title: 'Private Spaces', body: 'Build internal Spaces for the workflows nobody outside your org will ever see. Distribute privately, not to the public Space Store.' },
  { title: 'Support that owns it', body: 'Dedicated SLAs, named contacts, priority routing on incidents, and quarterly reviews on what the Operator is doing for your team.' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Enterprise</p>
        <h1 class="page-title hero-title">Same OS. <span class="accent">Your rules.</span></h1>
        <p class="page-subtitle hero-sub">
          The free Construct your team uses, hardened for the constraints your org actually
          has. SSO, audit, policy, air-gap, private distribution — all at the operating
          layer, not bolted onto a single Space.
        </p>
        <div class="hero-actions">
          <a href="mailto:enterprise@lisaos.dev" class="btn btn-primary">Talk to us</a>
          <NuxtLink to="/operator/control" class="btn btn-secondary">See controls</NuxtLink>
        </div>

        <ShotPlaceholder
          name="enterprise-admin.png"
          alt="Enterprise admin console for a Construct org"
          desc="Org admin view — left rail: Members, SSO, Policies, Audit, Spaces. Main pane shows a policy editor: model routing rule, capability allowlist, autonomy ceiling per Space. Audit log strip at the bottom with the last 3-4 actions and which model ran them. Reads as governance, not consumer."
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">What you get</p>
        <h2 class="page-title">Six pillars.</h2>
        <div class="grid-3">
          <article v-for="p in pillars" :key="p.title" class="card">
            <h3>{{ p.title }}</h3>
            <p>{{ p.body }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
