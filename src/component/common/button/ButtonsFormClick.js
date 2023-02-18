import React from 'react';
import FlexButtons from '../flex/FlexButtons';
import ButtonCancel from './ButtonCancel';
import ButtonSave from './ButtonSave';

const ButtonsFormClick = ({
  onCancel,
  isLoading = false,
  onClick = () => {}
}) => (
  <FlexButtons>
    <ButtonCancel onClick={onCancel} />
    <ButtonSave isSubmit={false} isLoading={isLoading} onClick={onClick} />
  </FlexButtons>
);

export default ButtonsFormClick;
