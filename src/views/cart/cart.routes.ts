import type { RouteRecordRaw } from 'vue-router'

export const cartRouteNames = {
  cart: 'cart'
}

export const cartRoutes: RouteRecordRaw[] = [
  {
    path: '/cart',
    name: cartRouteNames.cart,
    component: () => import('./Cart.vue'),
    meta: {
      requireAuth: true
    }
  }
]
