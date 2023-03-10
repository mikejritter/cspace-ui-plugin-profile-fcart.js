export default (configContext) => {
  const {
    layoutComponents,
    lib,
    recordComponents,
  } = configContext;

  const {
    React,
  } = lib;

  const {
    Panel,
    Cols,
    Col,
  } = layoutComponents;

  const {
    Field,
  } = recordComponents;

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
