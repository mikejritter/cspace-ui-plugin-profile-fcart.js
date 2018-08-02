import { } from 'react-intl';

export default (configContext) => {
  const {
    // DateInput,
    // OptionPickerInput,
    // StructuredDateInput,
    // TermPickerInput,
  } = configContext.inputComponents;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      ...extensions.technicalChanges.fields,
    },
  };
};
