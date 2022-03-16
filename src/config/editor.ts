import {
  EditContainerConfig,
  ExportEditorConfigurations,
  SelfRegistryComponents,
} from './editor.types';

const tools: EditContainerConfig = {
  path: 'showcase/tools',
  label: 'Tool',
  fields: [
    {
      name: 'name',
      section: 'Parameters',
      label: 'Tool Name',
      required: true,
      disabled: false,
      component: [
        [
          'InputString',
          {
            value: '$data.name',
          },
        ],
      ],
    },
    {
      name: 'path',
      section: 'Parameters',
      label: 'Tool path',
      required: false,
      disabled: false,
      component: [
        [
          'InputString',
          {
            value: '$data.path',
          },
        ],
      ],
    },
    {
      name: 'frn',
      section: 'Parameters',
      label: 'Tool frn',
      required: true,
      disabled: false,
      component: [
        [
          'InputString',
          {
            value: '$data.frn',
          },
        ],
      ],
    },
    {
      name: 'available',
      section: 'otherSection',
      label: 'is Available',
      required: false,
      disabled: false,
      component: [
        [
          'Boolean',
          {
            value: '$data.available',
          },
        ],
      ],
    },
  ],
};

const users: EditContainerConfig = {
  path: 'showcase/users',
  label: 'Users',
  fields: [
    {
      name: 'name',
      section: 'Parameters',
      label: 'Users Name',
      required: true,
      disabled: false,
      component: [
        [
          'InputString',
          {
            value: '$data.name',
          },
        ],
      ],
    },
    {
      name: 'active',
      section: 'otherSection',
      label: 'is User Active',
      required: false,
      disabled: false,
      component: [
        [
          'Boolean',
          {
            value: '$data.active',
          },
        ],
      ],
    },
  ],
};

export const configurations: ExportEditorConfigurations = {
  tools,
  users,
};

export const selfRegistryComponents: SelfRegistryComponents[] = ['InputString'];
