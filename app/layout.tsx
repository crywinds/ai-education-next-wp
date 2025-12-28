import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  title: 'AI 教育學院 - 學習 AI 創作的專業平台',
  description: '探索 AI 創作、學習最新 AI 技術，參加專業 AI 課程，開啟您的 AI 創作之旅',
  keywords: 'AI 教育, AI 課程, AI 創作, 人工智慧, 機器學習, ChatGPT, Midjourney',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}








