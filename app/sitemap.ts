import type { MetadataRoute } from 'next'

import { projects } from '@/lib/projects'
import { absoluteUrl } from '@/lib/site'

const staticPages = ['', '/about', '/projects', '/blog', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const projectPages = projects.map((project) => `/projects/${project.slug}`)

  return [...staticPages, ...projectPages].map((route) => ({
    url: absoluteUrl(route),
    lastModified,
  }))
}
