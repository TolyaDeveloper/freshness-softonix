import type { RouteRecordRaw } from 'vue-router'

export const productDetailsRouteNames = {
  productDetails: 'product-details/:id'
}

export const productDetailsRoutes: RouteRecordRaw[] = [
  {
    path: '/product-details/:id',
    name: productDetailsRouteNames.productDetails,
    component: () => import('./ProductDetails.vue')
  }
]
