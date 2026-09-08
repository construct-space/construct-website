<script setup lang="ts">
useSeoMeta({
  title: 'Editor — Code, terminal, AI completions in Construct',
  description:
    'A code editor built on Monaco with a terminal alongside and Operator paired in-line. Edit files, run commands, ship — without leaving the Space.',
  ogTitle: 'Editor — Code, terminal, AI in Construct',
  ogDescription:
    'Monaco editor + terminal + Operator, all inside a single Space. Scoped to your project, scoped to the file, scoped to the work.',
})

useSchemaOrg([
  defineWebPage({
    name: 'Editor — Code, terminal, AI completions in Construct',
    description: 'A built-in Construct Space for editing code with the Operator paired alongside. Monaco-powered, terminal-enabled, project-aware.',
  }),
])

const features = [
  { title: 'Monaco under the hood', body: 'The same editor that powers VS Code. Syntax, autocomplete, multi-cursor, keybinds you already know.' },
  { title: 'Terminal in the same Space', body: 'A real shell at the bottom. Run tests, run servers, run anything — output stays in the Space, scoped to the project.' },
  { title: 'AI completions, in line', body: 'Operator suggests as you type, completes blocks, refactors selections. Accept with Tab, reject with Esc — keyboard-first.' },
  { title: 'Project-aware by default', body: 'Open the Space, the project context is already loaded. File tree, recent edits, open record, the lot.' },
  { title: 'Multi-file edits', body: 'Operator can edit across files in one turn — refactor a function and update its callers, change a type and propagate. Reviewed as a diff before commit.' },
  { title: 'Git, where it belongs', body: 'Branch, stage, commit, push from the Space. The terminal and Operator both know the working tree.' },
]

const useCases = [
  { title: 'Quick edit, clean diff', body: 'Open a file, ask for a fix, review the diff, accept or revise. Same loop as a senior engineer pairing with you.' },
  { title: 'Refactor with confidence', body: '"Rename this function and update every caller." Operator does the boring part; you read the diff.' },
  { title: 'New feature, scoped', body: '"Add a settings panel here, wire it to the existing store." The change happens in the Space, with the project state in view.' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Built in · Personal</p>
        <h1 class="page-title hero-title">Editor. <span class="accent">Code, paired.</span></h1>
        <p class="page-subtitle hero-sub">
          Monaco-powered editor, real terminal, Operator paired alongside. Edit, run,
          commit — all inside one Space, all scoped to the project you actually have open.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/download" class="btn btn-primary">Download Free</NuxtLink>
          <NuxtLink to="/spaces/builder" class="btn btn-secondary">See Builder</NuxtLink>
        </div>

        <ShotPlaceholder
          name="space-editor.png"
          alt="Editor Space — Monaco editor with terminal and Operator inline"
          desc="The Editor Space inside Construct. Left rail: file tree. Center: Monaco editor with a file open, AI ghost-text completion visible mid-line. Right: Operator panel with a multi-file diff suggestion. Bottom: integrated terminal showing test output."
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">What it does</p>
        <h2 class="page-title">Everything you expect, <span class="accent">paired with help.</span></h2>
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
        <h2 class="page-title">Three loops you'll <span class="accent">actually run.</span></h2>
        <div class="grid-3">
          <article v-for="u in useCases" :key="u.title" class="card">
            <h3>{{ u.title }}</h3>
            <p>{{ u.body }}</p>
          </article>
        </div>
        <div class="hero-actions" style="margin-top: 28px">
          <NuxtLink to="/spaces" class="btn btn-secondary">← All built-in Spaces</NuxtLink>
          <NuxtLink to="/spaces/tui" class="btn btn-secondary">See TUI</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
