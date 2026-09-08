<script setup lang="ts">
useSeoMeta({
  title: 'Operations Space — Runbooks, schedules, follow-up',
  description: 'The day-to-day of running a team — checked, scheduled, and chased without a separate app.',
})

const features = [
  { title: 'Runbooks that run', body: 'A checklist where the steps execute. Operator runs the ones that can be automated and pages someone for the ones that can\'t.' },
  { title: 'Schedules with teeth', body: 'Daily, weekly, monthly cadence. Missed steps surface; Operator chases the owner.' },
  { title: 'Cross-Space hand-off', body: 'When ops touches support, transport, or revenue, the thread carries — no copy-paste between systems.' },
  { title: 'Quiet by default', body: "Only what changed shows up. Operator is here to do work, not generate notifications." },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Spaces → Operations</p>
        <h1 class="page-title hero-title">The boring work, <span class="accent">handled.</span></h1>
        <p class="page-subtitle hero-sub">
          Runbooks, schedules, follow-up — the operational substrate that keeps a team
          functioning. The Operations Space treats it as software instead of a shared doc.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/download" class="btn btn-primary">Download Free</NuxtLink>
          <NuxtLink to="/spaces" class="btn btn-secondary">All Spaces</NuxtLink>
        </div>
        <ShotPlaceholder
          name="space-operations.png"
          alt="Operations Space with runbook and schedule"
          desc="Operations Space — left side a runbook checklist with mixed manual/automated steps (Operator handled the automated ones, owner pinged for manual). Right side a calendar/schedule view with the next missed step highlighted."
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">What's inside</p>
        <h2 class="page-title">Quiet, <span class="accent">but it's the load-bearing wall.</span></h2>
        <div class="grid-2">
          <article v-for="f in features" :key="f.title" class="card">
            <h3>{{ f.title }}</h3>
            <p>{{ f.body }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
