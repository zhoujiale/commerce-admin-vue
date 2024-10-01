import { createRouter, Router, } from "vue-router";
import { historyModeMap } from "~/build/config/utils";

const {VITE_BASE_URL} = import.meta.env;

export const router: Router = createRouter({
  history: historyModeMap[import.meta.env.VITE_ROUTER_HISTORY_MODE = 'hash'](VITE_BASE_URL),
  routes: []
});

