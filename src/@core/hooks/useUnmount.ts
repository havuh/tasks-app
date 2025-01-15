import { useEffect, useRef } from 'react'

/**
 * Hook that runs a cleanup function when the component is unmounted.
 * @param {() => void} fn - The cleanup function to be executed on unmount.
 * @example
 * // Usage in a functional component
 * useUnmount(() => {
 *   // Cleanup logic here
 * });
 */
export function useUnmount(fn: () => void): void {
  const funcRef = useRef(fn)

  funcRef.current = fn

  useEffect(
    () => () => {
      funcRef.current()
    },
    []
  )
}
