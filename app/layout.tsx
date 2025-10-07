import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import './global.css'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">
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
