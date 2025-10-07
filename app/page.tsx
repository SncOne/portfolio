import Link from "next/link";

import { FadeIn } from "@/components/fade-in";
import { cn } from "@/lib/utils";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/SncOne",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/turker-gurel/",
  },
  {
    label: "Email",
    href: "mailto:turkergurel19@gmail.com",
  },
];

const buttonBase =
  "inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-medium transition-transform transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background";

export default function HomePage() {
  return (
    <section className="space-y-12">
      <FadeIn className="space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
          Flutter & Next.js Developer
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Hi, I&apos;m Türker Gürel. I design and build product experiences that
          feel effortless and ship fast.
        </h1>
        <p className="text-lg text-muted-foreground">
          I specialise in crafting polished mobile and web applications, leading
          end-to-end delivery from concept to production. I partner with
          founders and teams to ship reliable, scalable interfaces with
          buttery-smooth interactions.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/projects"
            className={cn(
              buttonBase,
              "bg-primary text-primary-foreground shadow-subtle shadow-primary/20 hover:-translate-y-0.5 hover:bg-primary/90"
            )}
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonBase,
              "border border-border bg-transparent hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
            )}
          >
            Get in touch
          </Link>
        </div>
      </FadeIn>
      <FadeIn
        delay={0.1}
        className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
      >
        {socials.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="group inline-flex items-center gap-2"
          >
            <span className="h-[2px] w-6 bg-muted transition-all group-hover:w-10 group-hover:bg-foreground" />
            <span className="uppercase tracking-[0.28em] text-xs text-foreground/70 group-hover:text-foreground">
              {label}
            </span>
          </Link>
        ))}
      </FadeIn>
    </section>
  );
}
