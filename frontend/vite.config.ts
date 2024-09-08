import { defineConfig } from 'vite'
import path from "path";
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      custom: {
        families: [
          {
            name: "Geist",
            src: "./src/assets/fonts/Geist-UltraBlack-BF6569491ecdc4d.otf"
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
