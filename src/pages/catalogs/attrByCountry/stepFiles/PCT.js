/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { Stack, TextField, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';
import { PCT_QUESTION_A, PCT_QUESTION_B, PCT_QUESTION_C, PCT_QUESTION_D, PCT_QUESTION_E, PCT_QUESTION_E_SUBQUESTION_A, PCT_QUESTION_E_SUBQUESTION_B, PCT_QUESTION_E_SUBQUESTION_C, PCT_TITLE } from '@Const/catalogs';
import { CONFIRMATION, FIELDS_REQUIRED, FIELD_REQUIRED, NEGATIVE } from '@Const/const';

const PCT = ({ AntSwitch, control }) => (
  <div className="my-3">
    <h3 className="fw-bold fs-6">
      {PCT_TITLE}
    </h3>
    <p className="text-danger py-3 text-small">{FIELDS_REQUIRED}</p>

    <div className="mb-4">
      <p className="green-color mb-2">
        {PCT_QUESTION_A}
      </p>
      <Stack direction="row" spacing={1} alignItems="center">
        <Controller
          name="PCTCase1"
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
        name="PCTCase2"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor='PCTCase2' className="mb-2 primary-green">
              {PCT_QUESTION_B}
            </label>
            <TextField
              id="PCTCase2"
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
        name="PCTCase3"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor='PCTCase3' className="mb-2 primary-green">
              {PCT_QUESTION_C}
            </label>
            <TextField
              id="PCTCase3"
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
        name="PCTCase4"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor='PCTCase4' className="mb-2 primary-green">
              {PCT_QUESTION_D}
            </label>
            <TextField
              id="PCTCase4"
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

    <p className="mb-2 primary-green">
      {PCT_QUESTION_E}
    </p>

    <div className="mb-4">
      <p className="green-color mb-2">
        {PCT_QUESTION_E_SUBQUESTION_A}
      </p>
      <Stack direction="row" spacing={1} alignItems="center">
        <Controller
          name="PCTCase5"
          control={control}
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <>
              <Typography className="text-muted">{NEGATIVE}</Typography>
              <AntSwitch
                inputProps={{ 'aria-label': 'ant design' }}
                checked={value ?? false}
                onChange={onChange}
                id="PCTCase5"
              />
              <Typography className="text-muted">{CONFIRMATION}</Typography>
            </>
          )}
        />
      </Stack>
    </div>

    <div className="mb-4">
      <p className="green-color mb-2">
        {PCT_QUESTION_E_SUBQUESTION_B}
      </p>
      <Stack direction="row" spacing={1} alignItems="center">
        <Controller
          name="PCTCase6"
          control={control}
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <>
              <Typography className="text-muted">{NEGATIVE}</Typography>
              <AntSwitch
                inputProps={{ 'aria-label': 'ant design' }}
                checked={value ?? false}
                onChange={onChange}
                id="PCTCase6"
              />
              <Typography className="text-muted">{CONFIRMATION}</Typography>
            </>
          )}
        />
      </Stack>
    </div>

    <div className="mb-4">
      <p className="green-color mb-2">
        {PCT_QUESTION_E_SUBQUESTION_C}
      </p>
      <Stack direction="row" spacing={1} alignItems="center">
        <Controller
          name="PCTCase7"
          control={control}
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <>
              <Typography className="text-muted">{NEGATIVE}</Typography>
              <AntSwitch
                inputProps={{ 'aria-label': 'ant design' }}
                checked={value ?? false}
                onChange={onChange}
                id="PCTCase7"
              />
              <Typography className="text-muted">{CONFIRMATION}</Typography>
            </>
          )}
        />
      </Stack>
    </div>
  </div>
);

export default PCT;
