import { loadRelease, normalizePlatform, RELEASES_FALLBACK_URL } from '~~/server/utils/release'

/**
 * 302-redirects to the release asset matching the URL path platform
 * key. Works without JavaScript, survives GitHub API rate limits, and
 * never goes stale across releases because URLs are derived from
 * whatever version `latest.json` currently advertises.
 *
 * Path parameter `platform` accepts both "mac-arm" and "mac_arm"
 * styles (the old Go endpoint normalised both).
 *
 * Fallback chain:
 *   1. Snapshot loaded + key recognised   → 302 to asset URL
 *   2. Snapshot loaded + key unknown      → 302 to release page (same tag)
 *   3. Snapshot fetch failed (cache cold) → 302 to /releases/latest
 */
export default defineEventHandler(async (event) => {
  const key = normalizePlatform(getRouterParam(event, 'platform'))

  setResponseHeader(event, 'Cache-Control', 'public, max-age=300')

  try {
    const snap = await loadRelease()
    const url = snap.downloads[key]
    if (url) {
      return sendRedirect(event, url, 302)
    }
    // Unknown platform key — bounce to the release page so the user
    // can pick manually rather than 404ing them.
    return sendRedirect(event, snap.release_url, 302)
  } catch {
    return sendRedirect(event, RELEASES_FALLBACK_URL, 302)
  }
})
