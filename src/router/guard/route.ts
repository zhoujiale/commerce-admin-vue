import { Router } from "vue-router";

const isAuthenticated = false;

export function createRouteGuard(router: Router) {
  router.beforeEach((to,from,next) => {
    if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
      else next()
  });
}
