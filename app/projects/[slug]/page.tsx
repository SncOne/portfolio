import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'

import { FadeIn } from '@/components/fade-in'
import { AppStoreIcon, ExternalLinkIcon, GitHubIcon, GooglePlayIcon } from '@/components/icons'
import { ProjectMedia } from '@/components/project-media'
import {
  getProjectBySlug,
  getProjectSlugs,
  type Project,
  type ProjectLink,
  type ProjectLinkType,
} from '@/lib/projects'
import { absoluteUrl } from '@/lib/site'
import { getProjectSchema, JsonLd } from '@/lib/structured-data'
import { cn } from '@/lib/utils'

type PageParams = {
  slug: string
}

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: PageParams }): Metadata {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return { title: 'Project not found' }
  }

  const canonical = absoluteUrl(`/projects/${project.slug}`)
  const image = project.gallery[0]?.src

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical },
    openGraph: {
      title: `${project.title} · Türker Gürel`,
      description: project.description,
      url: canonical,
      type: 'article',
      images: image ? [{ url: absoluteUrl(image), alt: project.gallery[0]?.alt }] : undefined,
    },
  }
}

export default function ProjectDetailPage({ params }: { params: PageParams }) {
  const project = getProjectBySlug(params.slug)

  if (!project) notFound()

  return (
    <article className="space-y-16">
      <JsonLd data={getProjectSchema(project)} />

      <FadeIn className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.8fr),minmax(0,1.2fr)] lg:gap-16">
        <div className="space-y-7">
          <div className="space-y-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
            >
              <span aria-hidden="true">←</span>
              All projects
            </Link>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary">{project.projectType}</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{project.subtitle}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="rounded-full border border-border bg-muted/50 px-3 py-1.5">{project.platform}</span>
            {project.status ? <span className="rounded-full border border-border bg-muted/50 px-3 py-1.5">{project.status}</span> : null}
            {project.award ? <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-primary">{project.award}</span> : null}
          </div>

          {project.links.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {project.links.map((link) => (
                <ProjectActionLink key={`${link.type}-${link.label}`} link={link} />
              ))}
            </div>
          ) : null}
        </div>

        <div className="space-y-3">
          <ProjectMedia media={project.gallery[0]} priority />
          <p className="text-xs text-muted-foreground">
            {getVisualLabel(project.gallery[0].visualType)} · {getSourceLabel(project.gallery[0].source)}
          </p>
        </div>
      </FadeIn>

      <FadeIn className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr),minmax(0,1.2fr)]" delay={0.08}>
        <SectionIntro eyebrow="Overview" title="What the product is" />
        <div className="space-y-7">
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{project.description}</p>
          {(project.role || project.impact) ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {project.role ? (
                <InfoPanel title={project.roleLabel ?? 'My role'}>{project.role}</InfoPanel>
              ) : null}
              {project.impact ? <InfoPanel title="Product focus">{project.impact}</InfoPanel> : null}
            </div>
          ) : null}
        </div>
      </FadeIn>

      <FadeIn className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr),minmax(0,1.2fr)]" delay={0.12}>
        <SectionIntro eyebrow="Key work" title="The parts that needed product thinking" />
        <ul className="grid gap-3 sm:grid-cols-2">
          {project.highlights.map((item) => (
            <li key={item} className="border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr),minmax(0,1.2fr)]" delay={0.16}>
        <SectionIntro eyebrow="Stack" title="Tools used in the work" />
        <ul className="flex h-fit flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-sm text-foreground">
              {tag}
            </li>
          ))}
        </ul>
      </FadeIn>

      {project.gallery.length > 1 ? (
        <FadeIn className="space-y-6" delay={0.18}>
          <SectionIntro eyebrow="Visuals" title="Product evidence and project artwork" />
          <div className="grid gap-6 md:grid-cols-2">
            {project.gallery.slice(1).map((media) => (
              <figure key={media.src} className="space-y-3">
                <ProjectMedia media={media} />
                <figcaption className="text-xs text-muted-foreground">
                  {getVisualLabel(media.visualType)} · {getSourceLabel(media.source)}
                </figcaption>
              </figure>
            ))}
          </div>
        </FadeIn>
      ) : null}

      {project.links.length > 0 ? (
        <FadeIn className="border-t border-border pt-8" delay={0.2}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Continue exploring</p>
              <p className="mt-2 text-sm text-muted-foreground">Open the project or store listing when you want the external context.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.links.map((link) => (
                <ProjectActionLink key={`footer-${link.type}-${link.label}`} link={link} compact />
              ))}
            </div>
          </div>
        </FadeIn>
      ) : null}
    </article>
  )
}

function SectionIntro({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
      <h2 className="max-w-xs text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
    </div>
  )
}

function InfoPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-border pt-4">
      <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground">{children}</p>
    </section>
  )
}

function ProjectActionLink({ link, compact = false }: { link: ProjectLink; compact?: boolean }) {
  const className = cn(
    'group inline-flex min-h-12 items-center gap-3 rounded-md border px-3 text-left transition-[background-color,border-color,color,transform] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 ring-offset-background',
    compact ? 'bg-background text-sm hover:border-foreground/25 hover:bg-accent' : 'bg-card hover:border-foreground/25 hover:bg-accent',
    link.type === 'app-store' && 'border-foreground bg-foreground text-background hover:bg-foreground/90',
    link.type === 'google-play' && 'border-emerald-700/30 bg-emerald-950/20 text-emerald-100 hover:bg-emerald-950/35'
  )

  return (
    <Link href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
      <span className={cn('flex h-8 w-8 shrink-0 items-center justify-center rounded-md', getIconWrapClasses(link.type))}>
        {getLinkIcon(link.type, 'h-4 w-4')}
      </span>
      <span className="min-w-0">
        <span className="block text-[0.62rem] font-medium uppercase tracking-[0.18em] opacity-65">{getLinkEyebrow(link.type)}</span>
        <span className="block truncate text-sm font-semibold">{link.label}</span>
      </span>
    </Link>
  )
}

function getLinkEyebrow(type: ProjectLinkType) {
  switch (type) {
    case 'app-store':
      return 'Download on'
    case 'google-play':
      return 'Get it on'
    case 'github':
      return 'View source'
    default:
      return 'Visit'
  }
}

function getLinkIcon(type: ProjectLinkType, className: string) {
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

function getIconWrapClasses(type: ProjectLinkType) {
  switch (type) {
    case 'app-store':
      return 'bg-background text-foreground'
    case 'google-play':
      return 'bg-emerald-500 text-white'
    case 'github':
      return 'bg-foreground text-background'
    default:
      return 'bg-primary/15 text-primary'
  }
}

function getVisualLabel(visualType: Project['gallery'][number]['visualType']) {
  return visualType === 'store-screenshot'
    ? 'Store screenshot'
    : visualType === 'product-screenshot'
      ? 'Product screenshot'
      : 'Project artwork'
}

function getSourceLabel(source: Project['gallery'][number]['source']) {
  switch (source) {
    case 'generated-artwork':
      return 'Illustrative visual'
    case 'app-store':
      return 'Apple App Store'
    case 'google-play':
      return 'Google Play'
    case 'live-site':
      return 'Captured from live site'
    default:
      return 'Repository asset'
  }
}
