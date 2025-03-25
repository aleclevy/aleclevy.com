import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
export default defineConfig({
   vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://aleclevy.github.io',
  base: '/aleclevy.com',
  compressHTML: true,
  integrations: [sitemap()]
});