import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    outDir: "build/client",
    emptyOutDir: true,
    ssr: "src/entry-server.tsx",  // <-- must match your actual SSR entry file
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
