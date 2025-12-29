import { NextRequest, NextResponse } from 'next/server'
import { unlink } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export async function POST(request: NextRequest) {
  try {
    const { category, filename } = await request.json()

    if (!category || !filename) {
      return NextResponse.json(
        { success: false, message: '缺少必要參數' },
        { status: 400 }
      )
    }

    // 構建文件路徑（支持嵌套目錄）
    const categoryPath = category.includes('/') ? category : category
    const filePath = join(process.cwd(), 'public', 'images', categoryPath, filename)

    // 檢查文件是否存在
    if (!existsSync(filePath)) {
      return NextResponse.json(
        { success: false, message: '文件不存在' },
        { status: 404 }
      )
    }

    // 刪除文件
    await unlink(filePath)

    return NextResponse.json({
      success: true,
      message: '圖片已刪除',
    })
  } catch (error) {
    console.error('Delete error:', error)
    return NextResponse.json(
      { success: false, message: '刪除失敗：' + (error instanceof Error ? error.message : '未知錯誤') },
      { status: 500 }
    )
  }
}

