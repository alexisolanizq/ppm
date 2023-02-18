
import { RIGHTS_REINSTATEMENT, RIGHTS_REINSTATEMENT_QUESTION_A } from '@Const/catalogs';
import { FIELDS_REQUIRED, FIELD_REQUIRED } from '@Const/const';
import { TextField } from '@mui/material';
import React from 'react'
import { Controller } from 'react-hook-form';

const RightsReinstatement = ({ control }) => (
  <div className="my-3">
    <h3 className="fw-bold fs-6">{RIGHTS_REINSTATEMENT}</h3>
    <p className="text-danger py-3 text-small">{FIELDS_REQUIRED}</p>

    <div className="mb-4">
      <Controller
        name="RightsReinstatement"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor='RightsReinstatement' className="mb-2 primary-green">
              {RIGHTS_REINSTATEMENT_QUESTION_A}
            </label>
            <TextField
              id="area"
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

export default RightsReinstatement