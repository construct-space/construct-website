/**
 * The old Go server hosted an OAuth proxy under `/api/auth/*` that
 * brokered logins through accounts.lisaos.dev and handed the
 * website a session cookie. That flow is retired — auth lives at
 * my.lisaos.dev now and the website is fully unauthenticated.
 *
 * Rather than 404 these paths (which would surface as broken-link
 * errors in any cached HTML or third-party referrer), we redirect them
 * to the unified login. /api/auth/callback specifically is the OAuth
 * return URL, so any in-flight handshake from the old flow gets a
 * useful destination instead of a hard error.
 */
export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  if (url.pathname.startsWith('/api/auth/')) {
    return sendRedirect(event, 'https://my.lisaos.dev/login', 302)
  }
})
