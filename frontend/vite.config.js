const path = require("path");
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { pathToFileURL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@services": path.resolve(__dirname, "src/services"),
      "@style": path.resolve(__dirname, "src/style"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
    },
  },
});
