import fields from './fields';
import form from './form';

export default () => configContext => ({
  extensions: {
    technicalChanges: {
      fields: fields(configContext),
      form: form(configContext),
    },
  },
});
