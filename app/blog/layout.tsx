import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title: '最新消息 - 韓國批發資訊',
  description: '了解韓國批發、時裝趨勢及網店經營的最新資訊。Korae 為您提供最新的批發市場動態、時尚趨勢和電商經營技巧。',
  keywords: ['最新消息', '韓國批發', '時裝趨勢', '網店經營', '批發資訊', '電商技巧'],
  url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://korae.com'}/blog`,
})

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

