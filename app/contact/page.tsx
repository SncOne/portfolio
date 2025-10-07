import type { Metadata } from "next";
import Link from "next/link";

import { FadeIn } from "@/components/fade-in";

import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project or say hello to Türker Gürel.",
};

export default function ContactPage() {
  return (
    <section className="space-y-12">
      <FadeIn className="space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
          Contact
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s collaborate on something great.
        </h1>
        <p className="max-w-prose text-lg text-muted-foreground">
          Share a bit about your product, team, or idea. I usually respond
          within two working days.
        </p>
      </FadeIn>
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr),280px]">
        <ContactForm />
        <FadeIn
          delay={0.16}
          className="space-y-4 rounded-2xl border border-border bg-muted/30 p-6 text-sm text-muted-foreground"
        >
          <p className="font-medium text-foreground">Prefer direct contact?</p>
          <ul className="space-y-3">
            <li>
              <Link
                href="mailto:turkergurel19@gmail.com"
                className="hover:text-foreground"
              >
                turkergurel19@gmail.com
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/SncOne"
                className="hover:text-foreground"
              >
                github.com/SncOne
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/turker-gurel"
                className="hover:text-foreground"
              >
                linkedin.com/in/turker-gurel
              </Link>
            </li>
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
