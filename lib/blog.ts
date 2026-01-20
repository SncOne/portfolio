// Blog post utilities and types

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  tags: string[]
  featured?: boolean
}

// Static blog posts data (can be replaced with MDX/CMS later)
export const blogPosts: BlogPost[] = [
  {
    slug: 'building-smooth-flutter-animations',
    title: 'Building Smooth Flutter Animations That Feel Natural',
    excerpt:
      'A deep dive into creating buttery-smooth animations in Flutter using implicit and explicit animation controllers, with real-world examples.',
    date: '2026-01-15',
    readingTime: '8 min read',
    tags: ['Flutter', 'Animation', 'Mobile'],
    featured: true,
  },
  {
    slug: 'nextjs-app-router-patterns',
    title: 'Next.js App Router Patterns I Use in Every Project',
    excerpt:
      'Practical patterns for layouts, loading states, error handling, and data fetching that make Next.js apps more maintainable.',
    date: '2026-01-10',
    readingTime: '6 min read',
    tags: ['Next.js', 'React', 'Web'],
  },
  {
    slug: 'design-tokens-at-scale',
    title: 'Design Tokens at Scale: From Figma to Code',
    excerpt:
      'How to structure design tokens for seamless handoff between design and development, with examples in Tailwind CSS.',
    date: '2026-01-05',
    readingTime: '10 min read',
    tags: ['Design Systems', 'CSS', 'Tailwind'],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured)
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
