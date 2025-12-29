'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Locale = 'zh-TW' | 'zh-CN' | 'en' | 'ja'

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string, params?: Record<string, string | number>) => string
  messages: Record<string, any>
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

const LOCALE_STORAGE_KEY = 'korae-locale'

// 簡化的後備翻譯（確保即使文件加載失敗也能顯示）
const fallbackTranslations: Record<string, string> = {
  'hero.title': '日韓時裝批發平台',
  'hero.badge': '透明收費・無捆綁服務・多平台數據下載',
  'hero.subtitle': '為批發客戶提供高效的日韓時裝商品瀏覽、訂購及數據管理工具',
  'hero.subtitle2': '支援多平台數據下載（CSV、Excel、JSON），輕鬆匯入 Shopify、WooCommerce 等平台',
  'hero.cta1': '免費註冊開始批發',
  'hero.cta2': '了解會員計劃',
  'hero.stats.years': '年專業經驗',
  'hero.stats.clients': '合作客戶',
  'hero.stats.enterprises': '企業支持',
  'header.marquee.item1': '✨ 100% AI 學費回贈計劃',
  'header.marquee.item2': '🎯 超過 50,000人及 40+個企業支持',
  'header.marquee.item3': '🚀 香港首個一站式韓國批發平台',
  'header.marquee.item4': '💎 成交費、交易費全免',
  'header.marquee.item5': '⭐ 業界信譽保證',
  'header.nav.news': '最新消息',
  'header.nav.products': '批發商品列表',
  'header.nav.consultation': '預約諮詢',
  'header.nav.about': '韓國批發團隊簡介',
  'header.nav.services': '批發+網店服務',
  'header.nav.wholesale': '純批發服務',
  'header.nav.careers': '人才招募',
  'header.nav.awards': '業界獎項',
  'header.nav.media': '媒體影片',
  'footer.description': '我們團隊致力讓您從網絡遊覽韓國東大門時裝批發市場，協助您輕鬆一站式打造你個人專屬的完整網店。',
  'footer.navigation': '網站導覽',
  'footer.services': '精選服務',
  'footer.aboutUs': '關於我們',
  'footer.contactUs': '聯絡我們',
  'footer.pricing': '服務費用',
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('zh-TW')
  const [mounted, setMounted] = useState(false)
  const [messages, setMessages] = useState<Record<string, any>>({})

  // 從 localStorage 讀取保存的語言設置
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale
      const initialLocale = (savedLocale && ['zh-TW', 'zh-CN', 'en', 'ja'].includes(savedLocale)) 
        ? savedLocale 
        : 'zh-TW'
      
      setLocaleState(initialLocale)
      setMounted(true)
      
      // 嘗試加載翻譯文件，但不阻塞渲染
      import(`@/messages/${initialLocale}.json`)
        .then((module) => {
          setMessages(module.default || module)
        })
        .catch((error) => {
          console.warn('Failed to load translation file, using fallback:', error)
          // 使用空對象，t 函數會使用後備翻譯
        })
    } else {
      // 服務器端立即設置為已掛載
      setMounted(true)
    }
  }, [])

  // 更新語言並保存到 localStorage
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
      document.documentElement.lang = newLocale
      
      // 嘗試加載新語言的翻譯文件
      import(`@/messages/${newLocale}.json`)
        .then((module) => {
          setMessages(module.default || module)
        })
        .catch((error) => {
          console.warn('Failed to load translation file:', error)
        })
    }
  }

  // 翻譯函數：支持嵌套鍵（如 "hero.title"）
  const t = (key: string, params?: Record<string, string | number>): string => {
    // 先嘗試從已加載的消息中獲取
    if (messages && Object.keys(messages).length > 0) {
      const keys = key.split('.')
      let value: any = messages
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k]
        } else {
          break // 如果找不到，跳出循環使用後備
        }
      }
      
      if (typeof value === 'string') {
        let translation = value
        // 替換參數
        if (params) {
          Object.entries(params).forEach(([paramKey, paramValue]) => {
            translation = translation.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(paramValue))
          })
        }
        return translation
      }
    }
    
    // 如果消息未加載或找不到，使用後備翻譯
    return fallbackTranslations[key] || key
  }

  // 更新 HTML lang 屬性
  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      document.documentElement.lang = locale
    }
  }, [locale, mounted])

  // 始終提供 Context
  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, messages }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
}

