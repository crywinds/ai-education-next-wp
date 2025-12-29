// 暫時禁用 next-intl 以恢復網站功能
// import { NextIntlClientProvider } from 'next-intl'
// import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n'
// Header 和 Footer 已經在根 layout 中，這裡不需要重複
// import Header from '@/components/Header'
// import Footer from '@/components/Footer'
// import SnowEffect from '@/components/SnowEffect'
// import LocaleHtmlUpdater from '@/components/LocaleHtmlUpdater'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound()
  }

  // 暫時不使用 next-intl，直接返回內容
  // const messages = await getMessages()

  // 只返回 children，Header 和 Footer 已經在根 layout 中
  return (
    <>
      {/* <NextIntlClientProvider messages={messages}> */}
      {/* <LocaleHtmlUpdater /> */}
      {children}
      {/* </NextIntlClientProvider> */}
    </>
  )
}

