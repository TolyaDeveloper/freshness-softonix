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
          address: {
            street: string
            city: string
          }
          email: string
          firstname: string
          id: string
          last_searched_category: string | null
          lastname: string
          role: ERoles
        }
        Insert: {
          address: {
            street: string
            city: string
          }
          email: string
          firstname: string
          id: string
          last_searched_category?: string | null
          lastname: string
          role?: ERoles
        }
        Update: {
          address?: {
            street: string
            city: string
          }
          email?: string
          firstname?: string
          id?: string
          last_searched_category?: string | null
          lastname?: string
          role?: ERoles
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
