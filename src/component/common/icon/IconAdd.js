import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Icon from './Icon';

const IconAdd = ({ className, onClick = () => {}, to }) => (
  <Icon className={className} icon={AddCircleOutlineIcon} onClick={onClick} to={to}/>
);

export default IconAdd;
