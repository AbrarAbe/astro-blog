// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://stellular-crumble-76cc2d.netlify.app",
  integrations: [preact()]
});