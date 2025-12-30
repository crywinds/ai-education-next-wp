import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://korae.com'

export const metadata: Metadata = genMeta({
  title: '網店 + 批發服務 - 可選服務方案',
  description: 'Korae 提供可選的網店 + 批發服務，包括完整網店系統、每週更新過千款批發貨源、專業網店設計、品質檢查服務、物流配送支援。基礎方案 $3,000/年，標準方案 $8,000/年，專業方案歡迎企業查詢。',
  keywords: ['網店服務', '批發服務', '網店系統', '服務方案', '網店設計', '物流配送'],
  url: `${siteUrl}/services`,
  type: 'website',
})

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

