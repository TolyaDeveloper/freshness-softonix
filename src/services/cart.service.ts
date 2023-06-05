class CartService {
  getProductsFromUserCart (productIds: string[]) {
    return useSupabase.from('products').select('*, category (*), brand (*)').in('id', productIds)
  }

  updateCart (newCart: Record<string, number>, userId: string) {
    return useSupabase.from('profiles').update({ cart: newCart }).eq('id', userId)
  }
}

export const cartService = new CartService()
