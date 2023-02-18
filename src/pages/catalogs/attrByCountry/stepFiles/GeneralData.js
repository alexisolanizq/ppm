import React from 'react';
import { Controller } from 'react-hook-form';
import { MenuItem, TextField } from '@mui/material';
import { FIELDS_REQUIRED, FIELD_REQUIRED } from '@Const/const';
import { AREA_FIELD, COUNTRY, GENERAL_DATA } from '@Const/catalogs';

const GeneralData = ({ control }) => (
  <div className="my-3">
    <h3 className="fw-bold fs-6">{GENERAL_DATA}</h3>
    <p className="text-danger py-3 text-small">{FIELDS_REQUIRED}</p>
    <div className="mb-4">
      <Controller
        name="generalDataCase1"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            color='success'
            size="small"
            sx={{ width: '280px' }}
            select
            label={COUNTRY}
            value={value ?? ''}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          >
            <MenuItem value={0}> México </MenuItem>
            <MenuItem value={1}> Estados Unidos </MenuItem>
          </TextField>
        )}
        rules={{ required: FIELD_REQUIRED }}
      />
    </div>

    <div className="mb-4">
      <Controller
        name="generalDataCase2"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            color='success'
            size="small"
            sx={{ width: '280px' }}
            select
            label={AREA_FIELD}
            value={value ?? ''}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          >
            <MenuItem value={0}> Patentes extranjero </MenuItem>
            <MenuItem value={1}> Marcas extranjero </MenuItem>
          </TextField>
        )}
        rules={{ required: FIELD_REQUIRED }}
      />
    </div>
  </div>
);

export default GeneralData;
