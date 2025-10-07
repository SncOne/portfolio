import type { Metadata } from 'next'
import Link from 'next/link'

import { FadeIn } from '@/components/fade-in'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { projects } from '@/lib/projects'

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
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.08}>
            <Card className="flex h-full flex-col transition-transform hover:-translate-y-1 hover:shadow-subtle">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">{project.excerpt}</p>
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
              </CardContent>
              <CardFooter>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-sm font-medium text-foreground underline underline-offset-4 hover:text-primary"
                >
                  View details →
                </Link>
              </CardFooter>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
