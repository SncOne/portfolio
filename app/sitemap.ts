import type { MetadataRoute } from 'next'

import { projects } from '@/lib/projects'

export const baseUrl = 'https://turkergurel.com'

const staticPages = ['', '/about', '/projects', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const projectPages = projects.map((project) => `/projects/${project.slug}`)

  return [...staticPages, ...projectPages].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }))
}
