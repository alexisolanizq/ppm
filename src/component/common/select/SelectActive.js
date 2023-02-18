import { STATUS_LIST } from '@Const/lists';
import React from 'react';
import OptionNegative from '../option/OptionNegative';
import OptionPositive from '../option/OptionPositive';
import Select from './Select';

const SelectActive = ({ value, isLoading, onChange }) => (
  <Select
    value={value}
    size="small"
    isLoading={isLoading}
    optionValue="value"
    options={STATUS_LIST}
    onChange={onChange}
    render={(item) =>
      item.id === 1 ? (
        <OptionPositive text="Activo" />
      ) : (
        <OptionNegative text="Inactivo" />
      )
    }
  />
);

export default SelectActive;
