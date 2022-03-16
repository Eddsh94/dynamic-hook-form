import { FunctionComponent, ChangeEvent } from 'react';
import { UseFormMethods } from 'react-hook-form';
import Switch from '@material-ui/core/Switch';

interface BooleanProps {
  value: boolean;
  label: string;
  helperText?: string;
  form: UseFormMethods;
  name: string;
  onChange?: () => void;
  shouldValidate?: boolean;
  shouldDirty?: boolean;
}

const Boolean: FunctionComponent<BooleanProps> = ({
  value,
  form,
  name,
  label,
  onChange,
  shouldValidate,
  shouldDirty,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    form.setValue(name, event.target.checked, { shouldValidate, shouldDirty });
    onChange?.();
  };

  return (
    <div>
      {label}
      <Switch defaultChecked={value} onChange={handleChange} color="primary" />
    </div>
  );
};

export default Boolean;
