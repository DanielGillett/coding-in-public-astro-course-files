import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon({
    include: {
      // Include only the ph icons in the bundle
      ph: ['apple-logo-fill'],
      "radix-icons": ['check', 'cross-2']
    }
  }), react(), mdx()],
  css: {
    // You might need to adjust the path depending on your project structure
    global: `
      @import 'tailwindcss/base';
      @import 'tailwindcss/components';
      @import 'tailwindcss/utilities';
    `
  }
});