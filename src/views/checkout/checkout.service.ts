class CheckoutService {
  createOrder (userId: string, products: Record<string, number>) {
    return useSupabase.from('orders').insert({ products, user_id: userId })
  }

  applyPromocode (name: string) {
    return useSupabase.from('promocodes').select('*').eq('code', name)
  }
}

export const checkoutService = new CheckoutService()
