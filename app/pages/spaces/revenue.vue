<script setup lang="ts">
useSeoMeta({
  title: 'Revenue Space — Pipeline, deals, motion',
  description: 'A pipeline that updates itself, with Operator suggesting next steps on every card.',
})

const features = [
  { title: 'Pipeline as a board', body: 'Real cards, real stages, drag-and-drop. The Operator keeps the data current from your inbox and call notes.' },
  { title: 'Next-step suggestions', body: 'Each card gets a suggested next action with the reason and the proposed copy. Approve, edit, send.' },
  { title: 'Forecasts you can defend', body: 'Numbers come from actual signals — touches, reply latency, sentiment — not gut feel boxed in a column.' },
  { title: 'Hand-offs that stick', body: 'When a deal closes, Operator hands the customer to the Support Space with full context attached.' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Spaces → Revenue</p>
        <h1 class="page-title hero-title">Pipeline. Deals. <span class="accent">Actual motion.</span></h1>
        <p class="page-subtitle hero-sub">
          The Revenue Space is built around how the deal moves, not how the CRM is structured.
          Operator keeps the cards alive, suggests the next move, and hands off cleanly when
          you win.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/download" class="btn btn-primary">Download Free</NuxtLink>
          <NuxtLink to="/spaces" class="btn btn-secondary">All Spaces</NuxtLink>
        </div>
        <ShotPlaceholder
          name="space-revenue.png"
          alt="Revenue Space pipeline board with AI-suggested next steps"
          desc="Revenue Space pipeline as a kanban board — Lead / Qualified / Proposal / Close. Each card shows company, value, and last-touch. One card has Operator's next-step suggestion overlaid with a draft email and an Approve button."
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">What's inside</p>
        <h2 class="page-title">A CRM that <span class="accent">earns its keep.</span></h2>
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
