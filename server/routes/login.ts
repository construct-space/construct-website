/**
 * Auth lives at my.lisaos.dev now (per the unified-frontend
 * architecture). The old `/login` URL stays alive purely so any
 * external links (sidebar nav, marketing pages, third-party blog
 * posts) don't 404 — we 302 to the new auth surface instead.
 *
 * No `.get` suffix on the filename so HEAD also returns the redirect
 * (link checkers and crawlers commonly probe with HEAD).
 */
export default defineEventHandler((event) => {
  return sendRedirect(event, 'https://my.lisaos.dev/login', 302)
})
