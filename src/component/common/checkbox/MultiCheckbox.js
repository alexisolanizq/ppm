import React from 'react';
import Flex from '../flex/Flex';
import Checkbox from './Checkbox';

const MultiCheckbox = ({ options, onChange, value = [] }) => {

  const handleChange = (valueCheckbox, idCheckbox) => {
    if (valueCheckbox) {
      onChange([...value, idCheckbox])
    } else {
      const newValue = [...value]
      onChange(newValue.filter(f => f !== idCheckbox))
    }
  };

  return (
    <Flex isVertical align='start'>
      {options.map((item, index) => (
        <Checkbox
          key={`multiple-checkbox-${index}`}
          onChange={(valueCheckbox) => handleChange(valueCheckbox, item.id)}
          value={value.indexOf(item.id) > -1}
          label={item.label}
        />
      ))}
    </Flex>
  );
};

export default MultiCheckbox;
