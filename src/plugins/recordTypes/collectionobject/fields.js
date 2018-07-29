import { } from 'react-intl';

export default (configContext) => {
  // const {
  //   AutocompleteInput,
  //   CompoundInput,
  //   DateInput,
  //   OptionPickerInput,
  //   StructuredDateInput,
  //   TermPickerInput,
  // } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:collectionobjects_variablemedia': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/local/variablemedia',
          },
        },
        ...extensions.contentWorks.fields,
      },
    },
  };
};
