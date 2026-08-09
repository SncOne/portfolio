import type { Metadata } from 'next'

import { FadeIn } from '@/components/fade-in'
import { absoluteUrl } from '@/lib/site'
import { ProjectsGrid } from './projects-grid'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected Flutter mobile products and the web, backend, realtime, and AI systems around them by Türker Gürel.',
  alternates: { canonical: absoluteUrl('/projects') },
}

export default function ProjectsPage() {
  return (
    <section className="space-y-10">
      <FadeIn className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary">Projects</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Shipped mobile products and the systems around them.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A focused set of Flutter apps, realtime workflows, maps, AI products, and supporting web or backend work. Real store screenshots and illustrative project artwork are kept distinct.
        </p>
      </FadeIn>

      <ProjectsGrid />
    </section>
  )
}
