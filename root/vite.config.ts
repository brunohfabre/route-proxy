import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 9000,
    proxy: {
      '/app-01': 'http://localhost:8001',
      '/app-02': 'http://localhost:8002',
    }
  }
})
