# Run from the project root (C:\Users\User\Documents\zarvadiy) AFTER copying the update files over the project.
# Removes OLD pages/files that still depend on the removed "holding" translations and would break `npm run build`.
$targets = @(
  'src\app\agro',
  'src\app\industries',
  'src\app\markets',
  'src\app\industrial\products',
  'src\app\page.module.css',
  'src\components\WorldMap.tsx',
  'public\docs',
  'Bash'
)
foreach ($t in $targets) {
  if (Test-Path $t) { Remove-Item $t -Recurse -Force; Write-Host "removed $t" } else { Write-Host "skip (not found) $t" }
}
Write-Host "Done. Now run: npm install; npm run build; npm run lint"
