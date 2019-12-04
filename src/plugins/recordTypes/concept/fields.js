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
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

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
        // Does not appear to be used.
        // conceptRecordType: {
        //   [config]: {
        //     messages: defineMessages({
        //       name: {
        //         id: 'field.concepts_fineart.conceptRecordType.name',
        //         defaultMessage: 'Concept record type',
        //       },
        //     }),
        //     view: {
        //       type: TermPickerInput,
        //       props: {
        //         source: 'conceptrecordtype',
        //       },
        //     },
        //   },
        // },
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
            dataType: DATA_TYPE_STRUCTURED_DATE,
            messages: defineMessages({
              name: {
                id: 'field.concepts_fineart.conceptTermDateGroup.name',
                defaultMessage: 'Concept Date',
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
                  defaultMessage: 'Related concept',
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
                  fullName: {
                    id: 'field.concepts_fineart.relatedConcept.fullName',
                    defaultMessage: 'Related concept',
                  },
                  name: {
                    id: 'field.concepts_fineart.relatedConcept.name',
                    defaultMessage: 'Concept',
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
                  fullName: {
                    id: 'field.concepts_fineart.conceptRelationType.fullName',
                    defaultMessage: 'Related concept relation type',
                  },
                  name: {
                    id: 'field.concepts_fineart.conceptRelationType.name',
                    defaultMessage: 'Relation type',
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
                dataType: DATA_TYPE_STRUCTURED_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.concepts_fineart.conceptRelationDateGroup.fullName',
                    defaultMessage: 'Related concept date',
                  },
                  groupName: {
                    id: 'field.concepts_fineart.conceptRelationDateGroup.groupName',
                    defaultMessage: 'Date',
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
                defaultMessage: 'Concept remark',
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
