export const useShopStore = defineStore('shopStore', () => {
  const categories = ref<ICategory[]>([])
  const feedbacks = ref<IFeedback[]>([])
  const mostPopularProducts = ref<IProduct[]>([])

  const getCategories = async () => {
    if (categories.value.length) {
      return
    }

    const { data } = await shopService.getCategories()

    if (!data) {
      return
    }

    categories.value = data
  }

  const getFeedbacks = async () => {
    if (feedbacks.value.length) {
      return
    }

    const { data } = await shopService.getFeedbacks()

    if (!data) {
      return
    }

    feedbacks.value = data
  }

  const getMostPopularProducts = async (limit: number) => {
    if (mostPopularProducts.value.length) {
      return
    }

    const { data } = await shopService.getMostPopularProducts(limit)

    if (!data) {
      return
    }

    mostPopularProducts.value = data
  }

  return {
    getCategories,
    getFeedbacks,
    getMostPopularProducts,
    categories,
    feedbacks,
    mostPopularProducts
  }
})
