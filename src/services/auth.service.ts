class AuthService {
  async login ({ email, password }: ILoginPayload) {
    const { data, error } = await useSupabase.auth.signInWithPassword({ email, password })

    return { data, error }
  }

  async signup ({ email, password, ...rest }: ISignUpPayload) {
    const { data, error } = await useSupabase.auth.signUp({ email, password, options: { data: rest } })

    return { data, error }
  }

  async getUserProfileById (id: string) {
    const { data, error } = await useSupabase.from('profiles').select('*').eq('id', id)

    return { data, error }
  }

  async logout () {
    const { error } = await useSupabase.auth.signOut()

    return { error }
  }
}

export const authService = new AuthService()
