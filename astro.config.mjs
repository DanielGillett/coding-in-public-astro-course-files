import { defineConfig } from "astro/config";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  site: "https://astro-course-files-dg.netlify.app/",
  integrations: [icon(), sitemap()],
  output: "hybrid",
  adapter: netlify(),
});
