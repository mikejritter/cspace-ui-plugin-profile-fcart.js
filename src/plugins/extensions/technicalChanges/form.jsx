export default (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Cols,
    Col,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="technicalChangesGroupList">
      <Field name="technicalChangesGroup">
        <Panel>
          <Cols>
            <Col>
              <Field name="technicalChange" />
              <Field name="technicalChangeReason" />
              <Field name="technicalChangeDate" />
            </Col>
            <Col>
              <Field name="technicalChangeNote" />
              <Field name="previousSupport" />
              <Field name="newSupport" />
            </Col>
          </Cols>
        </Panel>
      </Field>
    </Field>
  );
};
