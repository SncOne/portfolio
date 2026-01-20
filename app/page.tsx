import Link from "next/link";

import { FadeIn } from "@/components/fade-in";
import { ArrowRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { Testimonials } from "@/components/testimonials";
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
    <div className="space-y-24">
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
              Flutter & Next.js Developer
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
              I design and build product experiences that feel effortless and ship fast.
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-[540px] text-lg leading-relaxed text-muted-foreground">
            I specialise in crafting polished mobile and web applications, leading
            end-to-end delivery from concept to production. I partner with
            founders and teams to ship reliable, scalable interfaces with
            buttery-smooth interactions.
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
            <span className="uppercase tracking-[0.3em]">Available for new projects</span>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
          </div>
        </FadeIn>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
}
