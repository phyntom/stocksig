import React from 'react';
import { Input } from '@/components/ui/input';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Controller } from 'react-hook-form';
import { cn } from '@/lib/utils';

type InputFieldProps = {
  label: string;
  name: string;
  placeholder?: string;
  type: 'input' | 'textarea' | 'password' | 'email';
  control: any;
};

function InputField({
  label,
  name,
  placeholder,
  type,
  control,
}: InputFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={`form-rhf-${name}`}>{label}</FieldLabel>
          <Input
            {...field}
            id={`form-rhf-${name}`}
            type={type}
            aria-invalid={fieldState.invalid}
            placeholder={placeholder}
            className={cn('form-input', {
              'cursor-not-allowed opacity-50': field.disabled,
            })}
            autoComplete="on"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}

export default InputField;
