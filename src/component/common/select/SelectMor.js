import { LIST_MOROSO_CUMPLIDO } from '@Const/lists';
import React from 'react';
import OptionNegative from '../option/OptionNegative';
import OptionPositive from '../option/OptionPositive';
import Select from './Select';

const SelectMor = ({ value, onChange }) => (
  <Select
    value={value}
    size="small"
    optionValue="value"
    options={LIST_MOROSO_CUMPLIDO}
    onChange={onChange}
    render={(item) => (item.id === 1 ? <OptionNegative /> : <OptionPositive />)}
  />
);

export default SelectMor;
