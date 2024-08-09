import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport"
  },
  integrations: [tailwind(), db(), mdx(), icon()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});