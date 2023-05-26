import type { Plugin } from 'vue'

import { routeNames } from '@/router/route-names'
import { allFilters } from '@/core/filters'

export const globalProperties = {
  $routeNames: routeNames,
  $filters: allFilters
}

export const VueGlobalPropertiesPlugin: Plugin = {
  install: (app) => {
    for (const i in globalProperties) {
      app.config.globalProperties[i] = globalProperties[i as keyof typeof globalProperties]
    }
  }
}
