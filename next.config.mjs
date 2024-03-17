import nextra from 'nextra'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com'
      }
    ]
  },
}

export default nextra({
  theme: 'nextra-theme-docs',
  themeConfig: 'theme.config.tsx'
})(nextConfig)
