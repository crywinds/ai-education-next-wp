import Link from 'next/link'
import Image from 'next/image'
import { Course } from '@/types'

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  const levelColors = {
    初級: 'bg-green-100 text-green-800',
    中級: 'bg-blue-100 text-blue-800',
    高級: 'bg-purple-100 text-purple-800',
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <div className="relative h-48 bg-gray-200">
        {course.image && course.image !== '/api/placeholder/400/250' ? (
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )}
        {course.level && (
          <span className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-semibold ${levelColors[course.level]}`}>
            {course.level}
          </span>
        )}
      </div>
      <div className="p-6">
        {course.category && (
          <span className="text-sm text-primary-600 font-medium">{course.category}</span>
        )}
        <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
          <Link href={`/courses/${course.slug}`} className="hover:text-primary-600 transition">
            {course.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            {course.duration && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {course.duration}
              </span>
            )}
          </div>
          <Link
            href={`/courses/${course.slug}`}
            className="text-primary-600 font-semibold hover:text-primary-700 transition"
          >
            了解更多 →
          </Link>
        </div>
      </div>
    </div>
  )
}

