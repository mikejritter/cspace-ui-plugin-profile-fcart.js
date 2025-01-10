import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    TermPickerInput,
    TextInput,
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
        assocEventPeoples: {
          assocEventPeople: {
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
        assocEventPlaces: {
          assocEventPlace: {
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
        ownershipPlace: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_common.ownershipPlace.name',
                defaultMessage: 'Ownership place',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'place/local',
              },
            },
          },
        },
      },
      'ns2:collectionobjects_variablemedia': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/domain/collectionobject',
          },
        },
        ...extensions.contentWorks.fields,
        ...extensions.technicalSpecs.fields,
      },
      'ns2:collectionobjects_fineart': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/domain/collectionobject',
          },
        },
        catalogLevel: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.fineart.catalogLevel.name',
                defaultMessage: 'Cataloging level',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'cataloglevel',
              },
            },
          },
        },
        materialTechniqueDescription: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.fineart.materialTechniqueDescription.name',
                defaultMessage: 'Material/technique description',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        creatorDescription: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.fineart.creatorDescription.name',
                defaultMessage: 'Creator description',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
      },
      'ns2:collectionobjects_objectprod_extension': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/domain/objectprod_extension',
          },
        },
        objectProductionPlacesVerbatim: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          objectProductionPlaceVerbatim: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_objectprod.objectProductionPlaceVerbatim.name',
                  defaultMessage: 'Production place (verbatim)',
                },
              }),
              repeating: true,
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
    },
  };
};
