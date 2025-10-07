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

  if (!name || !email || !message) {
    return {
      status: 'error',
      message: 'Please fill in your name, email, and a short project summary.',
    }
  }

  const recipient = process.env.CONTACT_EMAIL_TO
  const fromAddress = process.env.CONTACT_EMAIL_FROM
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined
  const user = process.env.SMTP_USER
  const password = process.env.SMTP_PASSWORD

  if (!recipient || !fromAddress) {
    console.warn('[contact] Email configuration missing CONTACT_EMAIL_TO or CONTACT_EMAIL_FROM. Message logged locally.')
    console.info(`[contact] from: ${name} <${email}>\n${message}`)
    return {
      status: 'success',
      message:
        'Thanks for reaching out! Email delivery is not configured yet, but your note has been recorded on the server.',
    }
  }

  if (!host || !user || !password) {
    console.warn('[contact] SMTP configuration incomplete. Message logged locally.')
    console.info(`[contact] from: ${name} <${email}>\n${message}`)
    return {
      status: 'success',
      message:
        'Thanks for reaching out! Email delivery is not configured yet, but your note has been recorded on the server.',
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
  } catch (error) {
    console.error('[contact] Failed to send email', error)
    return errorState
  }
}

export const initialContactState: ContactFormState = {
  status: 'idle',
  message: '',
}
