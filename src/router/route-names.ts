import { homeRouteNames } from '@/views/home/home.routes'
import { authRouteNames } from '@/views/auth/auth.routes'
import { profileRouteNames } from '@/views/profile/profile.routes'
import { productsRouteNames } from '@/views/products/products.routes'
import { cartRouteNames } from '@/views/cart/cart.routes'
import { checkoutRouteNames } from '@/views/checkout/checkout.routes'
import { ordersRouteNames } from '@/views/orders/orders.routes'
import { recipesRouteNames } from '@/views/recipes/recipes.routes'
import { quizRouteNames } from '@/views/quiz/quiz.routes'

export const routeNames = {
  ...homeRouteNames,
  ...authRouteNames,
  ...profileRouteNames,
  ...productsRouteNames,
  ...cartRouteNames,
  ...checkoutRouteNames,
  ...ordersRouteNames,
  ...recipesRouteNames,
  ...quizRouteNames
}
