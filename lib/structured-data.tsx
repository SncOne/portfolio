// Structured data helpers for SEO (JSON-LD schemas)

export const baseUrl = 'https://turkergurel.com'

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
}

export function getPersonSchema(): PersonSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Türker Gürel',
    url: baseUrl,
    jobTitle: 'Flutter & Next.js Developer',
    description:
      'I craft refined Flutter and Next.js products with a sharp eye for detail, accessibility, and delightful UX.',
    sameAs: [
      'https://github.com/SncOne',
      'https://www.linkedin.com/in/turker-gurel/',
    ],
    knowsAbout: [
      'Flutter',
      'Next.js',
      'React',
      'TypeScript',
      'Mobile Development',
      'Web Development',
      'UI/UX Design',
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
      'Portfolio of Türker Gürel - Flutter & Next.js Developer specializing in crafting refined digital products.',
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
}): CreativeWorkSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: `${baseUrl}/projects/${project.slug}`,
    author: {
      '@type': 'Person',
      name: 'Türker Gürel',
    },
    keywords: project.tags,
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
