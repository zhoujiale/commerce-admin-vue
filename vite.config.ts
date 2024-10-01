import { defineConfig, loadEnv } from 'vite';
import { root } from "./build/config/utils";
import { include,exclude } from './build/config/optimize';
import { setupVitePlugins } from './build/plugins';

// https://vitejs.dev/config/
export default defineConfig(configEnv => {
  // plugins: [vue()],
  const viteEnv = loadEnv(configEnv.mode,root) as Env.ImportMeta;
  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {

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
