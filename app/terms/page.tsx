export const metadata = {
  title: "Terms of Service — Lugano Automation",
}

export default function TermsPage() {
  const updated = "June 6, 2026"

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100 px-6 py-4 max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" className="font-semibold text-gray-900 text-lg tracking-tight">Lugano Automation</a>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: {updated}</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">1. Agreement to Terms</h2>
            <p>By accessing or using Lugano Automation (&quot;the Service&quot;), operated by Lugano Automation (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of Service. If you are using the Service on behalf of a business, you represent that you have authority to bind that business to these Terms.</p>
            <p className="mt-3">If you do not agree to these Terms, do not use the Service.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">2. Description of Service</h2>
            <p>Lugano Automation is a software-as-a-service (SaaS) platform designed for automotive dealerships. The Service provides AI-assisted email follow-up sequences, lead management, team coordination tools, appointment tracking, and related features to help dealerships engage with prospective customers.</p>
            <p className="mt-3">We use third-party AI providers (including Anthropic) to generate email content. AI-generated content is provided as a starting point and may require human review. We do not guarantee that AI-generated emails will achieve any particular outcome.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">3. Account Registration</h2>
            <p>You must create an account to use the Service. You agree to provide accurate, current information and to keep your account credentials secure. You are responsible for all activity under your account. Notify us immediately at support@luganoautomation.com if you suspect unauthorized access.</p>
            <p className="mt-3">You may not share accounts or allow unauthorized users to access your account.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">4. Acceptable Use</h2>
            <p>You agree to use the Service only for lawful purposes and in compliance with all applicable laws, including:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>The CAN-SPAM Act and applicable email marketing regulations</li>
              <li>The Telephone Consumer Protection Act (TCPA) where applicable</li>
              <li>GDPR or other applicable data protection laws if you serve customers in those jurisdictions</li>
              <li>All federal, state, and local laws governing automotive sales and customer communications</li>
            </ul>
            <p className="mt-3">You may not use the Service to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Send spam, unsolicited bulk email, or communications to individuals who have opted out</li>
              <li>Harass, threaten, or deceive customers</li>
              <li>Upload or transmit malware or malicious code</li>
              <li>Scrape, reverse engineer, or copy any part of the Service</li>
              <li>Resell or sublicense the Service without our written consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">5. Customer Data</h2>
            <p>You retain ownership of all customer data you upload to the Service (&quot;Customer Data&quot;). You grant us a limited license to process Customer Data solely to provide and improve the Service.</p>
            <p className="mt-3">You are responsible for ensuring you have the right to collect and process any customer data you enter into the Service, and for complying with all applicable privacy laws regarding that data.</p>
            <p className="mt-3">We implement industry-standard security measures to protect Customer Data. In the event of a data breach affecting your data, we will notify you in accordance with applicable law.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">6. Email Sending and Compliance</h2>
            <p>The Service sends emails on your behalf to leads you have entered. You are responsible for ensuring:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>You have a legitimate business relationship or appropriate permission to contact each recipient</li>
              <li>All emails comply with CAN-SPAM requirements, including valid unsubscribe mechanisms (which we provide)</li>
              <li>Your sending domain has appropriate email authentication records (SPF, DKIM, DMARC)</li>
            </ul>
            <p className="mt-3">We are not responsible for email deliverability, spam classification by third-party mail providers, or outcomes of email campaigns.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">7. Fees and Payment</h2>
            <p>Fees for the Service are disclosed at the time of subscription or as agreed separately in writing. You authorize us to charge your payment method on a recurring basis as specified. All fees are non-refundable unless otherwise stated.</p>
            <p className="mt-3">We reserve the right to change pricing with 30 days&apos; notice. Continued use of the Service after a price change constitutes acceptance of the new pricing.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">8. Term and Termination</h2>
            <p>These Terms remain in effect while you use the Service. Either party may terminate at any time. Upon termination, your access to the Service will cease and we may delete your data after a reasonable retention period.</p>
            <p className="mt-3">We may suspend or terminate your account immediately if you violate these Terms, engage in fraudulent activity, or fail to pay applicable fees.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">9. Disclaimer of Warranties</h2>
            <p>THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT AI-GENERATED CONTENT WILL BE ACCURATE, APPROPRIATE, OR ACHIEVE ANY PARTICULAR RESULT.</p>
            <p className="mt-3">We are not responsible for decisions made based on AI-generated email content. You should review all AI-generated communications before they are sent where possible.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">10. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, LUGANO AUTOMATION SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST SALES, LOST DATA, OR BUSINESS INTERRUPTION, ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE.</p>
            <p className="mt-3">OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE AMOUNTS YOU PAID TO US IN THE THREE MONTHS PRECEDING THE CLAIM.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">11. Indemnification</h2>
            <p>You agree to indemnify and hold harmless Lugano Automation and its officers, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from: (a) your use of the Service; (b) your violation of these Terms; (c) your violation of any third-party rights; or (d) any content you submit through the Service.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">12. Intellectual Property</h2>
            <p>The Service, including its software, design, and content (excluding Customer Data and AI-generated content), is owned by Lugano Automation and protected by intellectual property laws. You receive a limited, non-exclusive, non-transferable license to use the Service during your subscription.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">13. Governing Law</h2>
            <p>These Terms are governed by the laws of the State of California, without regard to conflict of law principles. Any disputes arising from these Terms shall be resolved through binding arbitration in accordance with the American Arbitration Association rules, except that either party may seek injunctive relief in court.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">14. Changes to Terms</h2>
            <p>We may update these Terms from time to time. We will notify you of material changes via email or a notice within the Service. Continued use after the effective date of changes constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">15. Contact</h2>
            <p>For questions about these Terms, contact us at:<br />
            <strong>Lugano Automation</strong><br />
            Email: support@luganoautomation.com</p>
          </section>

        </div>
      </div>

      <footer className="border-t border-gray-100 py-8 px-6 mt-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-gray-400">
          <span>© 2026 Lugano Automation</span>
          <div className="flex gap-6">
            <a href="/terms" className="hover:text-gray-600 text-gray-900">Terms</a>
            <a href="/privacy" className="hover:text-gray-600">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
