import { getSelectorsByUserAgent } from 'react-device-detect'

import { type DeviceSelectors, type PageProps } from '@core/types'
import { getRouteConfig } from '@/lib/utils/routes'

import { isEmptyValue } from '../utils'

type GetCommonPageProps = {
  url: URL
  userAgent?: string
}

const mapSelectorsToState = ({
  isMobile,
  isMobileOnly,
  isTablet,
  isDesktop,
}: DeviceSelectors): DeviceSelectors => {
  return {
    isMobile,
    isMobileOnly,
    isTablet,
    isDesktop,
  }
}

export function getCommonPageProps({ url, userAgent }: GetCommonPageProps): Partial<PageProps> {
  const deviceSelectors =
    userAgent && !isEmptyValue(userAgent)
      ? mapSelectorsToState(getSelectorsByUserAgent(userAgent) as DeviceSelectors)
      : null

  const { config } = getRouteConfig(url)

  return {
    deviceSelectors,
    config,
  }
}
