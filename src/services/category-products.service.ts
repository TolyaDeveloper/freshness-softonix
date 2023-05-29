export class CategoryProductsService {
  async getCategoryProductsWithCount (options: IFilters) {
    const {
      categoryId,
      page,
      itemsPerPage,
      priceSortType,
      filterByBrand,
      filterByRating,
      filterByMinPrice,
      filterByMaxPrice
    } = options

    const offset = (page - 1) * itemsPerPage
    const limit = itemsPerPage

    const query = useSupabase
      .from('products')
      .select('*', { count: 'exact' })
      .eq('category', categoryId)
      .range(offset, offset + limit - 1)
      .gte('price', filterByMinPrice ?? 0)
      .lte('price', filterByMaxPrice ?? Infinity)

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
}

export const categoryProductsService = new CategoryProductsService()
