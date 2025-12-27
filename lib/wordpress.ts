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
      taxonomy?: string
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

// 獲取所有文章（支持分頁獲取全部）
export async function getPosts(params?: {
  per_page?: number
  page?: number
  categories?: number
  search?: string
  fetchAll?: boolean // 是否獲取所有數據（自動處理分頁）
}): Promise<WPPost[]> {
  try {
    const perPage = params?.per_page || 100
    const fetchAll = params?.fetchAll || false
    
    if (fetchAll && !params?.page && !params?.search && !params?.categories) {
      // 獲取所有數據，自動處理分頁
      return await getAllPostsPaginated(perPage)
    }
    
    const response = await axios.get(`${WP_API_URL}/posts`, {
      params: {
        _embed: true,
        per_page: perPage,
        ...params,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

// 分頁獲取所有文章
async function getAllPostsPaginated(perPage: number = 100): Promise<WPPost[]> {
  const allPosts: WPPost[] = []
  let page = 1
  let hasMore = true

  while (hasMore) {
    try {
      const response = await axios.get(`${WP_API_URL}/posts`, {
        params: {
          _embed: true,
          per_page: perPage,
          page,
        },
      })
      
      const posts = response.data
      if (posts.length === 0) {
        hasMore = false
      } else {
        allPosts.push(...posts)
        // 如果返回的數據少於 perPage，說明已經是最後一頁
        if (posts.length < perPage) {
          hasMore = false
        } else {
          page++
        }
      }
    } catch (error) {
      console.error(`Error fetching posts page ${page}:`, error)
      hasMore = false
    }
  }

  return allPosts
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

// ==================== 资源相关函数 ====================

import type { WPResource, ResourceCategory, ResourceSearchParams } from '@/types/resource'

// 獲取所有资源
export async function getResources(params?: ResourceSearchParams): Promise<WPResource[]> {
  try {
    const response = await axios.get(`${WP_API_URL}/resource`, {
      params: {
        _embed: true,
        ...params,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching resources:', error)
    return []
  }
}

// 搜索资源
export async function searchResources(query: string, params?: Omit<ResourceSearchParams, 'search'>): Promise<WPResource[]> {
  return getResources({ search: query, ...params })
}

// 按分类獲取资源
export async function getResourcesByCategory(categoryId: number, params?: Omit<ResourceSearchParams, 'categories'>): Promise<WPResource[]> {
  return getResources({ categories: categoryId, ...params })
}

// 獲取资源分类
export async function getResourceCategories(): Promise<ResourceCategory[]> {
  try {
    const response = await axios.get(`${WP_API_URL}/resource_category`, {
      params: {
        per_page: 100,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching resource categories:', error)
    // 如果 resource_category 端点不存在，尝试从资源的分类字段中获取
    return []
  }
}

// 獲取单个资源
export async function getResource(slug: string): Promise<WPResource | null> {
  try {
    const response = await axios.get(`${WP_API_URL}/resource`, {
      params: {
        slug,
        _embed: true,
      },
    })
    return response.data[0] || null
  } catch (error) {
    console.error('Error fetching resource:', error)
    return null
  }
}

// 解析资源数据，提取有用信息
export function parseResource(resource: WPResource): {
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
} {
  const categories = resource._embedded?.['wp:term']?.[0]?.filter(term => term.taxonomy === 'resource_category') || []
  const tags = resource._embedded?.['wp:term']?.[0]?.filter(term => term.taxonomy === 'post_tag') || []
  
  // 从 ACF 字段或分类中提取资源链接
  const resourceLink = resource.acf?.resource_external_link || resource.acf?.resource_url || resource.link
  const icon = resource.acf?.resource_icon
  const category = resource.acf?.resource_category || categories[0]?.name
  
  return {
    id: resource.id,
    title: resource.title.rendered,
    description: resource.excerpt.rendered.replace(/<[^>]*>/g, '').trim(),
    link: resourceLink,
    icon,
    category,
    categories: categories.map(cat => cat.name),
    tags: tags.map(tag => tag.name),
    featuredImage: resource._embedded?.['wp:featuredmedia']?.[0]?.source_url,
    slug: resource.slug,
  }
}

// ==================== 课程相关函数 ====================

import type { Course } from '@/types'

// 獲取所有課程（從 Custom Post Type "course"）
// 注意：此函數只從 course post type 獲取，不會回退到標準 posts
export async function getCoursesFromWP(params?: {
  per_page?: number
  page?: number
  categories?: number
  search?: string
  fetchAll?: boolean // 是否獲取所有數據（自動處理分頁）
}): Promise<WPPost[]> {
  try {
    const perPage = params?.per_page || 100
    const fetchAll = params?.fetchAll || false
    
    if (fetchAll && !params?.page && !params?.search && !params?.categories) {
      // 獲取所有課程數據，自動處理分頁
      return await getAllCoursesPaginated(perPage)
    }
    
    const response = await axios.get(`${WP_API_URL}/course`, {
      params: {
        _embed: true,
        per_page: perPage,
        ...params,
      },
    })
    return response.data
  } catch (error) {
    // 如果 course post type 不存在，返回空數組（不再回退到 posts）
    if ((error as any).response?.status === 404) {
      console.warn('Course post type 不存在。請在 WordPress 中創建 "course" Custom Post Type。')
    } else {
      console.error('Error fetching courses:', error)
    }
    return []
  }
}

// 分頁獲取所有課程（只從 course post type 獲取）
async function getAllCoursesPaginated(perPage: number = 100): Promise<WPPost[]> {
  const allCourses: WPPost[] = []
  let page = 1
  let hasMore = true

  while (hasMore) {
    try {
      const response = await axios.get(`${WP_API_URL}/course`, {
        params: {
          _embed: true,
          per_page: perPage,
          page,
        },
      })
      
      const courses = response.data
      if (courses.length === 0) {
        hasMore = false
      } else {
        allCourses.push(...courses)
        // 如果返回的數據少於 perPage，說明已經是最後一頁
        if (courses.length < perPage) {
          hasMore = false
        } else {
          page++
        }
      }
    } catch (error) {
      // 如果是404，說明course post type不存在，停止嘗試並返回已獲取的數據
      if ((error as any).response?.status === 404) {
        console.warn('Course post type 不存在。返回已獲取的課程數據。')
        hasMore = false
      } else {
        console.error(`Error fetching courses page ${page}:`, error)
        hasMore = false
      }
    }
  }

  return allCourses
}

// 獲取单个课程
export async function getCourseFromWP(slug: string): Promise<WPPost | null> {
  try {
    // 先尝试从 course post type 获取
    const response = await axios.get(`${WP_API_URL}/course`, {
      params: {
        slug,
        _embed: true,
      },
    })
    if (response.data && response.data.length > 0) {
      return response.data[0]
    }
    // 如果不存在，尝试从 posts 获取
    return await getPost(slug)
  } catch (error) {
    console.error('Error fetching course:', error)
    return null
  }
}

// 將 WordPress Post 轉換為 Course 類型
export function transformPostToCourse(post: WPPost): Course {
  const categories = post._embedded?.['wp:term']?.[0]?.filter(term => term.taxonomy === 'category') || []
  const tags = post._embedded?.['wp:term']?.[0]?.filter(term => term.taxonomy === 'post_tag') || []
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
  
  // 從 ACF 字段獲取課程特定資訊（如果使用了 ACF）
  const acf = (post as any).acf || {}
  
  return {
    id: post.id,
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, '').trim(),
    content: post.content.rendered,
    image: featuredImage,
    duration: acf.duration || acf.course_duration,
    level: acf.level || acf.course_level,
    price: acf.price || acf.course_price,
    slug: post.slug,
    category: categories[0]?.name,
    tags: tags.map(tag => tag.name),
  }
}


