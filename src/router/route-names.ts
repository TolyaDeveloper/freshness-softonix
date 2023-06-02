import { homeRouteNames } from '@/views/home/home.routes'
import { authRouteNames } from '@/views/auth/auth.routes'
import { profileRouteNames } from '@/views/profile/profile.routes'
import { productsRouteNames } from '@/views/products/products.routes'
import { productDetailsRouteNames } from '@/views/product-details/product-details.routes'

export const routeNames = {
  ...homeRouteNames,
  ...authRouteNames,
  ...profileRouteNames,
  ...productsRouteNames,
  ...productDetailsRouteNames
}
