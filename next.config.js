/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['@vercel/analytics', '@vercel/speed-insights'],
  },
}

module.exports = nextConfig
