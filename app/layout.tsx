import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

import './global.css'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { absoluteUrl, siteConfig } from '@/lib/site'
import { getPersonSchema, getWebsiteSchema, JsonLd } from '@/lib/structured-data'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} · ${siteConfig.role}`,
    template: '%s · Türker Gürel',
  },
  description:
    'Türker Gürel is a Flutter mobile developer and product engineer building production iOS and Android apps with realtime systems, maps, live location, subscriptions, and API-backed workflows.',
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: `${siteConfig.name} · ${siteConfig.role}`,
    description:
      'Production Flutter apps with realtime messaging, maps, live location, subscriptions, and API-backed product flows.',
    url: siteConfig.url,
    siteName: 'Türker Gürel',
    locale: 'en_US',
    type: 'website',
    images: [{ url: absoluteUrl('/og'), width: 1200, height: 630, alt: 'Türker Gürel portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} · ${siteConfig.role}`,
    description:
      'Production Flutter apps with realtime messaging, maps, live location, subscriptions, and API-backed product flows.',
    images: [absoluteUrl('/og')],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0d1117' },
    { media: '(prefers-color-scheme: light)', color: '#fbfbfa' },
  ],
}

// Inline script to prevent flash of wrong theme
const themeScript = `
(function() {
  try {
    var theme = localStorage.getItem('site-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var resolved = theme || (prefersDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', resolved === 'dark');
    document.documentElement.style.colorScheme = resolved;
  } catch (e) {}
})();
`

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd data={getWebsiteSchema()} />
        <JsonLd data={getPersonSchema()} />
      </head>
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          <div className="container max-w-6xl space-y-20 pb-20 pt-10 sm:pt-14 lg:pt-16">
            {children}
          </div>
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
