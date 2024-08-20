import sendgrid from '@sendgrid/mail'
import { NextRequest, NextResponse } from 'next/server'
const { SENDGRID_API_KEY, RECAPTCHA_SECRET_KEY } = process.env;

sendgrid.setApiKey(SENDGRID_API_KEY!)

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json()
  const { person, email, phone, subject, message, captcha } = body

  if (!email || !captcha) {
    return NextResponse.json(
      { message: 'Unproccesable request, please provide the required fields' },
      { status: 422 },
    )
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${captcha}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        },
        method: 'POST',
      },
    )

    const captchaValidation = await response.json()

    if (captchaValidation.success) {
      const formattedMessage = `
        Name: ${person}\r\n
        Email: ${email}\r\n
        Phone: ${phone}\r\n
        Subject: ${subject}\r\n
        Message: ${message}
      `
    
      await sendgrid.send({
        to: 'simplysyncedllc@gmail.com',
        from: 'contact@simplysyncedllc.com',
        subject: `[Simply Synced Contact Form]: ${subject}`,
        text: formattedMessage,
        html: formattedMessage.replace(/\r?\n/g, '<br />'),
      })

      return NextResponse.json(
        { message: 'Your message has been sent successfully!' },
        { status: 200 },
      )
    }

    return NextResponse.json(
      { message: 'Unproccesable request, Invalid captcha code' },
      { status: 422 },
    )
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Internal server error'
    console.log(errorMessage)
    return NextResponse.json({ message: errorMessage }, { status: 422 })
  }
}