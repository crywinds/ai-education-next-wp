'use client'

import Image from 'next/image'

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">顧客意見回饋</h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300">
              Korae 絕不硬性銷售，提供透明收費、無捆綁服務。顧問以提供合適建議為依歸，我們將會提供最專業的建議給顧客。
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-start mb-6">
              <div className="text-5xl text-blue-600 dark:text-blue-400 mr-4">&ldquo;</div>
              <blockquote className="text-xl md:text-2xl italic text-slate-700 dark:text-slate-300 leading-relaxed flex-1">
                Korae 作為網上批發平台的市場領導者，一直致力為不論規模大小的商店，供應合適且好質量的商品。其透明收費制度和多平台數據下載功能，讓我們可以自由選擇銷售渠道，無需綁定特定網店系統，大大提升了我們的靈活性和競爭優勢！
              </blockquote>
            </div>
            <footer className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mr-4 overflow-hidden border-2 border-dashed border-slate-400 dark:border-slate-600">
                <div className="text-xs text-slate-500 dark:text-slate-400 text-center">頭像<br/>64x64</div>
              </div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">新城電台專題訪問</div>
                <div className="text-slate-500 dark:text-slate-400 text-sm">媒體評價</div>
              </div>
            </footer>
          </div>
          
          {/* Testimonial Images */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative aspect-video rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700 border-2 border-dashed border-slate-400 dark:border-slate-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-xs text-slate-500 dark:text-slate-400 text-center px-2">客戶見證圖片<br/>400x300</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Testimonial Carousel Placeholder */}
          <div className="mt-12 flex justify-center gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <button
                key={item}
                className="w-2 h-2 rounded-full bg-slate-300 hover:bg-blue-600 transition-colors"
                aria-label={`Testimonial ${item}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
