
/**声明一个环境变量的命名空间 */
declare namespace Env {

  type RouterHistoryMode = 'hash' | 'history' | 'memory';

  interface ImportMeta extends ImportMetaEnv {
    readonly VITE_BASE_URL: string
    readonly VITE_PORT: number
  }

}

interface ImportMeta {
  readonly env: Env.ImportMeta;
}


