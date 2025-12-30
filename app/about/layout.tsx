import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://korae.com'

export const metadata: Metadata = genMeta({
  title: '韓國批發團隊簡介 - 關於我們',
  description: 'Korae 延續 OrangeBox 的卓越傳統，於 2026 年全新出發，致力提供更優質、更透明的價格及服務。了解我們的團隊、重組動機、核心優勢及業界榮譽。',
  keywords: ['韓國批發團隊', '關於我們', 'OrangeBox', '重組', '業界榮譽', '團隊簡介'],
  url: `${siteUrl}/about`,
})

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

