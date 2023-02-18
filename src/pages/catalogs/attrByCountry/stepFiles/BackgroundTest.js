/* eslint-disable jsx-a11y/label-has-associated-control */

import { BACKGROUND_TEST, BACKGROUND_TEST_QUESTION_A, BACKGROUND_TEST_QUESTION_B, BACKGROUND_TEST_QUESTION_C } from '@Const/catalogs';
import { FIELDS_REQUIRED } from '@Const/const';
import { Stack, TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

const BackgroundTest = ({ AntSwitch, control }) => (
  <div className="my-3">
    <h3 className="fw-bold fs-6">{BACKGROUND_TEST}</h3>
    <p className="text-danger py-3 text-small">{FIELDS_REQUIRED}</p>

    <div className="mb-4">
      <Controller
        name="BackgroundTestCase1"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor='backgroundTextCase1' className="mb-2 primary-green">
              {BACKGROUND_TEST_QUESTION_A}
            </label>
            <TextField
              id='backgroundTextCase1'
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
        rules={{ required: 'Campo obligatorio' }}
      />
    </div>

    <div className="mb-4">
      <p className="green-color mb-2">
        {BACKGROUND_TEST_QUESTION_B}
      </p>
      <Stack direction="row" spacing={1} alignItems="center">
        <Controller
          name="BackgroundTestCase2"
          control={control}
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <>
              <p className="text-muted">No</p>
              <AntSwitch
                inputProps={{ 'aria-label': 'ant design' }}
                checked={value ?? false}
                onChange={onChange}
              />
              <p className="text-muted">Si</p>
            </>
          )}
        />
      </Stack>
    </div>

    <div className="mb-4">
      <p className="green-color mb-2">
        {BACKGROUND_TEST_QUESTION_C}
      </p>
      <Stack direction="row" spacing={1} alignItems="center">
        <Controller
          name="BackgroundTestCase3"
          control={control}
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <>
              <p className="text-muted">No</p>
              <AntSwitch
                inputProps={{ 'aria-label': 'ant design' }}
                checked={value ?? false}
                onChange={onChange}
                id="BackgroundTestCase3"
              />
              <p className="text-muted">Si</p>
            </>
          )}
        />
      </Stack>
    </div>
  </div>
);

export default BackgroundTest;
