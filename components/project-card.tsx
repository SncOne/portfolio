import Link from 'next/link'

import { ArrowRightIcon } from '@/components/icons'
import { ProjectMediaPreview } from '@/components/project-media'
import type { Project } from '@/lib/projects'
import { cn } from '@/lib/utils'

export function ProjectCard({
  project,
  featured = false,
  priority = false,
}: {
  project: Project
  featured?: boolean
  priority?: boolean
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 ring-offset-background',
        featured && 'lg:col-span-2 lg:grid lg:grid-cols-[1.1fr,0.9fr]'
      )}
    >
      <ProjectMediaPreview
        media={project.gallery}
        priority={priority}
        className={cn(
          'rounded-none border-0 border-b lg:border-b-0 lg:border-r',
          featured && 'lg:aspect-auto lg:min-h-full'
        )}
      />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-primary">
              {project.projectType}
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
              {project.title}
            </h3>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-foreground/30 group-hover:text-foreground">
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.excerpt}
        </p>
        {project.role ? (
          <p className="mt-5 border-l border-primary/35 pl-3 text-xs leading-relaxed text-muted-foreground">
            {project.role}
          </p>
        ) : null}
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/80 bg-muted/50 px-2.5 py-1 text-[0.68rem] font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
