class AuthService {
  async login ({ email, password }: ILoginPayload) {
    const { data } = await useSupabase.auth.signInWithPassword({ email, password })

    return data
  }

  async signup ({ email, password, ...rest }: ISignUpPayload) {
    const { data } = await useSupabase.auth.signUp({ email, password, options: { data: rest } })

    return data
  }
}

export const authService = new AuthService()
