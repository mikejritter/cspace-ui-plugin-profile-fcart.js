export default (configContext) => {
  const {
    lib,
    recordComponents,
  } = configContext;

  const {
    React,
  } = lib;

  const {
    Field,
  } = recordComponents;

  return (
    <Field name="contentWorksList">
      <Field name="contentWorksGroup">
        <Field name="contentWork" />
        <Field name="contentWorkType" />
        <Field name="contentWorkNote" />
      </Field>
    </Field>
  );
};
