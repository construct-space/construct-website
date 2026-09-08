<script setup lang="ts">
useSeoMeta({
  title: 'Morpheus — The autonomous mode behind Operator',
  description:
    "Morpheus is Operator's autonomous mode: it reacts to sessions, completions, failures, and schedules within the limits you set, and is growing toward scoring agents and rewriting weak prompts so the system improves over time.",
  ogTitle: 'Morpheus — Autonomous mode for Operator',
  ogDescription:
    'Observe → Find → Fix. The autonomous loop that keeps the Operator improving across sessions.',
})

const loop = [
  { phase: 'Observe', body: 'Watches live sessions for struggle signals — project turns, recent tool errors, wake reasons, project changes. The work surfaces before it stalls out.' },
  { phase: 'Find', body: 'Scores dynamic specialists over time. Tells you when an agent is reliable, when it is learning, and when a better one should be created.' },
  { phase: 'Fix', body: 'Auto-discovers Grasps, spawns specialists for failing tools, verifies output before reporting success, and rewrites weak prompts so the next run is sharper.' },
]

const triggers = [
  { name: 'Task completion', body: 'A run finishes — Morpheus decides whether to verify, ship, or queue what comes next.' },
  { name: 'Tool failure', body: 'An action errors out — Morpheus catches it, retries with a different model or specialist, and reports back.' },
  { name: 'Schedules', body: 'Cron-style or one-shot. The Space wakes itself at a fixed time to run a brief, a sweep, or a sync.' },
  { name: 'Your messages', body: 'You write a line. Morpheus picks it up, decides if it can act, and either runs or asks a clarifying question.' },
]

const policies = [
  { name: 'Observe', body: 'Watch only. Useful for shadowing a workflow before granting execute rights.' },
  { name: 'Local Execute', body: 'Run actions inside the Space. No outbound writes to other systems without approval.' },
  { name: 'Execute & Commit', body: 'Full autonomy within declared boundaries — write to the Graph, ship the change, close the loop.' },
]

const guarantees = [
  { title: 'Verification before success', body: 'Morpheus does not call a task done until a Reviewer specialist confirms the result. No silent failures dressed up as wins.' },
  { title: 'Specialists persist', body: 'Agents that work survive the session. The next run starts with what already proved itself, not from zero.' },
  { title: 'Prompt rewrites are scored', body: 'A rewritten prompt has to beat the old one on real tasks before it replaces it. No regressions, just measured improvement.' },
  { title: 'Bounded by your policies', body: 'Morpheus runs inside the autonomy ceiling you set per Space. It cannot quietly upgrade itself.' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Operator → Morpheus</p>
        <h1 class="page-title hero-title">
          Observe in real time. <br>
          Find weak agents. <span class="accent">Fix the system.</span>
        </h1>
        <p class="page-subtitle hero-sub">
          Morpheus is the autonomous mode behind Operator. It reacts to completions,
          failures, schedules, and your messages, and runs within the autonomy ceiling
          you set per Space. The autonomy controls and event-driven wake-ups ship today;
          the self-improving loop — scoring agents, verifying work, and rewriting weak
          prompts — is in active beta.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/download" class="btn btn-primary">Get the beta</NuxtLink>
          <NuxtLink to="/operator/control" class="btn btn-secondary">See autonomy controls</NuxtLink>
        </div>

        <!-- This one really wants motion — the whole point is the
             loop running. Rename to .webm for a clip, or keep as a
             static dashboard shot if motion isn't available. -->
        <ShotPlaceholder
          name="morpheus-loop.png"
          alt="Morpheus autonomous loop visualization"
          desc="Ideally a 6-8s loop showing the cycle: Observe (counters tick: turns, errors) → Find (an agent's score updates, marked 'learning') → Fix (specialist created, verification passes, prompt revised). Each phase highlights as it runs, then loops. Static fallback: three-column dashboard with the same Observe / Find / Fix panels at rest."
          caption="Observe → Find → Fix. The loop runs while you do other work."
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">The Loop</p>
        <h2 class="page-title">Three phases. <span class="accent">One feedback cycle.</span></h2>
        <p class="page-subtitle">
          Morpheus is not a separate AI. It is what Operator does when nobody is typing —
          watching, evaluating, and improving the agents that run inside your Spaces.
        </p>
        <div class="grid-3">
          <article v-for="step in loop" :key="step.phase" class="card morpheus-step">
            <div class="morpheus-step__phase">{{ step.phase }}</div>
            <p>{{ step.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="page-container">
        <p class="page-label">Wake events</p>
        <h2 class="page-title">Four ways Morpheus <span class="accent">comes alive.</span></h2>
        <p class="page-subtitle">It does not need a prompt to act. It reacts to events the system already produces.</p>
        <div class="grid-2">
          <article v-for="t in triggers" :key="t.name" class="card">
            <h3>{{ t.name }}</h3>
            <p>{{ t.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">Policies</p>
        <h2 class="page-title">Three levels of <span class="accent">autonomy.</span></h2>
        <p class="page-subtitle">Pick per Space. Tighten when you don't trust it yet, loosen when it earns it.</p>
        <div class="grid-3">
          <article v-for="p in policies" :key="p.name" class="card">
            <h3>{{ p.name }}</h3>
            <p>{{ p.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="page-container">
        <p class="page-label">Guarantees</p>
        <h2 class="page-title">What Morpheus <span class="accent">won't do.</span></h2>
        <p class="page-subtitle">Autonomy without trust is theatre. These are the floor Morpheus runs on top of.</p>
        <div class="grid-2">
          <article v-for="g in guarantees" :key="g.title" class="card">
            <h3>{{ g.title }}</h3>
            <p>{{ g.body }}</p>
          </article>
        </div>

        <div class="hero-actions" style="margin-top: 28px">
          <NuxtLink to="/operator" class="btn btn-secondary">← Back to Operator</NuxtLink>
          <NuxtLink to="/operator/control" class="btn btn-secondary">See controls</NuxtLink>
          <NuxtLink to="/operator/agents" class="btn btn-secondary">See specialists</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.morpheus-step__phase {
  display: inline-block;
  padding: 4px 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--app-accent-text, #e11d48);
  background: color-mix(in srgb, var(--app-accent) 10%, transparent);
}
</style>
