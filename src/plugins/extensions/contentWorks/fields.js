import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    TextInput,
    TermPickerInput,
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    contentWorksList: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      contentWorksGroup: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.contentWorks.contentWorksGroup.name',
              defaultMessage: 'Content - Works',
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
        contentWork: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.contentWorks.contentWork.name',
                defaultMessage: 'Work',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'work/local,work/shared,work/cona',
              },
            },
          },
        },
        contentWorkType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.contentWorks.contentWorkType.name',
                defaultMessage: 'Type',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'worktype',
              },
            },
          },
        },
        contentWorkNote: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.ext.contentWorks.contentWorkNote.fullName',
                defaultMessage: 'Content work note',
              },
              name: {
                id: 'field.ext.contentWorks.contentWorkNote.name',
                defaultMessage: 'Note',
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
