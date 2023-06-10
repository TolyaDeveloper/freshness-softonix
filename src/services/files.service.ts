import type { UploadFile } from 'element-plus'

class FilesService {
  async uploadProductImage (data: UploadFile) {
    if (!data.raw) {
      return
    }

    const storage = useSupabase.storage.from('product-images')
    const res = await storage.upload('product-image', data.raw)

    if (!res.data) {
      return
    }

    const productUrl = await storage.getPublicUrl(res.data.path).data.publicUrl

    return { productUrl }
  }
}

export const filesService = new FilesService()
