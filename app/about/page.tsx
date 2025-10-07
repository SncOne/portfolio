import type { Metadata } from 'next'
import Image from 'next/image'

import { FadeIn } from '@/components/fade-in'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Türker Gürel is a Flutter & Next.js developer focused on crafting refined product experiences.',
}

export default function AboutPage() {
  return (
    <section className="space-y-12">
      <FadeIn className="space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">About</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">My path to thoughtful product shipping.</h1>
      </FadeIn>
      <div className="grid gap-10 md:grid-cols-[200px,1fr] md:items-start">
        <FadeIn className="relative aspect-square overflow-hidden rounded-2xl border border-border" delay={0.1}>
          <Image
            src="/avatar.png"
            alt="Portrait of Türker Gürel"
            fill
            sizes="(min-width: 768px) 200px, 60vw"
            priority
            className="object-cover"
          />
        </FadeIn>
        <FadeIn delay={0.16} className="space-y-6 text-muted-foreground">
          <p>
            I&apos;m a multidisciplinary developer obsessed with delivering delightful user experiences. I partner closely
            with product teams to translate ambitious ideas into polished Flutter and Next.js applications that feel fast,
            responsive, and genuinely helpful.
          </p>
          <p>
            Over the past several years I&apos;ve driven end-to-end product delivery across startups and agencies—leading UX
            strategy, building scalable design systems, and shipping production-ready apps that people love to use. My
            approach blends clean architecture, maintainable code, and a relentless focus on the details that make
            interfaces shine.
          </p>
          <p>
            When I&apos;m not iterating on flows, you&apos;ll find me mentoring devs, exploring emerging UX patterns, or
            experimenting with new ways to bridge mobile and web experiences. I believe the best products speak through
            clarity and craft, and I bring that belief into every collaboration.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
