import { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export function setupVitePlugins(viteEnv: ImportMetaEnv): PluginOption[] {
  console.log(viteEnv)
  return [
    vue(),
    vueJsx(),
  ];
}
