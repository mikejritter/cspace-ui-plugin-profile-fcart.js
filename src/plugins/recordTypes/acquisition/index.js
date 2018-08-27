import advancedSearch from './advancedSearch';
import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    acquisition: {
      advancedSearch: advancedSearch(configContext),
      forms: forms(configContext),
    },
  },
});
