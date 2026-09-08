// Load Google Analytics (gtag) lazily — after the page is interactive —
// so it never blocks hydration or inflates Total Blocking Time. The tag
// fires on the first of: browser idle, or the first real user
// interaction. That's plenty for pageview analytics on a static site,
// and it keeps ~140 KB of third-party JS off the critical path.
export default defineNuxtPlugin(() => {
  const GA_ID = 'G-L58T4Y9BQL'
  let started = false

  function load() {
    if (started) return
    started = true

    const w = window as unknown as { dataLayer: unknown[]; gtag: (...a: unknown[]) => void }
    w.dataLayer = w.dataLayer || []
    // Match Google's snippet exactly (pushes the `arguments` object).
    // The rest param is for the type-checker only — the body still
    // forwards the live `arguments` object the way Google's snippet does.
    function gtag(..._args: unknown[]) {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer.push(arguments)
    }
    w.gtag = gtag as unknown as (...a: unknown[]) => void
    gtag('js', new Date())
    gtag('config', GA_ID)

    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(s)

    interactionEvents.forEach((e) => window.removeEventListener(e, load))
  }

  const interactionEvents = ['scroll', 'pointerdown', 'keydown'] as const
  interactionEvents.forEach((e) =>
    window.addEventListener(e, load, { once: true, passive: true }),
  )

  if ('requestIdleCallback' in window) {
    ;(window as unknown as { requestIdleCallback: (cb: () => void, o?: { timeout: number }) => void })
      .requestIdleCallback(load, { timeout: 5000 })
  } else {
    setTimeout(load, 3000)
  }
})
