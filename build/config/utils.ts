import { createMemoryHistory, createWebHashHistory, createWebHistory, RouterHistory } from "vue-router"


/**
 * node进程所在工作目录的绝对路径
 */
const root: string = process.cwd()

const historyModeMap: Record<Env.RouterHistoryMode,(base?:string) => RouterHistory> = {
  hash: createWebHashHistory,
  history: createWebHistory,
  memory: createMemoryHistory,
}

export { root,historyModeMap }

