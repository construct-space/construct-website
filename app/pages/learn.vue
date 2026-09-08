<script setup lang="ts">
useSeoMeta({
  title: 'Learn — Get started with Construct',
  description: 'Quickstarts, guides, SDK docs, and patterns for building Spaces and using the Operator.',
})

const tracks = [
  { title: 'Get started', body: 'Install Construct, open a built-in Space, and run your first Operator action.', cta: 'Download', to: '/download' },
  { title: 'Build a Space', body: 'Scaffold with the CLI, declare capabilities, ship to the Space Store.', cta: 'SDK docs', to: '/sdk' },
  { title: 'Use the Operator', body: 'Specialists, automations, context, control. Learn what the Operator can do and how to keep it on the rails.', cta: 'Operator', to: '/operator' },
  { title: 'For your team', body: 'Bring Construct into an org. SSO, audit, policies, air-gap, private Spaces.', cta: 'Enterprise', to: '/enterprise' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Learn</p>
        <h1 class="page-title hero-title">Start <span class="accent">somewhere.</span></h1>
        <p class="page-subtitle hero-sub">
          Four short tracks, depending on whether you want to use Construct, build for it,
          or roll it out to a team.
        </p>
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <div class="grid-2">
          <article v-for="t in tracks" :key="t.title" class="card">
            <h3>{{ t.title }}</h3>
            <p>{{ t.body }}</p>
            <NuxtLink :to="t.to" class="track-link">{{ t.cta }} →</NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.track-link { display: inline-block; margin-top: 12px; font-size: 13px; font-weight: 600; color: var(--app-accent-text, #e11d48); text-decoration: none; }
.track-link:hover { text-decoration: underline; }
</style>
