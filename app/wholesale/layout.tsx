import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://korae.com'

export const metadata: Metadata = genMeta({
  title: '純批發服務 - 多平台數據下載',
  description: 'Korae 純批發服務提供多平台數據下載功能（CSV、Excel、JSON），支援 Shopify、WooCommerce、Shopline、Shopage 等平台。免費會員完全免費，付費會員可選擇月費 HKD 188 或年費 HKD 1,888。透明收費、無捆綁服務。',
  keywords: ['純批發', '數據下載', 'CSV', 'Excel', 'JSON', 'Shopify', 'WooCommerce', '免費會員', '付費會員'],
  url: `${siteUrl}/wholesale`,
  type: 'service',
})

