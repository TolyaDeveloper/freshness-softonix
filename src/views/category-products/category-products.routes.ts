import type { RouteRecordRaw } from 'vue-router'

export const categoryProductsRouteNames = {
  categories: 'categories'
}

export const categoryProductsRoutes: RouteRecordRaw[] = [
  {
    path: '/categories/:id',
    name: categoryProductsRouteNames.categories,
    component: () => import('./CategoryProducts.vue')
  }
]
