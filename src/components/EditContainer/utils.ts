import {
  FieldComponent,
  EditContainerConfig,
  EditFormDefaultValues,
} from 'config/editor.types';
import { Models } from './api_types';

const resolveComponent = (component: FieldComponent[], data: Models): FieldComponent[] => {
  const [componentName, props] = component[0];
  const resolvedProps = { ...props };
  const propKeys = Object.keys(props) as Array<keyof typeof props>;
  propKeys.forEach((propName) => {
    const value = props[propName];
    if (typeof value !== 'string') {
      return;
    }
    if (value.startsWith('$data') || value.startsWith('$subs')) {
      const dataKey = value.slice(6);
      const dataValue = data[dataKey as keyof typeof data];
      Object.assign(resolvedProps, { [propName]: dataValue });
    }
  });

  return [[componentName, resolvedProps]];
};

export const resolveConfiguration = (
  configuration: EditContainerConfig,
  data: Models
): EditContainerConfig => {
  const { path, label, fields } = configuration;
  const resolvedFields = fields.map((field) => {
    const { component } = field;
    const resolvedComponent = resolveComponent(component, data);
    return { ...field, component: resolvedComponent };
  });
  return {
    path,
    label,
    fields: resolvedFields,
  };
};

export const getDefaultValues = (
  configuration: EditContainerConfig,
  data: Models
): EditFormDefaultValues => {
  const defaultValues: EditFormDefaultValues = {};
  configuration.fields.forEach((fieldValue) => {
    const name = fieldValue.name as string;
    if (!(name in data)) {
      return;
    }
    defaultValues[name] = (data as any)[name];
  });
  return defaultValues;
};
