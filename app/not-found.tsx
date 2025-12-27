import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">頁面未找到</h2>
      <p className="text-xl text-gray-600 mb-8">
        抱歉，您要尋找的頁面不存在。
      </p>
      <Link
        href="/"
        className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
      >
        返回首頁
      </Link>
    </div>
  )
}




