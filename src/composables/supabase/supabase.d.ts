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
          brand: string
          category: string
          description: string
          id: string
          in_stock: number
          name: string
          price: number
          qty: number
          rating: number | null
          unit: string
          vitamins: string[] | null
        }
        Insert: {
          brand: string
          category: string
          description: string
          id: string
          in_stock: number
          name: string
          price: number
          qty: number
          rating?: number | null
          unit: string
          vitamins?: string[] | null
        }
        Update: {
          brand?: string
          category?: string
          description?: string
          id?: string
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
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
