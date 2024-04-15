import { defineConfig } from "astro/config";
import qwikdev from "@qwikdev/astro";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ["**/react/*.tsx"],
    }),
    qwikdev({
      include: ["**/qwik/*.tsx"],
    }),
    tailwind(),
  ],
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
});
