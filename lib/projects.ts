export type ProjectLinkType = 'google-play' | 'app-store' | 'github' | 'website'
export type ProjectVisualType = 'product-screenshot' | 'store-screenshot' | 'project-artwork'
export type ProjectVisualSource =
  | 'repository'
  | 'app-store'
  | 'google-play'
  | 'live-site'
  | 'generated-artwork'
export type ProjectCategory =
  | 'Mobile product'
  | 'Travel product'
  | 'AI SaaS'
  | 'B2B platform'
  | 'Technology company'
  | 'Web product'

export type ProjectLink = {
  type: ProjectLinkType
  label: string
  href: string
}

export type ProjectGalleryImage = {
  src: string
  alt: string
  visualType: ProjectVisualType
  source: ProjectVisualSource
  orientation?: 'portrait' | 'landscape'
}

export type Project = {
  slug: string
  title: string
  projectType: string
  category: ProjectCategory
  platform: string
  subtitle: string
  excerpt: string
  description: string
  highlights: string[]
  tags: string[]
  links: ProjectLink[]
  gallery: ProjectGalleryImage[]
  role?: string
  roleLabel?: string
  impact?: string
  status?: string
  award?: string
  featured?: boolean
}

const storeScreenshot = (
  src: string,
  alt: string
): ProjectGalleryImage => ({
  src,
  alt,
  visualType: 'store-screenshot',
  source: 'repository',
  orientation: 'portrait',
})

const artwork = (src: string, alt: string): ProjectGalleryImage => ({
  src,
  alt,
  visualType: 'project-artwork',
  source: 'generated-artwork',
  orientation: 'landscape',
})

const productArtwork = (
  src: string,
  alt: string
): ProjectGalleryImage => ({
  src,
  alt,
  visualType: 'project-artwork',
  source: 'repository',
  orientation: 'landscape',
})

export const projects: Project[] = [
  {
    slug: 'ridertify',
    title: 'Ridertify',
    projectType: 'Mobile product · Flutter',
    category: 'Mobile product',
    platform: 'iOS + Android',
    subtitle: 'A social riding platform for motorcycle riders',
    excerpt:
      'A released riding network with route sharing, live location, rider discovery, messaging, map workflows, and community tools.',
    description:
      'Ridertify brings motorcycle community and on-road utility into one mobile product. Riders can connect, publish routes, share live location, message other riders, and manage ride-related community activity through a map-aware experience.',
    highlights: [
      'Built a social feed with posts, stories, likes, comments, shares, rider discovery, clubs, pages, and vehicle profiles.',
      'Added realtime messaging with chat rooms, online presence, friend requests, and direct profile interactions.',
      'Designed route workflows for creating, browsing, filtering, reviewing, and opening saved rides on map-based detail pages.',
      'Implemented live location sharing and nearby rider discovery using background tracking and map visualization.',
      'Used Flutter, Riverpod, Firebase, Auto Route, Google Navigation, and MapLibre across realtime and mapping-heavy flows.',
    ],
    tags: ['Flutter', 'Riverpod', 'Firebase', 'Realtime', 'Maps'],
    links: [
      {
        type: 'website',
        label: 'Website',
        href: 'https://ridertify.com.tr/',
      },
      {
        type: 'google-play',
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.newIdTech.ridertify&hl=tr',
      },
      {
        type: 'app-store',
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/ridertify/id6737122354',
      },
    ],
    gallery: [
      storeScreenshot(
        '/projects/ridertify-store-1.webp',
        'Ridertify store listing artwork showing the product entry flow'
      ),
      storeScreenshot(
        '/projects/ridertify-store-2.webp',
        'Ridertify mobile product screen with rider discovery and safety actions'
      ),
    ],
    role: 'Flutter engineer for social, route, realtime location, messaging, and map-based product flows.',
    impact:
      'Combined rider community features with practical route planning, live discovery, and on-road context.',
    status: 'Released on iOS and Android',
    featured: true,
  },
  {
    slug: 'excursionx',
    title: 'ExcursionX',
    projectType: 'Travel product · Flutter + backend',
    category: 'Travel product',
    platform: 'Flutter + Go backend',
    subtitle: 'A travel assistant for discovery, planning, and flight search',
    excerpt:
      'A work-in-progress travel product connecting destination discovery, trip planning, wallet tools, Firebase auth, and a Go flight-search backend.',
    description:
      'ExcursionX helps users plan trips from discovery to booking preparation. The Flutter client supports onboarding, authentication, destination exploration, trip management, wallet tools, notifications, and profile settings, while the Go backend verifies Firebase users and securely proxies flight searches.',
    highlights: [
      'Built a tab-based dashboard for Home, Explore, Trips, Wallet, and Profile.',
      'Implemented Firebase-backed authentication with email/password, Google sign-in, and Apple sign-in support.',
      'Added destination discovery with location-aware search, POI browsing, category filtering, favorites, and place detail navigation.',
      'Designed trip planning entry points with currency conversion, packing lists, and document management utilities.',
      'Developed a Go backend with Fiber, GORM, and PostgreSQL/Supabase to verify Firebase ID tokens and proxy flight searches securely.',
    ],
    tags: ['Flutter', 'Riverpod', 'Go', 'Firebase', 'Maps', 'PostgreSQL'],
    links: [
      {
        type: 'website',
        label: 'Landing page',
        href: 'https://excursionx.app/',
      },
    ],
    gallery: [
      artwork(
        '/projects/excursionx-artwork.webp',
        'Illustrative ExcursionX travel planning artwork with a connected route and itinerary'
      ),
    ],
    role: 'Full-stack product engineer for Flutter client architecture, Firebase auth, travel discovery, and Go backend integrations.',
    impact:
      'Keeps sensitive flight-search credentials on the server while giving the mobile app a focused trip-planning workflow.',
    status: 'Work in progress',
    featured: true,
  },
  {
    slug: 'praexi',
    title: 'Praexi',
    projectType: 'AI SaaS · Web platform',
    category: 'AI SaaS',
    platform: 'Web platform',
    subtitle: 'AI-powered social media and content operations',
    excerpt:
      'A content operations product for planning, creating, organizing, and publishing social media work from one workspace.',
    description:
      'Praexi is an AI-powered social media and content operations product. Its product direction centers on the work around content: planning, AI-assisted creation, publishing workflows, integrations, and analytics.',
    highlights: [
      'Product focus: AI-assisted social media planning and content operations.',
      'Product focus: publishing and calendar workflows that keep content work organized.',
      'Product focus: integrations and analytics around the content lifecycle.',
    ],
    tags: ['AI', 'Content operations', 'Web', 'Product systems'],
    links: [
      {
        type: 'website',
        label: 'Product website',
        href: 'https://praexi.com/',
      },
    ],
    gallery: [
      artwork(
        '/projects/praexi-artwork.webp',
        'Illustrative Praexi content operations artwork with connected planning and publishing elements'
      ),
    ],
    roleLabel: 'Product focus',
    role: 'AI-assisted social media planning, publishing, and content operations.',
    impact:
      'A web product direction centered on reducing the friction between content idea, production, and publishing.',
    status: 'Product website',
    featured: true,
  },
  {
    slug: 'newid-tech',
    title: 'Newid Tech',
    projectType: 'Technology company · Web',
    category: 'Technology company',
    platform: 'Company website',
    subtitle: 'Technology services across software, infrastructure, data, and mobile',
    excerpt:
      'A company website presenting Newid Tech’s software, hardware, data analysis, and mobile product capabilities.',
    description:
      'Newid Tech is the company context behind several shipped mobile products in this portfolio. Its public site presents services across websites, custom software, hardware needs, data analysis, and mobile applications.',
    highlights: [
      'Company website covering web development, custom software, hardware, data analysis, and mobile applications.',
      'Portfolio context for shipped Flutter products including Ridertify, inndance, With City Locals, YogiFace, Lingola Kids Stories, and ConcreteHub.',
      'The portfolio keeps the public company URL attached even when the website is temporarily difficult to capture.',
    ],
    tags: ['Web', 'Mobile', 'Software', 'Data'],
    links: [
      {
        type: 'website',
        label: 'Company website',
        href: 'https://newid.com.tr/',
      },
    ],
    gallery: [
      artwork(
        '/projects/newid-tech-artwork.webp',
        'Illustrative Newid Tech systems and product engineering artwork'
      ),
    ],
    roleLabel: 'Context',
    role: 'Flutter developer working across released mobile products and the integrations around them.',
    impact:
      'Connects the company story to the production mobile work represented by the portfolio.',
    featured: true,
  },
  {
    slug: 'concretehub',
    title: 'ConcreteHub',
    projectType: 'B2B platform · Flutter',
    category: 'B2B platform',
    platform: 'Flutter mobile product',
    subtitle: 'Field operations for concrete dispatch and delivery teams',
    excerpt:
      'A role-based app for pump and mixer drivers, built around assignments, route guidance, live location, and fast field reporting.',
    description:
      'ConcreteHub supports concrete delivery operations from dispatch to job-site completion. Field teams get secure access to shipment-aware tasks, map-based navigation, live progress updates, and issue reporting while active deliveries are underway.',
    highlights: [
      'Built role-specific workflows for pump and mixer operations, including driver login, active job views, and task-specific status actions.',
      'Integrated geolocation and route guidance so drivers can move from assignment details to navigation with minimal manual input.',
      'Designed delivery milestone flows for arrival, setup, pouring, completion, and operational issue escalation.',
      'Used Firebase, secure local storage, push notifications, and API-driven state management to keep field workflows responsive.',
    ],
    tags: ['Flutter', 'Firebase', 'Realtime', 'Maps', 'Logistics'],
    links: [],
    gallery: [
      artwork(
        '/projects/concretehub-artwork.webp',
        'Illustrative ConcreteHub logistics artwork showing material flow from dispatch to job site'
      ),
    ],
    role: 'Flutter product engineer covering mobile flows, field UX, Firebase integration, and operational state handling.',
    impact:
      'Gives drivers a focused workflow for assignments, navigation, milestones, and issue reporting.',
    award: 'Sabancı ARF second place',
    featured: true,
  },
  {
    slug: 'with-city-locals',
    title: 'With City Locals',
    projectType: 'Mobile product · Flutter',
    category: 'Travel product',
    platform: 'iOS + Android',
    subtitle: 'A travel community for travelers and local guides',
    excerpt:
      'A travel community app for discovering local guides, publishing trip requests, coordinating offers, chatting, and managing premium access.',
    description:
      'With City Locals helps travelers connect with local guides and coordinate the travel experience inside one mobile platform. It combines a social feed, trip creation, guide discovery, offers, private messaging, reviews, moderation, notifications, and premium subscriptions.',
    highlights: [
      'Built a social-first feed with posts, likes, comments, shares, media uploads, and curated local discovery.',
      'Added realtime messaging with chat rooms, online presence, message states, media sharing, and group chat support.',
      'Designed trip workflows for creating travel requests, browsing trips, managing my trips, and tracking offers from locals.',
      'Implemented detailed guide profiles with bios, languages, services, pricing, photo galleries, ratings, and reviews.',
      'Added onboarding, multilingual support, push notifications, moderation, and premium subscription flows.',
    ],
    tags: ['Flutter', 'Riverpod', 'Firebase', 'Realtime', 'Travel', 'RevenueCat'],
    links: [
      {
        type: 'app-store',
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/with-city-locals/id6753864905',
      },
      {
        type: 'google-play',
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.newIdTech.citylocals&hl=tr',
      },
    ],
    gallery: [
      storeScreenshot(
        '/projects/citylocals-store-1.webp',
        'With City Locals onboarding screen from the store listing'
      ),
      storeScreenshot(
        '/projects/citylocals-store-2.webp',
        'With City Locals travel and local guide screen from the store listing'
      ),
    ],
    role: 'Flutter engineer for social feed, trip planning, guide profiles, realtime chat, moderation, and premium flows.',
    impact:
      'Connected local discovery, guide coordination, trip offers, messaging, and monetization in a released travel app.',
    status: 'Released on iOS and Android',
  },
  {
    slug: 'inndance',
    title: 'inndance',
    projectType: 'Mobile product · Flutter',
    category: 'Mobile product',
    platform: 'iOS + Android',
    subtitle: 'A dance community for social discovery and festival participation',
    excerpt:
      'A social platform where dancers can discover people, share media, join festivals, chat, and manage event services in one place.',
    description:
      'inndance brings everyday dance community interaction and festival planning into one mobile experience. It combines onboarding, profiles, content creation, messaging, notifications, event discovery, and festival services.',
    highlights: [
      'Built social workflows for posts, stories, likes, comments, sharing, profile discovery, and community interaction.',
      'Added realtime communication features including direct chat, group messaging, friend requests, and notifications.',
      'Designed festival flows for classes, competitions, accommodations, transfers, seminars, and milongas.',
      'Included mobile-friendly media creation tools for uploading, editing, and publishing images and videos.',
    ],
    tags: ['Flutter', 'Firebase', 'Realtime', 'Social', 'Events'],
    links: [
      {
        type: 'app-store',
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/inndance/id6737911955',
      },
      {
        type: 'google-play',
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.inndance.inndance&hl=tr',
      },
    ],
    gallery: [
      storeScreenshot(
        '/projects/inndance-store-1.webp',
        'inndance store listing artwork showing the dance community product'
      ),
      storeScreenshot(
        '/projects/inndance-store-2.webp',
        'inndance festival and community screen from the store listing'
      ),
    ],
    role: 'Flutter engineer for social, messaging, media, festival, and notification flows.',
    impact:
      'Unified community discovery, content sharing, realtime chat, and festival services inside a single mobile app.',
    status: 'Released on iOS and Android',
  },
  {
    slug: 'chatface',
    title: 'ChatFace',
    projectType: 'Mobile product · Flutter + realtime AI',
    category: 'AI SaaS',
    platform: 'Flutter mobile product',
    subtitle: 'An AI companion product for chat, voice, and live sessions',
    excerpt:
      'An AI companion app with persona discovery, streaming chat, voice sessions, notifications, and premium access.',
    description:
      'ChatFace is built around AI-driven companionship and realtime communication. The product combines persona browsing, onboarding, messaging, voice calling, video-style interaction, push notifications, and subscriptions.',
    highlights: [
      'Built persona discovery with featured characters, filtering, detail pages, and a focused mobile home experience.',
      'Added AI chat with streaming assistant responses, message history, attachments, and listen-back TTS playback.',
      'Implemented realtime voice and video-style call flows with STT, session state, and call lifecycle management.',
      'Designed onboarding and profile flows for name, age, gender, language, permissions, and user preferences.',
      'Used Flutter, Riverpod, Firebase, Node.js, Express, WebSockets, OpenAI, OneSignal, and RevenueCat for realtime AI sessions.',
    ],
    tags: ['Flutter', 'Riverpod', 'Firebase', 'Node.js', 'AI', 'WebSockets'],
    links: [],
    gallery: [
      artwork(
        '/projects/chatface-artwork.webp',
        'Illustrative ChatFace artwork showing a calm connection between conversation and voice'
      ),
    ],
    role: 'Flutter and backend engineer for AI chat, realtime sessions, onboarding, subscriptions, and notifications.',
    impact:
      'Created a single product flow for persona discovery, streaming chat, voice interaction, and premium access.',
    status: 'Store review in progress',
  },
  {
    slug: 'lingola-kids-stories',
    title: 'Lingola Kids Stories',
    projectType: 'Mobile product · Flutter',
    category: 'Mobile product',
    platform: 'iOS + Android',
    subtitle: 'A multilingual reading and vocabulary platform for children',
    excerpt:
      'A reading app with story discovery, synchronized audio, vocabulary saving, progress tracking, notifications, and premium access.',
    description:
      "Lingola Kids Stories is an interactive children's reading and language learning app. It combines story browsing, audio-assisted reading, word-level highlighting, vocabulary tools, progress syncing, referrals, notifications, and premium unlocks.",
    highlights: [
      'Built a story-first home experience with featured content, categories, recommendations, continue-reading, and reading history.',
      'Connected the app to a REST backend for authentication, profiles, story catalog data, progress syncing, ratings, feedback, referrals, and notifications.',
      'Implemented guest login, Google sign-in, Apple sign-in, token refresh, and secure session storage.',
      'Added guided story playback with audio support and word-level highlighting for synchronized reading.',
      'Included vocabulary tools with translation, text-to-speech, saved words, and a shared library of popular terms.',
    ],
    tags: ['Flutter', 'Riverpod', 'Firebase', 'REST API', 'Audio', 'RevenueCat'],
    links: [
      {
        type: 'app-store',
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/lingola-stories-kids-english/id6759555040',
      },
      {
        type: 'google-play',
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.flywork.lingolastorieskidsapp&hl=tr',
      },
    ],
    gallery: [
      storeScreenshot(
        '/projects/lingola-store-1.webp',
        'Lingola Kids Stories store listing artwork'
      ),
      storeScreenshot(
        '/projects/lingola-store-2.webp',
        'Lingola Kids Stories reader and vocabulary screen from the store listing'
      ),
    ],
    role: 'Flutter engineer for reading, audio, vocabulary, authentication, notification, and subscription flows.',
    impact:
      'Turned reading, listening, vocabulary, and progress tracking into one child-focused learning experience.',
    status: 'Released on iOS and Android',
  },
  {
    slug: 'yogiface',
    title: 'YogiFace',
    projectType: 'Mobile product · Flutter',
    category: 'Mobile product',
    platform: 'iOS + Android',
    subtitle: 'A personalized facial wellness and exercise app',
    excerpt:
      'A wellness app with profile-based recommendations, reminders, multilingual exercises, uploads, and premium access.',
    description:
      'YogiFace helps users build personalized facial wellness routines based on their profile, concerns, and goals. It combines authentication, onboarding, exercise discovery, recommendations, favorites, activity tracking, reminders, media uploads, and subscriptions.',
    highlights: [
      'Built guest, Google, Apple, and Facebook authentication with JWT access and refresh tokens.',
      'Created step-based onboarding for profile data, concerns, face shape, objectives, and improvement areas.',
      'Implemented a rule-based recommendation engine that scores exercises against profile data.',
      'Added multilingual exercise content, favorites, activity tracking, profile photo uploads, CDN storage, and referral codes.',
      'Integrated OneSignal notifications with quiet hours, timezone-aware scheduling, and custom reminder intervals.',
    ],
    tags: ['Flutter', 'Riverpod', 'Express', 'MySQL', 'Firebase', 'RevenueCat'],
    links: [
      {
        type: 'app-store',
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/yogiface-face-yoga-exercises/id6758552090',
      },
      {
        type: 'google-play',
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.flywork.yogifaceapp&hl=tr',
      },
    ],
    gallery: [
      storeScreenshot(
        '/projects/yogiface-store-1.webp',
        'YogiFace face scan and analysis screen from the store listing'
      ),
      storeScreenshot(
        '/projects/yogiface-store-2.webp',
        'YogiFace personalized routine screen from the store listing'
      ),
    ],
    role: 'Flutter and backend engineer for onboarding, recommendations, reminders, subscriptions, and account flows.',
    impact:
      'Created a tailored daily-routine experience backed by user profile data, reminder logic, and premium management.',
    status: 'Released on iOS and Android',
  },
  {
    slug: 'mystique',
    title: 'Mystique',
    projectType: 'Web product · Next.js + AI',
    category: 'Web product',
    platform: 'Web product',
    subtitle: 'An AI-powered fortune-telling experience',
    excerpt:
      'An AI-led web experience for immersive readings, multilingual prompts, ritual-style flows, and privacy-aware interaction design.',
    description:
      'Mystique explores how AI can turn a lightweight entertainment product into a more personal and atmospheric experience. It combines guided reading flows, multilingual generation, visual polish, and privacy-aware prompt handling inside a focused web product.',
    highlights: [
      'Built an AI prompt flow that personalizes readings and adapts tone across supported languages.',
      'Designed the experience around calm interaction states, readable output, and a clear path from selection to result.',
      'Shaped the visual system with atmospheric motion, layered styling, and responsive web layouts.',
      'Kept sensitive prompt handling scoped to the live reading flow instead of exposing unnecessary persisted data.',
    ],
    tags: ['Next.js', 'AI', 'TypeScript', 'i18n'],
    links: [
      {
        type: 'website',
        label: 'Marketing site',
        href: 'https://mystique.app',
      },
      {
        type: 'github',
        label: 'GitHub',
        href: 'https://github.com/turkergurel/mystique',
      },
    ],
    gallery: [
      productArtwork(
        '/projects/mystique-home.svg',
        'Mystique home ritual selection artwork'
      ),
      productArtwork(
        '/projects/mystique-reading.svg',
        'Mystique AI reading interface artwork'
      ),
    ],
    role: 'Web product engineer for AI flow design, responsive UI, prompt experience, and frontend implementation.',
    impact:
      'Demonstrates AI product design, multilingual UX, and polished web interaction outside the Flutter app portfolio.',
  },
]

export const featuredProjects = [
  'ridertify',
  'excursionx',
  'praexi',
  'newid-tech',
  'concretehub',
]
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project))

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectSlugs() {
  return projects.map((project) => project.slug)
}
