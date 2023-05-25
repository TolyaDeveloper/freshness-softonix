import { ElNotification, type NotificationParams } from 'element-plus'

export const notifySuccess = (options?: NotificationParams) => {
  ElNotification(Object.assign({ title: 'success', type: 'success' }, options))
}

export const notifyError = (options?: NotificationParams) => {
  ElNotification(Object.assign({
    title: 'Error',
    message: 'Oops, something went wrong',
    type: 'error'
  }, options))
}
