import Link from "next/link";

const APP_URL = "https://app.luganoautomation.com";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight">Lugano Automation</span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-gray-500 hover:text-gray-900 transition">How it works</a>
            <a href="#features" className="text-sm text-gray-500 hover:text-gray-900 transition">Features</a>
            <a href="#scenarios" className="text-sm text-gray-500 hover:text-gray-900 transition">Scenarios</a>
            <Link href={APP_URL} className="text-sm text-gray-500 hover:text-gray-900 transition">Sign in</Link>
            <Link href={APP_URL} className="bg-[#00406e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#00325a] transition">
              Get started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 text-xs text-gray-600 mb-6 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00406e] inline-block animate-pulse"></span>
          Built for car dealerships
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
          Your leads are going cold.<br />
          <span className="text-gray-400">We fix that automatically.</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Lugano sends AI-personalized follow-up emails so no lead goes cold — missed calls, web forms, service inquiries, trade-ins. Your team steps in only when a customer replies.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={APP_URL} className="bg-[#00406e] text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-[#00325a] transition w-full sm:w-auto text-center">
            Start for free →
          </Link>
          <a href="#how-it-works" className="text-gray-500 hover:text-gray-900 text-sm transition">
            See how it works ↓
          </a>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-gray-100 bg-gray-50 py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "10 min", label: "First email after missed call" },
            { stat: "4", label: "Follow-up scenarios covered" },
            { stat: "3-step", label: "Automated per lead" },
            { stat: "0", label: "Emails written manually" },
          ].map((item) => (
            <div key={item.stat}>
              <p className="text-3xl font-bold text-gray-900">{item.stat}</p>
              <p className="text-sm text-gray-500 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Most leads never hear back.</h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          A customer calls about an S4 and your team misses it. By the time someone follows up 2 days later, they&apos;ve already bought from the dealership down the street. This happens dozens of times a month at every dealership — and it&apos;s entirely preventable.
        </p>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How it works</h2>
            <p className="text-gray-500 text-lg">Set it up once. It runs itself.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Lead comes in",
                desc: "Missed call, web form, service inquiry, or trade-in request. Add it manually or connect your existing system via webhook.",
                icon: "📥",
              },
              {
                step: "02",
                title: "AI writes a personalized email",
                desc: "Not a template. A real email referencing their name, the specific car they asked about, and how they reached out — sent within 10 minutes.",
                icon: "✍️",
              },
              {
                step: "03",
                title: "Sequence runs automatically",
                desc: "Follow-up 2 fires at day 3. Closing email at day 7. When they reply, everything stops and the right salesperson takes over.",
                icon: "⚡",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white border border-gray-200 rounded-2xl p-8 relative">
                  <div className="w-10 h-10 rounded-xl bg-[#e6f0f7] flex items-center justify-center mb-4">
                  <span className="text-[#00406e] font-bold text-sm">{item.step.replace('0', '')}</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Flow diagram */}
          <div className="mt-16 bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="font-semibold text-gray-900 mb-6 text-center">The full sequence, visualized</h3>
            <div className="flex items-center justify-between flex-wrap gap-4 text-center text-sm">
              {[
                { label: "Lead created", sub: "Day 0", color: "bg-blue-100 text-blue-700" },
                { label: "Email #1", sub: "10 min / Same day", color: "bg-yellow-100 text-yellow-700" },
                { label: "Email #2", sub: "Day 3", color: "bg-orange-100 text-orange-700" },
                { label: "Closing email", sub: "Day 7", color: "bg-purple-100 text-purple-700" },
                { label: "Sequence ends", sub: "Or reply stops it", color: "bg-green-100 text-green-700" },
              ].map((item, i, arr) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className={`px-4 py-2 rounded-xl font-medium ${item.color}`}>
                    <p>{item.label}</p>
                    <p className="text-xs font-normal opacity-75 mt-0.5">{item.sub}</p>
                  </div>
                  {i < arr.length - 1 && <span className="text-gray-300 text-lg hidden md:block">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Everything your team needs</h2>
          <p className="text-gray-500 text-lg">Not a generic CRM with email bolted on. Built specifically for dealership workflows.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "✉️",
              title: "AI-Written Emails",
              desc: "Every first email is written by AI — personalized to the customer's name, vehicle interest, and how they contacted you. No templates, no generic copy.",
            },
            {
              icon: "⏱️",
              title: "Timed Sequences",
              desc: "Sequences fire automatically based on scenario. Buying lead? 10 minutes. Service inquiry? Same day. Each scenario has optimized timing.",
            },
            {
              icon: "📬",
              title: "Reply Detection",
              desc: "Connect your Gmail or Outlook. When a customer replies, the sequence stops instantly — no double-emailing, no awkward follow-ups after they've responded.",
            },
            {
              icon: "📅",
              title: "Appointment Tracking",
              desc: "Calendly and Acuity webhooks auto-create appointments. First salesperson to claim it owns it — no double-booking, no missed handoffs.",
            },
            {
              icon: "👥",
              title: "Team Roles",
              desc: "Owners see everything. Managers see their department. Salespeople see their leads. Clean separation, zero confusion.",
            },
            {
              icon: "📊",
              title: "Pipeline View",
              desc: "See where every lead stands, how many emails went out, who responded, and each salesperson's conversion numbers — all in one place.",
            },
          ].map((f) => (
            <div key={f.title} className="border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition">
              <div className="w-2 h-2 rounded-full bg-[#00406e] mb-4"></div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scenarios */}
      <section id="scenarios" className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Four scenarios, fully covered</h2>
            <p className="text-gray-500">Every type of cold lead gets the right sequence automatically.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "Missed Call / Web Form",
                dept: "Sales",
                timing: "Email #1: 10 min · Email #2: Day 3 · Closing: Day 7",
                desc: "Lead called about a vehicle or submitted a form. Follows up fast before they move on.",
              },
              {
                name: "Service Inquiry",
                dept: "Service",
                timing: "Email #1: Same day · Email #2: Day 3 · Closing: Day 7",
                desc: "Customer reached out about service but wasn't scheduled. Gets them booked.",
              },
              {
                name: "Trade-In Inquiry",
                dept: "Finance",
                timing: "Email #1: Same day · Email #2: Day 4 · Closing: Day 10",
                desc: "Lead asked about trading in their car. Keeps them engaged with a valuation link.",
              },
              {
                name: "Test Drive No-Show",
                dept: "Sales",
                timing: "Email #1: Same day · Email #2: Day 3 · Closing: Day 7",
                desc: "Had a test drive scheduled but didn't show. Offers to reschedule before the lead goes cold.",
              },
            ].map((s) => (
              <div key={s.name} className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{s.name}</h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{s.dept}</span>
                </div>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed">{s.desc}</p>
                <p className="text-xs text-gray-400 font-mono">{s.timing}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to stop losing leads?</h2>
        <p className="text-gray-500 mb-10 text-lg">
          Set up in minutes. Your first lead gets a follow-up within 10 minutes of being added.
        </p>
        <Link href={APP_URL} className="bg-[#00406e] text-white px-10 py-4 rounded-xl text-base font-medium hover:bg-[#00325a] transition inline-block">
          Get started for free →
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span className="font-medium text-gray-600">Lugano Automation</span>
          <div className="flex gap-6">
            <a href="/terms" className="hover:text-gray-600 transition">Terms</a>
            <a href="/privacy" className="hover:text-gray-600 transition">Privacy</a>
            <a href="mailto:support@luganoautomation.com" className="hover:text-gray-600 transition">Contact</a>
            <Link href={APP_URL} className="hover:text-gray-600 transition">Log in</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
