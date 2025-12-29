'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { locales, type Locale } from '@/i18n'

const languageNames: Record<Locale, string> = {
  'zh-TW': '繁體中文',
  'zh-CN': '简体中文',
  'en': 'English',
  'ja': '日本語',
}

const languageFlags: Record<Locale, string> = {
  'zh-TW': '🇹🇼',
  'zh-CN': '🇨🇳',
  'en': '🇬🇧',
  'ja': '🇯🇵',
}

export default function LanguageToggle() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLocale, setCurrentLocale] = useState<Locale>('zh-TW')
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    // 從 URL 路徑獲取當前語言
    const pathSegments = pathname.split('/')
    const localeFromPath = pathSegments[1] as Locale
    if (locales.includes(localeFromPath)) {
      setCurrentLocale(localeFromPath)
    } else {
      setCurrentLocale('zh-TW')
    }
  }, [pathname])

  const switchLanguage = (locale: Locale) => {
    setIsOpen(false)
    
    // 獲取當前路徑（移除現有語言前綴）
    const pathSegments = pathname.split('/').filter(Boolean)
    const firstSegment = pathSegments[0]
    
    // 如果第一個段是語言代碼，移除它
    if (locales.includes(firstSegment as Locale)) {
      pathSegments.shift()
    }
    
    // 構建新路徑，如果沒有其他路徑段，就只返回語言前綴
    const newPath = pathSegments.length > 0 
      ? `/${locale}/${pathSegments.join('/')}`
      : `/${locale}`
    
    router.push(newPath)
    router.refresh()
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium text-slate-700 dark:text-slate-300"
        aria-label="切換語言"
      >
        <span className="text-lg">{languageFlags[currentLocale]}</span>
        <span className="hidden sm:inline">{languageNames[currentLocale]}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full right-0 mt-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-50 min-w-[160px] overflow-hidden"
            >
              {locales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => switchLanguage(locale)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${
                    currentLocale === locale
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className="text-xl">{languageFlags[locale]}</span>
                  <span className="font-medium">{languageNames[locale]}</span>
                  {currentLocale === locale && (
                    <svg
                      className="w-4 h-4 ml-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

