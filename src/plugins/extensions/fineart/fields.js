import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    // CompoundInput,
    TextInput,
    TermPickerInput,
    // OptionPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    catalogLevel: {
      [config]: {
        messages: defineMessages({
          name: {
            id: 'field.ext.fineart.catalogLevel.name',
            defaultMessage: 'Cataloging level',
          },
        }),
        view: {
          type: TermPickerInput,
          props: {
            source: 'cataloglevel',
          },
        },
      },
    },
    materialTechniqueDescription: {
      [config]: {
        messages: defineMessages({
          name: {
            id: 'field.ext.fineart.materialTechniqueDescription.name',
            defaultMessage: 'Material/Technique description',
          },
        }),
        view: {
          type: TextInput,
        },
      },
    },
    creatorDescription: {
      [config]: {
        messages: defineMessages({
          name: {
            id: 'field.ext.fineart.creatorDescription.name',
            defaultMessage: 'Creator description',
          },
        }),
        view: {
          type: TextInput,
        },
      },
    },
  };
};
