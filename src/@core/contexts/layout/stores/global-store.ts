import { createStore, type StoreApi } from 'zustand/vanilla'

import { type Primitives, type PrimitivesNullable } from '@core/types'

export type GlobalStore = {
  openSidebar: boolean
  toggleSidebar: () => void
}

export type GlobalState = Primitives<GlobalStore>

export type GlobalStateProps = Partial<PrimitivesNullable<GlobalStore>>

export const DEFAULT_GLOBAL_STATE: GlobalState = {
  openSidebar: false,
}

export const createGlobalStore = ({
  openSidebar,
}: GlobalStateProps = DEFAULT_GLOBAL_STATE): StoreApi<GlobalStore> => {
  return createStore<GlobalStore>()(set => ({
    ...DEFAULT_GLOBAL_STATE,
    openSidebar: Boolean(openSidebar),
    toggleSidebar: () => set(state => ({ openSidebar: !state.openSidebar })),
  }))
}

export const sidebarSelector = (state: GlobalStore) => ({
  openSidebar: state.openSidebar,
  toggleSidebar: state.toggleSidebar,
})
