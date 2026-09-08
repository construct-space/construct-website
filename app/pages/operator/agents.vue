<script setup lang="ts">
useSeoMeta({
  title: 'Operator Agents — Specialists, not one assistant',
  description: 'Operator runs as a roster of specialists — Architect, Coder, Project, Researcher — that hand off the same thread, the same context, and the same goal.',
})

const agents = [
  { name: 'Architect', body: 'Frames the problem, drafts the plan, lists risks and approvals before the work begins.' },
  { name: 'Coder', body: 'Picks up the plan, edits real files, runs tools, and ships the change inside the Space.' },
  { name: 'Project', body: 'Carries the release thread — tasks, schedules, follow-up, and who owns what.' },
  { name: 'Researcher', body: 'Reads documents, the web, and your data. Returns sourced answers, not vibes.' },
  { name: 'Reviewer', body: 'Double-checks output before success is reported. Catches the mistakes the first agent made.' },
  { name: 'Specialist (dynamic)', body: 'When a tool keeps failing, Morpheus spawns a specialist for that tool and verifies it works.' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Operator → Agents</p>
        <h1 class="page-title hero-title">Specialists, <span class="accent">not one assistant.</span></h1>
        <p class="page-subtitle hero-sub">
          One Operator, several specialists. The right one takes the turn, hands off when
          the shape of the work changes, and keeps the same thread open the whole time.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/operator" class="btn btn-secondary">← Back to Operator</NuxtLink>
        </div>
        <!-- Reads better as motion: Architect → Coder handoff. Rename
             to .webm when you have a clip; the component auto-detects
             and renders <video>. -->
        <ShotPlaceholder
          name="operator-agents.png"
          alt="Operator specialist roster"
          desc="Ideally a 4-5s loop: Operator panel showing Architect finishing a plan → handoff arrow to Coder → Coder picks up and starts editing. Static fallback works too: panel with active specialist (Architect) highlighted and the next-up roster (Coder, Project, Reviewer) listed below."
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">Roster</p>
        <h2 class="page-title">Built-in specialists</h2>
        <p class="page-subtitle">Each one is a real agent with its own model mix, tool set, and behavior — not a different system prompt.</p>
        <div class="grid-3">
          <article v-for="a in agents" :key="a.name" class="card">
            <h3>{{ a.name }}</h3>
            <p>{{ a.body }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
