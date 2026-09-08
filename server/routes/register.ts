/**
 * Auth lives at my.lisaos.dev now. See server/routes/login.ts.
 */
export default defineEventHandler((event) => {
  return sendRedirect(event, 'https://my.lisaos.dev/register', 302)
})
