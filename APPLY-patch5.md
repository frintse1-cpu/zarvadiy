# Patch 5 - Gift Collection landing (/gift)
Copy-Item -Recurse -Force .\patch5\* .   (from the project root, after Expand-Archive)
Remove-Item -Recurse -Force .next
npm run lint ; npm run build ; npm run dev

Open: http://localhost:3000/gift  and  http://localhost:3000/gift?utm_source=exhibition&utm_medium=qr
QR files are in qr-assets/ (move them out of the project, e.g. to Documents\zarvadiy-print).
Add your photos/videos: see src/lib/giftMedia.ts (files go in public/gift/).
