import { createContext, useContext, useRef } from 'react'
import { useStoreWithEqualityFn } from 'zustand/traditional'

import {
  createDeviceSelectorsStore,
  type DeviceSelectorsStore,
} from './stores/device-selectors-store'
import { createGlobalStore, type GlobalStore } from './stores/global-store'
import { type LayoutProviderProps, type LayoutState } from './types'

const LayoutContext = createContext<LayoutState | null>(null)

LayoutContext.displayName = 'LayoutContext'

export function LayoutProvider({ children, ...props }: LayoutProviderProps) {
  const storeRef = useRef<LayoutState>()

  if (!storeRef.current) {
    // Initialize store
    storeRef.current = {
      globalStore: createGlobalStore(),
      deviceSelectorsStore: createDeviceSelectorsStore(props.deviceSelectors),
      resetState: () => {
        // TODO: Reset state for all stores here
      },
    }
  }

  return <LayoutContext.Provider value={storeRef.current}>{children}</LayoutContext.Provider>
}

export function useLayoutContext(): LayoutState {
  const context = useContext(LayoutContext)

  if (!context) throw new Error('Missing LayoutProvider in the tree')

  return context
}

export function useGlobalStore<T>(
  selector: (state: GlobalStore) => T,
  equalityFn?: (left: T, right: T) => boolean
): T {
  const store = useContext(LayoutContext)

  if (!store) throw new Error('Missing LayoutProvider in the tree')

  return useStoreWithEqualityFn(store.globalStore, selector, equalityFn)
}

export function useDeviceSelectorsStore<T>(
  selector: (state: DeviceSelectorsStore) => T,
  equalityFn?: (left: T, right: T) => boolean
): T {
  const store = useContext(LayoutContext)

  if (!store) throw new Error('Missing LayoutProvider in the tree')

  return useStoreWithEqualityFn(store.deviceSelectorsStore, selector, equalityFn)
}
