export const metadata = {
  title: "Sample Lead Form — Lugano Automation",
  description: "Template showing how dealership lead forms collect SMS consent",
}

export default function SampleLeadFormPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', fontFamily: 'system-ui, sans-serif' }}>
      {/* Dealership header mockup */}
      <header style={{ background: '#1a1a2e', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 40, height: 40, borderRadius: 8, background: '#0057a8', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 700 }}>P</div>
        <div>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>Prestige Auto Group</div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '.75rem' }}>Your Premier Automotive Dealership</div>
        </div>
      </header>

      <div style={{ maxWidth: 560, margin: '48px auto', padding: '0 24px' }}>
        {/* Form card */}
        <div style={{ background: '#fff', borderRadius: 16, padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111', marginBottom: 8 }}>
            Request More Information
          </h1>
          <p style={{ color: '#666', fontSize: '.9rem', marginBottom: 28, lineHeight: 1.5 }}>
            Interested in a vehicle? Fill out the form below and a member of our team will follow up with you shortly.
          </p>

          <form>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: '.8rem', fontWeight: 600, color: '#444', marginBottom: 6 }}>First Name *</label>
                <input type="text" placeholder="John" readOnly style={{ width: '100%', padding: '12px 14px', border: '1.5px solid #e0e0e0', borderRadius: 8, fontSize: '.9rem', boxSizing: 'border-box', background: '#fafafa' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '.8rem', fontWeight: 600, color: '#444', marginBottom: 6 }}>Last Name *</label>
                <input type="text" placeholder="Smith" readOnly style={{ width: '100%', padding: '12px 14px', border: '1.5px solid #e0e0e0', borderRadius: 8, fontSize: '.9rem', boxSizing: 'border-box', background: '#fafafa' }} />
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: '.8rem', fontWeight: 600, color: '#444', marginBottom: 6 }}>Email Address *</label>
              <input type="email" placeholder="john@example.com" readOnly style={{ width: '100%', padding: '12px 14px', border: '1.5px solid #e0e0e0', borderRadius: 8, fontSize: '.9rem', boxSizing: 'border-box', background: '#fafafa' }} />
            </div>

            {/* Phone field with SMS consent — this is what Twilio needs to see */}
            <div style={{ marginBottom: 8 }}>
              <label style={{ display: 'block', fontSize: '.8rem', fontWeight: 600, color: '#444', marginBottom: 6 }}>Phone Number</label>
              <input type="tel" placeholder="(555) 000-0000" readOnly style={{ width: '100%', padding: '12px 14px', border: '1.5px solid #e0e0e0', borderRadius: 8, fontSize: '.9rem', boxSizing: 'border-box', background: '#fafafa' }} />
            </div>

            {/* SMS consent checkbox — the critical element for A2P registration */}
            <div style={{ background: '#f0f7ff', border: '1.5px solid #c5d8ff', borderRadius: 8, padding: '14px 16px', marginBottom: 24 }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer' }}>
                <input type="checkbox" style={{ marginTop: 2, width: 16, height: 16, flexShrink: 0, accentColor: '#0057a8' }} />
                <span style={{ fontSize: '.8rem', color: '#334', lineHeight: 1.5 }}>
                  I agree to receive SMS text messages from <strong>Prestige Auto Group</strong> regarding my vehicle inquiry. Message frequency varies. Msg &amp; data rates may apply. Reply <strong>STOP</strong> to opt out at any time. Reply <strong>HELP</strong> for help. Carrier is not liable for delayed or undelivered messages.{' '}
                  <a href="/terms" target="_blank" rel="noopener noreferrer" style={{ color: '#0057a8' }}>Terms</a> &amp;{' '}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#0057a8' }}>Privacy Policy</a>.
                </span>
              </label>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: '.8rem', fontWeight: 600, color: '#444', marginBottom: 6 }}>Vehicle of Interest</label>
              <input type="text" placeholder="e.g. 2026 BMW X5" readOnly style={{ width: '100%', padding: '12px 14px', border: '1.5px solid #e0e0e0', borderRadius: 8, fontSize: '.9rem', boxSizing: 'border-box', background: '#fafafa' }} />
            </div>

            <div style={{ marginBottom: 28 }}>
              <label style={{ display: 'block', fontSize: '.8rem', fontWeight: 600, color: '#444', marginBottom: 6 }}>Message (optional)</label>
              <textarea placeholder="Any questions or specific details..." rows={3} readOnly style={{ width: '100%', padding: '12px 14px', border: '1.5px solid #e0e0e0', borderRadius: 8, fontSize: '.9rem', boxSizing: 'border-box', background: '#fafafa', resize: 'vertical' }} />
            </div>

            <button type="submit" style={{ width: '100%', padding: '14px', background: '#0057a8', color: '#fff', border: 'none', borderRadius: 8, fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}>
              Submit Inquiry
            </button>
          </form>

          <p style={{ fontSize: '.75rem', color: '#999', marginTop: 20, lineHeight: 1.5, textAlign: 'center' }}>
            This form is powered by <a href="https://luganoautomation.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0057a8' }}>Lugano Automation</a>.
            By submitting this form, you may receive follow-up communications via SMS from the dealership above.
            Standard messaging rates may apply.
          </p>
        </div>

        {/* ISV explanation note for Twilio reviewers */}
        <div style={{ marginTop: 24, padding: '20px 24px', background: '#fff9e6', border: '1.5px solid #f0d080', borderRadius: 12, fontSize: '.8rem', color: '#666', lineHeight: 1.6 }}>
          <strong style={{ color: '#444' }}>Note for reviewers:</strong> This is a template/sample lead form that demonstrates how Lugano Automation&apos;s dealership clients collect SMS consent from car buyers. Each participating dealership embeds a customized version of this form on their own website. The SMS opt-in checkbox above is required before any SMS messages are sent. End consumers must explicitly check the consent box before submitting.
        </div>
      </div>
    </div>
  )
}
