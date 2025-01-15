import { create } from 'zustand'

import { type AlertActions, type AlertPayload } from '@core/types/alert'
import { merge } from '@/lib/utils/just'

import { type AlertProperties, type AlertSelectorActions, type AlertStore } from './types'

const defaultActions: AlertActions = {
  okAction: {
    label: 'Aceptar',
  },
}

export const defaultValues: AlertProperties = {
  open: false,
  type: 'error',
  title: '!Ha ocurrido un error!',
  message: 'Por favor, inténtalo de nuevo en unos minutos.',
  showClose: false,
  disableClose: true,
  actions: defaultActions,
}

export const useAlertStore = create<AlertStore>(set => ({
  ...defaultValues,
  showAlert: (props: AlertPayload) => {
    set(
      merge<AlertProperties>(
        { ...defaultValues },
        {
          open: true,
          ...props,
        }
      )
    )
  },
  closeAlert: () => {
    set({ open: false })

    const timeout = setTimeout(() => {
      set({ ...defaultValues })
      clearTimeout(timeout)
    }, 300)
  },
}))

export const alertStoreSelector = (state: AlertStore): Pick<AlertStore, 'open' | 'showAlert'> => ({
  open: state.open,
  showAlert: state.showAlert,
})

export const alertStoreActionsSelector = (state: AlertStore): AlertSelectorActions => ({
  showAlert: state.showAlert,
  closeAlert: state.closeAlert,
})
