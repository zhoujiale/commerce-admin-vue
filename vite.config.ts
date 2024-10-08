import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import { exclude, include } from './build/config/optimize';
import { setupVitePlugins } from './build/plugins';


const root: string = process.cwd()
// https://vitejs.dev/config/
export default defineConfig(configEnv => {
  // plugins: [vue()],
  const viteEnv = loadEnv(configEnv.mode,root) as Env.ImportMeta;
  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL('./src',import.meta.url)),
        "@build": fileURLToPath(new URL('./build',import.meta.url))
      }
    },
    css:{
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/scss/index.scss" as *;`
        }
      }
    },
    define: {},
    server: {
      host: '0.0.0.0',
      port: viteEnv.VITE_PORT,
      proxy:{},
      warmup: {
        clientFiles: ["./index.html","./src/{view,components}/*"]
      }
    },
    plugins: setupVitePlugins(viteEnv),
    optimizeDeps: {
      include,
      exclude
    },
    build: {
      target: 'esnext',
      chunkSizeWarningLimit: 4000,
      rollupOptions: {
        input: {},
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
    }
  }
})
