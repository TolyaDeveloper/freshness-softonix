class RecipesService {
  getRecipePreviews () {
    return useSupabase.from('recipes').select('id, name, created_at')
  }

  getRecipeDetailsById (recipeId: string) {
    return useSupabase.from('recipes').select('*').eq('id', recipeId)
  }
}

export const recipesService = new RecipesService()
