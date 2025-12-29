'use client'

import { useEffect } from 'react'
import { useLocale } from 'next-intl'

export default function LocaleHtmlUpdater() {
  const locale = useLocale()

  useEffect(() => {
    // Update html lang attribute based on current locale
    document.documentElement.lang = locale
  }, [locale])

  return null
}

