<script setup lang="ts">
// "How everything connects" diagram for the ecosystem page.
//
// Four surfaces across the top (Desktop, Web, Mobile, TV) all funnel
// into a single shared spine: Shared APIs → Operator mesh → Graph →
// Identity. The dotted connectors carry arrowheads at both ends to show
// the link is bidirectional — what each surface reads and writes lands
// in the same place.
//
// Pure inline SVG so it inherits the live theme (accent + tokens) and
// scales to any width with no asset to ship. Decorative: the prose and
// the card grids carry the real information, so it's aria-hidden.

// Surface cards — centres pre-computed for a 1000-wide viewBox so the
// four columns sit symmetric with equal gutters.
const surfaces = [
  { cx: 146, label: 'Desktop', sub: 'Tauri', target: 250 },
  { cx: 382, label: 'Web', sub: 'my.lisaos.dev', target: 382 },
  { cx: 618, label: 'Mobile', sub: 'iOS · Android', target: 618 },
  { cx: 854, label: 'TV', sub: 'Android TV', target: 750 },
]

// The spine, top to bottom. The top layer is highlighted because it's
// where the surfaces physically connect; identity is the foundation.
const layers = [
  { y: 236, name: 'Shared APIs', sub: 'inference · source · developer · marketplace', top: true },
  { y: 322, name: 'Operator mesh', sub: 'Conductor · desktop / cloud executors · space-runtime' },
  { y: 408, name: 'Graph', sub: 'graph.lisaos.dev — user + org from your token' },
  { y: 494, name: 'Identity', sub: 'accounts — one sign-in, every surface' },
]
</script>

<template>
  <figure class="eco-diagram">
    <svg viewBox="0 0 1000 600" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <defs>
        <marker id="eco-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M1 1 L9 5 L1 9" fill="none" stroke="var(--app-accent)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </marker>
      </defs>

      <!-- Connectors: surface -> top of spine, bidirectional. -->
      <g class="connectors">
        <line
          v-for="s in surfaces"
          :key="s.label"
          :x1="s.cx" y1="132"
          :x2="s.target" y2="236"
          marker-start="url(#eco-arrow)"
          marker-end="url(#eco-arrow)"
        />
      </g>

      <!-- Surface cards. -->
      <g v-for="s in surfaces" :key="s.label" class="surface">
        <rect :x="s.cx - 90" y="36" width="180" height="96" rx="12" />

        <!-- Per-surface glyph, drawn centred above the label. -->
        <g :transform="`translate(${s.cx - 11}, 52)`" class="glyph">
          <template v-if="s.label === 'Desktop'">
            <rect x="1" y="1" width="20" height="13" rx="1.5" />
            <path d="M-1 18 H23" />
          </template>
          <template v-else-if="s.label === 'Web'">
            <rect x="1" y="2" width="20" height="16" rx="2" />
            <path d="M1 7 H21" />
            <circle cx="4.5" cy="4.5" r="0.6" />
          </template>
          <template v-else-if="s.label === 'Mobile'">
            <rect x="5" y="1" width="12" height="20" rx="2.5" />
            <path d="M9.5 17.5 H12.5" />
          </template>
          <template v-else>
            <rect x="0" y="2" width="22" height="14" rx="2" />
            <path d="M7 20 H15" />
            <path d="M11 16 V20" />
          </template>
        </g>

        <text :x="s.cx" y="100" class="t-name" text-anchor="middle">{{ s.label }}</text>
        <text :x="s.cx" y="118" class="t-sub" text-anchor="middle">{{ s.sub }}</text>
      </g>

      <!-- Spine label. -->
      <text x="500" y="216" class="t-eyebrow" text-anchor="middle">ONE SHARED SPINE</text>

      <!-- Spine layers. -->
      <g v-for="l in layers" :key="l.name" class="layer" :class="{ top: l.top }">
        <rect x="220" :y="l.y" width="560" height="72" rx="10" />
        <text x="248" :y="l.y + 31" class="t-layer">{{ l.name }}</text>
        <text x="248" :y="l.y + 51" class="t-sub">{{ l.sub }}</text>
      </g>

      <!-- Vertical link down the spine, both directions. -->
      <line x1="500" y1="308" x2="500" y2="322" class="spine-link" marker-start="url(#eco-arrow)" marker-end="url(#eco-arrow)" />
      <line x1="500" y1="394" x2="500" y2="408" class="spine-link" marker-start="url(#eco-arrow)" marker-end="url(#eco-arrow)" />
      <line x1="500" y1="480" x2="500" y2="494" class="spine-link" marker-start="url(#eco-arrow)" marker-end="url(#eco-arrow)" />
    </svg>
    <figcaption>Four surfaces, one spine. Sync is the architecture, not a feature.</figcaption>
  </figure>
</template>

<style scoped>
.eco-diagram {
  margin: 40px auto 0;
  max-width: 880px;
  text-align: center;
}

.eco-diagram svg {
  display: block;
  width: 100%;
  height: auto;
  font-family: 'Rubik', system-ui, sans-serif;
}

.eco-diagram figcaption {
  margin-top: 16px;
  font-size: 12px;
  color: var(--app-muted);
}

/* Surface cards */
.surface rect {
  fill: var(--app-card-bg);
  stroke: var(--app-border);
  stroke-width: 1;
}
.glyph rect,
.glyph path,
.glyph circle {
  fill: none;
  stroke: var(--app-accent-text, #e11d48);
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Spine layers */
.layer rect {
  fill: var(--app-card-bg);
  stroke: var(--app-border);
  stroke-width: 1;
}
.layer.top rect {
  fill: color-mix(in srgb, var(--app-accent) 8%, var(--app-card-bg));
  stroke: color-mix(in srgb, var(--app-accent) 45%, var(--app-border));
}

/* Connectors */
.connectors line,
.spine-link {
  stroke: var(--app-accent);
  stroke-width: 1.4;
  stroke-dasharray: 2 5;
  stroke-linecap: round;
  opacity: 0.7;
}

/* Text */
.t-name { font-size: 15px; font-weight: 600; fill: var(--app-foreground); }
.t-layer { font-size: 16px; font-weight: 600; fill: var(--app-foreground); }
.t-sub { font-size: 11px; fill: var(--app-muted); }
.t-eyebrow {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.16em;
  fill: var(--app-accent-text, #e11d48);
}

@media (max-width: 560px) {
  .t-sub { font-size: 13px; }
  .t-name, .t-layer { font-size: 18px; }
  .t-eyebrow { font-size: 12px; }
}
</style>
