import fields from './fields';
import forms from './forms';
import vocabularies from './vocabularies';

export default () => (configContext) => ({
  recordTypes: {
    concept: {
      vocabularies,
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
