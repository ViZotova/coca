import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
  root: "./src",
  base: "/coca/",
  server: {
    port: 3000,
    open: true,
  },
  publicDir: "./src/assets/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "./src/index.html",
        pricing: "./src/pricing.html",
        contact: "./src/contact.html",
        about: "./src/about.html",
        blog: "./src/blog.html",
        post: "./src/post.html",
      },
    },
  },
  plugins: [
    injectHTML(),
    ViteMinifyPlugin(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
  ],
});
