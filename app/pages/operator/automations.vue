<script setup lang="ts">
useSeoMeta({
  title: 'Operator Automations — Wakes on events, not just prompts',
  description: 'Operator can wake on task completion, failure, schedules, and your messages. Morpheus is the autonomous loop behind it.',
})

const triggers = [
  { name: 'On completion', body: 'A task finishes — Operator decides whether to verify, ship, or queue the next step.' },
  { name: 'On failure', body: 'A tool errors out — Operator catches it, retries with a different model or specialist, and reports back.' },
  { name: 'On schedule', body: 'Cron-style or one-shot. The Space wakes itself at 9:00 to run the morning brief.' },
  { name: 'On your message', body: 'You write a line. Operator picks it up, decides if it can act, and either runs or asks a clarifying question.' },
]

const policies = [
  { name: 'Observe', body: 'Watch only. Useful for shadowing a workflow before granting execute rights.' },
  { name: 'Local Execute', body: 'Run actions inside the Space. No outbound writes to other systems without approval.' },
  { name: 'Execute & Commit', body: 'Full autonomy within declared boundaries — write to the Graph, ship the change, close the loop.' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Operator → Automations</p>
        <h1 class="page-title hero-title">Wakes on events, <span class="accent">not just prompts.</span></h1>
        <p class="page-subtitle hero-sub">
          The Operator does not need you to type for it to do something. It reacts to
          completions, failures, schedules, and incoming messages — with explicit policies
          for what it's allowed to do.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/operator" class="btn btn-secondary">← Back to Operator</NuxtLink>
        </div>
        <!-- Motion candidate: a trigger fires → Operator wakes → action
             runs → log entry appears. Rename to .webm if recorded. -->
        <ShotPlaceholder
          name="operator-automations.png"
          alt="Operator automation triggers and Morpheus loop"
          desc="Ideally a 5s loop: a tool fails (red toast) → an automation triggers → Operator picks it up, retries with a different specialist → result resolves green. Static fallback: list of triggers (on completion / on failure / on schedule / on message) with status dots, plus a side panel showing the most recently-fired automation."
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">Triggers</p>
        <h2 class="page-title">Four ways the Operator <span class="accent">wakes up.</span></h2>
        <div class="grid-2">
          <article v-for="t in triggers" :key="t.name" class="card">
            <h3>{{ t.name }}</h3>
            <p>{{ t.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="page-container">
        <p class="page-label">Policies</p>
        <h2 class="page-title">Three levels of <span class="accent">autonomy.</span></h2>
        <p class="page-subtitle">Pick per Space. Tighten when you don't trust it yet, loosen when it earns it.</p>
        <div class="grid-3">
          <article v-for="p in policies" :key="p.name" class="card">
            <h3>{{ p.name }}</h3>
            <p>{{ p.body }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
