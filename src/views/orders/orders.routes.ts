import type { RouteRecordRaw } from 'vue-router'

export const ordersRouteNames = {
  orders: 'orders'
}

export const ordersRoutes: RouteRecordRaw[] = [
  {
    path: '/orders',
    name: ordersRouteNames.orders,
    component: () => import('./Orders.vue'),
    meta: {
      requireAuth: true
    }
  }
]
