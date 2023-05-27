export const useShopStore = defineStore('shopStore', () => {
  const categories = ref<ICategory[]>([])
  const feedbacks = ref<IFeedback[]>([])
  const mostPopularProducts = ref<IProduct[]>([])
  const productsByLastSearch = ref<IProduct[]>([])

  const getCategories = async () => {
    try {
      if (categories.value.length) {
        return
      }

      const { data } = await shopService.getCategories()

      if (!data) {
        return
      }

      categories.value = data
    } catch (error) {
      console.error(error)
    }
  }

  const getFeedbacks = async () => {
    try {
      if (feedbacks.value.length) {
        return
      }

      const { data } = await shopService.getFeedbacks()

      if (!data) {
        return
      }

      feedbacks.value = data
    } catch (error) {
      console.error(error)
    }
  }

  const getMostPopularProducts = async (limit: number) => {
    try {
      if (mostPopularProducts.value.length) {
        return
      }

      const { data } = await shopService.getMostPopularProducts(limit)

      if (!data) {
        return
      }

      mostPopularProducts.value = data
    } catch (error) {
      console.error(error)
    }
  }

  const getProductsByLastSearch = async (limit: number, categoryId: TNullable<string | undefined>) => {
    try {
      if (!categoryId) {
        return
      }

      const { data } = await shopService.getProductsByLastSearch(limit, categoryId)

      if (!data) {
        return
      }

      productsByLastSearch.value = data
    } catch (error) {
      console.error(error)
    }
  }

  return {
    getCategories,
    getFeedbacks,
    getMostPopularProducts,
    getProductsByLastSearch,
    categories,
    feedbacks,
    mostPopularProducts,
    productsByLastSearch
  }
})
