import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { renderPage } from 'vite-plugin-ssr'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function prerender() {
  const baseUrl = '/'
  const outDir = path.join(__dirname, 'dist')
  const result = await renderPage({ url: baseUrl })
  
  const outFile = path.join(outDir, 'index.html')
  fs.writeFileSync(outFile, result.documentHtml)
}

prerender()