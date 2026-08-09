import type { Metadata } from 'next'

import { FadeIn } from '@/components/fade-in'
import { ArrowRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from '@/components/icons'
import { absoluteUrl, siteConfig } from '@/lib/site'

import { ContactForm } from './contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Türker Gürel about Flutter mobile products and product engineering work.',
  alternates: { canonical: absoluteUrl('/contact') },
}

const directLinks = [
  { label: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: MailIcon },
  { label: 'GitHub', href: siteConfig.social.github, icon: GitHubIcon },
  { label: 'LinkedIn', href: siteConfig.social.linkedIn, icon: LinkedInIcon },
]

export default function ContactPage() {
  return (
    <section className="space-y-12">
      <FadeIn className="max-w-3xl space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary">Contact</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Tell me what you are building.
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Share the product, the part of the flow that is getting difficult, and what you want to make clearer next.
        </p>
      </FadeIn>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr),280px] lg:gap-20">
        <ContactForm />
        <FadeIn delay={0.12} className="space-y-6 border-t border-border pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div>
            <p className="text-sm font-semibold text-foreground">Prefer direct contact?</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Email is the most reliable route. The form also works when this deployment has SMTP configured.
            </p>
          </div>
          <ul className="space-y-3">
            {directLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="break-all">{label}</span>
                  <ArrowRightIcon className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}
