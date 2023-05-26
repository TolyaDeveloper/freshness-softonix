class ShopService {
  getMostPopularProducts (limit: number) {
    return useSupabase.from('products').select('*').order('rating', { ascending: false }).limit(limit)
  }

  getCategories () {
    return useSupabase.from('categories').select('*')
  }

  getFeedbacks () {
    return useSupabase.from('feedbacks').select('*')
  }
}

export const shopService = new ShopService()
