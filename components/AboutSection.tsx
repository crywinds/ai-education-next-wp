'use client'

import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
            業界肯定 Korae 前身 OrangeBox 日韓時裝批發平台
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            關於我們
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            從 OrangeBox 重組而來，致力提供更透明、更靈活的批發服務
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
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
                src="/images/awards/hk-digital-brand-2018.png"
                alt="香港數碼品牌 2018"
                width={64}
                height={64}
                className="object-contain w-full h-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="hidden absolute inset-0 bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600 items-center justify-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 text-center px-2">獎項圖片<br/>200x200</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">香港數碼品牌 2018</h3>
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
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="hidden absolute inset-0 bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600 items-center justify-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 text-center px-2">獎項圖片<br/>200x200</div>
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
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="hidden absolute inset-0 bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600 items-center justify-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 text-center px-2">獎項圖片<br/>200x200</div>
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
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="hidden absolute inset-0 bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600 items-center justify-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 text-center">滙豐銀行 Logo<br/>200x100</div>
              </div>
            </div>
            <div className="relative w-32 h-16 rounded-lg overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
              <Image
                src="/images/partners/shopage-logo.png"
                alt="SHOPAGE"
                width={128}
                height={64}
                className="object-contain p-2"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="hidden absolute inset-0 bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600 items-center justify-center">
                <div className="text-xs text-slate-500 dark:text-slate-400 text-center">SHOPAGE Logo<br/>200x100</div>
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
            」推薦介紹，評價為可信性高的網絡批發平台，十分方便。
          </p>
        </div>

        {/* Core Values Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-cyan-600 p-8 md:p-12 rounded-2xl shadow-lg text-white">
          <div className="text-sm font-semibold text-blue-100 mb-3">核心差異化功能</div>
          <h3 className="text-3xl font-bold mb-6">多平台數據下載</h3>
          <p className="text-lg text-blue-50 leading-relaxed max-w-2xl mb-6">
            Korae 的核心優勢是提供靈活的數據下載功能，支援 CSV、Excel、JSON 格式，讓您輕鬆將商品數據匯入 Shopify、WooCommerce 或其他電商平台，無需綁定特定網店系統。
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">📊</div>
              <div className="font-semibold mb-1">多格式支援</div>
              <div className="text-sm text-blue-100">CSV、Excel、JSON</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🔄</div>
              <div className="font-semibold mb-1">多平台相容</div>
              <div className="text-sm text-blue-100">Shopify、WooCommerce</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">⚡</div>
              <div className="font-semibold mb-1">批量下載</div>
              <div className="text-sm text-blue-100">一鍵匯出商品數據</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

