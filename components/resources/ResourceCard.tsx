'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Link as LinkIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { staggerItem } from '@/lib/animations'

interface ResourceCardProps {
  resource: {
    id: number
    title: string
    description: string
    link: string
    icon?: string
    category?: string
    categories: string[]
    tags: string[]
    featuredImage?: string
    slug: string
  }
  index?: number
}

export default function ResourceCard({ resource, index = 0 }: ResourceCardProps) {
  const isExternal = resource.link.startsWith('http')
  
  const cardContent = (
    <Card className="h-full transition-all duration-300 hover:shadow-lg group">
      <CardHeader>
        <div className="flex items-start gap-3">
          {resource.icon && (
            <div className="text-3xl flex-shrink-0">{resource.icon}</div>
          )}
          {resource.featuredImage && !resource.icon && (
            <Image
              src={resource.featuredImage}
              alt={resource.title}
              width={48}
              height={48}
              className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
            />
          )}
          <div className="flex-1 min-w-0">
            <CardTitle className="text-xl mb-2 group-hover:text-primary-600 transition-colors">
              {resource.title}
            </CardTitle>
            {resource.category && (
              <Badge variant="secondary" className="mb-2">
                {resource.category}
              </Badge>
            )}
          </div>
          {isExternal && (
            <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3 mb-4">
          {resource.description}
        </CardDescription>
        {resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {resource.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )

  if (isExternal) {
    return (
      <motion.div
        variants={staggerItem}
        initial="hidden"
        animate="visible"
        custom={index}
      >
        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {cardContent}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={staggerItem}
      initial="hidden"
      animate="visible"
      custom={index}
    >
      <Link href={resource.link} className="block">
        {cardContent}
      </Link>
    </motion.div>
  )
}

