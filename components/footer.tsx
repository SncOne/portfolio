import Link from "next/link";

import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

const socials = [
  { label: "GitHub", href: siteConfig.social.github, icon: GitHubIcon },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedIn,
    icon: LinkedInIcon,
  },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: MailIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex max-w-6xl flex-col gap-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-foreground">Türker Gürel</p>
          <p className="mt-1 text-xs">Flutter mobile developer · product engineer</p>
        </div>
        <div className="flex items-center gap-5">
          {socials.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
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
        <p className="text-xs md:text-right">© {new Date().getFullYear()} · All rights reserved.</p>
      </div>
    </footer>
  );
}
