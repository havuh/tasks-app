import { type StoreApi } from 'zustand'

import { type User } from '@core/types'

import { type UserStore } from './user-store'

export type AuthState = {
  userStore: StoreApi<UserStore>
  resetState: () => void
}

export type AuthProviderProps = React.PropsWithChildren<{
  user?: User | null
}>
