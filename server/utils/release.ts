/**
 * Shared release-snapshot loader for the website's download endpoints.
 *
 * Source of truth is the GitHub Releases API for `construct-space/releases`.
 * Every user-facing asset (.dmg / .exe / .deb / .AppImage) is listed
 * there with a stable `browser_download_url`, so we just pick the right
 * one per platform key — no string-building, no version-in-filename
 * assumptions to break the day we tweak the build matrix.
 *
 * Why not `latest.json`? It only carries Tauri auto-updater payloads
 * (.app.tar.gz on macOS, NSIS .exe on Windows, no Linux entry). That's
 * what the desktop app reads to self-update; it isn't what humans
 * download.
 *
 * Used by:
 *   - server/api/release/latest.get.ts (public JSON endpoint)
 *   - server/api/download/[platform].ts (302 redirector)
 *
 * Caching is handled by `defineCachedFunction` (10 minute TTL) so the
 * download flow never hammers GitHub on a hot path.
 */

const RELEASES_API_URL = 'https://api.github.com/repos/construct-space/releases/releases/latest'

// Platform key (URL-friendly) → asset filename suffix. The suffix is
// matched against `asset.name.endsWith(...)` so a build-matrix rename
// (e.g. switching `x64-setup.exe` to a different tag) only needs
// updating in one place. Order doesn't matter — keys are unique per asset.
export const PLATFORM_ASSET_SUFFIX: Record<string, string> = {
  'mac-arm': 'aarch64.dmg',
  'mac-intel': 'x64.dmg',
  'win-exe': 'x64-setup.exe',
  'win-arm-exe': 'arm64-setup.exe',
  'linux-appimage': 'amd64.AppImage',
  'linux-deb': 'amd64.deb',
}

export interface ReleaseSnapshot {
  version: string
  notes: string
  pub_date: string
  release_url: string
  downloads: Record<string, string>
}

interface GithubReleaseAsset {
  name: string
  browser_download_url: string
}

interface GithubRelease {
  tag_name?: string
  name?: string
  body?: string
  published_at?: string
  html_url?: string
  assets?: GithubReleaseAsset[]
}

/**
 * Accept both "mac-arm" and "mac_arm" styles so callers don't have to
 * care which separator we picked when building links.
 */
export function normalizePlatform(p: string | undefined | null): string {
  return (p || '').toString().trim().toLowerCase().replace(/_/g, '-')
}

/**
 * Fetch the latest release manifest from GitHub and project the assets
 * into our `downloads` map. Throws on network/parse error; callers wrap
 * with cache + fallback.
 */
async function fetchSnapshot(): Promise<ReleaseSnapshot> {
  const res = await $fetch<GithubRelease>(RELEASES_API_URL, {
    timeout: 8000,
    responseType: 'json',
    headers: {
      // GitHub asks API consumers to identify themselves; without a
      // User-Agent the request is rejected with 403.
      'User-Agent': 'construct-website',
      Accept: 'application/vnd.github+json',
    },
  })

  const tag = res?.tag_name || ''
  const version = tag.replace(/^v/, '')
  if (!version) {
    throw new Error('release missing tag_name')
  }

  const downloads: Record<string, string> = {}
  for (const [key, suffix] of Object.entries(PLATFORM_ASSET_SUFFIX)) {
    const asset = res.assets?.find((a) => a.name.endsWith(suffix))
    if (asset) downloads[key] = asset.browser_download_url
  }

  return {
    version,
    notes: res.body || '',
    pub_date: res.published_at || '',
    release_url: res.html_url || `https://github.com/construct-space/releases/releases/tag/${tag}`,
    downloads,
  }
}

/**
 * Cached snapshot loader. Wraps `fetchSnapshot` with Nitro's built-in
 * filesystem/memory cache (10 minute TTL) so we don't hit GitHub on
 * every page view.
 *
 * The `swr: true` flag means stale entries can be served while a
 * refresh runs in the background — keeps users fast even when the
 * upstream is slow.
 */
export const loadRelease = defineCachedFunction(
  async (): Promise<ReleaseSnapshot> => fetchSnapshot(),
  {
    name: 'release-latest',
    maxAge: 600, // 10 minutes
    swr: true,
    getKey: () => 'singleton',
  },
)

export const RELEASES_FALLBACK_URL = 'https://github.com/construct-space/releases/releases/latest'
