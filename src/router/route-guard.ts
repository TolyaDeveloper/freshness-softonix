import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export const routeGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const store = useAuthStore()

  if (!store.user && to.meta.requireAuth) {
    next(false)
  }

  next()
}
