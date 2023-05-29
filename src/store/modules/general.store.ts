export const useGeneralStore = defineStore('generalStore', () => {
  const categories = ref<ICategory[]>([])

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

  return {
    categories,
    getCategories
  }
})
