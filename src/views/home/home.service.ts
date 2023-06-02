class HomeService {
  getMostPopularProducts (limit: number) {
    return useSupabase.from('products').select('*').order('rating', { ascending: false }).limit(limit)
  }

  getFeedbacks () {
    return useSupabase.from('feedbacks').select('*')
  }

  getProductsByLastSearch (limit: number, categoryId: TNullable<string | undefined>) {
    return useSupabase.from('products').select('*').eq('category', categoryId).limit(limit)
  }
}

export const homeService = new HomeService()
