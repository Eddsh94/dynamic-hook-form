import { FunctionComponent, ChangeEvent, useState } from 'react';
import { UseFormMethods } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { InputStringProps as BaseInputStringProps } from 'config/editor.types';

interface InputStringProps extends BaseInputStringProps {
  label: string;
  required?: boolean;
  form: UseFormMethods;
  name: string;
  onChange?: () => void;
  shouldValidate?: boolean;
  shouldDirty?: boolean;
}

const InputString: FunctionComponent<InputStringProps> = ({
  label,
  value,
  required,
  form,
  name,
  onChange,
  shouldValidate,
  shouldDirty,
}) => {
  const [error, setError] = useState(false);
  const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    form.setValue(name, event.target.value, { shouldValidate, shouldDirty });
    form.trigger(name).then((valid) => {
      setError(!valid);
    });
    onChange?.();
  };

  return (
    <TextField
      name={name}
      inputRef={form.register({ required })}
      label={label}
      error={error}
      type="text"
      required={required}
      onChange={onInputChange}
      defaultValue={value}
    />
  );
};

export default InputString;
