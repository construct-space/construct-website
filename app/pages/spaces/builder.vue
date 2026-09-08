<script setup lang="ts">
useSeoMeta({
  title: 'Builder — Build websites, apps, and games with an autonomous agent',
  description:
    'Build anything outside Construct — landing pages, websites, mobile apps, games. Builder plans, codes, verifies, and ships. Same autonomous loop as Claude Code, with a UI.',
  ogTitle: 'Builder — Coding agent for everything outside Construct',
  ogDescription:
    'Plans, builds, and verifies general software. Landing pages, websites, mobile apps, games — all with one autonomous coding agent.',
})

useSchemaOrg([
  defineWebPage({
    name: 'Builder — Build websites, apps, and games',
    description: 'A built-in Construct Space for general-purpose software building. Operates as an autonomous coding agent for projects outside the Construct platform itself.',
  }),
])

const buildsKinds = [
  { title: 'Landing pages', body: 'A hero, three sections, an analytics tag, deployed. Builder writes it, previews it, ships it.' },
  { title: 'Marketing websites', body: 'Multi-page sites with routing, content, SEO, and a CMS hookup if you want one.' },
  { title: 'Web apps', body: 'Vue, React, Svelte. Auth, data layer, deployment. Builder picks the stack to fit the brief.' },
  { title: 'Mobile apps', body: 'React Native, Expo, Tauri. Builds for iOS and Android — local preview, signed release flows.' },
  { title: 'Games', body: 'Phaser, three.js, simple 2D and 3D. From a prompt to a playable build.' },
  { title: 'CLIs and scripts', body: 'Node, Python, Bash. One-shots and recurring jobs. Tested, documented, runnable.' },
]

const features = [
  { title: 'Plans before it codes', body: 'Builder writes a plan first — files, dependencies, decisions. You review, refine, then it ships.' },
  { title: 'Verifies its work', body: 'Lint, typecheck, run tests, run a smoke check. Failures loop back into the plan instead of being declared done.' },
  { title: 'Multi-file edits as a diff', body: 'Changes across files arrive as a reviewable diff. Approve, revise, or roll back in one motion.' },
  { title: 'Deploys when ready', body: 'Pushes to your hosting of choice — Vercel, Netlify, Cloudflare, your own server. Or just builds locally if you prefer.' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Built in · Personal</p>
        <h1 class="page-title hero-title">Builder. <span class="accent">Build anything.</span></h1>
        <p class="page-subtitle hero-sub">
          The main coding agent in Construct, for everything that lives outside the
          Construct platform — landing pages, websites, mobile apps, games, CLIs. Plans,
          codes, verifies, ships.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/download" class="btn btn-primary">Download Free</NuxtLink>
          <NuxtLink to="/spaces/spacekit" class="btn btn-secondary">For Spaces, see SpaceKit</NuxtLink>
        </div>

        <ShotPlaceholder
          name="space-builder.png"
          alt="Builder Space — autonomous agent planning a landing page"
          desc="The Builder Space inside Construct. Center: a project plan being drafted (files, components, deploy target). Right: the running agent's status — current step, tool calls, verification results. Bottom right: a live preview of the work-in-progress. Hammer icon in the header."
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">What it builds</p>
        <h2 class="page-title">Six things, <span class="accent">to start.</span></h2>
        <div class="grid-3">
          <article v-for="k in buildsKinds" :key="k.title" class="card">
            <h3>{{ k.title }}</h3>
            <p>{{ k.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="page-container">
        <p class="page-label">How it works</p>
        <h2 class="page-title">Plan, build, <span class="accent">verify, ship.</span></h2>
        <div class="grid-2">
          <article v-for="f in features" :key="f.title" class="card">
            <h3>{{ f.title }}</h3>
            <p>{{ f.body }}</p>
          </article>
        </div>
        <div class="hero-actions" style="margin-top: 28px">
          <NuxtLink to="/spaces" class="btn btn-secondary">← All built-in Spaces</NuxtLink>
          <NuxtLink to="/spaces/spacekit" class="btn btn-secondary">SpaceKit (for Spaces)</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
