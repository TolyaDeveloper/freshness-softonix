import type { RouteRecordRaw } from 'vue-router'

export const authRouteNames = {
  login: 'login',
  signup: 'signup'
}

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: authRouteNames.login,
    component: () => import('./Login.vue'),
    meta: {
      layout: 'auth',
      isProtectedDuringSession: true
    }
  },
  {
    path: '/signup',
    name: authRouteNames.signup,
    component: () => import('./SignUp.vue'),
    meta: {
      layout: 'auth',
      isProtectedDuringSession: true
    }
  }
]
