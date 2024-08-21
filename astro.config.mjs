import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport"
  },
  integrations: [tailwind(), db(), mdx(), icon(), react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  devToolbar: {
    enabled: true
  }
});