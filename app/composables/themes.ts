export const themes = [
  { id: 'light', name: 'Light', mode: 'light', bg: '#ffffff', fg: '#1e293b', muted: '#64748b', accent: '#FF2D55', accentFg: '#ffffff' },
  { id: 'dark', name: 'Dark', mode: 'dark', bg: '#1a1a2e', fg: '#e5e5e5', muted: '#6b7280', accent: '#FF2D55', accentFg: '#ffffff' },
  { id: 'github-dark', name: 'GitHub Dark', mode: 'dark', bg: '#0d1117', fg: '#c9d1d9', muted: '#8b949e', accent: '#58a6ff', accentFg: '#000000' },
  { id: 'dracula', name: 'Dracula', mode: 'dark', bg: '#282a36', fg: '#f8f8f2', muted: '#6272a4', accent: '#bd93f9', accentFg: '#000000' },
  { id: 'nord', name: 'Nord', mode: 'dark', bg: '#2e3440', fg: '#d8dee9', muted: '#616e88', accent: '#88c0d0', accentFg: '#000000' },
  { id: 'tokyo-night', name: 'Tokyo Night', mode: 'dark', bg: '#1a1b26', fg: '#c0caf5', muted: '#565f89', accent: '#7aa2f7', accentFg: '#ffffff' },
  { id: 'monokai', name: 'Monokai', mode: 'dark', bg: '#272822', fg: '#f8f8f2', muted: '#75715e', accent: '#f92672', accentFg: '#ffffff' },
  { id: 'synthwave', name: "Synthwave '84", mode: 'dark', bg: '#262335', fg: '#ffffff', muted: '#848bbd', accent: '#ff7edb', accentFg: '#000000' },
]

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  return [parseInt(h.substring(0, 2), 16), parseInt(h.substring(2, 4), 16), parseInt(h.substring(4, 6), 16)]
}

function mix(r1: number, g1: number, b1: number, r2: number, g2: number, b2: number, t: number) {
  const m = (a: number, b: number) => Math.round(a + (b - a) * t)
  return '#' + [m(r1, r2), m(g1, g2), m(b1, b2)].map(v => v.toString(16).padStart(2, '0')).join('')
}

function off(r: number, g: number, b: number, n: number) {
  const c = (v: number) => Math.max(0, Math.min(255, v + n))
  return '#' + [c(r), c(g), c(b)].map(v => v.toString(16).padStart(2, '0')).join('')
}

export function applyTheme(theme: typeof themes[number]) {
  if (typeof document === 'undefined') return
  const s = document.documentElement.style
  const isDark = theme.mode === 'dark'
  const [r, g, b] = hexToRgb(theme.bg)
  const [ar, ag, ab] = hexToRgb(theme.accent)

  s.setProperty('--app-background', theme.bg)
  s.setProperty('--app-foreground', theme.fg)
  s.setProperty('--app-muted', theme.muted)
  s.setProperty('--app-accent', theme.accent)
  // Accent used as *text*. The bright brand accent (#FF2D55) only hits
  // 3.65:1 on white — fails WCAG AA for small text. On the light theme we
  // use a slightly deeper accent (4.7:1) for text; the bright one stays
  // for fills/buttons. On dark themes the bright accent already passes.
  s.setProperty('--app-accent-text', isDark ? theme.accent : '#e11d48')
  s.setProperty('--app-accent-foreground', theme.accentFg)
  s.setProperty('--app-border', isDark ? off(r, g, b, 30) : mix(r, g, b, ar, ag, ab, 0.12))
  s.setProperty('--app-canvas-bg', isDark ? off(r, g, b, -8) : mix(r, g, b, ar, ag, ab, 0.03))
  s.setProperty('--app-card-bg', isDark ? off(r, g, b, 16) : '#ffffff')
  s.setProperty('--app-card-hover', isDark ? off(r, g, b, 24) : mix(r, g, b, ar, ag, ab, 0.06))
  s.setProperty('--app-input-bg', isDark ? off(r, g, b, 24) : mix(r, g, b, ar, ag, ab, 0.04))
  document.documentElement.classList.toggle('dark', isDark)
}

export function loadSavedTheme() {
  try {
    const saved = localStorage.getItem('construct-website-theme')
    const theme = themes.find(t => t.id === saved) || themes[0]!
    applyTheme(theme)
    return theme
  } catch {
    return themes[0]!
  }
}

export function saveTheme(theme: typeof themes[number]) {
  try { localStorage.setItem('construct-website-theme', theme.id) } catch {}
  applyTheme(theme)
}
