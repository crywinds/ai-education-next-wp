'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/30 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-400/30 dark:bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-purple-400/30 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number with Glitch Effect */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative mb-8"
          >
            <div className="text-[120px] sm:text-[150px] md:text-[180px] lg:text-[220px] font-black leading-none">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                404
              </span>
            </div>
            {/* Glitch Effect Overlay */}
            <div className="absolute inset-0 text-[120px] sm:text-[150px] md:text-[180px] lg:text-[220px] font-black leading-none opacity-0 hover:opacity-20 transition-opacity pointer-events-none">
              <span className="text-red-500 blur-sm">404</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            頁面未找到
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto"
          >
            抱歉，您要尋找的頁面不存在。可能已被移動或刪除。
          </motion.p>

          {/* Animated 404 Illustration using CSS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative mb-12 flex items-center justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Outer Ring */}
              <motion.div
                className="absolute inset-0 border-4 border-blue-200 dark:border-blue-800 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Middle Ring */}
              <motion.div
                className="absolute inset-8 border-4 border-cyan-200 dark:border-cyan-800 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Inner Circle with Icon */}
              <div className="absolute inset-16 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 rounded-full flex items-center justify-center shadow-xl">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="text-6xl sm:text-7xl"
                >
                  🔍
                </motion.div>
              </div>
              
              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${20 + i * 12}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                返回首頁
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            
            <Link
              href="/contact"
              className="px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2"
            >
              聯絡我們
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-slate-500 dark:text-slate-400"
          >
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              最新消息
            </Link>
            <span>•</span>
            <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              關於我們
            </Link>
            <span>•</span>
            <Link href="/pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              服務費用
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
