import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from './Button';

const ButtonNewModal = ({ modulo, onClick = () => {} }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };
  return (
    <Button
      className="buttonNewModal"
      isBorderPrimary
      onMouseDown={handleClick}
      icon={AddCircleOutlineIcon}
    >
      Agregar {modulo}
    </Button>
  );
};

export default ButtonNewModal;
