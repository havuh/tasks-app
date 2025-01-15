import { MenuItem } from '@mui/material'
import InputForm from '../InputForm'

interface SelectFormProps {
  name: string
  label?: string
  disabled?: boolean
  defaultValue?: any
  options: Array<{ id: string | number; name: string }>
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const SelectForm = ({
  name,
  label = 'Seleccione una opcion',
  disabled = false,
  defaultValue = '',
  options = [],
  onChange
}: SelectFormProps) => {
  return (
    <InputForm
      name={name}
      label={label}
      disabled={disabled}
      required
      isSelect
      value={defaultValue}
      onChange={onChange}
    >
      {options?.map(item => (
        <MenuItem key={item.id} value={item.name}>
          {item.name}
        </MenuItem>
      ))}
    </InputForm>
  )
}

export default SelectForm
