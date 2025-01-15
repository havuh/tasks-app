import { useState } from 'react';

import { IconButton, InputAdornment } from '@mui/material';

import InputForm from '../InputForm';
import Eye from '@/components/icons/common/eye';
import EyeSlash from '@/components/icons/common/eye-slash';

const InputPassword: React.FC<{ name?: string; label?: string, value?: string }> = ({
  name = 'password',
  label = 'Contraseña',
  value = '',
}) => {
  const [visibility, setVisibility] = useState(false);

  const handleVisibility = (): void => {
    setVisibility(!visibility);
  };

  return (
    <InputForm
      required
      name={name}
      value={value}
      type={visibility ? 'text' : 'password'}
      label={label}
      InputProps={{
        inputMode: 'numeric',
        pattern: '[0-9]*',
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleVisibility}>
              {visibility ? <Eye color="#000" /> : <EyeSlash color="#000" />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputPassword;
