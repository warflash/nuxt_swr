import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    routes: {
      "/**": {
        cache: { swr: true, maxAge: 120, staleMaxAge: 60, headersOnly: true },
      },
    },
  },
});
