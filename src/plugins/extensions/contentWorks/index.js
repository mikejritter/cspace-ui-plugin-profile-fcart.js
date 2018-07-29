import fields from './fields';
import form from './form';

export default () => configContext => ({
  extensions: {
    contentWorks: {
      fields: fields(configContext),
      form: form(configContext),
    },
  },
});
