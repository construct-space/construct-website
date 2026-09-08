<script setup lang="ts">
useSeoMeta({
  title: 'Ask — Multi-model conversation in Construct',
  description:
    'Type a question, get a real answer. Multi-model, multi-turn, with the right context already loaded. The conversational surface for exploration, refinement, and ideas.',
  ogTitle: 'Ask — Multi-model conversation',
  ogDescription:
    'A conversational Space for exploring ideas, refining prompts, and comparing models — with persistent context and branching threads.',
})

useSchemaOrg([
  defineWebPage({
    name: 'Ask — Multi-model conversation in Construct',
    description: 'A built-in Construct Space for open-ended exploration. Multi-model, multi-turn, persistent context, branching threads.',
  }),
])

const features = [
  { title: 'Multi-model side-by-side', body: 'Compare Claude, GPT, Gemini, local — same prompt, different answers, in one view. Pick the model that fits the question, not the vendor.' },
  { title: 'Threads that branch', body: 'Fork a thread to try a different angle without losing the original. Walk back, walk forward, keep both alive.' },
  { title: 'Context you control', body: 'Pin files, open records, web pages. Operator only sees what you attach — explicit, not implicit.' },
  { title: 'Persists, on purpose', body: 'Threads survive sessions. Come back tomorrow, the conversation is where you left it. Revisit, refine, build on.' },
  { title: 'Operator alongside', body: 'Inside Ask, the Operator can still act — run a tool, draft a doc, fetch a fact — without leaving the thread.' },
  { title: 'Export to anywhere', body: 'A thread becomes a doc, a runbook, a Grasp, a draft email. Whatever the right next step is.' },
]

const useCases = [
  { title: 'Refine a vague brief', body: '"Help me think through the rollout for X." Multi-turn, multi-angle, until the plan exists.' },
  { title: 'Compare model behavior', body: 'Same question, three models, side by side. Pick the one whose reasoning you trust for this kind of task.' },
  { title: 'Research, then act', body: 'Read, fetch, summarize, attach sources. When the answer is good enough, hand off to a Space that can run with it.' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Built in · Personal</p>
        <h1 class="page-title hero-title">Ask. <span class="accent">Get a real answer.</span></h1>
        <p class="page-subtitle hero-sub">
          Type a question. Get a real answer. Multi-model, multi-turn, with the right
          context already loaded — and threads that persist, branch, and remember.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/download" class="btn btn-primary">Download Free</NuxtLink>
          <NuxtLink to="/operator" class="btn btn-secondary">Meet the Operator</NuxtLink>
        </div>

        <ShotPlaceholder
          name="space-ask.png"
          alt="Ask Space — multi-model conversation thread"
          desc="The Ask Space inside Construct. Center pane: a conversation thread with multiple turns, attached file pills above the input. Right pane: model picker (Claude, GPT, Gemini, Local) with a side-by-side comparison toggle. Left rail: list of threads (named, pinned, archived). The compass icon in the header."
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">What it does</p>
        <h2 class="page-title">Conversation, <span class="accent">treated like work.</span></h2>
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
        <h2 class="page-title">Three ways teams <span class="accent">actually use it.</span></h2>
        <div class="grid-3">
          <article v-for="u in useCases" :key="u.title" class="card">
            <h3>{{ u.title }}</h3>
            <p>{{ u.body }}</p>
          </article>
        </div>
        <div class="hero-actions" style="margin-top: 28px">
          <NuxtLink to="/spaces" class="btn btn-secondary">← All built-in Spaces</NuxtLink>
          <NuxtLink to="/spaces/assistant" class="btn btn-secondary">See Assistant</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
