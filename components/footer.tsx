import Link from "next/link";

import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

const socials = [
  { label: "GitHub", href: "https://github.com/sncone", icon: GitHubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/turker-gurel/",
    icon: LinkedInIcon,
  },
  { label: "Email", href: "mailto:turkergurel19@gmail.com", icon: MailIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex max-w-prose flex-col gap-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Türker Gürel. All rights reserved.</p>
        <div className="flex items-center gap-5">
          {socials.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-2 hover:text-foreground"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden text-xs font-medium uppercase tracking-[0.18em] sm:block">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
