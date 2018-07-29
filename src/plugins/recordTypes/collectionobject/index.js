import fields from './fields';
import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    collectionobject: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
