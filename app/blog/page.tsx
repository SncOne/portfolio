import type { Metadata } from 'next'
import Link from 'next/link'

import { FadeIn } from '@/components/fade-in'
import { ArrowRightIcon, ExternalLinkIcon } from '@/components/icons'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { absoluteUrl, siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Occasional notes by Türker Gürel on Flutter, mobile architecture, product engineering, and software delivery.',
  alternates: { canonical: absoluteUrl('/blog') },
  openGraph: {
    title: 'Writing · Türker Gürel',
    description:
      'Occasional notes on Flutter, mobile architecture, product engineering, and software delivery.',
    url: absoluteUrl('/blog'),
    images: [{ url: absoluteUrl('/og'), width: 1200, height: 630, alt: 'Türker Gürel writing' }],
  },
}

const topics = [
  'Flutter',
  'Riverpod',
  'Firebase',
  'Realtime products',
  'Maps and location',
  'Mobile architecture',
  'Backend integrations',
  'Store releases',
]

export default function BlogPage() {
  return (
    <section className="space-y-12">
      <FadeIn className="space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Writing</p>
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Notes from the product layer.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Writing is occasional. When I publish, it usually explores the decisions
          behind Flutter apps, mobile architecture, realtime systems, and shipping
          product work.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <Card className="max-w-3xl">
          <CardHeader className="gap-3">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
              Medium profile
            </p>
            <CardTitle className="text-2xl">Browse published notes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="max-w-prose text-muted-foreground">
              The archive lives on Medium, where you can read the latest published
              work and follow along when a new note is ready.
            </p>
            <Link
              href={siteConfig.social.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-subtle transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Open Medium profile
              <ExternalLinkIcon className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      </FadeIn>

      <FadeIn delay={0.15} className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Themes</p>
            <h2 className="mt-2 text-xl font-semibold">What I tend to explore</h2>
          </div>
          <Link
            href="/projects"
            className="hidden items-center gap-2 text-sm font-medium text-primary hover:underline sm:inline-flex"
          >
            See the work <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-border/70 bg-muted/35 px-3 py-1.5 text-sm text-muted-foreground"
            >
              {topic}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
