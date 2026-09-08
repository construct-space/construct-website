# Website screenshots — what's needed & where to capture each

The site renders every screenshot through `<ShotPlaceholder name="…">`, which
loads `/public/shots/<name>` and shows a styled "screenshot needed" card until
the file exists. This doc lists every referenced shot, whether we have it, and
**where in the Construct desktop app to capture it**, using the real
`construct://` deep-link scheme.

## How to open a capture location

The desktop app registers the `construct://` scheme. `construct://app/<path>`
maps 1:1 to the in-app route `/app/<path>` (see
`construct-app/frontend/composables/useDeepLink.ts`). To jump straight there
with the app running:

```bash
open "construct://app/ask"          # macOS
xdg-open "construct://app/ask"      # Linux
```

…or just navigate in-app to the route in the **Route** column.

**Capture conventions** (match the existing shots): full-size window, **dark
theme** (Settings → Appearance) so the `#FF2D55` accent pops, real data, no
debug overlays. Export at 2× for retina.

---

## ✅ Already captured (in `/public/shots`)

| File | Shows |
|---|---|
| `home-hero.png` | Desktop home with the Spaces dock + a Space open |
| `spaces-launcher.png` | The Space Store catalog grid |
| `summon-operator.png` | Operator panel summoned over a Space |
| `anatomy-of-a-space.png` | Exploded-view diagram (illustration, not a screenshot) |

---

## 🟢 Native Spaces — clean `construct://` deep link

| File | construct:// link | Route | Notes |
|---|---|---|---|
| `space-ask.png` | `construct://app/ask` | `/app/ask` | The Ask Space, mid-conversation |
| `space-builder.png` | `construct://app/builder` | `/app/builder` | Builder agent planning/coding |
| `space-tui.png` | `construct://app/tui` | `/app/tui` | A TUI tool (Claude Code / Codex) running in the PTY |
| `space-editor.png` | `construct://app/editor` | `/app/editor` | **Requires Developer Mode** (Settings → General → Developer) |
| `space-spacekit.png` | `construct://app/space-developer` | `/app/space-developer` | SpaceKit editing/previewing a Space |
| `space-developer.png` | `construct://app/space-developer` | `/app/space-developer` | Same surface — the homepage "build a Space with a Space" shot |
| `space-project.png` | `construct://app/projects/<projectId>` | `/app/projects/:id` | Open a project → project-aware agent view |
| `space-org.png` | `construct://app/settings/org-members` | `/app/settings/org-members` | **Needs org context.** Org members/roles/departments |
| `space-org-project.png` | `construct://app/org-project` | `/app/org-project` | **Needs org context.** Org-wide projects |

## 🟡 Assistant / Operator — summoned, not a route

| File | How to get it | Notes |
|---|---|---|
| `space-assistant.png` | Press **Shift Shift** over any open Space | Popout window route `/detach/assistant`; there's no `construct://` for it — it's summoned |

## 🟢 Operator feature shots — Settings → AI group

| File | construct:// link | Route | Notes |
|---|---|---|---|
| `operator-automations.png` | `construct://app/settings/automations` | `/app/settings/automations` | Automations list/editor |
| `operator-context.png` | `construct://app/settings/memory` | `/app/settings/memory` | Memory = the Operator's context |
| `operator-control.png` | `construct://app/settings/llms` | `/app/settings/llms` | Providers / model control |
| `operator-agents.png` | `construct://app/settings/skills` | `/app/settings/skills` | Skills (closest to "agents"); or the Ask Space model picker |
| `morpheus-loop.png` | `construct://app/settings/insights` | `/app/settings/insights` | Morpheus is a Source-family concept — no dedicated UI; Insights is the closest, otherwise an illustration |

## 🟢 Marketplace Space shots — open the installed Space

| File | construct:// link | Route | Notes |
|---|---|---|---|
| `space-meet.png` | `construct://app/meet` | `/app/meet` | Install Meet, start a room |
| `space-<slug>.png` (dynamic) | `construct://app/<slug>` | `/app/<slug>` | One per published catalog Space. e.g. `space-drive.png` → `construct://app/drive`, `space-weather.png` → `construct://app/weather`. **Optional** — `/spaces/<slug>` pages fall back to the placeholder. Priority: drive, weather, mail, calendar, sheets, slides, pm, crm, notes |

## 🟠 Industry pages — no 1:1 Space (use the closest real one)

The `/spaces/{transport,support,revenue,operations}` pages are marketing
concepts, **not installed Spaces**. Capture a representative marketplace Space:

| File | Closest Space | construct:// link |
|---|---|---|
| `space-support.png` | Helpdesk | `construct://app/helpdesk` |
| `space-revenue.png` | CRM | `construct://app/crm` |
| `space-operations.png` | PM | `construct://app/pm` |
| `space-transport.png` | — none yet — | Commission a mockup, or capture a routing/fleet Space once one ships |

## 🔵 Web portal — NOT the desktop app (capture in a browser)

| File | URL | Notes |
|---|---|---|
| `ecosystem-portal.png` | `https://my.lisaos.dev` | The unified web portal (identity, billing, domains, developer) |
| `enterprise-admin.png` | `https://my.lisaos.dev` org admin (or `construct://app/settings/org-activity`) | SSO / audit / policy surfaces |

## 🟣 Illustrations / design assets — not screenshots

These should be **made**, not captured:

| File | What it is |
|---|---|
| `product-layers.png` | 6-layer architecture diagram (OS → Spaces → Operator → mesh → marketplace → SDK) |
| `solutions-overview.png` | Composite of Spaces across teams |
| `about-construct.png` | Brand/about shot — can use `construct://app` (home) or a brand composite |
| `anatomy-of-a-space.png` *(have)* | Exploded view of a Space's parts |

---

### Summary of what's still needed

- **Native Space shots (9):** ask, builder, tui, editor, spacekit/developer, project, org, org-project, assistant
- **Operator shots (5):** automations, context, control, agents, morpheus
- **Marketplace shots:** meet + optional per-Space `space-<slug>.png`
- **Industry (3 representative + 1 TBD):** support→helpdesk, revenue→crm, operations→pm, transport (none)
- **Web portal (2):** ecosystem-portal, enterprise-admin
- **Illustrations (3):** product-layers, solutions-overview, about-construct
