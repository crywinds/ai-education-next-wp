import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import PartnersSection from '@/components/PartnersSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import StatsSection from '@/components/StatsSection'
import BrandsMarquee from '@/components/BrandsMarquee'
import NewsletterSection from '@/components/NewsletterSection'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateStructuredData } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = genMeta({
  title: '批發上遊、讓您從網絡瀏覽 日本、韓國批發市場',
  description: 'Korae 韓國東大門買手網 - 為您提供一站式零存貨批發‧完善網上銷售系統。從網絡瀏覽韓國東大門市場，提供韓國批發、日本時裝批發服務。透明收費、無捆綁服務、多平台數據下載（CSV、Excel、JSON），輕鬆匯入 Shopify、WooCommerce、Shopline、Shopage 等平台。',
  keywords: ['批發上遊', '網絡批發', '零存貨批發', '透明收費', '多平台數據下載'],
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://korae.com',
})

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://korae.com'
  
  const organizationData = generateStructuredData({
    type: 'Organization',
    title: 'Korae 韓國東大門買手網',
    description: '為您提供一站式零存貨批發‧完善網上銷售系統',
    url: siteUrl,
  })

  const websiteData = generateStructuredData({
    type: 'WebSite',
    title: 'Korae 韓國東大門買手網',
    description: '從網絡瀏覽韓國東大門市場，提供韓國批發、日本時裝批發服務',
    url: siteUrl,
  })

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      
      <Hero />
      <NewsletterSection />
      <AboutSection />
      <ServicesSection />
      <PartnersSection />
      <TestimonialsSection />
      <FAQSection />
      <StatsSection />
      <BrandsMarquee />
      <NewsletterSection />
    </>
  )
}

