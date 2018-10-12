import axios from 'axios'

/**
 * File 타입을 S3에 업로드합니다.
 * @param preSignedURL 서버로부터 발급받은 S3 Pre-Signed URL
 * @param file 업로드 할 File
 */
export async function uploadFileToS3Directly(preSignedURL: string, file: File): Promise<void> {
  try {
    await axios.put(preSignedURL, file, { headers: { 'Content-Type': 'multipart/form-data' } })
  } catch (err) {
    throw new Error('S3 Upload Failed')
  }
}
