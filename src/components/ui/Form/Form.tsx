import { useEffect } from 'react';
import {
  type FieldValues,
  FormProvider,
  useForm,
  type UseFormReturn,
} from 'react-hook-form';

export interface FormInterface {
  id?: string;
  className?: string;
  children: React.ReactNode;
  onSubmit: (data: FieldValues) => void;
  onInvalid?: () => void;
  methods?: UseFormReturn<any, any>;
  resetFields?: boolean;
}

const Form: React.FC<FormInterface> = ({
  id,
  className,
  children,
  onSubmit,
  onInvalid,
  methods,
  resetFields = false,
}) => {
  const insiderMethods = useForm({ mode: 'onChange' });
  const initialMethods = methods ?? insiderMethods;
  const { handleSubmit, reset } = initialMethods;

  const localOnSubmit = () => {
    const values = initialMethods.getValues();

    onSubmit(values as FieldValues);
  };
  useEffect(() => {
    if (resetFields) {
      reset();
    }
  }, [resetFields, reset]);

  return (
    <FormProvider {...initialMethods}>
      <form
        id={id}
        className={className}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit(localOnSubmit, onInvalid)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
