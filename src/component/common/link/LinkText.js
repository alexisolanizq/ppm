import React from 'react';

import { Link } from 'react-router-dom';
import Text from '../text/Text';

const LinkText = ({ text, to }) => (
  <Link to={to}>
    <Text isSpan isPrimary>
      {text}
    </Text>
  </Link>
);

export default LinkText;
