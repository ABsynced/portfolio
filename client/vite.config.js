import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this project from https://<user>.github.io/portfolio-mern/,
  // not the domain root, so every asset URL needs this prefix.
  base: '/portfolio-mern/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
  },
})
