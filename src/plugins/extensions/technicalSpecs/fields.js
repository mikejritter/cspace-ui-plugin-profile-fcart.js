import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    playbackHardwares: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      playbackHardware: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.technicalSpecs.playbackHardware.name',
              defaultMessage: 'Playback hardware',
            },
          }),
          repeating: true,
          view: {
            type: TermPickerInput,
            props: {
              source: 'playbackhardware',
            },
          },
        },
      },
    },
    copiesProvided: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      copyProvidedOnAcquisition: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.technicalSpecs.copyProvidedOnAcquisition.name',
              defaultMessage: 'Copy provided',
            },
          }),
          repeating: true,
          view: {
            type: TermPickerInput,
            props: {
              source: 'originalformat',
            },
          },
        },
      },
    },
    creationHardwares: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      creationHardware: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.technicalSpecs.creationHardware.name',
              defaultMessage: 'Creation hardware',
            },
          }),
          repeating: true,
          view: {
            type: TermPickerInput,
            props: {
              source: 'creationhardware',
            },
          },
        },
      },
    },
    ratioFormats: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      ratioFormat: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.technicalSpecs.ratioFormat.name',
              defaultMessage: 'Ratio format',
            },
          }),
          repeating: true,
          view: {
            type: TermPickerInput,
            props: {
              source: 'ratioformat',
            },
          },
        },
      },
    },
    digitalWorksList: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      digitalWorksGroup: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.technicalSpecs.digitalWorksGroup.name',
              defaultMessage: 'Digital work',
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
        authoringEnvironment: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.technicalSpecs.authoringEnvironment.name',
                defaultMessage: 'Authoring environment',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'authoringenvironment',
              },
            },
          },
        },
        programmingLanguage: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.technicalSpecs.programmingLanguage.name',
                defaultMessage: 'Programming language',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'programminglanguage',
              },
            },
          },
        },
      },
    },
    nonStandardCode: {
      [config]: {
        messages: defineMessages({
          name: {
            id: 'field.ext.technicalSpecs.nonStandardCode.name',
            defaultMessage: 'Non-standard code',
          },
        }),
        view: {
          type: TextInput,
        },
      },
    },
    filmVideoComponentsList: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      filmVideoComponentsGroup: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.technicalSpecs.filmVideoComponentsGroup.name',
              defaultMessage: 'Film and video component',
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
        originalFormat: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.technicalSpecs.originalFormat.name',
                defaultMessage: 'Original format',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'originalformat',
              },
            },
          },
        },
        originalAudioFormat: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.technicalSpecs.originalAudioFormat.name',
                defaultMessage: 'Original audio format',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'originalaudioformat',
              },
            },
          },
        },
      },
    },
    sourceExternalData: {
      [config]: {
        messages: defineMessages({
          name: {
            id: 'field.ext.technicalSpecs.sourceExternalData.name',
            defaultMessage: 'Source of external data',
          },
        }),
        view: {
          type: TextInput,
        },
      },
    },
    visualPreferencesList: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      visualPreferencesGroup: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.technicalSpecs.visualPreferencesGroup.name',
              defaultMessage: 'Visual preference',
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
        screenResolution: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.technicalSpecs.screenResolution.name',
                defaultMessage: 'Screen resolution',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'screenresolution',
              },
            },
          },
        },
        colorPalette: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.technicalSpecs.colorPalette.name',
                defaultMessage: 'Color palette',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'colorpalette',
              },
            },
          },
        },
      },
    },
    compressionSystems: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      compressionSystem: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.ext.technicalSpecs.compressionSystem.name',
              defaultMessage: 'Compression system',
            },
          }),
          repeating: true,
          view: {
            type: TermPickerInput,
            props: {
              source: 'compressionsystem',
            },
          },
        },
      },
    },
  };
};
