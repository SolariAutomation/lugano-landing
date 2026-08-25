"use client";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const bubblesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal, .reveal-scale").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = bubblesRef.current;
    if (!container) return;
    function createBubble() {
      if (!container) return;
      const b = document.createElement("div");
      const size = Math.random() * 80 + 20;
      b.style.cssText = `position:absolute;border-radius:50%;border:1px solid rgba(255,255,255,0.08);width:${size}px;height:${size}px;left:${Math.random() * 100}%;bottom:-${size}px;animation:bubbleRise ${Math.random() * 12 + 8}s ${Math.random() * 4}s linear forwards;opacity:${Math.random() * 0.4 + 0.1}`;
      container.appendChild(b);
      setTimeout(() => b.remove(), 22000);
    }
    for (let i = 0; i < 8; i++) setTimeout(createBubble, i * 1200);
    const interval = setInterval(createBubble, 2500);
    return () => clearInterval(interval);
  }, []);

  function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }

  const navLinkStyle = (dark: boolean): React.CSSProperties => ({
    fontSize: ".875rem",
    fontWeight: 500,
    color: dark ? "var(--text-secondary)" : "rgba(255,255,255,0.85)",
    textDecoration: "none",
    transition: "color .3s",
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        :root{
          --blue-900:#040D1A;--blue-800:#071529;--blue-700:#0A1E3D;--blue-600:#0E2A57;
          --blue:#1246A8;--blue-400:#2560D0;--blue-300:#4B82E8;--blue-200:#89AEFF;
          --blue-100:#C5D8FF;--blue-50:#EBF1FF;--white:#FFFFFF;
          --gray-50:#F8FAFF;--gray-100:#EFF3FF;
          --text-primary:#040D1A;--text-secondary:#3A4A6B;--text-muted:#6B7FAA;
          --nav-h:72px;--section-gap:140px;
        }
        html{scroll-behavior:smooth;font-size:16px}
        body{font-family:'Plus Jakarta Sans',system-ui,sans-serif;background:var(--white);color:var(--text-primary);overflow-x:hidden;-webkit-font-smoothing:antialiased}
        @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:0.01ms!important;transition-duration:0.01ms!important}.reveal{opacity:1!important;transform:none!important}}
        @keyframes float{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-30px) scale(1.05)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes scrollLine{0%{height:0;opacity:1}100%{height:40px;opacity:0}}
        @keyframes bubbleRise{0%{transform:translateY(0) scale(0.8);opacity:0}10%{opacity:0.6}90%{opacity:0.2}100%{transform:translateY(-100vh) scale(1.2);opacity:0}}
        .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1)}
        .reveal.visible{opacity:1;transform:translateY(0)}
        .reveal-scale{opacity:0;transform:scale(0.94);transition:opacity .6s cubic-bezier(.22,1,.36,1),transform .6s cubic-bezier(.22,1,.36,1)}
        .reveal-scale.visible{opacity:1;transform:scale(1)}
        .reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}.reveal-delay-3{transition-delay:.3s}.reveal-delay-4{transition-delay:.4s}.reveal-delay-5{transition-delay:.5s}
        .section-eyebrow{display:inline-block;font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--blue-400);margin-bottom:16px}
        .section-title{font-size:clamp(2rem,4vw,3.25rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:var(--text-primary);max-width:640px}
        .section-title em{font-style:normal;color:var(--blue-400)}
        .section-sub{font-size:1.1rem;line-height:1.7;color:var(--text-secondary);max-width:560px;margin-top:18px}
        .centered{text-align:center}.centered .section-title,.centered .section-sub{margin-left:auto;margin-right:auto}
        .btn-primary{background:var(--white);color:var(--blue);padding:16px 36px;border-radius:100px;font-weight:700;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 24px rgba(18,70,168,.25);cursor:pointer;border:none;display:inline-block;font-family:inherit}
        .btn-primary:hover{transform:scale(1.04);box-shadow:0 8px 40px rgba(18,70,168,.35)}
        .btn-ghost{background:transparent;color:var(--white);padding:16px 36px;border-radius:100px;font-weight:600;font-size:1rem;text-decoration:none;border:1.5px solid rgba(255,255,255,.35);transition:background .25s,border-color .25s,transform .2s;cursor:pointer;display:inline-block}
        .btn-ghost:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.6);transform:scale(1.02)}
        .service-card{background:var(--white);border:1px solid var(--gray-100);border-radius:24px;padding:36px 32px;transition:transform .3s cubic-bezier(.22,1,.36,1),box-shadow .3s,border-color .3s;cursor:default}
        .service-card:hover{transform:translateY(-6px);box-shadow:0 20px 60px rgba(18,70,168,.1);border-color:var(--blue-100)}
        .service-icon{width:52px;height:52px;border-radius:14px;background:var(--blue-50);display:grid;place-items:center;margin-bottom:22px;transition:background .3s}
        .service-card:hover .service-icon{background:var(--blue-100)}
        .service-tag{display:inline-block;margin-top:20px;font-size:.75rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--blue-400);background:var(--blue-50);padding:4px 12px;border-radius:100px}
        .hiw-step{background:var(--blue-800);padding:44px 36px;transition:background .3s}
        .hiw-step:hover{background:var(--blue-800)}
        .step-icon{width:48px;height:48px;border-radius:12px;background:rgba(75,130,232,.12);display:grid;place-items:center;margin-bottom:20px;transition:background .3s}
        .hiw-step:hover .step-icon{background:rgba(75,130,232,.2)}
        .feature-visual{background:linear-gradient(135deg,var(--blue-700) 0%,var(--blue-600) 100%);border-radius:24px;padding:48px;min-height:340px;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden}
        .feature-visual::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 80% 20%,rgba(75,130,232,.25) 0%,transparent 60%)}
        .feature-chip{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);color:rgba(255,255,255,.85);font-size:.8rem;font-weight:600;padding:6px 14px;border-radius:100px}
        .check-icon{width:20px;height:20px;border-radius:50%;background:var(--blue-50);display:grid;place-items:center;flex-shrink:0;margin-top:2px}
        .contact-method{flex:1;min-width:140px;display:flex;align-items:center;gap:10px;background:var(--gray-50);border:1.5px solid var(--gray-100);border-radius:14px;padding:14px 16px;text-decoration:none;color:var(--text-primary);font-size:.875rem;font-weight:600;transition:border-color .25s,background .25s,transform .2s}
        .contact-method:hover{border-color:var(--blue-300);background:var(--blue-50);transform:translateY(-2px)}
        .two-col{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;max-width:1160px;margin:0 auto}
        @media(max-width:900px){.two-col{grid-template-columns:1fr!important;gap:40px!important}}
        @media(max-width:768px){.footer-top{grid-template-columns:1fr 1fr!important}.footer-brand{grid-column:1/-1!important}:root{--section-gap:80px}}
        @media(max-width:600px){.form-grid{grid-template-columns:1fr!important}.contact-form-inner{padding:32px 24px!important}}
        @media(max-width:480px){.footer-top{grid-template-columns:1fr!important}.hero-divider{display:none!important}}
        .nav-desktop{display:flex!important}
        .nav-mobile{display:none!important}
        @media(max-width:768px){.nav-desktop{display:none!important}.nav-mobile{display:flex!important}}
      `}</style>

      {/* NAV */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,height:"var(--nav-h)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 5%",background:scrolled?"rgba(255,255,255,0.88)":"transparent",backdropFilter:scrolled?"blur(20px)":"undefined",WebkitBackdropFilter:scrolled?"blur(20px)":"undefined",boxShadow:scrolled?"0 1px 0 rgba(4,13,26,0.08)":"none",transition:"background .4s,box-shadow .4s"}}>
        <a href="/" style={{textDecoration:"none",display:"flex",alignItems:"center"}}>
          <img src="/logo.svg" alt="Lugano Automation" style={{height:32,width:"auto",filter:scrolled?"invert(1) sepia(1) saturate(3) hue-rotate(190deg)":"none",transition:"filter .3s"}} />
        </a>
        <div className="nav-desktop" style={{alignItems:"center",gap:36}}>
          <a href="#services" onClick={(e) => smoothScroll(e, "#services")} style={navLinkStyle(scrolled)}>Services</a>
          <a href="#how-it-works" onClick={(e) => smoothScroll(e, "#how-it-works")} style={navLinkStyle(scrolled)}>How It Works</a>
          <a href="/pricing" style={navLinkStyle(scrolled)}>Pricing</a>
          <a href="#contact" onClick={(e) => smoothScroll(e, "#contact")} style={{background:scrolled?"var(--blue)":"var(--white)",color:scrolled?"var(--white)":"var(--blue)",padding:"10px 22px",borderRadius:100,fontWeight:700,fontSize:".875rem",textDecoration:"none",display:"inline-block"}}>Book a Demo</a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="nav-mobile" style={{flexDirection:"column",gap:4,cursor:"pointer",border:"none",background:"none",padding:6}} aria-label="Toggle menu">
          {[0,1,2].map(i => <span key={i} style={{display:"block",width:22,height:2,background:scrolled?"var(--text-primary)":"var(--white)",borderRadius:2}}/>)}
        </button>
      </nav>

      {menuOpen && (
        <div style={{position:"fixed",top:"var(--nav-h)",left:0,right:0,zIndex:99,background:"var(--white)",padding:"1rem 0",boxShadow:"0 8px 32px rgba(4,13,26,0.12)",display:"flex",flexDirection:"column"}}>
          {([["#services","Services"],["#how-it-works","How It Works"],["#contact","Talk to Us"]] as [string,string][]).map(([href,label]) => (
            <a key={href} href={href} onClick={(e) => smoothScroll(e, href)} style={{color:"var(--text-secondary)",padding:"14px 5%",borderBottom:"1px solid var(--gray-100)",textDecoration:"none",fontWeight:500}}>{label}</a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section style={{minHeight:"100vh",background:"linear-gradient(150deg,var(--blue-900) 0%,var(--blue-700) 45%,var(--blue-600) 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"calc(var(--nav-h) + 40px) 5% 80px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,pointerEvents:"none",overflow:"hidden"}}>
          <div style={{position:"absolute",borderRadius:"50%",background:"radial-gradient(circle,rgba(36,96,208,0.35) 0%,transparent 70%)",width:600,height:600,top:-150,right:-100,animation:"float 8s 0s ease-in-out infinite"}}/>
          <div style={{position:"absolute",borderRadius:"50%",background:"radial-gradient(circle,rgba(36,96,208,0.35) 0%,transparent 70%)",width:400,height:400,bottom:-80,left:-80,animation:"float 8s -3s ease-in-out infinite"}}/>
          <div style={{position:"absolute",borderRadius:"50%",background:"radial-gradient(circle,rgba(36,96,208,0.35) 0%,transparent 70%)",width:250,height:250,top:"40%",left:"15%",opacity:0.5,animation:"float 8s -5s ease-in-out infinite"}}/>
          <div ref={bubblesRef} style={{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"}}/>
        </div>

        <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.15)",color:"var(--blue-100)",fontSize:".8rem",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",padding:"6px 16px",borderRadius:100,marginBottom:28,backdropFilter:"blur(8px)",opacity:0,animation:"fadeUp .8s .2s ease forwards"}}>
          <span style={{width:6,height:6,borderRadius:"50%",background:"#4B82E8",animation:"pulse 2s infinite"}}/>
          AI Automation for HVAC, Plumbing & Electrical Companies
        </div>

        <h1 style={{fontSize:"clamp(2.5rem,6vw,5.5rem)",fontWeight:800,letterSpacing:"-.03em",lineHeight:1.06,color:"var(--white)",maxWidth:960,opacity:0,animation:"fadeUp .9s .4s ease forwards"}}>
          Your company's AI dispatcher{" "}
          <em style={{fontStyle:"normal",color:"var(--blue-200)"}}>for every incoming lead.</em>
        </h1>

        <p style={{fontSize:"clamp(1rem,2vw,1.25rem)",lineHeight:1.65,color:"rgba(255,255,255,0.65)",maxWidth:600,margin:"24px auto 0",opacity:0,animation:"fadeUp .9s .6s ease forwards"}}>
          Lugano handles the entire conversation from missed call to booked appointment. The AI follows up, answers questions, handles objections, and gets them in the door. Your team steps in when they&apos;re ready to buy.
        </p>

        <div style={{display:"flex",gap:14,marginTop:44,flexWrap:"wrap",justifyContent:"center",opacity:0,animation:"fadeUp .9s .8s ease forwards"}}>
          <a href="#contact" onClick={(e) => smoothScroll(e, "#contact")} className="btn-primary">Get a Free Strategy Call</a>
          <a href="#services" onClick={(e) => smoothScroll(e, "#services")} className="btn-ghost">See What We Do</a>
        </div>

        <div style={{display:"flex",gap:48,marginTop:72,flexWrap:"wrap",justifyContent:"center",opacity:0,animation:"fadeUp .9s 1s ease forwards"}}>
          <div style={{textAlign:"center"}}>
            <span style={{fontSize:"2.2rem",fontWeight:800,color:"var(--white)",letterSpacing:"-.03em",display:"block"}}>3</span>
            <span style={{fontSize:".8rem",color:"rgba(255,255,255,0.5)",marginTop:2,letterSpacing:".04em"}}>Services built for home service companies</span>
          </div>
          <div className="hero-divider" style={{width:1,height:48,background:"rgba(255,255,255,0.15)",alignSelf:"center"}}/>
          <div style={{textAlign:"center"}}>
            <span style={{fontSize:"2.2rem",fontWeight:800,color:"var(--white)",letterSpacing:"-.03em",display:"block"}}>100%</span>
            <span style={{fontSize:".8rem",color:"rgba(255,255,255,0.5)",marginTop:2,letterSpacing:".04em"}}>Of leads followed up — every time</span>
          </div>
          <div className="hero-divider" style={{width:1,height:48,background:"rgba(255,255,255,0.15)",alignSelf:"center"}}/>
          <div style={{textAlign:"center"}}>
            <span style={{fontSize:"2.2rem",fontWeight:800,color:"var(--white)",letterSpacing:"-.03em",display:"block"}}>0</span>
            <span style={{fontSize:".8rem",color:"rgba(255,255,255,0.5)",marginTop:2,letterSpacing:".04em"}}>Leads slipping through the cracks</span>
          </div>
        </div>

        <div style={{position:"absolute",bottom:36,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:8,color:"rgba(255,255,255,0.4)",fontSize:".75rem",letterSpacing:".08em",opacity:0,animation:"fadeIn 1s 1.4s ease forwards"}}>
          <span>SCROLL</span>
          <div style={{width:1.5,height:40,background:"linear-gradient(to bottom,rgba(255,255,255,0.5),transparent)",animation:"scrollLine 1.8s ease-in-out infinite"}}/>
        </div>
      </section>

      {/* INTRO */}
      <section id="intro" style={{padding:"var(--section-gap) 5%",background:"var(--white)"}}>
        <div className="two-col">
          <div>
            <span className="section-eyebrow reveal">The Problem</span>
            <h2 className="section-title reveal reveal-delay-1">Most leads go to whoever calls back first <em>and it's often not you.</em></h2>
            <p className="section-sub reveal reveal-delay-2">Your sales team is busy with floor customers. Meanwhile, the leads from your website, Google, and missed calls just sit there. By the time someone follows up, that customer already called the next company. Lugano deploys an AI that follows up every single one: instantly, personally, and around the clock.</p>
            <ul style={{listStyle:"none",marginTop:28,display:"flex",flexDirection:"column",gap:12}}>
              {[
                "Every lead followed up in minutes, nights, weekends, and holidays",
                "AI handles the full back-and-forth your team only talks to buyers who are ready",
                "Fully managed setup We configure everything, you see results",
              ].map((text, i) => (
                <li key={i} className={`reveal reveal-delay-${i + 3}`} style={{display:"flex",alignItems:"flex-start",gap:12,fontSize:".95rem",color:"var(--text-secondary)",lineHeight:1.55}}>
                  <span className="check-icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="feature-visual reveal-scale" style={{background:"linear-gradient(135deg,var(--blue-800) 0%,var(--blue-700) 100%)"}}>
            <div style={{fontSize:".75rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"var(--blue-200)",marginBottom:16,position:"relative"}}>How It Works</div>
            <div style={{display:"flex",flexDirection:"column",gap:14,position:"relative"}}>
              {[
                {n:1,t:"Lead comes in",s:"Website, Google, phone, text",active:false,faded:false},
                {n:2,t:"Personal follow-up sent",s:"SMS + email, day or night",active:false,faded:false},
                {n:3,t:"Appointment booked",s:"Synced to your calendar automatically",active:true,faded:false},
                {n:4,t:"CRM updated automatically",s:"Zero manual entry for your team",active:false,faded:true},
              ].map((step) => (
                <div key={step.n} style={{background:step.active?"rgba(75,130,232,0.22)":"rgba(255,255,255,0.1)",border:step.active?"1px solid rgba(75,130,232,0.35)":"1px solid transparent",borderRadius:12,padding:"14px 18px",display:"flex",alignItems:"center",gap:14,opacity:step.faded?0.6:1}}>
                  <div style={{width:32,height:32,borderRadius:"50%",background:step.active?"rgba(75,130,232,0.3)":"rgba(75,130,232,0.2)",display:"grid",placeItems:"center",flexShrink:0,fontSize:".8rem",fontWeight:800,color:"var(--blue-200)"}}>{step.n}</div>
                  <div>
                    <div style={{color:"rgba(255,255,255,0.95)",fontSize:".875rem",fontWeight:600}}>{step.t}</div>
                    <div style={{color:"rgba(255,255,255,0.4)",fontSize:".78rem",marginTop:2}}>{step.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 1 */}
      <section style={{padding:"var(--section-gap) 5%",background:"var(--white)"}}>
        <div className="two-col">
          <div className="feature-visual reveal-scale">
            <div style={{fontSize:".75rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"var(--blue-200)",marginBottom:16,position:"relative"}}>Lead Follow-Up Coverage</div>
            <div style={{fontSize:"4rem",fontWeight:800,letterSpacing:"-.04em",color:"var(--white)",lineHeight:1,position:"relative"}}>100%</div>
            <div style={{fontSize:".9rem",color:"rgba(255,255,255,0.55)",marginTop:6,position:"relative"}}>Of inbound leads receive a personal follow-up</div>
            <div style={{display:"flex",gap:10,marginTop:28,flexWrap:"wrap",position:"relative"}}>
              {["Text Message","Email","After Hours","Weekends"].map((c) => (
                <span key={c} className="feature-chip">{c}</span>
              ))}
            </div>
          </div>
          <div>
            <span className="section-eyebrow reveal">Never Miss a Lead</span>
            <h2 style={{fontSize:"clamp(1.75rem,3vw,2.6rem)",fontWeight:800,letterSpacing:"-.03em",lineHeight:1.12}} className="reveal reveal-delay-1">
              The buyer who doesn&apos;t hear back{" "}
              <em style={{fontStyle:"normal",color:"var(--blue-400)"}}>buys from your competitor</em>
            </h2>
            <p style={{fontSize:"1rem",lineHeight:1.75,color:"var(--text-secondary)",marginTop:18}} className="reveal reveal-delay-2">
              Most companies only follow up with the hottest leads and let the rest go cold. Lugano makes sure every single customer gets a personal, timely response.
            </p>
            <ul style={{listStyle:"none",marginTop:24,display:"flex",flexDirection:"column",gap:12}}>
              {[
                "Handles the full back-and-forth conversation not just a one-time email blast",
                "Detects urgency and alerts your team the moment someone needs help now",
                "Works across every lead source: website, Google, missed calls, and more",
              ].map((text, i) => (
                <li key={i} className={`reveal reveal-delay-${i + 3}`} style={{display:"flex",alignItems:"flex-start",gap:12,fontSize:".95rem",color:"var(--text-secondary)",lineHeight:1.55}}>
                  <span className="check-icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      {/* AI Demo — Chat Bubbles */}
      <section style={{padding:"80px 5%",background:"var(--white)"}}>
        <div style={{maxWidth:1160,margin:"0 auto"}}>
          <div className="centered" style={{marginBottom:56}}>
            <span className="section-eyebrow reveal">See It In Action</span>
            <h2 className="section-title reveal reveal-delay-1">
              This is what your customers <em>actually experience</em>
            </h2>
            <p className="section-sub reveal reveal-delay-2">A real conversation from first contact to booked appointment. No templates. No scripts. Just the AI working.</p>
          </div>

          <div className="reveal-scale" style={{background:"var(--gray-50)",border:"1px solid var(--gray-100)",borderRadius:24,overflow:"hidden",maxWidth:480,margin:"0 auto",boxShadow:"0 20px 60px rgba(4,13,26,0.08)"}}>
            {/* Phone header */}
            <div style={{background:"var(--blue-900)",padding:"16px 20px",display:"flex",alignItems:"center",gap:12}}>
              <div style={{width:36,height:36,borderRadius:"50%",background:"rgba(255,255,255,0.1)",display:"grid",placeItems:"center"}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div>
                <div style={{color:"#fff",fontSize:".875rem",fontWeight:600}}>[Business Name]</div>
                <div style={{color:"rgba(255,255,255,0.45)",fontSize:".72rem"}}>AI Service Assistant</div>
              </div>
            </div>

            {/* Messages */}
            <div style={{padding:"20px 16px",display:"flex",flexDirection:"column",gap:12,background:"var(--white)"}}>

              {/* Outbound — first contact */}
              <div style={{display:"flex",justifyContent:"flex-end"}}>
                <div style={{background:"#1246A8",color:"#fff",borderRadius:"18px 18px 4px 18px",padding:"10px 14px",maxWidth:"80%",fontSize:".875rem",lineHeight:1.5}}>
                  Hi Mike, thanks for reaching out about your AC — sounds like it's not cooling. Can you tell me a bit more about what's going on?
                </div>
              </div>

              {/* Inbound — customer reply */}
              <div style={{display:"flex",justifyContent:"flex-start"}}>
                <div style={{background:"var(--gray-50)",border:"1px solid var(--gray-100)",color:"var(--text-primary)",borderRadius:"18px 18px 18px 4px",padding:"10px 14px",maxWidth:"80%",fontSize:".875rem",lineHeight:1.5}}>
                  Yeah it's blowing warm air, been like that since this morning. It's pretty hot in here.
                </div>
              </div>

              {/* Outbound — follow-up */}
              <div style={{display:"flex",justifyContent:"flex-end"}}>
                <div style={{background:"#1246A8",color:"#fff",borderRadius:"18px 18px 4px 18px",padding:"10px 14px",maxWidth:"85%",fontSize:".875rem",lineHeight:1.5}}>
                  That sounds urgent — would you like us to get someone out to you as soon as possible?
                </div>
              </div>

              {/* Inbound — customer reply */}
              <div style={{display:"flex",justifyContent:"flex-start"}}>
                <div style={{background:"var(--gray-50)",border:"1px solid var(--gray-100)",color:"var(--text-primary)",borderRadius:"18px 18px 18px 4px",padding:"10px 14px",maxWidth:"80%",fontSize:".875rem",lineHeight:1.5}}>
                  Yes please, today if you can
                </div>
              </div>

              {/* Outbound — dispatch response */}
              <div style={{display:"flex",justifyContent:"flex-end"}}>
                <div style={{background:"#1246A8",color:"#fff",borderRadius:"18px 18px 4px 18px",padding:"10px 14px",maxWidth:"85%",fontSize:".875rem",lineHeight:1.5}}>
                  Got it — connecting you with our dispatch team right now, they'll call you within a few minutes to get someone out today.
                </div>
              </div>

            </div>

            {/* Footer note */}
            <div style={{background:"var(--gray-50)",borderTop:"1px solid var(--gray-100)",padding:"12px 20px",fontSize:".78rem",color:"var(--text-muted)",textAlign:"center"}}>
              Fully automated. No dispatcher involved yet.
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{padding:"var(--section-gap) 5%",background:"var(--gray-50)"}}>
        <div className="centered">
          <h2 className="section-title reveal reveal-delay-1" style={{marginTop:0}}>What we deploy <em>for your business</em></h2>
          <p className="section-sub reveal reveal-delay-2">Three fully managed AI systems that work around the clock so your team can focus on the work.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:20,marginTop:60,maxWidth:1160,marginLeft:"auto",marginRight:"auto"}}>
          <div className="service-card reveal reveal-delay-1">
            <div className="service-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--blue-400)" strokeWidth="1.8">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h3 style={{fontSize:"1.2rem",fontWeight:700,letterSpacing:"-.01em",marginBottom:10}}>Lead Follow-Up — SMS &amp; Email</h3>
            <p style={{fontSize:".95rem",lineHeight:1.7,color:"var(--text-secondary)"}}>Every inbound lead gets a personal, conversational follow-up by text and email. Your buyers feel like they&apos;re talking to someone on your team — because they essentially are. We handle the entire back-and-forth until they&apos;re ready to come in.</p>
            <span className="service-tag">Core Service</span>
          </div>
          <div className="service-card reveal reveal-delay-2">
            <div className="service-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--blue-400)" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <h3 style={{fontSize:"1.2rem",fontWeight:700,letterSpacing:"-.01em",marginBottom:10}}>Appointment Booking &amp; Reminders</h3>
            <p style={{fontSize:".95rem",lineHeight:1.7,color:"var(--text-secondary)"}}>The system books test drives and service appointments directly into your team&apos;s calendar, then sends automated reminders to cut down no-shows. More appointments kept means more cars sold — simple as that.</p>
            <span className="service-tag">Reduces No-Shows</span>
          </div>
          <div className="service-card reveal reveal-delay-3">
            <div className="service-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--blue-400)" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18M9 21V9"/>
              </svg>
            </div>
            <h3 style={{fontSize:"1.2rem",fontWeight:700,letterSpacing:"-.01em",marginBottom:10}}>Emergency Detection &amp; Routing</h3>
            <p style={{fontSize:".95rem",lineHeight:1.7,color:"var(--text-secondary)"}}>Every conversation is automatically logged and synced. Lead stages update themselves. The right salesperson gets notified at exactly the right moment. Plugs into VinSolutions, DealerSocket, and more without replacing your existing stack.</p>
            <span className="service-tag">Never Miss an Urgent Call</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{padding:"var(--section-gap) 5%",background:"var(--blue-900)"}}>
        <div className="centered">
          <span className="section-eyebrow reveal" style={{color:"var(--blue-200)"}}>The Process</span>
          <h2 className="section-title reveal reveal-delay-1" style={{color:"var(--white)"}}>Up and running <em style={{fontStyle:"normal",color:"var(--blue-200)"}}>in under 2 weeks</em></h2>
          <p className="section-sub reveal reveal-delay-2" style={{color:"rgba(255,255,255,0.55)"}}>We handle every part of the setup. You don&apos;t need to be technical You just need to show us your process.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:1,marginTop:64,maxWidth:1160,marginLeft:"auto",marginRight:"auto",background:"rgba(255,255,255,0.06)",borderRadius:24,overflow:"hidden"}}>
          <div className="hiw-step reveal reveal-delay-1">
            <span style={{fontSize:".75rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"var(--blue-300)",marginBottom:20,display:"block"}}>Step 01</span>
            <div className="step-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue-200)" strokeWidth="1.8"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div>
            <h3 style={{fontSize:"1.1rem",fontWeight:700,color:"var(--white)",marginBottom:10,letterSpacing:"-.01em",opacity:1}}>Strategy Call</h3>
            <p style={{fontSize:".9rem",lineHeight:1.65,color:"rgba(255,255,255,0.75)"}}>We spend 30 minutes learning your business — how leads come in, how your team follows up, and where jobs are falling through the cracks.</p>
          </div>
          <div className="hiw-step reveal reveal-delay-2">
            <span style={{fontSize:".75rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"var(--blue-300)",marginBottom:20,display:"block"}}>Step 02</span>
            <div className="step-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue-200)" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg></div>
            <h3 style={{fontSize:"1.1rem",fontWeight:700,color:"var(--white)",marginBottom:10,letterSpacing:"-.01em",opacity:1}}>Custom Build</h3>
            <p style={{fontSize:".9rem",lineHeight:1.65,color:"rgba(255,255,255,0.75)"}}>We configure the AI around your business — your tone, your services, your follow-up timing. It sounds like your best dispatcher, not a robot.</p>
          </div>
          <div className="hiw-step reveal reveal-delay-3">
            <span style={{fontSize:".75rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"var(--blue-300)",marginBottom:20,display:"block"}}>Step 03</span>
            <div className="step-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue-200)" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
            <h3 style={{fontSize:"1.1rem",fontWeight:700,color:"var(--white)",marginBottom:10,letterSpacing:"-.01em",opacity:1}}>Integration &amp; Testing</h3>
            <p style={{fontSize:".9rem",lineHeight:1.65,color:"rgba(255,255,255,0.75)"}}>We connect to your phone, email, and website. We run test conversations end-to-end and don't go live until everything is exactly right.</p>
          </div>
          <div className="hiw-step reveal reveal-delay-4">
            <span style={{fontSize:".75rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"var(--blue-300)",marginBottom:20,display:"block"}}>Step 04</span>
            <div className="step-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue-200)" strokeWidth="1.8"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>
            <h3 style={{fontSize:"1.1rem",fontWeight:700,color:"var(--white)",marginBottom:10,letterSpacing:"-.01em",opacity:1}}>Go Live &amp; Optimize</h3>
            <p style={{fontSize:".9rem",lineHeight:1.65,color:"rgba(255,255,255,0.75)"}}>The AI goes live. Within the first week you'll see leads getting followed up that would have gone cold. We monitor and tune the system every month.</p>
          </div>
        </div>
      </section>

      {/* FEATURE 2 */}
      <section style={{padding:"var(--section-gap) 5%",background:"var(--blue-50)"}}>
        <div className="two-col">
          <div>
            <span className="section-eyebrow reveal">Stop Losing Appointments</span>
            <h2 style={{fontSize:"clamp(1.75rem,3vw,2.6rem)",fontWeight:800,letterSpacing:"-.03em",lineHeight:1.12}} className="reveal reveal-delay-1">
              Every booked appointment should{" "}
              <em style={{fontStyle:"normal",color:"var(--blue-400)"}}>actually show up</em>
            </h2>
            <p style={{fontSize:"1rem",lineHeight:1.75,color:"var(--text-secondary)",marginTop:18}} className="reveal reveal-delay-2">
              A no-show is a wasted truck roll and a lost afternoon. Our automated reminder system keeps customers engaged from the moment they book to the moment your tech arrives.
            </p>
            <ul style={{listStyle:"none",marginTop:24,display:"flex",flexDirection:"column",gap:12}}>
              {[
                "Automated confirmation and reminder sequences via text and email",
                "Buyers can reschedule in one tap rather than just ghosting you",
                "Syncs directly with your team's calendar with zero double-booking",
              ].map((text, i) => (
                <li key={i} className={`reveal reveal-delay-${i + 3}`} style={{display:"flex",alignItems:"flex-start",gap:12,fontSize:".95rem",color:"var(--text-secondary)",lineHeight:1.55}}>
                  <span className="check-icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="feature-visual reveal-scale" style={{background:"linear-gradient(135deg,var(--blue-800) 0%,var(--blue-700) 100%)"}}>
            <div style={{fontSize:".75rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"var(--blue-200)",marginBottom:16,position:"relative"}}>Appointment Sequence</div>
            <div style={{display:"flex",flexDirection:"column",gap:14,position:"relative"}}>
              {[
                {label:"Booking confirmed via SMS",status:"Sent",active:false,faded:false,green:true},
                {label:"Day before reminder via SMS",status:"Sent",active:false,faded:false,green:true},
                {label:"Morning of: final reminder",status:"Active",active:true,faded:false,green:false},
                {label:"Post-visit follow-up",status:"Queued",active:false,faded:true,green:false},
              ].map((row, i) => (
                <div key={i} style={{background:row.active?"rgba(75,130,232,0.2)":"rgba(255,255,255,0.08)",border:row.active?"1px solid rgba(75,130,232,0.4)":"1px solid transparent",borderRadius:12,padding:"14px 18px",display:"flex",justifyContent:"space-between",alignItems:"center",opacity:row.faded?0.6:1}}>
                  <span style={{color:"rgba(255,255,255,0.95)",fontSize:".85rem",fontWeight:600}}>{row.label}</span>
                  <span style={{background:row.green?"#22C55E":row.active?"var(--blue-400)":"rgba(255,255,255,0.1)",color:"#fff",fontSize:".7rem",fontWeight:700,padding:"3px 10px",borderRadius:100}}>{row.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{padding:"var(--section-gap) 5%",background:"linear-gradient(135deg,var(--blue-900) 0%,var(--blue-700) 60%,var(--blue-600) 100%)",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(circle at 50% 50%,rgba(36,96,208,0.3) 0%,transparent 65%)"}}/>
        <span className="section-eyebrow reveal" style={{position:"relative",color:"var(--blue-200)"}}>Let&apos;s Talk</span>
        <h2 className="section-title centered reveal reveal-delay-1" style={{color:"var(--white)",maxWidth:740,position:"relative",margin:"0 auto",textAlign:"center"}}>
          Ready to stop <em style={{fontStyle:"normal",color:"var(--blue-200)"}}>losing jobs to a slow callback?</em>
        </h2>
        <p className="section-sub centered reveal reveal-delay-2" style={{color:"rgba(255,255,255,0.6)",position:"relative",margin:"24px auto 0",textAlign:"center"}}>
          Reach out any way that works for you. We&apos;ll set up a free strategy call to walk through exactly what Lugano can do for your store.
        </p>

        <div className="contact-form-inner reveal reveal-delay-2" style={{background:"var(--white)",borderRadius:24,padding:"52px 48px",maxWidth:680,margin:"64px auto 0",boxShadow:"0 32px 80px rgba(4,13,26,0.18)",position:"relative",textAlign:"left"}}>
          <h3 style={{fontSize:"1.4rem",fontWeight:800,letterSpacing:"-.02em"}}>Get in Touch</h3>
          <p style={{fontSize:".9rem",color:"var(--text-muted)",marginTop:6,marginBottom:24}}>We typically respond the same business day.</p>

          <div style={{display:"flex",gap:12,marginBottom:32,flexWrap:"wrap"}}>
            <a href="tel:9253418041" className="contact-method">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue-400)" strokeWidth="1.8" style={{flexShrink:0}}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.47 2 2 0 0 1 3.58 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l1.82-1.82a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <div><div>(925) 341-8041</div><span style={{color:"var(--text-muted)",fontWeight:400,fontSize:".8rem"}}>Call or text anytime</span></div>
            </a>
            <a href="https://wa.me/19253418041" target="_blank" rel="noopener noreferrer" className="contact-method">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue-400)" strokeWidth="1.8" style={{flexShrink:0}}>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              <div><div>WhatsApp</div><span style={{color:"var(--text-muted)",fontWeight:400,fontSize:".8rem"}}>Message us directly</span></div>
            </a>
            <a href="mailto:sales@luganoautomation.com" className="contact-method">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue-400)" strokeWidth="1.8" style={{flexShrink:0}}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <div><div>Email Us</div><span style={{color:"var(--text-muted)",fontWeight:400,fontSize:".8rem"}}>Typically replies same day</span></div>
            </a>
          </div>

          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:28}}>
            <div style={{flex:1,height:1,background:"var(--gray-100)"}}/>
            <div style={{fontSize:".8rem",color:"var(--text-muted)",fontWeight:600,letterSpacing:".05em"}}>OR SEND A MESSAGE</div>
            <div style={{flex:1,height:1,background:"var(--gray-100)"}}/>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:"var(--blue-900)",padding:"64px 5% 40px",color:"rgba(255,255,255,0.5)"}}>
        <div className="footer-top" style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:48,paddingBottom:48,borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
          <div className="footer-brand">
            <div style={{fontSize:"1.2rem",fontWeight:800,color:"var(--white)",letterSpacing:"-.02em"}}>Lugano Automation</div>
            <p style={{fontSize:".875rem",lineHeight:1.65,marginTop:10}}>AI automation built specifically for US car dealerships. We handle lead follow-up, appointment booking, and CRM sync so your team can focus on selling.</p>
            <div style={{marginTop:16,display:"flex",gap:12,flexWrap:"wrap"}}>
              <a href="tel:9253418041" style={{color:"var(--blue-200)",textDecoration:"none",fontSize:".875rem",fontWeight:600}}>(925) 341-8041</a>
              <span style={{color:"rgba(255,255,255,0.2)"}}>·</span>
              <a href="mailto:sales@luganoautomation.com" style={{color:"rgba(255,255,255,0.5)",textDecoration:"none",fontSize:".875rem"}}>sales@luganoautomation.com</a>
            </div>
          </div>
          <div>
            <h4 style={{fontSize:".8rem",fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--white)",marginBottom:16}}>Services</h4>
            <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
              {["Lead Follow-Up (SMS & Email)","Appointment Booking","CRM Automation"].map(l => <li key={l}><a href="#services" style={{color:"rgba(255,255,255,0.5)",textDecoration:"none",fontSize:".875rem"}}>{l}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 style={{fontSize:".8rem",fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--white)",marginBottom:16}}>Company</h4>
            <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
              {[["#intro","About"],["#how-it-works","How It Works"],["#contact","Contact"]].map(([href,label]) => <li key={label}><a href={href} style={{color:"rgba(255,255,255,0.5)",textDecoration:"none",fontSize:".875rem"}}>{label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 style={{fontSize:".8rem",fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--white)",marginBottom:16}}>Get in Touch</h4>
            <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
              {[["tel:9253418041","(925) 341-8041"],["https://wa.me/19253418041","WhatsApp"],["mailto:sales@luganoautomation.com","Sales"],["mailto:support@luganoautomation.com","Support"],["#contact","Free Strategy Call"]].map(([href,label]) => <li key={label}><a href={href} style={{color:"rgba(255,255,255,0.5)",textDecoration:"none",fontSize:".875rem"}}>{label}</a></li>)}
            </ul>
          </div>
        </div>
        <div style={{paddingTop:32,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
          <p style={{fontSize:".8rem"}}>© 2025 Lugano Automation. All rights reserved.</p>
          <div style={{display:"flex",gap:12}}>
            <a href="/privacy" style={{color:"rgba(255,255,255,0.4)",textDecoration:"none",fontSize:".8rem"}}>Privacy Policy</a>
            <a href="/terms" style={{color:"rgba(255,255,255,0.4)",textDecoration:"none",fontSize:".8rem"}}>Terms of Service</a>
            <a href="mailto:support@luganoautomation.com" style={{color:"rgba(255,255,255,0.4)",textDecoration:"none",fontSize:".8rem"}}>Support</a>
          </div>
          <span style={{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",color:"rgba(255,255,255,0.6)",fontSize:".75rem",fontWeight:600,padding:"5px 12px",borderRadius:100}}>Lugano Automation</span>
        </div>
      </footer>
    </>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const data = {
      firstName: (form.querySelector('#fname') as HTMLInputElement)?.value,
      lastName: (form.querySelector('#lname') as HTMLInputElement)?.value,
      email: (form.querySelector('#email') as HTMLInputElement)?.value,
      phone: (form.querySelector('#phone') as HTMLInputElement)?.value,
      dealership: (form.querySelector('#dealership') as HTMLInputElement)?.value,
      volume: (form.querySelector('#volume') as HTMLSelectElement)?.value,
      message: (form.querySelector('#message') as HTMLTextAreaElement)?.value,
    };
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch {}
    setLoading(false);
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    background:"var(--gray-50)",border:"1.5px solid var(--gray-100)",borderRadius:12,
    padding:"13px 16px",fontFamily:"inherit",fontSize:".95rem",color:"var(--text-primary)",
    outline:"none",width:"100%",transition:"border-color .25s",
  };
  const labelStyle: React.CSSProperties = {
    fontSize:".8rem",fontWeight:700,color:"var(--text-secondary)",
    letterSpacing:".03em",display:"block",marginBottom:7,
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18}}>
        <div><label style={labelStyle} htmlFor="fname">First Name</label><input id="fname" type="text" placeholder="Marcus" style={inputStyle} required/></div>
        <div><label style={labelStyle} htmlFor="lname">Last Name</label><input id="lname" type="text" placeholder="Reynolds" style={inputStyle}/></div>
        <div><label style={labelStyle} htmlFor="email">Email</label><input id="email" type="email" placeholder="you@dealership.com" style={inputStyle} required/></div>
        <div><label style={labelStyle} htmlFor="phone">Phone</label><input id="phone" type="tel" placeholder="(555) 000-0000" style={inputStyle}/></div>
        <div><label style={labelStyle} htmlFor="dealership">Dealership Name</label><input id="dealership" type="text" placeholder="Reynolds Ford" style={inputStyle} required/></div>
        <div>
          <label style={labelStyle} htmlFor="volume">Monthly Lead Volume</label>
          <select id="volume" style={{...inputStyle,WebkitAppearance:"none" as const}}>
            <option value="">Select range...</option>
            <option>Under 100 leads/mo</option>
            <option>100–300 leads/mo</option>
            <option>300–600 leads/mo</option>
            <option>600+ leads/mo</option>
          </select>
        </div>
        <div style={{gridColumn:"1 / -1"}}>
          <label style={labelStyle} htmlFor="message">What&apos;s your biggest challenge right now?</label>
          <textarea id="message" placeholder="We struggle with..." style={{...inputStyle,resize:"vertical",minHeight:110}}/>
        </div>
      </div>
      <button type="submit" disabled={loading || submitted} style={{width:"100%",marginTop:24,background:submitted?"#22C55E":"var(--blue)",color:"var(--white)",padding:"16px 32px",borderRadius:12,fontFamily:"inherit",fontSize:"1rem",fontWeight:700,border:"none",cursor:submitted?"default":"pointer",transition:"background .2s"}}>
        {submitted ? "✓ Message received. We'll be in touch shortly." : loading ? "Sending..." : "Send Message →"}
      </button>
      <p style={{fontSize:".8rem",color:"var(--text-muted)",marginTop:14,textAlign:"center"}}>No spam. No pressure. Just a straight conversation about your store.</p>
    </form>
  );
}
