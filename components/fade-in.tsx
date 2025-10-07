'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { HTMLAttributes, ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  delay?: number
} & HTMLAttributes<HTMLDivElement>

export function FadeIn({ children, delay = 0, className, ...props }: FadeInProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
