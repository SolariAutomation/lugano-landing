"use client";
import { useEffect, useState } from "react";

export default function PricingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", background: "var(--white)", color: "var(--text-primary)", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        :root {
          --blue-900:#040D1A;--blue-800:#071529;--blue-700:#0A1E3D;--blue-600:#0E2A57;
          --blue:#1246A8;--blue-400:#2560D0;--blue-300:#4B82E8;--blue-200:#89AEFF;
          --blue-100:#C5D8FF;--blue-50:#EBF1FF;--white:#FFFFFF;
          --gray-50:#F8FAFF;--text-primary:#040D1A;--text-secondary:#3A4A6B;--text-muted:#6B7FAA;
        }
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        body{font-family:'Plus Jakarta Sans',system-ui,sans-serif;-webkit-font-smoothing:antialiased}
        .faq-item{border-bottom:1px solid var(--blue-50);padding:24px 0;}
      `}</style>

      {/* Nav — same as main page */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50, padding: "0 5%",
        background: scrolled ? "rgba(255,255,255,0.95)" : "var(--blue-900)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid var(--blue-50)" : "none",
        transition: "background .3s, border-color .3s",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 72,
      }}>
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img src="/logo.svg" alt="Lugano Automation" style={{ height: 30, width: "auto", filter: scrolled ? "invert(1) sepia(1) saturate(3) hue-rotate(190deg)" : "none", transition: "filter .3s" }} />
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <a href="/#services" style={{ fontSize: ".875rem", fontWeight: 500, color: scrolled ? "var(--text-secondary)" : "rgba(255,255,255,0.85)", textDecoration: "none" }}>Services</a>
          <a href="/#how-it-works" style={{ fontSize: ".875rem", fontWeight: 500, color: scrolled ? "var(--text-secondary)" : "rgba(255,255,255,0.85)", textDecoration: "none" }}>How It Works</a>
          <a href="/#contact" style={{
            background: scrolled ? "var(--blue)" : "var(--white)", color: scrolled ? "var(--white)" : "var(--blue)",
            padding: "10px 22px", borderRadius: 100, fontWeight: 700, fontSize: ".875rem", textDecoration: "none",
          }}>Book a Demo</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "var(--blue-900)", padding: "80px 5% 80px", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "6px 18px", fontSize: ".75rem", fontWeight: 700, letterSpacing: ".1em", color: "var(--blue-200)", marginBottom: 24 }}>
          PRICING
        </div>
        <h1 style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-.03em", color: "var(--white)", lineHeight: 1.1, maxWidth: 700, margin: "0 auto 20px" }}>
          One package. Fully managed.<br />
          <span style={{ color: "var(--blue-200)" }}>No setup headaches.</span>
        </h1>
        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", maxWidth: 520, margin: "0 auto" }}>
          One monthly fee. We handle everything — setup, configuration, and ongoing optimization. You just see more booked jobs.
        </p>
      </section>

      {/* Pricing cards — two tiers */}
      <section style={{ padding: "80px 5%", background: "var(--gray-50)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: ".9rem", marginBottom: 48 }}>
            All plans include a <strong style={{color:"var(--text-primary)"}}>$750 one-time setup fee</strong> — covers configuration, onboarding, and testing before go-live.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
            {/* Tier 1 */}
            <div style={{ background: "var(--white)", border: "1.5px solid var(--gray-100)", borderRadius: 24, padding: "40px 36px" }}>
              <div style={{ display: "inline-block", background: "var(--blue-50)", color: "var(--blue-400)", fontSize: ".72rem", fontWeight: 700, letterSpacing: ".08em", padding: "4px 12px", borderRadius: 100, marginBottom: 20 }}>TEXT & EMAIL</div>
              <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>AI Text & Email Follow-Up</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: ".9rem", lineHeight: 1.6, marginBottom: 28 }}>AI handles every lead by text and email — answers questions, books appointments, and follows up until the job is done.</p>
              <div style={{ marginBottom: 28 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                  <span style={{ fontSize: "2.75rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-.03em" }}>$499</span>
                  <span style={{ color: "var(--text-muted)", fontSize: ".9rem" }}>/month</span>
                </div>
              </div>
              <a href="/#contact" style={{ display: "block", textAlign: "center", background: "var(--gray-50)", color: "var(--blue)", border: "1.5px solid var(--blue)", padding: "14px", borderRadius: 100, fontWeight: 700, fontSize: ".95rem", textDecoration: "none", marginBottom: 28 }}>Get Started</a>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["AI-written follow-up by text and email","Full conversation handling and Q&A","Appointment booking and reminders","Gmail / Outlook inbox connected","Urgent situation detection and alerts","Monthly performance tuning"].map(f => (
                  <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: ".85rem", color: "var(--text-secondary)" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue-400)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </div>
                ))}
              </div>
            </div>
            {/* Tier 2 — Voice */}
            <div style={{ background: "var(--white)", border: "2px solid var(--blue)", borderRadius: 24, padding: "40px 36px", boxShadow: "0 20px 60px rgba(18,70,168,0.1)", position: "relative" }}>
              <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: "var(--blue)", color: "#fff", fontSize: ".72rem", fontWeight: 700, letterSpacing: ".06em", padding: "4px 16px", borderRadius: 100 }}>MOST POPULAR</div>
              <div style={{ display: "inline-block", background: "var(--blue-50)", color: "var(--blue-400)", fontSize: ".72rem", fontWeight: 700, letterSpacing: ".08em", padding: "4px 12px", borderRadius: 100, marginBottom: 20 }}>VOICE + TEXT + EMAIL</div>
              <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: 8 }}>AI Voice & Full Follow-Up</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: ".9rem", lineHeight: 1.6, marginBottom: 28 }}>Everything in Text & Email, plus the AI answers inbound phone calls, handles the conversation, and books the appointment in real time.</p>
              <div style={{ marginBottom: 28 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                  <span style={{ fontSize: "2.75rem", fontWeight: 800, color: "var(--blue)", letterSpacing: "-.03em" }}>$749</span>
                  <span style={{ color: "var(--text-muted)", fontSize: ".9rem" }}>/month</span>
                </div>
              </div>
              <a href="/#contact" style={{ display: "block", textAlign: "center", background: "var(--blue)", color: "#fff", padding: "14px", borderRadius: 100, fontWeight: 700, fontSize: ".95rem", textDecoration: "none", marginBottom: 28 }}>Get Started</a>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["Everything in Text & Email","AI answers inbound phone calls","Real-time voice conversation and booking","Emergency call escalation and routing","After-hours call handling","Monthly performance tuning"].map(f => (
                  <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: ".85rem", color: "var(--text-secondary)" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--blue-400)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI section */}
      <section style={{ padding: "80px 5%", background: "var(--blue-900)", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.5rem)", fontWeight: 800, color: "var(--white)", letterSpacing: "-.02em", marginBottom: 16 }}>
          One extra sale covers the cost.
        </h2>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", maxWidth: 560, margin: "0 auto 48px" }}>
          The average service call generates $200–$500. Lugano pays for itself the moment a few cold leads turn into booked jobs.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
          {[["$0", "Cost per lead followed up"], ["10 min", "First email after missed call"], ["24/7", "AI availability, including weekends"], ["100%", "Of leads followed up, every time"]].map(([stat, label]) => (
            <div key={stat} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--white)", letterSpacing: "-.03em" }}>{stat}</div>
              <div style={{ fontSize: ".8rem", color: "rgba(255,255,255,0.5)", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 5%", background: "var(--white)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, letterSpacing: "-.02em", marginBottom: 48, textAlign: "center" }}>Common questions</h2>
          {[
            ["Is there a setup fee?", "Yes — there's a one-time $750 setup fee regardless of which plan you choose. It covers configuration, connecting your systems, and testing everything before go-live."],
            ["How long does setup take?", "Most businesses are live within 5–10 business days from signing. We move fast."],
            ["Do I need to change my existing phone system or scheduling software?", "No. We connect to your existing email and phone system. No installs, no IT department required."],
            ["Can I cancel anytime?", "Yes — month-to-month. No long-term contracts. If you need to pause or cancel, just email us."],
            ["What happens when a customer replies?", "The AI reads the reply and responds naturally — answering questions, handling objections, and working toward a booked appointment. Your team only gets involved when a buyer is ready to come in."],
            ["Do you work with companies that have multiple locations?", "Yes. Each location gets its own configuration. Contact us for group pricing."],
          ].map(([q, a]) => (
            <div key={q as string} className="faq-item">
              <p style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 10, fontSize: ".95rem" }}>{q}</p>
              <p style={{ color: "var(--text-secondary)", fontSize: ".9rem", lineHeight: 1.65 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "var(--blue-900)", padding: "40px 5%", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <img src="/logo.svg" alt="Lugano Automation" style={{ height: 26, width: "auto" }} />
        </a>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="/terms" style={{ color: "rgba(255,255,255,0.4)", fontSize: ".8rem", textDecoration: "none" }}>Terms</a>
          <a href="/privacy" style={{ color: "rgba(255,255,255,0.4)", fontSize: ".8rem", textDecoration: "none" }}>Privacy</a>
          <a href="/pricing" style={{ color: "rgba(255,255,255,0.4)", fontSize: ".8rem", textDecoration: "none" }}>Pricing</a>
          <a href="mailto:sales@luganoautomation.com" style={{ color: "rgba(255,255,255,0.4)", fontSize: ".8rem", textDecoration: "none" }}>Contact</a>
        </div>
      </footer>
    </div>
  );
}
