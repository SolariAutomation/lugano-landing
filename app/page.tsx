import Link from "next/link";

const APP_URL = "https://dealer-crm-xi.vercel.app";

const FEATURES = [
  {
    icon: "✉️",
    title: "AI-Written Emails",
    desc: "Every first email is written by AI — personalized to the customer's name, vehicle interest, and how they contacted you. No templates, no generic copy.",
  },
  {
    icon: "⏱️",
    title: "Timed Sequences",
    desc: "Sequences fire automatically based on scenario. Buying lead? First email in 10 minutes. Service inquiry? Same day. Trade-in? Whenever makes sense.",
  },
  {
    icon: "📬",
    title: "Reply Monitoring",
    desc: "Connect your Gmail or Outlook. When a customer replies, the sequence stops instantly and the conversation routes to the right salesperson.",
  },
  {
    icon: "📅",
    title: "Appointment Tracking",
    desc: "Calendly and Acuity webhooks auto-create appointments when customers book. First salesperson to claim it owns it.",
  },
  {
    icon: "👥",
    title: "Team Management",
    desc: "Invite your sales team, assign roles and departments. Each salesperson sees only their leads. Managers see the full pipeline.",
  },
  {
    icon: "📊",
    title: "Pipeline Analytics",
    desc: "See exactly where leads are in your funnel, how many emails went out, response rates, and each salesperson's performance.",
  },
];

const SCENARIOS = [
  { label: "Missed call", timing: "Follow-up in 10 min" },
  { label: "Web form", timing: "Follow-up in 10 min" },
  { label: "Service inquiry", timing: "Follow-up same day" },
  { label: "Trade-in inquiry", timing: "Follow-up same day" },
  { label: "Test drive no-show", timing: "Follow-up same day" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <span className="font-semibold text-gray-900 text-lg tracking-tight">Lugano Automation</span>
        <div className="flex items-center gap-6">
          <a href="#features" className="text-sm text-gray-500 hover:text-gray-900 transition">Features</a>
          <a href="#how-it-works" className="text-sm text-gray-500 hover:text-gray-900 transition">How it works</a>
          <Link href={APP_URL} className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
            Sign in
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-600 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
          Built for car dealerships
        </div>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
          Stop losing leads to silence
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Lugano Automation automatically follows up with leads who go cold — with AI-written emails, timed sequences, and reply monitoring. Your team focuses on closing, not chasing.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href={APP_URL} className="bg-black text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition">
            Get started →
          </Link>
          <a href="#how-it-works" className="text-sm text-gray-500 hover:text-gray-900 transition">
            See how it works
          </a>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="border-y border-gray-100 bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-center gap-12 text-center flex-wrap">
          {[
            { stat: "10 min", label: "First email after missed call" },
            { stat: "4", label: "Follow-up scenarios covered" },
            { stat: "3-step", label: "Automated sequences" },
            { stat: "0", label: "Emails written manually" },
          ].map((item) => (
            <div key={item.stat}>
              <p className="text-2xl font-bold text-gray-900">{item.stat}</p>
              <p className="text-sm text-gray-500 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">How it works</h2>
        <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">A lead comes in. The sequence starts automatically. When they reply, it stops and routes to your team.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Lead comes in", desc: "Via missed call, web form, service inquiry, or test drive no-show. Add it manually or connect your CRM." },
            { step: "2", title: "AI writes the first email", desc: "Personalized to their name, vehicle interest, and how they reached out. Sends automatically — no one has to touch it." },
            { step: "3", title: "Sequence runs itself", desc: "Follow-up 2 fires at day 3. Closing email at day 7. When they reply, everything stops and your team takes over." },
          ].map((item) => (
            <div key={item.step} className="relative">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold mb-4">{item.step}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Scenario timing table */}
        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-2xl p-8">
          <h3 className="font-semibold text-gray-900 mb-6 text-center">Sequence timing by scenario</h3>
          <div className="space-y-3">
            {SCENARIOS.map((s) => (
              <div key={s.label} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
                <span className="text-sm text-gray-700">{s.label}</span>
                <span className="text-sm font-medium text-gray-900">{s.timing}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Everything your team needs</h2>
          <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">Built specifically for dealership workflows — not a generic CRM with email bolted on.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to stop losing leads?</h2>
        <p className="text-gray-500 mb-10 text-lg">Set up in minutes. No contracts, no minimums.</p>
        <Link href={APP_URL} className="bg-black text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-gray-800 transition inline-block">
          Get started →
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-gray-400">
          <span>© 2026 Lugano Automation</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600">Terms</a>
            <a href="#" className="hover:text-gray-600">Privacy</a>
            <Link href={APP_URL} className="hover:text-gray-600">Log in</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
