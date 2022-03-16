import { FunctionComponent } from 'react';
import EditForm from 'components/EditForm';
import { configurations } from 'config/editor';
import { AvailableEditorConfigurations } from 'config/editor.types';
import { resolveConfiguration, getDefaultValues } from './utils';
import styles from './EditContainer.module.css';
import { Models } from './api_types';

interface EditContainerProps {
  data: Models;
  id: string;
  tool: string;
  formId: string;
}

const isConfigurationAvailable = (name: string): name is AvailableEditorConfigurations => {
  const configurationName = name as AvailableEditorConfigurations;
  return configurations[configurationName] !== undefined;
};

const EditContainer: FunctionComponent<EditContainerProps> = ({ data, id, tool, formId }) => {
  if (!tool || !id || !isConfigurationAvailable(tool)) {
    return null;
  }

  const configuration = configurations[tool];
  const resolvedConfiguration = resolveConfiguration(configuration, data);
  const defaultValues = getDefaultValues(resolvedConfiguration, data);

  return (
    <div className={styles.container}>
      {`Dynamic form using configuration from: ${tool}`}
      <EditForm
        configuration={resolvedConfiguration}
        formId={formId}
        tool={tool}
        id={id}
        defaultValues={defaultValues}
      />
    </div>
  );
};

export default EditContainer;
