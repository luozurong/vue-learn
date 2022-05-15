import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 8000,
    open: false,
    proxy: {
      '/citydeliver': {
        target: 'https://antt-test.91hiwork.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/citydelivery/, '/citydelivery')
      }
    }
  },
  build: {
    sourcemap: false
  }
})