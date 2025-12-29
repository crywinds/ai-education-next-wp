# WordPress Course Custom Post Type 完整設置指南

本指南將詳細說明如何在 WordPress 中設置 Course Custom Post Type，以便與 Next.js 前端整合。

## 📋 目錄

1. [方法一：使用插件（推薦，最簡單）](#方法一使用插件推薦最簡單)
2. [方法二：使用代碼方式（進階）](#方法二使用代碼方式進階)
3. [添加自訂欄位（可選）](#添加自訂欄位可選)
4. [測試設置](#測試設置)
5. [常見問題排查](#常見問題排查)
6. [完整代碼參考](#完整代碼參考)

---

## 方法一：使用插件（推薦，最簡單）

### 步驟 1：安裝 Custom Post Type UI 插件

1. **登入 WordPress 後台**
   - 訪問：`https://your-wordpress-site.com/wp-admin`
   - 使用管理員帳號登入

2. **進入插件管理頁面**
   - 在左側選單找到 **「插件」** (Plugins)
   - 點擊 **「安裝插件」** (Add New)

3. **搜索插件**
   - 在搜索框中輸入：`Custom Post Type UI`
   - 或訪問：https://wordpress.org/plugins/custom-post-type-ui/

4. **安裝並激活**
   - 找到 **「Custom Post Type UI」** 插件
   - 點擊 **「立即安裝」** (Install Now)
   - 安裝完成後，點擊 **「啟用」** (Activate)

### 步驟 2：創建 Course Post Type

1. **進入 CPT UI 設置頁面**
   - 安裝激活後，左側選單會出現 **「CPT UI」** 選項
   - 點擊 **「CPT UI」** → **「Add/Edit Post Types」**

2. **填寫 Post Type 資訊**
   
   在表單中填寫以下內容：

   **基本設置（Required Settings）：**
   - **Post Type Slug**: `course`
     - ⚠️ **重要**：必須是 `course`（小寫，無空格）
     - 這是系統識別符，Next.js 會通過此名稱訪問 API
  
   - **Plural Label**: `課程` 或 `Courses`
     - 顯示在後台選單中的複數名稱
  
   - **Singular Label**: `課程` 或 `Course`
     - 顯示在後台選單中的單數名稱

   **進階設置（Advanced Settings）：**
   
   找到以下選項並設置：
   
   - ✅ **Show in REST API**: 選擇 **True** 或勾選
     - ⚠️ **非常重要**：必須啟用此選項，否則 Next.js 無法通過 API 訪問課程數據
   
   - **Public**: 建議選擇 **True**
   
   - **Show UI**: 選擇 **True**（在後台顯示管理界面）
   
   - **Show in Menu**: 選擇 **True**（在左側選單顯示）
   
   - **Supports**: 至少勾選以下選項：
     - ✅ Title（標題）
     - ✅ Editor（內容編輯器）
     - ✅ Thumbnail（特色圖片）
     - ✅ Excerpt（摘要）
   
   - **Has Archive**: 選擇 **True**（啟用歸檔頁面）

3. **保存設置**
   - 滾動到頁面底部
   - 點擊 **「Add Post Type」** 按鈕
   - 等待保存完成

4. **驗證設置**
   - 保存後，刷新 WordPress 後台
   - 左側選單應該會出現 **「課程」** (或您設置的名稱) 選項
   - 如果看到此選單，說明 Post Type 創建成功！

### 步驟 3：創建 Course Category Taxonomy（可選但推薦）

Taxonomy（分類法）用於為課程添加分類，例如「初級課程」、「高級課程」等。

1. **進入 Taxonomy 設置**
   - 在左側選單，點擊 **「CPT UI」** → **「Add/Edit Taxonomies」**

2. **填寫 Taxonomy 資訊**
   
   **基本設置：**
   - **Taxonomy Slug**: `course_category`
     - ⚠️ **注意**：建議使用此名稱，或根據需求自訂
   
   - **Plural Label**: `課程分類` 或 `Course Categories`
   
   - **Singular Label**: `課程分類` 或 `Course Category`
   
   - **Attach to Post Type**: 
     - ✅ 勾選 **「course」**
     - 這會將此分類法關聯到 Course Post Type

   **進階設置：**
   
   - ✅ **Show in REST API**: 選擇 **True** 或勾選
     - ⚠️ **重要**：必須啟用，否則分類無法通過 API 訪問
   
   - **Hierarchical**: 建議選擇 **True**（支持父子分類）
   
   - **Show UI**: 選擇 **True**
   
   - **Show Admin Column**: 建議選擇 **True**（在課程列表中顯示分類欄）

3. **保存設置**
   - 點擊 **「Add Taxonomy」** 按鈕
   - 等待保存完成

4. **驗證設置**
   - 進入 **「課程」** → **「新增課程」**
   - 在右側欄應該能看到 **「課程分類」** 選項

---

## 方法二：使用代碼方式（進階）

如果您熟悉 PHP 代碼，或者希望代碼跟隨主題一起，可以使用此方法。

### 步驟 1：編輯主題的 functions.php

1. **進入主題編輯器**
   - 在 WordPress 後台，點擊 **「外觀」** (Appearance) → **「主題編輯器」** (Theme Editor)
   - ⚠️ **注意**：編輯主題文件前請先備份！

2. **選擇 functions.php 文件**
   - 在右側文件列表中，選擇 **「functions.php」**
   - 如果看不到此文件，可能需要通過 FTP 訪問

3. **添加代碼**
   
   在文件末尾（在 `?>` 之前，如果有的話）添加以下代碼：

```php
<?php
// 註冊 Course Custom Post Type
function register_course_post_type() {
    $labels = array(
        'name'               => '課程',
        'singular_name'      => '課程',
        'menu_name'          => '課程',
        'add_new'            => '新增課程',
        'add_new_item'       => '新增課程',
        'edit_item'          => '編輯課程',
        'new_item'           => '新課程',
        'view_item'          => '查看課程',
        'search_items'       => '搜尋課程',
        'not_found'          => '找不到課程',
        'not_found_in_trash' => '回收桶中沒有課程',
        'all_items'          => '所有課程',
    );

    $args = array(
        'labels'              => $labels,
        'public'              => true,
        'publicly_queryable'  => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'query_var'           => true,
        'rewrite'             => array('slug' => 'course'),
        'capability_type'     => 'post',
        'has_archive'         => true,
        'hierarchical'        => false,
        'menu_position'       => 5, // 設置選單位置（數字越小越靠上）
        'menu_icon'           => 'dashicons-welcome-learn-more', // WordPress 圖標
        'supports'            => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'show_in_rest'        => true, // ⚠️ 重要：啟用 REST API
    );

    register_post_type('course', $args);
}
add_action('init', 'register_course_post_type');

// 註冊 Course Category Taxonomy
function register_course_category_taxonomy() {
    $labels = array(
        'name'              => '課程分類',
        'singular_name'     => '課程分類',
        'search_items'      => '搜尋分類',
        'all_items'         => '所有分類',
        'edit_item'         => '編輯分類',
        'update_item'       => '更新分類',
        'add_new_item'      => '新增分類',
        'new_item_name'     => '新分類名稱',
        'menu_name'         => '分類',
    );

    $args = array(
        'hierarchical'      => true, // 支持父子分類
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'course-category'),
        'show_in_rest'      => true, // ⚠️ 重要：啟用 REST API
    );

    register_taxonomy('course_category', array('course'), $args);
}
add_action('init', 'register_course_category_taxonomy');
```

4. **保存文件**
   - 點擊 **「更新文件」** (Update File) 按鈕
   - 如果通過 FTP，上傳修改後的文件

5. **驗證設置**
   - 刷新 WordPress 後台
   - 左側選單應該會出現 **「課程」** 選項

### 方法二的優缺點

**優點：**
- ✅ 代碼跟隨主題，不需要依賴插件
- ✅ 更容易版本控制和備份
- ✅ 不會因為插件停用而丟失設置

**缺點：**
- ❌ 需要編輯主題文件（可能因主題更新而丟失）
- ❌ 需要 PHP 知識
- ⚠️ 建議使用子主題，避免主題更新時丟失修改

**使用子主題的建議：**
如果您要使用代碼方式，強烈建議創建子主題（Child Theme），這樣即使父主題更新，您的修改也不會丟失。

---

## 添加自訂欄位（可選）

如果您的課程需要額外的欄位（如時長、難度等級、價格等），可以使用 Advanced Custom Fields (ACF) 插件。

### 步驟 1：安裝 ACF 插件

1. 在 WordPress 後台，進入 **「插件」** → **「安裝插件」**
2. 搜索 **「Advanced Custom Fields」**
3. 安裝並激活插件

### 步驟 2：創建欄位組

1. **進入 ACF 設置**
   - 左側選單會出現 **「自訂欄位」** (Custom Fields)
   - 點擊 **「新增」** (Add New)

2. **設置欄位組名稱**
   - 例如：「課程詳細資訊」或 "Course Details"

3. **添加欄位**
   
   點擊 **「+ 新增欄位」** (Add Field) 添加以下欄位：

   **欄位 1：課程時長 (Duration)**
   - 欄位標籤：`課程時長` 或 `Duration`
   - 欄位名稱：`duration` 或 `course_duration`
   - 欄位類型：`文字` (Text)
   
   **欄位 2：難度等級 (Level)**
   - 欄位標籤：`難度等級` 或 `Level`
   - 欄位名稱：`level` 或 `course_level`
   - 欄位類型：`選擇` (Select)
   - 選項：
     ```
     初級 : 初級
     中級 : 中級
     高級 : 高級
     ```
   
   **欄位 3：價格 (Price)**
   - 欄位標籤：`價格` 或 `Price`
   - 欄位名稱：`price` 或 `course_price`
   - 欄位類型：`數字` (Number)

4. **設置位置規則**
   - 在 **「位置」** (Location) 區塊
   - 選擇 **「文章類型」** (Post Type) → **「等於」** (is equal to) → **「課程」** (course)

5. **保存欄位組**
   - 點擊 **「發布」** (Publish) 或 **「更新」** (Update)

### 步驟 3：驗證欄位

1. 進入 **「課程」** → **「新增課程」**
2. 在編輯頁面應該能看到新增的自訂欄位
3. 填寫欄位並發布課程

**注意：** Next.js 代碼會自動從 ACF 欄位中讀取這些數據。欄位名稱可以是 `duration`/`course_duration`、`level`/`course_level`、`price`/`course_price`（代碼支持多種命名）。

---

## 測試設置

設置完成後，需要測試 Course Custom Post Type 是否正常工作。

### 測試 1：測試 REST API 端點

1. **訪問 API URL**
   
   在瀏覽器中訪問：
   ```
   https://your-wordpress-site.com/wp-json/wp/v2/course
   ```
   
   將 `your-wordpress-site.com` 替換為您的實際 WordPress 網站域名。

2. **預期結果**
   - ✅ **成功**：應該看到 JSON 格式的數據（即使沒有課程，也會是空數組 `[]`）
   - ❌ **失敗**：如果看到 404 錯誤，說明 REST API 未啟用或 Post Type 未正確註冊

3. **如果看到空數組**
   - 這是正常的！說明 API 正常工作，只是還沒有添加課程
   - 繼續進行下一步測試

### 測試 2：添加測試課程

1. **創建測試課程**
   - 在 WordPress 後台，點擊 **「課程」** → **「新增」**
   - 填寫：
     - 標題：例如「測試課程」
     - 內容：任意內容
     - 摘要：簡短描述
     - 特色圖片：上傳一張圖片（可選）
   - 點擊 **「發布」**

2. **再次測試 API**
   - 重新訪問：`https://your-wordpress-site.com/wp-json/wp/v2/course`
   - 應該能看到剛創建的課程數據（JSON 格式）

3. **測試單個課程 API**
   - 訪問：`https://your-wordpress-site.com/wp-json/wp/v2/course?slug=測試課程的slug`
   - 應該能看到單個課程的詳細數據

### 測試 3：在 Next.js 中測試

1. **確保環境變數已設置**
   - 檢查 `.env.local` 文件
   - 確認 `NEXT_PUBLIC_WP_API_URL` 已正確設置

2. **啟動 Next.js 開發服務器**
   ```bash
   npm run dev
   ```

3. **訪問課程頁面**
   - 打開瀏覽器，訪問：`http://localhost:5200/courses`
   - 應該能看到剛才在 WordPress 中創建的課程

4. **檢查控制台**
   - 打開瀏覽器開發者工具（F12）
   - 查看 Console 是否有錯誤訊息
   - 查看 Network 標籤，確認 API 請求是否成功

---

## 常見問題排查

### 問題 1：API 返回 404 錯誤

**可能原因：**
- REST API 未啟用
- Post Type Slug 不正確
- 永久連結設置問題

**解決方法：**
1. 確認 Post Type 設置中 **「Show in REST API」** 已啟用
2. 確認 Post Type Slug 為 `course`（小寫）
3. 進入 **「設置」** → **「永久連結」**，點擊 **「保存更改」**（無需修改設置）
4. 清除 WordPress 快取（如果使用了快取插件）
5. 如果使用插件方式，嘗試停用並重新激活 CPT UI 插件

### 問題 2：後台看不到「課程」選單

**可能原因：**
- 插件未正確激活
- 代碼有語法錯誤
- 權限問題

**解決方法：**
1. 檢查插件是否已激活
2. 如果使用代碼方式，檢查 PHP 語法是否正確
3. 確認當前用戶有管理員權限
4. 查看 WordPress 錯誤日誌（通常在 `wp-content/debug.log`）

### 問題 3：Next.js 無法獲取課程數據

**可能原因：**
- 環境變數未正確設置
- CORS 問題
- API URL 不正確

**解決方法：**
1. 檢查 `.env.local` 文件中的 `NEXT_PUBLIC_WP_API_URL` 是否正確
2. 確認 URL 包含 `/wp-json/wp/v2`
3. 在瀏覽器中直接訪問 API URL，確認可以訪問
4. 檢查 CORS 設置（如果 Next.js 和 WordPress 在不同域名）
5. 重新啟動 Next.js 開發服務器（環境變數更改後需要重啟）

### 問題 4：分類無法通過 API 訪問

**可能原因：**
- Taxonomy 的 REST API 未啟用
- Taxonomy Slug 不正確

**解決方法：**
1. 確認 Taxonomy 設置中 **「Show in REST API」** 已啟用
2. 檢查 Taxonomy Slug 是否正確
3. 測試分類 API：`https://your-wordpress-site.com/wp-json/wp/v2/course_category`

### 問題 5：自訂欄位無法顯示

**可能原因：**
- ACF 欄位名稱不匹配
- ACF 插件未安裝或未激活
- 欄位組位置規則未正確設置

**解決方法：**
1. 確認 ACF 插件已安裝並激活
2. 檢查欄位名稱是否與代碼中一致（`duration`、`level`、`price`）
3. 確認欄位組的位置規則已設置為 Course Post Type
4. 檢查欄位是否已正確保存到課程中

---

## 完整代碼參考

### 使用插件方式

使用 CPT UI 插件時，插件會自動生成代碼。如果需要遷移到代碼方式，可以從插件導出設置：

1. 進入 **「CPT UI」** → **「工具」** (Tools)
2. 點擊 **「取得代碼」** (Get Code)
3. 複製生成的代碼到 `functions.php`

### 使用代碼方式（完整版本）

如果您想使用代碼方式，以下是包含所有功能的完整代碼：

```php
<?php
/**
 * 註冊 Course Custom Post Type
 * 用於 Next.js 前端顯示課程
 */

// 註冊 Course Custom Post Type
function register_course_post_type() {
    $labels = array(
        'name'               => _x('課程', 'post type general name', 'textdomain'),
        'singular_name'      => _x('課程', 'post type singular name', 'textdomain'),
        'menu_name'          => _x('課程', 'admin menu', 'textdomain'),
        'name_admin_bar'     => _x('課程', 'add new on admin bar', 'textdomain'),
        'add_new'            => _x('新增課程', 'course', 'textdomain'),
        'add_new_item'       => __('新增課程', 'textdomain'),
        'new_item'           => __('新課程', 'textdomain'),
        'edit_item'          => __('編輯課程', 'textdomain'),
        'view_item'          => __('查看課程', 'textdomain'),
        'all_items'          => __('所有課程', 'textdomain'),
        'search_items'       => __('搜尋課程', 'textdomain'),
        'parent_item_colon'  => __('上級課程:', 'textdomain'),
        'not_found'          => __('找不到課程', 'textdomain'),
        'not_found_in_trash' => __('回收桶中沒有課程', 'textdomain')
    );

    $args = array(
        'labels'             => $labels,
        'description'        => __('課程管理', 'textdomain'),
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'course'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-welcome-learn-more',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'show_in_rest'       => true, // ⚠️ 重要：啟用 REST API
        'rest_base'          => 'course', // REST API 端點名稱
        'rest_controller_class' => 'WP_REST_Posts_Controller',
    );

    register_post_type('course', $args);
}
add_action('init', 'register_course_post_type', 0);

// 註冊 Course Category Taxonomy
function register_course_category_taxonomy() {
    $labels = array(
        'name'              => _x('課程分類', 'taxonomy general name', 'textdomain'),
        'singular_name'     => _x('課程分類', 'taxonomy singular name', 'textdomain'),
        'search_items'      => __('搜尋分類', 'textdomain'),
        'all_items'         => __('所有分類', 'textdomain'),
        'parent_item'       => __('上級分類', 'textdomain'),
        'parent_item_colon' => __('上級分類:', 'textdomain'),
        'edit_item'         => __('編輯分類', 'textdomain'),
        'update_item'       => __('更新分類', 'textdomain'),
        'add_new_item'      => __('新增分類', 'textdomain'),
        'new_item_name'     => __('新分類名稱', 'textdomain'),
        'menu_name'         => __('分類', 'textdomain'),
    );

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'course-category'),
        'show_in_rest'      => true, // ⚠️ 重要：啟用 REST API
        'rest_base'         => 'course_category', // REST API 端點名稱
    );

    register_taxonomy('course_category', array('course'), $args);
}
add_action('init', 'register_course_category_taxonomy', 0);

// 刷新永久連結（可選，首次設置時執行一次即可）
function course_rewrite_flush() {
    register_course_post_type();
    flush_rewrite_rules();
}
// 取消註釋下面這行，訪問網站一次後再註釋掉
// add_action('after_switch_theme', 'course_rewrite_flush');
```

---

## 下一步

設置完成後，您可以：

1. ✅ 在 WordPress 後台創建和管理課程
2. ✅ 在 Next.js 前端顯示課程列表
3. ✅ 為課程添加分類和標籤
4. ✅ 使用 ACF 添加自訂欄位
5. ✅ 通過 REST API 訪問課程數據

## 相關文檔

- [WordPress REST API 文檔](https://developer.wordpress.org/rest-api/)
- [Custom Post Type UI 插件](https://wordpress.org/plugins/custom-post-type-ui/)
- [Advanced Custom Fields 插件](https://www.advancedcustomfields.com/)
- [Next.js 部署指南](./DEPLOYMENT_GUIDE.md)

---

**需要幫助？** 如果遇到問題，請檢查：
1. WordPress 錯誤日誌
2. 瀏覽器控制台錯誤訊息
3. Next.js 終端錯誤訊息
4. API 端點是否可正常訪問



