import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { FadeIn } from '@/components/fade-in'
import { ArrowRightIcon, ExternalLinkIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Türker Gürel is a Flutter mobile product engineer building realtime, map-heavy, AI, Firebase, and backend-connected apps.',
}

const skills = [
  { category: 'Mobile', items: ['Flutter', 'Dart', 'Riverpod', 'Auto Route', 'iOS', 'Android'] },
  { category: 'Backend', items: ['Firebase', 'Node.js', 'Express', 'Go', 'Fiber', 'REST APIs', 'WebSockets'] },
  { category: 'Product Systems', items: ['Maps', 'Realtime location', 'Push notifications', 'RevenueCat', 'Secure storage'] },
  { category: 'Web & Data', items: ['Next.js', 'React', 'TypeScript', 'MySQL', 'PostgreSQL', 'Supabase'] },
]

export default function AboutPage() {
  return (
    <section className="space-y-16">
      <FadeIn className="space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">About</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          I build mobile products from first flow to production release.
        </h1>
      </FadeIn>

      <div className="grid gap-10 md:grid-cols-[200px,1fr] md:items-start">
        <FadeIn className="relative aspect-square overflow-hidden rounded-2xl border border-border shadow-xl shadow-black/5" delay={0.1}>
          <Image
            src="/avatar.png"
            alt="Portrait of Türker Gürel"
            fill
            sizes="(min-width: 768px) 200px, 60vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </FadeIn>

        <FadeIn delay={0.16} className="space-y-6 text-muted-foreground">
          <p>
            I&apos;m a Flutter-focused product engineer who works across mobile UI,
            application architecture, backend integrations, and release-ready product
            details. My strongest work sits where polished UX meets operational
            complexity: realtime chat, live location, maps, notifications,
            subscriptions, secure auth, AI sessions, and API-driven state.
          </p>
          <p>
            I&apos;ve built and shipped apps for logistics, rider communities, dance
            festivals, AI companionship, children&apos;s reading, travel planning, and
            wellness. Across those products I&apos;ve handled onboarding, profiles,
            feeds, media, chat, routes, background tracking, payments, push
            notifications, backend APIs, and store-facing production polish.
          </p>
          <p>
            I care about products that are easy to use because the engineering
            underneath is disciplined. I keep flows clear, state predictable,
            integrations secure, and interfaces responsive enough for real users
            outside a demo environment.
          </p>
          
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact">
              <Button className="gap-2">
                Let&apos;s work together
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </Link>
            <a href="/Resume.pdf" download="Turker_Gurel_Resume.pdf">
              <Button variant="outline" className="gap-2">
                Download Resume
                <ExternalLinkIcon className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Skills Section */}
      <FadeIn delay={0.24} className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Skills & Technologies</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <FadeIn key={skill.category} delay={0.3 + index * 0.05} className="space-y-3">
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-sm text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
