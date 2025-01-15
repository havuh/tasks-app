/**
 * Utility functions for working with collections, objects, and arrays.
 *
 * This utilities are extracted from the `just` library.
 *
 * @see - https://github.com/angus-c/just
 */

/**
 * Merge the properties of two or more objects into the first object.
 */
export function merge<T = any>(...args: any[]): T {
  let arg
  let i = args.length

  while (((arg = args[i - 1]), i--)) {
    if (!arg || (typeof arg !== 'object' && typeof arg !== 'function')) {
      throw new Error(`expected object, got ${arg}`)
    }
  }

  const result = args[0]
  const extenders = args.slice(1)
  const len = extenders.length

  for (let j = 0; j < len; j++) {
    const extender = extenders[j]
    for (const key in extender) {
      result[key] = extender[key]
    }
  }

  return result as T
}

/**
 * Deep merge the properties of two or more objects into the first object.
 * TODO: Create a test for this function.
 */
export function mergeDeep<T = any>(...args: any[]): T {
  let arg
  let i = args.length

  while (((arg = args[i - 1]), i--)) {
    if (!arg || (typeof arg !== 'object' && typeof arg !== 'function')) {
      throw new Error(`expected object, got ${arg}`)
    }
  }

  const result = args[0]
  const extenders = args.slice(1)
  const len = extenders.length

  for (let j = 0; j < len; j++) {
    const extender = extenders[j]
    for (const key in extender) {
      if (typeof extender[key] === 'object' && typeof result[key] === 'object') {
        result[key] = merge(result[key], extender[key])
      } else {
        result[key] = extender[key]
      }
    }
  }

  return result as T
}
