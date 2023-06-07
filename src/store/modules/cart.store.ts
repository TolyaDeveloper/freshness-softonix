import { router } from '@/router'
import { routeNames } from '@/router/route-names'

export const useCartStore = defineStore('cartStore', () => {
  const authStore = useAuthStore()

  const cartProducts = ref<IProduct[]>([])

  const getProductsFromUserCart = async () => {
    try {
      if (!authStore.user?.cart) {
        return
      }

      const productIds = Object.keys(authStore.user.cart)

      const { data } = await generalService.getProductsByIds(productIds)

      if (!data) {
        return
      }

      cartProducts.value = data
    } catch (error) {
      console.error(error)
    }
  }

  const addProductToCart = async (productId: string, units: number) => {
    try {
      if (!authStore.user) {
        router.push({ name: routeNames.login })

        return
      }

      if (!authStore.user.cart) {
        authStore.user.cart = {}
      }

      const newCart = { ...authStore.user.cart, [productId]: units }

      await cartService.updateCart(newCart, authStore.user.id)

      authStore.user.cart[productId] = units
    } catch (error) {
      console.error(error)
    }
  }

  const deleteProductFromCart = async (productId: string) => {
    try {
      if (!authStore.user?.cart) {
        return
      }

      delete authStore.user.cart[productId]

      await cartService.updateCart(authStore.user.cart, authStore.user.id)

      const currentIndex = cartProducts.value.findIndex(cartProduct => cartProduct.id === productId)
      cartProducts.value.splice(currentIndex, 1)
    } catch (error) {
      console.error(error)
    }
  }

  const editProductCartUnits = async (productId: string, units: number) => {
    try {
      if (!authStore.user?.cart) {
        return
      }

      const newCart = {
        ...authStore.user.cart,
        [productId]: units
      }

      await cartService.updateCart(newCart, authStore.user.id)

      authStore.user.cart[productId] = units
    } catch (error) {
      console.error(error)
    }
  }

  const getTotalCartPrice = () => {
    const userCart = authStore.user?.cart ?? {}

    return cartProducts.value.reduce((total, product) => {
      return total + (product.price * (userCart[product.id] ?? 0))
    }, 0)
  }

  return {
    cartProducts,
    getProductsFromUserCart,
    addProductToCart,
    deleteProductFromCart,
    editProductCartUnits,
    getTotalCartPrice
  }
})
