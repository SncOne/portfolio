export type ProjectLinkType = 'google-play' | 'app-store' | 'github' | 'website'

export type ProjectLink = {
  type: ProjectLinkType
  label: string
  href?: string
  isPlaceholder?: boolean
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
  role?: string
  impact?: string
  status?: string
  award?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'concretehub',
    title: 'ConcreteHub',
    subtitle: 'Field operations app for concrete dispatch and delivery teams',
    excerpt:
      'A role-based Flutter app for pump and mixer drivers, built around assignments, route guidance, live location, and fast field reporting.',
    description:
      'ConcreteHub supports concrete delivery operations from dispatch to job-site completion. The app gives field teams secure access to shipment-aware tasks, map-based navigation, live progress updates, and issue reporting so dispatchers, drivers, and job sites can stay aligned during active deliveries.',
    highlights: [
      'Built role-specific workflows for pump and mixer operations, including driver login, active job views, and task-specific status actions.',
      'Integrated geolocation and route guidance so drivers can move from assignment details to navigation with minimal manual input.',
      'Designed delivery milestone flows for arrival, setup, pouring, completion, and operational issue escalation.',
      'Used Firebase, secure local storage, push notifications, and API-driven state management to keep field workflows responsive.',
      'Structured the product around practical dispatch needs: clear task ownership, fast updates, and reliable mobile usage in real-world conditions.',
    ],
    tags: ['Flutter', 'Firebase', 'Realtime', 'Maps', 'Logistics'],
    links: [
      { type: 'website', label: 'Private project', isPlaceholder: true },
      { type: 'app-store', label: 'Store link pending', isPlaceholder: true },
    ],
    gallery: [
      {
        src: '/projects/concretehub-dispatch.svg',
        alt: 'ConcreteHub assignment and dispatch placeholder screen',
      },
      {
        src: '/projects/concretehub-route.svg',
        alt: 'ConcreteHub route tracking placeholder screen',
      },
    ],
    role: 'Flutter product engineer covering mobile flows, field UX, Firebase integration, and operational state handling.',
    impact:
      'Reduced field friction by giving drivers a focused workflow for assignments, navigation, milestones, and issue reporting.',
    award: 'Sabancı ARF second place',
    featured: true,
  },
  {
    slug: 'inndance',
    title: 'inndance',
    subtitle: 'Dance community platform for social discovery and festival participation',
    excerpt:
      'A Flutter social platform where dancers can discover people, share media, join festivals, chat, and manage event services in one place.',
    description:
      'inndance brings everyday dance community interaction and festival planning into one mobile experience. It combines onboarding, profiles, content creation, messaging, notifications, event discovery, and festival services so dancers do not need separate tools for social activity and event participation.',
    highlights: [
      'Built social workflows for posts, stories, likes, comments, sharing, profile discovery, and community interaction.',
      'Added real-time communication features including direct chat, group messaging, friend requests, and notifications.',
      'Designed festival flows for browsing events, joining festivals, and managing classes, competitions, accommodations, transfers, seminars, and milongas.',
      'Included mobile-friendly media creation tools for uploading, editing, and publishing images and videos.',
      'Used Firebase, push notifications, secure storage, and API-driven state management across social and event workflows.',
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
      {
        src: '/projects/inndance-store-1.webp',
        alt: 'inndance App Store and Google Play screenshot',
      },
      {
        src: '/projects/inndance-store-2.webp',
        alt: 'inndance festival and community screenshot',
      },
    ],
    role: 'Flutter engineer for social, messaging, media, festival, and notification flows.',
    impact:
      'Unified community discovery, content sharing, real-time chat, and festival services inside a single mobile app.',
    status: 'Released on iOS and Android',
    featured: true,
  },
  {
    slug: 'ridertify',
    title: 'Ridertify',
    subtitle: 'Social riding platform for motorcycle riders',
    excerpt:
      'A Flutter riding network with route sharing, live location, rider discovery, messaging, map workflows, and community safety tools.',
    description:
      'Ridertify is a mobile platform for motorcycle riders to connect, publish routes, share live location, message other riders, and manage ride-related community activity. It supports both everyday social interaction and on-road utility through a single map-aware experience.',
    highlights: [
      'Built a social feed with posts, stories, likes, comments, shares, rider discovery, clubs, pages, and vehicle profiles.',
      'Added real-time messaging with chat rooms, online presence, friend requests, and direct profile interactions.',
      'Designed route workflows for creating, browsing, filtering, reviewing, and opening saved rides on map-based detail pages.',
      'Implemented live location sharing and nearby rider discovery using background tracking and map visualization.',
      'Included rider-focused analytics such as speed, altitude, lean angle, and duration to give rides more context.',
      'Used Flutter, Riverpod, Firebase, Auto Route, Google Navigation, and MapLibre across realtime and mapping-heavy flows.',
    ],
    tags: ['Flutter', 'Riverpod', 'Firebase', 'Realtime', 'Maps'],
    links: [
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
      {
        src: '/projects/ridertify-store-1.webp',
        alt: 'Ridertify Google Play screenshot',
      },
      {
        src: '/projects/ridertify-store-2.webp',
        alt: 'Ridertify route and community screenshot',
      },
    ],
    role: 'Flutter engineer for social, route, realtime location, messaging, and map-based product flows.',
    impact:
      'Combined rider community features with practical route planning, live discovery, and on-road context.',
    status: 'Released on iOS and Android',
    featured: true,
  },
  {
    slug: 'with-city-locals',
    title: 'With City Locals',
    subtitle: 'City-based travel and community platform for travelers and local guides',
    excerpt:
      'A Flutter travel community app for discovering local guides, publishing trip requests, coordinating offers, chatting, and managing premium access.',
    description:
      'With City Locals helps travelers connect with local guides and coordinate the full travel experience inside one mobile platform. It combines a social feed, trip creation, guide discovery, offers, private messaging, reviews, moderation, notifications, and premium subscriptions so community engagement and practical trip planning stay in one workflow.',
    highlights: [
      'Built a social-first feed with posts, likes, comments, shares, media uploads, and curated local discovery.',
      'Added real-time messaging with chat rooms, online presence, message states, media sharing, and group chat support.',
      'Designed trip workflows for creating travel requests, browsing all trips, managing my trips, and tracking offers from locals.',
      'Implemented detailed guide profiles with bios, languages, services, pricing, photo galleries, ratings, and reviews.',
      'Included trust and safety flows such as blocking, reporting, dispute guidance, help center resources, and blocked-user handling.',
      'Added onboarding, multilingual support, push notifications, connectivity handling, theme settings, and premium subscription flows.',
      'Used Flutter, Riverpod, Firebase, Auto Route, RevenueCat, Dio, and built-in image/video editing tools to keep the app responsive and scalable.',
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
      {
        src: '/projects/citylocals-store-1.webp',
        alt: 'With City Locals store screenshot',
      },
      {
        src: '/projects/citylocals-store-2.webp',
        alt: 'With City Locals guide and trip planning screenshot',
      },
    ],
    role: 'Flutter engineer for social feed, trip planning, guide profiles, realtime chat, moderation, and premium flows.',
    impact:
      'Connected local discovery, guide coordination, trip offers, messaging, and monetization in a released travel app.',
    status: 'Released on iOS and Android',
    featured: true,
  },
  {
    slug: 'chatface',
    title: 'ChatFace',
    subtitle: 'AI companion platform for chat, voice, and live sessions',
    excerpt:
      'A Flutter AI companion app with persona discovery, streaming chat, voice calls, video-style sessions, notifications, and premium access.',
    description:
      'ChatFace is built around AI-driven companionship and real-time communication. The product combines persona browsing, onboarding, messaging, voice calling, video-style interaction, push notifications, and subscriptions so users can move between text, audio, and live session formats without switching tools.',
    highlights: [
      'Built persona discovery with featured characters, filtering, detail pages, and a polished mobile home experience.',
      'Added AI chat with streaming assistant responses, message history, attachments, and listen-back TTS playback.',
      'Implemented real-time voice and video-style call flows with STT, session state, call lifecycle management, and language locking.',
      'Designed onboarding and profile flows for name, age, gender, language, permissions, and user preferences.',
      'Included multilingual support, push notifications, premium subscription handling, and account management.',
      'Used Flutter, Riverpod, Firebase, Node.js, Express, WebSockets, OpenAI, OneSignal, and RevenueCat for realtime AI sessions.',
    ],
    tags: ['Flutter', 'Riverpod', 'Firebase', 'Node.js', 'AI', 'WebSockets'],
    links: [
      { type: 'website', label: 'Private project', isPlaceholder: true },
      { type: 'app-store', label: 'Store review in progress', isPlaceholder: true },
    ],
    gallery: [
      {
        src: '/projects/chatface-home.svg',
        alt: 'ChatFace persona discovery placeholder screen',
      },
      {
        src: '/projects/chatface-call.svg',
        alt: 'ChatFace realtime call placeholder screen',
      },
    ],
    role: 'Flutter and backend engineer for AI chat, realtime sessions, onboarding, subscriptions, and notifications.',
    impact:
      'Created a single product flow for persona discovery, streaming chat, voice interaction, and premium access.',
    status: 'Store review in progress',
    featured: true,
  },
  {
    slug: 'lingola-kids-stories',
    title: 'Lingola Kids Stories',
    subtitle: "Multilingual children's reading and vocabulary platform",
    excerpt:
      'A Flutter reading app with story discovery, synchronized audio, vocabulary saving, progress tracking, notifications, and premium access.',
    description:
      "Lingola Kids Stories is an interactive children's reading and language learning app. It combines story browsing, audio-assisted reading, word-level highlighting, vocabulary tools, progress syncing, referrals, notifications, and premium unlocks into a structured mobile experience for young readers.",
    highlights: [
      'Built a story-first home experience with featured content, categories, recommendations, continue-reading, and reading history.',
      'Connected the app to a REST backend for authentication, profiles, story catalog data, progress syncing, ratings, feedback, referrals, and notifications.',
      'Implemented guest login, Google sign-in, Apple sign-in, token refresh, and secure session storage.',
      'Added guided story playback with backend-loaded sections, audio support, and word-level highlighting for synchronized reading.',
      'Included vocabulary tools with translation, text-to-speech, saved words, and a shared library of popular terms.',
      'Integrated OneSignal notification history, unread counts, read/delete actions, RevenueCat paywalls, and parental gating.',
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
      {
        src: '/projects/lingola-store-1.webp',
        alt: 'Lingola Kids Stories store screenshot',
      },
      {
        src: '/projects/lingola-store-2.webp',
        alt: 'Lingola Kids Stories reader and vocabulary screenshot',
      },
    ],
    role: 'Flutter engineer for reading, audio, vocabulary, authentication, notification, and subscription flows.',
    impact:
      'Turned reading, listening, vocabulary, and progress tracking into one child-focused learning experience.',
    status: 'Released on iOS and Android',
    featured: true,
  },
  {
    slug: 'excursionx',
    title: 'ExcursionX',
    subtitle: 'Smart travel assistant for discovery, planning, and flight search',
    excerpt:
      'A work-in-progress Flutter travel app with destination discovery, trip planning, wallet tools, Firebase auth, and a Go flight-search backend.',
    description:
      'ExcursionX helps users plan trips from discovery to booking preparation. The Flutter client supports onboarding, authentication, destination exploration, trip management, wallet tools, notifications, and profile settings, while the Go backend verifies Firebase users and securely proxies Travelpayouts flight searches.',
    highlights: [
      'Built a tab-based dashboard for Home, Explore, Trips, Wallet, and Profile to keep travel actions easy to navigate.',
      'Implemented Firebase-backed authentication with email/password, Google sign-in, and Apple sign-in support.',
      'Added destination discovery with location-aware search, POI browsing, category filtering, favorites, and place detail navigation.',
      'Designed trip planning entry points with supporting travel utilities like currency conversion, packing lists, and document management.',
      'Included multilingual support, analytics, crash reporting, notifications, secure token handling, and offline-friendly local storage patterns.',
      'Developed a Go backend with Fiber, GORM, and PostgreSQL/Supabase to verify Firebase ID tokens and proxy Travelpayouts securely.',
    ],
    tags: ['Flutter', 'Riverpod', 'Go', 'Firebase', 'Maps', 'PostgreSQL'],
    links: [
      { type: 'github', label: 'Repository private', isPlaceholder: true },
      {
        type: 'website',
        label: 'Landing Page',
        href: 'https://excursionx.app/',
      },
    ],
    gallery: [
      {
        src: '/projects/excursionx-explore.svg',
        alt: 'ExcursionX destination discovery placeholder screen',
      },
      {
        src: '/projects/excursionx-trips.svg',
        alt: 'ExcursionX trip planning placeholder screen',
      },
    ],
    role: 'Full-stack product engineer for Flutter client architecture, Firebase auth, travel discovery, and Go backend integrations.',
    impact:
      'Keeps sensitive flight-search credentials on the server while giving the mobile app a polished trip-planning workflow.',
    status: 'Work in progress',
    featured: true,
  },
  {
    slug: 'yogiface',
    title: 'YogiFace',
    subtitle: 'Personalized facial wellness and exercise app',
    excerpt:
      'A Flutter wellness app with guest/social auth, profile-based recommendations, reminders, multilingual exercises, CDN uploads, and premium access.',
    description:
      'YogiFace helps users build personalized facial wellness routines based on their profile, concerns, and goals. The product combines authentication, onboarding, exercise discovery, recommendations, favorites, activity tracking, reminders, referrals, media uploads, and subscriptions into a guided mobile experience.',
    highlights: [
      'Built guest, Google, Apple, and Facebook authentication with JWT access and refresh tokens.',
      'Created step-based onboarding for age, gender, weight, height, skin type, concerns, face shape, objectives, and improvement areas.',
      'Implemented a rule-based recommendation engine that scores exercises against profile data and surfaces relevant routines first.',
      'Added multilingual exercise content, favorites, activity tracking, profile photo uploads, CDN storage, and referral codes.',
      'Integrated OneSignal notifications with quiet hours, timezone-aware scheduling, and custom reminder intervals.',
      'Supported premium access with RevenueCat webhooks across a Node.js/Express and MySQL backend.',
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
      {
        src: '/projects/yogiface-store-1.webp',
        alt: 'YogiFace store screenshot',
      },
      {
        src: '/projects/yogiface-store-2.webp',
        alt: 'YogiFace routine and progress screenshot',
      },
    ],
    role: 'Flutter and backend engineer for onboarding, recommendations, reminders, subscriptions, and account flows.',
    impact:
      'Created a tailored daily-routine experience backed by user profile data, reminder logic, and premium management.',
    status: 'Released on iOS and Android',
    featured: true,
  },
  {
    slug: 'mystique',
    title: 'Mystique',
    subtitle: 'AI-powered fortune telling experience',
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
    role: 'Web product engineer for AI flow design, responsive UI, prompt experience, and frontend implementation.',
    impact:
      'Demonstrates AI product design, multilingual UX, and polished web interaction outside the Flutter app portfolio.',
  },
]

const featuredProjectOrder = [
  'ridertify',
  'concretehub',
  'with-city-locals',
  'lingola-kids-stories',
  'yogiface',
  'chatface',
]

export const featuredProjects = featuredProjectOrder
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project))

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectSlugs() {
  return projects.map((project) => project.slug)
}
