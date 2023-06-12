import { ERoles } from '@/types/roles'
import type { RouteRecordRaw } from 'vue-router'

export const productsRouteNames = {
  products: 'products',
  productDetails: 'productDetails',
  addProduct: 'addProduct',
  editProduct: 'editProduct'
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
  },
  {
    path: '/product/add',
    name: productsRouteNames.addProduct,
    component: () => import('./AddProduct.vue'),
    meta: {
      requireAuth: true,
      roles: [ERoles.admin]
    }
  },
  {
    path: '/product/edit/:id',
    name: productsRouteNames.editProduct,
    component: () => import('./EditProduct.vue'),
    meta: {
      requireAuth: true,
      roles: [ERoles.admin]
    }
  }
]
