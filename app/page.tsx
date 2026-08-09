import Link from 'next/link'

import { FadeIn } from '@/components/fade-in'
import { ArrowRightIcon, ExternalLinkIcon, GitHubIcon, LinkedInIcon, MailIcon } from '@/components/icons'
import { ProjectCard } from '@/components/project-card'
import { ProjectMediaPreview } from '@/components/project-media'
import { featuredProjects } from '@/lib/projects'
import { siteConfig } from '@/lib/site'
import { cn } from '@/lib/utils'

const buttonBase =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-[background-color,border-color,color,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 ring-offset-background'

const socialLinks = [
  { label: 'GitHub', href: siteConfig.social.github, icon: GitHubIcon },
  { label: 'LinkedIn', href: siteConfig.social.linkedIn, icon: LinkedInIcon },
  { label: 'Email', href: `mailto:${siteConfig.email}`, icon: MailIcon },
]

const capabilities = [
  {
    number: '01',
    title: 'Mobile product delivery',
    detail: 'From onboarding and auth to media, subscriptions, store review, and post-release iteration.',
  },
  {
    number: '02',
    title: 'Realtime + location',
    detail: 'Chat, presence, notifications, maps, routes, live location, and background-aware flows.',
  },
  {
    number: '03',
    title: 'The systems around the app',
    detail: 'Firebase, REST APIs, WebSockets, Node.js, Go, secure storage, and production integrations.',
  },
]

const stackGroups = [
  { label: 'Mobile', items: ['Flutter', 'Dart', 'Riverpod', 'iOS', 'Android'] },
  { label: 'Product systems', items: ['Firebase', 'Maps', 'Live location', 'Push notifications', 'Subscriptions'] },
  { label: 'Supporting stack', items: ['REST APIs', 'WebSockets', 'Next.js', 'TypeScript', 'Node.js', 'Go'] },
]

export default function HomePage() {
  const ridertify = featuredProjects[0]

  return (
    <div className="space-y-24">
      <section className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr),minmax(320px,0.75fr)] lg:gap-16">
        <FadeIn className="space-y-8">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Open to mobile product work
          </div>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-balance sm:text-5xl lg:text-[4.25rem]">
              Flutter mobile developer building the product layer from first flow to store release.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I build production iOS and Android apps with realtime messaging, maps, live location, subscriptions, push notifications, and API-backed workflows. When the product needs it, I also work across Next.js, TypeScript, Node.js, and Go.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className={cn(buttonBase, 'bg-primary text-primary-foreground shadow-lg shadow-primary/15 hover:-translate-y-0.5 hover:bg-primary/90')}
            >
              See selected work
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className={cn(buttonBase, 'border border-border bg-background hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-accent')}
            >
              Start a conversation
            </Link>
            <Link
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonBase, 'text-muted-foreground hover:text-foreground')}
            >
              Resume
              <ExternalLinkIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 pt-1">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
              >
                <Icon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                {label}
              </Link>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="lg:justify-self-end">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/10">
            <div className="flex items-center justify-between border-b border-border px-4 py-3 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <span>Featured product</span>
              <span className="text-primary">{ridertify.platform}</span>
            </div>
            <ProjectMediaPreview
              media={ridertify.gallery}
              priority
              className="rounded-none border-0 border-b"
            />
            <div className="flex items-end justify-between gap-4 p-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">{ridertify.status}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">{ridertify.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{ridertify.subtitle}</p>
              </div>
              <Link
                href={`/projects/${ridertify.slug}`}
                aria-label={`Read the ${ridertify.title} case study`}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <FadeIn delay={0.1} className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {[
          'Store releases',
          'Realtime systems',
          'Maps + live location',
          'API-backed products',
        ].map((item) => (
          <div key={item} className="bg-card px-4 py-4 text-sm font-medium text-foreground sm:px-5">
            {item}
          </div>
        ))}
      </FadeIn>

      <section className="space-y-8" aria-labelledby="selected-work-heading">
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary">Selected work</p>
            <h2 id="selected-work-heading" className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Products where the hard parts are part of the experience.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Browse all projects
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </FadeIn>
        <div className="grid gap-5 lg:grid-cols-2">
          {featuredProjects.slice(0, 4).map((project, index) => (
            <FadeIn key={project.slug} delay={0.08 + index * 0.04} className={index === 0 ? 'lg:col-span-2' : undefined}>
              <ProjectCard project={project} featured={index === 0} priority={index < 2} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="space-y-8" aria-labelledby="capabilities-heading">
        <FadeIn className="max-w-3xl space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary">What I build</p>
          <h2 id="capabilities-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Calm interfaces backed by deliberate product engineering.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I am most useful when a mobile product has real state, real integrations, and real users outside a demo environment.
          </p>
        </FadeIn>
        <div className="grid gap-5 md:grid-cols-3">
          {capabilities.map((item, index) => (
            <FadeIn key={item.number} delay={0.08 + index * 0.04} className="border-t border-border pt-5">
              <p className="text-xs font-medium tracking-[0.18em] text-primary">{item.number}</p>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="grid gap-10 border-y border-border py-10 lg:grid-cols-[0.8fr,1.2fr] lg:gap-20" aria-labelledby="toolkit-heading">
        <FadeIn className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary">Engineering toolkit</p>
          <h2 id="toolkit-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Mobile first. Full-stack when useful.
          </h2>
        </FadeIn>
        <div className="grid gap-7 sm:grid-cols-3">
          {stackGroups.map((group, index) => (
            <FadeIn key={group.label} delay={0.08 + index * 0.04} className="space-y-3">
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{group.label}</h3>
              <ul className="space-y-2 text-sm text-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-xl border border-border bg-card p-6 sm:p-8 lg:grid-cols-[1fr,0.7fr] lg:p-10" aria-labelledby="contact-cta-heading">
        <FadeIn className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary">Let&apos;s talk</p>
          <h2 id="contact-cta-heading" className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Have a mobile product that needs more than screens?
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Tell me what you are building, where the flow is getting difficult, and what a useful next step looks like.
          </p>
        </FadeIn>
        <FadeIn delay={0.08} className="flex flex-col justify-end gap-3 sm:flex-row lg:flex-col lg:items-start">
          <Link href="/contact" className={cn(buttonBase, 'bg-primary text-primary-foreground hover:bg-primary/90')}>
            Get in touch
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            {siteConfig.email}
          </Link>
        </FadeIn>
      </section>
    </div>
  )
}
