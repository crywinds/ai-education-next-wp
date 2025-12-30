import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://korae.com'

export const metadata: Metadata = genMeta({
  title: '人才招募 - 加入 Korae 團隊',
  description: 'Korae 正在招募優秀人才加入我們的團隊。我們提供採購專員、客戶服務專員、品質檢查專員、開發工程師等職位。歡迎有經驗的專業人士加入我們，共同推動批發數碼化發展。',
  keywords: ['人才招募', '招聘', '職位空缺', '工作機會', '加入團隊', '採購專員', '客戶服務'],
  url: `${siteUrl}/careers`,
})

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

