import defaultForm from './default';
import publicForm from './public';
import timebasedForm from './timebased';

export default (configContext) => ({
  default: defaultForm(configContext),
  public: publicForm(configContext),
  timebased: timebasedForm(configContext),
});
