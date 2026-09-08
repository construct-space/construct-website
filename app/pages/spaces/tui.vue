<script setup lang="ts">
useSeoMeta({
  title: 'TUI — Run Claude Code, Codex, OpenCode inside Construct',
  description:
    'Run interactive CLI tools — Claude Code, Codex, OpenCode, or any TUI app — directly inside a Construct Space. Sharing identity, files, and the active project.',
  ogTitle: 'TUI — Terminal AI tools, hosted inside Construct',
  ogDescription:
    'Claude Code, Codex, OpenCode and other terminal-native AI tools run inside Construct, with shared context and identity.',
})

useSchemaOrg([
  defineWebPage({
    name: 'TUI — Run terminal AI tools inside Construct',
    description: 'A built-in Space that hosts Claude Code, Codex, OpenCode, and any other interactive CLI app inside Construct, with full project context.',
  }),
])

const tools = [
  { name: 'Claude Code', body: "Anthropic's CLI agent. Long-context, tool-using, file-editing. Run it inside the project Space and it sees your files, your CLAUDE.md, your tests." },
  { name: 'Codex CLI', body: "OpenAI's terminal coder. Same shell, same project, same identity layer underneath." },
  { name: 'OpenCode', body: 'Open-source terminal agent. Plug it in, run it, treat it as another Space participant.' },
  { name: 'Anything that runs in a TTY', body: 'Vim, nvim, htop, k9s, Aider, your own tool. If it talks to a terminal, the TUI Space hosts it.' },
]

const features = [
  { title: 'Real PTY, not a fake', body: 'Full pseudo-terminal — colors, cursor control, mouse events, escape sequences. Apps behave like they would in iTerm.' },
  { title: 'Shared identity', body: 'Sign in once at the OS level. CLI tools that look for `.claude` / `.openai` / config files find them where they expect.' },
  { title: 'Project-scoped sessions', body: 'Open the TUI inside a project — the tool starts in the project root, with the project env, with the project files in reach.' },
  { title: 'Multi-pane', body: 'Run two CLI agents side by side. Compare outputs. Hand work between them.' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Built in · Personal</p>
        <h1 class="page-title hero-title">TUI. <span class="accent">Bring your CLI.</span></h1>
        <p class="page-subtitle hero-sub">
          Run Claude Code, Codex, OpenCode, or any terminal AI tool — inside a Construct
          Space. Same project, same identity, same files. The CLI tools you already love,
          framed by the OS that gives them context.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/download" class="btn btn-primary">Download Free</NuxtLink>
          <NuxtLink to="/spaces/editor" class="btn btn-secondary">See Editor</NuxtLink>
        </div>

        <ShotPlaceholder
          name="space-tui.png"
          alt="TUI Space — Claude Code or Codex running inside Construct"
          desc="The TUI Space inside Construct. Two terminal panes side-by-side: one running Claude Code (with its TUI prompt visible), the other running Codex CLI. Both panes show the same project root path. Construct chrome around the panes — sidebar visible, project name in the title bar."
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">What runs here</p>
        <h2 class="page-title">Bring the tool. <span class="accent">Skip the setup.</span></h2>
        <div class="grid-2">
          <article v-for="t in tools" :key="t.name" class="card">
            <h3>{{ t.name }}</h3>
            <p>{{ t.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="page-container">
        <p class="page-label">How it works</p>
        <h2 class="page-title">Real terminal. <span class="accent">Real context.</span></h2>
        <div class="grid-2">
          <article v-for="f in features" :key="f.title" class="card">
            <h3>{{ f.title }}</h3>
            <p>{{ f.body }}</p>
          </article>
        </div>
        <div class="hero-actions" style="margin-top: 28px">
          <NuxtLink to="/spaces" class="btn btn-secondary">← All built-in Spaces</NuxtLink>
          <NuxtLink to="/spaces/project" class="btn btn-secondary">See Project</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
