import fields from './fields';

export default () => configContext => ({
  extensions: {
    fineart: {
      fields: fields(configContext),
    },
  },
});
