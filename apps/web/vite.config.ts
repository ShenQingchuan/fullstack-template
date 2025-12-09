import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    Inspect(),
  ],
  build: {
    outDir: '../server/dist/public',
    emptyOutDir: true,
  },
  server: {
    host: '0.0.0.0', // Bind to all interfaces
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:7070', // Backend server address
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
