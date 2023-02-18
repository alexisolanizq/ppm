import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import LinkIconText from './LinkIconText';

const LinkEdit = ({ to = '/' }) => (
  <LinkIconText icon={EditIcon} text="Editar usuario" to={to} />
);

export default LinkEdit;
