import { NextRequest, NextResponse } from 'next/server'
import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'

const badgesFilePath = join(process.cwd(), 'data', 'badges.json')

// 獲取徽章數據
export async function GET() {
  try {
    const fileContent = await readFile(badgesFilePath, 'utf-8')
    const data = JSON.parse(fileContent)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    // 如果文件不存在，返回默認數據
      return NextResponse.json({
        success: true,
        data: {
          badges: [
            {
              id: 1,
              text: '🎯 業界認可',
              position: { top: '0', left: '5%' },
              animation: 'bounce-gentle',
            },
            {
              id: 2,
              text: '⭐ 信譽保證',
              position: { top: '2', right: '8%' },
              animation: 'bounce-gentle-delay1',
            },
            {
              id: 3,
              text: '💎 透明收費',
              position: { top: '8', left: '2%' },
              animation: 'bounce-gentle-delay2',
            },
            {
              id: 4,
              text: '🚀 專業服務',
              position: { top: '10', right: '3%' },
              animation: 'bounce-gentle-delay3',
            },
          ],
        },
      })
  }
}

// 更新徽章數據
export async function POST(request: NextRequest) {
  try {
    // 在生產環境中應該使用更安全的認證方式
    // 這裡簡化處理，允許從 admin panel 發送的請求

    const body = await request.json()
    const { badges } = body

    if (!badges || !Array.isArray(badges)) {
      return NextResponse.json({ success: false, message: '無效的數據格式' }, { status: 400 })
    }

    // 確保目錄存在
    const { mkdir } = await import('fs/promises')
    const dataDir = join(process.cwd(), 'data')
    try {
      await mkdir(dataDir, { recursive: true })
    } catch (error) {
      // 目錄可能已存在，忽略錯誤
    }

    // 保存數據
    await writeFile(badgesFilePath, JSON.stringify({ badges }, null, 2), 'utf-8')

    return NextResponse.json({ success: true, message: '徽章數據已更新' })
  } catch (error) {
    console.error('Error updating badges:', error)
    return NextResponse.json(
      { success: false, message: '更新失敗' },
      { status: 500 }
    )
  }
}

