export const useGeneralStore = defineStore('generalStore', () => {
  const categories = ref<ICategory[]>([])
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

  const getInitialData = async () => {
    await getCategories()

    initialLoading.value = false
  }

  return {
    categories,
    getCategories,
    getInitialData,
    initialLoading
  }
})
