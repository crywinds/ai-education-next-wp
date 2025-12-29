'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Hero Background Image Placeholder */}
      <div className="absolute inset-0 opacity-10">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/images/hero/hero-background.jpg"
                alt="Korae 韓國批發平台"
                fill
                className="object-cover"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="hidden absolute inset-0 bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600 items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-4xl mb-4">🖼️</div>
                  <div className="text-slate-600 dark:text-slate-300 font-semibold">Hero 背景圖片</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">建議尺寸: 1920x1080</div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">參考: koraeweb.com 首頁背景圖</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 mb-4 sm:mb-6 md:mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="whitespace-nowrap">沒有硬性銷售・沒有捆綁服務・收費透明</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 text-slate-900 dark:text-white leading-tight px-2 sm:px-4">
            香港首個最透明
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-pink-500 to-cyan-600 bg-clip-text text-transparent">
              東大門時裝批發平台
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            支援多平台數據下載，輕鬆匯入 Shopline、Shopify 等平台，門市、網店得心應手
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4">
            <Link 
              href="/wholesale"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-center text-sm sm:text-base touch-manipulation"
            >
              免費註冊開始批發
            </Link>
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 active:bg-slate-100 dark:active:bg-slate-600 text-slate-900 dark:text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-slate-200 dark:border-slate-700 text-center text-sm sm:text-base touch-manipulation"
            >
              了解會員計劃
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-3xl mx-auto px-2 sm:px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">10+</div>
              <div className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400">年專業經驗</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">1000+</div>
              <div className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400">合作客戶</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">40+</div>
              <div className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400">企業支持</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-900 to-transparent"></div>
    </section>
  )
}








