const baseUrl = process.env.SMOKE_BASE_URL ?? 'http://127.0.0.1:3000'

const routes = [
  '/',
  '/about',
  '/projects',
  '/projects/ridertify',
  '/projects/praexi',
  '/blog',
  '/contact',
  '/robots.txt',
  '/sitemap.xml',
]

const failures = []

for (const route of routes) {
  const response = await fetch(new URL(route, baseUrl))

  if (!response.ok) {
    failures.push(`${route} returned ${response.status}`)
    continue
  }

  const body = await response.text()

  if (route.endsWith('.xml') && !body.includes('<urlset')) {
    failures.push(`${route} did not return a sitemap document`)
  }

  if (route === '/robots.txt' && !body.includes('Sitemap:')) {
    failures.push(`${route} did not advertise a sitemap`)
  }

  if (!route.endsWith('.xml') && !route.endsWith('.txt') && !body.includes('<h1')) {
    failures.push(`${route} did not render a heading`)
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'))
  process.exitCode = 1
} else {
  console.log(`Smoke checks passed for ${routes.length} routes at ${baseUrl}`)
}
