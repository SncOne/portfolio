import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { FadeIn } from '@/components/fade-in'
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
      return <ExternalIcon className="h-4 w-4" />
  }
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="m3.09 2.3 11.43 11.43" />
      <path d="M14.52 5.57 20.66 9a2 2 0 0 1 0 3.46l-6.14 3.42" />
      <path d="m3.09 21.7 11.43-11.43" />
    </svg>
  )
}

function AppStoreIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M17.53 17.53a4 4 0 0 1-3.57 2.2c-1.54 0-2.73-.87-3.39-.87s-1.97.84-3.23.84A4.05 4.05 0 0 1 3 18.42c-1.71-3 0-7.33 2.25-10.27C6.74 6.81 8.06 6 9.2 6c1.37 0 2.24.9 3.38.9 1.1 0 1.76-.9 3.38-.9a4.5 4.5 0 0 1 3.61 1.96 3.89 3.89 0 0 0-1.69 3.21 4 4 0 0 0 2.35 3.63 3.76 3.76 0 0 1-2.7 1.73Z" />
      <path d="M14.64 2a3.6 3.6 0 0 1-.9 2.56 2.87 2.87 0 0 1-2.27 1.13 2.88 2.88 0 0 1 .92-2.51A3.14 3.14 0 0 1 14.64 2Z" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path
        d="M9 19c-4.5 1.5-4.5-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 18 4.77 5.07 5.07 0 0 0 17.91 1S16.73.65 14 2.48a13.38 13.38 0 0 0-5 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.58c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="m10 14 11-11" />
    </svg>
  )
}
