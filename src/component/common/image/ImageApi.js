import React from 'react';

import useImageApi from '@Hooks/component/useImageApi';

import ImageAvatar from './ImageAvatar';
import CircularLoading from '../loader/CircularLoading';

const ImageApi = ({ source, id, height = 42, width = 42, isShowImageApi = false, ...props }) => {
  const { src, isLoading } = useImageApi({ source, id });

  if (isShowImageApi && isLoading) return <CircularLoading />;

  return <ImageAvatar src={src} height={height} width={width} {...props} />;
};

export default ImageApi;
