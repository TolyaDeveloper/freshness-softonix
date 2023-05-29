class GeneralService {
  getCategories () {
    return useSupabase.from('categories').select('*')
  }
}

export const generalService = new GeneralService()
