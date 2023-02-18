import { BUTTON_CANCEL } from '@Const/const';
import React from 'react';
import Button from '@Component/common/button/Button';

const ButtonCancel = ({ onClick = () => {}, ...props }) => (
  <Button isCancel onClick={onClick} {...props}>
    {BUTTON_CANCEL}
  </Button>
);

export default ButtonCancel;
