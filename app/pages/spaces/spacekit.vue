<script setup lang="ts">
useSeoMeta({
  title: 'SpaceKit — Build Spaces inside Construct',
  description:
    'SpaceKit is the Space we use to build every other Space. Plans, codes, previews, and publishes — same autonomous loop as Builder, specialized for Construct Spaces.',
  ogTitle: 'SpaceKit — The Space that builds Spaces',
  ogDescription:
    'Scaffold, edit, preview, and publish Construct Spaces — with an agent specialized for the SDK, the manifest, and the Space Store.',
})

useSchemaOrg([
  defineWebPage({
    name: 'SpaceKit — Build Spaces inside Construct',
    description: 'A built-in Construct Space dedicated to building other Spaces. Includes scaffolding, manifest editing, live preview, and one-command publish.',
  }),
])

const features = [
  { title: 'Scaffold from a manifest', body: 'Pick a name, an icon, a scope, and the capabilities your Space needs. SpaceKit generates the boilerplate, the routes, the Operator config.' },
  { title: 'Edit with the SDK in reach', body: 'Code in Monaco, jump to SDK definitions, see capability hints inline. The agent knows the @construct-space/sdk surface.' },
  { title: 'Live preview, in another Space', body: 'Hot-reload the new Space in a sibling window. Real OS, real identity, real Operator — not a sandboxed lie.' },
  { title: 'Manifest validation as you type', body: 'Bad capability declaration, missing route, conflicting scope — caught while typing, not at publish time.' },
  { title: 'Publish where it belongs', body: 'Public Space Store, private to your org, scoped to a single project. One command, three audiences.' },
  { title: 'The same loop, recursive', body: 'SpaceKit was built with SpaceKit. The autonomous coding loop that ships your Space is the same one we use to ship the platform.' },
]

const useCases = [
  { title: 'Internal tool for one team', body: 'Your team has a workflow nobody built software for. Scaffold, fit it, ship privately to the org. Done in an afternoon.' },
  { title: 'Space Store publish', body: 'Build a Space worth selling. SpaceKit handles the manifest, the signing, the listing flow. You handle the idea.' },
  { title: 'A Space that wraps an API', body: 'Your favorite SaaS has an API but no UI you actually want. Wrap it in a Space — SpaceKit gets you 80% there before you write the second prompt.' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Built in · Personal</p>
        <h1 class="page-title hero-title">SpaceKit. <span class="accent">Build a Space.</span></h1>
        <p class="page-subtitle hero-sub">
          The Space we use to build every other Space — including itself. Scaffold, edit,
          preview, publish. Same SDK as yours, same Operator, same OS. If it ships the
          platform, it can ship your workflow.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/download" class="btn btn-primary">Download Free</NuxtLink>
          <NuxtLink to="/sdk" class="btn btn-secondary">SDK docs</NuxtLink>
        </div>

        <ShotPlaceholder
          name="space-spacekit.png"
          alt="SpaceKit Space — building a new Space"
          desc="The SpaceKit Space inside Construct. Left rail: Manifest, Code, Preview, Publish. Center: a manifest.json being edited with capability hints inline. Right: a live preview of the new Space rendering in a sibling window. Bottom: a status strip showing 'manifest valid · build ok · ready to publish'. Boxes icon in the header."
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">What it does</p>
        <h2 class="page-title">Six things <span class="accent">SpaceKit handles for you.</span></h2>
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
        <h2 class="page-title">Three Spaces <span class="accent">already built this way.</span></h2>
        <div class="grid-3">
          <article v-for="u in useCases" :key="u.title" class="card">
            <h3>{{ u.title }}</h3>
            <p>{{ u.body }}</p>
          </article>
        </div>
        <div class="hero-actions" style="margin-top: 28px">
          <NuxtLink to="/spaces" class="btn btn-secondary">← All built-in Spaces</NuxtLink>
          <NuxtLink to="/spaces/builder" class="btn btn-secondary">Builder (for outside Construct)</NuxtLink>
          <NuxtLink to="/marketplace" class="btn btn-secondary">Space Store</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
