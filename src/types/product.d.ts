interface IProduct {
  id: string
  name: string
  description: string
  category: string | ICategory
  brand: string
  price: number
  rating: number | null
  in_stock: number
  vitamins: string[] | null
  unit: string
  qty: number
}
