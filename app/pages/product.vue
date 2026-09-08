<script setup lang="ts">
useSeoMeta({
  title: 'Product — How Construct is put together',
  description: 'The shape of Construct: the OS, Spaces, the Operator, the Space Store, the SDK, the org and identity layer underneath.',
})

const layers = [
  { title: 'The OS', body: 'The shell. Identity, files, models, memory, themes, permissions, automations. What every Space inherits.' },
  { title: 'Spaces', body: 'Installable surfaces — one per workflow. Each owns its UI, data model, actions, and Operator persona.' },
  { title: 'Operator', body: 'The AI inside each Space. Specialists, multi-model, multimodal, with explicit autonomy controls.' },
  { title: 'Morpheus', body: 'The autonomous mode. Reacts to completions, failures, and schedules within the autonomy ceiling you set — and is growing toward scoring agents and refining prompts over time.' },
  { title: 'Space Store', body: "Where Spaces live. Public catalog, private to your org, or scoped to a project — same SDK either way." },
  { title: 'SDK + CLI', body: 'Vue 3 plugins, six platform APIs, scaffold-build-publish in minutes.' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Product</p>
        <h1 class="page-title hero-title">How Construct is <span class="accent">put together.</span></h1>
        <p class="page-subtitle hero-sub">
          Six layers, one product. The OS at the bottom, Spaces on top, Operator inside
          each one, Morpheus watching, Space Store distributing, SDK keeping it open.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/download" class="btn btn-primary">Download Free</NuxtLink>
          <NuxtLink to="/sdk" class="btn btn-secondary">Build a Space</NuxtLink>
        </div>

        <!-- The architecture diagram. Could reuse the anatomy-of-a-space
             style (exploded isometric) but expanded to six layers. -->
        <ShotPlaceholder
          name="product-layers.png"
          alt="Construct architecture — six layers stacked"
          desc="Isometric exploded diagram of the Construct product, top to bottom: Spaces (UI tiles), Operator (panel), Morpheus (loop arrows around the operator), Space Store (rail of Space cards), SDK (terminal + code snippet), OS (slim base layer with identity, files, models, memory, permissions). Thin dotted lines + small labels on each layer. Same visual language as anatomy-of-a-space.png so the two read as a set."
          caption="Six layers, one product. Same DNA as the Space anatomy."
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">Layers</p>
        <h2 class="page-title">Top to bottom.</h2>
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
