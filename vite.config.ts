import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Detect if you're in production (for GitHub Pages)
const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  base: isProd ? "/RIDEAtlas-EX/" : "/", // dynamic base path
  build: {
    outDir: "build/client", // REQUIRED for gh-pages deploy from this folder
    emptyOutDir: true,
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});

