import { match } from 'path-to-regexp'

import { type MenuItem } from '@core/types'

/**
 * Maps the menu items to match the current URL and sets the `isActive` property accordingly.
 * @param items - The menu items to map.
 * @param currentUrl - The current URL to match against.
 * @returns The mapped menu items with the `isActive` property set.
 */
export function mapMenuToMatchCurrentUrl(items: MenuItem[], currentUrl: string): MenuItem[] {
  return items.map(item => {
    if (item.type === 'collapse') {
      const children = mapMenuToMatchCurrentUrl(item.children ?? [], currentUrl)

      return {
        ...item,
        isActive: children.some(child => child.active) || item.active,
        children,
      }
    }

    if (item.url) {
      const urlMatch = match(item.url, { decode: decodeURIComponent })

      return {
        ...item,
        isActive: urlMatch(currentUrl) !== false,
      }
    }

    return {
      ...item,
      isActive: false,
    }
  })
}
