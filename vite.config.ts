import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  publicDir: path.resolve(import.meta.dirname, "public"),
  server: {
    host: "0.0.0.0",
    port: 3001,
    allowedHosts: true,
  },
});
