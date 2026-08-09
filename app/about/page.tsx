import type { Metadata } from 'next'
import Link from 'next/link'

import { FadeIn } from '@/components/fade-in'
import { ArrowRightIcon, ExternalLinkIcon } from '@/components/icons'
import { absoluteUrl, siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Türker Gürel, a Flutter mobile developer and product engineer focused on production iOS and Android products.',
  alternates: { canonical: absoluteUrl('/about') },
}

const skillGroups = [
  {
    label: 'Mobile foundation',
    items: ['Flutter', 'Dart', 'Riverpod', 'Auto Route', 'iOS', 'Android'],
  },
  {
    label: 'Product systems',
    items: ['Firebase', 'Realtime chat', 'Maps', 'Live location', 'Push notifications', 'Subscriptions'],
  },
  {
    label: 'Supporting stack',
    items: ['REST APIs', 'WebSockets', 'Node.js', 'Go', 'Next.js', 'TypeScript'],
  },
]

export default function AboutPage() {
  return (
    <section className="space-y-16">
      <FadeIn className="max-w-3xl space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary">About</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          I build mobile products from first flow to production release.
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          My strongest work sits where polished UX meets operational complexity: realtime chat, live location, maps, notifications, subscriptions, secure auth, AI sessions, and API-driven state.
        </p>
      </FadeIn>

      <div className="grid gap-10 lg:grid-cols-[224px,minmax(0,1fr)] lg:gap-16">
        <FadeIn className="w-fit" delay={0.08}>
          <div className="flex h-56 w-56 flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-subtle">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary">Türker Gürel</p>
            <div className="space-y-2">
              <p className="text-lg font-semibold tracking-tight">Mobile product engineer</p>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Flutter-first, with the systems around the app when the product needs them.
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Istanbul, Turkey · working across mobile and supporting systems</p>
        </FadeIn>

        <FadeIn delay={0.14} className="max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            I am a Flutter-focused product engineer working across mobile UI, application architecture, backend integrations, and release-ready product details. I care about flows that stay clear when the state gets complicated.
          </p>
          <p>
            I have built products across rider communities, travel, logistics, dance festivals, children&apos;s reading, wellness, and AI companionship. Across those products I have handled onboarding, profiles, feeds, media, chat, routes, background tracking, payments, push notifications, backend APIs, and store-facing polish.
          </p>
          <p>
            My approach is practical: understand the user flow, make the state predictable, keep integrations secure, and ship enough of the product to learn from real usage.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 ring-offset-background"
            >
              Start a conversation
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-4 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 ring-offset-background"
            >
              Download resume
              <ExternalLinkIcon className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </div>

      <FadeIn className="space-y-8" delay={0.18}>
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary">Core stack</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">The tools I reach for most.</h2>
        </div>
        <div className="grid gap-8 border-t border-border pt-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label} className="space-y-4">
              <h3 className="text-sm font-semibold tracking-tight">{group.label}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="border-t border-border pt-8" delay={0.22}>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          The short version: I make mobile products easier to use by making the engineering underneath easier to reason about.
        </p>
        <Link href={`mailto:${siteConfig.email}`} className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:text-primary">
          {siteConfig.email}
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </FadeIn>
    </section>
  )
}
