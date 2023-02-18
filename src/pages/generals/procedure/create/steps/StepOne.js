import React from 'react';
import { FormControlLabel, Checkbox, Grid, InputLabel } from '@mui/material';

const StepOne = ({ handleRegistrationData, registrationData, errors }) => {
  const areas = [
    {
      label: '(G) Correspondencia General',
      value: 'G'
    },
    {
      label: '(B) Búsqueda',
      value: 'B'
    },
    {
      label: '(P) Patentes',
      value: 'P'
    },
    {
      label: '(M) Marcas',
      value: 'M'
    },
    {
      label: '(P) Patentes Extranjero',
      value: 'PE'
    },
    {
      label: '(M) Marcas Extranjero',
      value: 'ME'
    },
    {
      label: '(N) Nombres de dominio',
      value: 'N'
    },
    {
      label: '(L) Litigio',
      value: 'L'
    },
    {
      label: '(D) Derechos de autor',
      value: 'D'
    }
  ];

  const secondColumn = Math.floor(areas.length / 2);

  return (
    <Grid container spacing={2}>
      <Grid item xs={8} className='m-3'>
        <h4 className="text-center">
          Seleccione un área para dar de alta su trámite
        </h4>
      </Grid>
      <Grid
        item
        xs={6}
        className="d-flex flex-column aling-content-center"
      >
        {areas.slice(0, secondColumn).map(({ label, value }) => (
          <FormControlLabel
            key={value}
            className="w-fit"
            control={
              <Checkbox
                checked={value === registrationData.procedureArea}
                onClick={() => handleRegistrationData('procedureArea', value)}
              />
            }
            label={label}
          />
        ))}
      </Grid>
      <Grid
        item
        xs={6}
        className="d-flex flex-column aling-content-center"
      >
        {areas.slice(secondColumn).map(({ label, value }) => (
          <FormControlLabel
            key={value}
            control={
              <Checkbox
                checked={value === registrationData.procedureArea}
                onClick={() => handleRegistrationData('procedureArea', value)}
              />
            }
            label={label}
          />
        ))}
      </Grid>
      <Grid item xs={12}>
        {errors && (
          <InputLabel
            id="status-label"
            className='color-red text-center'
          >
            * Selecciona un área para continuar su trámite
          </InputLabel>
        )}
      </Grid>
    </Grid>
  );
};

export default StepOne;
