<script setup lang="ts">
useSeoMeta({
  title: 'Org Project — Org-wide project management in Construct',
  description:
    'Track, clone, and coordinate projects across your organization. Org Project is the Space that turns "every team has its own project list" into one shared, sortable view.',
  ogTitle: 'Org Project — Org-wide project management',
  ogDescription:
    'Coordinate projects across teams. Same OS, shared context, role-aware access — the org-tier counterpart to the personal Project Space.',
})

useSchemaOrg([
  defineWebPage({
    name: 'Org Project — Org-wide project management in Construct',
    description: 'A built-in Construct Space for coordinating projects across an organization. Tracks, clones, and shares projects with role-aware access.',
  }),
])

const features = [
  { title: 'Every project, one view', body: 'Sortable, filterable list — by team, by status, by deploy state. The roll-up your finance and ops team always wished they had.' },
  { title: 'Clone with intent', body: "Spin a new project from an existing one — same scaffolding, same tooling, fresh history. The way to get teams onto a shared baseline." },
  { title: 'Shared context, scoped access', body: 'Members of a project see its detail; outsiders see only what their role allows. Permissions inherit from the Org Space.' },
  { title: 'Cross-project threads', body: 'Discussions that span projects (a shared library, a cross-team incident) live where they belong — visible to everyone affected, not duplicated.' },
  { title: 'Deploy roll-up', body: 'Live deploy status for every project, in one place. What is shipping, what is failing, who is on it.' },
  { title: 'Audit-aware', body: "Project-level changes flow into the Org's audit log. A team renamed a project? An admin can see when, and who." },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Built in · When you are in an org</p>
        <h1 class="page-title hero-title">Org Project. <span class="accent">Across teams.</span></h1>
        <p class="page-subtitle hero-sub">
          The org-tier Space for projects. Every team's project list, rolled up into one
          sortable, sharable view. Track, clone, coordinate — without losing the per-team
          autonomy that made the projects work in the first place.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/enterprise" class="btn btn-primary">For enterprise</NuxtLink>
          <NuxtLink to="/spaces/project" class="btn btn-secondary">Personal Project Space</NuxtLink>
        </div>

        <ShotPlaceholder
          name="space-org-project.png"
          alt="Org Project Space — projects across teams in one view"
          desc="The Org Project Space inside Construct. Top: filter bar (team, status, deploy). Center: a table or kanban view of projects across the org with deploy status pills, owner avatars, and last-activity timestamps. Right pane: drill-down on one project showing recent threads, owners, and a clone button. Folder-kanban icon in the header."
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">What it does</p>
        <h2 class="page-title">Coordination <span class="accent">without centralization.</span></h2>
        <div class="grid-3">
          <article v-for="f in features" :key="f.title" class="card">
            <h3>{{ f.title }}</h3>
            <p>{{ f.body }}</p>
          </article>
        </div>

        <div class="hero-actions" style="margin-top: 28px">
          <NuxtLink to="/spaces" class="btn btn-secondary">← All built-in Spaces</NuxtLink>
          <NuxtLink to="/spaces/org" class="btn btn-secondary">See Org</NuxtLink>
          <NuxtLink to="/enterprise" class="btn btn-secondary">Enterprise</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
