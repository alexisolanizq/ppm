import React from 'react';

const Span = (props) => <span {...props} />;
const Paraphe = (props) => <p {...props} />;

const Text = ({
  children,
  isPrimary = false,
  isGray = false,
  isBold = false,
  isRegular = false,
  isSpan = false,
  isPrimaryText = false,
  isSecondaryText = false,
  isBig = false,
  isCenter = false,
  isUnderline = false,
  className = '',
  props
}) => {
  const classGray = isGray ? 'color-content' : '';
  const classPrimary = isPrimary ? 'color-primary' : '';
  const classPrimaryText = isPrimaryText ? 'color-primary-text' : '';
  const classSecondaryText = isSecondaryText ? 'color-secondary-text' : '';
  const classBold = isBold ? 'is-bold' : '';
  const classRegular = isRegular ? 'is-regular' : '';
  const classBig = isBig ? 'is-big' : '';
  const classCenter = isCenter ? 'text-center' : '';
  const classUnderline = isUnderline ? 'is-underline' : '';
  const Element = isSpan ? Span : Paraphe;

  return (
    <Element
      className={`text ${classBig} ${classCenter} ${classGray} ${className} ${classPrimaryText} ${classSecondaryText} ${classBold} ${classRegular} ${classPrimary} ${classUnderline}`}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Text;
