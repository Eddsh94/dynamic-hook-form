import React, { FunctionComponent } from 'react';
import { UseFormMethods } from 'react-hook-form';
import { FieldDefinition } from 'config/editor.types';
import FormField from 'components/FormField';
import styles from './FormFieldSection.module.css';

interface SidebarSectionProps {
  name: string;
  fields: FieldDefinition[];
  form: UseFormMethods;
}

const SidebarSection: FunctionComponent<SidebarSectionProps> = ({ name, fields, form }) => {
  return (
    <div className={styles.container}>
      {fields.map((field) => (
        <FormField key={`${name}-${field.label}`} configuration={field} form={form} />
      ))}
    </div>
  );
};

export default SidebarSection;
