import type { RouteRecordRaw } from 'vue-router'

import Home from './Home.vue'

export const homeRouteNames = {
  home: 'home'
}

export const homeRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: homeRouteNames.home,
    component: Home
  }
]
