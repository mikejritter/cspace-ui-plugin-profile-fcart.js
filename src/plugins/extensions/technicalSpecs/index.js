import fields from './fields';
import form from './form';

export default () => (configContext) => ({
  extensions: {
    technicalSpecs: {
      fields: fields(configContext),
      form: form(configContext),
    },
  },
});
