<script setup lang="ts">
useSeoMeta({
  title: 'Support Space — Queues, replies, resolution',
  description: 'Triage incoming tickets, draft replies in your voice, and close the loop without leaving the queue.',
})

const features = [
  { title: 'A real queue', body: 'Sortable, filterable, ownable. Not a thread on top of a thread.' },
  { title: 'Replies that sound like you', body: "Operator drafts in your team's voice from the same playbook your seniors use. You approve and send." },
  { title: 'Knowledge that updates itself', body: 'Resolved tickets feed the playbook. The next case starts with what worked last time.' },
  { title: 'Escalation paths', body: "When a case crosses a threshold, Operator pages the right person — no separate alerting tool." },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Spaces → Support</p>
        <h1 class="page-title hero-title">Queue. Reply. <span class="accent">Resolve.</span></h1>
        <p class="page-subtitle hero-sub">
          Support is workflow, not chat. The Support Space gives the team a real queue, a
          real composer, and an Operator that drafts the reply you would have written.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/download" class="btn btn-primary">Download Free</NuxtLink>
          <NuxtLink to="/spaces" class="btn btn-secondary">All Spaces</NuxtLink>
        </div>
        <ShotPlaceholder
          name="space-support.png"
          alt="Support Space ticket queue with Operator drafting a reply"
          desc="Support Space — left rail with the ticket queue, main area showing one open ticket. Operator summoned over the composer, drafting a reply in the team's voice with the source playbook entry visible above the draft."
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">What's inside</p>
        <h2 class="page-title">For teams that <span class="accent">close tickets, not chat windows.</span></h2>
        <div class="grid-2">
          <article v-for="f in features" :key="f.title" class="card">
            <h3>{{ f.title }}</h3>
            <p>{{ f.body }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
