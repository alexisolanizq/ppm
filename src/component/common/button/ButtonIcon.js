import React from 'react';

const ButtonIcon = ({
  Icon,
  onClick,
  color = 'white',
  className = ''
}) => (
    <button type='button' className={`buttonIcon ${className}`} onClick={onClick}>
      <Icon className={`icon-${color}`} />
    </button>
  );

export default ButtonIcon;
