import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LinkIconText from './LinkIconText';

const LinkSeeMore = ({ to = '/' }) => (
  <LinkIconText icon={VisibilityIcon} text="Ver más" to={to} />
);

export default LinkSeeMore;
