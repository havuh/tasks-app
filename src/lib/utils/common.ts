export const isBrowser = typeof window !== 'undefined'

export const isNavigator = typeof navigator !== 'undefined'

export const supportsIntl = isBrowser && isNavigator && !!window.Intl

/**
 * Validate string or number if it is empty
 * @param {*} val
 * @returns {boolean}
 */
export function isEmptyValue(val: unknown): boolean {
  if (val == null) {
    return true
  }

  if (typeof val === 'string' && val.trim() === '') {
    return true
  }

  if (typeof val === 'number' && isNaN(val)) {
    return true
  }

  return false
}
