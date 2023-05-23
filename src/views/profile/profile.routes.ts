import type { RouteRecordRaw } from 'vue-router'

export const profileRouteNames = {
  profile: 'profile'
}

export const profileRoutes: RouteRecordRaw[] = [
  {
    path: '/profile',
    name: profileRouteNames.profile,
    component: () => import('./Profile.vue'),
    meta: {
      requireAuth: true
    }
  }
]
