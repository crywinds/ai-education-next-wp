# WordPress 課程與文章分離設置指南

## 當前狀態

目前課程和文章都從同一個 WordPress 數據源讀取，需要將它們完全分開。

## 推薦方案：使用 Custom Post Type（推薦）

這是**最佳方案**，可以完全分離課程和文章的數據結構。

### WordPress 端設置

#### 方法一：使用 Custom Post Type UI 插件（最簡單）

1. **安裝插件**
   - 在 WordPress 後台，進入 **插件 > 安裝插件**
   - 搜索 "Custom Post Type UI"
   - 安裝並激活

2. **創建 Course Post Type**
   - 進入 **CPT UI > Add/Edit Post Types**
   - 填寫以下資訊：
     - **Post Type Slug**: `course`
     - **Plural Label**: `Courses` 或 `課程`
     - **Singular Label**: `Course` 或 `課程`
   - **重要**：找到 "Show in REST API" 選項，選擇 **True**
   - 點擊 "Add Post Type" 保存

3. **創建 Course Category Taxonomy（可選但推薦）**
   - 進入 **CPT UI > Add/Edit Taxonomies**
   - 填寫以下資訊：
     - **Taxonomy Slug**: `course_category`
     - **Plural Label**: `Course Categories` 或 `課程分類`
     - **Singular Label**: `Course Category` 或 `課程分類`
     - **Attach to Post Type**: 選擇 `course`
     - **Show in REST API**: 選擇 **True**
   - 點擊 "Add Taxonomy" 保存

#### 方法二：使用代碼方式

在 WordPress 主題的 `functions.php` 文件中添加：

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
        'menu_position'       => null,
        'menu_icon'           => 'dashicons-welcome-learn-more',
        'supports'            => array('title', 'editor', 'thumbnail', 'excerpt'),
        'show_in_rest'        => true, // 重要：啟用 REST API
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
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'course-category'),
        'show_in_rest'      => true, // 重要：啟用 REST API
    );

    register_taxonomy('course_category', array('course'), $args);
}
add_action('init', 'register_course_category_taxonomy');
```

### Next.js 端設置（已完成）

代碼已經更新為：
- **文章頁面**：只從 `/wp-json/wp/v2/posts` 獲取（標準 WordPress 文章）
- **課程頁面**：只從 `/wp-json/wp/v2/course` 獲取（Course Custom Post Type）

## 替代方案：使用分類過濾（不推薦，但可行）

如果您暫時無法設置 Custom Post Type，可以使用分類來區分：

### WordPress 端設置

1. 在 WordPress 後台創建兩個分類：
   - **"課程"** 分類（用於課程文章）
   - **"文章"** 或使用默認分類（用於普通文章）

2. 為每篇文章分配對應的分類

### Next.js 端設置

需要修改 `app/courses/page.tsx`：

```typescript
// 獲取分類 ID（需要手動設置）
const COURSE_CATEGORY_ID = 2 // 替換為您的課程分類 ID

async function getCourses(): Promise<Course[]> {
  try {
    // 只獲取特定分類的文章作為課程
    const posts = await getPosts({ 
      categories: COURSE_CATEGORY_ID, 
      fetchAll: true 
    })
    return posts.map(transformPostToCourse)
  } catch (error) {
    console.error('Error fetching courses:', error)
    return []
  }
}
```

要查找分類 ID：
1. 訪問 `https://your-wordpress-site.com/wp-json/wp/v2/categories`
2. 找到您的課程分類，記下其 `id`

## 測試

設置完成後，測試 REST API 端點：

### 測試課程 API

訪問：
```
https://your-wordpress-site.com/wp-json/wp/v2/course
```

如果看到 JSON 數據，說明設置成功！

### 測試文章 API

訪問：
```
https://your-wordpress-site.com/wp-json/wp/v2/posts
```

這應該只返回標準文章，不包含課程。

## 數據結構對比

### 使用 Custom Post Type（推薦）

```
WordPress 後台
├── 文章（Posts）
│   ├── 文章 1
│   ├── 文章 2
│   └── ...
└── 課程（Course CPT）
    ├── 課程 1
    ├── 課程 2
    └── ...

REST API
├── /wp-json/wp/v2/posts (只包含文章)
└── /wp-json/wp/v2/course (只包含課程)
```

### 使用分類過濾（不推薦）

```
WordPress 後台
└── 文章（Posts）
    ├── 分類：課程
    │   ├── 課程文章 1
    │   └── 課程文章 2
    └── 分類：文章
        ├── 普通文章 1
        └── 普通文章 2

REST API
└── /wp-json/wp/v2/posts
    ├── 所有文章（包括課程和普通文章）
    └── 需要通過分類 ID 過濾
```

## 優勢對比

| 特性 | Custom Post Type | 分類過濾 |
|------|-----------------|----------|
| 數據分離 | ✅ 完全分離 | ❌ 共享數據表 |
| 後台管理 | ✅ 獨立的菜單項 | ❌ 混在一起 |
| API 端點 | ✅ 獨立端點 | ❌ 需要過濾 |
| 自訂欄位 | ✅ 容易擴展 | ⚠️ 需要額外設置 |
| 設置複雜度 | ⚠️ 中等 | ✅ 簡單 |
| 推薦度 | ⭐⭐⭐⭐⭐ | ⭐⭐ |

## 當前代碼狀態

✅ 文章頁面：只讀取標準 WordPress posts
✅ 課程頁面：只讀取 Course Custom Post Type
✅ 已移除回退邏輯，確保數據完全分離

## 下一步

1. 在 WordPress 中設置 Course Custom Post Type
2. 在 Course 中添加一些測試課程
3. 訪問 `/courses` 頁面確認課程顯示正常
4. 訪問 `/blog` 頁面確認只顯示文章，不包含課程


