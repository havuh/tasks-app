import { Card, CardContent, Typography } from '@mui/material';

type FormSectionProps = React.PropsWithChildren<{}>;

export default function FormSection({ children }: FormSectionProps) {
  return (
    <Card sx={{ maxWidth: '500px', width: '80%' }}>
      <CardContent>
        <Typography variant="h1">Iniciar sesión</Typography>
        <Typography variant="body1">
          Ingresa tus credenciales de acceso
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
}
