class OrdersService {
  getOrdersIdsByUserId (userId: string) {
    return useSupabase.from('orders').select('products, id').eq('user_id', userId)
  }
}

export const ordersService = new OrdersService()
