import axios, { type AxiosError, type CreateAxiosDefaults } from 'axios'

import { API_URL } from './consts'

const baseURL = new URL(API_URL)

const axiosDefaultConfig: CreateAxiosDefaults = {
  baseURL: baseURL.origin,
  timeout: 0,
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'es-ES',
    'Content-Type': 'application/json',
  },
}

/**
 * Axios instance with custom configuration
 * @see [Documentation](https://axios-http.com/es/docs/instance)
 */
const axiosInstance = axios.create(axiosDefaultConfig)

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    /**
     * Do something before request is sent
     * @example Get token from cookie if is browser and add to headers
     * if (isBrowser) {
     *   const token = getAuthTokenFromCookie()
     *   if (token) {
     *     config.headers.Authorization = `${token.token_type} ${token.access_token}`
     *   }
     * }
     */
    return config
  },
  async (error: AxiosError) => {
    // Do something with request error
    return await Promise.reject(error)
  }
)

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  async (error: AxiosError) => {
    /**
     * Any status codes that falls outside the range of 2xx cause this function to trigger
     * Do something with response error
     * @example Show expired session alert if status is 401
     * const { status } = getResponseError(error, DEFAULT_MESSAGE)
     * if (status === UNAUTHORIZED) {
     *  // Show expired session alert
     * }
     *
     * @example Create a custom error class and throw it
     * const { status, message } = getResponseError(error, DEFAULT_MESSAGE)
     * const customError = new CustomError(message, status)
     * return await Promise.reject(customError)
     */
    return await Promise.reject(error)
  }
)

export { axiosDefaultConfig, axiosInstance }
