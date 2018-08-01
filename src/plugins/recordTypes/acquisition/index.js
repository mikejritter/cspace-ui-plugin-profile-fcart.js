import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    acquisition: {
      forms: forms(configContext),
    },
  },
});
