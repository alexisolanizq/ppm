import { BADGE_STYLE } from '@Const/styles';
import React from 'react';
import Badge from './Badge';

const BadgeBool = ({
  isValid = false,
  textNegative = 'Inactivo',
  textPositive = 'Activo'
}) => {
  if (!isValid) {
    return <Badge style={BADGE_STYLE.DANGER}>{textNegative}</Badge>;
  }

  return <Badge style={BADGE_STYLE.SUCCESS}>{textPositive}</Badge>;
};

export default BadgeBool;
