// 通用類型定義

export interface Course {
  id: number
  title: string
  description: string
  content?: string
  image?: string
  duration?: string
  level?: '初級' | '中級' | '高級'
  price?: number
  slug: string
  category?: string
  tags?: string[]
}

export interface Category {
  id: number
  name: string
  slug: string
  description?: string
  count: number
}


