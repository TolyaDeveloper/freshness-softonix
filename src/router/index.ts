import { createRouter, createWebHistory } from 'vue-router'

import { routeGuard, initialUserSetup } from './route-guard'
import { routes } from './routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(initialUserSetup)
router.beforeEach(routeGuard)
