import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

export const locales = ['zh-TW', 'zh-CN', 'en', 'ja'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'zh-TW'

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  }
})

