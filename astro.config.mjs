import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://biandin17.github.io',
  integrations: [sitemap()]
});