<script setup lang="ts">
useSeoMeta({
  title: 'Transport Space — Routes, dispatch, fleet',
  description: 'Plan routes, assign drivers, and let Operator catch failures the moment they happen — inside one Space.',
})

const features = [
  { title: 'Live route board', body: 'Routes, vehicles, drivers, and ETAs on one canvas. Operator highlights the ones drifting off plan.' },
  { title: 'Dispatch in one move', body: 'Assign a driver, send the manifest, and confirm receipt without opening three other tools.' },
  { title: 'Failure-aware', body: 'Late, no-show, mechanical issue, weather event — Operator triggers the playbook and tells you what it did.' },
  { title: 'Customer comms', body: 'Drafts and sends notifications in your voice. Logs what went out and to whom.' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Spaces → Transport</p>
        <h1 class="page-title hero-title">Routes, dispatch, <span class="accent">and the messes in between.</span></h1>
        <p class="page-subtitle hero-sub">
          Logistics doesn't fit in a chat box. The Transport Space gives you a live board,
          a dispatch surface, and an Operator that catches failures while they're still small.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/download" class="btn btn-primary">Download Free</NuxtLink>
          <NuxtLink to="/spaces" class="btn btn-secondary">All Spaces</NuxtLink>
        </div>
        <ShotPlaceholder
          name="space-transport.png"
          alt="Transport Space live route board"
          desc="Transport Space showing the live route board. Routes listed with assigned driver, vehicle, ETA, and status. One or two rows highlighted as drifting off plan. Operator panel summoned in the corner showing a suggested re-route."
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">What's inside</p>
        <h2 class="page-title">Built for the work, <span class="accent">not adapted to it.</span></h2>
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
