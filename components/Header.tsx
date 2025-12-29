'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from '@/components/ThemeToggle'
// 暫時禁用語言切換器以恢復網站功能
// import LanguageToggle from '@/components/LanguageToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const marqueeItems = [
    '✨ 100% AI 學費回贈計劃',
    '🎯 超過 50,000人及 40+個企業支持',
    '🚀 香港首個一站式韓國批發平台',
    '💎 成交費、交易費全免',
    '⭐ 業界信譽保證',
  ]

  // 按照圖片順序排列的導航項目
  const navLinks = [
    { label: '最新消息', href: '/blog', type: 'link' },
    { label: '批發商品列表', href: 'https://www.orangeboxapp.com', external: true, type: 'link' },
    { label: '預約諮詢', href: '/contact', type: 'link' },
    { label: '韓國批發團隊簡介', href: '/about', type: 'link' },
    { label: '批發+網店服務', href: '/services', type: 'button', highlight: true },
    { label: '純批發服務', href: '/wholesale', type: 'link' },
    { label: '人才招募', href: '/careers', type: 'link' },
    { label: '業界獎項', href: '/awards', type: 'link' },
    { label: '媒體影片', href: '/media', type: 'link' },
  ]

  return (
    <>
      {/* Top Banner with Marquee and Digital Effects */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
                className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white text-sm py-2 overflow-hidden"
      >
        {/* Animated Background Pattern - Multiple Layers */}
        <div className="absolute inset-0 opacity-10">
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(59,130,246,0.5)_50%,transparent_100%)] animate-[shimmer_3s_infinite]"></div>
          {/* Diagonal Lines */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(59,130,246,0.1)_10px,rgba(59,130,246,0.1)_20px)]"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:20px_20px] opacity-5"></div>
        
        {/* Animated Particles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                opacity: 0,
              }}
              animate={{
                y: ['0%', '-100%', '0%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Glowing Border Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 blur-sm"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between gap-4">
            {/* Left Side - Brand */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <Link href="/" className="font-semibold hover:text-blue-400 transition relative group">
                <span className="relative z-10">Korae 韓國東大門買手網</span>
                <span className="absolute inset-0 bg-blue-600 blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></span>
              </Link>
            </div>

            {/* Center - Marquee */}
            <div className="flex-1 overflow-hidden mx-4">
              <div className="marquee-container">
                <div className="marquee-content">
                  {marqueeItems.map((item, index) => (
                    <span key={index} className="marquee-item">
                      {item}
                      <span className="mx-8 text-blue-400">•</span>
                    </span>
                  ))}
                </div>
                <div className="marquee-content" aria-hidden="true">
                  {marqueeItems.map((item, index) => (
                    <span key={index} className="marquee-item">
                      {item}
                      <span className="mx-8 text-blue-400">•</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Social Icons */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <motion.a 
                href="https://www.facebook.com/orangeboxhk/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition relative group"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="absolute inset-0 bg-blue-600 blur-md opacity-0 group-hover:opacity-50 transition-opacity"></span>
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/orangebox.wholesale/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition relative group"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
                <span className="absolute inset-0 bg-blue-600 blur-md opacity-0 group-hover:opacity-50 transition-opacity"></span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Header with Digital Effects */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-700/50' 
            : 'bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200 dark:border-slate-700'
        }`}
      >
        {/* Digital Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-cyan-600/0 pointer-events-none"></div>
        
        {/* Animated Border Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        
        {/* Scanning Line Effect */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        <nav className="container mx-auto px-4 py-3 md:py-4 relative">
          <div className="flex items-center justify-between">
            {/* Logo with Digital Effect */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link href="/" className="relative group">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent bg-[length:200%_100%] animate-[gradient_3s_ease_infinite]">
                  Korae
                </span>
                {/* Glow Effect */}
                <span className="absolute inset-0 text-2xl font-bold bg-gradient-to-r from-blue-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent blur-sm opacity-50 group-hover:opacity-100 transition-opacity"></span>
                {/* Digital Scan Line */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent"
                  animate={{
                    y: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation - 逐一出現動畫 */}
            <div className="hidden lg:flex items-center space-x-1 overflow-x-auto">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + index * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex-shrink-0"
                >
                  {link.type === 'button' ? (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={link.href}
                        className="relative px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg overflow-hidden group"
                      >
                        <span className="relative z-10">{link.label}</span>
                        {/* Shimmer Effect */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                        {/* Glow Effect */}
                        <span className="absolute inset-0 bg-amber-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></span>
                      </Link>
                    </motion.div>
                  ) : (
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-pink-400 transition font-medium rounded-lg relative overflow-hidden group block"
                    >
                      <span className="relative z-10">{link.label}</span>
                      {/* Hover Background Effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></span>
                      {/* Digital Border on Hover */}
                      <span className="absolute inset-0 border border-blue-200/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {/* Glow Effect */}
                      <span className="absolute inset-0 bg-blue-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></span>
                      {/* Scan Line on Hover */}
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Theme Toggle and Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <ThemeToggle />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                className="lg:hidden"
              >
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-slate-700 dark:text-slate-300 relative"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.svg
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      className="w-6 h-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      className="w-6 h-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    </motion.svg>
                  )}
                </AnimatePresence>
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Mobile Navigation with Animation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden mt-4 space-y-2 pb-4 border-t border-slate-200 pt-4 overflow-hidden"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.type === 'button' ? (
                      <Link
                        href={link.href}
                        className="block py-3 px-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg text-center font-semibold shadow-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <Link
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="block py-3 text-slate-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  )
}
