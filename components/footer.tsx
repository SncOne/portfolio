import Link from 'next/link'

const socials = [
  { label: 'GitHub', href: 'https://github.com/turkergurel', icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/turkergurel', icon: LinkedInIcon },
  { label: 'Email', href: 'mailto:hello@turkergurel.com', icon: MailIcon },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex max-w-prose flex-col gap-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Türker Gürel. All rights reserved.</p>
        <div className="flex items-center gap-5">
          {socials.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-2 hover:text-foreground"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden text-xs font-medium uppercase tracking-[0.18em] sm:block">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M9 19c-4.5 1.5-4.5-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 18 4.77 5.07 5.07 0 0 0 17.91 1S16.73.65 14 2.48a13.38 13.38 0 0 0-5 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.58c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="2" y="9" width="4" height="12" rx="1" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}
