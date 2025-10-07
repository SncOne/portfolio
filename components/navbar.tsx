'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()

  const isActivePath = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 max-w-prose items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Türker Gürel
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                isActivePath(item.href) ? 'text-foreground' : 'text-muted-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <nav className="flex items-center gap-4 text-sm md:hidden">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-muted-foreground transition-colors hover:text-foreground/80',
                  isActivePath(item.href) && 'text-foreground'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
