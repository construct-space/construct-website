<script setup lang="ts">
// Visual slot for a screenshot or short clip. Tries to load the asset
// from /public/shots/<name>; if it isn't there yet, shows a styled
// "Screenshot needed" placeholder describing what should be captured
// so the page is meaningful while assets are still being produced.
//
// Auto-detects video clips by file extension (.webm, .mp4, .mov) —
// renders <video> with autoplay/muted/loop attributes for in-page
// motion. Same placeholder fallback either way.
//
// Usage:
//   <ShotPlaceholder
//     name="summon-operator.webm"     // .webm → renders as silent looping video
//     desc="Shift Shift summons the Operator panel; it runs three tools and returns a result."
//     caption="Summoned with Shift Shift."
//     hero
//   />
import { computed, ref, onMounted } from 'vue'

const props = defineProps<{
  /** Filename inside /public/shots/. Required. */
  name: string
  /** Image alt text for accessibility. */
  alt?: string
  /** What the asset should show. Rendered inside the placeholder. */
  desc: string
  /** Caption shown beneath the asset once it loads. Optional. */
  caption?: string
  /** Larger top margin + spacing for hero placement. */
  hero?: boolean
  /** Intrinsic pixel dimensions — reserves the box so there's no layout
   *  shift, and satisfies the "explicit width/height" audit. Default 16:10. */
  width?: number
  height?: number
}>()

const failed = ref(false)
const loaded = ref(false)
const mediaEl = ref<HTMLImageElement | HTMLVideoElement | null>(null)

// Original asset path — used as-is for videos and as the PNG fallback.
const assetSrc = computed(() => `/shots/${props.name}`)

// Prefer WebP for raster images (≈85% smaller). On error, retry the
// original PNG once, then fall through to the placeholder card.
const isPng = computed(() => props.name.toLowerCase().endsWith('.png'))
const imgSrc = ref(
  props.name.toLowerCase().endsWith('.png')
    ? `/shots/${props.name}`.replace(/\.png$/i, '.webp')
    : `/shots/${props.name}`,
)
function onImgError() {
  if (isPng.value && imgSrc.value !== assetSrc.value) {
    imgSrc.value = assetSrc.value // WebP missing — try the original PNG.
  } else {
    failed.value = true
  }
}

// File-extension detection. Anything matching the video set renders
// as a silent looping <video>; everything else is treated as <img>.
const VIDEO_EXTS = ['.webm', '.mp4', '.mov']
const isVideo = computed(() => {
  const lower = props.name.toLowerCase()
  return VIDEO_EXTS.some((ext) => lower.endsWith(ext))
})

// Hydration race: the browser may have finished loading the asset
// before Vue attached its @load listener — in which case the event
// never fires. Check the relevant `complete` / `readyState` flag on
// mount and seed the state from there.
onMounted(() => {
  const el = mediaEl.value
  if (!el) return

  if (el instanceof HTMLImageElement) {
    if (el.complete) {
      if (el.naturalHeight > 0) loaded.value = true
      else failed.value = true
    }
    return
  }

  // <video>: readyState >= 1 (HAVE_METADATA) means it resolved at
  // least the first frame; networkState 3 (NO_SOURCE) means it 404'd.
  if (el instanceof HTMLVideoElement) {
    if (el.networkState === 3 /* NETWORK_NO_SOURCE */) {
      failed.value = true
    } else if (el.readyState >= 1) {
      loaded.value = true
    }
  }
})
</script>

<template>
  <figure :class="['shot-slot', hero && 'shot-slot--hero']">
    <!-- Static image variant. -->
    <!-- Hero images render visible in the SSR HTML (no `loaded` gate) so
         they're LCP-eligible and don't wait for hydration. Non-hero
         shots keep the placeholder-until-loaded behaviour, which avoids
         a broken-icon flash on pages whose screenshot isn't in yet. -->
    <img
      v-if="!isVideo"
      ref="mediaEl"
      v-show="hero ? !failed : (loaded && !failed)"
      :src="imgSrc"
      :alt="alt || desc"
      :width="width || 1600"
      :height="height || 1000"
      :loading="hero ? 'eager' : 'lazy'"
      :fetchpriority="hero ? 'high' : undefined"
      decoding="async"
      @load="loaded = true; failed = false"
      @error="onImgError"
    />

    <!-- Video variant — autoplay muted loop, no controls. The poster
         attribute is intentionally left off so a missing clip falls
         straight through to the placeholder card instead of showing
         a black frame. -->
    <video
      v-else
      ref="mediaEl"
      v-show="loaded && !failed"
      :src="assetSrc"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      :aria-label="alt || desc"
      @loadeddata="loaded = true; failed = false"
      @error="failed = true"
    />

    <!-- Placeholder: for hero shots only on real failure (so an existing
         hero image isn't hidden behind it); otherwise until it loads. -->
    <div v-if="hero ? failed : (!loaded || failed)" class="shot-placeholder">
      <div class="shot-placeholder__badge">
        <!-- Icon swaps between camera (image) and play-circle (clip)
             so the badge tells you which kind is expected. -->
        <svg v-if="!isVideo" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
        <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
        </svg>
        {{ isVideo ? 'Clip needed' : 'Screenshot needed' }}
      </div>
      <p class="shot-placeholder__desc">{{ desc }}</p>
      <code class="shot-placeholder__path">/shots/{{ name }}</code>
    </div>

    <figcaption v-if="caption && loaded && !failed">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.shot-slot {
  margin: 24px auto 0;
  text-align: center;
}
.shot-slot--hero { margin-top: 40px; }

.shot-slot img,
.shot-slot video {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
  filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.18))
          drop-shadow(0 8px 18px rgba(0, 0, 0, 0.10));
}

.shot-slot figcaption {
  margin-top: 16px;
  font-size: 12px;
  color: var(--app-muted);
}

/* Placeholder card */
.shot-placeholder {
  border: 2px dashed color-mix(in srgb, var(--app-accent) 35%, var(--app-border));
  border-radius: 2px;
  padding: 48px 32px;
  background: color-mix(in srgb, var(--app-accent) 4%, var(--app-canvas-bg));
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
  max-width: 720px;
  margin: 0 auto;
}

.shot-placeholder__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 999px;
  background: var(--app-accent-text, #e11d48);
  color: #fff;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.shot-placeholder__desc {
  font-size: 14px;
  color: var(--app-foreground);
  line-height: 1.6;
  font-weight: 300;
  margin: 0;
}

.shot-placeholder__path {
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  font-size: 12px;
  color: var(--app-muted);
  background: var(--app-card-bg);
  padding: 4px 10px;
  border-radius: 2px;
}
</style>
