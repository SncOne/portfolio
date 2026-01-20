import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

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
  type ProjectLinkType,
} from '@/lib/projects'
import { cn } from '@/lib/utils'

type PageParams = {
  slug: string
}

const linkBaseClasses =
  'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-transform transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background'

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
        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                linkBaseClasses,
                link.type === 'github'
                  ? 'border border-border bg-transparent text-foreground hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground'
                  : 'bg-primary text-primary-foreground shadow-subtle shadow-primary/20 hover:-translate-y-0.5 hover:bg-primary/90'
              )}
            >
              {getLinkIcon(link.type)}
              {link.label}
            </Link>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="space-y-8" delay={0.12}>
        <header className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
          <p className="max-w-prose text-muted-foreground">{project.description}</p>
        </header>
        <div className="space-y-6 text-muted-foreground">
          {project.highlights.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="space-y-6" delay={0.18}>
        <h2 className="text-2xl font-semibold tracking-tight">Gallery</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {project.gallery.map((media, index) => (
            <FadeIn key={media.src} delay={0.2 + index * 0.08} className="relative overflow-hidden rounded-2xl border border-border">
              <Image
                src={media.src}
                alt={media.alt}
                width={960}
                height={640}
                className="h-full w-full object-cover"
              />
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </article>
  )
}

function getLinkIcon(type: ProjectLinkType) {
  switch (type) {
    case 'google-play':
      return <GooglePlayIcon className="h-4 w-4" />
    case 'app-store':
      return <AppStoreIcon className="h-4 w-4" />
    case 'github':
      return <GitHubIcon className="h-4 w-4" />
    default:
      return <ExternalLinkIcon className="h-4 w-4" />
  }
}
