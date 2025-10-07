import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="space-y-6 py-24 text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">404</p>
      <h1 className="text-4xl font-semibold tracking-tight">This page left the roadmap.</h1>
      <p className="text-muted-foreground">
        The content you&apos;re after has moved or never shipped. Let&apos;s head back to the work that matters.
      </p>
      <Link
        href="/"
        className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow-subtle hover:bg-primary/90"
      >
        Return home
      </Link>
    </section>
  )
}
