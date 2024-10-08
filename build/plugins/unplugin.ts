import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { PluginOption } from "vite";
export function setupUnplugin(viteEnv: Env.ImportMeta) {
  const plugins: PluginOption[] = [
    AutoImport({
      resolvers:[ElementPlusResolver()]
    }),
    Components({
      resolvers:[ElementPlusResolver()]
    })
  ]
  return plugins;
}
