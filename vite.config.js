import { fileURLToPath, URL } from 'url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({ mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  }

  return defineConfig({
    base: process.env.NODE_ENV === 'production'
      ? process.env.VITE_REPO
      : './',
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@img': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
      }
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          // 移除 console
          drop_console: true,
          drop_debugger: true,
        },
        parse: {
          html5_comments: false,
        },
      },
      rollupOptions: {
        output: {
          entryFileNames: `assets/[name]-[hash].js`,
          chunkFileNames: `assets/[name]-[hash].js`,
          assetFileNames: `assets/[name]-[hash].[ext]`,
        }
      }
    }
  })
}
