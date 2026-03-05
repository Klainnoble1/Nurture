# Copy gallery images from Cursor assets into public/gallery
# Run from project root: .\scripts\copy-gallery-images.ps1

$assetsBase = "$env:USERPROFILE\.cursor\projects\c-Users-Adekunle-s-PC-Downloads-nurture-nest-nextjs-nurture-nest-nextjs\assets"
$destDir = Join-Path $PSScriptRoot "..\public\gallery"

if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir -Force | Out-Null }

$pattern = "*images_rs_w_719_h_959*.png"
$files = Get-ChildItem -Path $assetsBase -Recurse -Filter $pattern -ErrorAction SilentlyContinue | Sort-Object Name

if ($files.Count -eq 0) {
  Write-Host "No gallery images found. Copy your 9 images into public\gallery as gallery-1.png ... gallery-9.png"
  exit 1
}

$i = 1
foreach ($f in $files) {
  if ($i -gt 9) { break }
  $dest = Join-Path $destDir "gallery-$i.png"
  Copy-Item $f.FullName $dest -Force
  Write-Host "Copied gallery-$i.png"
  $i++
}
Write-Host "Done. Gallery images are in public\gallery"
