
/**声明一个环境变量的命名空间 */
declare namespace Env {

  type RouterHistoryMode = 'hash' | 'history' | 'memory';

  interface ImportMeta extends ImportMetaEnv {
    readonly VITE_BASE_URL: string
    readonly VITE_PORT: number,
    readonly VITE_ROUTER_HISTORY_MODE: string,
    /** iconify icon 前缀 */
    readonly VITE_ICON_PREFIX: 'icon';
    /** 本地图标前缀 */
    readonly VITE_ICON_LOCAL_PREFIX: 'local-icon';
  }

}

interface ImportMeta {
  readonly env: Env.ImportMeta;
}


