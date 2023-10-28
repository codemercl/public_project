import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      components: "/src/components",
      styles: "/src/styles",
      layout: "/src/layout",
      assets: "/src/assets",
      common: "/src/common",
      utils: "/src/utils",
      hooks: "/src/hooks"
    },
  },
});
