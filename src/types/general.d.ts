type TNullable<T> = null | T
type TLayouts = 'default' | 'auth'
type TProductViews = 'grid' | 'list'

type TCategory = IDatabase['public']['Tables']['categories']['Row']

type TBrand = IDatabase['public']['Tables']['brands']['Row']

type TProduct = IDatabase['public']['Tables']['products']['Row']
type TProductInsert = IDatabase['public']['Tables']['products']['Insert']
type TProductUpdate = IDatabase['public']['Tables']['products']['Update']

type TPromocode = {
  code: string
  discount: number
}
