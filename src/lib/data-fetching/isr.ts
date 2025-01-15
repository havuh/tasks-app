import isEmpty from 'just-is-empty'
import { compile } from 'path-to-regexp'

import { type PageProps } from '@core/types'

import { BASE_URL } from '../api'
import { ISR_REVALIDATE_TIME } from '../consts'
import { isEmptyValue } from '../utils'

import { getCommonPageProps } from './getCommonPageProps'
import {
  type CreateStaticProps,
  type CreateStaticPropsCallback,
  type CreateStaticPropsConfig,
} from './types'

/**
 * Creates static props for Next.js pages with optional data fetching.
 *
 * @template Props - The type of the page props.
 * @param {CreateStaticPropsConfig} config - The configuration object for static props generation.
 * @param {CreateStaticPropsCallback<Props>} [fn] - The optional callback function for custom server-side props.
 * @returns {CreateStaticProps<Props>} - The static props function.
 * @throws {Error} - If there is an error in generating the static props.
 */
export function createStaticProps<Props extends PageProps = PageProps>(
  config: CreateStaticPropsConfig,
  fn?: CreateStaticPropsCallback<Props>
): CreateStaticProps<Props> {
  return async context => {
    try {
      const { pathname } = config

      if (!pathname || isEmptyValue(pathname)) {
        throw new Error("Property pathname can't be empty")
      }

      const { params } = context
      let urlPath = pathname

      // If params is not empty, compile the path with the params
      if (!isEmpty(params)) {
        const toPath = compile(pathname, { encode: encodeURIComponent })
        urlPath = toPath(params)
      }

      const url = new URL(urlPath, BASE_URL)
      const commonProps = getCommonPageProps({ url })

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

      return { props, revalidate: ISR_REVALIDATE_TIME }
    } catch (error: any) {
      throw new Error(`Error in createStaticProps: ${error?.message as string}`)
    }
  }
}
