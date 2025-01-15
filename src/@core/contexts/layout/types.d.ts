import { type StoreApi } from 'zustand'

import { type DeviceSelectors } from '@core/types'

import { type DeviceSelectorsStore } from './stores/device-selectors-store'
import { type GlobalStore } from './stores/global-store'

export type LayoutState = {
  globalStore: StoreApi<GlobalStore>
  deviceSelectorsStore: StoreApi<DeviceSelectorsStore>
  resetState: () => void
}

export type LayoutProviderProps = React.PropsWithChildren<{
  deviceSelectors?: DeviceSelectors | null
}>
