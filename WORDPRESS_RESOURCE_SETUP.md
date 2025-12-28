# WordPress 资源 Custom Post Type 配置指南

本文档说明如何在 WordPress 中设置资源（Resource）自定义文章类型，以便与 Next.js 前端集成。

## 方法一：使用插件（推荐）

### 1. 安装 Custom Post Type UI 插件

1. 在 WordPress 后台，进入 **插件 > 安装插件**
2. 搜索 "Custom Post Type UI"
3. 安装并激活插件

### 2. 创建 Custom Post Type

1. 进入 **CPT UI > Add/Edit Post Types**
2. 在 "Post Type Slug" 中输入：`resource`
3. 在 "Plural Label" 中输入：`Resources`
4. 在 "Singular Label" 中输入：`Resource`
5. **重要**：在 "Show in REST API" 选项中，选择 **True**
6. 点击 "Add Post Type" 保存

### 3. 创建分类法（Taxonomy）

1. 进入 **CPT UI > Add/Edit Taxonomies**
2. 创建分类法：
   - **Taxonomy Slug**: `resource_category`
   - **Plural Label**: `Resource Categories`
   - **Singular Label**: `Resource Category`
   - **Attach to Post Type**: 选择 `resource`
   - **Show in REST API**: 选择 **True**
3. 点击 "Add Taxonomy" 保存

### 4. 添加自定义字段（可选，使用 ACF）

如果需要添加额外字段（如资源链接、图标等），建议安装 Advanced Custom Fields (ACF) 插件：

1. 安装 **Advanced Custom Fields** 插件
2. 创建字段组，包含以下字段：
   - `resource_external_link` (URL) - 外部资源链接
   - `resource_icon` (Text) - 图标（emoji 或图标名称）
   - `resource_category` (Text) - 分类标签

## 方法二：使用代码方式

在 WordPress 主题的 `functions.php` 文件中添加以下代码：

```php
<?php
// 注册 Resource Custom Post Type
function register_resource_post_type() {
    $labels = array(
        'name'               => 'Resources',
        'singular_name'      => 'Resource',
        'menu_name'          => 'Resources',
        'add_new'            => 'Add New',
        'add_new_item'       => 'Add New Resource',
        'edit_item'          => 'Edit Resource',
        'new_item'           => 'New Resource',
        'view_item'          => 'View Resource',
        'search_items'       => 'Search Resources',
        'not_found'          => 'No resources found',
        'not_found_in_trash' => 'No resources found in Trash',
    );

    $args = array(
        'labels'              => $labels,
        'public'              => true,
        'publicly_queryable'  => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'query_var'           => true,
        'rewrite'             => array('slug' => 'resource'),
        'capability_type'     => 'post',
        'has_archive'         => true,
        'hierarchical'        => false,
        'menu_position'       => null,
        'menu_icon'           => 'dashicons-admin-links',
        'supports'            => array('title', 'editor', 'thumbnail', 'excerpt'),
        'show_in_rest'        => true, // 重要：启用 REST API
    );

    register_post_type('resource', $args);
}
add_action('init', 'register_resource_post_type');

// 注册 Resource Category Taxonomy
function register_resource_category_taxonomy() {
    $labels = array(
        'name'              => 'Resource Categories',
        'singular_name'     => 'Resource Category',
        'search_items'      => 'Search Categories',
        'all_items'         => 'All Categories',
        'edit_item'         => 'Edit Category',
        'update_item'       => 'Update Category',
        'add_new_item'      => 'Add New Category',
        'new_item_name'     => 'New Category Name',
        'menu_name'         => 'Categories',
    );

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'resource-category'),
        'show_in_rest'      => true, // 重要：启用 REST API
    );

    register_taxonomy('resource_category', array('resource'), $args);
}
add_action('init', 'register_resource_category_taxonomy');
```

## REST API 端点

设置完成后，WordPress 会自动提供以下 REST API 端点：

- **获取所有资源**: `GET /wp-json/wp/v2/resource`
- **获取单个资源**: `GET /wp-json/wp/v2/resource/{id}`
- **搜索资源**: `GET /wp-json/wp/v2/resource?search=关键词`
- **按分类筛选**: `GET /wp-json/wp/v2/resource?categories=分类ID`
- **获取分类**: `GET /wp-json/wp/v2/resource_category`

## 测试 REST API

在浏览器中访问以下 URL 来测试 API：

```
https://your-wordpress-site.com/wp-json/wp/v2/resource
```

如果看到 JSON 数据，说明配置成功！

## 添加资源内容

1. 在 WordPress 后台，进入 **Resources > Add New**
2. 填写资源信息：
   - **标题**: 资源名称
   - **内容**: 资源描述
   - **摘要**: 简短描述（会在卡片中显示）
   - **分类**: 选择资源分类
   - **特色图片**: 上传资源图标或预览图
3. 如果使用了 ACF，填写自定义字段
4. 发布资源

## Next.js 配置

确保在 `.env.local` 文件中设置了正确的 WordPress API URL：

```env
NEXT_PUBLIC_WP_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
```

现在您的前端应该能够从 WordPress 获取资源数据了！

## 故障排除

### REST API 返回 404

- 检查 Custom Post Type 的 `show_in_rest` 是否设置为 `true`
- 检查 WordPress 永久链接设置，尝试重新保存
- 清除 WordPress 缓存（如果使用了缓存插件）

### 跨域问题

如果遇到 CORS 错误，在 WordPress 的 `functions.php` 中添加：

```php
function add_cors_http_header() {
    header("Access-Control-Allow-Origin: *");
}
add_action('init', 'add_cors_http_header');
```

或者安装 CORS 插件来处理跨域请求。







