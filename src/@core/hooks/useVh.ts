import { useCallback, useEffect, useState } from 'react'

import { isBrowser } from '@/lib/utils/common'

const VARIABLE_NAME = '--vh'

const getCurrentVh = (): number => {
  // window check for server-side rendering
  if (!isBrowser) {
    return 0
  }

  const height =
    window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

  return Number((height * 0.01).toFixed(2))
}

let count = 0

export function useVh(): number {
  const [vh, setVh] = useState(getCurrentVh())
  const updateVh = useCallback(() => {
    const newVh = getCurrentVh()

    document.documentElement.style.setProperty(VARIABLE_NAME, `${newVh}px`)
    setVh(newVh)
  }, [setVh])

  useEffect(() => {
    count += 1

    updateVh()

    window.addEventListener('resize', updateVh)

    return () => {
      window.removeEventListener('resize', updateVh)

      count -= 1

      if (count === 0) {
        document.documentElement.style.removeProperty(VARIABLE_NAME)
      }
    }
  }, [updateVh])

  return vh
}
