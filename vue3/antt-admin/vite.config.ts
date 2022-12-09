import { defineConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'
const pathResolve = (dir: string) => resolve(__dirname, dir);

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": pathResolve("src")
    }
  },
  server: {
    proxy: {
      '/citydeliver': {
        target: 'https://antt-test.91hiwork.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/citydelivery/, '/citydelivery')
      },
      '/cityAdmin': {
        target: 'https://antt-test.91hiwork.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cityAdmin/, '/cityAdmin')
      }
    }
  }
})
