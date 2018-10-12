/**
 * Input 태그를 가상으로 만들어 파일 열기 Dialog를 호출합니다.
 * @param accept 열기 가능한 파일 확장자 명. MIME을 쉼표로 구분합니다. (ex: 'image/png, image/gif')
 */
export function getFile(accept: string): Promise<File> {
  return new Promise((resolve) => {
    const fileInput = document.createElement('input')
    fileInput.setAttribute('type', 'file')
    fileInput.setAttribute('accept', accept)
    fileInput.style.display = 'none'
    function onFileInputChanged() {
      fileInput.removeEventListener('change', onFileInputChanged)
      const files: any = fileInput.files
      const file = files[0]
      resolve(file)
    }
    fileInput.addEventListener('change', onFileInputChanged)
    document.body.appendChild(fileInput)
    fileInput.click()
  })
}
