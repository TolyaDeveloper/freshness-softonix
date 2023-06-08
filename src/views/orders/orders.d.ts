type TOrderStatuses = 'Processing' | 'Completed' | 'Canceled'

interface IOrder {
  user_id: string
  id: string
  products: Record<string, number>
  status: TOrderStatuses
}
