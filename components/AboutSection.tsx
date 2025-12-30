'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Icon from '@/components/Icon'

export default function AboutSection() {
  const teamImages = [
    { src: '/images/about/team-member-1.jpg', alt: 'Korae 團隊活動' },
    { src: '/images/about/team-member-2.jpg', alt: 'Korae 團隊會議' },
    { src: '/images/about/team-member-3.jpg', alt: 'Korae 團隊工作' },
  ]

  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-white dark:bg-slate-900 overflow-hidden">
      {/* Background Brand Text - 淡化的 Korae 文字 */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-5 dark:opacity-10 pointer-events-none select-none">
        <div className="text-[200px] sm:text-[300px] md:text-[400px] lg:text-[500px] font-black text-slate-900 dark:text-white leading-none whitespace-nowrap">
          Korae
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Content - 左右分欄佈局 */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - 文字內容 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Header - 藍色圖標 + 關於我們 */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base">關於我們</span>
            </div>

            {/* Main Headings */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              由香港出發
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                推動批發數碼化落地應用
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              從傳統批發到數碼化平台，從單一服務到靈活選擇，每一次的技術轉變都會帶來新的機遇，重新為整個市場洗牌，而您正站在這個變革的前沿。我們希望推廣香港批發數碼化的普及和創新，並提升批發客戶的競爭力，為您帶來新的機遇。
            </p>

            {/* CTA Button */}
            <Link
              href="/about"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-sm sm:text-base touch-manipulation"
            >
              了解更多
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Right Side - 三張重疊傾斜的照片拼貼 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] sm:h-[500px] md:h-[600px]"
          >
            {/* 第一張照片 - 左上，稍微傾斜 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute top-0 left-0 w-[60%] sm:w-[55%] h-[45%] sm:h-[50%] rounded-2xl overflow-hidden shadow-xl z-10"
            >
              <div className="relative w-full h-full bg-slate-200 dark:bg-slate-700">
                <Image
                  src={teamImages[0].src}
                  alt={teamImages[0].alt}
                  fill
                  className="object-cover"
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const placeholder = target.parentElement?.querySelector('.image-placeholder') as HTMLElement
                    if (placeholder) placeholder.style.display = 'flex'
                  }}
                />
                <div className="image-placeholder hidden absolute inset-0 items-center justify-center bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600">
                  <div className="text-center p-4">
                    <div className="text-3xl mb-2">📸</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">團隊照片 1</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 第二張照片 - 中間右側，稍微傾斜 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute top-[25%] sm:top-[20%] right-0 w-[55%] sm:w-[50%] h-[50%] sm:h-[55%] rounded-2xl overflow-hidden shadow-xl z-20"
            >
              <div className="relative w-full h-full bg-slate-200 dark:bg-slate-700">
                <Image
                  src={teamImages[1].src}
                  alt={teamImages[1].alt}
                  fill
                  className="object-cover"
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const placeholder = target.parentElement?.querySelector('.image-placeholder') as HTMLElement
                    if (placeholder) placeholder.style.display = 'flex'
                  }}
                />
                <div className="image-placeholder hidden absolute inset-0 items-center justify-center bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600">
                  <div className="text-center p-4">
                    <div className="text-3xl mb-2">📸</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">團隊照片 2</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 第三張照片 - 左下，稍微傾斜 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute bottom-0 left-[10%] sm:left-[5%] w-[50%] sm:w-[45%] h-[40%] sm:h-[45%] rounded-2xl overflow-hidden shadow-xl z-30"
            >
              <div className="relative w-full h-full bg-slate-200 dark:bg-slate-700">
                <Image
                  src={teamImages[2].src}
                  alt={teamImages[2].alt}
                  fill
                  className="object-cover"
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const placeholder = target.parentElement?.querySelector('.image-placeholder') as HTMLElement
                    if (placeholder) placeholder.style.display = 'flex'
                  }}
                />
                <div className="image-placeholder hidden absolute inset-0 items-center justify-center bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600">
                  <div className="text-center p-4">
                    <div className="text-3xl mb-2">📸</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">團隊照片 3</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Content - 保留原有的重要資訊，但簡化顯示 */}
        <div className="mt-16 md:mt-24 max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-slate-700 dark:text-slate-300 space-y-5 md:space-y-6">
            <p className="text-base md:text-lg leading-relaxed">
              Korae 延續 OrangeBox 的卓越傳統，於 2026 年全新出發，致力提供更優質、更透明的價格及服務，涵蓋亞洲地區客戶需求。
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-5 md:p-6 rounded-r-lg">
              <p className="font-semibold text-blue-900 dark:text-blue-300 mb-3">重組動機與優勢</p>
              <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base mb-3">
                為回應市場需求，我們決定重組業務，建立獨立品牌 Korae。重點改善包括：
              </p>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span><strong>收費透明</strong>：採用按使用付費或單項服務模式，無隱藏捆綁費用</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span><strong>數據靈活性</strong>：支援多平台數據導出（CSV、Excel、JSON），讓客戶自由選擇銷售渠道</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span><strong>無捆綁服務</strong>：客戶可自由選擇所需服務，無需強制綁定網店系統或物流服務</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-5 md:p-6 rounded-r-lg">
              <p className="font-semibold text-blue-900 dark:text-blue-300 mb-2">榮譽肯定</p>
              <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base">
                Korae 前身 OrangeBox 榮獲新城電台及香港電腦商會合辦之「香港傑出數碼品牌大獎」——傑出網上批發平台（創辦人：麥晧威先生）。
              </p>
            </div>
            <blockquote className="border-l-4 border-slate-300 dark:border-slate-600 pl-4 md:pl-6 italic text-slate-600 dark:text-slate-400 text-base md:text-lg">
              「在這個數碼新世代，效率至關重要。Korae 作為網上批發平台的市場領導者，一直致力為不同規模的商店提供合適且優質的商品，透過創新並緊貼市場趨勢的服務模式，提升客戶的競爭優勢。」
              <footer className="mt-2 text-sm md:text-base not-italic text-slate-500 dark:text-slate-400">— 新城電台評價</footer>
            </blockquote>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-12 md:mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-blue-100 dark:border-blue-800">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mb-4 overflow-hidden relative">
              <Image
                src="/images/awards/metro-radio-award.png"
                alt="新城電台 傑出批發平台"
                width={64}
                height={64}
                className="object-contain w-full h-full"
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="hidden absolute inset-0 bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600 items-center justify-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 text-center px-2">獎項圖片<br/>200x200<br/>參考: koraeweb.com 獎項圖片</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">新城電台 傑出批發平台</h3>
            <p className="text-slate-600 dark:text-slate-400">業界認可的數碼品牌</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-white dark:from-amber-900/20 dark:to-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-amber-100 dark:border-amber-800">
            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center mb-4 overflow-hidden relative">
              <Image
                src="/images/awards/award-brand.png"
                alt="得獎品牌"
                width={64}
                height={64}
                className="object-contain w-full h-full"
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="hidden absolute inset-0 bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600 items-center justify-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 text-center px-2">獎項圖片<br/>200x200<br/>參考: koraeweb.com 獎項圖片</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">得獎品牌</h3>
            <p className="text-slate-600 dark:text-slate-400">備受肯定的優秀品牌</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-green-100 dark:border-green-800">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center mb-4 overflow-hidden relative">
              <Image
                src="/images/awards/outstanding-platform.png"
                alt="傑出網上批發平台"
                width={64}
                height={64}
                className="object-contain w-full h-full"
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="hidden absolute inset-0 bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600 items-center justify-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 text-center px-2">獎項圖片<br/>200x200<br/>參考: koraeweb.com 獎項圖片</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">傑出網上批發平台</h3>
            <p className="text-slate-600 dark:text-slate-400">市場領導者地位</p>
          </div>
        </div>

        {/* Recommendations Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-12">
          {/* Recommendation Logos */}
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <div className="relative w-32 h-16 rounded-lg overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
              <Image
                src="/images/partners/hsbc-logo.png"
                alt="香港上海滙豐銀行"
                width={128}
                height={64}
                className="object-contain p-2"
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="hidden absolute inset-0 bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600 items-center justify-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 text-center">滙豐銀行 Logo<br/>200x100<br/>參考: koraeweb.com 合作伙伴 Logo</div>
              </div>
            </div>
            <div className="relative w-32 h-16 rounded-lg overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
              <Image
                src="/images/partners/shopage-logo.png"
                alt="SHOPAGE"
                width={128}
                height={64}
                className="object-contain p-2"
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="hidden absolute inset-0 bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600 items-center justify-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 text-center">SHOPAGE Logo<br/>200x100<br/>參考: koraeweb.com 合作伙伴 Logo</div>
              </div>
            </div>
            <div className="relative w-32 h-16 rounded-lg overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
              <Image
                src="/images/partners/bowtie-logo.png"
                alt="Bowtie"
                width={128}
                height={64}
                className="object-contain p-2"
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="hidden absolute inset-0 bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600 items-center justify-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 text-center">Bowtie Logo<br/>200x100<br/>參考: koraeweb.com 合作伙伴 Logo</div>
              </div>
            </div>
            <div className="relative w-32 h-16 rounded-lg overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
              <Image
                src="/images/partners/shopline-logo.png"
                alt="Shopline"
                width={128}
                height={64}
                className="object-contain p-2"
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="hidden absolute inset-0 bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600 items-center justify-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 text-center">Shopline Logo<br/>200x100<br/>參考: koraeweb.com 合作伙伴 Logo</div>
              </div>
            </div>
            <div className="relative w-32 h-16 rounded-lg overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
              <Image
                src="/images/partners/metro-radio-logo.png"
                alt="新城電台"
                width={128}
                height={64}
                className="object-contain p-2"
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="hidden absolute inset-0 bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600 items-center justify-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 text-center">新城電台 Logo<br/>200x100<br/>參考: koraeweb.com 合作伙伴 Logo</div>
              </div>
            </div>
            <div className="relative w-32 h-16 rounded-lg overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
              <Image
                src="/images/partners/hkcc-logo.png"
                alt="香港電腦商會"
                width={128}
                height={64}
                className="object-contain p-2"
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="hidden absolute inset-0 bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600 items-center justify-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 text-center">香港電腦商會 Logo<br/>200x100<br/>參考: koraeweb.com 合作伙伴 Logo</div>
              </div>
            </div>
          </div>
          <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">業界信譽保證，多元化網絡批發平台</div>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            香港上海滙豐銀行、SHOPAGE 專題推薦
          </h3>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            我們團隊的服務曾經被「
            <a href="https://www.visiongo.hsbc.com.hk/zh-HK/article/online-store-product-purchasing" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium">
              香港上海滙豐銀行
            </a>
            」、「
            <a href="https://www.shopage.org/zh/post/%E7%B6%B2%E5%BA%97%E8%B2%A8%E6%BA%90%E5%BE%9E%E4%BD%95%E4%BE%86" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium">
              SHOPAGE
            </a>
            」推薦介紹，評價為可信性高的網絡批發平台，十分方便。此外，我們也與「
            <a href="https://www.bowtie.com.hk" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium">
              Bowtie
            </a>
            」、「
            <a href="https://shopline.hk" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium">
              Shopline
            </a>
            」、「
            <span className="text-blue-600 dark:text-blue-400 font-medium">新城電台</span>
            」及「
            <span className="text-blue-600 dark:text-blue-400 font-medium">香港電腦商會</span>
            」建立合作關係，持續為客戶提供優質服務。
          </p>
        </div>

        {/* Core Values Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-cyan-600 p-8 md:p-12 rounded-2xl shadow-lg text-white">
          <div className="text-sm font-semibold text-blue-100 mb-3">核心差異化功能</div>
          <h3 className="text-3xl font-bold mb-6">多平台數據下載</h3>
          <p className="text-lg text-blue-50 leading-relaxed max-w-2xl mb-6">
            Korae 的核心優勢是提供靈活的數據下載功能，支援 CSV、Excel、JSON 格式，讓您輕鬆將商品數據匯入 Shopify、WooCommerce、Shopline、Shopage 或其他電商平台，無需綁定特定網店系統。
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="mb-2 flex items-center justify-center">
                <Icon emoji="📊" size={32} className="text-white" />
              </div>
              <div className="font-semibold mb-1">多格式支援</div>
              <div className="text-sm text-blue-100">CSV、Excel、JSON</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="mb-2 flex items-center justify-center">
                <Icon emoji="🔄" size={32} className="text-white" />
              </div>
              <div className="font-semibold mb-1">多平台相容</div>
              <div className="text-sm text-blue-100">Shopify、WooCommerce、Shopline、Shopage</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="mb-2 flex items-center justify-center">
                <Icon emoji="⚡" size={32} className="text-white" />
              </div>
              <div className="font-semibold mb-1">批量下載</div>
              <div className="text-sm text-blue-100">一鍵匯出商品數據</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

