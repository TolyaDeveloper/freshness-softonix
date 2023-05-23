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
          name: string | null
        }
        Insert: {
          id?: string
          name?: string | null
        }
        Update: {
          id?: string
          name?: string | null
        }
      }
      products: {
        Row: {
          brand: string | null
          category: string | null
          description: string | null
          id: string
          in_stock: number | null
          name: string | null
          price: number | null
          qty: number | null
          rating: number | null
          unit: string | null
          vitamins: string[] | null
        }
        Insert: {
          brand?: string | null
          category?: string | null
          description?: string | null
          id: string
          in_stock?: number | null
          name?: string | null
          price?: number | null
          qty?: number | null
          rating?: number | null
          unit?: string | null
          vitamins?: string[] | null
        }
        Update: {
          brand?: string | null
          category?: string | null
          description?: string | null
          id?: string
          in_stock?: number | null
          name?: string | null
          price?: number | null
          qty?: number | null
          rating?: number | null
          unit?: string | null
          vitamins?: string[] | null
        }
      }
      profiles: {
        Row: {
          address: string
          email: string
          firstname: string
          id: string
          last_searched_category: string | null
          lastname: string
          role: string
        }
        Insert: {
          address: string
          email: string
          firstname: string
          id: string
          last_searched_category?: string | null
          lastname: string
          role?: string
        }
        Update: {
          address?: string
          email?: string
          firstname?: string
          id?: string
          last_searched_category?: string | null
          lastname?: string
          role?: string
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
