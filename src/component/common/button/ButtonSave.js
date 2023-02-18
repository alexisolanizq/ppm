import React from 'react';
import { BUTTON_SAVE } from '@Const/const';
import Button from '@Component/common/button/Button';

const ButtonSave = ({ isLoading = false, isSubmit = true, ...props }) => (
  <Button isLoading={isLoading} isSubmit={isSubmit} {...props}>
    {BUTTON_SAVE}
  </Button>
);

export default ButtonSave;
