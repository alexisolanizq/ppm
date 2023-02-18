import React, { useCallback } from 'react';

import { useDropzone } from 'react-dropzone';

import FolderOpenIcon from '@mui/icons-material/FolderOpen';

import Button from '@Component/common/button/Button';

const ButtonAddFiles = ({ addFiles = () => {} }) => {
  const onDropAccepted = useCallback(async (files) => {
    addFiles(files);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted,
    multiple: true
  });

  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      <Button icon={FolderOpenIcon}>Agregar archivos</Button>
    </div>
  );
};

export default ButtonAddFiles;
