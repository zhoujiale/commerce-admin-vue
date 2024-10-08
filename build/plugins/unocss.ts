import { FileSystemIconLoader } from "@iconify/utils/lib/loader/node-loaders";
import * as path from "node:path";
import presetIcons from "unocss/preset-icons";
import UnoCSS from "unocss/vite";
export function setupUnocss(viteEnv: Env.ImportMeta) {
  const {VITE_ICON_PREFIX,VITE_ICON_LOCAL_PREFIX} = viteEnv;

  const localIconPath = path.join(process.cwd(),'src/assets/svg');

  const collectionName = VITE_ICON_LOCAL_PREFIX.replace(`${VITE_ICON_PREFIX}-`,'')
  return UnoCSS({
      presets:[
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
          },
          warn: true,
          collections: {
            [collectionName]: FileSystemIconLoader(localIconPath,svg =>
              svg.replace(/^<svg\s/, '<svg width="1em" height="1em" ')
            )
          }
        }),
      ]
  })
}
