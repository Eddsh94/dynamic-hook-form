import { FunctionComponent, useEffect } from 'react';
import { groupBy } from 'ramda';
import { useForm } from 'react-hook-form';
import { 
  EditContainerConfig,
  EditFormDefaultValues,
  FieldDefinition,
  SelfRegistryComponents,
  ConfigurationValidationOut
} from 'config/editor.types';
import { selfRegistryComponents } from 'config/editor';
import FieldFormSection from 'components/FieldFormSection';
import styles from './EditForm.module.css';

interface EditFormProps {
  configuration: EditContainerConfig;
  tool: string;
  id: string;
  formId: string;
  defaultValues: EditFormDefaultValues;
}

const groupBySections = (field: FieldDefinition): string => field.section;

const EditForm: FunctionComponent<EditFormProps> = ({
  configuration,
  formId,
  defaultValues,
  id,
}) => {
  const form = useForm({ defaultValues });
  const { fields } = configuration;
  useEffect(() => {
    const registerFields = fields.filter((field) => field.name);
    registerFields.forEach((field) => {
      const [component] = field.component;
      const componentName = component[0] as  SelfRegistryComponents;
      const componentConfiguration = component[2];
      const validate = componentConfiguration?.validation as ConfigurationValidationOut;
      if (selfRegistryComponents.includes(componentName)) {
        return;
      }
      form.register(
        { name: field.name as string, type: 'custom' },
        { required: field.required, validate }
      );
    });
  }, [form, fields]);

  const groups = groupBy<FieldDefinition>(groupBySections, configuration.fields);

  return (
    <form id={formId} className={styles.container}>
      {Object.keys(groups).map((section) => {
        const fields = groups[section];
        return <FieldFormSection key={section} name={section} form={form} fields={fields} />;
      })}
    </form>
  )
}

export default EditForm;
