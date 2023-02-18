import React, { useEffect } from 'react';
import {
  Typography,
  Button,
  StepLabel,
  Step,
  Stepper,
  Box,
  Grid
} from '@mui/material';
import useRegistrationProcedure from '@Hooks/generals/useRegistrationProcedure';
import AlertMessage from '@Component/common/stripedDataGrid/AlertMessage';
import StepFour from './create/steps/StepFour';
import StepOne from './create/steps/StepOne';
import StepThree from './create/steps/StepThree';
import StepTwo from './create/steps/StepTwo';
import StepFive from './create/steps/StepFive';
import Modal from './Modal'

const RegistrationProcedure = () => {
  const {
    errors,
    areasList,
    steps,
    alertMessage,
    activeStep,
    legalFiguresList,
    registrationData,
    clientsData,
    clients,
    offices,
    countries,
    invoicingEntitiesList,
    holdersList,
    typeRecipent,
    holdersData,
    emails,
    classes,
    emailsCC,
    emailsCCO,
    prioritiesData,
    filesDocuments,
    searchJobs,
    handleForm,
    modalShow,
    editDivisional,
    setFilesDocuments,
    handleDocumentsFormData,
    handleRemoveDocuments,
    handlePriorities,
    removePriorities,
    addPriorities,
    setEmails,
    setEmailsCC,
    setEmailsCCO,
    handleHolders,
    removeHolders,
    addHolder,
    addClient,
    handleClients,
    removeClients,
    isStepSkipped,
    init,
    handleNext,
    handleBack,
    handleReset,
    setAlertMessage,
    handleRegistrationData,
    handleRecipent,
    onDropAccepted,
    onDropRejected,
    getErrorValue,
    getErrorValueNull,
    getHelperText
  } = useRegistrationProcedure();
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={10} className="mx-auto">
          <Stepper className='my-auto' activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}> </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Grid>
        {activeStep === steps.length ? (
          <Grid item xs={12}>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </Grid>
        ) : (
          <Grid item xs={12} md={10} sx={{ mx: 'auto' }}>
            {activeStep === 0 && (
              <StepOne
                errors={errors}
                registrationData={registrationData}
                handleRegistrationData={handleRegistrationData}
              />
            )}
            {activeStep === 1 && (
              <StepTwo
                errors={errors}
                getErrorValue={getErrorValue}
                getErrorValueNull={getErrorValueNull}
                countries={countries}
                areasList={areasList}
                registrationData={registrationData}
                handleRegistrationData={handleRegistrationData}
                getHelperText={getHelperText}
              />
            )}
            {activeStep === 2 && (
              <StepThree
                errors={errors}
                countries={countries}
                legalFiguresList={legalFiguresList}
                registrationData={registrationData}
                prioritiesData={prioritiesData}
                holdersList={holdersList}
                classes={classes}
                searchJobs={searchJobs}
                handleRegistrationData={handleRegistrationData}
                handlePriorities={handlePriorities}
                removePriorities={removePriorities}
                addPriorities={addPriorities}
                onDropAccepted={onDropAccepted}
                onDropRejected={onDropRejected}
                getErrorValue={getErrorValue}
                getErrorValueNull={getErrorValueNull}
                getHelperText={getHelperText}
              />
            )}
            {activeStep === 3 && (
              <StepFour
                offices={offices}
                clients={clients}
                clientsData={clientsData}
                invoicingEntitiesList={invoicingEntitiesList}
                holdersList={holdersList}
                holdersData={holdersData}
                typeRecipent={typeRecipent}
                errors={errors}
                emails={emails}
                emailsCC={emailsCC}
                emailsCCO={emailsCCO}
                setEmails={setEmails}
                setEmailsCC={setEmailsCC}
                setEmailsCCO={setEmailsCCO}
                removeClients={removeClients}
                addClient={addClient}
                handleClients={handleClients}
                handleHolders={handleHolders}
                removeHolders={removeHolders}
                addHolder={addHolder}
                handleRecipent={handleRecipent}
              />
            )}
            {activeStep === 4 && (
              <StepFive
              filesDocuments={filesDocuments}
              setFilesDocuments={setFilesDocuments}
              handleDocumentsFormData={handleDocumentsFormData}
              handleRemoveDocuments={handleRemoveDocuments}
              />
            )}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                pt: 2,
                justifyContent: 'center'
              }}
            >
              <Button
                variant="contained"
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Anterior
              </Button>
              <Button variant="contained" onClick={handleNext}>
                {activeStep === steps.length - 1
                  ? 'Generar referencia'
                  : 'Siguiente'}
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
      <Modal
        handleForm={handleForm}
        modalShow={modalShow}
        editDivisional={editDivisional}
      />
      {alertMessage ? (
        <AlertMessage
          alertMessage={alertMessage}
          setAlertMessage={setAlertMessage}
        />
      ) : null}
    </>
  );
};

export default RegistrationProcedure;
