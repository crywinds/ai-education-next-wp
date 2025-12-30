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
    <section ref={ref} className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Top Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            超過 50,000 人及 40+ 個企業支持
          </h3>
        </motion.div>

        {/* Infinite Marquee Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full"
        >
          {/* Mask for fade effect */}
          <div 
            className="marquee-mask"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)',
            }}
          >
            <div className="marquee-track">
              {/* Single marquee-content with duplicated items for seamless loop */}
              <div className="marquee-content">
                {/* First Set - 5 brands */}
                {brands.map((brand, index) => (
                  <div key={`brand-1-${index}`} className="marquee-item">
                    <div className="relative w-36 h-24 sm:w-44 sm:h-28 md:w-52 md:h-32 lg:w-60 lg:h-36 flex items-center justify-center flex-shrink-0 px-4 sm:px-6 md:px-8">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={brand.logo}
                          alt={brand.alt}
                          width={240}
                          height={144}
                          className="object-contain w-full h-full opacity-75 hover:opacity-100 transition-all duration-300 filter grayscale-[0.2] hover:grayscale-0"
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
                    </div>
                  </div>
                ))}
                
                {/* Duplicate Set for Seamless Loop - 5 brands */}
                {brands.map((brand, index) => (
                  <div key={`brand-2-${index}`} className="marquee-item" aria-hidden="true">
                    <div className="relative w-36 h-24 sm:w-44 sm:h-28 md:w-52 md:h-32 lg:w-60 lg:h-36 flex items-center justify-center flex-shrink-0 px-4 sm:px-6 md:px-8">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={brand.logo}
                          alt={brand.alt}
                          width={240}
                          height={144}
                          className="object-contain w-full h-full opacity-75 filter grayscale-[0.2]"
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
