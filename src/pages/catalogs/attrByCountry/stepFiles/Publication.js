
import { PUBLICATION, PUBLICATION_QUESTION_A, PUBLICATION_QUESTION_B, PUBLICATION_QUESTION_C, PUBLICATION_QUESTION_D, PUBLICATION_QUESTION_E } from '@Const/catalogs';
import { CONFIRMATION, FIELDS_REQUIRED, FIELD_REQUIRED, NEGATIVE } from '@Const/const';
import { Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

const Publication = ({ AntSwitch, control }) => (
  <div className="my-3">
    <h3 className="fw-bold fs-6">{PUBLICATION}</h3>
    <p className="text-danger py-3 text-small">{FIELDS_REQUIRED}</p>

    <div className="mb-4">
      <p className="green-color mb-2">
        {PUBLICATION_QUESTION_A}
      </p>
      <Stack direction="row" spacing={1} alignItems="center">
        <Controller
          name="PublicationCase1"
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
        name="PublicationCase2"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor='PublicationCase2' className="mb-2 primary-green">
              {PUBLICATION_QUESTION_B}
            </label>
            <TextField
              id="PublicationCase2"
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
        name="PublicationCase3"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor='PublicationCase3' className="mb-2 primary-green">
              {PUBLICATION_QUESTION_C}
            </label>
            <TextField
              id="PublicationCase3"
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
        name="PublicationCase4"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor='PublicationCase4' className="mb-2 primary-green">
              {PUBLICATION_QUESTION_D}
            </label>
            <TextField
              id="PublicationCase4"
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
        name="PublicationCase5"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor='PublicationCase5' className="mb-2 primary-green">
              {PUBLICATION_QUESTION_E}
            </label>
            <TextField
              id="PublicationCase5"
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

export default Publication;
