type TPriceFilters = 'DEFAULT' | 'LOW_TO_HIGH' | 'HIGH_TO_LOW'

interface IFilters {
  page: number
  itemsPerPage: number
  priceSortType: TPriceFilters
  filterByBrand: string[]
  filterByRating: number[]
}
