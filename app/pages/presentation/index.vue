<script setup lang="ts">
// /presentation — hub for the three decks. Leads with the canonical
// one-liner so the page itself answers "what is Construct" before
// routing you to the right deck.
import { useScrollReveal } from '~/composables/useScrollReveal'

useScrollReveal()

useSeoMeta({
  title: 'Construct — Presentations',
  description:
    'Construct is the operating system for the age of AI. Decks for investors, developers, and the team.',
  robots: 'noindex, follow',
})

const decks = [
  {
    to: '/presentation/invest',
    tag: 'Investors',
    title: 'Why Construct wins the category',
    desc: 'The shift from chatbots to an AI OS, the business model, and the four moats that compound. Owned models, Space Store network effects, data gravity.',
    cta: 'Open investor brief',
  },
  {
    to: '/presentation/dev',
    tag: 'Developers',
    title: 'Build a Space, get an AI app',
    desc: 'A Space is a small Vue plugin — publishing it gives you an Operator, the Graph, auth, billing, and distribution for free. SDK, CLI, and the real code shapes.',
    cta: 'Open developer deck',
  },
  {
    to: '/presentation/construct',
    tag: 'The team',
    title: 'What Construct is — same page',
    desc: 'The canonical definition: three layers, the vocabulary, the architecture, and the elevator pitch in three sizes. So nobody pitches it two different ways.',
    cta: 'Open team brief',
  },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Presentations</p>
        <h1 class="page-title hero-title">
          One product.<br /><span class="accent">Three ways to tell it.</span>
        </h1>
        <p class="page-subtitle hero-sub">
          Construct is the operating system for the age of AI — you install Spaces (apps for any
          kind of work) and an Operator runs them for you. Pick the deck for your audience.
        </p>
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <div class="deck-grid">
          <NuxtLink v-for="d in decks" :key="d.to" :to="d.to" class="deck-card reveal">
            <span class="deck-card__tag">{{ d.tag }}</span>
            <h3 class="deck-card__title">{{ d.title }}</h3>
            <p class="deck-card__desc">{{ d.desc }}</p>
            <span class="deck-card__cta">{{ d.cta }}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.deck-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.deck-card {
  display: flex;
  flex-direction: column;
  padding: 30px 28px;
  border-radius: 6px;
  background: var(--app-card-bg);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.18s ease, transform 0.18s ease;
}
.deck-card:hover { box-shadow: 0 8px 24px rgba(0, 0, 0, 0.10); transform: translateY(-2px); }
.deck-card__tag {
  font-size: 11px; font-weight: 500; text-transform: uppercase;
  letter-spacing: 0.16em; color: var(--app-accent-text, #e11d48); margin-bottom: 16px;
}
.deck-card__title { font-size: 19px; font-weight: 500; line-height: 1.25; margin-bottom: 12px; }
.deck-card__desc { font-size: 14px; color: var(--app-muted); line-height: 1.62; flex: 1; }
.deck-card__cta {
  display: inline-flex; align-items: center; gap: 8px;
  margin-top: 22px; font-size: 14px; font-weight: 500; color: var(--app-accent-text, #e11d48);
}

@media (max-width: 860px) {
  .deck-grid { grid-template-columns: 1fr; }
}
</style>
