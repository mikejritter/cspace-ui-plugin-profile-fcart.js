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
  // normally this is done in each recordType config but with so many it's a little cleaner here
  recordTypes: {
    consultation: {
      disabled: true,
    },
    dutyofcare: {
      disabled: true,
    },
    nagprainventory: {
      disabled: true,
    },
    repatriationrequest: {
      disabled: true,
    },
    summarydocumentation: {
      disabled: true,
    },
    heldintrust: {
      disabled: true,
    },
    restrictedmedia: {
      disabled: true,
    },
  },
  pluginInfo: {
    cspaceUIPluginProfileFCart: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileFCart.name',
          defaultMessage: 'Fine and Contemporary Art profile',
        },
      }),
      packageName: cspaceUIPluginProfileFCart.packageName,
      packageVersion: cspaceUIPluginProfileFCart.packageVersion,
      buildNum: cspaceUIPluginProfileFCart.buildNum,
      repositoryUrl: cspaceUIPluginProfileFCart.repositoryUrl,
      // packageVersion is now preferred, but keep version for backward compatibility with older
      // versions of cspace-ui.
      version: cspaceUIPluginProfileFCart.packageVersion,
    },
  },
  plugins: [
    ...plugins.map((plugin) => plugin()),
  ],
});
