import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://korae.com'
const siteName = 'Korae 韓國東大門買手網'
const defaultDescription = 'Korae 韓國東大門買手網 - 為您提供一站式零存貨批發‧完善網上銷售系統。從網絡瀏覽韓國東大門市場，提供韓國批發、日本時裝批發服務。'

export interface SEOProps {
  title: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  noindex?: boolean
}

export function generateMetadata({
  title,
  description = defaultDescription,
  keywords = [],
  image = `${siteUrl}/images/og-image.jpg`,
  url = siteUrl,
  type = 'website',
  noindex = false,
}: SEOProps): Metadata {
  const fullTitle = `${title} | ${siteName}`
  const defaultKeywords = [
    '韓國批發',
    '東大門批發',
    '日本時裝批發',
    '韓國時裝批發',
    '網店系統',
    '批發平台',
    '韓國東大門',
    '零存貨批發',
    'Korae',
    'OrangeBox',
  ]

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords].join(', '),
    authors: [{ name: 'Korae Team' }],
    creator: 'Korae',
    publisher: 'Korae',
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      type,
      locale: 'zh_TW',
      url,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@korae',
    },
    alternates: {
      canonical: url,
    },
    metadataBase: new URL(siteUrl),
  }
}

export function generateStructuredData({
  type,
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author,
}: {
  type: 'Organization' | 'WebSite' | 'Article' | 'Service' | 'BreadcrumbList'
  title: string
  description?: string
  url: string
  image?: string
  datePublished?: string
  dateModified?: string
  author?: {
    name: string
    url?: string
  }
}) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title,
    ...(description && { description }),
    ...(url && { url }),
    ...(image && { image }),
  }

  switch (type) {
    case 'Organization':
      return {
        ...baseData,
        '@type': 'Organization',
        name: 'Korae 韓國東大門買手網',
        url: siteUrl,
        logo: `${siteUrl}/images/logo/korae-logo.png`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+852-XXXX-XXXX',
          contactType: 'customer service',
          areaServed: 'HK',
          availableLanguage: ['zh-TW', 'zh-CN', 'en', 'ja'],
        },
        sameAs: [
          'https://www.facebook.com/orangeboxhk/',
          'https://www.instagram.com/orangebox.wholesale/',
        ],
      }

    case 'WebSite':
      return {
        ...baseData,
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      }

    case 'Service':
      return {
        ...baseData,
        '@type': 'Service',
        serviceType: '批發服務',
        description: description || 'Korae 提供專業的批發服務',
        provider: {
          '@type': 'Organization',
          name: 'Korae 韓國東大門買手網',
          url: siteUrl,
        },
        areaServed: {
          '@type': 'Country',
          name: 'Hong Kong',
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'HKD',
        },
      }

    case 'Article':
      return {
        ...baseData,
        '@type': 'Article',
        headline: title,
        ...(datePublished && { datePublished }),
        ...(dateModified && { dateModified }),
        ...(author && {
          author: {
            '@type': 'Person',
            name: author.name,
            ...(author.url && { url: author.url }),
          },
        }),
        publisher: {
          '@type': 'Organization',
          name: siteName,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/images/logo/korae-logo.png`,
          },
        },
      }

    default:
      return baseData
  }
}

