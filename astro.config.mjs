import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://Aditya510730.github.io',
  base: '/personal-website/',
  integrations: [mdx(), tailwind()]
});