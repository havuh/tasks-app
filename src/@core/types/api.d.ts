import { type AxiosRequestConfig } from 'axios'

export type RequestParams = Record<string, any>

export interface RequestConfig<D = any> extends AxiosRequestConfig<D> {
  url: string
  params?: RequestParams
}

export interface NativeRequestConfig {
  url: string | URL | globalThis.Request
  config?: RequestInit
}

export interface PaginatedResponse<T> {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: T[];
}

