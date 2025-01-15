import { createStore, type StoreApi } from 'zustand/vanilla'

import { type Properties, type User } from '@core/types'

export type UserStore = {
  isAuthenticated: boolean
  user: User | null
  setUser: (user: User | null) => void
}

export type UserStoreProps = Properties<UserStore>

export const createUserStore = (initState: User | null): StoreApi<UserStore> => {
  return createStore<UserStore>(set => ({
    isAuthenticated: !!initState,
    user: initState,
    setUser: user => {
      set(state => {
        const isAuthenticated = !!user

        return {
          ...state,
          isAuthenticated,
          user,
        }
      })
    },
  }))
}

export const userStoreSelector = (state: UserStore): UserStoreProps => ({
  isAuthenticated: state.isAuthenticated,
  user: state.user,
})
