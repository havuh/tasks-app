import { type DeviceSelectors } from '@core/types'

import { useMediaQuery } from './useMediaQuery'

export function useIsMobile(defaultValue = false): boolean {
  return useMediaQuery('(max-width: 1023px)', {
    defaultValue,
    initializeWithValue: true,
  })
}

export function useIsMobileOnly(defaultValue = false): boolean {
  return useMediaQuery('(max-width: 647px)', {
    defaultValue,
    initializeWithValue: true,
  })
}

export function useIsTablet(defaultValue = false): boolean {
  return useMediaQuery('(min-width: 648px) and (max-width: 1023px)', {
    defaultValue,
    initializeWithValue: true,
  })
}

export function useIsDesktop(defaultValue = false): boolean {
  return useMediaQuery('(min-width: 1024px)', {
    defaultValue,
    initializeWithValue: true,
  })
}

/**
 * Custom hook that provides device breakpoints based on media queries.
 * @param {Partial<DeviceSelectors>} query - Partial object containing optional initial values for device selectors.
 * @returns DeviceSelectors object with properties indicating the current device breakpoints.
 */
export function useDeviceBreakpoints(props?: Partial<DeviceSelectors>): DeviceSelectors {
  const isMobile = useMediaQuery('(max-width: 1023px)', {
    defaultValue: Boolean(props?.isMobile),
    initializeWithValue: true,
  })

  const isMobileOnly = useMediaQuery('(max-width: 647px)', {
    defaultValue: Boolean(props?.isMobileOnly),
    initializeWithValue: true,
  })

  const isTablet = useMediaQuery('(min-width: 648px) and (max-width: 1023px)', {
    defaultValue: Boolean(props?.isTablet),
    initializeWithValue: true,
  })

  const isDesktop = useMediaQuery('(min-width: 1024px)', {
    defaultValue: Boolean(props?.isDesktop),
    initializeWithValue: true,
  })

  return {
    isMobile,
    isMobileOnly,
    isTablet,
    isDesktop,
  }
}
