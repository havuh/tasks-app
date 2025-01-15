export type AlertType = 'success' | 'error' | 'none'

export type AlertActionProps = {
  label: string
  onClick?: () => void
}

export type AlertActions = {
  okAction?: AlertActionProps
  cancelAction?: AlertActionProps
}

export type AlertPayload = {
  type?: AlertType
  size?: 'sm' | 'md' | 'lg'
  title: string
  message: string
  showClose?: boolean
  disableClose?: boolean
  actions?: AlertActions
}
