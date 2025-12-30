import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SnowEffect from '@/components/SnowEffect'
import { generateMetadata as genMeta } from '@/lib/seo'
// 暫時禁用 LocaleHtmlUpdater
// import LocaleHtmlUpdater from '@/components/LocaleHtmlUpdater'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = genMeta({
  title: '批發上遊、讓您從網絡瀏覽 日本、韓國批發市場',
  description: 'Korae 韓國東大門買手網 - 為您提供一站式零存貨批發‧完善網上銷售系統。從網絡瀏覽韓國東大門市場，提供韓國批發、日本時裝批發服務。透明收費、無捆綁服務、多平台數據下載。',
  keywords: ['批發上遊', '網絡批發', '零存貨批發', '透明收費'],
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://korae.com',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" data-theme="korae" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden max-w-full`}>
        <SnowEffect />
        <Header />
        <main className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 overflow-x-hidden max-w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
