<script setup lang="ts">
// /spaces/meet — detail page for the built-in Meet Space. Copy is
// grounded in the real space.manifest.json (WebRTC P2P via Trystero,
// no server sees media, instant + scheduled rooms, mesh 2–4). Follows
// the sibling /spaces/* pattern: unique SEO copy, SoftwareApplication
// schema for rich results, screenshot slots, and an Install CTA.
useSeoMeta({
  title: 'Meet Space — peer-to-peer video meetings in Construct',
  description:
    'Meet is the built-in video Space for Construct: pure WebRTC peer-to-peer, so media flows directly between participants and no server sees it. Instant rooms, scheduled meetings, shareable invite links.',
  ogTitle: 'Meet — private, peer-to-peer video meetings',
  ogDescription:
    'WebRTC video built into Construct. No server in the media path. Instant rooms, scheduling, invite links — with the Operator in the room.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebPage({
    name: 'Meet — peer-to-peer video meetings in Construct',
    description:
      'A built-in Construct Space for private WebRTC video meetings. Media flows directly between participants; the Operator can schedule, summarise, and act on meetings.',
  }),
  defineSoftwareApp({
    name: 'Meet — Construct Space',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Construct (macOS, Windows, Linux)',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }),
])

const features = [
  { title: 'No server in the middle', body: 'Pure WebRTC peer-to-peer via Trystero signaling. Audio and video flow directly between participants — no media server to record, inspect, or leak the call.' },
  { title: 'Instant or scheduled', body: 'Spin up a room in one tap, or schedule a meeting ahead of time. Scheduled meetings ride the Construct scheduler, so reminders fire app-wide even with the Space closed.' },
  { title: 'Shareable invite links', body: 'Every room has a link. Send it to anyone — they join the same peer mesh. No accounts to provision for guests.' },
  { title: 'Mesh, tuned for small rooms', body: 'A full mesh topology built for focused calls — best for 2–4 participants where direct connections beat a relay.' },
  { title: 'The Operator is in the room', body: 'Meet ships actions — list, create, end, delete meetings — so the Operator can set up calls, recap what happened, and follow up across your other Spaces.' },
  { title: 'A meetings widget', body: 'Drop the Meetings widget on your home screen for upcoming and recent calls at a glance, from 1×1 up to 4×4.' },
]

const useCases = [
  { title: 'A quick face-to-face', body: 'Open Meet, start a room, paste the link in chat. The other person clicks and you are talking — no app install for them, no calendar dance.' },
  { title: 'Standing team sync', body: 'Schedule the weekly sync once. Construct reminds everyone app-wide and the room is waiting when it is time.' },
  { title: 'Private by default', body: 'A sensitive conversation where “the server has a copy” is a non-starter. Media never touches a server — it goes peer to peer.' },
  { title: 'Meeting → action', body: 'End the call and ask the Operator to recap decisions into a Boards card or a Support thread. The meeting becomes work, not a recording you never rewatch.' },
]

const specs = [
  { k: 'Transport', v: 'WebRTC, peer-to-peer' },
  { k: 'Signaling', v: 'Trystero' },
  { k: 'Topology', v: 'Full mesh · best at 2–4' },
  { k: 'Media path', v: 'Direct between peers — no server' },
  { k: 'Scope', v: 'Personal & org' },
  { k: 'Actions', v: 'list · create · end · delete' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Built in · Personal &amp; Org</p>
        <h1 class="page-title hero-title">Meet. <span class="accent">Peer to peer.</span></h1>
        <p class="page-subtitle hero-sub">
          Video meetings built into Construct, with no server in the media path. Calls flow
          straight between participants over WebRTC — instant rooms, scheduled meetings,
          shareable links, and the Operator right there in the room.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/download" class="btn btn-primary">Get Construct &amp; install Meet</NuxtLink>
          <NuxtLink to="/spaces" class="btn btn-secondary">Browse all Spaces</NuxtLink>
        </div>
        <p class="install-note">
          Meet ships in the Construct Space Store. Install Construct, open
          <strong>Spaces → Meet → Install</strong>, and it's on your home screen.
        </p>

        <ShotPlaceholder
          name="space-meet.png"
          alt="Meet Space — a peer-to-peer video call inside Construct"
          desc="The Meet Space in Construct. A video call in progress: 2–3 participant tiles, local self-view, call controls (mic, camera, share link, leave). Left rail shows the Spaces dock with the Meet icon active. Captured on the dark theme so the accent pops."
          caption="A call with no server in the middle."
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">What it does</p>
        <h2 class="page-title">Private calls. <span class="accent">Zero relay.</span></h2>
        <p class="page-subtitle">
          Most video tools route every frame through their servers. Meet doesn't — the
          connection is direct, so the people on the call are the only ones in it.
        </p>
        <div class="grid-3">
          <div v-for="f in features" :key="f.title" class="card">
            <h3>{{ f.title }}</h3>
            <p>{{ f.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="page-container">
        <p class="page-label">Where it fits</p>
        <h2 class="page-title">When you just need to <span class="accent">talk.</span></h2>
        <div class="grid-2">
          <div v-for="u in useCases" :key="u.title" class="card">
            <h3>{{ u.title }}</h3>
            <p>{{ u.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">At a glance</p>
        <h2 class="page-title">How Meet is <span class="accent">built.</span></h2>
        <div class="spec-grid">
          <div v-for="s in specs" :key="s.k" class="spec">
            <div class="spec__k">{{ s.k }}</div>
            <div class="spec__v">{{ s.v }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section" style="text-align: center">
      <div class="page-container">
        <h2 class="page-title">There's a Space for the call, too.</h2>
        <p class="page-subtitle" style="margin-left: auto; margin-right: auto">
          Free with Construct. Install it, share a link, and you're talking — privately.
        </p>
        <div class="hero-actions center" style="justify-content: center">
          <NuxtLink to="/download" class="btn btn-primary">Get Construct &amp; install Meet</NuxtLink>
          <NuxtLink to="/marketplace" class="btn btn-secondary">See the Space Store</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.install-note {
  font-size: 13px;
  font-weight: 300;
  color: var(--app-muted);
  margin-top: 16px;
  line-height: 1.6;
}
.install-note strong { color: var(--app-foreground); font-weight: 500; }

.spec-grid {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.spec {
  padding: 18px 20px;
  border-radius: 4px;
  background: var(--app-card-bg);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.spec__k {
  font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em;
  color: var(--app-muted); margin-bottom: 8px;
}
.spec__v { font-size: 15px; font-weight: 500; }

@media (max-width: 768px) { .spec-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .spec-grid { grid-template-columns: 1fr; } }
</style>
