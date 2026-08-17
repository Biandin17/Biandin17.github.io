import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://steelheadsevents.ch',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return /^\/(it|fr|en)\//.test(pathname);
      }
    })
  ]
});
