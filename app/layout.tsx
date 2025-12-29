import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SnowEffect from '@/components/SnowEffect'
// 暫時禁用 LocaleHtmlUpdater
// import LocaleHtmlUpdater from '@/components/LocaleHtmlUpdater'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  title: '批發上遊、讓您從網絡瀏覽 日本、韓國批發市場 - Korae 韓國東大門買手網',
  description: 'Korae 韓國東大門買手網 - 為您提供一站式零存貨批發‧完善網上銷售系統。從網絡瀏覽韓國東大門市場，提供韓國批發、日本時裝批發服務。',
  keywords: '韓國批發, 東大門批發, 日本時裝批發, 韓國時裝批發, 網店系統, 批發平台, 韓國東大門, 零存貨批發',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" data-theme="korae" suppressHydrationWarning>
      <body className={inter.className}>
        <SnowEffect />
        <Header />
        <main className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
