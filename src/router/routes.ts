import type { RouteRecordRaw } from 'vue-router'

import { homeRoutes } from '@/views/home/home.routes'
import { authRoutes } from '@/views/auth/auth.routes'
import { profileRoutes } from '@/views/profile/profile.routes'
import { categoryProductsRoutes } from '@/views/category-products/category-products.routes'

const routes: Array<RouteRecordRaw> = [
  ...homeRoutes,
  ...authRoutes,
  ...profileRoutes,
  ...categoryProductsRoutes
]

export {
  routes
}
