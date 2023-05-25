import { ElNotification, type NotificationParams } from 'element-plus'

export const notificationHandler = (options?: NotificationParams) => {
  ElNotification(Object.assign({
    title: 'Oops, something went wrong',
    type: 'error'
  }, options))
}
