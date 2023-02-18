import React from 'react';
import { Link } from 'react-router-dom';
import IconText from '../icon/IconText';

const LinkIconText = ({ icon, text, to = '', props }) => (
  <Link to={to}>
    <IconText icon={icon} text={text} {...props} />
  </Link>
);

export default LinkIconText;
