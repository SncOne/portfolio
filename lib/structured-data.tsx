import { absoluteUrl, siteConfig } from '@/lib/site'

// Structured data helpers for SEO (JSON-LD schemas)

export const baseUrl = siteConfig.url

export type PersonSchema = {
  '@context': 'https://schema.org'
  '@type': 'Person'
  name: string
  url: string
  jobTitle: string
  description: string
  sameAs: string[]
  knowsAbout: string[]
}

export type WebsiteSchema = {
  '@context': 'https://schema.org'
  '@type': 'WebSite'
  name: string
  url: string
  description: string
  author: {
    '@type': 'Person'
    name: string
  }
}

export type CreativeWorkSchema = {
  '@context': 'https://schema.org'
  '@type': 'CreativeWork'
  name: string
  description: string
  url: string
  author: {
    '@type': 'Person'
    name: string
  }
  keywords: string[]
  genre?: string
  image?: string
}

export function getPersonSchema(): PersonSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Türker Gürel',
    url: baseUrl,
    jobTitle: siteConfig.role,
    description:
      'Flutter mobile product engineer building realtime, map-heavy, AI, Firebase, and backend-connected apps.',
    sameAs: [
      'https://github.com/SncOne',
      'https://www.linkedin.com/in/turker-gurel/',
    ],
    knowsAbout: [
      'Flutter',
      'Next.js',
      'React',
      'TypeScript',
      'Riverpod',
      'Firebase',
      'Realtime Systems',
      'Maps',
      'Mobile Backend Integration',
      'Mobile Development',
      'Web Development',
      'Dart',
      'Push Notifications',
      'Subscriptions',
    ],
  }
}

export function getWebsiteSchema(): WebsiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Türker Gürel',
    url: baseUrl,
    description:
      'Portfolio of Türker Gürel, a Flutter mobile developer and product engineer building production mobile products.',
    author: {
      '@type': 'Person',
      name: 'Türker Gürel',
    },
  }
}

export function getProjectSchema(project: {
  title: string
  description: string
  slug: string
  tags: string[]
  platform?: string
  gallery?: { src: string; alt: string; visualType: string }[]
}): CreativeWorkSchema {
  const image = project.gallery?.find((media) => media.visualType !== 'product-screenshot')?.src

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: absoluteUrl(`/projects/${project.slug}`),
    author: {
      '@type': 'Person',
      name: 'Türker Gürel',
    },
    keywords: project.tags,
    ...(project.platform ? { genre: project.platform } : {}),
    ...(image ? { image: absoluteUrl(image) } : {}),
  }
}

// Component to inject JSON-LD into page
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
