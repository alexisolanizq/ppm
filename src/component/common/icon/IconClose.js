import Close from '@mui/icons-material/Close';
import React from 'react';
import Icon from './Icon';

const IconClose = ({ className, onClick = () => {} }) => (
  <Icon
    className={className}
    onClick={onClick}
    icon={Close}
  />
);

export default IconClose;
