import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',      // allow access from any device
    port: 5173,           // default Vite port
    hmr: {
      host: '10.95.74.206' // 👈 replace with your computer's IPv4 address
    }
  }
})
