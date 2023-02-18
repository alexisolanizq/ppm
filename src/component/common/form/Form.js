import { isEmptyObject } from '@Utils/values';
import React from 'react';
import Loading from '../loader/Loading';
import TextError from '../text/TextError';
import TextRequired from '../text/TextRequired';

const Form = ({
  isLoading = false,
  onSubmit,
  isHideTextRequired = false,
  children,
  errors = {},
  ...props
}) => {
  if (isLoading) return <Loading />;
  return (
    <form onSubmit={onSubmit} {...props}>
      {!isHideTextRequired && <TextRequired />}
      {children}
      {!isEmptyObject(errors) && (
        <TextError
          className="text-center"
          message="Por favor revise algunos campos."
        />
      )}
    </form>
  );
};

export default Form;
