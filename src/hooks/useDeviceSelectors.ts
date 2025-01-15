import { useCallback, useEffect } from 'react'
import compare from 'just-compare'
import debounce from 'just-debounce-it'

import { deviceSelectorsSelector, useDeviceSelectorsStore } from '@core/contexts/layout'
import { useDeviceBreakpoints } from '@core/hooks'
import { type DeviceSelectors } from '@core/types'

/**
 * Subscribe to device selectors store and update media state when media query changes
 * @returns {DeviceSelectors}
 */
export function useDeviceSelectors(): DeviceSelectors {
  const media = useDeviceBreakpoints()
  const currentMedia = useDeviceSelectorsStore(deviceSelectorsSelector)
  const setDeviceSelectors = useDeviceSelectorsStore(state => state.setDeviceSelectors)

  const debouncedUpdateMedia = useCallback(
    debounce(
      (payload: DeviceSelectors) => {
        setDeviceSelectors(payload)
      },
      10,
      false
    ),
    []
  )

  // Update media state when media query changes
  useEffect(() => {
    if (!compare(media, currentMedia)) {
      debouncedUpdateMedia(media)
    }
  }, [media, debouncedUpdateMedia])

  return currentMedia
}
