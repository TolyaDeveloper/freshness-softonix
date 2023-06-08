class CartService {
  updateCart (newCart: Record<string, number>, userId: string) {
    return useSupabase.from('profiles').update({ cart: newCart }).eq('id', userId)
  }
}

export const cartService = new CartService()
