import nextra from 'nextra'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

export default nextra({
  theme: 'nextra-theme-docs',
  themeConfig: 'theme.config.tsx'
})(nextConfig)
