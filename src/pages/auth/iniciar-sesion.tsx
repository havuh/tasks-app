import { AuthLayout } from '@/components/layout';
import { FormSection } from '@/modules/Auth/FormSection';
import { LoginForm } from '@/modules/Auth/Login';

export default function LoginPage() {
  return (
    <AuthLayout>
      <FormSection>
        <LoginForm />
      </FormSection>
    </AuthLayout>
  );
}
