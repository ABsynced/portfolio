import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this project from https://<user>.github.io/portfolio/,
  // not the domain root, so every asset URL needs this prefix. Update this if
  // the repo is ever renamed again.
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
  },
})
