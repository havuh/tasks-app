import { createStore, type StoreApi } from 'zustand/vanilla'

import { type DeviceSelectors } from '@core/types'

export type DeviceSelectorsStore = DeviceSelectors & {
  setDeviceSelectors: (props: Partial<DeviceSelectors>) => void
}

export const DEFAULT_DEVICE_SELECTORS_STATE: DeviceSelectors = {
  isMobile: true,
  isMobileOnly: true,
  isTablet: false,
  isDesktop: false,
}

export const getInitialDeviceSelectors = (
  deviceSelectors: DeviceSelectors | null
): DeviceSelectors => {
  if (deviceSelectors) {
    return {
      ...DEFAULT_DEVICE_SELECTORS_STATE,
      ...deviceSelectors,
    }
  }

  return DEFAULT_DEVICE_SELECTORS_STATE
}

export const createDeviceSelectorsStore = (
  initState?: DeviceSelectors | null
): StoreApi<DeviceSelectorsStore> => {
  const mappedState = {
    ...DEFAULT_DEVICE_SELECTORS_STATE,
    ...initState,
  }

  return createStore<DeviceSelectorsStore>()(set => ({
    ...mappedState,
    setDeviceSelectors: props =>
      set(state => ({
        ...state,
        ...props,
      })),
  }))
}

export const deviceSelectorsSelector = (state: DeviceSelectorsStore): DeviceSelectors => ({
  isMobile: state.isMobile,
  isMobileOnly: state.isMobileOnly,
  isTablet: state.isTablet,
  isDesktop: state.isDesktop,
})
