<script setup lang="ts">
useSeoMeta({
  title: 'Spaces — Open one. Get to work.',
  description:
    "There's a Space for sales, support, ops, routes, revenue, code, notes — and the messy thing your team does that no SaaS got right. Install one, open it, and let the Operator inside.",
  ogTitle: 'Spaces — There\'s a Space for that',
  ogDescription:
    "Install a Space for every workflow. Each one has its own interface, memory, tools, and Operator.",
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebPage({
    name: 'Spaces — There\'s a Space for that',
    description:
      "Construct Spaces are AI-native, installable surfaces — one per workflow, with their own interface, memory, tools, and Operator.",
  }),
])

const featured = [
  { id: 'transport', name: 'Transport', tagline: 'Routes, dispatch, fleet', summary: 'Plan routes, assign drivers, and let the Operator catch failures the moment they happen.', to: '/spaces/transport' },
  { id: 'support', name: 'Support', tagline: 'Queues, replies, resolution', summary: 'Triage incoming tickets, draft replies in your voice, and close the loop without leaving the queue.', to: '/spaces/support' },
  { id: 'revenue', name: 'Revenue', tagline: 'Pipeline, deals, motion', summary: 'A pipeline that updates itself, with the Operator suggesting next steps on every card.', to: '/spaces/revenue' },
  { id: 'operations', name: 'Operations', tagline: 'Runbooks, schedules, follow-up', summary: 'The day-to-day of running a team — checked, scheduled, and chased without a separate app.', to: '/spaces/operations' },
]


// Built-in Spaces, sourced from construct-app/frontend/spaces/.
// Two tiers: personal (always available) and org (visible when the
// active account is part of a company). Anything beyond these comes
// from the Space Store.
//
// The Space is named "Ask" everywhere — name, slug, folder. The
// `aichat` working name is retired.
// Each Space can optionally carry an `icon` — a single-path or
// multi-path SVG `d` (paths joined with '|') rendered at 20px.
// Falls back to the first letter of the name if `icon` is omitted.
// Path data follows Lucide's stroke style; viewbox is 24×24.
// Names + descriptions sourced from each Space's own manifest.json
// in construct-app/frontend/spaces/. Icons match Lucide names from
// the manifests, transcribed as raw SVG path data so we don't need a
// runtime icon library on the marketing site.
const builtInPersonal = [
  {
    // Assistant has no manifest — it's the Operator hand-off shell.
    // Brain-circuit icon to match the sidebar nav glyph.
    name: 'Assistant',
    slug: 'assistant',
    tag: 'The Operator surface. Summon with Shift Shift — already scoped to whatever you are doing.',
    icon: 'M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z|M9 13a4.5 4.5 0 0 0 3-4|M6.003 5.125A3 3 0 0 0 6.401 6.5|M3.477 10.896a4 4 0 0 1 .585-.396|M6 18a4 4 0 0 1-1.967-.516|M12 13h4|M12 18h6a2 2 0 0 1 2 2v1|M12 8h8|M16 8V5a2 2 0 0 1 2-2',
  },
  {
    // Manifest icon: lucide:compass (used by the in-Space Quick Chat
    // widget). Matches the "curiosity, not question mark" pick.
    name: 'Ask',
    slug: 'ask',
    tag: 'Explore ideas, get real answers. Multi-model, multi-turn, with the right context already loaded.',
    icon: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z|m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12Z',
  },
  {
    // Manifest icon: lucide:video. Peer-to-peer WebRTC meetings.
    name: 'Meet',
    slug: 'meet',
    tag: 'Peer-to-peer video meetings — no server in the media path. Instant rooms, scheduling, invite links.',
    icon: 'm22 8-6 4 6 4V8Z|M2 6h14v12H2z',
  },
  {
    // Manifest icon: lucide:code
    name: 'Editor',
    slug: 'editor',
    tag: 'Code editor with Monaco, terminal, and AI completions.',
    icon: 'M16 18l6-6-6-6|M8 6l-6 6 6 6',
  },
  {
    // Manifest icon: lucide:terminal-square. Hosts Claude Code,
    // Codex, OpenCode, or any TUI app — direct inside Construct,
    // sharing identity, files, and the active project.
    name: 'TUI',
    slug: 'tui',
    tag: 'Run Claude Code, Codex, OpenCode, or any TUI tool — direct inside Construct, sharing identity, files, and the active project.',
    icon: 'M4 17l6-6-6-6|M12 19h8|M3 3h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z',
  },
  {
    // Manifest icon: lucide:folder-open
    name: 'Project',
    slug: 'project',
    tag: 'Project-aware agent that knows your codebase, tools, and context.',
    icon: 'm6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2',
  },
  {
    // Manifest icon: lucide:hammer.
    // Builder = everything *outside* Construct: landing pages,
    // websites, mobile apps, games, scripts. Generic coding agent.
    name: 'Builder',
    slug: 'builder',
    tag: 'Build anything outside Construct — landing pages, websites, mobile apps, games. Plans, codes, ships.',
    icon: 'm15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9|M17.64 15 22 10.64|M20.91 11.7a2.81 2.81 0 0 0 0-3.96l-.7-.7a1 1 0 0 0-1.4 0L9 17l3 3 8.91-8.3Z',
  },
  {
    // Manifest icon: lucide:boxes — fits the "kit of building blocks"
    // feel of the SpaceKit name.
    // The Space for building Spaces. Counterpart to Builder (which
    // builds everything outside Construct).
    name: 'SpaceKit',
    slug: 'space-developer',
    tag: 'Build Spaces inside Construct. Plans, codes, previews, and ships — same autonomous loop as Builder, specialized for Spaces.',
    icon: 'M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z|m7 16.5-4.74-2.85|m7 16.5 5-3|M7 16.5v5.17|M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z|m17 16.5-5-3|m17 16.5 4.74-2.85|M17 16.5v5.17|M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z|M12 8 7.26 5.15|m12 8 4.74-2.85|M12 13.5V8',
  },
]

const builtInOrg = [
  {
    // Manifest icon: lucide:building-2
    name: 'Org',
    slug: 'org',
    tag: 'Manage your organization — members, departments, teams, roles, and invitations.',
    icon: 'M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z|M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2|M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2|M10 6h4|M10 10h4|M10 14h4|M10 18h4',
  },
  {
    // Manifest icon: lucide:folder-kanban
    name: 'Org Project',
    slug: 'org-project',
    tag: 'Org-wide project management — track, clone, and coordinate shared projects.',
    icon: 'M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z|M8 10v4|M12 10v2|M16 10v6',
  },
]

const everySpaceGets = [
  { title: 'Its own interface', body: 'A real UI for the job — boards, queues, dashboards, editors. Whatever the work needs.' },
  { title: 'Its own Operator', body: 'An AI that knows this Space, its data, its actions. Not a generic chatbot dropped on top.' },
  { title: 'Its own memory', body: 'Decisions, files, recent state, preferences — kept inside the Space, carried turn to turn.' },
  { title: 'Shared identity & files', body: 'Sign in once, access lives at the system level. Spaces inherit from the OS, not the other way around.' },
  { title: 'Permissions you control', body: 'Read-only, run-tools, auto-execute — Spaces declare what they need, you decide what to grant.' },
  { title: 'Distribution, three ways', body: 'Public on the Space Store, private to your org, or scoped to a single project. Same SDK either way.' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Spaces</p>
        <h1 class="page-title hero-title">
          Open one. <span class="accent">Get to work.</span>
        </h1>
        <p class="page-subtitle hero-sub">
          Sales has its own. Support has its own. Routes, revenue, code, notes, the messy
          thing nobody built software for — each gets its own. Browse what's installed,
          add what isn't, and switch between them like rooms in a house.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/download" class="btn btn-primary">Download Free</NuxtLink>
          <NuxtLink to="/marketplace" class="btn btn-secondary">Browse Space Store</NuxtLink>
        </div>

        <ShotPlaceholder
          name="spaces-launcher.png"
          alt="Construct Spaces Space Store and launcher grid"
          desc="The Spaces Space Store inside Construct. Category sidebar (Productivity, Business, Finance, etc.), grid of Space cards with icon, name, version, short description, and an Install button per card. Mix of installed and not-yet-installed Spaces."
          caption="Browse, install, and switch between Spaces from one launcher."
          hero
        />
      </div>
    </section>

    <!-- Anatomy of a Space. Exploded-view diagram of host chrome,
         subspaces rail, toolbar, and content surface. Shows what a
         Space actually *is* without saying "Spaces are apps." -->
    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">Anatomy</p>
        <h2 class="page-title">What a Space is <span class="accent">made of.</span></h2>
        <p class="page-subtitle">Four layers — the host chrome you sign in to, the subspaces rail, the toolbar, and the content surface. Every Space is a stack of these, tuned to its workflow.</p>

        <ShotPlaceholder
          name="anatomy-of-a-space.png"
          alt="Exploded isometric diagram showing the four layers of a Space"
          desc="Exploded isometric diagram of a Space, top to bottom: space content (boards / cards), space toolbar (Create board action), space subspaces (rail of Space icons), host chrome (window controls + sidebar). Labeled callouts with thin dotted lines connecting each layer to its name. Light cream background, accent-red highlights."
          caption="Top to bottom: content, toolbar, subspaces, host chrome."
          hero
        />

        <div class="anatomy-legend">
          <div class="anatomy-legend__item">
            <strong>Host chrome</strong>
            <span>The window the OS gives every Space — sign-in, sidebar, theme, account.</span>
          </div>
          <div class="anatomy-legend__item">
            <strong>Subspaces</strong>
            <span>Rail of focused views inside the Space — boards, queues, settings, automations.</span>
          </div>
          <div class="anatomy-legend__item">
            <strong>Toolbar</strong>
            <span>The actions that belong to the open subspace. Create, run, approve.</span>
          </div>
          <div class="anatomy-legend__item">
            <strong>Content</strong>
            <span>The actual work surface. Boards, queues, dashboards, editors — whatever the workflow needs.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Built-in. The Spaces that ship with the OS install. Two
         tiers: personal (always available) and org (appears when the
         active account is part of a company). Space Store is
         everything beyond these. -->
    <section class="page-section">
      <div class="page-container">
        <p class="page-label">Built in</p>
        <h2 class="page-title">Open Construct, <span class="accent">these are already there.</span></h2>
        <p class="page-subtitle">The Spaces that ship with the OS — the equivalent of what comes in the box. Anything beyond these comes from the Space Store.</p>

        <p class="builtin-tier">For everyone</p>
        <ul class="builtin-grid">
          <li v-for="b in builtInPersonal" :key="b.slug">
            <NuxtLink :to="`/spaces/${b.slug === 'space-developer' ? 'spacekit' : b.slug}`" class="builtin-tile">
              <div class="builtin-tile__icon">
                <svg v-if="b.icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path v-for="(d, i) in b.icon.split('|')" :key="i" :d="d" />
                </svg>
                <span v-else>{{ b.name.charAt(0) }}</span>
              </div>
              <div>
                <strong>{{ b.name }}</strong>
                <span>{{ b.tag }}</span>
              </div>
            </NuxtLink>
          </li>
        </ul>

        <p class="builtin-tier">When you are in an org</p>
        <ul class="builtin-grid">
          <li v-for="b in builtInOrg" :key="b.slug">
            <NuxtLink :to="`/spaces/${b.slug}`" class="builtin-tile">
              <div class="builtin-tile__icon">
                <svg v-if="b.icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path v-for="(d, i) in b.icon.split('|')" :key="i" :d="d" />
                </svg>
                <span v-else>{{ b.name.charAt(0) }}</span>
              </div>
              <div>
                <strong>{{ b.name }}</strong>
                <span>{{ b.tag }}</span>
              </div>
            </NuxtLink>
          </li>
        </ul>

        <p class="builtin-foot">
          Everything else comes from <NuxtLink to="/marketplace" class="accent">the Space Store</NuxtLink>.
        </p>
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">Underneath</p>
        <h2 class="page-title">Every Space inherits <span class="accent">from the system.</span></h2>
        <p class="page-subtitle">Identity, memory, models, tools, permissions — handled once at the OS level. Spaces compose against them instead of reinventing them.</p>
        <div class="grid-3">
          <article v-for="item in everySpaceGets" :key="item.title" class="card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="page-container">
        <p class="page-label">Featured</p>
        <h2 class="page-title">A few of the rooms <span class="accent">already built.</span></h2>
        <p class="page-subtitle">Real, opinionated surfaces — not blank canvases pretending to be flexibility. Take any of these as-is, fork it, or use it as a template.</p>
        <div class="grid-2">
          <NuxtLink v-for="s in featured" :key="s.id" :to="s.to" class="card space-feature">
            <div class="space-feature__icon">{{ s.name.charAt(0) }}</div>
            <div>
              <span class="space-feature__tag">{{ s.tagline }}</span>
              <h3>{{ s.name }}</h3>
              <p>{{ s.summary }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Closing CTA — the catalog itself lives on the Space Store, so
         this page points there instead of re-listing categories. -->
    <section class="page-section alt" style="text-align: center">
      <div class="page-container">
        <p class="page-label">More Spaces</p>
        <h2 class="page-title">The built-ins are the start. <span class="accent">The Space Store is the rest.</span></h2>
        <p class="page-subtitle" style="margin-left: auto; margin-right: auto">
          Browse everything published — productivity, finance, ops, games, and more — install in a
          click, or build the one nobody made yet.
        </p>
        <div class="hero-actions center" style="justify-content: center">
          <NuxtLink to="/marketplace" class="btn btn-primary">Browse the Space Store</NuxtLink>
          <NuxtLink to="/sdk" class="btn btn-secondary">Build a Space</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.space-feature { display: flex; gap: 18px; align-items: flex-start; text-decoration: none; color: inherit; }
.space-feature__icon {
  width: 44px; height: 44px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 10px;
  background: color-mix(in srgb, var(--app-accent) 12%, transparent);
  color: var(--app-accent-text, #e11d48);
  font-weight: 700;
  flex-shrink: 0;
}
.space-feature__tag {
  font-size: 11px; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.15em;
  color: var(--app-muted);
}
.space-feature h3 { margin: 4px 0 6px; }
/* Anatomy callouts shown beneath the exploded-view diagram. The
   diagram itself already has visual labels; this gives the exact
   prose the visual implies. */
.anatomy-legend {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 32px;
}
.anatomy-legend__item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px 16px;
  border-radius: 10px;
  background: var(--app-card-bg);
  border: 1px solid var(--app-border);
}
.anatomy-legend__item strong {
  font-size: 13px;
  color: var(--app-accent-text, #e11d48);
  font-weight: 600;
}
.anatomy-legend__item span {
  font-size: 12px;
  color: var(--app-muted);
  line-height: 1.5;
}
@media (max-width: 768px) {
  .anatomy-legend { grid-template-columns: 1fr; }
}

/* Built-in Spaces grid. Soft tinted tiles in a 4-column grid; each
   shows a one-letter mark + name + one-line tag. No borders. */
.builtin-grid {
  list-style: none;
  margin: 32px 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
}
.builtin-tile {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 22px 22px;
  background: var(--app-card-bg);
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.18s ease;
  text-decoration: none;
  color: inherit;
}
.builtin-tile:hover { box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07); }
.builtin-grid li { list-style: none; }
.builtin-tile__icon {
  width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  border-radius: 8px;
  background: color-mix(in srgb, var(--app-accent) 12%, transparent);
  color: var(--app-accent-text, #e11d48);
  font-size: 14px;
  font-weight: 500;
}
.builtin-tile strong {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--app-foreground);
  margin-bottom: 2px;
}
.builtin-tile span {
  display: block;
  font-size: 12px;
  font-weight: 300;
  color: var(--app-muted);
  line-height: 1.5;
}
/* Tier label sits above each grid (Personal / Org). Subtle so it
   reads as a divider, not a competing headline. */
.builtin-tier {
  margin: 32px 0 12px;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--app-muted);
}
.builtin-tier:first-of-type { margin-top: 24px; }

.builtin-foot {
  margin-top: 20px;
  font-size: 13px;
  font-weight: 300;
  color: var(--app-muted);
}
.builtin-foot .accent { font-weight: 400; text-decoration: none; }
.builtin-foot .accent:hover { text-decoration: underline; }
@media (max-width: 1000px) {
  .builtin-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .builtin-grid { grid-template-columns: 1fr; }
}

.idea-pill-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
.pill {
  padding: 8px 16px; border-radius: 100px;
  font-size: 13px; font-weight: 500;
  border: 1px solid color-mix(in srgb, var(--app-accent) 30%, var(--app-border));
  background: color-mix(in srgb, var(--app-accent) 8%, transparent);
  color: var(--app-accent-text, #e11d48);
}
</style>
