import type { RouteRecordRaw } from 'vue-router'

export const productsRouteNames = {
  products: 'products'
}

export const productsRoutes: RouteRecordRaw[] = [
  {
    path: '/products',
    name: productsRouteNames.products,
    component: () => import('./Products.vue')
  }
]
