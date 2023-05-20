import { homeRouteNames } from '@/views/home/home.routes'
import { authRouteNames } from '@/views/auth/auth.routes'

export const routeNames = {
  ...homeRouteNames,
  ...authRouteNames
}
