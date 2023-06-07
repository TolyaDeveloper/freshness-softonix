class GeneralService {
  getCategories () {
    return useSupabase.from('categories').select('*')
  }

  getProductsByIds (productIds: string[]) {
    return useSupabase.from('products').select('*, category (*), brand (*)').in('id', productIds)
  }
}

export const generalService = new GeneralService()
