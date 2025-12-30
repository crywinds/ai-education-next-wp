'use client'

import {
  Download,
  ShoppingBag,
  BarChart3,
  Truck,
  FileText,
  Link2,
  RefreshCw,
  CheckCircle2,
  Handshake,
  Sparkles,
  Target,
  Rocket,
  Gem,
  Star,
  User,
  Briefcase,
  Search,
  MessageSquare,
  Zap,
  Image as ImageIcon,
  FileSpreadsheet,
  Database,
  MapPin,
} from 'lucide-react'
import { LucideIcon } from 'lucide-react'

// Emoji 到 Lucide 圖標的映射
const emojiToIcon: Record<string, LucideIcon> = {
  '📥': Download,
  '🛍️': ShoppingBag,
  '📊': BarChart3,
  '🚚': Truck,
  '📄': FileText,
  '🔗': Link2,
  '🔄': RefreshCw,
  '✅': CheckCircle2,
  '🤝': Handshake,
  '✨': Sparkles,
  '🎯': Target,
  '🚀': Rocket,
  '💎': Gem,
  '⭐': Star,
  '👨‍💼': User,
  '👔': Briefcase,
  '🔍': Search,
  '💬': MessageSquare,
  '⚡': Zap,
  '🖼️': ImageIcon,
  '📈': FileSpreadsheet,
  '💼': Briefcase,
  '🗺️': MapPin,
}

interface IconProps {
  emoji?: string
  icon?: LucideIcon
  className?: string
  size?: number
}

export default function Icon({ emoji, icon, className = '', size = 24 }: IconProps) {
  // 如果提供了 icon，直接使用
  if (icon) {
    const IconComponent = icon
    return <IconComponent className={className} size={size} />
  }

  // 如果提供了 emoji，查找對應的圖標
  if (emoji && emojiToIcon[emoji]) {
    const IconComponent = emojiToIcon[emoji]
    return <IconComponent className={className} size={size} />
  }

  // 如果找不到對應的圖標，返回原始 emoji（作為後備）
  return <span className={className}>{emoji}</span>
}

