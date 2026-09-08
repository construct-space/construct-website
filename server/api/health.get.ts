/**
 * Liveness probe. Mirrors the old `/api/health` from the Go server so
 * any monitoring (CapRover, uptime checks) keeps working unchanged.
 */
export default defineEventHandler(() => ({
  ok: true,
  time: new Date().toISOString(),
}))
