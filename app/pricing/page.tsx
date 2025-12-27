'use client'

import { useState } from 'react'
import Link from 'next/link'

interface PricingPlan {
  name: string
  price: string
  priceNote: string
  monthlyPrice?: string
  description: string
  features: string[]
  managedFeatures?: string[]
  popular?: boolean
  buttonText: string
  buttonLink: string
}

const pricingPlans: PricingPlan[] = [
  {
    name: '基礎課程方案',
    price: 'NT$ 12,000',
    priceNote: '起',
    monthlyPrice: '平均每月只要 NT$ 1,000 起',
    description: '適用於 AI 初學者，從零開始學習基礎 AI 概念與應用',
    features: [
      'AI 基礎概念課程，建立正確知識架構',
      'ChatGPT 基礎操作與進階技巧教學',
      'Midjourney 圖像生成入門與實戰',
      '5-10 小時完整線上課程內容',
      '專屬學習群組，與同學互動交流',
      '課程講義與作業範本下載',
    ],
    managedFeatures: [
      '終身觀看權限，隨時複習課程內容',
      '課程內容定期更新與補充',
      '講師線上答疑與指導',
      '學習進度追蹤與提醒',
      '結業證書頒發',
      '優先參與新課程試聽',
    ],
    buttonText: '預約免費試聽',
    buttonLink: '/contact',
  },
  {
    name: '進階課程方案',
    price: 'NT$ 28,000',
    priceNote: '起',
    monthlyPrice: '平均每月只要 NT$ 2,333 起',
    description: '深度學習 AI 工具整合應用，適合想要提升專業技能的學員',
    popular: true,
    features: [
      'AI 進階應用課程，掌握專業技巧',
      '多工具整合工作流程設計',
      'AI 商業應用案例分析與實作',
      '20-30 小時深度線上課程',
      '實戰專案指導與作品優化',
      '一對一導師諮詢時間（2次）',
    ],
    managedFeatures: [
      '專屬學習社群，與專業講師直接交流',
      '課程內容持續更新與擴充',
      '個人學習計劃制定與追蹤',
      '作品集建立與優化指導',
      '進階認證證書',
      '優先參與進階工作坊與活動',
    ],
    buttonText: '預約免費試聽',
    buttonLink: '/contact',
  },
  {
    name: '企業培訓方案',
    price: '依需求報價',
    priceNote: '',
    description: '為企業量身打造的 AI 培訓方案，提升團隊 AI 應用能力',
    features: [
      '企業內部 AI 培訓課程規劃',
      '客製化課程內容與案例設計',
      '多人學習帳號管理系統',
      '企業專屬講師與助教支援',
      '學習成效報告與分析',
      '後續技術支援與諮詢服務',
    ],
    managedFeatures: [
      '企業專屬學習平台與管理後台',
      '課程內容企業化客製調整',
      '定期培訓成效評估與優化',
      '員工 AI 應用能力認證',
      '持續學習資源與更新',
      '優先參與最新 AI 技術研討會',
    ],
    buttonText: '與業務專員聯繫',
    buttonLink: '/contact',
  },
]

const faqs = [
  {
    question: '課程是否可以隨時觀看？',
    answer: '是的，所有課程都提供終身觀看權限，您可以在任何時間、任何地點學習，隨時複習課程內容。',
  },
  {
    question: '是否提供課程證書？',
    answer: '完成課程學習並通過作業評核後，我們會頒發相應的結業證書，證明您的學習成果。',
  },
  {
    question: '課程內容會更新嗎？',
    answer: '我們會定期更新課程內容，補充最新的 AI 工具與應用案例，確保您學到的是最新知識。',
  },
  {
    question: '可以退費嗎？',
    answer: '在購買課程後 7 天內，如果您不滿意可以申請全額退費。超過 7 天後，可視情況申請部分退費。',
  },
  {
    question: '是否有實體課程？',
    answer: '目前主要提供線上課程，讓您不受時間地點限制。我們也會定期舉辦實體工作坊，學員可以優先報名參加。',
  },
  {
    question: '適合完全沒有經驗的初學者嗎？',
    answer: '當然可以！我們的基礎課程方案就是專為初學者設計，從最基礎的概念開始，循序漸進地帶領您進入 AI 的世界。',
  },
]

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              專業 AI 教育服務
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-2">
              選擇最適合您的方案
            </p>
            <p className="text-lg text-primary-200">
              從基礎入門到專業應用，提供完整 AI 學習解決方案
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-4 ring-primary-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary-600 text-white text-center py-2 font-semibold">
                    最熱門
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-primary-600">
                        {plan.price}
                      </span>
                      {plan.priceNote && (
                        <span className="text-gray-500 ml-2">{plan.priceNote}</span>
                      )}
                    </div>
                    {plan.monthlyPrice && (
                      <p className="text-sm text-gray-500 mt-2">{plan.monthlyPrice}</p>
                    )}
                  </div>

                  <Link
                    href={plan.buttonLink}
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold mb-6 transition ${
                      plan.popular
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                    }`}
                  >
                    {plan.buttonText}
                  </Link>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">課程內容包含：</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.managedFeatures && (
                      <>
                        <div className="pt-4 mt-4 border-t border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-3">
                            額外服務
                          </h4>
                          <ul className="space-y-2">
                            {plan.managedFeatures.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <svg
                                  className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              常見問題
            </h2>
            <p className="text-center text-gray-600 mb-12">
              我整理了大家常見的疑惑
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openFaq === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 bg-gray-50 text-gray-700">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">還有其他問題？</p>
              <Link
                href="/contact"
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                聯繫客服支援
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



