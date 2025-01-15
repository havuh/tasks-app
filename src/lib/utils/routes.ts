import { match } from 'path-to-regexp'

import { GUARD_TYPE, ROUTE_SETTINGS } from '@core/settings/routes'
import { type PageConfig, type RouteConfig } from '@core/types'
import { isEmptyValue } from '@/lib/utils/common'

/**
 * Get page settings by slug
 * @param {URL} url
 * @returns {RouteConfig}
 */
export function getRouteConfig(url: URL): RouteConfig {
  if (isEmptyValue(url.pathname)) {
    throw new Error("URL can't be empty")
  }

  const settings = ROUTE_SETTINGS.find(({ url: pathname }) => {
    const pathnameMatch = match(pathname, { decode: decodeURIComponent })

    return pathnameMatch(url.pathname)
  })

  if (!settings) {
    throw new Error('Page settings not found')
  }

  return settings
}

/**
 * Get page config by pathname to validate guard
 */
export function getPageConfig(pathname: string): PageConfig | undefined {
  const pages = ROUTE_SETTINGS.filter(({ config: { guard } }) => {
    return guard === GUARD_TYPE.NOAUTH || guard === GUARD_TYPE.AUTH
  })

  const page = pages.find(({ url }) => {
    const urlMatch = match(url, { decode: decodeURIComponent })

    return urlMatch(pathname)
  })

  return page?.config ?? undefined
}
