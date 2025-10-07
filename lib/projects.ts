export type ProjectLinkType = 'google-play' | 'app-store' | 'github' | 'website'

export type ProjectLink = {
  type: ProjectLinkType
  label: string
  href: string
}

export type ProjectGalleryImage = {
  src: string
  alt: string
}

export type Project = {
  slug: string
  title: string
  subtitle: string
  excerpt: string
  description: string
  highlights: string[]
  tags: string[]
  links: ProjectLink[]
  gallery: ProjectGalleryImage[]
}

export const projects: Project[] = [
  {
    slug: 'ridertify',
    title: 'Ridertify',
    subtitle: 'Social riding network for motorcyclists',
    excerpt:
      'A connected roadmap for riders to track journeys, organise meetups, and stay safe with live ride telemetry.',
    description:
      'Ridertify connects motorcyclists around the globe with ambient ride tracking, group planning, and proactive safety features.',
    highlights: [
      'Built a cross-platform Flutter experience that stitches together ride telematics, live weather insights, and rider-to-rider messaging.',
      'Crafted an event system that helps local chapters coordinate ride-outs, exchange GPX routes, and document key highlights visually.',
      'Integrated real-time incident detection and fallback notifications so family members can follow rides with peace of mind.',
    ],
    tags: ['Flutter', 'Realtime', 'Maps', 'Firebase'],
    links: [
      {
        type: 'google-play',
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=ridertify',
      },
      {
        type: 'app-store',
        label: 'App Store',
        href: 'https://apps.apple.com/app/ridertify/id1234567890',
      },
    ],
    gallery: [
      {
        src: '/projects/ridertify-dashboard.svg',
        alt: 'Ridertify dashboard with ride analytics',
      },
      {
        src: '/projects/ridertify-route.svg',
        alt: 'Ridertify route planning interface',
      },
    ],
  },
  {
    slug: 'mystique',
    title: 'Mystique',
    subtitle: 'AI-powered fortune telling experience',
    excerpt:
      'Immersive, story-driven fortune readings powered by multilingual AI narrations and interactive ritual flows.',
    description:
      'Mystique reimagines fortune telling with adaptive narratives, tactile interactions, and a calm, cinematic presentation.',
    highlights: [
      'Orchestrated an AI prompt engine that personalises readings and adapts tone across 12 supported languages.',
      'Directed the visual system with atmospheric gradients, aura-inspired motion, and layered particle effects.',
      'Shipped a privacy-first architecture where sensitive prompts never persist unencrypted beyond the live ritual.',
    ],
    tags: ['Next.js', 'AI', 'i18n', 'Design Systems'],
    links: [
      {
        type: 'website',
        label: 'Marketing Site',
        href: 'https://mystique.app',
      },
      {
        type: 'github',
        label: 'GitHub',
        href: 'https://github.com/turkergurel/mystique',
      },
    ],
    gallery: [
      {
        src: '/projects/mystique-home.svg',
        alt: 'Mystique home ritual selection screen',
      },
      {
        src: '/projects/mystique-reading.svg',
        alt: 'Mystique AI reading interface',
      },
    ],
  },
  {
    slug: 'inndance',
    title: 'Inndance',
    subtitle: 'Festival companion for dance explorers',
    excerpt:
      'The social layer for dancers to discover festivals, curate schedules, and connect with choreographers worldwide.',
    description:
      'Inndance combines discovery feeds, schedule builders, and social storytelling to keep festival-goers in flow.',
    highlights: [
      'Delivered a collaborative schedule planner that syncs across devices and handles frequent lineup changes gracefully.',
      'Led the design of a content creation toolkit for performers to publish rehearsal clips, backstage stories, and quick updates.',
      'Implemented offline-first data sync so travellers can stay organised even when roaming between venues.',
    ],
    tags: ['Next.js', 'Tailwind', 'Offline-first', 'Supabase'],
    links: [
      {
        type: 'app-store',
        label: 'App Store',
        href: 'https://apps.apple.com/app/inndance/id0987654321',
      },
      {
        type: 'github',
        label: 'GitHub',
        href: 'https://github.com/turkergurel/inndance',
      },
    ],
    gallery: [
      {
        src: '/projects/inndance-feed.svg',
        alt: 'Inndance social feed screen',
      },
      {
        src: '/projects/inndance-schedule.svg',
        alt: 'Inndance schedule planner',
      },
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectSlugs() {
  return projects.map((project) => project.slug)
}
