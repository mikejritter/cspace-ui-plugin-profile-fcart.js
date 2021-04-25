/* global cspaceUIPluginProfileFCart */
/* The cspaceUIPluginProfileFCart global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/fcart.css';

export default () => ({
  messages,
  className: styles.common,
  prettyUrls: true,
  tenantId: '1000',
  pluginInfo: {
    cspaceUIPluginProfileFCart: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileFCart.name',
          defaultMessage: 'Fine and Contemporary Art profile',
        },
      }),
      version: cspaceUIPluginProfileFCart.packageVersion,
    },
  },
  plugins: [
    ...plugins.map((plugin) => plugin()),
  ],
});
