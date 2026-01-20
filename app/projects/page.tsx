import type { Metadata } from 'next'

import { FadeIn } from '@/components/fade-in'
import { ProjectsGrid } from './projects-grid'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected projects and experiments crafted by Türker Gürel.',
}

export default function ProjectsPage() {
  return (
    <section className="space-y-12">
      <FadeIn className="space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Projects</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Products that balance craft, performance, and clarity.
        </h1>
        <p className="max-w-prose text-lg text-muted-foreground">
          A selection of shipped work and ongoing explorations. Each project pairs calm, confident visuals with robust
          engineering, resulting in dependable experiences users genuinely enjoy.
        </p>
      </FadeIn>

      <ProjectsGrid />
    </section>
  )
}
