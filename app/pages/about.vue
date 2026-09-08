<script setup lang="ts">
// /about — About *us* (the company): mission, vision, values, team.
// NOTE: the team grid uses visible placeholder tokens (.tbd) — swap in
// real people before publishing. We don't fabricate names/bios.
useSeoMeta({
  title: 'About us — the team building Construct',
  description:
    'We are a small team building Construct — the operating system for the age of AI. Our mission, our vision, and the people behind it.',
  ogTitle: 'About us — Construct',
  ogDescription: 'The team and the mission behind Construct: giving AI a place to do real work.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebPage({
    '@type': 'AboutPage',
    name: 'About us — Construct',
    description: 'The mission, vision, and team behind Construct, the operating system for the age of AI.',
  }),
])

const values = [
  { title: 'Own the stack', desc: "We train our own models instead of reselling someone else's API. Owning the intelligence is the only way to control behaviour, cost, and the roadmap." },
  { title: 'Your data is yours', desc: 'Local-first and sovereign. Your machine is the home; the cloud is a helper, not a landlord. No lock-in, no mining.' },
  { title: 'Apps, not chat boxes', desc: 'AI should act inside purpose-built software, not narrate from a sidebar. We build surfaces where the work actually happens.' },
  { title: 'Build in the open', desc: 'Open-source models, a public SDK, and a marketplace anyone can build and earn on. The platform grows because others can extend it.' },
  { title: 'Horizontal by design', desc: 'We started in code and outgrew it. Every team — sales, support, ops, healthcare, logistics — deserves software shaped to its work.' },
  { title: 'Ship real things', desc: 'Native speed, honest claims, working software. We would rather ship one thing that works than ten that demo.' },
]

// Placeholder team — replace with your real people before publishing.
const team = [
  { name: '[ Name ]', role: '[ Founder / CEO ]', blurb: '[ One line — what they do, what they did before. ]' },
  { name: '[ Name ]', role: '[ Co-founder / CTO ]', blurb: '[ One line. ]' },
  { name: '[ Name ]', role: '[ Role ]', blurb: '[ One line. ]' },
  { name: '[ Name ]', role: '[ Role ]', blurb: '[ One line. ]' },
]

function initials(name: string) {
  const clean = name.replace(/[[\]]/g, '').trim()
  if (!clean || clean === 'Name') return '?'
  return clean.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase()
}
</script>

<template>
  <div>
    <!-- Hero — the mission -->
    <section class="page-section" style="padding-top: 120px;">
      <div class="page-container">
        <p class="page-label">About us</p>
        <h1 class="page-title">We're giving AI a place to <span class="accent">do real work.</span></h1>
        <p class="page-subtitle hero-sub">
          We're a small team building <strong>Construct</strong> — the operating system for the
          age of AI. Not another chatbot: a home screen, a marketplace of installable apps, and
          an Operator that doesn't just answer, it works inside them.
        </p>
      </div>
    </section>

    <!-- Why we exist -->
    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">Why we exist</p>
        <h2 class="page-title">AI got capable. It's still <span class="accent">homeless.</span></h2>
        <p class="page-subtitle" style="max-width: 760px">
          Models can finally do real, multi-step work — but they have nowhere to live. No
          interface built for the job, no access to your data, no permissions, nowhere to run
          when the laptop closes. Meanwhile the work itself is scattered across a dozen
          disconnected tools. We started Construct to fix both at once: give AI a home, and give
          teams one place where there's a Space for whatever they do.
        </p>
        <blockquote class="about-quote">
          <p>"The future is not one assistant. It is an operating system full of AI-native apps."</p>
        </blockquote>
      </div>
    </section>

    <!-- Vision -->
    <section class="page-section">
      <div class="page-container">
        <p class="page-label">Where we're going</p>
        <h2 class="page-title">Every team runs on an <span class="accent">AI OS.</span></h2>
        <p class="page-subtitle" style="max-width: 760px">
          The smartphone made every task a matter of installing an app. We believe AI is at that
          exact moment — and the team that builds the home screen, the app store, and the
          intelligence underneath gets to define the era. Our bet: the intelligence should be
          <strong>owned</strong> (our own open models), the data should be <strong>yours</strong>
          (local-first), and the surface should be an <strong>app for the job</strong>, not a
          prompt box. Build that, and software stops being something you operate — it becomes
          something that operates for you.
        </p>
      </div>
    </section>

    <!-- Values -->
    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">What we believe</p>
        <h2 class="page-title">How we build.</h2>
        <div class="grid-3">
          <div v-for="v in values" :key="v.title" class="card">
            <h3>{{ v.title }}</h3>
            <p>{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="page-section">
      <div class="page-container">
        <p class="page-label">The team</p>
        <h2 class="page-title">A small, senior team — <span class="accent">building in the open.</span></h2>
        <p class="page-subtitle" style="max-width: 720px">
          We're a tight group of builders who would rather ship than talk. We design the product,
          train the models, and write the code — and we do it close to the people who use it.
        </p>

        <div class="edit-note">
          Placeholder — swap the cards below for your real team before publishing. We don't
          invent people.
        </div>

        <div class="team-grid">
          <div v-for="(m, i) in team" :key="i" class="team-card">
            <div class="team-avatar">{{ initials(m.name) }}</div>
            <div class="team-name"><span class="tbd">{{ m.name }}</span></div>
            <div class="team-role"><span class="tbd">{{ m.role }}</span></div>
            <p class="team-blurb">{{ m.blurb }}</p>
          </div>
        </div>

        <p class="page-subtitle" style="margin-top: 32px">
          We're hiring people who care about this.
          <NuxtLink to="/careers" class="accent">See open roles →</NuxtLink>
        </p>
      </div>
    </section>

    <!-- Name origin (company identity) -->
    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">Why "Construct"</p>
        <h2 class="page-title">A place to <span class="accent">load anything you need.</span></h2>
        <blockquote class="about-quote">
          <p>"The Construct is where we can load anything we need."</p>
          <cite>— Morpheus, 1999</cite>
        </blockquote>
        <p class="page-subtitle" style="max-width: 680px">
          That's the idea: a blank space that becomes whatever the moment calls for. Install a
          Space, and the OS loads the interface, the data, the tools, and the intelligence for
          that job.
        </p>
      </div>
    </section>

    <!-- Investors -->
    <section class="page-section">
      <div class="page-container">
        <p class="page-label">Investors</p>
        <h2 class="page-title">Want to back <span class="accent">the AI-era OS?</span></h2>
        <p class="page-subtitle">
          We're building the operating system for the age of AI — owned models, a marketplace,
          and the full stack already shipping. If that's a bet you want in on, let's talk.
        </p>
        <a href="mailto:vc@lisaos.dev" class="about-btn">vc@lisaos.dev</a>
      </div>
    </section>

    <!-- CTA -->
    <section class="page-section alt">
      <div class="page-container about-cta">
        <h2 class="page-title">Come build it <span class="accent">with us.</span></h2>
        <p class="page-subtitle" style="margin-left: auto; margin-right: auto">
          Use it, build a Space on it, or join the team making it.
        </p>
        <div class="about-cta-links">
          <NuxtLink to="/careers" class="about-btn">Join us</NuxtLink>
          <NuxtLink to="/download" class="about-btn about-btn-outline">Download Construct</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-quote {
  border-left: 3px solid var(--app-accent);
  padding: 18px 28px;
  font-size: 1.2rem;
  font-style: italic;
  color: var(--app-foreground);
  max-width: 640px;
  margin: 28px 0 8px;
  line-height: 1.5;
}
.about-quote cite {
  display: block;
  margin-top: 12px;
  font-size: 14px;
  font-style: normal;
  color: var(--app-muted);
}

.edit-note {
  margin: 24px 0 8px;
  padding: 10px 16px;
  font-size: 13px;
  color: var(--app-muted);
  background: color-mix(in srgb, var(--app-accent) 5%, var(--app-canvas-bg));
  border: 1px dashed color-mix(in srgb, var(--app-accent) 30%, var(--app-border));
  border-radius: 6px;
  line-height: 1.5;
}

.team-grid {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.team-card {
  padding: 24px 22px;
  border-radius: 6px;
  background: var(--app-card-bg);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  text-align: center;
}
.team-avatar {
  width: 64px; height: 64px; margin: 0 auto 14px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%;
  font-size: 20px; font-weight: 600; color: var(--app-accent-text, #e11d48);
  background: color-mix(in srgb, var(--app-accent) 12%, var(--app-card-bg));
}
.team-name { font-size: 15px; font-weight: 500; }
.team-role { font-size: 12px; margin-top: 6px; }
.team-blurb { font-size: 13px; color: var(--app-muted); line-height: 1.55; margin-top: 12px; }

.about-btn {
  display: inline-block;
  padding: 12px 28px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  background: var(--app-accent-text, #e11d48);
  color: #fff;
  transition: opacity 0.15s;
}
.about-btn:hover { opacity: 0.85; }
.about-btn-outline {
  background: transparent;
  border: 1px solid var(--app-border);
  color: var(--app-foreground);
}
.about-btn-outline:hover { border-color: var(--app-accent-text, #e11d48); color: var(--app-accent-text, #e11d48); opacity: 1; }

.about-cta { text-align: center; }
.about-cta-links { display: flex; gap: 12px; justify-content: center; margin-top: 8px; }

@media (max-width: 860px) { .team-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) {
  .about-cta-links { flex-direction: column; align-items: center; }
}
</style>
