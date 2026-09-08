<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

useSeoMeta({
  title: 'Download — Construct for macOS, Windows, Linux',
  description: 'Free download of Construct for macOS (Apple Silicon, Intel), Windows (x64, ARM64), and Linux (AppImage, Debian). The AI-native desktop platform with modular Spaces.',
  ogTitle: 'Download Construct',
  ogDescription: 'Free desktop app for macOS, Windows, and Linux. AI-native, modular, and built for every industry.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineSoftwareApp({
    name: 'Construct',
    operatingSystem: 'macOS, Windows, Linux',
    applicationCategory: 'DeveloperApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'AI-native desktop platform with modular Spaces. Design, code, manage projects, and build intelligent tools for any industry.',
  }),
])

// Downloads route through our own backend: /api/download/:platform 302s
// to the release asset matching the user's choice. The backend reads
// the same latest.json the desktop auto-updater consumes, so web + app
// always reference the same release. See server/utils/release.ts.
//
// Two wins over calling api.github.com directly:
//   1. Links work before hydration — no race between the click and the
//      fetch that would otherwise still be in flight.
//   2. No 60-request/hour unauth rate limit on the API.

const platform = ref('macOS')

const platformLabel = computed(() => {
  if (platform.value === 'macOS') return 'macOS'
  if (platform.value === 'Windows') return 'Windows'
  return 'Linux'
})

// Each download points at a platform key our backend knows. The href is
// static so the link is usable even if JS never runs (Googlebot,
// no-script users, and the split-second before hydration completes).
const platforms = [
  {
    id: 'macOS',
    name: 'macOS',
    icon: 'M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.81-1.33.04-2.34-1.32-3.18-2.55C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11',
    downloads: [
      { label: 'Apple Silicon (.dmg)', key: 'mac-arm' },
      { label: 'Intel (.dmg)', key: 'mac-intel' },
    ],
  },
  {
    id: 'Windows',
    name: 'Windows',
    icon: 'M3 5.548l7.066-.966v6.835H3V5.548zm0 12.904l7.066.966v-6.835H3v5.869zM11.235 4.43L21 3v8.417h-9.765V4.43zm0 15.14L21 21v-8.417h-9.765v6.987z',
    downloads: [
      { label: 'x64 Installer (.exe)', key: 'win-exe' },
      { label: 'ARM64 Installer (.exe)', key: 'win-arm-exe' },
    ],
  },
  {
    id: 'Linux',
    name: 'Linux',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c1.85 0 3.55.63 4.9 1.69L12 10.59 7.1 5.69A7.957 7.957 0 0112 4zM5.69 7.1L10.59 12 5.69 16.9A7.957 7.957 0 014 12c0-1.85.63-3.55 1.69-4.9zM12 20c-1.85 0-3.55-.63-4.9-1.69L12 13.41l4.9 4.9A7.957 7.957 0 0112 20zm6.31-3.1L13.41 12l4.9-4.9A7.957 7.957 0 0120 12c0 1.85-.63 3.55-1.69 4.9z',
    downloads: [
      { label: 'AppImage', key: 'linux-appimage' },
      { label: 'Debian (.deb)', key: 'linux-deb' },
    ],
  },
]

function detectPlatform() {
  if (typeof navigator === 'undefined') return 'macOS'
  const ua = navigator.userAgent.toLowerCase()
  if (ua.includes('mac') || ua.includes('darwin')) return 'macOS'
  if (ua.includes('win')) return 'Windows'
  if (ua.includes('linux')) return 'Linux'
  return 'macOS'
}

function getDownloadUrl(key: string) {
  return `/api/download/${key}`
}

// Version + release URL come from our backend cache of latest.json.
// `useFetch` runs at request time during prerender (returns the cache
// hit on the dev server), so no additional client-side fetch needed.
// Purely cosmetic — the download links already work without this.
type ReleaseResponse = {
  version?: string
  release_url?: string
  notes?: string
  pub_date?: string
  downloads?: Record<string, string>
}

const { data: release } = await useFetch<ReleaseResponse>('/api/release/latest', {
  // Don't fail the build/page if the upstream is down — show no badge.
  default: () => ({}),
  // Avoid exploding prerender on 502; the badge is non-critical.
  server: false,
})

const latestVersion = computed(() => (release.value?.version ? `v${release.value.version}` : ''))

onMounted(() => {
  platform.value = detectPlatform()
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="page-section">
      <div class="page-container download-hero">
        <p class="page-label">Download</p>
        <h1 class="page-title">
          Download Construct for <span class="accent">{{ platformLabel }}</span>
        </h1>
        <p class="page-subtitle">
          Install the OS. Open the Spaces you need. Free to download, free to build, available for macOS, Windows, and Linux.
        </p>
        <p v-if="latestVersion" class="version-tag">Latest: {{ latestVersion }}</p>
      </div>
    </section>

    <!-- Platform Cards -->
    <section class="page-section alt">
      <div class="page-container">
        <div class="platform-grid">
          <div
            v-for="p in platforms"
            :key="p.id"
            class="card platform-card"
            :class="{ 'platform-active': p.id === platform }"
          >
            <div class="platform-header">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path :d="p.icon" />
              </svg>
              <h3 class="platform-name">{{ p.name }}</h3>
            </div>
            <div class="platform-downloads">
              <a
                v-for="dl in p.downloads"
                :key="dl.label"
                :href="getDownloadUrl(dl.key)"
                class="download-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>{{ dl.label }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.download-hero { text-align: center; }
.download-hero .page-subtitle { margin-left: auto; margin-right: auto; }

.version-tag {
  font-size: 13px;
  color: var(--app-muted);
  background: var(--app-card-bg);
  border: 1px solid var(--app-border);
  display: inline-block;
  padding: 4px 14px;
  border-radius: 20px;
}

.platform-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.platform-card { padding: 28px; }

.platform-active {
  border-color: var(--app-accent-text, #e11d48);
  box-shadow: 0 0 0 1px var(--app-accent);
}

.platform-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  color: var(--app-foreground);
}

.platform-name { font-size: 18px; font-weight: 600; }

.platform-downloads { display: flex; flex-direction: column; gap: 10px; }

.download-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 8px;
  background: color-mix(in srgb, var(--app-accent) 8%, var(--app-card-bg));
  border: 1px solid var(--app-border);
  color: var(--app-foreground);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.15s;
}

.download-btn:hover {
  border-color: var(--app-accent-text, #e11d48);
  background: color-mix(in srgb, var(--app-accent) 15%, var(--app-card-bg));
}

@media (max-width: 768px) {
  .platform-grid { grid-template-columns: 1fr; }
}
</style>
