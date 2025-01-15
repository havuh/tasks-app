export type GuardType = 'noauth' | 'auth'

export type UserType = 'guest' | 'admin'

export interface LoginFormValues {
  username: string;
  password: string;
}

export type User = {
  email: string
  firstName: string
  lastName: string
}

export type AuthToken = {
  access_token: string
  expires_in: number
  token_type: 'Bearer'
}

export type AuthResponse = AuthToken & {
  user: User
}
