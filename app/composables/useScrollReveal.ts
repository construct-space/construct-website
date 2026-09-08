import { onMounted, onUnmounted } from 'vue'

/**
 * Adds a `.revealed` class to every `.reveal` element when it scrolls
 * into view. Pages opt in by importing this composable in their setup
 * and decorating elements with `class="reveal"` (and optional
 * `from-left` / `from-right` modifiers for direction).
 *
 * SSR-safe: IntersectionObserver is only created on `onMounted`, which
 * never runs during prerender.
 */
export function useScrollReveal() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observer?.observe(el)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
