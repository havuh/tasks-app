import { useAlertStore } from '@core/stores/alert'
import { AlertDialog } from '@/components/ui'

export default function GlobalAlert() {
  const { open, title, message, showClose, disableClose, actions, closeAlert } = useAlertStore()

  const handleClose = () => {
    closeAlert()
  }

  return (
    <AlertDialog
      open={open}
      title={title}
      message={message}
      showClose={showClose}
      disableClose={disableClose}
      actions={actions}
      onClose={handleClose}
    />
  )
}
