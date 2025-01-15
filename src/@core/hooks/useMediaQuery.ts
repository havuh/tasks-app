import { useState } from 'react'

import { isBrowser } from '@/lib/utils'

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

/**
 * Custom hook for tracking the state of a media query.
 * @param {string} query - The media query to track.
 * @param {?UseMediaQueryOptions} [options] - The default value to return if the hook is being run on the server (default is `false`).
 * @param {?boolean} [options.defaultValue] - The default value to return if the hook is being run on the server (default is `false`).
 * @param {?boolean} [options.initializeWithValue] - If `true` (default), the hook will initialize reading the media query. In SSR, you should set it to `false`, returning `options.defaultValue` or `false` initially.
 * @returns {boolean} The current state of the media query (true if the query matches, false otherwise).
 * @see [MDN Match Media](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
 * @example
 * const isSmallScreen = useMediaQuery('(max-width: 600px)');
 * // Use `isSmallScreen` to conditionally apply styles or logic based on the screen size.
 */
export function useMediaQuery(query: string, options?: UseMediaQueryOptions): boolean {
  const { defaultValue = false, initializeWithValue } = options ?? {}

  const getMatches = (query: string): boolean => {
    if (!isBrowser) {
      return defaultValue
    }

    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }

    return defaultValue
  })

  /** Handles the change event of the media query. */
  function handleChange() {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Use deprecated `addListener` and `removeListener` to support Safari < 14 (#135)
    if (typeof matchMedia.addListener === 'function') {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (typeof matchMedia.removeListener === 'function') {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
  }, [query])

  return matches
}
