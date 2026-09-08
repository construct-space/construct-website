<script setup lang="ts">
useSeoMeta({
  title: 'Org — Manage your organization in Construct',
  description:
    'Members, departments, teams, roles, and invitations. The org-level controls for Construct — visible only when you are part of a company.',
  ogTitle: 'Org — Organization controls in Construct',
  ogDescription:
    'Members, roles, billing, policy, audit. The Space teams use to run their Construct.',
})

useSchemaOrg([
  defineWebPage({
    name: 'Org — Manage your organization in Construct',
    description: 'A built-in Construct Space (org tier) for member, role, and policy management at the organization level.',
  }),
])

const sections = [
  { title: 'Members', body: 'Invite, remove, switch roles. SSO/SAML, SCIM, role mapping. The list everyone uses to know who has access.' },
  { title: 'Departments + Teams', body: 'Hierarchy that fits a real company — departments at the top, teams beneath, individuals in both. Spaces inherit access from where they are scoped.' },
  { title: 'Roles', body: 'Owner, Admin, Developer, Member, Guest. Custom roles for the constraints your org actually has. Role-to-capability mapping at the OS level.' },
  { title: 'Invitations', body: 'Send, track, revoke. Expiring links, mandatory SSO, two-step verification — all configurable per-invitation or org-wide.' },
  { title: 'Billing', body: 'Plan, seats, usage. Owner-visible, finance-friendly — exportable as an actual invoice your AP team can process.' },
  { title: 'Audit history', body: 'Every action at the org level — role change, member add, policy edit — logged with who and when. Exportable, queryable, kept.' },
]
</script>

<template>
  <div>
    <section class="page-section hero-section">
      <div class="page-container">
        <p class="page-label">Built in · When you are in an org</p>
        <h1 class="page-title hero-title">Org. <span class="accent">Run the team.</span></h1>
        <p class="page-subtitle hero-sub">
          The org-level Space — members, departments, teams, roles, invitations, billing,
          audit. Visible when your account is part of a company; invisible when it isn't.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/enterprise" class="btn btn-primary">For enterprise</NuxtLink>
          <NuxtLink to="/operator/control" class="btn btn-secondary">Autonomy controls</NuxtLink>
        </div>

        <ShotPlaceholder
          name="space-org.png"
          alt="Org Space — members, roles, audit"
          desc="The Org Space inside Construct. Left rail: Members, Departments, Teams, Roles, Invitations, Billing, Audit. Main pane: the Members table with SSO badges and role pills. Top-right: invite button. The building-2 icon in the header."
          hero
        />
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container">
        <p class="page-label">What it covers</p>
        <h2 class="page-title">Everything an admin <span class="accent">actually needs.</span></h2>
        <div class="grid-3">
          <article v-for="s in sections" :key="s.title" class="card">
            <h3>{{ s.title }}</h3>
            <p>{{ s.body }}</p>
          </article>
        </div>

        <div class="hero-actions" style="margin-top: 28px">
          <NuxtLink to="/spaces" class="btn btn-secondary">← All built-in Spaces</NuxtLink>
          <NuxtLink to="/spaces/org-project" class="btn btn-secondary">See Org Project</NuxtLink>
          <NuxtLink to="/security" class="btn btn-secondary">Security</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
