export type ErrorResponse<T = any> = {
  status: number
  message: string
  code?: string
  data?: T
}
