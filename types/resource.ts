// WordPress 资源类型定义

export interface WPResource {
  id: number
  date: string
  date_gmt: string
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
    protected: boolean
  }
  excerpt: {
    rendered: string
    protected: boolean
  }
  featured_media: number
  categories: number[]
  tags: number[]
  acf?: {
    resource_url?: string
    resource_icon?: string
    resource_category?: string
    resource_external_link?: string
  }
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
    }>
    'wp:term'?: Array<Array<{
      id: number
      name: string
      slug: string
      taxonomy: string
    }>>
  }
}

export interface ResourceCategory {
  id: number
  count: number
  description: string
  link: string
  name: string
  slug: string
  taxonomy: string
}

export interface ResourceSearchParams {
  search?: string
  categories?: number
  per_page?: number
  page?: number
  orderby?: 'date' | 'title' | 'relevance'
  order?: 'asc' | 'desc'
}

export interface ParsedResource {
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



