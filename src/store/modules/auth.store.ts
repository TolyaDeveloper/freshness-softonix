export const useAuthStore = defineStore('authStore', () => {
  const user = ref<TNullable<IUser>>(null)

  const login = async (credentials: ILoginPayload) => {
    try {
      await authService.login(credentials)
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message)
      }
    }
  }

  const signup = async (credentials: ISignUpPayload) => {
    try {
      await authService.signup(credentials)
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message)
      }
    }
  }

  return {
    user,
    login,
    signup
  }
})
