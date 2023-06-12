import type { UploadFile } from 'element-plus'

class FilesService {
  async uploadProductImage (data: UploadFile) {
    if (!data.raw) {
      return
    }

    const storage = useSupabase.storage.from('product-images')

    const timestamp = Date.now()
    const fileName = `product-image-${timestamp}`

    const { data: uploadedFile, error } = await storage.upload(fileName, data.raw)

    if (error || !uploadedFile) {
      throw new Error('Failed to upload file')
    }

    const productUrl = await storage.getPublicUrl(uploadedFile.path).data.publicUrl

    return { productUrl }
  }
}

export const filesService = new FilesService()
