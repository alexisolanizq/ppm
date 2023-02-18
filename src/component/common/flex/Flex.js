import React from 'react';

const Flex = ({
  children,
  gap = 0,
  className = '',
  isVertical = false,
  isWrap = false,
  align = 'center',
  justify = 'start',
  ...props
}) => {
  const style = {
    gap
  };
  const classWrap = isWrap ? 'flex-wrap' : '';
  const classOrientation = isVertical
    ? 'flex-column'
    : 'flex-row';
  return (
    <div style={style} className={`d-flex ${className} align-items-${align} justify-content-${justify} ${classOrientation} ${classWrap}`} {...props}>
      {children}
    </div>
  );
};

export default Flex;
