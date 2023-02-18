import React from 'react';

const DivWidth = ({ porcentage, px = 100, children, ...args }) => {
  const style = {
    width: porcentage ? `${porcentage}%` : px
  };
  return <div style={style} {...args}>{children}</div>;
};

export default DivWidth;
