'use client'

import { motion } from 'framer-motion'
import { Button, ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface GradientButtonProps extends ButtonProps {
  gradient?: 'primary' | 'secondary' | 'accent'
}

export default function GradientButton({
  children,
  className,
  gradient = 'primary',
  ...props
}: GradientButtonProps) {
  const gradientClasses = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-800 hover:from-primary-700 hover:to-primary-900',
    secondary: 'bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70',
    accent: 'bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70',
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        className={cn(gradientClasses[gradient], className)}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  )
}







