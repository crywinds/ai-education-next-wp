# 合作伙伴圖片目錄

## 說明

此目錄用於存放合作伙伴的 Logo 圖片。

## 圖片要求

- **格式**: PNG、JPG 或 SVG（推薦 PNG 透明背景）
- **尺寸**: 建議 300x150px 或更大（保持寬高比）
- **檔案大小**: 建議小於 200KB
- **背景**: 推薦使用透明背景（PNG）

## 已配置的合作伙伴圖片

請將以下圖片放置在此目錄：

1. `hsbc-logo.png` - 香港上海滙豐銀行 Logo
2. `shopage-logo.png` - SHOPAGE Logo
3. `sfexpress-logo.png` - 順豐速遞 Logo
4. `metro-radio-logo.png` - 新城電台 Logo
5. `hkcc-logo.png` - 香港電腦商會 Logo

## 如何添加新合作伙伴

1. 將 Logo 圖片放入此目錄
2. 編輯 `components/PartnersSection.tsx`
3. 在 `partners` 數組中添加新的合作伙伴對象：

```typescript
{
  name: '合作伙伴名稱',
  logo: '/images/partners/logo-filename.png',
  alt: 'Logo 描述',
  url: 'https://partner-website.com',
}
```

## 圖片來源

您可以從 koraeweb.com 下載相關圖片，或從合作伙伴官方網站獲取 Logo。


