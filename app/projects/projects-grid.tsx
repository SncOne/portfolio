'use client'

import { useState } from 'react'

import { FadeIn } from '@/components/fade-in'
import { ProjectCard } from '@/components/project-card'
import { projects } from '@/lib/projects'
import { cn } from '@/lib/utils'

const filters = ['All', 'Mobile product', 'Travel product', 'AI SaaS', 'B2B platform', 'Technology company', 'Web product'] as const

export function ProjectsGrid() {
  const [selectedFilter, setSelectedFilter] = useState<(typeof filters)[number]>('All')

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedFilter)

  return (
    <>
      <FadeIn delay={0.08} className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">Filter by product type</p>
          <span className="text-xs text-muted-foreground">{filteredProjects.length} projects</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter projects by product type">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setSelectedFilter(filter)}
              aria-pressed={selectedFilter === filter}
              className={cn(
                'min-h-10 shrink-0 rounded-full border px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background',
                selectedFilter === filter
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background text-muted-foreground hover:border-foreground/25 hover:text-foreground'
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </FadeIn>

      <div className="grid gap-5 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <FadeIn key={project.slug} delay={0.04 + Math.min(index, 5) * 0.03} className={index === 0 && selectedFilter === 'All' ? 'lg:col-span-2' : undefined}>
            <ProjectCard project={project} featured={index === 0 && selectedFilter === 'All'} priority={index < 2} />
          </FadeIn>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border p-10 text-center text-muted-foreground">
          No projects match this filter yet.
        </div>
      ) : null}
    </>
  )
}
