import type { RouteRecordRaw } from 'vue-router'

export const recipesRouteNames = {
  recipes: 'recipes',
  recipeDetails: 'recipeDetails'
}

export const recipesRoutes: RouteRecordRaw[] = [
  {
    path: '/recipes',
    name: recipesRouteNames.recipes,
    component: () => import('./Recipes.vue')
  },
  {
    path: '/recipes/:id',
    name: recipesRouteNames.recipeDetails,
    component: () => import('./RecipeDetails.vue')
  }
]
