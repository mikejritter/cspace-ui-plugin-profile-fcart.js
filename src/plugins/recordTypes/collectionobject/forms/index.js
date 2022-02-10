import defaultForm from './default';
import publicForm from './default';

export default (configContext) => ({
  default: defaultForm(configContext),
  public: publicForm(configContext),
});
