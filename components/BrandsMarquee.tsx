'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const brands = [
  {
    name: 'Garden 嘉頓',
    logo: '/images/brands/garden-logo.png',
    alt: 'Garden 嘉頓',
  },
  {
    name: 'Hip Shing Hong 協成行',
    logo: '/images/brands/hip-shing-hong-logo.png',
    alt: 'Hip Shing Hong 協成行',
  },
  {
    name: 'CT goodjobs',
    logo: '/images/brands/ct-goodjobs-logo.png',
    alt: 'CT goodjobs',
  },
  {
    name: 'Hysan 希慎',
    logo: '/images/brands/hysan-logo.png',
    alt: 'Hysan 希慎',
  },
  {
    name: 'PERFECT ME',
    logo: '/images/brands/perfect-me-logo.png',
    alt: 'PERFECT ME',
  },
]

export default function BrandsMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Top Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white leading-tight">
            超過 50,000 人及 40+ 個企業支持
          </h3>
        </motion.div>

        {/* Brands Container - 優化排版 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          <div className="flex items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 flex-wrap max-w-7xl mx-auto">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex-shrink-0"
                whileHover={{ scale: 1.08, y: -2 }}
              >
                <div className="relative w-32 h-20 sm:w-40 sm:h-24 md:w-48 md:h-28 lg:w-56 lg:h-32 flex items-center justify-center opacity-75 hover:opacity-100 transition-all duration-300 px-2 sm:px-4">
                  <Image
                    src={brand.logo}
                    alt={brand.alt}
                    width={224}
                    height={128}
                    className="object-contain max-w-full max-h-full filter grayscale-[0.3] hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const placeholder = target.parentElement?.querySelector('.brand-placeholder') as HTMLElement
                      if (placeholder) placeholder.style.display = 'flex'
                    }}
                  />
                  <div className="brand-placeholder hidden absolute inset-0 items-center justify-center bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg">
                    <div className="text-center p-3">
                      <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                        {brand.name}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

