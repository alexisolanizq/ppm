import { IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Icon = ({
  icon: IconElement,
  onClick = () => {},
  color = 'primary',
  to = null,
  className = '',
  ...props
}) => {
  if (to) {
    return (
      <Link to={to}>
        <IconButton className={className}>
          <IconElement className={`icon-${color}`} />
        </IconButton>
      </Link>
    );
  }

  return <IconButton {...props} onClick={onClick} className={className}><IconElement className={`icon-${color}`} /></IconButton>
};

export default Icon;
