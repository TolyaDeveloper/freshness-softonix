import type { RouteRecordRaw } from 'vue-router'

import { homeRoutes } from '@/views/home/home.routes'
import { authRoutes } from '@/views/auth/auth.routes'
import { profileRoutes } from '@/views/profile/profile.routes'
import { productsRoutes } from '@/views/products/products.routes'
import { cartRoutes } from '@/views/cart/cart.routes'
import { checkoutRoutes } from '@/views/checkout/checkout.routes'
import { ordersRoutes } from '@/views/orders/orders.routes'
import { recipesRoutes } from '@/views/recipes/recipes.routes'
import { quizRoutes } from '@/views/quiz/quiz.routes'

const routes: Array<RouteRecordRaw> = [
  ...homeRoutes,
  ...authRoutes,
  ...profileRoutes,
  ...productsRoutes,
  ...cartRoutes,
  ...checkoutRoutes,
  ...ordersRoutes,
  ...recipesRoutes,
  ...quizRoutes
]

export {
  routes
}
