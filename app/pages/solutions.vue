<script setup lang="ts">
useSeoMeta({
  title: 'Solutions — A Space for every team',
  description: 'How Construct shows up across functions: sales, support, operations, engineering, finance, and the messy ones in between.',
})

const solutions = [
  { name: 'Sales', body: 'A pipeline that updates itself, with the Operator suggesting the next move on each deal.', to: '/spaces/revenue' },
  { name: 'Support', body: 'A real queue, real composer, drafts in your voice, escalations that page the right person.', to: '/spaces/support' },
  { name: 'Operations', body: 'Runbooks that run, schedules with teeth, follow-up that does not need a Slack thread.', to: '/spaces/operations' },
  { name: 'Logistics', body: 'Routes, dispatch, exception handling — built for the messy reality of moving things.', to: '/spaces/transport' },
  { name: 'Engineering', body: 'A coding Space with Architect → Coder → Project handoff and Morpheus watching for stuck agents.', to: '/operator/agents' },
  { name: 'Finance', body: 'A Space tuned to your books — the Operator reads transactions, drafts entries, and flags anomalies.', to: '/spaces' },
  { name: 'Healthcare', body: 'Patient records, intake, scheduling — with permissions and audit at the OS level. Local-only models supported.', to: '/operator/control' },
  { name: 'Legal', body: 'Contract review and case prep with sourced answers, never paraphrase. Air-gap mode for sensitive matters.', to: '/operator/control' },
  { name: 'Education', body: 'Lesson builders and grading flows, with the Operator drafting feedback in the teacher\'s voice.', to: '/spaces' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Solutions</p>
        <h1 class="page-title hero-title">A <span class="accent">Space</span> for every team.</h1>
        <p class="page-subtitle hero-sub">
          The same OS, the same Operator, the same identity layer underneath — different
          surfaces on top. Pick the one that fits the team you actually have.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/download" class="btn btn-primary">Download Free</NuxtLink>
          <NuxtLink to="/enterprise" class="btn btn-secondary">For enterprise</NuxtLink>
        </div>

        <ShotPlaceholder
          name="solutions-overview.png"
          alt="Multiple Spaces side by side — Sales, Support, Operations"
          desc="Composite shot — three Spaces shown stacked or in a row: Sales (pipeline kanban), Support (ticket queue), Operations (runbook). Same OS chrome around each, different content surfaces. Could be one window with split panels, or three windows tiled. Demonstrates 'same system, different rooms.'"
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">By function</p>
        <h2 class="page-title">Where Construct <span class="accent">shows up.</span></h2>
        <div class="grid-3">
          <NuxtLink v-for="s in solutions" :key="s.name" :to="s.to" class="card sol-card">
            <h3>{{ s.name }}</h3>
            <p>{{ s.body }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.sol-card { text-decoration: none; color: inherit; display: block; }
</style>
