<script setup lang="ts">
import { ref } from 'vue'

useSeoMeta({
  title: 'Pricing — Free to install, free to build',
  description: 'Construct is free for individuals — install any Space, build your own, bring your own model keys. Team and Enterprise add collaboration, SSO, and policies.',
  ogTitle: 'Pricing — Construct',
  ogDescription: 'Free to install Spaces and build your own. Team and Enterprise plans for organizations.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineProduct({
    name: 'Construct',
    description: 'AI-native desktop platform with modular Spaces.',
    offers: [
      {
        '@type': 'Offer',
        name: 'Personal',
        price: '0',
        priceCurrency: 'USD',
        description: 'Free for individuals — unlimited spaces, agents, and usage.',
      },
    ],
  }),
])

const plans = [
  {
    name: 'Personal',
    price: 'Free',
    period: '',
    description: 'Everything you need to build and create on your own.',
    cta: 'Download',
    ctaLink: '/download',
    ctaType: 'router',
    highlight: false,
    badge: '',
  },
  {
    name: 'Team',
    price: 'Soon',
    period: '',
    description: 'Real-time collaboration, shared spaces, and team management.',
    cta: 'Coming Soon',
    ctaLink: '',
    ctaType: 'disabled',
    highlight: true,
    badge: 'Coming Soon',
  },
  {
    name: 'Enterprise',
    price: 'Later',
    period: '',
    description: 'On-premise deployment, SSO, audit logs, and dedicated support.',
    cta: 'Contact Sales',
    ctaLink: 'mailto:neo@lisaos.dev',
    ctaType: 'external',
    highlight: false,
    badge: '',
  },
]

const features = [
  { name: 'Local AI Agents', personal: true, team: true, enterprise: true },
  { name: 'Spaces (unlimited)', personal: true, team: true, enterprise: true },
  { name: 'Git Integration', personal: true, team: true, enterprise: true },
  { name: 'Shell Access', personal: true, team: true, enterprise: true },
  { name: 'Theme Customization', personal: true, team: true, enterprise: true },
  { name: 'Space Store Access', personal: true, team: true, enterprise: true },
  { name: 'SDK & CLI', personal: true, team: true, enterprise: true },
  { name: 'Offline Mode', personal: true, team: true, enterprise: true },
  { name: 'Cloud Sync', personal: false, team: true, enterprise: true },
  { name: 'Real-time Collaboration', personal: false, team: true, enterprise: true },
  { name: 'Team Workspaces', personal: false, team: true, enterprise: true },
  { name: 'Shared Spaces', personal: false, team: true, enterprise: true },
  { name: 'SSO / SAML', personal: false, team: false, enterprise: true },
  { name: 'Audit Logs', personal: false, team: false, enterprise: true },
  { name: 'Dedicated Support', personal: false, team: false, enterprise: true },
]

const faqs = ref([
  { q: 'Is Construct really free?', a: 'Yes. The Personal plan is completely free with no limits on spaces, agents, or usage. Construct runs locally on your machine.', open: false },
  { q: 'What is a Space?', a: 'A Space is an installable surface — a real app inside Construct, with its own UI, memory, tools, and Operator. Open one for each workflow.', open: false },
  { q: 'Do I need an internet connection?', a: 'No. Construct works fully offline. Internet is only needed for cloud sync, Space Store access, and remote AI models.', open: false },
  { q: 'Can I publish my own spaces?', a: 'Yes. Use the Construct CLI to scaffold, build, and publish spaces to the Space Store. All developers can publish for free.', open: false },
  { q: 'When will the Team plan be available?', a: 'The Team plan is in active development. Join the waitlist on the Developer Portal to get notified when it launches.', open: false },
  { q: 'What platforms are supported?', a: 'Construct is available for macOS (Apple Silicon and Intel), Windows (x64), and Linux (AppImage and .deb).', open: false },
  { q: 'Is my data private?', a: 'Absolutely. All data stays on your machine. Construct does not collect telemetry or send data to external servers.', open: false },
  { q: 'Can I use my own AI models?', a: 'Yes. Construct supports local models and allows you to configure your own API keys for cloud-based models.', open: false },
  { q: 'How do I get support?', a: 'Community support is available through the Developer Portal. Enterprise customers get dedicated support with guaranteed response times.', open: false },
])

function toggleFaq(index: number) {
  const faq = faqs.value[index]
  if (faq) faq.open = !faq.open
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="page-section">
      <div class="page-container pricing-hero">
        <p class="page-label">Pricing</p>
        <h1 class="page-title">Free to install. <span class="accent">Free to build.</span></h1>
        <p class="page-subtitle">
          The OS and every Space are free for individuals — bring your own model keys, ship your own Spaces. Team and Enterprise plans add collaboration, SSO, and policies.
        </p>
      </div>
    </section>

    <!-- Plans -->
    <section class="page-section alt">
      <div class="page-container">
        <div class="plans-grid">
          <div
            v-for="plan in plans"
            :key="plan.name"
            class="card plan-card"
            :class="{ 'plan-highlight': plan.highlight }"
          >
            <span v-if="plan.badge" class="plan-badge">{{ plan.badge }}</span>
            <h3 class="plan-name">{{ plan.name }}</h3>
            <p class="plan-price">{{ plan.price }}</p>
            <p class="plan-desc">{{ plan.description }}</p>
            <NuxtLink
              v-if="plan.ctaType === 'router'"
              :to="plan.ctaLink"
              class="btn btn-primary plan-btn"
            >{{ plan.cta }}</NuxtLink>
            <a
              v-else-if="plan.ctaType === 'external'"
              :href="plan.ctaLink"
              class="btn btn-secondary plan-btn"
            >{{ plan.cta }}</a>
            <button
              v-else
              class="btn btn-disabled plan-btn"
              disabled
            >{{ plan.cta }}</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Comparison -->
    <section class="page-section">
      <div class="page-container">
        <p class="page-label">Comparison</p>
        <h2 class="page-title">Feature breakdown</h2>
        <div class="comparison-table-wrap">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Personal</th>
                <th>Team</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="f in features" :key="f.name">
                <td>{{ f.name }}</td>
                <td><span :class="f.personal ? 'check' : 'dash'">{{ f.personal ? '✓' : '—' }}</span></td>
                <td><span :class="f.team ? 'check' : 'dash'">{{ f.team ? '✓' : '—' }}</span></td>
                <td><span :class="f.enterprise ? 'check' : 'dash'">{{ f.enterprise ? '✓' : '—' }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">FAQ</p>
        <h2 class="page-title">Frequently asked questions</h2>
        <div class="faq-list">
          <div
            v-for="(item, i) in faqs"
            :key="i"
            class="faq-item"
            :class="{ open: item.open }"
            @click="toggleFaq(i)"
          >
            <div class="faq-question">
              <span>{{ item.q }}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="faq-chevron"><path d="M6 9l6 6 6-6"/></svg>
            </div>
            <div v-if="item.open" class="faq-answer">{{ item.a }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="page-section">
      <div class="page-container cta-block">
        <h2 class="page-title">Start building for free</h2>
        <p class="page-subtitle">
          Download Construct and start creating. No account required.
        </p>
        <NuxtLink to="/download" class="btn btn-primary">Download Construct</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.pricing-hero { text-align: center; }
.pricing-hero .page-subtitle { margin-left: auto; margin-right: auto; }

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.plan-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px 24px;
  position: relative;
}

.plan-highlight {
  border-color: var(--app-accent-text, #e11d48);
  box-shadow: 0 0 0 1px var(--app-accent);
}

.plan-badge {
  position: absolute;
  top: -10px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: var(--app-accent-text, #e11d48);
  color: #fff;
  padding: 3px 12px;
  border-radius: 20px;
}

.plan-name { font-size: 18px; font-weight: 600; margin-bottom: 8px; }
.plan-price { font-size: 36px; font-weight: 700; color: var(--app-accent-text, #e11d48); margin-bottom: 12px; }
.plan-desc { font-size: 14px; color: var(--app-muted); margin-bottom: 24px; line-height: 1.5; flex: 1; }

.plan-btn { width: 100%; justify-content: center; }

.btn {
  display: inline-flex;
  align-items: center;
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.15s;
  cursor: pointer;
  border: none;
  font-family: inherit;
}

.btn-primary { background: var(--app-accent-text, #e11d48); color: #fff; }
.btn-primary:hover { opacity: 0.9; }

.btn-secondary {
  background: var(--app-card-bg);
  color: var(--app-foreground);
  border: 1px solid var(--app-border);
}
.btn-secondary:hover { border-color: var(--app-accent-text, #e11d48); }

.btn-disabled {
  background: var(--app-card-bg);
  color: var(--app-muted);
  border: 1px solid var(--app-border);
  cursor: not-allowed;
  opacity: 0.7;
}

/* Comparison Table */
.comparison-table-wrap { overflow-x: auto; margin-top: 24px; }

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.comparison-table th,
.comparison-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid var(--app-border);
}

.comparison-table th {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--app-muted);
}

.comparison-table td:not(:first-child) { text-align: center; }
.comparison-table th:not(:first-child) { text-align: center; }

.check { color: var(--app-accent-text, #e11d48); font-weight: 600; }
.dash { color: var(--app-muted); }

/* FAQ */
.faq-list { max-width: 700px; display: flex; flex-direction: column; gap: 0; }

.faq-item {
  border-bottom: 1px solid var(--app-border);
  cursor: pointer;
  padding: 16px 0;
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 500;
}

.faq-chevron { transition: transform 0.2s; flex-shrink: 0; margin-left: 12px; }
.faq-item.open .faq-chevron { transform: rotate(180deg); }

.faq-answer {
  font-size: 14px;
  color: var(--app-muted);
  line-height: 1.6;
  margin-top: 10px;
  padding-right: 28px;
}

.cta-block { text-align: center; }
.cta-block .page-subtitle { margin-left: auto; margin-right: auto; }

@media (max-width: 768px) {
  .plans-grid { grid-template-columns: 1fr; }
}
</style>
