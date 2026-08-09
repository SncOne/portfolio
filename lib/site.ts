export const siteConfig = {
  name: 'Türker Gürel',
  role: 'Flutter Mobile Developer · Mobile Product Engineer',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://snconecodes.qzz.io',
  email: 'turkergurel19@gmail.com',
  social: {
    github: 'https://github.com/SncOne',
    linkedIn: 'https://www.linkedin.com/in/turker-gurel/',
    medium: 'https://medium.com/@turkergurel19',
  },
} as const

export function absoluteUrl(path = '') {
  return new URL(path, siteConfig.url).toString()
}
