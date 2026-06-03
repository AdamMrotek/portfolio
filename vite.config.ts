import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Served from https://adammrotek.github.io/portfolio/
export default defineConfig({
  base: "/portfolio/",
  plugins: [react(), tailwindcss()],
});
