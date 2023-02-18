/* eslint-disable jsx-a11y/label-has-associated-control */

import { SUSTANTIVE_STAGE, SUSTANTIVE_STAGE_QUESTION_A, SUSTANTIVE_STAGE_QUESTION_B, SUSTANTIVE_STAGE_QUESTION_C } from '@Const/catalogs';
import { CONFIRMATION, FIELDS_REQUIRED, NEGATIVE } from '@Const/const';
import { Stack, TextField } from '@mui/material';
import React from 'react'
import { Controller } from 'react-hook-form';

const NounStage = ({ AntSwitch, control }) => (
    <div className="my-3">
      <h3 className="fw-bold fs-6">{SUSTANTIVE_STAGE}</h3>
      <p className="text-danger py-3 text-small">{FIELDS_REQUIRED}</p>
  
      <div className="mb-4">
        <Controller
          name="NounStageCase1"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <label htmlFor='NounStageCase1' className="mb-2 primary-green">
                {SUSTANTIVE_STAGE_QUESTION_A}
              </label>
              <TextField
                id="NounStageCase1"
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
          {SUSTANTIVE_STAGE_QUESTION_B}
        </p>
        <Stack direction="row" spacing={1} alignItems="center">
          <Controller
            name="NounStageCase2"
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
          {SUSTANTIVE_STAGE_QUESTION_C}
        </p>
        <Stack direction="row" spacing={1} alignItems="center">
          <Controller
            name="NounStageCase3"
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value } }) => (
              <>
                <p className="text-muted">{NEGATIVE}</p>
                <AntSwitch
                  inputProps={{ 'aria-label': 'ant design' }}
                  checked={value ?? false}
                  onChange={onChange}
                  id="NounStageCase3"
                />
                <p className="text-muted">{CONFIRMATION}</p>
              </>
            )}
          />
        </Stack>
      </div>
    </div>
  );

export default NounStage