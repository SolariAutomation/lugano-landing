import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, dealership, volume, message } = await req.json()

  if (!firstName || !email || !dealership) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: `Lugano Automation <${process.env.RESEND_FROM_EMAIL || 'noreply@mail.luganoautomation.com'}>`,
      to: ['sales@luganoautomation.com'],
      replyTo: email,
      subject: `New inquiry: ${dealership} — ${firstName} ${lastName}`,
      text: `New contact form submission from luganoautomation.com

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Dealership: ${dealership}
Monthly lead volume: ${volume || 'Not specified'}

Message:
${message || 'No message provided'}

---
Reply directly to this email to respond to ${firstName}.`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
