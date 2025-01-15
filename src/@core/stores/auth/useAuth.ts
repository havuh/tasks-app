import isEmpty from 'just-is-empty'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { type User } from '@core/types/auth'

import { type AuthState, type AuthStatePersist } from './types'
import { isEmptyValue } from '@/lib/utils'
import { getAuthTokenFromCookie } from '@/lib/utils/auth'
import { getUserProfile } from '@/services/user'

export const useAuth = create<AuthState, AuthStatePersist>(
  persist(
    (set, get) => ({
      hasHydrated: false,
      isAuthenticated: false,
      user: null,
      setHasHydrated: (value: boolean) => {
        set(() => ({ hasHydrated: value }))
      },
      setIsAuthenticated: (isAuth: boolean) => {
        set(() => ({ isAuthenticated: isAuth }))
      },
      setUser: (data: User) => {
        const user: User = {
          email: data?.email ?? '',
          firstName: data?.firstName ?? '',
          lastName: data?.lastName ?? ''
        }

        set(() => ({ isAuthenticated: true, user }))
      },
      /**
       * Verifies if the user is authenticated by checking if the access token is valid
       * @returns boolean
       */
      verifyIsAuthenticated: async () => {
        const auth = getAuthTokenFromCookie()
        const { user } = get()

        if (!isEmptyValue(auth?.access_token) && !isEmpty(user)) {
          return true
        }

        // Retrieve user profile if the user is authenticated
        // but the user data is not available in state or storage
        if (!isEmptyValue(auth?.access_token) && isEmpty(user)) {
          try {
            const userData = await getUserProfile(auth?.access_token as string)

            if (userData != null) {
              get()?.setUser(userData)

              return true
            }
          } catch (error) {
            console.error('Error verifying user', error)
          }
        }

        return false
      },
      resetState: () => {
        set(() => ({ isAuthenticated: false, user: null }))
      }
    }),
    {
      name: 'user',
      partialize: state => ({ user: state.user }),
      onRehydrateStorage: () => (state, error) => {
        if (error) {
          console.error('An error happened during hydration', error)

          return
        }

        const auth = getAuthTokenFromCookie()
        const timeout = setTimeout(() => {
          if (!isEmptyValue(auth?.access_token)) {
            state?.setIsAuthenticated(true)
          } else {
            state?.resetState()
          }

          state?.setHasHydrated(true)

          clearTimeout(timeout)
        }, 0)
      }
    }
  )
)

export const authSelector = (
  state: AuthState
): Pick<AuthState, 'hasHydrated' | 'isAuthenticated' | 'user'> => ({
  hasHydrated: state.hasHydrated,
  isAuthenticated: state.isAuthenticated,
  user: state.user
})
