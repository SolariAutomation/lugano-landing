export const metadata = {
  title: "Service Agreement — Lugano Automation",
}

export default function AgreementPage() {
  const updated = "July 13, 2026"

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100 px-6 py-4 max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" className="font-bold text-xl tracking-tight" style={{ color: "#0057a8" }}>Lugano Automation</a>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Client Service Agreement</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: {updated}</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">1. Parties</h2>
            <p>This Client Service Agreement (&quot;Agreement&quot;) is entered into between <strong>Lugano Automation LLC</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us&quot;) and the dealership or business entity that has agreed to these terms (&quot;Client,&quot; &quot;you&quot;). This Agreement governs your use of the Lugano Automation platform and related services (&quot;Service&quot;).</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">2. Services</h2>
            <p>Lugano Automation provides AI-powered lead follow-up and customer engagement software for automotive dealerships. Services include:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Automated email and SMS follow-up sequences for inbound leads</li>
              <li>AI-powered conversational responses to customer replies</li>
              <li>Lead management dashboard and pipeline tracking</li>
              <li>Team management with role-based access</li>
              <li>Integration with Gmail, Outlook, and CRM systems via ADF/XML</li>
              <li>Trade-in value estimation based on client-configured rules</li>
              <li>Appointment tracking and claim board functionality</li>
            </ul>
            <p className="mt-3">The specific features available to Client depend on the subscription plan selected at time of purchase.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">3. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Billing:</strong> Subscriptions are billed monthly in advance. The first payment is due upon activation of the account.</li>
              <li><strong>Automatic renewal:</strong> Subscriptions renew automatically each month unless cancelled by Client at least 5 business days before the next billing date.</li>
              <li><strong>Price changes:</strong> We will provide 30 days written notice before changing subscription pricing.</li>
              <li><strong>Late payment:</strong> Accounts with outstanding balances more than 7 days past due may be suspended until payment is received.</li>
              <li><strong>No refunds:</strong> Monthly fees are non-refundable. If you cancel mid-month, your access continues until the end of the paid period.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">4. Client Responsibilities</h2>
            <p>Client agrees to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Provide accurate dealership and contact information</li>
              <li>Obtain proper authorization before connecting email inboxes or CRM systems</li>
              <li>Ensure all leads entered into the system have provided consent to be contacted electronically (in compliance with CAN-SPAM, TCPA, and applicable state laws)</li>
              <li>Not use the Service to send unsolicited spam or to contact individuals who have opted out</li>
              <li>Keep login credentials confidential and notify us promptly of any unauthorized access</li>
              <li>Comply with all applicable laws and regulations in your jurisdiction</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">5. Data and Privacy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Your data:</strong> You retain ownership of all customer data you enter into the Service. We process it solely to provide the Service.</li>
              <li><strong>AI processing:</strong> Customer messages are transmitted to Anthropic&apos;s Claude AI to generate responses. By using the Service, you authorize this processing on behalf of your customers.</li>
              <li><strong>Data security:</strong> We use industry-standard encryption and security practices to protect your data. Full details are in our Privacy Policy at luganoautomation.com/privacy.</li>
              <li><strong>Data deletion:</strong> Upon account termination, we will delete your data within 30 days upon written request.</li>
              <li><strong>No data selling:</strong> We do not sell, rent, or share your customer data with third parties for marketing purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">6. Acceptable Use</h2>
            <p>Client agrees not to use the Service to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Send unsolicited commercial messages (spam)</li>
              <li>Impersonate any person or entity</li>
              <li>Violate any applicable law or regulation</li>
              <li>Contact individuals who have requested to stop receiving communications</li>
              <li>Attempt to reverse engineer or copy any part of the Service</li>
              <li>Resell or sublicense access to the Service without prior written consent</li>
            </ul>
            <p className="mt-3">Violation of these terms may result in immediate account termination without refund.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">7. Service Availability</h2>
            <p>We target 99% monthly uptime for the Service, excluding scheduled maintenance. We are not responsible for downtime caused by third-party services (including Anthropic, Twilio, email providers, or CRM systems), internet connectivity issues, or events outside our reasonable control.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Lugano Automation LLC&apos;s total liability for any claim arising from this Agreement or the Service shall not exceed the amount Client paid in the 3 months preceding the claim.</p>
            <p className="mt-3">We are not liable for: lost profits, lost sales or business opportunities, indirect or consequential damages, or damages resulting from your failure to comply with applicable laws regarding customer communications.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">9. Disclaimer of Warranties</h2>
            <p>The Service is provided &quot;as is.&quot; We do not warrant that the Service will meet all of your requirements, that AI-generated responses will be error-free or suitable for every customer interaction, or that the Service will be uninterrupted at all times. AI responses should be reviewed periodically to ensure they align with your dealership&apos;s standards.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">10. Termination</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>By Client:</strong> Cancel anytime through the account settings or by emailing support@luganoautomation.com. Access continues until end of the current billing period.</li>
              <li><strong>By Lugano Automation:</strong> We may suspend or terminate accounts for breach of this Agreement, non-payment, or illegal activity, with or without notice depending on severity.</li>
              <li><strong>Effect of termination:</strong> All licenses to use the Service end immediately upon termination. Outstanding payment obligations survive termination.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">11. Confidentiality</h2>
            <p>Each party agrees to keep confidential any non-public information received from the other party that is designated as confidential or that reasonably should be understood to be confidential. This obligation does not apply to information that is publicly available, independently developed, or required to be disclosed by law.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">12. Governing Law</h2>
            <p>This Agreement is governed by the laws of the State of [YOUR STATE], without regard to conflict of law principles. Any disputes shall be resolved in the courts of [YOUR STATE], and both parties consent to personal jurisdiction there.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">13. Changes to This Agreement</h2>
            <p>We may update this Agreement from time to time. We will notify you by email at least 15 days before material changes take effect. Continued use of the Service after that date constitutes acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">14. Entire Agreement</h2>
            <p>This Agreement, together with our Privacy Policy and Terms of Service, constitutes the entire agreement between the parties regarding the Service and supersedes all prior agreements and understandings.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">15. Contact</h2>
            <p>Questions about this Agreement: <a href="mailto:support@luganoautomation.com" className="text-blue-600 underline">support@luganoautomation.com</a></p>
            <p className="mt-2">Lugano Automation LLC</p>
          </section>

        </div>
      </div>

      <footer className="border-t border-gray-100 py-8 px-6 text-center text-sm text-gray-400">
        <a href="/" className="font-bold" style={{ color: "#0057a8" }}>Lugano Automation</a>
        <span className="mx-3">·</span>
        <a href="/terms" className="hover:text-gray-600">Terms</a>
        <span className="mx-3">·</span>
        <a href="/privacy" className="hover:text-gray-600">Privacy</a>
        <span className="mx-3">·</span>
        <a href="/pricing" className="hover:text-gray-600">Pricing</a>
      </footer>
    </div>
  )
}
