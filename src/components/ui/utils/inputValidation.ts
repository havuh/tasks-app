import { type TypeWithKey } from '@core/types/primitives';

export const inputValidation = (
  type: string,
  required: boolean,
  helperText?: string,
): TypeWithKey<string> => {
  const optionsType: TypeWithKey<{}> = {
    default: {},
    text: {
      required: { value: required, message: helperText ?? 'Campo obligatorio' },
    },
    email: {
      required: { value: required, message: 'Campo obligatorio' },
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/,
        message: 'Introduce un email valido',
      },
    },
    password: {
      required: { value: required, message: 'Campo obligatorio' },
      minLength: {
        value: 6,
        message: 'Ingrese al menos 6 caracteres',
      },
      maxLength: {
        value: 150,
        message: 'Ingrese menos de 150 caracteres',
      },
    },
  };

  return optionsType[type] || optionsType.default;
};
