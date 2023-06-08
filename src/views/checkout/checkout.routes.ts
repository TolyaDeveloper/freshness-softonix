import type { RouteRecordRaw } from 'vue-router'

export const checkoutRouteNames = {
  checkout: 'checkout'
}

export const checkoutRoutes: RouteRecordRaw[] = [
  {
    path: '/checkout',
    name: checkoutRouteNames.checkout,
    component: () => import('./Checkout.vue'),
    meta: {
      requireAuth: true
    }
  }
]
