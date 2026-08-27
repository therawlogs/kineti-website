// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  redirects: {
    "/agencies": "/team",
    "/docs/swarm": "https://github.com/therawlogs/kineti/blob/main/docs/v0.1.md",
    "/docs/cli": "https://github.com/therawlogs/kineti/blob/main/docs/v0.1.md",
    "/docs/configuration": "https://github.com/therawlogs/kineti/blob/main/docs/v0.1.md",
    // legacy v0.1 — keep files but not top nav
    "/governance": "/docs/getting-started",
    "/architecture": "/docs/getting-started",
    "/faq": "/docs/getting-started",
    "/changelog": "/docs/getting-started",
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
