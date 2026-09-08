<script setup lang="ts">
useSeoMeta({
  title: 'Project — A project-aware agent that knows your codebase',
  description:
    'A project-aware Space — files, tasks, conversations, and an Operator that knows your codebase, tools, and recent context. The home for one project at a time.',
  ogTitle: 'Project — Project-aware Space in Construct',
  ogDescription:
    'Tasks, files, conversations scoped to one project. The Operator knows the codebase, the tools, and the recent context.',
})

useSchemaOrg([
  defineWebPage({
    name: 'Project — A project-aware Space in Construct',
    description: 'A built-in Space that bundles tasks, files, recent activity, and a project-aware Operator into one workflow.',
  }),
])

const features = [
  { title: 'Recent + pinned at a glance', body: 'Open the Space, see the projects that matter — pinned ones up top, recent ones below, deploy status alongside each.' },
  { title: 'Quick open, anywhere', body: 'Cmd/Ctrl-K. Type a project name, jump straight in. Doesn\'t matter how many you have.' },
  { title: 'An agent that already knows', body: 'The Operator inside Project has the codebase, the CLAUDE.md, the recent commits, and the tooling already loaded — turn one starts at speed.' },
  { title: 'Tasks live with code', body: 'Tasks, threads, and decisions belong to the project. Open the project six months later — the context is still there.' },
  { title: 'Deploy status, in view', body: 'Live deployment status per project. See what is up, what is failing, what is about to ship — without opening another tool.' },
  { title: 'Hands off cleanly', body: 'Need design help? Hand off to a design Space with the project context attached. Need ops help? Same. The thread carries.' },
]

const useCases = [
  { title: 'Daily standup, with self', body: '"What did I leave half-done?" The Operator reads recent commits, open threads, and tasks — gives you the brief.' },
  { title: 'Onboarding the next person', body: 'Open the project Space, the new engineer sees what mattered last week — not just what is in git log.' },
  { title: 'Switch projects mid-day', body: 'Three open. Hop between them. The Operator in each one already knows where you left off.' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Built in · Personal</p>
        <h1 class="page-title hero-title">Project. <span class="accent">It already knows.</span></h1>
        <p class="page-subtitle hero-sub">
          A Space dedicated to the project you actually have open. Files, tasks,
          conversations, deploy status, and an Operator that already knows the codebase,
          the tooling, and where you left off.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/download" class="btn btn-primary">Download Free</NuxtLink>
          <NuxtLink to="/spaces/org-project" class="btn btn-secondary">For teams</NuxtLink>
        </div>

        <ShotPlaceholder
          name="space-project.png"
          alt="Project Space — recent projects, tasks, deploy status"
          desc="The Project Space inside Construct. Top: 'Recent Projects' grid with deploy status pills. Below: 'Pinned Projects' shortcuts. Right side: an open project's view — tasks, recent commits, threads. Operator panel showing the daily brief. Search bar at the top with 'Quick Open' placeholder."
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">What it does</p>
        <h2 class="page-title">One project at a time, <span class="accent">all context loaded.</span></h2>
        <div class="grid-3">
          <article v-for="f in features" :key="f.title" class="card">
            <h3>{{ f.title }}</h3>
            <p>{{ f.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="page-container">
        <p class="page-label">In practice</p>
        <h2 class="page-title">Three habits this <span class="accent">makes easy.</span></h2>
        <div class="grid-3">
          <article v-for="u in useCases" :key="u.title" class="card">
            <h3>{{ u.title }}</h3>
            <p>{{ u.body }}</p>
          </article>
        </div>
        <div class="hero-actions" style="margin-top: 28px">
          <NuxtLink to="/spaces" class="btn btn-secondary">← All built-in Spaces</NuxtLink>
          <NuxtLink to="/spaces/editor" class="btn btn-secondary">See Editor</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
