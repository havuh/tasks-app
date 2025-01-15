import { type ErrorResponse } from '@core/types'

import { BAD_REQUEST } from '../consts'

/**
 * Get the handling errors from the axios response
 */

export function getResponseError(error: any, defaultMessage?: string): ErrorResponse {
  if (error?.response) {
    // The request was made and the server responded with a status code
    const { data, status } = error.response ?? {}

    const nonFieldErrors = data?.non_field_errors ?? []

    if (nonFieldErrors.length) {
      return {
        status,
        message: nonFieldErrors[0] ?? defaultMessage,
        data,
      }
    }

    return {
      status,
      message: data?.message ?? defaultMessage,
      data,
    }
  }

  if (error?.request) {
    // The request was made but no response was received
    return {
      status: 0,
      message: error?.message ?? 'No se pudo establecer conexión con el servidor',
    }
  }

  return {
    status: BAD_REQUEST,
    message: error?.message ?? defaultMessage,
  }
}
