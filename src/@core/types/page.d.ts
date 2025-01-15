import { type AppProps } from 'next/app'

import { type EmotionCache } from '@emotion/cache'

import { type GuardType, type User } from './auth'

export type NavbarType = 'primary' | 'simple'

/**
 * Available device selectors
 * @url https://github.com/duskload/react-device-detect/blob/master/docs/selectors.md
 */
export interface DeviceSelectors {
  isMobile: boolean // device type is mobile or tablet
  isMobileOnly: boolean // device type is mobile
  isTablet: boolean // device type is tablet
  isDesktop: boolean
}

export interface PageConfig {
  guard?: GuardType
}

export interface RouteConfig {
  url: string
  config: PageConfig
}

export interface PageProps {
  deviceSelectors?: DeviceSelectors | null
  config?: PageConfig | null
  user?: User | null
}

export type MyAppProps = AppProps<PageProps> & {
  emotionCache?: EmotionCache
}
