import cn from 'clsx'
import parse from 'html-react-parser'

import { type ModalProps } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import { type AlertPayload } from '@core/types/alert'
import { isEmptyValue } from '@/lib/utils'

import s from './AlertDialog.module.scss'
import { Close } from '@mui/icons-material'

type Props = AlertPayload & {
  open: boolean
  onClose: () => void
}

export default function AlertDialog({
  open,
  size = 'sm',
  title,
  message,
  showClose,
  disableClose,
  actions,
  onClose,
}: Props) {
  const { cancelAction, okAction } = actions ?? {}

  const showBtnClose = showClose && typeof onClose === 'function'

  const handleClose: ModalProps['onClose'] = (e, reason) => {
    if (reason !== 'backdropClick' || !disableClose) {
      onClose()
    }

    return false
  }

  return (
    <Dialog
      open={open}
      classes={{
        // root: s.root,
        paper: cn(s.paper, s[`is-${size}`]),
      }}
      disableEscapeKeyDown={disableClose}
      onClose={handleClose}
    >
      <DialogContent className={s.content}>
        {showBtnClose && (
          <div className='flex justify-end'>
            <IconButton className={s.close} onClick={() => onClose()}>
              <Close />
            </IconButton>
          </div>
        )}

        {!isEmptyValue(title) && (
          <div className={s.title}>
            <h2>{title}</h2>
          </div>
        )}

        {!isEmptyValue(message) && (
          <div className={s.paragraph}>
            <p>{parse(message)}</p>
          </div>
        )}
      </DialogContent>

      <DialogActions className={s.actions} sx={{ px: 3, pt: 0, pb: 3 }}>
        {cancelAction && (
          <button
            type='button'
            className='btn-text btn-text-primary uppercase'
            onClick={typeof cancelAction.onClick === 'function' ? cancelAction.onClick : onClose}
          >
            {cancelAction.label}
          </button>
        )}

        {okAction && (
          <button
            type='button'
            className='btn-text btn-text-primary uppercase'
            onClick={typeof okAction.onClick === 'function' ? okAction.onClick : onClose}
          >
            {okAction.label}
          </button>
        )}
      </DialogActions>
    </Dialog>
  )
}
