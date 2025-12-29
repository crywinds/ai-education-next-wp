'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '免費會員和付費會員有什麼區別？',
      answer: '免費會員可免費註冊，瀏覽完整商品目錄並直接下單批發購買，享有基礎批發價。付費會員（月費 HKD 188 或年費 HKD 1,888）額外享有：無限制數據下載功能（CSV、Excel、JSON 格式）、額外 5-10% 批發折扣、優先查看新品、優先訂單處理、專屬客戶支援等權益。',
    },
    {
      question: '數據下載功能支援哪些格式？可以匯入哪些平台？',
      answer: 'Korae 支援 CSV、Excel、JSON 三種數據格式下載。下載的數據包含商品圖片、描述、價格、庫存等完整資訊。這些數據可輕鬆匯入 Shopify、WooCommerce、Shopline、Shopage 或其他電商平台，讓您自由選擇銷售渠道，無需綁定特定網店系統。',
    },
    {
      question: 'Korae 的收費是否透明？有沒有隱藏費用？',
      answer: 'Korae 提供透明度極高的收費制度，絕不收取任何隱藏費用。所有費用於網站首頁及會員註冊頁清晰列明：免費會員完全免費註冊；付費會員可選擇月費 HKD 188 或年費 HKD 1,888。所有商品批發價統一，無捆綁服務，客戶可自由選擇所需服務。',
    },
    {
      question: '我需要綁定網店系統嗎？',
      answer: '不需要。Korae 提供純批發服務，客戶無需強制綁定網店系統。您可以選擇下載商品數據，匯入您現有的 Shopify、WooCommerce、Shopline、Shopage 或其他電商平台。如需網店系統，我們也提供可選的網店服務，但這不是強制要求。',
    },
    {
      question: '付費會員可以隨時取消嗎？',
      answer: '可以。付費會員可隨時取消訂閱，無違約金。已付費用按比例退還：月費全額退還未使用天數，年費按剩餘月份退還。新註冊付費會員提供 14 天免費試用，期間享有完整 Premium 權益。',
    },
    {
      question: '批發折扣如何計算？',
      answer: '所有會員（免費或付費）享有相同基礎批發價。付費會員額外享有階梯式折扣：訂單金額超過 HKD 5,000 享 5% 折扣，超過 HKD 10,000 享 10% 折扣。',
    },
    {
      question: '我要怎麼樣聯絡你們？',
      answer: '若有任何批發相關問題，直接點選網頁右下角的對話窗聯絡我們的線上客服，或發電郵至 info@clickbala.com。我們亦有提供免費批發諮詢，若想要預約我們的批發顧問，請在這裡登記。',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">常見問題</h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            解答您對批發服務的疑問
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-slate-900 dark:text-white pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto mt-12 md:mt-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 md:p-8 lg:p-12 text-center text-white shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">有任何疑問？</h2>
          <p className="text-base md:text-lg text-blue-50 mb-6 md:mb-8">
            我們會協助您了解我們批發服務，過程中絕對不會有硬性銷售。
          </p>
          <a 
            href="https://orangebox.com.hk/applybooking/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            與開店顧問聯繫
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
