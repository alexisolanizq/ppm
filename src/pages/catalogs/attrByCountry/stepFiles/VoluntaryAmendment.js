
import { VOLUNTARY_AMENDMENT, VOLUNTARY_AMENDMENT_QUESTION_A, VOLUNTARY_AMENDMENT_QUESTION_B, VOLUNTARY_AMENDMENT_QUESTION_C } from '@Const/catalogs';
import { FIELDS_REQUIRED, FIELD_REQUIRED } from '@Const/const';
import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

const VoluntaryAmendment = ({ control }) => (
  <div className="my-3">
    <h3 className="fw-bold fs-6"> {VOLUNTARY_AMENDMENT} </h3>
    <p className="text-danger py-3 text-small">{FIELDS_REQUIRED}</p>

    <div className="mb-4">
      <Controller
        name="VoluntaryAmendmentCase1"
        control={control}
        defaultValue=" "
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor='VoluntaryAmendmentCase1' className="mb-2 primary-green">
              {VOLUNTARY_AMENDMENT_QUESTION_A}
            </label>
            <TextField
              size="small"
              className="w-80"
              label=" "
              value={value ?? ''}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          </>
        )}
        rules={{ required: FIELD_REQUIRED }}
      />
    </div>
    
    <div className="mb-4">
      <Controller
        name="VoluntaryAmendmentCase2"
        control={control}
        defaultValue=" "
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor='VoluntaryAmendmentCase2' className="mb-2 primary-green">
              {VOLUNTARY_AMENDMENT_QUESTION_B}
            </label>
            <TextField
              size="small"
              className="w-80"
              label=" "
              value={value ?? ''}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          </>
        )}
        rules={{ required: FIELD_REQUIRED }}
      />
    </div>
    
    <div className="mb-4">
      <Controller
        name="VoluntaryAmendmentCase3"
        control={control}
        defaultValue=" "
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor='VoluntaryAmendmentCase3' className="mb-2 primary-green">
              {VOLUNTARY_AMENDMENT_QUESTION_C}
            </label>
            <TextField
              size="small"
              className="w-80"
              label=" "
              value={value ?? ''}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          </>
        )}
        rules={{ required: FIELD_REQUIRED }}
      />
    </div>
  </div>
);

export default VoluntaryAmendment;
