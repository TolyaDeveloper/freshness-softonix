export const useFilters = () => {
  const route = useRoute()

  const defaultFilters: IFilters = {
    filterByBrand: [],
    filterByRating: [],
    itemsPerPage: 5,
    page: 1,
    priceSortType: 'DEFAULT'
  }

  const getFiltersByQuery = (): IFilters => {
    return Object.fromEntries(
      Object.entries(defaultFilters).map(([key, value]) => {
        if (Array.isArray(value)) {
          return [key, [route.query[key]]
            .flat(1)
            .filter(Boolean)
            .map(item => isNaN(item as unknown as number) ? item : Number(item)) || value]
        }

        if (typeof value === 'number') {
          return [key, Number(route.query[key]) || value]
        }

        return [key, route.query[key] || value]
      })
    ) as IFilters
  }

  return {
    defaultFilters,
    getFiltersByQuery
  }
}
