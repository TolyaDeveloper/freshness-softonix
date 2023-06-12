export const useGeneralStore = defineStore('generalStore', () => {
  const categories = ref<TCategory[]>([])
  const brands = ref<TBrand[]>([])
  const initialLoading = ref(true)

  const getCategories = async () => {
    try {
      if (categories.value.length) {
        return
      }

      const { data } = await generalService.getCategories()

      if (!data) {
        return
      }

      categories.value = data
    } catch (error) {
      console.error(error)
    }
  }

  const getBrands = async () => {
    try {
      if (brands.value.length) {
        return
      }

      const { data } = await generalService.getBrands()

      if (!data) {
        return
      }

      brands.value = data
    } catch (error) {
      console.error(error)
    }
  }

  const getInitialData = async () => {
    await getCategories()

    initialLoading.value = false
  }

  return {
    categories,
    brands,
    initialLoading,
    getCategories,
    getBrands,
    getInitialData
  }
})
