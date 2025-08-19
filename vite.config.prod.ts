import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './', // 相対パスでビルド
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // 本番ではソースマップを無効化
    minify: 'terser', // コード圧縮
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'cafe-serenity': resolve(__dirname, 'public/cafe-serenity/index.html'),
        'reservation-demo': resolve(__dirname, 'public/reservation-demo/index.html'),
        'online-order-demo': resolve(__dirname, 'public/online-order-demo/index.html')
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['framer-motion', 'lucide-react']
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true, // コンソールログを削除
        drop_debugger: true
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 4173,
    open: true
  }
})
