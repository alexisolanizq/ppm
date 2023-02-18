import useMultiCheckboxPhases from '@Hooks/common/useMultiCheckboxPhases';
import React from 'react';
import MultiCheckbox from './MultiCheckbox';

const MultiCheckboxPhases= ({ joaId, onChange, value }) => {
  const { options, isLoading } = useMultiCheckboxPhases({ joaId, value });

  if (isLoading) return 'Cargando...';

  return (
    <MultiCheckbox
      onChange={onChange}
      value={value}
      options={options}
    />
  );
};

export default MultiCheckboxPhases;
