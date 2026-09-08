<script setup lang="ts">
useSeoMeta({
  title: 'Changelog — What shipped',
  description:
    'Recent releases of Construct — the desktop app, Operator, the SDK, and the Space Store.',
})

// Hand-curated for now. Eventually pull from GitHub releases via a
// build-time fetch in nuxt.config.ts so the page stays current
// without manual edits.
const releases = [
  {
    version: '0.18.1',
    date: '2026-05-01',
    surface: 'Desktop',
    headline: 'Bug fixes',
    items: [
      'Fixes a sidebar focus loop when switching Spaces with the keyboard.',
      'Operator panel respects the hidden-by-default preference on cold start.',
      'Space Store install button no longer flickers when network is slow.',
    ],
  },
  {
    version: '0.18.0',
    date: '2026-04-22',
    surface: 'Desktop · Operator',
    headline: 'Shift Shift to summon',
    items: [
      'Operator now runs as a background process, summoned with Shift Shift.',
      'Specialist roster (Architect, Coder, Project, Reviewer) ships built-in.',
      'Space-scoped tools resolve from the active Space without manual scoping.',
    ],
  },
  {
    version: '0.17.0',
    date: '2026-04-08',
    surface: 'SDK · CLI',
    headline: 'Grasps API',
    items: [
      "New Grasps API — declare a Grasp in a Space's manifest, Operator activates it on context.",
      'Morpheus exposes a hook for auto-discovering and persisting Grasps across sessions.',
      'CLI `construct grasp add` scaffolds a Grasp in the current Space.',
    ],
  },
  {
    version: '0.16.2',
    date: '2026-03-31',
    surface: 'Space Store',
    headline: 'Private distribution',
    items: [
      'Spaces can now be published privately to an org without going through the public Space Store.',
      'Per-Space install allowlists for Enterprise customers.',
      'Faster manifest validation on publish.',
    ],
  },
  {
    version: '0.16.0',
    date: '2026-03-15',
    surface: 'Operator · Morpheus',
    headline: 'Autonomous mode (beta)',
    items: [
      'Morpheus ships in beta: Observe → Find → Fix loop, scoped per Space.',
      'Three autonomy policies: Observe, Local Execute, Execute & Commit.',
      'Verifier specialist runs before any task is reported as success.',
    ],
  },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Changelog</p>
        <h1 class="page-title hero-title">What <span class="accent">shipped.</span></h1>
        <p class="page-subtitle hero-sub">
          Releases of Construct — the desktop app, Operator, the SDK, and the Space Store.
          The most recent at the top.
        </p>
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <ol class="release-list">
          <li v-for="r in releases" :key="r.version" class="release">
            <div class="release__head">
              <div>
                <span class="release__version">{{ r.version }}</span>
                <span class="release__surface">{{ r.surface }}</span>
              </div>
              <time class="release__date">{{ r.date }}</time>
            </div>
            <h2 class="release__headline">{{ r.headline }}</h2>
            <ul class="release__items">
              <li v-for="item in r.items" :key="item">{{ item }}</li>
            </ul>
          </li>
        </ol>

        <p class="release-foot">
          Older releases are on
          <a href="https://github.com/construct-space/construct-app/releases" target="_blank" rel="noreferrer" class="accent">GitHub</a>.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.release-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.release {
  padding: 32px 28px;
  background: var(--app-card-bg);
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.release__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.release__version {
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  color: var(--app-accent-text, #e11d48);
  margin-right: 12px;
}

.release__surface {
  font-size: 11px;
  font-weight: 500;
  color: var(--app-muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.release__date {
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  font-size: 12px;
  color: var(--app-muted);
}

.release__headline {
  font-size: 22px;
  font-weight: 400;
  letter-spacing: -0.01em;
  margin: 0 0 12px;
  color: var(--app-foreground);
}

.release__items {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.release__items li {
  font-size: 14px;
  font-weight: 300;
  color: var(--app-muted);
  line-height: 1.6;
  padding-left: 18px;
  position: relative;
}

.release__items li::before {
  content: '';
  position: absolute;
  left: 0; top: 10px;
  width: 6px; height: 1px;
  background: var(--app-accent-text, #e11d48);
}

.release-foot {
  margin-top: 24px;
  font-size: 13px;
  font-weight: 300;
  color: var(--app-muted);
  text-align: center;
}
.release-foot .accent { font-weight: 400; text-decoration: none; }
.release-foot .accent:hover { text-decoration: underline; }
</style>
