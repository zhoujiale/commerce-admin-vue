import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { PluginOption } from "vite";
import { setupUnplugin } from "./unplugin";

export function setupVitePlugins(viteEnv: Env.ImportMeta): PluginOption[] {
  console.log(viteEnv)
  return [
    vue(),
    vueJsx(),
    ...setupUnplugin(viteEnv)
  ];
}
