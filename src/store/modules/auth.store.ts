import { notificationHandler } from '@/helpers'
import { router } from '@/router'
import { routeNames } from '@/router/route-names'

export const useAuthStore = defineStore('authStore', () => {
  const user = ref<TNullable<IUser>>(null)

  const login = async (credentials: ILoginPayload): Promise<void> => {
    try {
      const { data, error } = await authService.login(credentials)

      if (error || !data.user) {
        throw new Error(error?.message)
      }

      const userProfile = await getUserProfile(data.user.id)
      user.value = userProfile

      notificationHandler('Signed in successfully', { type: 'success' })
      router.push({ name: routeNames.home })
    } catch (error) {
      notificationHandler(error as Error)
    }
  }

  const signup = async (credentials: ISignUpPayload): Promise<void> => {
    try {
      const { data, error } = await authService.signup(credentials)

      if (error || !data.user) {
        throw new Error(error?.message)
      }

      notificationHandler('Now, check your email to confirm it', { duration: 0, type: 'success' })
      router.push({ name: routeNames.login })
    } catch (error) {
      notificationHandler(error as Error)
    }
  }

  const getUserProfile = async (id?: string): Promise<IUser | null> => {
    try {
      id = id || (await authService.getUser())?.id

      if (!id) {
        return null
      }

      const { data, error } = await authService.getUserProfileById(id)

      if (error || !data?.length) {
        logout()

        return null
      }

      return data[0]
    } catch {
      return null
    }
  }

  const logout = async (): Promise<void> => {
    await authService.logout()
    user.value = null

    window.location.href = router.resolve({ name: routeNames.login }).href
  }

  return {
    user,
    login,
    signup,
    logout,
    getUserProfile
  }
})
