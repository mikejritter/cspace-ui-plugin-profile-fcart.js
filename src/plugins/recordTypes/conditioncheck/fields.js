import { } from 'react-intl';

export default (configContext) => {
  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      ...extensions.technicalChanges.fields,
    },
  };
};
