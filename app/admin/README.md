# Admin Panel 使用說明

## 設置

1. 創建 `.env.local` 文件（如果還沒有）：
```bash
ADMIN_PASSWORD=your_secure_password_here
```

2. 默認密碼為 `admin123`（如果沒有設置環境變數）

## 訪問

訪問 `http://localhost:5200/admin` 並輸入密碼登錄。

## 功能

- **圖片上傳**：選擇分類和文件名，上傳對應的圖片
- **圖片預覽**：查看已上傳的圖片
- **進度顯示**：實時顯示上傳進度
- **自動保存**：圖片自動保存到 `public/images/` 目錄

## 支持的圖片分類

- Hero 背景圖片 (`/images/hero/`)
- 獎項圖片 (`/images/awards/`)
- 合作伙伴 Logo (`/images/partners/`)
- 服務圖片 (`/images/services/`)
- 客戶見證 (`/images/testimonials/`)

## 安全提示

⚠️ **重要**：請確保設置一個強密碼，並且不要將 `.env.local` 文件提交到 Git。


