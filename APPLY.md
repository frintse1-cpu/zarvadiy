# ZARVADIY update — how to apply

1. Unzip this archive and copy its contents over your project folder (allow overwrite).
   It contains: `src/` (all pages/components/translations), `next.config.ts`, `public/images/og-home.jpg`, `cleanup.ps1`.
2. In PowerShell, from the project root:  `powershell -ExecutionPolicy Bypass -File .\cleanup.ps1`
   (deletes old agro/industries/markets/product pages, WorldMap, and the MaxCopper/Xinglu PDFs).
3. `npm install` (only if node_modules is missing), then `npm run build` and `npm run lint`.
4. Paste any build/lint errors back into the chat.

Env needed on Vercel: RESEND_API_KEY (already set).
