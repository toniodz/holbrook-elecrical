import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { promises as fs } from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'markdown-loader',
      async transform(code, id) {
        if (!id.endsWith('.md')) return null;
        
        const content = await fs.readFile(id, 'utf-8');
        const [frontmatter, ...contentParts] = content.split('---').filter(Boolean);
        
        const data = frontmatter.split('\n').reduce((acc, line) => {
          const [key, ...values] = line.split(':').map(s => s.trim());
          if (key && values.length) {
            acc[key] = values.join(':');
          }
          return acc;
        }, {});
        
        const markdown = contentParts.join('---').trim();
        
        return `
          export const frontmatter = ${JSON.stringify(data)};
          export const content = ${JSON.stringify(markdown)};
          export default { frontmatter, content };
        `;
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react']
  }
});