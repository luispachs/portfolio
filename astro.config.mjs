// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
  site:'https://luispachs.github.io',
  base:'portfolio',
  build:{
    assets: "assets"
  },

});