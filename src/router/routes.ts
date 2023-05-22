import type { RouteRecordRaw } from 'vue-router'

import { homeRoutes } from '@/views/home/home.routes'
import { authRoutes } from '@/views/auth/auth.routes'

const routes: Array<RouteRecordRaw> = [
  ...homeRoutes,
  ...authRoutes
]

export {
  routes
}
