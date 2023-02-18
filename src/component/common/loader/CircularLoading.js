import { CircularProgress } from '@mui/material';
import React from 'react';

const CircularLoading = ({ size = 40 }) => (
  <CircularProgress size={size} className="circular__loading" />
);

export default CircularLoading;
