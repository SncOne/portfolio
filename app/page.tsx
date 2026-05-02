import Link from "next/link";
import type { ReactNode } from "react";

import { FadeIn } from "@/components/fade-in";
import { ArrowRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { featuredProjects } from "@/lib/projects";
import { cn } from "@/lib/utils";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/SncOne",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/turker-gurel/",
    icon: LinkedInIcon,
  },
  {
    label: "Email",
    href: "mailto:turkergurel19@gmail.com",
    icon: MailIcon,
  },
];

const buttonBase =
  "inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background";

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="relative space-y-14">
        {/* Subtle gradient background accent */}
        <div className="pointer-events-none absolute -top-12 left-1/2 h-[500px] w-[800px] -translate-x-1/2 opacity-30 blur-3xl">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-transparent" />
        </div>

        <FadeIn className="relative space-y-8">
          {/* Eyebrow with subtle animation */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
              Flutter Mobile Product Engineer
            </p>
          </div>

          {/* Hero heading with gradient accent */}
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
              Türker Gürel
            </span>
            .{" "}
            <span className="text-muted-foreground">
              I build production mobile apps with realtime systems, maps, payments, and polished UX.
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I turn product ideas into shipped Flutter apps and supporting backends:
            social platforms, logistics tools, AI companions, travel assistants,
            learning products, location-heavy experiences, and subscription flows.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/projects"
              className={cn(
                buttonBase,
                "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 hover:bg-primary/90"
              )}
            >
              View projects
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonBase,
                "border border-border bg-background/50 backdrop-blur-sm hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground hover:border-accent"
              )}
            >
              Get in touch
            </Link>
            <Link
              href="/Resume.pdf"
              target="_blank"
              className={cn(
                buttonBase,
                "border border-border bg-background/50 backdrop-blur-sm hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground hover:border-accent"
              )}
            >
              Resume
            </Link>
          </div>
        </FadeIn>

        {/* Social links with improved styling */}
        <FadeIn
          delay={0.15}
          className="flex flex-wrap items-center gap-5"
        >
          {socials.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/50 backdrop-blur-sm transition-all group-hover:border-foreground/20 group-hover:bg-accent">
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.2em]">
                {label}
              </span>
            </Link>
          ))}
        </FadeIn>

        {/* Decorative element */}
        <FadeIn delay={0.25} className="pt-4">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            <span className="uppercase tracking-[0.3em]">Available for product teams and mobile roles</span>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
          </div>
        </FadeIn>
      </section>

      <FadeIn delay={0.12} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { value: "5", label: "released iOS + Android apps" },
          { value: "1", label: "Sabancı ARF award placement" },
          { value: "9", label: "mobile and web case studies" },
          { value: "Full-stack", label: "Flutter, Firebase, Node.js, Go" },
        ].map((item) => (
          <div key={item.label} className="rounded-lg border border-border bg-muted/25 p-4">
            <p className="text-2xl font-semibold tracking-tight text-foreground">{item.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </FadeIn>

      <section className="space-y-8">
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Featured Work</p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Apps built around real product workflows.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View all projects
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.slice(0, 6).map((project, index) => (
            <FadeIn
              key={project.slug}
              delay={0.18 + index * 0.04}
              className="rounded-lg border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <Link href={`/projects/${project.slug}`} className="block space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {project.status && <HomeBadge>{project.status}</HomeBadge>}
                    {project.award && <HomeBadge>{project.award}</HomeBadge>}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{project.impact}</p>
                <div className="flex items-center gap-2 text-sm font-medium">
                  Read case study
                  <ArrowRightIcon className="h-4 w-4" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <FadeIn className="space-y-3">
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Technical Depth</p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            The work behind the screens.
          </h2>
          <p className="max-w-3xl text-muted-foreground">
            The portfolio is not only UI work. Most projects include state
            architecture, authentication, realtime data, media, maps, background
            services, subscriptions, notifications, or backend integrations.
          </p>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Realtime Systems",
              detail:
                "Chat rooms, online presence, WebSocket sessions, streaming AI responses, live location, and notification state.",
            },
            {
              title: "Maps & Location",
              detail:
                "Route publishing, nearby discovery, driver navigation, background tracking, POI search, and map-based detail flows.",
            },
            {
              title: "Production Integrations",
              detail:
                "Firebase auth, secure storage, REST APIs, RevenueCat, OneSignal, token refresh, media upload, and store release flows.",
            },
          ].map((item, index) => (
            <FadeIn
              key={item.title}
              delay={0.08 + index * 0.04}
              className="rounded-lg border border-border bg-card p-5"
            >
              <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-lg border border-border bg-muted/20 p-6 md:grid-cols-[1fr,0.8fr] md:p-8">
        <FadeIn className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">For Hiring Teams</p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            I can own the mobile product layer and the integrations around it.
          </h2>
          <p className="text-muted-foreground">
            I am strongest on Flutter products that need more than screens:
            auth, realtime messaging, live location, media, maps, subscriptions,
            notifications, secure storage, and API-backed state.
          </p>
        </FadeIn>
        <FadeIn delay={0.08} className="space-y-4">
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              "Build and polish Flutter apps for iOS and Android",
              "Connect Firebase, REST APIs, WebSockets, and backend services",
              "Implement maps, realtime location, chat, media, and premium flows",
              "Prepare product flows for store review and production usage",
            ].map((item) => (
              <li key={item} className="rounded-lg border border-border bg-background p-3">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Link
              href="mailto:turkergurel19@gmail.com"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Email me
            </Link>
            <Link
              href="https://www.linkedin.com/in/turker-gurel/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-border px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              LinkedIn
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

function HomeBadge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-primary">
      {children}
    </span>
  )
}
