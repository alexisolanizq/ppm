import useToggleState from '@Hooks/common/useToggleState';
import React, { cloneElement } from 'react';
import { useForm } from 'react-hook-form';

const useFilterComponent = ({ component, onFilter, onClear }) => {
  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      status: true
    }
  });

  const [isShow, onToggleShow] = useToggleState();

  const ComponentForm = () =>
    component ? cloneElement(component, { control }) : <div />;

  const handleOnClear = () => {
    reset();
    onToggleShow();
    onClear();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(onFilter)(event);
    onToggleShow();
  };

  return {
    onToggleShow,
    isShow,
    control,
    ComponentForm,
    handleOnClear,
    onSubmit
  };
};

export default useFilterComponent;
