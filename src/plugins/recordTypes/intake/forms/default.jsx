import { defineMessages } from 'react-intl';

const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="objectEntryInfo" collapsible>
        <Cols>
          <Col>
            <Field name="entryNumber" />
            <Field name="entryDate" />
            <Field name="entryReason" />

            <Field name="entryMethods">
              <Field name="entryMethod" />
            </Field>
          </Col>

          <Col>
            <Field name="returnDate" />
            <Field name="currentOwner" />

            <InputTable name="depositor">
              <Field name="depositor" />
              <Field name="depositorsRequirements" />
            </InputTable>
          </Col>
        </Cols>

        <Field name="entryNote" />
        <Field name="packingNote" />
      </Panel>

      <Panel name="valuation" collapsible collapsed>
        <Row>
          <Field name="valuer" />
          <Field name="valuationReferenceNumber" />
        </Row>
      </Panel>

      <Panel name="insurance" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="insurers">
              <Field name="insurer" />
            </Field>

            <Field name="insurancePolicyNumber" />
            <Field name="insuranceRenewalDate" />
          </Col>

          <Col>
            <Field name="insuranceReferenceNumber" />
            <Field name="insuranceNote" />
          </Col>
        </Cols>
      </Panel>

      <Panel name="location" collapsible collapsed>
        <Field name="currentLocationGroupList">
          <Field name="currentLocationGroup">
            <Field name="currentLocation" />
            <Field name="currentLocationFitness" />
            <Field name="currentLocationNote" />
          </Field>
        </Field>

        <Row>
          <Field name="locationDate" />
          <Field name="normalLocation" />
        </Row>
      </Panel>

      <Panel name="condition" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="conditionCheckMethods">
              <Field name="conditionCheckMethod" />
            </Field>

            <Field name="conditionCheckReasons">
              <Field name="conditionCheckReason" />
            </Field>

            <Field name="conditionCheckersOrAssessors">
              <Field name="conditionCheckerOrAssessor" />
            </Field>
          </Col>

          <Col>
            <Field name="conditionCheckDate" />
            <Field name="conditionCheckReferenceNumber" />
          </Col>
        </Cols>

        <Field name="conditionCheckNote" />
      </Panel>
    </Field>
  );
};

export default configContext => ({
  messages: defineMessages({
    name: {
      id: 'form.intake.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  sortOrder: 0,
  template: template(configContext),
});
