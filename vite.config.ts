import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// War Games deploys to GitHub Pages at <user>.github.io/war-games/, so every
// asset path must be prefixed. Locally the dev server also serves under /war-games/.
// https://vite.dev/config/
export default defineConfig({
  base: '/war-games/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
