import { STATUS_LIST } from '@Const/lists';
import React from 'react';
import SelectController from './SelectController';

const SelectStatus = ({ control, name = 'status', label = 'Estatus' }) => (
    <SelectController
      name={name}
      label={label}
      control={control}
      options={STATUS_LIST}
      optionValue="value"
      optionName="label"
    />
  );

export default SelectStatus;
