# Move pages to [locale] directory

$pages = @('about', 'awards', 'blog', 'careers', 'contact', 'courses', 'media', 'pricing', 'resources', 'services', 'wholesale')

foreach ($page in $pages) {
    $sourcePath = "app\$page"
    $destPath = "app\[locale]\$page"
    
    if (Test-Path $sourcePath) {
        if (Test-Path $destPath) {
            Write-Host "Warning: $destPath already exists, skipping $sourcePath"
        } else {
            try {
                Copy-Item -Path $sourcePath -Destination $destPath -Recurse -Force
                Write-Host "Copied $sourcePath to $destPath"
            } catch {
                Write-Host "Failed to copy $sourcePath : $_"
            }
        }
    } else {
        Write-Host "Skipping: $sourcePath does not exist"
    }
}

Write-Host "Done! All pages have been moved to app\[locale] directory"
