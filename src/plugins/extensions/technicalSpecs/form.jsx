export default (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Cols>
      <Col>
        <Field name="filmVideoComponentsList">
          <Field name="filmVideoComponentsGroup">
            <Field name="originalFormat" />
            <Field name="originalAudioFormat" />
          </Field>
        </Field>
        <Field name="copiesProvided">
          <Field name="copyProvidedOnAcquisition" />
        </Field>
        <Field name="visualPreferencesList">
          <Field name="visualPreferencesGroup">
            <Field name="screenResolution" />
            <Field name="colorPalette" />
          </Field>
        </Field>
        <Field name="ratioFormats">
          <Field name="ratioFormat" />
        </Field>
        <Field name="nonStandardCode" />
      </Col>
      <Col>
        <Field name="digitalWorksList">
          <Field name="digitalWorksGroup">
            <Field name="programmingLanguage" />
            <Field name="authoringEnvironment" />
          </Field>
        </Field>
        <Field name="compressionSystems">
          <Field name="compressionSystem" />
        </Field>
        <Field name="sourceExternalData" />
        <Field name="creationHardwares">
          <Field name="creationHardware" />
        </Field>
        <Field name="playbackHardwares">
          <Field name="playbackHardware" />
        </Field>
      </Col>
    </Cols>
  );
};
