import { type UrlObject } from 'url'

export type Url = string | UrlObject

export type MenuItemType = 'item' | 'group' | 'collapse'

export type MenuItemIcon = 'home' | 'list' | 'group'

export type IconProps = {
  className?: string
  size?: number
  width?: number
  height?: number
  color?: string
}

export type AssetProps = {
  id: number
  url: string
  alt: string
  width: number
  height: number
}

export type MenuItem = {
  id: number
  type: MenuItemType
  name: string
  description?: string
  icon?: MenuItemIcon
  url?: string
  level?: number
  parent?: MenuItem
  active?: boolean
  children?: MenuItem[]
}

export type SelectOption = {
  id: number | string
  name: string
}

export type PagResponse<T> = {
  count: number
  next?: number
  previous?: number
  hasNextPage?: boolean
  endCursor?: string
  results: T[]
}

export type PagStateProps<T> = {
  isFiltering: boolean
  rowCount: number
  rows: T[]
  setIsFiltering: (val: boolean) => void
}
