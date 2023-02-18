import Edit from '@mui/icons-material/Edit';
import React from 'react';
import Icon from './Icon';

const IconEdit = ({ className, onClick = () => {} }) => (
  <Icon
    className={className}
    onClick={onClick}
    icon={Edit}
  />
);

export default IconEdit;
