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
        Relationships: []
      }
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
        Relationships: []
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
        Relationships: []
      }
      orders: {
        Row: {
          id: string
          products: Record<string, number>
          status: TOrderStatuses
          user_id: string
        }
        Insert: {
          id?: string
          products: Record<string, number>
          status?: TOrderStatuses
          user_id: string
        }
        Update: {
          id?: string
          products?: Record<string, number>
          status?: TOrderStatuses
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'orders_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          }
        ]
      }
      products: {
        Row: {
          brand: TBrand
          category: TCategory
          description: string
          id: string
          image: string | null
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
          id?: string
          image?: string | null
          in_stock?: number
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
          image?: string | null
          in_stock?: number
          name?: string
          price?: number
          qty?: number
          rating?: number | null
          unit?: string
          vitamins?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: 'products_brand_fkey'
            columns: ['brand']
            referencedRelation: 'brands'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'products_category_fkey'
            columns: ['category']
            referencedRelation: 'categories'
            referencedColumns: ['id']
          }
        ]
      }
      profiles: {
        Row: {
          cart: Record<string, number> | null
          city: string
          email: string
          firstname: string
          id: string
          last_searched_category: string | null
          lastname: string
          phone: string
          promocode: { code: string; discount: number } | null
          quiz_available_since: string | null
          role: string
          street: string
        }
        Insert: {
          cart?: Record<string, number> | null
          city?: string
          email: string
          firstname: string
          id: string
          last_searched_category?: string | null
          lastname: string
          phone?: string
          promocode?: { code: string; discount: number } | null
          quiz_available_since?: string | null
          role?: string
          street?: string
        }
        Update: {
          cart?: Record<string, number> | null
          city?: string
          email?: string
          firstname?: string
          id?: string
          last_searched_category?: string | null
          lastname?: string
          phone?: string
          promocode?: { code: string; discount: number } | null
          quiz_available_since?: string | null
          role?: string
          street?: string
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey'
            columns: ['id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'profiles_last_searched_category_fkey'
            columns: ['last_searched_category']
            referencedRelation: 'categories'
            referencedColumns: ['id']
          }
        ]
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
        Relationships: []
      }
      quiz: {
        Row: {
          answers: string[]
          id: string
          question: string
          rightAnswer: string
        }
        Insert: {
          answers: string[]
          id?: string
          question: string
          rightAnswer: string
        }
        Update: {
          answers?: string[]
          id?: string
          question?: string
          rightAnswer?: string
        }
        Relationships: []
      }
      recipes: {
        Row: {
          created_at: Date
          id: string
          ingredients: string[]
          instructions: string
          name: string
          questions: { answer: string; question: string }[]
          subtitle: string | null
        }
        Insert: {
          created_at?: Date
          id?: string
          ingredients: string[]
          instructions: string
          name: string
          questions: { answer: string; question: string }[]
          subtitle?: string | null
        }
        Update: {
          created_at?: Date
          id?: string
          ingredients?: string[]
          instructions?: string
          name?: string
          questions?: { answer: string; question: string }[]
          subtitle?: string | null
        }
        Relationships: []
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
