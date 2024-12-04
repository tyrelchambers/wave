import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import db from "@astrojs/db";

import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    ,
    db(),
    react(),
  ],

  adapter: node({
    mode: "standalone",
  }),
});