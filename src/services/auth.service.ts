class AuthService {
  login ({ email, password }: ILoginPayload) {
    return useSupabase.auth.signInWithPassword({ email, password })
  }

  signup ({ email, password, ...rest }: ISignUpPayload) {
    return useSupabase.auth.signUp({ email, password, options: { data: rest } })
  }

  getUserProfileById (id: string) {
    return useSupabase.from('profiles').select('*').eq('id', id)
  }

  async getUser () {
    return (await useSupabase.auth.getSession()).data.session?.user
  }

  logout () {
    return useSupabase.auth.signOut()
  }

  updateProfile (userId: string | undefined, updatedDataProfile: TUserUpdate) {
    return useSupabase.from('profiles').update(updatedDataProfile).eq('id', userId)
  }

  updateLastSearchedCategory (categoryId: string, userId: string) {
    return useSupabase.from('profiles').update({ last_searched_category: categoryId }).eq('id', userId)
  }
}

export const authService = new AuthService()
