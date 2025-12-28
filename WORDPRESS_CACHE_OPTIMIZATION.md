# WordPress 數據緩存優化指南

## 問題說明

WordPress REST API 有一些限制需要注意：

1. **每頁數量限制**：默認每頁最多 100 條記錄（可在 WordPress 服務器配置中調整）
2. **性能問題**：每次訪問頁面都重新獲取數據會影響性能
3. **數據一致性**：需要平衡數據新鮮度和性能

## 解決方案

### 1. Next.js 緩存機制（已實現）

我們已經為課程和文章頁面添加了 `revalidate` 配置：

```typescript
export const revalidate = 60 // 60秒後重新驗證
```

這意味著：
- 頁面會被緩存，60秒內訪問不會重新獲取數據
- 60秒後，Next.js 會在背景重新驗證數據
- 如果數據有變化，會更新緩存
- 如果數據沒有變化，繼續使用緩存

### 2. 自動分頁獲取（已實現）

WordPress REST API 限制每頁最多 100 條記錄。我們已經實現了自動分頁功能：

```typescript
// 獲取所有文章（自動處理分頁）
const posts = await getPosts({ fetchAll: true })

// 獲取所有課程（自動處理分頁）
const courses = await getCoursesFromWP({ fetchAll: true })
```

這會自動處理多頁數據，無需手動指定頁碼。

### 3. 自定義 revalidate 時間

您可以根據需要調整重新驗證時間：

```typescript
// 在 app/courses/page.tsx 或 app/blog/page.tsx 中

// 1分鐘重新驗證（適合經常更新的內容）
export const revalidate = 60

// 5分鐘重新驗證（適合不經常更新的內容）
export const revalidate = 300

// 1小時重新驗證（適合很少更新的內容）
export const revalidate = 3600

// 24小時重新驗證（適合幾乎不更新的內容）
export const revalidate = 86400

// 永久緩存（只在構建時獲取一次，適合靜態內容）
export const revalidate = false
```

### 4. 手動重新驗證（On-Demand Revalidation）

如果需要在 WordPress 更新內容時立即刷新 Next.js 緩存，可以設置 Webhook：

1. **創建 API Route**：`app/api/revalidate/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  
  // 驗證 secret（保護您的 API）
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
  }

  try {
    // 重新驗證特定路徑
    revalidatePath('/courses')
    revalidatePath('/blog')
    
    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}
```

2. **在 WordPress 中設置 Webhook**：
   - 安裝插件（如 "REST API - Filter Fields"）
   - 或在 `functions.php` 中添加：

```php
// WordPress functions.php
add_action('save_post', 'invalidate_nextjs_cache');

function invalidate_nextjs_cache($post_id) {
    // 只處理發布的文章
    if (get_post_status($post_id) !== 'publish') {
        return;
    }
    
    $secret = 'your-secret-key-here'; // 設置與 .env.local 中相同的密鑰
    $url = 'https://your-nextjs-site.com/api/revalidate?secret=' . $secret;
    
    wp_remote_post($url, array(
        'timeout' => 5,
        'blocking' => false,
    ));
}
```

3. **設置環境變數**：
   ```env
   REVALIDATE_SECRET=your-secret-key-here
   ```

## WordPress 服務器配置（可選）

如果您有服務器訪問權限，可以調整 WordPress 的每頁限制：

在 `wp-config.php` 中添加：

```php
// 增加 REST API 每頁最大數量（默認100）
add_filter('rest_post_collection_params', function($params) {
    $params['per_page']['maximum'] = 200; // 增加到200
    return $params;
});
```

## 性能建議

1. **使用分類過濾**：如果課程/文章數量很大，建議使用分類來過濾，減少獲取的數據量

```typescript
// 只獲取特定分類的課程
const courses = await getCoursesFromWP({ 
  categories: COURSE_CATEGORY_ID,
  fetchAll: true 
})
```

2. **分頁顯示**：對於列表頁面，考慮使用分頁而不是一次顯示所有內容

3. **圖片優化**：使用 Next.js Image 組件自動優化圖片

4. **監控 API 性能**：如果 WordPress 服務器響應慢，考慮：
   - 使用 CDN
   - 在 WordPress 中安裝緩存插件
   - 考慮使用 GraphQL（通過 WPGraphQL 插件）

## 當前配置

- ✅ 課程頁面：自動獲取所有課程，60秒緩存
- ✅ 文章頁面：獲取前12篇文章，60秒緩存
- ✅ 自動分頁處理：超過100條記錄時自動處理
- ⚠️ 手動重新驗證：需要額外設置（可選）

## 常見問題

**Q: 為什麼還是每次都重新獲取數據？**
A: 檢查是否在開發模式（`npm run dev`）。開發模式下緩存會被禁用。生產環境（`npm run build && npm start`）才會啟用緩存。

**Q: 如何知道緩存是否生效？**
A: 在生產環境中，第一次訪問會獲取數據，之後的訪問會使用緩存。查看服務器日誌可以確認。

**Q: 數據更新後多久會反映到網站？**
A: 默認60秒。如果需要立即更新，需要設置手動重新驗證（On-Demand Revalidation）。







