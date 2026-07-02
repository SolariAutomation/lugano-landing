export const metadata = {
  title: "Privacy Policy — Lugano Automation",
}

export default function PrivacyPage() {
  const updated = "July 2, 2026"

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100 px-6 py-4 max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" className="font-semibold text-gray-900 text-lg tracking-tight">Lugano Automation</a>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: {updated}</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">1. Overview</h2>
            <p>Lugano Automation (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides AI-powered lead follow-up software for automotive dealerships. This Privacy Policy explains how we collect, use, and protect information in connection with our Service at <a href="https://luganoautomation.com" className="text-blue-600 underline">luganoautomation.com</a> and <a href="https://app.luganoautomation.com" className="text-blue-600 underline">app.luganoautomation.com</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">2. Information We Collect</h2>

            <h3 className="font-medium text-gray-900 mb-2 mt-4">Information you provide directly:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account information:</strong> Name, email address, password when you register</li>
              <li><strong>Dealership information:</strong> Business name, phone number, website URLs</li>
              <li><strong>Lead data:</strong> Customer names, email addresses, phone numbers, vehicle interests, and notes that you enter into the Service</li>
              <li><strong>Payment information:</strong> Processed by our payment provider; we do not store full card numbers</li>
            </ul>

            <h3 className="font-medium text-gray-900 mb-2 mt-4">Information collected automatically:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Usage data:</strong> Pages visited, features used, actions taken within the Service</li>
              <li><strong>Log data:</strong> IP addresses, browser type, timestamps</li>
              <li><strong>Email interaction data:</strong> Whether emails sent through the Service were opened or replied to (where trackable)</li>
            </ul>

            <h3 className="font-medium text-gray-900 mb-2 mt-4">Information from third parties:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Gmail / Outlook:</strong> If you connect your inbox, we access emails to read customer replies and continue or stop the AI conversation sequence. We read only messages from your connected leads and store the content of those replies to enable the AI to respond contextually</li>
              <li><strong>Scheduling tools:</strong> If you connect Calendly or Acuity, we receive appointment booking data</li>
              <li><strong>SMS:</strong> If SMS is enabled, we use Twilio to send and receive text messages with your leads. Message content is stored to maintain conversation context</li>
              <li><strong>AI conversation data:</strong> Customer email and SMS replies are processed by Anthropic&apos;s Claude AI to generate responses. Message content is transmitted to Anthropic&apos;s API for processing. Anthropic&apos;s privacy policy applies to that processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">3. How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing and operating the Service</li>
              <li>Sending automated follow-up emails on behalf of your dealership</li>
              <li>Monitoring connected email inboxes for customer replies (with your authorization)</li>
              <li>Generating AI-assisted email content using third-party AI providers</li>
              <li>Sending you service updates, security notices, and support communications</li>
              <li>Improving the Service and developing new features</li>
              <li>Complying with legal obligations</li>
            </ul>
            <p className="mt-3">We do not sell your data or your customers&apos; data to third parties. We do not use your Customer Data to train AI models without your explicit consent.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">4. Data Sharing</h2>
            <p>We share data only with:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Supabase</strong> — database and authentication infrastructure</li>
              <li><strong>Resend</strong> — email delivery service</li>
              <li><strong>Anthropic</strong> — AI provider for email content generation (prompt data is sent; we do not share customer PII beyond what is necessary for generation)</li>
              <li><strong>Google / Microsoft</strong> — only when you authorize Gmail or Outlook connection</li>
              <li><strong>Vercel</strong> — hosting infrastructure</li>
              <li><strong>Law enforcement or legal process</strong> — when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">5. Data Retention</h2>
            <p>We retain your account data and Customer Data for as long as your account is active. After termination, we retain data for up to 90 days before deletion, unless a longer period is required by law or you request earlier deletion.</p>
            <p className="mt-3">Email logs and usage records may be retained for up to 12 months for billing and dispute resolution purposes.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">6. Security</h2>
            <p>We implement industry-standard security measures including:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Encryption in transit (HTTPS/TLS) and at rest</li>
              <li>Row-level security on all database tables</li>
              <li>Access controls limiting employee access to Customer Data</li>
              <li>OAuth tokens stored securely, not in plain text</li>
            </ul>
            <p className="mt-3">No method of transmission over the internet is 100% secure. We will notify you of any breach affecting your data as required by law.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your account and data</li>
              <li>Export your Customer Data</li>
              <li>Disconnect third-party integrations (Gmail, Outlook, etc.) at any time</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at support@luganoautomation.com.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">8. Your Customers&apos; Data</h2>
            <p>You are the data controller for the customer information you enter into the Service. You are responsible for ensuring your collection and use of that data complies with all applicable privacy laws, including obtaining any required consents before sending automated email communications.</p>
            <p className="mt-3">Every email sent through the Service includes an unsubscribe link. When a customer unsubscribes, the Service automatically stops all further email sequences to that customer.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">9. Cookies</h2>
            <p>The Service uses essential cookies for authentication and session management. We do not use third-party tracking or advertising cookies. The landing page at luganoautomation.com does not use analytics tracking by default.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">10. Children</h2>
            <p>The Service is not directed at children under 13. We do not knowingly collect data from children. If you believe a child has provided us with personal information, contact us at support@luganoautomation.com.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. We will notify you of material changes via email or a notice within the Service at least 7 days before the change takes effect.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">12. Contact</h2>
            <p>For privacy questions or requests:<br />
            <strong>Lugano Automation</strong><br />
            Email: support@luganoautomation.com</p>
          </section>

        </div>
      </div>

      <footer className="border-t border-gray-100 py-8 px-6 mt-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-gray-400">
          <span>© 2026 Lugano Automation</span>
          <div className="flex gap-6">
            <a href="/terms" className="hover:text-gray-600">Terms</a>
            <a href="/privacy" className="hover:text-gray-600 text-gray-900">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
