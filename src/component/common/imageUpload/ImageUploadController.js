import React from 'react'
import { Controller } from 'react-hook-form'
import TextError from '../text/TextError'
import ImageUpload from './ImageUpload'

const ImageUploadController = ({
  control,
  name = '',
  rules = {},
  source,
  idSource
}) => (
  <Controller name={name}
  control={control}
  rules={rules}
  render={({ field: { onChange, value }, fieldState: { error } }) => (
    <>
      <ImageUpload 
        onChange={onChange}
        value={value}
        source={source}
        idSource={idSource}
      />
      {error && <TextError message={error.message}/>}
    </>
  )}
  
  />
  )

export default ImageUploadController