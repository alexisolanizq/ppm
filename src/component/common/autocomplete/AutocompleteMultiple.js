import React from 'react';
import { Autocomplete, Checkbox, Paper, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { CheckBoxOutlineBlank } from '@mui/icons-material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const AutocompleteMultiple = ({
  control,
  label = '',
  rules = {},
  name = '',
  options = [],
  optionId = 'id',
  optionName = 'name',
  className = 'mb-4',
  componentAdd = null,
  placeholder,
  ...props
}) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({
      field: { onChange, value, ...field },
      fieldState: { error }
    }) => (
      <Autocomplete
        multiple
        value={value?.[optionId]}
        options={options}
        getOptionLabel={(option) => option[optionName] || ''}
        disableCloseOnSelect
        onChange={(_, data) => {
          onChange(data.map((item) => item[optionId]));
        }}
        sx={{ width: '100%' }}
        id={`combo-box-${name}`}
        renderOption={(params, option, { selected }) => (
          <li key={value?.[optionId]} {...params}>
            <Checkbox
              color="success"
              checked={selected}
              value={value?.[optionId]}
              style={{ marginRight: 8 }}
              icon={<CheckBoxOutlineBlank />}
              checkedIcon={<CheckBoxIcon />}
            />
            {option[optionName]}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...field}
            {...params}
            label={label}
            color="success"
            error={!!error}
            className={className}
            placeholder={placeholder}
            helperText={error && error.message}
          />
        )}
        // eslint-disable-next-line react/no-unstable-nested-components
        PaperComponent={({
          className: classNamePaper,
          children,
          ...propsPaper
        }) => (
          <Paper
            className={`${
              componentAdd ? 'componentAdd' : ''
            } ${classNamePaper}`}
            {...propsPaper}
          >
            {children}
            {componentAdd && componentAdd}
          </Paper>
        )}
        {...props}
      />
    )}
  />
);

export default AutocompleteMultiple;
