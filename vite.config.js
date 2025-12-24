import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ESKI tailwindcss pluginini o‘chirish
export default defineConfig({
  plugins: [react()],
})