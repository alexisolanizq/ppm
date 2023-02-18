import React from 'react';

import { Controller } from 'react-hook-form';
import TextError from '../text/TextError';
import FileUpload from './FileUpload';

const FileUploadController = ({ control, name = '', rules = {} }) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <>
        <FileUpload onChange={onChange} value={value} />
        {error && <TextError message={error.message} />}
      </>
    )}
  />
);

export default FileUploadController;
