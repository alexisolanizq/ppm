import React from 'react';
import { Link } from 'react-router-dom';
import LinkIconText from '../link/LinkIconText';
import Text from '../text/Text';

const Sidebar = ({ className = '', sidebar = [] }) => (
  <ul className={`sidebar ${className}`}>
    {sidebar.map((item, index) => (
      <Item key={`sidebar-item-${index}`} {...item} />
    ))}
  </ul>
);

const Item = ({ icon, to = null, onClick = () => {}, text = '' }) => {
  if (to) {
    if (icon) {
      return (
        <li>
          <LinkIconText icon={icon} to={to} text={text} />
        </li>
      );
    } 
    
    return (
      <li>
        <Link to={to}>{text}</Link>
      </li>
    );
    
  }

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <li onClick={onClick}>
      <Text isPrimary>{text}</Text>
    </li>
  );
};

export default Sidebar;
