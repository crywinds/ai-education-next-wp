import { getPost, getPosts } from '@/lib/wordpress'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { WPPost } from '@/lib/wordpress'

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
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getPosts({ per_page: 100 })
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  const featuredImage = getFeaturedImage(post)

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link
        href="/blog"
        className="text-primary-600 hover:text-primary-700 mb-4 inline-block"
      >
        ← 返回文章列表
      </Link>

      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        {featuredImage && (
          <div className="relative h-64 md:h-96 bg-gray-200">
            <Image
              src={featuredImage}
              alt={post.title.rendered}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="p-8 md:p-12">
          <div className="text-sm text-gray-500 mb-4">
            {formatDate(post.date)}
          </div>
          
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </article>
    </div>
  )
}




