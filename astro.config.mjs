// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  redirects: {
    "/docs": "/docs/getting-started",
    "/governance": "/docs/governance",
    "/architecture": "/docs/architecture",
    "/security": "/docs/security",
    "/faq": "/docs/faq",
    "/changelog": "/docs/changelog",
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  build: {
    inlineStylesheets: "always",
  },
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: "lightningcss",
    },
  },
});
