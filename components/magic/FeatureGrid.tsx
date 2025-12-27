'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface FeatureGridProps {
  children: React.ReactNode
  className?: string
  columns?: 1 | 2 | 3 | 4
}

export default function FeatureGrid({
  children,
  className,
  columns = 3,
}: FeatureGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className={cn('grid gap-6', gridCols[columns], className)}
    >
      {children}
    </motion.div>
  )
}

interface FeatureItemProps {
  children: React.ReactNode
  index?: number
  className?: string
}

export function FeatureItem({ children, index = 0, className }: FeatureItemProps) {
  return (
    <motion.div variants={staggerItem} custom={index} className={className}>
      {children}
    </motion.div>
  )
}



