import 'vue-router'
import { routeNames } from '@/router/route-names'
import { allFilters } from '@/core/filters'
import { globalProperties, portalNames } from '@/plugins'
import { EElComponentSize, EElComponentType } from '@/types/enums'
import type { ERoles } from '@/types/roles'

declare module 'vue-router' {
  interface RouteMeta {
    // todo: this is just an example. Please setup your own route meta params.
    label?: string
    parentName?: string
    requireAuth?: boolean
    layout?: TLayouts
    isProtectedDuringSession?: boolean
    roles?: ERoles[]
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    // todo: Here you define you global vue definitions.
    $portalNames: typeof portalNames
    $routeNames: typeof routeNames
    $filters: typeof allFilters

    // todo: These ones are used only for element library for size and type props;
    $elComponentSize: typeof EElComponentSize
    $elComponentType: typeof EElComponentType
  }
}

declare global {
  interface ObjectConstructor {
    keys<T>(obj: T): Array<keyof T>
  }
}

export { }
