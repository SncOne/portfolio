import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { FadeIn } from '@/components/fade-in'
import { ArrowRightIcon, ExternalLinkIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Türker Gürel is a Flutter & Next.js developer focused on crafting refined product experiences.',
}

const skills = [
  { category: 'Mobile', items: ['Flutter', 'Dart', 'iOS', 'Android'] },
  { category: 'Web', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Firebase', 'Supabase', 'REST APIs'] },
  { category: 'Tools', items: ['Git', 'Figma', 'VS Code', 'Xcode'] },
]

export default function AboutPage() {
  return (
    <section className="space-y-16">
      <FadeIn className="space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">About</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          My path to thoughtful product shipping.
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
