class CheckoutService {
  createOrder (userId: string, products: Record<string, number>) {
    return useSupabase.from('orders').insert({ products, user_id: userId })
  }

  deleteUserPromocode (userId: string) {
    return useSupabase.from('profiles').update({ promocode: null }).eq('id', userId)
  }
}

export const checkoutService = new CheckoutService()
