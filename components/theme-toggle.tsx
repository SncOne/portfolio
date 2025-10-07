'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

type Theme = 'light' | 'dark'

const THEME_KEY = 'site-theme'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const stored = window.localStorage.getItem(THEME_KEY) as Theme | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial: Theme = stored ?? (prefersDark ? 'dark' : 'light')

    applyTheme(initial)
    setTheme(initial)
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    applyTheme(nextTheme)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(THEME_KEY, nextTheme)
    }
  }

  if (!mounted) {
    return (
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="relative h-9 w-9 rounded-full px-0"
        aria-hidden
      >
        <SunIcon className="h-4 w-4 opacity-0" />
      </Button>
    )
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="relative h-9 w-9 rounded-full px-0"
    >
      <span className="sr-only">Toggle theme</span>
      <SunIcon
        className={`h-4 w-4 transition-opacity duration-300 ${
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <MoonIcon
        className={`absolute h-4 w-4 transition-opacity duration-300 ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </Button>
  )

  function applyTheme(next: Theme) {
    const root = window.document.documentElement
    root.classList.toggle('dark', next === 'dark')
    root.style.colorScheme = next
  }
}

function SunIcon({ className = '' }: { className?: string }) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}

function MoonIcon({ className = '' }: { className?: string }) {
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
      <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79Z" />
    </svg>
  )
}
