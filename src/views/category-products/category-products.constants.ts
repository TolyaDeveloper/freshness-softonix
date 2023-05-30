export const priceFilterOptions: { value: TPriceFilters; label: string }[] = [
  {
    value: 'DEFAULT',
    label: 'Price: Default'
  },
  {
    value: 'LOW_TO_HIGH',
    label: 'Price: Low to high'
  },
  {
    value: 'HIGH_TO_LOW',
    label: 'Price: High to low'
  }
]

export const itemsPerPageOptions = [
  {
    value: 3,
    label: 3
  },
  {
    value: 6,
    label: 6
  }
]

export const defaultFilters: IFilters = {
  filterByBrand: [],
  filterByRangePrice: [0, 0],
  filterByRating: [],
  itemsPerPage: 3,
  page: 1,
  priceSortType: 'DEFAULT'
}
