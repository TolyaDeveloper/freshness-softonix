import { homeRouteNames } from '@/views/home/home.routes'
import { authRouteNames } from '@/views/auth/auth.routes'
import { profileRouteNames } from '@/views/profile/profile.routes'
import { categoryProductsRouteNames } from '@/views/category-products/category-products.routes'

export const routeNames = {
  ...homeRouteNames,
  ...authRouteNames,
  ...profileRouteNames,
  ...categoryProductsRouteNames
}
