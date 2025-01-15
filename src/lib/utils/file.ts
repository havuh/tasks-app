/**
 * Get data url from base64
 * @param {string} content
 * @returns {string}
 */
export function getDataUrlFromBase64(content: string): string | undefined {
  const isBase64 =
    /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(content)

  if (!isBase64) {
    return
  }

  return `data:image/jpg;base64,${content}`
}

/**
 * Download a file from blob
 * @param {Blob} blob
 * @param {string} filename
 * @returns {void}
 */
export function downloadFile(blob: string | Blob, filename: string): void {
  // saveAs(blob, filename)
}

/**
 * Read file async
 * @param {File} file
 * @returns {Promise<string>}
 */
export async function readFileAsync(file: File): Promise<string> {
  return await new Promise<string>((resolve, reject) => {
    if (!(file instanceof File)) {
      return
    }

    const reader = new window.FileReader()

    reader.onload = () => {
      const buf = Buffer.from(reader.result as string, 'binary')
      resolve(`data:${file.type};base64,${buf.toString('base64')}`)
    }

    reader.onerror = reject

    reader.readAsBinaryString(file)
  })
}
