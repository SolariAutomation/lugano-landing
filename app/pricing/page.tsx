export const metadata = {
  title: "Pricing — Lugano Automation",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-bold text-xl tracking-tight" style={{ color: "#0057a8" }}>Lugano Automation</a>
          <a href="/#contact" className="text-sm text-gray-500 hover:text-gray-900 transition">Contact</a>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-4 tracking-tight">Simple, transparent pricing.</h1>
          <p className="text-xl text-gray-500 max-w-xl mx-auto">One flat monthly fee per dealership. No per-lead charges, no surprises.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              name: "Starter",
              price: "$299",
              period: "/month",
              desc: "For single-point dealerships just getting started with AI follow-up.",
              features: [
                "Up to 200 leads/month",
                "Email AI conversation",
                "4 follow-up scenarios",
                "Gmail / Outlook connect",
                "Claim board",
                "Basic analytics",
                "Email support",
              ],
              cta: "Get started",
              highlight: false,
            },
            {
              name: "Growth",
              price: "$599",
              period: "/month",
              desc: "For dealerships ready to scale. SMS, full team management, and priority support.",
              features: [
                "Unlimited leads",
                "Email + SMS AI conversation",
                "Trade-in estimator",
                "Round robin assignment",
                "Team roles & departments",
                "Full pipeline analytics",
                "Priority support",
                "Onboarding call included",
              ],
              cta: "Most popular",
              highlight: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              period: "",
              desc: "For dealer groups with multiple rooftops, custom integrations, and dedicated support.",
              features: [
                "Everything in Growth",
                "Multi-rooftop dashboard",
                "CDK / DealerSocket integration",
                "Custom AI personas per brand",
                "Google Calendar integration",
                "Dedicated account manager",
                "Custom contract & SLA",
              ],
              cta: "Talk to us",
              highlight: false,
            },
          ].map(plan => (
            <div key={plan.name} className={`rounded-2xl p-8 border ${plan.highlight ? 'border-[#0057a8] shadow-lg shadow-blue-100' : 'border-gray-200'} relative flex flex-col`}>
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0057a8] text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h2>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                  <span className="text-gray-400 text-sm">{plan.period}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{plan.desc}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#0057a8" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/#contact"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition ${
                  plan.highlight
                    ? 'bg-[#0057a8] text-white hover:bg-[#004490]'
                    : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Common questions</h2>
          <div className="space-y-6">
            {[
              { q: "Is there a setup fee?", a: "No setup fees on Starter or Growth. Enterprise includes a dedicated onboarding call at no extra cost." },
              { q: "What counts as a lead?", a: "Any contact added to the system — whether from a web form, missed call, ADF feed, or manually entered by your team." },
              { q: "Can I cancel anytime?", a: "Yes. Month-to-month on all plans. No long-term contracts required." },
              { q: "Do you integrate with our CRM?", a: "Growth and Enterprise plans support ADF/XML lead intake from CDK, DealerSocket, and other CRMs. Full two-way CRM sync is available on Enterprise." },
              { q: "What happens if we go over the lead limit?", a: "On Starter, additional leads are $1.50 each. We'll notify you before charging. Upgrading to Growth removes the limit entirely." },
            ].map(item => (
              <div key={item.q} className="border-b border-gray-100 pb-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-100 py-8 px-6 text-center text-sm text-gray-400">
        <a href="/" className="font-bold" style={{ color: "#0057a8" }}>Lugano Automation</a>
        <span className="mx-3">·</span>
        <a href="/terms" className="hover:text-gray-600">Terms</a>
        <span className="mx-3">·</span>
        <a href="/privacy" className="hover:text-gray-600">Privacy</a>
      </footer>
    </div>
  )
}
