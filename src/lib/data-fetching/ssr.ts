import { type PageProps } from '@core/types/page'

import { BASE_URL } from '../api'

import { getCommonPageProps } from './getCommonPageProps'
import { type CreateServerSideProps, type CreateServerSidePropsCallback } from './types'

/**
 * Creates a server-side props function for Next.js pages.
 *
 * @template Props - The type of the props object returned by the server-side props function.
 * @param {CreateServerSidePropsCallback<Props>} [fn] - An optional callback function that generates the server-side props.
 * @returns {CreateServerSideProps<Props>} - The server-side props function.
 */
export function createServerSideProps<Props extends PageProps = PageProps>(
  fn?: CreateServerSidePropsCallback<Props>
): CreateServerSideProps<Props> {
  return async context => {
    const { req, resolvedUrl } = context
    const userAgent = req.headers['user-agent'] ?? ''
    const url = new URL(resolvedUrl, BASE_URL)

    const commonProps = getCommonPageProps({
      url,
      userAgent,
    })

    const props = {
      deviceSelectors: null,
      config: null,
      user: null,
      ...commonProps,
    } as Props

    // If the callback with custom serverSideProps is provided, call it and return what it did
    if (typeof fn === 'function') {
      return await fn({ context, props })
    }

    return { props }
  }
}
