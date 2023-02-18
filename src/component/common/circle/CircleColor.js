import React from 'react';

const CircleColor = ({ size = 12, color }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: size,
      backgroundColor: color
    }}
  />
);

export default CircleColor;
