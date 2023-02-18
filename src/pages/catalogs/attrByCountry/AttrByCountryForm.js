import React from 'react';
import { Box, Step, StepButton, Stepper, Typography } from '@mui/material';
import { Container, Row, Col, Button } from 'react-bootstrap';
import useAttrByCountry from '@Hooks/catalogs/useAttrByCountry';
import CatalogsBreadcrumbs from '@Component/common/breadcrumb/CatalogsBreadcrumbs';
import { FIELDS_COMPLETED, NEXT, PREVIOUS, RESET } from '@Const/const';
import { PAGE_TITLE_ATTR_BY_COUNTRY } from '@Const/catalogs';
import CustomBootstrapDialog from '@Component/common/bootstrapDialog/CustomBootstrapDialog';

const AttrByCountryForm = () => {
  const {
    allStepsCompleted,
    handleComplete,
    handleBack,
    handleStep,
    handleReset,
    activeStep,
    completed,
    steps,
    getStepContent
  } = useAttrByCountry();
  const { CancelButton, SubmitButton } = CustomBootstrapDialog();

  return (
    <Container>
      <Container
        fluid
        className="my-3 d-flex justify-content-start align-items-center p-3"
      >
        <CatalogsBreadcrumbs links={[{ name: PAGE_TITLE_ATTR_BY_COUNTRY }]} />
      </Container>
      <Container
        fluid
        className="d-flex justify-content-center my-3 p-3 bg-white shadow-sm border rounded"
      >
        <Row className="w-100">
          <Col xs={12}>
            <Container fluid className="py-3 text-center green-color">
              <h3 className="fs-6 fw-bold">{PAGE_TITLE_ATTR_BY_COUNTRY}</h3>
            </Container>
          </Col>
          <Col xs={12}>
            <Container fluid>
              <Box className="w-100">
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                      <StepButton color="inherit" onClick={handleStep(index)} />
                    </Step>
                  ))}
                </Stepper>
                <div>
                  {allStepsCompleted() ? (
                    <>
                      <Typography sx={{ mt: 2, mb: 1 }}>
                        {FIELDS_COMPLETED}
                      </Typography>
                      <Box
                        sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}
                      >
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>{RESET}</Button>
                      </Box>
                    </>
                  ) : (
                    <>
                      <Container className="mt-3 d-flex justify-content-center">
                        {getStepContent(activeStep)}
                      </Container>
                      <div className="d-flex justify-content-evenly">
                        <CancelButton
                          disabled={activeStep === 0}
                          onClick={handleBack}
                        >
                          {PREVIOUS}
                        </CancelButton>
                        <SubmitButton onClick={handleComplete}>
                          {NEXT}
                        </SubmitButton>
                      </div>
                    </>
                  )}
                </div>
              </Box>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AttrByCountryForm;
