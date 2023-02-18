
import { PRELIMINARY_TEST, PRELIMINARY_TEST_QUESTION_A, PRELIMINARY_TEST_QUESTION_B, PRELIMINARY_TEST_QUESTION_C } from '@Const/catalogs';
import { CONFIRMATION, FIELDS_REQUIRED, FIELD_REQUIRED, NEGATIVE } from '@Const/const';
import { Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

const PremilimaryTest = ({AntSwitch, control}) => (
  <div className="my-3">
    <h3 className="fw-bold fs-6">{PRELIMINARY_TEST}</h3>
    <p className="text-danger py-3 text-small">{FIELDS_REQUIRED}</p>

    <div className="mb-4">
      <p className="green-color mb-2">
        {PRELIMINARY_TEST_QUESTION_A}
      </p>
      <Stack direction="row" spacing={1} alignItems="center">
        <Controller
          name="PremilimaryTestCase1"
          control={control}
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <>
              <Typography className="text-muted">{NEGATIVE}</Typography>
              <AntSwitch
                inputProps={{ 'aria-label': 'ant design' }}
                checked={value ?? false}
                onChange={onChange}
              />
              <Typography className="text-muted">{CONFIRMATION}</Typography>
            </>
          )}
        />
      </Stack>
    </div>

    <div className="mb-4">
      <Controller
        name="legislation"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor='legislation' className="mb-2 primary-green">
              * ¿Cuánto tiempo después de presentada la solicitud se emiten dichos resultados?
            </label>
            <TextField
              id="PremilimaryTestCase2"
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
        name="PremilimaryTestCase3"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor='PremilimaryTestCase3' className="mb-2 primary-green">
              {PRELIMINARY_TEST_QUESTION_B}
            </label>
            <TextField
              id="PremilimaryTestCase3"
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
        name="PremilimaryTestCase4"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor='PremilimaryTestCase4' className="mb-2 primary-green">
              {PRELIMINARY_TEST_QUESTION_C}
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

export default PremilimaryTest;
