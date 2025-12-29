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

    // 構建保存路徑（支持嵌套目錄，如 media/logos）
    const categoryPath = category.includes('/') ? category : category
    const uploadDir = join(process.cwd(), 'public', 'images', categoryPath)
    
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

    // 返回成功響應
    return NextResponse.json({
      success: true,
      message: '圖片上傳成功',
      path: `/images/${categoryPath}/${filename}`,
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { success: false, message: '上傳失敗：' + (error instanceof Error ? error.message : '未知錯誤') },
      { status: 500 }
    )
  }
}

