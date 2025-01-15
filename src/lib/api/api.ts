import type { NativeRequestConfig, RequestConfig } from '@core/types/api'
import { isEmptyValue } from '@/lib/utils'

import { axiosInstance } from './axios'

export async function fetcher<T>({ url, ...config }: RequestConfig<T>): Promise<T> {
  if (isEmptyValue(url)) {
    throw new Error('The url parameter is required')
  }

  return await axiosInstance.get<T>(url, config).then(res => res.data)
}

export async function post<T>({ url, params, ...config }: RequestConfig<T>): Promise<T> {
  if (isEmptyValue(url)) {
    throw new Error('The url parameter is required')
  }

  return await axiosInstance.post<T>(url, params, config).then(res => res.data)
}

export async function nativeFetcher<T>({ url, config }: NativeRequestConfig): Promise<T> {
  return await fetch(url, config).then<T>(async res => (await res.json()) as T)
}
