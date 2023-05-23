import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

import { routeNames } from '@/router/route-names'

export const routeGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const store = useAuthStore()

  if (!store.user && to.meta.requireAuth) {
    next({ name: routeNames.login })
  } else {
    next()
  }
}

export const initialUserSetup = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const store = useAuthStore()

  const { user } = storeToRefs(store)
  const { getUserProfile } = store

  if (!store.user) {
    const userProfile = await getUserProfile()

    user.value = userProfile
  }

  next()
}
