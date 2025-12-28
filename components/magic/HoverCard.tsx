'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface HoverCardProps {
  children: React.ReactNode
  className?: string
  hoverScale?: number
}

export default function HoverCard({
  children,
  className,
  hoverScale = 1.05,
}: HoverCardProps) {
  return (
    <motion.div
      whileHover={{ scale: hoverScale }}
      transition={{ duration: 0.2 }}
    >
      <Card className={cn('transition-shadow duration-200 hover:shadow-lg', className)}>
        {children}
      </Card>
    </motion.div>
  )
}







