import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://stargazers.club",
  integrations: [icon(), sitemap()],
  output: "hybrid",
  adapter: netlify(),
  prefetch: {
    prefetchAll: true,
  }
});