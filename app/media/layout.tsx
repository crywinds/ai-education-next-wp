import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://korae.com'

export const metadata: Metadata = genMeta({
  title: '媒體影片 - Korae 相關報導',
  description: '觀看 Korae 相關的媒體影片，包括批發服務介紹、東大門市場介紹、客戶案例分享、網站系統演示、品質檢查流程、團隊介紹等。了解我們的服務與團隊。',
  keywords: ['媒體影片', '影片', '報導', '客戶案例', '服務介紹', '團隊介紹'],
  url: `${siteUrl}/media`,
})

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

