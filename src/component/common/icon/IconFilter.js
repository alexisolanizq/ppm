import React from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { COLORS } from '@Const/styles';
import Icon from './Icon';

const IconFilter = ({ onClick }) => (
  <Icon icon={FilterAltIcon} onClick={onClick} color={COLORS.GRAY} />
);

export default IconFilter;
