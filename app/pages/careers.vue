<script setup lang="ts">
useSeoMeta({
  title: 'Careers — Build the OS for the age of AI',
  description:
    "We are building the operating system for AI-native software. Small team, deep work, no AI-slop. If that lines up with how you want to spend the next few years, talk to us.",
})

const principles = [
  { title: 'Do the work', body: "We make a product that does real work. We expect the same of ourselves. Show your taste, ship your craft, leave the room better than you found it." },
  { title: 'Strong opinions, paired with edits', body: "Disagree, propose, defend. Then commit and improve it. We do not run by consensus — we run by craftsmanship." },
  { title: 'Boring infrastructure, ambitious surface', body: "Identity, models, files, audit — make these dependable. Save the bold moves for the parts users see." },
  { title: 'No AI-slop', body: "If a thing is generated, it should still feel made. The product, the copy, the tests, the design — held to the same bar as if there were no AI in the room." },
]

const roles = [
  { title: 'Senior Frontend Engineer (Spaces)', body: 'Vue 3, performance, design sense. Build the surfaces a few hundred thousand people will use every day.', tag: 'Engineering · Remote' },
  { title: 'Operator Engineer (Agents)', body: 'Specialist routing, multi-model tool use, evaluation. You think in graphs of agent calls and how to make them not-fragile.', tag: 'Engineering · Remote' },
  { title: 'Distributed Systems Engineer (Graph)', body: 'Graph SDK, schema migration, real-time sync. The data layer every Space leans on.', tag: 'Engineering · Remote' },
  { title: 'Designer (Product)', body: 'Interaction-led, opinionated, allergic to bordered cards. Help us define what "AI-native UI" actually looks like.', tag: 'Design · Remote' },
  { title: 'Open application', body: 'Not on the list but you know what you would build for us. Send something specific.', tag: 'Any · Remote' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Careers</p>
        <h1 class="page-title hero-title">
          Build the OS <span class="accent">for the age of AI.</span>
        </h1>
        <p class="page-subtitle hero-sub">
          We are a small team making the operating system for AI-native software. The work
          is technical, the bar is high, and the product is shipped — not pitched. If that
          lines up with how you want to spend the next few years, talk to us.
        </p>
        <div class="hero-actions">
          <a href="mailto:work@lisaos.dev" class="btn btn-primary">work@lisaos.dev</a>
          <NuxtLink to="/about" class="btn btn-secondary">About Construct</NuxtLink>
        </div>
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">How we work</p>
        <h2 class="page-title">Four things <span class="accent">we hold to.</span></h2>
        <div class="grid-2">
          <article v-for="p in principles" :key="p.title" class="card">
            <h3>{{ p.title }}</h3>
            <p>{{ p.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="page-container">
        <p class="page-label">Open roles</p>
        <h2 class="page-title">Where we <span class="accent">need help.</span></h2>
        <p class="page-subtitle">Remote-first, async-leaning, paid market rate plus equity. Apply by sending something concrete — a project, a critique, a thing you want to build here.</p>

        <ol class="role-list">
          <li v-for="r in roles" :key="r.title" class="role">
            <div class="role__head">
              <h3>{{ r.title }}</h3>
              <span class="role__tag">{{ r.tag }}</span>
            </div>
            <p>{{ r.body }}</p>
            <a href="mailto:work@lisaos.dev" class="role__apply">Apply →</a>
          </li>
        </ol>

        <p class="role-foot">
          Cannot find your role? Email
          <a href="mailto:work@lisaos.dev" class="accent">work@lisaos.dev</a>
          with what you would build here.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.role-list {
  list-style: none;
  margin: 32px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.role {
  padding: 24px 26px;
  background: var(--app-card-bg);
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.18s ease;
}
.role:hover { box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07); }

.role__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}
.role__head h3 {
  font-size: 17px;
  font-weight: 500;
  margin: 0;
  color: var(--app-foreground);
}
.role__tag {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--app-muted);
}
.role p {
  font-size: 14px;
  font-weight: 300;
  color: var(--app-muted);
  line-height: 1.6;
  margin: 0 0 12px;
}
.role__apply {
  font-size: 13px;
  font-weight: 500;
  color: var(--app-accent-text, #e11d48);
  text-decoration: none;
}
.role__apply:hover { text-decoration: underline; }

.role-foot {
  margin-top: 28px;
  font-size: 13px;
  font-weight: 300;
  color: var(--app-muted);
}
.role-foot .accent { font-weight: 400; text-decoration: none; }
.role-foot .accent:hover { text-decoration: underline; }
</style>
