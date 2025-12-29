// 暫時禁用 next-intl 以恢復網站功能
// const createNextIntlPlugin = require('next-intl/plugin')
// const withNextIntl = createNextIntlPlugin('./i18n.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
// module.exports = withNextIntl(nextConfig) // 暫時禁用








