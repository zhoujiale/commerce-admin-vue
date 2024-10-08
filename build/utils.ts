
import { createMemoryHistory, createWebHashHistory, createWebHistory, RouterHistory } from "vue-router";

/**
 * node进程所在工作目录的绝对路径
 */


const historyModeMap: Record<Env.RouterHistoryMode,(base?:string) => RouterHistory> = {
  hash: createWebHashHistory,
  history: createWebHistory,
  memory: createMemoryHistory,
}


// const alias: Record<string, string> = {
//   "@": fileURLToPath(new URL('../src',import.meta.url)),
//   "@build": fileURLToPath(new URL('.',import.meta.url))
// }

export { historyModeMap };

