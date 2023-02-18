import React, { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FIELD_REQUIRED } from '@Const/const';
import { createFilterOptions } from '@mui/material/Autocomplete';
import useModal from '@Hooks/common/useModal';

const DEFAULT_VALUES = {
  contactPhones: [{ conNumber: '' }],
  conStatus: true
};

const filter = createFilterOptions();

const useContactForm = ({ row = null }) => {
  const [label, setLabel] = useState([]);
  const [labels, setLabels] = useState([
    { label: 'Gerente' },
    { label: 'Auxiliar' },
    { label: 'Admin' }
  ]);
  const [filteredOptions, setFilteredOptions] = useState(labels);
  const { isOpen, closeModal, openModal } = useModal();

  const {
    watch,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: row ?? DEFAULT_VALUES
  });

  const { fields: phones, append: addPhone } = useFieldArray({
    control,
    name: 'contactPhones'
  });

  const fieldRequired = { required: FIELD_REQUIRED };

  const onChange = (_event, newValue) => {
    if (typeof newValue === 'string') {
      setLabel({
        label: newValue
      });
    } else if (newValue && newValue.inputValue) {
      setLabel({
        label: newValue.inputValue
      });
    } else {
      setLabel(newValue);
    }
  };

  const filterOptions = (options, params) => {
    const filtered = filter(options, params);
    const { inputValue } = params;
    const isExisting = options.some((option) => option.label === inputValue);
    if (inputValue !== '' && !isExisting) {
      filtered.push({
        inputValue,
        label: `"${inputValue}"`
      });
    }

    return filtered;
  };

  const getOptionLabel = (option) => {
    if (typeof option === 'string') {
      return option;
    }
    if (option.inputValue) {
      return option.inputValue;
    }
    return option.label;
  };

  const renderOption = (props, option) => <li {...props}>{option.label}</li>;

  const onSearchLabel = (value) => {
    if (value !== '') {
      setFilteredOptions(
        labels.filter(
          (item) => item.label.toLowerCase() === value.toLowerCase()
        )
      );
    } else {
      setFilteredOptions(labels);
    }
  };

  return {
    watch,
    handleSubmit,
    control,
    errors,
    phones,
    addPhone,
    fieldRequired,

    label,
    labels,
    setLabels,
    onChange,
    renderOption,
    filterOptions,
    getOptionLabel,
    onSearchLabel,
    filteredOptions,

    //* Modal
    isOpen,
    closeModal,
    openModal
  };
};

export default useContactForm;
