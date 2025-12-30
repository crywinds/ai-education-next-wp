import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://korae.com'

export const metadata: Metadata = genMeta({
  title: '聯絡我們 - 預約諮詢',
  description: '聯絡 Korae 團隊，預約諮詢服務。我們提供專業的批發業務諮詢，協助您開展批發業務。歡迎填寫聯絡表單或直接與我們聯繫。',
  keywords: ['聯絡我們', '預約諮詢', '客戶服務', '業務諮詢', '聯絡表單'],
  url: `${siteUrl}/contact`,
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

