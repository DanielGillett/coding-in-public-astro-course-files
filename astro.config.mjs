import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon({
    include: {
      // Include only the ph icons in the bundle
      ph: ['apple-logo-fill'],
      // Include all `uis` icons
      // uis: ['*']
    }
  }), react()],
  css: {
    // You might need to adjust the path depending on your project structure
    global: `
      @import 'tailwindcss/base';
      @import 'tailwindcss/components';
      @import 'tailwindcss/utilities';
    `
  }
});