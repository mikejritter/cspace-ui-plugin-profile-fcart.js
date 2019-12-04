import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    TextInput,
    StructuredDateInput,
    TermPickerInput,
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
    'ns2:conditionchecks_variablemedia': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/services/conditioncheck/domain/variablemedia',
        },
      },
      technicalChangesGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        technicalChangesGroup: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.ext.technicalChanges.technicalChangesGroup.fullName',
                defaultMessage: 'Technical change',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
            },
          },
          technicalChange: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.ext.technicalChanges.technicalChange.name',
                  defaultMessage: 'Technical change',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'technicalchange',
                },
              },
            },
          },
          technicalChangeReason: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.ext.technicalChanges.technicalChangeReason.fullName',
                  defaultMessage: 'Technical change reason',
                },
                name: {
                  id: 'field.ext.technicalChanges.technicalChangeReason.name',
                  defaultMessage: 'Reason',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'technicalchangereason',
                },
              },
            },
          },
          technicalChangeDate: {
            [config]: {
              dataType: DATA_TYPE_STRUCTURED_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.ext.technicalChanges.technicalChangeDate.fullName',
                  defaultMessage: 'Technical change date',
                },
                groupName: {
                  id: 'field.ext.technicalChanges.technicalChangeDate.groupName',
                  defaultMessage: 'Date',
                },
                name: {
                  id: 'field.ext.technicalChanges.technicalChangeDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: StructuredDateInput,
              },
            },
            ...extensions.structuredDate.fields,
          },
          technicalChangeNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.ext.technicalChanges.technicalChangeNote.fullName',
                  defaultMessage: 'Technical change note',
                },
                name: {
                  id: 'field.ext.technicalChanges.technicalChangeNote.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
          previousSupport: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.ext.technicalChanges.previousSupport.fullName',
                  defaultMessage: 'Technical change previous support',
                },
                name: {
                  id: 'field.ext.technicalChanges.previousSupport.name',
                  defaultMessage: 'Previous support',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'conditionsupport',
                },
              },
            },
          },
          newSupport: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.ext.technicalChanges.newSupport.fullName',
                  defaultMessage: 'Technical change new support',
                },
                name: {
                  id: 'field.ext.technicalChanges.newSupport.name',
                  defaultMessage: 'New support',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'conditionsupport',
                },
              },
            },
          },
        },
      },
    },
  };
};
