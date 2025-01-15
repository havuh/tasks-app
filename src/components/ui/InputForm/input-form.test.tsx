import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';
import InputForm from './InputForm';

describe('InputForm Component', () => {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const methods = useForm();
    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  it('calls the custom onChange handler when input value changes', () => {
    const handleChange = jest.fn();

    render(
      <Wrapper>
        <InputForm name="test" label="Test Label" onChange={handleChange} />
      </Wrapper>,
    );

    const input = screen.getByLabelText(/test label/i);
    fireEvent.change(input, { target: { value: 'new value' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('new value');
  });

  it('renders a select field when isSelect is true', () => {
    render(
      <Wrapper>
        <InputForm name="test" label="Test Label" isSelect>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </InputForm>
      </Wrapper>,
    );

    const select = screen.getByLabelText(/test label/i);
    expect(select.tagName).toBe('DIV');
  });
});
