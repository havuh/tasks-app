import useSWR, { type SWRResponse } from 'swr'
import { type BareFetcher, type PublicConfiguration } from 'swr/_internal'
import useSWRImmutable from 'swr/immutable'

import type { NativeRequestConfig, RequestConfig } from '@core/types/api'
import { isEmptyValue } from '@/lib/utils'

import { fetcher, nativeFetcher, post } from './api'

type SWRConfig<T> = Partial<PublicConfiguration<T, any, BareFetcher<T>>> | undefined

export const DEFAULT_SWR_CONFIG = {
  revalidateIfStale: true,
  revalidateOnFocus: false,
  revalidateOnReconnect: true,
  keepPreviousData: true,
}

export const DEFAULT_SWR_INMUTABLE_CONFIG = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
}

/**
 * Hook to use SWR with fetcher
 * @param {RequestConfig | null} key - The request configuration
 * @param {SWRConfig<T>} config - The SWR configuration
 * @returns {SWRResponse<T>} The SWR response
 * @example
 * // Usage in a functional component
 * const { data, error } = useRequest({ url: '/api/user' })
 * // Usage in a functional component with params
 * const { data, error } = useRequest({ url: '/api/user', params: { id: 1 } })
 */
export function useRequest<T>(
  key: RequestConfig | null,
  config: SWRConfig<T> = DEFAULT_SWR_CONFIG
): SWRResponse<T> {
  return useSWR<T>(key, fetcher, config)
}

export function useImmutableRequest<T>(
  key: RequestConfig | null,
  config: SWRConfig<T>
): SWRResponse<T> {
  if (isEmptyValue(key?.url)) {
    throw new Error('Url is required')
  }

  return useSWRImmutable<T>(key, fetcher, config)
}

export function useNativeRequest<T>(
  key: NativeRequestConfig | null,
  config: SWRConfig<T> = DEFAULT_SWR_INMUTABLE_CONFIG
): SWRResponse<T> {
  if (isEmptyValue(key?.url)) {
    throw new Error('Url is required')
  }

  return useSWRImmutable<T>(key, nativeFetcher, config)
}

export function usePost<T>(
  key: RequestConfig | null,
  config: SWRConfig<T> = DEFAULT_SWR_CONFIG
): SWRResponse<T> {
  return useSWR<T>(key, post, config)
}
