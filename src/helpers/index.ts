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
