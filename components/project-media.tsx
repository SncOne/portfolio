import Image from 'next/image'

import type { ProjectGalleryImage } from '@/lib/projects'
import { cn } from '@/lib/utils'

type ProjectMediaProps = {
  media: ProjectGalleryImage
  priority?: boolean
  className?: string
  sizes?: string
}

export function ProjectMedia({
  media,
  priority = false,
  className,
  sizes = '(min-width: 1024px) 560px, 100vw',
}: ProjectMediaProps) {
  const isPortrait = media.orientation === 'portrait'

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[calc(var(--radius)-0.1rem)] border border-border/70 bg-muted/35',
        isPortrait ? 'aspect-[4/3] p-5 sm:p-8' : 'aspect-[16/10]',
        className
      )}
    >
      <Image
        src={media.src}
        alt={media.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          isPortrait ? 'object-contain' : 'object-cover',
          media.visualType === 'project-artwork' && 'transition-transform duration-500 group-hover:scale-[1.02]'
        )}
      />
      {media.visualType === 'project-artwork' ? (
        <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-white/75 backdrop-blur-sm">
          Project artwork
        </span>
      ) : null}
    </div>
  )
}

export function ProjectMediaPreview({
  media,
  priority = false,
  className,
}: {
  media: ProjectGalleryImage[]
  priority?: boolean
  className?: string
}) {
  const previewMedia = media.slice(0, 2)
  const allPortrait = previewMedia.every((item) => item.orientation === 'portrait')

  if (previewMedia.length === 1 || !allPortrait) {
    return (
      <ProjectMedia
        media={previewMedia[0]}
        priority={priority}
        className={className}
      />
    )
  }

  return (
    <div className={cn('grid aspect-[16/10] grid-cols-2 gap-3 overflow-hidden rounded-[calc(var(--radius)-0.1rem)] bg-muted/35 p-4', className)}>
      {previewMedia.map((item, index) => (
        <div
          key={item.src}
          className="relative overflow-hidden rounded-md border border-border/70 bg-background/70"
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            priority={priority && index === 0}
            sizes="(min-width: 1024px) 240px, 45vw"
            className="object-contain p-2"
          />
        </div>
      ))}
    </div>
  )
}
