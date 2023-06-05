import type { RouteRecordRaw } from 'vue-router'

import { homeRoutes } from '@/views/home/home.routes'
import { authRoutes } from '@/views/auth/auth.routes'
import { profileRoutes } from '@/views/profile/profile.routes'
import { productsRoutes } from '@/views/products/products.routes'
import { cartRoutes } from '@/views/cart/cart.routes'
import { checkoutRoutes } from '@/views/checkout/checkout.routes'

const routes: Array<RouteRecordRaw> = [
  ...homeRoutes,
  ...authRoutes,
  ...profileRoutes,
  ...productsRoutes,
  ...cartRoutes,
  ...checkoutRoutes
]

export {
  routes
}
