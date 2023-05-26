import { createClient } from '@supabase/supabase-js'

const supabase = createClient<IDatabase>(
  import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY
)

export const useSupabase = supabase
