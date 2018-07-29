export default (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Field,
  } = configContext.recordComponents;

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
