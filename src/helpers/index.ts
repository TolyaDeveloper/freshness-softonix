import { ElNotification, type NotificationParams } from 'element-plus'

export const notificationHandler = (message: Error | string, options?: NotificationParams) => {
  ElNotification(Object.assign({
    message: (message as Error).message || message as string || 'Oops, something went wrong',
    type: 'error'
  }, options))
}

export const findCategory = (categories: TCategory[], categoryId: string) => {
  return categories.find(category => category.id === categoryId)?.name
}

export const validateQuantityInput = (quantity: number) => {
  return quantity >= 1 && !isNaN(quantity)
}

export const generatePromoCode = (): TPromocode => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const codeLength = 6
  const discountOptions = [10, 15, 20]

  let code = ''

  for (let i = 0; i < codeLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    code += characters.charAt(randomIndex)
  }

  const discount = discountOptions[Math.floor(Math.random() * discountOptions.length)]

  return { code, discount }
}
