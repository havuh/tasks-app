import { type GuardType, type RouteConfig } from '@core/types'
import { PATHS } from './paths'

export const GUARD_TYPE: Record<Uppercase<GuardType>, GuardType> = {
  NOAUTH: 'noauth',
  AUTH: 'auth',
} as const

/**
 * Page settings for validation and set default values
 * @example
 * ```js
 * {
 *  url: '/auth/login',
 *  config: {
 *   guard: GUARD_TYPE.NOAUTH,
 *  }
 * }
 * ```
 *
 * @type {RouteConfig[]}
 */
export const ROUTE_SETTINGS: RouteConfig[] = [
  {
    url: PATHS.taskPaths.home,
    config: {
      guard: GUARD_TYPE.AUTH,
    },
  },
  {
    url: PATHS.taskPaths.taskList,
    config: {
      guard: GUARD_TYPE.AUTH,
    }
  },
  {
    url: PATHS.taskPaths.addTask,
    config: {
      guard: GUARD_TYPE.AUTH,
    }
  },
  {
    url: PATHS.taskPaths.editTask,
    config: {
      guard: GUARD_TYPE.AUTH,
    }
  },
  {
    url: PATHS.authPaths.signIn,
    config: {
      guard: GUARD_TYPE.NOAUTH,
    },
  },
]
