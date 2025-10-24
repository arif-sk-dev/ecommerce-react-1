import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const isGitHubPages = process.env.DEPLOY_TARGET === 'gh-pages'

// https://vite.dev/config/
export default defineConfig({
  base: isGitHubPages ? '/ecommerce-react-1/' : '/',
  plugins: [
    tailwindcss(),
    react()
  ],
})
