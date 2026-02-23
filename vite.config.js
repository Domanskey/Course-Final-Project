import { defineConfig } from 'vite'
import { imagetools } from'vite-imagetools';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    imagetools(),
    tailwindcss(),
    react()
  ],
})
