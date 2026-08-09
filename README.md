# Türker Gürel · Portfolio

Personal portfolio for Türker Gürel, a Flutter mobile developer and mobile product engineer. The site is built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Live site

The default canonical URL is [snconecodes.qzz.io](https://snconecodes.qzz.io). Set `NEXT_PUBLIC_SITE_URL` when deploying to another domain.

## What is included

- Mobile-first homepage with selected work, capabilities, and direct contact paths
- Project index with compact category filters and individual case-study routes
- Case studies with real store screenshots where available and clearly labelled illustrative artwork where source captures are unavailable
- About, Contact, Writing, sitemap, robots, Open Graph image, and JSON-LD metadata
- Dark/light theme, keyboard-friendly navigation, reduced-motion support, and security response headers
- Optional Nodemailer contact delivery with a honeypot and server-side validation

## Project structure

```text
├── app/
│   ├── about/              # About page
│   ├── blog/               # Writing page linking to the Medium profile
│   ├── contact/            # Contact page and server action
│   ├── projects/           # Filterable project index and case studies
│   ├── layout.tsx          # Root metadata, theme, navigation, and footer
│   ├── page.tsx            # Homepage
│   └── global.css          # Tailwind tokens and global styles
├── components/
│   ├── project-card.tsx    # Reusable project card
│   ├── project-media.tsx   # Artwork/store-screenshot presentation
│   ├── ui/                 # Shared card primitives
│   ├── fade-in.tsx         # Motion helpers
│   ├── icons.tsx           # Icon set
│   ├── navbar.tsx          # Responsive navigation
│   ├── footer.tsx          # Social/contact footer
│   └── theme-toggle.tsx    # Theme preference control
├── lib/
│   ├── projects.ts         # Project content, links, and media metadata
│   ├── site.ts             # Canonical URL and social/contact config
│   ├── structured-data.tsx # JSON-LD helpers
│   └── utils.ts            # Shared class-name utility
└── public/
    ├── avatar.png
    └── projects/           # Store screenshots and project artwork
```

## Getting started

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run typecheck
npm run lint
npm run build
npm run start
npm run smoke
```

Run `npm run smoke` while the local server is running to check the key HTML,
robots, and sitemap routes over HTTP. Browser-level responsive and interaction
checks are documented in `AUDIT.md`.

## Environment variables

The contact form intentionally reports that delivery is unavailable until SMTP is configured. Add these values to `.env.local` to enable delivery:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.example
CONTACT_EMAIL_TO=your@email.com
CONTACT_EMAIL_FROM=noreply@your-domain.example
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASSWORD=your-smtp-password
```

## Editing content

Projects live in `lib/projects.ts`. Each project can define its category, platform, role/context, links, status, highlights, and gallery media. Media is typed so the UI can distinguish product/store screenshots from generated project artwork.

The Writing route intentionally contains no invented article records. Add a real publishing integration only when there are published posts or a trusted content source to display.

## License

MIT © Türker Gürel
