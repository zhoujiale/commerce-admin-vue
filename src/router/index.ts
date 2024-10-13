import HelloWorld from "@/components/HelloWorld.vue";
import { historyModeMap } from "@build/utils";
import { App } from "vue";
import { createRouter, Router, } from "vue-router";

const {VITE_BASE_URL} = import.meta.env;

export const router: Router = createRouter({
  history: historyModeMap[import.meta.env.VITE_ROUTER_HISTORY_MODE = 'hash'](VITE_BASE_URL),
  routes: [
    {
      path: '/',
      component: HelloWorld
    }
  ]
});

export function setupRouter(app: App){
  app.use(router);
}

