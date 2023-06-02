class ProductDetailsService {
  getProductById (productId: string) {
    return useSupabase.from('products').select('*, category (*), brand (*)').eq('id', productId)
  }
}

export const productDetailsService = new ProductDetailsService()
