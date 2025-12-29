'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MembershipComparison() {
  const features = [
    {
      name: '註冊費用',
      free: '免費',
      premium: '月費 HKD 188 / 年費 HKD 1,888',
      premiumNote: '（年費相當於每月 HKD 157，節省 16%）',
    },
    {
      name: '商品瀏覽與選購',
      free: '可瀏覽完整商品目錄，直接下單批發購買',
      premium: '同左，加上優先查看新品（提前 24 小時）',
    },
    {
      name: '批發折扣',
      free: '無額外折扣（基礎批發價）',
      premium: '額外 5-10% 折扣（依訂購金額階梯：訂單 > HKD 5,000 享 5%；> HKD 10,000 享 10%）',
    },
    {
      name: '數據下載功能',
      free: '不可下載（僅可線上查看商品詳情）',
      premium: '無限制下載（支援 CSV、Excel、JSON 格式，包含圖片、描述、價格、庫存等；相容 Shopify、WooCommerce、Shopline、Shopage 等平台）',
    },
    {
      name: '訂單與物流',
      free: '標準物流費用，按實際計算',
      premium: '優先訂單處理 + 可選免運門檻降低（例如滿 HKD 3,000 免運）',
    },
    {
      name: '其他權益',
      free: '基本客戶支援',
      premium: '專屬客戶支援、每月新品推薦報告、批量下載歷史數據',
    },
  ]

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
          會員計劃比較
        </h3>
        <p className="text-slate-600 dark:text-slate-300">
          選擇最適合您的會員計劃
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-full inline-block">
          <div className="grid grid-cols-3 gap-4 mb-4">
            {/* Header */}
            <div className="font-semibold text-slate-700 dark:text-slate-300 text-sm md:text-base"></div>
            <div className="text-center font-semibold text-slate-900 dark:text-white text-sm md:text-base">
              免費會員
              <div className="text-xs text-slate-500 dark:text-slate-400 font-normal mt-1">Basic Member</div>
            </div>
            <div className="text-center font-semibold text-slate-900 dark:text-white text-sm md:text-base">
              付費會員
              <div className="text-xs text-slate-500 dark:text-slate-400 font-normal mt-1">Premium Member</div>
            </div>
          </div>

          {/* Features */}
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-3 gap-4 py-4 border-b border-slate-200 dark:border-slate-700"
            >
              <div className="font-medium text-slate-900 dark:text-white text-sm md:text-base">
                {feature.name}
              </div>
              <div className="text-slate-600 dark:text-slate-300 text-sm">
                {feature.free}
              </div>
              <div className="text-slate-600 dark:text-slate-300 text-sm">
                {feature.premium}
                {feature.premiumNote && (
                  <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                    {feature.premiumNote}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center"
        >
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">免費會員</h4>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">適合初次試用或小規模批發商</p>
          <Link
            href="/wholesale"
            className="inline-block px-6 py-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-semibold rounded-lg transition-colors"
          >
            免費註冊
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6 text-white text-center shadow-lg"
        >
          <h4 className="text-xl font-bold mb-2">付費會員</h4>
          <p className="text-blue-50 text-sm mb-4">適合需頻繁上架商品至自家網店的中大型批發商</p>
          <div className="mb-4">
            <div className="text-2xl font-bold">HKD 188</div>
            <div className="text-sm text-blue-100">/ 月 或 HKD 1,888 / 年</div>
          </div>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            立即升級
          </Link>
        </motion.div>
      </div>

      {/* Trial Notice */}
      <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-center">
        <p className="text-sm text-blue-900 dark:text-blue-300">
          <strong>14 天免費試用</strong>：新註冊付費會員提供 14 天免費試用，期間享有完整 Premium 權益
        </p>
      </div>
    </div>
  )
}

