import React from 'react';
import FlexButtons from '@Component/common/flex/FlexButtons';
import ButtonCancel from '@Component/common/button/ButtonCancel';
import ButtonSave from '@Component/common/button/ButtonSave';

const ButtonsForm = ({ onCancel, isLoading, ...props }) => (
  <FlexButtons>
    <ButtonCancel onClick={onCancel} />
    <ButtonSave isLoading={isLoading} {...props} />
  </FlexButtons>
);

export default ButtonsForm;
