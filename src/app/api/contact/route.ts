import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const { RESEND_API_KEY, RECAPTCHA_SECRET_KEY } = process.env

const resend = new Resend(RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { person, email, phone, best_time, subject, message, captcha } = body

  if (!email || !captcha) {
    return NextResponse.json(
      { message: 'Unprocessable request, please provide the required fields' },
      { status: 422 },
    )
  }

  try {
    const captchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${captcha}`,
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' },
        method: 'POST',
      },
    )

    const captchaValidation = await captchaRes.json()

    if (!captchaValidation.success) {
      return NextResponse.json(
        { message: 'Unprocessable request, invalid captcha code' },
        { status: 422 },
      )
    }

    const html = `
      <p><strong>Name:</strong> ${person}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Best time to call:</strong> ${best_time || 'N/A'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
    `

    const { error } = await resend.emails.send({
      from: 'Simply Synced Contact <contact@simplysyncedllc.com>',
      to: 'simplysyncedllc@gmail.com',
      replyTo: email,
      subject: `[Simply Synced Contact Request]: ${subject}`,
      html,
    })

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 500 })
    }

    return NextResponse.json(
      { message: 'Your message has been sent successfully!' },
      { status: 200 },
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Internal server error'
    console.error(errorMessage)
    return NextResponse.json({ message: errorMessage }, { status: 500 })
  }
}
