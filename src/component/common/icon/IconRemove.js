import Clear from '@mui/icons-material/Clear';
import React from 'react';
import { COLORS } from '@Const/styles';
import Icon from './Icon';

const IconRemove = ({ className, onClick = () => {} }) => (
  <Icon className={className} onClick={onClick} icon={Clear} color={COLORS.GRAY}/>
);

export default IconRemove;
