import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import StepTwoB from './StepTwoB';
import StepTwoM from './StepTwoM';
import StepTwoP from './StepTwoP';
import StepTwoG from './StepTwoG';

const StepTwo = ({
  errors,
  areasList,
  countries,
  getErrorValue,
  getErrorValueNull,
  handleRegistrationData,
  registrationData,
  getHelperText
}) => {
  useEffect(() => {
    if (
      registrationData.procedureArea === 'P' ||
      registrationData.procedureArea === 'M'
    )
      handleRegistrationData('country', 3);
  }, []);
  const divisional = [...Array(10).keys()];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} className="m-3">
        <h4 className="text-center">
          Seleccione un área para dar de alta su trámite
        </h4>
      </Grid>
      <Grid
        item
        xs={8}
        className="mx-auto d-flex flex-column align-content-center"
      >
        {registrationData.procedureArea === 'B' && (
          <StepTwoB
            errors={errors}
            areasList={areasList}
            countries={countries}
            getErrorValue={getErrorValue}
            getErrorValueNull={getErrorValueNull}
            handleRegistrationData={handleRegistrationData}
            registrationData={registrationData}
            getHelperText={getHelperText}
          />
        )}
        {registrationData.procedureArea === 'G' && (
          <StepTwoG
            errors={errors}
            areasList={areasList}
            getErrorValue={getErrorValue}
            getErrorValueNull={getErrorValueNull}
            handleRegistrationData={handleRegistrationData}
            registrationData={registrationData}
            getHelperText={getHelperText}
          />
        )}
        {(registrationData.procedureArea === 'M' ||
          registrationData.procedureArea === 'L' ||
          registrationData.procedureArea === 'N' ||
          registrationData.procedureArea === 'D' ||
          registrationData.procedureArea === 'ME') && (
          <StepTwoM
            errors={errors}
            areasList={areasList}
            countries={countries}
            getErrorValue={getErrorValue}
            handleRegistrationData={handleRegistrationData}
            registrationData={registrationData}
            getHelperText={getHelperText}
          />
        )}
        {(registrationData.procedureArea === 'PE' ||
          registrationData.procedureArea === 'P') && (
          <StepTwoP
            errors={errors}
            divisional={divisional}
            areasList={areasList}
            countries={countries}
            getErrorValue={getErrorValue}
            getErrorValueNull={getErrorValueNull}
            handleRegistrationData={handleRegistrationData}
            registrationData={registrationData}
            getHelperText={getHelperText}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default StepTwo;
