<script setup lang="ts">
useSeoMeta({
  title: 'Terms of Service',
  description: 'The Terms of Service governing your use of Construct, the AI-native desktop platform from Basecode.',
  ogTitle: 'Construct — Terms of Service',
  ogDescription: 'Read the terms governing your use of Construct.',
  ogType: 'website',
  twitterCard: 'summary',
})

useSchemaOrg([
  defineWebPage({
    name: 'Terms of Service',
    description: 'Terms of Service for Construct.',
  }),
])
</script>

<template>
  <div>
    <section class="page-section">
      <div class="page-container">
        <p class="page-label">Legal</p>
        <h1 class="page-title">Terms of Service</h1>
        <p class="legal-updated">Last updated: January 1, 2025</p>
      </div>
    </section>

    <section class="page-section alt">
      <div class="page-container legal-content">

        <h2>1. Agreement to Terms</h2>
        <p>By accessing or using Construct ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service.</p>

        <h2>2. Description of Service</h2>
        <p>Construct is an all-in-one workspace application that provides integrated spaces for design, code, project management, documentation, and other development workflows, with AI-assisted features.</p>

        <h2>3. Account Registration</h2>
        <p>To use certain features of the Service, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information when creating your account.</p>

        <h2>4. Subscription and Payment</h2>
        <p>Certain features of the Service require a paid subscription. Payment is processed through Stripe. Subscriptions renew automatically unless cancelled before the renewal date. Refunds are handled on a case-by-case basis at our discretion.</p>

        <h2>5. License Grant</h2>
        <p>Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to use the Service for your personal or business purposes in accordance with these Terms.</p>

        <h2>6. Restrictions</h2>
        <p>You agree not to: reverse engineer, decompile, or disassemble the Service; use the Service for any unlawful purpose; attempt to gain unauthorized access to the Service or its systems; redistribute, sublicense, or resell the Service; use the Service to build a competing product.</p>

        <h2>7. Content Ownership</h2>
        <p>You retain all rights to the content you create, upload, or store using the Service. We do not claim ownership over your content. You grant us a limited license to process your content solely to provide and improve the Service.</p>

        <h2>8. AI Features</h2>
        <p>The Service includes AI-powered features that process your content to provide assistance. AI outputs are provided "as is" and should be reviewed for accuracy. You are responsible for any decisions made based on AI-generated content.</p>

        <h2>9. Intellectual Property</h2>
        <p>The Service, including its design, code, branding, and documentation, is owned by Basecode and protected by intellectual property laws. The Construct name, logo, and related marks are trademarks of Basecode.</p>

        <h2>10. Disclaimers</h2>
        <p>The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, error-free, or free of harmful components.</p>

        <h2>11. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, Basecode shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising from your use of the Service.</p>

        <h2>12. Termination</h2>
        <p>We may suspend or terminate your access to the Service at any time for violation of these Terms or for any other reason at our discretion. Upon termination, your right to use the Service ceases immediately. You may export your data before termination.</p>

        <h2>13. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.</p>

        <h2>14. Contact</h2>
        <p>For questions about these Terms, contact us at <a href="mailto:legal@lisaos.dev">legal@lisaos.dev</a>.</p>

        <p class="legal-see-also">See also our <NuxtLink to="/privacy">Privacy Policy</NuxtLink>.</p>

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
