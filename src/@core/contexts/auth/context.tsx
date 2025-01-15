import { createContext, useContext, useRef } from 'react'
import { useStoreWithEqualityFn } from 'zustand/traditional'

import { type AuthProviderProps, type AuthState } from './types'
import { createUserStore, type UserStore } from './user-store'

const AuthContext = createContext<AuthState | null>(null)

AuthContext.displayName = 'AuthContext'

export function AuthProvider({ children, ...props }: AuthProviderProps) {
  const storeRef = useRef<AuthState>()

  if (!storeRef.current) {
    // console.log('AuthProvider : props', props)

    // Initialize store
    storeRef.current = {
      userStore: createUserStore(props.user ?? null),
      resetState: () => {
      },
    }
  }

  return <AuthContext.Provider value={storeRef.current}>{children}</AuthContext.Provider>
}

export function useAuthContext(): AuthState {
  const context = useContext(AuthContext)

  if (!context) throw new Error('Missing AuthProvider in the tree')

  return context
}

export function useUserStore<T>(
  selector: (state: UserStore) => T,
  equalityFn?: (left: T, right: T) => boolean
): T {
  const store = useContext(AuthContext)

  if (!store) throw new Error('Missing AuthProvider in the tree')

  return useStoreWithEqualityFn(store.userStore, selector, equalityFn)
}
