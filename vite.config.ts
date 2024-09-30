import { defineConfig, loadEnv } from 'vite';
import { root } from "./build/config/utils";

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
    server: {
      host: '0.0.0.0',
      port: viteEnv.VITE_PORT,
      proxy:{}
    }
  }
})
