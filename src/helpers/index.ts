import { ElNotification, type NotificationParams } from 'element-plus'
import type { LocationQueryValue } from 'vue-router'

export const notificationHandler = (message: Error | string, options?: NotificationParams) => {
  ElNotification(Object.assign({
    message: (message as Error).message || message as string || 'Oops, something went wrong',
    type: 'error'
  }, options))
}

export const parseArrayQuery = (query: LocationQueryValue | LocationQueryValue[]): any => {
  if (!query) {
    return []
  }

  if (Array.isArray(query)) {
    return query
  }

  return [query]
}
