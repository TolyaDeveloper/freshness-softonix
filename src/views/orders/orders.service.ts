class OrdersService {
  getOrdersIdsByUserId (userId: string) {
    return useSupabase.from('orders').select('*').eq('user_id', userId)
  }
}

export const ordersService = new OrdersService()
