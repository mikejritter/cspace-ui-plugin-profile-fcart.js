import { defineMessages } from 'react-intl';

export default {
  ethculture: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.ethculture.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Ethnographic Culture',
      },
      collectionName: {
        id: 'vocab.concept.ethculture.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Ethnographic Cultures',
      },
      itemName: {
        id: 'vocab.concept.ethculture.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Ethnographic Culture',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(ethculture)',
    },
  },
};
