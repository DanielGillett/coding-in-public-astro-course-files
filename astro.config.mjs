import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon({
    include: {
      // Include only the ph icons in the bundle
      ph: ['apple-logo-fill'],
      // Include all `uis` icons
      uis: ['*']
    }
  })]
});