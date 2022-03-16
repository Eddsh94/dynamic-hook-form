import { FunctionComponent } from 'react';
import { UseFormMethods } from 'react-hook-form';
import { FieldDefinition, AvailableFieldComponents } from 'config/editor.types';
import InputString from 'components/InputString';
import Boolean from 'components/Boolean';

interface FormFieldProps {
  configuration: FieldDefinition;
  form: UseFormMethods;
}

const availableFieldComponents = {
  InputString,
  Boolean,
};

const isFieldAvailable = (name: string): name is AvailableFieldComponents => {
  const componentName = name as AvailableFieldComponents;
  return availableFieldComponents[componentName] !== undefined;
};

const FormField: FunctionComponent<FormFieldProps> = ({
  configuration,
  form
}) => {
  const {
    component,
    label,
    required,
    name,
    shouldValidate= false,
    shouldDirty = true,
  } = configuration;
  const [componentName, props] = component[0];
  if (!isFieldAvailable(componentName)) {
    return null;
  }

  const Component = availableFieldComponents[componentName];

  return (
    <Component {...(props as never)} label={label} required={required} form={form} name={name} shouldValidate={shouldValidate} shouldDirty={shouldDirty} />
  );
}

export default FormField;

