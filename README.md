# Türker Gürel - Portfolio

A refined, modern portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Features smooth animations with Framer Motion, dark mode support, and a contact form with email integration.

## 🌐 Live Site

[turkergurel.com](https://turkergurel.com)

## ✨ Features

- **Modern Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion with staggered and directional variants
- **Dark Mode**: System preference detection with manual toggle
- **Blog Ready**: Blog infrastructure with sample posts (MDX-ready)
- **SEO Optimized**: JSON-LD structured data, sitemap, robots.txt
- **Contact Form**: Nodemailer integration for email
- **Accessible**: Skip links, focus indicators, ARIA labels
- **Analytics**: Vercel Analytics & Speed Insights

## 📁 Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── blog/           # Blog listing & [slug] pages
│   ├── contact/        # Contact form with server action
│   ├── projects/       # Projects listing with filtering
│   │   └── [slug]/     # Project detail pages
│   ├── layout.tsx      # Root layout with theme script
│   ├── page.tsx        # Home page with testimonials
│   └── global.css      # Tailwind & custom utilities
├── components/
│   ├── ui/             # Button, Card components
│   ├── fade-in.tsx     # Animation components
│   ├── icons.tsx       # Consolidated SVG icons
│   ├── navbar.tsx      # Navigation with mobile menu
│   ├── footer.tsx      # Footer with social links
│   ├── testimonials.tsx
│   └── theme-toggle.tsx
├── lib/
│   ├── blog.ts         # Blog post data & helpers
│   ├── projects.ts     # Project data & helpers
│   ├── structured-data.tsx  # JSON-LD schemas
│   └── utils.ts        # cn() utility
└── public/
    ├── avatar.png
    └── projects/       # Project images
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## ⚙️ Environment Variables

Create a `.env.local` file for the contact form:

```env
# Email configuration
CONTACT_EMAIL_TO=your@email.com
CONTACT_EMAIL_FROM=noreply@yourdomain.com

# SMTP settings
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASSWORD=your-smtp-password
```

## 🎨 Customization

### Colors

Edit CSS custom properties in `app/global.css` for light and dark themes.

### Projects

Add/edit projects in `lib/projects.ts`. Each project includes:
- slug, title, subtitle, excerpt, description
- highlights (array of achievement paragraphs)
- tags (for filtering)
- links (App Store, Play Store, GitHub, website)
- gallery images

### Blog Posts

Add posts in `lib/blog.ts`. Ready for MDX integration when you add the `@next/mdx` package.

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `next` | React framework |
| `framer-motion` | Animations |
| `geist` | Typography |
| `nodemailer` | Email sending |
| `tailwindcss` | Styling |

## 📄 License

MIT © Türker Gürel
