import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { PluginOption } from "vite";
export function setupUnplugin(viteEnv: Env.ImportMeta) {
  const plugins: PluginOption[] = [
    Components({
      resolvers:[ElementPlusResolver()]
    })
  ]
  return plugins;
}
