import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    AutocompleteInput,
    StructuredDateInput,
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
      'ns2:concepts_common': {
        conceptRecordTypes: {
          conceptRecordType: {
            [config]: {
              view: {
                props: {
                  source: 'conceptrecordtype',
                },
              },
            },
          },
        },
      },
      'ns2:concepts_fineart': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/concept/domain/fineart',
          },
        },
        conceptRecordType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.concepts_fineart.conceptRecordType.name',
                defaultMessage: 'Concept record type',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'conceptrecordtype',
              },
            },
          },
        },
        otherNameFlags: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.concepts_fineart.otherNameFlags.name',
                defaultMessage: 'Other name flags',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'othernameflags',
              },
            },
          },
        },
        conceptTermDateGroup: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.concepts_fineart.conceptTermDateGroup.fullName',
                defaultMessage: 'Concept term date',
              },
              name: {
                id: 'field.concepts_fineart.conceptTermDateGroup.name',
                defaultMessage: 'Term Date',
              },
            }),
            view: {
              type: StructuredDateInput,
            },
          },
          ...extensions.structuredDate.fields,
        },
        relatedConceptsGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          relatedConceptsGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.concepts_fineart.relatedConceptsGroup.name',
                  defaultMessage: 'Related concepts',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            relatedConcept: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.concepts_fineart.relatedConcept.name',
                    defaultMessage: 'Related concept',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/associated',
                  },
                },
              },
            },
            conceptRelationType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.concepts_fineart.conceptRelationType.name',
                    defaultMessage: 'Relationship type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'conceptrelationtype',
                  },
                },
              },
            },
            conceptRelationDateGroup: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.concepts_fineart.conceptRelationDateGroup.fullName',
                    defaultMessage: 'Concept related date',
                  },
                  name: {
                    id: 'field.concepts_fineart.conceptRelationDateGroup.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
              ...extensions.structuredDate.fields,
            },
          },
        },
        conceptRemarks: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.concepts_fineart.conceptRemarks.name',
                defaultMessage: 'Concept remarks',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
      },
    },
  };
};
