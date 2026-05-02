'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { useState } from 'react'

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/fade-in'
import { ArrowRightIcon } from '@/components/icons'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { projects } from '@/lib/projects'
import { cn } from '@/lib/utils'

// Get unique tags from all projects
const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort()

export function ProjectsGrid() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredProjects = selectedTag
    ? projects.filter((p) => p.tags.includes(selectedTag))
    : projects

  return (
    <>
      {/* Filter Tabs */}
      <FadeIn delay={0.1} className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-medium transition-all',
              selectedTag === null
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-all',
                selectedTag === tag
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Projects Grid */}
      <StaggerContainer staggerDelay={0.08} initialDelay={0.15} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <StaggerItem key={project.slug}>
            <Link href={`/projects/${project.slug}`} className="group block h-full">
              <Card className="relative flex h-full flex-col overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <CardHeader className="relative gap-4">
                  {(project.status || project.award) && (
                    <div className="flex flex-wrap gap-2">
                      {project.status && <ProjectBadge>{project.status}</ProjectBadge>}
                      {project.award && <ProjectBadge>{project.award}</ProjectBadge>}
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <CardTitle className="transition-colors group-hover:text-primary">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.subtitle}</CardDescription>
                    </div>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-muted/50 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="relative flex-1 space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.excerpt}
                  </p>
                  {project.role && (
                    <p className="border-l border-border pl-3 text-xs leading-relaxed text-muted-foreground">
                      {project.role}
                    </p>
                  )}
                </CardContent>

                <CardFooter className="relative">
                  <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className={cn(
                          'rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] transition-colors',
                          selectedTag === tag
                            ? 'border-primary/40 bg-primary/10 text-primary'
                            : 'border-border/60 bg-muted/40 text-muted-foreground group-hover:border-primary/20 group-hover:bg-primary/5'
                        )}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </CardFooter>
              </Card>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {filteredProjects.length === 0 && (
        <div className="py-12 text-center text-muted-foreground">
          No projects found with the selected filter.
        </div>
      )}
    </>
  )
}

function ProjectBadge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-primary">
      {children}
    </span>
  )
}
