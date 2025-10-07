'use client'

import { useEffect, useRef } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

import { FadeIn } from '@/components/fade-in'
import { Button } from '@/components/ui/button'

import { initialContactState, sendContactEmail } from './actions'

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [state, action] = useFormState(sendContactEmail, initialContactState)

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset()
    }
  }, [state])

  return (
    <FadeIn delay={0.08}>
      <form ref={formRef} action={action} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="How should I address you?"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Project details
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about the problem you want to solve."
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <SubmitButton />
        {state.status !== 'idle' ? (
          <p
            className={`text-sm ${
              state.status === 'success'
                ? 'text-emerald-600 dark:text-emerald-400'
                : 'text-rose-500 dark:text-rose-400'
            }`}
          >
            {state.message}
          </p>
        ) : null}
      </form>
    </FadeIn>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full md:w-auto" disabled={pending}>
      {pending ? 'Sending…' : 'Send message'}
    </Button>
  )
}
