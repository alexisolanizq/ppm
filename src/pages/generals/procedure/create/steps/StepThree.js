import React from 'react';
import { Grid } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import StepThreeG from './StepThreeG';
import StepThreeB from './StepThreeB';
import StepThreeM from './StepThreeM';
import StepThreeME from './StepThreeME';
import StepThreeP from './StepThreeP';
import StepThreeL from './StepThreeL';
import StepThreeN from './StepThreeN';
import StepThreeD from './StepThreeD';

const StepThree = ({
  errors,
  legalFiguresList,
  handleRegistrationData,
  registrationData,
  prioritiesData,
  searchJobs,
  classes,
  countries,
  handlePriorities,
  removePriorities,
  addPriorities,
  onDropAccepted,
  onDropRejected,
  areasList,
  getErrorValue,
  getErrorValueNull,
  getHelperText,
  variablesList
}) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Grid container spacing={2}>
      <Grid item xs={12} className="m-3">
        <h4 className="text-center">
          Seleccione un área para dar de alta su trámite
        </h4>
      </Grid>
      {registrationData.procedureArea === 'G' && (
        <StepThreeG
          errors={errors}
          prioritiesData={prioritiesData}
          handlePriorities={handlePriorities}
          removePriorities={removePriorities}
          addPriorities={addPriorities}
          handleRegistrationData={handleRegistrationData}
          registrationData={registrationData}
          legalFiguresList={legalFiguresList}
          getErrorValue={getErrorValue}
          variablesList={variablesList}
          getHelperText={getHelperText}
          countries={countries}
          getErrorValueNull={getErrorValueNull  }
          // areasList={areasList}
          // classes={classes}
          // errors={errors}
          // legalFiguresList={legalFiguresList}
          // handleRegistrationData={handleRegistrationData}
          // registrationData={registrationData}
          // countries={countries}
          // searchJobs={searchJobs}
          // getHelperText={getHelperText}
          // getErrorValue={getErrorValue}
          // variablesList={variablesList}
        />
      )}
      {registrationData.procedureArea === 'B' && (
        <StepThreeB
          areasList={areasList}
          classes={classes}
          errors={errors}
          legalFiguresList={legalFiguresList}
          handleRegistrationData={handleRegistrationData}
          registrationData={registrationData}
          countries={countries}
          searchJobs={searchJobs}
          getHelperText={getHelperText}
          getErrorValue={getErrorValue}
        />
      )}
      {registrationData.procedureArea === 'ME' && (
        <StepThreeME
          errors={errors}
          legalFiguresList={legalFiguresList}
          handleRegistrationData={handleRegistrationData}
          registrationData={registrationData}
          prioritiesData={prioritiesData}
          classes={classes}
          countries={countries}
          handlePriorities={handlePriorities}
          removePriorities={removePriorities}
          addPriorities={addPriorities}
          onDropAccepted={onDropAccepted}
          onDropRejected={onDropRejected}
          getErrorValue={getErrorValue}
        />
      )}
      {registrationData.procedureArea === 'M' && (
        <StepThreeM
          errors={errors}
          legalFiguresList={legalFiguresList}
          handleRegistrationData={handleRegistrationData}
          registrationData={registrationData}
          prioritiesData={prioritiesData}
          classes={classes}
          countries={countries}
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
      {(registrationData.procedureArea === 'P' ||
        registrationData.procedureArea === 'PE') && (
        <StepThreeP
          errors={errors}
          legalFiguresList={legalFiguresList}
          handleRegistrationData={handleRegistrationData}
          registrationData={registrationData}
          prioritiesData={prioritiesData}
          classes={classes}
          countries={countries}
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
      {registrationData.procedureArea === 'L' && (
        <StepThreeL
          errors={errors}
          legalFiguresList={legalFiguresList}
          handleRegistrationData={handleRegistrationData}
          registrationData={registrationData}
          prioritiesData={prioritiesData}
          classes={classes}
          countries={countries}
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
      {registrationData.procedureArea === 'N' && (
        <StepThreeN
          errors={errors}
          legalFiguresList={legalFiguresList}
          handleRegistrationData={handleRegistrationData}
          registrationData={registrationData}
          prioritiesData={prioritiesData}
          classes={classes}
          countries={countries}
          handlePriorities={handlePriorities}
          removePriorities={removePriorities}
          addPriorities={addPriorities}
          onDropAccepted={onDropAccepted}
          onDropRejected={onDropRejected}
          getErrorValue={getErrorValue}
          getErrorValueNull={getErrorValueNull}
        />
      )}
      {registrationData.procedureArea === 'D' && (
        <StepThreeD
          errors={errors}
          legalFiguresList={legalFiguresList}
          handleRegistrationData={handleRegistrationData}
          registrationData={registrationData}
          prioritiesData={prioritiesData}
          classes={classes}
          countries={countries}
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
    </Grid>
  </LocalizationProvider>
);

export default StepThree;
