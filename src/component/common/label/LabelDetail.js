import React, { useState } from 'react';
import { Chip, TextField } from '@mui/material';
import Flex from '@Component/common/flex/Flex';

const InputFilter = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleSearch = () => onSearch(value);

  return (
    <TextField
      placeholder="Buscar..."
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleSearch();
        }
      }}
      variant="standard"
      color="success"
    />
  );
};

const LabelDetail = ({
  labels = [],
  isUpdate = false,
  withSearch = false,
  onSearch = () => {},
  ...props
}) => (
  <>
    {isUpdate || withSearch ? (
      <Flex className="mb-4" justify="center">
        <InputFilter onSearch={onSearch} />
      </Flex>
    ) : null}

    <Flex justify="center" gap={25}>
      {labels.map((label, index) => (
        <Chip key={index} label={label.label} {...props} />
      ))}
    </Flex>
  </>
);

export default LabelDetail;
