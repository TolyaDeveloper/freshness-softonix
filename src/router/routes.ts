import type { RouteRecordRaw } from 'vue-router'

import { homeRoutes } from '@/views/home/home.routes'
import { authRoutes } from '@/views/auth/auth.routes'
import { profileRoutes } from '@/views/profile/profile.routes'
import { productsRoutes } from '@/views/products/products.routes'
import { productDetailsRoutes } from '@/views/product-details/product-details.routes'

const routes: Array<RouteRecordRaw> = [
  ...homeRoutes,
  ...authRoutes,
  ...profileRoutes,
  ...productsRoutes,
  ...productDetailsRoutes
]

export {
  routes
}
