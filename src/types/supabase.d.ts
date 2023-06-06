type TJson =
  | string
  | number
  | boolean
  | null
  | { [key: string]: TJson }
  | TJson[]

interface IDatabase {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
      }
      products: {
        Row: {
          brand: { id: string; name: string }
          category: { id: string; name: string }
          description: string
          id: string
          image: string
          in_stock: number
          name: string
          price: number
          qty: number
          rating: number | null
          unit: string
          vitamins: string[] | null
        }
        Insert: {
          brand: { id: string; name: string }
          category: { id: string; name: string }
          description: string
          id: string
          image?: string
          in_stock: number
          name: string
          price: number
          qty: number
          rating?: number | null
          unit: string
          vitamins?: string[] | null
        }
        Update: {
          brand?: { id: string; name: string }
          category?: { id: string; name: string }
          description?: string
          id?: string
          image?: string
          in_stock?: number
          name?: string
          price?: number
          qty?: number
          rating?: number | null
          unit?: string
          vitamins?: string[] | null
        }
      }
      profiles: {
        Row: {
          cart: Record<string, number> | null
          city: string
          street: string
          email: string
          firstname: string
          id: string
          last_searched_category: string | null
          lastname: string
          role: ERoles
        }
        Insert: {
          cart?: Record<string, number> | null
          city: string
          street: string
          email: string
          firstname: string
          id: string
          last_searched_category?: string | null
          lastname: string
          role?: ERoles
        }
        Update: {
          cart?: Record<string, number> | null
          city?: string
          street?: string
          email?: string
          firstname?: string
          id?: string
          last_searched_category?: string | null
          lastname?: string
          role?: ERoles
        }
      }
      feedbacks: {
        Row: {
          avatar: string
          content: string
          id: string
          username: string
        }
        Insert: {
          avatar: string
          content: string
          id?: string
          username: string
        }
        Update: {
          avatar?: string
          content?: string
          id?: string
          username?: string
        }
      }
      brands: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
      }
      promocodes: {
        Row: {
          code: string
          discount: number
          id: string
        }
        Insert: {
          code: string
          discount: number
          id?: string
        }
        Update: {
          code?: string
          discount?: number
          id?: string
        }
      }
      orders: {
        Row: {
          id: string
          products: Record<string, number>
          user_id: string
        }
        Insert: {
          id?: string
          products: Record<string, number>
          user_id: string
        }
        Update: {
          id?: string
          products?: Record<string, number> | null
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_min_max_prices: {
        Args: {
          p_rating?: number[]
          p_category?: string[]
          p_brand?: string[]
        }
        Returns: {
          min_price: number
          max_price: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
