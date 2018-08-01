import { } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    // DateInput,
    // OptionPickerInput,
    // StructuredDateInput,
    // TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:collectionobjects_common': {
        objectProductionPlaceGroupList: {
          objectProductionPlaceGroup: {
            objectProductionPlace: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local',
                  },
                },
              },
            },
          },
        },
        contentActivities: {
          contentActivity: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/activity',
                },
              },
            },
          },
        },
        contentPeoples: {
          contentPeople: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/ethculture',
                },
              },
            },
          },
        },
        contentPlaces: {
          contentPlace: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'place/local',
                },
              },
            },
          },
        },
        assocActivityGroupList: {
          assocActivityGroup: {
            assocActivity: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/activity',
                  },
                },
              },
            },
          },
        },
        assocPeopleGroupList: {
          assocPeopleGroup: {
            assocPeople: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/ethculture',
                  },
                },
              },
            },
          },
        },
        assocPlaceGroupList: {
          assocPlaceGroup: {
            assocPlace: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local',
                  },
                },
              },
            },
          },
        },
      },
      'ns2:collectionobjects_variablemedia': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/local/variablemedia',
          },
        },
        ...extensions.contentWorks.fields,
        ...extensions.technicalSpecs.fields,
      },
      'ns2:collectionobjects_fineart': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/local/fineart',
          },
        },
        ...extensions.fineart.fields,
      },
    },
  };
};
