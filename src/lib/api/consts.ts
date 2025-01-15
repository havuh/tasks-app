export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'

export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api'

export const getBaseApiUrl = (): string => {
  if (!API_URL) throw new Error('API_URL is not defined')

  return API_URL
}

export const makeApiUrl = (url: string): string => {
  if (!API_URL) throw new Error('API_URL is not defined')

  return `${API_URL}${url}`
}

export const makeLocalApiUrl = (url: string): string => {
  if (!BASE_URL) throw new Error('BASE_URL is not defined')

  return `${BASE_URL}/api${url}`
}
