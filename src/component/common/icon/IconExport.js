import { COLORS } from '@Const/styles';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import React from 'react';
import Icon from './Icon';

const IconExport = ({ className, onClick = () => {} }) => (
  <Icon className={className} onClick={onClick} icon={FileDownloadIcon} color={COLORS.GRAY} />
);

export default IconExport;
