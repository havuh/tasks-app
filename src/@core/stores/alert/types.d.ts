import { type Methods, type Properties } from '@core/types'
import { type AlertActions, type AlertPayload, type AlertType } from '@core/types/alert'

export type AlertStore = {
  open: boolean
  type: AlertType
  title: string
  message: string
  showClose: boolean
  disableClose: boolean
  actions: AlertActions
  showAlert: (payload: AlertPayload) => void
  closeAlert: () => void
}

export type AlertProperties = Properties<AlertStore>

export type AlertSelector = Omit<AlertStore, 'showAlert'>

export type AlertSelectorActions = Pick<AlertStore, Methods<AlertStore>>
