// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Site lives under /gmmwix/ at gmadrid.github.io for now.
  // When DNS swaps georgemadridmagic.com to Pages (issue #6), drop `base`
  // and add the CNAME file back to public/ — the site then serves at the
  // domain root.
  site: 'https://gmadrid.github.io',
  base: '/gmmwix',
  vite: {
    plugins: [tailwindcss()]
  }
});
