import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    outDir: "build/client",
    emptyOutDir: true,
    ssr: "app/root.tsx" // ✅ this is the correct way to set SSR entry
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
