export class CategoryProductsService {
  async getCategoryProductsWithCount (categoryId: string, filters: IFilters) {
    const {
      page,
      itemsPerPage,
      priceSortType,
      filterByBrand,
      filterByRating,
      filterByRangePrice
    } = filters

    const offset = (page - 1) * itemsPerPage
    const limit = itemsPerPage

    const query = useSupabase
      .from('products')
      .select('*', { count: 'exact' })
      .eq('category', categoryId)
      .range(offset, offset + limit - 1)
      .gte('price', filterByRangePrice[0] ?? 0)
      .lte('price', filterByRangePrice[1] ?? Infinity)

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

    return query
  }

  getMinMaxPrices () {
    return useSupabase.rpc('get_min_max_prices')
  }
}

export const categoryProductsService = new CategoryProductsService()
