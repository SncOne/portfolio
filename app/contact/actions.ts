'use server'

import nodemailer from 'nodemailer'

const successState = {
  status: 'success' as const,
  message: 'Thank you for reaching out. Your message is on its way!'
}

const errorState = {
  status: 'error' as const,
  message: 'We could not send your message. Please try again later.'
}

type ContactFormState =
  | { status: 'idle'; message: '' }
  | { status: 'success'; message: string }
  | { status: 'error'; message: string }

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  const website = String(formData.get('website') ?? '').trim()

  if (website) {
    return errorState
  }

  if (!name || !email || !message || name.length > 80 || email.length > 160 || message.length > 4000) {
    return {
      status: 'error',
      message: 'Please fill in your name, email, and a short project summary.',
    }
  }

  if (message.length < 20 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: 'error',
      message: 'Please use a valid email address and include a little more project detail.',
    }
  }

  const recipient = process.env.CONTACT_EMAIL_TO
  const fromAddress = process.env.CONTACT_EMAIL_FROM
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
  const user = process.env.SMTP_USER
  const password = process.env.SMTP_PASSWORD

  if (!recipient || !fromAddress) {
    return {
      status: 'error',
      message: 'Email delivery is not configured on this deployment yet. Please use the direct email link instead.',
    }
  }

  if (!host || !user || !password) {
    return {
      status: 'error',
      message: 'Email delivery is not configured on this deployment yet. Please use the direct email link instead.',
    }
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: port ?? 587,
      secure: port === 465,
      auth: {
        user,
        pass: password,
      },
    })

    const subject = `Portfolio contact from ${name}`

    await transporter.sendMail({
      from: fromAddress,
      to: recipient,
      subject,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    return successState
  } catch {
    return errorState
  }
}
