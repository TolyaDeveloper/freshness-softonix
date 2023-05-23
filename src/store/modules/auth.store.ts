export const useAuthStore = defineStore('authStore', () => {
  const user = ref<TNullable<IUser>>(null)

  const login = async (credentials: ILoginPayload) => {
    const { data, error } = await authService.login(credentials)

    if (error || !data.user) {
      throw new Error(error?.message)
    }

    const userProfile = await getUserProfileById(data.user.id)
    console.log({ userProfile })
  }

  const signup = async (credentials: ISignUpPayload) => {
    const { data, error } = await authService.signup(credentials)

    if (error || !data.user) {
      throw new Error(error?.message)
    }
  }

  const getUserProfileById = async (id: string) => {
    const { data, error } = await authService.getUserProfileById(id)

    if (error || !data?.length) {
      throw new Error(error?.message)
    }

    return data[0]
  }

  return {
    user,
    login,
    signup
  }
})
