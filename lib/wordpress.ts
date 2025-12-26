import axios from 'axios'

// WordPress API 配置
const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://your-wordpress-site.com/wp-json/wp/v2'

// WordPress Post 類型定義
export interface WPPost {
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
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
    }>
    'wp:term'?: Array<Array<{
      id: number
      name: string
      slug: string
    }>>
  }
}

export interface WPCategory {
  id: number
  count: number
  description: string
  link: string
  name: string
  slug: string
}

// 獲取所有文章
export async function getPosts(params?: {
  per_page?: number
  page?: number
  categories?: number
  search?: string
}): Promise<WPPost[]> {
  try {
    const response = await axios.get(`${WP_API_URL}/posts`, {
      params: {
        _embed: true,
        ...params,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

// 獲取單篇文章
export async function getPost(slug: string): Promise<WPPost | null> {
  try {
    const response = await axios.get(`${WP_API_URL}/posts`, {
      params: {
        slug,
        _embed: true,
      },
    })
    return response.data[0] || null
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

// 獲取分類
export async function getCategories(): Promise<WPCategory[]> {
  try {
    const response = await axios.get(`${WP_API_URL}/categories`, {
      params: {
        per_page: 100,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

// 獲取特定分類的文章
export async function getPostsByCategory(categoryId: number): Promise<WPPost[]> {
  return getPosts({ categories: categoryId })
}

// 搜索文章
export async function searchPosts(query: string): Promise<WPPost[]> {
  return getPosts({ search: query })
}

