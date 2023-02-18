import React, { useState, useCallback } from 'react';

import { useDropzone } from 'react-dropzone';

import CloseIcon from '@mui/icons-material/Close';
import UploadFileIcon from '@mui/icons-material/UploadFile';

import Icon from '@Component/common/icon/Icon';
import Text from '@Component/common/text/Text';
import Flex from '@Component/common/flex/Flex';
import Button from '@Component/common/button/Button';
import DivWidth from '@Component/common/div/DivWidth';

import { INVALID_FILE } from '@Const/const';
import { showToastError } from '@Utils/toast';
import { isString } from '@Utils/values';
import { getFileURL } from '@Utils/file';

const SelectedFile = ({ file, removeFile = () => {} }) => {
  if (!file) return null;

  return (
    <>
      <Text isBold>Archivo</Text>
      <Flex gap={5} isVertical>
        <Flex gap={5}>
          <Text isBold>{isString(file) ? 'Archivo actual' : file.name}</Text>
          <Icon icon={CloseIcon} onClick={removeFile} />
        </Flex>
      </Flex>
    </>
  );
};

const FileUpload = ({
  onChange = () => {},
  value = null,
  maxSize = 1024000
}) => {
  const [file, setFile] = useState(value);
  const [fileURL, setFileURL] = useState(getFileURL(value));

  const accept = {
    'image/jpeg': [],
    'image/png': []
  };
  const onDropRejected = () => {
    showToastError(INVALID_FILE);
  };

  const onDropAccepted = useCallback(async (files) => {
    setFile(files[0]);
    onChange(files[0]);
    setFileURL(URL.createObjectURL(files[0]));
  }, []);

  const removeFile = () => {
    setFile(null);
    onChange(null);
    setFileURL(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDropAccepted,
    onDropRejected,
    maxSize,
    accept
  });

  return (
    <Flex align="start" gap={30} className="mt-07">
      <DivWidth px="auto">
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <div className="uploadFile__container">
            {fileURL ? (
              <img src={fileURL} alt="UploadFile" />
            ) : (
              <Flex gap={20} justify="center" isVertical>
                <UploadFileIcon />
                {isDragActive ? (
                  <Text>Suelta el archivo</Text>
                ) : (
                  <Text>Arrastrar archivo para subir</Text>
                )}
              </Flex>
            )}
          </div>
          <Button>Elegir archivo</Button>
        </div>
      </DivWidth>
      <DivWidth px="auto">
        <SelectedFile file={file} removeFile={removeFile} />
      </DivWidth>
    </Flex>
  );
};

export default FileUpload;
