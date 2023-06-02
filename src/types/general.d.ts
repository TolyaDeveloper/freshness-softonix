type TNullable<T> = null | T
type TLayouts = 'default' | 'auth'
type TProductViews = 'grid' | 'list'

interface ICategory {
  id: string
  name: string
}

interface IBrand {
  id: string
  name: string
}

interface IProduct {
  id: string
  image: string
  name: string
  description: string
  category: ICategory
  brand: IBrand
  price: number
  rating: number | null
  in_stock: number
  vitamins: string[] | null
  unit: string
  qty: number
}

interface IBreadcrumb {
  title: string
  routeName?: string
}
