import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    intake: {
      forms: forms(configContext),
    },
  },
});
