import { FunctionComponent, ReactNode } from 'react';
import { useRouteMatch } from 'react-router';
import { configurations } from 'config/editor';
import { AvailableEditorConfigurations } from 'config/editor.types';
import { Models } from 'components/EditContainer/api_types';
import EditContainer from 'components/EditContainer';

interface ToolsProps {
  children: ReactNode;
}

type RouteMatchParams = {
  [key: string]: string;
};

const isConfigurationAvailable = (name: string): name is AvailableEditorConfigurations => {
  const configurationName = name as AvailableEditorConfigurations;
  return configurations[configurationName] !== undefined;
};

const Tools: FunctionComponent<ToolsProps> = ({ children }) => {
  const match = useRouteMatch<RouteMatchParams>('*/:tool');
  const tool = match?.params.tool;

  if (!tool || !isConfigurationAvailable(tool)) {
    return null;
  }

  const formId = `${tool}-form`;
  return (
    <div>
      <div>{children}</div>
      <EditContainer id={formId} tool={tool} data={{} as Models} formId={formId}/>
    </div>
  );
};

export default Tools;
