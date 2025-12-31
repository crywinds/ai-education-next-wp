import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://korae.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl
  const currentDate = new Date().toISOString()

  const routes = [
    '',
    '/about',
    '/services',
    '/wholesale',
    '/contact',
    '/careers',
    '/awards',
    '/media',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }))
}



