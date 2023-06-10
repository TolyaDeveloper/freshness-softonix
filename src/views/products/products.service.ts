class CategoryProductsService {
  async getProductsWithCount (filters: IFilters, priceRange: number[], categoryId?: string, searchQuery?: string) {
    const {
      page,
      itemsPerPage,
      priceSortType,
      filterByBrand,
      filterByRating
    } = filters

    const offset = (page - 1) * itemsPerPage
    const limit = itemsPerPage

    const query = useSupabase
      .from('products')
      .select('*, category (*), brand (*)', { count: 'exact' })
      .range(offset, offset + limit - 1)
      .gte('price', priceRange[0] ?? 0)
      .lte('price', priceRange[1] ?? Infinity)

    if (categoryId) {
      query.eq('category', categoryId)
    }

    if (priceSortType === 'LOW_TO_HIGH') {
      query.order('price', { ascending: true })
    }

    if (priceSortType === 'HIGH_TO_LOW') {
      query.order('price', { ascending: false })
    }

    if (filterByBrand.length) {
      query.in('brand', filterByBrand)
    }

    if (filterByRating.length) {
      query.in('rating', filterByRating)
    }

    if (searchQuery) {
      query.filter('name', 'ilike', `%${searchQuery}%`)
    }

    return query
  }

  getMinMaxPrices (filters: Pick<IFilters, 'filterByRating' | 'filterByBrand'>, categoryId?: string) {
    const { filterByRating, filterByBrand } = filters

    return useSupabase.rpc('get_min_max_prices', {
      p_category: categoryId ? [categoryId] : undefined,
      p_brand: filterByBrand,
      p_rating: filterByRating
    })
  }
}

class ProductDetailsService {
  getProductById (productId: string) {
    return useSupabase.from('products').select('*, category (*), brand (*)').eq('id', productId)
  }

  updateProduct (editedProduct: TProductUpdate, productId: string) {
    return useSupabase.from('products').update(editedProduct).eq('id', productId)
  }

  createProduct (product: TProductInsert) {
    return useSupabase.from('products').insert(product)
  }

  // deleteProduct (productId: string) {
  //   return useSupabase.from('products').delete()
  // }
}

export const productDetailsService = new ProductDetailsService()
export const categoryProductsService = new CategoryProductsService()
