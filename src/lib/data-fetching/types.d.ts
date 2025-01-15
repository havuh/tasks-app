import {
  type GetServerSidePropsContext,
  type GetServerSidePropsResult,
  type GetStaticPropsContext,
  type GetStaticPropsResult,
  type PreviewData,
} from 'next'
import type { ParsedUrlQuery } from 'querystring'

import { type PageProps } from '@core/types/page'

/**
 * Static Site Generation feature for Next.js.
 */
export type CreateStaticPropsConfig = {
  pathname?: string
  revalidate?: number
}

export type CreateStaticPropsCallback<
  Props extends PageProps,
  Params extends ParsedUrlQuery = ParsedUrlQuery,
  Preview extends PreviewData = PreviewData,
> =
  | ((params: {
      context: GetStaticPropsContext<Params, Preview>
      props: Props
    }) => Promise<GetStaticPropsResult<Props>>)
  | ((params: {
      context: GetStaticPropsContext<Params, Preview>
      props: Props
    }) => GetStaticPropsResult<Props>)

export type CreateStaticProps<
  Props extends PageProps,
  Params extends ParsedUrlQuery = ParsedUrlQuery,
  Preview extends PreviewData = PreviewData,
> = (
  context: GetStaticPropsContext<Params, Preview>
) => Promise<GetStaticPropsResult<Props>> | GetStaticPropsResult<Props>

/**
 * Server-side Rendering feature for Next.js.
 */
export type CreateServerSidePropsCallback<
  Props extends PageProps,
  Params extends ParsedUrlQuery = ParsedUrlQuery,
  Preview extends PreviewData = PreviewData,
> =
  | ((params: {
      context: GetServerSidePropsContext<Params, Preview>
      props: Props
    }) => Promise<GetServerSidePropsResult<Props>>)
  | ((params: {
      context: GetServerSidePropsContext<Params, Preview>
      props: Props
    }) => GetServerSidePropsResult<Props>)

export type CreateServerSideProps<
  Props extends PageProps,
  Params extends ParsedUrlQuery = ParsedUrlQuery,
  Preview extends PreviewData = PreviewData,
> = (
  context: GetServerSidePropsContext<Params, Preview>
) => Promise<GetServerSidePropsResult<Props>>
