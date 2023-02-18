import React, { useCallback } from 'react';
import IconElement from '../icon/IconElement';

function Button({
  children,
  isSubmit = false,
  isCancel = false,
  isLoading = false,
  isBorderPrimary = false,
  isCenter = false,
  className = '',
  type = 'button',
  icon,
  ...props
}) {
  const getClassName = useCallback(() => {
    if (isBorderPrimary) return 'is-border-primary'
    if (isCancel) return 'is-content';
    if (isSubmit) return 'is-primary';
    
    return 'is-primary';
  }, []);

  const classNameType = getClassName();
  const classLoading = isLoading ? 'is-loading' : ''
  const typeButton = isSubmit ? 'submit' : type
  const classCenter = isCenter ? 'is-center' : ''

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={typeButton}
      className={`button ${classCenter} ${classNameType} ${classLoading} ${className} rounded`}
      {...props}
    >
      {icon && <IconElement icon={icon} color={isBorderPrimary ? 'primary' : 'white'}/>}
      {children}
    </button>
  );
}

export default Button;
