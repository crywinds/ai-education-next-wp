import { getPost, getPosts } from '@/lib/wordpress'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { WPPost } from '@/lib/wordpress'
import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function getFeaturedImage(post: WPPost) {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getPosts({ per_page: 100 })
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return genMeta({
      title: '文章未找到',
      description: '抱歉，您要尋找的文章不存在。',
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://korae.com'}/blog/${slug}`,
    })
  }

  const title = post.title.rendered.replace(/<[^>]*>/g, '')
  const excerpt = post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160)
  const featuredImage = getFeaturedImage(post)

  return genMeta({
    title: `${title} - 最新消息`,
    description: excerpt || '閱讀 Korae 的最新文章，了解韓國批發、時裝趨勢及網店經營資訊。',
    keywords: ['最新消息', '韓國批發', '時裝趨勢', '網店經營'],
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://korae.com'}/blog/${slug}`,
    image: featuredImage || undefined,
    type: 'article',
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const featuredImage = getFeaturedImage(post)
  const title = post.title.rendered.replace(/<[^>]*>/g, '')

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-700 mb-4 inline-flex items-center transition"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回文章列表
        </Link>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {featuredImage && (
            <div className="relative h-64 md:h-96 bg-gray-200">
              <Image
                src={featuredImage}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="p-8 md:p-12">
            <div className="text-sm text-slate-500 mb-4">
              {formatDate(post.date)}
            </div>
            
            <h1
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            <div
              className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        </article>
      </div>
    </div>
  )
}


