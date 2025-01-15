import { Form } from '@/components/ui';
import { useLoginForm } from './useLoginForm';
import InputForm from '@/components/ui/InputForm';
import { LoginFormValues, TypeWithKey } from '@core/types';

import Button from '@/components/ui/Button';
import InputPassword from '@/components/ui/InputPassword';
import { Box } from '@mui/material';

export default function LoginForm() {
  const { signIn, isLoading } = useLoginForm();

  const handleLogin = (values: TypeWithKey<any>) => {
    if (isLoading) return;

    signIn(values as LoginFormValues);
  };

  return (
    <Form onSubmit={handleLogin}>
      <Box my={2}>
        <InputForm label="Correo electrónico" name="username" type="email" value='seekglobal@seek.pe' required />
      </Box>
      <InputPassword value='password' />

      <Box mt={2}>
        <Button
          type="submit"
          text="Iniciar sesión"
          loader={isLoading}
          variant="contained"
          sx={{
            width: '100%',
          }}
        />
      </Box>
    </Form>
  );
}
