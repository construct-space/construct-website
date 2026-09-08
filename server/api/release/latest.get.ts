import { loadRelease } from '~~/server/utils/release'

/**
 * Public JSON endpoint matching the old Go `/api/release/latest` shape:
 *   { version, notes, pub_date, release_url, downloads: { 'mac-arm': '...', ... } }
 *
 * Cached on the server for 10 minutes via `defineCachedFunction` (see
 * server/utils/release.ts), and capped at 5 minutes of browser cache so
 * a new release propagates within ~5 minutes of the upstream refresh.
 *
 * On upstream failure we 502 with `{ error, detail }` rather than
 * crashing — the consumer (the Download page version badge) treats a
 * missing badge as non-fatal.
 */
export default defineEventHandler(async (event) => {
  try {
    const snap = await loadRelease()

    setResponseHeader(event, 'Cache-Control', 'public, max-age=300')

    return {
      version: snap.version,
      notes: snap.notes,
      pub_date: snap.pub_date,
      release_url: snap.release_url,
      downloads: snap.downloads,
    }
  } catch (err) {
    setResponseStatus(event, 502)
    return {
      error: 'release metadata unavailable',
      detail: err instanceof Error ? err.message : String(err),
    }
  }
})
