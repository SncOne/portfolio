import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import './global.css'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { getPersonSchema, getWebsiteSchema, JsonLd } from '@/lib/structured-data'

const baseUrl = 'https://turkergurel.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Türker Gürel · Flutter & Next.js Developer',
    template: '%s · Türker Gürel',
  },
  description:
    'I craft refined Flutter and Next.js products with a sharp eye for detail, accessibility, and delightful UX.',
  openGraph: {
    title: 'Türker Gürel · Flutter & Next.js Developer',
    description:
      'I craft refined Flutter and Next.js products with a sharp eye for detail, accessibility, and delightful UX.',
    url: baseUrl,
    siteName: 'Türker Gürel',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Türker Gürel · Flutter & Next.js Developer',
    description:
      'I craft refined Flutter and Next.js products with a sharp eye for detail, accessibility, and delightful UX.',
  },
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
          <div className="container max-w-prose space-y-16 pb-16 pt-12">
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
