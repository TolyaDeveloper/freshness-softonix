import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

import { routeNames } from '@/router/route-names'
import type { ERoles } from '@/types/roles'

export const routeGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const store = useAuthStore()

  if (!store.user && to.meta.requireAuth) {
    next({ name: routeNames.login })
  } else if (to.meta.roles && !(to.meta.roles.includes(store.user?.role as ERoles))) {
    next({ name: routeNames.home })
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

export const activeSessionGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const store = useAuthStore()

  if (store.user && to.meta.isProtectedDuringSession) {
    next({ name: routeNames.home })
  } else {
    next()
  }
}
