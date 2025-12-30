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
  // 優化 webpack 構建，確保 vendor chunks 正確生成
  webpack: (config, { isServer }) => {
    // 確保 framer-motion 正確打包
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },
}

module.exports = nextConfig
// module.exports = withNextIntl(nextConfig) // 暫時禁用








