import { NextResponse } from 'next/server'
import { getPosts } from '@/lib/wordpress'

export const revalidate = 60 // 每 60 秒重新驗證

export async function GET() {
  try {
    // 獲取最新的 5 篇文章作為熱門文章
    const posts = await getPosts({ 
      per_page: 5,
      fetchAll: false 
    })

    // 轉換為 Footer 需要的格式
    const popularPosts = posts.map((post) => {
      try {
        return {
          title: post.title?.rendered?.replace(/<[^>]*>/g, '') || '無標題', // 移除 HTML 標籤
          date: post.date?.split('T')[0] || new Date().toISOString().split('T')[0], // 只取日期部分
          url: `/blog/${post.slug || ''}`,
        }
      } catch (err) {
        console.error('Error processing post:', err)
        return null
      }
    }).filter((post): post is NonNullable<typeof post> => post !== null)

    return NextResponse.json({ posts: popularPosts })
  } catch (error) {
    console.error('Error fetching popular posts:', error)
    // 返回空數組而不是錯誤，讓前端可以顯示默認數據
    return NextResponse.json(
      { posts: [] },
      { status: 200 } // 改為 200，讓前端可以正常處理
    )
  }
}

