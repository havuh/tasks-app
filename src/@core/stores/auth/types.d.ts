import { type User } from '@core/types/auth'

export interface AuthState {
  hasHydrated: boolean
  isAuthenticated: boolean
  user: User | null
  setHasHydrated: (value: boolean) => void
  setIsAuthenticated: (value: boolean) => void
  setUser: (data: User) => void
  verifyIsAuthenticated: () => Promise<boolean>
  resetState: () => void
}

export type AuthStatePersist = [
  ['zustand/persist', { user: User | null }],
  ['zustand/devtools', never]
]
