import React from 'react';
import '@Assets/styles/card.css';

const Card = ({ children, isNotBoxShadow = false, className = '' }) => {
  const classNotBoxShadow = isNotBoxShadow ? 'card-not-shadow' : '';
  return <div className={`card custom ${className} ${classNotBoxShadow}`}>{children}</div>;
};

const Header = ({ children, className = '' }) => (
  <div className={`card__header ${className}`}>{children}</div>
);
Card.Header = Header;

const Body = ({ children, className = '' }) => (
  <div className={`card__body ${className}`}>{children}</div>
);
Card.Body = Body;

const Footer = ({ children, justify, className = '' }) => (
  <div
    className={`card__footer ${
      justify ? `justify-content-${justify}` : ''
    } ${className}`}
  >
    {children}
  </div>
);
Card.Footer = Footer;

export default Card;
