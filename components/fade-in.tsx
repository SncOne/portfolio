'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ComponentPropsWithoutRef, HTMLAttributes, ReactNode } from 'react'

type AnimationDirection = 'up' | 'down' | 'left' | 'right'

type FadeInProps = {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: AnimationDirection
} & HTMLAttributes<HTMLDivElement>

const getDirectionOffset = (direction: AnimationDirection) => {
  switch (direction) {
    case 'up':
      return { x: 0, y: 20 }
    case 'down':
      return { x: 0, y: -20 }
    case 'left':
      return { x: 20, y: 0 }
    case 'right':
      return { x: -20, y: 0 }
    default:
      return { x: 0, y: 20 }
  }
}

export function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.6,
  direction = 'up',
  className, 
  ...props 
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion()
  const offset = getDirectionOffset(direction)

  if (prefersReducedMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay, duration, ease: 'easeOut' }}
      className={className}
      {...(props as ComponentPropsWithoutRef<typeof motion.div>)}
    >
      {children}
    </motion.div>
  )
}

// Stagger container for animating lists
type StaggerContainerProps = {
  children: ReactNode
  staggerDelay?: number
  initialDelay?: number
} & HTMLAttributes<HTMLDivElement>

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { staggerDelay: number; initialDelay: number }) => ({
    opacity: 1,
    transition: {
      delayChildren: custom.initialDelay,
      staggerChildren: custom.staggerDelay,
    },
  }),
}

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  initialDelay = 0,
  className,
  ...props
}: StaggerContainerProps) {
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
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={{ staggerDelay, initialDelay }}
      className={className}
      {...(props as ComponentPropsWithoutRef<typeof motion.div>)}
    >
      {children}
    </motion.div>
  )
}

// Stagger item for use inside StaggerContainer
type StaggerItemProps = {
  children: ReactNode
  direction?: AnimationDirection
} & HTMLAttributes<HTMLDivElement>

export function StaggerItem({
  children,
  direction = 'up',
  className,
  ...props
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion()
  const offset = getDirectionOffset(direction)

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: offset.x, y: offset.y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  if (prefersReducedMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      variants={itemVariants}
      className={className}
      {...(props as ComponentPropsWithoutRef<typeof motion.div>)}
    >
      {children}
    </motion.div>
  )
}
