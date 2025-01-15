import {
  Controller,
  get,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form';

import {
  type FilledTextFieldProps,
  type MenuProps,
  type OutlinedTextFieldProps,
  type SxProps,
  TextField,
} from '@mui/material';
import { inputValidation } from '../utils/inputValidation';

export type InputFormProps = {
  name: string;
  label?: string;
  required?: boolean;
  multiline?: boolean;
  disabled?: boolean;
  focused?: boolean;
  type?: string;
  InputProps?: any;
  value?: any;
  rows?: number | string;
  children?: JSX.Element | JSX.Element[];
  isSelect?: boolean;
  MenuProps?: Partial<MenuProps>;
  helperText?: string;
  typeRule?: 'text' | 'email' | 'password';
  rules?: UseControllerProps['rules'];
  sx?: SxProps;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

const rulesTypes: Record<string, string> = {
  password: 'password',
  email: 'email',
};

const InputForm: React.FC<InputFormProps> = ({
  name,
  label,
  type = 'text',
  required = false,
  disabled = false,
  focused,
  InputProps,
  multiline = false,
  rows = 4,
  value = '',
  children,
  isSelect = false,
  MenuProps,
  helperText,
  typeRule,
  rules,
  sx,
  onChange,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const typeRules = rulesTypes[name] ?? typeRule ?? 'text';

  const error = get(errors, name);

  const textFieldProps: FilledTextFieldProps | OutlinedTextFieldProps = {
    autoComplete: 'off',
    disabled,
    focused,
    rows,
    error: !!error,
    multiline,
    fullWidth: true,
    InputProps,
    helperText: (error?.message as React.ReactNode) || helperText,
    label,
    type,
    variant: 'outlined',
    select: isSelect,
    SelectProps: isSelect ? { MenuProps, displayEmpty: true } : undefined,
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={value}
      rules={rules || inputValidation(typeRules, required, helperText)}
      render={({ field }) => (
        <TextField
          {...field}
          {...textFieldProps}
          required={required}
          onChange={(e) => {
            const value = e.target.value;
            field.onChange(value);
            if (onChange) {
              onChange(e);
            }
          }}
          sx={sx}
        >
          {children}
        </TextField>
      )}
    />
  );
};

export default InputForm;
