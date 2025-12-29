'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">頁面未找到</h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8">
            抱歉，您要尋找的頁面不存在。
          </p>
          
          {/* Image Placeholder */}
          <div className="relative aspect-video bg-slate-200 border-2 border-dashed border-slate-400 rounded-2xl mb-8 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🔍</div>
              <div className="text-slate-600 font-semibold mb-2">404 插圖</div>
              <div className="text-xs text-slate-500">建議尺寸: 800x600</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/zh-TW"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              返回首頁
            </Link>
            <Link
              href="/zh-TW/contact"
              className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all border border-slate-200"
            >
              聯絡我們
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
