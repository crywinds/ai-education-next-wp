import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const category = formData.get('category') as string
    const filename = formData.get('filename') as string

    if (!file || !category || !filename) {
      return NextResponse.json(
        { success: false, message: '缺少必要參數' },
        { status: 400 }
      )
    }

    // 驗證文件類型
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { success: false, message: '只允許上傳圖片文件' },
        { status: 400 }
      )
    }

    // 構建保存路徑
    // category 可能是 'partners', 'about', 'services' 等
    // 需要從 category 映射到實際的路徑
    const categoryPathMap: Record<string, string> = {
      'logo': 'logo',
      'hero': 'hero',
      'partners': 'partners',
      'testimonials': 'testimonials',
      'about': 'about',
      'services': 'services',
      'wholesale': 'wholesale',
      'careers': 'careers',
      'awards': 'awards',
      'media': 'media',
      'media-logos': 'media/logos',
      'contact': 'contact',
    }
    
    const actualPath = categoryPathMap[category] || category
    const uploadDir = join(process.cwd(), 'public', 'images', actualPath)
    
    // 確保目錄存在（包括嵌套目錄）
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }

    // 讀取文件內容
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // 保存文件
    const filePath = join(uploadDir, filename)
    await writeFile(filePath, buffer)

    console.log(`圖片已保存到: ${filePath}`)
    console.log(`訪問路徑: /images/${actualPath}/${filename}`)

    // 返回成功響應
    return NextResponse.json({
      success: true,
      message: '圖片上傳成功',
      path: `/images/${actualPath}/${filename}`,
      filePath: filePath,
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { success: false, message: '上傳失敗：' + (error instanceof Error ? error.message : '未知錯誤') },
      { status: 500 }
    )
  }
}

