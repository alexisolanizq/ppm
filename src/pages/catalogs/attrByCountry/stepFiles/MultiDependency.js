
import React from 'react';
import { Controller } from 'react-hook-form';
import { Stack, TextField } from '@mui/material';
import { CONFIRMATION, FIELDS_REQUIRED, FIELD_REQUIRED, NEGATIVE } from '@Const/const';
import { MULTIDEPENDENCY, MULTIDEPENDENCY_QUESTION_A, MULTIDEPENDENCY_QUESTION_B } from '@Const/catalogs';

const MultiDependency = ({ AntSwitch, control }) => (
  <div className="my-3">
    <h3 className="fw-bold fs-6">{MULTIDEPENDENCY}</h3>
    <p className="text-danger py-3 text-small">{FIELDS_REQUIRED}</p>

    <div className="mb-4">
      <p className="green-color mb-2">
        {MULTIDEPENDENCY_QUESTION_A}
      </p>
      <Stack direction="row" spacing={1} alignItems="center">
        <Controller
          name="multiDependencyCase1"
          control={control}
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <>
              <p className="text-muted">{NEGATIVE}</p>
              <AntSwitch
                inputProps={{ 'aria-label': 'ant design' }}
                checked={value ?? false}
                onChange={onChange}
              />
              <p className="text-muted">{CONFIRMATION}</p>
            </>
          )}
        />
      </Stack>
    </div>

    <div className="mb-4">
      <Controller
        name="multiDependencyCase2"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor='multiDependencyCase2' className="mb-2 primary-green">
              {MULTIDEPENDENCY_QUESTION_B}
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

export default MultiDependency;
