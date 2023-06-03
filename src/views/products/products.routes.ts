import type { RouteRecordRaw } from 'vue-router'

export const productsRouteNames = {
  products: 'products',
  productDetails: 'product/details/:id'
}

export const productsRoutes: RouteRecordRaw[] = [
  {
    path: '/products',
    name: productsRouteNames.products,
    component: () => import('./Products.vue')
  },
  {
    path: '/product/details/:id',
    name: productsRouteNames.productDetails,
    component: () => import('./ProductDetails.vue')
  }
]
