import AnimateIn from "./components/AnimateIn";

const BRAND = "#0057a8";
const BRAND_DARK = "#004490";
const BRAND_LIGHT = "#e8f0fa";
const APP_URL = "https://app.luganoautomation.com";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Nav */}
      <nav className="sticky top-0 z-50 px-6 py-4" style={{ backgroundColor: BRAND }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-bold text-2xl tracking-tight text-white">Lugano Automation</span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-white/75 hover:text-white transition font-medium">How it works</a>
            <a href="#features" className="text-sm text-white/75 hover:text-white transition font-medium">Features</a>
            <a href="#scenarios" className="text-sm text-white/75 hover:text-white transition font-medium">Scenarios</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-24 pb-28" style={{ backgroundColor: BRAND }}>
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-8 border border-white/20" style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-white inline-block animate-pulse"></span>
            AI-Powered Lead Follow-Up for Car Dealerships
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight mb-6 text-white">
                Stop losing leads<br />to silence.
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-lg">
                Lugano sends AI-personalized follow-up emails the moment a lead goes cold — missed calls, web forms, service inquiries, trade-ins. Your team steps in only when someone replies.
              </p>
              <a href="#how-it-works" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium text-sm transition">
                See how it works ↓
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "10 min", label: "First email after a missed call" },
                { stat: "4", label: "Follow-up scenarios covered" },
                { stat: "3-step", label: "Sequence per lead, automated" },
                { stat: "0", label: "Emails your team has to write" },
              ].map(item => (
                <div key={item.stat} className="rounded-2xl p-5 border border-white/15" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                  <p className="text-4xl font-black text-white mb-1">{item.stat}</p>
                  <p className="text-sm text-white/60 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 py-20" style={{ backgroundColor: "#f8faff" }}>
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: BRAND }}>The Problem</p>
                <h2 className="text-5xl font-black leading-tight mb-6">Most leads never hear back.</h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                  A customer calls about an S4 and your team misses it. By the time someone follows up two days later, they've already bought from the dealership down the street.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { pct: "80%", label: "of leads never get followed up on the same day" },
                  { pct: "78%", label: "of customers buy from the first dealership to respond" },
                  { pct: "5 min", label: "is the ideal window to respond to a new lead" },
                ].map(item => (
                  <div key={item.pct} className="flex items-center gap-5 rounded-2xl p-5 border border-[#0057a8]/15 bg-white">
                    <span className="text-4xl font-black shrink-0" style={{ color: BRAND }}>{item.pct}</span>
                    <span className="text-gray-600 text-sm leading-snug">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-6 py-20" style={{ backgroundColor: BRAND_LIGHT }}>
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: BRAND }}>How It Works</p>
              <h2 className="text-5xl font-black mb-4">Set it up once.<br />It runs itself.</h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">Three steps. No manual work. Your leads get followed up whether your team is busy or not.</p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { n: "1", title: "Lead comes in", desc: "Missed call, web form, service inquiry, or trade-in. Add manually or connect your existing system." },
              { n: "2", title: "AI writes the email", desc: "Not a template — a real email referencing their name, the specific car they asked about, and how they reached out." },
              { n: "3", title: "Sequence runs itself", desc: "Follow-up 2 at day 3. Closing email at day 7. When they reply, it stops. No double-sending." },
            ].map((item, i) => (
              <AnimateIn key={item.n} delay={i * 120} direction="up">
                <div className="bg-white rounded-2xl p-7 border h-full" style={{ borderColor: `${BRAND}30` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white mb-5" style={{ backgroundColor: BRAND }}>
                    {item.n}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Sequence flow */}
          <AnimateIn>
            <div className="bg-white rounded-2xl p-7 border" style={{ borderColor: `${BRAND}20` }}>
              <p className="text-sm font-bold uppercase tracking-widest mb-5 text-center" style={{ color: BRAND }}>Sequence Timeline</p>
              <div className="flex items-stretch justify-between flex-wrap gap-3">
                {[
                  { label: "Lead created", sub: "Day 0", bg: BRAND, text: "white" },
                  { label: "Email #1", sub: "10 min–Same day", bg: "#f0f4ff", text: BRAND },
                  { label: "Email #2", sub: "Day 3", bg: "#f0f4ff", text: BRAND },
                  { label: "Closing email", sub: "Day 7–10", bg: "#f0f4ff", text: BRAND },
                  { label: "Sequence ends", sub: "Or reply stops it", bg: "#e8f5ee", text: "#166534" },
                ].map((s, i, arr) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <div className="px-4 py-3 rounded-xl text-center min-w-[110px]" style={{ backgroundColor: s.bg, color: s.text }}>
                      <p className="font-bold text-sm">{s.label}</p>
                      <p className="text-xs opacity-70 mt-0.5">{s.sub}</p>
                    </div>
                    {i < arr.length - 1 && <span className="text-gray-300 text-lg hidden md:block">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: BRAND }}>Features</p>
              <h2 className="text-5xl font-black mb-4">Everything your team needs.</h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">Not a generic CRM with email bolted on. Built specifically for how dealerships actually work.</p>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "AI-Written Emails", desc: "Every first email is written by AI — personalized to the customer's name, vehicle interest, and how they contacted you. No templates, no generic copy." },
              { title: "Timed Sequences", desc: "Sequences fire automatically based on scenario. Buying lead? 10 minutes. Service inquiry? Same day. Each scenario has optimized timing built in." },
              { title: "Reply Detection", desc: "Connect Gmail or Outlook. When a customer replies, the sequence stops instantly. No double-emailing. No awkward follow-ups after they've responded." },
              { title: "Appointment Tracking", desc: "Calendly and Acuity webhooks auto-create appointments. First salesperson to claim it owns it — no double-booking, no missed handoffs." },
              { title: "Team Roles", desc: "Owners see everything. Managers see their department. Salespeople see only their leads. Clean separation, zero confusion." },
              { title: "Pipeline Analytics", desc: "See where every lead stands, how many emails went out, response rates, and each salesperson's performance — all in one place." },
            ].map((f, i) => (
              <AnimateIn key={f.title} delay={i * 70} direction="up">
                <div className="rounded-2xl p-6 h-full border hover:shadow-md transition-all" style={{ borderColor: `${BRAND}25` }}>
                  <div className="w-2 h-2 rounded-full mb-4" style={{ backgroundColor: BRAND }}></div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: BRAND }}>{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section id="scenarios" className="px-6 py-20" style={{ backgroundColor: BRAND_LIGHT }}>
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: BRAND }}>Scenarios</p>
              <h2 className="text-5xl font-black mb-4">Four scenarios,<br />fully covered.</h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">Every type of cold lead gets the right sequence automatically. Nothing falls through the cracks.</p>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { name: "Missed Call / Web Form", dept: "Sales", timing: "Email #1: 10 min · Email #2: Day 3 · Closing: Day 7", desc: "Lead called about a vehicle or submitted a form. Follows up fast before they move on to another dealer." },
              { name: "Service Inquiry", dept: "Service", timing: "Email #1: Same day · Email #2: Day 3 · Closing: Day 7", desc: "Customer reached out about service but wasn't scheduled. Gets them booked with a direct link." },
              { name: "Trade-In Inquiry", dept: "Finance", timing: "Email #1: Same day · Email #2: Day 4 · Closing: Day 10", desc: "Lead asked about trading in their car. Keeps them engaged with a valuation link and no pressure." },
              { name: "Test Drive No-Show", dept: "Sales", timing: "Email #1: Same day · Email #2: Day 3 · Closing: Day 7", desc: "Had a test drive scheduled but didn't show. Offers to reschedule before the lead goes completely cold." },
            ].map((s, i) => (
              <AnimateIn key={s.name} delay={i * 90} direction="up">
                <div className="bg-white rounded-2xl p-7 h-full border" style={{ borderColor: `${BRAND}20` }}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold" style={{ color: BRAND }}>{s.name}</h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: `${BRAND}15`, color: BRAND }}>{s.dept}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{s.desc}</p>
                  <p className="text-xs font-mono text-gray-400">{s.timing}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span className="font-bold text-lg" style={{ color: BRAND }}>Lugano Automation</span>
          <div className="flex gap-6">
            <a href="/terms" className="hover:text-gray-600 transition">Terms</a>
            <a href="/privacy" className="hover:text-gray-600 transition">Privacy</a>
            <a href="mailto:support@luganoautomation.com" className="hover:text-gray-600 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
