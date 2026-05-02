import type { Metadata } from 'next'

import { FadeIn } from '@/components/fade-in'
import { ProjectsGrid } from './projects-grid'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Flutter, realtime, maps, AI, Firebase, and backend projects by Türker Gürel.',
}

export default function ProjectsPage() {
  return (
    <section className="space-y-12">
      <FadeIn className="space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Projects</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Mobile products built for real workflows.
        </h1>
        <p className="max-w-prose text-lg text-muted-foreground">
          A focused set of Flutter apps, realtime platforms, backend integrations,
          and web products. Five apps are released on both iOS and Android,
          while private, review-stage, and work-in-progress projects are clearly marked.
        </p>
      </FadeIn>

      <ProjectsGrid />
    </section>
  )
}
