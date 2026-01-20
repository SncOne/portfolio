'use client'

import { useEffect, useState } from 'react'

import { MoonIcon, SunIcon } from '@/components/icons'
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
