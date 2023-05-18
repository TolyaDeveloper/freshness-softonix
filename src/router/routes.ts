import type { RouteRecordRaw } from 'vue-router'

import { homeRoutes } from '@/views/home/home.routes'

const routes: Array<RouteRecordRaw> = [
  ...homeRoutes
]

export {
  routes
}
