# 多語系設置說明

## 已完成的工作

1. ✅ 安裝了 `next-intl` 套件
2. ✅ 創建了 i18n 配置文件 (`i18n.ts`)
3. ✅ 創建了 middleware (`middleware.ts`)
4. ✅ 創建了翻譯文件：
   - `messages/zh-TW.json` (繁體中文)
   - `messages/zh-CN.json` (簡體中文)
   - `messages/en.json` (英文)
   - `messages/ja.json` (日文)
5. ✅ 創建了語言切換組件 (`components/LanguageToggle.tsx`)
6. ✅ 更新了 `next.config.js` 以支援 next-intl
7. ✅ 創建了 `app/[locale]/layout.tsx` 和 `app/[locale]/page.tsx`
8. ✅ 在 Header 組件中添加了語言切換器

## 需要完成的工作

由於 Next.js App Router 需要將所有頁面放在 `[locale]` 目錄下，您需要：

### 方法 1：手動移動頁面（推薦）

將以下目錄/文件從 `app/` 移動到 `app/[locale]/`：

```
app/about/          → app/[locale]/about/
app/awards/         → app/[locale]/awards/
app/blog/           → app/[locale]/blog/
app/careers/        → app/[locale]/careers/
app/contact/        → app/[locale]/contact/
app/courses/        → app/[locale]/courses/
app/media/          → app/[locale]/media/
app/pricing/        → app/[locale]/pricing/
app/resources/      → app/[locale]/resources/
app/services/       → app/[locale]/services/
app/wholesale/      → app/[locale]/wholesale/
```

### 方法 2：使用 PowerShell 腳本（Windows）

創建一個 `move-pages.ps1` 文件：

```powershell
$pages = @('about', 'awards', 'blog', 'careers', 'contact', 'courses', 'media', 'pricing', 'resources', 'services', 'wholesale')

foreach ($page in $pages) {
    if (Test-Path "app\$page") {
        Move-Item -Path "app\$page" -Destination "app\[locale]\$page" -Force
        Write-Host "Moved app\$page to app\[locale]\$page"
    }
}
```

然後運行：
```powershell
powershell -ExecutionPolicy Bypass -File move-pages.ps1
```

## 使用方式

1. 訪問網站時，URL 會自動包含語言前綴：
   - 繁體中文：`http://localhost:5200/zh-TW`
   - 簡體中文：`http://localhost:5200/zh-CN`
   - 英文：`http://localhost:5200/en`
   - 日文：`http://localhost:5200/ja`

2. 點擊 Header 右上角的語言切換器可以切換語言

3. 在組件中使用翻譯：
   ```tsx
   'use client'
   import { useTranslations } from 'next-intl'
   
   export default function MyComponent() {
     const t = useTranslations('hero')
     return <h1>{t('title')}</h1>
   }
   ```

## 注意事項

- 根路徑 `/` 會自動重定向到 `/zh-TW`（默認語言）
- 所有內部鏈接需要使用 `usePathname()` 和 `useRouter()` 來處理語言前綴
- 翻譯文件位於 `messages/` 目錄，可以隨時添加更多翻譯內容

