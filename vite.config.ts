export default defineConfig({
  base: "/", // no /RIDEAtlas-EX on vercel
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
