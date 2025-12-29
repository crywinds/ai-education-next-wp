# 清理舊的頁面文件，只保留 [locale] 下的版本

$oldPages = @('about', 'awards', 'blog', 'careers', 'contact', 'courses', 'media', 'pricing', 'resources', 'services', 'wholesale')

foreach ($page in $oldPages) {
    $path = "app\$page"
    if (Test-Path $path) {
        Write-Host "Removing $path..."
        Remove-Item -Path $path -Recurse -Force
        Write-Host "Removed $path"
    }
}

Write-Host "Cleanup complete!"

