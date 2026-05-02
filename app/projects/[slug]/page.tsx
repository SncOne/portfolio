import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'

import { FadeIn } from '@/components/fade-in'
import {
  AppStoreIcon,
  ExternalLinkIcon,
  GitHubIcon,
  GooglePlayIcon,
} from '@/components/icons'
import {
  getProjectBySlug,
  getProjectSlugs,
  type ProjectLink,
  type ProjectLinkType,
} from '@/lib/projects'
import { cn } from '@/lib/utils'

type PageParams = {
  slug: string
}

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: PageParams }): Metadata {
  const { slug } = params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project not found',
    }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'website',
    },
  }
}

export default function ProjectDetailPage({ params }: { params: PageParams }) {
  const { slug } = params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="space-y-16">
      <FadeIn className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Case Study</p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground">{project.subtitle}</p>
        </div>
        {(project.status || project.award) && (
          <div className="flex flex-wrap gap-2">
            {project.status && <ProjectBadge>{project.status}</ProjectBadge>}
            {project.award && <ProjectBadge>{project.award}</ProjectBadge>}
          </div>
        )}
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs uppercase tracking-[0.24em] text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {project.links.map((link) => (
            <ProjectActionLink key={`${link.type}-${link.label}`} link={link} priority />
          ))}
        </div>
      </FadeIn>

      <FadeIn className="space-y-8" delay={0.12}>
        <header className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
          <p className="max-w-prose text-muted-foreground">{project.description}</p>
        </header>
        {(project.role || project.impact) && (
          <div className="grid gap-4 md:grid-cols-2">
            {project.role && (
              <InfoPanel title="My Role">{project.role}</InfoPanel>
            )}
            {project.impact && (
              <InfoPanel title="Product Value">{project.impact}</InfoPanel>
            )}
          </div>
        )}
      </FadeIn>

      <FadeIn className="space-y-6" delay={0.16}>
        <h2 className="text-2xl font-semibold tracking-tight">Key Work</h2>
        <ul className="grid gap-3 text-muted-foreground md:grid-cols-2">
          {project.highlights.map((item) => (
            <li key={item} className="rounded-lg border border-border bg-muted/20 p-4 text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn className="space-y-4" delay={0.17}>
        <h2 className="text-2xl font-semibold tracking-tight">Stack</h2>
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn className="space-y-4" delay={0.18}>
        <h2 className="text-2xl font-semibold tracking-tight">Links</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {project.links.map((link) => (
            <ProjectActionLink key={`detail-${link.type}-${link.label}`} link={link} />
          ))}
        </div>
      </FadeIn>

      <FadeIn className="space-y-6" delay={0.18}>
        <h2 className="text-2xl font-semibold tracking-tight">Gallery</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {project.gallery.map((media, index) => (
            <FadeIn
              key={media.src}
              delay={0.2 + index * 0.08}
              className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-lg border border-border bg-muted/20 p-4"
            >
              <Image
                src={media.src}
                alt={media.alt}
                width={960}
                height={640}
                className="h-full max-h-[520px] w-full object-contain"
              />
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </article>
  )
}

function ProjectBadge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary">
      {children}
    </span>
  )
}

function InfoPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-lg border border-border bg-muted/25 p-5">
      <h2 className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-foreground">{children}</p>
    </section>
  )
}

function ProjectActionLink({
  link,
  priority = false,
}: {
  link: ProjectLink
  priority?: boolean
}) {
  const content = (
    <>
      <span className={cn('flex h-11 w-11 shrink-0 items-center justify-center rounded-lg', getLinkIconWrapClasses(link))}>
        {getLinkIcon(link.type, 'h-5 w-5')}
      </span>
      <span className="min-w-0">
        <span className="block text-[0.68rem] font-medium uppercase tracking-[0.18em] opacity-70">
          {getLinkEyebrow(link)}
        </span>
        <span className="block truncate text-sm font-semibold">{link.label}</span>
      </span>
    </>
  )

  const className = cn(
    'group flex min-h-[68px] items-center gap-3 rounded-lg border p-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background',
    getLinkCardClasses(link, priority)
  )

  if (!link.href || link.isPlaceholder) {
    return (
      <span className={className} aria-disabled="true">
        {content}
      </span>
    )
  }

  return (
    <Link href={link.href} target="_blank" rel="noreferrer" className={className}>
      {content}
    </Link>
  )
}

function getLinkEyebrow(link: ProjectLink) {
  if (link.isPlaceholder) return 'Status'

  switch (link.type) {
    case 'app-store':
      return 'Download on'
    case 'google-play':
      return 'Get it on'
    case 'github':
      return 'View source'
    case 'website':
      return 'Visit'
    default:
      return 'Open'
  }
}

function getLinkCardClasses(link: ProjectLink, priority: boolean) {
  if (link.isPlaceholder) {
    return 'cursor-not-allowed border-dashed border-border bg-muted/30 text-muted-foreground'
  }

  if (link.type === 'app-store') {
    return cn(
      'border-foreground bg-foreground text-background shadow-subtle hover:-translate-y-0.5 hover:shadow-lg',
      priority && 'shadow-foreground/10'
    )
  }

  if (link.type === 'google-play') {
    return 'border-emerald-700/20 bg-emerald-50 text-emerald-950 hover:-translate-y-0.5 hover:border-emerald-700/35 hover:bg-emerald-100 dark:bg-emerald-950/25 dark:text-emerald-50 dark:hover:bg-emerald-950/40'
  }

  return 'border-border bg-background text-foreground hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground'
}

function getLinkIconWrapClasses(link: ProjectLink) {
  if (link.isPlaceholder) return 'border border-dashed border-border bg-background text-muted-foreground'

  switch (link.type) {
    case 'app-store':
      return 'bg-background text-foreground'
    case 'google-play':
      return 'bg-emerald-600 text-white'
    case 'github':
      return 'bg-foreground text-background'
    default:
      return 'bg-primary/10 text-primary'
  }
}

function getLinkIcon(type: ProjectLinkType, className = 'h-4 w-4') {
  switch (type) {
    case 'google-play':
      return <GooglePlayIcon className={className} />
    case 'app-store':
      return <AppStoreIcon className={className} />
    case 'github':
      return <GitHubIcon className={className} />
    default:
      return <ExternalLinkIcon className={className} />
  }
}
