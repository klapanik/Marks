import { dirname, resolve } from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
})
