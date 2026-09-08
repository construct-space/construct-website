<script setup lang="ts">
useSeoMeta({
  title: 'Operator Context — Memory that belongs to the workflow',
  description: 'Every Space has its own memory: decisions, files, recent state, preferences. Operator reads and updates it turn after turn.',
})

const layers = [
  { title: 'Project memory', body: 'Decisions, files, and preferences for the current Space. Survives sessions, survives restarts.' },
  { title: 'Session state', body: 'What happened in this run — recent tool calls, intermediate results, the thread of the conversation.' },
  { title: 'Identity context', body: 'Who you are, what org you belong to, which Spaces you can access. Set once at the OS level.' },
  { title: 'Live state', body: 'The actual contents of the Space right now — the open file, the selected card, the row in front of you.' },
  { title: 'Grasps & tools', body: 'What the Operator already knows how to do, plus what this Space can call. Loaded with the Space, declared up front, never stitched in by prompt.' },
  { title: 'Outside data', body: 'MCP servers, web fetches, attached documents. Brought in deliberately, not assumed.' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Operator → Context</p>
        <h1 class="page-title hero-title">Memory that belongs <span class="accent">to the workflow.</span></h1>
        <p class="page-subtitle hero-sub">
          Generic chatbots forget every Monday. Spaces don't. Each one keeps the decisions,
          files, preferences, and state that matter for the work it's for — and Operator
          reads and updates that memory turn after turn.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/operator" class="btn btn-secondary">← Back to Operator</NuxtLink>
        </div>
        <ShotPlaceholder
          name="operator-context.png"
          alt="Operator context inspector"
          desc="Context inspector inside Operator: tabs for Project memory, Session state, Identity, Live state, Grasps, External data. Each tab shows a concise list of what's currently loaded — files, decisions, the open record, the connected MCP servers."
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">Layers</p>
        <h2 class="page-title">Six things <span class="accent">Operator knows.</span></h2>
        <div class="grid-3">
          <article v-for="l in layers" :key="l.title" class="card">
            <h3>{{ l.title }}</h3>
            <p>{{ l.body }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
