<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy',
  description: 'How Construct collects, uses, and protects your information. Local-first architecture means your projects stay on your machine.',
  ogTitle: 'Construct — Privacy Policy',
  ogDescription: 'Local-first by design. Read how we handle the limited data we do collect.',
  ogType: 'website',
  twitterCard: 'summary',
})

useSchemaOrg([
  defineWebPage({
    name: 'Privacy Policy',
    description: 'Privacy Policy for Construct.',
  }),
])
</script>

<template>
  <div>
    <section class="page-section">
      <div class="page-container">
        <p class="page-label">Legal</p>
        <h1 class="page-title">Privacy Policy</h1>
        <p class="legal-updated">Last updated: January 1, 2025</p>
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container legal-content">

        <h2>1. Introduction</h2>
        <p>This Privacy Policy describes how Construct ("we", "us", "our"), a product of Basecode, collects, uses, and protects your information when you use our application and services. We are committed to protecting your privacy and being transparent about our data practices.</p>

        <h2>2. Local-First Architecture</h2>
        <p>Construct is built with a local-first architecture. Your projects, files, code, designs, and documents are stored on your local machine by default. We do not upload or store your workspace content on our servers. Your data stays on your device unless you explicitly choose to sync or share it.</p>

        <h2>3. Information We Collect</h2>
        <p><strong>Account Information:</strong> When you create an account, we collect your name, email address, and authentication credentials.</p>
        <p><strong>Subscription Information:</strong> Payment processing is handled by Stripe. We do not store your full credit card number. Stripe may collect payment details in accordance with their own privacy policy.</p>
        <p><strong>Anonymous Analytics:</strong> We collect anonymous, aggregated usage analytics to improve the Service. This includes feature usage patterns, crash reports, and performance metrics. No personal content or workspace data is included in analytics.</p>

        <h2>4. AI Features</h2>
        <p>When you use AI-powered features, relevant context from your workspace may be sent to third-party AI providers (such as OpenAI, Anthropic, or Google) to generate responses. This data is sent in real-time and is not stored by us. Each AI provider's data handling is governed by their respective privacy policies. You can control which context is shared with AI features in your settings.</p>

        <h2>5. How We Use Your Information</h2>
        <p>We use the information we collect to: provide and maintain the Service; process subscriptions and payments; send important service-related communications; improve the Service based on anonymous usage patterns; respond to support requests.</p>

        <h2>6. Data Sharing</h2>
        <p>We never sell your personal information. We share data only with: payment processors (Stripe) to handle transactions; AI providers when you use AI features; law enforcement when required by law. We do not share, sell, or rent your personal information to third parties for marketing purposes.</p>

        <h2>7. Security</h2>
        <p>We use industry-standard security measures to protect your information, including TLS encryption for data in transit and encryption at rest for stored account data. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>

        <h2>8. Your Rights</h2>
        <p>You have the right to: access the personal information we hold about you; correct inaccurate information; delete your account and associated data; export your data in a portable format. To exercise these rights, contact us at <a href="mailto:privacy@lisaos.dev">privacy@lisaos.dev</a>.</p>

        <h2>9. Cookies</h2>
        <p>Our website uses essential cookies for authentication and session management. We do not use third-party tracking cookies or advertising cookies. Analytics cookies are anonymous and do not track individual users.</p>

        <h2>10. Children's Privacy</h2>
        <p>The Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete it.</p>

        <h2>11. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website and updating the "Last updated" date. Your continued use of the Service after changes constitutes acceptance of the updated policy.</p>

        <h2>12. Contact</h2>
        <p>For questions or concerns about this Privacy Policy, contact us at <a href="mailto:privacy@lisaos.dev">privacy@lisaos.dev</a>.</p>

        <p class="legal-see-also">See also our <NuxtLink to="/terms">Terms of Service</NuxtLink>.</p>

      </div>
    </section>
  </div>
</template>

<style scoped>
.legal-updated {
  font-size: 14px;
  color: var(--app-muted);
}

.legal-content {
  max-width: 720px;
}

.legal-content h2 {
  font-size: 18px;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 12px;
  color: var(--app-foreground);
}

.legal-content p {
  font-size: 15px;
  line-height: 1.7;
  color: var(--app-muted);
  margin-bottom: 16px;
}

.legal-content strong {
  color: var(--app-foreground);
}

.legal-content a {
  color: var(--app-accent-text, #e11d48);
  text-decoration: none;
}

.legal-content a:hover {
  text-decoration: underline;
}

.legal-see-also {
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid var(--app-border);
}
</style>
