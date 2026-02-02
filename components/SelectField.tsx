import { cn } from '@/lib/utils';
import { Controller } from 'react-hook-form';
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from '@/components/ui/field';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type SelectFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  control: any;
  options: readonly Option[];
};
function SelectField({
  name,
  label,
  placeholder,
  control,
  options,
}: SelectFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldContent>
            <FieldLabel htmlFor={`form-rhf-select-${name}`}>{label}</FieldLabel>
          </FieldContent>
          <Select
            name={field.name}
            value={field.value}
            onValueChange={field.onChange}
          >
            <SelectTrigger
              id={`form-rhf-select-${name}`}
              aria-invalid={fieldState.invalid}
              className="min-w-30"
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent
              position="item-aligned"
              className="border-gray-600 bg-gray-800 text-white"
            >
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="focus:bg-gray-600 focus:text-white"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    ></Controller>
  );
}

export default SelectField;
