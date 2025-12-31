# 圖片設置指南

## 概述

本指南說明如何從 koraeweb.com 獲取圖片並設置到新網站中。

## 圖片目錄結構

所有圖片應放置在 `public/images/` 目錄下：

```
public/
├── images/
│   ├── partners/          # 合作伙伴 Logo
│   │   ├── hsbc-logo.png
│   │   ├── shopage-logo.png
│   │   ├── sfexpress-logo.png
│   │   ├── metro-radio-logo.png
│   │   └── hkcc-logo.png
│   ├── awards/            # 獎項圖片
│   │   ├── hk-digital-brand-2018.png
│   │   ├── award-brand.png
│   │   └── outstanding-platform.png
│   ├── hero/              # Hero 背景圖片
│   │   └── hero-background.jpg
│   ├── services/          # 服務相關圖片
│   │   ├── dongdaemun-desktop.jpg
│   │   ├── dongdaemun-mobile.jpg
│   │   └── service-fee.jpg
│   └── testimonials/      # 客戶見證圖片
│       └── testimonial-*.jpg
```

## 從 koraeweb.com 下載圖片

### 方法 1：使用瀏覽器開發者工具

1. 打開 https://www.koraeweb.com
2. 按 `F12` 打開開發者工具
3. 切換到 "Network" (網路) 標籤
4. 篩選 "Img" (圖片)
5. 重新載入頁面
6. 找到需要的圖片，右鍵點擊 → "Save as..." (另存為)
7. 將圖片保存到對應的 `public/images/` 子目錄

### 方法 2：直接從網頁保存

1. 在 koraeweb.com 上找到需要的圖片
2. 右鍵點擊圖片 → "另存圖片為..."
3. 保存到對應的 `public/images/` 子目錄

### 方法 3：使用瀏覽器擴展

可以使用瀏覽器擴展（如 "Image Downloader"）批量下載圖片。

## 需要下載的圖片清單

### 合作伙伴 Logo (public/images/partners/)

- [ ] `hsbc-logo.png` - 香港上海滙豐銀行 Logo
- [ ] `shopage-logo.png` - SHOPAGE Logo  
- [ ] `sfexpress-logo.png` - 順豐速遞 Logo
- [ ] `metro-radio-logo.png` - 新城電台 Logo
- [ ] `hkcc-logo.png` - 香港電腦商會 Logo

### 獎項圖片 (public/images/awards/)

- [ ] `hk-digital-brand-2018.png` - 香港數碼品牌 2018
- [ ] `award-brand.png` - 得獎品牌
- [ ] `outstanding-platform.png` - 傑出網上批發平台

### Hero 背景 (public/images/hero/)

- [ ] `hero-background.jpg` - Hero 區塊背景圖片 (建議 1920x1080)

### 服務相關圖片 (public/images/services/)

- [ ] `dongdaemun-desktop.jpg` - 東大門批發網站桌面版
- [ ] `dongdaemun-mobile.jpg` - 東大門批發網站行動版
- [ ] `service-fee.jpg` - 服務收費說明圖
- [ ] `wholesale-system.jpg` - 批發網站系統展示

### 客戶見證圖片 (public/images/testimonials/)

- [ ] `testimonial-1.jpg` - 客戶見證圖片 1
- [ ] `testimonial-2.jpg` - 客戶見證圖片 2
- [ ] `testimonial-3.jpg` - 客戶見證圖片 3
- [ ] `testimonial-4.jpg` - 客戶見證圖片 4

## 圖片優化建議

1. **壓縮圖片**: 使用工具如 TinyPNG 或 ImageOptim 壓縮圖片
2. **格式選擇**:
   - Logo: PNG (透明背景)
   - 照片: JPG (較小檔案)
   - 圖標: SVG (可縮放)
3. **尺寸建議**:
   - Logo: 300x150px 或更大
   - Hero 背景: 1920x1080px
   - 服務圖片: 1200x675px
   - 獎項圖片: 200x200px

## 更新組件中的圖片路徑

圖片下載後，組件會自動使用相對路徑載入圖片。如果圖片不存在，會顯示佔位符。

## 驗證圖片

1. 啟動開發服務器: `npm run dev`
2. 訪問網站查看圖片是否正確顯示
3. 檢查瀏覽器控制台是否有圖片載入錯誤

## 注意事項

- 確保圖片檔案名稱與組件中配置的路徑一致
- 圖片路徑區分大小寫
- 建議使用英文檔名，避免特殊字符
- 部署前檢查所有圖片是否已正確放置



