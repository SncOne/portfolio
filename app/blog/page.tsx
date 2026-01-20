import type { Metadata } from 'next'
import Link from 'next/link'

import { FadeIn } from '@/components/fade-in'
import { ArrowRightIcon, ExternalLinkIcon } from '@/components/icons'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on Flutter, Next.js, design systems, and building great products by Türker Gürel.',
}

// Medium articles - linking to external Medium posts
const mediumArticles = [
  {
    title: 'Visit my Medium',
    description: 'Read all my articles about Flutter, Next.js, mobile development, and software engineering best practices.',
    url: 'https://medium.com/@turkergurel19',
    isMain: true,
  },
]

export default function BlogPage() {
  return (
    <section className="space-y-12">
      <FadeIn className="space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Blog</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Thoughts & Explorations
        </h1>
        <p className="max-w-prose text-lg text-muted-foreground">
          I write about Flutter, Next.js, design systems, and the craft of building products that people love.
          All my articles are published on Medium.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <Link 
          href="https://medium.com/@turkergurel19"
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <Card className="relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
            
            <CardHeader className="relative pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Medium logo */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
                    <span className="text-lg font-bold">M</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl transition-colors group-hover:text-primary">
                      Read on Medium
                    </CardTitle>
                    <CardDescription>@turkergurel19</CardDescription>
                  </div>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground">
                  <ExternalLinkIcon className="h-5 w-5" />
                </span>
              </div>
            </CardHeader>

            <CardContent className="relative">
              <p className="text-muted-foreground">
                Explore my articles about Flutter development, Next.js patterns, design systems, 
                mobile architecture, and tips for building polished user experiences.
              </p>
              
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                View all articles
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </CardContent>
          </Card>
        </Link>
      </FadeIn>

      {/* Topics I write about */}
      <FadeIn delay={0.15} className="space-y-4">
        <h2 className="text-xl font-semibold">Topics I write about</h2>
        <div className="flex flex-wrap gap-2">
          {['Flutter', 'Dart', 'Next.js', 'React', 'Mobile Development', 'Design Systems', 'TypeScript', 'UI/UX', 'Clean Architecture'].map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-sm text-muted-foreground"
            >
              {topic}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
