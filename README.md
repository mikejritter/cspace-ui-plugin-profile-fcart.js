# cspace-ui-plugin-profile-fcart

[![npm package](https://img.shields.io/npm/v/cspace-ui-plugin-profile-fcart.svg)](https://www.npmjs.com/package/cspace-ui-plugin-profile-fcart)
[![continuous integration](https://github.com/collectionspace/cspace-ui-plugin-profile-fcart.js/actions/workflows/ci-js.yml/badge.svg?branch=master&event=push)](https://github.com/collectionspace/cspace-ui-plugin-profile-fcart.js/actions/workflows/ci-js.yml)

Fine and Contemporary Art profile plugin for the CollectionSpace UI.

## Installation

### For developers

Follow these instructions to download and install the source code of the plugin.

Using git:

```
$ git clone https://github.com/collectionspace/cspace-ui-plugin-profile-fcart.js.git
$ cd cspace-ui-plugin-profile-fcart.js
$ npm install
```

To run the cspace-ui application configured with this plugin in development, using a remote
back-end CollectionSpace server:

```
$ npm run devserver --back-end=https://fcart.dev.collectionspace.org
```

Then open a browser to http://localhost:8080.

Alternatively, to run the cspace-ui application configured with this plugin in development, using
the UI configuration in index.html:

```
$ npm run devserver
```

By default, the configuration in index.html uses the CollectionSpace services API located at
http://localhost:8180. To run the application against CollectionSpace services located on a
different host, edit index.html, and change the `serverUrl` configuration property. Note that the
specified server must be configured to allow CORS requests from http://localhost:8080.
