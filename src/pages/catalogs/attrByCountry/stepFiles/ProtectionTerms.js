
import { PROTECTION_TERMS, PROTECTION_TERMS_QUESTION_A } from '@Const/catalogs';
import { FIELDS_REQUIRED, FIELD_REQUIRED } from '@Const/const';
import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

const ProtectionTerms = ({control }) => (
  <div className="my-3">
    <h3 className="fw-bold fs-6">{PROTECTION_TERMS}</h3>
    <p className="text-danger py-3 text-small">{FIELDS_REQUIRED}</p>

    <div className="mb-4">
      <Controller
        name="ProtectionTerms"
        control={control}
        defaultValue=" "
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor='ProtectionTerms' className="mb-2 primary-green">
              {PROTECTION_TERMS_QUESTION_A}
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
export default ProtectionTerms;
