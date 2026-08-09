import Link from 'next/link'

import { ArrowRightIcon } from '@/components/icons'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl space-y-6 py-24 text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">404</p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">This page left the roadmap.</h1>
      <p className="mx-auto max-w-prose text-muted-foreground">
        The page you&apos;re after moved or never shipped. Start with the portfolio
        home or browse the projects instead.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-subtle hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Return home
        </Link>
        <Link
          href="/projects"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Browse projects <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
