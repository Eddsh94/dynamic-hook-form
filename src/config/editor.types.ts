import { RegisterOptions } from 'react-hook-form/dist/types';

export type AvailableEditorConfigurations = 
  | 'tools'
  | 'users';

export type AvailableFieldComponents = 
  | 'InputString'
  | 'Boolean';
  

export type FieldComponentProps = 
  | InputStringProps
  | BooleanProps

export type ExportEditorConfigurations = Record<AvailableEditorConfigurations, EditContainerConfig>;


export type ConfigurationValidationIn = Array<string>
export type ConfigurationValidationOut = RegisterOptions['validate'];
export type ConfigurationProps = {
  validation: ConfigurationValidationIn | ConfigurationValidationOut;
};

export type FieldComponent = [AvailableFieldComponents, FieldComponentProps, ConfigurationProps?];

export interface FieldDefinition {
  name?: string;
  section: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  component: FieldComponent[];
  shouldValidate?: boolean;
  shouldDirty?: boolean;
}

export interface EditContainerConfig {
  path: string;
  label: string;
  fields: FieldDefinition[];
}

export interface InputStringProps {
  value: string;
  fullWidth?: boolean;
  placeholder?: string;
  maxWidth?: number;
  __type?: 'InputStrings';
}

export interface BooleanProps {
  value: string;
  __type?: 'Boolean';
}

export type SelfRegistryComponents = 'InputString';

export type EditFormDefaultValues = Record<string, any>;
